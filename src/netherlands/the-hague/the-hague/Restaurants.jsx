import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "The Hague";

const restaurants = [
  {
    name: "6&24",
    cuisine: "Modern Cuisine, International",
    price: "€€€",
    path: "/netherlands/the-hague/the-hague/624",
    image: '/images/6241.png'
  },
  {
    name: "Basaal",
    cuisine: "Seasonal Cuisine, Modern Cuisine",
    price: "€€",
    path: "/netherlands/the-hague/the-hague/basaal",
    image: '/images/basaal1.png'
  },
  {
    name: "Bøg",
    cuisine: "Creative, Scandinavian",
    price: "€€€",
    path: "/netherlands/the-hague/the-hague/bg",
    image: '/images/bg1.png'
  },
  {
    name: "Calla's",
    cuisine: "Creative French",
    price: "€€€€",
    path: "/netherlands/the-hague/the-hague/callas",
    image: '/images/callas1.png'
  },
  {
    name: "Catch by Simonis",
    cuisine: "Seafood",
    price: "€€€",
    path: "/netherlands/the-hague/the-hague/catch-by-simonis",
    image: '/images/catch-by-simonis1.png'
  },
  {
    name: "De Basiliek",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/netherlands/the-hague/the-hague/de-basiliek",
    image: '/images/de-basiliek1.png'
  },
  {
    name: "De Coterie",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/netherlands/the-hague/the-hague/de-coterie",
    image: '/images/de-coterie1.png'
  },
  {
    name: "Elea",
    cuisine: "Modern Cuisine, Greek",
    price: "€€€",
    path: "/netherlands/the-hague/the-hague/elea",
    image: '/images/elea1.png'
  },
  {
    name: "Oogst",
    cuisine: "Modern French",
    price: "€€",
    path: "/netherlands/the-hague/the-hague/oogst",
    image: '/images/oogst1.png'
  },
  {
    name: "Portfolio",
    cuisine: "Modern Cuisine, Asian Contemporary",
    price: "€€€",
    path: "/netherlands/the-hague/the-hague/portfolio",
    image: '/images/portfolio1.png'
  },
  {
    name: "Restaurant ñ",
    cuisine: "Spanish",
    price: "€€",
    path: "/netherlands/the-hague/the-hague/restaurant",
    image: '/images/restaurant1.png'
  },
  {
    name: "Resumé by 6&24",
    cuisine: "International",
    price: "€€",
    path: "/netherlands/the-hague/the-hague/resum-by-624",
    image: '/images/resum-by-6241.png'
  },
  {
    name: "Sequenza",
    cuisine: "Farm to table",
    price: "€€€",
    path: "/netherlands/the-hague/the-hague/sequenza",
    image: '/images/sequenza1.png'
  },
  {
    name: "Tapisco",
    cuisine: "Spanish",
    price: "€€",
    path: "/netherlands/the-hague/the-hague/tapisco",
    image: '/images/tapisco1.png'
  },
  {
    name: "Villa Coucou",
    cuisine: "French, Seasonal Cuisine",
    price: "€€",
    path: "/netherlands/the-hague/the-hague/villa-coucou",
    image: '/images/villa-coucou1.png'
  },
  {
    name: "Villa Coucou-La cuisine d'Alexandre",
    cuisine: "French, Seasonal Cuisine",
    price: "€€",
    path: "/netherlands/the-hague/the-hague/villa-coucou-la-cuisine-dalexandre",
    image: '/images/villa-coucou-la-cuisine-dalexandre1.png'
  },
  {
    name: "Wox",
    cuisine: "Asian Influences, Modern Cuisine",
    price: "€€€",
    path: "/netherlands/the-hague/the-hague/wox",
    image: '/images/wox1.png'
  },
  {
    name: "Zheng",
    cuisine: "Fusion",
    price: "€€€",
    path: "/netherlands/the-hague/the-hague/zheng",
    image: '/images/zheng1.png'
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
