import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Prague";

const restaurants = [
  {
    name: "420 Restaurant",
    cuisine: "Contemporary, Classic Cuisine",
    price: "€€€",
    path: "/czechia/prague/prague/420-restaurant",
    image: '/images/420-restaurant1.png'
  },
  {
    name: "Alma",
    cuisine: "Contemporary",
    price: "€€",
    path: "/czechia/prague/prague/alma",
    image: '/images/alma1.png'
  },
  {
    name: "Amano",
    cuisine: "Italian Contemporary",
    price: "€€€",
    path: "/czechia/prague/prague/amano",
    image: '/images/amano1.png'
  },
  {
    name: "Antricote Steakhouse",
    cuisine: "Grills, Meats and Grills",
    price: "€€€",
    path: "/czechia/prague/prague/antricote-steakhouse",
    image: '/images/antricote-steakhouse1.png'
  },
  {
    name: "Apelace21",
    cuisine: "Contemporary, Czech",
    price: "€€",
    path: "/czechia/prague/prague/apelace21",
    image: '/images/apelace211.png'
  },
  {
    name: "Aromi",
    cuisine: "Italian",
    price: "€€€",
    path: "/czechia/prague/prague/aromi",
    image: '/images/aromi1.png'
  },
  {
    name: "Benjamin",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/czechia/prague/prague/benjamin",
    image: '/images/benjamin1.png'
  },
  {
    name: "Bockem",
    cuisine: "Czech, Contemporary",
    price: "€€€",
    path: "/czechia/prague/prague/bockem",
    image: '/images/bockem1.png'
  },
  {
    name: "Café Imperial",
    cuisine: "Traditional Cuisine, French",
    price: "€€",
    path: "/czechia/prague/prague/caf-imperial",
    image: '/images/caf-imperial1.png'
  },
  {
    name: "Casa De Carli",
    cuisine: "Italian",
    price: "€€€",
    path: "/czechia/prague/prague/casa-de-carli",
    image: '/images/casa-de-carli1.png'
  },
  {
    name: "Coda",
    cuisine: "Czech, Contemporary",
    price: "€€€",
    path: "/czechia/prague/prague/coda",
    image: '/images/coda1.png'
  },
  {
    name: "CottoCrudo",
    cuisine: "Italian",
    price: "€€",
    path: "/czechia/prague/prague/cottocrudo",
    image: '/images/cottocrudo1.png'
  },
  {
    name: "Dejvická 34 by Tomáš Černý",
    cuisine: "Italian, Czech",
    price: "€€",
    path: "/czechia/prague/prague/dejvick-34-by-tom-ern",
    image: '/images/dejvick-34-by-tom-ern1.png'
  },
  {
    name: "Dergi Praha",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/czechia/prague/prague/dergi-praha",
    image: '/images/dergi-praha1.png'
  },
  {
    name: "Divinis",
    cuisine: "Italian",
    price: "€€€",
    path: "/czechia/prague/prague/divinis",
    image: '/images/divinis1.png'
  },
  {
    name: "Field",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/czechia/prague/prague/field",
    image: '/images/field1.png'
  },
  {
    name: "Grand Cru",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/czechia/prague/prague/grand-cru",
    image: '/images/grand-cru1.png'
  },
  {
    name: "Kampa Park",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/czechia/prague/prague/kampa-park",
    image: '/images/kampa-park1.png'
  },
  {
    name: "La Degustation Bohême Bourgeoise",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/czechia/prague/prague/la-degustation-bohme-bourgeoise",
    image: '/images/la-degustation-bohme-bourgeoise1.png'
  },
  {
    name: "La Finestra in Cucina",
    cuisine: "Italian",
    price: "€",
    path: "/czechia/prague/prague/la-finestra-in-cucina",
    image: '/images/la-finestra-in-cucina1.png'
  },
  {
    name: "La Veranda",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/czechia/prague/prague/la-veranda",
    image: '/images/la-veranda1.png'
  },
  {
    name: "LEAF",
    cuisine: "Contemporary",
    price: "€€€",
    path: "/czechia/prague/prague/leaf",
    image: '/images/leaf1.png'
  },
  {
    name: "LEVITATE",
    cuisine: "Asian Influences, Scandinavian",
    price: "€€€€",
    path: "/czechia/prague/prague/levitate",
    image: '/images/levitate1.png'
  },
  {
    name: "Marie B",
    cuisine: "Modern Cuisine, Czech",
    price: "€€€",
    path: "/czechia/prague/prague/marie-b",
    image: '/images/marie-b1.png'
  },
  {
    name: "Mlýnec",
    cuisine: "International, Modern Cuisine",
    price: "€€€",
    path: "/czechia/prague/prague/mlnec",
    image: '/images/mlnec1.png'
  },
  {
    name: "Monarch",
    cuisine: "Meats and Grills",
    price: "€€€",
    path: "/czechia/prague/prague/monarch",
    image: '/images/monarch1.png'
  },
  {
    name: "Na Kopci",
    cuisine: "Traditional Cuisine",
    price: "€",
    path: "/czechia/prague/prague/na-kopci",
    image: '/images/na-kopci1.png'
  },
  {
    name: "Next Door by Imperial",
    cuisine: "Czech, Contemporary",
    price: "€€",
    path: "/czechia/prague/prague/next-door-by-imperial",
    image: '/images/next-door-by-imperial1.png'
  },
  {
    name: "Parzival",
    cuisine: "Middle Eastern",
    price: "€€€€",
    path: "/czechia/prague/prague/parzival",
    image: '/images/parzival1.png'
  },
  {
    name: "Portfolio",
    cuisine: "International",
    price: "€",
    path: "/czechia/prague/prague/portfolio",
    image: '/images/portfolio1.png'
  },
  {
    name: "Pot au Feu",
    cuisine: "French",
    price: "€€€",
    path: "/czechia/prague/prague/pot-au-feu",
    image: '/images/pot-au-feu1.png'
  },
  {
    name: "QQ Asian Kitchen",
    cuisine: "Asian",
    price: "€",
    path: "/czechia/prague/prague/qq-asian-kitchen",
    image: '/images/qq-asian-kitchen1.png'
  },
  {
    name: "Salabka",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/czechia/prague/prague/salabka",
    image: '/images/salabka1.png'
  },
  {
    name: "Sansho",
    cuisine: "Asian",
    price: "€€",
    path: "/czechia/prague/prague/sansho",
    image: '/images/sansho1.png'
  },
  {
    name: "STŮL",
    cuisine: "International, Seasonal Cuisine",
    price: "€€€",
    path: "/czechia/prague/prague/stl",
    image: '/images/stl1.png'
  },
  {
    name: "Štangl",
    cuisine: "Seasonal Cuisine, Modern Cuisine",
    price: "€€€€",
    path: "/czechia/prague/prague/tangl",
    image: '/images/tangl1.png'
  },
  {
    name: "Taro",
    cuisine: "Vietnamese Contemporary",
    price: "€€€",
    path: "/czechia/prague/prague/taro",
    image: '/images/taro1.png'
  },
  {
    name: "The Eatery",
    cuisine: "Czech, Contemporary",
    price: "€€",
    path: "/czechia/prague/prague/the-eatery",
    image: '/images/the-eatery1.png'
  },
  {
    name: "U Kalendů",
    cuisine: "Czech",
    price: "€€",
    path: "/czechia/prague/prague/u-kalend",
    image: '/images/u-kalend1.png'
  },
  {
    name: "U Matěje",
    cuisine: "Czech, Modern Cuisine",
    price: "€€",
    path: "/czechia/prague/prague/u-matje",
    image: '/images/u-matje1.png'
  },
  {
    name: "V Zátiši",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/czechia/prague/prague/v-ztii",
    image: '/images/v-ztii1.png'
  },
  {
    name: "Vallmo",
    cuisine: "Czech, Contemporary",
    price: "€€€€",
    path: "/czechia/prague/prague/vallmo",
    image: '/images/vallmo1.png'
  },
  {
    name: "Výčep",
    cuisine: "Czech, Contemporary",
    price: "€",
    path: "/czechia/prague/prague/vep",
    image: '/images/vep1.png'
  },
  {
    name: "Yamato",
    cuisine: "Japanese",
    price: "€€€",
    path: "/czechia/prague/prague/yamato",
    image: '/images/yamato1.png'
  },
  {
    name: "Yamato",
    cuisine: "Japanese",
    price: "€€€",
    path: "/czechia/prague/prague/yamato",
    image: '/images/yamato1.png'
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
