import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Montral";

const restaurants = [
  {
    name: "Annette bar à vin",
    cuisine: "Modern Cuisine",
    price: "$$",
    path: "/canada/montral/montral/annette-bar-vin",
    image: '/images/annette-bar-vin1.png'
  },
  {
    name: "Au Pied de Cochon",
    cuisine: "Regional Cuisine",
    price: "$$$",
    path: "/canada/montral/montral/au-pied-de-cochon",
    image: '/images/au-pied-de-cochon1.png'
  },
  {
    name: "Beba",
    cuisine: "Argentinian, Modern Cuisine",
    price: "$$$",
    path: "/canada/montral/montral/beba",
    image: '/images/beba1.png'
  },
  {
    name: "Bouillon Bilk",
    cuisine: "Modern Cuisine",
    price: "$$$$",
    path: "/canada/montral/montral/bouillon-bilk",
    image: '/images/bouillon-bilk1.png'
  },
  {
    name: "Cabaret l'Enfer",
    cuisine: "Creative",
    price: "$$$$",
    path: "/canada/montral/montral/cabaret-lenfer",
    image: '/images/cabaret-lenfer1.png'
  },
  {
    name: "Cadet",
    cuisine: "Modern Cuisine",
    price: "$$",
    path: "/canada/montral/montral/cadet",
    image: '/images/cadet1.png'
  },
  {
    name: "Candide",
    cuisine: "Modern Cuisine",
    price: "$$$",
    path: "/canada/montral/montral/candide",
    image: '/images/candide1.png'
  },
  {
    name: "Casavant",
    cuisine: "French",
    price: "$$",
    path: "/canada/montral/montral/casavant",
    image: '/images/casavant1.png'
  },
  {
    name: "Damas",
    cuisine: "Middle Eastern",
    price: "$$$$",
    path: "/canada/montral/montral/damas",
    image: '/images/damas1.png'
  },
  {
    name: "Dorsia",
    cuisine: "European, Modern Cuisine",
    price: "$$$",
    path: "/canada/montral/montral/dorsia",
    image: '/images/dorsia1.png'
  },
  {
    name: "Ferreira Café",
    cuisine: "Portuguese, Seafood",
    price: "$$$",
    path: "/canada/montral/montral/ferreira-caf",
    image: '/images/ferreira-caf1.png'
  },
  {
    name: "Foxy",
    cuisine: "Modern Cuisine",
    price: "$$$",
    path: "/canada/montral/montral/foxy",
    image: '/images/foxy1.png'
  },
  {
    name: "Garde Manger",
    cuisine: "Seafood, Modern Cuisine",
    price: "$$$$",
    path: "/canada/montral/montral/garde-manger",
    image: '/images/garde-manger1.png'
  },
  {
    name: "Hoogan et Beaufort",
    cuisine: "Modern Cuisine",
    price: "$$$",
    path: "/canada/montral/montral/hoogan-et-beaufort",
    image: '/images/hoogan-et-beaufort1.png'
  },
  {
    name: "Joe Beef",
    cuisine: "French",
    price: "$$$",
    path: "/canada/montral/montral/joe-beef",
    image: '/images/joe-beef1.png'
  },
  {
    name: "Jérôme Ferrer - Europea",
    cuisine: "Modern Cuisine, Creative",
    price: "$$$$",
    path: "/canada/montral/montral/jrme-ferrer-europea",
    image: '/images/jrme-ferrer-europea1.png'
  },
  {
    name: "Jun I",
    cuisine: "Japanese, Sushi",
    price: "$$",
    path: "/canada/montral/montral/jun-i",
    image: '/images/jun-i1.png'
  },
  {
    name: "La Chronique",
    cuisine: "French, Modern Cuisine",
    price: "$$$$",
    path: "/canada/montral/montral/la-chronique",
    image: '/images/la-chronique1.png'
  },
  {
    name: "Lawrence",
    cuisine: "Modern Cuisine",
    price: "$$$$",
    path: "/canada/montral/montral/lawrence",
    image: '/images/lawrence1.png'
  },
  {
    name: "Le Club Chasse et Pêche",
    cuisine: "French",
    price: "$$$$",
    path: "/canada/montral/montral/le-club-chasse-et-pche",
    image: '/images/le-club-chasse-et-pche1.png'
  },
  {
    name: "Le Filet",
    cuisine: "Seafood",
    price: "$$$",
    path: "/canada/montral/montral/le-filet",
    image: '/images/le-filet1.png'
  },
  {
    name: "Île Flottante",
    cuisine: "Modern Cuisine",
    price: "$$$$",
    path: "/canada/montral/montral/le-flottante",
    image: '/images/le-flottante1.png'
  },
  {
    name: "Le Mousso",
    cuisine: "Creative",
    price: "$$$$",
    path: "/canada/montral/montral/le-mousso",
    image: '/images/le-mousso1.png'
  },
  {
    name: "Le Petit Alep",
    cuisine: "Middle Eastern",
    price: "$$",
    path: "/canada/montral/montral/le-petit-alep",
    image: '/images/le-petit-alep1.png'
  },
  {
    name: "Le Serpent",
    cuisine: "Mediterranean Cuisine, Italian",
    price: "$$$",
    path: "/canada/montral/montral/le-serpent",
    image: '/images/le-serpent1.png'
  },
  {
    name: "Le St-Urbain",
    cuisine: "Modern Cuisine",
    price: "$$$",
    path: "/canada/montral/montral/le-st-urbain",
    image: '/images/le-st-urbain1.png'
  },
  {
    name: "Le Vin Papillon",
    cuisine: "Modern Cuisine",
    price: "$$",
    path: "/canada/montral/montral/le-vin-papillon",
    image: '/images/le-vin-papillon1.png'
  },
  {
    name: "Le Violon",
    cuisine: "Modern Cuisine",
    price: "$$$",
    path: "/canada/montral/montral/le-violon",
    image: '/images/le-violon1.png'
  },
  {
    name: "Le Virunga",
    cuisine: "African",
    price: "$$$",
    path: "/canada/montral/montral/le-virunga",
    image: '/images/le-virunga1.png'
  },
  {
    name: "Leméac",
    cuisine: "French",
    price: "$$$",
    path: "/canada/montral/montral/lemac",
    image: '/images/lemac1.png'
  },
  {
    name: "Les Mômes",
    cuisine: "Modern Cuisine",
    price: "$$$",
    path: "/canada/montral/montral/les-mmes",
    image: '/images/les-mmes1.png'
  },
  {
    name: "L'Express",
    cuisine: "French, Classic Cuisine",
    price: "$$",
    path: "/canada/montral/montral/lexpress",
    image: '/images/lexpress1.png'
  },
  {
    name: "Maison Boulud",
    cuisine: "French",
    price: "$$$$",
    path: "/canada/montral/montral/maison-boulud",
    image: '/images/maison-boulud1.png'
  },
  {
    name: "Marcus",
    cuisine: "Modern Cuisine",
    price: "$$$$",
    path: "/canada/montral/montral/marcus",
    image: '/images/marcus1.png'
  },
  {
    name: "Mastard",
    cuisine: "Modern Cuisine",
    price: "$$$",
    path: "/canada/montral/montral/mastard",
    image: '/images/mastard1.png'
  },
  {
    name: "Mémo",
    cuisine: "Modern Cuisine",
    price: "$$$",
    path: "/canada/montral/montral/mmo",
    image: '/images/mmo1.png'
  },
  {
    name: "Moccione",
    cuisine: "Italian",
    price: "$$",
    path: "/canada/montral/montral/moccione",
    image: '/images/moccione1.png'
  },
  {
    name: "Mon Lapin",
    cuisine: "Modern Cuisine",
    price: "$$$",
    path: "/canada/montral/montral/mon-lapin",
    image: '/images/mon-lapin1.png'
  },
  {
    name: "Monarque",
    cuisine: "Modern Cuisine",
    price: "$$$",
    path: "/canada/montral/montral/monarque",
    image: '/images/monarque1.png'
  },
  {
    name: "Montréal Plaza",
    cuisine: "French, Modern Cuisine",
    price: "$$$",
    path: "/canada/montral/montral/montral-plaza",
    image: '/images/montral-plaza1.png'
  },
  {
    name: "Okeya Kyujiro Montréal",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/canada/montral/montral/okeya-kyujiro-montral",
    image: '/images/okeya-kyujiro-montral1.png'
  },
  {
    name: "Oncle Lee",
    cuisine: "Chinese, Modern Cuisine",
    price: "$$",
    path: "/canada/montral/montral/oncle-lee",
    image: '/images/oncle-lee1.png'
  },
  {
    name: "Othym",
    cuisine: "Regional Cuisine, Country cooking",
    price: "$$$",
    path: "/canada/montral/montral/othym",
    image: '/images/othym1.png'
  },
  {
    name: "Panacée",
    cuisine: "Modern Cuisine",
    price: "$$$",
    path: "/canada/montral/montral/panace",
    image: '/images/panace1.png'
  },
  {
    name: "Parapluie",
    cuisine: "Modern Cuisine, French",
    price: "$$",
    path: "/canada/montral/montral/parapluie",
    image: '/images/parapluie1.png'
  },
  {
    name: "Place Carmin",
    cuisine: "French",
    price: "$$$",
    path: "/canada/montral/montral/place-carmin",
    image: '/images/place-carmin1.png'
  },
  {
    name: "Annette bar à vin",
    cuisine: "Modern Cuisine",
    price: "$$",
    path: "/canada/montral/montral/annette-bar-vin",
    image: '/images/annette-bar-vin1.png'
  },
  {
    name: "Au Pied de Cochon",
    cuisine: "Regional Cuisine",
    price: "$$$",
    path: "/canada/montral/montral/au-pied-de-cochon",
    image: '/images/au-pied-de-cochon1.png'
  },
  {
    name: "Beba",
    cuisine: "Argentinian, Modern Cuisine",
    price: "$$$",
    path: "/canada/montral/montral/beba",
    image: '/images/beba1.png'
  },
  {
    name: "Bouillon Bilk",
    cuisine: "Modern Cuisine",
    price: "$$$$",
    path: "/canada/montral/montral/bouillon-bilk",
    image: '/images/bouillon-bilk1.png'
  },
  {
    name: "Cabaret l'Enfer",
    cuisine: "Creative",
    price: "$$$$",
    path: "/canada/montral/montral/cabaret-lenfer",
    image: '/images/cabaret-lenfer1.png'
  },
  {
    name: "Cadet",
    cuisine: "Modern Cuisine",
    price: "$$",
    path: "/canada/montral/montral/cadet",
    image: '/images/cadet1.png'
  },
  {
    name: "Candide",
    cuisine: "Modern Cuisine",
    price: "$$$",
    path: "/canada/montral/montral/candide",
    image: '/images/candide1.png'
  },
  {
    name: "Casavant",
    cuisine: "French",
    price: "$$",
    path: "/canada/montral/montral/casavant",
    image: '/images/casavant1.png'
  },
  {
    name: "Damas",
    cuisine: "Middle Eastern",
    price: "$$$$",
    path: "/canada/montral/montral/damas",
    image: '/images/damas1.png'
  },
  {
    name: "Dorsia",
    cuisine: "European, Modern Cuisine",
    price: "$$$",
    path: "/canada/montral/montral/dorsia",
    image: '/images/dorsia1.png'
  },
  {
    name: "Restaurant de l'ITHQ",
    cuisine: "Regional Cuisine, Classic Cuisine",
    price: "$$",
    path: "/canada/montral/montral/restaurant-de-lithq",
    image: '/images/restaurant-de-lithq1.png'
  },
  {
    name: "Ferreira Café",
    cuisine: "Portuguese, Seafood",
    price: "$$$",
    path: "/canada/montral/montral/ferreira-caf",
    image: '/images/ferreira-caf1.png'
  },
  {
    name: "Foxy",
    cuisine: "Modern Cuisine",
    price: "$$$",
    path: "/canada/montral/montral/foxy",
    image: '/images/foxy1.png'
  },
  {
    name: "Garde Manger",
    cuisine: "Seafood, Modern Cuisine",
    price: "$$$$",
    path: "/canada/montral/montral/garde-manger",
    image: '/images/garde-manger1.png'
  },
  {
    name: "Hoogan et Beaufort",
    cuisine: "Modern Cuisine",
    price: "$$$",
    path: "/canada/montral/montral/hoogan-et-beaufort",
    image: '/images/hoogan-et-beaufort1.png'
  },
  {
    name: "Joe Beef",
    cuisine: "French",
    price: "$$$",
    path: "/canada/montral/montral/joe-beef",
    image: '/images/joe-beef1.png'
  },
  {
    name: "Jérôme Ferrer - Europea",
    cuisine: "Modern Cuisine, Creative",
    price: "$$$$",
    path: "/canada/montral/montral/jrme-ferrer-europea",
    image: '/images/jrme-ferrer-europea1.png'
  },
  {
    name: "Jun I",
    cuisine: "Japanese, Sushi",
    price: "$$",
    path: "/canada/montral/montral/jun-i",
    image: '/images/jun-i1.png'
  },
  {
    name: "La Chronique",
    cuisine: "French, Modern Cuisine",
    price: "$$$$",
    path: "/canada/montral/montral/la-chronique",
    image: '/images/la-chronique1.png'
  },
  {
    name: "Lawrence",
    cuisine: "Modern Cuisine",
    price: "$$$$",
    path: "/canada/montral/montral/lawrence",
    image: '/images/lawrence1.png'
  },
  {
    name: "Le Club Chasse et Pêche",
    cuisine: "French",
    price: "$$$$",
    path: "/canada/montral/montral/le-club-chasse-et-pche",
    image: '/images/le-club-chasse-et-pche1.png'
  },
  {
    name: "Le Filet",
    cuisine: "Seafood",
    price: "$$$",
    path: "/canada/montral/montral/le-filet",
    image: '/images/le-filet1.png'
  },
  {
    name: "Île Flottante",
    cuisine: "Modern Cuisine",
    price: "$$$$",
    path: "/canada/montral/montral/le-flottante",
    image: '/images/le-flottante1.png'
  },
  {
    name: "Leméac",
    cuisine: "French",
    price: "$$$",
    path: "/canada/montral/montral/lemac",
    image: '/images/lemac1.png'
  },
  {
    name: "Le Mousso",
    cuisine: "Creative",
    price: "$$$$",
    path: "/canada/montral/montral/le-mousso",
    image: '/images/le-mousso1.png'
  },
  {
    name: "Le Petit Alep",
    cuisine: "Middle Eastern",
    price: "$$",
    path: "/canada/montral/montral/le-petit-alep",
    image: '/images/le-petit-alep1.png'
  },
  {
    name: "Le Serpent",
    cuisine: "Mediterranean Cuisine, Italian",
    price: "$$$",
    path: "/canada/montral/montral/le-serpent",
    image: '/images/le-serpent1.png'
  },
  {
    name: "Les Mômes",
    cuisine: "Modern Cuisine",
    price: "$$$",
    path: "/canada/montral/montral/les-mmes",
    image: '/images/les-mmes1.png'
  },
  {
    name: "Le St-Urbain",
    cuisine: "Modern Cuisine",
    price: "$$$",
    path: "/canada/montral/montral/le-st-urbain",
    image: '/images/le-st-urbain1.png'
  },
  {
    name: "Le Vin Papillon",
    cuisine: "Modern Cuisine",
    price: "$$",
    path: "/canada/montral/montral/le-vin-papillon",
    image: '/images/le-vin-papillon1.png'
  },
  {
    name: "Le Violon",
    cuisine: "Modern Cuisine",
    price: "$$$",
    path: "/canada/montral/montral/le-violon",
    image: '/images/le-violon1.png'
  },
  {
    name: "Le Virunga",
    cuisine: "African",
    price: "$$$",
    path: "/canada/montral/montral/le-virunga",
    image: '/images/le-virunga1.png'
  },
  {
    name: "L'Express",
    cuisine: "French, Classic Cuisine",
    price: "$$",
    path: "/canada/montral/montral/lexpress",
    image: '/images/lexpress1.png'
  },
  {
    name: "Maison Boulud",
    cuisine: "French",
    price: "$$$$",
    path: "/canada/montral/montral/maison-boulud",
    image: '/images/maison-boulud1.png'
  },
  {
    name: "Marcus",
    cuisine: "Modern Cuisine",
    price: "$$$$",
    path: "/canada/montral/montral/marcus",
    image: '/images/marcus1.png'
  },
  {
    name: "Mastard",
    cuisine: "Modern Cuisine",
    price: "$$$",
    path: "/canada/montral/montral/mastard",
    image: '/images/mastard1.png'
  },
  {
    name: "Mémo",
    cuisine: "Modern Cuisine",
    price: "$$$",
    path: "/canada/montral/montral/mmo",
    image: '/images/mmo1.png'
  },
  {
    name: "Moccione",
    cuisine: "Italian",
    price: "$$",
    path: "/canada/montral/montral/moccione",
    image: '/images/moccione1.png'
  },
  {
    name: "Monarque",
    cuisine: "Modern Cuisine",
    price: "$$$",
    path: "/canada/montral/montral/monarque",
    image: '/images/monarque1.png'
  },
  {
    name: "Mon Lapin",
    cuisine: "Modern Cuisine",
    price: "$$$",
    path: "/canada/montral/montral/mon-lapin",
    image: '/images/mon-lapin1.png'
  },
  {
    name: "Montréal Plaza",
    cuisine: "French, Modern Cuisine",
    price: "$$$",
    path: "/canada/montral/montral/montral-plaza",
    image: '/images/montral-plaza1.png'
  },
  {
    name: "Okeya Kyujiro Montréal",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/canada/montral/montral/okeya-kyujiro-montral",
    image: '/images/okeya-kyujiro-montral1.png'
  },
  {
    name: "Oncle Lee",
    cuisine: "Chinese, Modern Cuisine",
    price: "$$",
    path: "/canada/montral/montral/oncle-lee",
    image: '/images/oncle-lee1.png'
  },
  {
    name: "Othym",
    cuisine: "Regional Cuisine, Country cooking",
    price: "$$$",
    path: "/canada/montral/montral/othym",
    image: '/images/othym1.png'
  },
  {
    name: "Panacée",
    cuisine: "Modern Cuisine",
    price: "$$$",
    path: "/canada/montral/montral/panace",
    image: '/images/panace1.png'
  },
  {
    name: "Parapluie",
    cuisine: "Modern Cuisine, French",
    price: "$$",
    path: "/canada/montral/montral/parapluie",
    image: '/images/parapluie1.png'
  },
  {
    name: "Place Carmin",
    cuisine: "French",
    price: "$$$",
    path: "/canada/montral/montral/place-carmin",
    image: '/images/place-carmin1.png'
  },
  {
    name: "Restaurant de l'ITHQ",
    cuisine: "Regional Cuisine, Classic Cuisine",
    price: "$$",
    path: "/canada/montral/montral/restaurant-de-lithq",
    image: '/images/restaurant-de-lithq1.png'
  },
  {
    name: "Rôtisserie La Lune",
    cuisine: "Traditional Cuisine",
    price: "$$",
    path: "/canada/montral/montral/rtisserie-la-lune",
    image: '/images/rtisserie-la-lune1.png'
  },
  {
    name: "Sabayon",
    cuisine: "Modern Cuisine",
    price: "$$$$",
    path: "/canada/montral/montral/sabayon",
    image: '/images/sabayon1.png'
  },
  {
    name: "Salle Climatisée",
    cuisine: "French",
    price: "$$$",
    path: "/canada/montral/montral/salle-climatise",
    image: '/images/salle-climatise1.png'
  },
  {
    name: "Schwartz's Deli",
    cuisine: "Regional Cuisine",
    price: "$",
    path: "/canada/montral/montral/schwartzs-deli",
    image: '/images/schwartzs-deli1.png'
  },
  {
    name: "Rôtisserie La Lune",
    cuisine: "Traditional Cuisine",
    price: "$$",
    path: "/canada/montral/montral/rtisserie-la-lune",
    image: '/images/rtisserie-la-lune1.png'
  },
  {
    name: "Toqué!",
    cuisine: "Traditional Cuisine",
    price: "$$$$",
    path: "/canada/montral/montral/toqu",
    image: '/images/toqu1.png'
  },
  {
    name: "Yokato Yokabai",
    cuisine: "Ramen",
    price: "$",
    path: "/canada/montral/montral/yokato-yokabai",
    image: '/images/yokato-yokabai1.png'
  },
  {
    name: "Sabayon",
    cuisine: "Modern Cuisine",
    price: "$$$$",
    path: "/canada/montral/montral/sabayon",
    image: '/images/sabayon1.png'
  },
  {
    name: "Salle Climatisée",
    cuisine: "French",
    price: "$$$",
    path: "/canada/montral/montral/salle-climatise",
    image: '/images/salle-climatise1.png'
  },
  {
    name: "Schwartz's Deli",
    cuisine: "Regional Cuisine",
    price: "$",
    path: "/canada/montral/montral/schwartzs-deli",
    image: '/images/schwartzs-deli1.png'
  },
  {
    name: "Toqué!",
    cuisine: "Traditional Cuisine",
    price: "$$$$",
    path: "/canada/montral/montral/toqu",
    image: '/images/toqu1.png'
  },
  {
    name: "Yokato Yokabai",
    cuisine: "Ramen",
    price: "$",
    path: "/canada/montral/montral/yokato-yokabai",
    image: '/images/yokato-yokabai1.png'
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
