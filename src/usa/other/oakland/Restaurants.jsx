import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Oakland";

const restaurants = [
  {
    name: "Barcote",
    cuisine: "Ethiopian",
    price: "$",
    path: "/usa/other/oakland/barcote",
    image: '/images/barcote1.png'
  },
  {
    name: "Bardo",
    cuisine: "American",
    price: "$$",
    path: "/usa/other/oakland/bardo",
    image: '/images/bardo1.png'
  },
  {
    name: "Bardo Lounge",
    cuisine: "American",
    price: "$$",
    path: "/usa/other/oakland/bardo-lounge",
    image: '/images/bardo-lounge1.png'
  },
  {
    name: "Belotti Ristorante e Bottega",
    cuisine: "Italian",
    price: "$$",
    path: "/usa/other/oakland/belotti-ristorante-e-bottega",
    image: '/images/belotti-ristorante-e-bottega1.png'
  },
  {
    name: "Bird & Buffalo",
    cuisine: "Thai, Regional Cuisine",
    price: "$$",
    path: "/usa/other/oakland/bird-buffalo",
    image: '/images/bird-buffalo1.png'
  },
  {
    name: "Bombera",
    cuisine: "Mexican, Californian",
    price: "$$",
    path: "/usa/other/oakland/bombera",
    image: '/images/bombera1.png'
  },
  {
    name: "Burdell",
    cuisine: "American, Contemporary",
    price: "$$$",
    path: "/usa/other/oakland/burdell",
    image: '/images/burdell1.png'
  },
  {
    name: "Café Romanat",
    cuisine: "Ethiopian",
    price: "$",
    path: "/usa/other/oakland/caf-romanat",
    image: '/images/caf-romanat1.png'
  },
  {
    name: "Chuan Yu",
    cuisine: "Chinese, Sichuan",
    price: "$$",
    path: "/usa/other/oakland/chuan-yu",
    image: '/images/chuan-yu1.png'
  },
  {
    name: "Commis",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/oakland/commis",
    image: '/images/commis1.png'
  },
  {
    name: "Dela Curo",
    cuisine: "Japanese, Curry",
    price: "$$",
    path: "/usa/other/oakland/dela-curo",
    image: '/images/dela-curo1.png'
  },
  {
    name: "Delage",
    cuisine: "Japanese",
    price: "$$$",
    path: "/usa/other/oakland/delage",
    image: '/images/delage1.png'
  },
  {
    name: "FOB Kitchen",
    cuisine: "Filipino, Contemporary",
    price: "$$",
    path: "/usa/other/oakland/fob-kitchen",
    image: '/images/fob-kitchen1.png'
  },
  {
    name: "Horn Barbecue",
    cuisine: "Barbecue",
    price: "$$",
    path: "/usa/other/oakland/horn-barbecue",
    image: '/images/horn-barbecue1.png'
  },
  {
    name: "Jo's Modern Thai",
    cuisine: "Thai, Californian",
    price: "$$",
    path: "/usa/other/oakland/jos-modern-thai",
    image: '/images/jos-modern-thai1.png'
  },
  {
    name: "MAMA Oakland",
    cuisine: "Italian, Contemporary",
    price: "$$",
    path: "/usa/other/oakland/mama-oakland",
    image: '/images/mama-oakland1.png'
  },
  {
    name: "Mägo",
    cuisine: "Californian",
    price: "$$$",
    path: "/usa/other/oakland/mgo",
    image: '/images/mgo1.png'
  },
  {
    name: "Millennium",
    cuisine: "Vegan",
    price: "$$",
    path: "/usa/other/oakland/millennium",
    image: '/images/millennium1.png'
  },
  {
    name: "Parche",
    cuisine: "Colombian, Contemporary",
    price: "$$$",
    path: "/usa/other/oakland/parche",
    image: '/images/parche1.png'
  },
  {
    name: "Pomet",
    cuisine: "Californian",
    price: "$$$",
    path: "/usa/other/oakland/pomet",
    image: '/images/pomet1.png'
  },
  {
    name: "Snail Bar",
    cuisine: "Contemporary, Californian",
    price: "$$$",
    path: "/usa/other/oakland/snail-bar",
    image: '/images/snail-bar1.png'
  },
  {
    name: "Soba Ichi",
    cuisine: "Japanese",
    price: "$$",
    path: "/usa/other/oakland/soba-ichi",
    image: '/images/soba-ichi1.png'
  },
  {
    name: "Sun Moon Studio",
    cuisine: "Californian",
    price: "$$$$",
    path: "/usa/other/oakland/sun-moon-studio",
    image: '/images/sun-moon-studio1.png'
  },
  {
    name: "Tacos Oscar",
    cuisine: "Mexican, Contemporary",
    price: "$",
    path: "/usa/other/oakland/tacos-oscar",
    image: '/images/tacos-oscar1.png'
  },
  {
    name: "Taquería El Paisa",
    cuisine: "Mexican",
    price: "$",
    path: "/usa/other/oakland/taquera-el-paisa",
    image: '/images/taquera-el-paisa1.png'
  },
  {
    name: "Teni East Kitchen",
    cuisine: "Burmese",
    price: "$",
    path: "/usa/other/oakland/teni-east-kitchen",
    image: '/images/teni-east-kitchen1.png'
  },
  {
    name: "Wood Tavern",
    cuisine: "American",
    price: "$$",
    path: "/usa/other/oakland/wood-tavern",
    image: '/images/wood-tavern1.png'
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
