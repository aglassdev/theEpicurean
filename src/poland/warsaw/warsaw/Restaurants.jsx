import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Warsaw";

const restaurants = [
  {
    name: "alewino",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/poland/warsaw/warsaw/alewino",
    image: '/images/alewino1.png'
  },
  {
    name: "Bez Gwiazdek",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/poland/warsaw/warsaw/bez-gwiazdek",
    image: '/images/bez-gwiazdek1.png'
  },
  {
    name: "Butchery & Wine",
    cuisine: "Meats and Grills, Traditional Cuisine",
    price: "€€",
    path: "/poland/warsaw/warsaw/butchery-wine",
    image: '/images/butchery-wine1.png'
  },
  {
    name: "Ceviche Bar",
    cuisine: "South American",
    price: "€€",
    path: "/poland/warsaw/warsaw/ceviche-bar",
    image: '/images/ceviche-bar1.png'
  },
  {
    name: "Dyletanci",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/poland/warsaw/warsaw/dyletanci",
    image: '/images/dyletanci1.png'
  },
  {
    name: "Epoka",
    cuisine: "Innovative",
    price: "€€€€",
    path: "/poland/warsaw/warsaw/epoka",
    image: '/images/epoka1.png'
  },
  {
    name: "Europejski Grill",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/poland/warsaw/warsaw/europejski-grill",
    image: '/images/europejski-grill1.png'
  },
  {
    name: "hub.praga",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/poland/warsaw/warsaw/hubpraga",
    image: '/images/hubpraga1.png'
  },
  {
    name: "Kieliszki na Próżnej",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/poland/warsaw/warsaw/kieliszki-na-prnej",
    image: '/images/kieliszki-na-prnej1.png'
  },
  {
    name: "Koneser Grill",
    cuisine: "Meats and Grills",
    price: "€€",
    path: "/poland/warsaw/warsaw/koneser-grill",
    image: '/images/koneser-grill1.png'
  },
  {
    name: "kontakt",
    cuisine: "Mediterranean Cuisine, Contemporary",
    price: "€",
    path: "/poland/warsaw/warsaw/kontakt",
    image: '/images/kontakt1.png'
  },
  {
    name: "La Luce",
    cuisine: "Italian",
    price: "€€",
    path: "/poland/warsaw/warsaw/la-luce",
    image: '/images/la-luce1.png'
  },
  {
    name: "Le Braci",
    cuisine: "Italian",
    price: "€€",
    path: "/poland/warsaw/warsaw/le-braci",
    image: '/images/le-braci1.png'
  },
  {
    name: "Muzealna",
    cuisine: "Traditional Cuisine",
    price: "€",
    path: "/poland/warsaw/warsaw/muzealna",
    image: '/images/muzealna1.png'
  },
  {
    name: "Nolita",
    cuisine: "Modern Cuisine, Asian Influences",
    price: "€€€€",
    path: "/poland/warsaw/warsaw/nolita",
    image: '/images/nolita1.png'
  },
  {
    name: "Noriko Omakase",
    cuisine: "Japanese",
    price: "€€€€",
    path: "/poland/warsaw/warsaw/noriko-omakase",
    image: '/images/noriko-omakase1.png'
  },
  {
    name: "NUTA",
    cuisine: "Creative",
    price: "€€€€",
    path: "/poland/warsaw/warsaw/nuta",
    image: '/images/nuta1.png'
  },
  {
    name: "Źródło",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/poland/warsaw/warsaw/rdo",
    image: '/images/rdo1.png'
  },
  {
    name: "Rozbrat 20",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/poland/warsaw/warsaw/rozbrat-20",
    image: '/images/rozbrat-201.png'
  },
  {
    name: "Rusiko",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/poland/warsaw/warsaw/rusiko",
    image: '/images/rusiko1.png'
  },
  {
    name: "The Farm",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/poland/warsaw/warsaw/the-farm",
    image: '/images/the-farm1.png'
  },
  {
    name: "Tuna",
    cuisine: "Seafood",
    price: "€€€",
    path: "/poland/warsaw/warsaw/tuna",
    image: '/images/tuna1.png'
  },
  {
    name: "Wyraj",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/poland/warsaw/warsaw/wyraj",
    image: '/images/wyraj1.png'
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
