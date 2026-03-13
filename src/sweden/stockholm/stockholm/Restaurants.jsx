import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Stockholm";

const restaurants = [
  {
    name: "Adam / Albin",
    cuisine: "Creative",
    price: "€€€€",
    path: "/sweden/stockholm/stockholm/adam-albin",
    image: '/images/adam-albin1.png'
  },
  {
    name: "AIRA",
    cuisine: "Modern Cuisine, Swedish",
    price: "€€€€",
    path: "/sweden/stockholm/stockholm/aira",
    image: '/images/aira1.png'
  },
  {
    name: "Allegrine",
    cuisine: "French",
    price: "€€",
    path: "/sweden/stockholm/stockholm/allegrine",
    image: '/images/allegrine1.png'
  },
  {
    name: "Aloë",
    cuisine: "Creative",
    price: "€€€€",
    path: "/sweden/stockholm/stockholm/alo",
    image: '/images/alo1.png'
  },
  {
    name: "Babette",
    cuisine: "Modern Cuisine",
    price: "€",
    path: "/sweden/stockholm/stockholm/babette",
    image: '/images/babette1.png'
  },
  {
    name: "B.A.R.",
    cuisine: "Seafood",
    price: "€€",
    path: "/sweden/stockholm/stockholm/bar",
    image: '/images/bar1.png'
  },
  {
    name: "Bar Agrikultur",
    cuisine: "Swedish, Small eats",
    price: "€",
    path: "/sweden/stockholm/stockholm/bar-agrikultur",
    image: '/images/bar-agrikultur1.png'
  },
  {
    name: "Black Milk Gastro Bar",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€",
    path: "/sweden/stockholm/stockholm/black-milk-gastro-bar",
    image: '/images/black-milk-gastro-bar1.png'
  },
  {
    name: "BORD",
    cuisine: "Mediterranean Cuisine",
    price: "€€",
    path: "/sweden/stockholm/stockholm/bord",
    image: '/images/bord1.png'
  },
  {
    name: "Brasserie Astoria",
    cuisine: "Classic Cuisine",
    price: "€€",
    path: "/sweden/stockholm/stockholm/brasserie-astoria",
    image: '/images/brasserie-astoria1.png'
  },
  {
    name: "Brutalisten",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/sweden/stockholm/stockholm/brutalisten",
    image: '/images/brutalisten1.png'
  },
  {
    name: "Celeste",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/sweden/stockholm/stockholm/celeste",
    image: '/images/celeste1.png'
  },
  {
    name: "Dashi",
    cuisine: "Japanese",
    price: "€€€",
    path: "/sweden/stockholm/stockholm/dashi",
    image: '/images/dashi1.png'
  },
  {
    name: "Ekstedt",
    cuisine: "Grills",
    price: "€€€€",
    path: "/sweden/stockholm/stockholm/ekstedt",
    image: '/images/ekstedt1.png'
  },
  {
    name: "ergo.",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/sweden/stockholm/stockholm/ergo",
    image: '/images/ergo1.png'
  },
  {
    name: "Essence",
    cuisine: "Modern Cuisine, Seasonal Cuisine",
    price: "€€€€",
    path: "/sweden/stockholm/stockholm/essence",
    image: '/images/essence1.png'
  },
  {
    name: "Essence",
    cuisine: "Modern Cuisine, Seasonal Cuisine",
    price: "€€€€",
    path: "/sweden/stockholm/stockholm/essence",
    image: '/images/essence1.png'
  },
  {
    name: "Etoile",
    cuisine: "Creative, International",
    price: "€€€€",
    path: "/sweden/stockholm/stockholm/etoile",
    image: '/images/etoile1.png'
  },
  {
    name: "Farang",
    cuisine: "South East Asian",
    price: "€€",
    path: "/sweden/stockholm/stockholm/farang",
    image: '/images/farang1.png'
  },
  {
    name: "Farang",
    cuisine: "South East Asian",
    price: "€€",
    path: "/sweden/stockholm/stockholm/farang",
    image: '/images/farang1.png'
  },
  {
    name: "Forma",
    cuisine: "Modern Cuisine, Asian",
    price: "€€",
    path: "/sweden/stockholm/stockholm/forma",
    image: '/images/forma1.png'
  },
  {
    name: "Frantzén",
    cuisine: "Creative",
    price: "€€€€",
    path: "/sweden/stockholm/stockholm/frantzn",
    image: '/images/frantzn1.png'
  },
  {
    name: "freyja",
    cuisine: "Swedish, Modern Cuisine",
    price: "€€€",
    path: "/sweden/stockholm/stockholm/freyja",
    image: '/images/freyja1.png'
  },
  {
    name: "Hillenberg",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/sweden/stockholm/stockholm/hillenberg",
    image: '/images/hillenberg1.png'
  },
  {
    name: "Leijontornet",
    cuisine: "European",
    price: "€€",
    path: "/sweden/stockholm/stockholm/leijontornet",
    image: '/images/leijontornet1.png'
  },
  {
    name: "Lilla Ego",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/sweden/stockholm/stockholm/lilla-ego",
    image: '/images/lilla-ego1.png'
  },
  {
    name: "Lux Dag för Dag",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/sweden/stockholm/stockholm/lux-dag-fr-dag",
    image: '/images/lux-dag-fr-dag1.png'
  },
  {
    name: "Matbaren",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/sweden/stockholm/stockholm/matbaren",
    image: '/images/matbaren1.png'
  },
  {
    name: "Minh Mat",
    cuisine: "Vietnamese",
    price: "€€",
    path: "/sweden/stockholm/stockholm/minh-mat",
    image: '/images/minh-mat1.png'
  },
  {
    name: "NISCH",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/sweden/stockholm/stockholm/nisch",
    image: '/images/nisch1.png'
  },
  {
    name: "Nour",
    cuisine: "Creative",
    price: "€€€€",
    path: "/sweden/stockholm/stockholm/nour",
    image: '/images/nour1.png'
  },
  {
    name: "Operakällaren",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/sweden/stockholm/stockholm/operakllaren",
    image: '/images/operakllaren1.png'
  },
  {
    name: "Oxenstiernan",
    cuisine: "Swedish",
    price: "€€",
    path: "/sweden/stockholm/stockholm/oxenstiernan",
    image: '/images/oxenstiernan1.png'
  },
  {
    name: "Persona",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/sweden/stockholm/stockholm/persona",
    image: '/images/persona1.png'
  },
  {
    name: "Petri",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/sweden/stockholm/stockholm/petri",
    image: '/images/petri1.png'
  },
  {
    name: "Prospero",
    cuisine: "Modern Cuisine",
    price: "€",
    path: "/sweden/stockholm/stockholm/prospero",
    image: '/images/prospero1.png'
  },
  {
    name: "Restaurang B.A.R.",
    cuisine: "Seafood",
    price: "€€",
    path: "/sweden/stockholm/stockholm/restaurang-bar",
    image: '/images/restaurang-bar1.png'
  },
  {
    name: "ÄRLA",
    cuisine: "Farm to table, Swedish",
    price: "€€",
    path: "/sweden/stockholm/stockholm/rla",
    image: '/images/rla1.png'
  },
  {
    name: "Rolfs Kök",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/sweden/stockholm/stockholm/rolfs-kk",
    image: '/images/rolfs-kk1.png'
  },
  {
    name: "Seafood Gastro",
    cuisine: "Seafood",
    price: "€€€€",
    path: "/sweden/stockholm/stockholm/seafood-gastro",
    image: '/images/seafood-gastro1.png'
  },
  {
    name: "SOLEN",
    cuisine: "Modern Cuisine",
    price: "€",
    path: "/sweden/stockholm/stockholm/solen",
    image: '/images/solen1.png'
  },
  {
    name: "Sushi Sho",
    cuisine: "Japanese, Sushi",
    price: "€€€",
    path: "/sweden/stockholm/stockholm/sushi-sho",
    image: '/images/sushi-sho1.png'
  },
  {
    name: "Sushi Sho",
    cuisine: "Japanese, Sushi",
    price: "€€€€",
    path: "/sweden/stockholm/stockholm/sushi-sho",
    image: '/images/sushi-sho1.png'
  },
  {
    name: "Triton",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/sweden/stockholm/stockholm/triton",
    image: '/images/triton1.png'
  },
  {
    name: "Ulla Winbladh",
    cuisine: "Swedish",
    price: "€€",
    path: "/sweden/stockholm/stockholm/ulla-winbladh",
    image: '/images/ulla-winbladh1.png'
  },
  {
    name: "Voisine",
    cuisine: "Modern Cuisine",
    price: "€",
    path: "/sweden/stockholm/stockholm/voisine",
    image: '/images/voisine1.png'
  },
  {
    name: "Washoku TOMO",
    cuisine: "Japanese",
    price: "€€€",
    path: "/sweden/stockholm/stockholm/washoku-tomo",
    image: '/images/washoku-tomo1.png'
  },
  {
    name: "Woodstockholm",
    cuisine: "Contemporary, International",
    price: "€€",
    path: "/sweden/stockholm/stockholm/woodstockholm",
    image: '/images/woodstockholm1.png'
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
