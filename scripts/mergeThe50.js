/**
 * mergeThe50.js
 * -------------
 * Brings the50.com's restaurants and bars into the guide.
 *
 * Three questions have to be answered per establishment, in order:
 *
 *   1. Is it already here?  Same name in the same city, or same name on the same
 *      website. Those are skipped.
 *   2. Does it share a name with something already here?  Then it is judged: two
 *      pins within a couple of kilometres, or in the same town under a different
 *      spelling, are one place. Cure in New Orleans and Cure in Singapore are not.
 *   3. Otherwise it is new, and gets a page and an atlas record.
 *
 * The judging in step 2 is the part that matters. Matching on names alone is what
 * gave the Sri Lankan Tri a Danish page, so nothing here is decided on a name.
 *
 * Usage: node scripts/mergeThe50.js [--write] [--types Restaurant,Bar] [--quiet]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { countrySlugFrom, slugify } from './countrySlug.js';
import { isExcludedChain } from './excludedChains.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const CSV = path.join(ROOT, 'the50establishments.csv');
const GEO = path.join(ROOT, 'public', 'data', 'restaurants-geo.json');
const COMPONENTS = path.join(ROOT, 'public', 'components');
const OUT = path.join(ROOT, 'reports', 'the50-merge.txt');

const WRITE = process.argv.includes('--write');
const quiet = process.argv.includes('--quiet');
const tArg = process.argv.indexOf('--types');
const TYPES = new Set((tArg > -1 ? process.argv[tArg + 1] : 'Restaurant,Bar').split(','));

/** Two pins this close are one establishment however the city is spelt. */
const SAME_SPOT_KM = 2;
/** Within this, a city written two ways still counts as the same town. */
const SAME_TOWN_KM = 30;

const km = (aLat, aLng, bLat, bLng) => {
  const R = 6371, rad = (x) => (x * Math.PI) / 180;
  const dLat = rad(bLat - aLat), dLng = rad(bLng - aLng);
  const h = Math.sin(dLat / 2) ** 2
    + Math.cos(rad(aLat)) * Math.cos(rad(bLat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};

/**
 * The guide's bar records carry their kind in the name — "Lost & Found (Bar)",
 * "Herbs & Rye (Bar)" — from the dataset they came in on. the50 writes the same
 * bars without it, so the parenthetical has to come off before comparing or 272
 * of them look like new establishments.
 */
const fold = (s) => String(s || '').normalize('NFD').replace(/\p{M}+/gu, '')
  .toLowerCase().replace(/\([^)]*\)\s*$/, '')
  .replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '').replace(/^the/, '');
const host = (u) => { try { return new URL(u).hostname.replace(/^www\./, '').toLowerCase(); } catch { return ''; } };

/** Edit distance, capped — only used to tell Shenzhen from Shenzen. */
function close(a, b) {
  if (a === b) return true;
  if (a.includes(b) || b.includes(a)) return true;
  if (Math.abs(a.length - b.length) > 2) return false;
  const prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let last = prev[0]; prev[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const t = prev[j];
      prev[j] = Math.min(prev[j] + 1, prev[j - 1] + 1, last + (a[i - 1] === b[j - 1] ? 0 : 1));
      last = t;
    }
  }
  return prev[b.length] <= 2;
}

const parseCsv = (text) => {
  const rows = []; let f = [], cur = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) { if (c === '"') { if (text[i + 1] === '"') { cur += '"'; i++; } else q = false; } else cur += c; }
    else if (c === '"') q = true;
    else if (c === ',') { f.push(cur); cur = ''; }
    else if (c === '\n') { f.push(cur); rows.push(f); f = []; cur = ''; }
    else if (c !== '\r') cur += c;
  }
  if (cur || f.length) { f.push(cur); rows.push(f); }
  return rows;
};

const componentName = (n) => {
  const pascal = (s) => String(s || '').replace(/[^a-zA-Z0-9\s]/g, '').split(/\s+/).filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
  return pascal(n) || pascal(String(n || '').normalize('NFD').replace(/\p{M}+/gu, ''));
};

