import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Maastricht";

const restaurants = [
  {
    name: "Au Coin des Bons Enfants",
    cuisine: "Modern French, Seasonal Cuisine",
    price: "€€€€",
    path: "/netherlands/maastricht/maastricht/au-coin-des-bons-enfants",
    image: '/images/au-coin-des-bons-enfants1.png'
  },
  {
    name: "Bar Beurre",
    cuisine: "French",
    price: "€€",
    path: "/netherlands/maastricht/maastricht/bar-beurre",
    image: '/images/bar-beurre1.png'
  },
  {
    name: "Beluga Loves You",
    cuisine: "Creative",
    price: "€€€€",
    path: "/netherlands/maastricht/maastricht/beluga-loves-you",
    image: '/images/beluga-loves-you1.png'
  },
  {
    name: "Café Sjiek",
    cuisine: "Traditional Cuisine, Classic French",
    price: "€€",
    path: "/netherlands/maastricht/maastricht/caf-sjiek",
    image: '/images/caf-sjiek1.png'
  },
  {
    name: "Château Neercanne",
    cuisine: "French Contemporary",
    price: "€€€€",
    path: "/netherlands/maastricht/maastricht/chteau-neercanne",
    image: '/images/chteau-neercanne1.png'
  },
  {
    name: "Danyel",
    cuisine: "French, Modern French",
    price: "€€€",
    path: "/netherlands/maastricht/maastricht/danyel",
    image: '/images/danyel1.png'
  },
  {
    name: "Haricot.",
    cuisine: "Modern Cuisine, Modern French",
    price: "€€€",
    path: "/netherlands/maastricht/maastricht/haricot",
    image: '/images/haricot1.png'
  },
  {
    name: "Harry's",
    cuisine: "Farm to table, Modern Cuisine",
    price: "€€",
    path: "/netherlands/maastricht/maastricht/harrys",
    image: '/images/harrys1.png'
  },
  {
    name: "L'Auberge",
    cuisine: "Classic Cuisine, French",
    price: "€€",
    path: "/netherlands/maastricht/maastricht/lauberge",
    image: '/images/lauberge1.png'
  },
  {
    name: "NOVO New Dining",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/netherlands/maastricht/maastricht/novo-new-dining",
    image: '/images/novo-new-dining1.png'
  },
  {
    name: "Onglet",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/netherlands/maastricht/maastricht/onglet",
    image: '/images/onglet1.png'
  },
  {
    name: "Prix de Rome",
    cuisine: "Contemporary, Modern French",
    price: "€€",
    path: "/netherlands/maastricht/maastricht/prix-de-rome",
    image: '/images/prix-de-rome1.png'
  },
  {
    name: "Rantrée",
    cuisine: "Modern French",
    price: "€€€",
    path: "/netherlands/maastricht/maastricht/rantre",
    image: '/images/rantre1.png'
  },
  {
    name: "Restaurant 55",
    cuisine: "Modern French",
    price: "€€€",
    path: "/netherlands/maastricht/maastricht/restaurant-55",
    image: '/images/restaurant-551.png'
  },
  {
    name: "Studio",
    cuisine: "Asian Influences, Modern Cuisine",
    price: "€€€€",
    path: "/netherlands/maastricht/maastricht/studio",
    image: '/images/studio1.png'
  },
  {
    name: "Tabkeaw",
    cuisine: "Thai",
    price: "€",
    path: "/netherlands/maastricht/maastricht/tabkeaw",
    image: '/images/tabkeaw1.png'
  },
  {
    name: "Tout à Fait",
    cuisine: "Modern French",
    price: "€€€€",
    path: "/netherlands/maastricht/maastricht/tout-fait",
    image: '/images/tout-fait1.png'
  },
  {
    name: "WY.",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/netherlands/maastricht/maastricht/wy",
    image: '/images/wy1.png'
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
