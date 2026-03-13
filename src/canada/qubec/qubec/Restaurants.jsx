import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Qubec";

const restaurants = [
  {
    name: "Alentours",
    cuisine: "Modern Cuisine, Creative",
    price: "$$$$",
    path: "/canada/qubec/qubec/alentours",
    image: '/images/alentours1.png'
  },
  {
    name: "Ambre.",
    cuisine: "Modern Cuisine",
    price: "$$$",
    path: "/canada/qubec/qubec/ambre",
    image: '/images/ambre1.png'
  },
  {
    name: "Ambre Buvette",
    cuisine: "Modern Cuisine",
    price: "$$$",
    path: "/canada/qubec/qubec/ambre-buvette",
    image: '/images/ambre-buvette1.png'
  },
  {
    name: "ARVI",
    cuisine: "Modern Cuisine, Creative",
    price: "$$$$",
    path: "/canada/qubec/qubec/arvi",
    image: '/images/arvi1.png'
  },
  {
    name: "Battuto",
    cuisine: "Italian",
    price: "$$",
    path: "/canada/qubec/qubec/battuto",
    image: '/images/battuto1.png'
  },
  {
    name: "Bistro B",
    cuisine: "French",
    price: "$$",
    path: "/canada/qubec/qubec/bistro-b",
    image: '/images/bistro-b1.png'
  },
  {
    name: "Buvette Scott",
    cuisine: "Regional Cuisine, Modern Cuisine",
    price: "$$",
    path: "/canada/qubec/qubec/buvette-scott",
    image: '/images/buvette-scott1.png'
  },
  {
    name: "Champlain",
    cuisine: "Modern Cuisine",
    price: "$$$$",
    path: "/canada/qubec/qubec/champlain",
    image: '/images/champlain1.png'
  },
  {
    name: "Échaudé",
    cuisine: "French",
    price: "$$",
    path: "/canada/qubec/qubec/chaud",
    image: '/images/chaud1.png'
  },
  {
    name: "Chez Boulay - Bistro Boréal",
    cuisine: "Modern Cuisine",
    price: "$$",
    path: "/canada/qubec/qubec/chez-boulay-bistro-boral",
    image: '/images/chez-boulay-bistro-boral1.png'
  },
  {
    name: "Chez Muffy",
    cuisine: "Modern Cuisine",
    price: "$$$$",
    path: "/canada/qubec/qubec/chez-muffy",
    image: '/images/chez-muffy1.png'
  },
  {
    name: "Chez Rioux & Pettigrew",
    cuisine: "Traditional Cuisine",
    price: "$$$",
    path: "/canada/qubec/qubec/chez-rioux-pettigrew",
    image: '/images/chez-rioux-pettigrew1.png'
  },
  {
    name: "Coteau",
    cuisine: "Modern Cuisine",
    price: "$$$$",
    path: "/canada/qubec/qubec/coteau",
    image: '/images/coteau1.png'
  },
  {
    name: "Honō Izakaya",
    cuisine: "Japanese, Izakaya",
    price: "$$",
    path: "/canada/qubec/qubec/hon-izakaya",
    image: '/images/hon-izakaya1.png'
  },
  {
    name: "Kebec Club Privé",
    cuisine: "Creative",
    price: "$$$$",
    path: "/canada/qubec/qubec/kebec-club-priv",
    image: '/images/kebec-club-priv1.png'
  },
  {
    name: "Kundah Hôtel",
    cuisine: "Indian",
    price: "$$",
    path: "/canada/qubec/qubec/kundah-htel",
    image: '/images/kundah-htel1.png'
  },
  {
    name: "La Bête",
    cuisine: "Steakhouse",
    price: "$$$",
    path: "/canada/qubec/qubec/la-bte",
    image: '/images/la-bte1.png'
  },
  {
    name: "La Planque",
    cuisine: "Modern Cuisine",
    price: "$$",
    path: "/canada/qubec/qubec/la-planque",
    image: '/images/la-planque1.png'
  },
  {
    name: "Laurie Raphaël",
    cuisine: "Modern Cuisine, Creative",
    price: "$$$$",
    path: "/canada/qubec/qubec/laurie-raphal",
    image: '/images/laurie-raphal1.png'
  },
  {
    name: "Le Clan",
    cuisine: "Regional Cuisine",
    price: "$$$",
    path: "/canada/qubec/qubec/le-clan",
    image: '/images/le-clan1.png'
  },
  {
    name: "Le Clocher Penché",
    cuisine: "Regional Cuisine, Traditional Cuisine",
    price: "$$$",
    path: "/canada/qubec/qubec/le-clocher-pench",
    image: '/images/le-clocher-pench1.png'
  },
  {
    name: "Le Hobbit",
    cuisine: "Traditional Cuisine",
    price: "$$",
    path: "/canada/qubec/qubec/le-hobbit",
    image: '/images/le-hobbit1.png'
  },
  {
    name: "Le Parlementaire",
    cuisine: "Modern Cuisine",
    price: "$$",
    path: "/canada/qubec/qubec/le-parlementaire",
    image: '/images/le-parlementaire1.png'
  },
  {
    name: "Légende",
    cuisine: "Creative, Regional Cuisine",
    price: "$$$$",
    path: "/canada/qubec/qubec/lgende",
    image: '/images/lgende1.png'
  },
  {
    name: "L'Orygine",
    cuisine: "Creative",
    price: "$$$$",
    path: "/canada/qubec/qubec/lorygine",
    image: '/images/lorygine1.png'
  },
  {
    name: "lueur",
    cuisine: "Modern Cuisine",
    price: "$$",
    path: "/canada/qubec/qubec/lueur",
    image: '/images/lueur1.png'
  },
  {
    name: "Melba",
    cuisine: "Modern Cuisine, French",
    price: "$$",
    path: "/canada/qubec/qubec/melba",
    image: '/images/melba1.png'
  },
  {
    name: "Ouroboros",
    cuisine: "Modern Cuisine",
    price: "$$",
    path: "/canada/qubec/qubec/ouroboros",
    image: '/images/ouroboros1.png'
  },
  {
    name: "Alentours",
    cuisine: "Modern Cuisine, Creative",
    price: "$$$$",
    path: "/canada/qubec/qubec/alentours",
    image: '/images/alentours1.png'
  },
  {
    name: "Ambre Buvette",
    cuisine: "Modern Cuisine",
    price: "$$$",
    path: "/canada/qubec/qubec/ambre-buvette",
    image: '/images/ambre-buvette1.png'
  },
  {
    name: "ARVI",
    cuisine: "Modern Cuisine, Creative",
    price: "$$$$",
    path: "/canada/qubec/qubec/arvi",
    image: '/images/arvi1.png'
  },
  {
    name: "Battuto",
    cuisine: "Italian",
    price: "$$",
    path: "/canada/qubec/qubec/battuto",
    image: '/images/battuto1.png'
  },
  {
    name: "Bistro B",
    cuisine: "French",
    price: "$$",
    path: "/canada/qubec/qubec/bistro-b",
    image: '/images/bistro-b1.png'
  },
  {
    name: "Buvette Scott",
    cuisine: "Regional Cuisine, Modern Cuisine",
    price: "$$",
    path: "/canada/qubec/qubec/buvette-scott",
    image: '/images/buvette-scott1.png'
  },
  {
    name: "Champlain",
    cuisine: "Modern Cuisine",
    price: "$$$$",
    path: "/canada/qubec/qubec/champlain",
    image: '/images/champlain1.png'
  },
  {
    name: "Échaudé",
    cuisine: "French",
    price: "$$",
    path: "/canada/qubec/qubec/chaud",
    image: '/images/chaud1.png'
  },
  {
    name: "Chez Boulay - Bistro Boréal",
    cuisine: "Modern Cuisine",
    price: "$$",
    path: "/canada/qubec/qubec/chez-boulay-bistro-boral",
    image: '/images/chez-boulay-bistro-boral1.png'
  },
  {
    name: "Chez Muffy",
    cuisine: "Modern Cuisine",
    price: "$$$$",
    path: "/canada/qubec/qubec/chez-muffy",
    image: '/images/chez-muffy1.png'
  },
  {
    name: "Chez Rioux & Pettigrew",
    cuisine: "Traditional Cuisine",
    price: "$$$",
    path: "/canada/qubec/qubec/chez-rioux-pettigrew",
    image: '/images/chez-rioux-pettigrew1.png'
  },
  {
    name: "Honō Izakaya",
    cuisine: "Japanese, Izakaya",
    price: "$$",
    path: "/canada/qubec/qubec/hon-izakaya",
    image: '/images/hon-izakaya1.png'
  },
  {
    name: "Kebec Club Privé",
    cuisine: "Creative",
    price: "$$$$",
    path: "/canada/qubec/qubec/kebec-club-priv",
    image: '/images/kebec-club-priv1.png'
  },
  {
    name: "Kundah Hôtel",
    cuisine: "Indian",
    price: "$$",
    path: "/canada/qubec/qubec/kundah-htel",
    image: '/images/kundah-htel1.png'
  },
  {
    name: "La Bête",
    cuisine: "Steakhouse",
    price: "$$$",
    path: "/canada/qubec/qubec/la-bte",
    image: '/images/la-bte1.png'
  },
  {
    name: "La Planque",
    cuisine: "Modern Cuisine",
    price: "$$",
    path: "/canada/qubec/qubec/la-planque",
    image: '/images/la-planque1.png'
  },
  {
    name: "Laurie Raphaël",
    cuisine: "Modern Cuisine, Creative",
    price: "$$$$",
    path: "/canada/qubec/qubec/laurie-raphal",
    image: '/images/laurie-raphal1.png'
  },
  {
    name: "Le Clan",
    cuisine: "Regional Cuisine",
    price: "$$$",
    path: "/canada/qubec/qubec/le-clan",
    image: '/images/le-clan1.png'
  },
  {
    name: "Le Clocher Penché",
    cuisine: "Regional Cuisine, Traditional Cuisine",
    price: "$$$",
    path: "/canada/qubec/qubec/le-clocher-pench",
    image: '/images/le-clocher-pench1.png'
  },
  {
    name: "Le Hobbit",
    cuisine: "Traditional Cuisine",
    price: "$$",
    path: "/canada/qubec/qubec/le-hobbit",
    image: '/images/le-hobbit1.png'
  },
  {
    name: "Le Parlementaire",
    cuisine: "Modern Cuisine",
    price: "$$",
    path: "/canada/qubec/qubec/le-parlementaire",
    image: '/images/le-parlementaire1.png'
  },
  {
    name: "Légende",
    cuisine: "Creative, Regional Cuisine",
    price: "$$$$",
    path: "/canada/qubec/qubec/lgende",
    image: '/images/lgende1.png'
  },
  {
    name: "L'Orygine",
    cuisine: "Creative",
    price: "$$$$",
    path: "/canada/qubec/qubec/lorygine",
    image: '/images/lorygine1.png'
  },
  {
    name: "lueur",
    cuisine: "Modern Cuisine",
    price: "$$",
    path: "/canada/qubec/qubec/lueur",
    image: '/images/lueur1.png'
  },
  {
    name: "Melba",
    cuisine: "Modern Cuisine, French",
    price: "$$",
    path: "/canada/qubec/qubec/melba",
    image: '/images/melba1.png'
  },
  {
    name: "Ouroboros",
    cuisine: "Modern Cuisine",
    price: "$$",
    path: "/canada/qubec/qubec/ouroboros",
    image: '/images/ouroboros1.png'
  },
  {
    name: "Tanière³",
    cuisine: "Creative",
    price: "$$$$",
    path: "/canada/qubec/qubec/tanire",
    image: '/images/tanire1.png'
  },
  {
    name: "Torii Izakaya",
    cuisine: "Japanese, Izakaya",
    price: "$$",
    path: "/canada/qubec/qubec/torii-izakaya",
    image: '/images/torii-izakaya1.png'
  },
  {
    name: "Tanière³",
    cuisine: "Creative",
    price: "$$$$",
    path: "/canada/qubec/qubec/tanire",
    image: '/images/tanire1.png'
  },
  {
    name: "Torii - Buvette japonaise",
    cuisine: "Japanese, Izakaya",
    price: "$$",
    path: "/canada/qubec/qubec/torii-buvette-japonaise",
    image: '/images/torii-buvette-japonaise1.png'
  },
  {
    name: "Torii Izakaya",
    cuisine: "Japanese, Izakaya",
    price: "$$",
    path: "/canada/qubec/qubec/torii-izakaya",
    image: '/images/torii-izakaya1.png'
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
