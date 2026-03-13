import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Vilnius";

const restaurants = [
  {
    name: "14Horses",
    cuisine: "Modern Cuisine, Creative",
    price: "€€",
    path: "/lithuania/vilnius/vilnius/14horses",
    image: '/images/14horses1.png'
  },
  {
    name: "Amandus",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/lithuania/vilnius/vilnius/amandus",
    image: '/images/amandus1.png'
  },
  {
    name: "Augustin",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/lithuania/vilnius/vilnius/augustin",
    image: '/images/augustin1.png'
  },
  {
    name: "B'ARN Bistro",
    cuisine: "International",
    price: "€€",
    path: "/lithuania/vilnius/vilnius/barn-bistro",
    image: '/images/barn-bistro1.png'
  },
  {
    name: "Da Antonio",
    cuisine: "Italian",
    price: "€€€",
    path: "/lithuania/vilnius/vilnius/da-antonio",
    image: '/images/da-antonio1.png'
  },
  {
    name: "Demo",
    cuisine: "Innovative",
    price: "€€€€",
    path: "/lithuania/vilnius/vilnius/demo",
    image: '/images/demo1.png'
  },
  {
    name: "Džiaugsmas",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/lithuania/vilnius/vilnius/diaugsmas",
    image: '/images/diaugsmas1.png'
  },
  {
    name: "Dine",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/lithuania/vilnius/vilnius/dine",
    image: '/images/dine1.png'
  },
  {
    name: "El Gato Negro",
    cuisine: "Mexican",
    price: "€",
    path: "/lithuania/vilnius/vilnius/el-gato-negro",
    image: '/images/el-gato-negro1.png'
  },
  {
    name: "elven",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/lithuania/vilnius/vilnius/elven",
    image: '/images/elven1.png'
  },
  {
    name: "Ertlio Namas",
    cuisine: "Regional Cuisine",
    price: "€€€",
    path: "/lithuania/vilnius/vilnius/ertlio-namas",
    image: '/images/ertlio-namas1.png'
  },
  {
    name: "Fabrikėlis",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/lithuania/vilnius/vilnius/fabriklis",
    image: '/images/fabriklis1.png'
  },
  {
    name: "Farmer & The Ocean",
    cuisine: "Meats and Seafood",
    price: "€€",
    path: "/lithuania/vilnius/vilnius/farmer-the-ocean",
    image: '/images/farmer-the-ocean1.png'
  },
  {
    name: "Gaspar's",
    cuisine: "Indian",
    price: "€€",
    path: "/lithuania/vilnius/vilnius/gaspars",
    image: '/images/gaspars1.png'
  },
  {
    name: "HeJi",
    cuisine: "Asian Influences",
    price: "€€€",
    path: "/lithuania/vilnius/vilnius/heji",
    image: '/images/heji1.png'
  },
  {
    name: "Justa Pasta",
    cuisine: "Italian",
    price: "€€",
    path: "/lithuania/vilnius/vilnius/justa-pasta",
    image: '/images/justa-pasta1.png'
  },
  {
    name: "Kristoforas",
    cuisine: "French, Italian",
    price: "€€",
    path: "/lithuania/vilnius/vilnius/kristoforas",
    image: '/images/kristoforas1.png'
  },
  {
    name: "Le Travi",
    cuisine: "Italian, Traditional Cuisine",
    price: "€",
    path: "/lithuania/vilnius/vilnius/le-travi",
    image: '/images/le-travi1.png'
  },
  {
    name: "Momo Grill",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/lithuania/vilnius/vilnius/momo-grill",
    image: '/images/momo-grill1.png'
  },
  {
    name: "MOTÍF",
    cuisine: "Japanese Contemporary",
    price: "€€€",
    path: "/lithuania/vilnius/vilnius/motf",
    image: '/images/motf1.png'
  },
  {
    name: "Nineteen18",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/lithuania/vilnius/vilnius/nineteen18",
    image: '/images/nineteen181.png'
  },
  {
    name: "PACAI Restaurant",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/lithuania/vilnius/vilnius/pacai-restaurant",
    image: '/images/pacai-restaurant1.png'
  },
  {
    name: "Protėviai",
    cuisine: "Beef",
    price: "€€€",
    path: "/lithuania/vilnius/vilnius/protviai",
    image: '/images/protviai1.png'
  },
  {
    name: "Somm",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/lithuania/vilnius/vilnius/somm",
    image: '/images/somm1.png'
  },
  {
    name: "Stebuklai",
    cuisine: "Modern Cuisine, Contemporary",
    price: "€",
    path: "/lithuania/vilnius/vilnius/stebuklai",
    image: '/images/stebuklai1.png'
  },
  {
    name: "Stikliai",
    cuisine: "Classic French",
    price: "€€€€",
    path: "/lithuania/vilnius/vilnius/stikliai",
    image: '/images/stikliai1.png'
  },
  {
    name: "Telegrafas",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/lithuania/vilnius/vilnius/telegrafas",
    image: '/images/telegrafas1.png'
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
