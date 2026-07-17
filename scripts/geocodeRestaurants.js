/**
 * geocodeRestaurants.js
 * ─────────────────────────────────────────────────────────────────────────
 * One-time (resumable) batch that turns every address in restaurants.csv
 * into { lng, lat } coordinates, and writes a compact
 *   public/data/restaurants-geo.json
 * that the interactive world map (MapLibre + OpenFreeMap) loads at runtime.
 *
 * No Mapbox / Google account needed. Two providers, auto-selected:
 *
 *   • LocationIQ (recommended) — free key, no credit card, better accuracy
 *     and ~2 req/s (5,000/day free). Sign up at https://locationiq.com,
 *     then put  LOCATIONIQ_KEY=pk.xxx  in your .env.
 *     The script is resumable, so 12,650 rows spread over ~3 days stays free.
 *
 *   • Nominatim (OpenStreetMap) — zero signup, used automatically if no key.
 *     Capped at 1 req/second by OSM policy, so a full run takes ~4 hours, and
 *     accuracy on messy addresses is a little lower. Please don't hammer it.
 *
 *   Run:  npm run geocode      (safe to Ctrl-C and re-run; it resumes)
 * ───────────────────────────────────────────────────────────────────────────
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// ── Config ──────────────────────────────────────────────────────────────────
const CSV_PATH  = path.join(ROOT, 'restaurants.csv');
const OUT_DIR   = path.join(ROOT, 'public', 'data');
const OUT_PATH  = path.join(OUT_DIR, 'restaurants-geo.json');
const FAIL_PATH = path.join(OUT_DIR, 'restaurants-geo.failures.json');
const SAVE_EVERY  = 50;
const MAX_RETRIES = 3;

// Per-provider rate limits (interval = ms between request starts)
const RATE = {
  locationiq: { interval: 600,  base: 'https://us1.locationiq.com/v1/search' }, // ~1.6/s (<2/s free)
  nominatim:  { interval: 1100, base: 'https://nominatim.openstreetmap.org/search' }, // ≤1/s policy
};

// ── Read options from .env / process.env ──────────────────────────────────────
function loadEnv() {
  const env = { ...process.env };
  const envPath = path.join(ROOT, '.env');
  if (fs.existsSync(envPath)) {
    for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
      if (m) env[m[1]] = m[2].replace(/^['"]|['"]$/g, '').trim();
    }
  }
  return env;
}
const ENV = loadEnv();
const LOCATIONIQ_KEY = ENV.LOCATIONIQ_KEY || '';
const PROVIDER = LOCATIONIQ_KEY ? 'locationiq' : 'nominatim';
const { interval: MIN_INTERVAL, base: BASE_URL } = RATE[PROVIDER];
const USER_AGENT = 'TheEpicurean-Geocoder/1.0 (personal restaurant atlas)';

// ── Robust CSV parser (handles quoted fields with commas / newlines) ──────────
function parseCSV(text) {
  const rows = []; let row = []; let cur = ''; let q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"') { if (text[i + 1] === '"') { cur += '"'; i++; } else q = false; }
      else cur += c;
    } else {
      if (c === '"') q = true;
      else if (c === ',') { row.push(cur); cur = ''; }
      else if (c === '\n') { row.push(cur); rows.push(row); row = []; cur = ''; }
      else if (c === '\r') { /* skip */ }
      else cur += c;
    }
  }
  if (cur.length || row.length) { row.push(cur); rows.push(row); }
  return rows;
}

