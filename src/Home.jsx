import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import App from './App';

const HomePage = ({ navigateToPage }) => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [countersVisible, setCountersVisible] = useState(false);
  const [counters, setCounters] = useState({ restaurants: 0, cities: 0, countries: 0 });
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const countersRef = useRef(null);

  // ── Design tokens ────────────────────────────────────────────────
  const ink = '#1F1A14';            // warm near-black
  const inkSoft = '#5C544A';        // warm secondary
  const inkMute = '#8B8377';        // tertiary
  const paper = '#FAF7F0';          // warm ivory
  const paperDeep = '#F1ECE0';      // section ivory
  const rule = '#D9D1BE';           // hairline rule
  const gold = '#A8824A';           // muted gold accent
  const serif = '"Cormorant Garamond", "EB Garamond", "Times New Roman", serif';
  const body  = '"EB Garamond", "Cormorant Garamond", Georgia, serif';
  const sans  = '"Jost", "Helvetica Neue", Arial, sans-serif';

  // ── Document chrome ──────────────────────────────────────────────
  useEffect(() => {
    document.title = "The Epicurean";
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      document.head.appendChild(favicon);
    }
    favicon.href = '/images/E.png';

    // Inject one-time stylesheet for animations & global resets
    if (!document.getElementById('epicurean-home-styles')) {
      const style = document.createElement('style');
      style.id = 'epicurean-home-styles';
      style.innerHTML = `
        html, body { background: ${paper}; }
        @keyframes epi-rise { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
        @keyframes epi-fade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes epi-line { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .epi-rise { animation: epi-rise 1.1s cubic-bezier(.2,.7,.2,1) both; }
        .epi-fade { animation: epi-fade 1.6s ease-out both; }
        .epi-line { transform-origin: left center; animation: epi-line 1.4s cubic-bezier(.2,.7,.2,1) both; }
        .epi-nav-link { position: relative; }
        .epi-nav-link::after {
          content: ''; position: absolute; left: 50%; bottom: -6px;
          width: 0; height: 1px; background: ${ink};
          transition: width .45s cubic-bezier(.2,.7,.2,1), left .45s cubic-bezier(.2,.7,.2,1);
        }
        .epi-nav-link:hover::after { width: 100%; left: 0; }
        .epi-feature:hover .epi-feature-title { color: ${gold}; }
        .epi-feature-title { transition: color .5s ease; }
        .epi-feature-img { transition: transform 1.2s cubic-bezier(.2,.7,.2,1), filter .8s ease; }
        .epi-feature:hover .epi-feature-img { transform: scale(1.04); }
        .epi-source { transition: opacity .4s ease, transform .4s ease; opacity: .55; filter: grayscale(1); }
        .epi-source:hover { opacity: 1; filter: grayscale(0); transform: translateY(-2px); }
        .epi-cta { transition: letter-spacing .5s ease, color .4s ease; }
        .epi-cta:hover { letter-spacing: .42em; color: ${gold}; }
        .epi-indicator { transition: width .5s cubic-bezier(.2,.7,.2,1), background .4s ease; }
        @media (max-width: 860px) {
          .epi-news-grid { grid-template-columns: 1fr !important; }
          .epi-news-lead { aspect-ratio: 4/3 !important; }
          .epi-about-row { flex-direction: column !important; gap: 3rem !important; }
          .epi-stat-divider { display: none !important; }
          .epi-masthead-row { flex-direction: column !important; gap: .75rem !important; text-align: center !important; }
          .epi-nav-links { gap: 1.25rem !important; }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  // Nav becomes more compact on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Carousel data (unchanged) ────────────────────────────────────
  const carouselImages = [
    { image: "/images/geranium.png", title: "Geranium", location: "Copenhagen, Denmark", textColor: "#333", stars: 3, starImages: ["/images/michelinstar.png","/images/michelinstar.png","/images/michelinstar.png"], route: "/denmark/copenhagen/geranium" },
    { image: "/images/osteriafrancescana.png", title: "Osteria Francescana", location: "Modena, Italy", textColor: "#333", stars: 4, starImages: ["/images/michelinstar.png","/images/michelinstar.png","/images/michelinstar.png","/images/greenstar.png"], route: "/italy/emilia-romagna/modena/OsteriaFrancescana" },
    { image: "/images/thefrenchlaundry.png", title: "The French Laundry", location: "Yountville, California", textColor: "#333", stars: 4, starImages: ["/images/michelinstar.png","/images/michelinstar.png","/images/michelinstar.png","/images/greenstar.png"], route: "/usa/california/napa-valley/TheFrenchLaundry" },
    { image: "/images/thefatduck.png", title: "The Fat Duck", location: "Bray, United Kingdom", textColor: "#fff", stars: 3, starImages: ["/images/michelinstar.png","/images/michelinstar.png","/images/michelinstar.png"], route: "/uk/england/south-east/bray/TheFatDuck" },
    { image: "/images/elcellerdesanrosa.png", title: "El Celler de Can Roca", location: "Girona, Spain", textColor: "#fff", stars: 4, starImages: ["/images/michelinstar.png","/images/michelinstar.png","/images/michelinstar.png","/images/greenstar.png"], route: "/spain/catalonia/girona/ElCellerdeCanRoca" },
    { image: "/images/mirazur.png", title: "Le Mirazur", location: "Menton, France", textColor: "#333", stars: 4, starImages: ["/images/michelinstar.png","/images/michelinstar.png","/images/michelinstar.png","/images/greenstar.png"], route: "/france/provence-alpes-cote-dazur/menton/LeMirazur" },
    { image: "/images/noma.png", title: "noma", location: "Copenhagen, Denmark", textColor: "#fff", stars: 4, starImages: ["/images/michelinstar.png","/images/michelinstar.png","/images/michelinstar.png","/images/greenstar.png"], route: "/denmark/copenhagen/Noma" },
    { image: "/images/disfrutar.png", title: "Disfrutar", location: "Barcelona, Spain", textColor: "#fff", stars: 3, starImages: ["/images/michelinstar.png","/images/michelinstar.png","/images/michelinstar.png"], route: "/spain/catalonia/barcelona/Disfrutar" },
    { image: "/images/alainducasse.png", title: "Alain Ducasse at The Dorchester", location: "London, United Kingdom", textColor: "#fff", stars: 3, starImages: ["/images/michelinstar.png","/images/michelinstar.png","/images/michelinstar.png"], route: "/uk/england/london/AlainDucasseatTheDorchester" },
    { image: "/images/elevenmadisonpark.png", title: "Eleven Madison Park", location: "New York City, United States", textColor: "#333", stars: 3, starImages: ["/images/michelinstar.png","/images/michelinstar.png","/images/michelinstar.png"], route: "/usa/newyork/newyorkcity/ElevenMadisonPark" },
  ];

  const extendedImages = [...carouselImages, carouselImages[0]];

  // Auto-slide carousel (logic preserved)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev === carouselImages.length) {
          setIsTransitioning(false);
          setTimeout(() => { setCurrentSlide(1); setIsTransitioning(true); }, 20);
          return 0;
        }
        return prev + 1;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  // Counter animation (logic preserved)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countersVisible) {
          setCountersVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );
    if (countersRef.current) observer.observe(countersRef.current);
    return () => { if (countersRef.current) observer.unobserve(countersRef.current); };
  }, [countersVisible]);

  const animateCounters = () => {
    const targetValues = { restaurants: 15000, cities: 1000, countries: 125 };
    const duration = 3000;
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      // ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounters({
        restaurants: Math.floor(targetValues.restaurants * eased),
        cities: Math.floor(targetValues.cities * eased),
        countries: Math.floor(targetValues.countries * eased),
      });
      if (currentStep >= steps) { clearInterval(timer); setCounters(targetValues); }
    }, stepDuration);
  };

  // ── Editorial dispatches ─────────────────────────────────────────
  const newsArticles = [
    { id: 1, kicker: "Dispatch · New York", title: "The Times' Best NYC Restaurants of 2025", date: "MMXXV", image: "/images/nyt2025.png" },
    { id: 2, kicker: "Awards · Washington", title: "Inside the 2025 RAMMY Awards", date: "MMXXV", image: "/images/rammys2025.png" },
    { id: 3, kicker: "Awards · America", title: "The 2025 James Beard Foundation Honours", date: "MMXXV", image: "/images/jb2025.png" },
  ];

  const issueDate = new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  // ── Helpers ──────────────────────────────────────────────────────
  const SmallCaps = ({ children, style }) => (
    <span style={{
      fontFamily: sans, fontSize: '11px', fontWeight: 400,
      letterSpacing: '.28em', textTransform: 'uppercase', color: inkSoft, ...style
    }}>{children}</span>
  );

  const Rule = ({ color = rule, mt = 0, mb = 0, width = '100%' }) => (
    <div style={{ height: '1px', background: color, width, marginTop: mt, marginBottom: mb }} />
  );

  return (
    <div style={{
      fontFamily: body,
      color: ink,
      backgroundColor: paper,
      minHeight: '100vh',
      width: '100vw',
      margin: 0,
      padding: 0,
      overflowX: 'hidden',
      boxSizing: 'border-box',
      WebkitFontSmoothing: 'antialiased',
    }}>
      {/* ── Top utility bar ───────────────────────────────────────── */}
      <div style={{
        width: '100vw', boxSizing: 'border-box',
        padding: '8px 2rem',
        background: ink, color: paper,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        fontFamily: sans, fontSize: '10.5px', letterSpacing: '.32em', textTransform: 'uppercase',
      }}>
        <span style={{ opacity: .75 }}>Vol. MMXXVI</span>
        <span style={{ opacity: .85 }}>The Epicurean — A Compendium of the World's Finest Tables</span>
        <span style={{ opacity: .75 }}>{issueDate}</span>
      </div>

      {/* ── Masthead Nav ─────────────────────────────────────────── */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 1000,
        backgroundColor: paper,
        borderBottom: `1px solid ${rule}`,
        transition: 'padding .4s ease',
      }}>
        <div className="epi-masthead-row" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: scrolled ? '.6rem 2.25rem' : '1.4rem 2.25rem',
          transition: 'padding .4s ease',
        }}>
          {/* Left nav */}
          <div className="epi-nav-links" style={{ display: 'flex', gap: '2.25rem', flex: 1 }}>
            <button onClick={() => window.location.href = '/destinations'}
              className="epi-nav-link"
              style={navBtnStyle(sans, ink)}>
              Destinations
            </button>
            <button className="epi-nav-link" style={navBtnStyle(sans, ink)}>
              Journal
            </button>
            <button onClick={() => window.location.href = '/methodology'}
              className="epi-nav-link"
              style={navBtnStyle(sans, ink)}>
              Methodology
            </button>
          </div>

          {/* Centre wordmark */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{ textDecoration: 'none', flex: '0 0 auto', textAlign: 'center' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <span style={{
                fontFamily: serif, fontSize: scrolled ? '24px' : '30px',
                fontWeight: 500, letterSpacing: '.14em', color: ink,
                textTransform: 'uppercase', transition: 'font-size .4s ease',
              }}>
                The Epicurean
              </span>
              {!scrolled && (
                <span style={{
                  fontFamily: sans, fontSize: '9px', letterSpacing: '.5em',
                  textTransform: 'uppercase', color: gold, paddingLeft: '.5em',
                }}>
                  Est. A Glass Production
                </span>
              )}
            </div>
          </a>

          {/* Right side */}
          <div className="epi-nav-links" style={{ display: 'flex', gap: '2.25rem', flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
            <button className="epi-nav-link" style={navBtnStyle(sans, ink)}>
              Atlas
            </button>
            <button className="epi-nav-link" style={navBtnStyle(sans, ink)}>
              Subscribe
            </button>
            <button style={{
              background: 'none', border: `1px solid ${rule}`,
              width: '34px', height: '34px', borderRadius: '50%',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: ink, transition: 'background .3s ease, border-color .3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = ink; e.currentTarget.style.color = paper; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = ink; }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7"></circle>
                <path d="m20 20-3.5-3.5"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* ── Hero overture ────────────────────────────────────────── */}
      <section style={{
        padding: '4.5rem 2.5rem 2.25rem',
        textAlign: 'center',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        <SmallCaps style={{ color: gold }}>The Featured Tables · No. 01</SmallCaps>
        <h1 className="epi-rise" style={{
          fontFamily: serif,
          fontWeight: 400,
          fontSize: 'clamp(2.6rem, 6vw, 5.2rem)',
          lineHeight: 1.02,
          letterSpacing: '-.01em',
          margin: '1.1rem 0 1rem',
          color: ink,
        }}>
          A curated atlas of the world's
          <br />
          <em style={{ fontFamily: serif, fontWeight: 400, fontStyle: 'italic', color: gold }}>most extraordinary</em> restaurants.
        </h1>
        <p style={{
          fontFamily: body, fontSize: '1.15rem', fontStyle: 'italic',
          color: inkSoft, maxWidth: '640px', margin: '0 auto 2rem',
          lineHeight: 1.6,
        }}>
          From three-star temples to whispered local secrets — a connoisseur's compendium, drawn from a hundred and more sources, refined into a single guide for the discerning traveller.
        </p>
        <div className="epi-line" style={{
          width: '64px', height: '1px', background: gold, margin: '0 auto',
        }} />
      </section>

      {/* ── Hero Carousel (logic preserved, framing refined) ──────── */}
      <section style={{
        width: '100%',
        padding: '1.5rem 2.5rem 0',
        boxSizing: 'border-box',
      }}>
        <div style={{
          display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
          padding: '0 .25rem 1rem',
        }}>
          <SmallCaps>Plate I · The Featured</SmallCaps>
          <SmallCaps style={{ color: inkMute }}>
            {String((currentSlide === carouselImages.length ? 0 : currentSlide) + 1).padStart(2,'0')}
            <span style={{ color: rule, margin: '0 .55em' }}>/</span>
            {String(carouselImages.length).padStart(2,'0')}
          </SmallCaps>
        </div>
        <div style={{
          width: '100%',
          height: '78vh',
          position: 'relative',
          overflow: 'hidden',
          background: paperDeep,
          border: `1px solid ${rule}`,
        }}>
          <div style={{
            display: 'flex',
            width: `${extendedImages.length * 100}%`,
            height: '100%',
            transform: `translateX(-${currentSlide * (100 / extendedImages.length)}%)`,
            transition: isTransitioning ? 'transform .9s cubic-bezier(.2,.7,.2,1)' : 'none'
          }}>
            {extendedImages.map((slide, index) => (
              <div
                key={index}
                onClick={() => slide.route && navigate(slide.route)}
                style={{
                  width: `${100 / extendedImages.length}%`,
                  height: '100%',
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundColor: paperDeep,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  cursor: slide.route ? 'pointer' : 'default',
                }}
              >
                {/* Text overlay — refined */}
                <div style={{
                  position: 'absolute',
                  left: 'clamp(1.5rem, 4vw, 4rem)',
                  bottom: 'clamp(1.5rem, 4vw, 4rem)',
                  color: slide.textColor,
                  maxWidth: '520px',
                }}>
                  <div style={{
                    fontFamily: sans, fontSize: '10.5px', letterSpacing: '.34em',
                    textTransform: 'uppercase', opacity: .85, marginBottom: '.85rem',
                    color: slide.textColor,
                  }}>
                    No. {String(((currentSlide === carouselImages.length ? 0 : currentSlide) % carouselImages.length) + 1).padStart(2,'0')} · The Featured
                  </div>
                  <h1 style={{
                    fontFamily: serif,
                    fontSize: 'clamp(2rem, 4vw, 3.4rem)',
                    fontWeight: 500,
                    margin: '0 0 .25rem',
                    lineHeight: 1.04,
                    letterSpacing: '-.005em',
                  }}>
                    {slide.title}
                  </h1>
                  <p style={{
                    fontFamily: body, fontSize: '1.3rem', fontStyle: 'italic',
                    margin: '0 0 .9rem', fontWeight: 400, opacity: .92,
                  }}>
                    {slide.location}
                  </p>
                  <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}>
                    {Array.from({ length: slide.stars }, (_, starIndex) => (
                      <div key={starIndex} style={{ width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img
                          src={slide.starImages[starIndex]}
                          alt="Star"
                          style={{ width: '30px', height: '30px', objectFit: 'contain' }}
                          onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
                        />
                        <span style={{ fontSize: '18px', color: slide.textColor, display: 'none' }}>★</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Linear indicators */}
          <div style={{
            position: 'absolute',
            bottom: '24px',
            right: '24px',
            display: 'flex',
            gap: '6px',
            alignItems: 'center',
          }}>
            {carouselImages.map((_, index) => {
              const active = (currentSlide === carouselImages.length ? 0 : currentSlide) === index;
              return (
                <div
                  key={index}
                  className="epi-indicator"
                  style={{
                    width: active ? '28px' : '12px',
                    height: '1.5px',
                    background: active ? ink : 'rgba(31,26,20,.35)',
                    cursor: 'pointer',
                  }}
                  onClick={() => { setIsTransitioning(true); setCurrentSlide(index); }}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Editorial divider ────────────────────────────────────── */}
      <section style={{ padding: '6rem 2.5rem 2rem', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: '2rem',
        }}>
          <div style={{ height: '1px', background: rule }} />
          <SmallCaps style={{ color: gold, letterSpacing: '.42em' }}>※</SmallCaps>
          <div style={{ height: '1px', background: rule }} />
        </div>
      </section>

      {/* ── Dispatches (news) ─────────────────────────────────────── */}
      <section style={{
        padding: '1rem 2.5rem 5rem',
        maxWidth: '1280px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem',
        }}>
          <div>
            <SmallCaps>Section II</SmallCaps>
            <h2 style={{
              fontFamily: serif, fontWeight: 400,
              fontSize: 'clamp(2rem, 4vw, 3.4rem)',
              margin: '.4rem 0 0',
              letterSpacing: '-.01em',
              color: ink,
            }}>
              Dispatches <em style={{ fontStyle: 'italic', color: gold }}>&amp;</em> Distinctions
            </h2>
          </div>
          <a href="#" style={{
            fontFamily: sans, fontSize: '11px', letterSpacing: '.32em',
            textTransform: 'uppercase', color: ink, textDecoration: 'none',
            borderBottom: `1px solid ${ink}`, paddingBottom: '2px',
          }}>
            All Journals →
          </a>
        </div>

        <div className="epi-news-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: '2.5rem',
        }}>
          {/* Lead article */}
          <a className="epi-feature" href="#" style={{ textDecoration: 'none', color: 'inherit', display: 'block', cursor: 'pointer' }}>
            <div className="epi-news-lead" style={{
              aspectRatio: '4/5',
              overflow: 'hidden',
              background: paperDeep,
              border: `1px solid ${rule}`,
              marginBottom: '1.4rem',
            }}>
              <div className="epi-feature-img" style={{
                width: '100%', height: '100%',
                backgroundImage: `url(${newsArticles[0].image})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
              }} />
            </div>
            <SmallCaps style={{ color: gold }}>{newsArticles[0].kicker}</SmallCaps>
            <h3 className="epi-feature-title" style={{
              fontFamily: serif, fontWeight: 500,
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              lineHeight: 1.1, letterSpacing: '-.005em',
              margin: '.6rem 0 .6rem', color: ink,
            }}>
              {newsArticles[0].title}
            </h3>
            <p style={{
              fontFamily: body, fontStyle: 'italic',
              fontSize: '1.05rem', color: inkSoft, lineHeight: 1.55, margin: 0, maxWidth: '540px',
            }}>
              A new vanguard of dining rooms, from a Tribeca townhouse to a quiet bistro in Brooklyn — the year's most consequential openings, examined.
            </p>
          </a>

          {/* Stacked secondary */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.25rem' }}>
            {newsArticles.slice(1).map((article, idx) => (
              <React.Fragment key={article.id}>
                <a className="epi-feature" href="#" style={{
                  textDecoration: 'none', color: 'inherit', cursor: 'pointer',
                  display: 'grid', gridTemplateColumns: '140px 1fr', gap: '1.4rem',
                }}>
                  <div style={{
                    aspectRatio: '1', overflow: 'hidden', background: paperDeep,
                    border: `1px solid ${rule}`,
                  }}>
                    <div className="epi-feature-img" style={{
                      width: '100%', height: '100%',
                      backgroundImage: `url(${article.image})`,
                      backgroundSize: 'cover', backgroundPosition: 'center',
                    }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <SmallCaps style={{ color: gold }}>{article.kicker}</SmallCaps>
                    <h4 className="epi-feature-title" style={{
                      fontFamily: serif, fontWeight: 500,
                      fontSize: 'clamp(1.2rem, 1.6vw, 1.6rem)',
                      lineHeight: 1.18, letterSpacing: '-.005em',
                      margin: '.45rem 0 .5rem', color: ink,
                    }}>
                      {article.title}
                    </h4>
                    <span style={{
                      fontFamily: sans, fontSize: '10.5px', letterSpacing: '.3em',
                      textTransform: 'uppercase', color: inkMute,
                    }}>
                      Read — {article.date}
                    </span>
                  </div>
                </a>
                {idx === 0 && <Rule />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Atlas (CTA to interactive map) ────────────────────── */}
      <section style={{
        background: ink, color: paper,
        padding: 'clamp(4rem, 8vw, 7rem) 2.5rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative engraved compass marks */}
        <div aria-hidden style={{
          position: 'absolute', inset: 0, opacity: .07,
          backgroundImage: `radial-gradient(circle at 50% 50%, ${gold} 1px, transparent 1.5px)`,
          backgroundSize: '36px 36px',
        }} />
        <div style={{ position: 'relative' }}>
          <SmallCaps style={{ color: gold }}>Section III · The Atlas</SmallCaps>
          <h2 style={{
            fontFamily: serif, fontWeight: 400,
            fontSize: 'clamp(2.2rem, 5vw, 4.2rem)',
            margin: '1rem auto 1.2rem',
            maxWidth: '900px',
            lineHeight: 1.06,
            letterSpacing: '-.01em',
            color: paper,
          }}>
            Traverse the globe by <em style={{ fontStyle: 'italic', color: gold }}>plate</em>,
            <br /> not by passport.
          </h2>
          <p style={{
            fontFamily: body, fontSize: '1.15rem', fontStyle: 'italic',
            color: '#CFC9BD', maxWidth: '640px', margin: '0 auto 2.5rem',
            lineHeight: 1.6,
          }}>
            An interactive cartography of every restaurant in the guide — from Tokyo to Tasmania, from Lima to Ljubljana.
          </p>
          <a
            className="epi-cta"
            href="/destinations"
            onClick={(e) => { e.preventDefault(); window.location.href = '/destinations'; }}
            style={{
              fontFamily: sans, fontSize: '12px', letterSpacing: '.35em',
              textTransform: 'uppercase', color: paper, textDecoration: 'none',
              borderTop: `1px solid ${gold}`, borderBottom: `1px solid ${gold}`,
              padding: '14px 28px', display: 'inline-block', cursor: 'pointer',
            }}
          >
            Open the Atlas
          </a>
        </div>
      </section>

      {/* ── About / Stats ─────────────────────────────────────────── */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 7rem) 2.5rem',
        maxWidth: '1280px',
        margin: '0 auto',
      }}>
        <div className="epi-about-row" style={{
          display: 'flex', gap: '5rem', alignItems: 'flex-start',
        }}>
          {/* Left: Editorial copy */}
          <div style={{ flex: 1.2 }}>
            <SmallCaps>Section IV · Colophon</SmallCaps>
            <h2 style={{
              fontFamily: serif, fontWeight: 400,
              fontSize: 'clamp(2rem, 3.4vw, 3rem)',
              letterSpacing: '-.01em', lineHeight: 1.08,
              margin: '.6rem 0 1.6rem', color: ink,
            }}>
              On the <em style={{ fontStyle: 'italic', color: gold }}>method</em>.
            </h2>
            <p style={{
              fontFamily: body, fontSize: '1.18rem', lineHeight: 1.7,
              color: inkSoft, margin: 0,
            }}>
              <span style={{
                fontFamily: serif, fontSize: '4.6rem', float: 'left',
                lineHeight: .8, paddingRight: '.5rem', paddingTop: '.45rem',
                color: ink, fontWeight: 500,
              }}>W</span>
              elcome to The Epicurean Guide — the ultimate resource for seeking the finest dining experiences around the globe. Carefully curated from over a hundred sources — Michelin, La Liste, the World's 50 Best, the James Beard Foundation, and the journals of record — our mission is to connect food enthusiasts with exceptional restaurants that offer unforgettable gastronomic journeys.
            </p>
            <a href="/methodology"
              onClick={(e) => { e.preventDefault(); window.location.href = '/methodology'; }}
              style={{
                display: 'inline-block', marginTop: '1.8rem',
                fontFamily: sans, fontSize: '11px', letterSpacing: '.32em',
                textTransform: 'uppercase', color: ink, textDecoration: 'none',
                borderBottom: `1px solid ${ink}`, paddingBottom: '2px',
              }}>
              Our Methodology →
            </a>
          </div>

          {/* Right: Counters as editorial figures */}
          <div ref={countersRef} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <SmallCaps style={{ color: gold }}>The Index, in Figures</SmallCaps>
            <Rule mt={14} mb={0} />
            {[
              { label: 'Restaurants', value: counters.restaurants, suffix: '+' },
              { label: 'Cities', value: counters.cities, suffix: '+' },
              { label: 'Countries', value: counters.countries, suffix: '' },
            ].map((s, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
                padding: '1.6rem 0',
                borderBottom: `1px solid ${rule}`,
              }}>
                <span style={{
                  fontFamily: sans, fontSize: '12px', letterSpacing: '.32em',
                  textTransform: 'uppercase', color: inkSoft,
                }}>
                  {s.label}
                </span>
                <span style={{
                  fontFamily: serif, fontWeight: 400,
                  fontSize: 'clamp(2.4rem, 4vw, 3.8rem)',
                  lineHeight: 1, color: ink, letterSpacing: '-.02em',
                  fontVariantNumeric: 'lining-nums tabular-nums',
                }}>
                  {s.value.toLocaleString()}<span style={{ color: gold }}>{s.suffix}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sources / "Curated From" ─────────────────────────────── */}
      <section style={{
        background: paperDeep,
        padding: 'clamp(4rem, 6vw, 6rem) 2.5rem',
        borderTop: `1px solid ${rule}`,
        borderBottom: `1px solid ${rule}`,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <SmallCaps style={{ color: gold }}>Section V</SmallCaps>
          <h3 style={{
            fontFamily: serif, fontWeight: 400,
            fontSize: 'clamp(1.4rem, 2vw, 1.9rem)',
            fontStyle: 'italic', color: ink,
            margin: '.7rem 0 3rem',
            letterSpacing: '.01em',
          }}>
            Curated from the journals of record.
          </h3>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: '2.5rem',
          }}>
            {[
              { id: 1, name: 'Guide Michelin', image: '/images/michelin.png' },
              { id: 2, name: "World's 50 Best", image: '/images/worlds50best.png' },
              { id: 3, name: 'La Liste', image: '/images/laliste.png' },
              { id: 4, name: 'James Beard', image: '/images/jamesbeard.png' },
              { id: 5, name: 'New York Times', image: '/images/nyt.png' },
            ].map((icon) => (
              <a key={icon.id} href="#"
                className="epi-source"
                onClick={(e) => e.preventDefault()}
                style={{ display: 'block' }}>
                <div style={{
                  width: '110px', height: '70px',
                  backgroundImage: `url(${icon.image})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }} title={icon.name} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer style={{
        background: ink, color: paper,
        padding: '4.5rem 2.5rem 2rem',
      }}>
        <div style={{
          maxWidth: '1280px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
          gap: '3rem', alignItems: 'flex-start',
        }}>
          <div>
            <div style={{
              fontFamily: serif, fontSize: '28px', fontWeight: 500,
              letterSpacing: '.14em', textTransform: 'uppercase', color: paper,
              marginBottom: '.5rem',
            }}>
              The Epicurean
            </div>
            <div style={{
              fontFamily: sans, fontSize: '10px', letterSpacing: '.4em',
              textTransform: 'uppercase', color: gold, marginBottom: '1.5rem',
            }}>
              A Glass Production
            </div>
            <p style={{
              fontFamily: body, fontStyle: 'italic', fontSize: '1rem',
              color: '#C9C3B5', lineHeight: 1.6, maxWidth: '320px', margin: 0,
            }}>
              A compendium of the world's finest tables, refined from a hundred sources into one definitive guide.
            </p>
          </div>

          {[
            { h: 'Sections', items: ['Destinations', 'Atlas', 'Journal', 'Methodology'] },
            { h: 'Sources', items: ['Michelin Guide', "World's 50 Best", 'La Liste', 'James Beard'] },
            { h: 'Correspondence', items: ['Newsletter', 'Submissions', 'Press', 'Contact'] },
          ].map((col) => (
            <div key={col.h}>
              <div style={{
                fontFamily: sans, fontSize: '10px', letterSpacing: '.34em',
                textTransform: 'uppercase', color: gold, marginBottom: '1.2rem',
              }}>
                {col.h}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
                {col.items.map((it) => (
                  <a key={it} href="#" style={{
                    fontFamily: serif, fontSize: '1.05rem',
                    color: '#E6E1D2', textDecoration: 'none',
                    transition: 'color .3s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = gold}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#E6E1D2'}
                  >
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
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '1rem',
          fontFamily: sans, fontSize: '10.5px', letterSpacing: '.3em',
          textTransform: 'uppercase', color: '#9C9586',
        }}>
          <span>© MMXXVI · The Epicurean Guide</span>
          <span>All Rights Reserved · A Glass Production</span>
        </div>
      </footer>
    </div>
  );
};

function navBtnStyle(sans, ink) {
  return {
    background: 'none',
    border: 'none',
    fontFamily: sans,
    fontSize: '11px',
    fontWeight: 400,
    letterSpacing: '.32em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    color: ink,
    padding: '4px 0',
  };
}

export default HomePage;
