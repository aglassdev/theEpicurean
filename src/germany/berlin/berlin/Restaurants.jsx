import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Berlin";

const restaurants = [
  {
    name: "136",
    cuisine: "Fusion, Creative",
    price: "€€€€",
    path: "/germany/berlin/berlin/136",
    image: '/images/1361.png'
  },
  {
    name: "893 Ryotei",
    cuisine: "Japanese Contemporary, Creative",
    price: "€€€",
    path: "/germany/berlin/berlin/893-ryotei",
    image: '/images/893-ryotei1.png'
  },
  {
    name: "aerde",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/germany/berlin/berlin/aerde",
    image: '/images/aerde1.png'
  },
  {
    name: "Bandol sur mer",
    cuisine: "Creative, Seasonal Cuisine",
    price: "€€€€",
    path: "/germany/berlin/berlin/bandol-sur-mer",
    image: '/images/bandol-sur-mer1.png'
  },
  {
    name: "Bardele",
    cuisine: "Italian Contemporary",
    price: "€€€",
    path: "/germany/berlin/berlin/bardele",
    image: '/images/bardele1.png'
  },
  {
    name: "Barra",
    cuisine: "Modern Cuisine, Seasonal Cuisine",
    price: "€€",
    path: "/germany/berlin/berlin/barra",
    image: '/images/barra1.png'
  },
  {
    name: "Berta",
    cuisine: "Israeli, Contemporary",
    price: "€€",
    path: "/germany/berlin/berlin/berta",
    image: '/images/berta1.png'
  },
  {
    name: "Bieberbau",
    cuisine: "Modern Cuisine, International",
    price: "€€€",
    path: "/germany/berlin/berlin/bieberbau",
    image: '/images/bieberbau1.png'
  },
  {
    name: "Bob & Thoms",
    cuisine: "Modern French, Creative",
    price: "€€€",
    path: "/germany/berlin/berlin/bob-thoms",
    image: '/images/bob-thoms1.png'
  },
  {
    name: "Bocca di Bacco",
    cuisine: "Italian",
    price: "€€",
    path: "/germany/berlin/berlin/bocca-di-bacco",
    image: '/images/bocca-di-bacco1.png'
  },
  {
    name: "Bonvivant",
    cuisine: "Vegan",
    price: "€€€€",
    path: "/germany/berlin/berlin/bonvivant",
    image: '/images/bonvivant1.png'
  },
  {
    name: "Brasserie Colette Tim Raue",
    cuisine: "French",
    price: "€€",
    path: "/germany/berlin/berlin/brasserie-colette-tim-raue",
    image: '/images/brasserie-colette-tim-raue1.png'
  },
  {
    name: "Brasserie Lamazère",
    cuisine: "French",
    price: "€€",
    path: "/germany/berlin/berlin/brasserie-lamazre",
    image: '/images/brasserie-lamazre1.png'
  },
  {
    name: "Bricole",
    cuisine: "Modern French, Contemporary",
    price: "€€€€",
    path: "/germany/berlin/berlin/bricole",
    image: '/images/bricole1.png'
  },
  {
    name: "BRIKZ",
    cuisine: "Farm to table, Modern Cuisine",
    price: "€€€€",
    path: "/germany/berlin/berlin/brikz",
    image: '/images/brikz1.png'
  },
  {
    name: "CARTE BLANCHE",
    cuisine: "International, French",
    price: "€€€",
    path: "/germany/berlin/berlin/carte-blanche",
    image: '/images/carte-blanche1.png'
  },
  {
    name: "Chicha",
    cuisine: "Peruvian",
    price: "€€",
    path: "/germany/berlin/berlin/chicha",
    image: '/images/chicha1.png'
  },
  {
    name: "Château Royal",
    cuisine: "Mediterranean Cuisine",
    price: "€€€",
    path: "/germany/berlin/berlin/chteau-royal",
    image: '/images/chteau-royal1.png'
  },
  {
    name: "CODA Dessert Dining",
    cuisine: "Creative, Innovative",
    price: "€€€€",
    path: "/germany/berlin/berlin/coda-dessert-dining",
    image: '/images/coda-dessert-dining1.png'
  },
  {
    name: "Cookies Cream",
    cuisine: "Vegetarian",
    price: "€€€€",
    path: "/germany/berlin/berlin/cookies-cream",
    image: '/images/cookies-cream1.png'
  },
  {
    name: "Crackers",
    cuisine: "International",
    price: "€€€",
    path: "/germany/berlin/berlin/crackers",
    image: '/images/crackers1.png'
  },
  {
    name: "Dae Mon",
    cuisine: "Fusion, Asian Influences",
    price: "€€€",
    path: "/germany/berlin/berlin/dae-mon",
    image: '/images/dae-mon1.png'
  },
  {
    name: "Diekmann",
    cuisine: "French, German",
    price: "€€€",
    path: "/germany/berlin/berlin/diekmann",
    image: '/images/diekmann1.png'
  },
  {
    name: "eins44",
    cuisine: "Modern Cuisine, International",
    price: "€€€",
    path: "/germany/berlin/berlin/eins44",
    image: '/images/eins441.png'
  },
  {
    name: "FACIL",
    cuisine: "Creative, Contemporary",
    price: "€€€€",
    path: "/germany/berlin/berlin/facil",
    image: '/images/facil1.png'
  },
  {
    name: "faelt",
    cuisine: "Contemporary, Creative",
    price: "€€€",
    path: "/germany/berlin/berlin/faelt",
    image: '/images/faelt1.png'
  },
  {
    name: "Fa:me",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/germany/berlin/berlin/fame",
    image: '/images/fame1.png'
  },
  {
    name: "FREA",
    cuisine: "Vegan, Modern Cuisine",
    price: "€€€",
    path: "/germany/berlin/berlin/frea",
    image: '/images/frea1.png'
  },
  {
    name: "Funky Fisch",
    cuisine: "Asian and Western, International",
    price: "€€",
    path: "/germany/berlin/berlin/funky-fisch",
    image: '/images/funky-fisch1.png'
  },
  {
    name: "Golden Phoenix",
    cuisine: "Chinese, French",
    price: "€€€",
    path: "/germany/berlin/berlin/golden-phoenix",
    image: '/images/golden-phoenix1.png'
  },
  {
    name: "GOLVET",
    cuisine: "Creative",
    price: "€€€€",
    path: "/germany/berlin/berlin/golvet",
    image: '/images/golvet1.png'
  },
  {
    name: "GRACE",
    cuisine: "International, Modern Cuisine",
    price: "€€€€",
    path: "/germany/berlin/berlin/grace",
    image: '/images/grace1.png'
  },
  {
    name: "hallmann & klee",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/germany/berlin/berlin/hallmann-klee",
    image: '/images/hallmann-klee1.png'
  },
  {
    name: "Horváth",
    cuisine: "Creative",
    price: "€€€€",
    path: "/germany/berlin/berlin/horvth",
    image: '/images/horvth1.png'
  },
  {
    name: "Hugos",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/germany/berlin/berlin/hugos",
    image: '/images/hugos1.png'
  },
  {
    name: "INDIA CLUB",
    cuisine: "Indian",
    price: "€€€",
    path: "/germany/berlin/berlin/india-club",
    image: '/images/india-club1.png'
  },
  {
    name: "Irma la Douce",
    cuisine: "Classic French",
    price: "€€€",
    path: "/germany/berlin/berlin/irma-la-douce",
    image: '/images/irma-la-douce1.png'
  },
  {
    name: "JAJA",
    cuisine: "Contemporary",
    price: "€€",
    path: "/germany/berlin/berlin/jaja",
    image: '/images/jaja1.png'
  },
  {
    name: "Jäger & Lustig",
    cuisine: "German, Seasonal Cuisine",
    price: "€€",
    path: "/germany/berlin/berlin/jger-lustig",
    image: '/images/jger-lustig1.png'
  },
  {
    name: "Julius",
    cuisine: "Creative",
    price: "€€",
    path: "/germany/berlin/berlin/julius",
    image: '/images/julius1.png'
  },
  {
    name: "KINK Bar & Restaurant",
    cuisine: "Creative, Modern Cuisine",
    price: "€€",
    path: "/germany/berlin/berlin/kink-bar-restaurant",
    image: '/images/kink-bar-restaurant1.png'
  },
  {
    name: "Kitchen Library",
    cuisine: "Modern French",
    price: "€€€",
    path: "/germany/berlin/berlin/kitchen-library",
    image: '/images/kitchen-library1.png'
  },
  {
    name: "Kitten Deli",
    cuisine: "North African",
    price: "€€",
    path: "/germany/berlin/berlin/kitten-deli",
    image: '/images/kitten-deli1.png'
  },
  {
    name: "Kurpfalz Weinstuben",
    cuisine: "Regional Cuisine",
    price: "€€",
    path: "/germany/berlin/berlin/kurpfalz-weinstuben",
    image: '/images/kurpfalz-weinstuben1.png'
  },
  {
    name: "Long March Canteen",
    cuisine: "Chinese, Cantonese",
    price: "€€",
    path: "/germany/berlin/berlin/long-march-canteen",
    image: '/images/long-march-canteen1.png'
  },
  {
    name: "Lorenz Adlon Esszimmer",
    cuisine: "Creative",
    price: "€€€€",
    path: "/germany/berlin/berlin/lorenz-adlon-esszimmer",
    image: '/images/lorenz-adlon-esszimmer1.png'
  },
  {
    name: "Loumi",
    cuisine: "International, Asian",
    price: "€€€€",
    path: "/germany/berlin/berlin/loumi",
    image: '/images/loumi1.png'
  },
  {
    name: "Lovis",
    cuisine: "Contemporary, Modern Cuisine",
    price: "€€€",
    path: "/germany/berlin/berlin/lovis",
    image: '/images/lovis1.png'
  },
  {
    name: "Lucky Leek",
    cuisine: "Vegan",
    price: "€€",
    path: "/germany/berlin/berlin/lucky-leek",
    image: '/images/lucky-leek1.png'
  },
  {
    name: "Macionga",
    cuisine: "Seasonal Cuisine, Modern Cuisine",
    price: "€€",
    path: "/germany/berlin/berlin/macionga",
    image: '/images/macionga1.png'
  },
  {
    name: "Madame Ngo - Une Brasserie Hanoi",
    cuisine: "South East Asian, Vietnamese",
    price: "€€",
    path: "/germany/berlin/berlin/madame-ngo-une-brasserie-hanoi",
    image: '/images/madame-ngo-une-brasserie-hanoi1.png'
  },
  {
    name: "MaMi's",
    cuisine: "International, Modern Cuisine",
    price: "€€",
    path: "/germany/berlin/berlin/mamis",
    image: '/images/mamis1.png'
  },
  {
    name: "MASTAN",
    cuisine: "Classic French",
    price: "€€",
    path: "/germany/berlin/berlin/mastan",
    image: '/images/mastan1.png'
  },
  {
    name: "Matthias",
    cuisine: "Modern Cuisine, French",
    price: "€€€",
    path: "/germany/berlin/berlin/matthias",
    image: '/images/matthias1.png'
  },
  {
    name: "merold",
    cuisine: "German, Modern Cuisine",
    price: "€€",
    path: "/germany/berlin/berlin/merold",
    image: '/images/merold1.png'
  },
  {
    name: "Mine",
    cuisine: "Italian, Contemporary",
    price: "€€€",
    path: "/germany/berlin/berlin/mine",
    image: '/images/mine1.png'
  },
  {
    name: "NaNum",
    cuisine: "Korean Contemporary",
    price: "€€€",
    path: "/germany/berlin/berlin/nanum",
    image: '/images/nanum1.png'
  },
  {
    name: "Nobelhart & Schmutzig",
    cuisine: "Creative, Regional Cuisine",
    price: "€€€€",
    path: "/germany/berlin/berlin/nobelhart-schmutzig",
    image: '/images/nobelhart-schmutzig1.png'
  },
  {
    name: "November Brasserie",
    cuisine: "Japanese",
    price: "€€",
    path: "/germany/berlin/berlin/november-brasserie",
    image: '/images/november-brasserie1.png'
  },
  {
    name: "Nußbaumerin",
    cuisine: "Austrian, Traditional Cuisine",
    price: "€€",
    path: "/germany/berlin/berlin/nubaumerin",
    image: '/images/nubaumerin1.png'
  },
  {
    name: "Oh Panama",
    cuisine: "Farm to table",
    price: "€€",
    path: "/germany/berlin/berlin/oh-panama",
    image: '/images/oh-panama1.png'
  },
  {
    name: "Orania.Berlin",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/germany/berlin/berlin/oraniaberlin",
    image: '/images/oraniaberlin1.png'
  },
  {
    name: "OTSUKA",
    cuisine: "Sushi, Japanese",
    price: "€€€",
    path: "/germany/berlin/berlin/otsuka",
    image: '/images/otsuka1.png'
  },
  {
    name: "Otto",
    cuisine: "Seasonal Cuisine, Modern Cuisine",
    price: "€€€",
    path: "/germany/berlin/berlin/otto",
    image: '/images/otto1.png'
  },
  {
    name: "Oukan",
    cuisine: "Vegan, Japanese",
    price: "€€€",
    path: "/germany/berlin/berlin/oukan",
    image: '/images/oukan1.png'
  },
  {
    name: "pars Restaurant",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/germany/berlin/berlin/pars-restaurant",
    image: '/images/pars-restaurant1.png'
  },
  {
    name: "POTS",
    cuisine: "German, Modern Cuisine",
    price: "€€€",
    path: "/germany/berlin/berlin/pots",
    image: '/images/pots1.png'
  },
  {
    name: "prism",
    cuisine: "Israeli, Modern Cuisine",
    price: "€€€€",
    path: "/germany/berlin/berlin/prism",
    image: '/images/prism1.png'
  },
  {
    name: "Remi",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/germany/berlin/berlin/remi",
    image: '/images/remi1.png'
  },
  {
    name: "Restaurant 1687",
    cuisine: "Mediterranean Cuisine",
    price: "€€",
    path: "/germany/berlin/berlin/restaurant-1687",
    image: '/images/restaurant-16871.png'
  },
  {
    name: "Richard Bistro",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/germany/berlin/berlin/richard-bistro",
    image: '/images/richard-bistro1.png'
  },
  {
    name: "Rutz",
    cuisine: "Modern Cuisine, Creative",
    price: "€€€€",
    path: "/germany/berlin/berlin/rutz",
    image: '/images/rutz1.png'
  },
  {
    name: "Rutz - Zollhaus",
    cuisine: "Modern Cuisine, German",
    price: "€€",
    path: "/germany/berlin/berlin/rutz-zollhaus",
    image: '/images/rutz-zollhaus1.png'
  },
  {
    name: "SKYKITCHEN",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/germany/berlin/berlin/skykitchen",
    image: '/images/skykitchen1.png'
  },
  {
    name: "SWAN&SON",
    cuisine: "Fusion, Modern Cuisine",
    price: "€€€",
    path: "/germany/berlin/berlin/swanson",
    image: '/images/swanson1.png'
  },
  {
    name: "Tante Fichte",
    cuisine: "Modern Cuisine, Regional Cuisine",
    price: "€€€",
    path: "/germany/berlin/berlin/tante-fichte",
    image: '/images/tante-fichte1.png'
  },
  {
    name: "The CORD",
    cuisine: "Contemporary",
    price: "€€€",
    path: "/germany/berlin/berlin/the-cord",
    image: '/images/the-cord1.png'
  },
  {
    name: "Tim Raue",
    cuisine: "Asian, German",
    price: "€€€€",
    path: "/germany/berlin/berlin/tim-raue",
    image: '/images/tim-raue1.png'
  },
  {
    name: "TISK",
    cuisine: "Seasonal Cuisine, Modern Cuisine",
    price: "€€",
    path: "/germany/berlin/berlin/tisk",
    image: '/images/tisk1.png'
  },
  {
    name: "tulus lotrek",
    cuisine: "Modern Cuisine, International",
    price: "€€€€",
    path: "/germany/berlin/berlin/tulus-lotrek",
    image: '/images/tulus-lotrek1.png'
  },
  {
    name: "VOX",
    cuisine: "Modern Cuisine, Sushi",
    price: "€€€€",
    path: "/germany/berlin/berlin/vox",
    image: '/images/vox1.png'
  },
  {
    name: "VOX Restaurant",
    cuisine: "Modern Cuisine, Sushi",
    price: "€€€€",
    path: "/germany/berlin/berlin/vox-restaurant",
    image: '/images/vox-restaurant1.png'
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
