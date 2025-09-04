import React, { useState, useEffect, useRef } from 'react';
import App from './App';

const HomePage = ({ navigateToPage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [countersVisible, setCountersVisible] = useState(false);
  const [counters, setCounters] = useState({ restaurants: 0, cities: 0, countries: 0 });
  const [isTransitioning, setIsTransitioning] = useState(true);
  const countersRef = useRef(null);
  
  // Set document title and favicon
  useEffect(() => {
    document.title = "The Epicurean";
    
    // Create or update favicon
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      document.head.appendChild(favicon);
    }
    favicon.href = '/images/E.png';
  }, []);
  
  // Carousel images with text overlays and star ratings
  const carouselImages = [
    {
      image: "/images/geranium.png",
      title: "Geranium",
      location: "København, Denmark",
      textColor: "#333",
      stars: 3,
      starImages: [
        "/images/michelinstar.png",
        "/images/michelinstar.png",
        "/images/michelinstar.png"
      ]
    },
    {
      image: "/images/osteriafrancescana.png",
      title: "Osteria Francescana",
      location: "Modena, Italy",
      textColor: "#333",
      stars: 4,
      starImages: [
        "/images/michelinstar.png",
        "/images/michelinstar.png",
        "/images/michelinstar.png",
        "/images/greenstar.png"
      ]
    },
    {
      image: "/images/thefrenchlaundry.png",
      title: "The French Laundry",
      location: "Yountville, California",
      textColor: "#333",
      stars: 4,
      starImages: [
        "/images/michelinstar.png",
        "/images/michelinstar.png",
        "/images/michelinstar.png",
        "/images/greenstar.png"
      ]
    },
    {
      image: "/images/thefatduck.png",
      title: "The Fat Duck",
      location: "Bray, United Kingdom",
      textColor: "#fff",
      stars: 3,
      starImages: [
        "/images/michelinstar.png",
        "/images/michelinstar.png",
        "/images/michelinstar.png"
      ]
    },
    {
      image: "/images/elcellerdesanrosa.png",
      title: "El Celler de Can Roca",
      location: "Girona, Spain",
      textColor: "#333",
      stars: 4,
      starImages: [
        "/images/michelinstar.png",
        "/images/michelinstar.png",
        "/images/michelinstar.png",
          "/images/greenstar.png"
      ]
    },
    {
      image: "/images/disfrutar.png",
      title: "Disfrutar",
      location: "Barcelona, Spain",
      textColor: "#fff",
      stars: 3,
      starImages: [
        "/images/michelinstar.png",
        "/images/michelinstar.png",
        "/images/michelinstar.png"
      ]
    },
    {
      image: "/images/mirazur.png",
      title: "Le Mirazur",
      location: "Menton, France",
      textColor: "#333",
      stars: 4,
      starImages: [
        "/images/michelinstar.png",
        "/images/michelinstar.png",
        "/images/michelinstar.png",
        "/images/greenstar.png"
      ]
    },
    {
      image: "/images/noma.png",
      title: "noma",
      location: "København, Denmark",
      textColor: "#fff",
      stars: 4,
      starImages: [
        "/images/michelinstar.png",
        "/images/michelinstar.png",
        "/images/michelinstar.png",
        "/images/greenstar.png"
      ]
    },
    {
      image: "/images/alainducasse.png",
      title: "Alain Ducasse at The Dorchester",
      location: "London, United Kingdom",
      textColor: "#fff",
      stars: 3,
      starImages: [
        "/images/michelinstar.png",
        "/images/michelinstar.png",
        "/images/michelinstar.png",
      ]
    },
    {
      image: "/images/elevenmadisonpark.png",
      title: "Eleven Madison Park",
      location: "New York City, United States",
      textColor: "#333",
      stars: 3,
      starImages: [
        "/images/michelinstar.png",
        "/images/michelinstar.png",
        "/images/michelinstar.png"
      ]
    },
  ];

  // Create extended array for infinite loop effect - add first image at the end
  const extendedImages = [...carouselImages, carouselImages[0]];

  // Auto-slide carousel every 3 seconds with infinite loop
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev === carouselImages.length) {
          // We're at the cloned first slide, jump to real first slide
          setIsTransitioning(false);
          setTimeout(() => {
            setCurrentSlide(1);
            setIsTransitioning(true);
          }, 20);
          return 0;
        }
        return prev + 1;
      });
    }, 5000);
    
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  // Intersection Observer for counter animation
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

    if (countersRef.current) {
      observer.observe(countersRef.current);
    }

    return () => {
      if (countersRef.current) {
        observer.unobserve(countersRef.current);
      }
    };
  }, [countersVisible]);

  const animateCounters = () => {
    const targetValues = { restaurants: 1000, cities: 500, countries: 100 };
    const duration = 3000; // 3 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        restaurants: Math.floor(targetValues.restaurants * progress),
        cities: Math.floor(targetValues.cities * progress),
        countries: Math.floor(targetValues.countries * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targetValues); // Ensure final values are exact
      }
    }, stepDuration);
  };

  // Placeholder news articles - you'll replace with your data
  const newsArticles = [
    {
      id: 1,
      title: "NY Times Best NYC Restaurants of 2025",
      image: "/images/nyt2025.png"
    },
    {
      id: 2,
      title: "2025 RAMMY Awards",
      image: "/images/rammys2025.png"
    },
    {
      id: 3,
      title: "2025 James Beard Foundation Awards",
      image: "/images/jb2025.png"
    },
  ];

  return (
    <div style={{
      fontFamily: 'Times New Roman, serif',
      backgroundColor: 'white',
      minHeight: '100vh',
      width: '100vw',
      margin: 0,
      padding: 0,
      overflowX: 'hidden',
      boxSizing: 'border-box'
    }}>
      {/* Navigation Bar - Made Sticky */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        width: '100vw',
        boxSizing: 'border-box',
        margin: 0
      }}>
        {/* Logo Area - CHANGE THE TEXT HERE */}
        <a 
          href="#home" 
          style={{ textDecoration: 'none' }}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer'
          }}>
            {/* Website Icon - Logo Image */}
            <img 
              src="/images/theepicurean.png" 
              alt="The Epicurean"
              style={{
                width: '150px',
                height: '40px',
                objectFit: 'contain',
                backgroundColor: 'transparent'
              }}
            />
          </div>
        </a>

        {/* Navigation Links */}
        <div style={{
          display: 'flex',
          gap: '2rem'
        }}>
          <button 
            style={{ 
              background: 'none',
              border: 'none',
              fontSize: '18px',
              fontWeight: '500',
              cursor: 'pointer',
              color: '#333',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            onClick={() => {
              window.location.href = '/destinations';
            }}
          >
            Destinations
          </button>
          <button style={{
            background: 'none',
            border: 'none',
            fontSize: '18px',
            fontWeight: '500',
            cursor: 'pointer',
            color: '#333',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Articles
          </button>
          <button style={{
            background: 'none',
            border: 'none',
            fontSize: '18px',
            fontWeight: '500',
            cursor: 'pointer',
            color: '#333',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          onClick={() => {
              window.location.href = '/methodology';
            }}
          >
            Methodology
          </button>
          <button style={{
            background: 'none',
            border: 'none',
            fontSize: '18px',
            fontWeight: '500',
            cursor: 'pointer',
            color: '#333',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            transition: 'background-color 0.3s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Carousel Section - Full width with 80vh height, contained images */}
      <div style={{
        width: '100vw',
        height: '80vh', // Changed to 80% of viewport height
        marginTop: '92px', // Exactly header height with no extra space
        position: 'relative',
        overflow: 'hidden',
        padding: 0
      }}>
        <div style={{
          display: 'flex',
          width: `${extendedImages.length * 100}%`,
          height: '100%',
          transform: `translateX(-${currentSlide * (100 / extendedImages.length)}%)`,
          transition: isTransitioning ? 'transform 0.8s ease-in-out' : 'none'
        }}>
          {extendedImages.map((slide, index) => (
            <div
              key={index}
              style={{
                width: `${100 / extendedImages.length}%`,
                height: '100%',
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundColor: '#f8f9fa',
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-start'
              }}
            >
              {/* Text Overlay */}
              <div style={{
                position: 'absolute',
                left: '4rem',
                bottom: '4rem',
                color: slide.textColor,
                maxWidth: '400px'
              }}>
                {/* Restaurant Name - Even Smaller Text */}
                <h1 style={{
                  fontSize: '2.2rem',
                  fontWeight: 'bold',
                  margin: '0 0 0.3rem 0',
                  lineHeight: '1.1',
                  fontFamily: 'Times New Roman, serif'
                }}>
                  {slide.title}
                </h1>
                
                {/* Location - Small Text */}
                <p style={{
                  fontSize: '1.4rem',
                  margin: '0 0 0.8rem 0',
                  fontWeight: '400',
                  opacity: '0.9',
                  fontFamily: 'Times New Roman, serif'
                }}>
                  {slide.location}
                </p>
                
                {/* Star Rating Images */}
                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  alignItems: 'center'
                }}>
                  {Array.from({ length: slide.stars }, (_, starIndex) => (
                    <div
                      key={starIndex}
                      style={{
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {/* Star PNG Image */}
                      <img 
                        src={slide.starImages[starIndex]} 
                        alt="Star" 
                        style={{
                          width: '32px',
                          height: '32px',
                          objectFit: 'contain'
                        }}
                        onError={(e) => {
                          // Fallback to text star if image fails to load
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      {/* Fallback text star */}
                      <span style={{ 
                        fontSize: '20px',
                        color: slide.textColor,
                        display: 'none'
                      }}>★</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Carousel Indicators */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '10px'
        }}>
          {carouselImages.map((_, index) => (
            <div
              key={index}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: (currentSlide === carouselImages.length ? 0 : currentSlide) === index ? '#333' : 'rgba(51,51,51,0.5)',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentSlide(index);
              }}
            />
          ))}
        </div>
      </div>

      {/* Spacing */}
      <div style={{ height: '60px' }} />

      {/* News Articles Section */}
      <div style={{
        padding: '0 4rem',
        width: '100vw',
        boxSizing: 'border-box',
        margin: 0
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '3rem',
          color: '#333'
        }}>
          Latest News
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem',
          maxWidth: '1400px',
          margin: '0 auto 4rem auto'
        }}>
          {newsArticles.map((article) => (
            <div
              key={article.id}
              style={{
                aspectRatio: '1',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                position: 'relative',
                backgroundImage: `url(${article.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px)';
                e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
              }}
            >
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                padding: '2rem 1.5rem 1.5rem',
                color: 'white'
              }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  margin: 0
                }}>
                  {article.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bio Section with Counters */}
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '6rem 4rem',
        width: '100vw',
        boxSizing: 'border-box',
        margin: 0
      }}>
        {/* About Title */}
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '4rem',
          color: '#333',
          textAlign: 'center'
        }}>
          About
        </h2>

        {/* Counter Stats - Fixed cities animation */}
        <div 
          ref={countersRef}
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            maxWidth: '1000px',
            margin: '0 auto 4rem auto',
            flexWrap: 'wrap',
            gap: '2rem'
          }}
        >
          <div style={{ textAlign: 'center', minWidth: '200px' }}>
            <div style={{
              fontSize: '4rem',
              fontWeight: 'bold',
              color: '#d4a574',
              marginBottom: '0.5rem'
            }}>
              {counters.restaurants.toLocaleString()}
            </div>
            <div style={{
              fontSize: '1.2rem',
              color: '#666',
              fontWeight: '500'
            }}>
              Restaurants
            </div>
          </div>

          <div style={{ textAlign: 'center', minWidth: '200px' }}>
            <div style={{
              fontSize: '4rem',
              fontWeight: 'bold',
              color: '#d4a574',
              marginBottom: '0.5rem'
            }}>
              {counters.cities.toLocaleString()}
            </div>
            <div style={{
              fontSize: '1.2rem',
              color: '#666',
              fontWeight: '500'
            }}>
              Cities
            </div>
          </div>

          <div style={{ textAlign: 'center', minWidth: '200px' }}>
            <div style={{
              fontSize: '4rem',
              fontWeight: 'bold',
              color: '#d4a574',
              marginBottom: '0.5rem'
            }}>
              {counters.countries.toLocaleString()}
            </div>
            <div style={{
              fontSize: '1.2rem',
              color: '#666',
              fontWeight: '500'
            }}>
              Countries
            </div>
          </div>
        </div>

        {/* Bio Text */}
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '1.2rem',
            lineHeight: '1.8',
            color: '#666',
            marginBottom: '1.5rem'
          }}>
            Welcome to The Epicurean Guide, the ultimate resource for seeking the finest dining experiences around the globe. This guide has been carefully curated from over a hundred sources, including prestigious awards, renowned culinary publications, and expert reviews. Our mission is to connect food enthusiasts with exceptional restaurants that offer unforgettable gastronomic journeys.
          </p>
        </div>
      </div>

      {/* Icons Section - FIXED TO DISPLAY ACTUAL IMAGES */}
      <div style={{
        padding: '4rem',
        backgroundColor: 'white',
        width: '100vw',
        boxSizing: 'border-box',
        margin: 0
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          {/* Fixed icons to display actual images */}
          {[
            { id: 1, name: 'Guide Michelin', image: '/images/michelin.png' },
            { id: 2, name: 'World\'s 50 Best', image: '/images/worlds50best.png' },
            { id: 3, name: 'La Liste', image: '/images/laliste.png' },
            { id: 4, name: 'James Beard', image: '/images/jamesbeard.png' },
            { id: 5, name: 'New York Times', image: '/images/nyt.png' }
          ].map((icon) => (
            <a
              key={icon.id}
              href="#"
              style={{ textDecoration: 'none' }}
              onClick={(e) => {
                e.preventDefault();
                console.log(`Clicked on ${icon.name} link`);
              }}
            >
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  backgroundImage: `url(${icon.image})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundColor: 'white'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                }}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#f8f9fa',
        padding: '2rem',
        textAlign: 'center',
        borderTop: '1px solid #e9ecef'
      }}>
        <p style={{
          fontSize: '14px',
          color: '#666',
          margin: 0,
          fontFamily: 'Times New Roman, serif'
        }}>
          a Glass production
        </p>
      </footer>
    </div>
  );
};

export default HomePage;