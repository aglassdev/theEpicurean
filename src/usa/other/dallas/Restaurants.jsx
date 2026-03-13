import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Dallas";

const restaurants = [
  {
    name: "Barsotti's",
    cuisine: "Italian",
    price: "$$",
    path: "/usa/other/dallas/barsottis",
    image: '/images/barsottis1.png'
  },
  {
    name: "Cattleack Barbeque",
    cuisine: "Barbecue",
    price: "$$",
    path: "/usa/other/dallas/cattleack-barbeque",
    image: '/images/cattleack-barbeque1.png'
  },
  {
    name: "Crown Block",
    cuisine: "American Contemporary, Meats and Seafood",
    price: "$$$$",
    path: "/usa/other/dallas/crown-block",
    image: '/images/crown-block1.png'
  },
  {
    name: "El Carlos Elegante",
    cuisine: "Mexican, Contemporary",
    price: "$$$$",
    path: "/usa/other/dallas/el-carlos-elegante",
    image: '/images/el-carlos-elegante1.png'
  },
  {
    name: "Fearing's",
    cuisine: "American, Regional Cuisine",
    price: "$$$$",
    path: "/usa/other/dallas/fearings",
    image: '/images/fearings1.png'
  },
  {
    name: "Gemma",
    cuisine: "American",
    price: "$$$",
    path: "/usa/other/dallas/gemma",
    image: '/images/gemma1.png'
  },
  {
    name: "Georgie",
    cuisine: "Contemporary, French",
    price: "$$$$",
    path: "/usa/other/dallas/georgie",
    image: '/images/georgie1.png'
  },
  {
    name: "Knox Bistro",
    cuisine: "French",
    price: "$$$",
    path: "/usa/other/dallas/knox-bistro",
    image: '/images/knox-bistro1.png'
  },
  {
    name: "Lucia",
    cuisine: "Italian",
    price: "$$$",
    path: "/usa/other/dallas/lucia",
    image: '/images/lucia1.png'
  },
  {
    name: "Mamani",
    cuisine: "French Contemporary",
    price: "$$$$",
    path: "/usa/other/dallas/mamani",
    image: '/images/mamani1.png'
  },
  {
    name: "Mercat Bistro",
    cuisine: "French, American",
    price: "$$$",
    path: "/usa/other/dallas/mercat-bistro",
    image: '/images/mercat-bistro1.png'
  },
  {
    name: "Mister Charles",
    cuisine: "Contemporary, American",
    price: "$$$$",
    path: "/usa/other/dallas/mister-charles",
    image: '/images/mister-charles1.png'
  },
  {
    name: "Monarch",
    cuisine: "Italian-American",
    price: "$$$$",
    path: "/usa/other/dallas/monarch",
    image: '/images/monarch1.png'
  },
  {
    name: "Một Hai Ba",
    cuisine: "Fusion, Vietnamese",
    price: "$$",
    path: "/usa/other/dallas/mt-hai-ba",
    image: '/images/mt-hai-ba1.png'
  },
  {
    name: "Ngon Vietnamese Kitchen",
    cuisine: "Vietnamese",
    price: "$$",
    path: "/usa/other/dallas/ngon-vietnamese-kitchen",
    image: '/images/ngon-vietnamese-kitchen1.png'
  },
  {
    name: "nonna",
    cuisine: "Italian",
    price: "$$$",
    path: "/usa/other/dallas/nonna",
    image: '/images/nonna1.png'
  },
  {
    name: "Quarter Acre",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/usa/other/dallas/quarter-acre",
    image: '/images/quarter-acre1.png'
  },
  {
    name: "Rye",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/dallas/rye",
    image: '/images/rye1.png'
  },
  {
    name: "Sachet",
    cuisine: "Mediterranean Cuisine",
    price: "$$",
    path: "/usa/other/dallas/sachet",
    image: '/images/sachet1.png'
  },
  {
    name: "Stillwell's",
    cuisine: "Steakhouse",
    price: "$$$$",
    path: "/usa/other/dallas/stillwells",
    image: '/images/stillwells1.png'
  },
  {
    name: "Stock & Barrel",
    cuisine: "American",
    price: "$$$",
    path: "/usa/other/dallas/stock-barrel",
    image: '/images/stock-barrel1.png'
  },
  {
    name: "Sushi Kozy",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/usa/other/dallas/sushi-kozy",
    image: '/images/sushi-kozy1.png'
  },
  {
    name: "Tatsu Dallas",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/dallas/tatsu-dallas",
    image: '/images/tatsu-dallas1.png'
  },
  {
    name: "Tei-An",
    cuisine: "Japanese, Soba",
    price: "$$$$",
    path: "/usa/other/dallas/tei-an",
    image: '/images/tei-an1.png'
  },
  {
    name: "Written By The Seasons",
    cuisine: "American Contemporary",
    price: "$$$",
    path: "/usa/other/dallas/written-by-the-seasons",
    image: '/images/written-by-the-seasons1.png'
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
