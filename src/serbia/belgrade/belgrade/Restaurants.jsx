import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Belgrade";

const restaurants = [
  {
    name: "Bela Reka",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/serbia/belgrade/belgrade/bela-reka",
    image: '/images/bela-reka1.png'
  },
  {
    name: "Comunale Caffè e Cucina",
    cuisine: "Italian",
    price: "€",
    path: "/serbia/belgrade/belgrade/comunale-caff-e-cucina",
    image: '/images/comunale-caff-e-cucina1.png'
  },
  {
    name: "Ebisu",
    cuisine: "Japanese",
    price: "€€",
    path: "/serbia/belgrade/belgrade/ebisu",
    image: '/images/ebisu1.png'
  },
  {
    name: "Gušti mora",
    cuisine: "Seafood",
    price: "€€",
    path: "/serbia/belgrade/belgrade/guti-mora",
    image: '/images/guti-mora1.png'
  },
  {
    name: "Homa",
    cuisine: "Creative",
    price: "€€€€",
    path: "/serbia/belgrade/belgrade/homa",
    image: '/images/homa1.png'
  },
  {
    name: "Istok",
    cuisine: "Vietnamese, Asian",
    price: "€",
    path: "/serbia/belgrade/belgrade/istok",
    image: '/images/istok1.png'
  },
  {
    name: "Iva New Balkan Cuisine",
    cuisine: "Modern Cuisine",
    price: "€",
    path: "/serbia/belgrade/belgrade/iva-new-balkan-cuisine",
    image: '/images/iva-new-balkan-cuisine1.png'
  },
  {
    name: "Klub Književnika by Branko Kisic",
    cuisine: "Balkan, Traditional Cuisine",
    price: "€€",
    path: "/serbia/belgrade/belgrade/klub-knjievnika-by-branko-kisic",
    image: '/images/klub-knjievnika-by-branko-kisic1.png'
  },
  {
    name: "L'Adresse",
    cuisine: "European, International",
    price: "€€",
    path: "/serbia/belgrade/belgrade/ladresse",
    image: '/images/ladresse1.png'
  },
  {
    name: "Langouste",
    cuisine: "Modern Cuisine, Contemporary",
    price: "€€€",
    path: "/serbia/belgrade/belgrade/langouste",
    image: '/images/langouste1.png'
  },
  {
    name: "Legat 1903",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/serbia/belgrade/belgrade/legat-1903",
    image: '/images/legat-19031.png'
  },
  {
    name: "Magellan",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/serbia/belgrade/belgrade/magellan",
    image: '/images/magellan1.png'
  },
  {
    name: "Mezestoran Dvorište",
    cuisine: "Mediterranean Cuisine",
    price: "€",
    path: "/serbia/belgrade/belgrade/mezestoran-dvorite",
    image: '/images/mezestoran-dvorite1.png'
  },
  {
    name: "Na Ćošku",
    cuisine: "Balkan, International",
    price: "€€",
    path: "/serbia/belgrade/belgrade/na-oku",
    image: '/images/na-oku1.png'
  },
  {
    name: "Pinòt",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/serbia/belgrade/belgrade/pint",
    image: '/images/pint1.png'
  },
  {
    name: "Prime",
    cuisine: "International, Italian",
    price: "€€",
    path: "/serbia/belgrade/belgrade/prime",
    image: '/images/prime1.png'
  },
  {
    name: "Puter",
    cuisine: "French, Balkan",
    price: "€€",
    path: "/serbia/belgrade/belgrade/puter",
    image: '/images/puter1.png'
  },
  {
    name: "Restoran 27",
    cuisine: "Classic Cuisine, Seasonal Cuisine",
    price: "€€",
    path: "/serbia/belgrade/belgrade/restoran-27",
    image: '/images/restoran-271.png'
  },
  {
    name: "S5 by Angie",
    cuisine: "Italian, Balkan",
    price: "€€",
    path: "/serbia/belgrade/belgrade/s5-by-angie",
    image: '/images/s5-by-angie1.png'
  },
  {
    name: "Salon 1905",
    cuisine: "Modern Cuisine, Balkan",
    price: "€€€€",
    path: "/serbia/belgrade/belgrade/salon-1905",
    image: '/images/salon-19051.png'
  },
  {
    name: "SkyLounge",
    cuisine: "International, Asian and Western",
    price: "€€",
    path: "/serbia/belgrade/belgrade/skylounge",
    image: '/images/skylounge1.png'
  },
  {
    name: "Suvenir",
    cuisine: "Traditional Cuisine, Classic Cuisine",
    price: "€€",
    path: "/serbia/belgrade/belgrade/suvenir",
    image: '/images/suvenir1.png'
  },
  {
    name: "The Square",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/serbia/belgrade/belgrade/the-square",
    image: '/images/the-square1.png'
  },
  {
    name: "The Twenty Two",
    cuisine: "International",
    price: "€€",
    path: "/serbia/belgrade/belgrade/the-twenty-two",
    image: '/images/the-twenty-two1.png'
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
