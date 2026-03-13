import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Marseille";

const restaurants = [
  {
    name: "Alivetu",
    cuisine: "Mediterranean Cuisine",
    price: "€€",
    path: "/france/marseille/marseille/alivetu",
    image: '/images/alivetu1.png'
  },
  {
    name: "AM par Alexandre Mazzia",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/marseille/marseille/am-par-alexandre-mazzia",
    image: '/images/am-par-alexandre-mazzia1.png'
  },
  {
    name: "Auffo",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/marseille/marseille/auffo",
    image: '/images/auffo1.png'
  },
  {
    name: "Būbo",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/marseille/marseille/bbo",
    image: '/images/bbo1.png'
  },
  {
    name: "Belle de Mars",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/marseille/marseille/belle-de-mars",
    image: '/images/belle-de-mars1.png'
  },
  {
    name: "Bucado",
    cuisine: "Brazilian, Modern Cuisine",
    price: "€€",
    path: "/france/marseille/marseille/bucado",
    image: '/images/bucado1.png'
  },
  {
    name: "Cédrat",
    cuisine: "Mediterranean Cuisine",
    price: "€€",
    path: "/france/marseille/marseille/cdrat",
    image: '/images/cdrat1.png'
  },
  {
    name: "Chez Fonfon",
    cuisine: "Seafood",
    price: "€€€",
    path: "/france/marseille/marseille/chez-fonfon",
    image: '/images/chez-fonfon1.png'
  },
  {
    name: "Ekume",
    cuisine: "Mediterranean Cuisine",
    price: "€€",
    path: "/france/marseille/marseille/ekume",
    image: '/images/ekume1.png'
  },
  {
    name: "Grenat",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/marseille/marseille/grenat",
    image: '/images/grenat1.png'
  },
  {
    name: "Kin",
    cuisine: "African",
    price: "€€€",
    path: "/france/marseille/marseille/kin",
    image: '/images/kin1.png'
  },
  {
    name: "La Femme du Boucher",
    cuisine: "Meats and Grills",
    price: "€€",
    path: "/france/marseille/marseille/la-femme-du-boucher",
    image: '/images/la-femme-du-boucher1.png'
  },
  {
    name: "La Mercerie",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/marseille/marseille/la-mercerie",
    image: '/images/la-mercerie1.png'
  },
  {
    name: "Le Petit Nice",
    cuisine: "Seafood",
    price: "€€€€",
    path: "/france/marseille/marseille/le-petit-nice",
    image: '/images/le-petit-nice1.png'
  },
  {
    name: "Les Bords de Mer",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/marseille/marseille/les-bords-de-mer",
    image: '/images/les-bords-de-mer1.png'
  },
  {
    name: "Les Jardins du Cloître",
    cuisine: "Farm to table",
    price: "€€",
    path: "/france/marseille/marseille/les-jardins-du-clotre",
    image: '/images/les-jardins-du-clotre1.png'
  },
  {
    name: "Les Trois Forts",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/marseille/marseille/les-trois-forts",
    image: '/images/les-trois-forts1.png'
  },
  {
    name: "Michel - Brasserie des Catalans",
    cuisine: "Seafood",
    price: "€€€€",
    path: "/france/marseille/marseille/michel-brasserie-des-catalans",
    image: '/images/michel-brasserie-des-catalans1.png'
  },
  {
    name: "Mijoba",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/marseille/marseille/mijoba",
    image: '/images/mijoba1.png'
  },
  {
    name: "Nestou",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/marseille/marseille/nestou",
    image: '/images/nestou1.png'
  },
  {
    name: "Ourea",
    cuisine: "Modern Cuisine, Provençal",
    price: "€€€",
    path: "/france/marseille/marseille/ourea",
    image: '/images/ourea1.png'
  },
  {
    name: "Peron",
    cuisine: "Seafood, Modern Cuisine",
    price: "€€€",
    path: "/france/marseille/marseille/peron",
    image: '/images/peron1.png'
  },
  {
    name: "Prémices",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/marseille/marseille/prmices",
    image: '/images/prmices1.png'
  },
  {
    name: "Prosper",
    cuisine: "Mediterranean Cuisine",
    price: "€€",
    path: "/france/marseille/marseille/prosper",
    image: '/images/prosper1.png'
  },
  {
    name: "Regain",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/marseille/marseille/regain",
    image: '/images/regain1.png'
  },
  {
    name: "SAGE",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/marseille/marseille/sage",
    image: '/images/sage1.png'
  },
  {
    name: "Sépia",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/marseille/marseille/spia",
    image: '/images/spia1.png'
  },
  {
    name: "Tabi - Ippei Uemura",
    cuisine: "Japanese Contemporary",
    price: "€€€",
    path: "/france/marseille/marseille/tabi-ippei-uemura",
    image: '/images/tabi-ippei-uemura1.png'
  },
  {
    name: "Une Table, au Sud",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/marseille/marseille/une-table-au-sud",
    image: '/images/une-table-au-sud1.png'
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
