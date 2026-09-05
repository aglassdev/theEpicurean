import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EpiPage, SmallCaps, tokens, useMediaQuery } from './EpiChrome';

const { ink, inkSoft, inkMute, paper, paperDeep, rule, gold, goldDeep, serif, body, sans } = tokens;

/**
 * A city listing, rendered from /components/{…}/{city}/index.json.
 * Every city in the guide — domestic or not — comes through here, so the
 * listing reads the same whether you land on Washington or Kyoto.
 */
const CityPage = ({ data }) => {
  const navigate = useNavigate();
  const narrow = useMediaQuery('(max-width: 720px)');
  const [query, setQuery] = useState('');

  const { title, city, country, region, restaurants = [] } = data;
  const name = city || title;

  useEffect(() => {
    document.title = `${name} · The Epicurean`;
  }, [name]);

  const goTo = (p) => (e) => { e.preventDefault(); navigate(p); };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return restaurants;
    return restaurants.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        (r.cuisine || '').toLowerCase().includes(q) ||
        (r.award || '').toLowerCase().includes(q)
    );
  }, [query, restaurants]);

  const images = useMemo(
    () => restaurants.map((r) => r.image).filter(Boolean).slice(0, 4),
    [restaurants]
  );

  const starred = restaurants.filter((r) => (r.award || '').startsWith('★')).length;
  const showFilter = restaurants.length > 24;

  return (
    <EpiPage active="destinations">
      {/* Masthead */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(3rem, 6vw, 5rem) 2.5rem 0' }}>
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
            {restaurants.length.toLocaleString()} {restaurants.length === 1 ? 'table' : 'tables'}
          </SmallCaps>
          {starred > 0 && (
            <span style={{ fontFamily: sans, fontSize: '10px', letterSpacing: '.28em', textTransform: 'uppercase', color: goldDeep }}>
              {starred} starred
            </span>
          )}
        </div>
      </section>

      {/* A city with photographed tables gets a strip; most don't, and go straight to the index. */}
      {images.length > 0 && (
        <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2.5rem 1rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${narrow ? 2 : Math.min(images.length, 4)}, 1fr)`,
            gap: '2px', background: rule, border: `1px solid ${rule}`,
          }}>
            {images.map((src, i) => (
              <div key={i} style={{ aspectRatio: '4 / 3', overflow: 'hidden', background: paperDeep }}>
                <img src={src} alt="" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* The index */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(1.5rem, 3vw, 2.5rem) 2.5rem clamp(4rem, 8vw, 6rem)' }}>
        {showFilter && (
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.2rem' }}>
            <div style={{ position: 'relative', minWidth: '260px', flex: '0 1 340px', borderBottom: `1px solid ${ink}` }}>
              <input
                type="text" value={query} onChange={(e) => setQuery(e.target.value)}
                placeholder={`Search ${name}…`} aria-label={`Search tables in ${name}`}
                style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', padding: '10px 28px 10px 0', fontFamily: body, fontSize: '1.05rem', color: ink }}
              />
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={ink} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true" style={{ position: 'absolute', right: 4, top: '50%', transform: 'translateY(-50%)' }}>
                <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
              </svg>
            </div>
          </div>
        )}

        <div style={{
          borderTop: `1px solid ${rule}`,
          display: 'grid',
          gridTemplateColumns: narrow ? '1fr' : 'repeat(auto-fill, minmax(400px, 1fr))',
          columnGap: '3.5rem',
        }}>
          {filtered.map((r) => (
            <a
              key={r.path} href={r.path} onClick={goTo(r.path)}
              style={{
                display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.25rem',
                alignItems: 'baseline', padding: '1.15rem .25rem',
                borderBottom: `1px solid ${rule}`, textDecoration: 'none',
                color: ink, transition: 'color .25s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = gold; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = ink; }}
            >
              <span style={{ minWidth: 0 }}>
                <span style={{ fontFamily: serif, fontWeight: 500, fontSize: '1.35rem', letterSpacing: '-.01em', lineHeight: 1.25 }}>
                  {r.name}
                </span>
                {r.award && (
                  <span style={{
                    display: 'block', marginTop: '.28rem', fontFamily: sans, fontSize: '10px',
                    letterSpacing: '.22em', textTransform: 'uppercase', color: goldDeep,
                  }}>
                    {r.award}
                  </span>
                )}
              </span>
              <span style={{
                fontFamily: sans, fontSize: '10.5px', letterSpacing: '.16em',
                textTransform: 'uppercase', color: inkMute, textAlign: 'right',
                maxWidth: '13rem', lineHeight: 1.5,
              }}>
                {[r.cuisine, r.price].filter(Boolean).join(' · ')}
              </span>
            </a>
          ))}
        </div>

        {!filtered.length && (
          <div style={{ padding: '4rem 2rem', textAlign: 'center', fontFamily: body, color: inkSoft, fontSize: '1.1rem' }}>
            No table in {name} matched “{query}”.
          </div>
        )}
      </section>
    </EpiPage>
  );
};

export default CityPage;
