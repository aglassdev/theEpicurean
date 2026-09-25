/**
 * nearDuplicates.js
 * -----------------
 * Finds one restaurant written onto two pages under two spellings.
 *
 * duplicateReport.js compares names as strings, so it catches a page filed twice
 * and little else. What it cannot see is the guide's most common duplicate: the
 * same restaurant arriving from two sources that name it differently. Michelin
 * calls it Table, the50 calls it Table by Bruno Verjus, a third list calls it
 * Table - Bruno Verjus, and each spelling built its own page. Every one of those
 * found so far — 1884, Riccitelli, VYN, Hideaway, Home, Yügo — was found by
 * accident, while merging a city.
 *
 * Name similarity on its own is not enough to act on: Paris has an À Table and a
 * Table, Simrishamn has a VYN and a Vyn Food & Wine Bar, and those are different
 * restaurants. So a pair has to agree on a name relation AND on something
 * factual, and the factual part is what makes it safe:
 *
 *   phone     the same number, last nine digits
 *   site      the same domain, ignoring www and the path
 *   address   the same house number and street
 *   distance  pins within 150 metres
 *
 * Two or more of those, with a name relation, is a merge. One is a report.
 *
 * Usage: node scripts/nearDuplicates.js [--json <path>]
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PC = path.join(ROOT, 'public/components');
const GEO = path.join(ROOT, 'public/data/restaurants-geo.json');
const OUT = path.join(ROOT, 'reports/near-duplicates.txt');

/* Words that say what a place is rather than which place it is. Two names that
 * differ only by these are the same name. */
const GENERIC = new Set(['restaurant', 'restaurante', 'ristorante', 'bar', 'bars', 'cafe',
  'café', 'the', 'le', 'la', 'el', 'les', 'los', 'by', 'at', 'and', 'of', 'de', 'du', 'da',
  'di', 'del', 'par', 'chez', 'kitchen', 'bistro', 'bistrot', 'bistró', 'eatery', 'house',
  'room', 'dining', 'grill', 'tavern', 'osteria', 'trattoria', 'brasserie']);

const strip = (s) => String(s || '').normalize('NFD').replace(/\p{M}+/gu, '')
  .replace(/\((?:bar|bars|restaurant|restaurants|cafe|café|pub|bistro|hotel)\)\s*$/i, '')
  .toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, ' ').trim();
const words = (s) => strip(s).split(' ').filter(Boolean);
const meaty = (s) => words(s).filter((w) => !GENERIC.has(w));
const tight = (s) => strip(s).replace(/ /g, '');

const domain = (w) => {
  try { return new URL(String(w)).hostname.replace(/^www\./, '').toLowerCase(); }
  catch { return ''; }
};
const phoneKey = (p) => { const d = String(p || '').replace(/\D/g, ''); return d.length >= 9 ? d.slice(-9) : ''; };
const streetKey = (a) => {
  const first = String(a || '').split(',')[0];
  const t = first.normalize('NFD').replace(/\p{M}+/gu, '').toLowerCase().replace(/[^a-z0-9]+/g, '');
  return t.length >= 6 && /\d/.test(t) ? t : '';
};
const km = (a, b) => {
  if (![a?.lat, a?.lng, b?.lat, b?.lng].every(Number.isFinite)) return Infinity;
  const t = (d) => d * Math.PI / 180, R = 6371;
  const dLat = t(b.lat - a.lat), dLng = t(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(t(a.lat)) * Math.cos(t(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};

/** How two names are related, or null when they are not. */
function relation(a, b) {
  const A = tight(a), B = tight(b);
  if (!A || !B) return null;
  if (A === B) return 'the same name';
  const ma = meaty(a), mb = meaty(b);
  if (!ma.length || !mb.length) return null;
  const sa = new Set(ma), sb = new Set(mb);
  const shared = ma.filter((w) => sb.has(w));
  // Riccitelli Bistró / Bistró Riccitelli
  if (ma.length === mb.length && shared.length === ma.length) return 'the same words, reordered';
  // 1884 / 1884 Francis Mallmann · Table / Table by Bruno Verjus
  const sub = shared.length === Math.min(sa.size, sb.size) && sa.size !== sb.size;
  if (sub) return 'one name inside the other';
  // VYN / Vyn Restaurant, where the extra words were all generic
  if (A.startsWith(B) || B.startsWith(A)) return 'one name begins the other';
  return null;
}

const pages = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { walk(p); continue; }
    if (!e.name.endsWith('.json') || e.name === 'index.json') continue;
    let d; try { d = JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return; }
    const route = `/${path.relative(PC, p).replace(/\.json$/, '')}`;
    pages.push({
      route, city: route.slice(0, route.lastIndexOf('/')),
      name: String(d.restaurantName || d.pageTitle || '').trim(),
      address: d.address || '', site: domain(d.website), phone: phoneKey(d.phoneNumber),
      street: streetKey(d.address), bytes: JSON.stringify(d).length,
      bioText: String(d.bio || '').trim(), bio: String(d.bio || '').length,
      awards: (d.awards || []).length,
      jsx: fs.existsSync(path.join(ROOT, 'src', route.slice(1) + '.jsx')),
    });
  }
})(PC);

