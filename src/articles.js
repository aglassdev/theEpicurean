/**
 * The News desk.
 *
 * Kept in its own module so News.jsx, the article route and
 * scripts/optimizeImages.js all read one list. `date` is ISO so ordering is a
 * plain sort rather than a hand-maintained sequence.
 *
 * An article with a `body` gets its own page at /news/{slug} and is linked
 * everywhere it appears. One without is a headline only, listed but not linked.
 *
 * Bodies are placeholder Latin for now.
 */

export const SECTIONS = [
  { key: 'opinion', name: 'Opinion' },
  { key: 'awards', name: 'Awards' },
  { key: 'restaurants', name: 'Restaurants' },
];

const LOREM = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper. Maecenas sed diam eget risus varius blandit sit amet non magna, donec ullamcorper nulla non metus auctor fringilla.',
  'Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Curabitur blandit tempus porttitor, et cras justo odio dapibus ac facilisis in egestas eget quam.',
  'Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor, and morbi leo risus porta ac consectetur ac.',
  'Sed posuere consectetur est at lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam, pellentesque ornare sem lacinia quam venenatis vestibulum, cum sociis natoque penatibus et magnis dis parturient montes.',
  'Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper, and integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
];

export const ARTICLES = [
  {
    slug: 'michelin-green-star-downfall',
    section: 'opinion',
    title: 'The Bittersweet Downfall of the Michelin Green Star',
    date: '2026-09-02',
    image: '/images/greenstar.png',
    dek: 'A decade on, the sustainability distinction that was meant to change how the world cooks has quietly become the one nobody chases.',
    byline: 'A Glass Production',
    body: LOREM,
  },
  {
    slug: 'michelin-sysco-partnership',
    section: 'opinion',
    title: 'Is Michelin Selling Out? Why the Sysco Partnership is a Worrying Sign for the Future of U.S. Gastronomy',
    date: '2026-08-21',
    image: '/images/michelin.png',
    dek: 'The guide has spent a century insisting its inspectors owe nothing to anyone. A distribution deal puts that century to the test.',
    byline: 'A Glass Production',
    body: LOREM,
  },
  {
    slug: 'michelin-southwest-usa-ceremony',
    section: 'awards',
    title: 'The Inaugural Michelin Guide Ceremony: Southwest U.S.A.',
    date: '2026-08-28',
    image: '/images/threestars.png',
    dek: 'Arizona, Nevada, New Mexico and Utah receive their first stars, and a region long read as a detour becomes a destination.',
    byline: 'A Glass Production',
    body: LOREM,
  },
  {
    slug: 'new-restaurants-dc-area',
    section: 'restaurants',
    title: 'New Restaurants Coming to the D.C. Area',
    date: '2026-08-30',
    image: '/images/washingtondcheader.png',
    dek: 'From the Wharf to Union Market, the openings shaping the capital’s next season at the table.',
    byline: 'A Glass Production',
    body: LOREM,
  },

  // Headline-only, carried over from the previous desk. No body, so no page.
  {
    slug: 'nyt-best-nyc-2025',
    section: 'restaurants',
    title: "The Times' Best NYC Restaurants of 2025",
    date: '2026-07-18',
    image: '/images/nyt2025.png',
    dek: "A new vanguard of dining rooms, from a Tribeca townhouse to a quiet bistro in Brooklyn. The year's most consequential openings, examined.",
  },
  {
    slug: 'rammy-awards-2025',
    section: 'awards',
    title: 'Inside the 2025 RAMMY Awards',
    date: '2026-07-02',
    image: '/images/rammys2025.png',
  },
  {
    slug: 'james-beard-2025',
    section: 'awards',
    title: 'The 2025 James Beard Foundation Honours',
    date: '2026-06-11',
    image: '/images/jb2025.png',
  },
  { slug: 'michelin-three-new-regions', section: 'restaurants', title: 'The Michelin Guide expands into three new regions', date: '2026-05-28' },
  { slug: 'worlds-50-best-2025', section: 'awards', title: "The World's 50 Best names its 2025 laureates", date: '2026-05-14' },
  { slug: 'la-liste-top-1000', section: 'awards', title: 'La Liste unveils its refreshed Top 1000', date: '2026-04-30' },
  { slug: 'wine-spectator-grand-award', section: 'restaurants', title: 'Wine Spectator awards a rare Grand Award', date: '2026-04-09' },
  { slug: 'green-stars-redefining-the-table', section: 'opinion', title: 'Green Stars: the restaurants redefining the table', date: '2026-03-22' },
];

/** Newest first. */
export const byDate = (list = ARTICLES) =>
  [...list].sort((a, b) => b.date.localeCompare(a.date));

export const sectionName = (key) =>
  SECTIONS.find((s) => s.key === key)?.name || key;

export const findArticle = (slug) => ARTICLES.find((a) => a.slug === slug);

/**
 * The lead is the newest article that has a page. Each section then shows its own
 * newest — skipping the lead, so a section that supplied the lead falls through to
 * its runner-up rather than repeating it.
 */
export function frontPage() {
  const withPages = byDate(ARTICLES.filter((a) => a.body));
  const lead = withPages[0] || null;
  const columns = SECTIONS.map(({ key, name }) => ({
    key,
    name,
    article: withPages.find((a) => a.section === key && a.slug !== lead?.slug) || null,
  })).filter((c) => c.article);
  const featuredSlugs = new Set([lead?.slug, ...columns.map((c) => c.article.slug)]);
  const rest = byDate(ARTICLES).filter((a) => !featuredSlugs.has(a.slug));
  return { lead, columns, rest };
}
