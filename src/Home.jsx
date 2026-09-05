import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { EpiPage, Rule, tokens, useMediaQuery } from './EpiChrome';

const CAROUSEL = [
  { image: "/images/geranium.png", title: "Geranium", location: "Copenhagen, Denmark", stars: ["michelinstar","michelinstar","michelinstar"], route: "/denmark/copenhagen/geranium" },
  { image: "/images/osteriafrancescana.png", title: "Osteria Francescana", location: "Modena, Italy", stars: ["michelinstar","michelinstar","michelinstar","greenstar"], route: "/italy/emilia-romagna/modena/OsteriaFrancescana" },
  { image: "/images/thefrenchlaundry.png", title: "The French Laundry", location: "Yountville, California", stars: ["michelinstar","michelinstar","michelinstar","greenstar"], route: "/usa/california/napa-valley/TheFrenchLaundry" },
  { image: "/images/thefatduck.png", title: "The Fat Duck", location: "Bray, United Kingdom", stars: ["michelinstar","michelinstar","michelinstar"], route: "/uk/england/south-east/bray/TheFatDuck" },
  { image: "/images/elcellerdesanrosa.png", title: "El Celler de Can Roca", location: "Girona, Spain", stars: ["michelinstar","michelinstar","michelinstar","greenstar"], route: "/spain/catalonia/girona/ElCellerdeCanRoca" },
  { image: "/images/mirazur.png", title: "Le Mirazur", location: "Menton, France", stars: ["michelinstar","michelinstar","michelinstar","greenstar"], route: "/france/provence-alpes-cote-dazur/menton/LeMirazur" },
  { image: "/images/noma.png", title: "noma", location: "Copenhagen, Denmark", stars: ["michelinstar","michelinstar","michelinstar","greenstar"], route: "/denmark/copenhagen/Noma" },
  { image: "/images/disfrutar.png", title: "Disfrutar", location: "Barcelona, Spain", stars: ["michelinstar","michelinstar","michelinstar"], route: "/spain/catalonia/barcelona/Disfrutar" },
  { image: "/images/alainducasse.png", title: "Alain Ducasse at The Dorchester", location: "London, United Kingdom", stars: ["michelinstar","michelinstar","michelinstar"], route: "/uk/england/london/AlainDucasseatTheDorchester" },
  { image: "/images/elevenmadisonpark.png", title: "Eleven Madison Park", location: "New York City, United States", stars: ["michelinstar","michelinstar","michelinstar"], route: "/usa/newyork/newyorkcity/ElevenMadisonPark" },
];

const DISPATCHES = [
  { kicker: "Dispatch · New York", title: "The Times' Best NYC Restaurants of 2025", image: "/images/nyt2025.png",
    dek: "A new vanguard of dining rooms, from a Tribeca townhouse to a quiet Brooklyn bistro — the year's most consequential openings." },
  { kicker: "Awards · Washington", title: "Inside the 2025 RAMMY Awards", image: "/images/rammys2025.png" },
  { kicker: "Awards · America", title: "The 2025 James Beard Foundation Honours", image: "/images/jb2025.png" },
];

// Curated, recognizable source marks — shown statically (no marquee).
const LOGOS = [
  { name: 'Michelin', icon: '/images/michelin.png' },
  { name: "World's 50 Best", icon: '/images/worlds50best.png' },
  { name: 'La Liste', icon: '/images/laliste.png' },
  { name: 'James Beard', icon: '/images/jamesbeard.png' },
  { name: 'Gault & Millau', icon: '/images/gaultmillau.png' },
  { name: 'Relais & Châteaux', icon: '/images/relaischateaux.png' },
  { name: 'Wine Spectator', icon: '/images/winespectator.png' },
  { name: 'The New York Times', icon: '/images/nyt.png' },
];

