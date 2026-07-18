import React, { useEffect, useState } from 'react';

// ── Design tokens ─────────────────────────────────────────────────
export const tokens = {
  ink:      '#1F1A14',
  inkSoft:  '#5C544A',
  inkMute:  '#8B8377',
  paper:    '#FAF7F0',
  paperDeep:'#F1ECE0',
  rule:     '#D9D1BE',
  gold:     '#A8824A',
  goldSoft: '#C8A270',
  serif:    '"Cormorant Garamond", "EB Garamond", "Times New Roman", serif',
  body:     '"EB Garamond", "Cormorant Garamond", Georgia, serif',
  sans:     '"Jost", "Helvetica Neue", Arial, sans-serif',
};

// ── One-time global stylesheet ────────────────────────────────────
export const useEpiStyles = () => {
  useEffect(() => {
    if (document.getElementById('epicurean-global-styles')) return;
    const style = document.createElement('style');
    style.id = 'epicurean-global-styles';
    style.innerHTML = `
      html, body { background: ${tokens.paper}; margin: 0; }
      body { font-family: ${tokens.body}; color: ${tokens.ink}; }
      @keyframes epi-rise { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
      @keyframes epi-fade { from { opacity: 0; } to { opacity: 1; } }
      @keyframes epi-line { from { transform: scaleX(0); } to { transform: scaleX(1); } }
      .epi-rise { animation: epi-rise 1.1s cubic-bezier(.2,.7,.2,1) both; }
      .epi-fade { animation: epi-fade 1.6s ease-out both; }
      .epi-line { transform-origin: left center; animation: epi-line 1.4s cubic-bezier(.2,.7,.2,1) both; }
      .epi-nav-link { position: relative; }
      .epi-nav-link::after {
        content: ''; position: absolute; left: 50%; bottom: -6px;
        width: 0; height: 1px; background: ${tokens.ink};
        transition: width .45s cubic-bezier(.2,.7,.2,1), left .45s cubic-bezier(.2,.7,.2,1);
      }
      .epi-nav-link:hover::after { width: 100%; left: 0; }
      .epi-nav-link.active::after { width: 100%; left: 0; background: ${tokens.gold}; }
      .epi-feature:hover .epi-feature-title { color: ${tokens.gold}; }
      .epi-feature-title { transition: color .5s ease; }
      .epi-feature-img { transition: transform 1.2s cubic-bezier(.2,.7,.2,1), filter .8s ease; }
      .epi-feature:hover .epi-feature-img { transform: scale(1.04); }
      .epi-source { transition: opacity .4s ease, transform .4s ease; opacity: .55; filter: grayscale(1); }
      .epi-source:hover { opacity: 1; filter: grayscale(0); transform: translateY(-2px); }
      .epi-cta { transition: letter-spacing .5s ease, color .4s ease; }
      .epi-cta:hover { letter-spacing: .42em; color: ${tokens.gold}; }
      .epi-card { transition: transform .5s cubic-bezier(.2,.7,.2,1), background .35s ease, border-color .35s ease; }
      .epi-card:hover { transform: translateY(-3px); background: ${tokens.paper}; border-color: ${tokens.gold}; }
      .epi-city-link { transition: color .25s ease, padding-left .25s ease; }
      .epi-city-link:hover { color: ${tokens.gold}; padding-left: 6px; }
      .epi-toc-link { transition: color .35s ease, border-color .35s ease; border-bottom: 1px solid transparent; }
      .epi-toc-link:hover { color: ${tokens.gold}; border-color: ${tokens.gold}; }
      .epi-award-num {
        font-family: ${tokens.serif}; font-weight: 400;
        color: ${tokens.gold}; line-height: 1;
        font-feature-settings: "lnum" 1, "onum" 0;
      }
      @media (max-width: 860px) {
        .epi-news-grid { grid-template-columns: 1fr !important; }
        .epi-news-lead { aspect-ratio: 4/3 !important; }
        .epi-about-row { flex-direction: column !important; gap: 3rem !important; }
        .epi-stat-divider { display: none !important; }
        .epi-masthead-row { flex-direction: column !important; gap: .75rem !important; text-align: center !important; }
        .epi-nav-links { gap: 1.25rem !important; }
        .epi-grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
        .epi-grid-3 { grid-template-columns: 1fr !important; }
        .epi-grid-5 { grid-template-columns: repeat(2, 1fr) !important; }
        .epi-two-col { grid-template-columns: 1fr !important; }
      }
    `;
    document.head.appendChild(style);
  }, []);
};

