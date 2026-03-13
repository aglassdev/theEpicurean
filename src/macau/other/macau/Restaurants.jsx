import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Macau";

const restaurants = [
  {
    name: "8 1/2 Otto e Mezzo - Bombana",
    cuisine: "Italian",
    price: "$$$$",
    path: "/macau/other/macau/8-12-otto-e-mezzo-bombana",
    image: '/images/8-12-otto-e-mezzo-bombana1.png'
  },
  {
    name: "A Lorcha",
    cuisine: "Portuguese",
    price: "$$",
    path: "/macau/other/macau/a-lorcha",
    image: '/images/a-lorcha1.png'
  },
  {
    name: "Aji",
    cuisine: "Innovative",
    price: "$$$$",
    path: "/macau/other/macau/aji",
    image: '/images/aji1.png'
  },
  {
    name: "Alain Ducasse at Morpheus",
    cuisine: "French Contemporary",
    price: "$$$$",
    path: "/macau/other/macau/alain-ducasse-at-morpheus",
    image: '/images/alain-ducasse-at-morpheus1.png'
  },
  {
    name: "Albergue 1601",
    cuisine: "Portuguese",
    price: "$$",
    path: "/macau/other/macau/albergue-1601",
    image: '/images/albergue-16011.png'
  },
  {
    name: "Chan Seng Kei",
    cuisine: "Cantonese",
    price: "$$",
    path: "/macau/other/macau/chan-seng-kei",
    image: '/images/chan-seng-kei1.png'
  },
  {
    name: "Chef Tam's Seasons",
    cuisine: "Cantonese",
    price: "$$$",
    path: "/macau/other/macau/chef-tams-seasons",
    image: '/images/chef-tams-seasons1.png'
  },
  {
    name: "Cheong Kei",
    cuisine: "Noodles",
    price: "$",
    path: "/macau/other/macau/cheong-kei",
    image: '/images/cheong-kei1.png'
  },
  {
    name: "Chiado",
    cuisine: "Portuguese",
    price: "$$",
    path: "/macau/other/macau/chiado",
    image: '/images/chiado1.png'
  },
  {
    name: "Din Tai Fung (COD)",
    cuisine: "Shanghainese",
    price: "$$",
    path: "/macau/other/macau/din-tai-fung-cod",
    image: '/images/din-tai-fung-cod1.png'
  },
  {
    name: "Don Alfonso 1890",
    cuisine: "Italian",
    price: "$$$$",
    path: "/macau/other/macau/don-alfonso-1890",
    image: '/images/don-alfonso-18901.png'
  },
  {
    name: "Drunken Fish",
    cuisine: "Seafood",
    price: "$$$",
    path: "/macau/other/macau/drunken-fish",
    image: '/images/drunken-fish1.png'
  },
  {
    name: "Feng Wei Ju",
    cuisine: "Hunanese, Sichuan",
    price: "$$",
    path: "/macau/other/macau/feng-wei-ju",
    image: '/images/feng-wei-ju1.png'
  },
  {
    name: "Five Foot Road",
    cuisine: "Sichuan",
    price: "$$",
    path: "/macau/other/macau/five-foot-road",
    image: '/images/five-foot-road1.png'
  },
  {
    name: "Fong Kei",
    cuisine: "Street Food",
    price: "$",
    path: "/macau/other/macau/fong-kei",
    image: '/images/fong-kei1.png'
  },
  {
    name: "Imperial Court",
    cuisine: "Cantonese",
    price: "$$",
    path: "/macau/other/macau/imperial-court",
    image: '/images/imperial-court1.png'
  },
  {
    name: "Jade Dragon",
    cuisine: "Cantonese",
    price: "$$$",
    path: "/macau/other/macau/jade-dragon",
    image: '/images/jade-dragon1.png'
  },
  {
    name: "Justindia",
    cuisine: "Indian",
    price: "$$",
    path: "/macau/other/macau/justindia",
    image: '/images/justindia1.png'
  },
  {
    name: "Kapok",
    cuisine: "Cantonese",
    price: "$$",
    path: "/macau/other/macau/kapok",
    image: '/images/kapok1.png'
  },
  {
    name: "Kika",
    cuisine: "Street Food",
    price: "$",
    path: "/macau/other/macau/kika",
    image: '/images/kika1.png'
  },
  {
    name: "Lai Heen",
    cuisine: "Cantonese",
    price: "$$$",
    path: "/macau/other/macau/lai-heen",
    image: '/images/lai-heen1.png'
  },
  {
    name: "Lakeview Palace",
    cuisine: "Jiangzhe, Sichuan",
    price: "$$$",
    path: "/macau/other/macau/lakeview-palace",
    image: '/images/lakeview-palace1.png'
  },
  {
    name: "Lok Kei Noodles (Patane)",
    cuisine: "Noodles and Congee",
    price: "$",
    path: "/macau/other/macau/lok-kei-noodles-patane",
    image: '/images/lok-kei-noodles-patane1.png'
  },
  {
    name: "Lord Stow's Bakery (Rua do Tassara)",
    cuisine: "Street Food",
    price: "$",
    path: "/macau/other/macau/lord-stows-bakery-rua-do-tassara",
    image: '/images/lord-stows-bakery-rua-do-tassara1.png'
  },
  {
    name: "Lou Kei",
    cuisine: "Cantonese",
    price: "$$",
    path: "/macau/other/macau/lou-kei",
    image: '/images/lou-kei1.png'
  },
  {
    name: "Lun Kee Rice Roll",
    cuisine: "Street Food",
    price: "$",
    path: "/macau/other/macau/lun-kee-rice-roll",
    image: '/images/lun-kee-rice-roll1.png'
  },
  {
    name: "Manuel Cozinha Portuguesa",
    cuisine: "Portuguese",
    price: "$$",
    path: "/macau/other/macau/manuel-cozinha-portuguesa",
    image: '/images/manuel-cozinha-portuguesa1.png'
  },
  {
    name: "Mesa",
    cuisine: "Portuguese, Contemporary",
    price: "$$$",
    path: "/macau/other/macau/mesa",
    image: '/images/mesa1.png'
  },
  {
    name: "Mizumi",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/macau/other/macau/mizumi",
    image: '/images/mizumi1.png'
  },
  {
    name: "Mok Yee Kei",
    cuisine: "Street Food",
    price: "$",
    path: "/macau/other/macau/mok-yee-kei",
    image: '/images/mok-yee-kei1.png'
  },
  {
    name: "Ngao Kei Ka Lei Chon (Macau)",
    cuisine: "Noodles and Congee",
    price: "$",
    path: "/macau/other/macau/ngao-kei-ka-lei-chon-macau",
    image: '/images/ngao-kei-ka-lei-chon-macau1.png'
  },
  {
    name: "Nok Song",
    cuisine: "Thai",
    price: "$$",
    path: "/macau/other/macau/nok-song",
    image: '/images/nok-song1.png'
  },
  {
    name: "O Castiço",
    cuisine: "Portuguese",
    price: "$$",
    path: "/macau/other/macau/o-castio",
    image: '/images/o-castio1.png'
  },
  {
    name: "Palace Garden",
    cuisine: "Cantonese",
    price: "$$$",
    path: "/macau/other/macau/palace-garden",
    image: '/images/palace-garden1.png'
  },
  {
    name: "Pearl Dragon",
    cuisine: "Cantonese",
    price: "$$$",
    path: "/macau/other/macau/pearl-dragon",
    image: '/images/pearl-dragon1.png'
  },
  {
    name: "Pin Yue Xuan",
    cuisine: "Cantonese",
    price: "$$$",
    path: "/macau/other/macau/pin-yue-xuan",
    image: '/images/pin-yue-xuan1.png'
  },
  {
    name: "Portugália",
    cuisine: "Portuguese",
    price: "$$",
    path: "/macau/other/macau/portuglia",
    image: '/images/portuglia1.png'
  },
  {
    name: "Restaurant Litoral (Taipa)",
    cuisine: "Macanese",
    price: "$$",
    path: "/macau/other/macau/restaurant-litoral-taipa",
    image: '/images/restaurant-litoral-taipa1.png'
  },
  {
    name: "Robuchon au Dôme",
    cuisine: "French Contemporary",
    price: "$$$$",
    path: "/macau/other/macau/robuchon-au-dme",
    image: '/images/robuchon-au-dme1.png'
  },
  {
    name: "Saffron",
    cuisine: "Thai",
    price: "$$",
    path: "/macau/other/macau/saffron",
    image: '/images/saffron1.png'
  },
  {
    name: "Son Tak Kong",
    cuisine: "Shun Tak",
    price: "$$",
    path: "/macau/other/macau/son-tak-kong",
    image: '/images/son-tak-kong1.png'
  },
  {
    name: "Sushi Kinetsu",
    cuisine: "Sushi",
    price: "$$$$",
    path: "/macau/other/macau/sushi-kinetsu",
    image: '/images/sushi-kinetsu1.png'
  },
  {
    name: "Sushi Kissho by Miyakawa",
    cuisine: "Sushi",
    price: "$$$$",
    path: "/macau/other/macau/sushi-kissho-by-miyakawa",
    image: '/images/sushi-kissho-by-miyakawa1.png'
  },
  {
    name: "SW Steakhouse",
    cuisine: "Steakhouse",
    price: "$$$",
    path: "/macau/other/macau/sw-steakhouse",
    image: '/images/sw-steakhouse1.png'
  },
  {
    name: "The Eight",
    cuisine: "Cantonese",
    price: "$$$",
    path: "/macau/other/macau/the-eight",
    image: '/images/the-eight1.png'
  },
  {
    name: "The Huaiyang Garden",
    cuisine: "Huaiyang",
    price: "$$$",
    path: "/macau/other/macau/the-huaiyang-garden",
    image: '/images/the-huaiyang-garden1.png'
  },
  {
    name: "The Kitchen",
    cuisine: "Steakhouse",
    price: "$$$",
    path: "/macau/other/macau/the-kitchen",
    image: '/images/the-kitchen1.png'
  },
  {
    name: "The Mews",
    cuisine: "Thai",
    price: "$$$",
    path: "/macau/other/macau/the-mews",
    image: '/images/the-mews1.png'
  },
  {
    name: "The Ritz-Carlton Café",
    cuisine: "French",
    price: "$$",
    path: "/macau/other/macau/the-ritz-carlton-caf",
    image: '/images/the-ritz-carlton-caf1.png'
  },
  {
    name: "Twelve25",
    cuisine: "French Contemporary",
    price: "$$$",
    path: "/macau/other/macau/twelve25",
    image: '/images/twelve251.png'
  },
  {
    name: "Unique",
    cuisine: "Street Food",
    price: "$",
    path: "/macau/other/macau/unique",
    image: '/images/unique1.png'
  },
  {
    name: "UTM Educational Restaurant",
    cuisine: "Macanese",
    price: "$$",
    path: "/macau/other/macau/utm-educational-restaurant",
    image: '/images/utm-educational-restaurant1.png'
  },
  {
    name: "Ving Kei (Macau)",
    cuisine: "Street Food",
    price: "$",
    path: "/macau/other/macau/ving-kei-macau",
    image: '/images/ving-kei-macau1.png'
  },
  {
    name: "Wing Lei",
    cuisine: "Cantonese",
    price: "$$$",
    path: "/macau/other/macau/wing-lei",
    image: '/images/wing-lei1.png'
  },
  {
    name: "Yi",
    cuisine: "Chinese Contemporary",
    price: "$$$$",
    path: "/macau/other/macau/yi",
    image: '/images/yi1.png'
  },
  {
    name: "Yi Shun (Macau)",
    cuisine: "Street Food",
    price: "$",
    path: "/macau/other/macau/yi-shun-macau",
    image: '/images/yi-shun-macau1.png'
  },
  {
    name: "Ying",
    cuisine: "Cantonese",
    price: "$$$",
    path: "/macau/other/macau/ying",
    image: '/images/ying1.png'
  },
  {
    name: "Zi Yat Heen",
    cuisine: "Cantonese",
    price: "$$$",
    path: "/macau/other/macau/zi-yat-heen",
    image: '/images/zi-yat-heen1.png'
  },
  {
    name: "Zuicho",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/macau/other/macau/zuicho",
    image: '/images/zuicho1.png'
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
