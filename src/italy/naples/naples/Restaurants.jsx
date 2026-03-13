import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Naples";

const restaurants = [
  {
    name: "177 toledo",
    cuisine: "Italian Contemporary, Creative",
    price: "€€€€",
    path: "/italy/naples/naples/177-toledo",
    image: '/images/177-toledo1.png'
  },
  {
    name: "3.0 Ciro Cascella",
    cuisine: "Pizza",
    price: "€",
    path: "/italy/naples/naples/30-ciro-cascella",
    image: '/images/30-ciro-cascella1.png'
  },
  {
    name: "50 Kalò",
    cuisine: "Pizza",
    price: "€",
    path: "/italy/naples/naples/50-kal",
    image: '/images/50-kal1.png'
  },
  {
    name: "ARIA",
    cuisine: "Contemporary, Modern Cuisine",
    price: "€€€€",
    path: "/italy/naples/naples/aria",
    image: '/images/aria1.png'
  },
  {
    name: "Caruso Roof Garden",
    cuisine: "Campanian, Italian Contemporary",
    price: "€€€€",
    path: "/italy/naples/naples/caruso-roof-garden",
    image: '/images/caruso-roof-garden1.png'
  },
  {
    name: "Da Attilio",
    cuisine: "Pizza",
    price: "€",
    path: "/italy/naples/naples/da-attilio",
    image: '/images/da-attilio1.png'
  },
  {
    name: "Da Concettina ai Tre Santi",
    cuisine: "Pizza",
    price: "€",
    path: "/italy/naples/naples/da-concettina-ai-tre-santi",
    image: '/images/da-concettina-ai-tre-santi1.png'
  },
  {
    name: "Deschevaliers",
    cuisine: "Mediterranean Cuisine, Creative",
    price: "€€€",
    path: "/italy/naples/naples/deschevaliers",
    image: '/images/deschevaliers1.png'
  },
  {
    name: "Di Martino Sea Front Pasta Bar",
    cuisine: "Italian",
    price: "€€",
    path: "/italy/naples/naples/di-martino-sea-front-pasta-bar",
    image: '/images/di-martino-sea-front-pasta-bar1.png'
  },
  {
    name: "Essencia Restaurant",
    cuisine: "Mediterranean Cuisine, Fusion",
    price: "€€€",
    path: "/italy/naples/naples/essencia-restaurant",
    image: '/images/essencia-restaurant1.png'
  },
  {
    name: "George Restaurant",
    cuisine: "Contemporary",
    price: "€€€€",
    path: "/italy/naples/naples/george-restaurant",
    image: '/images/george-restaurant1.png'
  },
  {
    name: "Gino Sorbillo",
    cuisine: "Pizza",
    price: "€",
    path: "/italy/naples/naples/gino-sorbillo",
    image: '/images/gino-sorbillo1.png'
  },
  {
    name: "Il Ristorante Alain Ducasse Napoli",
    cuisine: "Creative, Mediterranean Cuisine",
    price: "€€€€",
    path: "/italy/naples/naples/il-ristorante-alain-ducasse-napoli",
    image: '/images/il-ristorante-alain-ducasse-napoli1.png'
  },
  {
    name: "J Contemporary Japanese Restaurant",
    cuisine: "Japanese",
    price: "€€€",
    path: "/italy/naples/naples/j-contemporary-japanese-restaurant",
    image: '/images/j-contemporary-japanese-restaurant1.png'
  },
  {
    name: "Januarius",
    cuisine: "Campanian",
    price: "€€",
    path: "/italy/naples/naples/januarius",
    image: '/images/januarius1.png'
  },
  {
    name: "Joca",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/italy/naples/naples/joca",
    image: '/images/joca1.png'
  },
  {
    name: "La Locanda Gesù Vecchio",
    cuisine: "Campanian, Traditional Cuisine",
    price: "€",
    path: "/italy/naples/naples/la-locanda-ges-vecchio",
    image: '/images/la-locanda-ges-vecchio1.png'
  },
  {
    name: "La Notizia 53",
    cuisine: "Pizza",
    price: "€",
    path: "/italy/naples/naples/la-notizia-53",
    image: '/images/la-notizia-531.png'
  },
  {
    name: "L'antica Pizzeria da Michele",
    cuisine: "Pizza",
    price: "€",
    path: "/italy/naples/naples/lantica-pizzeria-da-michele",
    image: '/images/lantica-pizzeria-da-michele1.png'
  },
  {
    name: "Luminist Cafè Bistrot",
    cuisine: "Classic Cuisine",
    price: "€€",
    path: "/italy/naples/naples/luminist-caf-bistrot",
    image: '/images/luminist-caf-bistrot1.png'
  },
  {
    name: "Michelasso",
    cuisine: "Contemporary",
    price: "€€€",
    path: "/italy/naples/naples/michelasso",
    image: '/images/michelasso1.png'
  },
  {
    name: "Nero&Oro",
    cuisine: "Mediterranean Cuisine, Contemporary",
    price: "€€€",
    path: "/italy/naples/naples/nerooro",
    image: '/images/nerooro1.png'
  },
  {
    name: "Ostaria Pignatelli",
    cuisine: "Campanian",
    price: "€",
    path: "/italy/naples/naples/ostaria-pignatelli",
    image: '/images/ostaria-pignatelli1.png'
  },
  {
    name: "Palazzo Petrucci",
    cuisine: "Creative, Mediterranean Cuisine",
    price: "€€€€",
    path: "/italy/naples/naples/palazzo-petrucci",
    image: '/images/palazzo-petrucci1.png'
  },
  {
    name: "Palazzo Petrucci Pizzeria",
    cuisine: "Pizza",
    price: "€",
    path: "/italy/naples/naples/palazzo-petrucci-pizzeria",
    image: '/images/palazzo-petrucci-pizzeria1.png'
  },
  {
    name: "Persika",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/italy/naples/naples/persika",
    image: '/images/persika1.png'
  },
  {
    name: "Salvo",
    cuisine: "Pizza",
    price: "€",
    path: "/italy/naples/naples/salvo",
    image: '/images/salvo1.png'
  },
  {
    name: "Sustànza",
    cuisine: "Creative",
    price: "€€€",
    path: "/italy/naples/naples/sustnza",
    image: '/images/sustnza1.png'
  },
  {
    name: "Urubamba",
    cuisine: "Fusion",
    price: "€€€",
    path: "/italy/naples/naples/urubamba",
    image: '/images/urubamba1.png'
  },
  {
    name: "Veritas",
    cuisine: "Campanian, Contemporary",
    price: "€€€",
    path: "/italy/naples/naples/veritas",
    image: '/images/veritas1.png'
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
