import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { EpiPage, SmallCaps, Rule, tokens } from './EpiChrome';

// Deduped publication logos from the Methodology sources (one per source —
// e.g. a single Wine Spectator mark, not each glass variant).
const SOURCE_LOGOS = [
  { name: 'Michelin Guide', icon: '/images/michelin.png' },
  { name: 'La Liste', icon: '/images/laliste.png' },
  { name: "World's 50 Best", icon: '/images/worlds50best.png' },
  { name: 'James Beard Foundation', icon: '/images/jamesbeard.png' },
  { name: "Asia's 50 Best", icon: '/images/asias50best.png' },
  { name: 'Forbes', icon: '/images/forbes.png' },
  { name: "Latin America's 50 Best", icon: '/images/latams50best.png' },
  { name: 'The Washington Post', icon: '/images/washingtonpost.png' },
  { name: "North America's 50 Best", icon: '/images/nas50best.png' },
  { name: 'Relais & Châteaux', icon: '/images/relaischateaux.png' },
  { name: "MENA's 50 Best", icon: '/images/menas50best.png' },
  { name: 'Slow Food', icon: '/images/slowfood.png' },
  { name: "World's 50 Best Bars", icon: '/images/worlds50bestbars.png' },
  { name: 'The New York Times', icon: '/images/nyt.png' },
  { name: 'Gault & Millau', icon: '/images/gaultmillau.png' },
  { name: 'AAA Travel', icon: '/images/aaatravel.png' },
  { name: 'World Culinary Awards', icon: '/images/worldculinaryawards.png' },
  { name: 'AA Hospitality Awards', icon: '/images/aahospitalityawards.png' },
  { name: 'Opinionated About Dining', icon: '/images/oad.png' },
  { name: 'Falstaff', icon: '/images/falstaff.png' },
  { name: "We're Smart", icon: '/images/weresmart.png' },
  { name: '50 Top Italy', icon: '/images/50topItaly.png' },
  { name: 'Star Wine List', icon: '/images/starwinelist.png' },
  { name: 'The World of Fine Wine', icon: '/images/worldoffinewine.png' },
  { name: 'DiRoNA', icon: '/images/dirona.png' },
  { name: 'Gambero Rosso', icon: '/images/gamberorosso.png' },
  { name: 'Wine Spectator', icon: '/images/winespectator.png' },
  { name: 'Food & Wine', icon: '/images/foodandwine.png' },
  { name: 'Tales of the Cocktail', icon: '/images/cocktailfoundation.png' },
];

