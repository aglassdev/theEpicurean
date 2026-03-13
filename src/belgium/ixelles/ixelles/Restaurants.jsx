import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Ixelles";

const restaurants = [
  {
    name: "Amen",
    cuisine: "Farm to table",
    price: "€€€",
    path: "/belgium/ixelles/ixelles/amen",
    image: '/images/amen1.png'
  },
  {
    name: "Amore, Pasta e Gioia",
    cuisine: "Italian",
    price: "€€",
    path: "/belgium/ixelles/ixelles/amore-pasta-e-gioia",
    image: '/images/amore-pasta-e-gioia1.png'
  },
  {
    name: "Car Bon",
    cuisine: "Chinese, Sichuan",
    price: "€",
    path: "/belgium/ixelles/ixelles/car-bon",
    image: '/images/car-bon1.png'
  },
  {
    name: "Chou",
    cuisine: "Farm to table, Traditional Cuisine",
    price: "€€€",
    path: "/belgium/ixelles/ixelles/chou",
    image: '/images/chou1.png'
  },
  {
    name: "Fico",
    cuisine: "Italian, Sicilian",
    price: "€€",
    path: "/belgium/ixelles/ixelles/fico",
    image: '/images/fico1.png'
  },
  {
    name: "Humus x Hortense",
    cuisine: "Creative, Organic",
    price: "€€€€",
    path: "/belgium/ixelles/ixelles/humus-x-hortense",
    image: '/images/humus-x-hortense1.png'
  },
  {
    name: "Kamo",
    cuisine: "Japanese, Sushi",
    price: "€€€",
    path: "/belgium/ixelles/ixelles/kamo",
    image: '/images/kamo1.png'
  },
  {
    name: "Le Saint Boniface",
    cuisine: "Cuisine from South West France, Country cooking",
    price: "€€",
    path: "/belgium/ixelles/ixelles/le-saint-boniface",
    image: '/images/le-saint-boniface1.png'
  },
  {
    name: "Le Tournant",
    cuisine: "Home Cooking",
    price: "€€",
    path: "/belgium/ixelles/ixelles/le-tournant",
    image: '/images/le-tournant1.png'
  },
  {
    name: "Le Variétés",
    cuisine: "Belgian",
    price: "€€",
    path: "/belgium/ixelles/ixelles/le-varits",
    image: '/images/le-varits1.png'
  },
  {
    name: "Les Caves d'Alex",
    cuisine: "French",
    price: "€€€",
    path: "/belgium/ixelles/ixelles/les-caves-dalex",
    image: '/images/les-caves-dalex1.png'
  },
  {
    name: "L'épicerie Nomad",
    cuisine: "Mediterranean Cuisine, Classic French",
    price: "€€",
    path: "/belgium/ixelles/ixelles/lpicerie-nomad",
    image: '/images/lpicerie-nomad1.png'
  },
  {
    name: "Lune Siamoise",
    cuisine: "Thai",
    price: "€€",
    path: "/belgium/ixelles/ixelles/lune-siamoise",
    image: '/images/lune-siamoise1.png'
  },
  {
    name: "Maison du Luxembourg",
    cuisine: "Regional Cuisine, Classic Cuisine",
    price: "€€",
    path: "/belgium/ixelles/ixelles/maison-du-luxembourg",
    image: '/images/maison-du-luxembourg1.png'
  },
  {
    name: "Maru",
    cuisine: "Korean, Asian",
    price: "€€",
    path: "/belgium/ixelles/ixelles/maru",
    image: '/images/maru1.png'
  },
  {
    name: "Nonbe Daigaku",
    cuisine: "Japanese, Sushi",
    price: "€€€",
    path: "/belgium/ixelles/ixelles/nonbe-daigaku",
    image: '/images/nonbe-daigaku1.png'
  },
  {
    name: "Odette en Ville",
    cuisine: "Modern French",
    price: "€€€",
    path: "/belgium/ixelles/ixelles/odette-en-ville",
    image: '/images/odette-en-ville1.png'
  },
  {
    name: "Old Boy",
    cuisine: "Asian, Fusion",
    price: "€€",
    path: "/belgium/ixelles/ixelles/old-boy",
    image: '/images/old-boy1.png'
  },
  {
    name: "Osteria Bolognese",
    cuisine: "Italian",
    price: "€€",
    path: "/belgium/ixelles/ixelles/osteria-bolognese",
    image: '/images/osteria-bolognese1.png'
  },
  {
    name: "Philema",
    cuisine: "Greek",
    price: "€€",
    path: "/belgium/ixelles/ixelles/philema",
    image: '/images/philema1.png'
  },
  {
    name: "Quartz",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/belgium/ixelles/ixelles/quartz",
    image: '/images/quartz1.png'
  },
  {
    name: "Racines",
    cuisine: "Italian",
    price: "€€",
    path: "/belgium/ixelles/ixelles/racines",
    image: '/images/racines1.png'
  },
  {
    name: "Ricciocapriccio",
    cuisine: "Italian",
    price: "€€€",
    path: "/belgium/ixelles/ixelles/ricciocapriccio",
    image: '/images/ricciocapriccio1.png'
  },
  {
    name: "Savage",
    cuisine: "Organic, Vegetarian",
    price: "€€",
    path: "/belgium/ixelles/ixelles/savage",
    image: '/images/savage1.png'
  },
  {
    name: "Toucan Brasserie",
    cuisine: "French, Classic Cuisine",
    price: "€€€",
    path: "/belgium/ixelles/ixelles/toucan-brasserie",
    image: '/images/toucan-brasserie1.png'
  },
  {
    name: "Toucan sur Mer",
    cuisine: "Seafood",
    price: "€€€",
    path: "/belgium/ixelles/ixelles/toucan-sur-mer",
    image: '/images/toucan-sur-mer1.png'
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
