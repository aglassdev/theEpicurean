import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Beaune";

const restaurants = [
  {
    name: "8 Clos",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/beaune/beaune/8-clos",
    image: '/images/8-clos1.png'
  },
  {
    name: "Bistro de l'Hôtel",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/france/beaune/beaune/bistro-de-lhtel",
    image: '/images/bistro-de-lhtel1.png'
  },
  {
    name: "Caves Madeleine",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/beaune/beaune/caves-madeleine",
    image: '/images/caves-madeleine1.png'
  },
  {
    name: "Clos du Cèdre",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/beaune/beaune/clos-du-cdre",
    image: '/images/clos-du-cdre1.png'
  },
  {
    name: "Garum",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/beaune/beaune/garum",
    image: '/images/garum1.png'
  },
  {
    name: "La Superb",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/france/beaune/beaune/la-superb",
    image: '/images/la-superb1.png'
  },
  {
    name: "La Table du Square",
    cuisine: "Farm to table",
    price: "€€",
    path: "/france/beaune/beaune/la-table-du-square",
    image: '/images/la-table-du-square1.png'
  },
  {
    name: "L'Alentour",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/beaune/beaune/lalentour",
    image: '/images/lalentour1.png'
  },
  {
    name: "L'Écusson",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/beaune/beaune/lcusson",
    image: '/images/lcusson1.png'
  },
  {
    name: "Le Bistro de l'Hôtel",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/france/beaune/beaune/le-bistro-de-lhtel",
    image: '/images/le-bistro-de-lhtel1.png'
  },
  {
    name: "Le Bénaton",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/beaune/beaune/le-bnaton",
    image: '/images/le-bnaton1.png'
  },
  {
    name: "Le Carmin",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/beaune/beaune/le-carmin",
    image: '/images/le-carmin1.png'
  },
  {
    name: "Le Relais de Saulx",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/beaune/beaune/le-relais-de-saulx",
    image: '/images/le-relais-de-saulx1.png'
  },
  {
    name: "L'Expression",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/beaune/beaune/lexpression",
    image: '/images/lexpression1.png'
  },
  {
    name: "Loiseau des Vignes",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/france/beaune/beaune/loiseau-des-vignes",
    image: '/images/loiseau-des-vignes1.png'
  },
  {
    name: "Ma Cuisine",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/beaune/beaune/ma-cuisine",
    image: '/images/ma-cuisine1.png'
  },
  {
    name: "Soul Kitchen",
    cuisine: "Traditional Cuisine, Farm to table",
    price: "€",
    path: "/france/beaune/beaune/soul-kitchen",
    image: '/images/soul-kitchen1.png'
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