const geo = JSON.parse(fs.readFileSync(GEO, 'utf8')).restaurants;
const at = new Map(geo.filter((r) => r.p).map((r) => [r.p, { lat: r.lat, lng: r.lng }]));
for (const p of pages) p.pin = at.get(p.route) || null;

const byCity = new Map();
for (const p of pages) {
  if (!p.name) continue;
  if (!byCity.has(p.city)) byCity.set(p.city, []);
  byCity.get(p.city).push(p);
}

const pairs = [];
for (const group of byCity.values()) {
  for (let i = 0; i < group.length; i++) for (let j = i + 1; j < group.length; j++) {
    const a = group[i], b = group[j];
    const rel = relation(a.name, b.name);
    if (!rel) continue;
    const agree = [];
    if (a.phone && a.phone === b.phone) agree.push('phone');
    if (a.site && a.site === b.site) agree.push('site');
    if (a.street && a.street === b.street) agree.push('street');
    const d = km(a.pin, b.pin);
    if (d <= 0.15) agree.push('150m');
    if (!agree.length) continue;
    /*
     * A name relation and a shared telephone is not enough to delete a page.
     * Austria and Germany are full of houses that run two rooms under one roof
     * and one number: Thaller keeps a Restaurant and a Gasthaus, Döllerer a
     * Wirtshaus and a Restaurant, VYN a two-star dining room and a Bib Gourmand
     * wine bar. Those share every fact on this list and are not the same
     * restaurant.
     *
     * What separates them is the writing. A second dining room has its own
     * description because someone visited it and wrote one. A duplicate has
     * either the identical text, having come from the same source twice, or
     * nothing at all, being a stub some other list contributed.
     */
    const sameWriting = a.bioText && a.bioText === b.bioText;
    const oneIsAStub = (!a.bio && !a.awards) || (!b.bio && !b.awards);
    const verdict = sameWriting ? 'the same description word for word'
      : oneIsAStub ? 'one side is a stub'
      : null;
    pairs.push({ rel, agree, d, a, b, verdict });
  }
}
pairs.sort((x, y) => y.agree.length - x.agree.length || x.a.city.localeCompare(y.a.city));

const sure = pairs.filter((p) => p.agree.length >= 2 && p.verdict);
const rooms = pairs.filter((p) => p.agree.length >= 2 && !p.verdict);
const maybe = pairs.filter((p) => p.agree.length === 1);

const lines = [`THE EPICUREAN · ONE RESTAURANT, TWO SPELLINGS`, `Generated ${new Date().toISOString().slice(0, 10)}`, ''];
lines.push(`${sure.length} are one restaurant twice: same facts, and either the same words or a stub`);
lines.push(`${rooms.length} share the facts but each has its own description, so probably two rooms in one house`);
lines.push(`${maybe.length} agree on the name and a single fact\n`);
for (const [label, list] of [['ONE RESTAURANT, TWO PAGES', sure], ['PROBABLY TWO ROOMS UNDER ONE ROOF', rooms], ['ONE FACT ONLY', maybe]]) {
  lines.push(`${'─'.repeat(92)}\n${label}\n`);
  for (const p of list) {
    lines.push(`${p.a.city}   ${p.rel}, agreeing on ${p.agree.join(' + ')}${Number.isFinite(p.d) ? `, ${Math.round(p.d * 1000)}m apart` : ''}${p.verdict ? `  —  ${p.verdict}` : ''}`);
    for (const s of [p.a, p.b].sort((x, y) => y.bytes - x.bytes))
      lines.push(`    "${s.name}"  ${String(s.bytes).padStart(5)}b  bio ${String(s.bio).padStart(4)}  awards ${s.awards}  ${s.jsx ? 'jsx' : '   '}  ${s.route.split('/').pop()}`);
    lines.push('');
  }
}
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, lines.join('\n'));

console.log(`\n  ${pages.length.toLocaleString()} pages compared within their own city`);
console.log(`  ${sure.length} are one restaurant on two pages`);
console.log(`  ${rooms.length} look like two rooms in one house, left alone`);
console.log(`  ${maybe.length} agree on the name and a single fact`);
const tally = {};
for (const p of sure) tally[p.rel] = (tally[p.rel] || 0) + 1;
for (const [k, v] of Object.entries(tally).sort((a, b) => b[1] - a[1])) console.log(`     ${String(v).padStart(4)}  ${k}`);
console.log(`  → ${path.relative(ROOT, OUT)}\n`);

const j = process.argv.indexOf('--json');
if (j > -1 && process.argv[j + 1]) fs.writeFileSync(process.argv[j + 1], JSON.stringify({ sure, rooms, maybe }, null, 1));
