/**
 * sharpenPins.js
 * --------------
 * Tries again on the pins the atlas draws dimmed.
 *
 * A pin marked `ap` is one the geocoder could only place at the middle of a
 * town. Most of them were made when the chain was weaker than it is now: Photon
 * took no country filter, so its answers could not be trusted and the fallback
 * to the town was often the safest thing left, and the ISO table covered
 * forty-five countries out of a hundred and thirty-five, so everywhere else was
 * asking the whole world. Marais Restaurant in Antananarivo has a street, a
 * building and a floor in its address and was still drawn at the centre of the
 * city, because nothing told the geocoder which country to look in.
 *
 * The dimmed pin is itself useful here: it is the right town, so it makes a good
 * anchor. An answer is only taken when it is near that anchor and is not just
 * another town centre wearing a different name.
 *
 * Restart-safe: the geo file is the record of what is done, written every fifty.
 *
 * Usage: node scripts/sharpenPins.js [--limit N] [--km 40] [--quiet]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ISO } from './countryIso.js';
import { uspsFromZip } from './usZips.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const GEO = path.join(ROOT, 'public', 'data', 'restaurants-geo.json');
const UA = 'TheEpicurean-Geocoder/1.0 (personal restaurant atlas)';
const INTERVAL = 1100;
const SAVE_EVERY = 50;

const quiet = process.argv.includes('--quiet');
const arg = (flag, dflt) => { const i = process.argv.indexOf(flag); return i > -1 ? Number(process.argv[i + 1]) : dflt; };
const LIMIT = arg('--limit', Infinity);
const MAX_KM = arg('--km', 40);

/* An answer of this shape is the town again, not the restaurant. */
const VAGUE = new Set(['city', 'town', 'village', 'hamlet', 'administrative', 'state',
  'country', 'county', 'province', 'region', 'municipality', 'suburb', 'borough',
  'political', 'locality', 'island', 'archipelago', 'postcode', 'yes']);

/* Somewhere a person could be served a meal or a drink. */
const EATS = new Set(['restaurant', 'cafe', 'bar', 'pub', 'fast_food', 'bakery',
  'biergarten', 'food_court', 'ice_cream', 'deli', 'hotel', 'winery', 'nightclub',
  'bistro', 'brewery', 'confectionery', 'guest_house', 'resort', 'tavern']);

const shape = (s) => String(s || '').normalize('NFD').replace(/\p{M}+/gu, '')
  .toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, ' ').trim();
