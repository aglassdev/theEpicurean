/**
 * Runtime access to the News desk.
 *
 * The articles themselves live in content/news/*.md and are compiled to
 * public/data/articles.json by scripts/buildArticles.js. Nothing here needs
 * touching to publish a piece: add the .md file and it appears.
 *
 * These headline-only entries have no page of their own; they fill out the
 * "More headlines" list until each is actually written.
 */
export const STUBS = [
  { slug: 'nyt-best-nyc-2025', section: 'restaurants', title: "The Times' Best NYC Restaurants of 2025", date: '2026-07-18' },
  { slug: 'rammy-awards-2025', section: 'awards', title: 'Inside the 2025 RAMMY Awards', date: '2026-07-02' },
  { slug: 'james-beard-2025', section: 'awards', title: 'The 2025 James Beard Foundation Honours', date: '2026-06-11' },
  { slug: 'michelin-three-new-regions', section: 'restaurants', title: 'The Michelin Guide expands into three new regions', date: '2026-05-28' },
  { slug: 'worlds-50-best-2025', section: 'awards', title: "The World's 50 Best names its 2025 laureates", date: '2026-05-14' },
  { slug: 'la-liste-top-1000', section: 'awards', title: 'La Liste unveils its refreshed Top 1000', date: '2026-04-30' },
  { slug: 'wine-spectator-grand-award', section: 'restaurants', title: 'Wine Spectator awards a rare Grand Award', date: '2026-04-09' },
];

export const DEFAULT_SECTIONS = [
  { key: 'opinion', name: 'Opinion' },
  { key: 'awards', name: 'Awards' },
  { key: 'restaurants', name: 'Restaurants' },
];

let cache = null;

/** Fetches the compiled desk once and keeps it for the session. */
export async function loadDesk() {
  if (cache) return cache;
  let written = [];
  let sections = DEFAULT_SECTIONS;
  try {
    const r = await fetch('/data/articles.json');
    if (r.ok) {
      const d = await r.json();
      written = d.articles || [];
      sections = d.sections?.length ? d.sections : DEFAULT_SECTIONS;
    }
  } catch { /* fall through to stubs only */ }
  cache = { sections, written, all: [...written, ...STUBS].sort((a, b) => b.date.localeCompare(a.date)) };
  return cache;
}

export const sectionName = (sections, key) =>
  sections.find((s) => s.key === key)?.name || key;

/**
 * The lead is the newest written article. Each section then shows its own newest,
 * skipping the lead, so the section that supplied the lead falls through to its
 * runner-up rather than repeating it.
 */
export function frontPage(desk) {
  const written = desk.written;
  const lead = written[0] || null;
  const columns = desk.sections
    .map(({ key, name }) => ({
      key,
      name,
      article: written.find((a) => a.section === key && a.slug !== lead?.slug) || null,
    }))
    .filter((c) => c.article);
  const featured = new Set([lead?.slug, ...columns.map((c) => c.article.slug)]);
  return { lead, columns, rest: desk.all.filter((a) => !featured.has(a.slug)) };
}
