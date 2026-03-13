import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Atlanta";

const restaurants = [
  {
    name: "Antico Pizza Napoletana",
    cuisine: "Pizza",
    price: "$$",
    path: "/usa/other/atlanta/antico-pizza-napoletana",
    image: '/images/antico-pizza-napoletana1.png'
  },
  {
    name: "Atlas",
    cuisine: "American",
    price: "$$$$",
    path: "/usa/other/atlanta/atlas",
    image: '/images/atlas1.png'
  },
  {
    name: "Avize",
    cuisine: "European, Contemporary",
    price: "$$$$",
    path: "/usa/other/atlanta/avize",
    image: '/images/avize1.png'
  },
  {
    name: "Bacchanalia",
    cuisine: "American",
    price: "$$$$",
    path: "/usa/other/atlanta/bacchanalia",
    image: '/images/bacchanalia1.png'
  },
  {
    name: "Banshee",
    cuisine: "American",
    price: "$$$",
    path: "/usa/other/atlanta/banshee",
    image: '/images/banshee1.png'
  },
  {
    name: "BoccaLupo",
    cuisine: "Italian-American",
    price: "$$$",
    path: "/usa/other/atlanta/boccalupo",
    image: '/images/boccalupo1.png'
  },
  {
    name: "Bomb Biscuit Co.",
    cuisine: "Southern",
    price: "$",
    path: "/usa/other/atlanta/bomb-biscuit-co",
    image: '/images/bomb-biscuit-co1.png'
  },
  {
    name: "Delbar",
    cuisine: "Middle Eastern",
    price: "$$",
    path: "/usa/other/atlanta/delbar",
    image: '/images/delbar1.png'
  },
  {
    name: "Estrellita",
    cuisine: "Filipino",
    price: "$$",
    path: "/usa/other/atlanta/estrellita",
    image: '/images/estrellita1.png'
  },
  {
    name: "Fishmonger",
    cuisine: "Seafood",
    price: "$$",
    path: "/usa/other/atlanta/fishmonger",
    image: '/images/fishmonger1.png'
  },
  {
    name: "Food Terminal",
    cuisine: "Malaysian",
    price: "$$",
    path: "/usa/other/atlanta/food-terminal",
    image: '/images/food-terminal1.png'
  },
  {
    name: "Fred's Meat & Bread",
    cuisine: "American",
    price: "$",
    path: "/usa/other/atlanta/freds-meat-bread",
    image: '/images/freds-meat-bread1.png'
  },
  {
    name: "Georgia Boy",
    cuisine: "Contemporary, American",
    price: "$$$$",
    path: "/usa/other/atlanta/georgia-boy",
    image: '/images/georgia-boy1.png'
  },
  {
    name: "Gunshow",
    cuisine: "American",
    price: "$$$$",
    path: "/usa/other/atlanta/gunshow",
    image: '/images/gunshow1.png'
  },
  {
    name: "Han Il Kwan",
    cuisine: "Korean",
    price: "$$",
    path: "/usa/other/atlanta/han-il-kwan",
    image: '/images/han-il-kwan1.png'
  },
  {
    name: "Hayakawa",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/atlanta/hayakawa",
    image: '/images/hayakawa1.png'
  },
  {
    name: "Heirloom Market BBQ",
    cuisine: "Barbecue",
    price: "$$",
    path: "/usa/other/atlanta/heirloom-market-bbq",
    image: '/images/heirloom-market-bbq1.png'
  },
  {
    name: "Home Grown",
    cuisine: "American, Southern",
    price: "$$",
    path: "/usa/other/atlanta/home-grown",
    image: '/images/home-grown1.png'
  },
  {
    name: "Kamayan ATL",
    cuisine: "Filipino",
    price: "$$",
    path: "/usa/other/atlanta/kamayan-atl",
    image: '/images/kamayan-atl1.png'
  },
  {
    name: "LanZhou Ramen",
    cuisine: "Chinese, Regional Cuisine",
    price: "$$",
    path: "/usa/other/atlanta/lanzhou-ramen",
    image: '/images/lanzhou-ramen1.png'
  },
  {
    name: "Lazy Betty",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/atlanta/lazy-betty",
    image: '/images/lazy-betty1.png'
  },
  {
    name: "Little Bear",
    cuisine: "Contemporary",
    price: "$$",
    path: "/usa/other/atlanta/little-bear",
    image: '/images/little-bear1.png'
  },
  {
    name: "Little Bear",
    cuisine: "Contemporary",
    price: "$$",
    path: "/usa/other/atlanta/little-bear",
    image: '/images/little-bear1.png'
  },
  {
    name: "Little Sparrow",
    cuisine: "French",
    price: "$$$",
    path: "/usa/other/atlanta/little-sparrow",
    image: '/images/little-sparrow1.png'
  },
  {
    name: "Lucky Star",
    cuisine: "Taiwanese, Taiwanese contemporary",
    price: "$",
    path: "/usa/other/atlanta/lucky-star",
    image: '/images/lucky-star1.png'
  },
  {
    name: "Lyla Lila",
    cuisine: "European",
    price: "$$$",
    path: "/usa/other/atlanta/lyla-lila",
    image: '/images/lyla-lila1.png'
  },
  {
    name: "Madeira Park",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/usa/other/atlanta/madeira-park",
    image: '/images/madeira-park1.png'
  },
  {
    name: "Marcel",
    cuisine: "Steakhouse",
    price: "$$$$",
    path: "/usa/other/atlanta/marcel",
    image: '/images/marcel1.png'
  },
  {
    name: "Miller Union",
    cuisine: "American",
    price: "$$",
    path: "/usa/other/atlanta/miller-union",
    image: '/images/miller-union1.png'
  },
  {
    name: "Mujō",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/atlanta/muj",
    image: '/images/muj1.png'
  },
  {
    name: "Nam Phuong",
    cuisine: "Vietnamese",
    price: "$$",
    path: "/usa/other/atlanta/nam-phuong",
    image: '/images/nam-phuong1.png'
  },
  {
    name: "Nàdair",
    cuisine: "Scottish, Southern",
    price: "$$$$",
    path: "/usa/other/atlanta/ndair",
    image: '/images/ndair1.png'
  },
  {
    name: "O by Brush",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/atlanta/o-by-brush",
    image: '/images/o-by-brush1.png'
  },
  {
    name: "Omakase Table",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/atlanta/omakase-table",
    image: '/images/omakase-table1.png'
  },
  {
    name: "Poor Hendrix",
    cuisine: "Contemporary",
    price: "$$",
    path: "/usa/other/atlanta/poor-hendrix",
    image: '/images/poor-hendrix1.png'
  },
  {
    name: "Ryokou",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/usa/other/atlanta/ryokou",
    image: '/images/ryokou1.png'
  },
  {
    name: "Southern Belle",
    cuisine: "Contemporary, Regional Cuisine",
    price: "$$$",
    path: "/usa/other/atlanta/southern-belle",
    image: '/images/southern-belle1.png'
  },
  {
    name: "Staplehouse",
    cuisine: "American Contemporary",
    price: "$$$$",
    path: "/usa/other/atlanta/staplehouse",
    image: '/images/staplehouse1.png'
  },
  {
    name: "Storico Fresco Alimentari",
    cuisine: "Italian",
    price: "$$",
    path: "/usa/other/atlanta/storico-fresco-alimentari",
    image: '/images/storico-fresco-alimentari1.png'
  },
  {
    name: "Superica",
    cuisine: "Tex-Mex",
    price: "$$",
    path: "/usa/other/atlanta/superica",
    image: '/images/superica1.png'
  },
  {
    name: "Talat Market",
    cuisine: "Thai",
    price: "$$$",
    path: "/usa/other/atlanta/talat-market",
    image: '/images/talat-market1.png'
  },
  {
    name: "The Busy Bee",
    cuisine: "Southern",
    price: "$$",
    path: "/usa/other/atlanta/the-busy-bee",
    image: '/images/the-busy-bee1.png'
  },
  {
    name: "The Chastain",
    cuisine: "American",
    price: "$$$",
    path: "/usa/other/atlanta/the-chastain",
    image: '/images/the-chastain1.png'
  },
  {
    name: "The General Muir",
    cuisine: "Deli, American",
    price: "$$$",
    path: "/usa/other/atlanta/the-general-muir",
    image: '/images/the-general-muir1.png'
  },
  {
    name: "Ticonderoga Club",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/usa/other/atlanta/ticonderoga-club",
    image: '/images/ticonderoga-club1.png'
  },
  {
    name: "Tiny Lou's",
    cuisine: "French",
    price: "$$$",
    path: "/usa/other/atlanta/tiny-lous",
    image: '/images/tiny-lous1.png'
  },
  {
    name: "Tomo",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/atlanta/tomo",
    image: '/images/tomo1.png'
  },
  {
    name: "Twisted Soul Cookhouse & Pours",
    cuisine: "Southern",
    price: "$$$",
    path: "/usa/other/atlanta/twisted-soul-cookhouse-pours",
    image: '/images/twisted-soul-cookhouse-pours1.png'
  },
  {
    name: "Whoopsie's",
    cuisine: "American",
    price: "$$",
    path: "/usa/other/atlanta/whoopsies",
    image: '/images/whoopsies1.png'
  },
  {
    name: "Woo Nam Jeong",
    cuisine: "Korean",
    price: "$$",
    path: "/usa/other/atlanta/woo-nam-jeong",
    image: '/images/woo-nam-jeong1.png'
  },
  {
    name: "Xi'an Gourmet House",
    cuisine: "Chinese, Regional Cuisine",
    price: "$$",
    path: "/usa/other/atlanta/xian-gourmet-house",
    image: '/images/xian-gourmet-house1.png'
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
