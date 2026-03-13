import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Antwerpen";

const restaurants = [
  {
    name: "ALBUM",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/belgium/antwerpen/antwerpen/album",
    image: '/images/album1.png'
  },
  {
    name: "and/or",
    cuisine: "Vegan, Farm to table",
    price: "€€",
    path: "/belgium/antwerpen/antwerpen/andor",
    image: '/images/andor1.png'
  },
  {
    name: "Bar Bulot Antwerpen",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/belgium/antwerpen/antwerpen/bar-bulot-antwerpen",
    image: '/images/bar-bulot-antwerpen1.png'
  },
  {
    name: "Bar Misera",
    cuisine: "Seafood",
    price: "€€€",
    path: "/belgium/antwerpen/antwerpen/bar-misera",
    image: '/images/bar-misera1.png'
  },
  {
    name: "Bar Raket",
    cuisine: "Sharing, International",
    price: "€€",
    path: "/belgium/antwerpen/antwerpen/bar-raket",
    image: '/images/bar-raket1.png'
  },
  {
    name: "Bar(t)-à-vin",
    cuisine: "Classic Cuisine",
    price: "€€",
    path: "/belgium/antwerpen/antwerpen/bart-vin",
    image: '/images/bart-vin1.png'
  },
  {
    name: "Bistro Glass",
    cuisine: "French Contemporary, Classic French",
    price: "€€€",
    path: "/belgium/antwerpen/antwerpen/bistro-glass",
    image: '/images/bistro-glass1.png'
  },
  {
    name: "Bistrot de Pottenbrug",
    cuisine: "French, Belgian",
    price: "€€€€",
    path: "/belgium/antwerpen/antwerpen/bistrot-de-pottenbrug",
    image: '/images/bistrot-de-pottenbrug1.png'
  },
  {
    name: "Bistrot du Nord",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/belgium/antwerpen/antwerpen/bistrot-du-nord",
    image: '/images/bistrot-du-nord1.png'
  },
  {
    name: "Bistrot L'îlot",
    cuisine: "Farm to table, French Contemporary",
    price: "€€",
    path: "/belgium/antwerpen/antwerpen/bistrot-llot",
    image: '/images/bistrot-llot1.png'
  },
  {
    name: "Bizie Lizie",
    cuisine: "Belgian",
    price: "€€",
    path: "/belgium/antwerpen/antwerpen/bizie-lizie",
    image: '/images/bizie-lizie1.png'
  },
  {
    name: "Black Smoke",
    cuisine: "Barbecue",
    price: "€€€",
    path: "/belgium/antwerpen/antwerpen/black-smoke",
    image: '/images/black-smoke1.png'
  },
  {
    name: "Blanc by Aytems",
    cuisine: "Turkish, Modern Cuisine",
    price: "€€€",
    path: "/belgium/antwerpen/antwerpen/blanc-by-aytems",
    image: '/images/blanc-by-aytems1.png'
  },
  {
    name: "BÚN",
    cuisine: "Vietnamese",
    price: "€€",
    path: "/belgium/antwerpen/antwerpen/bn",
    image: '/images/bn1.png'
  },
  {
    name: "Cella",
    cuisine: "French Contemporary, International",
    price: "€€€",
    path: "/belgium/antwerpen/antwerpen/cella",
    image: '/images/cella1.png'
  },
  {
    name: "Ciro's",
    cuisine: "Belgian",
    price: "€€",
    path: "/belgium/antwerpen/antwerpen/ciros",
    image: '/images/ciros1.png'
  },
  {
    name: "Cobra",
    cuisine: "Sharing, International",
    price: "€€",
    path: "/belgium/antwerpen/antwerpen/cobra",
    image: '/images/cobra1.png'
  },
  {
    name: "Cobra City",
    cuisine: "Sharing, International",
    price: "€€",
    path: "/belgium/antwerpen/antwerpen/cobra-city",
    image: '/images/cobra-city1.png'
  },
  {
    name: "Cuichine",
    cuisine: "Chinese",
    price: "€€",
    path: "/belgium/antwerpen/antwerpen/cuichine",
    image: '/images/cuichine1.png'
  },
  {
    name: "DIM Dining",
    cuisine: "Asian, Creative",
    price: "€€€€",
    path: "/belgium/antwerpen/antwerpen/dim-dining",
    image: '/images/dim-dining1.png'
  },
  {
    name: "Dôme",
    cuisine: "Classic French",
    price: "€€€€",
    path: "/belgium/antwerpen/antwerpen/dme",
    image: '/images/dme1.png'
  },
  {
    name: "Dôme Sur Mer",
    cuisine: "Seafood",
    price: "€€€",
    path: "/belgium/antwerpen/antwerpen/dme-sur-mer",
    image: '/images/dme-sur-mer1.png'
  },
  {
    name: "Essenz",
    cuisine: "Modern French",
    price: "€€€",
    path: "/belgium/antwerpen/antwerpen/essenz",
    image: '/images/essenz1.png'
  },
  {
    name: "Fine Fleur",
    cuisine: "Creative, Modern French",
    price: "€€€€",
    path: "/belgium/antwerpen/antwerpen/fine-fleur",
    image: '/images/fine-fleur1.png'
  },
  {
    name: "FRANQ",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/belgium/antwerpen/antwerpen/franq",
    image: '/images/franq1.png'
  },
  {
    name: "Hertog Jan at Botanic",
    cuisine: "Creative, Asian Influences",
    price: "€€€€",
    path: "/belgium/antwerpen/antwerpen/hertog-jan-at-botanic",
    image: '/images/hertog-jan-at-botanic1.png'
  },
  {
    name: "Het Gebaar",
    cuisine: "Creative, Asian Influences",
    price: "€€€€",
    path: "/belgium/antwerpen/antwerpen/het-gebaar",
    image: '/images/het-gebaar1.png'
  },
  {
    name: "Het Nieuwe Palinghuis",
    cuisine: "Seafood",
    price: "€€€",
    path: "/belgium/antwerpen/antwerpen/het-nieuwe-palinghuis",
    image: '/images/het-nieuwe-palinghuis1.png'
  },
  {
    name: "InVINcible",
    cuisine: "Modern Cuisine, Creative French",
    price: "€€€",
    path: "/belgium/antwerpen/antwerpen/invincible",
    image: '/images/invincible1.png'
  },
  {
    name: "Kommilfoo",
    cuisine: "Creative French",
    price: "€€€",
    path: "/belgium/antwerpen/antwerpen/kommilfoo",
    image: '/images/kommilfoo1.png'
  },
  {
    name: "Ko'uzi",
    cuisine: "Japanese, Sushi",
    price: "€€",
    path: "/belgium/antwerpen/antwerpen/kouzi",
    image: '/images/kouzi1.png'
  },
  {
    name: "l'Amitié",
    cuisine: "Sharing, Fusion",
    price: "€€",
    path: "/belgium/antwerpen/antwerpen/lamiti",
    image: '/images/lamiti1.png'
  },
  {
    name: "Le Pristine",
    cuisine: "Italian Contemporary",
    price: "€€€€",
    path: "/belgium/antwerpen/antwerpen/le-pristine",
    image: '/images/le-pristine1.png'
  },
  {
    name: "Minerva",
    cuisine: "Classic Cuisine",
    price: "€€€",
    path: "/belgium/antwerpen/antwerpen/minerva",
    image: '/images/minerva1.png'
  },
  {
    name: "Misera",
    cuisine: "Creative French, Modern French",
    price: "€€€€",
    path: "/belgium/antwerpen/antwerpen/misera",
    image: '/images/misera1.png'
  },
  {
    name: "Nage",
    cuisine: "French Contemporary, Creative",
    price: "€€€",
    path: "/belgium/antwerpen/antwerpen/nage",
    image: '/images/nage1.png'
  },
  {
    name: "Nathan",
    cuisine: "Modern French",
    price: "€€€€",
    path: "/belgium/antwerpen/antwerpen/nathan",
    image: '/images/nathan1.png'
  },
  {
    name: "Nebo",
    cuisine: "Contemporary, Modern French",
    price: "€€€€",
    path: "/belgium/antwerpen/antwerpen/nebo",
    image: '/images/nebo1.png'
  },
  {
    name: "Ni Shifu",
    cuisine: "Chinese, Sichuan",
    price: "€€",
    path: "/belgium/antwerpen/antwerpen/ni-shifu",
    image: '/images/ni-shifu1.png'
  },
  {
    name: "Pazzo",
    cuisine: "Fusion, Italian Contemporary",
    price: "€€€",
    path: "/belgium/antwerpen/antwerpen/pazzo",
    image: '/images/pazzo1.png'
  },
  {
    name: "Pont neuf",
    cuisine: "Seafood",
    price: "€€€",
    path: "/belgium/antwerpen/antwerpen/pont-neuf",
    image: '/images/pont-neuf1.png'
  },
  {
    name: "Qin",
    cuisine: "Cantonese, Chinese Contemporary",
    price: "€€",
    path: "/belgium/antwerpen/antwerpen/qin",
    image: '/images/qin1.png'
  },
  {
    name: "RAS",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/belgium/antwerpen/antwerpen/ras",
    image: '/images/ras1.png'
  },
  {
    name: "Schnitzel",
    cuisine: "Sharing",
    price: "€€",
    path: "/belgium/antwerpen/antwerpen/schnitzel",
    image: '/images/schnitzel1.png'
  },
  {
    name: "'t Fornuis",
    cuisine: "Classic Cuisine",
    price: "€€€€",
    path: "/belgium/antwerpen/antwerpen/t-fornuis",
    image: '/images/t-fornuis1.png'
  },
  {
    name: "The Butcher's son",
    cuisine: "Traditional Cuisine, Meats and Grills",
    price: "€€€",
    path: "/belgium/antwerpen/antwerpen/the-butchers-son",
    image: '/images/the-butchers-son1.png'
  },
  {
    name: "The Jane",
    cuisine: "Creative, Asian Influences",
    price: "€€€€",
    path: "/belgium/antwerpen/antwerpen/the-jane",
    image: '/images/the-jane1.png'
  },
  {
    name: "The London",
    cuisine: "Modern French",
    price: "€€€",
    path: "/belgium/antwerpen/antwerpen/the-london",
    image: '/images/the-london1.png'
  },
  {
    name: "U Eat & Sleep Antwerp",
    cuisine: "Modern Cuisine, French",
    price: "€€€",
    path: "/belgium/antwerpen/antwerpen/u-eat-sleep-antwerp",
    image: '/images/u-eat-sleep-antwerp1.png'
  },
  {
    name: "Upton",
    cuisine: "Italian, Modern Cuisine",
    price: "€€€",
    path: "/belgium/antwerpen/antwerpen/upton",
    image: '/images/upton1.png'
  },
  {
    name: "Zilte",
    cuisine: "Creative",
    price: "€€€€",
    path: "/belgium/antwerpen/antwerpen/zilte",
    image: '/images/zilte1.png'
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
