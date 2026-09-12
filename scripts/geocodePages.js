/**
 * geocodePages.js
 * ---------------
 * Places the restaurants the atlas never knew about.
 *
 * geocodeRestaurants.js reads restaurants.csv, which holds 12,343 names. The
 * component tree holds 33,950 pages, built up from several sources over the
 * years, so anything that did not arrive by way of that CSV was never put in
 * front of a geocoder at all. Roughly 4,500 restaurants have a page and no pin.
 *
 * This works the other way round: it walks the tree, finds every page with an
 * address and no record in restaurants-geo.json, and places it.
 *
 * Same chain and same manners as the main geocoder — Nominatim at one request a
 * second, the US Census for American addresses, Photon as a fallback — and the
 * same honest marking: a result that is only the centre of a town is flagged
 * approximate rather than passed off as an address.
 *
 * Restart-safe: the geo file is the record of what is done, written every fifty.
 *
 * Usage: node scripts/geocodePages.js [--limit N] [--quiet]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { countrySlugFrom } from './countrySlug.js';
import { USPS, uspsFromZip } from './usZips.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const GEO = path.join(ROOT, 'public', 'data', 'restaurants-geo.json');
const COMPONENTS = path.join(ROOT, 'public', 'components');
const UA = 'TheEpicurean-Geocoder/1.0 (personal restaurant atlas)';
const INTERVAL = 1100;                       // Nominatim asks for one a second
const SAVE_EVERY = 50;

const quiet = process.argv.includes('--quiet');
const limitArg = process.argv.indexOf('--limit');
const LIMIT = limitArg > -1 ? Number(process.argv[limitArg + 1]) : Infinity;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let lastCall = 0;
async function paced(url, headers) {
  const wait = INTERVAL - (Date.now() - lastCall);
  if (wait > 0) await sleep(wait);
  lastCall = Date.now();
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const r = await fetch(url, { headers });
      if (r.status === 429 || r.status >= 500) { await sleep(3000 * (attempt + 1)); continue; }
      if (!r.ok) return null;
      return await r.json();
    } catch { await sleep(1500); }
  }
  return null;
}

const JSON_HEADERS = { 'User-Agent': UA, Accept: 'application/json' };

async function viaNominatim(q, iso) {
  const p = new URLSearchParams({ q, format: 'jsonv2', limit: '1' });
  if (iso) p.set('countrycodes', iso);
  const d = await paced(`https://nominatim.openstreetmap.org/search?${p}`, JSON_HEADERS);
  if (!d || !d.length) return null;
  return { lat: +(+d[0].lat).toFixed(6), lng: +(+d[0].lon).toFixed(6), acc: d[0].type || 'nominatim' };
}

async function viaCensus(q) {
  const p = new URLSearchParams({ address: q, benchmark: 'Public_AR_Current', format: 'json' });
  const d = await paced(`https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?${p}`, JSON_HEADERS);
  const m = d && d.result && d.result.addressMatches && d.result.addressMatches[0];
  if (!m || !m.coordinates) return null;
  return { lat: +m.coordinates.y.toFixed(6), lng: +m.coordinates.x.toFixed(6), acc: 'census' };
}

async function viaPhoton(q) {
  const p = new URLSearchParams({ q, limit: '1', lang: 'en' });
  const d = await paced(`https://photon.komoot.io/api/?${p}`, JSON_HEADERS);
  const f = d && d.features && d.features[0];
  if (!f) return null;
  const [lng, lat] = f.geometry.coordinates;
  return { lat: +lat.toFixed(6), lng: +lng.toFixed(6), acc: 'photon' };
}

/** The street on its own, then the city and country plainly; nothing stripped. */
const simplify = (address, city, country) =>
  [String(address).split(',')[0].trim(), city, country].filter(Boolean).join(', ');

/** The city and country an address ends with, for the last resort. */
function tail(address) {
  const parts = String(address).split(',').map((s) => s.trim()).filter(Boolean);
  return parts.slice(-2).join(', ');
}

// ── What is already placed ──────────────────────────────────────────────────
const geo = JSON.parse(fs.readFileSync(GEO, 'utf8'));
const pinned = new Set(geo.restaurants.filter((r) => r.lng != null && r.p).map((r) => r.p));

// Two directories can hold the same restaurant, so a page whose twin is already
// on the atlas needs nothing. Match the way the rest of the guide does.
const fold = (s) => String(s || '').normalize('NFD').replace(/\p{M}+/gu, '')
  .toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '');
const placedKey = new Set(
  geo.restaurants.filter((r) => r.lng != null).map((r) => `${fold(r.n)}||${fold(r.a)}`)
);

const todo = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { walk(p); continue; }
    if (!e.name.endsWith('.json') || e.name === 'index.json') continue;
    const route = `/${path.relative(COMPONENTS, p).replace(/\.json$/, '')}`;
    if (pinned.has(route)) return void 0 ?? undefined;
  }
})(COMPONENTS);

