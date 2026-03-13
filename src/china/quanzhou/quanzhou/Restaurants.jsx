import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Quanzhou";

const restaurants = [
  {
    name: "A Qiu Niu Pai (Huxin Street)",
    cuisine: "Fujian",
    price: "¥",
    path: "/china/quanzhou/quanzhou/a-qiu-niu-pai-huxin-street",
    image: '/images/a-qiu-niu-pai-huxin-street1.png'
  },
  {
    name: "Antstory",
    cuisine: "Fujian",
    price: "¥¥",
    path: "/china/quanzhou/quanzhou/antstory",
    image: '/images/antstory1.png'
  },
  {
    name: "Che Qiao Tou Wen A Shui Wan (Daxi Street)",
    cuisine: "Small eats",
    price: "¥",
    path: "/china/quanzhou/quanzhou/che-qiao-tou-wen-a-shui-wan-daxi-street",
    image: '/images/che-qiao-tou-wen-a-shui-wan-daxi-street1.png'
  },
  {
    name: "Chun Sheng",
    cuisine: "Fujian",
    price: "¥¥",
    path: "/china/quanzhou/quanzhou/chun-sheng",
    image: '/images/chun-sheng1.png'
  },
  {
    name: "De Wen Xia Zai Mian",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/quanzhou/quanzhou/de-wen-xia-zai-mian",
    image: '/images/de-wen-xia-zai-mian1.png'
  },
  {
    name: "Hall Thing (Licheng)",
    cuisine: "Fujian",
    price: "¥¥",
    path: "/china/quanzhou/quanzhou/hall-thing-licheng",
    image: '/images/hall-thing-licheng1.png'
  },
  {
    name: "Hám-Khàk",
    cuisine: "Fujian",
    price: "¥¥¥",
    path: "/china/quanzhou/quanzhou/hm-khk",
    image: '/images/hm-khk1.png'
  },
  {
    name: "Jian Lai Fa",
    cuisine: "Fujian",
    price: "¥¥",
    path: "/china/quanzhou/quanzhou/jian-lai-fa",
    image: '/images/jian-lai-fa1.png'
  },
  {
    name: "Jiang Nan Yuan",
    cuisine: "Vegetarian",
    price: "¥¥¥",
    path: "/china/quanzhou/quanzhou/jiang-nan-yuan",
    image: '/images/jiang-nan-yuan1.png'
  },
  {
    name: "Lao A Bo",
    cuisine: "Fujian",
    price: "¥¥",
    path: "/china/quanzhou/quanzhou/lao-a-bo",
    image: '/images/lao-a-bo1.png'
  },
  {
    name: "Luo Ji Mian Xian Hu",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/quanzhou/quanzhou/luo-ji-mian-xian-hu",
    image: '/images/luo-ji-mian-xian-hu1.png'
  },
  {
    name: "Lvdao Seafood",
    cuisine: "Fujian",
    price: "¥¥",
    path: "/china/quanzhou/quanzhou/lvdao-seafood",
    image: '/images/lvdao-seafood1.png'
  },
  {
    name: "Nan Qi Lou 1924",
    cuisine: "Fujian",
    price: "¥¥",
    path: "/china/quanzhou/quanzhou/nan-qi-lou-1924",
    image: '/images/nan-qi-lou-19241.png'
  },
  {
    name: "Qing You Yu",
    cuisine: "Seafood",
    price: "¥¥¥",
    path: "/china/quanzhou/quanzhou/qing-you-yu",
    image: '/images/qing-you-yu1.png'
  },
  {
    name: "Wai Tou Niu Rou (Meiling Road)",
    cuisine: "Fujian",
    price: "¥",
    path: "/china/quanzhou/quanzhou/wai-tou-niu-rou-meiling-road",
    image: '/images/wai-tou-niu-rou-meiling-road1.png'
  },
  {
    name: "Zayton Courtyard (Licheng)",
    cuisine: "Fujian",
    price: "¥¥",
    path: "/china/quanzhou/quanzhou/zayton-courtyard-licheng",
    image: '/images/zayton-courtyard-licheng1.png'
  },
  {
    name: "Zhang Lin A Shan Jiang Mu Ya",
    cuisine: "Fujian",
    price: "¥",
    path: "/china/quanzhou/quanzhou/zhang-lin-a-shan-jiang-mu-ya",
    image: '/images/zhang-lin-a-shan-jiang-mu-ya1.png'
  },
  {
    name: "Zhong Ji Yan Shao Fan Ya",
    cuisine: "Fujian",
    price: "¥",
    path: "/china/quanzhou/quanzhou/zhong-ji-yan-shao-fan-ya",
    image: '/images/zhong-ji-yan-shao-fan-ya1.png'
  },
  {
    name: "Zhuang Ji Quan Fu Lu Mian Guan",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/quanzhou/quanzhou/zhuang-ji-quan-fu-lu-mian-guan",
    image: '/images/zhuang-ji-quan-fu-lu-mian-guan1.png'
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
