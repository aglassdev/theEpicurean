/**
 * mergeNearDuplicates.js
 * ----------------------
 * Folds the pairs nearDuplicates.js is confident about.
 *
 * Only the pairs that agree on two or more facts AND either carry the identical
 * description or have a stub on one side. Anything where both sides were written
 * about separately is left alone, because that is how a house with two dining
 * rooms looks and merging those loses a restaurant.
 *
 * Pairs are joined into clusters first: Döllerer was three pages, Table was
 * three, and folding them a pair at a time would leave the third orphaned.
 *
 * The fullest page survives — most awards, then a source file, then size — and
 * takes any field the others hold at greater length, plus their names as
 * aliases so a source spelling it their way still reaches the page. Where the
 * survivor has a jsx, the changes are written there too, since a build rewrites
 * the json from it.
 *
 * Usage: node scripts/mergeNearDuplicates.js [--dry] [--limit N]
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PC = path.join(ROOT, 'public/components');
const SRC = path.join(ROOT, 'src');
const GEO = path.join(ROOT, 'public/data/restaurants-geo.json');
const DRY = process.argv.includes('--dry');
const li = process.argv.indexOf('--limit');
const LIMIT = li > -1 ? Number(process.argv[li + 1]) : Infinity;

const feed = process.argv[process.argv.indexOf('--from') + 1];
const { sure } = JSON.parse(fs.readFileSync(feed, 'utf8'));

// ── Clusters ────────────────────────────────────────────────────────────────
const parent = new Map();
const find = (x) => { while (parent.get(x) !== x) { parent.set(x, parent.get(parent.get(x))); x = parent.get(x); } return x; };
const union = (x, y) => { for (const k of [x, y]) if (!parent.has(k)) parent.set(k, k); parent.set(find(x), find(y)); };
for (const p of sure) union(p.a.route, p.b.route);
const clusters = new Map();
for (const r of parent.keys()) {
  const k = find(r);
  if (!clusters.has(k)) clusters.set(k, []);
  clusters.get(k).push(r);
}

const CARRY = ['address', 'bio', 'phoneNumber', 'website', 'cuisine', 'priceRange', 'googleMapsEmbed', 'openingNote'];
const jsxOf = (route) => path.join(SRC, route.slice(1) + '.jsx');
const jsonOf = (route) => path.join(PC, route.slice(1) + '.json');

const geo = JSON.parse(fs.readFileSync(GEO, 'utf8'));
const pinFor = new Map(geo.restaurants.filter((r) => r.p).map((r) => [r.p, r]));

let merged = 0, removed = 0, carried = 0;
const done = [];
for (const routes of clusters.values()) {
  if (routes.length < 2 || done.length >= LIMIT) continue;
  const pages = routes.map((r) => ({ route: r, j: JSON.parse(fs.readFileSync(jsonOf(r), 'utf8')), jsx: fs.existsSync(jsxOf(r)) }))
    .filter((p) => p.j);
  pages.sort((x, y) =>
    (y.j.awards || []).length - (x.j.awards || []).length
    || Number(y.jsx) - Number(x.jsx)
    || JSON.stringify(y.j).length - JSON.stringify(x.j).length);
  const [keep, ...drop] = pages;

  const took = [];
  for (const d of drop) {
    for (const k of CARRY)
      if (String(d.j[k] || '').length > String(keep.j[k] || '').length) { keep.j[k] = d.j[k]; took.push(k); }
    if ((d.j.awards || []).length && !(keep.j.awards || []).some((a) => (d.j.awards || []).some((b) => a.name === b.name)))
      { keep.j.awards = [...(keep.j.awards || []), ...d.j.awards]; took.push('awards'); }
  }
  /*
   * The fullest page is not always the one with the restaurant's name on it. A
   * source that adds the chef, the room or the genre makes a longer string and
   * often a bigger page with it, so choosing by size alone leaves the guide
   * saying "Gourmetrestaurant Fuggerstube" where the sign outside says
   * Fuggerstube. Table is the case that settles it: Michelin has Table, other
   * lists have Table by Bruno Verjus and Table - Bruno Verjus, and the
   * restaurant is called Table. The shortest name in the cluster is the name;
   * the rest become aliases, so a source using one still reaches the page.
   */
  const names = pages.map((p) => String(p.j.restaurantName || '').trim()).filter(Boolean);
  const shortest = names.slice().sort((x, y) => x.length - y.length || x.localeCompare(y))[0];
  const renamed = shortest && shortest !== keep.j.restaurantName ? keep.j.restaurantName : null;
  if (shortest) { keep.j.restaurantName = shortest; if (keep.j.pageTitle) keep.j.pageTitle = shortest; }

  const aliases = [...new Set(names.filter((n) => n !== keep.j.restaurantName))];
  if (aliases.length) keep.j.aliases = [...new Set([...(keep.j.aliases || []), ...aliases])];

  done.push({ keep: keep.route, keepName: keep.j.restaurantName, renamed, drop: drop.map((d) => d.route), took: [...new Set(took)], aliases });
  if (DRY) continue;

  fs.writeFileSync(jsonOf(keep.route), JSON.stringify(keep.j, null, 2));
  if (keep.jsx) {
    let s = fs.readFileSync(jsxOf(keep.route), 'utf8');
    if (renamed) {
      s = s.replace(/restaurantName="[^"]*"/, `restaurantName=${JSON.stringify(keep.j.restaurantName)}`);
      s = s.replace(/pageTitle="[^"]*"/, `pageTitle=${JSON.stringify(keep.j.restaurantName)}`);
    }
    for (const k of new Set(took)) {
      if (k === 'awards') continue;                       // arrays are not worth a regex
      const v = String(keep.j[k] ?? '');
      const rx = new RegExp(`(\\n\\s*)${k}=(?:"[^"]*"|\\{[^}]*\\})`);
      if (rx.test(s)) s = s.replace(rx, `$1${k}=${JSON.stringify(v)}`);
    }
    if (aliases.length && !/\n\s*aliases=/.test(s))
      s = s.replace(/(\n\s*)tags=/, `$1aliases={${JSON.stringify(aliases)}}$1tags=`);
    fs.writeFileSync(jsxOf(keep.route), s);
  }
  for (const d of drop) {
    for (const p of [jsonOf(d.route), jsxOf(d.route)]) if (fs.existsSync(p)) fs.rmSync(p);
    removed++;
  }
  if (took.length) carried++;
  merged++;
}

if (!DRY) {
  const before = geo.restaurants.length;
  const dead = new Set(done.flatMap((d) => d.drop));
  geo.restaurants = geo.restaurants.filter((r) => !(r.p && dead.has(r.p)));
  geo.count = geo.restaurants.length;
  fs.writeFileSync(GEO, JSON.stringify(geo));
  console.log(`\n  pins ${before.toLocaleString()} → ${geo.restaurants.length.toLocaleString()}`);
}

console.log(`\n  ${clusters.size ? done.length : 0} clusters folded, ${removed} pages removed, ${carried} took a field across`);
for (const d of done.slice(0, 14))
  console.log(`     ${d.keepName.slice(0, 34).padEnd(34)} ← ${d.drop.length} more${d.took.length ? `, took ${d.took.join(', ')}` : ''}`);
if (done.length > 14) console.log(`     … and ${done.length - 14} more`);
