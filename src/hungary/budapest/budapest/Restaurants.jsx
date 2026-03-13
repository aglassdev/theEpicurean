import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Budapest";

const restaurants = [
  {
    name: "94' Konyha & Bar",
    cuisine: "Vietnamese",
    price: "€€",
    path: "/hungary/budapest/budapest/94-konyha-bar",
    image: '/images/94-konyha-bar1.png'
  },
  {
    name: "Alelí",
    cuisine: "Italian",
    price: "€€€",
    path: "/hungary/budapest/budapest/alel",
    image: '/images/alel1.png'
  },
  {
    name: "Arany Kaviár",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/hungary/budapest/budapest/arany-kavir",
    image: '/images/arany-kavir1.png'
  },
  {
    name: "Babel",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/hungary/budapest/budapest/babel",
    image: '/images/babel1.png'
  },
  {
    name: "BiBo Budapest",
    cuisine: "Spanish Contemporary, Hungarian",
    price: "€€€",
    path: "/hungary/budapest/budapest/bibo-budapest",
    image: '/images/bibo-budapest1.png'
  },
  {
    name: "Bilanx",
    cuisine: "Contemporary",
    price: "€€",
    path: "/hungary/budapest/budapest/bilanx",
    image: '/images/bilanx1.png'
  },
  {
    name: "Borkonyha Winekitchen",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/hungary/budapest/budapest/borkonyha-winekitchen",
    image: '/images/borkonyha-winekitchen1.png'
  },
  {
    name: "Cabrio",
    cuisine: "European Contemporary",
    price: "€€",
    path: "/hungary/budapest/budapest/cabrio",
    image: '/images/cabrio1.png'
  },
  {
    name: "Costes",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/hungary/budapest/budapest/costes",
    image: '/images/costes1.png'
  },
  {
    name: "Costes Downtown",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/hungary/budapest/budapest/costes-downtown",
    image: '/images/costes-downtown1.png'
  },
  {
    name: "Cut & Barrel",
    cuisine: "Meats and Grills, Latin American",
    price: "€€€",
    path: "/hungary/budapest/budapest/cut-barrel",
    image: '/images/cut-barrel1.png'
  },
  {
    name: "essência",
    cuisine: "Modern Cuisine, Portuguese",
    price: "€€€€",
    path: "/hungary/budapest/budapest/essncia",
    image: '/images/essncia1.png'
  },
  {
    name: "Fausto's",
    cuisine: "Italian",
    price: "€€",
    path: "/hungary/budapest/budapest/faustos",
    image: '/images/faustos1.png'
  },
  {
    name: "FELIX Kitchen & Bar",
    cuisine: "Mediterranean Cuisine",
    price: "€€",
    path: "/hungary/budapest/budapest/felix-kitchen-bar",
    image: '/images/felix-kitchen-bar1.png'
  },
  {
    name: "FLAVA",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/hungary/budapest/budapest/flava",
    image: '/images/flava1.png'
  },
  {
    name: "Goli",
    cuisine: "Middle Eastern",
    price: "€€",
    path: "/hungary/budapest/budapest/goli",
    image: '/images/goli1.png'
  },
  {
    name: "Hoppá! Bistro",
    cuisine: "Contemporary",
    price: "€€",
    path: "/hungary/budapest/budapest/hopp-bistro",
    image: '/images/hopp-bistro1.png'
  },
  {
    name: "KOLLÁZS",
    cuisine: "French",
    price: "€€€",
    path: "/hungary/budapest/budapest/kollzs",
    image: '/images/kollzs1.png'
  },
  {
    name: "Majorelle",
    cuisine: "Moroccan",
    price: "€€",
    path: "/hungary/budapest/budapest/majorelle",
    image: '/images/majorelle1.png'
  },
  {
    name: "Mák",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/hungary/budapest/budapest/mk",
    image: '/images/mk1.png'
  },
  {
    name: "MÁK restaurant",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/hungary/budapest/budapest/mk-restaurant",
    image: '/images/mk-restaurant1.png'
  },
  {
    name: "MoszkvaTéЯ Bisztró",
    cuisine: "Russian",
    price: "€€",
    path: "/hungary/budapest/budapest/moszkvat-bisztr",
    image: '/images/moszkvat-bisztr1.png'
  },
  {
    name: "N28 Wine and Kitchen",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/hungary/budapest/budapest/n28-wine-and-kitchen",
    image: '/images/n28-wine-and-kitchen1.png'
  },
  {
    name: "Nobu Budapest",
    cuisine: "Japanese",
    price: "€€€€",
    path: "/hungary/budapest/budapest/nobu-budapest",
    image: '/images/nobu-budapest1.png'
  },
  {
    name: "Onyx",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/hungary/budapest/budapest/onyx",
    image: '/images/onyx1.png'
  },
  {
    name: "Onyx Mühely",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/hungary/budapest/budapest/onyx-mhely",
    image: '/images/onyx-mhely1.png'
  },
  {
    name: "Rumour by Jenő Rácz",
    cuisine: "Creative",
    price: "€€€€",
    path: "/hungary/budapest/budapest/rumour-by-jen-rcz",
    image: '/images/rumour-by-jen-rcz1.png'
  },
  {
    name: "Rumour by Rácz Jenő",
    cuisine: "Creative",
    price: "€€€€",
    path: "/hungary/budapest/budapest/rumour-by-rcz-jen",
    image: '/images/rumour-by-rcz-jen1.png'
  },
  {
    name: "Salt",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/hungary/budapest/budapest/salt",
    image: '/images/salt1.png'
  },
  {
    name: "Spago by Wolfgang Puck",
    cuisine: "International",
    price: "€€€",
    path: "/hungary/budapest/budapest/spago-by-wolfgang-puck",
    image: '/images/spago-by-wolfgang-puck1.png'
  },
  {
    name: "St. Andrea",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/hungary/budapest/budapest/st-andrea",
    image: '/images/st-andrea1.png'
  },
  {
    name: "St. Andrea Restaurant",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/hungary/budapest/budapest/st-andrea-restaurant",
    image: '/images/st-andrea-restaurant1.png'
  },
  {
    name: "Stand",
    cuisine: "Modern Cuisine, Hungarian",
    price: "€€€€",
    path: "/hungary/budapest/budapest/stand",
    image: '/images/stand1.png'
  },
  {
    name: "Stand25 Bisztró",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/hungary/budapest/budapest/stand25-bisztr",
    image: '/images/stand25-bisztr1.png'
  },
  {
    name: "Szaletly",
    cuisine: "Hungarian",
    price: "€€",
    path: "/hungary/budapest/budapest/szaletly",
    image: '/images/szaletly1.png'
  },
  {
    name: "Tati",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/hungary/budapest/budapest/tati",
    image: '/images/tati1.png'
  },
  {
    name: "Textúra",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/hungary/budapest/budapest/textra",
    image: '/images/textra1.png'
  },
  {
    name: "Umo",
    cuisine: "International, South American",
    price: "€€",
    path: "/hungary/budapest/budapest/umo",
    image: '/images/umo1.png'
  },
  {
    name: "VIRTU",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/hungary/budapest/budapest/virtu",
    image: '/images/virtu1.png'
  },
  {
    name: "White Salon",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/hungary/budapest/budapest/white-salon",
    image: '/images/white-salon1.png'
  },
  {
    name: "Zazie Bistro",
    cuisine: "Hungarian",
    price: "€€",
    path: "/hungary/budapest/budapest/zazie-bistro",
    image: '/images/zazie-bistro1.png'
  },
  {
    name: "Zincenco Kitchen",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/hungary/budapest/budapest/zincenco-kitchen",
    image: '/images/zincenco-kitchen1.png'
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
