import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Brighton And Hove";

const restaurants = [
  {
    name: "64°",
    cuisine: "Modern British",
    price: "£££",
    path: "/uk/brighton-and-hove/brighton-and-hove/64",
    image: '/images/641.png'
  },
  {
    name: "Amari",
    cuisine: "Spanish",
    price: "££",
    path: "/uk/brighton-and-hove/brighton-and-hove/amari",
    image: '/images/amari1.png'
  },
  {
    name: "Burnt Orange",
    cuisine: "Mediterranean Cuisine",
    price: "££",
    path: "/uk/brighton-and-hove/brighton-and-hove/burnt-orange",
    image: '/images/burnt-orange1.png'
  },
  {
    name: "Cin Cin",
    cuisine: "Italian",
    price: "££",
    path: "/uk/brighton-and-hove/brighton-and-hove/cin-cin",
    image: '/images/cin-cin1.png'
  },
  {
    name: "Dilsk",
    cuisine: "Modern British",
    price: "£££",
    path: "/uk/brighton-and-hove/brighton-and-hove/dilsk",
    image: '/images/dilsk1.png'
  },
  {
    name: "Embers",
    cuisine: "Modern Cuisine",
    price: "££",
    path: "/uk/brighton-and-hove/brighton-and-hove/embers",
    image: '/images/embers1.png'
  },
  {
    name: "etch. by Steven Edwards",
    cuisine: "Modern British",
    price: "££££",
    path: "/uk/brighton-and-hove/brighton-and-hove/etch-by-steven-edwards",
    image: '/images/etch-by-steven-edwards1.png'
  },
  {
    name: "Furna",
    cuisine: "Modern Cuisine",
    price: "£££",
    path: "/uk/brighton-and-hove/brighton-and-hove/furna",
    image: '/images/furna1.png'
  },
  {
    name: "Gingerman",
    cuisine: "Modern Cuisine",
    price: "£££",
    path: "/uk/brighton-and-hove/brighton-and-hove/gingerman",
    image: '/images/gingerman1.png'
  },
  {
    name: "Little Fish Market",
    cuisine: "Seafood",
    price: "££££",
    path: "/uk/brighton-and-hove/brighton-and-hove/little-fish-market",
    image: '/images/little-fish-market1.png'
  },
  {
    name: "Lucky Khao",
    cuisine: "Thai",
    price: "£",
    path: "/uk/brighton-and-hove/brighton-and-hove/lucky-khao",
    image: '/images/lucky-khao1.png'
  },
  {
    name: "Maré by Rafael Cagali",
    cuisine: "Modern Cuisine",
    price: "£££",
    path: "/uk/brighton-and-hove/brighton-and-hove/mar-by-rafael-cagali",
    image: '/images/mar-by-rafael-cagali1.png'
  },
  {
    name: "Palmito",
    cuisine: "Asian, South American",
    price: "££",
    path: "/uk/brighton-and-hove/brighton-and-hove/palmito",
    image: '/images/palmito1.png'
  },
  {
    name: "The Flint House",
    cuisine: "Modern Cuisine",
    price: "££",
    path: "/uk/brighton-and-hove/brighton-and-hove/the-flint-house",
    image: '/images/the-flint-house1.png'
  },
  {
    name: "The Ginger Pig",
    cuisine: "Modern British",
    price: "££",
    path: "/uk/brighton-and-hove/brighton-and-hove/the-ginger-pig",
    image: '/images/the-ginger-pig1.png'
  },
  {
    name: "The Set",
    cuisine: "Modern Cuisine",
    price: "££££",
    path: "/uk/brighton-and-hove/brighton-and-hove/the-set",
    image: '/images/the-set1.png'
  },
  {
    name: "Tutto",
    cuisine: "Italian",
    price: "££",
    path: "/uk/brighton-and-hove/brighton-and-hove/tutto",
    image: '/images/tutto1.png'
  },
  {
    name: "Wild Flor",
    cuisine: "Modern British",
    price: "££",
    path: "/uk/brighton-and-hove/brighton-and-hove/wild-flor",
    image: '/images/wild-flor1.png'
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