// ── Country name → ISO 3166-1 alpha-2 (used as a `countrycodes` accuracy hint) ─
const ISO = {
  'United States': 'us', 'Australia': 'au', 'France': 'fr', 'United Kingdom': 'gb',
  'England': 'gb', 'Scotland': 'gb', 'Wales': 'gb', 'Northern Ireland': 'gb',
  'Italy': 'it', 'Japan': 'jp', 'Canada': 'ca', 'Spain': 'es', 'Germany': 'de',
  'Mexico': 'mx', 'Switzerland': 'ch', 'China': 'cn', 'New Zealand': 'nz',
  'Netherlands': 'nl', 'Belgium': 'be', 'Hong Kong': 'hk', 'Singapore': 'sg',
  'Austria': 'at', 'Thailand': 'th', 'United Arab Emirates': 'ae', 'Taiwan': 'tw',
  'South Korea': 'kr', 'Denmark': 'dk', 'Hawaii': 'us', 'Russia': 'ru',
  'Macau': 'mo', 'Brazil': 'br', 'India': 'in', 'Portugal': 'pt', 'Norway': 'no',
  'Argentina': 'ar', 'Sweden': 'se', 'Ireland': 'ie', 'Turkey': 'tr',
  'South Africa': 'za', 'Greece': 'gr', 'Malaysia': 'my', 'Indonesia': 'id',
  'Poland': 'pl', 'Finland': 'fi', 'Czechia': 'cz', 'Czech Republic': 'cz',
  'Hungary': 'hu', 'Croatia': 'hr', 'Vietnam': 'vn', 'Philippines': 'ph',
  'Peru': 'pe', 'Chile': 'cl', 'Colombia': 'co', 'Iceland': 'is', 'Israel': 'il',
  'Lebanon': 'lb', 'Luxembourg': 'lu', 'Slovenia': 'si', 'Slovakia': 'sk',
  'Estonia': 'ee', 'Latvia': 'lv', 'Lithuania': 'lt', 'Romania': 'ro',
  'Bulgaria': 'bg', 'Serbia': 'rs', 'Ukraine': 'ua', 'Morocco': 'ma',
  'Egypt': 'eg', 'Qatar': 'qa', 'Bahrain': 'bh', 'Kuwait': 'kw', 'Oman': 'om',
  'Saudi Arabia': 'sa', 'Jordan': 'jo', 'Cyprus': 'cy', 'Malta': 'mt',
  'Monaco': 'mc', 'Andorra': 'ad', 'Liechtenstein': 'li', 'San Marino': 'sm',
  'Uruguay': 'uy', 'Ecuador': 'ec', 'Costa Rica': 'cr', 'Panama': 'pa',
  'Dominican Republic': 'do', 'Bahamas': 'bs', 'Barbados': 'bb', 'Jamaica': 'jm',
  'Georgia': 'ge', 'Azerbaijan': 'az', 'Kazakhstan': 'kz', 'Sri Lanka': 'lk',
  'Cambodia': 'kh', 'Laos': 'la', 'Montenegro': 'me', 'North Macedonia': 'mk',
  'Bosnia and Herzegovina': 'ba', 'Kosovo': 'xk', 'Albania': 'al', 'Moldova': 'md',
  'Tunisia': 'tn', 'Venezuela': 've', 'Paraguay': 'py', 'Kiribati': 'ki',
};

// ── Load CSV ──────────────────────────────────────────────────────────────────
const rows = parseCSV(fs.readFileSync(CSV_PATH, 'utf8'));
const header = rows[0].map((h) => h.trim());
const col = (name) => header.indexOf(name);
const iName = col('name'), iAddr = col('address'), iCity = col('city'),
      iCountry = col('country'), iSite = col('site_link');

const records = rows.slice(1)
  .filter((r) => r[iName] && r[iName].trim())
  .map((r) => ({
    n: (r[iName] || '').trim(),
    a: (r[iAddr] || '').trim(),
    c: (r[iCity] || '').trim(),
    co: (r[iCountry] || '').trim(),
    w: (r[iSite] || '').trim(),
  }));

const keyOf = (r) => `${r.n}||${r.a}`;

// ── Resume from any existing output ───────────────────────────────────────────
fs.mkdirSync(OUT_DIR, { recursive: true });
const done = new Map();
const failures = [];
if (fs.existsSync(OUT_PATH)) {
  try {
    const prev = JSON.parse(fs.readFileSync(OUT_PATH, 'utf8'));
    for (const r of prev.restaurants || []) done.set(`${r.n}||${r.a}`, r);
    console.log(`↻ Resuming — ${done.size} already geocoded.`);
  } catch { /* start fresh */ }
}

// Only rows we haven't successfully placed yet (retry previous misses too).
const pending = records.filter((r) => {
  const prev = done.get(keyOf(r));
  return !prev || prev.lng == null;
});

console.log(`\nThe Epicurean · Geocoding`);
console.log(`  provider       ${PROVIDER}${PROVIDER === 'nominatim' ? '  (no key — set LOCATIONIQ_KEY in .env for faster, more accurate results)' : ''}`);
console.log(`  total rows     ${records.length}`);
console.log(`  already placed ${[...done.values()].filter((r) => r.lng != null).length}`);
console.log(`  to geocode     ${pending.length}`);
console.log(`  pace           ~${(1000 / MIN_INTERVAL).toFixed(1)} req/s  (~${Math.round(pending.length * MIN_INTERVAL / 1000 / 60)} min)\n`);
if (!pending.length) { console.log('✓ Nothing to do — all rows geocoded.'); process.exit(0); }
if (PROVIDER === 'nominatim') {
  console.log('  ⚠ Using OpenStreetMap Nominatim. Please keep this to one run and');
  console.log('    do not parallelise — bulk abuse can get your IP blocked.\n');
}

