import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Crdoba";

const restaurants = [
  {
    name: "Arbequina",
    cuisine: "Modern Cuisine, International",
    price: "€€",
    path: "/spain/crdoba/crdoba/arbequina",
    image: '/images/arbequina1.png'
  },
  {
    name: "Casa Pepe de la Judería",
    cuisine: "Regional Cuisine",
    price: "€€",
    path: "/spain/crdoba/crdoba/casa-pepe-de-la-judera",
    image: '/images/casa-pepe-de-la-judera1.png'
  },
  {
    name: "Casa Rubio",
    cuisine: "Regional Cuisine",
    price: "€€",
    path: "/spain/crdoba/crdoba/casa-rubio",
    image: '/images/casa-rubio1.png'
  },
  {
    name: "Celia Jiménez",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/spain/crdoba/crdoba/celia-jimnez",
    image: '/images/celia-jimnez1.png'
  },
  {
    name: "Choco",
    cuisine: "Creative, Andalusian",
    price: "€€€€",
    path: "/spain/crdoba/crdoba/choco",
    image: '/images/choco1.png'
  },
  {
    name: "El Envero",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/spain/crdoba/crdoba/el-envero",
    image: '/images/el-envero1.png'
  },
  {
    name: "Garum 2.1",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/spain/crdoba/crdoba/garum-21",
    image: '/images/garum-211.png'
  },
  {
    name: "La Casa de Manolete Bistró",
    cuisine: "Contemporary",
    price: "€€€",
    path: "/spain/crdoba/crdoba/la-casa-de-manolete-bistr",
    image: '/images/la-casa-de-manolete-bistr1.png'
  },
  {
    name: "La Cuchara de San Lorenzo",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/spain/crdoba/crdoba/la-cuchara-de-san-lorenzo",
    image: '/images/la-cuchara-de-san-lorenzo1.png'
  },
  {
    name: "La Taberna de Almodóvar",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/spain/crdoba/crdoba/la-taberna-de-almodvar",
    image: '/images/la-taberna-de-almodvar1.png'
  },
  {
    name: "Los Berengueles",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/spain/crdoba/crdoba/los-berengueles",
    image: '/images/los-berengueles1.png'
  },
  {
    name: "Noor",
    cuisine: "Creative",
    price: "€€€€",
    path: "/spain/crdoba/crdoba/noor",
    image: '/images/noor1.png'
  },
  {
    name: "ReComiendo",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€",
    path: "/spain/crdoba/crdoba/recomiendo",
    image: '/images/recomiendo1.png'
  },
  {
    name: "Regadera",
    cuisine: "Modern Cuisine, Farm to table",
    price: "€€",
    path: "/spain/crdoba/crdoba/regadera",
    image: '/images/regadera1.png'
  },
  {
    name: "Taberna el nº 10",
    cuisine: "Traditional Cuisine",
    price: "€",
    path: "/spain/crdoba/crdoba/taberna-el-n-10",
    image: '/images/taberna-el-n-101.png'
  },
  {
    name: "Tellus",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/spain/crdoba/crdoba/tellus",
    image: '/images/tellus1.png'
  },
  {
    name: "Terra Olea",
    cuisine: "Contemporary, Andalusian",
    price: "€€",
    path: "/spain/crdoba/crdoba/terra-olea",
    image: '/images/terra-olea1.png'
  },
  {
    name: "Vertigo",
    cuisine: "Creative",
    price: "€€",
    path: "/spain/crdoba/crdoba/vertigo",
    image: '/images/vertigo1.png'
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
