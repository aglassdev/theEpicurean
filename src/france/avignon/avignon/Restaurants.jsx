import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Avignon";

const restaurants = [
  {
    name: "Acte 2",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/avignon/avignon/acte-2",
    image: '/images/acte-21.png'
  },
  {
    name: "Bibendum",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/avignon/avignon/bibendum",
    image: '/images/bibendum1.png'
  },
  {
    name: "Hiély-Lucullus",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/avignon/avignon/hily-lucullus",
    image: '/images/hily-lucullus1.png'
  },
  {
    name: "Italie là-bas",
    cuisine: "Italian",
    price: "€€€",
    path: "/france/avignon/avignon/italie-l-bas",
    image: '/images/italie-l-bas1.png'
  },
  {
    name: "La Fourchette",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/avignon/avignon/la-fourchette",
    image: '/images/la-fourchette1.png'
  },
  {
    name: "La Mirande",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/avignon/avignon/la-mirande",
    image: '/images/la-mirande1.png'
  },
  {
    name: "La Vieille Fontaine",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/avignon/avignon/la-vieille-fontaine",
    image: '/images/la-vieille-fontaine1.png'
  },
  {
    name: "L'Agape",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/avignon/avignon/lagape",
    image: '/images/lagape1.png'
  },
  {
    name: "Le Goût du Jour",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/avignon/avignon/le-got-du-jour",
    image: '/images/le-got-du-jour1.png'
  },
  {
    name: "Le Joat",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/avignon/avignon/le-joat",
    image: '/images/le-joat1.png'
  },
  {
    name: "Numéro 75",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/avignon/avignon/numro-75",
    image: '/images/numro-751.png'
  },
  {
    name: "Pollen",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/avignon/avignon/pollen",
    image: '/images/pollen1.png'
  },
  {
    name: "Première édition",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/avignon/avignon/premire-dition",
    image: '/images/premire-dition1.png'
  },
  {
    name: "Sevin",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/avignon/avignon/sevin",
    image: '/images/sevin1.png'
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
