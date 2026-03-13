import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Xiamen";

const restaurants = [
  {
    name: "1927 Dong Yuan Si Chu",
    cuisine: "Fujian",
    price: "¥¥",
    path: "/china/xiamen/xiamen/1927-dong-yuan-si-chu",
    image: '/images/1927-dong-yuan-si-chu1.png'
  },
  {
    name: "A Xi Xia Mian",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/xiamen/xiamen/a-xi-xia-mian",
    image: '/images/a-xi-xia-mian1.png'
  },
  {
    name: "A Zhong Shi Fang",
    cuisine: "Fujian",
    price: "¥¥",
    path: "/china/xiamen/xiamen/a-zhong-shi-fang",
    image: '/images/a-zhong-shi-fang1.png'
  },
  {
    name: "Bai Jia Chun Hao De Lai Jiang Mu Ya (Zhongxing Road)",
    cuisine: "Fujian",
    price: "¥",
    path: "/china/xiamen/xiamen/bai-jia-chun-hao-de-lai-jiang-mu-ya-zhongxing-road",
    image: '/images/bai-jia-chun-hao-de-lai-jiang-mu-ya-zhongxing-road1.png'
  },
  {
    name: "Chef Kang's",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/xiamen/xiamen/chef-kangs",
    image: '/images/chef-kangs1.png'
  },
  {
    name: "Chen Xian Sen Sha Cha Mian",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/xiamen/xiamen/chen-xian-sen-sha-cha-mian",
    image: '/images/chen-xian-sen-sha-cha-mian1.png'
  },
  {
    name: "Chic 1699",
    cuisine: "Fujian",
    price: "¥¥",
    path: "/china/xiamen/xiamen/chic-1699",
    image: '/images/chic-16991.png'
  },
  {
    name: "Coast",
    cuisine: "European Contemporary",
    price: "¥¥¥",
    path: "/china/xiamen/xiamen/coast",
    image: '/images/coast1.png'
  },
  {
    name: "Cong Hui Tongan Lao Mei Shi Fan Dian",
    cuisine: "Fujian",
    price: "¥",
    path: "/china/xiamen/xiamen/cong-hui-tongan-lao-mei-shi-fan-dian",
    image: '/images/cong-hui-tongan-lao-mei-shi-fan-dian1.png'
  },
  {
    name: "Da Tong Shao Jiu Lang",
    cuisine: "Fujian",
    price: "¥¥",
    path: "/china/xiamen/xiamen/da-tong-shao-jiu-lang",
    image: '/images/da-tong-shao-jiu-lang1.png'
  },
  {
    name: "Dai Tai",
    cuisine: "Yunnanese",
    price: "¥¥",
    path: "/china/xiamen/xiamen/dai-tai",
    image: '/images/dai-tai1.png'
  },
  {
    name: "Fleurs Et Festin",
    cuisine: "Chao Zhou",
    price: "¥¥",
    path: "/china/xiamen/xiamen/fleurs-et-festin",
    image: '/images/fleurs-et-festin1.png'
  },
  {
    name: "Fu Yu Da Tong Ya Rou Zhou",
    cuisine: "Congee",
    price: "¥",
    path: "/china/xiamen/xiamen/fu-yu-da-tong-ya-rou-zhou",
    image: '/images/fu-yu-da-tong-ya-rou-zhou1.png'
  },
  {
    name: "Guo Gong Fan Dian",
    cuisine: "Fujian",
    price: "¥",
    path: "/china/xiamen/xiamen/guo-gong-fan-dian",
    image: '/images/guo-gong-fan-dian1.png'
  },
  {
    name: "Hao Shi Lai",
    cuisine: "Seafood",
    price: "¥¥",
    path: "/china/xiamen/xiamen/hao-shi-lai",
    image: '/images/hao-shi-lai1.png'
  },
  {
    name: "Hokklo",
    cuisine: "Fujian",
    price: "¥¥¥",
    path: "/china/xiamen/xiamen/hokklo",
    image: '/images/hokklo1.png'
  },
  {
    name: "Homeme18 (Huming Road)",
    cuisine: "Fujian",
    price: "¥",
    path: "/china/xiamen/xiamen/homeme18-huming-road",
    image: '/images/homeme18-huming-road1.png'
  },
  {
    name: "Kunshō",
    cuisine: "Innovative",
    price: "¥¥¥¥",
    path: "/china/xiamen/xiamen/kunsh",
    image: '/images/kunsh1.png'
  },
  {
    name: "Lai Cuo Cheng Bian Shi Dian",
    cuisine: "Small eats",
    price: "¥",
    path: "/china/xiamen/xiamen/lai-cuo-cheng-bian-shi-dian",
    image: '/images/lai-cuo-cheng-bian-shi-dian1.png'
  },
  {
    name: "Lao Song Bian Shi Dian",
    cuisine: "Small eats",
    price: "¥",
    path: "/china/xiamen/xiamen/lao-song-bian-shi-dian",
    image: '/images/lao-song-bian-shi-dian1.png'
  },
  {
    name: "Lu Niang Zi (Huli)",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/xiamen/xiamen/lu-niang-zi-huli",
    image: '/images/lu-niang-zi-huli1.png'
  },
  {
    name: "Lucheng",
    cuisine: "Fujian",
    price: "¥¥¥",
    path: "/china/xiamen/xiamen/lucheng",
    image: '/images/lucheng1.png'
  },
  {
    name: "Ming Yue Xia Mian (Xiahe Road)",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/xiamen/xiamen/ming-yue-xia-mian-xiahe-road",
    image: '/images/ming-yue-xia-mian-xiahe-road1.png'
  },
  {
    name: "Minnan Minnan (Siming)",
    cuisine: "Fujian",
    price: "¥¥",
    path: "/china/xiamen/xiamen/minnan-minnan-siming",
    image: '/images/minnan-minnan-siming1.png'
  },
  {
    name: "Pan Ya Yuan",
    cuisine: "Vegetarian",
    price: "¥¥",
    path: "/china/xiamen/xiamen/pan-ya-yuan",
    image: '/images/pan-ya-yuan1.png'
  },
  {
    name: "Panda's",
    cuisine: "Sichuan",
    price: "¥¥",
    path: "/china/xiamen/xiamen/pandas",
    image: '/images/pandas1.png'
  },
  {
    name: "Shan Gu Tang",
    cuisine: "Fujian",
    price: "¥",
    path: "/china/xiamen/xiamen/shan-gu-tang",
    image: '/images/shan-gu-tang1.png'
  },
  {
    name: "Shan Gu Tang (Xiahe Road)",
    cuisine: "Fujian",
    price: "¥",
    path: "/china/xiamen/xiamen/shan-gu-tang-xiahe-road",
    image: '/images/shan-gu-tang-xiahe-road1.png'
  },
  {
    name: "Shan Li Yan Sha Cha Mian",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/xiamen/xiamen/shan-li-yan-sha-cha-mian",
    image: '/images/shan-li-yan-sha-cha-mian1.png'
  },
  {
    name: "Si Xia Li (Huli)",
    cuisine: "Fujian",
    price: "¥¥",
    path: "/china/xiamen/xiamen/si-xia-li-huli",
    image: '/images/si-xia-li-huli1.png'
  },
  {
    name: "Tong'an Fan Dian (Huachang Road)",
    cuisine: "Fujian",
    price: "¥¥",
    path: "/china/xiamen/xiamen/tongan-fan-dian-huachang-road",
    image: '/images/tongan-fan-dian-huachang-road1.png'
  },
  {
    name: "Wu Lan Sha Cha Mian",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/xiamen/xiamen/wu-lan-sha-cha-mian",
    image: '/images/wu-lan-sha-cha-mian1.png'
  },
  {
    name: "Wu Tang Sha Cha Mian",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/xiamen/xiamen/wu-tang-sha-cha-mian",
    image: '/images/wu-tang-sha-cha-mian1.png'
  },
  {
    name: "Wuwei Natural Food",
    cuisine: "Vegetarian",
    price: "¥¥",
    path: "/china/xiamen/xiamen/wuwei-natural-food",
    image: '/images/wuwei-natural-food1.png'
  },
  {
    name: "Xia",
    cuisine: "Cantonese, Fujian",
    price: "¥¥¥",
    path: "/china/xiamen/xiamen/xia",
    image: '/images/xia1.png'
  },
  {
    name: "Xian Xiong Qi",
    cuisine: "Seafood",
    price: "¥¥",
    path: "/china/xiamen/xiamen/xian-xiong-qi",
    image: '/images/xian-xiong-qi1.png'
  },
  {
    name: "Xiang Mo Jin Nian",
    cuisine: "Fujian",
    price: "¥¥",
    path: "/china/xiamen/xiamen/xiang-mo-jin-nian",
    image: '/images/xiang-mo-jin-nian1.png'
  },
  {
    name: "Xiang Mo Jin Nian (Siming)",
    cuisine: "Fujian",
    price: "¥¥",
    path: "/china/xiamen/xiamen/xiang-mo-jin-nian-siming",
    image: '/images/xiang-mo-jin-nian-siming1.png'
  },
  {
    name: "Xiao Cheng Xi",
    cuisine: "Fujian",
    price: "¥¥",
    path: "/china/xiamen/xiamen/xiao-cheng-xi",
    image: '/images/xiao-cheng-xi1.png'
  },
  {
    name: "Xing Wang Seafood · Rongting Hui (Siming)",
    cuisine: "Seafood",
    price: "¥¥¥",
    path: "/china/xiamen/xiamen/xing-wang-seafood-rongting-hui-siming",
    image: '/images/xing-wang-seafood-rongting-hui-siming1.png'
  },
  {
    name: "Yanyu (Jiahe Road)",
    cuisine: "Fujian",
    price: "¥¥¥",
    path: "/china/xiamen/xiamen/yanyu-jiahe-road",
    image: '/images/yanyu-jiahe-road1.png'
  },
  {
    name: "Yin Lu",
    cuisine: "Fujian",
    price: "¥¥¥",
    path: "/china/xiamen/xiamen/yin-lu",
    image: '/images/yin-lu1.png'
  },
  {
    name: "Yue Hua Sha Cha Mian",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/xiamen/xiamen/yue-hua-sha-cha-mian",
    image: '/images/yue-hua-sha-cha-mian1.png'
  },
  {
    name: "Z&D Cuisine",
    cuisine: "Fujian",
    price: "¥¥",
    path: "/china/xiamen/xiamen/zd-cuisine",
    image: '/images/zd-cuisine1.png'
  },
  {
    name: "Zhen Zhen Hai Li Jian",
    cuisine: "Fujian",
    price: "¥",
    path: "/china/xiamen/xiamen/zhen-zhen-hai-li-jian",
    image: '/images/zhen-zhen-hai-li-jian1.png'
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
