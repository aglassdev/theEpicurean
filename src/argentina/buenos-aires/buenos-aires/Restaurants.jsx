import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Buenos Aires";

const restaurants = [
  {
    name: "4ta Pared",
    cuisine: "Contemporary",
    price: "$$",
    path: "/argentina/buenos-aires/buenos-aires/4ta-pared",
    image: '/images/4ta-pared1.png'
  },
  {
    name: "A Fuego Fuerte",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/argentina/buenos-aires/buenos-aires/a-fuego-fuerte",
    image: '/images/a-fuego-fuerte1.png'
  },
  {
    name: "Ajo Negro - Mar de Tapas",
    cuisine: "Modern Cuisine",
    price: "$$",
    path: "/argentina/buenos-aires/buenos-aires/ajo-negro-mar-de-tapas",
    image: '/images/ajo-negro-mar-de-tapas1.png'
  },
  {
    name: "Alcanfor",
    cuisine: "Contemporary, Farm to table",
    price: "$$",
    path: "/argentina/buenos-aires/buenos-aires/alcanfor",
    image: '/images/alcanfor1.png'
  },
  {
    name: "Anafe",
    cuisine: "Contemporary",
    price: "$",
    path: "/argentina/buenos-aires/buenos-aires/anafe",
    image: '/images/anafe1.png'
  },
  {
    name: "Anchoíta",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/argentina/buenos-aires/buenos-aires/anchota",
    image: '/images/anchota1.png'
  },
  {
    name: "Aramburu",
    cuisine: "Creative",
    price: "$$$$",
    path: "/argentina/buenos-aires/buenos-aires/aramburu",
    image: '/images/aramburu1.png'
  },
  {
    name: "Bis Bistró",
    cuisine: "Contemporary",
    price: "$$",
    path: "/argentina/buenos-aires/buenos-aires/bis-bistr",
    image: '/images/bis-bistr1.png'
  },
  {
    name: "Buri Omakase",
    cuisine: "Japanese, Sushi",
    price: "$$$",
    path: "/argentina/buenos-aires/buenos-aires/buri-omakase",
    image: '/images/buri-omakase1.png'
  },
  {
    name: "Cabaña Las Lilas",
    cuisine: "Meats and Grills, Barbecue",
    price: "$$$",
    path: "/argentina/buenos-aires/buenos-aires/cabaa-las-lilas",
    image: '/images/cabaa-las-lilas1.png'
  },
  {
    name: "Casa Cavia",
    cuisine: "Modern Cuisine",
    price: "$$$",
    path: "/argentina/buenos-aires/buenos-aires/casa-cavia",
    image: '/images/casa-cavia1.png'
  },
  {
    name: "Caseros",
    cuisine: "Traditional Cuisine, Home Cooking",
    price: "$",
    path: "/argentina/buenos-aires/buenos-aires/caseros",
    image: '/images/caseros1.png'
  },
  {
    name: "Chuí",
    cuisine: "Vegetarian, Vegan",
    price: "$$",
    path: "/argentina/buenos-aires/buenos-aires/chu",
    image: '/images/chu1.png'
  },
  {
    name: "Ácido",
    cuisine: "Contemporary",
    price: "$$",
    path: "/argentina/buenos-aires/buenos-aires/cido",
    image: '/images/cido1.png'
  },
  {
    name: "Corte Comedor",
    cuisine: "Meats and Grills",
    price: "$$$",
    path: "/argentina/buenos-aires/buenos-aires/corte-comedor",
    image: '/images/corte-comedor1.png'
  },
  {
    name: "Crizia",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/argentina/buenos-aires/buenos-aires/crizia",
    image: '/images/crizia1.png'
  },
  {
    name: "Don Julio",
    cuisine: "Grills",
    price: "$$$$",
    path: "/argentina/buenos-aires/buenos-aires/don-julio",
    image: '/images/don-julio1.png'
  },
  {
    name: "Duhau Restaurant & Vinoteca",
    cuisine: "Grills",
    price: "$$$$",
    path: "/argentina/buenos-aires/buenos-aires/duhau-restaurant-vinoteca",
    image: '/images/duhau-restaurant-vinoteca1.png'
  },
  {
    name: "El Preferido de Palermo",
    cuisine: "Traditional Cuisine",
    price: "$$",
    path: "/argentina/buenos-aires/buenos-aires/el-preferido-de-palermo",
    image: '/images/el-preferido-de-palermo1.png'
  },
  {
    name: "Elena",
    cuisine: "Steakhouse",
    price: "$$$",
    path: "/argentina/buenos-aires/buenos-aires/elena",
    image: '/images/elena1.png'
  },
  {
    name: "Evelia",
    cuisine: "Italian, Argentinian",
    price: "$$",
    path: "/argentina/buenos-aires/buenos-aires/evelia",
    image: '/images/evelia1.png'
  },
  {
    name: "Fervor",
    cuisine: "Meats and Seafood, Grills",
    price: "$$$",
    path: "/argentina/buenos-aires/buenos-aires/fervor",
    image: '/images/fervor1.png'
  },
  {
    name: "Fico",
    cuisine: "Farm to table, Contemporary",
    price: "$$",
    path: "/argentina/buenos-aires/buenos-aires/fico",
    image: '/images/fico1.png'
  },
  {
    name: "Fogón Asado",
    cuisine: "Meats and Grills",
    price: "$$$",
    path: "/argentina/buenos-aires/buenos-aires/fogn-asado",
    image: '/images/fogn-asado1.png'
  },
  {
    name: "Gioia Cocina Botánica",
    cuisine: "Vegan",
    price: "$$",
    path: "/argentina/buenos-aires/buenos-aires/gioia-cocina-botnica",
    image: '/images/gioia-cocina-botnica1.png'
  },
  {
    name: "Han",
    cuisine: "Korean",
    price: "$$$$",
    path: "/argentina/buenos-aires/buenos-aires/han",
    image: '/images/han1.png'
  },
  {
    name: "Horta",
    cuisine: "Contemporary",
    price: "$$",
    path: "/argentina/buenos-aires/buenos-aires/horta",
    image: '/images/horta1.png'
  },
  {
    name: "Julia",
    cuisine: "Modern Cuisine",
    price: "$$$$",
    path: "/argentina/buenos-aires/buenos-aires/julia",
    image: '/images/julia1.png'
  },
  {
    name: "Kōnā",
    cuisine: "Japanese",
    price: "$$$",
    path: "/argentina/buenos-aires/buenos-aires/kn",
    image: '/images/kn1.png'
  },
  {
    name: "La Alacena Trattoria",
    cuisine: "Italian",
    price: "$",
    path: "/argentina/buenos-aires/buenos-aires/la-alacena-trattoria",
    image: '/images/la-alacena-trattoria1.png'
  },
  {
    name: "La Cabaña",
    cuisine: "Traditional Cuisine",
    price: "$$$$",
    path: "/argentina/buenos-aires/buenos-aires/la-cabaa",
    image: '/images/la-cabaa1.png'
  },
  {
    name: "Marti",
    cuisine: "Vegetarian, Contemporary",
    price: "$$",
    path: "/argentina/buenos-aires/buenos-aires/marti",
    image: '/images/marti1.png'
  },
  {
    name: "Mengano",
    cuisine: "Contemporary",
    price: "$$",
    path: "/argentina/buenos-aires/buenos-aires/mengano",
    image: '/images/mengano1.png'
  },
  {
    name: "Mercado de Liniers",
    cuisine: "Contemporary",
    price: "$$",
    path: "/argentina/buenos-aires/buenos-aires/mercado-de-liniers",
    image: '/images/mercado-de-liniers1.png'
  },
  {
    name: "Michel Rolland Grill & Wine",
    cuisine: "Argentinian",
    price: "$$$",
    path: "/argentina/buenos-aires/buenos-aires/michel-rolland-grill-wine",
    image: '/images/michel-rolland-grill-wine1.png'
  },
  {
    name: "Mishiguene",
    cuisine: "Israeli",
    price: "$$$",
    path: "/argentina/buenos-aires/buenos-aires/mishiguene",
    image: '/images/mishiguene1.png'
  },
  {
    name: "MN Santa Inés",
    cuisine: "Fusion, Contemporary",
    price: "$",
    path: "/argentina/buenos-aires/buenos-aires/mn-santa-ins",
    image: '/images/mn-santa-ins1.png'
  },
  {
    name: "Narda Comedor",
    cuisine: "Country cooking",
    price: "$$$",
    path: "/argentina/buenos-aires/buenos-aires/narda-comedor",
    image: '/images/narda-comedor1.png'
  },
  {
    name: "Niño Gordo",
    cuisine: "Asian",
    price: "$$",
    path: "/argentina/buenos-aires/buenos-aires/nio-gordo",
    image: '/images/nio-gordo1.png'
  },
  {
    name: "Osaka Concepción",
    cuisine: "Fusion",
    price: "$$$$",
    path: "/argentina/buenos-aires/buenos-aires/osaka-concepcin",
    image: '/images/osaka-concepcin1.png'
  },
  {
    name: "Picarón",
    cuisine: "Contemporary",
    price: "$$",
    path: "/argentina/buenos-aires/buenos-aires/picarn",
    image: '/images/picarn1.png'
  },
  {
    name: "Piedra Pasillo Al Fondo",
    cuisine: "Contemporary",
    price: "$$",
    path: "/argentina/buenos-aires/buenos-aires/piedra-pasillo-al-fondo",
    image: '/images/piedra-pasillo-al-fondo1.png'
  },
  {
    name: "Raggio Osteria",
    cuisine: "Italian",
    price: "$$",
    path: "/argentina/buenos-aires/buenos-aires/raggio-osteria",
    image: '/images/raggio-osteria1.png'
  },
  {
    name: "Raíx",
    cuisine: "Contemporary",
    price: "$$",
    path: "/argentina/buenos-aires/buenos-aires/rax",
    image: '/images/rax1.png'
  },
  {
    name: "Reliquia",
    cuisine: "Argentinian",
    price: "$$",
    path: "/argentina/buenos-aires/buenos-aires/reliquia",
    image: '/images/reliquia1.png'
  },
  {
    name: "República del Fuego",
    cuisine: "Grills, Argentinian",
    price: "$$",
    path: "/argentina/buenos-aires/buenos-aires/repblica-del-fuego",
    image: '/images/repblica-del-fuego1.png'
  },
  {
    name: "Restó SCA",
    cuisine: "International",
    price: "$$$",
    path: "/argentina/buenos-aires/buenos-aires/rest-sca",
    image: '/images/rest-sca1.png'
  },
  {
    name: "Roux",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/argentina/buenos-aires/buenos-aires/roux",
    image: '/images/roux1.png'
  },
  {
    name: "Sacro",
    cuisine: "Vegetarian",
    price: "$$",
    path: "/argentina/buenos-aires/buenos-aires/sacro",
    image: '/images/sacro1.png'
  },
  {
    name: "Sottovoce",
    cuisine: "Italian",
    price: "$$",
    path: "/argentina/buenos-aires/buenos-aires/sottovoce",
    image: '/images/sottovoce1.png'
  },
  {
    name: "Sucre",
    cuisine: "Contemporary",
    price: "$$",
    path: "/argentina/buenos-aires/buenos-aires/sucre",
    image: '/images/sucre1.png'
  },
  {
    name: "Trescha",
    cuisine: "Modern Cuisine",
    price: "$$$$",
    path: "/argentina/buenos-aires/buenos-aires/trescha",
    image: '/images/trescha1.png'
  },
  {
    name: "Ultramarinos",
    cuisine: "Seafood",
    price: "$$",
    path: "/argentina/buenos-aires/buenos-aires/ultramarinos",
    image: '/images/ultramarinos1.png'
  },
  {
    name: "Uni Omakase",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/argentina/buenos-aires/buenos-aires/uni-omakase",
    image: '/images/uni-omakase1.png'
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
