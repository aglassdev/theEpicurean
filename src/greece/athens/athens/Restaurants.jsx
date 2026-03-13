import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Athens";

const restaurants = [
  {
    name: "Akra",
    cuisine: "Greek, Contemporary",
    price: "€",
    path: "/greece/athens/athens/akra",
    image: '/images/akra1.png'
  },
  {
    name: "Aleria",
    cuisine: "Greek",
    price: "€€€",
    path: "/greece/athens/athens/aleria",
    image: '/images/aleria1.png'
  },
  {
    name: "Aneton",
    cuisine: "Mediterranean Cuisine",
    price: "€€",
    path: "/greece/athens/athens/aneton",
    image: '/images/aneton1.png'
  },
  {
    name: "Annie Fine Cooking",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/greece/athens/athens/annie-fine-cooking",
    image: '/images/annie-fine-cooking1.png'
  },
  {
    name: "Botrini's",
    cuisine: "Mediterranean Cuisine",
    price: "€€€€",
    path: "/greece/athens/athens/botrinis",
    image: '/images/botrinis1.png'
  },
  {
    name: "Cerdo Negro 1985",
    cuisine: "Mediterranean Cuisine, Fusion",
    price: "€€",
    path: "/greece/athens/athens/cerdo-negro-1985",
    image: '/images/cerdo-negro-19851.png'
  },
  {
    name: "CTC Urban Gastronomy",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/greece/athens/athens/ctc-urban-gastronomy",
    image: '/images/ctc-urban-gastronomy1.png'
  },
  {
    name: "Delta",
    cuisine: "Creative, Greek",
    price: "€€€€",
    path: "/greece/athens/athens/delta",
    image: '/images/delta1.png'
  },
  {
    name: "Dolli's",
    cuisine: "Mediterranean Cuisine, Asian",
    price: "€€€",
    path: "/greece/athens/athens/dollis",
    image: '/images/dollis1.png'
  },
  {
    name: "Esthiō",
    cuisine: "Balkan",
    price: "€€€",
    path: "/greece/athens/athens/esthi",
    image: '/images/esthi1.png'
  },
  {
    name: "Fine Mess Smokehouse",
    cuisine: "Barbecue",
    price: "€€",
    path: "/greece/athens/athens/fine-mess-smokehouse",
    image: '/images/fine-mess-smokehouse1.png'
  },
  {
    name: "Gallina",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/greece/athens/athens/gallina",
    image: '/images/gallina1.png'
  },
  {
    name: "GB Roof Garden",
    cuisine: "Mediterranean Cuisine",
    price: "€€€",
    path: "/greece/athens/athens/gb-roof-garden",
    image: '/images/gb-roof-garden1.png'
  },
  {
    name: "Hervé",
    cuisine: "Modern Cuisine, Contemporary",
    price: "€€€",
    path: "/greece/athens/athens/herv",
    image: '/images/herv1.png'
  },
  {
    name: "Hytra",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/greece/athens/athens/hytra",
    image: '/images/hytra1.png'
  },
  {
    name: "Jerár",
    cuisine: "International",
    price: "€€",
    path: "/greece/athens/athens/jerr",
    image: '/images/jerr1.png'
  },
  {
    name: "Linou Soumpasis & Co.",
    cuisine: "Greek",
    price: "€€",
    path: "/greece/athens/athens/linou-soumpasis-co",
    image: '/images/linou-soumpasis-co1.png'
  },
  {
    name: "Makris Athens",
    cuisine: "Creative",
    price: "€€€€",
    path: "/greece/athens/athens/makris-athens",
    image: '/images/makris-athens1.png'
  },
  {
    name: "Merceri",
    cuisine: "Greek",
    price: "€€",
    path: "/greece/athens/athens/merceri",
    image: '/images/merceri1.png'
  },
  {
    name: "Nolan",
    cuisine: "Fusion",
    price: "€",
    path: "/greece/athens/athens/nolan",
    image: '/images/nolan1.png'
  },
  {
    name: "Okio",
    cuisine: "Mediterranean Cuisine, Fusion",
    price: "€€",
    path: "/greece/athens/athens/okio",
    image: '/images/okio1.png'
  },
  {
    name: "Ovio",
    cuisine: "Italian Contemporary",
    price: "€€",
    path: "/greece/athens/athens/ovio",
    image: '/images/ovio1.png'
  },
  {
    name: "Patio",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/greece/athens/athens/patio",
    image: '/images/patio1.png'
  },
  {
    name: "Pelagos",
    cuisine: "Contemporary, Mediterranean Cuisine",
    price: "€€€€",
    path: "/greece/athens/athens/pelagos",
    image: '/images/pelagos1.png'
  },
  {
    name: "Pharaoh",
    cuisine: "Greek",
    price: "€€",
    path: "/greece/athens/athens/pharaoh",
    image: '/images/pharaoh1.png'
  },
  {
    name: "see|ds",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/greece/athens/athens/seeds",
    image: '/images/seeds1.png'
  },
  {
    name: "SENSE",
    cuisine: "Creative",
    price: "€€€",
    path: "/greece/athens/athens/sense",
    image: '/images/sense1.png'
  },
  {
    name: "Simul",
    cuisine: "Creative",
    price: "€€",
    path: "/greece/athens/athens/simul",
    image: '/images/simul1.png'
  },
  {
    name: "Soil",
    cuisine: "Modern Cuisine, Contemporary",
    price: "€€€€",
    path: "/greece/athens/athens/soil",
    image: '/images/soil1.png'
  },
  {
    name: "Spondi",
    cuisine: "French",
    price: "€€€€",
    path: "/greece/athens/athens/spondi",
    image: '/images/spondi1.png'
  },
  {
    name: "The Zillers Rooftop Gastronomy",
    cuisine: "Contemporary, Greek",
    price: "€€€",
    path: "/greece/athens/athens/the-zillers-rooftop-gastronomy",
    image: '/images/the-zillers-rooftop-gastronomy1.png'
  },
  {
    name: "Tudor Hall",
    cuisine: "Modern Cuisine, Creative",
    price: "€€€€",
    path: "/greece/athens/athens/tudor-hall",
    image: '/images/tudor-hall1.png'
  },
  {
    name: "Varoulko Seaside",
    cuisine: "Seafood",
    price: "€€€",
    path: "/greece/athens/athens/varoulko-seaside",
    image: '/images/varoulko-seaside1.png'
  },
  {
    name: "VERi TABLE",
    cuisine: "French",
    price: "€€€",
    path: "/greece/athens/athens/veri-table",
    image: '/images/veri-table1.png'
  },
  {
    name: "Vezené",
    cuisine: "Grills",
    price: "€€€",
    path: "/greece/athens/athens/vezen",
    image: '/images/vezen1.png'
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
