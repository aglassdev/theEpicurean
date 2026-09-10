/**
 * scrapeThe50.js
 * --------------
 * Reads the50.com's catalogue of establishments into the50establishments.csv.
 *
 * The sitemap lists 3,529 pages under /discovery/Establishments/{Country}/{City}/
 * {Name}.html. They are server-rendered plain HTML with named classes, so no
 * browser is needed, and each carries more than the guide currently holds:
 *
 *   uid          a stable numeric id, which is the identity the guide lacks
 *   type         Restaurant, Bar, Hotel or Vineyard. All are establishments.
 *   address      the full street address
 *   lat, lng     out of the Google Maps embed's !3d and !2d parameters
 *   hours        the guide has these for 33 restaurants; the50 has them for most
 *   price        as the site phrases it, per cocktail or per head
 *   phone, website, bio
 *
 * Manners: the site's robots.txt names anthropic-ai, ClaudeBot and GPTBot with a
 * crawl-delay of 1 and disallows only the dashboard page. There is no wildcard
 * rule. So one request a second, no faster, and the user agent says what this is
 * rather than pretending to be a browser.
 *
 * Restart-safe: the CSV is the record of what has been fetched, so an interrupted
 * run picks up where it stopped.
 *
 * Usage: node scripts/scrapeThe50.js [--limit N] [--quiet]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'the50establishments.csv');
const SITEMAP = 'https://www.the50.com/sitemap.xml';
const DELAY = 1100;                       // robots.txt asks for 1s; leave headroom
const UA = 'TheEpicurean/1.0 (personal restaurant guide; +https://the-epicurean.vercel.app)';

const quiet = process.argv.includes('--quiet');
const limitArg = process.argv.indexOf('--limit');
const LIMIT = limitArg > -1 ? Number(process.argv[limitArg + 1]) : Infinity;

const COLUMNS = ['uid', 'name', 'type', 'city', 'country', 'address', 'lat', 'lng',
  'phone', 'website', 'price', 'hours', 'bio', 'source_url'];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const cell = (v) => {
  const s = String(v ?? '').replace(/\s+/g, ' ').trim();
  return /[",]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

const decode = (s) => String(s || '')
  .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&#39;|&rsquo;/g, "'")
  .replace(/&quot;|&ldquo;|&rdquo;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n));

const strip = (s) => decode(String(s || '').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();

const one = (html, re) => { const m = html.match(re); return m ? strip(m[1]) : ''; };

/** Everything the page says about an establishment. */
function parse(html, url) {
  // The <li> classes inside <ul class="details"> are stable and self-describing.
  const li = (cls) => one(html, new RegExp(`<li[^>]*class="${cls}[^"]*"[^>]*>([\\s\\S]*?)</li>`, 'i'));
  const embed = (html.match(/google\.com\/maps\/embed\?pb=([^"']+)/) || [])[1] || '';
  return {
    uid: one(html, /uid_target\s*=\s*\['([^']+)'\]/),
    // og:title reads "Name-City-Type-50BestDiscovery"; the <h1> is just the name.
    name: one(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i)
       || (one(html, /<meta[^>]+property="og:title"[^>]+content="([^"]+)"/i).split('-')[0] || ''),
    type: one(html, /ll_type_target\s*=\s*\['([^']+)'\]/),
    city: one(html, /ll_city_target\s*=\s*\['([^']+)'\]/),
    country: one(html, /kvSearchKeyword_target\s*=\s*\['([^']+)'\]/),
    address: one(html, /<p[^>]*class="location"[^>]*>([\s\S]*?)<\/p>/i),
    lat: (embed.match(/!3d(-?\d+\.\d+)/) || [])[1] || '',
    lng: (embed.match(/!2d(-?\d+\.\d+)/) || [])[1] || '',
    phone: one(html, /href="tel:([^"]+)"/i),
    website: (html.match(/<a[^>]+class="restaurant-bar-link"[^>]*href="([^"]+)"/i)
           || html.match(/<li[^>]*class="website"[^>]*>[\s\S]*?href="([^"]+)"/i) || [])[1] || '',
    price: li('avg-price'),
    hours: li('service-hours'),
    bio: one(html, /<meta[^>]+name="description"[^>]+content="([^"]*)"/i),
    source_url: url,
  };
}

// ── The list to work through ────────────────────────────────────────────────
if (!quiet) console.log('\n  reading the sitemap…');
const xml = await (await fetch(SITEMAP, { headers: { 'User-Agent': UA } })).text();
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((m) => m[1])
  .filter((u) => u.includes('/discovery/Establishments/'))
  .filter((u) => !/dashboard\.html/.test(u));       // the one path robots.txt refuses

// ── What is already done ────────────────────────────────────────────────────
const done = new Set();
if (fs.existsSync(OUT)) {
  const lines = fs.readFileSync(OUT, 'utf8').split('\n');
  for (const l of lines.slice(1)) {
    const m = l.match(/(https:\/\/[^",]+)\s*$/);
    if (m) done.add(m[1]);
  }
} else {
  fs.writeFileSync(OUT, COLUMNS.join(',') + '\n');
}

const todo = urls.filter((u) => !done.has(u)).slice(0, LIMIT);
if (!quiet) {
  console.log(`  ${urls.length} establishments listed · ${done.size} already read · ${todo.length} to go`);
  console.log(`  one request a second, as robots.txt asks — about ${Math.round(todo.length * DELAY / 60000)} minutes\n`);
}

let ok = 0;
const failed = [];
for (const [i, url] of todo.entries()) {
  await sleep(DELAY);
  let rec = null;
  for (let attempt = 0; attempt < 3 && !rec; attempt++) {
    try {
      const r = await fetch(url, { headers: { 'User-Agent': UA } });
      if (r.status === 429 || r.status >= 500) { await sleep(4000 * (attempt + 1)); continue; }
      if (!r.ok) break;
      rec = parse(await r.text(), url);
    } catch { await sleep(2000); }
  }
  if (!rec || !rec.name) { failed.push(url); continue; }
  fs.appendFileSync(OUT, COLUMNS.map((c) => cell(rec[c])).join(',') + '\n');
  ok++;
  if (!quiet && (i % 25 === 0 || i === todo.length - 1)) {
    console.log(`  [${String(i + 1).padStart(4)}/${todo.length}] ${rec.type || '?'} · ${rec.name} — ${rec.city}, ${rec.country}`);
  }
}

if (!quiet) {
  console.log(`\n  ✓ ${ok} read, ${failed.length} failed → ${path.relative(ROOT, OUT)}`);
  for (const f of failed.slice(0, 10)) console.log(`    failed: ${f}`);
}
