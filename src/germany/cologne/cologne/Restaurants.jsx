import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Cologne";

const restaurants = [
  {
    name: "ACHT",
    cuisine: "International",
    price: "€€",
    path: "/germany/cologne/cologne/acht",
    image: '/images/acht1.png'
  },
  {
    name: "Alfredo",
    cuisine: "Italian, Mediterranean Cuisine",
    price: "€€€",
    path: "/germany/cologne/cologne/alfredo",
    image: '/images/alfredo1.png'
  },
  {
    name: "Appare",
    cuisine: "Japanese, Traditional Cuisine",
    price: "€€€",
    path: "/germany/cologne/cologne/appare",
    image: '/images/appare1.png'
  },
  {
    name: "Capricorn [ i ] Aries Brasserie",
    cuisine: "Classic French",
    price: "€€",
    path: "/germany/cologne/cologne/capricorn-i-aries-brasserie",
    image: '/images/capricorn-i-aries-brasserie1.png'
  },
  {
    name: "CARUSO Pastabar",
    cuisine: "Italian",
    price: "€€",
    path: "/germany/cologne/cologne/caruso-pastabar",
    image: '/images/caruso-pastabar1.png'
  },
  {
    name: "Christoph Pauls Restaurant",
    cuisine: "Farm to table, Seasonal Cuisine",
    price: "€€",
    path: "/germany/cologne/cologne/christoph-pauls-restaurant",
    image: '/images/christoph-pauls-restaurant1.png'
  },
  {
    name: "Gasthaus Scherz",
    cuisine: "Austrian, Country cooking",
    price: "€€",
    path: "/germany/cologne/cologne/gasthaus-scherz",
    image: '/images/gasthaus-scherz1.png'
  },
  {
    name: "Gruber's Restaurant",
    cuisine: "Austrian, Modern Cuisine",
    price: "€€",
    path: "/germany/cologne/cologne/grubers-restaurant",
    image: '/images/grubers-restaurant1.png'
  },
  {
    name: "Hanse Stube",
    cuisine: "Classic Cuisine, French",
    price: "€€€",
    path: "/germany/cologne/cologne/hanse-stube",
    image: '/images/hanse-stube1.png'
  },
  {
    name: "HENNE.Weinbar",
    cuisine: "International, Seasonal Cuisine",
    price: "€",
    path: "/germany/cologne/cologne/henneweinbar",
    image: '/images/henneweinbar1.png'
  },
  {
    name: "ITO",
    cuisine: "Japanese, Modern Cuisine",
    price: "€€",
    path: "/germany/cologne/cologne/ito",
    image: '/images/ito1.png'
  },
  {
    name: "La Cuisine Rademacher",
    cuisine: "Modern French",
    price: "€€€€",
    path: "/germany/cologne/cologne/la-cuisine-rademacher",
    image: '/images/la-cuisine-rademacher1.png'
  },
  {
    name: "La Société",
    cuisine: "Modern Cuisine, International",
    price: "€€€€",
    path: "/germany/cologne/cologne/la-socit",
    image: '/images/la-socit1.png'
  },
  {
    name: "Le Moissonnier Bistro",
    cuisine: "French, Seafood",
    price: "€€€",
    path: "/germany/cologne/cologne/le-moissonnier-bistro",
    image: '/images/le-moissonnier-bistro1.png'
  },
  {
    name: "Limbourg",
    cuisine: "French Contemporary, International",
    price: "€€€",
    path: "/germany/cologne/cologne/limbourg",
    image: '/images/limbourg1.png'
  },
  {
    name: "maiBeck",
    cuisine: "Modern Cuisine, Country cooking",
    price: "€€",
    path: "/germany/cologne/cologne/maibeck",
    image: '/images/maibeck1.png'
  },
  {
    name: "maximilian lorenz",
    cuisine: "Modern Cuisine, Farm to table",
    price: "€€€€",
    path: "/germany/cologne/cologne/maximilian-lorenz",
    image: '/images/maximilian-lorenz1.png'
  },
  {
    name: "NeoBiota",
    cuisine: "Modern Cuisine, Creative",
    price: "€€€€",
    path: "/germany/cologne/cologne/neobiota",
    image: '/images/neobiota1.png'
  },
  {
    name: "Otto",
    cuisine: "Italian",
    price: "€€€",
    path: "/germany/cologne/cologne/otto",
    image: '/images/otto1.png'
  },
  {
    name: "Ouzeria",
    cuisine: "Modern Cuisine, Fusion",
    price: "€€€",
    path: "/germany/cologne/cologne/ouzeria",
    image: '/images/ouzeria1.png'
  },
  {
    name: "Ox & Klee",
    cuisine: "Modern Cuisine, Creative",
    price: "€€€€",
    path: "/germany/cologne/cologne/ox-klee",
    image: '/images/ox-klee1.png'
  },
  {
    name: "Phaedra",
    cuisine: "Mediterranean Cuisine",
    price: "€€€",
    path: "/germany/cologne/cologne/phaedra",
    image: '/images/phaedra1.png'
  },
  {
    name: "Piccolo",
    cuisine: "Classic Cuisine, Mediterranean Cuisine",
    price: "€€",
    path: "/germany/cologne/cologne/piccolo",
    image: '/images/piccolo1.png'
  },
  {
    name: "Poisson",
    cuisine: "Seafood",
    price: "€€€",
    path: "/germany/cologne/cologne/poisson",
    image: '/images/poisson1.png'
  },
  {
    name: "Pottkind",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€€",
    path: "/germany/cologne/cologne/pottkind",
    image: '/images/pottkind1.png'
  },
  {
    name: "PULS",
    cuisine: "Contemporary, International",
    price: "€€",
    path: "/germany/cologne/cologne/puls",
    image: '/images/puls1.png'
  },
  {
    name: "Sahila - The Restaurant",
    cuisine: "International, Modern Cuisine",
    price: "€€€€",
    path: "/germany/cologne/cologne/sahila-the-restaurant",
    image: '/images/sahila-the-restaurant1.png'
  },
  {
    name: "taku",
    cuisine: "Asian, Fusion",
    price: "€€€€",
    path: "/germany/cologne/cologne/taku",
    image: '/images/taku1.png'
  },
  {
    name: "ZEN Japanese Restaurant",
    cuisine: "Japanese",
    price: "€€",
    path: "/germany/cologne/cologne/zen-japanese-restaurant",
    image: '/images/zen-japanese-restaurant1.png'
  },
  {
    name: "Zur Tant",
    cuisine: "Classic Cuisine, Farm to table",
    price: "€€€",
    path: "/germany/cologne/cologne/zur-tant",
    image: '/images/zur-tant1.png'
  }
];

