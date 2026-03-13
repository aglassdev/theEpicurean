import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Munich";

const restaurants = [
  {
    name: "1804 Hirschau",
    cuisine: "Modern Cuisine, Seasonal Cuisine",
    price: "€€€€",
    path: "/germany/munich/munich/1804-hirschau",
    image: '/images/1804-hirschau1.png'
  },
  {
    name: "Acetaia",
    cuisine: "Italian",
    price: "€€€",
    path: "/germany/munich/munich/acetaia",
    image: '/images/acetaia1.png'
  },
  {
    name: "AIMY",
    cuisine: "Thai",
    price: "€€€",
    path: "/germany/munich/munich/aimy",
    image: '/images/aimy1.png'
  },
  {
    name: "Alois - Dallmayr Fine Dining",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€€",
    path: "/germany/munich/munich/alois-dallmayr-fine-dining",
    image: '/images/alois-dallmayr-fine-dining1.png'
  },
  {
    name: "Asam Schlössl",
    cuisine: "Bavarian, International",
    price: "€€€",
    path: "/germany/munich/munich/asam-schlssl",
    image: '/images/asam-schlssl1.png'
  },
  {
    name: "Atelier",
    cuisine: "Creative French, Seasonal Cuisine",
    price: "€€€€",
    path: "/germany/munich/munich/atelier",
    image: '/images/atelier1.png'
  },
  {
    name: "Atelier Gourmet",
    cuisine: "Classic French",
    price: "€€€",
    path: "/germany/munich/munich/atelier-gourmet",
    image: '/images/atelier-gourmet1.png'
  },
  {
    name: "Atlantik",
    cuisine: "Seafood, Contemporary",
    price: "€€€€",
    path: "/germany/munich/munich/atlantik",
    image: '/images/atlantik1.png'
  },
  {
    name: "Bar Mural",
    cuisine: "Contemporary, International",
    price: "€€",
    path: "/germany/munich/munich/bar-mural",
    image: '/images/bar-mural1.png'
  },
  {
    name: "BAR TATAR in der Schreiberei",
    cuisine: "International",
    price: "€€€",
    path: "/germany/munich/munich/bar-tatar-in-der-schreiberei",
    image: '/images/bar-tatar-in-der-schreiberei1.png'
  },
  {
    name: "Bavarie",
    cuisine: "Farm to table, French",
    price: "€€",
    path: "/germany/munich/munich/bavarie",
    image: '/images/bavarie1.png'
  },
  {
    name: "Beetle",
    cuisine: "Seasonal Cuisine, Regional Cuisine",
    price: "€€",
    path: "/germany/munich/munich/beetle",
    image: '/images/beetle1.png'
  },
  {
    name: "Blauer Bock",
    cuisine: "Classic Cuisine",
    price: "€€€",
    path: "/germany/munich/munich/blauer-bock",
    image: '/images/blauer-bock1.png'
  },
  {
    name: "Brasserie Colette Tim Raue",
    cuisine: "French, Classic Cuisine",
    price: "€€€",
    path: "/germany/munich/munich/brasserie-colette-tim-raue",
    image: '/images/brasserie-colette-tim-raue1.png'
  },
  {
    name: "Brasserie Cuvilliés",
    cuisine: "Alpine, International",
    price: "€€€",
    path: "/germany/munich/munich/brasserie-cuvillis",
    image: '/images/brasserie-cuvillis1.png'
  },
  {
    name: "Brasserie Les Deux",
    cuisine: "International, Contemporary",
    price: "€€€",
    path: "/germany/munich/munich/brasserie-les-deux",
    image: '/images/brasserie-les-deux1.png'
  },
  {
    name: "Broeding",
    cuisine: "Classic Cuisine",
    price: "€€€",
    path: "/germany/munich/munich/broeding",
    image: '/images/broeding1.png'
  },
  {
    name: "Brothers",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/germany/munich/munich/brothers",
    image: '/images/brothers1.png'
  },
  {
    name: "buffet Kull bar",
    cuisine: "International, Steakhouse",
    price: "€€€",
    path: "/germany/munich/munich/buffet-kull-bar",
    image: '/images/buffet-kull-bar1.png'
  },
  {
    name: "Chang Bistro",
    cuisine: "Asian",
    price: "€€",
    path: "/germany/munich/munich/chang-bistro",
    image: '/images/chang-bistro1.png'
  },
  {
    name: "Dallmayr Bar & Grill",
    cuisine: "Farm to table, International",
    price: "€€€",
    path: "/germany/munich/munich/dallmayr-bar-grill",
    image: '/images/dallmayr-bar-grill1.png'
  },
  {
    name: "Das Obers",
    cuisine: "South Tyrolean",
    price: "€€",
    path: "/germany/munich/munich/das-obers",
    image: '/images/das-obers1.png'
  },
  {
    name: "Das Tschecherl",
    cuisine: "Austrian",
    price: "€€",
    path: "/germany/munich/munich/das-tschecherl",
    image: '/images/das-tschecherl1.png'
  },
  {
    name: "Der Dantler",
    cuisine: "Modern Cuisine, Country cooking",
    price: "€€€",
    path: "/germany/munich/munich/der-dantler",
    image: '/images/der-dantler1.png'
  },
  {
    name: "ESSENCE",
    cuisine: "Classic Cuisine, Contemporary",
    price: "€€€",
    path: "/germany/munich/munich/essence",
    image: '/images/essence1.png'
  },
  {
    name: "Freisinger Hof",
    cuisine: "Traditional Cuisine, International",
    price: "€€",
    path: "/germany/munich/munich/freisinger-hof",
    image: '/images/freisinger-hof1.png'
  },
  {
    name: "Gabelspiel",
    cuisine: "Modern Cuisine, Farm to table",
    price: "€€€€",
    path: "/germany/munich/munich/gabelspiel",
    image: '/images/gabelspiel1.png'
  },
  {
    name: "Galleria",
    cuisine: "Italian, Mediterranean Cuisine",
    price: "€€€",
    path: "/germany/munich/munich/galleria",
    image: '/images/galleria1.png'
  },
  {
    name: "Garden-Restaurant",
    cuisine: "Contemporary, International",
    price: "€€€",
    path: "/germany/munich/munich/garden-restaurant",
    image: '/images/garden-restaurant1.png'
  },
  {
    name: "Gasthaus Waltz",
    cuisine: "Alpine, Regional Cuisine",
    price: "€€",
    path: "/germany/munich/munich/gasthaus-waltz",
    image: '/images/gasthaus-waltz1.png'
  },
  {
    name: "GRETA OTO Munich",
    cuisine: "Latin American, International",
    price: "€€€",
    path: "/germany/munich/munich/greta-oto-munich",
    image: '/images/greta-oto-munich1.png'
  },
  {
    name: "Hippocampus",
    cuisine: "Italian",
    price: "€€€",
    path: "/germany/munich/munich/hippocampus",
    image: '/images/hippocampus1.png'
  },
  {
    name: "Huber",
    cuisine: "Contemporary",
    price: "€€€",
    path: "/germany/munich/munich/huber",
    image: '/images/huber1.png'
  },
  {
    name: "Il Borgo",
    cuisine: "Italian",
    price: "€€€",
    path: "/germany/munich/munich/il-borgo",
    image: '/images/il-borgo1.png'
  },
  {
    name: "IL Sommelier",
    cuisine: "Italian",
    price: "€€€",
    path: "/germany/munich/munich/il-sommelier",
    image: '/images/il-sommelier1.png'
  },
  {
    name: "JAN",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€€",
    path: "/germany/munich/munich/jan",
    image: '/images/jan1.png'
  },
  {
    name: "JAPATAPA TOSHIBAR",
    cuisine: "Japanese",
    price: "€€€",
    path: "/germany/munich/munich/japatapa-toshibar",
    image: '/images/japatapa-toshibar1.png'
  },
  {
    name: "Jin",
    cuisine: "Asian, Chinese",
    price: "€€€",
    path: "/germany/munich/munich/jin",
    image: '/images/jin1.png'
  },
  {
    name: "Johannas",
    cuisine: "Seasonal Cuisine, Farm to table",
    price: "€€€",
    path: "/germany/munich/munich/johannas",
    image: '/images/johannas1.png'
  },
  {
    name: "Käfer-Schänke",
    cuisine: "Seasonal Cuisine",
    price: "€€€",
    path: "/germany/munich/munich/kfer-schnke",
    image: '/images/kfer-schnke1.png'
  },
  {
    name: "KOI",
    cuisine: "Japanese Contemporary, Fusion",
    price: "€€€",
    path: "/germany/munich/munich/koi",
    image: '/images/koi1.png'
  },
  {
    name: "KOMU",
    cuisine: "Classic Cuisine, Modern Cuisine",
    price: "€€€€",
    path: "/germany/munich/munich/komu",
    image: '/images/komu1.png'
  },
  {
    name: "La Bohème",
    cuisine: "Meats and Grills, Seasonal Cuisine",
    price: "€€€",
    path: "/germany/munich/munich/la-bohme",
    image: '/images/la-bohme1.png'
  },
  {
    name: "Le Stollberg",
    cuisine: "Classic Cuisine, Mediterranean Cuisine",
    price: "€€",
    path: "/germany/munich/munich/le-stollberg",
    image: '/images/le-stollberg1.png'
  },
  {
    name: "Les Deux",
    cuisine: "Modern French, Creative",
    price: "€€€€",
    path: "/germany/munich/munich/les-deux",
    image: '/images/les-deux1.png'
  },
  {
    name: "Little London",
    cuisine: "Meats and Grills, Grills",
    price: "€€€€",
    path: "/germany/munich/munich/little-london",
    image: '/images/little-london1.png'
  },
  {
    name: "Martinelli",
    cuisine: "Italian, Italian Contemporary",
    price: "€€€",
    path: "/germany/munich/munich/martinelli",
    image: '/images/martinelli1.png'
  },
  {
    name: "Matsuhisa Munich",
    cuisine: "Japanese Contemporary, Peruvian",
    price: "€€€€",
    path: "/germany/munich/munich/matsuhisa-munich",
    image: '/images/matsuhisa-munich1.png'
  },
  {
    name: "mokum",
    cuisine: "Creative, International",
    price: "€€",
    path: "/germany/munich/munich/mokum",
    image: '/images/mokum1.png'
  },
  {
    name: "Mountain Hub Gourmet",
    cuisine: "Modern Cuisine, Creative",
    price: "€€€€",
    path: "/germany/munich/munich/mountain-hub-gourmet",
    image: '/images/mountain-hub-gourmet1.png'
  },
  {
    name: "mural",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€€",
    path: "/germany/munich/munich/mural",
    image: '/images/mural1.png'
  },
  {
    name: "Nymphenburger Hof",
    cuisine: "Classic Cuisine, International",
    price: "€€€",
    path: "/germany/munich/munich/nymphenburger-hof",
    image: '/images/nymphenburger-hof1.png'
  },
  {
    name: "Pageou",
    cuisine: "Mediterranean Cuisine",
    price: "€€€",
    path: "/germany/munich/munich/pageou",
    image: '/images/pageou1.png'
  },
  {
    name: "Pfistermühle",
    cuisine: "Country cooking, Modern Cuisine",
    price: "€€€",
    path: "/germany/munich/munich/pfistermhle",
    image: '/images/pfistermhle1.png'
  },
  {
    name: "Pure Wine & Food",
    cuisine: "Mediterranean Cuisine, Farm to table",
    price: "€€€",
    path: "/germany/munich/munich/pure-wine-food",
    image: '/images/pure-wine-food1.png'
  },
  {
    name: "sansaro",
    cuisine: "Japanese",
    price: "€€",
    path: "/germany/munich/munich/sansaro",
    image: '/images/sansaro1.png'
  },
  {
    name: "Schwarzreiter Restaurant",
    cuisine: "Modern Cuisine, Country cooking",
    price: "€€€€",
    path: "/germany/munich/munich/schwarzreiter-restaurant",
    image: '/images/schwarzreiter-restaurant1.png'
  },
  {
    name: "Showroom",
    cuisine: "Creative",
    price: "€€€€",
    path: "/germany/munich/munich/showroom",
    image: '/images/showroom1.png'
  },
  {
    name: "Sparkling Bistro",
    cuisine: "Modern Cuisine, Farm to table",
    price: "€€€€",
    path: "/germany/munich/munich/sparkling-bistro",
    image: '/images/sparkling-bistro1.png'
  },
  {
    name: "Tantris",
    cuisine: "French Contemporary, Classic Cuisine",
    price: "€€€€",
    path: "/germany/munich/munich/tantris",
    image: '/images/tantris1.png'
  },
  {
    name: "Tantris DNA",
    cuisine: "Classic French, French",
    price: "€€€€",
    path: "/germany/munich/munich/tantris-dna",
    image: '/images/tantris-dna1.png'
  },
  {
    name: "THE CLOUD by Käfer",
    cuisine: "International, Contemporary",
    price: "€€€€",
    path: "/germany/munich/munich/the-cloud-by-kfer",
    image: '/images/the-cloud-by-kfer1.png'
  },
  {
    name: "Tohru in der Schreiberei",
    cuisine: "Modern Cuisine, Japanese Contemporary",
    price: "€€€€",
    path: "/germany/munich/munich/tohru-in-der-schreiberei",
    image: '/images/tohru-in-der-schreiberei1.png'
  },
  {
    name: "Trichards",
    cuisine: "Classic French, Seasonal Cuisine",
    price: "€€",
    path: "/germany/munich/munich/trichards",
    image: '/images/trichards1.png'
  },
  {
    name: "Vinaiolo",
    cuisine: "Italian",
    price: "€€€",
    path: "/germany/munich/munich/vinaiolo",
    image: '/images/vinaiolo1.png'
  },
  {
    name: "VINOTHEK by Geisel",
    cuisine: "International",
    price: "€€€",
    path: "/germany/munich/munich/vinothek-by-geisel",
    image: '/images/vinothek-by-geisel1.png'
  },
  {
    name: "Weinhaus Neuner",
    cuisine: "Traditional Cuisine, Farm to table",
    price: "€€€",
    path: "/germany/munich/munich/weinhaus-neuner",
    image: '/images/weinhaus-neuner1.png'
  },
  {
    name: "Werneckhof Sigi Schelling",
    cuisine: "French Contemporary",
    price: "€€€€",
    path: "/germany/munich/munich/werneckhof-sigi-schelling",
    image: '/images/werneckhof-sigi-schelling1.png'
  },
  {
    name: "Zauberberg",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€",
    path: "/germany/munich/munich/zauberberg",
    image: '/images/zauberberg1.png'
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
