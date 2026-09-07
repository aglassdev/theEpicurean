/**
 * buildArticles.js
 * ----------------
 * Turns the Markdown files in content/news/ into public/data/articles.json,
 * which the News page and the article route read at runtime.
 *
 * Writing an article means adding a .md file. Nothing else: no JSX, no imports,
 * no rebuild of any component. Runs inside `npm run build`, and `npm run articles`
 * on its own.
 *
 * File shape:
 *
 *   ---
 *   title: The Bittersweet Downfall of the Michelin Green Star
 *   section: opinion            # opinion | awards | restaurants
 *   date: 2026-09-02            # ISO; ordering and "most recent" come from this
 *   byline: A Glass Production
 *   image: /images/greenstar.png
 *   dek: One or two sentences under the headline.
 *   draft: false                # omit or false to publish
 *   ---
 *
 *   The body, in ordinary Markdown. Headings, **bold**, links, > quotes, lists.
 *
 * The filename is the URL: content/news/my-piece.md serves at /news/my-piece.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const CONTENT = path.join(ROOT, 'content', 'news');
const OUT = path.join(ROOT, 'public', 'data', 'articles.json');
const quiet = process.argv.includes('--quiet');

export const SECTIONS = [
  { key: 'opinion', name: 'Opinion' },
  { key: 'awards', name: 'Awards' },
  { key: 'restaurants', name: 'Restaurants' },
];
const SECTION_KEYS = new Set(SECTIONS.map((s) => s.key));

/**
 * Front matter is a handful of `key: value` lines, so it is read directly rather
 * than pulling in a YAML parser. Values may be quoted; a colon in the text is
 * fine because only the first one splits.
 */
function parseFrontMatter(raw) {
  const m = raw.match(/^﻿?---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { data: {}, body: raw };
  const data = {};
  for (const line of m[1].split(/\r?\n/)) {
    if (!line.trim() || line.trim().startsWith('#')) continue;
    const at = line.indexOf(':');
    if (at === -1) continue;
    const key = line.slice(0, at).trim();
    let value = line.slice(at + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"') && value.length > 1) ||
      (value.startsWith("'") && value.endsWith("'") && value.length > 1)
    ) value = value.slice(1, -1);
    data[key] = value;
  }
  return { data, body: m[2] };
}

const isTruthy = (v) => /^(true|yes|1)$/i.test(String(v || '').trim());

if (!fs.existsSync(CONTENT)) {
  console.warn(`  ! ${path.relative(ROOT, CONTENT)} not found — no articles written`);
  process.exit(0);
}

const problems = [];
const articles = [];

for (const file of fs.readdirSync(CONTENT).sort()) {
  if (!file.endsWith('.md')) continue;
  // Notes to the writer, not articles.
  if (/^README\.md$/i.test(file) || file.startsWith('_')) continue;
  const slug = file.replace(/\.md$/, '');
  const { data, body } = parseFrontMatter(fs.readFileSync(path.join(CONTENT, file), 'utf8'));

  if (isTruthy(data.draft)) continue;                       // drafts never ship

  if (!data.title) { problems.push(`${file}: no title`); continue; }
  if (!data.date || !/^\d{4}-\d{2}-\d{2}$/.test(data.date)) {
    problems.push(`${file}: date must be YYYY-MM-DD, got ${data.date || '(none)'}`);
    continue;
  }
  const section = (data.section || 'restaurants').toLowerCase();
  if (!SECTION_KEYS.has(section)) {
    problems.push(`${file}: section "${section}" is not one of ${[...SECTION_KEYS].join(', ')}`);
    continue;
  }
  if (data.image && !fs.existsSync(path.join(ROOT, 'public', data.image.replace(/^\//, '')))) {
    problems.push(`${file}: image ${data.image} does not exist`);
  }

  const html = marked.parse(body.trim(), { mangle: false, headerIds: false });

  articles.push({
    slug,
    title: data.title,
    section,
    date: data.date,
    byline: data.byline || '',
    image: data.image || '',
    dek: data.dek || '',
    html,
    words: body.trim().split(/\s+/).filter(Boolean).length,
  });
}

articles.sort((a, b) => b.date.localeCompare(a.date));

if (problems.length) {
  console.error('\n✗ article problems:\n   ' + problems.join('\n   ') + '\n');
  process.exitCode = 1;
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify({ sections: SECTIONS, articles }, null, 2));

if (!quiet) {
  console.log(`\n  articles written  ${articles.length} -> ${path.relative(ROOT, OUT)}`);
  for (const a of articles) {
    console.log(`    ${a.date}  ${a.section.padEnd(12)} ${String(a.words).padStart(4)}w  ${a.title.slice(0, 52)}`);
  }
  console.log('');
}
