import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Rome";

const restaurants = [
  {
    name: "53 Untitled",
    cuisine: "Italian Contemporary, Italian",
    price: "€€",
    path: "/italy/rome/rome/53-untitled",
    image: '/images/53-untitled1.png'
  },
  {
    name: "Acciuga",
    cuisine: "Seafood",
    price: "€€€",
    path: "/italy/rome/rome/acciuga",
    image: '/images/acciuga1.png'
  },
  {
    name: "Achilli al Parlamento",
    cuisine: "Creative, Contemporary",
    price: "€€€",
    path: "/italy/rome/rome/achilli-al-parlamento",
    image: '/images/achilli-al-parlamento1.png'
  },
  {
    name: "Acquolina",
    cuisine: "Creative, Mediterranean Cuisine",
    price: "€€€€",
    path: "/italy/rome/rome/acquolina",
    image: '/images/acquolina1.png'
  },
  {
    name: "Adelaide",
    cuisine: "Italian Contemporary, Modern Cuisine",
    price: "€€€",
    path: "/italy/rome/rome/adelaide",
    image: '/images/adelaide1.png'
  },
  {
    name: "aede dining & wines",
    cuisine: "European Contemporary",
    price: "€€",
    path: "/italy/rome/rome/aede-dining-wines",
    image: '/images/aede-dining-wines1.png'
  },
  {
    name: "All'Oro",
    cuisine: "Creative, Italian Contemporary",
    price: "€€€€",
    path: "/italy/rome/rome/alloro",
    image: '/images/alloro1.png'
  },
  {
    name: "Almatò",
    cuisine: "Contemporary",
    price: "€€€",
    path: "/italy/rome/rome/almat",
    image: '/images/almat1.png'
  },
  {
    name: "Antica Pesa",
    cuisine: "Roman, Cuisine from Lazio",
    price: "€€",
    path: "/italy/rome/rome/antica-pesa",
    image: '/images/antica-pesa1.png'
  },
  {
    name: "Armando al Pantheon",
    cuisine: "Roman, Classic Cuisine",
    price: "€€",
    path: "/italy/rome/rome/armando-al-pantheon",
    image: '/images/armando-al-pantheon1.png'
  },
  {
    name: "Aroma",
    cuisine: "Modern Cuisine, Creative",
    price: "€€€€",
    path: "/italy/rome/rome/aroma",
    image: '/images/aroma1.png'
  },
  {
    name: "Bistrot 64",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€",
    path: "/italy/rome/rome/bistrot-64",
    image: '/images/bistrot-641.png'
  },
  {
    name: "Campocori",
    cuisine: "Italian, Modern Cuisine",
    price: "€€€",
    path: "/italy/rome/rome/campocori",
    image: '/images/campocori1.png'
  },
  {
    name: "Carter Oblio",
    cuisine: "Contemporary, Modern Cuisine",
    price: "€€",
    path: "/italy/rome/rome/carter-oblio",
    image: '/images/carter-oblio1.png'
  },
  {
    name: "Casa Coppelle",
    cuisine: "Mediterranean Cuisine, Classic Cuisine",
    price: "€€€",
    path: "/italy/rome/rome/casa-coppelle",
    image: '/images/casa-coppelle1.png'
  },
  {
    name: "CiPASSO",
    cuisine: "Roman, Mediterranean Cuisine",
    price: "€€",
    path: "/italy/rome/rome/cipasso",
    image: '/images/cipasso1.png'
  },
  {
    name: "Colline Emiliane",
    cuisine: "Emilian, Regional Cuisine",
    price: "€€",
    path: "/italy/rome/rome/colline-emiliane",
    image: '/images/colline-emiliane1.png'
  },
  {
    name: "Da Cesare",
    cuisine: "Classic Cuisine, Italian",
    price: "€€",
    path: "/italy/rome/rome/da-cesare",
    image: '/images/da-cesare1.png'
  },
  {
    name: "Diana's Place",
    cuisine: "Contemporary",
    price: "€€",
    path: "/italy/rome/rome/dianas-place",
    image: '/images/dianas-place1.png'
  },
  {
    name: "Dogma",
    cuisine: "Seafood",
    price: "€€",
    path: "/italy/rome/rome/dogma",
    image: '/images/dogma1.png'
  },
  {
    name: "Domenico dal 1968",
    cuisine: "Roman, Cuisine from Lazio",
    price: "€",
    path: "/italy/rome/rome/domenico-dal-1968",
    image: '/images/domenico-dal-19681.png'
  },
  {
    name: "Ego",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€",
    path: "/italy/rome/rome/ego",
    image: '/images/ego1.png'
  },
  {
    name: "Enoteca La Torre",
    cuisine: "Creative, Contemporary",
    price: "€€€€",
    path: "/italy/rome/rome/enoteca-la-torre",
    image: '/images/enoteca-la-torre1.png'
  },
  {
    name: "Gainn",
    cuisine: "Korean, Asian",
    price: "€",
    path: "/italy/rome/rome/gainn",
    image: '/images/gainn1.png'
  },
  {
    name: "Giano",
    cuisine: "Mediterranean Cuisine, Classic Cuisine",
    price: "€€€",
    path: "/italy/rome/rome/giano",
    image: '/images/giano1.png'
  },
  {
    name: "Glass Hostaria",
    cuisine: "Creative",
    price: "€€€€",
    path: "/italy/rome/rome/glass-hostaria",
    image: '/images/glass-hostaria1.png'
  },
  {
    name: "Green T.",
    cuisine: "Chinese, Asian Contemporary",
    price: "€€",
    path: "/italy/rome/rome/green-t",
    image: '/images/green-t1.png'
  },
  {
    name: "Hosteria Grappolo d'Oro",
    cuisine: "Roman, Traditional Cuisine",
    price: "€",
    path: "/italy/rome/rome/hosteria-grappolo-doro",
    image: '/images/hosteria-grappolo-doro1.png'
  },
  {
    name: "Idylio by Apreda",
    cuisine: "Italian Contemporary, Modern Cuisine",
    price: "€€€€",
    path: "/italy/rome/rome/idylio-by-apreda",
    image: '/images/idylio-by-apreda1.png'
  },
  {
    name: "Il Convivio Troiani",
    cuisine: "Contemporary, Classic Cuisine",
    price: "€€€€",
    path: "/italy/rome/rome/il-convivio-troiani",
    image: '/images/il-convivio-troiani1.png'
  },
  {
    name: "Il Marchese - Osteria Mercato Liquori",
    cuisine: "Mediterranean Cuisine, Roman",
    price: "€€",
    path: "/italy/rome/rome/il-marchese-osteria-mercato-liquori",
    image: '/images/il-marchese-osteria-mercato-liquori1.png'
  },
  {
    name: "Il Pagliaccio",
    cuisine: "Creative, Innovative",
    price: "€€€€",
    path: "/italy/rome/rome/il-pagliaccio",
    image: '/images/il-pagliaccio1.png'
  },
  {
    name: "Il Ristorante Alain Ducasse Roma",
    cuisine: "Modern Cuisine, Mediterranean Cuisine",
    price: "€€€€",
    path: "/italy/rome/rome/il-ristorante-alain-ducasse-roma",
    image: '/images/il-ristorante-alain-ducasse-roma1.png'
  },
  {
    name: "Il Ristorante - Niko Romito",
    cuisine: "Italian Contemporary, Classic Cuisine",
    price: "€€€€",
    path: "/italy/rome/rome/il-ristorante-niko-romito",
    image: '/images/il-ristorante-niko-romito1.png'
  },
  {
    name: "Il Sanlorenzo",
    cuisine: "Seafood, Mediterranean Cuisine",
    price: "€€€€",
    path: "/italy/rome/rome/il-sanlorenzo",
    image: '/images/il-sanlorenzo1.png'
  },
  {
    name: "Imàgo",
    cuisine: "Italian Contemporary",
    price: "€€€€",
    path: "/italy/rome/rome/imgo",
    image: '/images/imgo1.png'
  },
  {
    name: "INEO",
    cuisine: "International, Creative",
    price: "€€€€",
    path: "/italy/rome/rome/ineo",
    image: '/images/ineo1.png'
  },
  {
    name: "Kohaku",
    cuisine: "Japanese Contemporary, Japanese",
    price: "€€",
    path: "/italy/rome/rome/kohaku",
    image: '/images/kohaku1.png'
  },
  {
    name: "Kohaku",
    cuisine: "Japanese Contemporary, Japanese",
    price: "€€€",
    path: "/italy/rome/rome/kohaku",
    image: '/images/kohaku1.png'
  },
  {
    name: "La Ciambella",
    cuisine: "Roman, Italian",
    price: "€€€",
    path: "/italy/rome/rome/la-ciambella",
    image: '/images/la-ciambella1.png'
  },
  {
    name: "La Pergola",
    cuisine: "Mediterranean Cuisine, Contemporary",
    price: "€€€€",
    path: "/italy/rome/rome/la-pergola",
    image: '/images/la-pergola1.png'
  },
  {
    name: "La Terrazza",
    cuisine: "Modern Cuisine, Innovative",
    price: "€€€€",
    path: "/italy/rome/rome/la-terrazza",
    image: '/images/la-terrazza1.png'
  },
  {
    name: "L'Arcangelo",
    cuisine: "Roman, Farm to table",
    price: "€€",
    path: "/italy/rome/rome/larcangelo",
    image: '/images/larcangelo1.png'
  },
  {
    name: "Livello 1",
    cuisine: "Seafood, Modern Cuisine",
    price: "€€€",
    path: "/italy/rome/rome/livello-1",
    image: '/images/livello-11.png'
  },
  {
    name: "L'Osteria della Trippa",
    cuisine: "Cuisine from Lazio, Traditional Cuisine",
    price: "€",
    path: "/italy/rome/rome/losteria-della-trippa",
    image: '/images/losteria-della-trippa1.png'
  },
  {
    name: "Luciano Cucina Italiana",
    cuisine: "Creative, Italian",
    price: "€€",
    path: "/italy/rome/rome/luciano-cucina-italiana",
    image: '/images/luciano-cucina-italiana1.png'
  },
  {
    name: "Marco Martini Restaurant",
    cuisine: "Creative, Contemporary",
    price: "€€€",
    path: "/italy/rome/rome/marco-martini-restaurant",
    image: '/images/marco-martini-restaurant1.png'
  },
  {
    name: "Mater Terrae",
    cuisine: "Vegetarian, Contemporary",
    price: "€€€€",
    path: "/italy/rome/rome/mater-terrae",
    image: '/images/mater-terrae1.png'
  },
  {
    name: "Menabò Vino e Cucina",
    cuisine: "Farm to table, Modern Cuisine",
    price: "€",
    path: "/italy/rome/rome/menab-vino-e-cucina",
    image: '/images/menab-vino-e-cucina1.png'
  },
  {
    name: "Mirabelle",
    cuisine: "Italian Contemporary, Classic Cuisine",
    price: "€€€€",
    path: "/italy/rome/rome/mirabelle",
    image: '/images/mirabelle1.png'
  },
  {
    name: "Moi",
    cuisine: "Seasonal Cuisine, Contemporary",
    price: "€€",
    path: "/italy/rome/rome/moi",
    image: '/images/moi1.png'
  },
  {
    name: "Moma",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€",
    path: "/italy/rome/rome/moma",
    image: '/images/moma1.png'
  },
  {
    name: "Orma Roma",
    cuisine: "Fusion, Creative",
    price: "€€€€",
    path: "/italy/rome/rome/orma-roma",
    image: '/images/orma-roma1.png'
  },
  {
    name: "Osteria Fernanda",
    cuisine: "Creative, Contemporary",
    price: "€€€",
    path: "/italy/rome/rome/osteria-fernanda",
    image: '/images/osteria-fernanda1.png'
  },
  {
    name: "Per Me Giulio Terrinoni",
    cuisine: "Seafood, Classic Cuisine",
    price: "€€€€",
    path: "/italy/rome/rome/per-me-giulio-terrinoni",
    image: '/images/per-me-giulio-terrinoni1.png'
  },
  {
    name: "Pipero Roma",
    cuisine: "Creative, Contemporary",
    price: "€€€€",
    path: "/italy/rome/rome/pipero-roma",
    image: '/images/pipero-roma1.png'
  },
  {
    name: "Poldo e Gianna Osteria",
    cuisine: "Roman, Traditional Cuisine",
    price: "€",
    path: "/italy/rome/rome/poldo-e-gianna-osteria",
    image: '/images/poldo-e-gianna-osteria1.png'
  },
  {
    name: "Pulejo",
    cuisine: "Italian Contemporary",
    price: "€€€€",
    path: "/italy/rome/rome/pulejo",
    image: '/images/pulejo1.png'
  },
  {
    name: "Retrobottega",
    cuisine: "Italian Contemporary, Modern Cuisine",
    price: "€€€",
    path: "/italy/rome/rome/retrobottega",
    image: '/images/retrobottega1.png'
  },
  {
    name: "Romanè",
    cuisine: "Roman, Cuisine from Lazio",
    price: "€",
    path: "/italy/rome/rome/roman",
    image: '/images/roman1.png'
  },
  {
    name: "Roscioli",
    cuisine: "Roman, Italian",
    price: "€€",
    path: "/italy/rome/rome/roscioli",
    image: '/images/roscioli1.png'
  },
  {
    name: "San Baylon",
    cuisine: "Contemporary, Italian Contemporary",
    price: "€€€",
    path: "/italy/rome/rome/san-baylon",
    image: '/images/san-baylon1.png'
  },
  {
    name: "Shiroya",
    cuisine: "Japanese, Asian",
    price: "€€",
    path: "/italy/rome/rome/shiroya",
    image: '/images/shiroya1.png'
  },
  {
    name: "Sushisen",
    cuisine: "Japanese Contemporary",
    price: "€€",
    path: "/italy/rome/rome/sushisen",
    image: '/images/sushisen1.png'
  },
  {
    name: "Trattoria del Pesce",
    cuisine: "Seafood, Italian",
    price: "€€",
    path: "/italy/rome/rome/trattoria-del-pesce",
    image: '/images/trattoria-del-pesce1.png'
  },
  {
    name: "Trattoria Pennestri",
    cuisine: "Cuisine from Lazio, Seasonal Cuisine",
    price: "€€",
    path: "/italy/rome/rome/trattoria-pennestri",
    image: '/images/trattoria-pennestri1.png'
  },
  {
    name: "UMA Roma",
    cuisine: "Contemporary, Modern Cuisine",
    price: "€€",
    path: "/italy/rome/rome/uma-roma",
    image: '/images/uma-roma1.png'
  },
  {
    name: "Zia",
    cuisine: "Innovative",
    price: "€€€",
    path: "/italy/rome/rome/zia",
    image: '/images/zia1.png'
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