// ── Read both sides ─────────────────────────────────────────────────────────
const rows = parseCsv(fs.readFileSync(CSV, 'utf8'));
const cols = rows[0];
const ix = Object.fromEntries(cols.map((c, i) => [c, i]));
const fifty = rows.slice(1).filter((r) => r.length === cols.length && TYPES.has(r[ix.type]));

const geo = JSON.parse(fs.readFileSync(GEO, 'utf8'));
const existing = geo.restaurants.filter((r) => r.lng != null);

const byName = new Map();
const byNameCity = new Set();
const bySite = new Set();
for (const r of existing) {
  const n = fold(r.n);
  if (!byName.has(n)) byName.set(n, []);
  byName.get(n).push(r);
  byNameCity.add(`${n}|${fold(r.c)}`);
  const h = host(r.w);
  if (h) bySite.add(`${h}|${n}`);
}

const known = new Set(fs.readdirSync(COMPONENTS, { withFileTypes: true })
  .filter((e) => e.isDirectory()).map((e) => e.name));

const skipped = [];   // already in the guide
const judged = [];    // shares a name; decided one way or the other
const fresh = [];     // nothing like it here

for (const r of fifty) {
  const rec = Object.fromEntries(cols.map((c) => [c, r[ix[c]]]));
  const n = fold(rec.name);
  if (isExcludedChain(rec.name, rec.website)) { skipped.push({ rec, why: 'a chain the guide does not carry' }); continue; }
  if (!rec.lat || !rec.lng) { skipped.push({ rec, why: 'no coordinates' }); continue; }

  if (byNameCity.has(`${n}|${fold(rec.city)}`)) { skipped.push({ rec, why: 'same name, same city' }); continue; }
  const h = host(rec.website);
  if (h && bySite.has(`${h}|${n}`)) { skipped.push({ rec, why: 'same name, same website' }); continue; }

  const namesakes = byName.get(n);
  if (namesakes) {
    let best = null, bestKm = Infinity;
    for (const m of namesakes) {
      const d = km(+rec.lat, +rec.lng, m.lat, m.lng);
      if (d < bestKm) { bestKm = d; best = m; }
    }
    const sameSite = h && host(best.w) === h;
    const sameTown = bestKm < SAME_TOWN_KM && close(fold(rec.city), fold(best.c));
    // The city fields can disagree while the addresses agree. Boilermaker is
    // filed under Siolim on one side and Goa on the other, and both addresses
    // say Siolim; the fifty kilometres between the pins is a bad coordinate,
    // not a second bar.
    const town = fold(rec.city);
    const sameAddress = town.length > 3
      && (fold(best.a).includes(town) || fold(rec.address).includes(fold(best.c)));
    const same = bestKm < SAME_SPOT_KM || sameSite || sameTown || sameAddress;
    judged.push({ rec, best, bestKm, same, reason: same
      ? (bestKm < SAME_SPOT_KM ? `${Math.round(bestKm * 1000)}m apart` : sameSite ? 'same website' : 'same town, spelt differently')
      : `${Math.round(bestKm)} km apart, ${best.c}` });
    if (same) continue;
  }
  fresh.push(rec);
}

// ── Where each new one is filed ─────────────────────────────────────────────
// The tree repeats the city at the region level outside the USA, which is the
// shape pagesForAtlasOnly uses, so new pages land beside the existing ones.
function place(rec) {
  const country = countrySlugFrom(rec.country);
  const city = slugify(rec.city);
  if (!country || !city) return null;
  return { country, region: city, city, dir: `${country}/${city}/${city}` };
}

const writes = [];
const unplaceable = [];
const taken = new Set();
for (const rec of fresh) {
  const loc = place(rec);
  const comp = componentName(rec.name);
  if (!loc || !comp) { unplaceable.push(rec); continue; }
  let file = path.join(COMPONENTS, loc.dir, `${comp}.json`);
  let n = 2;
  while (fs.existsSync(file) || taken.has(file)) file = path.join(COMPONENTS, loc.dir, `${comp}${n++}.json`);
  taken.add(file);
  writes.push({ rec, loc, file, route: '/' + path.relative(COMPONENTS, file).replace(/\.json$/, '') });
}

