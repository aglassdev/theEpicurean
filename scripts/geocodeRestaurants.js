/**
 * geocodeRestaurants.js
 * ─────────────────────────────────────────────────────────────────────────
 * One-time (resumable) batch that turns every address in restaurants.csv
 * into { lng, lat } coordinates using the Mapbox Geocoding API, and writes a
 * compact  public/data/restaurants-geo.json  that the interactive world map
 * loads at runtime.
 *
 *   Setup:   cp .env.example .env   &&   paste your token into VITE_MAPBOX_TOKEN
 *   Run:     npm run geocode
 *
 * It is safe to stop (Ctrl-C) and re-run — already-geocoded rows are skipped,
 * so a run resumes where it left off. ~12,650 rows at ~8 req/s ≈ 25–30 min.
 *
 * ── Mapbox Terms note ──────────────────────────────────────────────────────
 * By default this uses the *temporary* geocoding endpoint (permanent=false).
 * Mapbox's terms technically disallow long-term storage of temporary results;
 * caching coordinates to disk is "storage." For a personal project this is the
 * norm, but if you want to be fully compliant, set MAPBOX_PERMANENT=true in
 * .env (this is a billable Mapbox feature). You decide.
 * ───────────────────────────────────────────────────────────────────────────
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// ── Config ──────────────────────────────────────────────────────────────────
const CSV_PATH     = path.join(ROOT, 'restaurants.csv');
const OUT_DIR      = path.join(ROOT, 'public', 'data');
const OUT_PATH     = path.join(OUT_DIR, 'restaurants-geo.json');
const FAIL_PATH    = path.join(OUT_DIR, 'restaurants-geo.failures.json');
const CONCURRENCY  = 6;        // parallel in-flight requests
const MIN_INTERVAL = 120;      // ms between request starts (~8/s, under 600/min)
const SAVE_EVERY   = 100;      // flush output to disk every N processed
const MAX_RETRIES  = 3;

// ── Read token + options from .env / process.env ──────────────────────────────
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
const TOKEN = ENV.VITE_MAPBOX_TOKEN || ENV.MAPBOX_TOKEN || '';
const PERMANENT = String(ENV.MAPBOX_PERMANENT || 'false').toLowerCase() === 'true';

if (!TOKEN || TOKEN.includes('your_mapbox_token')) {
  console.error('\n✗ No Mapbox token found.');
  console.error('  Copy .env.example → .env and paste your token into VITE_MAPBOX_TOKEN.');
  console.error('  Get one free at https://account.mapbox.com/access-tokens/\n');
  process.exit(1);
}

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

// ── Country name → ISO 3166-1 alpha-2 (used only as an accuracy hint) ─────────
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
const done = new Map();      // key -> geocoded record (with lng/lat)
const failures = [];
if (fs.existsSync(OUT_PATH)) {
  try {
    const prev = JSON.parse(fs.readFileSync(OUT_PATH, 'utf8'));
    for (const r of prev.restaurants || []) done.set(`${r.n}||${r.a}`, r);
    console.log(`↻ Resuming — ${done.size} already geocoded.`);
  } catch { /* start fresh */ }
}

const pending = records.filter((r) => !done.has(keyOf(r)));
console.log(`\nThe Epicurean · Geocoding`);
console.log(`  total rows     ${records.length}`);
console.log(`  already done   ${done.size}`);
console.log(`  to geocode     ${pending.length}`);
console.log(`  endpoint       Mapbox v6 forward (${PERMANENT ? 'permanent' : 'temporary'})\n`);
if (!pending.length) { console.log('✓ Nothing to do — all rows geocoded.'); process.exit(0); }

// ── Rate-limited fetch ────────────────────────────────────────────────────────
let lastStart = 0;
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
async function gate() {
  const now = Date.now();
  const wait = Math.max(0, lastStart + MIN_INTERVAL - now);
  lastStart = now + wait;
  if (wait) await sleep(wait);
}

async function geocodeOne(rec) {
  // Build the best query we can from the address; fall back to name + city.
  const q = (rec.a && rec.a.length > 4) ? rec.a : [rec.n, rec.c, rec.co].filter(Boolean).join(', ');
  const iso = ISO[rec.co];
  const params = new URLSearchParams({
    q, access_token: TOKEN, limit: '1', permanent: String(PERMANENT),
  });
  if (iso) params.set('country', iso);
  const url = `https://api.mapbox.com/search/geocode/v6/forward?${params.toString()}`;

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    await gate();
    try {
      const res = await fetch(url);
      if (res.status === 429) { await sleep(2000 * (attempt + 1)); continue; }
      if (!res.ok) { if (attempt === MAX_RETRIES) return null; await sleep(500); continue; }
      const data = await res.json();
      const feat = data.features && data.features[0];
      if (!feat) return null;
      const [lng, lat] = feat.geometry.coordinates;
      const acc = feat.properties?.feature_type || feat.properties?.match_code?.confidence || 'unknown';
      return { ...rec, lng: +lng.toFixed(6), lat: +lat.toFixed(6), acc };
    } catch (err) {
      if (attempt === MAX_RETRIES) return null;
      await sleep(500);
    }
  }
  return null;
}

// ── Persist ───────────────────────────────────────────────────────────────────
function save() {
  const restaurants = [...done.values()];
  const payload = {
    generated: new Date().toISOString(),
    count: restaurants.length,
    endpoint: PERMANENT ? 'permanent' : 'temporary',
    restaurants,
  };
  fs.writeFileSync(OUT_PATH, JSON.stringify(payload));
  if (failures.length) fs.writeFileSync(FAIL_PATH, JSON.stringify(failures, null, 2));
}

// ── Worker pool ────────────────────────────────────────────────────────────────
let processed = 0;
let idx = 0;
const t0 = Date.now();

async function worker() {
  while (idx < pending.length) {
    const rec = pending[idx++];
    const result = await geocodeOne(rec);
    if (result) done.set(keyOf(rec), result);
    else { failures.push(rec); done.set(keyOf(rec), { ...rec, lng: null, lat: null, acc: 'failed' }); }

    processed++;
    if (processed % SAVE_EVERY === 0) {
      save();
      const rate = processed / ((Date.now() - t0) / 1000);
      const eta = Math.round((pending.length - processed) / rate / 60);
      process.stdout.write(
        `\r  ${processed}/${pending.length}  ·  ${rate.toFixed(1)}/s  ·  ~${eta} min left  ·  ${failures.length} misses   `
      );
    }
  }
}

process.on('SIGINT', () => { console.log('\n\n⏸  Interrupted — saving progress…'); save(); process.exit(0); });

await Promise.all(Array.from({ length: CONCURRENCY }, worker));
save();

const withCoords = [...done.values()].filter((r) => r.lng != null).length;
console.log(`\n\n✓ Done. ${withCoords}/${records.length} geocoded, ${failures.length} misses.`);
console.log(`  → ${path.relative(ROOT, OUT_PATH)}`);
if (failures.length) console.log(`  → misses logged to ${path.relative(ROOT, FAIL_PATH)} (re-run to retry them)`);
