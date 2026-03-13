import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Phang Nga";

const restaurants = [
  {
    name: "Anuwat",
    cuisine: "Street Food",
    price: "฿",
    path: "/thailand/phang-nga/phang-nga/anuwat",
    image: '/images/anuwat1.png'
  },
  {
    name: "Aulis",
    cuisine: "Creative",
    price: "฿฿฿฿",
    path: "/thailand/phang-nga/phang-nga/aulis",
    image: '/images/aulis1.png'
  },
  {
    name: "Aulis",
    cuisine: "Creative",
    price: "฿฿฿฿",
    path: "/thailand/phang-nga/phang-nga/aulis",
    image: '/images/aulis1.png'
  },
  {
    name: "Baan Rearn Mai",
    cuisine: "Seafood",
    price: "฿฿",
    path: "/thailand/phang-nga/phang-nga/baan-rearn-mai",
    image: '/images/baan-rearn-mai1.png'
  },
  {
    name: "Bang Dean",
    cuisine: "Street Food",
    price: "฿",
    path: "/thailand/phang-nga/phang-nga/bang-dean",
    image: '/images/bang-dean1.png'
  },
  {
    name: "Beach Grill and Bar",
    cuisine: "Mediterranean Cuisine",
    price: "฿฿฿",
    path: "/thailand/phang-nga/phang-nga/beach-grill-and-bar",
    image: '/images/beach-grill-and-bar1.png'
  },
  {
    name: "Hok Kee Lao",
    cuisine: "Thai-Chinese",
    price: "฿฿",
    path: "/thailand/phang-nga/phang-nga/hok-kee-lao",
    image: '/images/hok-kee-lao1.png'
  },
  {
    name: "Juumpo",
    cuisine: "Southern Thai",
    price: "฿฿",
    path: "/thailand/phang-nga/phang-nga/juumpo",
    image: '/images/juumpo1.png'
  },
  {
    name: "Khanom Chin Pa Son",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/phang-nga/phang-nga/khanom-chin-pa-son",
    image: '/images/khanom-chin-pa-son1.png'
  },
  {
    name: "Khanom Jeen Baan Bang Kan",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/phang-nga/phang-nga/khanom-jeen-baan-bang-kan",
    image: '/images/khanom-jeen-baan-bang-kan1.png'
  },
  {
    name: "Khok Kloi Tom Yam Noodles with Eggs",
    cuisine: "Street Food",
    price: "฿",
    path: "/thailand/phang-nga/phang-nga/khok-kloi-tom-yam-noodles-with-eggs",
    image: '/images/khok-kloi-tom-yam-noodles-with-eggs1.png'
  },
  {
    name: "Khrua Nong",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/phang-nga/phang-nga/khrua-nong",
    image: '/images/khrua-nong1.png'
  },
  {
    name: "Khun Thip's Satay",
    cuisine: "Street Food",
    price: "฿",
    path: "/thailand/phang-nga/phang-nga/khun-thips-satay",
    image: '/images/khun-thips-satay1.png'
  },
  {
    name: "Krachang Khao Lak",
    cuisine: "Seafood, Thai",
    price: "฿฿",
    path: "/thailand/phang-nga/phang-nga/krachang-khao-lak",
    image: '/images/krachang-khao-lak1.png'
  },
  {
    name: "Krua Luang Ten",
    cuisine: "Southern Thai",
    price: "฿",
    path: "/thailand/phang-nga/phang-nga/krua-luang-ten",
    image: '/images/krua-luang-ten1.png'
  },
  {
    name: "Mon",
    cuisine: "Southern Thai",
    price: "฿",
    path: "/thailand/phang-nga/phang-nga/mon",
    image: '/images/mon1.png'
  },
  {
    name: "Nern Khao View Talay",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/phang-nga/phang-nga/nern-khao-view-talay",
    image: '/images/nern-khao-view-talay1.png'
  },
  {
    name: "Phi Sao",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/phang-nga/phang-nga/phi-sao",
    image: '/images/phi-sao1.png'
  },
  {
    name: "Pitak",
    cuisine: "Southern Thai, Thai",
    price: "฿฿",
    path: "/thailand/phang-nga/phang-nga/pitak",
    image: '/images/pitak1.png'
  },
  {
    name: "Rock-Un",
    cuisine: "Small eats",
    price: "฿",
    path: "/thailand/phang-nga/phang-nga/rock-un",
    image: '/images/rock-un1.png'
  },
  {
    name: "Roe Dang",
    cuisine: "Southern Thai",
    price: "฿",
    path: "/thailand/phang-nga/phang-nga/roe-dang",
    image: '/images/roe-dang1.png'
  },
  {
    name: "Thian Leng Bak Kut Teh",
    cuisine: "Thai-Chinese",
    price: "฿",
    path: "/thailand/phang-nga/phang-nga/thian-leng-bak-kut-teh",
    image: '/images/thian-leng-bak-kut-teh1.png'
  },
  {
    name: "Tonfon Bistro",
    cuisine: "Southern Thai",
    price: "฿฿",
    path: "/thailand/phang-nga/phang-nga/tonfon-bistro",
    image: '/images/tonfon-bistro1.png'
  },
  {
    name: "Yi-Oui Noodles",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/phang-nga/phang-nga/yi-oui-noodles",
    image: '/images/yi-oui-noodles1.png'
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
