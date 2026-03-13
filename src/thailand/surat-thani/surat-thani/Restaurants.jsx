import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Surat Thani";

const restaurants = [
  {
    name: "Day & Night",
    cuisine: "International",
    price: "฿฿",
    path: "/thailand/surat-thani/surat-thani/day-night",
    image: '/images/day-night1.png'
  },
  {
    name: "Dear Phangan",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/surat-thani/surat-thani/dear-phangan",
    image: '/images/dear-phangan1.png'
  },
  {
    name: "Heng Khao Moo Daeng",
    cuisine: "Thai-Chinese",
    price: "฿",
    path: "/thailand/surat-thani/surat-thani/heng-khao-moo-daeng",
    image: '/images/heng-khao-moo-daeng1.png'
  },
  {
    name: "Keo Pla",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/surat-thani/surat-thani/keo-pla",
    image: '/images/keo-pla1.png'
  },
  {
    name: "Khao Kriab Pak Mor",
    cuisine: "Street Food",
    price: "฿",
    path: "/thailand/surat-thani/surat-thani/khao-kriab-pak-mor",
    image: '/images/khao-kriab-pak-mor1.png'
  },
  {
    name: "Khao Kriab Pak Mor Talat Na San Jao",
    cuisine: "Street Food",
    price: "฿",
    path: "/thailand/surat-thani/surat-thani/khao-kriab-pak-mor-talat-na-san-jao",
    image: '/images/khao-kriab-pak-mor-talat-na-san-jao1.png'
  },
  {
    name: "Khao Phra Ram Long Song Lao Ohw",
    cuisine: "Small eats",
    price: "฿",
    path: "/thailand/surat-thani/surat-thani/khao-phra-ram-long-song-lao-ohw",
    image: '/images/khao-phra-ram-long-song-lao-ohw1.png'
  },
  {
    name: "Lam Phu 2",
    cuisine: "Seafood",
    price: "฿฿",
    path: "/thailand/surat-thani/surat-thani/lam-phu-2",
    image: '/images/lam-phu-21.png'
  },
  {
    name: "Lian Tai",
    cuisine: "Small eats",
    price: "฿",
    path: "/thailand/surat-thani/surat-thani/lian-tai",
    image: '/images/lian-tai1.png'
  },
  {
    name: "Lucky",
    cuisine: "Thai-Chinese, Southern Thai",
    price: "฿฿",
    path: "/thailand/surat-thani/surat-thani/lucky",
    image: '/images/lucky1.png'
  },
  {
    name: "Nampetch",
    cuisine: "Southern Thai, Thai",
    price: "฿฿",
    path: "/thailand/surat-thani/surat-thani/nampetch",
    image: '/images/nampetch1.png'
  },
  {
    name: "Pa Ting (Don Sak)",
    cuisine: "Seafood",
    price: "฿฿",
    path: "/thailand/surat-thani/surat-thani/pa-ting-don-sak",
    image: '/images/pa-ting-don-sak1.png'
  },
  {
    name: "Phunisa",
    cuisine: "Southern Thai",
    price: "฿฿",
    path: "/thailand/surat-thani/surat-thani/phunisa",
    image: '/images/phunisa1.png'
  },
  {
    name: "Sum Gradang Nga",
    cuisine: "Southern Thai",
    price: "฿฿",
    path: "/thailand/surat-thani/surat-thani/sum-gradang-nga",
    image: '/images/sum-gradang-nga1.png'
  },
  {
    name: "Yok Kheng",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/surat-thani/surat-thani/yok-kheng",
    image: '/images/yok-kheng1.png'
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
