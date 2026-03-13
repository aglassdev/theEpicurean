import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Edinburgh";

const restaurants = [
  {
    name: "1925 at Pompadour",
    cuisine: "Modern British",
    price: "£££",
    path: "/uk/edinburgh/edinburgh/1925-at-pompadour",
    image: '/images/1925-at-pompadour1.png'
  },
  {
    name: "1925 at The Pompadour",
    cuisine: "Modern British",
    price: "£££",
    path: "/uk/edinburgh/edinburgh/1925-at-the-pompadour",
    image: '/images/1925-at-the-pompadour1.png'
  },
  {
    name: "aizle",
    cuisine: "Modern Cuisine, Seasonal Cuisine",
    price: "££££",
    path: "/uk/edinburgh/edinburgh/aizle",
    image: '/images/aizle1.png'
  },
  {
    name: "Argile",
    cuisine: "Modern Cuisine",
    price: "££££",
    path: "/uk/edinburgh/edinburgh/argile",
    image: '/images/argile1.png'
  },
  {
    name: "Argile",
    cuisine: "Modern Cuisine",
    price: "££££",
    path: "/uk/edinburgh/edinburgh/argile",
    image: '/images/argile1.png'
  },
  {
    name: "AVERY",
    cuisine: "Creative",
    price: "££££",
    path: "/uk/edinburgh/edinburgh/avery",
    image: '/images/avery1.png'
  },
  {
    name: "Cardinal",
    cuisine: "Modern Cuisine",
    price: "££££",
    path: "/uk/edinburgh/edinburgh/cardinal",
    image: '/images/cardinal1.png'
  },
  {
    name: "Condita",
    cuisine: "Modern Cuisine",
    price: "££££",
    path: "/uk/edinburgh/edinburgh/condita",
    image: '/images/condita1.png'
  },
  {
    name: "Dean Banks at the Pompadour",
    cuisine: "Creative",
    price: "££££",
    path: "/uk/edinburgh/edinburgh/dean-banks-at-the-pompadour",
    image: '/images/dean-banks-at-the-pompadour1.png'
  },
  {
    name: "Dulse",
    cuisine: "Seafood",
    price: "££",
    path: "/uk/edinburgh/edinburgh/dulse",
    image: '/images/dulse1.png'
  },
  {
    name: "eleanore",
    cuisine: "Modern British",
    price: "£££",
    path: "/uk/edinburgh/edinburgh/eleanore",
    image: '/images/eleanore1.png'
  },
  {
    name: "eòrna",
    cuisine: "Modern British",
    price: "££££",
    path: "/uk/edinburgh/edinburgh/erna",
    image: '/images/erna1.png'
  },
  {
    name: "Fhior",
    cuisine: "Creative",
    price: "££££",
    path: "/uk/edinburgh/edinburgh/fhior",
    image: '/images/fhior1.png'
  },
  {
    name: "Hendersons",
    cuisine: "Vegetarian, Vegan",
    price: "££",
    path: "/uk/edinburgh/edinburgh/hendersons",
    image: '/images/hendersons1.png'
  },
  {
    name: "LeftField",
    cuisine: "Seafood, Scottish",
    price: "££",
    path: "/uk/edinburgh/edinburgh/leftfield",
    image: '/images/leftfield1.png'
  },
  {
    name: "Little Capo",
    cuisine: "Italian Contemporary",
    price: "££",
    path: "/uk/edinburgh/edinburgh/little-capo",
    image: '/images/little-capo1.png'
  },
  {
    name: "LYLA",
    cuisine: "Modern British, Creative",
    price: "££££",
    path: "/uk/edinburgh/edinburgh/lyla",
    image: '/images/lyla1.png'
  },
  {
    name: "LYLA",
    cuisine: "Modern British, Creative",
    price: "££££",
    path: "/uk/edinburgh/edinburgh/lyla",
    image: '/images/lyla1.png'
  },
  {
    name: "Montrose",
    cuisine: "Modern Cuisine",
    price: "£££",
    path: "/uk/edinburgh/edinburgh/montrose",
    image: '/images/montrose1.png'
  },
  {
    name: "Moss",
    cuisine: "Modern Cuisine",
    price: "£££",
    path: "/uk/edinburgh/edinburgh/moss",
    image: '/images/moss1.png'
  },
  {
    name: "Noto",
    cuisine: "Asian Influences, Modern Cuisine",
    price: "££",
    path: "/uk/edinburgh/edinburgh/noto",
    image: '/images/noto1.png'
  },
  {
    name: "Number One",
    cuisine: "Modern Cuisine",
    price: "££££",
    path: "/uk/edinburgh/edinburgh/number-one",
    image: '/images/number-one1.png'
  },
  {
    name: "Purslane",
    cuisine: "Modern Cuisine",
    price: "£££",
    path: "/uk/edinburgh/edinburgh/purslane",
    image: '/images/purslane1.png'
  },
  {
    name: "Skua",
    cuisine: "Modern British",
    price: "££",
    path: "/uk/edinburgh/edinburgh/skua",
    image: '/images/skua1.png'
  },
  {
    name: "Sotto",
    cuisine: "Italian",
    price: "££",
    path: "/uk/edinburgh/edinburgh/sotto",
    image: '/images/sotto1.png'
  },
  {
    name: "Spry",
    cuisine: "Modern British",
    price: "£££",
    path: "/uk/edinburgh/edinburgh/spry",
    image: '/images/spry1.png'
  },
  {
    name: "The Broughton",
    cuisine: "Modern British",
    price: "££",
    path: "/uk/edinburgh/edinburgh/the-broughton",
    image: '/images/the-broughton1.png'
  },
  {
    name: "The Palmerston",
    cuisine: "Modern Cuisine",
    price: "££",
    path: "/uk/edinburgh/edinburgh/the-palmerston",
    image: '/images/the-palmerston1.png'
  },
  {
    name: "The Scran & Scallie",
    cuisine: "Scottish, Traditional Cuisine",
    price: "££",
    path: "/uk/edinburgh/edinburgh/the-scran-scallie",
    image: '/images/the-scran-scallie1.png'
  },
  {
    name: "The Spence",
    cuisine: "Modern British",
    price: "£££",
    path: "/uk/edinburgh/edinburgh/the-spence",
    image: '/images/the-spence1.png'
  },
  {
    name: "Timberyard",
    cuisine: "Modern British, Contemporary",
    price: "££££",
    path: "/uk/edinburgh/edinburgh/timberyard",
    image: '/images/timberyard1.png'
  },
  {
    name: "tipo",
    cuisine: "Italian",
    price: "££",
    path: "/uk/edinburgh/edinburgh/tipo",
    image: '/images/tipo1.png'
  },
  {
    name: "Vinette",
    cuisine: "Modern British",
    price: "££",
    path: "/uk/edinburgh/edinburgh/vinette",
    image: '/images/vinette1.png'
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
