import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Lyon";

const restaurants = [
  {
    name: "Accentué",
    cuisine: "Creative",
    price: "€€",
    path: "/france/lyon/lyon/accentu",
    image: '/images/accentu1.png'
  },
  {
    name: "Agastache",
    cuisine: "Creative",
    price: "€€",
    path: "/france/lyon/lyon/agastache",
    image: '/images/agastache1.png'
  },
  {
    name: "Alebrije",
    cuisine: "Mexican",
    price: "€€€",
    path: "/france/lyon/lyon/alebrije",
    image: '/images/alebrije1.png'
  },
  {
    name: "Armada",
    cuisine: "Creative",
    price: "€€",
    path: "/france/lyon/lyon/armada",
    image: '/images/armada1.png'
  },
  {
    name: "Aromatic",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/lyon/lyon/aromatic",
    image: '/images/aromatic1.png'
  },
  {
    name: "Au 14 Février",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/lyon/lyon/au-14-fvrier",
    image: '/images/au-14-fvrier1.png'
  },
  {
    name: "Bergamote",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/lyon/lyon/bergamote",
    image: '/images/bergamote1.png'
  },
  {
    name: "Bistro B",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/lyon/lyon/bistro-b",
    image: '/images/bistro-b1.png'
  },
  {
    name: "Brasserie Roseaux",
    cuisine: "Traditional Cuisine, Classic Cuisine",
    price: "€€€",
    path: "/france/lyon/lyon/brasserie-roseaux",
    image: '/images/brasserie-roseaux1.png'
  },
  {
    name: "Brutal",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/lyon/lyon/brutal",
    image: '/images/brutal1.png'
  },
  {
    name: "Bulle",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/lyon/lyon/bulle",
    image: '/images/bulle1.png'
  },
  {
    name: "Burgundy by Matthieu",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/lyon/lyon/burgundy-by-matthieu",
    image: '/images/burgundy-by-matthieu1.png'
  },
  {
    name: "Café Terroir",
    cuisine: "Country cooking",
    price: "€€",
    path: "/france/lyon/lyon/caf-terroir",
    image: '/images/caf-terroir1.png'
  },
  {
    name: "Canaima",
    cuisine: "Latin American",
    price: "€€",
    path: "/france/lyon/lyon/canaima",
    image: '/images/canaima1.png'
  },
  {
    name: "Celest",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/lyon/lyon/celest",
    image: '/images/celest1.png'
  },
  {
    name: "Cercle Rouge",
    cuisine: "Fusion",
    price: "€€",
    path: "/france/lyon/lyon/cercle-rouge",
    image: '/images/cercle-rouge1.png'
  },
  {
    name: "Chez Pimousse",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/lyon/lyon/chez-pimousse",
    image: '/images/chez-pimousse1.png'
  },
  {
    name: "Cinq Mains",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/lyon/lyon/cinq-mains",
    image: '/images/cinq-mains1.png'
  },
  {
    name: "Circle",
    cuisine: "Creative",
    price: "€€€",
    path: "/france/lyon/lyon/circle",
    image: '/images/circle1.png'
  },
  {
    name: "Contre-Champ",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/lyon/lyon/contre-champ",
    image: '/images/contre-champ1.png'
  },
  {
    name: "Culina Hortus",
    cuisine: "Vegetarian",
    price: "€€€",
    path: "/france/lyon/lyon/culina-hortus",
    image: '/images/culina-hortus1.png'
  },
  {
    name: "Curnonsky",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/lyon/lyon/curnonsky",
    image: '/images/curnonsky1.png'
  },
  {
    name: "Daniel et Denise Croix-Rousse",
    cuisine: "Lyonnaise",
    price: "€€",
    path: "/france/lyon/lyon/daniel-et-denise-croix-rousse",
    image: '/images/daniel-et-denise-croix-rousse1.png'
  },
  {
    name: "Daniel et Denise Créqui",
    cuisine: "Lyonnaise",
    price: "€€",
    path: "/france/lyon/lyon/daniel-et-denise-crqui",
    image: '/images/daniel-et-denise-crqui1.png'
  },
  {
    name: "Daniel et Denise Saint-Jean",
    cuisine: "Lyonnaise",
    price: "€€",
    path: "/france/lyon/lyon/daniel-et-denise-saint-jean",
    image: '/images/daniel-et-denise-saint-jean1.png'
  },
  {
    name: "Danton",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/lyon/lyon/danton",
    image: '/images/danton1.png'
  },
  {
    name: "Epona",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/lyon/lyon/epona",
    image: '/images/epona1.png'
  },
  {
    name: "Fujiyama 55",
    cuisine: "Ramen",
    price: "€",
    path: "/france/lyon/lyon/fujiyama-55",
    image: '/images/fujiyama-551.png'
  },
  {
    name: "La Meunière",
    cuisine: "Lyonnaise",
    price: "€€",
    path: "/france/lyon/lyon/la-meunire",
    image: '/images/la-meunire1.png'
  },
  {
    name: "La Quintessence",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/lyon/lyon/la-quintessence",
    image: '/images/la-quintessence1.png'
  },
  {
    name: "La Sommelière",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/lyon/lyon/la-sommelire",
    image: '/images/la-sommelire1.png'
  },
  {
    name: "La Table 101",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/lyon/lyon/la-table-101",
    image: '/images/la-table-1011.png'
  },
  {
    name: "La Virée",
    cuisine: "Modern Cuisine",
    price: "€",
    path: "/france/lyon/lyon/la-vire",
    image: '/images/la-vire1.png'
  },
  {
    name: "L'Alexandrin",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/lyon/lyon/lalexandrin",
    image: '/images/lalexandrin1.png'
  },
  {
    name: "L'Argot",
    cuisine: "Meats and Grills",
    price: "€€",
    path: "/france/lyon/lyon/largot",
    image: '/images/largot1.png'
  },
  {
    name: "L'Artichaut",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/lyon/lyon/lartichaut",
    image: '/images/lartichaut1.png'
  },
  {
    name: "L'Atelier des Augustins",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/lyon/lyon/latelier-des-augustins",
    image: '/images/latelier-des-augustins1.png'
  },
  {
    name: "Le Bistrot des Voraces",
    cuisine: "Traditional Cuisine",
    price: "€",
    path: "/france/lyon/lyon/le-bistrot-des-voraces",
    image: '/images/le-bistrot-des-voraces1.png'
  },
  {
    name: "Le Canut et les Gones",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/lyon/lyon/le-canut-et-les-gones",
    image: '/images/le-canut-et-les-gones1.png'
  },
  {
    name: "Le Cochon qui Boit",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/lyon/lyon/le-cochon-qui-boit",
    image: '/images/le-cochon-qui-boit1.png'
  },
  {
    name: "Le Garet",
    cuisine: "Lyonnaise, Traditional Cuisine",
    price: "€€",
    path: "/france/lyon/lyon/le-garet",
    image: '/images/le-garet1.png'
  },
  {
    name: "Le Gourmet de Sèze",
    cuisine: "Classic Cuisine",
    price: "€€€€",
    path: "/france/lyon/lyon/le-gourmet-de-sze",
    image: '/images/le-gourmet-de-sze1.png'
  },
  {
    name: "Le Grand Réfectoire",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/lyon/lyon/le-grand-rfectoire",
    image: '/images/le-grand-rfectoire1.png'
  },
  {
    name: "Le Jean Moulin",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/lyon/lyon/le-jean-moulin",
    image: '/images/le-jean-moulin1.png'
  },
  {
    name: "Le Kitchen",
    cuisine: "Modern Cuisine",
    price: "€",
    path: "/france/lyon/lyon/le-kitchen",
    image: '/images/le-kitchen1.png'
  },
  {
    name: "Le Limonadier",
    cuisine: "Creative",
    price: "€€",
    path: "/france/lyon/lyon/le-limonadier",
    image: '/images/le-limonadier1.png'
  },
  {
    name: "Le Mercière",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/lyon/lyon/le-mercire",
    image: '/images/le-mercire1.png'
  },
  {
    name: "Le Musée",
    cuisine: "Lyonnaise",
    price: "€",
    path: "/france/lyon/lyon/le-muse",
    image: '/images/le-muse1.png'
  },
  {
    name: "Le Neuvième Art",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€€",
    path: "/france/lyon/lyon/le-neuvime-art",
    image: '/images/le-neuvime-art1.png'
  },
  {
    name: "Le Président",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/lyon/lyon/le-prsident",
    image: '/images/le-prsident1.png'
  },
  {
    name: "Le Sully",
    cuisine: "Lyonnaise",
    price: "€€",
    path: "/france/lyon/lyon/le-sully",
    image: '/images/le-sully1.png'
  },
  {
    name: "Le Suprême",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/lyon/lyon/le-suprme",
    image: '/images/le-suprme1.png'
  },
  {
    name: "Le Tiroir",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/lyon/lyon/le-tiroir",
    image: '/images/le-tiroir1.png'
  },
  {
    name: "Le Zeste Gourmand",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/lyon/lyon/le-zeste-gourmand",
    image: '/images/le-zeste-gourmand1.png'
  },
  {
    name: "Leptine",
    cuisine: "Creative",
    price: "€€",
    path: "/france/lyon/lyon/leptine",
    image: '/images/leptine1.png'
  },
  {
    name: "Les Boulistes",
    cuisine: "Traditional Cuisine",
    price: "€",
    path: "/france/lyon/lyon/les-boulistes",
    image: '/images/les-boulistes1.png'
  },
  {
    name: "Les Loges",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/lyon/lyon/les-loges",
    image: '/images/les-loges1.png'
  },
  {
    name: "Les Terrasses de Lyon",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/lyon/lyon/les-terrasses-de-lyon",
    image: '/images/les-terrasses-de-lyon1.png'
  },
  {
    name: "Les Trois Dômes",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/lyon/lyon/les-trois-dmes",
    image: '/images/les-trois-dmes1.png'
  },
  {
    name: "L'Institut Restaurant",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/lyon/lyon/linstitut-restaurant",
    image: '/images/linstitut-restaurant1.png'
  },
  {
    name: "L'Établi",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/lyon/lyon/ltabli",
    image: '/images/ltabli1.png'
  },
  {
    name: "M Restaurant",
    cuisine: "Farm to table",
    price: "€€",
    path: "/france/lyon/lyon/m-restaurant",
    image: '/images/m-restaurant1.png'
  },
  {
    name: "Maison Léa",
    cuisine: "Lyonnaise",
    price: "€€",
    path: "/france/lyon/lyon/maison-la",
    image: '/images/maison-la1.png'
  },
  {
    name: "Mertensia",
    cuisine: "Modern Cuisine, Vegetarian",
    price: "€€€",
    path: "/france/lyon/lyon/mertensia",
    image: '/images/mertensia1.png'
  },
  {
    name: "Milprée",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/lyon/lyon/milpre",
    image: '/images/milpre1.png'
  },
  {
    name: "Miraflores",
    cuisine: "Peruvian",
    price: "€€€€",
    path: "/france/lyon/lyon/miraflores",
    image: '/images/miraflores1.png'
  },
  {
    name: "Monsieur P",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/lyon/lyon/monsieur-p",
    image: '/images/monsieur-p1.png'
  },
  {
    name: "Mère Brazier",
    cuisine: "Classic Cuisine",
    price: "€€€€",
    path: "/france/lyon/lyon/mre-brazier",
    image: '/images/mre-brazier1.png'
  },
  {
    name: "Murmures",
    cuisine: "Creative",
    price: "€€",
    path: "/france/lyon/lyon/murmures",
    image: '/images/murmures1.png'
  },
  {
    name: "Ombellule",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/lyon/lyon/ombellule",
    image: '/images/ombellule1.png'
  },
  {
    name: "Osteria Matto",
    cuisine: "Italian",
    price: "€€",
    path: "/france/lyon/lyon/osteria-matto",
    image: '/images/osteria-matto1.png'
  },
  {
    name: "Prairial",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/lyon/lyon/prairial",
    image: '/images/prairial1.png'
  },
  {
    name: "PY Restaurant",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/lyon/lyon/py-restaurant",
    image: '/images/py-restaurant1.png'
  },
  {
    name: "Racine",
    cuisine: "Modern Cuisine",
    price: "€",
    path: "/france/lyon/lyon/racine",
    image: '/images/racine1.png'
  },
  {
    name: "Regain",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/lyon/lyon/regain",
    image: '/images/regain1.png'
  },
  {
    name: "Rousille",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/lyon/lyon/rousille",
    image: '/images/rousille1.png'
  },
  {
    name: "Rustique",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/lyon/lyon/rustique",
    image: '/images/rustique1.png'
  },
  {
    name: "Saku Restaurant",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/lyon/lyon/saku-restaurant",
    image: '/images/saku-restaurant1.png'
  },
  {
    name: "Sauf Imprévu",
    cuisine: "Farm to table",
    price: "€€",
    path: "/france/lyon/lyon/sauf-imprvu",
    image: '/images/sauf-imprvu1.png'
  },
  {
    name: "Sinabro",
    cuisine: "Korean",
    price: "€",
    path: "/france/lyon/lyon/sinabro",
    image: '/images/sinabro1.png'
  },
  {
    name: "Siprès",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/lyon/lyon/siprs",
    image: '/images/siprs1.png'
  },
  {
    name: "Söma",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/lyon/lyon/sma",
    image: '/images/sma1.png'
  },
  {
    name: "Taggat",
    cuisine: "Creative",
    price: "€€",
    path: "/france/lyon/lyon/taggat",
    image: '/images/taggat1.png'
  },
  {
    name: "Takao Takano",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/lyon/lyon/takao-takano",
    image: '/images/takao-takano1.png'
  },
  {
    name: "Thomas",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/lyon/lyon/thomas",
    image: '/images/thomas1.png'
  },
  {
    name: "Trèfle",
    cuisine: "Vegan, Modern Cuisine",
    price: "€€€",
    path: "/france/lyon/lyon/trfle",
    image: '/images/trfle1.png'
  },
  {
    name: "Têtedoie",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/lyon/lyon/ttedoie",
    image: '/images/ttedoie1.png'
  },
  {
    name: "Veronatuti",
    cuisine: "Italian",
    price: "€€",
    path: "/france/lyon/lyon/veronatuti",
    image: '/images/veronatuti1.png'
  },
  {
    name: "Yka bar & ceviche",
    cuisine: "Peruvian",
    price: "€€",
    path: "/france/lyon/lyon/yka-bar-ceviche",
    image: '/images/yka-bar-ceviche1.png'
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
