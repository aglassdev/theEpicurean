import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Cuauhtmoc";

const restaurants = [
  {
    name: "Aleli Rooftop",
    cuisine: "Spanish, Mexican",
    price: "$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/aleli-rooftop",
    image: '/images/aleli-rooftop1.png'
  },
  {
    name: "Aquiles",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/aquiles",
    image: '/images/aquiles1.png'
  },
  {
    name: "Bajel",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/bajel",
    image: '/images/bajel1.png'
  },
  {
    name: "Baldio",
    cuisine: "Mexican, European",
    price: "$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/baldio",
    image: '/images/baldio1.png'
  },
  {
    name: "Barbacoa Gonzalitos",
    cuisine: "Mexican, Regional Cuisine",
    price: "$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/barbacoa-gonzalitos",
    image: '/images/barbacoa-gonzalitos1.png'
  },
  {
    name: "Bella Aurora",
    cuisine: "Italian",
    price: "$$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/bella-aurora",
    image: '/images/bella-aurora1.png'
  },
  {
    name: "Botánico",
    cuisine: "Contemporary",
    price: "$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/botnico",
    image: '/images/botnico1.png'
  },
  {
    name: "Campobaja",
    cuisine: "Seafood, Regional Cuisine",
    price: "$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/campobaja",
    image: '/images/campobaja1.png'
  },
  {
    name: "Cana",
    cuisine: "Contemporary, International",
    price: "$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/cana",
    image: '/images/cana1.png'
  },
  {
    name: "Caracol de Mar",
    cuisine: "Mexican, Contemporary",
    price: "$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/caracol-de-mar",
    image: '/images/caracol-de-mar1.png'
  },
  {
    name: "Cariñito Tacos",
    cuisine: "Mexican",
    price: "$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/cariito-tacos",
    image: '/images/cariito-tacos1.png'
  },
  {
    name: "Casona Restaurante",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/casona-restaurante",
    image: '/images/casona-restaurante1.png'
  },
  {
    name: "Castacán",
    cuisine: "Mexican",
    price: "$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/castacn",
    image: '/images/castacn1.png'
  },
  {
    name: "Contramar",
    cuisine: "Seafood, Mexican",
    price: "$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/contramar",
    image: '/images/contramar1.png'
  },
  {
    name: "El Tigre Silencioso",
    cuisine: "Creative, Mexican",
    price: "$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/el-tigre-silencioso",
    image: '/images/el-tigre-silencioso1.png'
  },
  {
    name: "Em",
    cuisine: "Mexican, Contemporary",
    price: "$$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/em",
    image: '/images/em1.png'
  },
  {
    name: "Esquina Común",
    cuisine: "Mexican, Creative",
    price: "$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/esquina-comn",
    image: '/images/esquina-comn1.png'
  },
  {
    name: "Expendio de Maíz",
    cuisine: "Mexican",
    price: "$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/expendio-de-maz",
    image: '/images/expendio-de-maz1.png'
  },
  {
    name: "Filigrana",
    cuisine: "Mexican, Contemporary",
    price: "$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/filigrana",
    image: '/images/filigrana1.png'
  },
  {
    name: "Fugaz",
    cuisine: "Mexican, Mediterranean Cuisine",
    price: "$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/fugaz",
    image: '/images/fugaz1.png'
  },
  {
    name: "Gaba",
    cuisine: "Mexican",
    price: "$$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/gaba",
    image: '/images/gaba1.png'
  },
  {
    name: "Galanga Thai House",
    cuisine: "Thai",
    price: "$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/galanga-thai-house",
    image: '/images/galanga-thai-house1.png'
  },
  {
    name: "Galea",
    cuisine: "Italian, Contemporary",
    price: "$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/galea",
    image: '/images/galea1.png'
  },
  {
    name: "Hugo",
    cuisine: "Contemporary",
    price: "$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/hugo",
    image: '/images/hugo1.png'
  },
  {
    name: "Jowong",
    cuisine: "Korean",
    price: "$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/jowong",
    image: '/images/jowong1.png'
  },
  {
    name: "La 89",
    cuisine: "Mexican",
    price: "$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/la-89",
    image: '/images/la-891.png'
  },
  {
    name: "Lalo!",
    cuisine: "Contemporary",
    price: "$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/lalo",
    image: '/images/lalo1.png'
  },
  {
    name: "Limosneros",
    cuisine: "Mexican, Traditional Cuisine",
    price: "$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/limosneros",
    image: '/images/limosneros1.png'
  },
  {
    name: "Lina",
    cuisine: "Mexican, Contemporary",
    price: "$$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/lina",
    image: '/images/lina1.png'
  },
  {
    name: "Lorea",
    cuisine: "Mexican, Contemporary",
    price: "$$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/lorea",
    image: '/images/lorea1.png'
  },
  {
    name: "Maizajo",
    cuisine: "Mexican",
    price: "$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/maizajo",
    image: '/images/maizajo1.png'
  },
  {
    name: "Martínez",
    cuisine: "Contemporary",
    price: "$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/martnez",
    image: '/images/martnez1.png'
  },
  {
    name: "Masala y Maíz",
    cuisine: "Fusion",
    price: "$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/masala-y-maz",
    image: '/images/masala-y-maz1.png'
  },
  {
    name: "Meroma",
    cuisine: "Contemporary",
    price: "$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/meroma",
    image: '/images/meroma1.png'
  },
  {
    name: "MeroToro",
    cuisine: "Contemporary, Mexican",
    price: "$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/merotoro",
    image: '/images/merotoro1.png'
  },
  {
    name: "Migrante",
    cuisine: "International",
    price: "$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/migrante",
    image: '/images/migrante1.png'
  },
  {
    name: "Molino El Pujol",
    cuisine: "Mexican",
    price: "$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/molino-el-pujol",
    image: '/images/molino-el-pujol1.png'
  },
  {
    name: "Máximo",
    cuisine: "Mexican",
    price: "$$$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/mximo",
    image: '/images/mximo1.png'
  },
  {
    name: "Pargot",
    cuisine: "Mexican, Creative",
    price: "$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/pargot",
    image: '/images/pargot1.png'
  },
  {
    name: "Pigeon",
    cuisine: "International",
    price: "$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/pigeon",
    image: '/images/pigeon1.png'
  },
  {
    name: "Pink Rambo",
    cuisine: "Contemporary",
    price: "$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/pink-rambo",
    image: '/images/pink-rambo1.png'
  },
  {
    name: "Plonk",
    cuisine: "Mexican, Asian",
    price: "$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/plonk",
    image: '/images/plonk1.png'
  },
  {
    name: "Ricos Tacos Toluca",
    cuisine: "Mexican",
    price: "$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/ricos-tacos-toluca",
    image: '/images/ricos-tacos-toluca1.png'
  },
  {
    name: "Rosetta",
    cuisine: "Creative, Mexican",
    price: "$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/rosetta",
    image: '/images/rosetta1.png'
  },
  {
    name: "Sarde",
    cuisine: "Contemporary",
    price: "$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/sarde",
    image: '/images/sarde1.png'
  },
  {
    name: "Sartoria",
    cuisine: "Italian, Italian Contemporary",
    price: "$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/sartoria",
    image: '/images/sartoria1.png'
  },
  {
    name: "Tacos de Canasta Los Especiales",
    cuisine: "Mexican",
    price: "$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/tacos-de-canasta-los-especiales",
    image: '/images/tacos-de-canasta-los-especiales1.png'
  },
  {
    name: "Tacos del Valle",
    cuisine: "Mexican",
    price: "$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/tacos-del-valle",
    image: '/images/tacos-del-valle1.png'
  },
  {
    name: "Tacos Hola El Güero",
    cuisine: "Mexican",
    price: "$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/tacos-hola-el-gero",
    image: '/images/tacos-hola-el-gero1.png'
  },
  {
    name: "Tacos Los Alexis",
    cuisine: "Mexican, Creative",
    price: "$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/tacos-los-alexis",
    image: '/images/tacos-los-alexis1.png'
  },
  {
    name: "Taquería El Califa de León",
    cuisine: "Mexican",
    price: "$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/taquera-el-califa-de-len",
    image: '/images/taquera-el-califa-de-len1.png'
  },
  {
    name: "Taquería El Jarocho",
    cuisine: "Mexican",
    price: "$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/taquera-el-jarocho",
    image: '/images/taquera-el-jarocho1.png'
  },
  {
    name: "Taqueria El Gran Abanico",
    cuisine: "Mexican",
    price: "$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/taqueria-el-gran-abanico",
    image: '/images/taqueria-el-gran-abanico1.png'
  },
  {
    name: "Taqueria El Paisa",
    cuisine: "Mexican",
    price: "$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/taqueria-el-paisa",
    image: '/images/taqueria-el-paisa1.png'
  },
  {
    name: "Taqueria Los Cocuyos",
    cuisine: "Mexican",
    price: "$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/taqueria-los-cocuyos",
    image: '/images/taqueria-los-cocuyos1.png'
  },
  {
    name: "Taqueria Los Parados",
    cuisine: "Mexican",
    price: "$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/taqueria-los-parados",
    image: '/images/taqueria-los-parados1.png'
  },
  {
    name: "Ultramarinos Demar",
    cuisine: "Seafood, Mexican",
    price: "$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/ultramarinos-demar",
    image: '/images/ultramarinos-demar1.png'
  },
  {
    name: "Vigneron",
    cuisine: "Contemporary, French",
    price: "$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/vigneron",
    image: '/images/vigneron1.png'
  },
  {
    name: "Voraz",
    cuisine: "Mexican, Contemporary",
    price: "$$",
    path: "/mexico/cuauhtmoc/cuauhtmoc/voraz",
    image: '/images/voraz1.png'
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
