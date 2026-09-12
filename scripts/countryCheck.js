/**
 * countryCheck.js — does every pin actually fall inside the country it claims?
 *
 * The geocoders answer with whatever they can find, and when a query is thin
 * they will happily place "Monaco, France" in New Caledonia, which is French
 * and is therefore not, to a machine, an absurd answer. Distance from the rest
 * of the country catches nothing useful, because Mendoza really is a thousand
 * kilometres from Buenos Aires. The only honest test is the border itself.
 *
 * Usage: node scripts/countryCheck.js [--json <path>]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { feature } from 'topojson-client';
import { countrySlugFrom as countrySlug } from './countrySlug.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const GEO = path.join(ROOT, 'public/data/restaurants-geo.json');
const OUT = path.join(ROOT, 'reports/pins-in-the-wrong-country.txt');

/* Countries the map draws as one shape but the guide files separately, and
 * the reverse. A pin inside China that says Hong Kong is not misplaced. */
const ACCEPTED = {
  'hong-kong': ['china'], 'macau': ['china'], 'macao': ['china'],
  'scotland': ['united-kingdom'], 'wales': ['united-kingdom'],
  'england': ['united-kingdom'], 'northern-ireland': ['united-kingdom'],
  'monaco': ['france'], 'vatican-city': ['italy'], 'san-marino': ['italy'],
  'palestine': ['israel'], 'western-sahara': ['morocco'],
  'usa': ['puerto-rico'], 'denmark': ['greenland', 'faroe-islands', 'faeroe-is'],
  uk: ['jersey', 'guernsey', 'isle-of-man', 'northern-ireland'],
  'northern-ireland': ['uk', 'united-kingdom', 'ireland'],
  'cayman-islands': ['cayman-is'], 'cyprus': ['n-cyprus'],
  'caribbean-netherlands': ['netherlands'],
  'netherlands': ['aruba', 'curacao', 'sint-maarten'],
  'france': ['french-guiana', 'guadeloupe', 'martinique', 'reunion', 'mayotte'],
};

const buildCountries = () => {
  const file = path.join(ROOT, 'node_modules/world-atlas/countries-10m.json');
  const topo = JSON.parse(fs.readFileSync(file, 'utf8'));
  return feature(topo, topo.objects.countries).features.map((f) => {
    let x0 = 180, y0 = 90, x1 = -180, y1 = -90;
    const walk = (c) => {
      if (typeof c[0] === 'number') {
        if (c[0] < x0) x0 = c[0];
        if (c[0] > x1) x1 = c[0];
        if (c[1] < y0) y0 = c[1];
        if (c[1] > y1) y1 = c[1];
      } else c.forEach(walk);
    };
    walk(f.geometry.coordinates);
    return { name: f.properties.name, geom: f.geometry, bbox: [x0, y0, x1, y1] };
  });
};

const R = 6371;
const km = (a, b) => {
  const t = (d) => d * Math.PI / 180;
  const dLat = t(b[1] - a[1]), dLng = t(b[0] - a[0]);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(t(a[1])) * Math.cos(t(b[1])) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};

/* How far outside its claimed country does the pin sit? A restaurant in Basel
 * reads as Swiss from the German side of the river and that is a rounding
 * error in the coastline, not a mistake. Eight thousand kilometres is a
 * mistake. Measuring to the nearest vertex is coarse but the answers we care
 * about are never close calls. */
const distanceTo = (pt, c) => {
  if (!c) return Infinity;
  let best = Infinity;
  const walk = (co) => {
    if (typeof co[0] === 'number') { const d = km(pt, co); if (d < best) best = d; }
    else co.forEach(walk);
  };
  walk(c.geom.coordinates);
  return best;
};

