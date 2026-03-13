import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Austin";

const restaurants = [
  {
    name: "Apt 115",
    cuisine: "Fusion",
    price: "$$$$",
    path: "/usa/other/austin/apt-115",
    image: '/images/apt-1151.png'
  },
  {
    name: "Barley Swine",
    cuisine: "Contemporary, American",
    price: "$$$$",
    path: "/usa/other/austin/barley-swine",
    image: '/images/barley-swine1.png'
  },
  {
    name: "Birdie's",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/usa/other/austin/birdies",
    image: '/images/birdies1.png'
  },
  {
    name: "Briscuits",
    cuisine: "Barbecue",
    price: "$$",
    path: "/usa/other/austin/briscuits",
    image: '/images/briscuits1.png'
  },
  {
    name: "Comedor",
    cuisine: "Mexican, Contemporary",
    price: "$$$",
    path: "/usa/other/austin/comedor",
    image: '/images/comedor1.png'
  },
  {
    name: "Craft Omakase",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/austin/craft-omakase",
    image: '/images/craft-omakase1.png'
  },
  {
    name: "Cuantos Tacos",
    cuisine: "Mexican, Regional Cuisine",
    price: "$",
    path: "/usa/other/austin/cuantos-tacos",
    image: '/images/cuantos-tacos1.png'
  },
  {
    name: "Dai Due",
    cuisine: "American, Regional Cuisine",
    price: "$$",
    path: "/usa/other/austin/dai-due",
    image: '/images/dai-due1.png'
  },
  {
    name: "dipdipdip Tatsu-Ya",
    cuisine: "Japanese, Shabu-shabu",
    price: "$$$",
    path: "/usa/other/austin/dipdipdip-tatsu-ya",
    image: '/images/dipdipdip-tatsu-ya1.png'
  },
  {
    name: "Discada",
    cuisine: "Mexican, Regional Cuisine",
    price: "$",
    path: "/usa/other/austin/discada",
    image: '/images/discada1.png'
  },
  {
    name: "Distant Relatives",
    cuisine: "Barbecue",
    price: "$$",
    path: "/usa/other/austin/distant-relatives",
    image: '/images/distant-relatives1.png'
  },
  {
    name: "Emmer & Rye",
    cuisine: "American, Contemporary",
    price: "$$$",
    path: "/usa/other/austin/emmer-rye",
    image: '/images/emmer-rye1.png'
  },
  {
    name: "Este",
    cuisine: "Mexican, Seafood",
    price: "$$$",
    path: "/usa/other/austin/este",
    image: '/images/este1.png'
  },
  {
    name: "Ezov",
    cuisine: "Israeli",
    price: "$$$",
    path: "/usa/other/austin/ezov",
    image: '/images/ezov1.png'
  },
  {
    name: "Fabrik",
    cuisine: "Vegan",
    price: "$$$$",
    path: "/usa/other/austin/fabrik",
    image: '/images/fabrik1.png'
  },
  {
    name: "Franklin Barbecue",
    cuisine: "Barbecue, Regional Cuisine",
    price: "$$",
    path: "/usa/other/austin/franklin-barbecue",
    image: '/images/franklin-barbecue1.png'
  },
  {
    name: "Garrison",
    cuisine: "American",
    price: "$$$$",
    path: "/usa/other/austin/garrison",
    image: '/images/garrison1.png'
  },
  {
    name: "Garrison",
    cuisine: "American",
    price: "$$$$",
    path: "/usa/other/austin/garrison",
    image: '/images/garrison1.png'
  },
  {
    name: "Hestia",
    cuisine: "American, Contemporary",
    price: "$$$$",
    path: "/usa/other/austin/hestia",
    image: '/images/hestia1.png'
  },
  {
    name: "Hestia",
    cuisine: "American, Contemporary",
    price: "$$$$",
    path: "/usa/other/austin/hestia",
    image: '/images/hestia1.png'
  },
  {
    name: "InterStellar BBQ",
    cuisine: "Barbecue",
    price: "$$",
    path: "/usa/other/austin/interstellar-bbq",
    image: '/images/interstellar-bbq1.png'
  },
  {
    name: "Jeffrey's",
    cuisine: "Contemporary, Steakhouse",
    price: "$$$$",
    path: "/usa/other/austin/jeffreys",
    image: '/images/jeffreys1.png'
  },
  {
    name: "Joe's Bakery & Coffee Shop",
    cuisine: "Tex-Mex",
    price: "$",
    path: "/usa/other/austin/joes-bakery-coffee-shop",
    image: '/images/joes-bakery-coffee-shop1.png'
  },
  {
    name: "Kemuri Tatsu-ya",
    cuisine: "Izakaya, Barbecue",
    price: "$$",
    path: "/usa/other/austin/kemuri-tatsu-ya",
    image: '/images/kemuri-tatsu-ya1.png'
  },
  {
    name: "KG BBQ",
    cuisine: "Barbecue, Egyptian",
    price: "$$",
    path: "/usa/other/austin/kg-bbq",
    image: '/images/kg-bbq1.png'
  },
  {
    name: "la Barbecue",
    cuisine: "Barbecue",
    price: "$$",
    path: "/usa/other/austin/la-barbecue",
    image: '/images/la-barbecue1.png'
  },
  {
    name: "La Condesa",
    cuisine: "Mexican, Regional Cuisine",
    price: "$$$",
    path: "/usa/other/austin/la-condesa",
    image: '/images/la-condesa1.png'
  },
  {
    name: "La Santa Barbacha",
    cuisine: "Mexican",
    price: "$",
    path: "/usa/other/austin/la-santa-barbacha",
    image: '/images/la-santa-barbacha1.png'
  },
  {
    name: "Launderette",
    cuisine: "Contemporary, Mediterranean Cuisine",
    price: "$$$",
    path: "/usa/other/austin/launderette",
    image: '/images/launderette1.png'
  },
  {
    name: "Le Calamar",
    cuisine: "French, American",
    price: "$$$",
    path: "/usa/other/austin/le-calamar",
    image: '/images/le-calamar1.png'
  },
  {
    name: "Lenoir",
    cuisine: "Contemporary, Regional Cuisine",
    price: "$$$",
    path: "/usa/other/austin/lenoir",
    image: '/images/lenoir1.png'
  },
  {
    name: "LeRoy and Lewis Barbecue",
    cuisine: "Barbecue, American",
    price: "$$",
    path: "/usa/other/austin/leroy-and-lewis-barbecue",
    image: '/images/leroy-and-lewis-barbecue1.png'
  },
  {
    name: "Ling Kitchen",
    cuisine: "Chinese, Contemporary",
    price: "$$$$",
    path: "/usa/other/austin/ling-kitchen",
    image: '/images/ling-kitchen1.png'
  },
  {
    name: "Lutie's",
    cuisine: "American, Regional Cuisine",
    price: "$$$",
    path: "/usa/other/austin/luties",
    image: '/images/luties1.png'
  },
  {
    name: "Maie Day",
    cuisine: "Steakhouse, American",
    price: "$$$",
    path: "/usa/other/austin/maie-day",
    image: '/images/maie-day1.png'
  },
  {
    name: "Mercado Sin Nombre",
    cuisine: "Mexican, American",
    price: "$",
    path: "/usa/other/austin/mercado-sin-nombre",
    image: '/images/mercado-sin-nombre1.png'
  },
  {
    name: "Mexta",
    cuisine: "Mexican, Contemporary",
    price: "$$$",
    path: "/usa/other/austin/mexta",
    image: '/images/mexta1.png'
  },
  {
    name: "Micklethwait Craft Meats",
    cuisine: "Barbecue, Regional Cuisine",
    price: "$$",
    path: "/usa/other/austin/micklethwait-craft-meats",
    image: '/images/micklethwait-craft-meats1.png'
  },
  {
    name: "Mum Foods Smokehouse & Delicatessen",
    cuisine: "Barbecue, Deli",
    price: "$$",
    path: "/usa/other/austin/mum-foods-smokehouse-delicatessen",
    image: '/images/mum-foods-smokehouse-delicatessen1.png'
  },
  {
    name: "Nixta Taqueria",
    cuisine: "Mexican, Regional Cuisine",
    price: "$$",
    path: "/usa/other/austin/nixta-taqueria",
    image: '/images/nixta-taqueria1.png'
  },
  {
    name: "Odd Duck",
    cuisine: "American, Contemporary",
    price: "$$$",
    path: "/usa/other/austin/odd-duck",
    image: '/images/odd-duck1.png'
  },
  {
    name: "Odd Duck",
    cuisine: "American, Contemporary",
    price: "$$$",
    path: "/usa/other/austin/odd-duck",
    image: '/images/odd-duck1.png'
  },
  {
    name: "Olamaie",
    cuisine: "American, Southern",
    price: "$$$",
    path: "/usa/other/austin/olamaie",
    image: '/images/olamaie1.png'
  },
  {
    name: "Parish Barbecue",
    cuisine: "Barbecue",
    price: "$$",
    path: "/usa/other/austin/parish-barbecue",
    image: '/images/parish-barbecue1.png'
  },
  {
    name: "Pasta|Bar Austin",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/austin/pastabar-austin",
    image: '/images/pastabar-austin1.png'
  },
  {
    name: "Ramen del Barrio",
    cuisine: "Fusion, Ramen",
    price: "$$",
    path: "/usa/other/austin/ramen-del-barrio",
    image: '/images/ramen-del-barrio1.png'
  },
  {
    name: "Siti",
    cuisine: "South East Asian",
    price: "$$$",
    path: "/usa/other/austin/siti",
    image: '/images/siti1.png'
  },
  {
    name: "Suerte",
    cuisine: "Mexican, Regional Cuisine",
    price: "$$$",
    path: "/usa/other/austin/suerte",
    image: '/images/suerte1.png'
  },
  {
    name: "Tare",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/usa/other/austin/tare",
    image: '/images/tare1.png'
  },
  {
    name: "Terry Black’s BBQ",
    cuisine: "Barbecue",
    price: "$$",
    path: "/usa/other/austin/terry-blacks-bbq",
    image: '/images/terry-blacks-bbq1.png'
  },
  {
    name: "Toshokan",
    cuisine: "Sushi",
    price: "$$$$",
    path: "/usa/other/austin/toshokan",
    image: '/images/toshokan1.png'
  },
  {
    name: "Veracruz Fonda & Bar",
    cuisine: "Mexican, Regional Cuisine",
    price: "$$",
    path: "/usa/other/austin/veracruz-fonda-bar",
    image: '/images/veracruz-fonda-bar1.png'
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