if (WRITE) {
  for (const w of writes) {
    fs.mkdirSync(path.dirname(w.file), { recursive: true });
    // The fields the guide's own pages carry. Hours arrive as the50 phrases
    // them, "Lunch and Dinner: Tue – Sun", which is coarser than the per-day
    // shape the guide uses, so they go in as a note rather than pretending.
    fs.writeFileSync(w.file, JSON.stringify({
      restaurantName: w.rec.name,
      pageTitle: w.rec.name,
      address: w.rec.address || '',
      cuisine: '',
      priceRange: w.rec.price || '',
      phoneNumber: w.rec.phone || '',
      website: w.rec.website || '',
      openingNote: w.rec.hours || '',
      tags: [],
      awards: [],
      bio: w.rec.bio || '',
      source: 'the50.com',
      sourceId: w.rec.uid || '',
    }, null, 2));
    geo.restaurants.push({
      n: w.rec.name,
      a: w.rec.address || '',
      c: w.rec.city || '',
      co: w.rec.country || '',
      w: w.rec.website || '',
      lng: +(+w.rec.lng).toFixed(6),
      lat: +(+w.rec.lat).toFixed(6),
      acc: 'the50',
      p: w.route,
    });
  }
  geo.count = geo.restaurants.filter((r) => r.lng != null).length;
  fs.writeFileSync(GEO, JSON.stringify(geo));
}

// ── Report ──────────────────────────────────────────────────────────────────
const pad = (s, n) => String(s ?? '').padEnd(n).slice(0, n);
const rule = '─'.repeat(100);
const kept = judged.filter((j) => !j.same);
const L = [];
L.push('THE EPICUREAN · MERGING the50.com');
L.push(`Generated ${new Date().toISOString().slice(0, 10)} · types: ${[...TYPES].join(', ')}`);
L.push('');
L.push(`  ${fifty.length} of that type on the50`);
L.push(`  ${skipped.length} already in the guide, or skipped`);
L.push(`  ${judged.length} shared a name with something here — ${judged.length - kept.length} were the same place, ${kept.length} were not`);
L.push(`  ${writes.length} added${WRITE ? '' : ' (nothing written; pass --write)'}`);
if (unplaceable.length) L.push(`  ${unplaceable.length} had no usable city or country`);
L.push('', '', rule);
L.push(`SHARED A NAME, JUDGED THE SAME PLACE  (${judged.length - kept.length})`);
L.push('Not added. The pins agree, or the website does, or the town is one place');
L.push('written two ways.');
L.push(rule);
L.push(pad('NAME', 30) + pad('the50 SAYS', 26) + pad('GUIDE HAS', 26) + 'WHY');
for (const j of judged.filter((x) => x.same)) {
  L.push(pad(j.rec.name, 30) + pad(`${j.rec.city}, ${j.rec.country}`, 26) + pad(`${j.best.c}, ${j.best.co}`, 26) + j.reason);
}
L.push('', '', rule);
L.push(`SHARED A NAME, JUDGED A DIFFERENT PLACE  (${kept.length})`);
L.push('Added. A name in common and nothing else: different town, different');
L.push('website, and far enough apart that they cannot be one restaurant.');
L.push(rule);
L.push(pad('NAME', 30) + pad('ADDED AS', 26) + pad('ALREADY HERE', 26) + 'APART');
for (const j of kept.sort((a, b) => b.bestKm - a.bestKm)) {
  L.push(pad(j.rec.name, 30) + pad(`${j.rec.city}, ${j.rec.country}`, 26) + pad(`${j.best.c}, ${j.best.co}`, 26) + `${Math.round(j.bestKm)} km`);
}
L.push('');
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, L.join('\n'));

if (!quiet) {
  console.log(`\n  ${fifty.length} restaurants and bars on the50`);
  console.log(`    already here or skipped  ${skipped.length}`);
  console.log(`    shared a name            ${judged.length}  →  ${judged.length - kept.length} the same place, ${kept.length} not`);
  console.log(`    ${WRITE ? 'added' : 'would add'}${' '.repeat(WRITE ? 20 : 16)}${writes.length}`);
  if (unplaceable.length) console.log(`    no usable city/country   ${unplaceable.length}`);
  console.log(`  → ${path.relative(ROOT, OUT)}\n`);
}
