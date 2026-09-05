import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// ── Design tokens ─────────────────────────────────────────────────
export const tokens = {
  ink:      '#1F1A14',
  inkSoft:  '#5C544A',
  inkMute:  '#8B8377',
  paper:    '#FAF7F0',
  paperDeep:'#F1ECE0',
  rule:     '#D9D1BE',
  gold:     '#A8824A',
  goldDeep: '#8A6A38', // AA-safe gold for small text on paper (4.6:1)
  goldSoft: '#C8A270',
  serif:    '"Cormorant Garamond", "EB Garamond", "Times New Roman", serif',
  body:     '"EB Garamond", "Cormorant Garamond", Georgia, serif',
  sans:     '"Jost", "Helvetica Neue", Arial, sans-serif',
};

// ── Small viewport hook ───────────────────────────────────────────
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  );
  useEffect(() => {
    const m = window.matchMedia(query);
    const on = () => setMatches(m.matches);
    on();
    m.addEventListener('change', on);
    return () => m.removeEventListener('change', on);
  }, [query]);
  return matches;
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
      ::selection { background: ${tokens.gold}; color: ${tokens.paper}; }
      :focus-visible { outline: 2px solid ${tokens.gold}; outline-offset: 3px; border-radius: 1px; }
      :focus:not(:focus-visible) { outline: none; }
      @keyframes epi-rise { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
      @keyframes epi-line { from { transform: scaleX(0); } to { transform: scaleX(1); } }
      .epi-rise { animation: epi-rise 1s cubic-bezier(.2,.7,.2,1) both; }
      .epi-line { transform-origin: left center; animation: epi-line 1.3s cubic-bezier(.2,.7,.2,1) both; }
      .epi-nav-link { position: relative; }
      .epi-nav-link::after {
        content: ''; position: absolute; left: 0; right: 0; bottom: -6px;
        height: 1px; background: ${tokens.ink};
        transform: scaleX(0); transform-origin: center;
        transition: transform .45s cubic-bezier(.2,.7,.2,1), background .3s ease;
      }
      .epi-nav-link:hover::after { transform: scaleX(1); }
      .epi-nav-link.active::after { transform: scaleX(1); background: ${tokens.gold}; }
      .epi-feature .epi-feature-title { transition: color .5s ease; }
      .epi-feature:hover .epi-feature-title { color: ${tokens.gold}; }
      .epi-feature-img { transition: transform 1.2s cubic-bezier(.2,.7,.2,1), filter .8s ease; will-change: transform; }
      .epi-feature:hover .epi-feature-img { transform: scale(1.045); }
      .epi-cta-underline { background-image: linear-gradient(${tokens.gold}, ${tokens.gold}); background-size: 0% 1px; background-repeat: no-repeat; background-position: 0 100%; transition: background-size .5s cubic-bezier(.2,.7,.2,1); padding-bottom: 3px; }
      .epi-cta-underline:hover { background-size: 100% 1px; }
      .epi-city-link { transition: color .25s ease, transform .25s ease; }
      .epi-city-link:hover { color: ${tokens.gold}; transform: translateX(6px); }
      .epi-row { transition: background .3s ease, transform .3s ease; }
      .epi-menu-item { transition: color .25s ease; }
      .epi-menu-item:hover { color: ${tokens.gold}; }
      @media (max-width: 860px) {
        .epi-news-grid { grid-template-columns: 1fr !important; }
        .epi-news-lead { aspect-ratio: 4/3 !important; }
        .epi-about-row { flex-direction: column !important; gap: 2.5rem !important; }
        .epi-grid-3 { grid-template-columns: 1fr !important; }
        .epi-grid-5 { grid-template-columns: repeat(2, 1fr) !important; }
        .epi-two-col { grid-template-columns: 1fr !important; }
        .epi-toc-bar { position: static !important; top: auto !important; }
        /* Two award columns get cramped on a phone — stack them, and drop the
           full-width span the odd last one carries on desktop. */
        .epi-distinctions { grid-template-columns: 1fr !important; }
        .epi-distinctions > * { grid-column: auto !important; }
      }
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: .001ms !important; animation-iteration-count: 1 !important;
          transition-duration: .001ms !important; scroll-behavior: auto !important;
        }
      }
    `;
    document.head.appendChild(style);
  }, []);
};

// ── Small-caps label (functional labels only — never as a heading eyebrow) ──
export const SmallCaps = ({ children, style = {} }) => (
  <span style={{
    fontFamily: tokens.sans, fontSize: '11px', fontWeight: 400,
    letterSpacing: '.26em', textTransform: 'uppercase',
    color: tokens.inkSoft, ...style,
  }}>{children}</span>
);

// ── Hairline rule ─────────────────────────────────────────────────
export const Rule = ({ color = tokens.rule, mt = 0, mb = 0, width = '100%' }) => (
  <div style={{ height: '1px', background: color, width, marginTop: mt, marginBottom: mb }} />
);

// ── Sticky masthead nav ───────────────────────────────────────────
const NAV_LINKS = [
  ['news', 'News', '/news'],
  ['methodology', 'Methodology', '/methodology'],
  ['atlas', 'Atlas', '/map'],
  ['destinations', 'Destinations', '/destinations'],
];

const navBtn = {
  background: 'none', border: 'none',
  fontFamily: tokens.sans, fontSize: '11px', fontWeight: 400,
  letterSpacing: '.3em', textTransform: 'uppercase',
  cursor: 'pointer', color: tokens.ink, padding: '4px 0',
};

const Wordmark = ({ scrolled, onClick, size }) => (
  <a href="/" onClick={onClick} style={{ textDecoration: 'none', flex: '0 0 auto', textAlign: 'center' }}>
    <span style={{
      fontFamily: tokens.serif,
      fontSize: size || (scrolled ? '23px' : '29px'),
      fontWeight: 500, letterSpacing: '.14em', color: tokens.ink,
      textTransform: 'uppercase', transition: 'font-size .4s ease', display: 'block',
    }}>
      The Epicurean
    </span>
  </a>
);

export const EpiNav = ({ active }) => {
  const navigate = useNavigate();
  const mobile = useMediaQuery('(max-width: 860px)');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => { if (!mobile) setOpen(false); }, [mobile]);

  const go = (path) => (e) => { if (e) e.preventDefault(); setOpen(false); navigate(path); };
  const cls = (key) => `epi-nav-link ${active === key ? 'active' : ''}`;

  if (mobile) {
    return (
      <nav style={{ position: 'sticky', top: 0, zIndex: 1000, background: tokens.paper, borderBottom: `1px solid ${tokens.rule}` }}>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '.85rem 1.25rem', minHeight: '56px', boxSizing: 'border-box' }}>
          <Wordmark size="22px" onClick={go('/')} />
          <button
            aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            style={{ position: 'absolute', right: '1.1rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: tokens.ink, padding: 8, lineHeight: 0 }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
              {open ? (<><path d="M6 6l12 12" /><path d="M18 6L6 18" /></>)
                    : (<><path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" /></>)}
            </svg>
          </button>
        </div>
        {open && (
          <div style={{ borderTop: `1px solid ${tokens.rule}`, background: tokens.paper, padding: '.5rem 1.25rem 1.25rem', display: 'flex', flexDirection: 'column' }}>
            {NAV_LINKS.map(([key, label, path]) => (
              <button key={key} className="epi-menu-item" onClick={go(path)} style={{
                background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer',
                fontFamily: tokens.serif, fontSize: '1.5rem', letterSpacing: '.01em',
                color: active === key ? tokens.gold : tokens.ink,
                padding: '.7rem 0', borderBottom: `1px solid ${tokens.rule}`,
              }}>{label}</button>
            ))}
          </div>
        )}
      </nav>
    );
  }

  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 1000, background: tokens.paper, borderBottom: `1px solid ${tokens.rule}` }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: scrolled ? '.65rem 2.25rem' : '1.35rem 2.25rem' }}>
        <div style={{ display: 'flex', gap: '2.25rem', flex: 1 }}>
          <button className={cls('news')} onClick={go('/news')} style={navBtn}>News</button>
          <button className={cls('methodology')} onClick={go('/methodology')} style={navBtn}>Methodology</button>
        </div>
        <Wordmark scrolled={scrolled} onClick={go('/')} />
        <div style={{ display: 'flex', gap: '2.25rem', flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
          <button className={cls('atlas')} onClick={go('/map')} style={navBtn}>Atlas</button>
          <button className={cls('destinations')} onClick={go('/destinations')} style={navBtn}>Destinations</button>
        </div>
      </div>
    </nav>
  );
};

// ── Footer ────────────────────────────────────────────────────────
export const EpiFooter = () => {
  const navigate = useNavigate();
  const go = (href) => (e) => { e.preventDefault(); if (href !== '#') navigate(href); };
  return (
    <footer style={{ background: tokens.ink, color: tokens.paper, padding: '4.5rem 2.5rem 2rem' }}>
      <div className="epi-two-col" style={{
        maxWidth: '1280px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '3rem', alignItems: 'flex-start',
      }}>
        <div>
          <div style={{
            fontFamily: tokens.serif, fontSize: '28px', fontWeight: 500,
            letterSpacing: '.14em', textTransform: 'uppercase', color: tokens.paper, marginBottom: '1.25rem',
          }}>The Epicurean</div>
          <p style={{
            fontFamily: tokens.body, fontStyle: 'normal', fontSize: '1.05rem',
            color: '#C9C3B5', lineHeight: 1.6, maxWidth: '340px', margin: 0,
          }}>
            A compendium of the world's finest tables, refined from a hundred sources into one definitive guide.
          </p>
        </div>
        <div>
          <div style={{
            fontFamily: tokens.sans, fontSize: '10px', letterSpacing: '.34em',
            textTransform: 'uppercase', color: tokens.goldSoft, marginBottom: '1.2rem',
          }}>Sections</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
            {[['Destinations','/destinations'], ['Atlas','/map'], ['News','/news'], ['Methodology','/methodology']].map(([it, href]) => (
              <a key={it} href={href} onClick={go(href)}
                 style={{ fontFamily: tokens.serif, fontSize: '1.05rem', color: '#E6E1D2', textDecoration: 'none', transition: 'color .3s ease', width: 'fit-content' }}
                 onMouseEnter={(e) => e.currentTarget.style.color = tokens.goldSoft}
                 onMouseLeave={(e) => e.currentTarget.style.color = '#E6E1D2'}>
                {it}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div style={{
        maxWidth: '1280px', margin: '3.5rem auto 0', paddingTop: '1.5rem',
        borderTop: `1px solid rgba(250,247,240,.12)`, textAlign: 'center',
        fontFamily: tokens.sans, fontSize: '11px', letterSpacing: '.22em', color: '#9C9586',
      }}>
        a glass production
      </div>
    </footer>
  );
};

// ── Page wrapper ──────────────────────────────────────────────────
export const EpiPage = ({ active, children }) => {
  useEpiStyles();
  return (
    <div style={{
      fontFamily: tokens.body, color: tokens.ink, backgroundColor: tokens.paper,
      minHeight: '100vh', width: '100%', margin: 0, padding: 0,
      overflowX: 'hidden', boxSizing: 'border-box', WebkitFontSmoothing: 'antialiased',
    }}>
      <EpiNav active={active} />
      {children}
      <EpiFooter />
    </div>
  );
};

// ── Page header — heading carries itself; no eyebrow, no section number ──
export const EpiPageHeader = ({ title, italicWord, lede, align = 'center' }) => (
  <section style={{
    padding: 'clamp(3.5rem, 7vw, 6rem) 2.5rem 2.5rem',
    textAlign: align, maxWidth: align === 'center' ? '1100px' : '1280px',
    margin: '0 auto', width: '100%', boxSizing: 'border-box',
  }}>
    <h1 className="epi-rise" style={{
      fontFamily: tokens.serif, fontWeight: 400,
      fontSize: 'clamp(2.6rem, 6vw, 5rem)', lineHeight: 1.02,
      letterSpacing: '-.015em', margin: '0 0 1.1rem', color: tokens.ink,
    }}>
      {[title, italicWord].filter(Boolean).join(' ')}
    </h1>
    {lede && (
      <p style={{
        fontFamily: tokens.body, fontSize: 'clamp(1.05rem, 1.5vw, 1.2rem)', fontStyle: 'normal',
        color: tokens.inkSoft, maxWidth: '640px',
        margin: align === 'center' ? '0 auto 1.8rem' : '0 0 1.8rem', lineHeight: 1.6,
      }}>{lede}</p>
    )}
    <div className="epi-line" style={{
      width: '64px', height: '1px', background: tokens.gold,
      margin: align === 'center' ? '0 auto' : '0',
    }} />
  </section>
);
