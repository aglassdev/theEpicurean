import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Miami";

const restaurants = [
  {
    name: "Ariete",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/miami/ariete",
    image: '/images/ariete1.png'
  },
  {
    name: "Bachour",
    cuisine: "Contemporary, Bakery",
    price: "$$",
    path: "/usa/other/miami/bachour",
    image: '/images/bachour1.png'
  },
  {
    name: "Boia De",
    cuisine: "Contemporary, Italian",
    price: "$$$",
    path: "/usa/other/miami/boia-de",
    image: '/images/boia-de1.png'
  },
  {
    name: "Brasserie Laurel",
    cuisine: "French",
    price: "$$$$",
    path: "/usa/other/miami/brasserie-laurel",
    image: '/images/brasserie-laurel1.png'
  },
  {
    name: "Cafe La Trova",
    cuisine: "Cuban, Latin American",
    price: "$$$",
    path: "/usa/other/miami/cafe-la-trova",
    image: '/images/cafe-la-trova1.png'
  },
  {
    name: "Chug's Diner",
    cuisine: "Cuban",
    price: "$$",
    path: "/usa/other/miami/chugs-diner",
    image: '/images/chugs-diner1.png'
  },
  {
    name: "Cote Miami",
    cuisine: "Korean, Steakhouse",
    price: "$$$",
    path: "/usa/other/miami/cote-miami",
    image: '/images/cote-miami1.png'
  },
  {
    name: "Cotoa",
    cuisine: "Latin American",
    price: "$$",
    path: "/usa/other/miami/cotoa",
    image: '/images/cotoa1.png'
  },
  {
    name: "Doce Provisions",
    cuisine: "Cuban",
    price: "$$",
    path: "/usa/other/miami/doce-provisions",
    image: '/images/doce-provisions1.png'
  },
  {
    name: "El Turco",
    cuisine: "Mediterranean Cuisine",
    price: "$$",
    path: "/usa/other/miami/el-turco",
    image: '/images/el-turco1.png'
  },
  {
    name: "Elcielo Miami",
    cuisine: "Colombian, Latin American",
    price: "$$$$",
    path: "/usa/other/miami/elcielo-miami",
    image: '/images/elcielo-miami1.png'
  },
  {
    name: "EntreNos",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/miami/entrenos",
    image: '/images/entrenos1.png'
  },
  {
    name: "Ghee Indian Kitchen",
    cuisine: "Indian",
    price: "$$",
    path: "/usa/other/miami/ghee-indian-kitchen",
    image: '/images/ghee-indian-kitchen1.png'
  },
  {
    name: "Grand Central",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/usa/other/miami/grand-central",
    image: '/images/grand-central1.png'
  },
  {
    name: "Hiden",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/miami/hiden",
    image: '/images/hiden1.png'
  },
  {
    name: "Hiyakawa Miami",
    cuisine: "Japanese, Sushi",
    price: "$$$",
    path: "/usa/other/miami/hiyakawa-miami",
    image: '/images/hiyakawa-miami1.png'
  },
  {
    name: "Hometown Barbecue Miami",
    cuisine: "Barbecue",
    price: "$$",
    path: "/usa/other/miami/hometown-barbecue-miami",
    image: '/images/hometown-barbecue-miami1.png'
  },
  {
    name: "Itamae Ao",
    cuisine: "Peruvian, Japanese",
    price: "$$$$",
    path: "/usa/other/miami/itamae-ao",
    image: '/images/itamae-ao1.png'
  },
  {
    name: "Kaori",
    cuisine: "Asian, Japanese",
    price: "$$$",
    path: "/usa/other/miami/kaori",
    image: '/images/kaori1.png'
  },
  {
    name: "Krüs Kitchen",
    cuisine: "Contemporary, Deli",
    price: "$$$",
    path: "/usa/other/miami/krs-kitchen",
    image: '/images/krs-kitchen1.png'
  },
  {
    name: "La Natural",
    cuisine: "Pizza",
    price: "$$",
    path: "/usa/other/miami/la-natural",
    image: '/images/la-natural1.png'
  },
  {
    name: "L'Atelier de Joël Robuchon Miami",
    cuisine: "French, Contemporary",
    price: "$$$$",
    path: "/usa/other/miami/latelier-de-jol-robuchon-miami",
    image: '/images/latelier-de-jol-robuchon-miami1.png'
  },
  {
    name: "Le Jardinier Miami",
    cuisine: "French, Contemporary",
    price: "$$$$",
    path: "/usa/other/miami/le-jardinier-miami",
    image: '/images/le-jardinier-miami1.png'
  },
  {
    name: "Los Félix",
    cuisine: "Mexican, Regional Cuisine",
    price: "$$$",
    path: "/usa/other/miami/los-flix",
    image: '/images/los-flix1.png'
  },
  {
    name: "Lung Yai Thai Tapas",
    cuisine: "Thai",
    price: "$$",
    path: "/usa/other/miami/lung-yai-thai-tapas",
    image: '/images/lung-yai-thai-tapas1.png'
  },
  {
    name: "Mandolin Aegean Bistro",
    cuisine: "Mediterranean Cuisine, Turkish",
    price: "$$",
    path: "/usa/other/miami/mandolin-aegean-bistro",
    image: '/images/mandolin-aegean-bistro1.png'
  },
  {
    name: "Maty's",
    cuisine: "Peruvian, Seafood",
    price: "$$$",
    path: "/usa/other/miami/matys",
    image: '/images/matys1.png'
  },
  {
    name: "Michael's Genuine",
    cuisine: "Contemporary, American",
    price: "$$$",
    path: "/usa/other/miami/michaels-genuine",
    image: '/images/michaels-genuine1.png'
  },
  {
    name: "Mignonette",
    cuisine: "Seafood",
    price: "$$$",
    path: "/usa/other/miami/mignonette",
    image: '/images/mignonette1.png'
  },
  {
    name: "Mignonette",
    cuisine: "Seafood",
    price: "$$$",
    path: "/usa/other/miami/mignonette",
    image: '/images/mignonette1.png'
  },
  {
    name: "Niu Kitchen",
    cuisine: "Spanish",
    price: "$$$",
    path: "/usa/other/miami/niu-kitchen",
    image: '/images/niu-kitchen1.png'
  },
  {
    name: "Ogawa",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/miami/ogawa",
    image: '/images/ogawa1.png'
  },
  {
    name: "Ossobuco",
    cuisine: "Contemporary, Steakhouse",
    price: "$$$",
    path: "/usa/other/miami/ossobuco",
    image: '/images/ossobuco1.png'
  },
  {
    name: "Palma",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/miami/palma",
    image: '/images/palma1.png'
  },
  {
    name: "Phuc Yea",
    cuisine: "Vietnamese",
    price: "$$",
    path: "/usa/other/miami/phuc-yea",
    image: '/images/phuc-yea1.png'
  },
  {
    name: "Recoveco",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/miami/recoveco",
    image: '/images/recoveco1.png'
  },
  {
    name: "Sanguich De Miami",
    cuisine: "Cuban",
    price: "$$",
    path: "/usa/other/miami/sanguich-de-miami",
    image: '/images/sanguich-de-miami1.png'
  },
  {
    name: "Sunny’s Steakhouse",
    cuisine: "Steakhouse",
    price: "$$$$",
    path: "/usa/other/miami/sunnys-steakhouse",
    image: '/images/sunnys-steakhouse1.png'
  },
  {
    name: "Sushi Yasu Tanaka",
    cuisine: "Japanese, Sushi",
    price: "$$",
    path: "/usa/other/miami/sushi-yasu-tanaka",
    image: '/images/sushi-yasu-tanaka1.png'
  },
  {
    name: "Tam Tam",
    cuisine: "Vietnamese",
    price: "$$",
    path: "/usa/other/miami/tam-tam",
    image: '/images/tam-tam1.png'
  },
  {
    name: "The Gibson Room",
    cuisine: "American",
    price: "$$$",
    path: "/usa/other/miami/the-gibson-room",
    image: '/images/the-gibson-room1.png'
  },
  {
    name: "Torno Subito",
    cuisine: "Italian, Contemporary",
    price: "$$$$",
    path: "/usa/other/miami/torno-subito",
    image: '/images/torno-subito1.png'
  },
  {
    name: "Torno Subito Miami",
    cuisine: "Italian, Contemporary",
    price: "$$$$",
    path: "/usa/other/miami/torno-subito-miami",
    image: '/images/torno-subito-miami1.png'
  },
  {
    name: "ViceVersa",
    cuisine: "Pizza",
    price: "$$$",
    path: "/usa/other/miami/viceversa",
    image: '/images/viceversa1.png'
  },
  {
    name: "Walrus Rodeo",
    cuisine: "American, Italian",
    price: "$$$",
    path: "/usa/other/miami/walrus-rodeo",
    image: '/images/walrus-rodeo1.png'
  },
  {
    name: "Zak The Baker",
    cuisine: "Bakery, American",
    price: "$",
    path: "/usa/other/miami/zak-the-baker",
    image: '/images/zak-the-baker1.png'
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
