import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Donostia San Sebastin";

const restaurants = [
  {
    name: "Agorregi",
    cuisine: "Regional Cuisine",
    price: "€€",
    path: "/spain/donostia-san-sebastin/donostia-san-sebastin/agorregi",
    image: '/images/agorregi1.png'
  },
  {
    name: "Akelaŕe",
    cuisine: "Creative, Traditional Cuisine",
    price: "€€€€",
    path: "/spain/donostia-san-sebastin/donostia-san-sebastin/akelae",
    image: '/images/akelae1.png'
  },
  {
    name: "Alboka",
    cuisine: "Contemporary",
    price: "€€",
    path: "/spain/donostia-san-sebastin/donostia-san-sebastin/alboka",
    image: '/images/alboka1.png'
  },
  {
    name: "Amelia by Paulo Airaudo",
    cuisine: "Creative, Italian and Japanese",
    price: "€€€€",
    path: "/spain/donostia-san-sebastin/donostia-san-sebastin/amelia-by-paulo-airaudo",
    image: '/images/amelia-by-paulo-airaudo1.png'
  },
  {
    name: "Artean Barra Abierta",
    cuisine: "Fusion",
    price: "€€",
    path: "/spain/donostia-san-sebastin/donostia-san-sebastin/artean-barra-abierta",
    image: '/images/artean-barra-abierta1.png'
  },
  {
    name: "Arzak",
    cuisine: "Creative, Traditional Cuisine",
    price: "€€€€",
    path: "/spain/donostia-san-sebastin/donostia-san-sebastin/arzak",
    image: '/images/arzak1.png'
  },
  {
    name: "Bergara",
    cuisine: "Basque",
    price: "€",
    path: "/spain/donostia-san-sebastin/donostia-san-sebastin/bergara",
    image: '/images/bergara1.png'
  },
  {
    name: "Bodegón Alejandro",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/spain/donostia-san-sebastin/donostia-san-sebastin/bodegn-alejandro",
    image: '/images/bodegn-alejandro1.png'
  },
  {
    name: "Bruno Oteiza",
    cuisine: "Contemporary, Fusion",
    price: "€€€€",
    path: "/spain/donostia-san-sebastin/donostia-san-sebastin/bruno-oteiza",
    image: '/images/bruno-oteiza1.png'
  },
  {
    name: "Casa 887",
    cuisine: "Fusion, Contemporary",
    price: "€€",
    path: "/spain/donostia-san-sebastin/donostia-san-sebastin/casa-887",
    image: '/images/casa-8871.png'
  },
  {
    name: "Casa Urola",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/spain/donostia-san-sebastin/donostia-san-sebastin/casa-urola",
    image: '/images/casa-urola1.png'
  },
  {
    name: "Da Filippo",
    cuisine: "Italian",
    price: "€€€",
    path: "/spain/donostia-san-sebastin/donostia-san-sebastin/da-filippo",
    image: '/images/da-filippo1.png'
  },
  {
    name: "Ganbara",
    cuisine: "Traditional Cuisine",
    price: "€",
    path: "/spain/donostia-san-sebastin/donostia-san-sebastin/ganbara",
    image: '/images/ganbara1.png'
  },
  {
    name: "iBAi by Paulo Airaudo",
    cuisine: "Basque",
    price: "€€€€",
    path: "/spain/donostia-san-sebastin/donostia-san-sebastin/ibai-by-paulo-airaudo",
    image: '/images/ibai-by-paulo-airaudo1.png'
  },
  {
    name: "Ikaitz",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/spain/donostia-san-sebastin/donostia-san-sebastin/ikaitz",
    image: '/images/ikaitz1.png'
  },
  {
    name: "Itzuli",
    cuisine: "Contemporary, Modern Cuisine",
    price: "€€€",
    path: "/spain/donostia-san-sebastin/donostia-san-sebastin/itzuli",
    image: '/images/itzuli1.png'
  },
  {
    name: "Kokotxa",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/spain/donostia-san-sebastin/donostia-san-sebastin/kokotxa",
    image: '/images/kokotxa1.png'
  },
  {
    name: "Mirador de Ulía",
    cuisine: "Creative",
    price: "€€€",
    path: "/spain/donostia-san-sebastin/donostia-san-sebastin/mirador-de-ula",
    image: '/images/mirador-de-ula1.png'
  },
  {
    name: "Muka",
    cuisine: "Grills",
    price: "€€",
    path: "/spain/donostia-san-sebastin/donostia-san-sebastin/muka",
    image: '/images/muka1.png'
  },
  {
    name: "Narru",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/spain/donostia-san-sebastin/donostia-san-sebastin/narru",
    image: '/images/narru1.png'
  },
  {
    name: "Rekondo",
    cuisine: "Basque",
    price: "€€€",
    path: "/spain/donostia-san-sebastin/donostia-san-sebastin/rekondo",
    image: '/images/rekondo1.png'
  },
  {
    name: "Sa Taula",
    cuisine: "Contemporary",
    price: "€€€",
    path: "/spain/donostia-san-sebastin/donostia-san-sebastin/sa-taula",
    image: '/images/sa-taula1.png'
  },
  {
    name: "Sukaldean Aitor Santamaria",
    cuisine: "Contemporary",
    price: "€€€",
    path: "/spain/donostia-san-sebastin/donostia-san-sebastin/sukaldean-aitor-santamaria",
    image: '/images/sukaldean-aitor-santamaria1.png'
  },
  {
    name: "Tamboril",
    cuisine: "Traditional Cuisine",
    price: "€",
    path: "/spain/donostia-san-sebastin/donostia-san-sebastin/tamboril",
    image: '/images/tamboril1.png'
  },
  {
    name: "Zelai Txiki",
    cuisine: "Traditional Cuisine, Contemporary",
    price: "€€€",
    path: "/spain/donostia-san-sebastin/donostia-san-sebastin/zelai-txiki",
    image: '/images/zelai-txiki1.png'
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
