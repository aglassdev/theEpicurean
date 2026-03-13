import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Suzhou";

const restaurants = [
  {
    name: "Bai Sheng Ren Jia (Wuzhong)",
    cuisine: "Jiangsu Cuisine",
    price: "¥¥",
    path: "/china/suzhou/suzhou/bai-sheng-ren-jia-wuzhong",
    image: '/images/bai-sheng-ren-jia-wuzhong1.png'
  },
  {
    name: "Ban Lan (Huqiu)",
    cuisine: "Fujian",
    price: "¥¥¥",
    path: "/china/suzhou/suzhou/ban-lan-huqiu",
    image: '/images/ban-lan-huqiu1.png'
  },
  {
    name: "Ban Ting Jia Yan (Suzhou Industrial Park)",
    cuisine: "Jiangsu Cuisine",
    price: "¥¥",
    path: "/china/suzhou/suzhou/ban-ting-jia-yan-suzhou-industrial-park",
    image: '/images/ban-ting-jia-yan-suzhou-industrial-park1.png'
  },
  {
    name: "Chai Court",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/suzhou/suzhou/chai-court",
    image: '/images/chai-court1.png'
  },
  {
    name: "Chao 27",
    cuisine: "Chao Zhou",
    price: "¥¥¥",
    path: "/china/suzhou/suzhou/chao-27",
    image: '/images/chao-271.png'
  },
  {
    name: "Dingshan·Jiangyan (Xiangcheng)",
    cuisine: "Jiangsu Cuisine",
    price: "¥¥¥",
    path: "/china/suzhou/suzhou/dingshanjiangyan-xiangcheng",
    image: '/images/dingshanjiangyan-xiangcheng1.png'
  },
  {
    name: "Exquisite Bocuse",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/suzhou/suzhou/exquisite-bocuse",
    image: '/images/exquisite-bocuse1.png'
  },
  {
    name: "Ge Jia Wu Farmer’s House",
    cuisine: "Jiangsu Cuisine",
    price: "¥¥",
    path: "/china/suzhou/suzhou/ge-jia-wu-farmers-house",
    image: '/images/ge-jia-wu-farmers-house1.png'
  },
  {
    name: "Gu Su Qiao (Diyi Tianmen)",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/suzhou/suzhou/gu-su-qiao-diyi-tianmen",
    image: '/images/gu-su-qiao-diyi-tianmen1.png'
  },
  {
    name: "Hua Chi 88",
    cuisine: "Jiangsu Cuisine",
    price: "¥¥",
    path: "/china/suzhou/suzhou/hua-chi-88",
    image: '/images/hua-chi-881.png'
  },
  {
    name: "Hui Lao Tang",
    cuisine: "Jiangsu Cuisine",
    price: "¥¥¥",
    path: "/china/suzhou/suzhou/hui-lao-tang",
    image: '/images/hui-lao-tang1.png'
  },
  {
    name: "Jin Jing Ge",
    cuisine: "Jiangzhe",
    price: "¥¥¥",
    path: "/china/suzhou/suzhou/jin-jing-ge",
    image: '/images/jin-jing-ge1.png'
  },
  {
    name: "Lao Chen Jia",
    cuisine: "Jiangsu Cuisine",
    price: "¥¥",
    path: "/china/suzhou/suzhou/lao-chen-jia",
    image: '/images/lao-chen-jia1.png'
  },
  {
    name: "Lao Zhen Yuan (Zhuangqiao Road)",
    cuisine: "Jiangsu Cuisine",
    price: "¥¥",
    path: "/china/suzhou/suzhou/lao-zhen-yuan-zhuangqiao-road",
    image: '/images/lao-zhen-yuan-zhuangqiao-road1.png'
  },
  {
    name: "Ling Ling Jiu Jia",
    cuisine: "Jiangsu Cuisine",
    price: "¥¥",
    path: "/china/suzhou/suzhou/ling-ling-jiu-jia",
    image: '/images/ling-ling-jiu-jia1.png'
  },
  {
    name: "Oriental Chao",
    cuisine: "Chao Zhou",
    price: "¥¥",
    path: "/china/suzhou/suzhou/oriental-chao",
    image: '/images/oriental-chao1.png'
  },
  {
    name: "Pingjiangsong",
    cuisine: "Jiangsu Cuisine",
    price: "¥¥¥¥",
    path: "/china/suzhou/suzhou/pingjiangsong",
    image: '/images/pingjiangsong1.png'
  },
  {
    name: "Su Cheng Jia Yan (Ligongdi Road)",
    cuisine: "Jiangsu Cuisine",
    price: "¥¥",
    path: "/china/suzhou/suzhou/su-cheng-jia-yan-ligongdi-road",
    image: '/images/su-cheng-jia-yan-ligongdi-road1.png'
  },
  {
    name: "Su Mian Fang",
    cuisine: "Noodles",
    price: "¥¥",
    path: "/china/suzhou/suzhou/su-mian-fang",
    image: '/images/su-mian-fang1.png'
  },
  {
    name: "Tong De Xing (Jiayu Fang)",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/suzhou/suzhou/tong-de-xing-jiayu-fang",
    image: '/images/tong-de-xing-jiayu-fang1.png'
  },
  {
    name: "Wan Tai Xing",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/suzhou/suzhou/wan-tai-xing",
    image: '/images/wan-tai-xing1.png'
  },
  {
    name: "Wei Ji Ao Mian Guan (East Baita Road)",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/suzhou/suzhou/wei-ji-ao-mian-guan-east-baita-road",
    image: '/images/wei-ji-ao-mian-guan-east-baita-road1.png'
  },
  {
    name: "Xin Ju Feng Cai Guan (Taijianlane)",
    cuisine: "Jiangsu Cuisine",
    price: "¥¥¥",
    path: "/china/suzhou/suzhou/xin-ju-feng-cai-guan-taijianlane",
    image: '/images/xin-ju-feng-cai-guan-taijianlane1.png'
  },
  {
    name: "Xin Jun Feng Cai Guan (Taijianlane)",
    cuisine: "Jiangsu Cuisine",
    price: "¥¥¥",
    path: "/china/suzhou/suzhou/xin-jun-feng-cai-guan-taijianlane",
    image: '/images/xin-jun-feng-cai-guan-taijianlane1.png'
  },
  {
    name: "Xiu",
    cuisine: "Jiangzhe",
    price: "¥¥¥",
    path: "/china/suzhou/suzhou/xiu",
    image: '/images/xiu1.png'
  },
  {
    name: "Xizhou Hall",
    cuisine: "Jiangsu Cuisine",
    price: "¥¥¥",
    path: "/china/suzhou/suzhou/xizhou-hall",
    image: '/images/xizhou-hall1.png'
  },
  {
    name: "Ya Ba Sheng Jian (Wenjia An)",
    cuisine: "Dim Sum",
    price: "¥",
    path: "/china/suzhou/suzhou/ya-ba-sheng-jian-wenjia-an",
    image: '/images/ya-ba-sheng-jian-wenjia-an1.png'
  },
  {
    name: "Yangzhou Yan · Qu Yuan",
    cuisine: "Huaiyang",
    price: "¥¥",
    path: "/china/suzhou/suzhou/yangzhou-yan-qu-yuan",
    image: '/images/yangzhou-yan-qu-yuan1.png'
  },
  {
    name: "Yu Mian Tang",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/suzhou/suzhou/yu-mian-tang",
    image: '/images/yu-mian-tang1.png'
  },
  {
    name: "Zhuo Yan·Zhuo Mian",
    cuisine: "Jiangzhe, Cantonese",
    price: "¥¥",
    path: "/china/suzhou/suzhou/zhuo-yanzhuo-mian",
    image: '/images/zhuo-yanzhuo-mian1.png'
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
