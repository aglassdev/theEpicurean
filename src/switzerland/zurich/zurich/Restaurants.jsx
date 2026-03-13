import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Zurich";

const restaurants = [
  {
    name: "Accademia del Gusto",
    cuisine: "Italian, Mediterranean Cuisine",
    price: "€€€",
    path: "/switzerland/zurich/zurich/accademia-del-gusto",
    image: '/images/accademia-del-gusto1.png'
  },
  {
    name: "Afghan Anar",
    cuisine: "Afghan",
    price: "€€",
    path: "/switzerland/zurich/zurich/afghan-anar",
    image: '/images/afghan-anar1.png'
  },
  {
    name: "AMEO",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€",
    path: "/switzerland/zurich/zurich/ameo",
    image: '/images/ameo1.png'
  },
  {
    name: "AuGust",
    cuisine: "Meats and Grills",
    price: "€€",
    path: "/switzerland/zurich/zurich/august",
    image: '/images/august1.png'
  },
  {
    name: "AURA",
    cuisine: "Meats and Grills, Grills",
    price: "€€€",
    path: "/switzerland/zurich/zurich/aura",
    image: '/images/aura1.png'
  },
  {
    name: "Barranco",
    cuisine: "Peruvian",
    price: "€€",
    path: "/switzerland/zurich/zurich/barranco",
    image: '/images/barranco1.png'
  },
  {
    name: "Bauernschänke",
    cuisine: "Country cooking, International",
    price: "€€",
    path: "/switzerland/zurich/zurich/bauernschnke",
    image: '/images/bauernschnke1.png'
  },
  {
    name: "Baur's",
    cuisine: "International, Classic Cuisine",
    price: "€€€",
    path: "/switzerland/zurich/zurich/baurs",
    image: '/images/baurs1.png'
  },
  {
    name: "Bianchi",
    cuisine: "Seafood, Italian",
    price: "€€€",
    path: "/switzerland/zurich/zurich/bianchi",
    image: '/images/bianchi1.png'
  },
  {
    name: "Blaue Ente by Alex",
    cuisine: "Contemporary, Farm to table",
    price: "€€€",
    path: "/switzerland/zurich/zurich/blaue-ente-by-alex",
    image: '/images/blaue-ente-by-alex1.png'
  },
  {
    name: "blooms",
    cuisine: "Vegan, Seasonal Cuisine",
    price: "€€€",
    path: "/switzerland/zurich/zurich/blooms",
    image: '/images/blooms1.png'
  },
  {
    name: "Brasserie Süd",
    cuisine: "Seasonal Cuisine, International",
    price: "€€",
    path: "/switzerland/zurich/zurich/brasserie-sd",
    image: '/images/brasserie-sd1.png'
  },
  {
    name: "Carlton",
    cuisine: "Classic Cuisine",
    price: "€€€",
    path: "/switzerland/zurich/zurich/carlton",
    image: '/images/carlton1.png'
  },
  {
    name: "DAR",
    cuisine: "Vegan, Modern Cuisine",
    price: "€€",
    path: "/switzerland/zurich/zurich/dar",
    image: '/images/dar1.png'
  },
  {
    name: "Didi's Frieden",
    cuisine: "Farm to table, Classic Cuisine",
    price: "€€€",
    path: "/switzerland/zurich/zurich/didis-frieden",
    image: '/images/didis-frieden1.png'
  },
  {
    name: "Eden Kitchen & Bar",
    cuisine: "Italian, International",
    price: "€€€€",
    path: "/switzerland/zurich/zurich/eden-kitchen-bar",
    image: '/images/eden-kitchen-bar1.png'
  },
  {
    name: "elmira",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€€",
    path: "/switzerland/zurich/zurich/elmira",
    image: '/images/elmira1.png'
  },
  {
    name: "EquiTable",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/switzerland/zurich/zurich/equitable",
    image: '/images/equitable1.png'
  },
  {
    name: "Freilager La Cucina Colaianni",
    cuisine: "Italian, French",
    price: "€€€€",
    path: "/switzerland/zurich/zurich/freilager-la-cucina-colaianni",
    image: '/images/freilager-la-cucina-colaianni1.png'
  },
  {
    name: "Freilager La Trattoria",
    cuisine: "Italian, Pizza",
    price: "€€",
    path: "/switzerland/zurich/zurich/freilager-la-trattoria",
    image: '/images/freilager-la-trattoria1.png'
  },
  {
    name: "Gaijin Izakaya",
    cuisine: "Asian Contemporary",
    price: "€€",
    path: "/switzerland/zurich/zurich/gaijin-izakaya",
    image: '/images/gaijin-izakaya1.png'
  },
  {
    name: "Gandria",
    cuisine: "Italian",
    price: "€€€",
    path: "/switzerland/zurich/zurich/gandria",
    image: '/images/gandria1.png'
  },
  {
    name: "Gül",
    cuisine: "Turkish, Mediterranean Cuisine",
    price: "€€",
    path: "/switzerland/zurich/zurich/gl",
    image: '/images/gl1.png'
  },
  {
    name: "Haus zum Rüden",
    cuisine: "International, Modern Cuisine",
    price: "€€",
    path: "/switzerland/zurich/zurich/haus-zum-rden",
    image: '/images/haus-zum-rden1.png'
  },
  {
    name: "Heugümper",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/switzerland/zurich/zurich/heugmper",
    image: '/images/heugmper1.png'
  },
  {
    name: "IGNIV Zürich by Andreas Caminada",
    cuisine: "Sharing, Modern Cuisine",
    price: "€€€€",
    path: "/switzerland/zurich/zurich/igniv-zrich-by-andreas-caminada",
    image: '/images/igniv-zrich-by-andreas-caminada1.png'
  },
  {
    name: "Josef",
    cuisine: "European Contemporary",
    price: "€€",
    path: "/switzerland/zurich/zurich/josef",
    image: '/images/josef1.png'
  },
  {
    name: "Kindli",
    cuisine: "Classic French",
    price: "€€€",
    path: "/switzerland/zurich/zurich/kindli",
    image: '/images/kindli1.png'
  },
  {
    name: "KLE",
    cuisine: "Vegan, Innovative",
    price: "€€€",
    path: "/switzerland/zurich/zurich/kle",
    image: '/images/kle1.png'
  },
  {
    name: "Kronenhalle",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/switzerland/zurich/zurich/kronenhalle",
    image: '/images/kronenhalle1.png'
  },
  {
    name: "La Bottega di Mario",
    cuisine: "Italian",
    price: "€€",
    path: "/switzerland/zurich/zurich/la-bottega-di-mario",
    image: '/images/la-bottega-di-mario1.png'
  },
  {
    name: "La Muña",
    cuisine: "Peruvian, Japanese Contemporary",
    price: "€€€",
    path: "/switzerland/zurich/zurich/la-mua",
    image: '/images/la-mua1.png'
  },
  {
    name: "La Rôtisserie",
    cuisine: "Contemporary, International",
    price: "€€€€",
    path: "/switzerland/zurich/zurich/la-rtisserie",
    image: '/images/la-rtisserie1.png'
  },
  {
    name: "La Scarpetta",
    cuisine: "Italian",
    price: "€€",
    path: "/switzerland/zurich/zurich/la-scarpetta",
    image: '/images/la-scarpetta1.png'
  },
  {
    name: "La Soupière",
    cuisine: "French",
    price: "€€€",
    path: "/switzerland/zurich/zurich/la-soupire",
    image: '/images/la-soupire1.png'
  },
  {
    name: "Lindenhofkeller",
    cuisine: "Seasonal Cuisine, Creative",
    price: "€€€€",
    path: "/switzerland/zurich/zurich/lindenhofkeller",
    image: '/images/lindenhofkeller1.png'
  },
  {
    name: "LOFT FIVE",
    cuisine: "Contemporary, International",
    price: "€€€",
    path: "/switzerland/zurich/zurich/loft-five",
    image: '/images/loft-five1.png'
  },
  {
    name: "Marguita",
    cuisine: "Mediterranean Cuisine",
    price: "€€€",
    path: "/switzerland/zurich/zurich/marguita",
    image: '/images/marguita1.png'
  },
  {
    name: "Marktküche",
    cuisine: "Vegan, Seasonal Cuisine",
    price: "€€€",
    path: "/switzerland/zurich/zurich/marktkche",
    image: '/images/marktkche1.png'
  },
  {
    name: "Mikuriya",
    cuisine: "Japanese Contemporary",
    price: "€€€€",
    path: "/switzerland/zurich/zurich/mikuriya",
    image: '/images/mikuriya1.png'
  },
  {
    name: "MURA",
    cuisine: "Japanese Contemporary",
    price: "€€€€",
    path: "/switzerland/zurich/zurich/mura",
    image: '/images/mura1.png'
  },
  {
    name: "Neue Taverne",
    cuisine: "Vegetarian, Modern Cuisine",
    price: "€€€",
    path: "/switzerland/zurich/zurich/neue-taverne",
    image: '/images/neue-taverne1.png'
  },
  {
    name: "Ornellaia",
    cuisine: "Italian",
    price: "€€",
    path: "/switzerland/zurich/zurich/ornellaia",
    image: '/images/ornellaia1.png'
  },
  {
    name: "ORSINI",
    cuisine: "Italian Contemporary",
    price: "€€€€",
    path: "/switzerland/zurich/zurich/orsini",
    image: '/images/orsini1.png'
  },
  {
    name: "parkhuus",
    cuisine: "Classic Cuisine, Contemporary",
    price: "€€€",
    path: "/switzerland/zurich/zurich/parkhuus",
    image: '/images/parkhuus1.png'
  },
  {
    name: "Rechberg 1837",
    cuisine: "Innovative, Swiss",
    price: "€€€",
    path: "/switzerland/zurich/zurich/rechberg-1837",
    image: '/images/rechberg-18371.png'
  },
  {
    name: "Rigiblick Comfort Fine Dining",
    cuisine: "Modern Cuisine, Seasonal Cuisine",
    price: "€€€",
    path: "/switzerland/zurich/zurich/rigiblick-comfort-fine-dining",
    image: '/images/rigiblick-comfort-fine-dining1.png'
  },
  {
    name: "Rigiblick Züriberg Beiz",
    cuisine: "Farm to table, Regional Cuisine",
    price: "€€",
    path: "/switzerland/zurich/zurich/rigiblick-zriberg-beiz",
    image: '/images/rigiblick-zriberg-beiz1.png'
  },
  {
    name: "rémy",
    cuisine: "Modern Cuisine, Seasonal Cuisine",
    price: "€€€€",
    path: "/switzerland/zurich/zurich/rmy",
    image: '/images/rmy1.png'
  },
  {
    name: "ROSI",
    cuisine: "Country cooking, Farm to table",
    price: "€€",
    path: "/switzerland/zurich/zurich/rosi",
    image: '/images/rosi1.png'
  },
  {
    name: "Sablier",
    cuisine: "French Contemporary",
    price: "€€€",
    path: "/switzerland/zurich/zurich/sablier",
    image: '/images/sablier1.png'
  },
  {
    name: "Sala of Tokyo",
    cuisine: "Japanese",
    price: "€€€€",
    path: "/switzerland/zurich/zurich/sala-of-tokyo",
    image: '/images/sala-of-tokyo1.png'
  },
  {
    name: "Shin",
    cuisine: "Japanese Contemporary",
    price: "€€€€",
    path: "/switzerland/zurich/zurich/shin",
    image: '/images/shin1.png'
  },
  {
    name: "Silex",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€",
    path: "/switzerland/zurich/zurich/silex",
    image: '/images/silex1.png'
  },
  {
    name: "Stapferstube da Rizzo",
    cuisine: "Italian, Mediterranean Cuisine",
    price: "€€",
    path: "/switzerland/zurich/zurich/stapferstube-da-rizzo",
    image: '/images/stapferstube-da-rizzo1.png'
  },
  {
    name: "Tao's",
    cuisine: "Fusion, International",
    price: "€€€",
    path: "/switzerland/zurich/zurich/taos",
    image: '/images/taos1.png'
  },
  {
    name: "The Counter",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€€",
    path: "/switzerland/zurich/zurich/the-counter",
    image: '/images/the-counter1.png'
  },
  {
    name: "The Restaurant",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€€",
    path: "/switzerland/zurich/zurich/the-restaurant",
    image: '/images/the-restaurant1.png'
  },
  {
    name: "The Restaurant",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€€",
    path: "/switzerland/zurich/zurich/the-restaurant",
    image: '/images/the-restaurant1.png'
  },
  {
    name: "tsuru tsuru noodlebar",
    cuisine: "Noodles, Japanese",
    price: "€",
    path: "/switzerland/zurich/zurich/tsuru-tsuru-noodlebar",
    image: '/images/tsuru-tsuru-noodlebar1.png'
  },
  {
    name: "Weisses Rössli",
    cuisine: "Classic French, Mediterranean Cuisine",
    price: "€€€",
    path: "/switzerland/zurich/zurich/weisses-rssli",
    image: '/images/weisses-rssli1.png'
  },
  {
    name: "White Elephant",
    cuisine: "Thai",
    price: "€€",
    path: "/switzerland/zurich/zurich/white-elephant",
    image: '/images/white-elephant1.png'
  },
  {
    name: "Widder Restaurant",
    cuisine: "Modern French, Contemporary",
    price: "€€€€",
    path: "/switzerland/zurich/zurich/widder-restaurant",
    image: '/images/widder-restaurant1.png'
  },
  {
    name: "Williams ButchersTable am Bellevue",
    cuisine: "Steakhouse, Meats and Grills",
    price: "€€€",
    path: "/switzerland/zurich/zurich/williams-butcherstable-am-bellevue",
    image: '/images/williams-butcherstable-am-bellevue1.png'
  },
  {
    name: "Williams ButchersTable am Hegibachplatz",
    cuisine: "Steakhouse, Meats and Grills",
    price: "€€€",
    path: "/switzerland/zurich/zurich/williams-butcherstable-am-hegibachplatz",
    image: '/images/williams-butcherstable-am-hegibachplatz1.png'
  },
  {
    name: "Wirtschaft im FRANZ",
    cuisine: "Modern Cuisine, Seasonal Cuisine",
    price: "€€€",
    path: "/switzerland/zurich/zurich/wirtschaft-im-franz",
    image: '/images/wirtschaft-im-franz1.png'
  },
  {
    name: "Wöschi",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/switzerland/zurich/zurich/wschi",
    image: '/images/wschi1.png'
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