// The walk above only skips; collect properly.
todo.length = 0;
const seenKey = new Set();
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { walk(p); continue; }
    if (!e.name.endsWith('.json') || e.name === 'index.json') continue;
    const route = `/${path.relative(COMPONENTS, p).replace(/\.json$/, '')}`;
    if (pinned.has(route)) continue;
    let d;
    try { d = JSON.parse(fs.readFileSync(p, 'utf8')); } catch { continue; }
    const name = String(d.restaurantName || d.pageTitle || '').trim();
    const address = String(d.address || '').trim();
    if (!name || address.length < 6) continue;
    const key = `${fold(name)}||${fold(address)}`;
    if (placedKey.has(key) || seenKey.has(key)) continue;   // its twin is already on the map
    seenKey.add(key);
    todo.push({ route, name, address, website: String(d.website || '').trim() });
  }
})(COMPONENTS);

// The country and city come off the end of the address, which is where the tree
// puts them, and the directory says which country when the address does not.
const ISO = { usa: 'us', uk: 'gb', france: 'fr', italy: 'it', spain: 'es', germany: 'de',
  japan: 'jp', china: 'cn', 'hong-kong': 'hk', macau: 'mo', taiwan: 'tw', 'south-korea': 'kr',
  singapore: 'sg', thailand: 'th', vietnam: 'vn', india: 'in', australia: 'au',
  'new-zealand': 'nz', canada: 'ca', mexico: 'mx', brazil: 'br', argentina: 'ar',
  netherlands: 'nl', belgium: 'be', switzerland: 'ch', austria: 'at', denmark: 'dk',
  sweden: 'se', norway: 'no', finland: 'fi', portugal: 'pt', greece: 'gr', poland: 'pl',
  ireland: 'ie', turkey: 'tr', trkiye: 'tr', uae: 'ae', 'saudi-arabia': 'sa', israel: 'il',
  peru: 'pe', chile: 'cl', colombia: 'co', 'south-africa': 'za', morocco: 'ma' };

for (const t of todo) {
  const dirCountry = t.route.split('/')[1];
  t.iso = ISO[dirCountry] || null;
  t.isUS = dirCountry === 'usa';
  const parts = t.address.split(',').map((s) => s.trim()).filter(Boolean);
  t.city = parts.length > 2 ? parts[parts.length - 3] : '';
  t.country = parts[parts.length - 1] || '';
}

const work = todo.slice(0, LIMIT);
if (!quiet) {
  console.log(`\nThe Epicurean · Geocoding the pages the CSV never carried`);
  console.log(`  already on the atlas   ${pinned.size.toLocaleString()}`);
  console.log(`  pages with an address and no pin   ${todo.length.toLocaleString()}`);
  console.log(`  to place now           ${work.length.toLocaleString()}`);
  console.log(`  pace                   ~1/s, so roughly ${Math.round(work.length * INTERVAL / 60000)} minutes at best\n`);
}

// ── Place them ──────────────────────────────────────────────────────────────
let placed = 0; let approx = 0; let missed = 0;
const save = () => {
  geo.count = geo.restaurants.filter((r) => r.lng != null).length;
  fs.writeFileSync(GEO, JSON.stringify(geo));
};

for (const [i, t] of work.entries()) {
  let hit = await viaNominatim(t.address, t.iso);
  if (!hit && t.isUS) hit = await viaCensus(t.address);
  if (!hit) hit = await viaNominatim(simplify(t.address, t.city, t.country), t.iso);
  if (!hit) hit = await viaPhoton(t.address);

  let ap = false;
  if (!hit) {
    // Last resort: the town. Marked approximate, the way the atlas already
    // marks the 1,079 others it could only place at a city centre.
    const t2 = tail(t.address);
    hit = t2 ? await viaNominatim(t2, t.iso) || await viaPhoton(t2) : null;
    if (hit) { hit.acc = 'city'; ap = true; }
  }

  if (!hit) { missed++; continue; }
  const rec = {
    n: t.name, a: t.address, c: t.city, co: t.country,
    w: t.website, lng: hit.lng, lat: hit.lat, acc: hit.acc, p: t.route,
  };
  if (ap) { rec.ap = 1; approx++; }
  geo.restaurants.push(rec);
  placed++;

  if (placed % SAVE_EVERY === 0) save();
  if (!quiet && i % 100 === 0) {
    console.log(`  [${String(i + 1).padStart(5)}/${work.length}] ${ap ? '≈' : '✓'} ${t.name.slice(0, 34)} — ${t.city}`);
  }
}
save();

if (!quiet) {
  console.log(`\n  ✓ ${placed.toLocaleString()} placed (${approx.toLocaleString()} only to a town), ${missed.toLocaleString()} unplaceable`);
  console.log(`  atlas now holds ${geo.count.toLocaleString()} pins\n`);
}