// ── Small-caps label helper ───────────────────────────────────────
export const SmallCaps = ({ children, style = {} }) => (
  <span style={{
    fontFamily: tokens.sans, fontSize: '11px', fontWeight: 400,
    letterSpacing: '.28em', textTransform: 'uppercase',
    color: tokens.inkSoft, ...style,
  }}>{children}</span>
);

// ── Hairline rule ─────────────────────────────────────────────────
export const Rule = ({ color = tokens.rule, mt = 0, mb = 0, width = '100%' }) => (
  <div style={{ height: '1px', background: color, width, marginTop: mt, marginBottom: mb }} />
);

// ── Sticky masthead nav ───────────────────────────────────────────
const navBtn = {
  background: 'none', border: 'none',
  fontFamily: tokens.sans, fontSize: '11px', fontWeight: 400,
  letterSpacing: '.32em', textTransform: 'uppercase',
  cursor: 'pointer', color: tokens.ink, padding: '4px 0',
};

export const EpiNav = ({ active }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (path) => () => { window.location.href = path; };
  const cls = (key) => `epi-nav-link ${active === key ? 'active' : ''}`;

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 1000,
      background: tokens.paper,
      borderBottom: `1px solid ${tokens.rule}`,
    }}>
      <div className="epi-masthead-row" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: scrolled ? '.6rem 2.25rem' : '1.4rem 2.25rem',
        transition: 'padding .4s ease',
      }}>
        <div className="epi-nav-links" style={{ display: 'flex', gap: '2.25rem', flex: 1 }}>
          <button className={cls('journal')} style={navBtn}>Journal</button>
          <button className={cls('methodology')} onClick={go('/methodology')} style={navBtn}>Methodology</button>
        </div>

        <a
          href="/"
          onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}
          style={{ textDecoration: 'none', flex: '0 0 auto', textAlign: 'center' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{
              fontFamily: tokens.serif,
              fontSize: scrolled ? '24px' : '30px',
              fontWeight: 500, letterSpacing: '.14em', color: tokens.ink,
              textTransform: 'uppercase', transition: 'font-size .4s ease',
            }}>
              The Epicurean
            </span>
          </div>
        </a>

        <div className="epi-nav-links" style={{
          display: 'flex', gap: '2.25rem', flex: 1,
          justifyContent: 'flex-end', alignItems: 'center',
        }}>
          <button className={cls('atlas')} onClick={go('/map')} style={navBtn}>Atlas</button>
          <button className={cls('destinations')} onClick={go('/destinations')} style={navBtn}>Destinations</button>
        </div>
      </div>
    </nav>
  );
};

