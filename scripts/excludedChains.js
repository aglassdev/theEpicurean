/**
 * Brands the guide does not carry.
 *
 * These are multi-location chains that arrived with the geocoded set as one entry
 * per branch ("The Capital Grille — Atlanta").
 *
 * A rule matches on `brand` (the part of the name before a dash, so every branch
 * goes with the brand while an unrelated restaurant sharing a first word does
 * not), on `site` (a substring of the website), or on both together when the name
 * alone is ambiguous. "CUT" is three different restaurants: Wolfgang Puck's, a
 * Nova Scotia steakhouse and an Italian one in Caravaggio, so only the Puck
 * addresses are matched.
 *
 * Used by scripts/pruneChains.js, which runs as part of `npm run build`, so a
 * re-geocode or re-import can never quietly reinstate them.
 */

export const EXCLUDED_CHAINS = [
  { brand: 'PLNT Burger' },
  { brand: 'The Capital Grille' },
  { brand: 'Capital Grille' },
  { brand: 'Barcelona Wine Bar' },
  { brand: "Del Frisco's Double Eagle Steakhouse" },
  { brand: "Del Frisco's Grille" },
  { brand: "Ruth's Chris Steak House" },
  { brand: 'CUT by Wolfgang Puck' },
  // The unsuffixed Puck rooms, told apart from the other CUTs by their address.
  { brand: 'CUT', site: 'wolfgangpuck.com' },
  { brand: 'CUT', site: '45-park-lane' },

  // Corporate steakhouse groups. These use `prefix` because their branches are
  // not consistently punctuated: "Mastro's City Hall", "Wolfgang's Steakhouse
  // Grill" and "Hy's Steak House — Honolulu" carry no separable branch suffix.
  { prefix: "Mastro's" },
  { prefix: "Wolfgang's Steakhouse" },
  { prefix: "Stefan's Steakhouse" },
  { prefix: '801 Chophouse' },
  { prefix: 'Smith & Wollensky' },
  { prefix: "Bob's Steak & Chop House" },
  { prefix: "Vic & Anthony's Steakhouse" },
  { prefix: "Jeff Ruby's" },
  { brand: 'The Precinct By Jeff Ruby' },
  { prefix: 'Strip House' },
  { prefix: 'Pappas Bros' },
  // Spelt both ways; the boundary rule means one prefix cannot cover both.
  { prefix: "Hy's Steakhouse" },
  { prefix: "Hy's Steak House" },
  { prefix: 'Charlie Palmer Steak' },
  { prefix: "Joe's Seafood" },

  // Volume chains.
  { prefix: 'Sweetfin' },
  { prefix: 'Big Bad Breakfast' },
];

const norm = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

/** The brand part of "Brand — Branch" / "Brand - Branch"; the whole name otherwise. */
export const brandOf = (name) => String(name || '').split(/\s+[—–-]\s+/)[0].trim();

export const isExcludedChain = (name, website = '') => {
  const n = norm(name);
  if (!n) return false;
  const b = norm(brandOf(name));
  const w = String(website || '').toLowerCase();
  return EXCLUDED_CHAINS.some((rule) => {
    const brandHit = !rule.brand || norm(rule.brand) === n || norm(rule.brand) === b;
    // A prefix must end on a word boundary, so "Strip House" cannot swallow
    // "Strip Housely" and "Mastro's" cannot reach an unrelated "Mastrossimo".
    const p = rule.prefix ? norm(rule.prefix) : null;
    const prefixHit = !p || n === p || n.startsWith(`${p} `);
    const siteHit = !rule.site || w.includes(rule.site.toLowerCase());
    return brandHit && prefixHit && siteHit && (rule.brand || rule.prefix || rule.site);
  });
};
