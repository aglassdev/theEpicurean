import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Busan";

const restaurants = [
  {
    name: "100.1.Pyeongnaeng",
    cuisine: "Naengmyeon",
    price: "₩",
    path: "/usa/other/busan/1001pyeongnaeng",
    image: '/images/1001pyeongnaeng1.png'
  },
  {
    name: "1969 Buwondong Kalguksu",
    cuisine: "Kalguksu",
    price: "₩",
    path: "/usa/other/busan/1969-buwondong-kalguksu",
    image: '/images/1969-buwondong-kalguksu1.png'
  },
  {
    name: "Anmok",
    cuisine: "Dwaeji-gukbap",
    price: "₩",
    path: "/usa/other/busan/anmok",
    image: '/images/anmok1.png'
  },
  {
    name: "ARP",
    cuisine: "Vegan",
    price: "₩",
    path: "/usa/other/busan/arp",
    image: '/images/arp1.png'
  },
  {
    name: "Bao Haus",
    cuisine: "Taiwanese",
    price: "₩",
    path: "/usa/other/busan/bao-haus",
    image: '/images/bao-haus1.png'
  },
  {
    name: "Bibijae",
    cuisine: "Bibimbap",
    price: "₩",
    path: "/usa/other/busan/bibijae",
    image: '/images/bibijae1.png'
  },
  {
    name: "Born and Bred",
    cuisine: "Steakhouse",
    price: "₩₩₩₩",
    path: "/usa/other/busan/born-and-bred",
    image: '/images/born-and-bred1.png'
  },
  {
    name: "Buda Myeonoak",
    cuisine: "Naengmyeon",
    price: "₩",
    path: "/usa/other/busan/buda-myeonoak",
    image: '/images/buda-myeonoak1.png'
  },
  {
    name: "Cha Ae Jeon Halmae Kalguksu",
    cuisine: "Kalguksu",
    price: "₩",
    path: "/usa/other/busan/cha-ae-jeon-halmae-kalguksu",
    image: '/images/cha-ae-jeon-halmae-kalguksu1.png'
  },
  {
    name: "Chaoran",
    cuisine: "Chinese, Cantonese",
    price: "₩₩₩₩",
    path: "/usa/other/busan/chaoran",
    image: '/images/chaoran1.png'
  },
  {
    name: "Chef Gon",
    cuisine: "Contemporary",
    price: "₩₩",
    path: "/usa/other/busan/chef-gon",
    image: '/images/chef-gon1.png'
  },
  {
    name: "Cor Pasta bar",
    cuisine: "Italian",
    price: "₩",
    path: "/usa/other/busan/cor-pasta-bar",
    image: '/images/cor-pasta-bar1.png'
  },
  {
    name: "Damiok",
    cuisine: "Naengmyeon",
    price: "₩",
    path: "/usa/other/busan/damiok",
    image: '/images/damiok1.png'
  },
  {
    name: "Delibong",
    cuisine: "French",
    price: "₩₩",
    path: "/usa/other/busan/delibong",
    image: '/images/delibong1.png'
  },
  {
    name: "Dim Tao",
    cuisine: "Dim Sum",
    price: "₩",
    path: "/usa/other/busan/dim-tao",
    image: '/images/dim-tao1.png'
  },
  {
    name: "Eonyang Bulgogi Busanjip",
    cuisine: "Bulgogi",
    price: "₩",
    path: "/usa/other/busan/eonyang-bulgogi-busanjip",
    image: '/images/eonyang-bulgogi-busanjip1.png'
  },
  {
    name: "Eutteum Iroribata",
    cuisine: "Japanese",
    price: "₩₩",
    path: "/usa/other/busan/eutteum-iroribata",
    image: '/images/eutteum-iroribata1.png'
  },
  {
    name: "Fiotto",
    cuisine: "Italian",
    price: "₩₩",
    path: "/usa/other/busan/fiotto",
    image: '/images/fiotto1.png'
  },
  {
    name: "Good morning Hongkong",
    cuisine: "Chinese",
    price: "₩",
    path: "/usa/other/busan/good-morning-hongkong",
    image: '/images/good-morning-hongkong1.png'
  },
  {
    name: "Haemok",
    cuisine: "Japanese",
    price: "₩₩",
    path: "/usa/other/busan/haemok",
    image: '/images/haemok1.png'
  },
  {
    name: "Haeundae Rib Barbecue Restaurant",
    cuisine: "Barbecue",
    price: "₩₩",
    path: "/usa/other/busan/haeundae-rib-barbecue-restaurant",
    image: '/images/haeundae-rib-barbecue-restaurant1.png'
  },
  {
    name: "Hanwolgwan",
    cuisine: "Gomtang",
    price: "₩",
    path: "/usa/other/busan/hanwolgwan",
    image: '/images/hanwolgwan1.png'
  },
  {
    name: "Hapcheon Gukbapjip",
    cuisine: "Dwaeji-gukbap, Korean",
    price: "₩",
    path: "/usa/other/busan/hapcheon-gukbapjip",
    image: '/images/hapcheon-gukbapjip1.png'
  },
  {
    name: "IAán",
    cuisine: "Korean Contemporary",
    price: "₩₩",
    path: "/usa/other/busan/ian",
    image: '/images/ian1.png'
  },
  {
    name: "Iwa",
    cuisine: "Japanese",
    price: "₩₩",
    path: "/usa/other/busan/iwa",
    image: '/images/iwa1.png'
  },
  {
    name: "Jeongjitgan",
    cuisine: "Dwaeji-gukbap",
    price: "₩",
    path: "/usa/other/busan/jeongjitgan",
    image: '/images/jeongjitgan1.png'
  },
  {
    name: "Jin Dweji Gomtang",
    cuisine: "Gomtang",
    price: "₩",
    path: "/usa/other/busan/jin-dweji-gomtang",
    image: '/images/jin-dweji-gomtang1.png'
  },
  {
    name: "Kumsu Bokguk",
    cuisine: "Fugu / Pufferfish",
    price: "₩₩",
    path: "/usa/other/busan/kumsu-bokguk",
    image: '/images/kumsu-bokguk1.png'
  },
  {
    name: "Le dorer",
    cuisine: "Korean Contemporary",
    price: "₩₩₩",
    path: "/usa/other/busan/le-dorer",
    image: '/images/le-dorer1.png'
  },
  {
    name: "L'Essence",
    cuisine: "French",
    price: "₩₩",
    path: "/usa/other/busan/lessence",
    image: '/images/lessence1.png'
  },
  {
    name: "Loveurth",
    cuisine: "Vegan",
    price: "₩",
    path: "/usa/other/busan/loveurth",
    image: '/images/loveurth1.png'
  },
  {
    name: "L'étang",
    cuisine: "French",
    price: "₩₩",
    path: "/usa/other/busan/ltang",
    image: '/images/ltang1.png'
  },
  {
    name: "Matsuzaki",
    cuisine: "Japanese",
    price: "₩₩",
    path: "/usa/other/busan/matsuzaki",
    image: '/images/matsuzaki1.png'
  },
  {
    name: "Meerok Super",
    cuisine: "Asian",
    price: "₩₩",
    path: "/usa/other/busan/meerok-super",
    image: '/images/meerok-super1.png'
  },
  {
    name: "Moemiljip",
    cuisine: "Memil-guksu",
    price: "₩",
    path: "/usa/other/busan/moemiljip",
    image: '/images/moemiljip1.png'
  },
  {
    name: "Mori",
    cuisine: "Japanese",
    price: "₩₩₩",
    path: "/usa/other/busan/mori",
    image: '/images/mori1.png'
  },
  {
    name: "Mustrue",
    cuisine: "European",
    price: "₩₩",
    path: "/usa/other/busan/mustrue",
    image: '/images/mustrue1.png'
  },
  {
    name: "Nagahama Mangetsu",
    cuisine: "Ramen",
    price: "₩",
    path: "/usa/other/busan/nagahama-mangetsu",
    image: '/images/nagahama-mangetsu1.png'
  },
  {
    name: "Namakzip",
    cuisine: "Dwaeji-gukbap",
    price: "₩",
    path: "/usa/other/busan/namakzip",
    image: '/images/namakzip1.png'
  },
  {
    name: "Niurou mian guan zi",
    cuisine: "Taiwanese",
    price: "₩",
    path: "/usa/other/busan/niurou-mian-guan-zi",
    image: '/images/niurou-mian-guan-zi1.png'
  },
  {
    name: "Osteria Aboo",
    cuisine: "Italian",
    price: "₩₩₩",
    path: "/usa/other/busan/osteria-aboo",
    image: '/images/osteria-aboo1.png'
  },
  {
    name: "Outro by Vito",
    cuisine: "European",
    price: "₩₩",
    path: "/usa/other/busan/outro-by-vito",
    image: '/images/outro-by-vito1.png'
  },
  {
    name: "Palate",
    cuisine: "Contemporary",
    price: "₩₩",
    path: "/usa/other/busan/palate",
    image: '/images/palate1.png'
  },
  {
    name: "PILI PILI",
    cuisine: "Thai",
    price: "₩",
    path: "/usa/other/busan/pili-pili",
    image: '/images/pili-pili1.png'
  },
  {
    name: "Pyeongsanok",
    cuisine: "Korean",
    price: "₩",
    path: "/usa/other/busan/pyeongsanok",
    image: '/images/pyeongsanok1.png'
  },
  {
    name: "Pyeongyangjip",
    cuisine: "Mandu",
    price: "₩",
    path: "/usa/other/busan/pyeongyangjip",
    image: '/images/pyeongyangjip1.png'
  },
  {
    name: "Ramsey",
    cuisine: "French",
    price: "₩₩₩",
    path: "/usa/other/busan/ramsey",
    image: '/images/ramsey1.png'
  },
  {
    name: "Shunsai Kubo",
    cuisine: "Unagi / Freshwater Eel, Japanese",
    price: "₩",
    path: "/usa/other/busan/shunsai-kubo",
    image: '/images/shunsai-kubo1.png'
  },
  {
    name: "Sogonggan",
    cuisine: "Korean Contemporary",
    price: "₩₩",
    path: "/usa/other/busan/sogonggan",
    image: '/images/sogonggan1.png'
  },
  {
    name: "Songheonjip",
    cuisine: "Korean",
    price: "₩",
    path: "/usa/other/busan/songheonjip",
    image: '/images/songheonjip1.png'
  },
  {
    name: "Tokyo Babsang",
    cuisine: "Unagi / Freshwater Eel",
    price: "₩",
    path: "/usa/other/busan/tokyo-babsang",
    image: '/images/tokyo-babsang1.png'
  },
  {
    name: "Tooru",
    cuisine: "Japanese",
    price: "₩₩",
    path: "/usa/other/busan/tooru",
    image: '/images/tooru1.png'
  },
  {
    name: "Torafuguga",
    cuisine: "Fugu / Pufferfish",
    price: "₩₩",
    path: "/usa/other/busan/torafuguga",
    image: '/images/torafuguga1.png'
  },
  {
    name: "Ultra bite",
    cuisine: "Contemporary",
    price: "₩",
    path: "/usa/other/busan/ultra-bite",
    image: '/images/ultra-bite1.png'
  },
  {
    name: "Vigneto",
    cuisine: "Italian",
    price: "₩",
    path: "/usa/other/busan/vigneto",
    image: '/images/vigneto1.png'
  },
  {
    name: "Yakitori Haegong",
    cuisine: "Yakitori",
    price: "₩₩",
    path: "/usa/other/busan/yakitori-haegong",
    image: '/images/yakitori-haegong1.png'
  },
  {
    name: "Yakitori Onjung",
    cuisine: "Yakitori",
    price: "₩",
    path: "/usa/other/busan/yakitori-onjung",
    image: '/images/yakitori-onjung1.png'
  },
  {
    name: "Yongkangzzie",
    cuisine: "Noodles, Taiwanese",
    price: "₩",
    path: "/usa/other/busan/yongkangzzie",
    image: '/images/yongkangzzie1.png'
  },
  {
    name: "Zandunga",
    cuisine: "Mexican",
    price: "₩",
    path: "/usa/other/busan/zandunga",
    image: '/images/zandunga1.png'
  },
  {
    name: "Zero Base",
    cuisine: "Japanese",
    price: "₩₩₩",
    path: "/usa/other/busan/zero-base",
    image: '/images/zero-base1.png'
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