const Restaurants = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    document.title = pageTitle;
  }, []);

  const handleCardClick = (path) => {
    navigate(path);
  };

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
        <a
          href="/"
          style={{ textDecoration: 'none' }}
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer'
          }}>
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

        <div style={{ display: 'flex', gap: '2rem' }}>
          <button
            style={{
              background: 'none', border: 'none', fontSize: '18px',
              fontWeight: '500', cursor: 'pointer', color: '#333',
              padding: '0.5rem 1rem', borderRadius: '4px',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            onClick={() => navigate('/destinations')}
          >
            Destinations
          </button>
          <button
            style={{
              background: 'none', border: 'none', fontSize: '18px',
              fontWeight: '500', cursor: 'pointer', color: '#333',
              padding: '0.5rem 1rem', borderRadius: '4px',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            onClick={() => navigate('/methodology')}
          >
            Methodology
          </button>
        </div>
      </nav>

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '7rem 2rem 0 2rem'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#333',
          margin: '0 0 1rem 0',
          fontFamily: 'Times New Roman, serif'
        }}>
          {pageTitle}
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#666',
          margin: '0 0 2rem 0',
          fontFamily: 'Times New Roman, serif'
        }}>
          {restaurants.length} restaurant{restaurants.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div style={{
        padding: '0 2rem 4rem 2rem',
        width: '100vw',
        boxSizing: 'border-box',
        margin: 0
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, 300px)',
          gap: '2rem',
          justifyContent: 'start'
        }}>
          {restaurants.map((restaurant, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(restaurant.path)}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                border: '1px solid #e9ecef'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
              }}
            >
              <div style={{
                height: '200px',
                backgroundColor: '#f8f9fa',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover', display: 'block'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                  backgroundColor: '#f8f9fa', display: 'none',
                  alignItems: 'center', justifyContent: 'center',
                  color: '#666', fontSize: '14px', fontWeight: '500'
                }}>
                  {restaurant.name}
                </div>
              </div>

              <div style={{ padding: '1.5rem', backgroundColor: 'white' }}>
                <h3 style={{
                  fontSize: '1.25rem', fontWeight: '600', color: '#333',
                  margin: '0 0 0.5rem 0', fontFamily: 'Times New Roman, serif'
                }}>
                  {restaurant.name}
                </h3>
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                }}>
                  <span style={{
                    fontSize: '0.9rem', color: '#666',
                    fontFamily: 'Times New Roman, serif'
                  }}>
                    {restaurant.cuisine}
                  </span>
                  <span style={{
                    fontSize: '0.9rem', fontWeight: '600', color: '#333',
                    fontFamily: 'Times New Roman, serif'
                  }}>
                    {restaurant.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer style={{
        backgroundColor: '#f8f9fa',
        padding: '2rem',
        textAlign: 'center',
        borderTop: '1px solid #e9ecef',
        width: '100vw',
        boxSizing: 'border-box',
        margin: 0
      }}>
        <p style={{
          fontSize: '14px', color: '#666', margin: 0,
          fontFamily: 'Times New Roman, serif'
        }}>
          a Glass production
        </p>
      </footer>
    </div>
  );
};

export default Restaurants;