const inRing = (pt, ring) => {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i], [xj, yj] = ring[j];
    if ((yi > pt[1]) !== (yj > pt[1]) && pt[0] < ((xj - xi) * (pt[1] - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
};
/* Fiji, Russia, Kiribati and New Zealand's outer islands have rings that cross
 * the antimeridian, so their longitudes run from -180 to 180 inside a single
 * ring. Ray-casting reads that as a polygon wrapped the long way round the
 * planet, which is how a restaurant in Cairns came out Fijian. Shifting the
 * western half into a continuous 0-360 frame makes the ring convex again. */
const unwrap = (ring) => {
  let lo = 180, hi = -180;
  for (const [x] of ring) { if (x < lo) lo = x; if (x > hi) hi = x; }
  if (hi - lo <= 180) return null;
  return ring.map(([x, y]) => [x < 0 ? x + 360 : x, y]);
};
const inRingWrapped = (pt, ring) => {
  const shifted = unwrap(ring);
  if (!shifted) return inRing(pt, ring);
  return inRing([pt[0] < 0 ? pt[0] + 360 : pt[0], pt[1]], shifted);
};
const inPoly = (pt, poly) => inRingWrapped(pt, poly[0]) && !poly.slice(1).some((h) => inRingWrapped(pt, h));
const contains = (pt, c) => {
  const wraps = c.bbox[2] - c.bbox[0] > 180;
  if (!wraps && (pt[0] < c.bbox[0] || pt[0] > c.bbox[2])) return false;
  if (pt[1] < c.bbox[1] || pt[1] > c.bbox[3]) return false;
  const g = c.geom;
  return g.type === 'Polygon' ? inPoly(pt, g.coordinates) : g.coordinates.some((p) => inPoly(pt, p));
};

/* A coastal restaurant can sit a few metres off a 10m-resolution coastline, and
 * an island smaller than the simplification is not on the map at all. Only call
 * a pin homeless when the nearest border is genuinely far away. */
const NEAR_KM = 25;
const nearest = (pt, countries) => {
  const pad = NEAR_KM / 111;
  return countries.filter((c) =>
    pt[0] >= c.bbox[0] - pad && pt[0] <= c.bbox[2] + pad
    && pt[1] >= c.bbox[1] - pad && pt[1] <= c.bbox[3] + pad).map((c) => c.name);
};

const main = () => {
  const countries = buildCountries();
  const geo = JSON.parse(fs.readFileSync(GEO, 'utf8'));
  const rows = geo.r || geo.restaurants || geo;

  const wrong = [], adrift = [];
  for (const r of rows) {
    if (!Number.isFinite(r.lat) || !Number.isFinite(r.lng)) continue;
    const here = countries.find((c) => contains([r.lng, r.lat], c));
    if (!here) {
      const close = nearest([r.lng, r.lat], countries);
      if (!close.some((n) => countrySlug(n) === countrySlug(r.co))) adrift.push({ ...r, near: close });
      continue;
    }
    const said = countrySlug(r.co), found = countrySlug(here.name);
    if (said === found) continue;
    if ((ACCEPTED[said] || []).includes(found) || (ACCEPTED[found] || []).includes(said)) continue;
    const home = countries.find((c) => countrySlug(c.name) === said);
    wrong.push({ ...r, actual: here.name, out: Math.round(distanceTo([r.lng, r.lat], home)) });
  }

  const pairs = new Map();
  for (const w of wrong) {
    const k = `${w.co} → ${w.actual}`;
    if (!pairs.has(k)) pairs.set(k, []);
    pairs.get(k).push(w);
  }

  const lines = [];
  lines.push(`${wrong.length} pins land inside a different country than the one they claim`);
  lines.push(`${adrift.length} pins land in open water, more than ${NEAR_KM} km from their own coast\n`);
  for (const [k, v] of [...pairs].sort((a, b) => b[1].length - a[1].length)) {
    lines.push(`${k}  (${v.length})`);
    for (const w of v.sort((a, b) => b.out - a.out)) lines.push(`    ${Number.isFinite(w.out) ? `${w.out} km outside` : 'no such country on the map'}  ·  ${w.n}  ·  ${w.c}  ·  ${w.acc || 'exact'}${w.ap ? ' (approximate)' : ''}\n      ${w.a || 'no address'}\n      ${w.p || ''}`);
    lines.push('');
  }
  if (adrift.length) {
    lines.push('AT SEA');
    for (const a of adrift) lines.push(`    ${a.n}  ·  ${a.c}, ${a.co}  ·  ${a.acc || 'exact'}\n      ${a.a || 'no address'}\n      ${a.p || ''}`);
  }

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, lines.join('\n'));
  console.log(`\n  ${wrong.length} pins are in the wrong country`);
  console.log(`  ${adrift.length} pins are at sea`);
  for (const [k, v] of [...pairs].sort((a, b) => b[1].length - a[1].length).slice(0, 25))
    console.log(`${String(v.length).padStart(6)}  ${k}`);
  console.log(`  → ${path.relative(ROOT, OUT)}\n`);

  const json = process.argv.indexOf('--json');
  if (json > -1 && process.argv[json + 1]) fs.writeFileSync(process.argv[json + 1], JSON.stringify({ wrong, adrift }, null, 1));
};

main();
