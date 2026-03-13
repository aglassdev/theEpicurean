import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Nakhon Ratchasima";

const restaurants = [
  {
    name: "Banmai Chay Nam",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/nakhon-ratchasima/nakhon-ratchasima/banmai-chay-nam",
    image: '/images/banmai-chay-nam1.png'
  },
  {
    name: "Gin-D",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/nakhon-ratchasima/nakhon-ratchasima/gin-d",
    image: '/images/gin-d1.png'
  },
  {
    name: "Jay Noi Kratoke",
    cuisine: "Thai",
    price: "฿",
    path: "/thailand/nakhon-ratchasima/nakhon-ratchasima/jay-noi-kratoke",
    image: '/images/jay-noi-kratoke1.png'
  },
  {
    name: "Jum Khao",
    cuisine: "Isan",
    price: "฿฿",
    path: "/thailand/nakhon-ratchasima/nakhon-ratchasima/jum-khao",
    image: '/images/jum-khao1.png'
  },
  {
    name: "Kai Yang Saeng Thai",
    cuisine: "Grills",
    price: "฿",
    path: "/thailand/nakhon-ratchasima/nakhon-ratchasima/kai-yang-saeng-thai",
    image: '/images/kai-yang-saeng-thai1.png'
  },
  {
    name: "Kai Yang Sueb Siri",
    cuisine: "Isan",
    price: "฿฿",
    path: "/thailand/nakhon-ratchasima/nakhon-ratchasima/kai-yang-sueb-siri",
    image: '/images/kai-yang-sueb-siri1.png'
  },
  {
    name: "Khanom Jeen Mae Ploy",
    cuisine: "Street Food",
    price: "฿",
    path: "/thailand/nakhon-ratchasima/nakhon-ratchasima/khanom-jeen-mae-ploy",
    image: '/images/khanom-jeen-mae-ploy1.png'
  },
  {
    name: "Khanom Jeen Yai Pao",
    cuisine: "Street Food",
    price: "฿",
    path: "/thailand/nakhon-ratchasima/nakhon-ratchasima/khanom-jeen-yai-pao",
    image: '/images/khanom-jeen-yai-pao1.png'
  },
  {
    name: "Khanom Ochin",
    cuisine: "Street Food",
    price: "฿",
    path: "/thailand/nakhon-ratchasima/nakhon-ratchasima/khanom-ochin",
    image: '/images/khanom-ochin1.png'
  },
  {
    name: "Ko Kia",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/nakhon-ratchasima/nakhon-ratchasima/ko-kia",
    image: '/images/ko-kia1.png'
  },
  {
    name: "Krua Suwimol",
    cuisine: "Thai-Chinese",
    price: "฿",
    path: "/thailand/nakhon-ratchasima/nakhon-ratchasima/krua-suwimol",
    image: '/images/krua-suwimol1.png'
  },
  {
    name: "Laab Somphit",
    cuisine: "Isan",
    price: "฿",
    path: "/thailand/nakhon-ratchasima/nakhon-ratchasima/laab-somphit",
    image: '/images/laab-somphit1.png'
  },
  {
    name: "Nina's",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/nakhon-ratchasima/nakhon-ratchasima/ninas",
    image: '/images/ninas1.png'
  },
  {
    name: "Nina's Cafe & Restaurant",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/nakhon-ratchasima/nakhon-ratchasima/ninas-cafe-restaurant",
    image: '/images/ninas-cafe-restaurant1.png'
  },
  {
    name: "Nub",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/nakhon-ratchasima/nakhon-ratchasima/nub",
    image: '/images/nub1.png'
  },
  {
    name: "Pa Pleung Mhee Kratok",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/nakhon-ratchasima/nakhon-ratchasima/pa-pleung-mhee-kratok",
    image: '/images/pa-pleung-mhee-kratok1.png'
  },
  {
    name: "Poirot",
    cuisine: "European",
    price: "฿฿฿฿",
    path: "/thailand/nakhon-ratchasima/nakhon-ratchasima/poirot",
    image: '/images/poirot1.png'
  },
  {
    name: "Radna Suanmak",
    cuisine: "Noodles, Rice Dishes",
    price: "฿",
    path: "/thailand/nakhon-ratchasima/nakhon-ratchasima/radna-suanmak",
    image: '/images/radna-suanmak1.png'
  },
  {
    name: "Sow Jeck",
    cuisine: "Thai",
    price: "฿",
    path: "/thailand/nakhon-ratchasima/nakhon-ratchasima/sow-jeck",
    image: '/images/sow-jeck1.png'
  },
  {
    name: "Yommarat O-Cha (Yommarat Road)",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/nakhon-ratchasima/nakhon-ratchasima/yommarat-o-cha-yommarat-road",
    image: '/images/yommarat-o-cha-yommarat-road1.png'
  },
  {
    name: "Yong Poo Ob",
    cuisine: "Seafood",
    price: "฿฿",
    path: "/thailand/nakhon-ratchasima/nakhon-ratchasima/yong-poo-ob",
    image: '/images/yong-poo-ob1.png'
  },
  {
    name: "Yong Pu Aob",
    cuisine: "Seafood",
    price: "฿฿",
    path: "/thailand/nakhon-ratchasima/nakhon-ratchasima/yong-pu-aob",
    image: '/images/yong-pu-aob1.png'
  },
  {
    name: "Yung Khao",
    cuisine: "Southern Thai",
    price: "฿฿",
    path: "/thailand/nakhon-ratchasima/nakhon-ratchasima/yung-khao",
    image: '/images/yung-khao1.png'
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
