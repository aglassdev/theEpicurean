import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Riga";

const restaurants = [
  {
    name: "3 Chefs",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/latvia/riga/riga/3-chefs",
    image: '/images/3-chefs1.png'
  },
  {
    name: "B7",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/latvia/riga/riga/b7",
    image: '/images/b71.png'
  },
  {
    name: "BABO",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/latvia/riga/riga/babo",
    image: '/images/babo1.png'
  },
  {
    name: "Barents",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/latvia/riga/riga/barents",
    image: '/images/barents1.png'
  },
  {
    name: "Barents Cocktail & Seafood Bar",
    cuisine: "Seafood",
    price: "€€",
    path: "/latvia/riga/riga/barents-cocktail-seafood-bar",
    image: '/images/barents-cocktail-seafood-bar1.png'
  },
  {
    name: "Chef's Corner Restaurant",
    cuisine: "Modern Cuisine, Meats and Grills",
    price: "€€€",
    path: "/latvia/riga/riga/chefs-corner-restaurant",
    image: '/images/chefs-corner-restaurant1.png'
  },
  {
    name: "COD",
    cuisine: "Japanese Contemporary",
    price: "€€",
    path: "/latvia/riga/riga/cod",
    image: '/images/cod1.png'
  },
  {
    name: "Entresol",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/latvia/riga/riga/entresol",
    image: '/images/entresol1.png'
  },
  {
    name: "Ferma",
    cuisine: "International",
    price: "€€€",
    path: "/latvia/riga/riga/ferma",
    image: '/images/ferma1.png'
  },
  {
    name: "JOHN",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/latvia/riga/riga/john",
    image: '/images/john1.png'
  },
  {
    name: "JOHN Chef's Hall",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/latvia/riga/riga/john-chefs-hall",
    image: '/images/john-chefs-hall1.png'
  },
  {
    name: "Le Dome",
    cuisine: "French",
    price: "€€€",
    path: "/latvia/riga/riga/le-dome",
    image: '/images/le-dome1.png'
  },
  {
    name: "LOWINE",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/latvia/riga/riga/lowine",
    image: '/images/lowine1.png'
  },
  {
    name: "Max Cekot Kitchen",
    cuisine: "Creative",
    price: "€€€€",
    path: "/latvia/riga/riga/max-cekot-kitchen",
    image: '/images/max-cekot-kitchen1.png'
  },
  {
    name: "Milda",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/latvia/riga/riga/milda",
    image: '/images/milda1.png'
  },
  {
    name: "Māsa",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/latvia/riga/riga/msa",
    image: '/images/msa1.png'
  },
  {
    name: "Neiburgs",
    cuisine: "Traditional Cuisine, Mediterranean Cuisine",
    price: "€€",
    path: "/latvia/riga/riga/neiburgs",
    image: '/images/neiburgs1.png'
  },
  {
    name: "Riviera",
    cuisine: "Mediterranean Cuisine",
    price: "€€",
    path: "/latvia/riga/riga/riviera",
    image: '/images/riviera1.png'
  },
  {
    name: "Seasons",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/latvia/riga/riga/seasons",
    image: '/images/seasons1.png'
  },
  {
    name: "Shōyu",
    cuisine: "Japanese, Ramen",
    price: "€€",
    path: "/latvia/riga/riga/shyu",
    image: '/images/shyu1.png'
  },
  {
    name: "SMØR Bistro",
    cuisine: "French, Scandinavian",
    price: "€€",
    path: "/latvia/riga/riga/smr-bistro",
    image: '/images/smr-bistro1.png'
  },
  {
    name: "Snatch",
    cuisine: "Italian",
    price: "€€",
    path: "/latvia/riga/riga/snatch",
    image: '/images/snatch1.png'
  },
  {
    name: "Stage22",
    cuisine: "Japanese",
    price: "€€",
    path: "/latvia/riga/riga/stage22",
    image: '/images/stage221.png'
  },
  {
    name: "Tails",
    cuisine: "Seafood",
    price: "€€",
    path: "/latvia/riga/riga/tails",
    image: '/images/tails1.png'
  },
  {
    name: "TAURO",
    cuisine: "Meats and Grills",
    price: "€€€€",
    path: "/latvia/riga/riga/tauro",
    image: '/images/tauro1.png'
  },
  {
    name: "The Catch",
    cuisine: "Izakaya",
    price: "€€",
    path: "/latvia/riga/riga/the-catch",
    image: '/images/the-catch1.png'
  },
  {
    name: "Whitehouse",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/latvia/riga/riga/whitehouse",
    image: '/images/whitehouse1.png'
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
