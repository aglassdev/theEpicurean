import React, { useEffect } from 'react';
import { EpiPage, EpiPageHeader, Rule, tokens } from './EpiChrome';

const News = () => {
  const { ink, inkSoft, inkMute, paperDeep, rule, gold, goldDeep, serif, body, sans } = tokens;

  useEffect(() => { document.title = 'News · The Epicurean'; }, []);

  const featured = {
    kicker: 'Dispatch · New York',
    title: "The Times' Best NYC Restaurants of 2025",
    date: 'MMXXV',
    image: '/images/nyt2025.png',
    dek: "A new vanguard of dining rooms, from a Tribeca townhouse to a quiet bistro in Brooklyn. The year's most consequential openings, examined.",
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
        title="News"
        italicWord="& notes"
        lede="Dispatches from the dining world: the openings, awards, and rankings that move the guide, gathered from the journals of record."
      />

      {/* Lead + secondary — an editorial spread, no card frames */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '1rem 2.5rem 4.5rem' }}>
        <div className="epi-news-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 'clamp(2rem, 4vw, 3.5rem)', alignItems: 'start' }}>
          <article>
            <div className="epi-news-lead" style={{ aspectRatio: '4/5', overflow: 'hidden', background: paperDeep, marginBottom: '1.5rem' }}>
              <div style={{ width: '100%', height: '100%', backgroundImage: `url(${featured.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            </div>
            <h2 style={{ fontFamily: serif, fontWeight: 500, fontSize: 'clamp(1.9rem, 3vw, 2.7rem)', lineHeight: 1.08, letterSpacing: '-.01em', margin: '0 0 .7rem', color: ink }}>{featured.title}</h2>
            <p style={{ fontFamily: body, fontStyle: 'normal', fontSize: '1.1rem', color: inkSoft, lineHeight: 1.55, margin: 0, maxWidth: '540px' }}>{featured.dek}</p>
          </article>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {secondary.map((a, idx) => (
              <React.Fragment key={a.title}>
                {idx > 0 && <Rule />}
                <article style={{ display: 'grid', gridTemplateColumns: '132px 1fr', gap: '1.4rem', alignItems: 'center', padding: '1.7rem 0' }}>
                  <div style={{ aspectRatio: '1', overflow: 'hidden', background: paperDeep }}>
                    <div style={{ width: '100%', height: '100%', backgroundImage: `url(${a.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  </div>
                  <h3 style={{ fontFamily: serif, fontWeight: 500, fontSize: 'clamp(1.25rem, 1.7vw, 1.6rem)', lineHeight: 1.16, letterSpacing: '-.005em', margin: 0, color: ink }}>{a.title}</h3>
                </article>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* More headlines */}
      <section style={{ background: paperDeep, borderTop: `1px solid ${rule}`, borderBottom: `1px solid ${rule}`, padding: 'clamp(4rem, 6vw, 6rem) 2.5rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 'clamp(1.9rem, 3vw, 2.8rem)', margin: '0 0 2.25rem', letterSpacing: '-.015em', color: ink }}>
            More headlines
          </h2>
          <div style={{ borderTop: `1px solid ${rule}` }}>
            {headlines.map((h) => (
              <div key={h.title} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.5rem', alignItems: 'baseline', padding: '1.3rem .25rem', borderBottom: `1px solid ${rule}` }}>
                <span style={{ fontFamily: serif, fontSize: 'clamp(1.15rem, 1.6vw, 1.5rem)', fontWeight: 500, letterSpacing: '-.005em', color: ink, lineHeight: 1.2 }}>{h.title}</span>
                <span style={{ fontFamily: sans, fontSize: '10px', letterSpacing: '.26em', textTransform: 'uppercase', color: inkMute, whiteSpace: 'nowrap' }}>{h.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </EpiPage>
  );
};

export default News;
