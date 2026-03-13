import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Verona";

const restaurants = [
  {
    name: "Al Bersagliere",
    cuisine: "Venetian, Traditional Cuisine",
    price: "€",
    path: "/italy/verona/verona/al-bersagliere",
    image: '/images/al-bersagliere1.png'
  },
  {
    name: "Al Capitan della Cittadella",
    cuisine: "Seafood, Italian Contemporary",
    price: "€€€",
    path: "/italy/verona/verona/al-capitan-della-cittadella",
    image: '/images/al-capitan-della-cittadella1.png'
  },
  {
    name: "Amo Bistrot",
    cuisine: "Fusion",
    price: "€€",
    path: "/italy/verona/verona/amo-bistrot",
    image: '/images/amo-bistrot1.png'
  },
  {
    name: "Caffè Dante Bistrot",
    cuisine: "Italian, Classic Cuisine",
    price: "€€",
    path: "/italy/verona/verona/caff-dante-bistrot",
    image: '/images/caff-dante-bistrot1.png'
  },
  {
    name: "Casa Perbellini 12 Apostoli",
    cuisine: "Creative, Contemporary",
    price: "€€€€",
    path: "/italy/verona/verona/casa-perbellini-12-apostoli",
    image: '/images/casa-perbellini-12-apostoli1.png'
  },
  {
    name: "Filia Ristorante",
    cuisine: "Creative, Italian Contemporary",
    price: "€€€",
    path: "/italy/verona/verona/filia-ristorante",
    image: '/images/filia-ristorante1.png'
  },
  {
    name: "Il Desco",
    cuisine: "Italian Contemporary",
    price: "€€€€",
    path: "/italy/verona/verona/il-desco",
    image: '/images/il-desco1.png'
  },
  {
    name: "Iris Ristorante",
    cuisine: "Contemporary, Italian Contemporary",
    price: "€€€€",
    path: "/italy/verona/verona/iris-ristorante",
    image: '/images/iris-ristorante1.png'
  },
  {
    name: "La Loggia Bistrò",
    cuisine: "Contemporary, Regional Cuisine",
    price: "€€€",
    path: "/italy/verona/verona/la-loggia-bistr",
    image: '/images/la-loggia-bistr1.png'
  },
  {
    name: "Locanda 4 Cuochi",
    cuisine: "Classic Cuisine, Italian",
    price: "€€",
    path: "/italy/verona/verona/locanda-4-cuochi",
    image: '/images/locanda-4-cuochi1.png'
  },
  {
    name: "L'Oste Scuro",
    cuisine: "Seafood, Modern Cuisine",
    price: "€€€",
    path: "/italy/verona/verona/loste-scuro",
    image: '/images/loste-scuro1.png'
  },
  {
    name: "Osteria la Fontanina",
    cuisine: "Classic Cuisine, Italian",
    price: "€€",
    path: "/italy/verona/verona/osteria-la-fontanina",
    image: '/images/osteria-la-fontanina1.png'
  },
  {
    name: "Osteria Mondo d'Oro",
    cuisine: "Italian, Seasonal Cuisine",
    price: "€",
    path: "/italy/verona/verona/osteria-mondo-doro",
    image: '/images/osteria-mondo-doro1.png'
  },
  {
    name: "Ponte Pietra",
    cuisine: "Modern Cuisine, Contemporary",
    price: "€€€",
    path: "/italy/verona/verona/ponte-pietra",
    image: '/images/ponte-pietra1.png'
  },
  {
    name: "Trattoria al Pompiere",
    cuisine: "Venetian, Classic Cuisine",
    price: "€€",
    path: "/italy/verona/verona/trattoria-al-pompiere",
    image: '/images/trattoria-al-pompiere1.png'
  },
  {
    name: "Trattoria I Masenini",
    cuisine: "Italian, Traditional Cuisine",
    price: "€€",
    path: "/italy/verona/verona/trattoria-i-masenini",
    image: '/images/trattoria-i-masenini1.png'
  },
  {
    name: "Vecio Macello",
    cuisine: "Seafood, Modern Cuisine",
    price: "€€€",
    path: "/italy/verona/verona/vecio-macello",
    image: '/images/vecio-macello1.png'
  },
  {
    name: "Vescovo Moro",
    cuisine: "Italian Contemporary",
    price: "€€€",
    path: "/italy/verona/verona/vescovo-moro",
    image: '/images/vescovo-moro1.png'
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
