import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { EpiPage, EpiPageHeader, SmallCaps, Rule, tokens } from './EpiChrome';

const { ink, inkSoft, inkMute, paper, rule, gold, goldDeep, goldSoft, serif, body, sans } = tokens;

// Curated openers. Paths are resolved against the live manifest so a rename in the
// data can never leave a dead link here.
const FEATURED = [
  { city: 'Copenhagen', country: 'Denmark' },
  { city: 'Modena', country: 'Italy' },
  { city: 'Napa Valley', country: 'United States' },
  { city: 'Menton', country: 'France' },
  { city: 'London', country: 'United Kingdom' },
  { city: 'Barcelona', country: 'Spain' },
];

const Destinations = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [manifest, setManifest] = useState(null);
  const [failed, setFailed] = useState(false);
  const [open, setOpen] = useState(() => new Set());

  useEffect(() => { document.title = 'Destinations · The Epicurean'; }, []);

  useEffect(() => {
    let live = true;
    fetch('/data/destinations.json')
      .then((r) => { if (!r.ok) throw new Error(r.statusText); return r.json(); })
      .then((d) => { if (live) setManifest(d); })
      .catch(() => { if (live) setFailed(true); });
    return () => { live = false; };
  }, []);

  const goTo = useCallback((p) => (e) => { e.preventDefault(); navigate(p); }, [navigate]);

  // ── Search ────────────────────────────────────────────────────────────────
  // A country match keeps the whole country; otherwise only the matching cities
  // survive, and the country opens itself so the hits are visible.
  const q = query.trim().toLowerCase();
  const filtered = useMemo(() => {
    if (!manifest) return [];
    if (!q) return manifest.countries;
    const out = [];
    for (const c of manifest.countries) {
      if (c.name.toLowerCase().includes(q)) { out.push(c); continue; }
      const regions = [];
      for (const r of c.regions) {
        const regionHit = r.name && r.name.toLowerCase().includes(q);
        const cities = regionHit ? r.cities : r.cities.filter((x) => x.name.toLowerCase().includes(q));
        if (cities.length) regions.push({ ...r, cities });
      }
      if (regions.length) out.push({ ...c, regions });
    }
    return out;
  }, [manifest, q]);

  const searching = q.length > 0;
  const isOpen = (name) => searching || open.has(name);
  const toggle = (name) =>
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });

  // ── Figures — count up once the real totals land ──────────────────────────
  const totals = manifest?.totals;
  const [stats, setStats] = useState({ countries: 0, cities: 0 });
  useEffect(() => {
    if (!totals) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setStats({ countries: totals.countries, cities: totals.cities });
      return;
    }
    const steps = 60, dur = 1600;
    let step = 0;
    const t = setInterval(() => {
      step++;
      const p = 1 - Math.pow(1 - step / steps, 3);
      setStats({
        countries: Math.floor(totals.countries * p),
        cities: Math.floor(totals.cities * p),
      });
      if (step >= steps) { clearInterval(t); setStats({ countries: totals.countries, cities: totals.cities }); }
    }, dur / steps);
    return () => clearInterval(t);
  }, [totals]);

  const featured = useMemo(() => {
    if (!manifest) return [];
    const index = new Map();
    for (const c of manifest.countries)
      for (const r of c.regions)
        for (const city of r.cities)
          index.set(`${c.name}|${city.name}`.toLowerCase(), { ...city, region: r.name, country: c.name });
    return FEATURED
      .map((f) => {
        const hit = index.get(`${f.country}|${f.city}`.toLowerCase());
        return hit && { name: f.city, country: hit.region || hit.country, path: hit.path };
      })
      .filter(Boolean);
  }, [manifest]);

  const cityLink = (city) => (
    <a
      key={city.path} href={city.path} onClick={goTo(city.path)} className="epi-city-link"
      style={{
        display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'baseline',
        fontFamily: body, fontSize: '1.02rem', color: ink, textDecoration: 'none',
        padding: '.18rem 0', breakInside: 'avoid',
      }}
    >
      <span>{city.name}</span>
      <span style={{ fontFamily: sans, fontSize: '9.5px', letterSpacing: '.12em', color: inkMute, fontVariantNumeric: 'lining-nums tabular-nums' }}>
        {city.count}
      </span>
    </a>
  );

  return (
    <EpiPage active="destinations">
      <EpiPageHeader
        title="Every destination,"
        italicWord="indexed."
        lede="Browse the guide by country and city — every corner of the world where a remarkable table awaits. For the interactive map, visit the Atlas."
      />

      {/* Figures */}
      <section style={{ maxWidth: '820px', margin: '0 auto', padding: '0 2.5rem 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', borderTop: `1px solid ${rule}`, borderBottom: `1px solid ${rule}` }}>
          {[
            { label: 'Countries', value: stats.countries },
            { label: 'Cities', value: stats.cities },
          ].map((s, i) => (
            <div key={s.label} style={{ padding: '1.9rem 1rem', borderLeft: i === 0 ? 'none' : `1px solid ${rule}`, textAlign: 'center' }}>
              <div style={{ fontFamily: serif, fontWeight: 400, fontSize: 'clamp(2.4rem, 4.4vw, 3.6rem)', lineHeight: 1, color: ink, letterSpacing: '-.02em', fontVariantNumeric: 'lining-nums tabular-nums', marginBottom: '.7rem' }}>
                {s.value.toLocaleString()}
              </div>
              <SmallCaps>{s.label}</SmallCaps>
            </div>
          ))}
        </div>
      </section>

      {/* Editors' suggestion */}
      {featured.length > 0 && (
        <section style={{ background: ink, color: paper, padding: 'clamp(3.5rem, 6vw, 5.5rem) 2.5rem', marginTop: 'clamp(3rem, 6vw, 5rem)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 'clamp(1.9rem, 3.4vw, 3rem)', lineHeight: 1.06, letterSpacing: '-.01em', margin: '0 0 2.5rem', color: paper, maxWidth: '640px' }}>
              Cities most worth the journey.
            </h2>
            <div className="epi-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid rgba(200,162,112,.3)' }}>
              {featured.map((c, i) => (
                <a key={c.name} href={c.path} onClick={goTo(c.path)}
                  style={{
                    textDecoration: 'none', color: 'inherit', padding: '1.9rem 1.4rem 1.7rem',
                    borderRight: (i + 1) % 3 === 0 ? 'none' : '1px solid rgba(200,162,112,.16)',
                    borderBottom: '1px solid rgba(200,162,112,.16)',
                    display: 'flex', flexDirection: 'column', gap: '.45rem',
                    cursor: 'pointer', transition: 'background .35s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(200,162,112,.08)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                >
                  <span style={{ fontFamily: sans, fontSize: '10px', letterSpacing: '.3em', textTransform: 'uppercase', color: goldSoft }}>{c.country}</span>
                  <span style={{ fontFamily: serif, fontWeight: 500, fontSize: 'clamp(1.5rem, 2.2vw, 2rem)', letterSpacing: '-.01em', color: paper }}>{c.name}</span>
                  <span className="epi-cta-underline" style={{ fontFamily: body, fontSize: '.98rem', color: '#C9C3B5', width: 'fit-content' }}>Explore the table →</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* The complete index */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(4rem, 7vw, 6.5rem) 2.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '1.75rem' }}>
          <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 'clamp(2rem, 4vw, 3.2rem)', margin: 0, letterSpacing: '-.015em', color: ink }}>
            The complete index
          </h2>
          <div style={{ position: 'relative', minWidth: '280px', flex: '0 1 360px', borderBottom: `1px solid ${ink}` }}>
            <input
              type="text" value={query} onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a city, region, or country…" aria-label="Search destinations"
              style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', padding: '10px 28px 10px 0', fontFamily: body, fontSize: '1.05rem', color: ink }}
            />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={ink} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
              aria-hidden="true" style={{ position: 'absolute', right: 4, top: '50%', transform: 'translateY(-50%)' }}>
              <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
            </svg>
          </div>
        </div>

        <Rule mb={0} />

        {!manifest && !failed && (
          <div style={{ padding: '4rem 2rem', textAlign: 'center', fontFamily: serif, fontSize: '1.3rem', color: gold }}>
            Setting the table…
          </div>
        )}

        {failed && (
          <div style={{ padding: '4rem 2rem', textAlign: 'center', fontFamily: body, color: inkSoft, fontSize: '1.05rem' }}>
            The index couldn't be loaded just now. Try refreshing, or explore the{' '}
            <a href="/atlas" onClick={goTo('/atlas')} style={{ color: goldDeep }}>Atlas</a> instead.
          </div>
        )}

        {manifest && (
          <div style={{ paddingTop: '1.5rem' }}>
            {filtered.map((c) => {
              const expanded = isOpen(c.name);
              return (
                <div key={c.name} style={{ borderBottom: `1px solid ${rule}` }}>
                  <button
                    type="button" onClick={() => toggle(c.name)} aria-expanded={expanded}
                    style={{
                      width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                      display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
                      gap: '1.5rem', padding: '1.1rem .25rem', textAlign: 'left', color: ink,
                      transition: 'color .25s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = gold; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = ink; }}
                  >
                    <span style={{ display: 'flex', alignItems: 'baseline', gap: '.9rem', minWidth: 0 }}>
                      <span aria-hidden="true" style={{
                        fontFamily: sans, fontSize: '11px', color: goldDeep, width: '.9rem',
                        display: 'inline-block', transition: 'transform .25s ease',
                        transform: expanded ? 'rotate(90deg)' : 'none',
                      }}>›</span>
                      <span style={{ fontFamily: serif, fontWeight: 500, fontSize: 'clamp(1.35rem, 2.2vw, 1.7rem)', letterSpacing: '-.01em' }}>
                        {c.name}
                      </span>
                    </span>
                    <span style={{ fontFamily: sans, fontSize: '9.5px', letterSpacing: '.24em', textTransform: 'uppercase', color: inkMute, whiteSpace: 'nowrap' }}>
                      {c.cityCount.toLocaleString()} {c.cityCount === 1 ? 'city' : 'cities'} · {c.count.toLocaleString()} tables
                    </span>
                  </button>

                  {expanded && (
                    <div style={{ padding: '.25rem 0 2rem 1.8rem' }}>
                      {c.regions.map((r) => (
                        <div key={r.name || '_'} style={{ marginBottom: '1.6rem' }}>
                          {r.name && (
                            <div style={{ fontFamily: sans, fontSize: '9.5px', letterSpacing: '.3em', textTransform: 'uppercase', color: inkMute, marginBottom: '.6rem' }}>
                              {r.name}
                            </div>
                          )}
                          <div style={{ columnWidth: '210px', columnGap: '2.5rem' }}>
                            {r.cities.map(cityLink)}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {!filtered.length && (
              <div style={{ padding: '4rem 2rem', textAlign: 'center', fontFamily: body, color: inkSoft, fontSize: '1.1rem' }}>
                No destination matched “{query}”. Try a city or country name.
              </div>
            )}
          </div>
        )}
      </section>
    </EpiPage>
  );
};

export default Destinations;
