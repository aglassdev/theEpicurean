import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Valencia";

const restaurants = [
  {
    name: "2 Estaciones",
    cuisine: "Mediterranean Cuisine",
    price: "€€",
    path: "/spain/valencia/valencia/2-estaciones",
    image: '/images/2-estaciones1.png'
  },
  {
    name: "Apicius",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/spain/valencia/valencia/apicius",
    image: '/images/apicius1.png'
  },
  {
    name: "Blanqueries",
    cuisine: "Modern Cuisine",
    price: "€",
    path: "/spain/valencia/valencia/blanqueries",
    image: '/images/blanqueries1.png'
  },
  {
    name: "El Bressol",
    cuisine: "Farm to table",
    price: "€€€",
    path: "/spain/valencia/valencia/el-bressol",
    image: '/images/el-bressol1.png'
  },
  {
    name: "El Poblet",
    cuisine: "Creative",
    price: "€€€€",
    path: "/spain/valencia/valencia/el-poblet",
    image: '/images/el-poblet1.png'
  },
  {
    name: "Fierro",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/spain/valencia/valencia/fierro",
    image: '/images/fierro1.png'
  },
  {
    name: "Flama",
    cuisine: "Grills",
    price: "€€€",
    path: "/spain/valencia/valencia/flama",
    image: '/images/flama1.png'
  },
  {
    name: "Flores Raras",
    cuisine: "Creative",
    price: "€€€€",
    path: "/spain/valencia/valencia/flores-raras",
    image: '/images/flores-raras1.png'
  },
  {
    name: "Forastera",
    cuisine: "Farm to table, Traditional Cuisine",
    price: "€€",
    path: "/spain/valencia/valencia/forastera",
    image: '/images/forastera1.png'
  },
  {
    name: "Fraula",
    cuisine: "Contemporary",
    price: "€€€",
    path: "/spain/valencia/valencia/fraula",
    image: '/images/fraula1.png'
  },
  {
    name: "Goya Gallery",
    cuisine: "Traditional Cuisine, Rice Dishes",
    price: "€€",
    path: "/spain/valencia/valencia/goya-gallery",
    image: '/images/goya-gallery1.png'
  },
  {
    name: "Gran Azul",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/spain/valencia/valencia/gran-azul",
    image: '/images/gran-azul1.png'
  },
  {
    name: "Habitual",
    cuisine: "International, Contemporary",
    price: "€€",
    path: "/spain/valencia/valencia/habitual",
    image: '/images/habitual1.png'
  },
  {
    name: "Haku",
    cuisine: "Japanese Contemporary",
    price: "€€€",
    path: "/spain/valencia/valencia/haku",
    image: '/images/haku1.png'
  },
  {
    name: "Kaido Sushi Bar",
    cuisine: "Japanese",
    price: "€€€€",
    path: "/spain/valencia/valencia/kaido-sushi-bar",
    image: '/images/kaido-sushi-bar1.png'
  },
  {
    name: "Karak",
    cuisine: "Fusion",
    price: "€€€",
    path: "/spain/valencia/valencia/karak",
    image: '/images/karak1.png'
  },
  {
    name: "La Barra de Kaymus",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/spain/valencia/valencia/la-barra-de-kaymus",
    image: '/images/la-barra-de-kaymus1.png'
  },
  {
    name: "La Salita",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€€",
    path: "/spain/valencia/valencia/la-salita",
    image: '/images/la-salita1.png'
  },
  {
    name: "Lienzo",
    cuisine: "Mediterranean Cuisine, Modern Cuisine",
    price: "€€€",
    path: "/spain/valencia/valencia/lienzo",
    image: '/images/lienzo1.png'
  },
  {
    name: "Llisa Negra",
    cuisine: "Farm to table",
    price: "€€€",
    path: "/spain/valencia/valencia/llisa-negra",
    image: '/images/llisa-negra1.png'
  },
  {
    name: "Memoria Gustativa",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/spain/valencia/valencia/memoria-gustativa",
    image: '/images/memoria-gustativa1.png'
  },
  {
    name: "Mengem",
    cuisine: "Contemporary",
    price: "€€",
    path: "/spain/valencia/valencia/mengem",
    image: '/images/mengem1.png'
  },
  {
    name: "Nozomi Sushi Bar",
    cuisine: "Japanese",
    price: "€€",
    path: "/spain/valencia/valencia/nozomi-sushi-bar",
    image: '/images/nozomi-sushi-bar1.png'
  },
  {
    name: "Ricard Camarena",
    cuisine: "Creative",
    price: "€€€€",
    path: "/spain/valencia/valencia/ricard-camarena",
    image: '/images/ricard-camarena1.png'
  },
  {
    name: "Riff",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€€",
    path: "/spain/valencia/valencia/riff",
    image: '/images/riff1.png'
  },
  {
    name: "Saiti",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/spain/valencia/valencia/saiti",
    image: '/images/saiti1.png'
  },
  {
    name: "Shinkai Tastem",
    cuisine: "Japanese",
    price: "€€",
    path: "/spain/valencia/valencia/shinkai-tastem",
    image: '/images/shinkai-tastem1.png'
  },
  {
    name: "Toshi",
    cuisine: "Mediterranean Cuisine, Traditional Cuisine",
    price: "€€€",
    path: "/spain/valencia/valencia/toshi",
    image: '/images/toshi1.png'
  },
  {
    name: "Vuelve Carolina",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/spain/valencia/valencia/vuelve-carolina",
    image: '/images/vuelve-carolina1.png'
  },
  {
    name: "Xanglot",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/spain/valencia/valencia/xanglot",
    image: '/images/xanglot1.png'
  },
  {
    name: "Yarza",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/spain/valencia/valencia/yarza",
    image: '/images/yarza1.png'
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
