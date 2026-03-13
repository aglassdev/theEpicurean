import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Nantes";

const restaurants = [
  {
    name: "Bairoz",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/nantes/nantes/bairoz",
    image: '/images/bairoz1.png'
  },
  {
    name: "Freia",
    cuisine: "Creative",
    price: "€€€",
    path: "/france/nantes/nantes/freia",
    image: '/images/freia1.png'
  },
  {
    name: "ICI",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/nantes/nantes/ici",
    image: '/images/ici1.png'
  },
  {
    name: "La Mandale",
    cuisine: "Farm to table",
    price: "€",
    path: "/france/nantes/nantes/la-mandale",
    image: '/images/la-mandale1.png'
  },
  {
    name: "L'Abélia",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/nantes/nantes/lablia",
    image: '/images/lablia1.png'
  },
  {
    name: "Lamaccotte",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/nantes/nantes/lamaccotte",
    image: '/images/lamaccotte1.png'
  },
  {
    name: "L'Atlantide 1874 - Maison Guého",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/nantes/nantes/latlantide-1874-maison-guho",
    image: '/images/latlantide-1874-maison-guho1.png'
  },
  {
    name: "Le Bouchon",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/nantes/nantes/le-bouchon",
    image: '/images/le-bouchon1.png'
  },
  {
    name: "Le Lion et l’Agneau",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/nantes/nantes/le-lion-et-lagneau",
    image: '/images/le-lion-et-lagneau1.png'
  },
  {
    name: "Le Manoir de la Régate",
    cuisine: "Modern Cuisine, Creative",
    price: "€€€€",
    path: "/france/nantes/nantes/le-manoir-de-la-rgate",
    image: '/images/le-manoir-de-la-rgate1.png'
  },
  {
    name: "Les Bouteilles",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/nantes/nantes/les-bouteilles",
    image: '/images/les-bouteilles1.png'
  },
  {
    name: "Les Cadets",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/nantes/nantes/les-cadets",
    image: '/images/les-cadets1.png'
  },
  {
    name: "Les Chants d'Avril",
    cuisine: "Farm to table",
    price: "€€",
    path: "/france/nantes/nantes/les-chants-davril",
    image: '/images/les-chants-davril1.png'
  },
  {
    name: "L'Océanide",
    cuisine: "Seafood, Traditional Cuisine",
    price: "€€",
    path: "/france/nantes/nantes/locanide",
    image: '/images/locanide1.png'
  },
  {
    name: "Lulu le Bistrot",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/nantes/nantes/lulu-le-bistrot",
    image: '/images/lulu-le-bistrot1.png'
  },
  {
    name: "LuluRouget",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/nantes/nantes/lulurouget",
    image: '/images/lulurouget1.png'
  },
  {
    name: "Maison Bagarre",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/nantes/nantes/maison-bagarre",
    image: '/images/maison-bagarre1.png'
  },
  {
    name: "Meraki",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/nantes/nantes/meraki",
    image: '/images/meraki1.png'
  },
  {
    name: "OBBO",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/nantes/nantes/obbo",
    image: '/images/obbo1.png'
  },
  {
    name: "Omija",
    cuisine: "Creative",
    price: "€€€",
    path: "/france/nantes/nantes/omija",
    image: '/images/omija1.png'
  },
  {
    name: "Pickles",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/nantes/nantes/pickles",
    image: '/images/pickles1.png'
  },
  {
    name: "P'tite Pomme",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/nantes/nantes/ptite-pomme",
    image: '/images/ptite-pomme1.png'
  },
  {
    name: "Roza",
    cuisine: "Modern Cuisine, Creative",
    price: "€€€",
    path: "/france/nantes/nantes/roza",
    image: '/images/roza1.png'
  },
  {
    name: "Sain",
    cuisine: "Modern Cuisine, Farm to table",
    price: "€",
    path: "/france/nantes/nantes/sain",
    image: '/images/sain1.png'
  },
  {
    name: "Song, Saveurs & Sens",
    cuisine: "Asian Contemporary",
    price: "€€",
    path: "/france/nantes/nantes/song-saveurs-sens",
    image: '/images/song-saveurs-sens1.png'
  },
  {
    name: "Sépia",
    cuisine: "Creative",
    price: "€€€",
    path: "/france/nantes/nantes/spia",
    image: '/images/spia1.png'
  },
  {
    name: "Thelma",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/nantes/nantes/thelma",
    image: '/images/thelma1.png'
  },
  {
    name: "Vacarme",
    cuisine: "Contemporary",
    price: "€€",
    path: "/france/nantes/nantes/vacarme",
    image: '/images/vacarme1.png'
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
