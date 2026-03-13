import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Nanjing";

const restaurants = [
  {
    name: "Chi Man",
    cuisine: "Jiangzhe",
    price: "¥¥",
    path: "/china/nanjing/nanjing/chi-man",
    image: '/images/chi-man1.png'
  },
  {
    name: "Dai Yuet Heen",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/nanjing/nanjing/dai-yuet-heen",
    image: '/images/dai-yuet-heen1.png'
  },
  {
    name: "Du Shi Li De Xiang Cun",
    cuisine: "Jiangzhe",
    price: "¥¥",
    path: "/china/nanjing/nanjing/du-shi-li-de-xiang-cun",
    image: '/images/du-shi-li-de-xiang-cun1.png'
  },
  {
    name: "Fang Po",
    cuisine: "Small eats",
    price: "¥",
    path: "/china/nanjing/nanjing/fang-po",
    image: '/images/fang-po1.png'
  },
  {
    name: "Guang Ying Ju • Lao Zheng Xing",
    cuisine: "Jiangsu Cuisine",
    price: "¥¥",
    path: "/china/nanjing/nanjing/guang-ying-ju-lao-zheng-xing",
    image: '/images/guang-ying-ju-lao-zheng-xing1.png'
  },
  {
    name: "Hao Po Tang Bao",
    cuisine: "Dim Sum",
    price: "¥",
    path: "/china/nanjing/nanjing/hao-po-tang-bao",
    image: '/images/hao-po-tang-bao1.png'
  },
  {
    name: "Hou Pin Xiao Yuan",
    cuisine: "Huaiyang",
    price: "¥¥",
    path: "/china/nanjing/nanjing/hou-pin-xiao-yuan",
    image: '/images/hou-pin-xiao-yuan1.png'
  },
  {
    name: "Jiangnan Wok",
    cuisine: "Huaiyang",
    price: "¥¥",
    path: "/china/nanjing/nanjing/jiangnan-wok",
    image: '/images/jiangnan-wok1.png'
  },
  {
    name: "Jiangnan Wok · Yun",
    cuisine: "Huaiyang",
    price: "¥¥¥¥",
    path: "/china/nanjing/nanjing/jiangnan-wok-yun",
    image: '/images/jiangnan-wok-yun1.png'
  },
  {
    name: "Jin Ling Wang Jia Hun Tun (Jiqing Road)",
    cuisine: "Dim Sum",
    price: "¥",
    path: "/china/nanjing/nanjing/jin-ling-wang-jia-hun-tun-jiqing-road",
    image: '/images/jin-ling-wang-jia-hun-tun-jiqing-road1.png'
  },
  {
    name: "Jin Ling Yang Jia Hun Tun Dian (Caodu Alley)",
    cuisine: "Dim Sum",
    price: "¥",
    path: "/china/nanjing/nanjing/jin-ling-yang-jia-hun-tun-dian-caodu-alley",
    image: '/images/jin-ling-yang-jia-hun-tun-dian-caodu-alley1.png'
  },
  {
    name: "Jin Ling Yang Jia Hun Tun Dian (Caodu Lane)",
    cuisine: "Dim Sum",
    price: "¥",
    path: "/china/nanjing/nanjing/jin-ling-yang-jia-hun-tun-dian-caodu-lane",
    image: '/images/jin-ling-yang-jia-hun-tun-dian-caodu-lane1.png'
  },
  {
    name: "Lantchen Reserve",
    cuisine: "Huaiyang",
    price: "¥¥",
    path: "/china/nanjing/nanjing/lantchen-reserve",
    image: '/images/lantchen-reserve1.png'
  },
  {
    name: "L'Arôme in the sky",
    cuisine: "French Contemporary",
    price: "¥¥¥¥",
    path: "/china/nanjing/nanjing/larme-in-the-sky",
    image: '/images/larme-in-the-sky1.png'
  },
  {
    name: "Le Siècle",
    cuisine: "European Contemporary",
    price: "¥¥¥",
    path: "/china/nanjing/nanjing/le-sicle",
    image: '/images/le-sicle1.png'
  },
  {
    name: "Li Ji Qing Zhen Guan",
    cuisine: "Dim Sum",
    price: "¥",
    path: "/china/nanjing/nanjing/li-ji-qing-zhen-guan",
    image: '/images/li-ji-qing-zhen-guan1.png'
  },
  {
    name: "Longyin Shanfang (Jiangning)",
    cuisine: "Huaiyang",
    price: "¥¥¥",
    path: "/china/nanjing/nanjing/longyin-shanfang-jiangning",
    image: '/images/longyin-shanfang-jiangning1.png'
  },
  {
    name: "Man Ho",
    cuisine: "Huaiyang",
    price: "¥¥",
    path: "/china/nanjing/nanjing/man-ho",
    image: '/images/man-ho1.png'
  },
  {
    name: "Meng Du Hui",
    cuisine: "Hui Cuisine",
    price: "¥¥¥",
    path: "/china/nanjing/nanjing/meng-du-hui",
    image: '/images/meng-du-hui1.png'
  },
  {
    name: "Pin Ning Fu",
    cuisine: "Huaiyang",
    price: "¥¥",
    path: "/china/nanjing/nanjing/pin-ning-fu",
    image: '/images/pin-ning-fu1.png'
  },
  {
    name: "Pin Wei Jiang Nan",
    cuisine: "Huaiyang",
    price: "¥¥¥",
    path: "/china/nanjing/nanjing/pin-wei-jiang-nan",
    image: '/images/pin-wei-jiang-nan1.png'
  },
  {
    name: "Plum Garden",
    cuisine: "Huaiyang",
    price: "¥¥¥",
    path: "/china/nanjing/nanjing/plum-garden",
    image: '/images/plum-garden1.png'
  },
  {
    name: "Purple Mountain Garden",
    cuisine: "Jiangzhe",
    price: "¥¥¥",
    path: "/china/nanjing/nanjing/purple-mountain-garden",
    image: '/images/purple-mountain-garden1.png'
  },
  {
    name: "Qiang Ye Fan Dian (Changbai Street)",
    cuisine: "Cantonese, Jiangsu Cuisine",
    price: "¥¥",
    path: "/china/nanjing/nanjing/qiang-ye-fan-dian-changbai-street",
    image: '/images/qiang-ye-fan-dian-changbai-street1.png'
  },
  {
    name: "San Bai Wan Bao Ying Chang Yu Mian",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/nanjing/nanjing/san-bai-wan-bao-ying-chang-yu-mian",
    image: '/images/san-bai-wan-bao-ying-chang-yu-mian1.png'
  },
  {
    name: "Wan Guo Chun Garden Restaurant",
    cuisine: "Huaiyang",
    price: "¥¥",
    path: "/china/nanjing/nanjing/wan-guo-chun-garden-restaurant",
    image: '/images/wan-guo-chun-garden-restaurant1.png'
  },
  {
    name: "Xi Bei Qiao Tou La Mian Da Wang",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/nanjing/nanjing/xi-bei-qiao-tou-la-mian-da-wang",
    image: '/images/xi-bei-qiao-tou-la-mian-da-wang1.png'
  },
  {
    name: "Xiao Pan Ji Ya Xie Fen Si Tang",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/nanjing/nanjing/xiao-pan-ji-ya-xie-fen-si-tang",
    image: '/images/xiao-pan-ji-ya-xie-fen-si-tang1.png'
  },
  {
    name: "Xin Fang Yuan",
    cuisine: "Jiangzhe",
    price: "¥¥",
    path: "/china/nanjing/nanjing/xin-fang-yuan",
    image: '/images/xin-fang-yuan1.png'
  },
  {
    name: "Xu Jian Ping Tang Bao (Rehe South Road)",
    cuisine: "Dim Sum",
    price: "¥",
    path: "/china/nanjing/nanjing/xu-jian-ping-tang-bao-rehe-south-road",
    image: '/images/xu-jian-ping-tang-bao-rehe-south-road1.png'
  },
  {
    name: "You Mian",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/nanjing/nanjing/you-mian",
    image: '/images/you-mian1.png'
  },
  {
    name: "Yu Chuan",
    cuisine: "Sichuan",
    price: "¥¥¥",
    path: "/china/nanjing/nanjing/yu-chuan",
    image: '/images/yu-chuan1.png'
  },
  {
    name: "Yuan Space & Feast",
    cuisine: "Jiangzhe",
    price: "¥¥¥",
    path: "/china/nanjing/nanjing/yuan-space-feast",
    image: '/images/yuan-space-feast1.png'
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
