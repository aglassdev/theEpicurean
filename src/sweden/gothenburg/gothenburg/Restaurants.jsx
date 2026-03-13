import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Gothenburg";

const restaurants = [
  {
    name: "28+",
    cuisine: "Modern Cuisine, Classic French",
    price: "€€",
    path: "/sweden/gothenburg/gothenburg/28",
    image: '/images/281.png'
  },
  {
    name: "Bulot",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/sweden/gothenburg/gothenburg/bulot",
    image: '/images/bulot1.png'
  },
  {
    name: "Carbon",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/sweden/gothenburg/gothenburg/carbon",
    image: '/images/carbon1.png'
  },
  {
    name: "Familjen",
    cuisine: "Scandinavian, Swedish",
    price: "€€",
    path: "/sweden/gothenburg/gothenburg/familjen",
    image: '/images/familjen1.png'
  },
  {
    name: "HOZE",
    cuisine: "Japanese",
    price: "€€€€",
    path: "/sweden/gothenburg/gothenburg/hoze",
    image: '/images/hoze1.png'
  },
  {
    name: "Human",
    cuisine: "Creative",
    price: "€€€",
    path: "/sweden/gothenburg/gothenburg/human",
    image: '/images/human1.png'
  },
  {
    name: "Koizen",
    cuisine: "Japanese",
    price: "€€€",
    path: "/sweden/gothenburg/gothenburg/koizen",
    image: '/images/koizen1.png'
  },
  {
    name: "Koka",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/sweden/gothenburg/gothenburg/koka",
    image: '/images/koka1.png'
  },
  {
    name: "La Cucina Italiana",
    cuisine: "Italian",
    price: "€€",
    path: "/sweden/gothenburg/gothenburg/la-cucina-italiana",
    image: '/images/la-cucina-italiana1.png'
  },
  {
    name: "Poppy",
    cuisine: "Seasonal Cuisine, Farm to table",
    price: "€€",
    path: "/sweden/gothenburg/gothenburg/poppy",
    image: '/images/poppy1.png'
  },
  {
    name: "Project",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/sweden/gothenburg/gothenburg/project",
    image: '/images/project1.png'
  },
  {
    name: "Restaurant vRÅ",
    cuisine: "Fusion",
    price: "€",
    path: "/sweden/gothenburg/gothenburg/restaurant-vr",
    image: '/images/restaurant-vr1.png'
  },
  {
    name: "Sjömagasinet",
    cuisine: "Seafood",
    price: "€€",
    path: "/sweden/gothenburg/gothenburg/sjmagasinet",
    image: '/images/sjmagasinet1.png'
  },
  {
    name: "SK Mat & Människor",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/sweden/gothenburg/gothenburg/sk-mat-mnniskor",
    image: '/images/sk-mat-mnniskor1.png'
  },
  {
    name: "Tavolo",
    cuisine: "Italian-American",
    price: "€€",
    path: "/sweden/gothenburg/gothenburg/tavolo",
    image: '/images/tavolo1.png'
  },
  {
    name: "Trattoria La Strega",
    cuisine: "Italian",
    price: "€€",
    path: "/sweden/gothenburg/gothenburg/trattoria-la-strega",
    image: '/images/trattoria-la-strega1.png'
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
