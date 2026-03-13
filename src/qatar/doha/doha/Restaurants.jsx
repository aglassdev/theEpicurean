import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Doha";

const restaurants = [
  {
    name: "Alba",
    cuisine: "Italian",
    price: "﷼﷼﷼﷼",
    path: "/qatar/doha/doha/alba",
    image: '/images/alba1.png'
  },
  {
    name: "Argan",
    cuisine: "Moroccan",
    price: "﷼",
    path: "/qatar/doha/doha/argan",
    image: '/images/argan1.png'
  },
  {
    name: "Baron",
    cuisine: "Middle Eastern, Fusion",
    price: "﷼﷼",
    path: "/qatar/doha/doha/baron",
    image: '/images/baron1.png'
  },
  {
    name: "Bayt Sharq",
    cuisine: "Middle Eastern",
    price: "﷼",
    path: "/qatar/doha/doha/bayt-sharq",
    image: '/images/bayt-sharq1.png'
  },
  {
    name: "Berenjak Al Maha Island",
    cuisine: "Persian",
    price: "﷼﷼",
    path: "/qatar/doha/doha/berenjak-al-maha-island",
    image: '/images/berenjak-al-maha-island1.png'
  },
  {
    name: "BiBo",
    cuisine: "Spanish",
    price: "﷼﷼﷼",
    path: "/qatar/doha/doha/bibo",
    image: '/images/bibo1.png'
  },
  {
    name: "Carbone Doha",
    cuisine: "Italian-American",
    price: "﷼﷼﷼﷼",
    path: "/qatar/doha/doha/carbone-doha",
    image: '/images/carbone-doha1.png'
  },
  {
    name: "Chicago Rare",
    cuisine: "Steakhouse",
    price: "﷼﷼﷼",
    path: "/qatar/doha/doha/chicago-rare",
    image: '/images/chicago-rare1.png'
  },
  {
    name: "Coya",
    cuisine: "Peruvian",
    price: "﷼﷼﷼﷼",
    path: "/qatar/doha/doha/coya",
    image: '/images/coya1.png'
  },
  {
    name: "Curiosa by Jean-Georges",
    cuisine: "Latin American",
    price: "﷼﷼﷼",
    path: "/qatar/doha/doha/curiosa-by-jean-georges",
    image: '/images/curiosa-by-jean-georges1.png'
  },
  {
    name: "Dalchini",
    cuisine: "Indian",
    price: "﷼﷼",
    path: "/qatar/doha/doha/dalchini",
    image: '/images/dalchini1.png'
  },
  {
    name: "Dar Yema",
    cuisine: "Moroccan",
    price: "﷼﷼",
    path: "/qatar/doha/doha/dar-yema",
    image: '/images/dar-yema1.png'
  },
  {
    name: "Desert Rose Café",
    cuisine: "Middle Eastern",
    price: "﷼",
    path: "/qatar/doha/doha/desert-rose-caf",
    image: '/images/desert-rose-caf1.png'
  },
  {
    name: "Em Sherif",
    cuisine: "Lebanese",
    price: "﷼﷼﷼﷼",
    path: "/qatar/doha/doha/em-sherif",
    image: '/images/em-sherif1.png'
  },
  {
    name: "Fenyal",
    cuisine: "Traditional Cuisine",
    price: "﷼",
    path: "/qatar/doha/doha/fenyal",
    image: '/images/fenyal1.png'
  },
  {
    name: "Gymkhana",
    cuisine: "Indian",
    price: "﷼﷼﷼",
    path: "/qatar/doha/doha/gymkhana",
    image: '/images/gymkhana1.png'
  },
  {
    name: "Hakkasan",
    cuisine: "Chinese",
    price: "﷼﷼﷼﷼",
    path: "/qatar/doha/doha/hakkasan",
    image: '/images/hakkasan1.png'
  },
  {
    name: "Hoppers",
    cuisine: "Sri Lankan, South Indian",
    price: "﷼﷼",
    path: "/qatar/doha/doha/hoppers",
    image: '/images/hoppers1.png'
  },
  {
    name: "Hunters Room & Grill",
    cuisine: "Meats and Grills",
    price: "﷼﷼﷼﷼",
    path: "/qatar/doha/doha/hunters-room-grill",
    image: '/images/hunters-room-grill1.png'
  },
  {
    name: "IDAM by Alain Ducasse",
    cuisine: "French Contemporary",
    price: "﷼﷼﷼﷼",
    path: "/qatar/doha/doha/idam-by-alain-ducasse",
    image: '/images/idam-by-alain-ducasse1.png'
  },
  {
    name: "Isaan",
    cuisine: "Thai",
    price: "﷼﷼",
    path: "/qatar/doha/doha/isaan",
    image: '/images/isaan1.png'
  },
  {
    name: "Jamavar",
    cuisine: "Indian",
    price: "﷼﷼﷼",
    path: "/qatar/doha/doha/jamavar",
    image: '/images/jamavar1.png'
  },
  {
    name: "Jiwan",
    cuisine: "Middle Eastern",
    price: "﷼﷼",
    path: "/qatar/doha/doha/jiwan",
    image: '/images/jiwan1.png'
  },
  {
    name: "Kai’s Songbird",
    cuisine: "Chinese",
    price: "﷼﷼﷼",
    path: "/qatar/doha/doha/kais-songbird",
    image: '/images/kais-songbird1.png'
  },
  {
    name: "Koo Madame",
    cuisine: "Chinese",
    price: "﷼﷼﷼",
    path: "/qatar/doha/doha/koo-madame",
    image: '/images/koo-madame1.png'
  },
  {
    name: "La Mar by Gastón Acurio",
    cuisine: "Peruvian",
    price: "﷼﷼﷼",
    path: "/qatar/doha/doha/la-mar-by-gastn-acurio",
    image: '/images/la-mar-by-gastn-acurio1.png'
  },
  {
    name: "La Petite Maison (LPM)",
    cuisine: "French",
    price: "﷼﷼﷼",
    path: "/qatar/doha/doha/la-petite-maison-lpm",
    image: '/images/la-petite-maison-lpm1.png'
  },
  {
    name: "Liang",
    cuisine: "Cantonese",
    price: "﷼﷼﷼﷼",
    path: "/qatar/doha/doha/liang",
    image: '/images/liang1.png'
  },
  {
    name: "Loris",
    cuisine: "Lebanese",
    price: "﷼﷼﷼",
    path: "/qatar/doha/doha/loris",
    image: '/images/loris1.png'
  },
  {
    name: "Masala Library",
    cuisine: "Indian",
    price: "﷼﷼﷼",
    path: "/qatar/doha/doha/masala-library",
    image: '/images/masala-library1.png'
  },
  {
    name: "Mila",
    cuisine: "Middle Eastern",
    price: "﷼﷼",
    path: "/qatar/doha/doha/mila",
    image: '/images/mila1.png'
  },
  {
    name: "Morimoto",
    cuisine: "Japanese Contemporary, Fusion",
    price: "﷼﷼﷼",
    path: "/qatar/doha/doha/morimoto",
    image: '/images/morimoto1.png'
  },
  {
    name: "Mr & Mrs Hawker",
    cuisine: "Singaporean",
    price: "﷼﷼",
    path: "/qatar/doha/doha/mr-mrs-hawker",
    image: '/images/mr-mrs-hawker1.png'
  },
  {
    name: "MURU",
    cuisine: "Contemporary",
    price: "﷼﷼﷼﷼",
    path: "/qatar/doha/doha/muru",
    image: '/images/muru1.png'
  },
  {
    name: "Nobu",
    cuisine: "Japanese",
    price: "﷼﷼﷼﷼",
    path: "/qatar/doha/doha/nobu",
    image: '/images/nobu1.png'
  },
  {
    name: "Rivaaj",
    cuisine: "Indian",
    price: "﷼﷼﷼",
    path: "/qatar/doha/doha/rivaaj",
    image: '/images/rivaaj1.png'
  },
  {
    name: "Saasna",
    cuisine: "Middle Eastern",
    price: "﷼﷼",
    path: "/qatar/doha/doha/saasna",
    image: '/images/saasna1.png'
  },
  {
    name: "Salt Road",
    cuisine: "Traditional Cuisine",
    price: "﷼﷼﷼﷼",
    path: "/qatar/doha/doha/salt-road",
    image: '/images/salt-road1.png'
  },
  {
    name: "SAWA by Sanad",
    cuisine: "Middle Eastern",
    price: "﷼﷼﷼",
    path: "/qatar/doha/doha/sawa-by-sanad",
    image: '/images/sawa-by-sanad1.png'
  },
  {
    name: "Shanghai Me Doha",
    cuisine: "Chinese, Japanese",
    price: "﷼﷼﷼﷼",
    path: "/qatar/doha/doha/shanghai-me-doha",
    image: '/images/shanghai-me-doha1.png'
  },
  {
    name: "SMAT",
    cuisine: "Middle Eastern",
    price: "﷼﷼﷼",
    path: "/qatar/doha/doha/smat",
    image: '/images/smat1.png'
  },
  {
    name: "TONO",
    cuisine: "Peruvian, Japanese Contemporary",
    price: "﷼﷼﷼",
    path: "/qatar/doha/doha/tono",
    image: '/images/tono1.png'
  },
  {
    name: "yūn",
    cuisine: "Cantonese",
    price: "﷼﷼﷼",
    path: "/qatar/doha/doha/yn",
    image: '/images/yn1.png'
  },
  {
    name: "Zuma",
    cuisine: "Japanese Contemporary",
    price: "﷼﷼﷼﷼",
    path: "/qatar/doha/doha/zuma",
    image: '/images/zuma1.png'
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
