/**
 * duplicateReport.js
 * ------------------
 * Finds restaurants the guide is holding more than once, and pages it is holding
 * for more than one restaurant.
 *
 * PAZ in Tórshavn is the shape of the first: two atlas records, "14 Doktara
 * Jakobsens gøta" and "Doktara Jakobsens gøta 14-16", seventeen metres apart,
 * both linked to the same page. The geocoder keys on name plus address, so a
 * street written two ways becomes two pins.
 *
 * Al Gatto Nero is the shape of the second: one in Torino, one in Burano, 374km
 * apart, both linked to the Burano page because the linker matches on name and
 * they are both in Italy.
 *
 *   npm run duplicates          write the report
 *   npm run duplicates -- --fix merge the first kind; the second needs judgement
 *
 * Usage: node scripts/duplicateReport.js [--fix] [--quiet]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const GEO = path.join(ROOT, 'public', 'data', 'restaurants-geo.json');
const OUT = path.join(ROOT, 'reports', 'duplicate-restaurants.txt');
const FIX = process.argv.includes('--fix');
const quiet = process.argv.includes('--quiet');

/** Two pins closer than this are the same address written two ways. */
const SAME_PLACE_KM = 1;

const km = (aLat, aLng, bLat, bLng) => {
  const R = 6371, rad = (x) => (x * Math.PI) / 180;
  const dLat = rad(bLat - aLat), dLng = rad(bLng - aLng);
  const h = Math.sin(dLat / 2) ** 2
    + Math.cos(rad(aLat)) * Math.cos(rad(bLat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};

const spread = (group) => {
  let max = 0;
  for (let i = 0; i < group.length; i++) {
    for (let j = i + 1; j < group.length; j++) {
      max = Math.max(max, km(group[i].lat, group[i].lng, group[j].lat, group[j].lng));
    }
  }
  return max;
};

/** How much a record says. The fullest of a duplicate set is the one to keep. */
const weight = (r) =>
  (r.a ? r.a.length : 0) + (r.w ? 20 : 0) + (r.acc && r.acc !== 'photon' ? 10 : 0) + (r.ap ? -50 : 0);

const geo = JSON.parse(fs.readFileSync(GEO, 'utf8'));
const placed = (geo.restaurants || []).filter((r) => r.lng != null);

const byPage = new Map();
for (const r of placed) {
  if (!r.p) continue;
  if (!byPage.has(r.p)) byPage.set(r.p, []);
  byPage.get(r.p).push(r);
}

/** Fold case, accents and punctuation away: "Park’s BBQ" and "Parks BBQ" match. */
const fold = (s) => String(s || '').normalize('NFD').replace(/\p{M}+/gu, '')
  .toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

/**
 * A name without its city on the end and without a leading article: "Hawksmoor
 * London" is Hawksmoor, and "The Charlton Arms" is the Charlton Arms.
 */
const bareName = (r) => {
  const c = fold(r.c);
  let n = fold(r.n).replace(/^the /, '');
  if (c && n.endsWith(' ' + c)) n = n.slice(0, -c.length - 1);
  return n.replace(/\s+/g, '');
};

/** One city written two ways: "Washington" and "Washington D.C". */
const sameCity = (a, b) => {
  const x = fold(a.c).replace(/\s+/g, ''), y = fold(b.c).replace(/\s+/g, '');
  return !!x && !!y && (x === y || x.startsWith(y) || y.startsWith(x));
};

/**
 * Two records are one restaurant if they sit together, or if they carry the same
 * name in the same town. The second test matters because a duplicate often has
 * one loose coordinate: 3 Fils is recorded twice in Dubai, sixteen kilometres
 * apart, because one of the two was only ever placed at the city centre.
 *
 * Betsy is the counter-example the test has to survive. Washington and Los
 * Angeles are not the same town, so those stay two restaurants.
 */
const oneRestaurant = (group) =>
  spread(group) < SAME_PLACE_KM
  || group.every((r) => bareName(r) === bareName(group[0]) && sameCity(r, group[0]));

const sameThing = [];   // one restaurant, several records
const differentThings = []; // several restaurants, one page
for (const [page, group] of byPage) {
  if (group.length < 2) continue;
  (oneRestaurant(group) ? sameThing : differentThings).push({ page, group, spread: spread(group) });
}

const surplus = sameThing.reduce((t, d) => t + d.group.length - 1, 0);
const stranded = differentThings.reduce((t, d) => t + d.group.length - 1, 0);

// ── Report ──────────────────────────────────────────────────────────────────
const pad = (s, n) => String(s ?? '').padEnd(n).slice(0, n);
const rule = '─'.repeat(100);
const L = [];
L.push('THE EPICUREAN · DUPLICATE CHECK');
L.push(`Generated ${new Date().toISOString().slice(0, 10)} from public/data/restaurants-geo.json`);
L.push('');
L.push(`  ${placed.length.toLocaleString()} atlas pins across ${byPage.size.toLocaleString()} pages`);
L.push('');
L.push(`  ${sameThing.length} pages hold the same restaurant more than once  (${surplus} surplus pins)`);
L.push(`  ${differentThings.length} pages are shared by restaurants that are not the same  (${stranded} without a page of their own)`);
L.push('', '');
L.push(rule);
L.push(`ONE RESTAURANT, SEVERAL RECORDS  (${sameThing.length})`);
L.push('The pins sit within a kilometre of each other, so this is one place whose');
L.push('address was written two ways. Safe to merge; --fix does it.');
L.push(rule);
L.push(pad('RESTAURANT', 34) + pad('APART', 8) + 'THE ADDRESSES IT IS FILED UNDER');
L.push('');
for (const d of sameThing.sort((a, b) => a.group[0].n.localeCompare(b.group[0].n))) {
  L.push(pad(d.group[0].n, 34) + pad(`${Math.round(d.spread * 1000)}m`, 8) + d.group.map((r) => r.a || '(no address)').join('  ·  '));
}
L.push('', '');
L.push(rule);
L.push(`SEVERAL RESTAURANTS, ONE PAGE  (${differentThings.length})`);
L.push('These are different places sharing a name inside one country, so the linker');
L.push('gave them all the first page it found. Each needs its own; --fix leaves them.');
L.push(rule);
L.push(pad('PAGE', 52) + pad('APART', 9) + 'THE RESTAURANTS ON IT');
L.push('');
for (const d of differentThings.sort((a, b) => b.spread - a.spread)) {
  L.push(pad(d.page, 52) + pad(`${Math.round(d.spread)} km`, 9)
    + d.group.map((r) => `${r.n} (${r.c || '?'})`).join('  ·  '));
}
L.push('');

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, L.join('\n'));

// ── Fix both kinds ──────────────────────────────────────────────────────────
// The duplicates are dropped outright. The wrongly-shared pages keep whichever
// record belongs there and let go of the rest, which pagesForAtlasOnly then
// gives pages of their own. Unlinking is safe: a record with no page is a
// restaurant waiting for one, which is the state the generator looks for.
const citySlug = (s) => String(s || '').replace(/[^a-zA-Z0-9\s]/g, '')
  .split(/\s+/).filter(Boolean).join('').toLowerCase();

if (FIX) {
  const drop = new Set();
  for (const d of sameThing) {
    const keep = [...d.group].sort((a, b) => weight(b) - weight(a))[0];
    for (const r of d.group) if (r !== keep) drop.add(r);
  }

  let unlinked = 0;
  for (const d of differentThings) {
    const dir = d.page.split('/').slice(-2, -1)[0].replace(/[^a-z0-9]/g, '');
    // The one whose own city names this directory belongs here. Failing that,
    // the fullest record stays and the others go looking for their own page.
    const keep = d.group.find((r) => citySlug(r.c) === dir)
      || [...d.group].sort((a, b) => weight(b) - weight(a))[0];
    for (const r of d.group) if (r !== keep) { delete r.p; unlinked++; }
  }

  geo.restaurants = geo.restaurants.filter((r) => !drop.has(r));
  geo.count = geo.restaurants.filter((r) => r.lng != null).length;
  fs.writeFileSync(GEO, JSON.stringify(geo));
  if (!quiet) console.log(`  unlinked from a page that was not theirs: ${unlinked}`);
}

if (!quiet) {
  console.log(`\n  ${sameThing.length} pages hold one restaurant twice or more  (${surplus} surplus pins)`);
  console.log(`  ${differentThings.length} pages are shared by restaurants that are not the same  (${stranded} stranded)`);
  if (FIX) console.log(`  merged: ${surplus} records removed, ${geo.count.toLocaleString()} pins left`);
  console.log(`  → ${path.relative(ROOT, OUT)}\n`);
}
