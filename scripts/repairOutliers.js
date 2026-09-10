/**
 * repairOutliers.js
 * -----------------
 * Finds pins that fell a long way from the city they claim, and tries to place
 * them again.
 *
 * Fogón Asado is the case that prompted it: "Gorriti 3780, C1172 Cdad. Autónoma
 * de Buenos Aires, Argentina" defeated the primary geocoder, so the chain fell
 * through to Photon, which answered confidently with a spot in Patagonia 1,685km
 * away. Nothing checked the answer against the city on the record.
 *
 * A city's true position is the median of its own pins, which is robust to a few
 * bad ones. Anything far from that median is suspect, and gets asked again with
 * the address simplified — postcode and administrative filler removed, the city
 * and country stated plainly. That alone resolves Fogón Asado to the restaurant
 * itself on the first try.
 *
 * A new answer is only taken if it lands closer to the city than the old one, so
 * the repair cannot make a pin worse.
 *
 * Usage: node scripts/repairOutliers.js [--fix] [--km 60] [--quiet]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const GEO = path.join(ROOT, 'public', 'data', 'restaurants-geo.json');
const OUT = path.join(ROOT, 'reports', 'misplaced-pins.txt');
const FIX = process.argv.includes('--fix');
const quiet = process.argv.includes('--quiet');
const kmArg = process.argv.indexOf('--km');
const LIMIT_KM = kmArg > -1 ? Number(process.argv[kmArg + 1]) : 60;
const MIN_PINS = 4;          // below this a median says nothing
const UA = 'TheEpicurean-Geocoder/1.0 (personal restaurant atlas)';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const km = (aLat, aLng, bLat, bLng) => {
  const R = 6371, rad = (x) => (x * Math.PI) / 180;
  const dLat = rad(bLat - aLat), dLng = rad(bLng - aLng);
  const h = Math.sin(dLat / 2) ** 2
    + Math.cos(rad(aLat)) * Math.cos(rad(bLat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};
const median = (xs) => [...xs].sort((a, b) => a - b)[Math.floor(xs.length / 2)];

/**
 * The street on its own, then the city and country said plainly.
 *
 * The postcode and the administrative wording that defeats a geocoder live in
 * the later comma fields — "Gorriti 3780, C1172 Cdad. Autónoma de Buenos Aires,
 * Argentina" — so taking the first field and restating the city is enough.
 *
 * Nothing is stripped from the street itself. An earlier version pulled out
 * four-digit numbers to catch postcodes and took the house number with them,
 * turning Gorriti 3780 into Gorriti and landing the pin in a suburb 34 km out.
 */
function simplify(rec) {
  const street = String(rec.a || '').split(',')[0].trim();
  if (!street) return '';
  return [street, rec.c, rec.co].filter(Boolean).join(', ');
}

async function geocode(q) {
  const p = new URLSearchParams({ q, format: 'jsonv2', limit: '1' });
  try {
    const r = await fetch(`https://nominatim.openstreetmap.org/search?${p}`,
      { headers: { 'User-Agent': UA, Accept: 'application/json' } });
    if (!r.ok) return null;
    const d = await r.json();
    if (!d.length) return null;
    return { lat: +(+d[0].lat).toFixed(6), lng: +(+d[0].lon).toFixed(6), acc: d[0].type || 'nominatim' };
  } catch { return null; }
}

const geo = JSON.parse(fs.readFileSync(GEO, 'utf8'));
const placed = (geo.restaurants || []).filter((r) => r.lng != null);

const byCity = new Map();
for (const r of placed) {
  const k = `${r.c || ''}||${r.co || ''}`;
  if (!byCity.has(k)) byCity.set(k, []);
  byCity.get(k).push(r);
}

const suspect = [];
for (const group of byCity.values()) {
  if (group.length < MIN_PINS) continue;
  const cLat = median(group.map((r) => r.lat));
  const cLng = median(group.map((r) => r.lng));
  for (const r of group) {
    const d = km(r.lat, r.lng, cLat, cLng);
    if (d > LIMIT_KM) suspect.push({ r, away: d, cLat, cLng });
  }
}
suspect.sort((a, b) => b.away - a.away);

let moved = 0;
const results = [];
if (FIX) {
  for (const s of suspect) {
    await sleep(1200);                                   // Nominatim asks for 1/s
    const q = simplify(s.r);
    const hit = q ? await geocode(q) : null;
    const after = hit ? km(hit.lat, hit.lng, s.cLat, s.cLng) : Infinity;
    // Only take an answer that is nearer the city than what we already had.
    if (hit && after < s.away) {
      Object.assign(s.r, { lat: hit.lat, lng: hit.lng, acc: hit.acc });
      delete s.r.ap;
      moved++;
      results.push({ ...s, after, q });
    } else {
      results.push({ ...s, after: null, q });
    }
  }
  geo.count = geo.restaurants.filter((r) => r.lng != null).length;
  fs.writeFileSync(GEO, JSON.stringify(geo));
}

const pad = (s, n) => String(s ?? '').padEnd(n).slice(0, n);
const L = [];
L.push('THE EPICUREAN · PINS FAR FROM THE CITY THEY CLAIM');
L.push(`Generated ${new Date().toISOString().slice(0, 10)}`);
L.push('');
L.push(`A city's position is taken as the median of its own pins, which a few bad ones`);
L.push(`cannot drag. These sit more than ${LIMIT_KM} km from that, in cities holding at least`);
L.push(`${MIN_PINS} pins. Some are the record's fault rather than the geocoder's: the Inn at`);
L.push(`Little Washington really is 101 km from Washington D.C, because it is in`);
L.push(`Washington, Virginia and the record says otherwise.`);
L.push('');
L.push(`  ${suspect.length} suspect of ${placed.length.toLocaleString()} pins`);
if (FIX) L.push(`  ${moved} moved closer, ${suspect.length - moved} left where they were`);
L.push('', '─'.repeat(100));
L.push(pad('RESTAURANT', 32) + pad('CITY', 20) + pad('WAS', 9) + (FIX ? pad('NOW', 9) : '') + 'SOURCE');
L.push('─'.repeat(100));
for (const s of (FIX ? results : suspect)) {
  L.push(pad(s.r.n, 32) + pad(s.r.c, 20) + pad(`${Math.round(s.away)} km`, 9)
    + (FIX ? pad(s.after == null ? '—' : `${Math.round(s.after)} km`, 9) : '') + (s.r.acc || '-'));
}
L.push('');
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, L.join('\n'));

if (!quiet) {
  console.log(`\n  ${suspect.length} pins more than ${LIMIT_KM} km from their city`);
  if (FIX) console.log(`  ${moved} moved closer, ${suspect.length - moved} unchanged`);
  console.log(`  → ${path.relative(ROOT, OUT)}\n`);
}
