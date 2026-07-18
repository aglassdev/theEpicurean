import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "New Orleans";

const restaurants = [
  {
    name: "Acamaya",
    cuisine: "Mexican, Seafood",
    price: "$$",
    path: "/usa/louisiana/new-orleans/acamaya",
    image: '/images/acamaya1.png'
  },
  {
    name: "Addis Nola",
    cuisine: "Ethiopian",
    price: "$$",
    path: "/usa/louisiana/new-orleans/addis-nola",
    image: '/images/addis-nola1.png'
  },
  {
    name: "Atchafalaya",
    cuisine: "Southern, Creole",
    price: "$$",
    path: "/usa/louisiana/new-orleans/atchafalaya",
    image: '/images/atchafalaya1.png'
  },
  {
    name: "Clancy's",
    cuisine: "Creole, Cajun",
    price: "$$$",
    path: "/usa/louisiana/new-orleans/clancys",
    image: '/images/clancys1.png'
  },
  {
    name: "Cochon",
    cuisine: "American, Cajun",
    price: "$$",
    path: "/usa/louisiana/new-orleans/cochon",
    image: '/images/cochon1.png'
  },
  {
    name: "Cochon Butcher",
    cuisine: "Deli, American",
    price: "$$",
    path: "/usa/louisiana/new-orleans/cochon-butcher",
    image: '/images/cochon-butcher1.png'
  },
  {
    name: "Compère Lapin",
    cuisine: "Contemporary, Southern",
    price: "$$$",
    path: "/usa/louisiana/new-orleans/compre-lapin",
    image: '/images/compre-lapin1.png'
  },
  {
    name: "Dakar NOLA",
    cuisine: "African, Senegalese",
    price: "$$$$",
    path: "/usa/louisiana/new-orleans/dakar-nola",
    image: '/images/dakar-nola1.png'
  },
  {
    name: "Domilise’s Po-Boy & Bar",
    cuisine: "Deli, Creole",
    price: "$",
    path: "/usa/louisiana/new-orleans/domilises-po-boy-bar",
    image: '/images/domilises-po-boy-bar1.png'
  },
  {
    name: "Dooky Chase",
    cuisine: "Creole, American",
    price: "$$",
    path: "/usa/louisiana/new-orleans/dooky-chase",
    image: '/images/dooky-chase1.png'
  },
  {
    name: "Emeril’s",
    cuisine: "American, Creole",
    price: "$$$",
    path: "/usa/louisiana/new-orleans/emerils",
    image: '/images/emerils1.png'
  },
  {
    name: "Galatoire’s",
    cuisine: "Creole",
    price: "$$$",
    path: "/usa/louisiana/new-orleans/galatoires",
    image: '/images/galatoires1.png'
  },
  {
    name: "Herbsaint",
    cuisine: "Contemporary, Southern",
    price: "$$$",
    path: "/usa/louisiana/new-orleans/herbsaint",
    image: '/images/herbsaint1.png'
  },
  {
    name: "Hungry Eyes",
    cuisine: "Fusion",
    price: "$$",
    path: "/usa/louisiana/new-orleans/hungry-eyes",
    image: '/images/hungry-eyes1.png'
  },
  {
    name: "Killer PoBoys",
    cuisine: "Deli, Creole",
    price: "$",
    path: "/usa/louisiana/new-orleans/killer-poboys",
    image: '/images/killer-poboys1.png'
  },
  {
    name: "La Petite Grocery",
    cuisine: "American, Regional Cuisine",
    price: "$$$",
    path: "/usa/louisiana/new-orleans/la-petite-grocery",
    image: '/images/la-petite-grocery1.png'
  },
  {
    name: "Lufu Nola",
    cuisine: "Indian, Contemporary",
    price: "$$",
    path: "/usa/louisiana/new-orleans/lufu-nola",
    image: '/images/lufu-nola1.png'
  },
  {
    name: "Mister Mao",
    cuisine: "Asian, Contemporary",
    price: "$$",
    path: "/usa/louisiana/new-orleans/mister-mao",
    image: '/images/mister-mao1.png'
  },
  {
    name: "Molly's Rise & Shine",
    cuisine: "American, Regional Cuisine",
    price: "$",
    path: "/usa/louisiana/new-orleans/mollys-rise-shine",
    image: '/images/mollys-rise-shine1.png'
  },
  {
    name: "Osteria Lupo",
    cuisine: "Italian-American",
    price: "$$$",
    path: "/usa/louisiana/new-orleans/osteria-lupo",
    image: '/images/osteria-lupo1.png'
  },
  {
    name: "Parkway Bakery & Tavern",
    cuisine: "Deli, Creole",
    price: "$",
    path: "/usa/louisiana/new-orleans/parkway-bakery-tavern",
    image: '/images/parkway-bakery-tavern1.png'
  },
  {
    name: "Patois",
    cuisine: "Southern, French",
    price: "$$$",
    path: "/usa/louisiana/new-orleans/patois",
    image: '/images/patois1.png'
  },
  {
    name: "Pêche",
    cuisine: "Seafood",
    price: "$$$",
    path: "/usa/louisiana/new-orleans/pche",
    image: '/images/pche1.png'
  },
  {
    name: "Restaurant August",
    cuisine: "Contemporary, Creole",
    price: "$$$$",
    path: "/usa/louisiana/new-orleans/restaurant-august",
    image: '/images/restaurant-august1.png'
  },
  {
    name: "Saba",
    cuisine: "Middle Eastern",
    price: "$$",
    path: "/usa/louisiana/new-orleans/saba",
    image: '/images/saba1.png'
  },
  {
    name: "Saffron NOLA",
    cuisine: "Indian, Regional Cuisine",
    price: "$$$",
    path: "/usa/louisiana/new-orleans/saffron-nola",
    image: '/images/saffron-nola1.png'
  },
  {
    name: "Saint-Germain",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/louisiana/new-orleans/saint-germain",
    image: '/images/saint-germain1.png'
  },
  {
    name: "The Kingsway",
    cuisine: "Asian",
    price: "$$$$",
    path: "/usa/louisiana/new-orleans/the-kingsway",
    image: '/images/the-kingsway1.png'
  },
  {
    name: "Turkey and the Wolf",
    cuisine: "Deli, American",
    price: "$",
    path: "/usa/louisiana/new-orleans/turkey-and-the-wolf",
    image: '/images/turkey-and-the-wolf1.png'
  },
  {
    name: "Willie Mae's Nola",
    cuisine: "Southern",
    price: "$$",
    path: "/usa/louisiana/new-orleans/willie-maes-nola",
    image: '/images/willie-maes-nola1.png'
  },
  {
    name: "Zasu",
    cuisine: "American Contemporary, Seafood",
    price: "$$$",
    path: "/usa/louisiana/new-orleans/zasu",
    image: '/images/zasu1.png'
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
