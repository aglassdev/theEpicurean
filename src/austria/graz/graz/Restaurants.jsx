import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Graz";

const restaurants = [
  {
    name: "Arravané",
    cuisine: "Modern Cuisine, Seasonal Cuisine",
    price: "€€€",
    path: "/austria/graz/graz/arravan",
    image: '/images/arravan1.png'
  },
  {
    name: "Artis",
    cuisine: "Creative, International",
    price: "€€€€",
    path: "/austria/graz/graz/artis",
    image: '/images/artis1.png'
  },
  {
    name: "Genießerei am Markt - Steiermark(t)dinner by Alexander Posch",
    cuisine: "Modern Cuisine, Creative",
    price: "€€€€",
    path: "/austria/graz/graz/genieerei-am-markt-steiermarktdinner-by-alexander-posch",
    image: '/images/genieerei-am-markt-steiermarktdinner-by-alexander-posch1.png'
  },
  {
    name: "KABUFF",
    cuisine: "Creative, Modern Cuisine",
    price: "€€",
    path: "/austria/graz/graz/kabuff",
    image: '/images/kabuff1.png'
  },
  {
    name: "Kehlberghof",
    cuisine: "Seasonal Cuisine, International",
    price: "€€€",
    path: "/austria/graz/graz/kehlberghof",
    image: '/images/kehlberghof1.png'
  },
  {
    name: "Mohrenwirt",
    cuisine: "Regional Cuisine, Seasonal Cuisine",
    price: "€€",
    path: "/austria/graz/graz/mohrenwirt",
    image: '/images/mohrenwirt1.png'
  },
  {
    name: "Rauch & Rebe",
    cuisine: "Farm to table",
    price: "€€",
    path: "/austria/graz/graz/rauch-rebe",
    image: '/images/rauch-rebe1.png'
  },
  {
    name: "Restaurant Scheucher",
    cuisine: "Farm to table",
    price: "€€",
    path: "/austria/graz/graz/restaurant-scheucher",
    image: '/images/restaurant-scheucher1.png'
  },
  {
    name: "Restaurant SCHLOSSBERG",
    cuisine: "Seasonal Cuisine, Austrian",
    price: "€€",
    path: "/austria/graz/graz/restaurant-schlossberg",
    image: '/images/restaurant-schlossberg1.png'
  },
  {
    name: "Schmidhofer im Palais",
    cuisine: "International, Austrian",
    price: "€€€",
    path: "/austria/graz/graz/schmidhofer-im-palais",
    image: '/images/schmidhofer-im-palais1.png'
  },
  {
    name: "Stammtisch am Paulustor",
    cuisine: "Regional Cuisine, Seasonal Cuisine",
    price: "€€€",
    path: "/austria/graz/graz/stammtisch-am-paulustor",
    image: '/images/stammtisch-am-paulustor1.png'
  },
  {
    name: "Starcke Haus",
    cuisine: "International, Mediterranean Cuisine",
    price: "€€€€",
    path: "/austria/graz/graz/starcke-haus",
    image: '/images/starcke-haus1.png'
  },
  {
    name: "Steak Boutique",
    cuisine: "Meats and Grills",
    price: "€€€",
    path: "/austria/graz/graz/steak-boutique",
    image: '/images/steak-boutique1.png'
  },
  {
    name: "Zur goldenen Birn",
    cuisine: "Modern Cuisine, Austrian",
    price: "€€€€",
    path: "/austria/graz/graz/zur-goldenen-birn",
    image: '/images/zur-goldenen-birn1.png'
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
