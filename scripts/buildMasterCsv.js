/**
 * buildMasterCsv.js
 * -----------------
 * Gathers every restaurant in the guide into one file.
 *
 * Today a restaurant is spread across four stores that nothing reconciles: the
 * detail page under public/components, a legacy .jsx beside it, a terse record
 * in restaurants-geo.json holding the only coordinates, and a row in the scraped
 * restaurants.csv. They are joined by matching names, which is how three
 * restaurants called Tri came to share one page.
 *
 * This is the start of a single record. It reads the detail pages, which are the
 * richest of the four, and writes name, address and website. Coordinates, hours,
 * awards and the rest follow once the shape is settled.
 *
 * A restaurant is its name and its address together. That keeps the two Tris
 * apart while folding the 2,684 that are filed under more than one directory,
 * usually because the tree carries a city under two spellings.
 *
 * Usage: node scripts/buildMasterCsv.js [--quiet]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const COMPONENTS = path.join(ROOT, 'public', 'components');
const OUT = path.join(ROOT, 'masterrestaurants.csv');
const quiet = process.argv.includes('--quiet');

const key = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

/** RFC 4180: quote when the value carries a comma, a quote or a newline. */
const cell = (v) => {
  const s = String(v ?? '').replace(/\r?\n/g, ' ').trim();
  return /[",]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

const rows = new Map();
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { walk(p); continue; }
    if (!e.name.endsWith('.json') || e.name === 'index.json') continue;
    let d;
    try { d = JSON.parse(fs.readFileSync(p, 'utf8')); } catch { continue; }
    const name = String(d.restaurantName || d.pageTitle || '').trim();
    if (!name) continue;
    const guidePath = '/' + path.relative(COMPONENTS, p).replace(/\.json$/, '');
    const k = `${key(name)}||${key(d.address)}`;
    const prev = rows.get(k);
    // Two directories, one restaurant. Keep the fuller record and the shorter
    // path, which is the one the tree treats as canonical.
    if (!prev) {
      rows.set(k, { name, address: String(d.address || '').trim(), website: String(d.website || '').trim(), guidePath });
    } else {
      if (!prev.website && d.website) prev.website = String(d.website).trim();
      if (!prev.address && d.address) prev.address = String(d.address).trim();
      if (guidePath.length < prev.guidePath.length) prev.guidePath = guidePath;
    }
  }
})(COMPONENTS);

const all = [...rows.values()].sort((a, b) =>
  a.name.localeCompare(b.name, 'en') || a.address.localeCompare(b.address, 'en'));

const out = ['name,address,website,guide_path'];
for (const r of all) out.push([r.name, r.address, r.website, r.guidePath].map(cell).join(','));
fs.writeFileSync(OUT, out.join('\n') + '\n');

if (!quiet) {
  const has = (f) => all.filter((r) => r[f]).length;
  console.log(`\n  ${all.length.toLocaleString()} restaurants → ${path.relative(ROOT, OUT)}`);
  console.log(`    with an address  ${has('address').toLocaleString()}`);
  console.log(`    with a website   ${has('website').toLocaleString()}\n`);
}
