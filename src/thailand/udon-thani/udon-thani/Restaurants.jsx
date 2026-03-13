import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Udon Thani";

const restaurants = [
  {
    name: "Baan Chik Pork Noodles",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/udon-thani/udon-thani/baan-chik-pork-noodles",
    image: '/images/baan-chik-pork-noodles1.png'
  },
  {
    name: "Chabaa Barn",
    cuisine: "Isan",
    price: "฿฿",
    path: "/thailand/udon-thani/udon-thani/chabaa-barn",
    image: '/images/chabaa-barn1.png'
  },
  {
    name: "Kao.Piak.Sen",
    cuisine: "Vietnamese",
    price: "฿",
    path: "/thailand/udon-thani/udon-thani/kaopiaksen",
    image: '/images/kaopiaksen1.png'
  },
  {
    name: "Khao Soi Thai Yai",
    cuisine: "Northern Thai",
    price: "฿",
    path: "/thailand/udon-thani/udon-thani/khao-soi-thai-yai",
    image: '/images/khao-soi-thai-yai1.png'
  },
  {
    name: "Krua Khun Nid",
    cuisine: "Isan",
    price: "฿",
    path: "/thailand/udon-thani/udon-thani/krua-khun-nid",
    image: '/images/krua-khun-nid1.png'
  },
  {
    name: "Lab Mu Worachai",
    cuisine: "Isan",
    price: "฿฿",
    path: "/thailand/udon-thani/udon-thani/lab-mu-worachai",
    image: '/images/lab-mu-worachai1.png'
  },
  {
    name: "Majchapasuk",
    cuisine: "Thai",
    price: "฿",
    path: "/thailand/udon-thani/udon-thani/majchapasuk",
    image: '/images/majchapasuk1.png'
  },
  {
    name: "Pa Noi Beef Noodles",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/udon-thani/udon-thani/pa-noi-beef-noodles",
    image: '/images/pa-noi-beef-noodles1.png'
  },
  {
    name: "Pad Thai Bua Dang",
    cuisine: "Thai",
    price: "฿",
    path: "/thailand/udon-thani/udon-thani/pad-thai-bua-dang",
    image: '/images/pad-thai-bua-dang1.png'
  },
  {
    name: "Peng Duck Noodles",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/udon-thani/udon-thani/peng-duck-noodles",
    image: '/images/peng-duck-noodles1.png'
  },
  {
    name: "Rabiang Patchanee",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/udon-thani/udon-thani/rabiang-patchanee",
    image: '/images/rabiang-patchanee1.png'
  },
  {
    name: "Samuay & Sons",
    cuisine: "Isan",
    price: "฿฿฿",
    path: "/thailand/udon-thani/udon-thani/samuay-sons",
    image: '/images/samuay-sons1.png'
  },
  {
    name: "Som Tum Jae Kai (Asavamit Road)",
    cuisine: "Isan",
    price: "฿",
    path: "/thailand/udon-thani/udon-thani/som-tum-jae-kai-asavamit-road",
    image: '/images/som-tum-jae-kai-asavamit-road1.png'
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
