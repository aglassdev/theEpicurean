import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Nice";

const restaurants = [
  {
    name: "Apopino",
    cuisine: "Mediterranean Cuisine, Modern Cuisine",
    price: "€€€",
    path: "/france/nice/nice/apopino",
    image: '/images/apopino1.png'
  },
  {
    name: "Bar des Oiseaux",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/nice/nice/bar-des-oiseaux",
    image: '/images/bar-des-oiseaux1.png'
  },
  {
    name: "Bistrot d'Antoine",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/nice/nice/bistrot-dantoine",
    image: '/images/bistrot-dantoine1.png'
  },
  {
    name: "Café des Musiciens",
    cuisine: "Farm to table",
    price: "€€",
    path: "/france/nice/nice/caf-des-musiciens",
    image: '/images/caf-des-musiciens1.png'
  },
  {
    name: "Chez Davia",
    cuisine: "Regional Cuisine",
    price: "€€",
    path: "/france/nice/nice/chez-davia",
    image: '/images/chez-davia1.png'
  },
  {
    name: "Colita",
    cuisine: "Mediterranean Cuisine",
    price: "€€",
    path: "/france/nice/nice/colita",
    image: '/images/colita1.png'
  },
  {
    name: "Comptoir du Marché",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/nice/nice/comptoir-du-march",
    image: '/images/comptoir-du-march1.png'
  },
  {
    name: "Epiro",
    cuisine: "Italian",
    price: "€€",
    path: "/france/nice/nice/epiro",
    image: '/images/epiro1.png'
  },
  {
    name: "Fine Gueule",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/nice/nice/fine-gueule",
    image: '/images/fine-gueule1.png'
  },
  {
    name: "Flaveur",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/nice/nice/flaveur",
    image: '/images/flaveur1.png'
  },
  {
    name: "JAN",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/nice/nice/jan",
    image: '/images/jan1.png'
  },
  {
    name: "La Merenda",
    cuisine: "Provençal",
    price: "€€",
    path: "/france/nice/nice/la-merenda",
    image: '/images/la-merenda1.png'
  },
  {
    name: "La Rotonde",
    cuisine: "Mediterranean Cuisine",
    price: "€€€",
    path: "/france/nice/nice/la-rotonde",
    image: '/images/la-rotonde1.png'
  },
  {
    name: "La Réserve de Nice",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/nice/nice/la-rserve-de-nice",
    image: '/images/la-rserve-de-nice1.png'
  },
  {
    name: "L'Alchimie",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/nice/nice/lalchimie",
    image: '/images/lalchimie1.png'
  },
  {
    name: "L'Aromate",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/nice/nice/laromate",
    image: '/images/laromate1.png'
  },
  {
    name: "L'Atelier",
    cuisine: "Regional Cuisine",
    price: "€€€",
    path: "/france/nice/nice/latelier",
    image: '/images/latelier1.png'
  },
  {
    name: "Le Bistrot de Jan",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/nice/nice/le-bistrot-de-jan",
    image: '/images/le-bistrot-de-jan1.png'
  },
  {
    name: "Le Bistrot des Docks",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/nice/nice/le-bistrot-des-docks",
    image: '/images/le-bistrot-des-docks1.png'
  },
  {
    name: "Le Canon",
    cuisine: "Modern Cuisine, Country cooking",
    price: "€€",
    path: "/france/nice/nice/le-canon",
    image: '/images/le-canon1.png'
  },
  {
    name: "Le Cèdre",
    cuisine: "Lebanese",
    price: "€€",
    path: "/france/nice/nice/le-cdre",
    image: '/images/le-cdre1.png'
  },
  {
    name: "Le Cèdre",
    cuisine: "Lebanese",
    price: "€€",
    path: "/france/nice/nice/le-cdre",
    image: '/images/le-cdre1.png'
  },
  {
    name: "Le Chantecler",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/nice/nice/le-chantecler",
    image: '/images/le-chantecler1.png'
  },
  {
    name: "Le Séjour Café",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/nice/nice/le-sjour-caf",
    image: '/images/le-sjour-caf1.png'
  },
  {
    name: "Le Socle",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/nice/nice/le-socle",
    image: '/images/le-socle1.png'
  },
  {
    name: "Les Agitateurs",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/nice/nice/les-agitateurs",
    image: '/images/les-agitateurs1.png'
  },
  {
    name: "Les Deux Canailles",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/nice/nice/les-deux-canailles",
    image: '/images/les-deux-canailles1.png'
  },
  {
    name: "MARMAR",
    cuisine: "Mediterranean Cuisine",
    price: "€€",
    path: "/france/nice/nice/marmar",
    image: '/images/marmar1.png'
  },
  {
    name: "Olive & Artichaut",
    cuisine: "Regional Cuisine",
    price: "€€",
    path: "/france/nice/nice/olive-artichaut",
    image: '/images/olive-artichaut1.png'
  },
  {
    name: "ONICE",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/nice/nice/onice",
    image: '/images/onice1.png'
  },
  {
    name: "Peixes Bonaparte",
    cuisine: "Seafood",
    price: "€€",
    path: "/france/nice/nice/peixes-bonaparte",
    image: '/images/peixes-bonaparte1.png'
  },
  {
    name: "Peixes Opéra",
    cuisine: "Seafood, Modern Cuisine",
    price: "€€",
    path: "/france/nice/nice/peixes-opra",
    image: '/images/peixes-opra1.png'
  },
  {
    name: "Épicentre",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/nice/nice/picentre",
    image: '/images/picentre1.png'
  },
  {
    name: "Pirouette",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/nice/nice/pirouette",
    image: '/images/pirouette1.png'
  },
  {
    name: "Pure & V",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/nice/nice/pure-v",
    image: '/images/pure-v1.png'
  },
  {
    name: "Racines - Bruno Cirino",
    cuisine: "Vegetarian, Mediterranean Cuisine",
    price: "€€€",
    path: "/france/nice/nice/racines-bruno-cirino",
    image: '/images/racines-bruno-cirino1.png'
  },
  {
    name: "Rouge",
    cuisine: "Sharing, Modern Cuisine",
    price: "€€",
    path: "/france/nice/nice/rouge",
    image: '/images/rouge1.png'
  },
  {
    name: "Taulissa",
    cuisine: "Mediterranean Cuisine",
    price: "€€€",
    path: "/france/nice/nice/taulissa",
    image: '/images/taulissa1.png'
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
