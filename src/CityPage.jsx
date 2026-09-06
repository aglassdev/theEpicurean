import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EpiPage, SmallCaps, tokens, useMediaQuery } from './EpiChrome';

const { ink, inkSoft, inkMute, paper, paperDeep, rule, gold, goldDeep, serif, body, sans } = tokens;

const stem = (src) => String(src).replace(/^.*\//, '').replace(/\.[^.]+$/, '');

// Prices arrive as a run of the local currency symbol, sometimes with a suffix
// ("$$$ · Prix Fixe"). The run length is the tier; the symbol tells us which
// currency to label the filter with, so Paris offers € and Tokyo ¥.
const CURRENCY = /[$€£¥฿₩₺₹₽₪R]/;
const priceTier = (p) => {
  const m = String(p || '').match(/^\s*([$€£¥฿₩₺₹₽₪]+)/);
  return m ? Math.min(m[1].length, 5) : 0;
};
const currencyOf = (p) => (String(p || '').match(CURRENCY) || [null])[0];

const cuisinesOf = (r) =>
  String(r.cuisine || '')
    .split(',')
    .map((c) => c.trim())
    .filter(Boolean);

/** Photography for a card, from the WebP derivatives with the source as fallback. */
const CardArt = ({ src, name }) => {
  if (!src) {
    return (
      <div aria-hidden style={{
        position: 'absolute', inset: 0, background: paperDeep,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1rem', textAlign: 'center',
      }}>
        <span style={{
          fontFamily: serif, fontSize: '2.6rem', lineHeight: 1,
          color: rule, letterSpacing: '.04em',
        }}>{name.charAt(0)}</span>
      </div>
    );
  }
  return (
    <img
      src={`/images/opt/${stem(src)}-1600.webp`}
      srcSet={`/images/opt/${stem(src)}-1600.webp 1600w, /images/opt/${stem(src)}-3200.webp 3200w`}
      sizes="(max-width: 720px) 100vw, 320px"
      alt="" aria-hidden loading="lazy" decoding="async"
      onError={(e) => {
        if (e.currentTarget.dataset.fallback) return;
        e.currentTarget.dataset.fallback = '1';
        e.currentTarget.srcset = '';
        e.currentTarget.src = src;
      }}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
    />
  );
};

/**
 * A city listing, rendered from /components/{…}/{city}/index.json.
 * Every city in the guide comes through here, so the listing reads the same
 * whether you land on Washington or Kyoto.
 */
const CityPage = ({ data }) => {
  const navigate = useNavigate();
  const narrow = useMediaQuery('(max-width: 720px)');
  const [query, setQuery] = useState('');
  const [tiers, setTiers] = useState(() => new Set());
  const [cuisine, setCuisine] = useState('');

  const { title, city, country, region, hero, restaurants = [] } = data;
  const name = city || title;

  useEffect(() => { document.title = `${name} · The Epicurean`; }, [name]);

  const goTo = (p) => (e) => { e.preventDefault(); navigate(p); };

  // The symbol most of this city's tables are priced in.
  const symbol = useMemo(() => {
    const tally = {};
    for (const r of restaurants) {
      const c = currencyOf(r.price);
      if (c) tally[c] = (tally[c] || 0) + 1;
    }
    return Object.entries(tally).sort((a, b) => b[1] - a[1])[0]?.[0] || '$';
  }, [restaurants]);

  // Only offer tiers this city actually has.
  const availableTiers = useMemo(() => {
    const set = new Set();
    for (const r of restaurants) {
      const t = priceTier(r.price);
      if (t) set.add(t);
    }
    return [...set].sort();
  }, [restaurants]);

  const cuisineOptions = useMemo(() => {
    const tally = new Map();
    for (const r of restaurants) {
      for (const c of cuisinesOf(r)) tally.set(c, (tally.get(c) || 0) + 1);
    }
    return [...tally.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'en'))
      .map(([label, count]) => ({ label, count }));
  }, [restaurants]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return restaurants.filter((r) => {
      if (tiers.size && !tiers.has(priceTier(r.price))) return false;
      if (cuisine && !cuisinesOf(r).includes(cuisine)) return false;
      if (!q) return true;
      return (
        r.name.toLowerCase().includes(q) ||
        (r.cuisine || '').toLowerCase().includes(q)
      );
    });
  }, [restaurants, query, tiers, cuisine]);

  const toggleTier = (t) =>
    setTiers((prev) => {
      const next = new Set(prev);
      next.has(t) ? next.delete(t) : next.add(t);
      return next;
    });

  const active = tiers.size > 0 || !!cuisine || !!query.trim();
  const clearAll = () => { setTiers(new Set()); setCuisine(''); setQuery(''); };

  const chip = (on) => ({
    fontFamily: sans, fontSize: '11px', letterSpacing: '.1em',
    padding: '.5rem .7rem', cursor: 'pointer', lineHeight: 1,
    border: `1px solid ${on ? ink : rule}`,
    background: on ? ink : 'transparent',
    color: on ? paper : inkSoft,
    transition: 'background .2s ease, color .2s ease, border-color .2s ease',
  });

  return (
    <EpiPage active="destinations">
      {/* City banner, where we have one */}
      {hero && (
        <div style={{ width: '100%', height: 'clamp(220px, 38vh, 420px)', overflow: 'hidden', background: paperDeep }}>
          <img
            src={`/images/opt/${stem(hero)}-1600.webp`}
            srcSet={`/images/opt/${stem(hero)}-1600.webp 1600w, /images/opt/${stem(hero)}-3200.webp 3200w`}
            sizes="100vw" alt="" aria-hidden decoding="async" fetchpriority="high"
            onError={(e) => {
              if (e.currentTarget.dataset.fallback) return;
              e.currentTarget.dataset.fallback = '1';
              e.currentTarget.srcset = '';
              e.currentTarget.src = hero;
            }}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      )}

      {/* Masthead */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: `clamp(2.5rem, 5vw, 4rem) 2.5rem 0` }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: '1.6rem' }}>
          <ol style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '.55rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {[
              { label: 'Destinations', href: '/destinations' },
              country && { label: country },
              region && { label: region },
            ].filter(Boolean).map((crumb, i, arr) => (
              <li key={crumb.label} style={{ display: 'flex', alignItems: 'center', gap: '.55rem' }}>
                {crumb.href ? (
                  <a href={crumb.href} onClick={goTo(crumb.href)} className="epi-city-link"
                    style={{ fontFamily: sans, fontSize: '10px', letterSpacing: '.28em', textTransform: 'uppercase', color: goldDeep, textDecoration: 'none' }}>
                    {crumb.label}
                  </a>
                ) : (
                  <span style={{ fontFamily: sans, fontSize: '10px', letterSpacing: '.28em', textTransform: 'uppercase', color: inkMute }}>
                    {crumb.label}
                  </span>
                )}
                {i < arr.length - 1 && <span aria-hidden="true" style={{ color: rule, fontSize: '10px' }}>/</span>}
              </li>
            ))}
          </ol>
        </nav>

        <h1 style={{
          fontFamily: serif, fontWeight: 400, fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
          lineHeight: .98, letterSpacing: '-.025em', margin: '0 0 1.4rem', color: ink,
        }}>
          {name}
        </h1>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '1.6rem', paddingBottom: '1.4rem' }}>
          <SmallCaps>
            {active
              ? `${filtered.length.toLocaleString()} of ${restaurants.length.toLocaleString()}`
              : `${restaurants.length.toLocaleString()} ${restaurants.length === 1 ? 'table' : 'tables'}`}
          </SmallCaps>
        </div>
      </section>

      {/* Filters */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2.5rem' }}>
        <div style={{
          borderTop: `1px solid ${rule}`, borderBottom: `1px solid ${rule}`,
          padding: '1.1rem 0', display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', gap: '1.5rem',
        }}>
          {availableTiers.length > 1 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: sans, fontSize: '10px', letterSpacing: '.28em', textTransform: 'uppercase', color: inkMute }}>Price</span>
              {availableTiers.map((t) => (
                <button key={t} type="button" onClick={() => toggleTier(t)}
                  aria-pressed={tiers.has(t)} style={chip(tiers.has(t))}>
                  {symbol.repeat(t)}
                </button>
              ))}
            </div>
          )}

          {cuisineOptions.length > 1 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
              <label htmlFor="epi-cuisine" style={{ fontFamily: sans, fontSize: '10px', letterSpacing: '.28em', textTransform: 'uppercase', color: inkMute }}>
                Cuisine
              </label>
              <select id="epi-cuisine" value={cuisine} onChange={(e) => setCuisine(e.target.value)}
                style={{
                  fontFamily: body, fontSize: '1rem', color: ink, background: 'transparent',
                  border: `1px solid ${rule}`, padding: '.42rem .6rem', cursor: 'pointer',
                  maxWidth: '260px',
                }}>
                <option value="">All cuisines</option>
                {cuisineOptions.map((c) => (
                  <option key={c.label} value={c.label}>{c.label} ({c.count})</option>
                ))}
              </select>
            </div>
          )}

          <div style={{ position: 'relative', flex: '1 1 200px', minWidth: '180px', borderBottom: `1px solid ${rule}` }}>
            <input
              type="text" value={query} onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search ${name}…`} aria-label={`Search tables in ${name}`}
              style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', padding: '8px 0', fontFamily: body, fontSize: '1rem', color: ink }}
            />
          </div>

          {active && (
            <button type="button" onClick={clearAll}
              style={{ ...chip(false), border: 'none', color: goldDeep, letterSpacing: '.22em', textTransform: 'uppercase', fontSize: '10px', padding: '.5rem 0' }}>
              Clear
            </button>
          )}
        </div>
      </section>

      {/* The tables */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(2rem, 4vw, 3rem) 2.5rem clamp(4rem, 8vw, 6rem)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: narrow ? '1fr' : 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 'clamp(1.5rem, 2.5vw, 2.2rem)',
        }}>
          {filtered.map((r) => (
            <a key={r.path} href={r.path} onClick={goTo(r.path)} className="epi-feature"
              style={{
                display: 'flex', flexDirection: 'column', textDecoration: 'none',
                color: ink, border: `1px solid ${rule}`, background: paper,
                overflow: 'hidden', transition: 'border-color .3s ease, transform .3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = gold; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = rule; e.currentTarget.style.transform = 'none'; }}
            >
              <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', overflow: 'hidden', background: paperDeep }}>
                <CardArt src={r.image} name={r.name} />
              </div>
              <div style={{ padding: '1.15rem 1.2rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '.6rem', flex: 1 }}>
                <h2 className="epi-feature-title" style={{
                  fontFamily: serif, fontWeight: 500, fontSize: '1.3rem',
                  lineHeight: 1.2, letterSpacing: '-.01em', margin: 0, color: ink,
                }}>
                  {r.name}
                </h2>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem', marginTop: 'auto' }}>
                  <span style={{ fontFamily: sans, fontSize: '10px', letterSpacing: '.16em', textTransform: 'uppercase', color: inkMute, minWidth: 0 }}>
                    {r.cuisine}
                  </span>
                  {r.price && (
                    <span style={{ fontFamily: sans, fontSize: '11px', letterSpacing: '.1em', color: goldDeep, whiteSpace: 'nowrap' }}>
                      {r.price}
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>

        {!filtered.length && (
          <div style={{ padding: '4rem 2rem', textAlign: 'center', fontFamily: body, color: inkSoft, fontSize: '1.1rem' }}>
            No table in {name} matches those filters.
          </div>
        )}
      </section>
    </EpiPage>
  );
};

export default CityPage;