// ── Rate-limited fetch (sequential — respects per-second policy) ──────────────
let lastStart = 0;
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
async function gate() {
  const now = Date.now();
  const wait = Math.max(0, lastStart + MIN_INTERVAL - now);
  lastStart = now + wait;
  if (wait) await sleep(wait);
}

function buildURL(rec) {
  const q = (rec.a && rec.a.length > 4) ? rec.a : [rec.n, rec.c, rec.co].filter(Boolean).join(', ');
  const p = new URLSearchParams({ q, format: PROVIDER === 'nominatim' ? 'jsonv2' : 'json', limit: '1' });
  const iso = ISO[rec.co];
  if (iso) p.set('countrycodes', iso);
  if (PROVIDER === 'locationiq') p.set('key', LOCATIONIQ_KEY);
  return `${BASE_URL}?${p.toString()}`;
}

async function geocodeOne(rec) {
  const url = buildURL(rec);
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    await gate();
    try {
      const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT, 'Accept': 'application/json' } });
      if (res.status === 429) { await sleep(3000 * (attempt + 1)); continue; }
      if (!res.ok) { if (attempt === MAX_RETRIES) return null; await sleep(600); continue; }
      const data = await res.json();
      const hit = Array.isArray(data) ? data[0] : null;
      if (!hit) return null;
      const lng = parseFloat(hit.lon), lat = parseFloat(hit.lat);
      if (Number.isNaN(lng) || Number.isNaN(lat)) return null;
      return { ...rec, lng: +lng.toFixed(6), lat: +lat.toFixed(6), acc: hit.type || hit.class || 'osm' };
    } catch {
      if (attempt === MAX_RETRIES) return null;
      await sleep(600);
    }
  }
  return null;
}

// ── Persist ───────────────────────────────────────────────────────────────────
function save() {
  const restaurants = [...done.values()];
  fs.writeFileSync(OUT_PATH, JSON.stringify({
    generated: new Date().toISOString(),
    count: restaurants.filter((r) => r.lng != null).length,
    provider: PROVIDER,
    restaurants,
  }));
  const misses = restaurants.filter((r) => r.lng == null);
  if (misses.length) fs.writeFileSync(FAIL_PATH, JSON.stringify(misses, null, 2));
}

// ── Run (sequential to honour rate policy) ────────────────────────────────────
// ANSI colours (auto-disabled when output isn't a terminal, e.g. piped to a file)
const tty = process.stdout.isTTY;
const c = (code) => (tty ? code : '');
const DIM = c('\x1b[2m'), GRN = c('\x1b[32m'), GLD = c('\x1b[33m'), RST = c('\x1b[0m');

const width = String(pending.length).length;
const pad = (n) => String(n).padStart(width, ' ');
const clip = (s, len) => (s.length > len ? s.slice(0, len - 1) + '…' : s);

let processed = 0;
const t0 = Date.now();
process.on('SIGINT', () => { console.log('\n\n⏸  Interrupted — saving progress…'); save(); process.exit(0); });

for (const rec of pending) {
  const result = await geocodeOne(rec);
  if (result) done.set(keyOf(rec), result);
  else done.set(keyOf(rec), { ...rec, lng: null, lat: null, acc: 'failed' });
  processed++;

  // Live per-restaurant line
  const loc = [rec.c, rec.co].filter(Boolean).join(', ');
  const name = clip(rec.n, 44);
  const counter = `${DIM}[${pad(processed)}/${pending.length}]${RST}`;
  if (result) {
    console.log(`${counter} ${GRN}✓${RST} ${name}${DIM}${loc ? ' — ' + loc : ''}${RST}  ${GLD}${result.lat.toFixed(4)}, ${result.lng.toFixed(4)}${RST}`);
  } else {
    console.log(`${counter} ${DIM}✗ ${name}${loc ? ' — ' + loc : ''}  ·  not found${RST}`);
  }

  // Periodic checkpoint (save + running stats)
  if (processed % SAVE_EVERY === 0) {
    save();
    const rate = processed / ((Date.now() - t0) / 1000);
    const eta = Math.round((pending.length - processed) / rate / 60);
    const miss = [...done.values()].filter((r) => r.lng == null).length;
    console.log(`${DIM}   ↳ saved · ${processed} done · ${miss} misses · ${rate.toFixed(1)} req/s · ~${eta} min left${RST}`);
  }
}
save();

const placed = [...done.values()].filter((r) => r.lng != null).length;
const missed = [...done.values()].filter((r) => r.lng == null).length;
console.log(`\n\n✓ Done. ${placed}/${records.length} placed, ${missed} misses.`);
console.log(`  → ${path.relative(ROOT, OUT_PATH)}`);
if (missed) console.log(`  → misses in ${path.relative(ROOT, FAIL_PATH)} (re-run to retry them; a LocationIQ key helps)`);