const HomePage = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [countersVisible, setCountersVisible] = useState(false);
  const [counters, setCounters] = useState({ restaurants: 0, cities: 0, countries: 0 });
  const [isTransitioning, setIsTransitioning] = useState(true);
  const countersRef = useRef(null);
  const { ink, inkSoft, inkMute, paper, paperDeep, rule, gold, serif, body, sans } = tokens;

  useEffect(() => {
    document.title = "The Epicurean";
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      document.head.appendChild(favicon);
    }
    favicon.href = '/images/E.png';
  }, []);

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
    const targetValues = { restaurants: 12650, cities: 3397, countries: 163 };
    const duration = 3000;
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounters({
        restaurants: Math.floor(targetValues.restaurants * eased),
        cities: Math.floor(targetValues.cities * eased),
        countries: Math.floor(targetValues.countries * eased),
      });
      if (currentStep >= steps) { clearInterval(timer); setCounters(targetValues); }
    }, stepDuration);
  };

  const newsArticles = [
    { id: 1, kicker: "Dispatch · New York", title: "The Times' Best NYC Restaurants of 2025", date: "MMXXV", image: "/images/nyt2025.png" },
    { id: 2, kicker: "Awards · Washington", title: "Inside the 2025 RAMMY Awards", date: "MMXXV", image: "/images/rammys2025.png" },
    { id: 3, kicker: "Awards · America", title: "The 2025 James Beard Foundation Honours", date: "MMXXV", image: "/images/jb2025.png" },
  ];

  return (
    <EpiPage active="home">
      {/* Hero overture */}
      <section style={{
        padding: '4.5rem 2.5rem 2.25rem',
        textAlign: 'center', maxWidth: '1100px', margin: '0 auto',
      }}>
        <SmallCaps style={{ color: gold }}>The Featured Tables · No. 01</SmallCaps>
        <h1 className="epi-rise" style={{
          fontFamily: serif, fontWeight: 400,
          fontSize: 'clamp(2.6rem, 6vw, 5.2rem)',
          lineHeight: 1.02, letterSpacing: '-.01em',
          margin: '1.1rem 0 1rem', color: ink,
        }}>
          A curated atlas of the world's
          <br />
          most extraordinary restaurants.
        </h1>
        <p style={{
          fontFamily: body, fontSize: '1.15rem', fontStyle: 'italic',
          color: inkSoft, maxWidth: '640px', margin: '0 auto 2rem',
          lineHeight: 1.6,
        }}>
          From three-star temples to whispered local secrets — a connoisseur's compendium, drawn from a hundred and more sources, refined into a single guide for the discerning traveller.
        </p>
        <div className="epi-line" style={{ width: '64px', height: '1px', background: gold, margin: '0 auto' }} />
      </section>

      {/* Carousel (logic preserved) — full-bleed, images fill the width */}
      <section style={{ width: '100%', padding: '1.5rem 0 0', boxSizing: 'border-box' }}>
        <div style={{
          display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
          padding: '0 2.5rem 1rem',
        }}>
          <SmallCaps>Plate I · The Featured</SmallCaps>
          <SmallCaps style={{ color: inkMute }}>
            {String((currentSlide === carouselImages.length ? 0 : currentSlide) + 1).padStart(2,'0')}
            <span style={{ color: rule, margin: '0 .55em' }}>/</span>
            {String(carouselImages.length).padStart(2,'0')}
          </SmallCaps>
        </div>
        <div style={{
          width: '100%', height: '78vh',
          position: 'relative', overflow: 'hidden',
          background: paperDeep,
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
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundColor: paperDeep,
                  position: 'relative',
                  display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start',
                  cursor: slide.route ? 'pointer' : 'default',
                }}
              >
                <div style={{
                  position: 'absolute',
                  left: 'clamp(1.5rem, 4vw, 4rem)',
                  bottom: 'clamp(1.5rem, 4vw, 4rem)',
                  color: slide.textColor, maxWidth: '520px',
                }}>
                  <div style={{
                    fontFamily: sans, fontSize: '10.5px', letterSpacing: '.34em',
                    textTransform: 'uppercase', opacity: .85, marginBottom: '.85rem',
                    color: slide.textColor,
                  }}>
                    No. {String(((currentSlide === carouselImages.length ? 0 : currentSlide) % carouselImages.length) + 1).padStart(2,'0')} · The Featured
                  </div>
                  <h1 style={{
                    fontFamily: serif, fontSize: 'clamp(2rem, 4vw, 3.4rem)',
                    fontWeight: 500, margin: '0 0 .25rem',
                    lineHeight: 1.04, letterSpacing: '-.005em',
                  }}>{slide.title}</h1>
                  <p style={{
                    fontFamily: body, fontSize: '1.3rem', fontStyle: 'italic',
                    margin: '0 0 .9rem', fontWeight: 400, opacity: .92,
                  }}>{slide.location}</p>
                  <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}>
                    {Array.from({ length: slide.stars }, (_, starIndex) => (
                      <div key={starIndex} style={{ width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={slide.starImages[starIndex]} alt="Star"
                          style={{ width: '30px', height: '30px', objectFit: 'contain' }}
                          onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                        <span style={{ fontSize: '18px', color: slide.textColor, display: 'none' }}>★</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            position: 'absolute', bottom: '24px', right: '24px',
            display: 'flex', gap: '6px', alignItems: 'center',
          }}>
            {carouselImages.map((_, index) => {
              const active = (currentSlide === carouselImages.length ? 0 : currentSlide) === index;
              return (
                <div key={index} className="epi-indicator"
                  style={{
                    width: active ? '28px' : '12px', height: '1.5px',
                    background: active ? ink : 'rgba(31,26,20,.35)',
                    cursor: 'pointer', transition: 'width .5s cubic-bezier(.2,.7,.2,1), background .4s ease',
                  }}
                  onClick={() => { setIsTransitioning(true); setCurrentSlide(index); }} />
              );
            })}
          </div>
        </div>
      </section>

      {/* Editorial divider */}
      <section style={{ padding: '6rem 2.5rem 2rem', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: '2rem' }}>
          <div style={{ height: '1px', background: rule }} />
          <SmallCaps style={{ color: gold, letterSpacing: '.42em' }}>※</SmallCaps>
          <div style={{ height: '1px', background: rule }} />
        </div>
      </section>

      {/* Dispatches */}
      <section style={{ padding: '1rem 2.5rem 5rem', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem',
        }}>
          <div>
            <SmallCaps>Section II</SmallCaps>
            <h2 style={{
              fontFamily: serif, fontWeight: 400,
              fontSize: 'clamp(2rem, 4vw, 3.4rem)',
              margin: '.4rem 0 0', letterSpacing: '-.01em', color: ink,
            }}>
              Dispatches <em style={{ fontStyle: 'italic', color: gold }}>&amp;</em> Distinctions
            </h2>
          </div>
          <a href="#" style={{
            fontFamily: sans, fontSize: '11px', letterSpacing: '.32em',
            textTransform: 'uppercase', color: ink, textDecoration: 'none',
            borderBottom: `1px solid ${ink}`, paddingBottom: '2px',
          }}>All Journals →</a>
        </div>

        <div className="epi-news-grid" style={{
          display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '2.5rem',
        }}>
          <a className="epi-feature" href="#" style={{ textDecoration: 'none', color: 'inherit', display: 'block', cursor: 'pointer' }}>
            <div className="epi-news-lead" style={{
              aspectRatio: '4/5', overflow: 'hidden',
              background: paperDeep, border: `1px solid ${rule}`,
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
            }}>{newsArticles[0].title}</h3>
            <p style={{
              fontFamily: body, fontStyle: 'italic', fontSize: '1.05rem',
              color: inkSoft, lineHeight: 1.55, margin: 0, maxWidth: '540px',
            }}>
              A new vanguard of dining rooms, from a Tribeca townhouse to a quiet bistro in Brooklyn — the year's most consequential openings, examined.
            </p>
          </a>

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
                    }}>{article.title}</h4>
                    <span style={{
                      fontFamily: sans, fontSize: '10.5px', letterSpacing: '.3em',
                      textTransform: 'uppercase', color: inkMute,
                    }}>Read — {article.date}</span>
                  </div>
                </a>
                {idx === 0 && <Rule />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* The Atlas CTA */}
      <section style={{
        background: ink, color: paper,
        padding: 'clamp(4rem, 8vw, 7rem) 2.5rem',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
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
            margin: '1rem auto 1.2rem', maxWidth: '900px',
            lineHeight: 1.06, letterSpacing: '-.01em', color: paper,
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
          <a className="epi-cta" href="/map"
            onClick={(e) => { e.preventDefault(); window.location.href = '/map'; }}
            style={{
              fontFamily: sans, fontSize: '12px', letterSpacing: '.35em',
              textTransform: 'uppercase', color: paper, textDecoration: 'none',
              borderTop: `1px solid ${gold}`, borderBottom: `1px solid ${gold}`,
              padding: '14px 28px', display: 'inline-block', cursor: 'pointer',
            }}>
            Open the Atlas
          </a>
        </div>
      </section>

      {/* About + Stats */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 7rem) 2.5rem',
        maxWidth: '1280px', margin: '0 auto',
      }}>
        <div className="epi-about-row" style={{ display: 'flex', gap: '5rem', alignItems: 'flex-start' }}>
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
            <p style={{ fontFamily: body, fontSize: '1.18rem', lineHeight: 1.7, color: inkSoft, margin: 0 }}>
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
              }}>Our Methodology →</a>
          </div>

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
                padding: '1.6rem 0', borderBottom: `1px solid ${rule}`,
              }}>
                <span style={{
                  fontFamily: sans, fontSize: '12px', letterSpacing: '.32em',
                  textTransform: 'uppercase', color: inkSoft,
                }}>{s.label}</span>
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

      {/* Sources */}
      <section style={{
        background: paperDeep,
        padding: 'clamp(4rem, 6vw, 6rem) 2.5rem',
        borderTop: `1px solid ${rule}`, borderBottom: `1px solid ${rule}`,
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <SmallCaps style={{ color: gold }}>Section V</SmallCaps>
          <h3 style={{
            fontFamily: serif, fontWeight: 400,
            fontSize: 'clamp(1.4rem, 2vw, 1.9rem)',
            fontStyle: 'italic', color: ink,
            margin: '.7rem 0 3rem', letterSpacing: '.01em',
          }}>Curated from the journals of record.</h3>
          <div className="epi-marquee" style={{
            maskImage: 'linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)',
            WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)',
          }}>
            <div className="epi-marquee-track">
              {[...SOURCE_LOGOS, ...SOURCE_LOGOS].map((logo, i) => (
                <div key={i} style={{ flex: '0 0 auto', padding: '0 2.25rem' }}>
                  <div title={logo.name} style={{
                    width: '116px', height: '58px',
                    backgroundImage: `url(${logo.icon})`,
                    backgroundSize: 'contain', backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    filter: 'grayscale(1)', opacity: .55,
                  }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </EpiPage>
  );
};

export default HomePage;