/** One name contains the other, once both are reduced to their letters. */
const namesAgree = (a, b) => {
  const x = shape(a).replace(/ /g, ''), y = shape(b).replace(/ /g, '');
  if (!x || !y) return false;
  return x.includes(y) || y.includes(x);
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let last = 0;
async function paced(url, headers) {
  const wait = INTERVAL - (Date.now() - last);
  if (wait > 0) await sleep(wait);
  last = Date.now();
  try {
    const r = await fetch(url, { headers });
    if (!r.ok) return null;
    return await r.json();
  } catch { return null; }
}

const H = { 'User-Agent': UA, Accept: 'application/json' };

async function viaNominatim(q, iso) {
  const p = new URLSearchParams({ q, format: 'jsonv2', limit: '1' });
  if (iso) p.set('countrycodes', iso);
  const d = await paced(`https://nominatim.openstreetmap.org/search?${p}`, H);
  if (!d || !d.length) return null;
  return { lat: +(+d[0].lat).toFixed(6), lng: +(+d[0].lon).toFixed(6), acc: d[0].type || 'nominatim',
    label: String(d[0].display_name || '').split(',')[0] };
}
async function viaCensus(q) {
  const p = new URLSearchParams({ address: q, benchmark: 'Public_AR_Current', format: 'json' });
  const d = await paced(`https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?${p}`, H);
  const m = d && d.result && d.result.addressMatches && d.result.addressMatches[0];
  if (!m || !m.coordinates) return null;
  return { lat: +m.coordinates.y.toFixed(6), lng: +m.coordinates.x.toFixed(6), acc: 'census' };
}
async function viaPhoton(q, iso) {
  const p = new URLSearchParams({ q, limit: iso ? '8' : '1', lang: 'en' });
  const d = await paced(`https://photon.komoot.io/api/?${p}`, H);
  const feats = (d && d.features) || [];
  const f = iso ? feats.find((x) => String(x.properties?.countrycode || '').toLowerCase() === iso) : feats[0];
  if (!f) return null;
  const [lng, lat] = f.geometry.coordinates;
  return { lat: +lat.toFixed(6), lng: +lng.toFixed(6), acc: f.properties?.osm_value || 'photon',
    label: String(f.properties?.name || '') };
}

const km = (a, b) => {
  const t = (d) => d * Math.PI / 180, R = 6371;
  const dLat = t(b.lat - a.lat), dLng = t(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(t(a.lat)) * Math.cos(t(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};

/** Street, then town and country plainly. Nothing stripped from the street. */
const simplify = (rec) => [String(rec.a || '').split(',')[0].trim(), rec.c, rec.co].filter(Boolean).join(', ');

/**
 * The restaurant's own name and its town.
 *
 * Asking only the address assumes the address is the one the map uses, and often
 * it is not: Marais Restaurant gives its street as Routes des Hydrocarbures
 * while OpenStreetMap files it under the Malagasy name, Làlana Hydrocarbures, so
 * every address query came back empty and the pin stayed at the middle of
 * Antananarivo. Photon has the restaurant itself, by name, two kilometres away.
 * A namesake in another town is kept out by the country filter and by the
 * distance check against the pin we already have.
 */
const byName = (rec) => [String(rec.n || '').trim(), rec.c, rec.co].filter(Boolean).join(', ');

const geo = JSON.parse(fs.readFileSync(GEO, 'utf8'));
const todo = geo.restaurants.filter((r) => r.ap && r.a && r.lng != null).slice(0, LIMIT);

if (!quiet) {
  console.log('\nThe Epicurean · Sharpening the pins the atlas draws dimmed');
  console.log(`  approximate pins       ${geo.restaurants.filter((r) => r.ap).length.toLocaleString()}`);
  console.log(`  to try now             ${todo.length.toLocaleString()}`);
  console.log(`  accepted within        ${MAX_KM} km of the town they are already in`);
  console.log(`  pace                   ~1/s, so at least ${Math.round(todo.length * INTERVAL / 60000)} minutes\n`);
}

let sharpened = 0, kept = 0, i = 0;
const save = () => fs.writeFileSync(GEO, JSON.stringify(geo));

for (const r of todo) {
  i++;
  const slug = String(r.p || '').split('/')[1];
  const iso = ISO[slug] || null;
  const anchor = { lat: r.lat, lng: r.lng };
  const isUS = slug === 'usa';

  const tries = [
    [() => viaNominatim(r.a, iso), false],
    ...(isUS ? [[() => viaCensus(r.a), false]] : []),
    [() => viaNominatim(simplify(r), iso), false],
    [() => viaPhoton(r.a, iso), false],
    [() => viaPhoton(byName(r), iso), true],
    [() => viaNominatim(byName(r), iso), true],
  ];

  let hit = null;
  for (const [attempt, isNameQuery] of tries) {
    const got = await attempt();
    if (!got) continue;
    if (VAGUE.has(String(got.acc).toLowerCase())) continue;   // the town again
    if (km(anchor, got) > MAX_KM) continue;                   // somewhere else entirely
    // Asking by name finds whatever is called that, and in Naples something
    // called A Mano sells computers. A name query only counts when the place
    // found answers to the same name and serves food.
    if (isNameQuery && !(namesAgree(r.n, got.label) && EATS.has(String(got.acc).toLowerCase()))) continue;
    hit = got;
    break;
  }

  if (hit) {
    r.lat = hit.lat; r.lng = hit.lng; r.acc = hit.acc;
    delete r.ap;
    sharpened++;
    if (!quiet) console.log(`  [${String(i).padStart(4)}/${todo.length}] ✓ ${String(r.n).slice(0, 34).padEnd(34)} ${hit.acc}`);
  } else {
    kept++;
  }
  if (i % SAVE_EVERY === 0) save();
}
save();

const left = geo.restaurants.filter((r) => r.ap).length;
console.log(`\n  ✓ ${sharpened} placed properly, ${kept} still only to a town`);
console.log(`  ${left.toLocaleString()} pins remain approximate`);
console.log(`  → ${path.relative(ROOT, GEO)}\n`);
