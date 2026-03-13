import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Houston";

const restaurants = [
  {
    name: "Agnes and Sherman",
    cuisine: "Asian Contemporary, Creative",
    price: "$$",
    path: "/usa/other/houston/agnes-and-sherman",
    image: '/images/agnes-and-sherman1.png'
  },
  {
    name: "Annam",
    cuisine: "Vietnamese Contemporary",
    price: "$$$",
    path: "/usa/other/houston/annam",
    image: '/images/annam1.png'
  },
  {
    name: "Bar Bludorn",
    cuisine: "American",
    price: "$$$",
    path: "/usa/other/houston/bar-bludorn",
    image: '/images/bar-bludorn1.png'
  },
  {
    name: "Baso",
    cuisine: "American, Contemporary",
    price: "$$$$",
    path: "/usa/other/houston/baso",
    image: '/images/baso1.png'
  },
  {
    name: "BCN Taste & Tradition",
    cuisine: "Spanish, Contemporary",
    price: "$$$$",
    path: "/usa/other/houston/bcn-taste-tradition",
    image: '/images/bcn-taste-tradition1.png'
  },
  {
    name: "Bludorn",
    cuisine: "American, Contemporary",
    price: "$$$",
    path: "/usa/other/houston/bludorn",
    image: '/images/bludorn1.png'
  },
  {
    name: "Brisket & Rice",
    cuisine: "Barbecue, Asian",
    price: "$$",
    path: "/usa/other/houston/brisket-rice",
    image: '/images/brisket-rice1.png'
  },
  {
    name: "Candente",
    cuisine: "Tex-Mex",
    price: "$$",
    path: "/usa/other/houston/candente",
    image: '/images/candente1.png'
  },
  {
    name: "Casaema",
    cuisine: "Mexican",
    price: "$$",
    path: "/usa/other/houston/casaema",
    image: '/images/casaema1.png'
  },
  {
    name: "ChòpnBlọk",
    cuisine: "African",
    price: "$$",
    path: "/usa/other/houston/chpnblk",
    image: '/images/chpnblk1.png'
  },
  {
    name: "Credence",
    cuisine: "American Contemporary, Steakhouse",
    price: "$$$$",
    path: "/usa/other/houston/credence",
    image: '/images/credence1.png'
  },
  {
    name: "da Gama Canteen",
    cuisine: "Indian, Portuguese",
    price: "$$",
    path: "/usa/other/houston/da-gama-canteen",
    image: '/images/da-gama-canteen1.png'
  },
  {
    name: "Ema",
    cuisine: "Mexican",
    price: "$$",
    path: "/usa/other/houston/ema",
    image: '/images/ema1.png'
  },
  {
    name: "Hidden Omakase",
    cuisine: "Sushi, Contemporary",
    price: "$$$$",
    path: "/usa/other/houston/hidden-omakase",
    image: '/images/hidden-omakase1.png'
  },
  {
    name: "J-Bar-M Barbecue",
    cuisine: "Barbecue",
    price: "$",
    path: "/usa/other/houston/j-bar-m-barbecue",
    image: '/images/j-bar-m-barbecue1.png'
  },
  {
    name: "Josephine's",
    cuisine: "Seafood, Southern",
    price: "$$",
    path: "/usa/other/houston/josephines",
    image: '/images/josephines1.png'
  },
  {
    name: "Killen's",
    cuisine: "American, Southern",
    price: "$$",
    path: "/usa/other/houston/killens",
    image: '/images/killens1.png'
  },
  {
    name: "Late August",
    cuisine: "Southern, International",
    price: "$$$",
    path: "/usa/other/houston/late-august",
    image: '/images/late-august1.png'
  },
  {
    name: "Le Jardinier Houston",
    cuisine: "French, Contemporary",
    price: "$$$$",
    path: "/usa/other/houston/le-jardinier-houston",
    image: '/images/le-jardinier-houston1.png'
  },
  {
    name: "Mala Sichuan Bistro",
    cuisine: "Chinese, Sichuan",
    price: "$$",
    path: "/usa/other/houston/mala-sichuan-bistro",
    image: '/images/mala-sichuan-bistro1.png'
  },
  {
    name: "March",
    cuisine: "Creative, Mediterranean Cuisine",
    price: "$$$$",
    path: "/usa/other/houston/march",
    image: '/images/march1.png'
  },
  {
    name: "Maximo",
    cuisine: "Mexican, American",
    price: "$$",
    path: "/usa/other/houston/maximo",
    image: '/images/maximo1.png'
  },
  {
    name: "Musaafer",
    cuisine: "Indian, Contemporary",
    price: "$$$$",
    path: "/usa/other/houston/musaafer",
    image: '/images/musaafer1.png'
  },
  {
    name: "Nam Giao",
    cuisine: "Vietnamese",
    price: "$",
    path: "/usa/other/houston/nam-giao",
    image: '/images/nam-giao1.png'
  },
  {
    name: "Nancy's Hustle",
    cuisine: "Contemporary",
    price: "$$",
    path: "/usa/other/houston/nancys-hustle",
    image: '/images/nancys-hustle1.png'
  },
  {
    name: "Neo",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/houston/neo",
    image: '/images/neo1.png'
  },
  {
    name: "nobie's",
    cuisine: "American",
    price: "$$",
    path: "/usa/other/houston/nobies",
    image: '/images/nobies1.png'
  },
  {
    name: "Papalo Taqueria",
    cuisine: "Mexican",
    price: "$$",
    path: "/usa/other/houston/papalo-taqueria",
    image: '/images/papalo-taqueria1.png'
  },
  {
    name: "Pappas Bros. Steakhouse",
    cuisine: "Steakhouse, American",
    price: "$$$$",
    path: "/usa/other/houston/pappas-bros-steakhouse",
    image: '/images/pappas-bros-steakhouse1.png'
  },
  {
    name: "Perseid",
    cuisine: "French",
    price: "$$$",
    path: "/usa/other/houston/perseid",
    image: '/images/perseid1.png'
  },
  {
    name: "Pinkerton's Barbecue",
    cuisine: "Barbecue",
    price: "$$",
    path: "/usa/other/houston/pinkertons-barbecue",
    image: '/images/pinkertons-barbecue1.png'
  },
  {
    name: "Rosie Cannonball",
    cuisine: "Contemporary, Italian",
    price: "$$",
    path: "/usa/other/houston/rosie-cannonball",
    image: '/images/rosie-cannonball1.png'
  },
  {
    name: "Street to Kitchen",
    cuisine: "Thai",
    price: "$$",
    path: "/usa/other/houston/street-to-kitchen",
    image: '/images/street-to-kitchen1.png'
  },
  {
    name: "Tatemó",
    cuisine: "Mexican, Contemporary",
    price: "$$$$",
    path: "/usa/other/houston/tatem",
    image: '/images/tatem1.png'
  },
  {
    name: "The Marigold Club",
    cuisine: "European, French Contemporary",
    price: "$$$$",
    path: "/usa/other/houston/the-marigold-club",
    image: '/images/the-marigold-club1.png'
  },
  {
    name: "The Pit Room",
    cuisine: "Barbecue, Mexican",
    price: "$$",
    path: "/usa/other/houston/the-pit-room",
    image: '/images/the-pit-room1.png'
  },
  {
    name: "Theodore Rex",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/usa/other/houston/theodore-rex",
    image: '/images/theodore-rex1.png'
  },
  {
    name: "Truth BBQ",
    cuisine: "Barbecue",
    price: "$$",
    path: "/usa/other/houston/truth-bbq",
    image: '/images/truth-bbq1.png'
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
