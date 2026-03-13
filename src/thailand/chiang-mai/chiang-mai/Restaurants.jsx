import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Chiang Mai";

const restaurants = [
  {
    name: "Aeeen",
    cuisine: "Vegetarian",
    price: "฿฿",
    path: "/thailand/chiang-mai/chiang-mai/aeeen",
    image: '/images/aeeen1.png'
  },
  {
    name: "Aquila",
    cuisine: "Italian",
    price: "฿฿",
    path: "/thailand/chiang-mai/chiang-mai/aquila",
    image: '/images/aquila1.png'
  },
  {
    name: "Aunt Aoy Kitchen",
    cuisine: "Thai",
    price: "฿",
    path: "/thailand/chiang-mai/chiang-mai/aunt-aoy-kitchen",
    image: '/images/aunt-aoy-kitchen1.png'
  },
  {
    name: "Baan Landai",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/chiang-mai/chiang-mai/baan-landai",
    image: '/images/baan-landai1.png'
  },
  {
    name: "Baan Landai (Phra Pok Klao Road)",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/chiang-mai/chiang-mai/baan-landai-phra-pok-klao-road",
    image: '/images/baan-landai-phra-pok-klao-road1.png'
  },
  {
    name: "Baan Suan Mae Rim",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/chiang-mai/chiang-mai/baan-suan-mae-rim",
    image: '/images/baan-suan-mae-rim1.png'
  },
  {
    name: "Belén by Paulo Airaudo",
    cuisine: "European Contemporary, Creative",
    price: "฿฿฿฿",
    path: "/thailand/chiang-mai/chiang-mai/beln-by-paulo-airaudo",
    image: '/images/beln-by-paulo-airaudo1.png'
  },
  {
    name: "Blackitch",
    cuisine: "Asian Contemporary, Creative",
    price: "฿฿฿",
    path: "/thailand/chiang-mai/chiang-mai/blackitch",
    image: '/images/blackitch1.png'
  },
  {
    name: "Busarin Cuisine",
    cuisine: "Northern Thai",
    price: "฿฿",
    path: "/thailand/chiang-mai/chiang-mai/busarin-cuisine",
    image: '/images/busarin-cuisine1.png'
  },
  {
    name: "CHAWEE",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/chiang-mai/chiang-mai/chawee",
    image: '/images/chawee1.png'
  },
  {
    name: "Chum (Saraphi)",
    cuisine: "Northern Thai",
    price: "฿฿",
    path: "/thailand/chiang-mai/chiang-mai/chum-saraphi",
    image: '/images/chum-saraphi1.png'
  },
  {
    name: "Cuisine de Garden",
    cuisine: "Innovative",
    price: "฿฿฿",
    path: "/thailand/chiang-mai/chiang-mai/cuisine-de-garden",
    image: '/images/cuisine-de-garden1.png'
  },
  {
    name: "Dan Chicken Rice (San Sai)",
    cuisine: "Small eats",
    price: "฿",
    path: "/thailand/chiang-mai/chiang-mai/dan-chicken-rice-san-sai",
    image: '/images/dan-chicken-rice-san-sai1.png'
  },
  {
    name: "Ekachan",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/chiang-mai/chiang-mai/ekachan",
    image: '/images/ekachan1.png'
  },
  {
    name: "Euang Kam Sai",
    cuisine: "Northern Thai",
    price: "฿฿",
    path: "/thailand/chiang-mai/chiang-mai/euang-kam-sai",
    image: '/images/euang-kam-sai1.png'
  },
  {
    name: "Favola",
    cuisine: "Italian",
    price: "฿฿฿",
    path: "/thailand/chiang-mai/chiang-mai/favola",
    image: '/images/favola1.png'
  },
  {
    name: "Food For You",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/chiang-mai/chiang-mai/food-for-you",
    image: '/images/food-for-you1.png'
  },
  {
    name: "Friend's Table",
    cuisine: "Creative",
    price: "฿฿฿",
    path: "/thailand/chiang-mai/chiang-mai/friends-table",
    image: '/images/friends-table1.png'
  },
  {
    name: "Go Neng (Wichayanon)",
    cuisine: "Street Food",
    price: "฿",
    path: "/thailand/chiang-mai/chiang-mai/go-neng-wichayanon",
    image: '/images/go-neng-wichayanon1.png'
  },
  {
    name: "Gongkham",
    cuisine: "Northern Thai",
    price: "฿",
    path: "/thailand/chiang-mai/chiang-mai/gongkham",
    image: '/images/gongkham1.png'
  },
  {
    name: "Guay Jub Chang Moi Tat Mai",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/chiang-mai/chiang-mai/guay-jub-chang-moi-tat-mai",
    image: '/images/guay-jub-chang-moi-tat-mai1.png'
  },
  {
    name: "Guay Tiew Pet Tun Saraphi",
    cuisine: "Street Food",
    price: "฿",
    path: "/thailand/chiang-mai/chiang-mai/guay-tiew-pet-tun-saraphi",
    image: '/images/guay-tiew-pet-tun-saraphi1.png'
  },
  {
    name: "Huan Soontaree",
    cuisine: "Northern Thai",
    price: "฿฿",
    path: "/thailand/chiang-mai/chiang-mai/huan-soontaree",
    image: '/images/huan-soontaree1.png'
  },
  {
    name: "Huen Muan Jai",
    cuisine: "Northern Thai",
    price: "฿",
    path: "/thailand/chiang-mai/chiang-mai/huen-muan-jai",
    image: '/images/huen-muan-jai1.png'
  },
  {
    name: "Kang",
    cuisine: "South East Asian",
    price: "฿฿",
    path: "/thailand/chiang-mai/chiang-mai/kang",
    image: '/images/kang1.png'
  },
  {
    name: "Khao",
    cuisine: "Thai",
    price: "฿฿฿฿",
    path: "/thailand/chiang-mai/chiang-mai/khao",
    image: '/images/khao1.png'
  },
  {
    name: "Khao Soi Lung Prakit Kad Kom",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/chiang-mai/chiang-mai/khao-soi-lung-prakit-kad-kom",
    image: '/images/khao-soi-lung-prakit-kad-kom1.png'
  },
  {
    name: "Khao Soi Mae Sai",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/chiang-mai/chiang-mai/khao-soi-mae-sai",
    image: '/images/khao-soi-mae-sai1.png'
  },
  {
    name: "Kinlum Kindee",
    cuisine: "Northern Thai",
    price: "฿฿",
    path: "/thailand/chiang-mai/chiang-mai/kinlum-kindee",
    image: '/images/kinlum-kindee1.png'
  },
  {
    name: "Kiti Panit",
    cuisine: "Northern Thai",
    price: "฿฿",
    path: "/thailand/chiang-mai/chiang-mai/kiti-panit",
    image: '/images/kiti-panit1.png'
  },
  {
    name: "Krua Lawng Khao",
    cuisine: "Northern Thai",
    price: "฿",
    path: "/thailand/chiang-mai/chiang-mai/krua-lawng-khao",
    image: '/images/krua-lawng-khao1.png'
  },
  {
    name: "Krua Phech Doi Ngam",
    cuisine: "Northern Thai",
    price: "฿฿",
    path: "/thailand/chiang-mai/chiang-mai/krua-phech-doi-ngam",
    image: '/images/krua-phech-doi-ngam1.png'
  },
  {
    name: "Laab Ton Yang (San Phi Suea)",
    cuisine: "Northern Thai",
    price: "฿",
    path: "/thailand/chiang-mai/chiang-mai/laab-ton-yang-san-phi-suea",
    image: '/images/laab-ton-yang-san-phi-suea1.png'
  },
  {
    name: "Larb Duang Dee Mee Sook",
    cuisine: "Northern Thai",
    price: "฿฿",
    path: "/thailand/chiang-mai/chiang-mai/larb-duang-dee-mee-sook",
    image: '/images/larb-duang-dee-mee-sook1.png'
  },
  {
    name: "Lumdee Te Khuadang",
    cuisine: "Northern Thai",
    price: "฿฿",
    path: "/thailand/chiang-mai/chiang-mai/lumdee-te-khuadang",
    image: '/images/lumdee-te-khuadang1.png'
  },
  {
    name: "Lung Khajohn Wat Ket",
    cuisine: "Street Food",
    price: "฿",
    path: "/thailand/chiang-mai/chiang-mai/lung-khajohn-wat-ket",
    image: '/images/lung-khajohn-wat-ket1.png'
  },
  {
    name: "Maadae",
    cuisine: "Seafood",
    price: "฿฿",
    path: "/thailand/chiang-mai/chiang-mai/maadae",
    image: '/images/maadae1.png'
  },
  {
    name: "Magnolia Café",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/chiang-mai/chiang-mai/magnolia-caf",
    image: '/images/magnolia-caf1.png'
  },
  {
    name: "Meena",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/chiang-mai/chiang-mai/meena",
    image: '/images/meena1.png'
  },
  {
    name: "Na Chantra",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/chiang-mai/chiang-mai/na-chantra",
    image: '/images/na-chantra1.png'
  },
  {
    name: "Nam Ngiao Yong",
    cuisine: "Street Food",
    price: "฿",
    path: "/thailand/chiang-mai/chiang-mai/nam-ngiao-yong",
    image: '/images/nam-ngiao-yong1.png'
  },
  {
    name: "NAVAN NAVAN",
    cuisine: "Creative",
    price: "฿฿฿",
    path: "/thailand/chiang-mai/chiang-mai/navan-navan",
    image: '/images/navan-navan1.png'
  },
  {
    name: "Pari-",
    cuisine: "Asian",
    price: "฿฿",
    path: "/thailand/chiang-mai/chiang-mai/pari",
    image: '/images/pari1.png'
  },
  {
    name: "Poondang Kaengron",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/chiang-mai/chiang-mai/poondang-kaengron",
    image: '/images/poondang-kaengron1.png'
  },
  {
    name: "Rasik Local Kitchen",
    cuisine: "Thai contemporary",
    price: "฿฿",
    path: "/thailand/chiang-mai/chiang-mai/rasik-local-kitchen",
    image: '/images/rasik-local-kitchen1.png'
  },
  {
    name: "Redbox",
    cuisine: "Thai contemporary",
    price: "฿฿฿฿",
    path: "/thailand/chiang-mai/chiang-mai/redbox",
    image: '/images/redbox1.png'
  },
  {
    name: "Roti Pa Day",
    cuisine: "Street Food",
    price: "฿",
    path: "/thailand/chiang-mai/chiang-mai/roti-pa-day",
    image: '/images/roti-pa-day1.png'
  },
  {
    name: "Saiyut and Doctor Sai Kitchen",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/chiang-mai/chiang-mai/saiyut-and-doctor-sai-kitchen",
    image: '/images/saiyut-and-doctor-sai-kitchen1.png'
  },
  {
    name: "Sanae",
    cuisine: "Thai",
    price: "฿",
    path: "/thailand/chiang-mai/chiang-mai/sanae",
    image: '/images/sanae1.png'
  },
  {
    name: "Sanpakoi Kanomjeen",
    cuisine: "Street Food",
    price: "฿",
    path: "/thailand/chiang-mai/chiang-mai/sanpakoi-kanomjeen",
    image: '/images/sanpakoi-kanomjeen1.png'
  },
  {
    name: "Sukjai by Pata Obasan",
    cuisine: "Vegetarian, Thai",
    price: "฿฿",
    path: "/thailand/chiang-mai/chiang-mai/sukjai-by-pata-obasan",
    image: '/images/sukjai-by-pata-obasan1.png'
  },
  {
    name: "Talung",
    cuisine: "Southern Thai",
    price: "฿฿",
    path: "/thailand/chiang-mai/chiang-mai/talung",
    image: '/images/talung1.png'
  },
  {
    name: "Thana Ocha",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/chiang-mai/chiang-mai/thana-ocha",
    image: '/images/thana-ocha1.png'
  },
  {
    name: "The House by Ginger",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/chiang-mai/chiang-mai/the-house-by-ginger",
    image: '/images/the-house-by-ginger1.png'
  },
  {
    name: "The Redbox",
    cuisine: "Thai contemporary",
    price: "฿฿฿",
    path: "/thailand/chiang-mai/chiang-mai/the-redbox",
    image: '/images/the-redbox1.png'
  },
  {
    name: "Tub Ping",
    cuisine: "Thai contemporary, Thai",
    price: "฿฿",
    path: "/thailand/chiang-mai/chiang-mai/tub-ping",
    image: '/images/tub-ping1.png'
  },
  {
    name: "Tue Ka Ko Na Prince",
    cuisine: "Street Food",
    price: "฿",
    path: "/thailand/chiang-mai/chiang-mai/tue-ka-ko-na-prince",
    image: '/images/tue-ka-ko-na-prince1.png'
  },
  {
    name: "Tune In Garden",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/chiang-mai/chiang-mai/tune-in-garden",
    image: '/images/tune-in-garden1.png'
  },
  {
    name: "We-La-Dee",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/chiang-mai/chiang-mai/we-la-dee",
    image: '/images/we-la-dee1.png'
  },
  {
    name: "Withee Laab",
    cuisine: "Northern Thai",
    price: "฿",
    path: "/thailand/chiang-mai/chiang-mai/withee-laab",
    image: '/images/withee-laab1.png'
  },
  {
    name: "Yangzi Jiang",
    cuisine: "Chinese",
    price: "฿฿฿",
    path: "/thailand/chiang-mai/chiang-mai/yangzi-jiang",
    image: '/images/yangzi-jiang1.png'
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
