import React, { useEffect } from 'react';
import { EpiPage, EpiPageHeader, SmallCaps, Rule, tokens } from './EpiChrome';

const News = () => {
  const { ink, inkSoft, inkMute, paperDeep, rule, gold, serif, body, sans } = tokens;

  useEffect(() => { document.title = 'News · The Epicurean'; }, []);

  const featured = {
    kicker: 'Dispatch · New York',
    title: "The Times' Best NYC Restaurants of 2025",
    date: 'MMXXV',
    image: '/images/nyt2025.png',
    dek: "A new vanguard of dining rooms, from a Tribeca townhouse to a quiet bistro in Brooklyn — the year's most consequential openings, examined.",
  };

  const secondary = [
    { kicker: 'Awards · Washington', title: 'Inside the 2025 RAMMY Awards', date: 'MMXXV', image: '/images/rammys2025.png' },
    { kicker: 'Awards · America', title: 'The 2025 James Beard Foundation Honours', date: 'MMXXV', image: '/images/jb2025.png' },
  ];

  const headlines = [
    { kicker: 'Guide · Global', title: 'The Michelin Guide expands into three new regions', date: 'MMXXV' },
    { kicker: 'List · Global', title: "The World's 50 Best names its 2025 laureates", date: 'MMXXV' },
    { kicker: 'Ranking · Global', title: 'La Liste unveils its refreshed Top 1000', date: 'MMXXV' },
    { kicker: 'Wine · America', title: 'Wine Spectator awards a rare Grand Award', date: 'MMXXV' },
    { kicker: 'Sustainability', title: 'Green Stars: the restaurants redefining the table', date: 'MMXXV' },
  ];

  return (
    <EpiPage active="news">
      <EpiPageHeader
        sectionLabel="The Journal"
        title="News"
        italicWord="& Notes"
        lede="Dispatches from the dining world — the openings, awards, and rankings that move the guide, gathered from the journals of record."
      />

      {/* Lead + secondary */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '1rem 2.5rem 4rem' }}>
        <SmallCaps>Section I · Featured</SmallCaps>
        <div style={{ height: '1rem' }} />
        <div className="epi-news-grid" style={{
          display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '2.5rem',
        }}>
          {/* Lead */}
          <a className="epi-feature" href="#" style={{ textDecoration: 'none', color: 'inherit', display: 'block', cursor: 'pointer' }}>
            <div className="epi-news-lead" style={{
              aspectRatio: '4/5', overflow: 'hidden',
              background: paperDeep, border: `1px solid ${rule}`, marginBottom: '1.4rem',
            }}>
              <div className="epi-feature-img" style={{
                width: '100%', height: '100%',
                backgroundImage: `url(${featured.image})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
              }} />
            </div>
            <SmallCaps style={{ color: gold }}>{featured.kicker}</SmallCaps>
            <h2 className="epi-feature-title" style={{
              fontFamily: serif, fontWeight: 500,
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              lineHeight: 1.1, letterSpacing: '-.005em',
              margin: '.6rem 0', color: ink,
            }}>{featured.title}</h2>
            <p style={{
              fontFamily: body, fontStyle: 'italic', fontSize: '1.05rem',
              color: inkSoft, lineHeight: 1.55, margin: 0, maxWidth: '540px',
            }}>{featured.dek}</p>
          </a>

          {/* Secondary stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.25rem' }}>
            {secondary.map((a, idx) => (
              <React.Fragment key={a.title}>
                <a className="epi-feature" href="#" style={{
                  textDecoration: 'none', color: 'inherit', cursor: 'pointer',
                  display: 'grid', gridTemplateColumns: '140px 1fr', gap: '1.4rem',
                }}>
                  <div style={{ aspectRatio: '1', overflow: 'hidden', background: paperDeep, border: `1px solid ${rule}` }}>
                    <div className="epi-feature-img" style={{
                      width: '100%', height: '100%',
                      backgroundImage: `url(${a.image})`,
                      backgroundSize: 'cover', backgroundPosition: 'center',
                    }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <SmallCaps style={{ color: gold }}>{a.kicker}</SmallCaps>
                    <h3 className="epi-feature-title" style={{
                      fontFamily: serif, fontWeight: 500,
                      fontSize: 'clamp(1.2rem, 1.6vw, 1.6rem)',
                      lineHeight: 1.18, letterSpacing: '-.005em',
                      margin: '.45rem 0 .5rem', color: ink,
                    }}>{a.title}</h3>
                    <span style={{
                      fontFamily: sans, fontSize: '10.5px', letterSpacing: '.3em',
                      textTransform: 'uppercase', color: inkMute,
                    }}>Read — {a.date}</span>
                  </div>
                </a>
                {idx === 0 && <Rule />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* More headlines — editorial list */}
      <section style={{
        background: paperDeep, borderTop: `1px solid ${rule}`, borderBottom: `1px solid ${rule}`,
        padding: 'clamp(4rem, 6vw, 6rem) 2.5rem',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <SmallCaps style={{ color: gold }}>Section II</SmallCaps>
            <h2 style={{
              fontFamily: serif, fontWeight: 400,
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              margin: '.5rem 0 0', letterSpacing: '-.01em', color: ink,
            }}>
              More <em style={{ fontStyle: 'italic', color: gold }}>headlines</em>
            </h2>
          </div>
          <div style={{ borderTop: `1px solid ${rule}` }}>
            {headlines.map((h) => (
              <a key={h.title} href="#"
                onClick={(e) => e.preventDefault()}
                style={{
                  display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '1.5rem',
                  alignItems: 'baseline', padding: '1.25rem .5rem',
                  borderBottom: `1px solid ${rule}`, textDecoration: 'none', color: 'inherit',
                  transition: 'background .25s ease, padding-left .25s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(168,130,74,.06)'; e.currentTarget.style.paddingLeft = '1.25rem'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.paddingLeft = '.5rem'; }}
              >
                <span style={{
                  fontFamily: sans, fontSize: '9.5px', letterSpacing: '.28em',
                  textTransform: 'uppercase', color: gold, whiteSpace: 'nowrap',
                }}>{h.kicker}</span>
                <span style={{
                  fontFamily: serif, fontSize: 'clamp(1.15rem, 1.6vw, 1.5rem)',
                  fontWeight: 500, letterSpacing: '-.005em', color: ink, lineHeight: 1.2,
                }}>{h.title}</span>
                <span style={{
                  fontFamily: sans, fontSize: '10px', letterSpacing: '.28em',
                  textTransform: 'uppercase', color: inkMute, whiteSpace: 'nowrap',
                }}>{h.date}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </EpiPage>
  );
};

export default News;
