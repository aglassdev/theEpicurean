import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Monaco";

const restaurants = [
  {
    name: "Beefbar",
    cuisine: "Meats and Grills",
    price: "€€€",
    path: "/france/monaco/monaco/beefbar",
    image: '/images/beefbar1.png'
  },
  {
    name: "Blue Bay Marcel Ravin",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/monaco/monaco/blue-bay-marcel-ravin",
    image: '/images/blue-bay-marcel-ravin1.png'
  },
  {
    name: "Café de Paris",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/france/monaco/monaco/caf-de-paris",
    image: '/images/caf-de-paris1.png'
  },
  {
    name: "Elsa",
    cuisine: "Mediterranean Cuisine",
    price: "€€€€",
    path: "/france/monaco/monaco/elsa",
    image: '/images/elsa1.png'
  },
  {
    name: "Em Sherif",
    cuisine: "Lebanese",
    price: "€€€€",
    path: "/france/monaco/monaco/em-sherif",
    image: '/images/em-sherif1.png'
  },
  {
    name: "La Table d'Antonio Salvatore au Rampoldi",
    cuisine: "Italian, Creative",
    price: "€€€€",
    path: "/france/monaco/monaco/la-table-dantonio-salvatore-au-rampoldi",
    image: '/images/la-table-dantonio-salvatore-au-rampoldi1.png'
  },
  {
    name: "La Table d'Élise",
    cuisine: "Provençal",
    price: "€€€",
    path: "/france/monaco/monaco/la-table-dlise",
    image: '/images/la-table-dlise1.png'
  },
  {
    name: "L'Abysse Monte-Carlo",
    cuisine: "Japanese",
    price: "€€€€",
    path: "/france/monaco/monaco/labysse-monte-carlo",
    image: '/images/labysse-monte-carlo1.png'
  },
  {
    name: "Le Grill",
    cuisine: "Classic Cuisine",
    price: "€€€€",
    path: "/france/monaco/monaco/le-grill",
    image: '/images/le-grill1.png'
  },
  {
    name: "Le Louis XV - Alain Ducasse à l'Hôtel de Paris",
    cuisine: "Mediterranean Cuisine, Modern Cuisine",
    price: "€€€€",
    path: "/france/monaco/monaco/le-louis-xv-alain-ducasse-lhtel-de-paris",
    image: '/images/le-louis-xv-alain-ducasse-lhtel-de-paris1.png'
  },
  {
    name: "Les Ambassadeurs by Christophe Cussac",
    cuisine: "Mediterranean Cuisine",
    price: "€€€€",
    path: "/france/monaco/monaco/les-ambassadeurs-by-christophe-cussac",
    image: '/images/les-ambassadeurs-by-christophe-cussac1.png'
  },
  {
    name: "Marius",
    cuisine: "Provençal",
    price: "€€€",
    path: "/france/monaco/monaco/marius",
    image: '/images/marius1.png'
  },
  {
    name: "Pavyllon, un restaurant de Yannick Alléno, Monte-Carlo",
    cuisine: "Modern Cuisine, Creative",
    price: "€€€€",
    path: "/france/monaco/monaco/pavyllon-un-restaurant-de-yannick-allno-monte-carlo",
    image: '/images/pavyllon-un-restaurant-de-yannick-allno-monte-carlo1.png'
  },
  {
    name: "Song Qi",
    cuisine: "Asian, Chinese",
    price: "€€€",
    path: "/france/monaco/monaco/song-qi",
    image: '/images/song-qi1.png'
  },
  {
    name: "Yoshi",
    cuisine: "Japanese",
    price: "€€€€",
    path: "/france/monaco/monaco/yoshi",
    image: '/images/yoshi1.png'
  },
  {
    name: "Zeffirino",
    cuisine: "Italian",
    price: "€€€",
    path: "/france/monaco/monaco/zeffirino",
    image: '/images/zeffirino1.png'
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
