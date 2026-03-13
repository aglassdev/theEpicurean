import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Wrocaw";

const restaurants = [
  {
    name: "Acquario",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/poland/wrocaw/wrocaw/acquario",
    image: '/images/acquario1.png'
  },
  {
    name: "BABA",
    cuisine: "Modern Cuisine, Polish",
    price: "€€",
    path: "/poland/wrocaw/wrocaw/baba",
    image: '/images/baba1.png'
  },
  {
    name: "CAMPO Modern Grill",
    cuisine: "Meats and Grills",
    price: "€€€",
    path: "/poland/wrocaw/wrocaw/campo-modern-grill",
    image: '/images/campo-modern-grill1.png'
  },
  {
    name: "dinette",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/poland/wrocaw/wrocaw/dinette",
    image: '/images/dinette1.png'
  },
  {
    name: "Gustaw",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/poland/wrocaw/wrocaw/gustaw",
    image: '/images/gustaw1.png'
  },
  {
    name: "IDA kuchnia i wino",
    cuisine: "Regional Cuisine",
    price: "€",
    path: "/poland/wrocaw/wrocaw/ida-kuchnia-i-wino",
    image: '/images/ida-kuchnia-i-wino1.png'
  },
  {
    name: "Korill180",
    cuisine: "Korean",
    price: "€€€",
    path: "/poland/wrocaw/wrocaw/korill180",
    image: '/images/korill1801.png'
  },
  {
    name: "La Maddalena",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/poland/wrocaw/wrocaw/la-maddalena",
    image: '/images/la-maddalena1.png'
  },
  {
    name: "Lwia Brama²",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/poland/wrocaw/wrocaw/lwia-brama",
    image: '/images/lwia-brama1.png'
  },
  {
    name: "Martim",
    cuisine: "Portuguese, Seafood",
    price: "€€",
    path: "/poland/wrocaw/wrocaw/martim",
    image: '/images/martim1.png'
  },
  {
    name: "Mercado Tapas Bistro",
    cuisine: "Spanish",
    price: "€",
    path: "/poland/wrocaw/wrocaw/mercado-tapas-bistro",
    image: '/images/mercado-tapas-bistro1.png'
  },
  {
    name: "Między Mostami",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/poland/wrocaw/wrocaw/midzy-mostami",
    image: '/images/midzy-mostami1.png'
  },
  {
    name: "Młoda Polska",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/poland/wrocaw/wrocaw/moda-polska",
    image: '/images/moda-polska1.png'
  },
  {
    name: "Monopol",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/poland/wrocaw/wrocaw/monopol",
    image: '/images/monopol1.png'
  },
  {
    name: "Most",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/poland/wrocaw/wrocaw/most",
    image: '/images/most1.png'
  },
  {
    name: "Nafta Neo Bistro",
    cuisine: "Contemporary, Polish",
    price: "€€",
    path: "/poland/wrocaw/wrocaw/nafta-neo-bistro",
    image: '/images/nafta-neo-bistro1.png'
  },
  {
    name: "OK Wine Bar",
    cuisine: "Seafood",
    price: "€€€",
    path: "/poland/wrocaw/wrocaw/ok-wine-bar",
    image: '/images/ok-wine-bar1.png'
  },
  {
    name: "OKRestauracja",
    cuisine: "Seafood",
    price: "€€€",
    path: "/poland/wrocaw/wrocaw/okrestauracja",
    image: '/images/okrestauracja1.png'
  },
  {
    name: "Przystań & Marina",
    cuisine: "Mediterranean Cuisine",
    price: "€€",
    path: "/poland/wrocaw/wrocaw/przysta-marina",
    image: '/images/przysta-marina1.png'
  },
  {
    name: "Tarasowa",
    cuisine: "Modern Cuisine, Contemporary",
    price: "€€",
    path: "/poland/wrocaw/wrocaw/tarasowa",
    image: '/images/tarasowa1.png'
  },
  {
    name: "Warsztat - Food & Garden",
    cuisine: "Traditional Cuisine, Regional Cuisine",
    price: "€€",
    path: "/poland/wrocaw/wrocaw/warsztat-food-garden",
    image: '/images/warsztat-food-garden1.png'
  },
  {
    name: "Wierzbowa 15",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/poland/wrocaw/wrocaw/wierzbowa-15",
    image: '/images/wierzbowa-151.png'
  },
  {
    name: "Wrocławska",
    cuisine: "Regional Cuisine",
    price: "€",
    path: "/poland/wrocaw/wrocaw/wrocawska",
    image: '/images/wrocawska1.png'
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