const HomePage = () => {
  const navigate = useNavigate();
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const { ink, inkSoft, inkMute, paper, paperDeep, rule, gold, goldDeep, serif, body, sans } = tokens;

  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [counters, setCounters] = useState({ restaurants: 0, cities: 0, countries: 0 });
  const countersRef = useRef(null);
  const touch = useRef({ x: 0, active: false });
  const n = CAROUSEL.length;

  useEffect(() => {
    document.title = "The Epicurean";
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) { favicon = document.createElement('link'); favicon.rel = 'icon'; document.head.appendChild(favicon); }
    favicon.href = '/images/E.png';
  }, []);

  const go = useCallback((d) => setSlide((s) => (s + d + n) % n), [n]);
  const goto = useCallback((i) => setSlide(((i % n) + n) % n), [n]);

  // Auto-advance — off under reduced motion, on pause, or while a touch is down.
  useEffect(() => {
    if (paused || reduceMotion) return undefined;
    const t = setInterval(() => setSlide((s) => (s + 1) % n), 5200);
    return () => clearInterval(t);
  }, [paused, reduceMotion, n]);

  // Count-up figures — totals come from the generated manifest so they can't go
  // stale; the constants below are only a floor if the fetch hasn't landed yet.
  const [targets, setTargets] = useState({ restaurants: 29026, cities: 7788, countries: 169 });
  useEffect(() => {
    let live = true;
    fetch('/data/destinations.json')
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { if (live && d?.totals?.atlas) setTargets(d.totals.atlas); })
      .catch(() => {});
    return () => { live = false; };
  }, []);

  useEffect(() => {
    if (reduceMotion) { setCounters(targets); return undefined; }
    // The manifest can land after the figures have already scrolled into view, so
    // this re-runs; tear the old timer down with it or the two animations fight.
    let started = false;
    let timer;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || started) return;
      started = true;
      const steps = 60, dur = 2000; let step = 0;
      timer = setInterval(() => {
        step++;
        const p = 1 - Math.pow(1 - step / steps, 3);
        setCounters({
          restaurants: Math.floor(targets.restaurants * p),
          cities: Math.floor(targets.cities * p),
          countries: Math.floor(targets.countries * p),
        });
        if (step >= steps) { clearInterval(timer); setCounters(targets); }
      }, dur / steps);
    }, { threshold: 0.4 });
    if (countersRef.current) obs.observe(countersRef.current);
    return () => { obs.disconnect(); clearInterval(timer); };
  }, [reduceMotion, targets]);

  const onTouchStart = (e) => { touch.current = { x: e.touches[0].clientX, active: true }; };
  const onTouchEnd = (e) => {
    if (!touch.current.active) return;
    const dx = e.changedTouches[0].clientX - touch.current.x;
    if (Math.abs(dx) > 44) go(dx < 0 ? 1 : -1);
    touch.current.active = false;
  };

  const arrowBtn = {
    position: 'absolute', top: '50%', transform: 'translateY(-50%)', zIndex: 3,
    width: 48, height: 48, borderRadius: '50%', border: `1px solid rgba(250,247,240,.55)`,
    background: 'rgba(31,26,20,.28)', color: paper, cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    backdropFilter: 'blur(3px)', transition: 'background .3s ease, border-color .3s ease',
  };

  return (
    <EpiPage active="home">
      {/* The page opens on the photography, so the document heading is carried for
          screen readers and search rather than set above the images. */}
      <h1 style={{
        position: 'absolute', width: 1, height: 1, padding: 0, margin: -1,
        overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap', border: 0,
      }}>
        The Epicurean — every great table in the world, reconciled into one atlas.
      </h1>

      {/* Featured carousel — full-bleed, accessible, pausable */}
      <section aria-roledescription="carousel" aria-label="Featured restaurants" style={{ width: '100%' }}>
        <div
          style={{ position: 'relative', width: '100%', height: 'min(78vh, 760px)', overflow: 'hidden', background: paperDeep }}
          onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}
        >
          {CAROUSEL.map((s, i) => {
            const on = i === slide;
            return (
              <a key={i} href={s.route}
                onClick={(e) => { e.preventDefault(); navigate(s.route); }}
                aria-hidden={!on} tabIndex={on ? 0 : -1}
                aria-label={`${s.title} — ${s.location}. View in the guide.`}
                style={{
                  position: 'absolute', inset: 0, display: 'block', textDecoration: 'none',
                  opacity: on ? 1 : 0, pointerEvents: on ? 'auto' : 'none',
                  transition: 'opacity .9s cubic-bezier(.2,.7,.2,1)',
                  backgroundImage: `url(${s.image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: paperDeep,
                }}
              >
                <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,16,12,.66) 0%, rgba(20,16,12,.2) 30%, rgba(20,16,12,0) 58%)' }} />
                <div style={{ position: 'absolute', left: 'clamp(1.5rem, 5vw, 4.5rem)', bottom: 'clamp(2rem, 6vw, 4.5rem)', color: paper, maxWidth: '620px', textShadow: '0 1px 20px rgba(0,0,0,.35)' }}>
                  <h2 style={{ fontFamily: serif, fontWeight: 500, fontSize: 'clamp(2.1rem, 4.4vw, 3.6rem)', lineHeight: 1.02, letterSpacing: '-.01em', margin: '0 0 .3rem' }}>{s.title}</h2>
                  <p style={{ fontFamily: body, fontStyle: 'normal', fontSize: 'clamp(1.1rem, 1.6vw, 1.4rem)', margin: '0 0 1rem', opacity: .95 }}>{s.location}</p>
                  <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center', marginBottom: '1rem' }}>
                    {s.stars.map((st, k) => (
                      <img key={k} src={`/images/${st}.png`} alt="" aria-hidden width="26" height="26" style={{ objectFit: 'contain' }} />
                    ))}
                  </div>
                  <span className="epi-cta-underline" style={{ fontFamily: sans, fontSize: '11px', letterSpacing: '.3em', textTransform: 'uppercase' }}>View in the guide →</span>
                </div>
              </a>
            );
          })}

          {/* Prev / next */}
          <button aria-label="Previous restaurant" onClick={() => go(-1)} style={{ ...arrowBtn, left: 'clamp(.75rem, 2vw, 1.5rem)' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(31,26,20,.6)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(31,26,20,.28)'; }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button aria-label="Next restaurant" onClick={() => go(1)} style={{ ...arrowBtn, right: 'clamp(.75rem, 2vw, 1.5rem)' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(31,26,20,.6)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(31,26,20,.28)'; }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
          </button>

          {/* Indicators + pause */}
          <div style={{ position: 'absolute', bottom: '22px', right: 'clamp(1rem, 3vw, 2rem)', display: 'flex', gap: '10px', alignItems: 'center', zIndex: 3 }}>
            <div role="tablist" aria-label="Choose restaurant" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              {CAROUSEL.map((s, i) => (
                <button key={i} role="tab" aria-selected={i === slide} aria-label={`${s.title}`} onClick={() => goto(i)}
                  style={{ width: i === slide ? 26 : 12, height: 3, padding: 0, border: 'none', borderRadius: 2, cursor: 'pointer',
                    background: i === slide ? paper : 'rgba(250,247,240,.5)', boxShadow: '0 0 4px rgba(0,0,0,.35)',
                    transition: 'width .5s cubic-bezier(.2,.7,.2,1), background .4s ease' }} />
              ))}
            </div>
            {!reduceMotion && (
              <button aria-label={paused ? 'Play slideshow' : 'Pause slideshow'} onClick={() => setPaused((p) => !p)}
                style={{ width: 26, height: 26, marginLeft: 4, border: `1px solid rgba(250,247,240,.55)`, borderRadius: '50%', background: 'rgba(31,26,20,.28)', color: paper, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {paused
                  ? <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                  : <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" /><rect x="14" y="5" width="4" height="14" /></svg>}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Colophon + figures */}
      <section style={{ padding: 'clamp(4.5rem, 8vw, 7rem) 2.5rem', maxWidth: '1280px', margin: '0 auto' }}>
        <div className="epi-about-row" style={{ display: 'flex', gap: 'clamp(3rem, 6vw, 6rem)', alignItems: 'flex-start' }}>
          <div style={{ flex: 1.3 }}>
            <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 'clamp(2rem, 3.4vw, 3rem)', letterSpacing: '-.015em', lineHeight: 1.06, margin: '0 0 1.6rem', color: ink }}>
              On the method.
            </h2>
            <p style={{ fontFamily: body, fontSize: 'clamp(1.1rem, 1.5vw, 1.22rem)', lineHeight: 1.72, color: inkSoft, margin: 0 }}>
              <span style={{ fontFamily: serif, fontSize: '4.6rem', float: 'left', lineHeight: .72, paddingRight: '.55rem', paddingTop: '.4rem', color: ink, fontWeight: 500 }}>W</span>
              elcome to The Epicurean — a guide for seeking the finest dining on earth, curated from over a hundred authoritative sources and reconciled into a single hierarchy. Our mission is to connect the discerning with the exceptional: the temples, the secrets, and every remarkable table in between.
            </p>
            <a href="/methodology" onClick={(e) => { e.preventDefault(); navigate('/methodology'); }} className="epi-cta-underline"
              style={{ display: 'inline-block', marginTop: '1.9rem', fontFamily: sans, fontSize: '11px', letterSpacing: '.3em', textTransform: 'uppercase', color: ink, textDecoration: 'none' }}>
              Our methodology →
            </a>
          </div>

          <div ref={countersRef} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              { label: 'Restaurants', value: counters.restaurants, suffix: '' },
              { label: 'Cities', value: counters.cities, suffix: '' },
              { label: 'Countries', value: counters.countries, suffix: '' },
            ].map((s, i) => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', padding: '1.5rem 0', borderTop: i === 0 ? 'none' : `1px solid ${rule}` }}>
                <span style={{ fontFamily: sans, fontSize: '12px', letterSpacing: '.3em', textTransform: 'uppercase', color: inkSoft }}>{s.label}</span>
                <span style={{ fontFamily: serif, fontWeight: 400, fontSize: 'clamp(2.6rem, 4.5vw, 4rem)', lineHeight: 1, color: ink, letterSpacing: '-.02em', fontVariantNumeric: 'lining-nums tabular-nums' }}>
                  {s.value.toLocaleString()}<span style={{ color: gold }}>{s.suffix}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Atlas — bespoke, left-aligned dark beat (no dot grid, no centered band) */}
      <section style={{ background: ink, color: paper, padding: 'clamp(4.5rem, 9vw, 8rem) 2.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '1.5rem' }}>
          <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 'clamp(2.4rem, 6vw, 5rem)', lineHeight: .98, letterSpacing: '-.02em', margin: 0, maxWidth: '16ch', color: paper }}>
            Traverse the globe by plate, not by passport.
          </h2>
          <p style={{ fontFamily: body, fontStyle: 'normal', fontSize: 'clamp(1.1rem, 1.6vw, 1.3rem)', color: '#CFC9BD', maxWidth: '560px', lineHeight: 1.6, margin: '.4rem 0 1rem' }}>
            An interactive cartography of all {targets.restaurants.toLocaleString()} tables — from Tokyo to Tasmania, Lima to Ljubljana.
          </p>
          <a href="/map" onClick={(e) => { e.preventDefault(); navigate('/map'); }} className="epi-cta-underline"
            style={{ fontFamily: sans, fontSize: '12px', letterSpacing: '.32em', textTransform: 'uppercase', color: paper, textDecoration: 'none', width: 'fit-content' }}>
            Open the Atlas →
          </a>
        </div>
      </section>

      {/* Dispatches — editorial spread, no card containers */}
      <section style={{ padding: 'clamp(4.5rem, 8vw, 7rem) 2.5rem 4rem', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.75rem' }}>
          <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 'clamp(2rem, 4vw, 3.3rem)', letterSpacing: '-.015em', margin: 0, color: ink }}>
            Dispatches &amp; distinctions
          </h2>
          <a href="/news" onClick={(e) => { e.preventDefault(); navigate('/news'); }} className="epi-cta-underline"
            style={{ fontFamily: sans, fontSize: '11px', letterSpacing: '.3em', textTransform: 'uppercase', color: ink, textDecoration: 'none' }}>
            All journals →
          </a>
        </div>

        <div className="epi-news-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 'clamp(2rem, 4vw, 3.5rem)', alignItems: 'start' }}>
          <a className="epi-feature" href="/news" onClick={(e) => { e.preventDefault(); navigate('/news'); }} style={{ textDecoration: 'none', color: 'inherit', display: 'block', cursor: 'pointer' }}>
            <div className="epi-news-lead" style={{ aspectRatio: '3/2', overflow: 'hidden', background: paperDeep, marginBottom: '1.5rem' }}>
              <div className="epi-feature-img" style={{ width: '100%', height: '100%', backgroundImage: `url(${DISPATCHES[0].image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            </div>
            <h3 className="epi-feature-title" style={{ fontFamily: serif, fontWeight: 500, fontSize: 'clamp(1.9rem, 3vw, 2.7rem)', lineHeight: 1.08, letterSpacing: '-.01em', margin: '0 0 .7rem', color: ink }}>{DISPATCHES[0].title}</h3>
            <p style={{ fontFamily: body, fontStyle: 'normal', fontSize: '1.1rem', color: inkSoft, lineHeight: 1.55, margin: 0, maxWidth: '540px' }}>{DISPATCHES[0].dek}</p>
          </a>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {DISPATCHES.slice(1).map((a, idx) => (
              <React.Fragment key={a.title}>
                {idx > 0 && <Rule mt={0} mb={0} />}
                <a className="epi-feature" href="/news" onClick={(e) => { e.preventDefault(); navigate('/news'); }}
                  style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer', display: 'grid', gridTemplateColumns: '132px 1fr', gap: '1.4rem', alignItems: 'center', padding: '1.6rem 0' }}>
                  <div style={{ aspectRatio: '1', overflow: 'hidden', background: paperDeep }}>
                    <div className="epi-feature-img" style={{ width: '100%', height: '100%', backgroundImage: `url(${a.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  </div>
                  <div>
                    <h4 className="epi-feature-title" style={{ fontFamily: serif, fontWeight: 500, fontSize: 'clamp(1.25rem, 1.7vw, 1.6rem)', lineHeight: 1.15, letterSpacing: '-.005em', margin: 0, color: ink }}>{a.title}</h4>
                  </div>
                </a>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Sources — static logo row */}
      <section style={{ background: paperDeep, borderTop: `1px solid ${rule}`, borderBottom: `1px solid ${rule}`, padding: 'clamp(3.5rem, 6vw, 5.5rem) 2.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: 'clamp(1.5rem, 2.4vw, 2.1rem)', letterSpacing: '-.01em', color: ink, margin: '0 0 2.75rem' }}>
            Curated from the journals of record.
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 'clamp(2rem, 4vw, 3.5rem)' }}>
            {LOGOS.map((l) => (
              <img key={l.name} src={l.icon} alt={l.name} title={l.name}
                style={{ height: 'clamp(30px, 4vw, 44px)', maxWidth: '130px', objectFit: 'contain', filter: 'grayscale(1)', opacity: .6, transition: 'opacity .3s ease, filter .3s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.filter = 'grayscale(0)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '.6'; e.currentTarget.style.filter = 'grayscale(1)'; }} />
            ))}
          </div>
        </div>
      </section>
    </EpiPage>
  );
};

export default HomePage;
