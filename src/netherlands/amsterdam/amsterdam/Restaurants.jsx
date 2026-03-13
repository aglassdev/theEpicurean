import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Amsterdam";

const restaurants = [
  {
    name: "A-Fusion",
    cuisine: "Asian",
    price: "€",
    path: "/netherlands/amsterdam/amsterdam/a-fusion",
    image: '/images/a-fusion1.png'
  },
  {
    name: "Alba",
    cuisine: "Creative",
    price: "€€",
    path: "/netherlands/amsterdam/amsterdam/alba",
    image: '/images/alba1.png'
  },
  {
    name: "Arca",
    cuisine: "Portuguese, Asian Influences",
    price: "€€",
    path: "/netherlands/amsterdam/amsterdam/arca",
    image: '/images/arca1.png'
  },
  {
    name: "Arles",
    cuisine: "Modern French",
    price: "€€",
    path: "/netherlands/amsterdam/amsterdam/arles",
    image: '/images/arles1.png'
  },
  {
    name: "Auberge - cuisine française",
    cuisine: "French",
    price: "€€",
    path: "/netherlands/amsterdam/amsterdam/auberge-cuisine-franaise",
    image: '/images/auberge-cuisine-franaise1.png'
  },
  {
    name: "BAK",
    cuisine: "Farm to table",
    price: "€€€",
    path: "/netherlands/amsterdam/amsterdam/bak",
    image: '/images/bak1.png'
  },
  {
    name: "Bar BAUT",
    cuisine: "Modern Cuisine",
    price: "€",
    path: "/netherlands/amsterdam/amsterdam/bar-baut",
    image: '/images/bar-baut1.png'
  },
  {
    name: "Beulings",
    cuisine: "Contemporary",
    price: "€€€",
    path: "/netherlands/amsterdam/amsterdam/beulings",
    image: '/images/beulings1.png'
  },
  {
    name: "Bistro de la Mer",
    cuisine: "Classic Cuisine",
    price: "€€€",
    path: "/netherlands/amsterdam/amsterdam/bistro-de-la-mer",
    image: '/images/bistro-de-la-mer1.png'
  },
  {
    name: "Bistro Féline",
    cuisine: "Modern Cuisine, French",
    price: "€€€",
    path: "/netherlands/amsterdam/amsterdam/bistro-fline",
    image: '/images/bistro-fline1.png'
  },
  {
    name: "Bolenius Rembrandtpark",
    cuisine: "Modern Cuisine, Vegetarian",
    price: "€€€€",
    path: "/netherlands/amsterdam/amsterdam/bolenius-rembrandtpark",
    image: '/images/bolenius-rembrandtpark1.png'
  },
  {
    name: "Boon & De Koot",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/netherlands/amsterdam/amsterdam/boon-de-koot",
    image: '/images/boon-de-koot1.png'
  },
  {
    name: "Bougainville",
    cuisine: "Modern Cuisine, International",
    price: "€€€€",
    path: "/netherlands/amsterdam/amsterdam/bougainville",
    image: '/images/bougainville1.png'
  },
  {
    name: "Brasserie van Baerle",
    cuisine: "Classic Cuisine",
    price: "€€",
    path: "/netherlands/amsterdam/amsterdam/brasserie-van-baerle",
    image: '/images/brasserie-van-baerle1.png'
  },
  {
    name: "Bridges",
    cuisine: "Seafood",
    price: "€€€",
    path: "/netherlands/amsterdam/amsterdam/bridges",
    image: '/images/bridges1.png'
  },
  {
    name: "Bridges",
    cuisine: "Seafood",
    price: "€€€",
    path: "/netherlands/amsterdam/amsterdam/bridges",
    image: '/images/bridges1.png'
  },
  {
    name: "Café Caron",
    cuisine: "Classic French",
    price: "€€",
    path: "/netherlands/amsterdam/amsterdam/caf-caron",
    image: '/images/caf-caron1.png'
  },
  {
    name: "Choux",
    cuisine: "Modern French, Vegetarian",
    price: "€€€",
    path: "/netherlands/amsterdam/amsterdam/choux",
    image: '/images/choux1.png'
  },
  {
    name: "Ciel Bleu",
    cuisine: "Creative",
    price: "€€€€",
    path: "/netherlands/amsterdam/amsterdam/ciel-bleu",
    image: '/images/ciel-bleu1.png'
  },
  {
    name: "CUE",
    cuisine: "Creative, Farm to table",
    price: "€€€€",
    path: "/netherlands/amsterdam/amsterdam/cue",
    image: '/images/cue1.png'
  },
  {
    name: "Daalder",
    cuisine: "Creative",
    price: "€€€€",
    path: "/netherlands/amsterdam/amsterdam/daalder",
    image: '/images/daalder1.png'
  },
  {
    name: "De Juwelier",
    cuisine: "Modern French",
    price: "€€€",
    path: "/netherlands/amsterdam/amsterdam/de-juwelier",
    image: '/images/de-juwelier1.png'
  },
  {
    name: "De Kas",
    cuisine: "Organic",
    price: "€€€",
    path: "/netherlands/amsterdam/amsterdam/de-kas",
    image: '/images/de-kas1.png'
  },
  {
    name: "De Mark",
    cuisine: "Creative French",
    price: "€€",
    path: "/netherlands/amsterdam/amsterdam/de-mark",
    image: '/images/de-mark1.png'
  },
  {
    name: "De Silveren Spiegel",
    cuisine: "Creative French",
    price: "€€€",
    path: "/netherlands/amsterdam/amsterdam/de-silveren-spiegel",
    image: '/images/de-silveren-spiegel1.png'
  },
  {
    name: "Domenica",
    cuisine: "Mediterranean Cuisine, Italian",
    price: "€€€",
    path: "/netherlands/amsterdam/amsterdam/domenica",
    image: '/images/domenica1.png'
  },
  {
    name: "Eeuwen",
    cuisine: "French Contemporary, Modern Cuisine",
    price: "€€€",
    path: "/netherlands/amsterdam/amsterdam/eeuwen",
    image: '/images/eeuwen1.png'
  },
  {
    name: "EN",
    cuisine: "Japanese",
    price: "€€€",
    path: "/netherlands/amsterdam/amsterdam/en",
    image: '/images/en1.png'
  },
  {
    name: "Fa. Pekelhaaring",
    cuisine: "Farm to table, Italian",
    price: "€€",
    path: "/netherlands/amsterdam/amsterdam/fa-pekelhaaring",
    image: '/images/fa-pekelhaaring1.png'
  },
  {
    name: "Flore",
    cuisine: "Contemporary, Creative French",
    price: "€€€€",
    path: "/netherlands/amsterdam/amsterdam/flore",
    image: '/images/flore1.png'
  },
  {
    name: "Foer",
    cuisine: "Vegetarian",
    price: "€€€",
    path: "/netherlands/amsterdam/amsterdam/foer",
    image: '/images/foer1.png'
  },
  {
    name: "Gebr. Hartering",
    cuisine: "French, Fusion",
    price: "€€",
    path: "/netherlands/amsterdam/amsterdam/gebr-hartering",
    image: '/images/gebr-hartering1.png'
  },
  {
    name: "Gitane",
    cuisine: "Mediterranean Cuisine",
    price: "€€",
    path: "/netherlands/amsterdam/amsterdam/gitane",
    image: '/images/gitane1.png'
  },
  {
    name: "Het Bosch",
    cuisine: "Modern French",
    price: "€€",
    path: "/netherlands/amsterdam/amsterdam/het-bosch",
    image: '/images/het-bosch1.png'
  },
  {
    name: "Kaagman & Kortekaas",
    cuisine: "Farm to table",
    price: "€€€",
    path: "/netherlands/amsterdam/amsterdam/kaagman-kortekaas",
    image: '/images/kaagman-kortekaas1.png'
  },
  {
    name: "Lars Amsterdam",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/netherlands/amsterdam/amsterdam/lars-amsterdam",
    image: '/images/lars-amsterdam1.png'
  },
  {
    name: "Lastage",
    cuisine: "Creative",
    price: "€€€",
    path: "/netherlands/amsterdam/amsterdam/lastage",
    image: '/images/lastage1.png'
  },
  {
    name: "Lazuur",
    cuisine: "Mediterranean Cuisine",
    price: "€€",
    path: "/netherlands/amsterdam/amsterdam/lazuur",
    image: '/images/lazuur1.png'
  },
  {
    name: "Marie",
    cuisine: "Classic Cuisine",
    price: "€€",
    path: "/netherlands/amsterdam/amsterdam/marie",
    image: '/images/marie1.png'
  },
  {
    name: "Maris Piper",
    cuisine: "Modern French",
    price: "€€€",
    path: "/netherlands/amsterdam/amsterdam/maris-piper",
    image: '/images/maris-piper1.png'
  },
  {
    name: "Mont Blanc",
    cuisine: "Savoyard, Modern Cuisine",
    price: "€€€€",
    path: "/netherlands/amsterdam/amsterdam/mont-blanc",
    image: '/images/mont-blanc1.png'
  },
  {
    name: "MOS",
    cuisine: "Creative French",
    price: "€€€",
    path: "/netherlands/amsterdam/amsterdam/mos",
    image: '/images/mos1.png'
  },
  {
    name: "Nazka",
    cuisine: "Peruvian, World Cuisine",
    price: "€€€",
    path: "/netherlands/amsterdam/amsterdam/nazka",
    image: '/images/nazka1.png'
  },
  {
    name: "Oriole",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/netherlands/amsterdam/amsterdam/oriole",
    image: '/images/oriole1.png'
  },
  {
    name: "Oriole Garden Bistro",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/netherlands/amsterdam/amsterdam/oriole-garden-bistro",
    image: '/images/oriole-garden-bistro1.png'
  },
  {
    name: "R21",
    cuisine: "Creative, Seasonal Cuisine",
    price: "€€€",
    path: "/netherlands/amsterdam/amsterdam/r21",
    image: '/images/r211.png'
  },
  {
    name: "Restaurant 212",
    cuisine: "Creative",
    price: "€€€€",
    path: "/netherlands/amsterdam/amsterdam/restaurant-212",
    image: '/images/restaurant-2121.png'
  },
  {
    name: "Restaurant Showw",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/netherlands/amsterdam/amsterdam/restaurant-showw",
    image: '/images/restaurant-showw1.png'
  },
  {
    name: "RIJKS®",
    cuisine: "Creative, Modern French",
    price: "€€€€",
    path: "/netherlands/amsterdam/amsterdam/rijks",
    image: '/images/rijks1.png'
  },
  {
    name: "Rijsel",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/netherlands/amsterdam/amsterdam/rijsel",
    image: '/images/rijsel1.png'
  },
  {
    name: "Ron Gastrobar",
    cuisine: "Creative French",
    price: "€€€",
    path: "/netherlands/amsterdam/amsterdam/ron-gastrobar",
    image: '/images/ron-gastrobar1.png'
  },
  {
    name: "Scheepskameel",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/netherlands/amsterdam/amsterdam/scheepskameel",
    image: '/images/scheepskameel1.png'
  },
  {
    name: "Sea Palace",
    cuisine: "Cantonese, Chinese",
    price: "€€",
    path: "/netherlands/amsterdam/amsterdam/sea-palace",
    image: '/images/sea-palace1.png'
  },
  {
    name: "Senses",
    cuisine: "Modern Cuisine, Regional Cuisine",
    price: "€€€",
    path: "/netherlands/amsterdam/amsterdam/senses",
    image: '/images/senses1.png'
  },
  {
    name: "Serre Restaurant",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/netherlands/amsterdam/amsterdam/serre-restaurant",
    image: '/images/serre-restaurant1.png'
  },
  {
    name: "Sinck",
    cuisine: "Modern French",
    price: "€€€",
    path: "/netherlands/amsterdam/amsterdam/sinck",
    image: '/images/sinck1.png'
  },
  {
    name: "Sinne",
    cuisine: "Modern Cuisine, Fusion",
    price: "€€€",
    path: "/netherlands/amsterdam/amsterdam/sinne",
    image: '/images/sinne1.png'
  },
  {
    name: "Spectrum",
    cuisine: "Creative",
    price: "€€€€",
    path: "/netherlands/amsterdam/amsterdam/spectrum",
    image: '/images/spectrum1.png'
  },
  {
    name: "Tannay",
    cuisine: "Classic French",
    price: "€€€",
    path: "/netherlands/amsterdam/amsterdam/tannay",
    image: '/images/tannay1.png'
  },
  {
    name: "Testamatta Ristorante Enoteca",
    cuisine: "Italian",
    price: "€€€",
    path: "/netherlands/amsterdam/amsterdam/testamatta-ristorante-enoteca",
    image: '/images/testamatta-ristorante-enoteca1.png'
  },
  {
    name: "THE DUCHESS",
    cuisine: "French, Mediterranean Cuisine",
    price: "€€€",
    path: "/netherlands/amsterdam/amsterdam/the-duchess",
    image: '/images/the-duchess1.png'
  },
  {
    name: "The White Room by Jacob Jan Boerma",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/netherlands/amsterdam/amsterdam/the-white-room-by-jacob-jan-boerma",
    image: '/images/the-white-room-by-jacob-jan-boerma1.png'
  },
  {
    name: "Toet Amsterdam",
    cuisine: "Mediterranean Cuisine, Modern Cuisine",
    price: "€€",
    path: "/netherlands/amsterdam/amsterdam/toet-amsterdam",
    image: '/images/toet-amsterdam1.png'
  },
  {
    name: "Troef",
    cuisine: "Modern French",
    price: "€€€",
    path: "/netherlands/amsterdam/amsterdam/troef",
    image: '/images/troef1.png'
  },
  {
    name: "TWENTYSIX",
    cuisine: "Creative",
    price: "€€€",
    path: "/netherlands/amsterdam/amsterdam/twentysix",
    image: '/images/twentysix1.png'
  },
  {
    name: "VanOost",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€€",
    path: "/netherlands/amsterdam/amsterdam/vanoost",
    image: '/images/vanoost1.png'
  },
  {
    name: "Veneur",
    cuisine: "Classic French",
    price: "€€",
    path: "/netherlands/amsterdam/amsterdam/veneur",
    image: '/images/veneur1.png'
  },
  {
    name: "Vermeer",
    cuisine: "French Contemporary",
    price: "€€€",
    path: "/netherlands/amsterdam/amsterdam/vermeer",
    image: '/images/vermeer1.png'
  },
  {
    name: "Vinkeles",
    cuisine: "Creative, Classic Cuisine",
    price: "€€€€",
    path: "/netherlands/amsterdam/amsterdam/vinkeles",
    image: '/images/vinkeles1.png'
  },
  {
    name: "Visaandeschelde",
    cuisine: "Seafood",
    price: "€€€",
    path: "/netherlands/amsterdam/amsterdam/visaandeschelde",
    image: '/images/visaandeschelde1.png'
  },
  {
    name: "Watergang",
    cuisine: "European Contemporary",
    price: "€€",
    path: "/netherlands/amsterdam/amsterdam/watergang",
    image: '/images/watergang1.png'
  },
  {
    name: "Wils",
    cuisine: "World Cuisine, Farm to table",
    price: "€€€",
    path: "/netherlands/amsterdam/amsterdam/wils",
    image: '/images/wils1.png'
  },
  {
    name: "Wils Bakery Café",
    cuisine: "French",
    price: "€€",
    path: "/netherlands/amsterdam/amsterdam/wils-bakery-caf",
    image: '/images/wils-bakery-caf1.png'
  },
  {
    name: "Wolf Atelier",
    cuisine: "Modern French",
    price: "€€€",
    path: "/netherlands/amsterdam/amsterdam/wolf-atelier",
    image: '/images/wolf-atelier1.png'
  },
  {
    name: "Yamazato",
    cuisine: "Japanese",
    price: "€€€€",
    path: "/netherlands/amsterdam/amsterdam/yamazato",
    image: '/images/yamazato1.png'
  },
  {
    name: "Zoldering",
    cuisine: "Modern French",
    price: "€€€",
    path: "/netherlands/amsterdam/amsterdam/zoldering",
    image: '/images/zoldering1.png'
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
