import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Rotterdam";

const restaurants = [
  {
    name: "Aji",
    cuisine: "South American, Asian",
    price: "€€€",
    path: "/netherlands/rotterdam/rotterdam/aji",
    image: '/images/aji1.png'
  },
  {
    name: "Amarone",
    cuisine: "Modern French",
    price: "€€€",
    path: "/netherlands/rotterdam/rotterdam/amarone",
    image: '/images/amarone1.png'
  },
  {
    name: "Asian Glories",
    cuisine: "Chinese",
    price: "€€",
    path: "/netherlands/rotterdam/rotterdam/asian-glories",
    image: '/images/asian-glories1.png'
  },
  {
    name: "Bar Bù",
    cuisine: "Asian, Fusion",
    price: "€€€",
    path: "/netherlands/rotterdam/rotterdam/bar-b",
    image: '/images/bar-b1.png'
  },
  {
    name: "De Harmonie 23",
    cuisine: "Creative",
    price: "€€€",
    path: "/netherlands/rotterdam/rotterdam/de-harmonie-23",
    image: '/images/de-harmonie-231.png'
  },
  {
    name: "FG - François Geurds",
    cuisine: "Creative",
    price: "€€€€",
    path: "/netherlands/rotterdam/rotterdam/fg-franois-geurds",
    image: '/images/fg-franois-geurds1.png'
  },
  {
    name: "Fitzgerald",
    cuisine: "Modern French, International",
    price: "€€€",
    path: "/netherlands/rotterdam/rotterdam/fitzgerald",
    image: '/images/fitzgerald1.png'
  },
  {
    name: "Fred",
    cuisine: "Creative French",
    price: "€€€€",
    path: "/netherlands/rotterdam/rotterdam/fred",
    image: '/images/fred1.png'
  },
  {
    name: "Gym & Gin",
    cuisine: "International, Asian Influences",
    price: "€€",
    path: "/netherlands/rotterdam/rotterdam/gym-gin",
    image: '/images/gym-gin1.png'
  },
  {
    name: "Héroine",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/netherlands/rotterdam/rotterdam/hroine",
    image: '/images/hroine1.png'
  },
  {
    name: "Huson",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/netherlands/rotterdam/rotterdam/huson",
    image: '/images/huson1.png'
  },
  {
    name: "Il Gattopardo",
    cuisine: "Italian",
    price: "€€€",
    path: "/netherlands/rotterdam/rotterdam/il-gattopardo",
    image: '/images/il-gattopardo1.png'
  },
  {
    name: "In Den Rustwat",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/netherlands/rotterdam/rotterdam/in-den-rustwat",
    image: '/images/in-den-rustwat1.png'
  },
  {
    name: "Joelia",
    cuisine: "Modern French",
    price: "€€€€",
    path: "/netherlands/rotterdam/rotterdam/joelia",
    image: '/images/joelia1.png'
  },
  {
    name: "NY Basement",
    cuisine: "Modern Cuisine, French Contemporary",
    price: "€€€",
    path: "/netherlands/rotterdam/rotterdam/ny-basement",
    image: '/images/ny-basement1.png'
  },
  {
    name: "On Cru",
    cuisine: "Farm to table",
    price: "€€€",
    path: "/netherlands/rotterdam/rotterdam/on-cru",
    image: '/images/on-cru1.png'
  },
  {
    name: "Parkheuvel",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/netherlands/rotterdam/rotterdam/parkheuvel",
    image: '/images/parkheuvel1.png'
  },
  {
    name: "Putaine",
    cuisine: "Modern Cuisine, Creative French",
    price: "€€€",
    path: "/netherlands/rotterdam/rotterdam/putaine",
    image: '/images/putaine1.png'
  },
  {
    name: "Restaurant Renilde",
    cuisine: "Organic",
    price: "€€€",
    path: "/netherlands/rotterdam/rotterdam/restaurant-renilde",
    image: '/images/restaurant-renilde1.png'
  },
  {
    name: "Restobar Vista",
    cuisine: "Modern French",
    price: "€€€",
    path: "/netherlands/rotterdam/rotterdam/restobar-vista",
    image: '/images/restobar-vista1.png'
  },
  {
    name: "River Bar",
    cuisine: "Modern French",
    price: "€€",
    path: "/netherlands/rotterdam/rotterdam/river-bar",
    image: '/images/river-bar1.png'
  },
  {
    name: "Rotonde",
    cuisine: "Vegetarian, Modern Cuisine",
    price: "€€",
    path: "/netherlands/rotterdam/rotterdam/rotonde",
    image: '/images/rotonde1.png'
  },
  {
    name: "The Millèn",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/netherlands/rotterdam/rotterdam/the-milln",
    image: '/images/the-milln1.png'
  },
  {
    name: "Tres",
    cuisine: "Country cooking, Modern Cuisine",
    price: "€€€€",
    path: "/netherlands/rotterdam/rotterdam/tres",
    image: '/images/tres1.png'
  },
  {
    name: "Umami by Han",
    cuisine: "Asian, Chinese",
    price: "€",
    path: "/netherlands/rotterdam/rotterdam/umami-by-han",
    image: '/images/umami-by-han1.png'
  },
  {
    name: "Vineum",
    cuisine: "Modern French",
    price: "€€",
    path: "/netherlands/rotterdam/rotterdam/vineum",
    image: '/images/vineum1.png'
  },
  {
    name: "Xīn",
    cuisine: "Modern Cuisine, Chinese",
    price: "€€",
    path: "/netherlands/rotterdam/rotterdam/xn",
    image: '/images/xn1.png'
  },
  {
    name: "YANO",
    cuisine: "Creative French, Fusion",
    price: "€€€",
    path: "/netherlands/rotterdam/rotterdam/yano",
    image: '/images/yano1.png'
  },
  {
    name: "Zeezout",
    cuisine: "Seafood, French",
    price: "€€€",
    path: "/netherlands/rotterdam/rotterdam/zeezout",
    image: '/images/zeezout1.png'
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
