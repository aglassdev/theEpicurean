import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Malaga";

const restaurants = [
  {
    name: "Aire",
    cuisine: "Contemporary",
    price: "€€",
    path: "/spain/malaga/malaga/aire",
    image: '/images/aire1.png'
  },
  {
    name: "Alaparte",
    cuisine: "Modern Cuisine, Andalusian",
    price: "€€",
    path: "/spain/malaga/malaga/alaparte",
    image: '/images/alaparte1.png'
  },
  {
    name: "Base9",
    cuisine: "Contemporary",
    price: "€",
    path: "/spain/malaga/malaga/base9",
    image: '/images/base91.png'
  },
  {
    name: "Beluga",
    cuisine: "Mediterranean Cuisine",
    price: "€€€",
    path: "/spain/malaga/malaga/beluga",
    image: '/images/beluga1.png'
  },
  {
    name: "Blossom",
    cuisine: "Fusion",
    price: "€€€€",
    path: "/spain/malaga/malaga/blossom",
    image: '/images/blossom1.png'
  },
  {
    name: "Candado Golf",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/spain/malaga/malaga/candado-golf",
    image: '/images/candado-golf1.png'
  },
  {
    name: "Clómada",
    cuisine: "International",
    price: "€€",
    path: "/spain/malaga/malaga/clmada",
    image: '/images/clmada1.png'
  },
  {
    name: "Cávala",
    cuisine: "Creative",
    price: "€€€",
    path: "/spain/malaga/malaga/cvala",
    image: '/images/cvala1.png'
  },
  {
    name: "José Carlos García",
    cuisine: "Creative, Andalusian",
    price: "€€€€",
    path: "/spain/malaga/malaga/jos-carlos-garca",
    image: '/images/jos-carlos-garca1.png'
  },
  {
    name: "Kaleja",
    cuisine: "Contemporary",
    price: "€€€€",
    path: "/spain/malaga/malaga/kaleja",
    image: '/images/kaleja1.png'
  },
  {
    name: "La Cosmo",
    cuisine: "Andalusian",
    price: "€€",
    path: "/spain/malaga/malaga/la-cosmo",
    image: '/images/la-cosmo1.png'
  },
  {
    name: "La Cosmopolita",
    cuisine: "Farm to table",
    price: "€€",
    path: "/spain/malaga/malaga/la-cosmopolita",
    image: '/images/la-cosmopolita1.png'
  },
  {
    name: "La Taberna de Mike Palmer",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/spain/malaga/malaga/la-taberna-de-mike-palmer",
    image: '/images/la-taberna-de-mike-palmer1.png'
  },
  {
    name: "Mi Niña Lola",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/spain/malaga/malaga/mi-nia-lola",
    image: '/images/mi-nia-lola1.png'
  },
  {
    name: "Palodú",
    cuisine: "Contemporary, Traditional Cuisine",
    price: "€€€",
    path: "/spain/malaga/malaga/palod",
    image: '/images/palod1.png'
  },
  {
    name: "Promesa",
    cuisine: "Contemporary",
    price: "€€",
    path: "/spain/malaga/malaga/promesa",
    image: '/images/promesa1.png'
  },
  {
    name: "TA-KUMI",
    cuisine: "Japanese",
    price: "€€€",
    path: "/spain/malaga/malaga/ta-kumi",
    image: '/images/ta-kumi1.png'
  },
  {
    name: "TA-KUMI",
    cuisine: "Japanese",
    price: "€€€",
    path: "/spain/malaga/malaga/ta-kumi",
    image: '/images/ta-kumi1.png'
  },
  {
    name: "Tragatá Málaga",
    cuisine: "Contemporary",
    price: "€€",
    path: "/spain/malaga/malaga/tragat-mlaga",
    image: '/images/tragat-mlaga1.png'
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
