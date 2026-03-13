import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Hangzhou";

const restaurants = [
  {
    name: "28 Hubin Road",
    cuisine: "Zhejiang",
    price: "¥¥¥",
    path: "/china/hangzhou/hangzhou/28-hubin-road",
    image: '/images/28-hubin-road1.png'
  },
  {
    name: "A Bing Bao Shan Mian",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/hangzhou/hangzhou/a-bing-bao-shan-mian",
    image: '/images/a-bing-bao-shan-mian1.png'
  },
  {
    name: "Ambré Ciel",
    cuisine: "Innovative",
    price: "¥¥¥¥",
    path: "/china/hangzhou/hangzhou/ambr-ciel",
    image: '/images/ambr-ciel1.png'
  },
  {
    name: "Bao Zhong Bao Shi Fu",
    cuisine: "Hang Zhou",
    price: "¥¥",
    path: "/china/hangzhou/hangzhou/bao-zhong-bao-shi-fu",
    image: '/images/bao-zhong-bao-shi-fu1.png'
  },
  {
    name: "Chic 1699",
    cuisine: "Fujian",
    price: "¥¥¥",
    path: "/china/hangzhou/hangzhou/chic-1699",
    image: '/images/chic-16991.png'
  },
  {
    name: "Datou Yingshi Xiaoguan",
    cuisine: "Hang Zhou",
    price: "¥¥",
    path: "/china/hangzhou/hangzhou/datou-yingshi-xiaoguan",
    image: '/images/datou-yingshi-xiaoguan1.png'
  },
  {
    name: "De Ming Fan Dian",
    cuisine: "Hang Zhou",
    price: "¥¥",
    path: "/china/hangzhou/hangzhou/de-ming-fan-dian",
    image: '/images/de-ming-fan-dian1.png'
  },
  {
    name: "Definitely Fresh",
    cuisine: "Zhejiang",
    price: "¥¥",
    path: "/china/hangzhou/hangzhou/definitely-fresh",
    image: '/images/definitely-fresh1.png'
  },
  {
    name: "Dining Room",
    cuisine: "Zhejiang",
    price: "¥¥¥",
    path: "/china/hangzhou/hangzhou/dining-room",
    image: '/images/dining-room1.png'
  },
  {
    name: "Er Ba Jiu Su Mian Guan",
    cuisine: "Vegetarian",
    price: "¥",
    path: "/china/hangzhou/hangzhou/er-ba-jiu-su-mian-guan",
    image: '/images/er-ba-jiu-su-mian-guan1.png'
  },
  {
    name: "Fang Lao Da (Shangcheng)",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/hangzhou/hangzhou/fang-lao-da-shangcheng",
    image: '/images/fang-lao-da-shangcheng1.png'
  },
  {
    name: "Fortune Garden",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/hangzhou/hangzhou/fortune-garden",
    image: '/images/fortune-garden1.png'
  },
  {
    name: "Fu Quan Shu Yuan",
    cuisine: "Vegetarian",
    price: "¥¥",
    path: "/china/hangzhou/hangzhou/fu-quan-shu-yuan",
    image: '/images/fu-quan-shu-yuan1.png'
  },
  {
    name: "Fu Xing Mian Wang (Gongshu)",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/hangzhou/hangzhou/fu-xing-mian-wang-gongshu",
    image: '/images/fu-xing-mian-wang-gongshu1.png'
  },
  {
    name: "Fu Yuan Ju (Shangcheng)",
    cuisine: "Hang Zhou",
    price: "¥¥",
    path: "/china/hangzhou/hangzhou/fu-yuan-ju-shangcheng",
    image: '/images/fu-yuan-ju-shangcheng1.png'
  },
  {
    name: "Ge Lang Guan",
    cuisine: "Zhejiang",
    price: "¥¥",
    path: "/china/hangzhou/hangzhou/ge-lang-guan",
    image: '/images/ge-lang-guan1.png'
  },
  {
    name: "Grand Dragon (Xihu)",
    cuisine: "Zhejiang",
    price: "¥¥¥",
    path: "/china/hangzhou/hangzhou/grand-dragon-xihu",
    image: '/images/grand-dragon-xihu1.png'
  },
  {
    name: "Guan Yan Liu Jin",
    cuisine: "Chao Zhou",
    price: "¥¥¥",
    path: "/china/hangzhou/hangzhou/guan-yan-liu-jin",
    image: '/images/guan-yan-liu-jin1.png'
  },
  {
    name: "Gui Yu Jia Mian",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/hangzhou/hangzhou/gui-yu-jia-mian",
    image: '/images/gui-yu-jia-mian1.png'
  },
  {
    name: "Guiyu (Xihu)",
    cuisine: "Zhejiang",
    price: "¥¥¥",
    path: "/china/hangzhou/hangzhou/guiyu-xihu",
    image: '/images/guiyu-xihu1.png'
  },
  {
    name: "Hang's Delicacy (Xihu)",
    cuisine: "Hang Zhou",
    price: "¥¥",
    path: "/china/hangzhou/hangzhou/hangs-delicacy-xihu",
    image: '/images/hangs-delicacy-xihu1.png'
  },
  {
    name: "Hangzhou House",
    cuisine: "Zhejiang",
    price: "¥¥¥",
    path: "/china/hangzhou/hangzhou/hangzhou-house",
    image: '/images/hangzhou-house1.png'
  },
  {
    name: "Hao Shi Tang 1987 (Wensan Road)",
    cuisine: "Hang Zhou",
    price: "¥¥",
    path: "/china/hangzhou/hangzhou/hao-shi-tang-1987-wensan-road",
    image: '/images/hao-shi-tang-1987-wensan-road1.png'
  },
  {
    name: "Hotwoods (Xihu)",
    cuisine: "Latin American",
    price: "¥¥",
    path: "/china/hangzhou/hangzhou/hotwoods-xihu",
    image: '/images/hotwoods-xihu1.png'
  },
  {
    name: "Hu Ge Si Fang Cai",
    cuisine: "Hang Zhou",
    price: "¥¥",
    path: "/china/hangzhou/hangzhou/hu-ge-si-fang-cai",
    image: '/images/hu-ge-si-fang-cai1.png'
  },
  {
    name: "Hu Qing Yu Tang Yao Shan",
    cuisine: "Hang Zhou",
    price: "¥¥",
    path: "/china/hangzhou/hangzhou/hu-qing-yu-tang-yao-shan",
    image: '/images/hu-qing-yu-tang-yao-shan1.png'
  },
  {
    name: "Hui Xin Xiao Chi Dian",
    cuisine: "Dim Sum",
    price: "¥",
    path: "/china/hangzhou/hangzhou/hui-xin-xiao-chi-dian",
    image: '/images/hui-xin-xiao-chi-dian1.png'
  },
  {
    name: "In Villa",
    cuisine: "Zhejiang",
    price: "¥¥¥",
    path: "/china/hangzhou/hangzhou/in-villa",
    image: '/images/in-villa1.png'
  },
  {
    name: "Jiang Nan Yu Ge",
    cuisine: "Ningbo",
    price: "¥¥¥",
    path: "/china/hangzhou/hangzhou/jiang-nan-yu-ge",
    image: '/images/jiang-nan-yu-ge1.png'
  },
  {
    name: "Jie Xiang Lou",
    cuisine: "Zhejiang",
    price: "¥¥¥",
    path: "/china/hangzhou/hangzhou/jie-xiang-lou",
    image: '/images/jie-xiang-lou1.png'
  },
  {
    name: "Jin Sha",
    cuisine: "Zhejiang",
    price: "¥¥¥",
    path: "/china/hangzhou/hangzhou/jin-sha",
    image: '/images/jin-sha1.png'
  },
  {
    name: "Junxihui",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/hangzhou/hangzhou/junxihui",
    image: '/images/junxihui1.png'
  },
  {
    name: "King's Choice (Huyu Road)",
    cuisine: "Hang Zhou",
    price: "¥¥",
    path: "/china/hangzhou/hangzhou/kings-choice-huyu-road",
    image: '/images/kings-choice-huyu-road1.png'
  },
  {
    name: "Kui Yuan Guan (Jiefang Road)",
    cuisine: "Zhejiang",
    price: "¥",
    path: "/china/hangzhou/hangzhou/kui-yuan-guan-jiefang-road",
    image: '/images/kui-yuan-guan-jiefang-road1.png'
  },
  {
    name: "La Lune",
    cuisine: "Chinese Contemporary",
    price: "¥¥¥",
    path: "/china/hangzhou/hangzhou/la-lune",
    image: '/images/la-lune1.png'
  },
  {
    name: "La Villa",
    cuisine: "Innovative",
    price: "¥¥¥¥",
    path: "/china/hangzhou/hangzhou/la-villa",
    image: '/images/la-villa1.png'
  },
  {
    name: "La Villa",
    cuisine: "Innovative",
    price: "¥¥¥¥",
    path: "/china/hangzhou/hangzhou/la-villa",
    image: '/images/la-villa1.png'
  },
  {
    name: "Lai Cui Mian Guan (Ji Mao Road)",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/hangzhou/hangzhou/lai-cui-mian-guan-ji-mao-road",
    image: '/images/lai-cui-mian-guan-ji-mao-road1.png'
  },
  {
    name: "Lanxi Gourmet",
    cuisine: "Zhejiang",
    price: "¥¥",
    path: "/china/hangzhou/hangzhou/lanxi-gourmet",
    image: '/images/lanxi-gourmet1.png'
  },
  {
    name: "L'éclat 19",
    cuisine: "French Contemporary",
    price: "¥¥¥¥",
    path: "/china/hangzhou/hangzhou/lclat-19",
    image: '/images/lclat-191.png'
  },
  {
    name: "Li' An",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/hangzhou/hangzhou/li-an",
    image: '/images/li-an1.png'
  },
  {
    name: "Lin Ji Lao Chu",
    cuisine: "Zhejiang",
    price: "¥",
    path: "/china/hangzhou/hangzhou/lin-ji-lao-chu",
    image: '/images/lin-ji-lao-chu1.png'
  },
  {
    name: "Longjing Manor",
    cuisine: "Zhejiang",
    price: "¥¥¥",
    path: "/china/hangzhou/hangzhou/longjing-manor",
    image: '/images/longjing-manor1.png'
  },
  {
    name: "Ming Kitchen",
    cuisine: "Zhejiang",
    price: "¥¥",
    path: "/china/hangzhou/hangzhou/ming-kitchen",
    image: '/images/ming-kitchen1.png'
  },
  {
    name: "Nan Feng Fan Dian",
    cuisine: "Hang Zhou",
    price: "¥¥",
    path: "/china/hangzhou/hangzhou/nan-feng-fan-dian",
    image: '/images/nan-feng-fan-dian1.png'
  },
  {
    name: "Nature's Own",
    cuisine: "Vegetarian",
    price: "¥¥",
    path: "/china/hangzhou/hangzhou/natures-own",
    image: '/images/natures-own1.png'
  },
  {
    name: "Pan Fang Chun (Zhongshan South Road)",
    cuisine: "Dim Sum",
    price: "¥",
    path: "/china/hangzhou/hangzhou/pan-fang-chun-zhongshan-south-road",
    image: '/images/pan-fang-chun-zhongshan-south-road1.png'
  },
  {
    name: "Pu Zhu",
    cuisine: "Vegetarian",
    price: "¥¥¥¥",
    path: "/china/hangzhou/hangzhou/pu-zhu",
    image: '/images/pu-zhu1.png'
  },
  {
    name: "Qing Chun Perma",
    cuisine: "Vegetarian",
    price: "¥¥",
    path: "/china/hangzhou/hangzhou/qing-chun-perma",
    image: '/images/qing-chun-perma1.png'
  },
  {
    name: "Qing Tao",
    cuisine: "Zhejiang",
    price: "¥¥",
    path: "/china/hangzhou/hangzhou/qing-tao",
    image: '/images/qing-tao1.png'
  },
  {
    name: "Rong Xian Mian Guan (Qianjiang Road)",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/hangzhou/hangzhou/rong-xian-mian-guan-qianjiang-road",
    image: '/images/rong-xian-mian-guan-qianjiang-road1.png'
  },
  {
    name: "Ru Yuan",
    cuisine: "Zhejiang",
    price: "¥¥¥¥",
    path: "/china/hangzhou/hangzhou/ru-yuan",
    image: '/images/ru-yuan1.png'
  },
  {
    name: "Sense",
    cuisine: "Innovative",
    price: "¥¥¥¥",
    path: "/china/hangzhou/hangzhou/sense",
    image: '/images/sense1.png'
  },
  {
    name: "Shui Mo Hui",
    cuisine: "Hui Cuisine",
    price: "¥¥",
    path: "/china/hangzhou/hangzhou/shui-mo-hui",
    image: '/images/shui-mo-hui1.png'
  },
  {
    name: "Shuiyang",
    cuisine: "Zhejiang",
    price: "¥¥¥",
    path: "/china/hangzhou/hangzhou/shuiyang",
    image: '/images/shuiyang1.png'
  },
  {
    name: "Song",
    cuisine: "Ningbo",
    price: "¥¥¥",
    path: "/china/hangzhou/hangzhou/song",
    image: '/images/song1.png'
  },
  {
    name: "The Yue Hall",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/hangzhou/hangzhou/the-yue-hall",
    image: '/images/the-yue-hall1.png'
  },
  {
    name: "Tian Lun Inn (Xihu)",
    cuisine: "Hang Zhou",
    price: "¥¥¥",
    path: "/china/hangzhou/hangzhou/tian-lun-inn-xihu",
    image: '/images/tian-lun-inn-xihu1.png'
  },
  {
    name: "Wan Li",
    cuisine: "Zhejiang",
    price: "¥¥",
    path: "/china/hangzhou/hangzhou/wan-li",
    image: '/images/wan-li1.png'
  },
  {
    name: "Wang Ri Shun Hao",
    cuisine: "Small eats",
    price: "¥",
    path: "/china/hangzhou/hangzhou/wang-ri-shun-hao",
    image: '/images/wang-ri-shun-hao1.png'
  },
  {
    name: "Wang Shi Shao Bing (Xixi Road)",
    cuisine: "Small eats",
    price: "¥",
    path: "/china/hangzhou/hangzhou/wang-shi-shao-bing-xixi-road",
    image: '/images/wang-shi-shao-bing-xixi-road1.png'
  },
  {
    name: "Wild Yeast",
    cuisine: "Chinese Contemporary",
    price: "¥¥¥¥",
    path: "/china/hangzhou/hangzhou/wild-yeast",
    image: '/images/wild-yeast1.png'
  },
  {
    name: "Wu Ming Mian Guan",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/hangzhou/hangzhou/wu-ming-mian-guan",
    image: '/images/wu-ming-mian-guan1.png'
  },
  {
    name: "Wu Zi Mian Guan",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/hangzhou/hangzhou/wu-zi-mian-guan",
    image: '/images/wu-zi-mian-guan1.png'
  },
  {
    name: "Wulin",
    cuisine: "Hang Zhou",
    price: "¥¥",
    path: "/china/hangzhou/hangzhou/wulin",
    image: '/images/wulin1.png'
  },
  {
    name: "Xi Xi Liang Chen",
    cuisine: "Chao Zhou",
    price: "¥¥¥¥",
    path: "/china/hangzhou/hangzhou/xi-xi-liang-chen",
    image: '/images/xi-xi-liang-chen1.png'
  },
  {
    name: "Xiao Dian Huang",
    cuisine: "Zhejiang",
    price: "¥¥",
    path: "/china/hangzhou/hangzhou/xiao-dian-huang",
    image: '/images/xiao-dian-huang1.png'
  },
  {
    name: "Xiao Lao Hun Tun",
    cuisine: "Dim Sum",
    price: "¥",
    path: "/china/hangzhou/hangzhou/xiao-lao-hun-tun",
    image: '/images/xiao-lao-hun-tun1.png'
  },
  {
    name: "Xin Liu He",
    cuisine: "Hang Zhou",
    price: "¥¥",
    path: "/china/hangzhou/hangzhou/xin-liu-he",
    image: '/images/xin-liu-he1.png'
  },
  {
    name: "Xin Rong Ji",
    cuisine: "Taizhou",
    price: "¥¥¥",
    path: "/china/hangzhou/hangzhou/xin-rong-ji",
    image: '/images/xin-rong-ji1.png'
  },
  {
    name: "Xiu Cai Yang Rou Mian",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/hangzhou/hangzhou/xiu-cai-yang-rou-mian",
    image: '/images/xiu-cai-yang-rou-mian1.png'
  },
  {
    name: "Xun Wei Jiang Nan",
    cuisine: "Ningbo",
    price: "¥¥",
    path: "/china/hangzhou/hangzhou/xun-wei-jiang-nan",
    image: '/images/xun-wei-jiang-nan1.png'
  },
  {
    name: "Yan Zhu Chao",
    cuisine: "Chao Zhou",
    price: "¥¥¥¥",
    path: "/china/hangzhou/hangzhou/yan-zhu-chao",
    image: '/images/yan-zhu-chao1.png'
  },
  {
    name: "Yu Zhi Lan",
    cuisine: "Sichuan",
    price: "¥¥¥",
    path: "/china/hangzhou/hangzhou/yu-zhi-lan",
    image: '/images/yu-zhi-lan1.png'
  },
  {
    name: "Yue Ji (Binjiang)",
    cuisine: "Zhejiang",
    price: "¥¥",
    path: "/china/hangzhou/hangzhou/yue-ji-binjiang",
    image: '/images/yue-ji-binjiang1.png'
  },
  {
    name: "Zhi Wei Guan • Wei Zhuang (Xihu)",
    cuisine: "Hang Zhou",
    price: "¥¥",
    path: "/china/hangzhou/hangzhou/zhi-wei-guan-wei-zhuang-xihu",
    image: '/images/zhi-wei-guan-wei-zhuang-xihu1.png'
  },
  {
    name: "Zhi Zhu",
    cuisine: "Vegetarian",
    price: "¥",
    path: "/china/hangzhou/hangzhou/zhi-zhu",
    image: '/images/zhi-zhu1.png'
  },
  {
    name: "Zi Wei Hall",
    cuisine: "Zhejiang",
    price: "¥¥¥",
    path: "/china/hangzhou/hangzhou/zi-wei-hall",
    image: '/images/zi-wei-hall1.png'
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
