import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Chengdu";

const restaurants = [
  {
    name: "#8",
    cuisine: "Hotpot",
    price: "¥¥¥",
    path: "/china/chengdu/chengdu/8",
    image: '/images/81.png'
  },
  {
    name: "Art Yinba",
    cuisine: "Sichuan",
    price: "¥¥¥",
    path: "/china/chengdu/chengdu/art-yinba",
    image: '/images/art-yinba1.png'
  },
  {
    name: "Aurore",
    cuisine: "Innovative",
    price: "¥¥¥",
    path: "/china/chengdu/chengdu/aurore",
    image: '/images/aurore1.png'
  },
  {
    name: "Bai Nian Fen Zheng Niu Rou",
    cuisine: "Sichuan",
    price: "¥",
    path: "/china/chengdu/chengdu/bai-nian-fen-zheng-niu-rou",
    image: '/images/bai-nian-fen-zheng-niu-rou1.png'
  },
  {
    name: "Brustin",
    cuisine: "Innovative",
    price: "¥¥¥",
    path: "/china/chengdu/chengdu/brustin",
    image: '/images/brustin1.png'
  },
  {
    name: "Chaimen Gong Guan (Tongzilin East Road)",
    cuisine: "Sichuan",
    price: "¥¥",
    path: "/china/chengdu/chengdu/chaimen-gong-guan-tongzilin-east-road",
    image: '/images/chaimen-gong-guan-tongzilin-east-road1.png'
  },
  {
    name: "Chaimen Hui",
    cuisine: "Sichuan",
    price: "¥¥¥¥",
    path: "/china/chengdu/chengdu/chaimen-hui",
    image: '/images/chaimen-hui1.png'
  },
  {
    name: "Chanyue Vegetarian",
    cuisine: "Vegetarian",
    price: "¥¥",
    path: "/china/chengdu/chengdu/chanyue-vegetarian",
    image: '/images/chanyue-vegetarian1.png'
  },
  {
    name: "Chen Mapo Tofu (Qinghua Road)",
    cuisine: "Sichuan",
    price: "¥",
    path: "/china/chengdu/chengdu/chen-mapo-tofu-qinghua-road",
    image: '/images/chen-mapo-tofu-qinghua-road1.png'
  },
  {
    name: "Chengdu Restaurant",
    cuisine: "Cantonese, Sichuan",
    price: "¥¥¥¥",
    path: "/china/chengdu/chengdu/chengdu-restaurant",
    image: '/images/chengdu-restaurant1.png'
  },
  {
    name: "China Samite - Hot Pot (Wuhouci Street)",
    cuisine: "Hotpot",
    price: "¥¥",
    path: "/china/chengdu/chengdu/china-samite-hot-pot-wuhouci-street",
    image: '/images/china-samite-hot-pot-wuhouci-street1.png'
  },
  {
    name: "Chuanpu (Lihua Street)",
    cuisine: "Fujian",
    price: "¥¥",
    path: "/china/chengdu/chengdu/chuanpu-lihua-street",
    image: '/images/chuanpu-lihua-street1.png'
  },
  {
    name: "Cloud Arise (Chenghua)",
    cuisine: "Sichuan",
    price: "¥¥¥",
    path: "/china/chengdu/chengdu/cloud-arise-chenghua",
    image: '/images/cloud-arise-chenghua1.png'
  },
  {
    name: "Co-",
    cuisine: "Innovative",
    price: "¥¥¥¥",
    path: "/china/chengdu/chengdu/co",
    image: '/images/co1.png'
  },
  {
    name: "Cuo Xia",
    cuisine: "Chao Zhou",
    price: "¥¥",
    path: "/china/chengdu/chengdu/cuo-xia",
    image: '/images/cuo-xia1.png'
  },
  {
    name: "Datenbank",
    cuisine: "Innovative",
    price: "¥¥¥",
    path: "/china/chengdu/chengdu/datenbank",
    image: '/images/datenbank1.png'
  },
  {
    name: "Dumpling & Drinks (Lancao Road)",
    cuisine: "Dumplings",
    price: "¥",
    path: "/china/chengdu/chengdu/dumpling-drinks-lancao-road",
    image: '/images/dumpling-drinks-lancao-road1.png'
  },
  {
    name: "Dumpling & Drinks (Lanchao Road)",
    cuisine: "Dumplings",
    price: "¥",
    path: "/china/chengdu/chengdu/dumpling-drinks-lanchao-road",
    image: '/images/dumpling-drinks-lanchao-road1.png'
  },
  {
    name: "Fang Xiang Jing",
    cuisine: "Sichuan",
    price: "¥¥¥",
    path: "/china/chengdu/chengdu/fang-xiang-jing",
    image: '/images/fang-xiang-jing1.png'
  },
  {
    name: "Fu Rong Huang",
    cuisine: "Sichuan",
    price: "¥¥",
    path: "/china/chengdu/chengdu/fu-rong-huang",
    image: '/images/fu-rong-huang1.png'
  },
  {
    name: "Gan Ji Fei Chang Fen (Jinniu)",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/chengdu/chengdu/gan-ji-fei-chang-fen-jinniu",
    image: '/images/gan-ji-fei-chang-fen-jinniu1.png'
  },
  {
    name: "Gong Zhou · Ba Shu Wei Yuan",
    cuisine: "Sichuan",
    price: "¥",
    path: "/china/chengdu/chengdu/gong-zhou-ba-shu-wei-yuan",
    image: '/images/gong-zhou-ba-shu-wei-yuan1.png'
  },
  {
    name: "Guan Jin (Chenghan South Road)",
    cuisine: "Sichuan",
    price: "¥¥",
    path: "/china/chengdu/chengdu/guan-jin-chenghan-south-road",
    image: '/images/guan-jin-chenghan-south-road1.png'
  },
  {
    name: "Hidden Place",
    cuisine: "Sichuan",
    price: "¥¥",
    path: "/china/chengdu/chengdu/hidden-place",
    image: '/images/hidden-place1.png'
  },
  {
    name: "Hokkien Cuisine",
    cuisine: "Fujian",
    price: "¥¥¥",
    path: "/china/chengdu/chengdu/hokkien-cuisine",
    image: '/images/hokkien-cuisine1.png'
  },
  {
    name: "Hu Er Ge Yao Shan Ti Hua",
    cuisine: "Sichuan",
    price: "¥",
    path: "/china/chengdu/chengdu/hu-er-ge-yao-shan-ti-hua",
    image: '/images/hu-er-ge-yao-shan-ti-hua1.png'
  },
  {
    name: "Huadao Art Of Life · Yu Shan Ge",
    cuisine: "Vegetarian",
    price: "¥¥¥",
    path: "/china/chengdu/chengdu/huadao-art-of-life-yu-shan-ge",
    image: '/images/huadao-art-of-life-yu-shan-ge1.png'
  },
  {
    name: "Infinite Luck",
    cuisine: "Sichuan",
    price: "¥¥¥",
    path: "/china/chengdu/chengdu/infinite-luck",
    image: '/images/infinite-luck1.png'
  },
  {
    name: "Lao Chengdu Yi Cheng Xian San Yang Mian",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/chengdu/chengdu/lao-chengdu-yi-cheng-xian-san-yang-mian",
    image: '/images/lao-chengdu-yi-cheng-xian-san-yang-mian1.png'
  },
  {
    name: "Li Xuan",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/chengdu/chengdu/li-xuan",
    image: '/images/li-xuan1.png'
  },
  {
    name: "Long Sen Yuan (Qingyang)",
    cuisine: "Hotpot",
    price: "¥¥",
    path: "/china/chengdu/chengdu/long-sen-yuan-qingyang",
    image: '/images/long-sen-yuan-qingyang1.png'
  },
  {
    name: "Ma's Kitchen (Jinjiang)",
    cuisine: "Sichuan",
    price: "¥¥",
    path: "/china/chengdu/chengdu/mas-kitchen-jinjiang",
    image: '/images/mas-kitchen-jinjiang1.png'
  },
  {
    name: "Member",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/chengdu/chengdu/member",
    image: '/images/member1.png'
  },
  {
    name: "Mi Xun Teahouse",
    cuisine: "Vegetarian",
    price: "¥¥",
    path: "/china/chengdu/chengdu/mi-xun-teahouse",
    image: '/images/mi-xun-teahouse1.png'
  },
  {
    name: "Mind",
    cuisine: "Sichuan",
    price: "¥",
    path: "/china/chengdu/chengdu/mind",
    image: '/images/mind1.png'
  },
  {
    name: "Mosnack",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/chengdu/chengdu/mosnack",
    image: '/images/mosnack1.png'
  },
  {
    name: "Nan Tang (Tianshun Road)",
    cuisine: "Sichuan",
    price: "¥¥",
    path: "/china/chengdu/chengdu/nan-tang-tianshun-road",
    image: '/images/nan-tang-tianshun-road1.png'
  },
  {
    name: "Nan's Gourmet",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/chengdu/chengdu/nans-gourmet",
    image: '/images/nans-gourmet1.png'
  },
  {
    name: "Nantang Wang",
    cuisine: "Sichuan",
    price: "¥¥¥",
    path: "/china/chengdu/chengdu/nantang-wang",
    image: '/images/nantang-wang1.png'
  },
  {
    name: "New Peking Cuisine",
    cuisine: "Beijing Cuisine",
    price: "¥¥",
    path: "/china/chengdu/chengdu/new-peking-cuisine",
    image: '/images/new-peking-cuisine1.png'
  },
  {
    name: "Nian Feng Restaurant",
    cuisine: "Sichuan",
    price: "¥¥",
    path: "/china/chengdu/chengdu/nian-feng-restaurant",
    image: '/images/nian-feng-restaurant1.png'
  },
  {
    name: "Organization South",
    cuisine: "Sichuan",
    price: "¥¥",
    path: "/china/chengdu/chengdu/organization-south",
    image: '/images/organization-south1.png'
  },
  {
    name: "Pairedd",
    cuisine: "European Contemporary",
    price: "¥¥¥¥",
    path: "/china/chengdu/chengdu/pairedd",
    image: '/images/pairedd1.png'
  },
  {
    name: "Private Collection · See Joy",
    cuisine: "Sichuan",
    price: "¥¥¥",
    path: "/china/chengdu/chengdu/private-collection-see-joy",
    image: '/images/private-collection-see-joy1.png'
  },
  {
    name: "Qian Li",
    cuisine: "Taizhou",
    price: "¥¥",
    path: "/china/chengdu/chengdu/qian-li",
    image: '/images/qian-li1.png'
  },
  {
    name: "Qian Li",
    cuisine: "Taizhou",
    price: "¥¥",
    path: "/china/chengdu/chengdu/qian-li",
    image: '/images/qian-li1.png'
  },
  {
    name: "Qie Fang Xiang",
    cuisine: "Sichuan",
    price: "¥¥",
    path: "/china/chengdu/chengdu/qie-fang-xiang",
    image: '/images/qie-fang-xiang1.png'
  },
  {
    name: "Rong Yuan Can Guan",
    cuisine: "Sichuan",
    price: "¥¥",
    path: "/china/chengdu/chengdu/rong-yuan-can-guan",
    image: '/images/rong-yuan-can-guan1.png'
  },
  {
    name: "Rongle Garden",
    cuisine: "Sichuan",
    price: "¥¥",
    path: "/china/chengdu/chengdu/rongle-garden",
    image: '/images/rongle-garden1.png'
  },
  {
    name: "Rongrong Beida Pugaimian",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/chengdu/chengdu/rongrong-beida-pugaimian",
    image: '/images/rongrong-beida-pugaimian1.png'
  },
  {
    name: "Shu Mansion",
    cuisine: "Sichuan",
    price: "¥¥¥",
    path: "/china/chengdu/chengdu/shu-mansion",
    image: '/images/shu-mansion1.png'
  },
  {
    name: "Shudidanggui (Wuhou)",
    cuisine: "Sichuan",
    price: "¥¥",
    path: "/china/chengdu/chengdu/shudidanggui-wuhou",
    image: '/images/shudidanggui-wuhou1.png'
  },
  {
    name: "Sichuan Folk",
    cuisine: "Sichuan",
    price: "¥¥",
    path: "/china/chengdu/chengdu/sichuan-folk",
    image: '/images/sichuan-folk1.png'
  },
  {
    name: "Sichuan Folk (Wuhou)",
    cuisine: "Sichuan",
    price: "¥¥",
    path: "/china/chengdu/chengdu/sichuan-folk-wuhou",
    image: '/images/sichuan-folk-wuhou1.png'
  },
  {
    name: "Silver Cottage",
    cuisine: "Sichuan",
    price: "¥¥¥¥",
    path: "/china/chengdu/chengdu/silver-cottage",
    image: '/images/silver-cottage1.png'
  },
  {
    name: "Silver Pot",
    cuisine: "Sichuan",
    price: "¥¥¥",
    path: "/china/chengdu/chengdu/silver-pot",
    image: '/images/silver-pot1.png'
  },
  {
    name: "Song Chuan",
    cuisine: "Sichuan",
    price: "¥¥",
    path: "/china/chengdu/chengdu/song-chuan",
    image: '/images/song-chuan1.png'
  },
  {
    name: "Tan Jia (Wuhou)",
    cuisine: "Small eats",
    price: "¥",
    path: "/china/chengdu/chengdu/tan-jia-wuhou",
    image: '/images/tan-jia-wuhou1.png'
  },
  {
    name: "The Bridge",
    cuisine: "Sichuan",
    price: "¥¥¥",
    path: "/china/chengdu/chengdu/the-bridge",
    image: '/images/the-bridge1.png'
  },
  {
    name: "The Hall",
    cuisine: "European Contemporary",
    price: "¥¥¥¥",
    path: "/china/chengdu/chengdu/the-hall",
    image: '/images/the-hall1.png'
  },
  {
    name: "The River House",
    cuisine: "European",
    price: "¥¥¥",
    path: "/china/chengdu/chengdu/the-river-house",
    image: '/images/the-river-house1.png'
  },
  {
    name: "The Woo's (Jinjiang)",
    cuisine: "Sichuan",
    price: "¥¥",
    path: "/china/chengdu/chengdu/the-woos-jinjiang",
    image: '/images/the-woos-jinjiang1.png'
  },
  {
    name: "Ting Yuan 399 (Jinjiang)",
    cuisine: "Sichuan",
    price: "¥¥",
    path: "/china/chengdu/chengdu/ting-yuan-399-jinjiang",
    image: '/images/ting-yuan-399-jinjiang1.png'
  },
  {
    name: "Tivano",
    cuisine: "Italian",
    price: "¥¥¥",
    path: "/china/chengdu/chengdu/tivano",
    image: '/images/tivano1.png'
  },
  {
    name: "Tong Fu She",
    cuisine: "Sichuan",
    price: "¥¥",
    path: "/china/chengdu/chengdu/tong-fu-she",
    image: '/images/tong-fu-she1.png'
  },
  {
    name: "Wan San Mian Guan (Qinglongzheng Street)",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/chengdu/chengdu/wan-san-mian-guan-qinglongzheng-street",
    image: '/images/wan-san-mian-guan-qinglongzheng-street1.png'
  },
  {
    name: "Wanyan",
    cuisine: "Sichuan",
    price: "¥¥¥",
    path: "/china/chengdu/chengdu/wanyan",
    image: '/images/wanyan1.png'
  },
  {
    name: "Wu Ji Guai Wei Mian (Jinjiang)",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/chengdu/chengdu/wu-ji-guai-wei-mian-jinjiang",
    image: '/images/wu-ji-guai-wei-mian-jinjiang1.png'
  },
  {
    name: "Wu Yue Gong",
    cuisine: "Chinese Contemporary",
    price: "¥¥",
    path: "/china/chengdu/chengdu/wu-yue-gong",
    image: '/images/wu-yue-gong1.png'
  },
  {
    name: "Xiang Shang Xiang",
    cuisine: "Hunanese",
    price: "¥¥",
    path: "/china/chengdu/chengdu/xiang-shang-xiang",
    image: '/images/xiang-shang-xiang1.png'
  },
  {
    name: "Xin Rong Ji",
    cuisine: "Taizhou",
    price: "¥¥¥¥",
    path: "/china/chengdu/chengdu/xin-rong-ji",
    image: '/images/xin-rong-ji1.png'
  },
  {
    name: "Xue Tao · In the Yard",
    cuisine: "Sichuan",
    price: "¥¥",
    path: "/china/chengdu/chengdu/xue-tao-in-the-yard",
    image: '/images/xue-tao-in-the-yard1.png'
  },
  {
    name: "Xu's Cuisine",
    cuisine: "Sichuan",
    price: "¥¥¥",
    path: "/china/chengdu/chengdu/xus-cuisine",
    image: '/images/xus-cuisine1.png'
  },
  {
    name: "Yangboying Chuan Tong Za Jiang Mian",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/chengdu/chengdu/yangboying-chuan-tong-za-jiang-mian",
    image: '/images/yangboying-chuan-tong-za-jiang-mian1.png'
  },
  {
    name: "Yanyu (Wuhou)",
    cuisine: "Fujian",
    price: "¥¥¥",
    path: "/china/chengdu/chengdu/yanyu-wuhou",
    image: '/images/yanyu-wuhou1.png'
  },
  {
    name: "Yao Guai Mian",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/chengdu/chengdu/yao-guai-mian",
    image: '/images/yao-guai-mian1.png'
  },
  {
    name: "Yongle Restaurant (Wuhou)",
    cuisine: "Sichuan",
    price: "¥",
    path: "/china/chengdu/chengdu/yongle-restaurant-wuhou",
    image: '/images/yongle-restaurant-wuhou1.png'
  },
  {
    name: "Young Art · Yong Ya He Xian (Tongzilin East Road)",
    cuisine: "Sichuan",
    price: "¥¥¥",
    path: "/china/chengdu/chengdu/young-art-yong-ya-he-xian-tongzilin-east-road",
    image: '/images/young-art-yong-ya-he-xian-tongzilin-east-road1.png'
  },
  {
    name: "Yu Zhi Lan",
    cuisine: "Sichuan",
    price: "¥¥¥¥",
    path: "/china/chengdu/chengdu/yu-zhi-lan",
    image: '/images/yu-zhi-lan1.png'
  },
  {
    name: "Zeng Niu Rou (Qingyang)",
    cuisine: "Sichuan",
    price: "¥",
    path: "/china/chengdu/chengdu/zeng-niu-rou-qingyang",
    image: '/images/zeng-niu-rou-qingyang1.png'
  },
  {
    name: "Zhu Ji Zhi Mian Pu (Jinjiang)",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/chengdu/chengdu/zhu-ji-zhi-mian-pu-jinjiang",
    image: '/images/zhu-ji-zhi-mian-pu-jinjiang1.png'
  },
  {
    name: "Zhuan Zhuan Hui (Lianhua South Road)",
    cuisine: "Sichuan",
    price: "¥¥",
    path: "/china/chengdu/chengdu/zhuan-zhuan-hui-lianhua-south-road",
    image: '/images/zhuan-zhuan-hui-lianhua-south-road1.png'
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
