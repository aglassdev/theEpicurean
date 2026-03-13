import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Porto";

const restaurants = [
  {
    name: "Almeja",
    cuisine: "Contemporary",
    price: "€€",
    path: "/portugal/porto/porto/almeja",
    image: '/images/almeja1.png'
  },
  {
    name: "Antiqvvm",
    cuisine: "Creative",
    price: "€€€€",
    path: "/portugal/porto/porto/antiqvvm",
    image: '/images/antiqvvm1.png'
  },
  {
    name: "Apego",
    cuisine: "Creative",
    price: "€€",
    path: "/portugal/porto/porto/apego",
    image: '/images/apego1.png'
  },
  {
    name: "Blind",
    cuisine: "Creative",
    price: "€€€€",
    path: "/portugal/porto/porto/blind",
    image: '/images/blind1.png'
  },
  {
    name: "Cafeína",
    cuisine: "International",
    price: "€€",
    path: "/portugal/porto/porto/cafena",
    image: '/images/cafena1.png'
  },
  {
    name: "Culto ao Bacalhau",
    cuisine: "Portuguese",
    price: "€€",
    path: "/portugal/porto/porto/culto-ao-bacalhau",
    image: '/images/culto-ao-bacalhau1.png'
  },
  {
    name: "dop",
    cuisine: "Contemporary",
    price: "€€€€",
    path: "/portugal/porto/porto/dop",
    image: '/images/dop1.png'
  },
  {
    name: "Elemento",
    cuisine: "Modern Cuisine, Grills",
    price: "€€€",
    path: "/portugal/porto/porto/elemento",
    image: '/images/elemento1.png'
  },
  {
    name: "Euskalduna Studio",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/portugal/porto/porto/euskalduna-studio",
    image: '/images/euskalduna-studio1.png'
  },
  {
    name: "Fauno",
    cuisine: "Contemporary",
    price: "€€",
    path: "/portugal/porto/porto/fauno",
    image: '/images/fauno1.png'
  },
  {
    name: "Flor de Lis by Vila Foz",
    cuisine: "International, Traditional Cuisine",
    price: "€€",
    path: "/portugal/porto/porto/flor-de-lis-by-vila-foz",
    image: '/images/flor-de-lis-by-vila-foz1.png'
  },
  {
    name: "Gastro by Elemento",
    cuisine: "Contemporary, Grills",
    price: "€€€",
    path: "/portugal/porto/porto/gastro-by-elemento",
    image: '/images/gastro-by-elemento1.png'
  },
  {
    name: "In Diferente",
    cuisine: "International",
    price: "€€€",
    path: "/portugal/porto/porto/in-diferente",
    image: '/images/in-diferente1.png'
  },
  {
    name: "Kaigi",
    cuisine: "Japanese",
    price: "€€",
    path: "/portugal/porto/porto/kaigi",
    image: '/images/kaigi1.png'
  },
  {
    name: "Le Monument",
    cuisine: "Contemporary",
    price: "€€€€",
    path: "/portugal/porto/porto/le-monument",
    image: '/images/le-monument1.png'
  },
  {
    name: "Mito",
    cuisine: "Contemporary, Classic Cuisine",
    price: "€€",
    path: "/portugal/porto/porto/mito",
    image: '/images/mito1.png'
  },
  {
    name: "Oficina",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/portugal/porto/porto/oficina",
    image: '/images/oficina1.png'
  },
  {
    name: "OMA",
    cuisine: "Contemporary, Traditional Cuisine",
    price: "€€",
    path: "/portugal/porto/porto/oma",
    image: '/images/oma1.png'
  },
  {
    name: "OMA",
    cuisine: "Contemporary, Traditional Cuisine",
    price: "€€",
    path: "/portugal/porto/porto/oma",
    image: '/images/oma1.png'
  },
  {
    name: "Pedro Lemos",
    cuisine: "Contemporary, Modern Cuisine",
    price: "€€€€",
    path: "/portugal/porto/porto/pedro-lemos",
    image: '/images/pedro-lemos1.png'
  },
  {
    name: "Pátio 44",
    cuisine: "Traditional Cuisine",
    price: "€",
    path: "/portugal/porto/porto/ptio-44",
    image: '/images/ptio-441.png'
  },
  {
    name: "Real by Casa da Calçada",
    cuisine: "Portuguese",
    price: "€€",
    path: "/portugal/porto/porto/real-by-casa-da-calada",
    image: '/images/real-by-casa-da-calada1.png'
  },
  {
    name: "Tokkotai",
    cuisine: "Japanese",
    price: "€€",
    path: "/portugal/porto/porto/tokkotai",
    image: '/images/tokkotai1.png'
  },
  {
    name: "Vila Foz",
    cuisine: "Contemporary",
    price: "€€€€",
    path: "/portugal/porto/porto/vila-foz",
    image: '/images/vila-foz1.png'
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
