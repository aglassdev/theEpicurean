import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Dsseldorf";

const restaurants = [
  {
    name: "1876 Daniel Dal-Ben",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€€",
    path: "/germany/dsseldorf/dsseldorf/1876-daniel-dal-ben",
    image: '/images/1876-daniel-dal-ben1.png'
  },
  {
    name: "20° RESTOBAR",
    cuisine: "Spanish Contemporary",
    price: "€€",
    path: "/germany/dsseldorf/dsseldorf/20-restobar",
    image: '/images/20-restobar1.png'
  },
  {
    name: "Agata's",
    cuisine: "Creative, Seasonal Cuisine",
    price: "€€€€",
    path: "/germany/dsseldorf/dsseldorf/agatas",
    image: '/images/agatas1.png'
  },
  {
    name: "Bistro Fatal",
    cuisine: "French",
    price: "€€",
    path: "/germany/dsseldorf/dsseldorf/bistro-fatal",
    image: '/images/bistro-fatal1.png'
  },
  {
    name: "Brasserie Stadthaus",
    cuisine: "Classic French",
    price: "€€",
    path: "/germany/dsseldorf/dsseldorf/brasserie-stadthaus",
    image: '/images/brasserie-stadthaus1.png'
  },
  {
    name: "Celia",
    cuisine: "Mexican",
    price: "€€",
    path: "/germany/dsseldorf/dsseldorf/celia",
    image: '/images/celia1.png'
  },
  {
    name: "EssBar fein & pfiffig",
    cuisine: "International, Seasonal Cuisine",
    price: "€€",
    path: "/germany/dsseldorf/dsseldorf/essbar-fein-pfiffig",
    image: '/images/essbar-fein-pfiffig1.png'
  },
  {
    name: "Fleher Hof",
    cuisine: "Regional Cuisine",
    price: "€€",
    path: "/germany/dsseldorf/dsseldorf/fleher-hof",
    image: '/images/fleher-hof1.png'
  },
  {
    name: "Grande Étoile",
    cuisine: "Modern Cuisine, French",
    price: "€€€",
    path: "/germany/dsseldorf/dsseldorf/grande-toile",
    image: '/images/grande-toile1.png'
  },
  {
    name: "Im Schiffchen",
    cuisine: "Classic Cuisine",
    price: "€€€€",
    path: "/germany/dsseldorf/dsseldorf/im-schiffchen",
    image: '/images/im-schiffchen1.png'
  },
  {
    name: "Jae",
    cuisine: "Fusion, Asian Influences",
    price: "€€€€",
    path: "/germany/dsseldorf/dsseldorf/jae",
    image: '/images/jae1.png'
  },
  {
    name: "LA VIE by thomas bühner",
    cuisine: "Modern Cuisine, Creative",
    price: "€€€€",
    path: "/germany/dsseldorf/dsseldorf/la-vie-by-thomas-bhner",
    image: '/images/la-vie-by-thomas-bhner1.png'
  },
  {
    name: "L'arte in cucina",
    cuisine: "Italian, Tuscan",
    price: "€€€",
    path: "/germany/dsseldorf/dsseldorf/larte-in-cucina",
    image: '/images/larte-in-cucina1.png'
  },
  {
    name: "Le Flair",
    cuisine: "Mediterranean Cuisine, Modern Cuisine",
    price: "€€€",
    path: "/germany/dsseldorf/dsseldorf/le-flair",
    image: '/images/le-flair1.png'
  },
  {
    name: "Lido Hafen",
    cuisine: "Modern Cuisine, Seasonal Cuisine",
    price: "€€€€",
    path: "/germany/dsseldorf/dsseldorf/lido-hafen",
    image: '/images/lido-hafen1.png'
  },
  {
    name: "Münstermanns Kontor",
    cuisine: "International, Traditional Cuisine",
    price: "€€",
    path: "/germany/dsseldorf/dsseldorf/mnstermanns-kontor",
    image: '/images/mnstermanns-kontor1.png'
  },
  {
    name: "Nagaya",
    cuisine: "Japanese",
    price: "€€€€",
    path: "/germany/dsseldorf/dsseldorf/nagaya",
    image: '/images/nagaya1.png'
  },
  {
    name: "Roku - Japanese Dining & Wine",
    cuisine: "Japanese Contemporary",
    price: "€€€",
    path: "/germany/dsseldorf/dsseldorf/roku-japanese-dining-wine",
    image: '/images/roku-japanese-dining-wine1.png'
  },
  {
    name: "Rubens",
    cuisine: "Austrian, Traditional Cuisine",
    price: "€€",
    path: "/germany/dsseldorf/dsseldorf/rubens",
    image: '/images/rubens1.png'
  },
  {
    name: "Saittavini",
    cuisine: "Italian",
    price: "€€€",
    path: "/germany/dsseldorf/dsseldorf/saittavini",
    image: '/images/saittavini1.png'
  },
  {
    name: "SCHORN by Lukas Schild",
    cuisine: "Contemporary",
    price: "€€€€",
    path: "/germany/dsseldorf/dsseldorf/schorn-by-lukas-schild",
    image: '/images/schorn-by-lukas-schild1.png'
  },
  {
    name: "Setzkasten",
    cuisine: "Modern Cuisine, International",
    price: "€€€€",
    path: "/germany/dsseldorf/dsseldorf/setzkasten",
    image: '/images/setzkasten1.png'
  },
  {
    name: "Staudi's",
    cuisine: "Contemporary, Seasonal Cuisine",
    price: "€€€",
    path: "/germany/dsseldorf/dsseldorf/staudis",
    image: '/images/staudis1.png'
  },
  {
    name: "The Duchy",
    cuisine: "Contemporary",
    price: "€€€",
    path: "/germany/dsseldorf/dsseldorf/the-duchy",
    image: '/images/the-duchy1.png'
  },
  {
    name: "WELA",
    cuisine: "Thai contemporary",
    price: "€€€€",
    path: "/germany/dsseldorf/dsseldorf/wela",
    image: '/images/wela1.png'
  },
  {
    name: "Yabase",
    cuisine: "Japanese, Asian",
    price: "€€€",
    path: "/germany/dsseldorf/dsseldorf/yabase",
    image: '/images/yabase1.png'
  },
  {
    name: "Yoshi by Nagaya",
    cuisine: "Japanese, Sushi",
    price: "€€€€",
    path: "/germany/dsseldorf/dsseldorf/yoshi-by-nagaya",
    image: '/images/yoshi-by-nagaya1.png'
  },
  {
    name: "Zwanzig23 by Lukas Jakobi",
    cuisine: "Creative, Seasonal Cuisine",
    price: "€€€€",
    path: "/germany/dsseldorf/dsseldorf/zwanzig23-by-lukas-jakobi",
    image: '/images/zwanzig23-by-lukas-jakobi1.png'
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
