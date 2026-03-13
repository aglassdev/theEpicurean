import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Brussels";

const restaurants = [
  {
    name: "Aster",
    cuisine: "Creative",
    price: "€€€€",
    path: "/belgium/brussels/brussels/aster",
    image: '/images/aster1.png'
  },
  {
    name: "Au Vieux Saint Martin",
    cuisine: "Belgian",
    price: "€€€",
    path: "/belgium/brussels/brussels/au-vieux-saint-martin",
    image: '/images/au-vieux-saint-martin1.png'
  },
  {
    name: "Aux Armes de Bruxelles",
    cuisine: "Belgian, Classic Cuisine",
    price: "€€",
    path: "/belgium/brussels/brussels/aux-armes-de-bruxelles",
    image: '/images/aux-armes-de-bruxelles1.png'
  },
  {
    name: "Barge",
    cuisine: "Organic, Farm to table",
    price: "€€€",
    path: "/belgium/brussels/brussels/barge",
    image: '/images/barge1.png'
  },
  {
    name: "Belga Queen",
    cuisine: "Belgian, Modern Cuisine",
    price: "€€€",
    path: "/belgium/brussels/brussels/belga-queen",
    image: '/images/belga-queen1.png'
  },
  {
    name: "Bozar Restaurant",
    cuisine: "Modern French, Creative",
    price: "€€€€",
    path: "/belgium/brussels/brussels/bozar-restaurant",
    image: '/images/bozar-restaurant1.png'
  },
  {
    name: "Brasserie de la Patinoire",
    cuisine: "Classic French",
    price: "€€",
    path: "/belgium/brussels/brussels/brasserie-de-la-patinoire",
    image: '/images/brasserie-de-la-patinoire1.png'
  },
  {
    name: "Chaga",
    cuisine: "French Contemporary",
    price: "€€€€",
    path: "/belgium/brussels/brussels/chaga",
    image: '/images/chaga1.png'
  },
  {
    name: "Ciao",
    cuisine: "Italian",
    price: "€€€",
    path: "/belgium/brussels/brussels/ciao",
    image: '/images/ciao1.png'
  },
  {
    name: "Comme chez Soi",
    cuisine: "Classic Cuisine",
    price: "€€€€",
    path: "/belgium/brussels/brussels/comme-chez-soi",
    image: '/images/comme-chez-soi1.png'
  },
  {
    name: "Correspondance",
    cuisine: "Asian Contemporary",
    price: "€€",
    path: "/belgium/brussels/brussels/correspondance",
    image: '/images/correspondance1.png'
  },
  {
    name: "De l'Ogenblik",
    cuisine: "Classic Cuisine, Belgian",
    price: "€€",
    path: "/belgium/brussels/brussels/de-logenblik",
    image: '/images/de-logenblik1.png'
  },
  {
    name: "Eliane",
    cuisine: "Creative",
    price: "€€€€",
    path: "/belgium/brussels/brussels/eliane",
    image: '/images/eliane1.png'
  },
  {
    name: "Gioia",
    cuisine: "Italian",
    price: "€€",
    path: "/belgium/brussels/brussels/gioia",
    image: '/images/gioia1.png'
  },
  {
    name: "Gus",
    cuisine: "Seasonal Cuisine, Belgian",
    price: "€€",
    path: "/belgium/brussels/brussels/gus",
    image: '/images/gus1.png'
  },
  {
    name: "Henri",
    cuisine: "Modern French",
    price: "€€€",
    path: "/belgium/brussels/brussels/henri",
    image: '/images/henri1.png'
  },
  {
    name: "Hispania",
    cuisine: "Spanish",
    price: "€€€",
    path: "/belgium/brussels/brussels/hispania",
    image: '/images/hispania1.png'
  },
  {
    name: "Jayu",
    cuisine: "Korean Contemporary",
    price: "€€€€",
    path: "/belgium/brussels/brussels/jayu",
    image: '/images/jayu1.png'
  },
  {
    name: "JB",
    cuisine: "Traditional Cuisine, Classic French",
    price: "€€",
    path: "/belgium/brussels/brussels/jb",
    image: '/images/jb1.png'
  },
  {
    name: "Kline",
    cuisine: "Modern Cuisine, Seasonal Cuisine",
    price: "€€",
    path: "/belgium/brussels/brussels/kline",
    image: '/images/kline1.png'
  },
  {
    name: "La Belle Maraîchère",
    cuisine: "Seafood, Classic Cuisine",
    price: "€€€",
    path: "/belgium/brussels/brussels/la-belle-marachre",
    image: '/images/la-belle-marachre1.png'
  },
  {
    name: "La Truffe Noire",
    cuisine: "Classic Cuisine, Mediterranean Cuisine",
    price: "€€€€",
    path: "/belgium/brussels/brussels/la-truffe-noire",
    image: '/images/la-truffe-noire1.png'
  },
  {
    name: "La Villa in the Sky",
    cuisine: "Creative, Organic",
    price: "€€€€",
    path: "/belgium/brussels/brussels/la-villa-in-the-sky",
    image: '/images/la-villa-in-the-sky1.png'
  },
  {
    name: "La Villa Lorraine by Yves Mattagne",
    cuisine: "Modern Cuisine, Classic Cuisine",
    price: "€€€€",
    path: "/belgium/brussels/brussels/la-villa-lorraine-by-yves-mattagne",
    image: '/images/la-villa-lorraine-by-yves-mattagne1.png'
  },
  {
    name: "L'Écailler du Palais Royal",
    cuisine: "Seafood",
    price: "€€€",
    path: "/belgium/brussels/brussels/lcailler-du-palais-royal",
    image: '/images/lcailler-du-palais-royal1.png'
  },
  {
    name: "le Petit bon bon",
    cuisine: "Belgian, French",
    price: "€€€",
    path: "/belgium/brussels/brussels/le-petit-bon-bon",
    image: '/images/le-petit-bon-bon1.png'
  },
  {
    name: "Le Vismet",
    cuisine: "Seafood",
    price: "€€€",
    path: "/belgium/brussels/brussels/le-vismet",
    image: '/images/le-vismet1.png'
  },
  {
    name: "Les Brigittines Aux marches de la Chapelle",
    cuisine: "Traditional Cuisine, Belgian",
    price: "€€€",
    path: "/belgium/brussels/brussels/les-brigittines-aux-marches-de-la-chapelle",
    image: '/images/les-brigittines-aux-marches-de-la-chapelle1.png'
  },
  {
    name: "Les Petits Oignons",
    cuisine: "Classic Cuisine, Country cooking",
    price: "€€",
    path: "/belgium/brussels/brussels/les-petits-oignons",
    image: '/images/les-petits-oignons1.png'
  },
  {
    name: "Lily's",
    cuisine: "Contemporary",
    price: "€€€",
    path: "/belgium/brussels/brussels/lilys",
    image: '/images/lilys1.png'
  },
  {
    name: "Lola",
    cuisine: "Seasonal Cuisine, French",
    price: "€€€",
    path: "/belgium/brussels/brussels/lola",
    image: '/images/lola1.png'
  },
  {
    name: "Osteria Romana",
    cuisine: "Roman",
    price: "€€€",
    path: "/belgium/brussels/brussels/osteria-romana",
    image: '/images/osteria-romana1.png'
  },
  {
    name: "Palais Royal by David Martin",
    cuisine: "Modern French",
    price: "€€€€",
    path: "/belgium/brussels/brussels/palais-royal-by-david-martin",
    image: '/images/palais-royal-by-david-martin1.png'
  },
  {
    name: "Samouraï",
    cuisine: "Japanese",
    price: "€€€",
    path: "/belgium/brussels/brussels/samoura",
    image: '/images/samoura1.png'
  },
  {
    name: "Selecto",
    cuisine: "Modern French",
    price: "€€",
    path: "/belgium/brussels/brussels/selecto",
    image: '/images/selecto1.png'
  },
  {
    name: "senzanome",
    cuisine: "Italian, Sicilian",
    price: "€€€€",
    path: "/belgium/brussels/brussels/senzanome",
    image: '/images/senzanome1.png'
  },
  {
    name: "Strofilia",
    cuisine: "Greek, Mediterranean Cuisine",
    price: "€€",
    path: "/belgium/brussels/brussels/strofilia",
    image: '/images/strofilia1.png'
  },
  {
    name: "Taverne du Passage",
    cuisine: "Belgian, Classic Cuisine",
    price: "€€€",
    path: "/belgium/brussels/brussels/taverne-du-passage",
    image: '/images/taverne-du-passage1.png'
  },
  {
    name: "Umā",
    cuisine: "Fusion, International",
    price: "€€",
    path: "/belgium/brussels/brussels/um",
    image: '/images/um1.png'
  },
  {
    name: "Vismet",
    cuisine: "Seafood",
    price: "€€€",
    path: "/belgium/brussels/brussels/vismet",
    image: '/images/vismet1.png'
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