// ── Footer ────────────────────────────────────────────────────────
export const EpiFooter = () => {
  const cols = [
    { h: 'Sections', items: [['Destinations','/destinations'], ['Atlas','/map'], ['Journal','#'], ['Methodology','/methodology']] },
  ];
  return (
    <footer style={{
      background: tokens.ink, color: tokens.paper,
      padding: '4.5rem 2.5rem 2rem',
    }}>
      <div className="epi-two-col" style={{
        maxWidth: '1280px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1.4fr 1fr',
        gap: '3rem', alignItems: 'flex-start',
      }}>
        <div>
          <div style={{
            fontFamily: tokens.serif, fontSize: '28px', fontWeight: 500,
            letterSpacing: '.14em', textTransform: 'uppercase', color: tokens.paper,
            marginBottom: '1.25rem',
          }}>The Epicurean</div>
          <p style={{
            fontFamily: tokens.body, fontStyle: 'italic', fontSize: '1rem',
            color: '#C9C3B5', lineHeight: 1.6, maxWidth: '320px', margin: 0,
          }}>
            A compendium of the world's finest tables, refined from a hundred sources into one definitive guide.
          </p>
        </div>
        {cols.map((col) => (
          <div key={col.h}>
            <div style={{
              fontFamily: tokens.sans, fontSize: '10px', letterSpacing: '.34em',
              textTransform: 'uppercase', color: tokens.gold, marginBottom: '1.2rem',
            }}>{col.h}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
              {col.items.map(([it, href]) => (
                <a key={it} href={href}
                   onClick={(e) => { if (href !== '#') { e.preventDefault(); window.location.href = href; } }}
                   style={{
                     fontFamily: tokens.serif, fontSize: '1.05rem',
                     color: '#E6E1D2', textDecoration: 'none',
                     transition: 'color .3s ease',
                   }}
                   onMouseEnter={(e) => e.currentTarget.style.color = tokens.gold}
                   onMouseLeave={(e) => e.currentTarget.style.color = '#E6E1D2'}>
                  {it}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{
        maxWidth: '1280px', margin: '3.5rem auto 0',
        paddingTop: '1.5rem',
        borderTop: `1px solid rgba(250,247,240,.12)`,
        textAlign: 'center',
        fontFamily: tokens.sans, fontSize: '11px', letterSpacing: '.22em',
        color: '#9C9586',
      }}>
        a glass production
      </div>
    </footer>
  );
};

// ── Page wrapper: utility bar + nav + content + footer ────────────
export const EpiPage = ({ active, children }) => {
  useEpiStyles();
  return (
    <div style={{
      fontFamily: tokens.body, color: tokens.ink,
      backgroundColor: tokens.paper, minHeight: '100vh',
      width: '100vw', margin: 0, padding: 0,
      overflowX: 'hidden', boxSizing: 'border-box',
      WebkitFontSmoothing: 'antialiased',
    }}>
      <EpiNav active={active} />
      {children}
      <EpiFooter />
    </div>
  );
};

// ── Page header (used by Destinations, Methodology) ───────────────
export const EpiPageHeader = ({ kicker, title, italicWord, lede, sectionLabel }) => (
  <section style={{
    padding: '5rem 2.5rem 2.5rem',
    textAlign: 'center',
    maxWidth: '1100px',
    margin: '0 auto',
  }}>
    {sectionLabel && <SmallCaps style={{ color: tokens.gold }}>{sectionLabel}</SmallCaps>}
    {kicker && !sectionLabel && <SmallCaps style={{ color: tokens.gold }}>{kicker}</SmallCaps>}
    <h1 className="epi-rise" style={{
      fontFamily: tokens.serif, fontWeight: 400,
      fontSize: 'clamp(2.6rem, 6vw, 5rem)',
      lineHeight: 1.04, letterSpacing: '-.01em',
      margin: '1rem 0 1rem', color: tokens.ink,
    }}>
      {title}
      {italicWord && (
        <> <em style={{ fontStyle: 'italic', color: tokens.gold }}>{italicWord}</em></>
      )}
    </h1>
    {lede && (
      <p style={{
        fontFamily: tokens.body, fontSize: '1.15rem', fontStyle: 'italic',
        color: tokens.inkSoft, maxWidth: '640px', margin: '0 auto 1.8rem',
        lineHeight: 1.6,
      }}>{lede}</p>
    )}
    <div className="epi-line" style={{
      width: '64px', height: '1px', background: tokens.gold, margin: '0 auto',
    }} />
  </section>
);
