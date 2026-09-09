/**
 * countrySlug.js
 * --------------
 * One reading of a free-text country field, shared by the scripts that have to
 * agree on what country a record is in.
 *
 * The geocoded set writes countries however the source did: "USA", "United
 * States", "Türkiye", "UK", "Hong Kong". The component tree uses directory
 * slugs. Both sides go through here so a comparison between them means
 * something.
 */

export const slugify = (t) => (t || '').toLowerCase()
  .replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
  .replace(/-+/g, '-').replace(/^-+|-+$/g, '').trim();

/** Free text or a directory slug → the slug the component tree files it under. */
export const countrySlugFrom = (text) => {
  const s = String(text || '').toLowerCase();
  if (!s.trim()) return '';
  if (/\busa\b|united[\s-]states/.test(s)) return 'usa';
  if (/hong[\s-]kong/.test(s)) return 'hong-kong';
  if (/macau|macao/.test(s)) return 'macau';
  if (/united[\s-]kingdom|england|scotland|wales|northern[\s-]ireland|\buk\b/.test(s)) return 'uk';
  if (/republic[\s-]of[\s-]ireland|^ireland$/.test(s)) return 'ireland';
  if (/south[\s-]korea|\bkorea\b/.test(s)) return 'south-korea';
  if (/czech/.test(s)) return 'czechia';
  if (/emirates|\buae\b|dubai|abu[\s-]dhabi/.test(s)) return 'uae';
  if (/t(ü|u|)rkiye|turkey/.test(s)) return 'turkey';
  if (/china|chinese[\s-]mainland/.test(s)) return 'china';
  if (/dominican/.test(s)) return 'dominican-republic';
  if (/bosnia/.test(s)) return 'bosnia-and-herzegovina';
  if (/philippines/.test(s)) return 'philippines';
  if (/monaco/.test(s)) return 'monaco';
  // Otherwise the last comma-separated part, which is where a country sits in an
  // address and is the whole string when the field is already just a country.
  return slugify(s.split(',').pop().trim());
};
