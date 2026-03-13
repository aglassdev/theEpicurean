import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Geneva";

const restaurants = [
  {
    name: "Arakel",
    cuisine: "Modern Cuisine, Seasonal Cuisine",
    price: "€€€",
    path: "/switzerland/geneva/geneva/arakel",
    image: '/images/arakel1.png'
  },
  {
    name: "Bayview by Michel Roth",
    cuisine: "Creative, Mediterranean Cuisine",
    price: "€€€€",
    path: "/switzerland/geneva/geneva/bayview-by-michel-roth",
    image: '/images/bayview-by-michel-roth1.png'
  },
  {
    name: "Bistrot du Boeuf Rouge",
    cuisine: "Traditional Cuisine, Lyonnaise",
    price: "€€",
    path: "/switzerland/geneva/geneva/bistrot-du-boeuf-rouge",
    image: '/images/bistrot-du-boeuf-rouge1.png'
  },
  {
    name: "Bistrot Dumas",
    cuisine: "French",
    price: "€€",
    path: "/switzerland/geneva/geneva/bistrot-dumas",
    image: '/images/bistrot-dumas1.png'
  },
  {
    name: "Café des Banques",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/switzerland/geneva/geneva/caf-des-banques",
    image: '/images/caf-des-banques1.png'
  },
  {
    name: "Chez Philippe",
    cuisine: "Meats and Grills, International",
    price: "€€",
    path: "/switzerland/geneva/geneva/chez-philippe",
    image: '/images/chez-philippe1.png'
  },
  {
    name: "De la Cigogne",
    cuisine: "Modern French, Seasonal Cuisine",
    price: "€€€",
    path: "/switzerland/geneva/geneva/de-la-cigogne",
    image: '/images/de-la-cigogne1.png'
  },
  {
    name: "Fiskebar",
    cuisine: "Modern Cuisine, Scandinavian",
    price: "€€€",
    path: "/switzerland/geneva/geneva/fiskebar",
    image: '/images/fiskebar1.png'
  },
  {
    name: "F.P.Journe Le Restaurant",
    cuisine: "Modern French",
    price: "€€€",
    path: "/switzerland/geneva/geneva/fpjourne-le-restaurant",
    image: '/images/fpjourne-le-restaurant1.png'
  },
  {
    name: "Il Lago",
    cuisine: "Italian, Mediterranean Cuisine",
    price: "€€€€",
    path: "/switzerland/geneva/geneva/il-lago",
    image: '/images/il-lago1.png'
  },
  {
    name: "Izumi",
    cuisine: "Japanese Contemporary",
    price: "€€€",
    path: "/switzerland/geneva/geneva/izumi",
    image: '/images/izumi1.png'
  },
  {
    name: "Kakinuma",
    cuisine: "Japanese",
    price: "€€",
    path: "/switzerland/geneva/geneva/kakinuma",
    image: '/images/kakinuma1.png'
  },
  {
    name: "La Cantine des Commerçants",
    cuisine: "Modern French, Seasonal Cuisine",
    price: "€€",
    path: "/switzerland/geneva/geneva/la-cantine-des-commerants",
    image: '/images/la-cantine-des-commerants1.png'
  },
  {
    name: "La Micheline",
    cuisine: "Mediterranean Cuisine, French Contemporary",
    price: "€€€",
    path: "/switzerland/geneva/geneva/la-micheline",
    image: '/images/la-micheline1.png'
  },
  {
    name: "L'Agape",
    cuisine: "Seasonal Cuisine, Contemporary",
    price: "€€",
    path: "/switzerland/geneva/geneva/lagape",
    image: '/images/lagape1.png'
  },
  {
    name: "L'Aparté",
    cuisine: "Modern French, Farm to table",
    price: "€€€",
    path: "/switzerland/geneva/geneva/lapart",
    image: '/images/lapart1.png'
  },
  {
    name: "L'Arabesque",
    cuisine: "Lebanese, Middle Eastern",
    price: "€€",
    path: "/switzerland/geneva/geneva/larabesque",
    image: '/images/larabesque1.png'
  },
  {
    name: "L'Atelier Robuchon",
    cuisine: "French Contemporary",
    price: "€€€€",
    path: "/switzerland/geneva/geneva/latelier-robuchon",
    image: '/images/latelier-robuchon1.png'
  },
  {
    name: "Le Bologne",
    cuisine: "Classic Cuisine",
    price: "€€",
    path: "/switzerland/geneva/geneva/le-bologne",
    image: '/images/le-bologne1.png'
  },
  {
    name: "Le Chat-Botté",
    cuisine: "Modern French, Classic Cuisine",
    price: "€€€€",
    path: "/switzerland/geneva/geneva/le-chat-bott",
    image: '/images/le-chat-bott1.png'
  },
  {
    name: "Le Dorian",
    cuisine: "Classic Cuisine",
    price: "€€",
    path: "/switzerland/geneva/geneva/le-dorian",
    image: '/images/le-dorian1.png'
  },
  {
    name: "Le Grill",
    cuisine: "Meats and Grills",
    price: "€€",
    path: "/switzerland/geneva/geneva/le-grill",
    image: '/images/le-grill1.png'
  },
  {
    name: "Le Jardinier",
    cuisine: "French Contemporary, Farm to table",
    price: "€€€",
    path: "/switzerland/geneva/geneva/le-jardinier",
    image: '/images/le-jardinier1.png'
  },
  {
    name: "Le Patio",
    cuisine: "Creative French, Traditional Cuisine",
    price: "€€",
    path: "/switzerland/geneva/geneva/le-patio",
    image: '/images/le-patio1.png'
  },
  {
    name: "Matière",
    cuisine: "Classic French",
    price: "€€€",
    path: "/switzerland/geneva/geneva/matire",
    image: '/images/matire1.png'
  },
  {
    name: "Nagomi",
    cuisine: "Japanese",
    price: "€€€",
    path: "/switzerland/geneva/geneva/nagomi",
    image: '/images/nagomi1.png'
  },
  {
    name: "Natürlich",
    cuisine: "Farm to table, Piedmontese",
    price: "€€",
    path: "/switzerland/geneva/geneva/natrlich",
    image: '/images/natrlich1.png'
  },
  {
    name: "Osteria della Bottega",
    cuisine: "Italian, Seasonal Cuisine",
    price: "€€",
    path: "/switzerland/geneva/geneva/osteria-della-bottega",
    image: '/images/osteria-della-bottega1.png'
  },
  {
    name: "Ottolenghi",
    cuisine: "Mediterranean Cuisine, World Cuisine",
    price: "€€€",
    path: "/switzerland/geneva/geneva/ottolenghi",
    image: '/images/ottolenghi1.png'
  },
  {
    name: "SACHI",
    cuisine: "Japanese Contemporary",
    price: "€€€",
    path: "/switzerland/geneva/geneva/sachi",
    image: '/images/sachi1.png'
  },
  {
    name: "SUAHOY",
    cuisine: "Thai",
    price: "€€",
    path: "/switzerland/geneva/geneva/suahoy",
    image: '/images/suahoy1.png'
  },
  {
    name: "Tosca",
    cuisine: "Tuscan",
    price: "€€€€",
    path: "/switzerland/geneva/geneva/tosca",
    image: '/images/tosca1.png'
  },
  {
    name: "Tosca",
    cuisine: "Tuscan",
    price: "€€€€",
    path: "/switzerland/geneva/geneva/tosca",
    image: '/images/tosca1.png'
  },
  {
    name: "Tsé Fung",
    cuisine: "Chinese",
    price: "€€€",
    path: "/switzerland/geneva/geneva/ts-fung",
    image: '/images/ts-fung1.png'
  },
  {
    name: "Vieux-Bois",
    cuisine: "French, Farm to table",
    price: "€€",
    path: "/switzerland/geneva/geneva/vieux-bois",
    image: '/images/vieux-bois1.png'
  },
  {
    name: "Windows",
    cuisine: "Creative French, Classic Cuisine",
    price: "€€€",
    path: "/switzerland/geneva/geneva/windows",
    image: '/images/windows1.png'
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
