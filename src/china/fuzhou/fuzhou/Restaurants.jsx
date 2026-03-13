import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Fuzhou";

const restaurants = [
  {
    name: "167 Shan Hai Li",
    cuisine: "Fujian",
    price: "¥¥",
    path: "/china/fuzhou/fuzhou/167-shan-hai-li",
    image: '/images/167-shan-hai-li1.png'
  },
  {
    name: "A Xin Xian Lao (Gongnong Road)",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/fuzhou/fuzhou/a-xin-xian-lao-gongnong-road",
    image: '/images/a-xin-xian-lao-gongnong-road1.png'
  },
  {
    name: "Chosop",
    cuisine: "Sichuan",
    price: "¥¥",
    path: "/china/fuzhou/fuzhou/chosop",
    image: '/images/chosop1.png'
  },
  {
    name: "Fuyuan",
    cuisine: "Fujian",
    price: "¥¥",
    path: "/china/fuzhou/fuzhou/fuyuan",
    image: '/images/fuyuan1.png'
  },
  {
    name: "Guan Zhong Wang Shi",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/fuzhou/fuzhou/guan-zhong-wang-shi",
    image: '/images/guan-zhong-wang-shi1.png'
  },
  {
    name: "Guan Zhong Wang Shi (Gulou)",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/fuzhou/fuzhou/guan-zhong-wang-shi-gulou",
    image: '/images/guan-zhong-wang-shi-gulou1.png'
  },
  {
    name: "Harmony Garden (Xierhuan North Road)",
    cuisine: "Fujian",
    price: "¥¥",
    path: "/china/fuzhou/fuzhou/harmony-garden-xierhuan-north-road",
    image: '/images/harmony-garden-xierhuan-north-road1.png'
  },
  {
    name: "Hatter",
    cuisine: "European Contemporary",
    price: "¥¥¥¥",
    path: "/china/fuzhou/fuzhou/hatter",
    image: '/images/hatter1.png'
  },
  {
    name: "Hou Jie Lao Hua (216 Tonghu Road)",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/fuzhou/fuzhou/hou-jie-lao-hua-216-tonghu-road",
    image: '/images/hou-jie-lao-hua-216-tonghu-road1.png'
  },
  {
    name: "Hui Wei Private Kitchen",
    cuisine: "Fujian",
    price: "¥¥",
    path: "/china/fuzhou/fuzhou/hui-wei-private-kitchen",
    image: '/images/hui-wei-private-kitchen1.png'
  },
  {
    name: "J & A Steak House",
    cuisine: "Steakhouse",
    price: "¥¥¥",
    path: "/china/fuzhou/fuzhou/j-a-steak-house",
    image: '/images/j-a-steak-house1.png'
  },
  {
    name: "Jiangnan Wok ‧ Rong",
    cuisine: "Huaiyang",
    price: "¥¥¥",
    path: "/china/fuzhou/fuzhou/jiangnan-wok-rong",
    image: '/images/jiangnan-wok-rong1.png'
  },
  {
    name: "Jing Li",
    cuisine: "Fujian",
    price: "¥¥",
    path: "/china/fuzhou/fuzhou/jing-li",
    image: '/images/jing-li1.png'
  },
  {
    name: "Lin Yi Nen Ming Pai Zhu Xue Hua",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/fuzhou/fuzhou/lin-yi-nen-ming-pai-zhu-xue-hua",
    image: '/images/lin-yi-nen-ming-pai-zhu-xue-hua1.png'
  },
  {
    name: "Longkushan Eatery",
    cuisine: "Fujian",
    price: "¥",
    path: "/china/fuzhou/fuzhou/longkushan-eatery",
    image: '/images/longkushan-eatery1.png'
  },
  {
    name: "Mei Ya Bo Hua Sheng Tang",
    cuisine: "Small eats",
    price: "¥",
    path: "/china/fuzhou/fuzhou/mei-ya-bo-hua-sheng-tang",
    image: '/images/mei-ya-bo-hua-sheng-tang1.png'
  },
  {
    name: "Min Shi Fu",
    cuisine: "Fujian",
    price: "¥¥",
    path: "/china/fuzhou/fuzhou/min-shi-fu",
    image: '/images/min-shi-fu1.png'
  },
  {
    name: "Origin",
    cuisine: "Fujian",
    price: "¥¥",
    path: "/china/fuzhou/fuzhou/origin",
    image: '/images/origin1.png'
  },
  {
    name: "Rong Ji Hai Xian Lao Hua (Cangshan)",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/fuzhou/fuzhou/rong-ji-hai-xian-lao-hua-cangshan",
    image: '/images/rong-ji-hai-xian-lao-hua-cangshan1.png'
  },
  {
    name: "Shan Hai Nan Yan",
    cuisine: "Fujian",
    price: "¥¥",
    path: "/china/fuzhou/fuzhou/shan-hai-nan-yan",
    image: '/images/shan-hai-nan-yan1.png'
  },
  {
    name: "Shang Xing",
    cuisine: "Chao Zhou",
    price: "¥¥",
    path: "/china/fuzhou/fuzhou/shang-xing",
    image: '/images/shang-xing1.png'
  },
  {
    name: "Sheng Hai Lou (Cangshan)",
    cuisine: "Fujian",
    price: "¥¥",
    path: "/china/fuzhou/fuzhou/sheng-hai-lou-cangshan",
    image: '/images/sheng-hai-lou-cangshan1.png'
  },
  {
    name: "Wei Rong Lao Hua",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/fuzhou/fuzhou/wei-rong-lao-hua",
    image: '/images/wei-rong-lao-hua1.png'
  },
  {
    name: "Wenru No.9",
    cuisine: "Fujian",
    price: "¥¥",
    path: "/china/fuzhou/fuzhou/wenru-no9",
    image: '/images/wenru-no91.png'
  },
  {
    name: "Xingxian (Mawei)",
    cuisine: "Seafood",
    price: "¥¥",
    path: "/china/fuzhou/fuzhou/xingxian-mawei",
    image: '/images/xingxian-mawei1.png'
  },
  {
    name: "Xuanhe Cuisine",
    cuisine: "Fujian",
    price: "¥¥",
    path: "/china/fuzhou/fuzhou/xuanhe-cuisine",
    image: '/images/xuanhe-cuisine1.png'
  },
  {
    name: "Ye Jia Hua Sheng Tang",
    cuisine: "Small eats",
    price: "¥",
    path: "/china/fuzhou/fuzhou/ye-jia-hua-sheng-tang",
    image: '/images/ye-jia-hua-sheng-tang1.png'
  },
  {
    name: "Yi Qiang (Dadao Road)",
    cuisine: "Fujian",
    price: "¥",
    path: "/china/fuzhou/fuzhou/yi-qiang-dadao-road",
    image: '/images/yi-qiang-dadao-road1.png'
  },
  {
    name: "Yi Tong Lou",
    cuisine: "Fujian",
    price: "¥¥",
    path: "/china/fuzhou/fuzhou/yi-tong-lou",
    image: '/images/yi-tong-lou1.png'
  },
  {
    name: "Yong Zhou Ji Bian Rou (Jinrong South Road)",
    cuisine: "Small eats",
    price: "¥",
    path: "/china/fuzhou/fuzhou/yong-zhou-ji-bian-rou-jinrong-south-road",
    image: '/images/yong-zhou-ji-bian-rou-jinrong-south-road1.png'
  },
  {
    name: "Yu Xian Lou",
    cuisine: "Seafood",
    price: "¥¥",
    path: "/china/fuzhou/fuzhou/yu-xian-lou",
    image: '/images/yu-xian-lou1.png'
  },
  {
    name: "Yut Fei",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/fuzhou/fuzhou/yut-fei",
    image: '/images/yut-fei1.png'
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
