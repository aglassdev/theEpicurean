import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Mendoza";

const restaurants = [
  {
    name: "1884 Francis Mallmann",
    cuisine: "Traditional Cuisine, Argentinian",
    price: "$$$$",
    path: "/argentina/mendoza/mendoza/1884-francis-mallmann",
    image: '/images/1884-francis-mallmann1.png'
  },
  {
    name: "5 Suelos - Cocina de Finca",
    cuisine: "Farm to table",
    price: "$$$",
    path: "/argentina/mendoza/mendoza/5-suelos-cocina-de-finca",
    image: '/images/5-suelos-cocina-de-finca1.png'
  },
  {
    name: "Abrasado",
    cuisine: "Meats and Grills",
    price: "$$$",
    path: "/argentina/mendoza/mendoza/abrasado",
    image: '/images/abrasado1.png'
  },
  {
    name: "Angélica Cocina Maestra",
    cuisine: "Creative",
    price: "$$$$",
    path: "/argentina/mendoza/mendoza/anglica-cocina-maestra",
    image: '/images/anglica-cocina-maestra1.png'
  },
  {
    name: "Anna Bistró",
    cuisine: "Traditional Cuisine",
    price: "$$",
    path: "/argentina/mendoza/mendoza/anna-bistr",
    image: '/images/anna-bistr1.png'
  },
  {
    name: "Assemblage",
    cuisine: "French, Grills",
    price: "$$$$",
    path: "/argentina/mendoza/mendoza/assemblage",
    image: '/images/assemblage1.png'
  },
  {
    name: "Assemblage Maison Alta Vista",
    cuisine: "French, Grills",
    price: "$$$$",
    path: "/argentina/mendoza/mendoza/assemblage-maison-alta-vista",
    image: '/images/assemblage-maison-alta-vista1.png'
  },
  {
    name: "Azafrán",
    cuisine: "Modern Cuisine",
    price: "$$$$",
    path: "/argentina/mendoza/mendoza/azafrn",
    image: '/images/azafrn1.png'
  },
  {
    name: "Brindillas",
    cuisine: "Modern Cuisine",
    price: "$$$",
    path: "/argentina/mendoza/mendoza/brindillas",
    image: '/images/brindillas1.png'
  },
  {
    name: "Brutal",
    cuisine: "Creative",
    price: "$$$",
    path: "/argentina/mendoza/mendoza/brutal",
    image: '/images/brutal1.png'
  },
  {
    name: "Casa Vigil",
    cuisine: "Contemporary, Regional Cuisine",
    price: "$$$$",
    path: "/argentina/mendoza/mendoza/casa-vigil",
    image: '/images/casa-vigil1.png'
  },
  {
    name: "Centauro",
    cuisine: "Contemporary",
    price: "$$",
    path: "/argentina/mendoza/mendoza/centauro",
    image: '/images/centauro1.png'
  },
  {
    name: "Espacio Trapiche",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/argentina/mendoza/mendoza/espacio-trapiche",
    image: '/images/espacio-trapiche1.png'
  },
  {
    name: "Fogón Cocina de Viñedo",
    cuisine: "Meats and Grills",
    price: "$$$$",
    path: "/argentina/mendoza/mendoza/fogn-cocina-de-viedo",
    image: '/images/fogn-cocina-de-viedo1.png'
  },
  {
    name: "La Vid - Bodega Norton",
    cuisine: "Modern Cuisine",
    price: "$$$",
    path: "/argentina/mendoza/mendoza/la-vid-bodega-norton",
    image: '/images/la-vid-bodega-norton1.png'
  },
  {
    name: "La Vida",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/argentina/mendoza/mendoza/la-vida",
    image: '/images/la-vida1.png'
  },
  {
    name: "Los Bocheros",
    cuisine: "Traditional Cuisine",
    price: "$$",
    path: "/argentina/mendoza/mendoza/los-bocheros",
    image: '/images/los-bocheros1.png'
  },
  {
    name: "Martino Wines",
    cuisine: "Modern Cuisine",
    price: "$$$",
    path: "/argentina/mendoza/mendoza/martino-wines",
    image: '/images/martino-wines1.png'
  },
  {
    name: "Osadía de Crear",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/argentina/mendoza/mendoza/osada-de-crear",
    image: '/images/osada-de-crear1.png'
  },
  {
    name: "Quimera Bistro",
    cuisine: "Argentinian",
    price: "$$$$",
    path: "/argentina/mendoza/mendoza/quimera-bistro",
    image: '/images/quimera-bistro1.png'
  },
  {
    name: "Renacer",
    cuisine: "Argentinian",
    price: "$$$",
    path: "/argentina/mendoza/mendoza/renacer",
    image: '/images/renacer1.png'
  },
  {
    name: "Riccitelli Bistró",
    cuisine: "Seasonal Cuisine, Innovative",
    price: "$$$",
    path: "/argentina/mendoza/mendoza/riccitelli-bistr",
    image: '/images/riccitelli-bistr1.png'
  },
  {
    name: "Ruca Malen",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/argentina/mendoza/mendoza/ruca-malen",
    image: '/images/ruca-malen1.png'
  },
  {
    name: "Soberana",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/argentina/mendoza/mendoza/soberana",
    image: '/images/soberana1.png'
  },
  {
    name: "Zonda Cocina de Paisaje",
    cuisine: "Traditional Cuisine, Creative",
    price: "$$$",
    path: "/argentina/mendoza/mendoza/zonda-cocina-de-paisaje",
    image: '/images/zonda-cocina-de-paisaje1.png'
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
