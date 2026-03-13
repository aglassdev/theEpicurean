import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Rio De Janeiro";

const restaurants = [
  {
    name: "Aprazível",
    cuisine: "Brazilian",
    price: "$$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/aprazvel",
    image: '/images/aprazvel1.png'
  },
  {
    name: "Artigiano",
    cuisine: "Italian",
    price: "$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/artigiano",
    image: '/images/artigiano1.png'
  },
  {
    name: "Babbo Osteria",
    cuisine: "Italian",
    price: "$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/babbo-osteria",
    image: '/images/babbo-osteria1.png'
  },
  {
    name: "Brota",
    cuisine: "Vegetarian",
    price: "$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/brota",
    image: '/images/brota1.png'
  },
  {
    name: "Casa 201",
    cuisine: "French",
    price: "$$$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/casa-201",
    image: '/images/casa-2011.png'
  },
  {
    name: "Chez Claude",
    cuisine: "Modern French",
    price: "$$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/chez-claude",
    image: '/images/chez-claude1.png'
  },
  {
    name: "Clan BBQ",
    cuisine: "Meats and Grills",
    price: "$$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/clan-bbq",
    image: '/images/clan-bbq1.png'
  },
  {
    name: "Corrientes 348 - Marina da Glória",
    cuisine: "Meats and Grills",
    price: "$$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/corrientes-348-marina-da-glria",
    image: '/images/corrientes-348-marina-da-glria1.png'
  },
  {
    name: "Didier",
    cuisine: "French Contemporary",
    price: "$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/didier",
    image: '/images/didier1.png'
  },
  {
    name: "Escama",
    cuisine: "Seafood",
    price: "$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/escama",
    image: '/images/escama1.png'
  },
  {
    name: "Giuseppe Grill Leblon",
    cuisine: "Traditional Cuisine",
    price: "$$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/giuseppe-grill-leblon",
    image: '/images/giuseppe-grill-leblon1.png'
  },
  {
    name: "Haru Sushi Bar",
    cuisine: "Japanese",
    price: "$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/haru-sushi-bar",
    image: '/images/haru-sushi-bar1.png'
  },
  {
    name: "Henriqueta",
    cuisine: "Portuguese",
    price: "$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/henriqueta",
    image: '/images/henriqueta1.png'
  },
  {
    name: "Izär",
    cuisine: "Spanish, Rice Dishes",
    price: "$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/izr",
    image: '/images/izr1.png'
  },
  {
    name: "La Villa - Bistrô Francês",
    cuisine: "French",
    price: "$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/la-villa-bistr-francs",
    image: '/images/la-villa-bistr-francs1.png'
  },
  {
    name: "Lasai",
    cuisine: "Modern Cuisine, Innovative",
    price: "$$$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/lasai",
    image: '/images/lasai1.png'
  },
  {
    name: "Lilia",
    cuisine: "Brazilian",
    price: "$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/lilia",
    image: '/images/lilia1.png'
  },
  {
    name: "Maria e o Boi",
    cuisine: "Meats and Grills, Traditional Cuisine",
    price: "$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/maria-e-o-boi",
    image: '/images/maria-e-o-boi1.png'
  },
  {
    name: "Marine Restô",
    cuisine: "Modern Cuisine",
    price: "$$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/marine-rest",
    image: '/images/marine-rest1.png'
  },
  {
    name: "Mee",
    cuisine: "Asian Influences",
    price: "$$$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/mee",
    image: '/images/mee1.png'
  },
  {
    name: "Miam Miam",
    cuisine: "Modern Cuisine",
    price: "$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/miam-miam",
    image: '/images/miam-miam1.png'
  },
  {
    name: "Mr. Lam",
    cuisine: "Asian Influences",
    price: "$$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/mr-lam",
    image: '/images/mr-lam1.png'
  },
  {
    name: "Mäska",
    cuisine: "Modern Cuisine, Mediterranean Cuisine",
    price: "$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/mska",
    image: '/images/mska1.png'
  },
  {
    name: "Nôa",
    cuisine: "Mediterranean Cuisine",
    price: "$$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/na",
    image: '/images/na1.png'
  },
  {
    name: "Nosso",
    cuisine: "Contemporary, Fusion",
    price: "$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/nosso",
    image: '/images/nosso1.png'
  },
  {
    name: "OCYÁ Ilha",
    cuisine: "Seafood",
    price: "$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/ocy-ilha",
    image: '/images/ocy-ilha1.png'
  },
  {
    name: "OCYÁ Leblon",
    cuisine: "Seafood",
    price: "$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/ocy-leblon",
    image: '/images/ocy-leblon1.png'
  },
  {
    name: "Oro",
    cuisine: "Creative",
    price: "$$$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/oro",
    image: '/images/oro1.png'
  },
  {
    name: "Oseille",
    cuisine: "Modern Cuisine, Creative",
    price: "$$$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/oseille",
    image: '/images/oseille1.png'
  },
  {
    name: "Oteque",
    cuisine: "Modern Cuisine",
    price: "$$$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/oteque",
    image: '/images/oteque1.png'
  },
  {
    name: "Pici Trattoria",
    cuisine: "Italian",
    price: "$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/pici-trattoria",
    image: '/images/pici-trattoria1.png'
  },
  {
    name: "Quinta da Henriqueta",
    cuisine: "Portuguese",
    price: "$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/quinta-da-henriqueta",
    image: '/images/quinta-da-henriqueta1.png'
  },
  {
    name: "Ristorante Hotel Cipriani",
    cuisine: "Italian",
    price: "$$$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/ristorante-hotel-cipriani",
    image: '/images/ristorante-hotel-cipriani1.png'
  },
  {
    name: "Rubaiyat Rio",
    cuisine: "Meats and Grills",
    price: "$$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/rubaiyat-rio",
    image: '/images/rubaiyat-rio1.png'
  },
  {
    name: "Rudä",
    cuisine: "Brazilian, Contemporary",
    price: "$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/rud",
    image: '/images/rud1.png'
  },
  {
    name: "Rufino Parrilla",
    cuisine: "Meats and Grills",
    price: "$$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/rufino-parrilla",
    image: '/images/rufino-parrilla1.png'
  },
  {
    name: "San Omakase",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/san-omakase",
    image: '/images/san-omakase1.png'
  },
  {
    name: "Spicy Fish",
    cuisine: "Asian Contemporary",
    price: "$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/spicy-fish",
    image: '/images/spicy-fish1.png'
  },
  {
    name: "Sud, O Pássaro Verde",
    cuisine: "Brazilian",
    price: "$$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/sud-o-pssaro-verde",
    image: '/images/sud-o-pssaro-verde1.png'
  },
  {
    name: "Sult",
    cuisine: "Italian Contemporary",
    price: "$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/sult",
    image: '/images/sult1.png'
  },
  {
    name: "Sushi Leblon",
    cuisine: "Japanese",
    price: "$$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/sushi-leblon",
    image: '/images/sushi-leblon1.png'
  },
  {
    name: "Território Aprazível",
    cuisine: "Brazilian",
    price: "$$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/territrio-aprazvel",
    image: '/images/territrio-aprazvel1.png'
  },
  {
    name: "Tiara",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/tiara",
    image: '/images/tiara1.png'
  },
  {
    name: "Toto",
    cuisine: "European, Italian",
    price: "$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/toto",
    image: '/images/toto1.png'
  },
  {
    name: "Térèze",
    cuisine: "Modern Cuisine",
    price: "$$$",
    path: "/brazil/rio-de-janeiro/rio-de-janeiro/trze",
    image: '/images/trze1.png'
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
