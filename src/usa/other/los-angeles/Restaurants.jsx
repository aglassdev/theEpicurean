import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Los Angeles";

const restaurants = [
  {
    name: "715",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/los-angeles/715",
    image: '/images/7151.png'
  },
  {
    name: "Alta Adams",
    cuisine: "Southern",
    price: "$$",
    path: "/usa/other/los-angeles/alta-adams",
    image: '/images/alta-adams1.png'
  },
  {
    name: "Angelini Osteria",
    cuisine: "Italian",
    price: "$$$",
    path: "/usa/other/los-angeles/angelini-osteria",
    image: '/images/angelini-osteria1.png'
  },
  {
    name: "Antico Nuovo",
    cuisine: "Italian",
    price: "$$$$",
    path: "/usa/other/los-angeles/antico-nuovo",
    image: '/images/antico-nuovo1.png'
  },
  {
    name: "asterid by Ray Garcia",
    cuisine: "Californian, Contemporary",
    price: "$$$",
    path: "/usa/other/los-angeles/asterid-by-ray-garcia",
    image: '/images/asterid-by-ray-garcia1.png'
  },
  {
    name: "Ayara Thai",
    cuisine: "Thai",
    price: "$",
    path: "/usa/other/los-angeles/ayara-thai",
    image: '/images/ayara-thai1.png'
  },
  {
    name: "Ayara Thai Cuisine",
    cuisine: "Thai",
    price: "$",
    path: "/usa/other/los-angeles/ayara-thai-cuisine",
    image: '/images/ayara-thai-cuisine1.png'
  },
  {
    name: "Badmaash",
    cuisine: "Indian, Gastropub",
    price: "$$",
    path: "/usa/other/los-angeles/badmaash",
    image: '/images/badmaash1.png'
  },
  {
    name: "Bar Etoile",
    cuisine: "Californian, European",
    price: "$$$",
    path: "/usa/other/los-angeles/bar-etoile",
    image: '/images/bar-etoile1.png'
  },
  {
    name: "Bar Sawa",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/los-angeles/bar-sawa",
    image: '/images/bar-sawa1.png'
  },
  {
    name: "Baroo",
    cuisine: "Korean Contemporary",
    price: "$$$$",
    path: "/usa/other/los-angeles/baroo",
    image: '/images/baroo1.png'
  },
  {
    name: "Barra Santos",
    cuisine: "Portuguese",
    price: "$$",
    path: "/usa/other/los-angeles/barra-santos",
    image: '/images/barra-santos1.png'
  },
  {
    name: "Bavel",
    cuisine: "Middle Eastern, Californian",
    price: "$$$$",
    path: "/usa/other/los-angeles/bavel",
    image: '/images/bavel1.png'
  },
  {
    name: "Bee Taqueria",
    cuisine: "Mexican",
    price: "$$",
    path: "/usa/other/los-angeles/bee-taqueria",
    image: '/images/bee-taqueria1.png'
  },
  {
    name: "Bestia",
    cuisine: "Italian, Californian",
    price: "$$$$",
    path: "/usa/other/los-angeles/bestia",
    image: '/images/bestia1.png'
  },
  {
    name: "Camphor",
    cuisine: "French, Contemporary",
    price: "$$$$",
    path: "/usa/other/los-angeles/camphor",
    image: '/images/camphor1.png'
  },
  {
    name: "Carlitos Gardel",
    cuisine: "Argentinian",
    price: "$$$",
    path: "/usa/other/los-angeles/carlitos-gardel",
    image: '/images/carlitos-gardel1.png'
  },
  {
    name: "Carnes Asadas Pancho Lopez",
    cuisine: "Mexican",
    price: "$",
    path: "/usa/other/los-angeles/carnes-asadas-pancho-lopez",
    image: '/images/carnes-asadas-pancho-lopez1.png'
  },
  {
    name: "Cento Pasta Bar",
    cuisine: "Italian",
    price: "$$$",
    path: "/usa/other/los-angeles/cento-pasta-bar",
    image: '/images/cento-pasta-bar1.png'
  },
  {
    name: "Charcoal Venice",
    cuisine: "American, Steakhouse",
    price: "$$$",
    path: "/usa/other/los-angeles/charcoal-venice",
    image: '/images/charcoal-venice1.png'
  },
  {
    name: "Chi Spacca",
    cuisine: "Italian, Steakhouse",
    price: "$$$$",
    path: "/usa/other/los-angeles/chi-spacca",
    image: '/images/chi-spacca1.png'
  },
  {
    name: "Chifa",
    cuisine: "Fusion, Chinese",
    price: "$$",
    path: "/usa/other/los-angeles/chifa",
    image: '/images/chifa1.png'
  },
  {
    name: "Chosun Galbee",
    cuisine: "Korean, Barbecue",
    price: "$$$",
    path: "/usa/other/los-angeles/chosun-galbee",
    image: '/images/chosun-galbee1.png'
  },
  {
    name: "Dama",
    cuisine: "Latin American, American Contemporary",
    price: "$$$",
    path: "/usa/other/los-angeles/dama",
    image: '/images/dama1.png'
  },
  {
    name: "Dama",
    cuisine: "Latin American, American Contemporary",
    price: "$$$",
    path: "/usa/other/los-angeles/dama",
    image: '/images/dama1.png'
  },
  {
    name: "Damian",
    cuisine: "Mexican, Contemporary",
    price: "$$$",
    path: "/usa/other/los-angeles/damian",
    image: '/images/damian1.png'
  },
  {
    name: "Danbi",
    cuisine: "Korean",
    price: "$$",
    path: "/usa/other/los-angeles/danbi",
    image: '/images/danbi1.png'
  },
  {
    name: "Dha Rae Oak",
    cuisine: "Korean, Duck Specialities",
    price: "$$",
    path: "/usa/other/los-angeles/dha-rae-oak",
    image: '/images/dha-rae-oak1.png'
  },
  {
    name: "Dunsmoor",
    cuisine: "American",
    price: "$$$",
    path: "/usa/other/los-angeles/dunsmoor",
    image: '/images/dunsmoor1.png'
  },
  {
    name: "Elf Cafe",
    cuisine: "Mediterranean Cuisine",
    price: "$$",
    path: "/usa/other/los-angeles/elf-cafe",
    image: '/images/elf-cafe1.png'
  },
  {
    name: "Father’s Office",
    cuisine: "Gastropub",
    price: "$$",
    path: "/usa/other/los-angeles/fathers-office",
    image: '/images/fathers-office1.png'
  },
  {
    name: "Flavors from Afar",
    cuisine: "International",
    price: "$$",
    path: "/usa/other/los-angeles/flavors-from-afar",
    image: '/images/flavors-from-afar1.png'
  },
  {
    name: "Found Oyster",
    cuisine: "Seafood",
    price: "$$$",
    path: "/usa/other/los-angeles/found-oyster",
    image: '/images/found-oyster1.png'
  },
  {
    name: "Girl & the Goat Los Angeles",
    cuisine: "Contemporary, American",
    price: "$$$",
    path: "/usa/other/los-angeles/girl-the-goat-los-angeles",
    image: '/images/girl-the-goat-los-angeles1.png'
  },
  {
    name: "Grá",
    cuisine: "Pizza",
    price: "$$",
    path: "/usa/other/los-angeles/gr",
    image: '/images/gr1.png'
  },
  {
    name: "Grá",
    cuisine: "Pizza",
    price: "$$",
    path: "/usa/other/los-angeles/gr",
    image: '/images/gr1.png'
  },
  {
    name: "Guelaguetza",
    cuisine: "Mexican, Regional Cuisine",
    price: "$$$",
    path: "/usa/other/los-angeles/guelaguetza",
    image: '/images/guelaguetza1.png'
  },
  {
    name: "Guisados",
    cuisine: "Mexican, Regional Cuisine",
    price: "$",
    path: "/usa/other/los-angeles/guisados",
    image: '/images/guisados1.png'
  },
  {
    name: "Gwen",
    cuisine: "Steakhouse, American",
    price: "$$$$",
    path: "/usa/other/los-angeles/gwen",
    image: '/images/gwen1.png'
  },
  {
    name: "Gwen",
    cuisine: "Steakhouse, American",
    price: "$$$$",
    path: "/usa/other/los-angeles/gwen",
    image: '/images/gwen1.png'
  },
  {
    name: "Hatchet Hall",
    cuisine: "American, Contemporary",
    price: "$$$",
    path: "/usa/other/los-angeles/hatchet-hall",
    image: '/images/hatchet-hall1.png'
  },
  {
    name: "Hayato",
    cuisine: "Japanese, Seafood",
    price: "$$$$",
    path: "/usa/other/los-angeles/hayato",
    image: '/images/hayato1.png'
  },
  {
    name: "hibi",
    cuisine: "Japanese Contemporary, Korean",
    price: "$$$$",
    path: "/usa/other/los-angeles/hibi",
    image: '/images/hibi1.png'
  },
  {
    name: "Hippo",
    cuisine: "Italian",
    price: "$$",
    path: "/usa/other/los-angeles/hippo",
    image: '/images/hippo1.png'
  },
  {
    name: "Holbox",
    cuisine: "Mexican, Seafood",
    price: "$$",
    path: "/usa/other/los-angeles/holbox",
    image: '/images/holbox1.png'
  },
  {
    name: "Horses",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/usa/other/los-angeles/horses",
    image: '/images/horses1.png'
  },
  {
    name: "IMA",
    cuisine: "Japanese, Sukiyaki",
    price: "$$$$",
    path: "/usa/other/los-angeles/ima",
    image: '/images/ima1.png'
  },
  {
    name: "Jeong Yuk Jeom",
    cuisine: "Korean, Beef",
    price: "$$$",
    path: "/usa/other/los-angeles/jeong-yuk-jeom",
    image: '/images/jeong-yuk-jeom1.png'
  },
  {
    name: "Jitlada",
    cuisine: "Thai",
    price: "$$",
    path: "/usa/other/los-angeles/jitlada",
    image: '/images/jitlada1.png'
  },
  {
    name: "Jon & Vinny’s",
    cuisine: "Italian-American",
    price: "$$",
    path: "/usa/other/los-angeles/jon-vinnys",
    image: '/images/jon-vinnys1.png'
  },
  {
    name: "Kato",
    cuisine: "Asian, Contemporary",
    price: "$$$$",
    path: "/usa/other/los-angeles/kato",
    image: '/images/kato1.png'
  },
  {
    name: "Killer Noodle",
    cuisine: "Japanese, Ramen",
    price: "$",
    path: "/usa/other/los-angeles/killer-noodle",
    image: '/images/killer-noodle1.png'
  },
  {
    name: "Kismet",
    cuisine: "Middle Eastern",
    price: "$$",
    path: "/usa/other/los-angeles/kismet",
    image: '/images/kismet1.png'
  },
  {
    name: "kodō",
    cuisine: "Izakaya, Sushi",
    price: "$$$$",
    path: "/usa/other/los-angeles/kod",
    image: '/images/kod1.png'
  },
  {
    name: "Komal",
    cuisine: "Mexican",
    price: "$",
    path: "/usa/other/los-angeles/komal",
    image: '/images/komal1.png'
  },
  {
    name: "La Azteca",
    cuisine: "Mexican",
    price: "$",
    path: "/usa/other/los-angeles/la-azteca",
    image: '/images/la-azteca1.png'
  },
  {
    name: "LA Cha Cha Chá",
    cuisine: "Mexican, Latin American",
    price: "$$$$",
    path: "/usa/other/los-angeles/la-cha-cha-ch",
    image: '/images/la-cha-cha-ch1.png'
  },
  {
    name: "Lalibela",
    cuisine: "Ethiopian",
    price: "$$",
    path: "/usa/other/los-angeles/lalibela",
    image: '/images/lalibela1.png'
  },
  {
    name: "Langer's",
    cuisine: "Deli, American",
    price: "$$",
    path: "/usa/other/los-angeles/langers",
    image: '/images/langers1.png'
  },
  {
    name: "Le Comptoir",
    cuisine: "Californian, Vegetarian",
    price: "$$$$",
    path: "/usa/other/los-angeles/le-comptoir",
    image: '/images/le-comptoir1.png'
  },
  {
    name: "Leopardo",
    cuisine: "Californian, Seafood",
    price: "$$$$",
    path: "/usa/other/los-angeles/leopardo",
    image: '/images/leopardo1.png'
  },
  {
    name: "Little Fish",
    cuisine: "American",
    price: "$",
    path: "/usa/other/los-angeles/little-fish",
    image: '/images/little-fish1.png'
  },
  {
    name: "Liu's Cafe",
    cuisine: "Chinese, Taiwanese",
    price: "$",
    path: "/usa/other/los-angeles/lius-cafe",
    image: '/images/lius-cafe1.png'
  },
  {
    name: "Lulu",
    cuisine: "Californian",
    price: "$$",
    path: "/usa/other/los-angeles/lulu",
    image: '/images/lulu1.png'
  },
  {
    name: "Lumière",
    cuisine: "French, Farm to table",
    price: "$$$",
    path: "/usa/other/los-angeles/lumire",
    image: '/images/lumire1.png'
  },
  {
    name: "Lumière",
    cuisine: "French, Farm to table",
    price: "$$$",
    path: "/usa/other/los-angeles/lumire",
    image: '/images/lumire1.png'
  },
  {
    name: "Luv 2 Eat Thai Bistro",
    cuisine: "Thai",
    price: "$$",
    path: "/usa/other/los-angeles/luv-2-eat-thai-bistro",
    image: '/images/luv-2-eat-thai-bistro1.png'
  },
  {
    name: "Maccheroni Republic",
    cuisine: "Italian-American",
    price: "$$",
    path: "/usa/other/los-angeles/maccheroni-republic",
    image: '/images/maccheroni-republic1.png'
  },
  {
    name: "Mae Malai Thai House of Noodles",
    cuisine: "Thai",
    price: "$",
    path: "/usa/other/los-angeles/mae-malai-thai-house-of-noodles",
    image: '/images/mae-malai-thai-house-of-noodles1.png'
  },
  {
    name: "majordōmo",
    cuisine: "Asian, Contemporary",
    price: "$$$",
    path: "/usa/other/los-angeles/majordmo",
    image: '/images/majordmo1.png'
  },
  {
    name: "Manuela",
    cuisine: "American, Californian",
    price: "$$$",
    path: "/usa/other/los-angeles/manuela",
    image: '/images/manuela1.png'
  },
  {
    name: "Marugame Monzo",
    cuisine: "Japanese, Udon",
    price: "$$",
    path: "/usa/other/los-angeles/marugame-monzo",
    image: '/images/marugame-monzo1.png'
  },
  {
    name: "Meteora",
    cuisine: "Creative, Contemporary",
    price: "$$$$",
    path: "/usa/other/los-angeles/meteora",
    image: '/images/meteora1.png'
  },
  {
    name: "Moo's Craft Barbecue",
    cuisine: "Barbecue, Regional Cuisine",
    price: "$$",
    path: "/usa/other/los-angeles/moos-craft-barbecue",
    image: '/images/moos-craft-barbecue1.png'
  },
  {
    name: "Mori Nozomi",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/los-angeles/mori-nozomi",
    image: '/images/mori-nozomi1.png'
  },
  {
    name: "Morihiro",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/los-angeles/morihiro",
    image: '/images/morihiro1.png'
  },
  {
    name: "n/naka",
    cuisine: "Japanese, Contemporary",
    price: "$$$$",
    path: "/usa/other/los-angeles/nnaka",
    image: '/images/nnaka1.png'
  },
  {
    name: "Orsa & Winston",
    cuisine: "Contemporary, Asian",
    price: "$$$$",
    path: "/usa/other/los-angeles/orsa-winston",
    image: '/images/orsa-winston1.png'
  },
  {
    name: "Osteria Mozza",
    cuisine: "Italian",
    price: "$$$$",
    path: "/usa/other/los-angeles/osteria-mozza",
    image: '/images/osteria-mozza1.png'
  },
  {
    name: "Parks BBQ",
    cuisine: "Korean, Barbecue",
    price: "$$$",
    path: "/usa/other/los-angeles/parks-bbq",
    image: '/images/parks-bbq1.png'
  },
  {
    name: "Petit Trois",
    cuisine: "French",
    price: "$$$",
    path: "/usa/other/los-angeles/petit-trois",
    image: '/images/petit-trois1.png'
  },
  {
    name: "Pijja Palace",
    cuisine: "Fusion, Indian",
    price: "$$",
    path: "/usa/other/los-angeles/pijja-palace",
    image: '/images/pijja-palace1.png'
  },
  {
    name: "Pine & Crane",
    cuisine: "Asian, Taiwanese",
    price: "$",
    path: "/usa/other/los-angeles/pine-crane",
    image: '/images/pine-crane1.png'
  },
  {
    name: "Pizzana",
    cuisine: "Italian, Pizza",
    price: "$$",
    path: "/usa/other/los-angeles/pizzana",
    image: '/images/pizzana1.png'
  },
  {
    name: "Pizzeria Bianco",
    cuisine: "Pizza, Italian-American",
    price: "$$",
    path: "/usa/other/los-angeles/pizzeria-bianco",
    image: '/images/pizzeria-bianco1.png'
  },
  {
    name: "Pizzeria Bianco Los Angeles",
    cuisine: "Pizza, Italian-American",
    price: "$$",
    path: "/usa/other/los-angeles/pizzeria-bianco-los-angeles",
    image: '/images/pizzeria-bianco-los-angeles1.png'
  },
  {
    name: "Pizzeria Mozza",
    cuisine: "Pizza, Italian",
    price: "$$",
    path: "/usa/other/los-angeles/pizzeria-mozza",
    image: '/images/pizzeria-mozza1.png'
  },
  {
    name: "Pizzeria Sei",
    cuisine: "Pizza, Contemporary",
    price: "$$",
    path: "/usa/other/los-angeles/pizzeria-sei",
    image: '/images/pizzeria-sei1.png'
  },
  {
    name: "Pollo a la Brasa",
    cuisine: "Peruvian",
    price: "$",
    path: "/usa/other/los-angeles/pollo-a-la-brasa",
    image: '/images/pollo-a-la-brasa1.png'
  },
  {
    name: "Q Sushi",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/los-angeles/q-sushi",
    image: '/images/q-sushi1.png'
  },
  {
    name: "Quarter Sheets",
    cuisine: "Pizza",
    price: "$$",
    path: "/usa/other/los-angeles/quarter-sheets",
    image: '/images/quarter-sheets1.png'
  },
  {
    name: "Quarters BBQ",
    cuisine: "Korean, Barbecue",
    price: "$$$",
    path: "/usa/other/los-angeles/quarters-bbq",
    image: '/images/quarters-bbq1.png'
  },
  {
    name: "Rasarumah",
    cuisine: "Malaysian",
    price: "$$$",
    path: "/usa/other/los-angeles/rasarumah",
    image: '/images/rasarumah1.png'
  },
  {
    name: "Redbird",
    cuisine: "Contemporary, Californian",
    price: "$$$",
    path: "/usa/other/los-angeles/redbird",
    image: '/images/redbird1.png'
  },
  {
    name: "Restaurant Ki",
    cuisine: "Korean Contemporary",
    price: "$$$$",
    path: "/usa/other/los-angeles/restaurant-ki",
    image: '/images/restaurant-ki1.png'
  },
  {
    name: "Ronan",
    cuisine: "Italian",
    price: "$$$",
    path: "/usa/other/los-angeles/ronan",
    image: '/images/ronan1.png'
  },
  {
    name: "Rossoblu",
    cuisine: "Italian, Regional Cuisine",
    price: "$$",
    path: "/usa/other/los-angeles/rossoblu",
    image: '/images/rossoblu1.png'
  },
  {
    name: "Saffy's",
    cuisine: "Middle Eastern",
    price: "$$$",
    path: "/usa/other/los-angeles/saffys",
    image: '/images/saffys1.png'
  },
  {
    name: "San Laurel",
    cuisine: "Spanish, Contemporary",
    price: "$$$$",
    path: "/usa/other/los-angeles/san-laurel",
    image: '/images/san-laurel1.png'
  },
  {
    name: "Shibumi",
    cuisine: "Japanese, Traditional Cuisine",
    price: "$$$$",
    path: "/usa/other/los-angeles/shibumi",
    image: '/images/shibumi1.png'
  },
  {
    name: "Spoon & Pork",
    cuisine: "Filipino, Fusion",
    price: "$$",
    path: "/usa/other/los-angeles/spoon-pork",
    image: '/images/spoon-pork1.png'
  },
  {
    name: "Sushi Kaneyoshi",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/los-angeles/sushi-kaneyoshi",
    image: '/images/sushi-kaneyoshi1.png'
  },
  {
    name: "Sushi Takeda",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/los-angeles/sushi-takeda",
    image: '/images/sushi-takeda1.png'
  },
  {
    name: "The Factory Kitchen",
    cuisine: "Italian, Regional Cuisine",
    price: "$$",
    path: "/usa/other/los-angeles/the-factory-kitchen",
    image: '/images/the-factory-kitchen1.png'
  },
  {
    name: "Tomat",
    cuisine: "Californian",
    price: "$$$",
    path: "/usa/other/los-angeles/tomat",
    image: '/images/tomat1.png'
  },
  {
    name: "Tsubaki",
    cuisine: "Japanese, Izakaya",
    price: "$$",
    path: "/usa/other/los-angeles/tsubaki",
    image: '/images/tsubaki1.png'
  },
  {
    name: "Uka",
    cuisine: "Japanese Contemporary",
    price: "$$$$",
    path: "/usa/other/los-angeles/uka",
    image: '/images/uka1.png'
  },
  {
    name: "Villa's Tacos",
    cuisine: "Mexican",
    price: "$",
    path: "/usa/other/los-angeles/villas-tacos",
    image: '/images/villas-tacos1.png'
  },
  {
    name: "Yong Su San",
    cuisine: "Korean, Regional Cuisine",
    price: "$$$",
    path: "/usa/other/los-angeles/yong-su-san",
    image: '/images/yong-su-san1.png'
  },
  {
    name: "Yunomi Handroll",
    cuisine: "Japanese, Sushi",
    price: "$$",
    path: "/usa/other/los-angeles/yunomi-handroll",
    image: '/images/yunomi-handroll1.png'
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
