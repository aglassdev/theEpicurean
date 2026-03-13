import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Phra Nakhon Si Ayutthaya";

const restaurants = [
  {
    name: "Angeum",
    cuisine: "Vietnamese",
    price: "฿฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/angeum",
    image: '/images/angeum1.png'
  },
  {
    name: "Ayutthayarom",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/ayutthayarom",
    image: '/images/ayutthayarom1.png'
  },
  {
    name: "Baan Mai Rim Nahm",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/baan-mai-rim-nahm",
    image: '/images/baan-mai-rim-nahm1.png'
  },
  {
    name: "Baan Pomphet",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/baan-pomphet",
    image: '/images/baan-pomphet1.png'
  },
  {
    name: "Baan Pu Karn",
    cuisine: "Thai",
    price: "฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/baan-pu-karn",
    image: '/images/baan-pu-karn1.png'
  },
  {
    name: "Baan Ta Ko Rai",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/baan-ta-ko-rai",
    image: '/images/baan-ta-ko-rai1.png'
  },
  {
    name: "Baan Ton Sai",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/baan-ton-sai",
    image: '/images/baan-ton-sai1.png'
  },
  {
    name: "Baan Watcharachai",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/baan-watcharachai",
    image: '/images/baan-watcharachai1.png'
  },
  {
    name: "Grand Chaopraya",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/grand-chaopraya",
    image: '/images/grand-chaopraya1.png'
  },
  {
    name: "Gu Cherng",
    cuisine: "Chinese",
    price: "฿฿฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/gu-cherng",
    image: '/images/gu-cherng1.png'
  },
  {
    name: "Here Klae Pork Satay",
    cuisine: "Street Food",
    price: "฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/here-klae-pork-satay",
    image: '/images/here-klae-pork-satay1.png'
  },
  {
    name: "Hoi Tod Singha Buri",
    cuisine: "Street Food",
    price: "฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/hoi-tod-singha-buri",
    image: '/images/hoi-tod-singha-buri1.png'
  },
  {
    name: "Kampun Gai Yang",
    cuisine: "Isan",
    price: "฿฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/kampun-gai-yang",
    image: '/images/kampun-gai-yang1.png'
  },
  {
    name: "Kampun Kai Yang",
    cuisine: "Isan",
    price: "฿฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/kampun-kai-yang",
    image: '/images/kampun-kai-yang1.png'
  },
  {
    name: "KaowLaor",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/kaowlaor",
    image: '/images/kaowlaor1.png'
  },
  {
    name: "Khanom Mho Kaeng Mae Yai (Phai Ling)",
    cuisine: "Small eats",
    price: "฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/khanom-mho-kaeng-mae-yai-phai-ling",
    image: '/images/khanom-mho-kaeng-mae-yai-phai-ling1.png'
  },
  {
    name: "Khaotom Chedi",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/khaotom-chedi",
    image: '/images/khaotom-chedi1.png'
  },
  {
    name: "Kin Lookdeaw",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/kin-lookdeaw",
    image: '/images/kin-lookdeaw1.png'
  },
  {
    name: "Krua Taan",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/krua-taan",
    image: '/images/krua-taan1.png'
  },
  {
    name: "Nai Khlong Boat Noodles",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/nai-khlong-boat-noodles",
    image: '/images/nai-khlong-boat-noodles1.png'
  },
  {
    name: "Nai Liak Beef Noodles",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/nai-liak-beef-noodles",
    image: '/images/nai-liak-beef-noodles1.png'
  },
  {
    name: "O",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/o",
    image: '/images/o1.png'
  },
  {
    name: "Pa Lek Boat Noodles",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/pa-lek-boat-noodles",
    image: '/images/pa-lek-boat-noodles1.png'
  },
  {
    name: "Pa Porn Traditional Pork Noodles",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/pa-porn-traditional-pork-noodles",
    image: '/images/pa-porn-traditional-pork-noodles1.png'
  },
  {
    name: "Phae Krung Kao",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/phae-krung-kao",
    image: '/images/phae-krung-kao1.png'
  },
  {
    name: "Pranom Shredded Chicken Noodles (Tha Wasukri)",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/pranom-shredded-chicken-noodles-tha-wasukri",
    image: '/images/pranom-shredded-chicken-noodles-tha-wasukri1.png'
  },
  {
    name: "Pratunam Baan Ko Noodles",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/pratunam-baan-ko-noodles",
    image: '/images/pratunam-baan-ko-noodles1.png'
  },
  {
    name: "Preaw Pak",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/preaw-pak",
    image: '/images/preaw-pak1.png'
  },
  {
    name: "Rimsaun",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/rimsaun",
    image: '/images/rimsaun1.png'
  },
  {
    name: "Roti Sai Mai Abeedeen-Pranom Sangaroon",
    cuisine: "Street Food",
    price: "฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/roti-sai-mai-abeedeen-pranom-sangaroon",
    image: '/images/roti-sai-mai-abeedeen-pranom-sangaroon1.png'
  },
  {
    name: "Ruan Thai Kung Pao",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/ruan-thai-kung-pao",
    image: '/images/ruan-thai-kung-pao1.png'
  },
  {
    name: "Ruen Jarung",
    cuisine: "Thai",
    price: "฿฿฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/ruen-jarung",
    image: '/images/ruen-jarung1.png'
  },
  {
    name: "Suriyan Chandra",
    cuisine: "Thai",
    price: "฿฿฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/suriyan-chandra",
    image: '/images/suriyan-chandra1.png'
  },
  {
    name: "Tonnam Riverview",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/tonnam-riverview",
    image: '/images/tonnam-riverview1.png'
  },
  {
    name: "Uan Ja Noodle",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/uan-ja-noodle",
    image: '/images/uan-ja-noodle1.png'
  },
  {
    name: "U-Khao",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/phra-nakhon-si-ayutthaya/phra-nakhon-si-ayutthaya/u-khao",
    image: '/images/u-khao1.png'
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
