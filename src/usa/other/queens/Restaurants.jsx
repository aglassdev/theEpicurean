import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Queens";

const restaurants = [
  {
    name: "Alley 41",
    cuisine: "Chinese, Sichuan",
    price: "$$",
    path: "/usa/other/queens/alley-41",
    image: '/images/alley-411.png'
  },
  {
    name: "Asian Jewels",
    cuisine: "Chinese, Dim Sum",
    price: "$$",
    path: "/usa/other/queens/asian-jewels",
    image: '/images/asian-jewels1.png'
  },
  {
    name: "Caleta 111 Cevicheria",
    cuisine: "Peruvian",
    price: "$$",
    path: "/usa/other/queens/caleta-111-cevicheria",
    image: '/images/caleta-111-cevicheria1.png'
  },
  {
    name: "Cardamom",
    cuisine: "Indian",
    price: "$$",
    path: "/usa/other/queens/cardamom",
    image: '/images/cardamom1.png'
  },
  {
    name: "Casa Enrique",
    cuisine: "Mexican, Regional Cuisine",
    price: "$$",
    path: "/usa/other/queens/casa-enrique",
    image: '/images/casa-enrique1.png'
  },
  {
    name: "Hupo",
    cuisine: "Chinese, Sichuan",
    price: "$$",
    path: "/usa/other/queens/hupo",
    image: '/images/hupo1.png'
  },
  {
    name: "il Gigante",
    cuisine: "Italian",
    price: "$$",
    path: "/usa/other/queens/il-gigante",
    image: '/images/il-gigante1.png'
  },
  {
    name: "Jiang Nan",
    cuisine: "Chinese, Regional Cuisine",
    price: "$$",
    path: "/usa/other/queens/jiang-nan",
    image: '/images/jiang-nan1.png'
  },
  {
    name: "Legend of Taste",
    cuisine: "Chinese, Sichuan",
    price: "$$",
    path: "/usa/other/queens/legend-of-taste",
    image: '/images/legend-of-taste1.png'
  },
  {
    name: "Meju",
    cuisine: "Korean, Regional Cuisine",
    price: "$$$$",
    path: "/usa/other/queens/meju",
    image: '/images/meju1.png'
  },
  {
    name: "Phayul",
    cuisine: "Tibetan",
    price: "$$",
    path: "/usa/other/queens/phayul",
    image: '/images/phayul1.png'
  },
  {
    name: "R40",
    cuisine: "Argentinian",
    price: "$$$",
    path: "/usa/other/queens/r40",
    image: '/images/r401.png'
  },
  {
    name: "Rolo's",
    cuisine: "American",
    price: "$$",
    path: "/usa/other/queens/rolos",
    image: '/images/rolos1.png'
  },
  {
    name: "SaRanRom Thai",
    cuisine: "Thai",
    price: "$$",
    path: "/usa/other/queens/saranrom-thai",
    image: '/images/saranrom-thai1.png'
  },
  {
    name: "Taverna Kyclades",
    cuisine: "Greek",
    price: "$$",
    path: "/usa/other/queens/taverna-kyclades",
    image: '/images/taverna-kyclades1.png'
  },
  {
    name: "Tong Sam Gyup Goo Yi",
    cuisine: "Korean, Barbecue",
    price: "$$",
    path: "/usa/other/queens/tong-sam-gyup-goo-yi",
    image: '/images/tong-sam-gyup-goo-yi1.png'
  },
  {
    name: "Vert Frais",
    cuisine: "Japanese",
    price: "$$",
    path: "/usa/other/queens/vert-frais",
    image: '/images/vert-frais1.png'
  },
  {
    name: "Zaab Zaab",
    cuisine: "Thai, Isan",
    price: "$$",
    path: "/usa/other/queens/zaab-zaab",
    image: '/images/zaab-zaab1.png'
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
