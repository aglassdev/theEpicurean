import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Frankfurt On The Main";

const restaurants = [
  {
    name: "bidlabu",
    cuisine: "Farm to table, Contemporary",
    price: "€€€",
    path: "/germany/frankfurt-on-the-main/frankfurt-on-the-main/bidlabu",
    image: '/images/bidlabu1.png'
  },
  {
    name: "Bistro Villa Merton",
    cuisine: "Country cooking, International",
    price: "€€",
    path: "/germany/frankfurt-on-the-main/frankfurt-on-the-main/bistro-villa-merton",
    image: '/images/bistro-villa-merton1.png'
  },
  {
    name: "Carmelo Greco",
    cuisine: "Italian",
    price: "€€€",
    path: "/germany/frankfurt-on-the-main/frankfurt-on-the-main/carmelo-greco",
    image: '/images/carmelo-greco1.png'
  },
  {
    name: "Carte blanche",
    cuisine: "Farm to table, Modern Cuisine",
    price: "€€€",
    path: "/germany/frankfurt-on-the-main/frankfurt-on-the-main/carte-blanche",
    image: '/images/carte-blanche1.png'
  },
  {
    name: "Erno's Bistro",
    cuisine: "Classic French, Modern Cuisine",
    price: "€€€€",
    path: "/germany/frankfurt-on-the-main/frankfurt-on-the-main/ernos-bistro",
    image: '/images/ernos-bistro1.png'
  },
  {
    name: "Frankfurter Botschaft",
    cuisine: "International, Asian Influences",
    price: "€€",
    path: "/germany/frankfurt-on-the-main/frankfurt-on-the-main/frankfurter-botschaft",
    image: '/images/frankfurter-botschaft1.png'
  },
  {
    name: "Franziska",
    cuisine: "Seasonal Cuisine, Modern Cuisine",
    price: "€€€",
    path: "/germany/frankfurt-on-the-main/frankfurt-on-the-main/franziska",
    image: '/images/franziska1.png'
  },
  {
    name: "Goldmund",
    cuisine: "Classic French",
    price: "€€",
    path: "/germany/frankfurt-on-the-main/frankfurt-on-the-main/goldmund",
    image: '/images/goldmund1.png'
  },
  {
    name: "GRETA OTO Frankfurt",
    cuisine: "Latin American, Sharing",
    price: "€€€",
    path: "/germany/frankfurt-on-the-main/frankfurt-on-the-main/greta-oto-frankfurt",
    image: '/images/greta-oto-frankfurt1.png'
  },
  {
    name: "Lafleur",
    cuisine: "Modern French, Creative",
    price: "€€€€",
    path: "/germany/frankfurt-on-the-main/frankfurt-on-the-main/lafleur",
    image: '/images/lafleur1.png'
  },
  {
    name: "l'Ecume",
    cuisine: "Modern French, French Contemporary",
    price: "€€€",
    path: "/germany/frankfurt-on-the-main/frankfurt-on-the-main/lecume",
    image: '/images/lecume1.png'
  },
  {
    name: "Lohninger",
    cuisine: "Austrian, International",
    price: "€€€€",
    path: "/germany/frankfurt-on-the-main/frankfurt-on-the-main/lohninger",
    image: '/images/lohninger1.png'
  },
  {
    name: "MAIN TOWER Restaurant & Lounge",
    cuisine: "Asian Influences, Modern Cuisine",
    price: "€€€€",
    path: "/germany/frankfurt-on-the-main/frankfurt-on-the-main/main-tower-restaurant-lounge",
    image: '/images/main-tower-restaurant-lounge1.png'
  },
  {
    name: "Masa Japanese Cuisine",
    cuisine: "Japanese, Japanese Contemporary",
    price: "€€€€",
    path: "/germany/frankfurt-on-the-main/frankfurt-on-the-main/masa-japanese-cuisine",
    image: '/images/masa-japanese-cuisine1.png'
  },
  {
    name: "Medici",
    cuisine: "International, Mediterranean Cuisine",
    price: "€€",
    path: "/germany/frankfurt-on-the-main/frankfurt-on-the-main/medici",
    image: '/images/medici1.png'
  },
  {
    name: "Mon Amie Maxi",
    cuisine: "French, Traditional Cuisine",
    price: "€€€",
    path: "/germany/frankfurt-on-the-main/frankfurt-on-the-main/mon-amie-maxi",
    image: '/images/mon-amie-maxi1.png'
  },
  {
    name: "PEYSK",
    cuisine: "International, Seafood",
    price: "€€",
    path: "/germany/frankfurt-on-the-main/frankfurt-on-the-main/peysk",
    image: '/images/peysk1.png'
  },
  {
    name: "RAUSCH",
    cuisine: "Modern Cuisine, Creative",
    price: "€€€€",
    path: "/germany/frankfurt-on-the-main/frankfurt-on-the-main/rausch",
    image: '/images/rausch1.png'
  },
  {
    name: "Restaurant Villa Merton",
    cuisine: "Classic Cuisine, Modern Cuisine",
    price: "€€€€",
    path: "/germany/frankfurt-on-the-main/frankfurt-on-the-main/restaurant-villa-merton",
    image: '/images/restaurant-villa-merton1.png'
  },
  {
    name: "Seven Swans",
    cuisine: "Vegan, Creative",
    price: "€€€€",
    path: "/germany/frankfurt-on-the-main/frankfurt-on-the-main/seven-swans",
    image: '/images/seven-swans1.png'
  },
  {
    name: "Sommerfeld",
    cuisine: "International, Creative",
    price: "€€€€",
    path: "/germany/frankfurt-on-the-main/frankfurt-on-the-main/sommerfeld",
    image: '/images/sommerfeld1.png'
  },
  {
    name: "Sorriso",
    cuisine: "Contemporary, Mediterranean Cuisine",
    price: "€€€",
    path: "/germany/frankfurt-on-the-main/frankfurt-on-the-main/sorriso",
    image: '/images/sorriso1.png'
  },
  {
    name: "The Sakai",
    cuisine: "Japanese Contemporary, European",
    price: "€€€€",
    path: "/germany/frankfurt-on-the-main/frankfurt-on-the-main/the-sakai",
    image: '/images/the-sakai1.png'
  },
  {
    name: "YALDY",
    cuisine: "Seasonal Cuisine, International",
    price: "€€",
    path: "/germany/frankfurt-on-the-main/frankfurt-on-the-main/yaldy",
    image: '/images/yaldy1.png'
  },
  {
    name: "Zenzakan",
    cuisine: "Asian",
    price: "€€€",
    path: "/germany/frankfurt-on-the-main/frankfurt-on-the-main/zenzakan",
    image: '/images/zenzakan1.png'
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
