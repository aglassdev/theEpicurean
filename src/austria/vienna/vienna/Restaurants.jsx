import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Vienna";

const restaurants = [
  {
    name: "Addiert",
    cuisine: "Korean Contemporary",
    price: "€€€€",
    path: "/austria/vienna/vienna/addiert",
    image: '/images/addiert1.png'
  },
  {
    name: "[aend]",
    cuisine: "Modern Cuisine, Creative",
    price: "€€€€",
    path: "/austria/vienna/vienna/aend",
    image: '/images/aend1.png'
  },
  {
    name: "Amador",
    cuisine: "Creative, Contemporary",
    price: "€€€€",
    path: "/austria/vienna/vienna/amador",
    image: '/images/amador1.png'
  },
  {
    name: "APRON",
    cuisine: "Creative, Austrian",
    price: "€€€€",
    path: "/austria/vienna/vienna/apron",
    image: '/images/apron1.png'
  },
  {
    name: "Beletage Zum Schwarzen Kameel",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/austria/vienna/vienna/beletage-zum-schwarzen-kameel",
    image: '/images/beletage-zum-schwarzen-kameel1.png'
  },
  {
    name: "Buxbaum",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/austria/vienna/vienna/buxbaum",
    image: '/images/buxbaum1.png'
  },
  {
    name: "Chez Bernard",
    cuisine: "French Contemporary",
    price: "€€",
    path: "/austria/vienna/vienna/chez-bernard",
    image: '/images/chez-bernard1.png'
  },
  {
    name: "Collina am Berg",
    cuisine: "Farm to table",
    price: "€€",
    path: "/austria/vienna/vienna/collina-am-berg",
    image: '/images/collina-am-berg1.png'
  },
  {
    name: "Das Kraus",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/austria/vienna/vienna/das-kraus",
    image: '/images/das-kraus1.png'
  },
  {
    name: "Das Loft",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/austria/vienna/vienna/das-loft",
    image: '/images/das-loft1.png'
  },
  {
    name: "DiningRuhm",
    cuisine: "Fusion, Japanese Contemporary",
    price: "€€€",
    path: "/austria/vienna/vienna/diningruhm",
    image: '/images/diningruhm1.png'
  },
  {
    name: "Do & Co Restaurant am Stephansplatz",
    cuisine: "Asian",
    price: "€€",
    path: "/austria/vienna/vienna/do-co-restaurant-am-stephansplatz",
    image: '/images/do-co-restaurant-am-stephansplatz1.png'
  },
  {
    name: "Doubek",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€€",
    path: "/austria/vienna/vienna/doubek",
    image: '/images/doubek1.png'
  },
  {
    name: "Duchardt",
    cuisine: "Classic Cuisine",
    price: "€€€",
    path: "/austria/vienna/vienna/duchardt",
    image: '/images/duchardt1.png'
  },
  {
    name: "Eckel",
    cuisine: "Country cooking",
    price: "€",
    path: "/austria/vienna/vienna/eckel",
    image: '/images/eckel1.png'
  },
  {
    name: "Edlingers Tempel",
    cuisine: "Regional Cuisine",
    price: "€",
    path: "/austria/vienna/vienna/edlingers-tempel",
    image: '/images/edlingers-tempel1.png'
  },
  {
    name: "Edvard",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€€",
    path: "/austria/vienna/vienna/edvard",
    image: '/images/edvard1.png'
  },
  {
    name: "Esszimmer - Everybody's Darling",
    cuisine: "Modern Cuisine, International",
    price: "€€€€",
    path: "/austria/vienna/vienna/esszimmer-everybodys-darling",
    image: '/images/esszimmer-everybodys-darling1.png'
  },
  {
    name: "Fabios",
    cuisine: "Italian",
    price: "€€€",
    path: "/austria/vienna/vienna/fabios",
    image: '/images/fabios1.png'
  },
  {
    name: "Fuhrmann",
    cuisine: "Austrian",
    price: "€€",
    path: "/austria/vienna/vienna/fuhrmann",
    image: '/images/fuhrmann1.png'
  },
  {
    name: "Gasthaus Stern",
    cuisine: "Regional Cuisine, Traditional Cuisine",
    price: "€€",
    path: "/austria/vienna/vienna/gasthaus-stern",
    image: '/images/gasthaus-stern1.png'
  },
  {
    name: "Gasthaus Tante Liesl",
    cuisine: "Austrian, Regional Cuisine",
    price: "€€",
    path: "/austria/vienna/vienna/gasthaus-tante-liesl",
    image: '/images/gasthaus-tante-liesl1.png'
  },
  {
    name: "Glasswing",
    cuisine: "Contemporary, Modern French",
    price: "€€€€",
    path: "/austria/vienna/vienna/glasswing",
    image: '/images/glasswing1.png'
  },
  {
    name: "Glasswing by Alexandru Simon",
    cuisine: "Contemporary, Modern French",
    price: "€€€€",
    path: "/austria/vienna/vienna/glasswing-by-alexandru-simon",
    image: '/images/glasswing-by-alexandru-simon1.png'
  },
  {
    name: "Grüne Bar",
    cuisine: "Classic Cuisine",
    price: "€€€€",
    path: "/austria/vienna/vienna/grne-bar",
    image: '/images/grne-bar1.png'
  },
  {
    name: "HAUSBAR Wien",
    cuisine: "Vegetarian",
    price: "€€€€",
    path: "/austria/vienna/vienna/hausbar-wien",
    image: '/images/hausbar-wien1.png'
  },
  {
    name: "Herzig",
    cuisine: "Modern Cuisine, Creative",
    price: "€€€€",
    path: "/austria/vienna/vienna/herzig",
    image: '/images/herzig1.png'
  },
  {
    name: "Heunisch und Erben",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/austria/vienna/vienna/heunisch-und-erben",
    image: '/images/heunisch-und-erben1.png'
  },
  {
    name: "JOLA",
    cuisine: "Vegan, Creative",
    price: "€€€€",
    path: "/austria/vienna/vienna/jola",
    image: '/images/jola1.png'
  },
  {
    name: "Kommod",
    cuisine: "Seasonal Cuisine, Farm to table",
    price: "€€",
    path: "/austria/vienna/vienna/kommod",
    image: '/images/kommod1.png'
  },
  {
    name: "Konstantin Filippou",
    cuisine: "Modern Cuisine, Creative",
    price: "€€€€",
    path: "/austria/vienna/vienna/konstantin-filippou",
    image: '/images/konstantin-filippou1.png'
  },
  {
    name: "Kutschker 44",
    cuisine: "Traditional Cuisine, International",
    price: "€",
    path: "/austria/vienna/vienna/kutschker-44",
    image: '/images/kutschker-441.png'
  },
  {
    name: "LABSTELLE",
    cuisine: "Country cooking",
    price: "€€",
    path: "/austria/vienna/vienna/labstelle",
    image: '/images/labstelle1.png'
  },
  {
    name: "Le Salzgries Paris",
    cuisine: "Classic French",
    price: "€€",
    path: "/austria/vienna/vienna/le-salzgries-paris",
    image: '/images/le-salzgries-paris1.png'
  },
  {
    name: "Liebsteinsky",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/austria/vienna/vienna/liebsteinsky",
    image: '/images/liebsteinsky1.png'
  },
  {
    name: "LOLA",
    cuisine: "Spanish",
    price: "€€",
    path: "/austria/vienna/vienna/lola",
    image: '/images/lola1.png'
  },
  {
    name: "Léontine",
    cuisine: "Modern French",
    price: "€€€",
    path: "/austria/vienna/vienna/lontine",
    image: '/images/lontine1.png'
  },
  {
    name: "Mama Konstantina",
    cuisine: "Contemporary, Greek",
    price: "€€€€",
    path: "/austria/vienna/vienna/mama-konstantina",
    image: '/images/mama-konstantina1.png'
  },
  {
    name: "MAST Weinbistro",
    cuisine: "Farm to table, Seasonal Cuisine",
    price: "€€",
    path: "/austria/vienna/vienna/mast-weinbistro",
    image: '/images/mast-weinbistro1.png'
  },
  {
    name: "Meierei im Stadtpark",
    cuisine: "Austrian",
    price: "€€",
    path: "/austria/vienna/vienna/meierei-im-stadtpark",
    image: '/images/meierei-im-stadtpark1.png'
  },
  {
    name: "Meissl & Schadn",
    cuisine: "Austrian, Traditional Cuisine",
    price: "€€",
    path: "/austria/vienna/vienna/meissl-schadn",
    image: '/images/meissl-schadn1.png'
  },
  {
    name: "Mochi",
    cuisine: "Japanese",
    price: "€€",
    path: "/austria/vienna/vienna/mochi",
    image: '/images/mochi1.png'
  },
  {
    name: "Mraz & Sohn",
    cuisine: "Creative",
    price: "€€€€",
    path: "/austria/vienna/vienna/mraz-sohn",
    image: '/images/mraz-sohn1.png'
  },
  {
    name: "O boufés",
    cuisine: "Mediterranean Cuisine, Modern Cuisine",
    price: "€€",
    path: "/austria/vienna/vienna/o-boufs",
    image: '/images/o-boufs1.png'
  },
  {
    name: "ONYX",
    cuisine: "Asian",
    price: "€€€",
    path: "/austria/vienna/vienna/onyx",
    image: '/images/onyx1.png'
  },
  {
    name: "OPUS",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/austria/vienna/vienna/opus",
    image: '/images/opus1.png'
  },
  {
    name: "Pastamara - Bar con Cucina",
    cuisine: "Italian, Mediterranean Cuisine",
    price: "€€",
    path: "/austria/vienna/vienna/pastamara-bar-con-cucina",
    image: '/images/pastamara-bar-con-cucina1.png'
  },
  {
    name: "Pichlmaiers zum Herkner",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/austria/vienna/vienna/pichlmaiers-zum-herkner",
    image: '/images/pichlmaiers-zum-herkner1.png'
  },
  {
    name: "Pramerl & the Wolf",
    cuisine: "Creative",
    price: "€€€€",
    path: "/austria/vienna/vienna/pramerl-the-wolf",
    image: '/images/pramerl-the-wolf1.png'
  },
  {
    name: "Reznicek",
    cuisine: "Austrian, Regional Cuisine",
    price: "€€€",
    path: "/austria/vienna/vienna/reznicek",
    image: '/images/reznicek1.png'
  },
  {
    name: "Rosi",
    cuisine: "International, Austrian",
    price: "€€",
    path: "/austria/vienna/vienna/rosi",
    image: '/images/rosi1.png'
  },
  {
    name: "Rote Bar",
    cuisine: "Austrian, Classic Cuisine",
    price: "€€€",
    path: "/austria/vienna/vienna/rote-bar",
    image: '/images/rote-bar1.png'
  },
  {
    name: "SHIKI Brasserie & Bar",
    cuisine: "Japanese",
    price: "€€",
    path: "/austria/vienna/vienna/shiki-brasserie-bar",
    image: '/images/shiki-brasserie-bar1.png'
  },
  {
    name: "SHIKI Japanese Fine Dining",
    cuisine: "Japanese Contemporary, Classic Cuisine",
    price: "€€€€",
    path: "/austria/vienna/vienna/shiki-japanese-fine-dining",
    image: '/images/shiki-japanese-fine-dining1.png'
  },
  {
    name: "Silvio Nickol Gourmet Restaurant",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/austria/vienna/vienna/silvio-nickol-gourmet-restaurant",
    image: '/images/silvio-nickol-gourmet-restaurant1.png'
  },
  {
    name: "Skopik & Lohn",
    cuisine: "Austrian, International",
    price: "€€",
    path: "/austria/vienna/vienna/skopik-lohn",
    image: '/images/skopik-lohn1.png'
  },
  {
    name: "Specht",
    cuisine: "Austrian",
    price: "€€",
    path: "/austria/vienna/vienna/specht",
    image: '/images/specht1.png'
  },
  {
    name: "Steirereck im Stadtpark",
    cuisine: "Creative, Contemporary",
    price: "€€€€",
    path: "/austria/vienna/vienna/steirereck-im-stadtpark",
    image: '/images/steirereck-im-stadtpark1.png'
  },
  {
    name: "TIAN",
    cuisine: "Vegetarian, Creative",
    price: "€€€€",
    path: "/austria/vienna/vienna/tian",
    image: '/images/tian1.png'
  },
  {
    name: "TIAN Bistro am Spittelberg",
    cuisine: "Vegetarian, Vegan",
    price: "€€",
    path: "/austria/vienna/vienna/tian-bistro-am-spittelberg",
    image: '/images/tian-bistro-am-spittelberg1.png'
  },
  {
    name: "Trattoria Martinelli",
    cuisine: "Mediterranean Cuisine, Italian",
    price: "€€",
    path: "/austria/vienna/vienna/trattoria-martinelli",
    image: '/images/trattoria-martinelli1.png'
  },
  {
    name: "Umar Fisch",
    cuisine: "Seafood, Classic Cuisine",
    price: "€€",
    path: "/austria/vienna/vienna/umar-fisch",
    image: '/images/umar-fisch1.png'
  },
  {
    name: "UNKAI",
    cuisine: "Japanese",
    price: "€€",
    path: "/austria/vienna/vienna/unkai",
    image: '/images/unkai1.png'
  },
  {
    name: "Veranda Brasserie & Bar",
    cuisine: "Modern Cuisine, Austrian",
    price: "€€",
    path: "/austria/vienna/vienna/veranda-brasserie-bar",
    image: '/images/veranda-brasserie-bar1.png'
  },
  {
    name: "Vestibül",
    cuisine: "International, Seasonal Cuisine",
    price: "€€",
    path: "/austria/vienna/vienna/vestibl",
    image: '/images/vestibl1.png'
  },
  {
    name: "Weibel's Wirtshaus",
    cuisine: "Austrian",
    price: "€",
    path: "/austria/vienna/vienna/weibels-wirtshaus",
    image: '/images/weibels-wirtshaus1.png'
  },
  {
    name: "Woracziczky",
    cuisine: "Austrian",
    price: "€",
    path: "/austria/vienna/vienna/woracziczky",
    image: '/images/woracziczky1.png'
  },
  {
    name: "Zazatam",
    cuisine: "Asian Contemporary",
    price: "€€",
    path: "/austria/vienna/vienna/zazatam",
    image: '/images/zazatam1.png'
  },
  {
    name: "Z'SOM",
    cuisine: "Modern Cuisine, South American",
    price: "€€€€",
    path: "/austria/vienna/vienna/zsom",
    image: '/images/zsom1.png'
  },
  {
    name: "Zum weissen Rauchfangkehrer",
    cuisine: "Austrian",
    price: "€€",
    path: "/austria/vienna/vienna/zum-weissen-rauchfangkehrer",
    image: '/images/zum-weissen-rauchfangkehrer1.png'
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
