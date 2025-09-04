import React, { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';



const localImage = (name) => {
  // Convert restaurant name to lowercase, remove spaces and special chars, add '1' and extension
  const base = name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .replace(/thechefstable/, 'thechefsTable'); // handle special case
  // Try png and jpg
  const pngPath = `/images/${base}1.png`;
  const jpgPath = `/images/${base}1.jpg`;
  // You may want to check if the file exists, but for now, just return png first
  return pngPath;
};

const pageTitle = "Washington, D.C.";


const restaurants = [
  {
    name: 'Albi',
    cuisine: 'Middle Eastern',
    price: '$$$$',
    path: '/usa/dc/albi',
    image: '/images/albi1.png'
  },
  {
    name: 'Bresca',
    cuisine: 'Contemporary French',
    price: '$$$',
    path: '/usa/dc/bresca',
    image: '/images/bresca1.png'
  },
  {
    name: 'Causa',
    cuisine: 'Peruvian Japanese Fusion',
    price: '$$$',
    path: '/usa/dc/causa',
    image: '/images/causa1.png'
  },
  {
    name: 'Elcielo',
    cuisine: 'Contemporary Colombian',
    price: '$$$$',
    path: '/usa/dc/elcielowashington',
    image: '/images/elcielowashington1.png'
  },
  {
    name: 'fiola',
    cuisine: 'Contemporary Italian',
    price: '$$$$',
    path: '/usa/dc/fiola',
    image: '/images/fiola1.png'
  },
  {
    name: 'Gravitas',
    cuisine: 'Contemporary American',
    price: '$$$',
    path: '/usa/dc/gravitas',
    image: '/images/gravitas1.png'
  },
  {
    name: 'Imperfecto by Enrique Limardo: The Chef\'s Table',
    cuisine: 'Latin American Mediterranean Fusion',
    price: '$$$$',
    path: '/usa/dc/imperfectothechefstable',
    image: '/images/imperfecto3.png'
  },
  {
    name: 'Jônt',
    cuisine: 'French Japanese Fusion',
    price: '$$$$',
    path: '/usa/dc/jônt',
    image: '/images/jont1.png'
  },
  {
    name: 'Kinship',
    cuisine: 'Contemporary American',
    price: '$$$',
    path: '/usa/dc/kinship',
    image: '/images/kinship1.png'
  },
  {
    name: 'Little Pearl',
    cuisine: 'New American',
    price: '$$$',
    path: '/usa/dc/littlepearl',
    image: '/images/littlepearl1.png'
  },
  {
    name: 'Masseria by Nicholas Stefanelli',
    cuisine: 'Modern Italian',
    price: '$$$$',
    path: '/usa/dc/masseria',
    image: '/images/masseria1.png'
  },
  {
    name: 'Métier',
    cuisine: 'Contemporary French',
    price: '$$$$',
    path: '/usa/dc/métier',
    image: '/images/metier1.png'
  },
  {
    name: 'minibar by José Andrés',
    cuisine: 'Spanish-Influenced Contemporary',
    price: '$$$$',
    path: '/usa/dc/minibar',
    image: '/images/minibar1.png'
  },
  {
    name: 'Mita',
    cuisine: 'Vegetarian Latin American',
    price: '$$$',
    path: '/usa/dc/mita',
    image: '/images/mita1.png'
  },
  {
    name: 'Omakase at Barracks Row',
    cuisine: 'Sushi',
    price: '$$$$',
    path: '/usa/dc/omakaseatbarracksrow',
    image: '/images/omakaseatbarracks1.png'
  },
  {
    name: 'Oyster Oyster',
    cuisine: 'Vegetarian',
    price: '$$$',
    path: '/usa/dc/oysteroyster',
    image: '/images/oyster1.png'
  },
  {
    name: 'Pineapple & Pearls',
    cuisine: 'Creative',
    price: '$$$$',
    path: '/usa/dc/pineappleandpearls',
    image: '/images/pineapple3.png'
  },
  {
    name: 'Rania',
    cuisine: 'Contemporary Indian',
    price: '$$$',
    path: '/usa/dc/rania',
    image: '/images/rania1.png'
  },
  {
    name: 'Rooster & Owl',
    cuisine: 'New American',
    price: '$$$',
    path: '/usa/dc/roosterandowl',
    image: '/images/roosterandowl1.png'
  },
  {
    name: 'Rose\'s Luxury',
    cuisine: 'American',
    price: '$$$',
    path: '/usa/dc/rosesluxury',
    image: '/images/roseslux1.png'
  },
  {
    name: 'Sushi Nakazawa',
    cuisine: 'Sushi',
    price: '$$$$',
    path: '/usa/dc/sushinakazawadc',
    image: '/images/sushi1.png'
  },
  {
    name: 'The Dabney',
    cuisine: 'Contemporary American',
    price: '$$$',
    path: '/usa/dc/thedabney',
    image: '/images/dabney1.png'
  },
  {
    name: 'Xiquet by Danny Lledó',
    cuisine: 'Contemporary Spanish',
    price: '$$$$',
    path: '/usa/dc/xiquet',
    image: '/images/xiquet1.png'
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
      {/* Navigation Bar */}
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

        <div style={{
          display: 'flex',
          gap: '2rem'
        }}>
          <button 
            style={{ 
              background: 'none',
              border: 'none',
              fontSize: '18px',
              fontWeight: '500',
              cursor: 'pointer',
              color: '#333',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            onClick={() => navigate('/destinations')}
          >
            Destinations
          </button>
          <button style={{
            background: 'none',
            border: 'none',
            fontSize: '18px',
            fontWeight: '500',
            cursor: 'pointer',
            color: '#333',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Articles
          </button>
          <button style={{
            background: 'none',
            border: 'none',
            fontSize: '18px',
            fontWeight: '500',
            cursor: 'pointer',
            color: '#333',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          onClick={() => {
              window.location.href = '/methodology';
            }}
          >
            Methodology
          </button>
          <button style={{
            background: 'none',
            border: 'none',
            fontSize: '18px',
            fontWeight: '500',
            cursor: 'pointer',
            color: '#333',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            transition: 'background-color 0.3s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Header Image */}
      <div style={{
        width: '100vw',
        height: '400px',
        marginTop: '92px',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}>
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/washington-dc-gettyimages-74063516?_a=BAVAZGDX0")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }} />
      </div>

      {/* Title and Restaurant Count */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '2rem 2rem 0 2rem'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#333',
          margin: '0 0 1rem 0',
          fontFamily: 'Times New Roman, serif'
        }}>
          Washington, D.C.
        </h1>
        
        <p style={{
          fontSize: '1.1rem',
          color: '#666',
          margin: '0 0 2rem 0',
          fontFamily: 'Times New Roman, serif'
        }}>
          {restaurants.length} restaurants
        </p>
      </div>

      {/* Restaurant Cards Grid */}
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
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
              {/* Restaurant Image */}
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
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: '#f8f9fa',
                    display: 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#666',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}
                >
                  {restaurant.name}
                </div>
              </div>

              {/* Restaurant Info */}
              <div style={{
                padding: '1.5rem',
                backgroundColor: 'white'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: '#333',
                  margin: '0 0 0.5rem 0',
                  fontFamily: 'Times New Roman, serif'
                }}>
                  {restaurant.name}
                </h3>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{
                    fontSize: '0.9rem',
                    color: '#666',
                    fontFamily: 'Times New Roman, serif'
                  }}>
                    {restaurant.cuisine}
                  </span>
                  <span style={{
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#333',
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

      {/* Footer */}
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
          fontSize: '14px',
          color: '#666',
          margin: 0,
          fontFamily: 'Times New Roman, serif'
        }}>
          a Glass production
        </p>
      </footer>
    </div>
  );
};

export default Restaurants;