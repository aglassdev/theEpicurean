import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Khon Kaen";

const restaurants = [
  {
    name: "Baan Heng",
    cuisine: "Thai-Chinese",
    price: "฿",
    path: "/thailand/khon-kaen/khon-kaen/baan-heng",
    image: '/images/baan-heng1.png'
  },
  {
    name: "Food by Fire",
    cuisine: "Barbecue, Grills",
    price: "฿฿฿",
    path: "/thailand/khon-kaen/khon-kaen/food-by-fire",
    image: '/images/food-by-fire1.png'
  },
  {
    name: "Guang Tang Noodles",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/khon-kaen/khon-kaen/guang-tang-noodles",
    image: '/images/guang-tang-noodles1.png'
  },
  {
    name: "Here Joi Beef Noodle",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/khon-kaen/khon-kaen/here-joi-beef-noodle",
    image: '/images/here-joi-beef-noodle1.png'
  },
  {
    name: "Jok Guay Jab Tom Sen Bat Queue",
    cuisine: "Street Food",
    price: "฿",
    path: "/thailand/khon-kaen/khon-kaen/jok-guay-jab-tom-sen-bat-queue",
    image: '/images/jok-guay-jab-tom-sen-bat-queue1.png'
  },
  {
    name: "Kaen",
    cuisine: "Thai contemporary, Isan",
    price: "฿฿",
    path: "/thailand/khon-kaen/khon-kaen/kaen",
    image: '/images/kaen1.png'
  },
  {
    name: "Kai Yang Rabeab (Khao Suan Kwang)",
    cuisine: "Isan",
    price: "฿",
    path: "/thailand/khon-kaen/khon-kaen/kai-yang-rabeab-khao-suan-kwang",
    image: '/images/kai-yang-rabeab-khao-suan-kwang1.png'
  },
  {
    name: "Kai Yang Wanna",
    cuisine: "Isan",
    price: "฿",
    path: "/thailand/khon-kaen/khon-kaen/kai-yang-wanna",
    image: '/images/kai-yang-wanna1.png'
  },
  {
    name: "Kao Lao Siang Ji",
    cuisine: "Small eats",
    price: "฿",
    path: "/thailand/khon-kaen/khon-kaen/kao-lao-siang-ji",
    image: '/images/kao-lao-siang-ji1.png'
  },
  {
    name: "Kaprao E Jae",
    cuisine: "Thai",
    price: "฿",
    path: "/thailand/khon-kaen/khon-kaen/kaprao-e-jae",
    image: '/images/kaprao-e-jae1.png'
  },
  {
    name: "Khon Kaen Grilled Pork Neck",
    cuisine: "Street Food",
    price: "฿",
    path: "/thailand/khon-kaen/khon-kaen/khon-kaen-grilled-pork-neck",
    image: '/images/khon-kaen-grilled-pork-neck1.png'
  },
  {
    name: "Khun Jaeng Guay Tiew Pak Mor Kao Wang",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/khon-kaen/khon-kaen/khun-jaeng-guay-tiew-pak-mor-kao-wang",
    image: '/images/khun-jaeng-guay-tiew-pak-mor-kao-wang1.png'
  },
  {
    name: "Krua Supanniga by Khunyai Somsie",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/khon-kaen/khon-kaen/krua-supanniga-by-khunyai-somsie",
    image: '/images/krua-supanniga-by-khunyai-somsie1.png'
  },
  {
    name: "Leng Yentafo",
    cuisine: "Street Food",
    price: "฿",
    path: "/thailand/khon-kaen/khon-kaen/leng-yentafo",
    image: '/images/leng-yentafo1.png'
  },
  {
    name: "Mana",
    cuisine: "Thai-Chinese",
    price: "฿฿",
    path: "/thailand/khon-kaen/khon-kaen/mana",
    image: '/images/mana1.png'
  },
  {
    name: "Mana",
    cuisine: "Thai-Chinese",
    price: "฿฿",
    path: "/thailand/khon-kaen/khon-kaen/mana",
    image: '/images/mana1.png'
  },
  {
    name: "Mekin Farm",
    cuisine: "Isan",
    price: "฿฿",
    path: "/thailand/khon-kaen/khon-kaen/mekin-farm",
    image: '/images/mekin-farm1.png'
  },
  {
    name: "Pho Tha Bo",
    cuisine: "Vietnamese, Thai and Vietnamese",
    price: "฿",
    path: "/thailand/khon-kaen/khon-kaen/pho-tha-bo",
    image: '/images/pho-tha-bo1.png'
  },
  {
    name: "Praprai",
    cuisine: "Isan",
    price: "฿฿",
    path: "/thailand/khon-kaen/khon-kaen/praprai",
    image: '/images/praprai1.png'
  },
  {
    name: "Prasit",
    cuisine: "Isan",
    price: "฿",
    path: "/thailand/khon-kaen/khon-kaen/prasit",
    image: '/images/prasit1.png'
  },
  {
    name: "See Na Nuan Café",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/khon-kaen/khon-kaen/see-na-nuan-caf",
    image: '/images/see-na-nuan-caf1.png'
  },
  {
    name: "So Jeng",
    cuisine: "Isan",
    price: "฿",
    path: "/thailand/khon-kaen/khon-kaen/so-jeng",
    image: '/images/so-jeng1.png'
  },
  {
    name: "Song 24 Nor",
    cuisine: "Thai",
    price: "฿",
    path: "/thailand/khon-kaen/khon-kaen/song-24-nor",
    image: '/images/song-24-nor1.png'
  },
  {
    name: "Sookjailand",
    cuisine: "Isan",
    price: "฿฿",
    path: "/thailand/khon-kaen/khon-kaen/sookjailand",
    image: '/images/sookjailand1.png'
  },
  {
    name: "Sriruen Pad Thai (Ruenchit Road)",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/khon-kaen/khon-kaen/sriruen-pad-thai-ruenchit-road",
    image: '/images/sriruen-pad-thai-ruenchit-road1.png'
  },
  {
    name: "Tumkratoei Sagate",
    cuisine: "Isan",
    price: "฿฿",
    path: "/thailand/khon-kaen/khon-kaen/tumkratoei-sagate",
    image: '/images/tumkratoei-sagate1.png'
  },
  {
    name: "Vacca",
    cuisine: "Italian",
    price: "฿฿",
    path: "/thailand/khon-kaen/khon-kaen/vacca",
    image: '/images/vacca1.png'
  },
  {
    name: "Whale Chicken Noodles",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/khon-kaen/khon-kaen/whale-chicken-noodles",
    image: '/images/whale-chicken-noodles1.png'
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
