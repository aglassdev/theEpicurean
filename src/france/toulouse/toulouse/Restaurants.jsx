import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Toulouse";

const restaurants = [
  {
    name: "Acte 2 Yannick Delpech",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/toulouse/toulouse/acte-2-yannick-delpech",
    image: '/images/acte-2-yannick-delpech1.png'
  },
  {
    name: "Agapes",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/toulouse/toulouse/agapes",
    image: '/images/agapes1.png'
  },
  {
    name: "Au Pois Gourmand",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/toulouse/toulouse/au-pois-gourmand",
    image: '/images/au-pois-gourmand1.png'
  },
  {
    name: "Bistrot August",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/toulouse/toulouse/bistrot-august",
    image: '/images/bistrot-august1.png'
  },
  {
    name: "Cartouches",
    cuisine: "Farm to table",
    price: "€€",
    path: "/france/toulouse/toulouse/cartouches",
    image: '/images/cartouches1.png'
  },
  {
    name: "Cécile",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/toulouse/toulouse/ccile",
    image: '/images/ccile1.png'
  },
  {
    name: "Chez Loustic",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/toulouse/toulouse/chez-loustic",
    image: '/images/chez-loustic1.png'
  },
  {
    name: "Genty Magre",
    cuisine: "Classic Cuisine",
    price: "€€",
    path: "/france/toulouse/toulouse/genty-magre",
    image: '/images/genty-magre1.png'
  },
  {
    name: "Gram's",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/toulouse/toulouse/grams",
    image: '/images/grams1.png'
  },
  {
    name: "Hito",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/toulouse/toulouse/hito",
    image: '/images/hito1.png'
  },
  {
    name: "Hortùs",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/toulouse/toulouse/horts",
    image: '/images/horts1.png'
  },
  {
    name: "L'Air de Famille",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/toulouse/toulouse/lair-de-famille",
    image: '/images/lair-de-famille1.png'
  },
  {
    name: "L'alouette",
    cuisine: "Farm to table",
    price: "€€",
    path: "/france/toulouse/toulouse/lalouette",
    image: '/images/lalouette1.png'
  },
  {
    name: "L'Écorce",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/toulouse/toulouse/lcorce",
    image: '/images/lcorce1.png'
  },
  {
    name: "Le Cénacle",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/toulouse/toulouse/le-cnacle",
    image: '/images/le-cnacle1.png'
  },
  {
    name: "Le Servant",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/toulouse/toulouse/le-servant",
    image: '/images/le-servant1.png'
  },
  {
    name: "Les Planeurs",
    cuisine: "Farm to table",
    price: "€€",
    path: "/france/toulouse/toulouse/les-planeurs",
    image: '/images/les-planeurs1.png'
  },
  {
    name: "Les Sales Gosses",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/toulouse/toulouse/les-sales-gosses",
    image: '/images/les-sales-gosses1.png'
  },
  {
    name: "Les Têtes d'Ail",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/toulouse/toulouse/les-ttes-dail",
    image: '/images/les-ttes-dail1.png'
  },
  {
    name: "Les Volets Rouges",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/toulouse/toulouse/les-volets-rouges",
    image: '/images/les-volets-rouges1.png'
  },
  {
    name: "L'Hippi'curien",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/toulouse/toulouse/lhippicurien",
    image: '/images/lhippicurien1.png'
  },
  {
    name: "Mantesino",
    cuisine: "Italian, Campanian",
    price: "€",
    path: "/france/toulouse/toulouse/mantesino",
    image: '/images/mantesino1.png'
  },
  {
    name: "Mas de Dardagna",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/toulouse/toulouse/mas-de-dardagna",
    image: '/images/mas-de-dardagna1.png'
  },
  {
    name: "Michel Sarran",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/toulouse/toulouse/michel-sarran",
    image: '/images/michel-sarran1.png'
  },
  {
    name: "Émile",
    cuisine: "Country cooking",
    price: "€€",
    path: "/france/toulouse/toulouse/mile",
    image: '/images/mile1.png'
  },
  {
    name: "Py-r",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/toulouse/toulouse/py-r",
    image: '/images/py-r1.png'
  },
  {
    name: "SEPT",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/toulouse/toulouse/sept",
    image: '/images/sept1.png'
  },
  {
    name: "Solides",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/toulouse/toulouse/solides",
    image: '/images/solides1.png'
  },
  {
    name: "Stéphane Tournié - Les Jardins de l'Opéra",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/toulouse/toulouse/stphane-tourni-les-jardins-de-lopra",
    image: '/images/stphane-tourni-les-jardins-de-lopra1.png'
  },
  {
    name: "Une Table à Deux",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/toulouse/toulouse/une-table-deux",
    image: '/images/une-table-deux1.png'
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
