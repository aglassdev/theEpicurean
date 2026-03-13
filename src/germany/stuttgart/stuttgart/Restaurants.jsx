import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Stuttgart";

const restaurants = [
  {
    name: "5",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/germany/stuttgart/stuttgart/5",
    image: '/images/51.png'
  },
  {
    name: "Christophorus",
    cuisine: "International",
    price: "€€€",
    path: "/germany/stuttgart/stuttgart/christophorus",
    image: '/images/christophorus1.png'
  },
  {
    name: "Cube",
    cuisine: "International, Modern Cuisine",
    price: "€€",
    path: "/germany/stuttgart/stuttgart/cube",
    image: '/images/cube1.png'
  },
  {
    name: "Der Zauberlehrling",
    cuisine: "Creative, Seasonal Cuisine",
    price: "€€€",
    path: "/germany/stuttgart/stuttgart/der-zauberlehrling",
    image: '/images/der-zauberlehrling1.png'
  },
  {
    name: "Délice",
    cuisine: "Creative, Mediterranean Cuisine",
    price: "€€€€",
    path: "/germany/stuttgart/stuttgart/dlice",
    image: '/images/dlice1.png'
  },
  {
    name: "Fässle le Restaurant",
    cuisine: "Classic French, Farm to table",
    price: "€€",
    path: "/germany/stuttgart/stuttgart/fssle-le-restaurant",
    image: '/images/fssle-le-restaurant1.png'
  },
  {
    name: "Goldener Adler",
    cuisine: "Country cooking, Traditional Cuisine",
    price: "€",
    path: "/germany/stuttgart/stuttgart/goldener-adler",
    image: '/images/goldener-adler1.png'
  },
  {
    name: "Hegel Eins",
    cuisine: "Modern Cuisine, Creative",
    price: "€€€€",
    path: "/germany/stuttgart/stuttgart/hegel-eins",
    image: '/images/hegel-eins1.png'
  },
  {
    name: "Hupperts",
    cuisine: "Classic Cuisine",
    price: "€€€€",
    path: "/germany/stuttgart/stuttgart/hupperts",
    image: '/images/hupperts1.png'
  },
  {
    name: "Laesâ",
    cuisine: "Modern Cuisine, Creative",
    price: "€€€€",
    path: "/germany/stuttgart/stuttgart/laes",
    image: '/images/laes1.png'
  },
  {
    name: "Meister Lampe",
    cuisine: "Classic Cuisine, Country cooking",
    price: "€€",
    path: "/germany/stuttgart/stuttgart/meister-lampe",
    image: '/images/meister-lampe1.png'
  },
  {
    name: "nagare",
    cuisine: "Japanese, Creative",
    price: "€€",
    path: "/germany/stuttgart/stuttgart/nagare",
    image: '/images/nagare1.png'
  },
  {
    name: "Nannina",
    cuisine: "Italian",
    price: "€€",
    path: "/germany/stuttgart/stuttgart/nannina",
    image: '/images/nannina1.png'
  },
  {
    name: "new josch",
    cuisine: "Modern French, International",
    price: "€€€",
    path: "/germany/stuttgart/stuttgart/new-josch",
    image: '/images/new-josch1.png'
  },
  {
    name: "Schweizers Restaurant",
    cuisine: "Classic Cuisine, Farm to table",
    price: "€€€",
    path: "/germany/stuttgart/stuttgart/schweizers-restaurant",
    image: '/images/schweizers-restaurant1.png'
  },
  {
    name: "Speisemeisterei",
    cuisine: "Creative, Innovative",
    price: "€€€€",
    path: "/germany/stuttgart/stuttgart/speisemeisterei",
    image: '/images/speisemeisterei1.png'
  },
  {
    name: "Vetter.",
    cuisine: "Farm to table, Country cooking",
    price: "€",
    path: "/germany/stuttgart/stuttgart/vetter",
    image: '/images/vetter1.png'
  },
  {
    name: "Waldhorn",
    cuisine: "Contemporary, Regional European",
    price: "€€€€",
    path: "/germany/stuttgart/stuttgart/waldhorn",
    image: '/images/waldhorn1.png'
  },
  {
    name: "Wielandshöhe",
    cuisine: "Classic French, Regional Cuisine",
    price: "€€€",
    path: "/germany/stuttgart/stuttgart/wielandshhe",
    image: '/images/wielandshhe1.png'
  },
  {
    name: "Zum Ackerbürger Can Basar",
    cuisine: "International, Seasonal Cuisine",
    price: "€€",
    path: "/germany/stuttgart/stuttgart/zum-ackerbrger-can-basar",
    image: '/images/zum-ackerbrger-can-basar1.png'
  },
  {
    name: "Zur Linde",
    cuisine: "Country cooking, Traditional Cuisine",
    price: "€€",
    path: "/germany/stuttgart/stuttgart/zur-linde",
    image: '/images/zur-linde1.png'
  },
  {
    name: "ZUR WEINSTEIGE",
    cuisine: "Seasonal Cuisine, Classic Cuisine",
    price: "€€",
    path: "/germany/stuttgart/stuttgart/zur-weinsteige",
    image: '/images/zur-weinsteige1.png'
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
