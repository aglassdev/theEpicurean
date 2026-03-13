import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Bordeaux";

const restaurants = [
  {
    name: "Amicis",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/bordeaux/bordeaux/amicis",
    image: '/images/amicis1.png'
  },
  {
    name: "Arcada",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/bordeaux/bordeaux/arcada",
    image: '/images/arcada1.png'
  },
  {
    name: "Bo-tannique",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/bordeaux/bordeaux/bo-tannique",
    image: '/images/bo-tannique1.png'
  },
  {
    name: "Cent33",
    cuisine: "Creative",
    price: "€€€",
    path: "/france/bordeaux/bordeaux/cent33",
    image: '/images/cent331.png'
  },
  {
    name: "C'Yusha",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/bordeaux/bordeaux/cyusha",
    image: '/images/cyusha1.png'
  },
  {
    name: "Epicentre",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/bordeaux/bordeaux/epicentre",
    image: '/images/epicentre1.png'
  },
  {
    name: "Influences",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/bordeaux/bordeaux/influences",
    image: '/images/influences1.png'
  },
  {
    name: "Inima",
    cuisine: "Creative",
    price: "€€€",
    path: "/france/bordeaux/bordeaux/inima",
    image: '/images/inima1.png'
  },
  {
    name: "Ishikawa",
    cuisine: "Japanese",
    price: "€€",
    path: "/france/bordeaux/bordeaux/ishikawa",
    image: '/images/ishikawa1.png'
  },
  {
    name: "Joki",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/bordeaux/bordeaux/joki",
    image: '/images/joki1.png'
  },
  {
    name: "Kedem",
    cuisine: "Middle Eastern",
    price: "€€",
    path: "/france/bordeaux/bordeaux/kedem",
    image: '/images/kedem1.png'
  },
  {
    name: "La Fine Bouche",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/bordeaux/bordeaux/la-fine-bouche",
    image: '/images/la-fine-bouche1.png'
  },
  {
    name: "La Table d'Hôtes - Le Quatrième Mur",
    cuisine: "Modern Cuisine, Creative",
    price: "€€€€",
    path: "/france/bordeaux/bordeaux/la-table-dhtes-le-quatrime-mur",
    image: '/images/la-table-dhtes-le-quatrime-mur1.png'
  },
  {
    name: "La Tupina",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/bordeaux/bordeaux/la-tupina",
    image: '/images/la-tupina1.png'
  },
  {
    name: "Le 1544",
    cuisine: "Classic Cuisine",
    price: "€€",
    path: "/france/bordeaux/bordeaux/le-1544",
    image: '/images/le-15441.png'
  },
  {
    name: "Le 7 Restaurant Panoramique",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/bordeaux/bordeaux/le-7-restaurant-panoramique",
    image: '/images/le-7-restaurant-panoramique1.png'
  },
  {
    name: "Le Cercle de Montaigne",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/bordeaux/bordeaux/le-cercle-de-montaigne",
    image: '/images/le-cercle-de-montaigne1.png'
  },
  {
    name: "Le Chapon Fin",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/bordeaux/bordeaux/le-chapon-fin",
    image: '/images/le-chapon-fin1.png'
  },
  {
    name: "Le Chicoula, bistrot d'Art",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/bordeaux/bordeaux/le-chicoula-bistrot-dart",
    image: '/images/le-chicoula-bistrot-dart1.png'
  },
  {
    name: "Le Clos d'Augusta",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/bordeaux/bordeaux/le-clos-daugusta",
    image: '/images/le-clos-daugusta1.png'
  },
  {
    name: "Le Pavillon des Boulevards",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/bordeaux/bordeaux/le-pavillon-des-boulevards",
    image: '/images/le-pavillon-des-boulevards1.png'
  },
  {
    name: "Le Pressoir d'Argent - Gordon Ramsay",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/bordeaux/bordeaux/le-pressoir-dargent-gordon-ramsay",
    image: '/images/le-pressoir-dargent-gordon-ramsay1.png'
  },
  {
    name: "Le Quatrième Mur",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/bordeaux/bordeaux/le-quatrime-mur",
    image: '/images/le-quatrime-mur1.png'
  },
  {
    name: "Lil'Home",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/bordeaux/bordeaux/lilhome",
    image: '/images/lilhome1.png'
  },
  {
    name: "L'Observatoire du Gabriel",
    cuisine: "Modern Cuisine, Creative",
    price: "€€€€",
    path: "/france/bordeaux/bordeaux/lobservatoire-du-gabriel",
    image: '/images/lobservatoire-du-gabriel1.png'
  },
  {
    name: "Loco by Jem's",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/bordeaux/bordeaux/loco-by-jems",
    image: '/images/loco-by-jems1.png'
  },
  {
    name: "L'Oiseau Bleu",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/bordeaux/bordeaux/loiseau-bleu",
    image: '/images/loiseau-bleu1.png'
  },
  {
    name: "Lume",
    cuisine: "Italian",
    price: "€€€",
    path: "/france/bordeaux/bordeaux/lume",
    image: '/images/lume1.png'
  },
  {
    name: "Luna",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/bordeaux/bordeaux/luna",
    image: '/images/luna1.png'
  },
  {
    name: "Madame B",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/bordeaux/bordeaux/madame-b",
    image: '/images/madame-b1.png'
  },
  {
    name: "Maison Nouvelle",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/bordeaux/bordeaux/maison-nouvelle",
    image: '/images/maison-nouvelle1.png'
  },
  {
    name: "Mets Mots",
    cuisine: "Farm to table",
    price: "€€",
    path: "/france/bordeaux/bordeaux/mets-mots",
    image: '/images/mets-mots1.png'
  },
  {
    name: "OST",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/bordeaux/bordeaux/ost",
    image: '/images/ost1.png'
  },
  {
    name: "Panaille",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/bordeaux/bordeaux/panaille",
    image: '/images/panaille1.png'
  },
  {
    name: "Passage Secret",
    cuisine: "Classic Cuisine",
    price: "€€€",
    path: "/france/bordeaux/bordeaux/passage-secret",
    image: '/images/passage-secret1.png'
  },
  {
    name: "Point Rouge",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/bordeaux/bordeaux/point-rouge",
    image: '/images/point-rouge1.png'
  },
  {
    name: "Quanjude",
    cuisine: "Chinese",
    price: "€€€",
    path: "/france/bordeaux/bordeaux/quanjude",
    image: '/images/quanjude1.png'
  },
  {
    name: "Racines by Daniel Gallacher",
    cuisine: "Creative",
    price: "€€",
    path: "/france/bordeaux/bordeaux/racines-by-daniel-gallacher",
    image: '/images/racines-by-daniel-gallacher1.png'
  },
  {
    name: "Ressources",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/bordeaux/bordeaux/ressources",
    image: '/images/ressources1.png'
  },
  {
    name: "Sens",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/bordeaux/bordeaux/sens",
    image: '/images/sens1.png'
  },
  {
    name: "Soléna",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/bordeaux/bordeaux/solna",
    image: '/images/solna1.png'
  },
  {
    name: "Symbiose",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/bordeaux/bordeaux/symbiose",
    image: '/images/symbiose1.png'
  },
  {
    name: "Tentazioni",
    cuisine: "Italian, Modern Cuisine",
    price: "€€€€",
    path: "/france/bordeaux/bordeaux/tentazioni",
    image: '/images/tentazioni1.png'
  },
  {
    name: "TLALI",
    cuisine: "Fusion, Mexican",
    price: "€€",
    path: "/france/bordeaux/bordeaux/tlali",
    image: '/images/tlali1.png'
  },
  {
    name: "Vivants",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/bordeaux/bordeaux/vivants",
    image: '/images/vivants1.png'
  },
  {
    name: "Zéphirine",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/bordeaux/bordeaux/zphirine",
    image: '/images/zphirine1.png'
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
