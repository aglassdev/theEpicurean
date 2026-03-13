import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Lisbon";

const restaurants = [
  {
    name: "100 Maneiras",
    cuisine: "Creative",
    price: "€€€€",
    path: "/portugal/lisbon/lisbon/100-maneiras",
    image: '/images/100-maneiras1.png'
  },
  {
    name: "2Monkeys",
    cuisine: "Creative, French Contemporary",
    price: "€€€€",
    path: "/portugal/lisbon/lisbon/2monkeys",
    image: '/images/2monkeys1.png'
  },
  {
    name: "Alma",
    cuisine: "Creative",
    price: "€€€€",
    path: "/portugal/lisbon/lisbon/alma",
    image: '/images/alma1.png'
  },
  {
    name: "Arkhe",
    cuisine: "Vegetarian, Vegan",
    price: "€€€",
    path: "/portugal/lisbon/lisbon/arkhe",
    image: '/images/arkhe1.png'
  },
  {
    name: "BAHR",
    cuisine: "Portuguese",
    price: "€€€",
    path: "/portugal/lisbon/lisbon/bahr",
    image: '/images/bahr1.png'
  },
  {
    name: "Belcanto",
    cuisine: "Creative, Portuguese",
    price: "€€€€",
    path: "/portugal/lisbon/lisbon/belcanto",
    image: '/images/belcanto1.png'
  },
  {
    name: "Boubou's",
    cuisine: "Modern Cuisine, International",
    price: "€€€",
    path: "/portugal/lisbon/lisbon/boubous",
    image: '/images/boubous1.png'
  },
  {
    name: "Canalha",
    cuisine: "Farm to table, Portuguese",
    price: "€€",
    path: "/portugal/lisbon/lisbon/canalha",
    image: '/images/canalha1.png'
  },
  {
    name: "Carnal",
    cuisine: "Mexican",
    price: "€€",
    path: "/portugal/lisbon/lisbon/carnal",
    image: '/images/carnal1.png'
  },
  {
    name: "Ceia",
    cuisine: "Contemporary",
    price: "€€€€",
    path: "/portugal/lisbon/lisbon/ceia",
    image: '/images/ceia1.png'
  },
  {
    name: "CURA",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/portugal/lisbon/lisbon/cura",
    image: '/images/cura1.png'
  },
  {
    name: "Downunder by Justin Jennings",
    cuisine: "Australian Contemporary",
    price: "€€",
    path: "/portugal/lisbon/lisbon/downunder-by-justin-jennings",
    image: '/images/downunder-by-justin-jennings1.png'
  },
  {
    name: "Drogaria",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/portugal/lisbon/lisbon/drogaria",
    image: '/images/drogaria1.png'
  },
  {
    name: "Eleven",
    cuisine: "Creative",
    price: "€€€€",
    path: "/portugal/lisbon/lisbon/eleven",
    image: '/images/eleven1.png'
  },
  {
    name: "Encanto",
    cuisine: "Vegetarian",
    price: "€€€",
    path: "/portugal/lisbon/lisbon/encanto",
    image: '/images/encanto1.png'
  },
  {
    name: "EPUR",
    cuisine: "Creative",
    price: "€€€€",
    path: "/portugal/lisbon/lisbon/epur",
    image: '/images/epur1.png'
  },
  {
    name: "Essencial",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/portugal/lisbon/lisbon/essencial",
    image: '/images/essencial1.png'
  },
  {
    name: "Feitoria",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/portugal/lisbon/lisbon/feitoria",
    image: '/images/feitoria1.png'
  },
  {
    name: "Fifty Seconds",
    cuisine: "Creative, Mediterranean Cuisine",
    price: "€€€€",
    path: "/portugal/lisbon/lisbon/fifty-seconds",
    image: '/images/fifty-seconds1.png'
  },
  {
    name: "Fogo",
    cuisine: "Grills",
    price: "€€",
    path: "/portugal/lisbon/lisbon/fogo",
    image: '/images/fogo1.png'
  },
  {
    name: "Grenache",
    cuisine: "French Contemporary",
    price: "€€€€",
    path: "/portugal/lisbon/lisbon/grenache",
    image: '/images/grenache1.png'
  },
  {
    name: "Henrique Sá Pessoa",
    cuisine: "Creative",
    price: "€€€€",
    path: "/portugal/lisbon/lisbon/henrique-s-pessoa",
    image: '/images/henrique-s-pessoa1.png'
  },
  {
    name: "Kabuki Lisboa",
    cuisine: "Japanese, Fusion",
    price: "€€€",
    path: "/portugal/lisbon/lisbon/kabuki-lisboa",
    image: '/images/kabuki-lisboa1.png'
  },
  {
    name: "Kanazawa",
    cuisine: "Japanese",
    price: "€€€€",
    path: "/portugal/lisbon/lisbon/kanazawa",
    image: '/images/kanazawa1.png'
  },
  {
    name: "Las Dos Manos",
    cuisine: "Fusion",
    price: "€€",
    path: "/portugal/lisbon/lisbon/las-dos-manos",
    image: '/images/las-dos-manos1.png'
  },
  {
    name: "Loco",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/portugal/lisbon/lisbon/loco",
    image: '/images/loco1.png'
  },
  {
    name: "Âmago",
    cuisine: "Farm to table, Contemporary",
    price: "€€€",
    path: "/portugal/lisbon/lisbon/mago",
    image: '/images/mago1.png'
  },
  {
    name: "Marlene,",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/portugal/lisbon/lisbon/marlene",
    image: '/images/marlene1.png'
  },
  {
    name: "O Frade",
    cuisine: "Regional Cuisine",
    price: "€€",
    path: "/portugal/lisbon/lisbon/o-frade",
    image: '/images/o-frade1.png'
  },
  {
    name: "O Talho",
    cuisine: "Meats and Grills",
    price: "€€€",
    path: "/portugal/lisbon/lisbon/o-talho",
    image: '/images/o-talho1.png'
  },
  {
    name: "Ofício - Tasco Atípico",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/portugal/lisbon/lisbon/ofcio-tasco-atpico",
    image: '/images/ofcio-tasco-atpico1.png'
  },
  {
    name: "Ofício - Wine & Dining Room",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/portugal/lisbon/lisbon/ofcio-wine-dining-room",
    image: '/images/ofcio-wine-dining-room1.png'
  },
  {
    name: "Omakase RI",
    cuisine: "Japanese",
    price: "€€€",
    path: "/portugal/lisbon/lisbon/omakase-ri",
    image: '/images/omakase-ri1.png'
  },
  {
    name: "Oven",
    cuisine: "Nepali, Indian",
    price: "€€",
    path: "/portugal/lisbon/lisbon/oven",
    image: '/images/oven1.png'
  },
  {
    name: "Pigmeu",
    cuisine: "Portuguese",
    price: "€€",
    path: "/portugal/lisbon/lisbon/pigmeu",
    image: '/images/pigmeu1.png'
  },
  {
    name: "Plano",
    cuisine: "Contemporary",
    price: "€€€",
    path: "/portugal/lisbon/lisbon/plano",
    image: '/images/plano1.png'
  },
  {
    name: "Prado",
    cuisine: "Farm to table",
    price: "€€",
    path: "/portugal/lisbon/lisbon/prado",
    image: '/images/prado1.png'
  },
  {
    name: "SEM",
    cuisine: "Creative",
    price: "€€",
    path: "/portugal/lisbon/lisbon/sem",
    image: '/images/sem1.png'
  },
  {
    name: "SÁLA de João Sá",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/portugal/lisbon/lisbon/sla-de-joo-s",
    image: '/images/sla-de-joo-s1.png'
  },
  {
    name: "Solar dos Nunes",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/portugal/lisbon/lisbon/solar-dos-nunes",
    image: '/images/solar-dos-nunes1.png'
  },
  {
    name: "Suba",
    cuisine: "Contemporary, Modern Cuisine",
    price: "€€€",
    path: "/portugal/lisbon/lisbon/suba",
    image: '/images/suba1.png'
  },
  {
    name: "Terroir",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/portugal/lisbon/lisbon/terroir",
    image: '/images/terroir1.png'
  },
  {
    name: "Terroir",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/portugal/lisbon/lisbon/terroir",
    image: '/images/terroir1.png'
  },
  {
    name: "Vibe by Mattia Stanchieri",
    cuisine: "Contemporary",
    price: "€€€",
    path: "/portugal/lisbon/lisbon/vibe-by-mattia-stanchieri",
    image: '/images/vibe-by-mattia-stanchieri1.png'
  },
  {
    name: "YŌSO",
    cuisine: "Japanese",
    price: "€€€",
    path: "/portugal/lisbon/lisbon/yso",
    image: '/images/yso1.png'
  },
  {
    name: "Zunzum Gastrobar",
    cuisine: "Contemporary",
    price: "€€",
    path: "/portugal/lisbon/lisbon/zunzum-gastrobar",
    image: '/images/zunzum-gastrobar1.png'
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
