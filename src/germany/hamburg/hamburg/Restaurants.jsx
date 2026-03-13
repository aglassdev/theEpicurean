import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Hamburg";

const restaurants = [
  {
    name: "100/200 Kitchen",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€€",
    path: "/germany/hamburg/hamburg/100200-kitchen",
    image: '/images/100200-kitchen1.png'
  },
  {
    name: "am kai",
    cuisine: "Seafood, International",
    price: "€€€",
    path: "/germany/hamburg/hamburg/am-kai",
    image: '/images/am-kai1.png'
  },
  {
    name: "am kai | restaurnt. seafood. drinks. elbblick",
    cuisine: "Seafood, International",
    price: "€€€",
    path: "/germany/hamburg/hamburg/am-kai-restaurnt-seafood-drinks-elbblick",
    image: '/images/am-kai-restaurnt-seafood-drinks-elbblick1.png'
  },
  {
    name: "Arc Restaurant",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€",
    path: "/germany/hamburg/hamburg/arc-restaurant",
    image: '/images/arc-restaurant1.png'
  },
  {
    name: "Atlantic Restaurant",
    cuisine: "French Contemporary",
    price: "€€€€",
    path: "/germany/hamburg/hamburg/atlantic-restaurant",
    image: '/images/atlantic-restaurant1.png'
  },
  {
    name: "bianc",
    cuisine: "Mediterranean Cuisine, Creative",
    price: "€€€€",
    path: "/germany/hamburg/hamburg/bianc",
    image: '/images/bianc1.png'
  },
  {
    name: "Bootshaus Bar & Grill",
    cuisine: "Meats and Grills",
    price: "€€€",
    path: "/germany/hamburg/hamburg/bootshaus-bar-grill",
    image: '/images/bootshaus-bar-grill1.png'
  },
  {
    name: "Brook",
    cuisine: "International",
    price: "€€",
    path: "/germany/hamburg/hamburg/brook",
    image: '/images/brook1.png'
  },
  {
    name: "Butcher's american steakhouse",
    cuisine: "Meats and Grills, American",
    price: "€€€",
    path: "/germany/hamburg/hamburg/butchers-american-steakhouse",
    image: '/images/butchers-american-steakhouse1.png'
  },
  {
    name: "CARLS Brasserie an der Elbphilharmonie",
    cuisine: "German",
    price: "€€",
    path: "/germany/hamburg/hamburg/carls-brasserie-an-der-elbphilharmonie",
    image: '/images/carls-brasserie-an-der-elbphilharmonie1.png'
  },
  {
    name: "Clouds - Heaven's Bar & Kitchen",
    cuisine: "International, Meats and Grills",
    price: "€€€",
    path: "/germany/hamburg/hamburg/clouds-heavens-bar-kitchen",
    image: '/images/clouds-heavens-bar-kitchen1.png'
  },
  {
    name: "Cornelia Poletto",
    cuisine: "Italian, Mediterranean Cuisine",
    price: "€€€",
    path: "/germany/hamburg/hamburg/cornelia-poletto",
    image: '/images/cornelia-poletto1.png'
  },
  {
    name: "Cox",
    cuisine: "International",
    price: "€€",
    path: "/germany/hamburg/hamburg/cox",
    image: '/images/cox1.png'
  },
  {
    name: "east",
    cuisine: "Fusion",
    price: "€€€",
    path: "/germany/hamburg/hamburg/east",
    image: '/images/east1.png'
  },
  {
    name: "Fischereihafen Restaurant",
    cuisine: "Seafood, Classic Cuisine",
    price: "€€€",
    path: "/germany/hamburg/hamburg/fischereihafen-restaurant",
    image: '/images/fischereihafen-restaurant1.png'
  },
  {
    name: "Félix",
    cuisine: "French, Classic Cuisine",
    price: "€€€",
    path: "/germany/hamburg/hamburg/flix",
    image: '/images/flix1.png'
  },
  {
    name: "GLORIE",
    cuisine: "Classic Cuisine, Contemporary",
    price: "€€€€",
    path: "/germany/hamburg/hamburg/glorie",
    image: '/images/glorie1.png'
  },
  {
    name: "GRILL",
    cuisine: "Classic French, Meats and Grills",
    price: "€€€€",
    path: "/germany/hamburg/hamburg/grill",
    image: '/images/grill1.png'
  },
  {
    name: "Grill Royal Hamburg",
    cuisine: "Meats and Grills, Seafood",
    price: "€€€",
    path: "/germany/hamburg/hamburg/grill-royal-hamburg",
    image: '/images/grill-royal-hamburg1.png'
  },
  {
    name: "haebel",
    cuisine: "Modern Cuisine, Seasonal Cuisine",
    price: "€€€€",
    path: "/germany/hamburg/hamburg/haebel",
    image: '/images/haebel1.png'
  },
  {
    name: "Heimatjuwel",
    cuisine: "Creative, Country cooking",
    price: "€€€",
    path: "/germany/hamburg/hamburg/heimatjuwel",
    image: '/images/heimatjuwel1.png'
  },
  {
    name: "Henriks",
    cuisine: "International",
    price: "€€€",
    path: "/germany/hamburg/hamburg/henriks",
    image: '/images/henriks1.png'
  },
  {
    name: "HENSSLER",
    cuisine: "Asian Influences",
    price: "€€€",
    path: "/germany/hamburg/hamburg/henssler",
    image: '/images/henssler1.png'
  },
  {
    name: "Henssler Henssler",
    cuisine: "Asian Influences",
    price: "€€€",
    path: "/germany/hamburg/hamburg/henssler-henssler",
    image: '/images/henssler-henssler1.png'
  },
  {
    name: "HYGGE Brasserie & Bar",
    cuisine: "Farm to table",
    price: "€€",
    path: "/germany/hamburg/hamburg/hygge-brasserie-bar",
    image: '/images/hygge-brasserie-bar1.png'
  },
  {
    name: "Jacobs Restaurant",
    cuisine: "Classic Cuisine, Modern Cuisine",
    price: "€€€€",
    path: "/germany/hamburg/hamburg/jacobs-restaurant",
    image: '/images/jacobs-restaurant1.png'
  },
  {
    name: "Jellyfish",
    cuisine: "Seafood, Modern Cuisine",
    price: "€€€€",
    path: "/germany/hamburg/hamburg/jellyfish",
    image: '/images/jellyfish1.png'
  },
  {
    name: "Kinfelts Kitchen & Wine",
    cuisine: "Farm to table, Contemporary",
    price: "€€€",
    path: "/germany/hamburg/hamburg/kinfelts-kitchen-wine",
    image: '/images/kinfelts-kitchen-wine1.png'
  },
  {
    name: "Klinker",
    cuisine: "Modern Cuisine, Vegetarian",
    price: "€€",
    path: "/germany/hamburg/hamburg/klinker",
    image: '/images/klinker1.png'
  },
  {
    name: "Koer",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€€",
    path: "/germany/hamburg/hamburg/koer",
    image: '/images/koer1.png'
  },
  {
    name: "La Maison d'Avignon",
    cuisine: "French, Provençal",
    price: "€€€",
    path: "/germany/hamburg/hamburg/la-maison-davignon",
    image: '/images/la-maison-davignon1.png'
  },
  {
    name: "Lakeside",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/germany/hamburg/hamburg/lakeside",
    image: '/images/lakeside1.png'
  },
  {
    name: "Landhaus Scherrer",
    cuisine: "Classic Cuisine, Regional Cuisine",
    price: "€€€€",
    path: "/germany/hamburg/hamburg/landhaus-scherrer",
    image: '/images/landhaus-scherrer1.png'
  },
  {
    name: "Le Canard",
    cuisine: "Modern French, Modern Cuisine",
    price: "€€€",
    path: "/germany/hamburg/hamburg/le-canard",
    image: '/images/le-canard1.png'
  },
  {
    name: "LENZ",
    cuisine: "Country cooking, Traditional Cuisine",
    price: "€€",
    path: "/germany/hamburg/hamburg/lenz",
    image: '/images/lenz1.png'
  },
  {
    name: "Momo Ramen",
    cuisine: "Ramen",
    price: "€",
    path: "/germany/hamburg/hamburg/momo-ramen",
    image: '/images/momo-ramen1.png'
  },
  {
    name: "NIKKEI NINE",
    cuisine: "Japanese, Peruvian",
    price: "€€€",
    path: "/germany/hamburg/hamburg/nikkei-nine",
    image: '/images/nikkei-nine1.png'
  },
  {
    name: "Nil",
    cuisine: "International",
    price: "€€",
    path: "/germany/hamburg/hamburg/nil",
    image: '/images/nil1.png'
  },
  {
    name: "Oechsle",
    cuisine: "Classic Cuisine, Mediterranean Cuisine",
    price: "€€€",
    path: "/germany/hamburg/hamburg/oechsle",
    image: '/images/oechsle1.png'
  },
  {
    name: "Petit Amour",
    cuisine: "Contemporary, Classic Cuisine",
    price: "€€€€",
    path: "/germany/hamburg/hamburg/petit-amour",
    image: '/images/petit-amour1.png'
  },
  {
    name: "philipps restaurant",
    cuisine: "International",
    price: "€€",
    path: "/germany/hamburg/hamburg/philipps-restaurant",
    image: '/images/philipps-restaurant1.png'
  },
  {
    name: "Piment",
    cuisine: "Creative, North African",
    price: "€€€€",
    path: "/germany/hamburg/hamburg/piment",
    image: '/images/piment1.png'
  },
  {
    name: "Portomarin",
    cuisine: "Spanish",
    price: "€€",
    path: "/germany/hamburg/hamburg/portomarin",
    image: '/images/portomarin1.png'
  },
  {
    name: "Restaurant Haerlin",
    cuisine: "Creative French, Classic Cuisine",
    price: "€€€€",
    path: "/germany/hamburg/hamburg/restaurant-haerlin",
    image: '/images/restaurant-haerlin1.png'
  },
  {
    name: "Rive Fish & Faible",
    cuisine: "Seafood, Meats and Grills",
    price: "€€",
    path: "/germany/hamburg/hamburg/rive-fish-faible",
    image: '/images/rive-fish-faible1.png'
  },
  {
    name: "Salt & Silver",
    cuisine: "Creative",
    price: "€€€",
    path: "/germany/hamburg/hamburg/salt-silver",
    image: '/images/salt-silver1.png'
  },
  {
    name: "Stüffel",
    cuisine: "Farm to table, Mediterranean Cuisine",
    price: "€€",
    path: "/germany/hamburg/hamburg/stffel",
    image: '/images/stffel1.png'
  },
  {
    name: "STRAUCHS FALCO",
    cuisine: "International, Meats and Grills",
    price: "€€€",
    path: "/germany/hamburg/hamburg/strauchs-falco",
    image: '/images/strauchs-falco1.png'
  },
  {
    name: "THE LISBETH",
    cuisine: "Regional Cuisine, Modern Cuisine",
    price: "€€€",
    path: "/germany/hamburg/hamburg/the-lisbeth",
    image: '/images/the-lisbeth1.png'
  },
  {
    name: "The Table Kevin Fehling",
    cuisine: "Creative, International",
    price: "€€€€",
    path: "/germany/hamburg/hamburg/the-table-kevin-fehling",
    image: '/images/the-table-kevin-fehling1.png'
  },
  {
    name: "Tschebull",
    cuisine: "Austrian, International",
    price: "€€€",
    path: "/germany/hamburg/hamburg/tschebull",
    image: '/images/tschebull1.png'
  },
  {
    name: "Weinwirtschaft Kleines Jacob",
    cuisine: "Austrian",
    price: "€€€",
    path: "/germany/hamburg/hamburg/weinwirtschaft-kleines-jacob",
    image: '/images/weinwirtschaft-kleines-jacob1.png'
  },
  {
    name: "Whiskyplaza",
    cuisine: "Contemporary",
    price: "€€€",
    path: "/germany/hamburg/hamburg/whiskyplaza",
    image: '/images/whiskyplaza1.png'
  },
  {
    name: "Witwenball",
    cuisine: "Modern Cuisine, International",
    price: "€€€",
    path: "/germany/hamburg/hamburg/witwenball",
    image: '/images/witwenball1.png'
  },
  {
    name: "XO Seafoodbar",
    cuisine: "Seafood, Vegetarian",
    price: "€€€",
    path: "/germany/hamburg/hamburg/xo-seafoodbar",
    image: '/images/xo-seafoodbar1.png'
  },
  {
    name: "Zeik",
    cuisine: "Modern Cuisine, Farm to table",
    price: "€€€€",
    path: "/germany/hamburg/hamburg/zeik",
    image: '/images/zeik1.png'
  },
  {
    name: "Zipang",
    cuisine: "Japanese",
    price: "€€€",
    path: "/germany/hamburg/hamburg/zipang",
    image: '/images/zipang1.png'
  },
  {
    name: "Zur Flottbeker Schmiede",
    cuisine: "Portuguese, Mediterranean Cuisine",
    price: "€€",
    path: "/germany/hamburg/hamburg/zur-flottbeker-schmiede",
    image: '/images/zur-flottbeker-schmiede1.png'
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
