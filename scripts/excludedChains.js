/**
 * Brands the guide does not carry.
 *
 * These are multi-location chains that arrived with the geocoded set as one entry
 * per branch ("The Capital Grille — Atlanta"). They are matched on the brand, i.e.
 * the part of the name before a dash, so every branch goes with the brand and a
 * one-off restaurant that merely starts with the same word does not.
 *
 * Used by scripts/pruneChains.js, which runs as part of `npm run build`, so a
 * re-geocode or re-import can never quietly reinstate them.
 */

export const EXCLUDED_CHAINS = [
  'PLNT Burger',
  'The Capital Grille',
  'Capital Grille',
  'Barcelona Wine Bar',
];

const norm = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

/** The brand part of "Brand — Branch" / "Brand - Branch"; the whole name otherwise. */
export const brandOf = (name) => String(name || '').split(/\s+[—–-]\s+/)[0].trim();

const EXCLUDED = new Set(EXCLUDED_CHAINS.map(norm));

export const isExcludedChain = (name) => {
  const n = norm(name);
  if (!n) return false;
  return EXCLUDED.has(n) || EXCLUDED.has(norm(brandOf(name)));
};
