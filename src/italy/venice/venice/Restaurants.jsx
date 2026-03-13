import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Venice";

const restaurants = [
  {
    name: "Agli Amici Dopolavoro",
    cuisine: "Creative, Contemporary",
    price: "€€€€",
    path: "/italy/venice/venice/agli-amici-dopolavoro",
    image: '/images/agli-amici-dopolavoro1.png'
  },
  {
    name: "Ai Gondolieri",
    cuisine: "Venetian, Traditional Cuisine",
    price: "€€€",
    path: "/italy/venice/venice/ai-gondolieri",
    image: '/images/ai-gondolieri1.png'
  },
  {
    name: "Ai Mercanti",
    cuisine: "Modern Cuisine, Contemporary",
    price: "€€",
    path: "/italy/venice/venice/ai-mercanti",
    image: '/images/ai-mercanti1.png'
  },
  {
    name: "Al Covo",
    cuisine: "Venetian, Seafood",
    price: "€€€",
    path: "/italy/venice/venice/al-covo",
    image: '/images/al-covo1.png'
  },
  {
    name: "Alessandro Borghese",
    cuisine: "Venetian, Modern Cuisine",
    price: "€€€€",
    path: "/italy/venice/venice/alessandro-borghese",
    image: '/images/alessandro-borghese1.png'
  },
  {
    name: "Alle Corone",
    cuisine: "Modern Cuisine, Traditional Cuisine",
    price: "€€€",
    path: "/italy/venice/venice/alle-corone",
    image: '/images/alle-corone1.png'
  },
  {
    name: "Antiche Carampane",
    cuisine: "Venetian, Seafood",
    price: "€€€",
    path: "/italy/venice/venice/antiche-carampane",
    image: '/images/antiche-carampane1.png'
  },
  {
    name: "Arva",
    cuisine: "Modern Cuisine, Contemporary",
    price: "€€€€",
    path: "/italy/venice/venice/arva",
    image: '/images/arva1.png'
  },
  {
    name: "Bistrot de Venise",
    cuisine: "Venetian, Traditional Cuisine",
    price: "€€€€",
    path: "/italy/venice/venice/bistrot-de-venise",
    image: '/images/bistrot-de-venise1.png'
  },
  {
    name: "Canova Restaurant",
    cuisine: "Contemporary",
    price: "€€€€",
    path: "/italy/venice/venice/canova-restaurant",
    image: '/images/canova-restaurant1.png'
  },
  {
    name: "Chat Qui Rit",
    cuisine: "Contemporary, Fusion",
    price: "€€€€",
    path: "/italy/venice/venice/chat-qui-rit",
    image: '/images/chat-qui-rit1.png'
  },
  {
    name: "Cip's Club",
    cuisine: "Classic Cuisine, Traditional Cuisine",
    price: "€€€€",
    path: "/italy/venice/venice/cips-club",
    image: '/images/cips-club1.png'
  },
  {
    name: "Corte Sconta",
    cuisine: "Seafood, Venetian",
    price: "€€€",
    path: "/italy/venice/venice/corte-sconta",
    image: '/images/corte-sconta1.png'
  },
  {
    name: "Da Lorenzo – Al Giardino Segreto",
    cuisine: "Creative, Fusion",
    price: "€€€€",
    path: "/italy/venice/venice/da-lorenzo-al-giardino-segreto",
    image: '/images/da-lorenzo-al-giardino-segreto1.png'
  },
  {
    name: "Dama Restaurant",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€",
    path: "/italy/venice/venice/dama-restaurant",
    image: '/images/dama-restaurant1.png'
  },
  {
    name: "Estro Vino e Cucina",
    cuisine: "Modern Cuisine, Mediterranean Cuisine",
    price: "€€",
    path: "/italy/venice/venice/estro-vino-e-cucina",
    image: '/images/estro-vino-e-cucina1.png'
  },
  {
    name: "Glam Enrico Bartolini",
    cuisine: "Creative, Contemporary",
    price: "€€€€",
    path: "/italy/venice/venice/glam-enrico-bartolini",
    image: '/images/glam-enrico-bartolini1.png'
  },
  {
    name: "Hostaria da Franz",
    cuisine: "Seafood, Modern Cuisine",
    price: "€€€",
    path: "/italy/venice/venice/hostaria-da-franz",
    image: '/images/hostaria-da-franz1.png'
  },
  {
    name: "Il Ridotto",
    cuisine: "Contemporary, Meats and Seafood",
    price: "€€€",
    path: "/italy/venice/venice/il-ridotto",
    image: '/images/il-ridotto1.png'
  },
  {
    name: "Lineadombra",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/italy/venice/venice/lineadombra",
    image: '/images/lineadombra1.png'
  },
  {
    name: "Local",
    cuisine: "Contemporary",
    price: "€€€€",
    path: "/italy/venice/venice/local",
    image: '/images/local1.png'
  },
  {
    name: "L'Osteria di Santa Marina",
    cuisine: "Country cooking, Modern Cuisine",
    price: "€€€",
    path: "/italy/venice/venice/losteria-di-santa-marina",
    image: '/images/losteria-di-santa-marina1.png'
  },
  {
    name: "LPV Ristorante & Bistrot",
    cuisine: "Classic Cuisine",
    price: "€€€",
    path: "/italy/venice/venice/lpv-ristorante-bistrot",
    image: '/images/lpv-ristorante-bistrot1.png'
  },
  {
    name: "Oro Restaurant",
    cuisine: "Italian Contemporary, Creative",
    price: "€€€€",
    path: "/italy/venice/venice/oro-restaurant",
    image: '/images/oro-restaurant1.png'
  },
  {
    name: "Osteria alle Testiere",
    cuisine: "Venetian, Modern Cuisine",
    price: "€€€",
    path: "/italy/venice/venice/osteria-alle-testiere",
    image: '/images/osteria-alle-testiere1.png'
  },
  {
    name: "Osteria da Fiore",
    cuisine: "Venetian, Traditional Cuisine",
    price: "€€€€",
    path: "/italy/venice/venice/osteria-da-fiore",
    image: '/images/osteria-da-fiore1.png'
  },
  {
    name: "Osteria Giorgione da Masa",
    cuisine: "Fusion, Venetian",
    price: "€€",
    path: "/italy/venice/venice/osteria-giorgione-da-masa",
    image: '/images/osteria-giorgione-da-masa1.png'
  },
  {
    name: "Palais Royal Restaurant",
    cuisine: "Creative, Mediterranean Cuisine",
    price: "€€€€",
    path: "/italy/venice/venice/palais-royal-restaurant",
    image: '/images/palais-royal-restaurant1.png'
  },
  {
    name: "Quadri",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/italy/venice/venice/quadri",
    image: '/images/quadri1.png'
  },
  {
    name: "Terrazza Danieli",
    cuisine: "Mediterranean Cuisine",
    price: "€€€€",
    path: "/italy/venice/venice/terrazza-danieli",
    image: '/images/terrazza-danieli1.png'
  },
  {
    name: "Trattoria Al Passo",
    cuisine: "Seafood",
    price: "€€€",
    path: "/italy/venice/venice/trattoria-al-passo",
    image: '/images/trattoria-al-passo1.png'
  },
  {
    name: "VeRo - Venetian Roots",
    cuisine: "Modern Cuisine, Creative",
    price: "€€€€",
    path: "/italy/venice/venice/vero-venetian-roots",
    image: '/images/vero-venetian-roots1.png'
  },
  {
    name: "Vini da Gigio",
    cuisine: "Venetian, Traditional Cuisine",
    price: "€€",
    path: "/italy/venice/venice/vini-da-gigio",
    image: '/images/vini-da-gigio1.png'
  },
  {
    name: "Wistèria",
    cuisine: "Venetian, Modern Cuisine",
    price: "€€€€",
    path: "/italy/venice/venice/wistria",
    image: '/images/wistria1.png'
  },
  {
    name: "Zanze XVI",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€€",
    path: "/italy/venice/venice/zanze-xvi",
    image: '/images/zanze-xvi1.png'
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
