import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Dijon";

const restaurants = [
  {
    name: "Azerole",
    cuisine: "Fusion",
    price: "€€",
    path: "/france/dijon/dijon/azerole",
    image: '/images/azerole1.png'
  },
  {
    name: "Cave",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/dijon/dijon/cave",
    image: '/images/cave1.png'
  },
  {
    name: "CIBO",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/dijon/dijon/cibo",
    image: '/images/cibo1.png'
  },
  {
    name: "DZ'envies",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/dijon/dijon/dzenvies",
    image: '/images/dzenvies1.png'
  },
  {
    name: "La Maison des Cariatides",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/dijon/dijon/la-maison-des-cariatides",
    image: '/images/la-maison-des-cariatides1.png'
  },
  {
    name: "La Table des Climats",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/dijon/dijon/la-table-des-climats",
    image: '/images/la-table-des-climats1.png'
  },
  {
    name: "L'Arôme",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/dijon/dijon/larme",
    image: '/images/larme1.png'
  },
  {
    name: "L'Aspérule",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/dijon/dijon/lasprule",
    image: '/images/lasprule1.png'
  },
  {
    name: "Les Jardins by La Cloche",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/dijon/dijon/les-jardins-by-la-cloche",
    image: '/images/les-jardins-by-la-cloche1.png'
  },
  {
    name: "L'Essentiel",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/dijon/dijon/lessentiel",
    image: '/images/lessentiel1.png'
  },
  {
    name: "Loiseau des Ducs",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/dijon/dijon/loiseau-des-ducs",
    image: '/images/loiseau-des-ducs1.png'
  },
  {
    name: "L'Un des Sens",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/dijon/dijon/lun-des-sens",
    image: '/images/lun-des-sens1.png'
  },
  {
    name: "L'Évidence",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/dijon/dijon/lvidence",
    image: '/images/lvidence1.png'
  },
  {
    name: "Monique, boire et manger",
    cuisine: "Modern Cuisine, Farm to table",
    price: "€€",
    path: "/france/dijon/dijon/monique-boire-et-manger",
    image: '/images/monique-boire-et-manger1.png'
  },
  {
    name: "Origine",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/dijon/dijon/origine",
    image: '/images/origine1.png'
  },
  {
    name: "Parapluie",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/dijon/dijon/parapluie",
    image: '/images/parapluie1.png'
  },
  {
    name: "Saison",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/dijon/dijon/saison",
    image: '/images/saison1.png'
  },
  {
    name: "So",
    cuisine: "Farm to table",
    price: "€",
    path: "/france/dijon/dijon/so",
    image: '/images/so1.png'
  },
  {
    name: "Spica",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/dijon/dijon/spica",
    image: '/images/spica1.png'
  },
  {
    name: "Sublime",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/dijon/dijon/sublime",
    image: '/images/sublime1.png'
  },
  {
    name: "William Frachot",
    cuisine: "Modern Cuisine, Creative",
    price: "€€€€",
    path: "/france/dijon/dijon/william-frachot",
    image: '/images/william-frachot1.png'
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
