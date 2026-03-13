import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Washington";

const restaurants = [
  {
    name: "1789",
    cuisine: "American, French",
    price: "$$$$",
    path: "/usa/other/washington/1789",
    image: '/images/17891.png'
  },
  {
    name: "Albi",
    cuisine: "Middle Eastern",
    price: "$$$$",
    path: "/usa/other/washington/albi",
    image: '/images/albi1.png'
  },
  {
    name: "Amparo Fondita",
    cuisine: "Mexican, Contemporary",
    price: "$$",
    path: "/usa/other/washington/amparo-fondita",
    image: '/images/amparo-fondita1.png'
  },
  {
    name: "Anju",
    cuisine: "Korean, Contemporary",
    price: "$$$",
    path: "/usa/other/washington/anju",
    image: '/images/anju1.png'
  },
  {
    name: "Annabelle",
    cuisine: "Contemporary, American",
    price: "$$$",
    path: "/usa/other/washington/annabelle",
    image: '/images/annabelle1.png'
  },
  {
    name: "Apéro",
    cuisine: "French, Contemporary",
    price: "$$$$",
    path: "/usa/other/washington/apro",
    image: '/images/apro1.png'
  },
  {
    name: "Astoria DC",
    cuisine: "Asian, Sichuan",
    price: "$$",
    path: "/usa/other/washington/astoria-dc",
    image: '/images/astoria-dc1.png'
  },
  {
    name: "Balos Estiatorio",
    cuisine: "Greek, Mediterranean Cuisine",
    price: "$$$",
    path: "/usa/other/washington/balos-estiatorio",
    image: '/images/balos-estiatorio1.png'
  },
  {
    name: "Bar Chinois",
    cuisine: "Asian, Dim Sum",
    price: "$$",
    path: "/usa/other/washington/bar-chinois",
    image: '/images/bar-chinois1.png'
  },
  {
    name: "Beloved BBQ at Love, Makoto",
    cuisine: "Japanese, Steakhouse",
    price: "$$$",
    path: "/usa/other/washington/beloved-bbq-at-love-makoto",
    image: '/images/beloved-bbq-at-love-makoto1.png'
  },
  {
    name: "BlackSalt",
    cuisine: "Seafood, American",
    price: "$$$",
    path: "/usa/other/washington/blacksalt",
    image: '/images/blacksalt1.png'
  },
  {
    name: "Blue Duck Tavern",
    cuisine: "American, American Contemporary",
    price: "$$$$",
    path: "/usa/other/washington/blue-duck-tavern",
    image: '/images/blue-duck-tavern1.png'
  },
  {
    name: "Bresca",
    cuisine: "Contemporary, American",
    price: "$$$$",
    path: "/usa/other/washington/bresca",
    image: '/images/bresca1.png'
  },
  {
    name: "Café Riggs",
    cuisine: "Contemporary, French",
    price: "$$$",
    path: "/usa/other/washington/caf-riggs",
    image: '/images/caf-riggs1.png'
  },
  {
    name: "Cane",
    cuisine: "Caribbean, Regional Cuisine",
    price: "$$",
    path: "/usa/other/washington/cane",
    image: '/images/cane1.png'
  },
  {
    name: "Causa",
    cuisine: "Peruvian, Latin American",
    price: "$$$$",
    path: "/usa/other/washington/causa",
    image: '/images/causa1.png'
  },
  {
    name: "Chang Chang",
    cuisine: "Chinese, Asian",
    price: "$$$",
    path: "/usa/other/washington/chang-chang",
    image: '/images/chang-chang1.png'
  },
  {
    name: "Chaplin's",
    cuisine: "Asian, Ramen",
    price: "$$",
    path: "/usa/other/washington/chaplins",
    image: '/images/chaplins1.png'
  },
  {
    name: "Chloe",
    cuisine: "International, American",
    price: "$$$",
    path: "/usa/other/washington/chloe",
    image: '/images/chloe1.png'
  },
  {
    name: "Cranes",
    cuisine: "Spanish, Contemporary",
    price: "$$$$",
    path: "/usa/other/washington/cranes",
    image: '/images/cranes1.png'
  },
  {
    name: "Cucina Morini",
    cuisine: "Italian",
    price: "$$$",
    path: "/usa/other/washington/cucina-morini",
    image: '/images/cucina-morini1.png'
  },
  {
    name: "Daru",
    cuisine: "Indian, Regional Cuisine",
    price: "$$",
    path: "/usa/other/washington/daru",
    image: '/images/daru1.png'
  },
  {
    name: "Das",
    cuisine: "Ethiopian, Regional Cuisine",
    price: "$$",
    path: "/usa/other/washington/das",
    image: '/images/das1.png'
  },
  {
    name: "Dauphine's",
    cuisine: "Creole, Creative",
    price: "$$",
    path: "/usa/other/washington/dauphines",
    image: '/images/dauphines1.png'
  },
  {
    name: "Dear Sushi at Love, Makoto",
    cuisine: "Sushi, Japanese Contemporary",
    price: "$$$",
    path: "/usa/other/washington/dear-sushi-at-love-makoto",
    image: '/images/dear-sushi-at-love-makoto1.png'
  },
  {
    name: "Del Mar",
    cuisine: "Spanish, Basque",
    price: "$$$$",
    path: "/usa/other/washington/del-mar",
    image: '/images/del-mar1.png'
  },
  {
    name: "Dōgon",
    cuisine: "African, Caribbean",
    price: "$$$$",
    path: "/usa/other/washington/dgon",
    image: '/images/dgon1.png'
  },
  {
    name: "El Secreto de Rosita",
    cuisine: "Peruvian, Latin American",
    price: "$$$",
    path: "/usa/other/washington/el-secreto-de-rosita",
    image: '/images/el-secreto-de-rosita1.png'
  },
  {
    name: "Elcielo Washington DC",
    cuisine: "Colombian, Contemporary",
    price: "$$$$",
    path: "/usa/other/washington/elcielo-washington-dc",
    image: '/images/elcielo-washington-dc1.png'
  },
  {
    name: "Elfegne",
    cuisine: "Ethiopian, Regional Cuisine",
    price: "$$",
    path: "/usa/other/washington/elfegne",
    image: '/images/elfegne1.png'
  },
  {
    name: "Ellē",
    cuisine: "Contemporary, Bakery",
    price: "$$",
    path: "/usa/other/washington/ell",
    image: '/images/ell1.png'
  },
  {
    name: "Elmina",
    cuisine: "African, Contemporary",
    price: "$$$$",
    path: "/usa/other/washington/elmina",
    image: '/images/elmina1.png'
  },
  {
    name: "Estuary",
    cuisine: "Seafood, Regional Cuisine",
    price: "$$$$",
    path: "/usa/other/washington/estuary",
    image: '/images/estuary1.png'
  },
  {
    name: "Family Ethiopian",
    cuisine: "Ethiopian, Regional Cuisine",
    price: "$$",
    path: "/usa/other/washington/family-ethiopian",
    image: '/images/family-ethiopian1.png'
  },
  {
    name: "Fiola",
    cuisine: "Italian, Contemporary",
    price: "$$$$",
    path: "/usa/other/washington/fiola",
    image: '/images/fiola1.png'
  },
  {
    name: "Fiola Mare",
    cuisine: "Seafood, Contemporary",
    price: "$$$$",
    path: "/usa/other/washington/fiola-mare",
    image: '/images/fiola-mare1.png'
  },
  {
    name: "Fish Shop",
    cuisine: "Seafood",
    price: "$$$",
    path: "/usa/other/washington/fish-shop",
    image: '/images/fish-shop1.png'
  },
  {
    name: "Georgia Brown’s",
    cuisine: "Southern, American",
    price: "$$$",
    path: "/usa/other/washington/georgia-browns",
    image: '/images/georgia-browns1.png'
  },
  {
    name: "Gravitas",
    cuisine: "Contemporary, American",
    price: "$$$$",
    path: "/usa/other/washington/gravitas",
    image: '/images/gravitas1.png'
  },
  {
    name: "Grazie Nonna",
    cuisine: "Italian-American, Pizza",
    price: "$$$",
    path: "/usa/other/washington/grazie-nonna",
    image: '/images/grazie-nonna1.png'
  },
  {
    name: "Hank’s Oyster Bar",
    cuisine: "Seafood, Oyster Specialities",
    price: "$$",
    path: "/usa/other/washington/hanks-oyster-bar",
    image: '/images/hanks-oyster-bar1.png'
  },
  {
    name: "Hitching Post",
    cuisine: "Southern, Regional Cuisine",
    price: "$$",
    path: "/usa/other/washington/hitching-post",
    image: '/images/hitching-post1.png'
  },
  {
    name: "Imperfecto: The Chef's Table",
    cuisine: "Latin American",
    price: "$$$$",
    path: "/usa/other/washington/imperfecto-the-chefs-table",
    image: '/images/imperfecto-the-chefs-table1.png'
  },
  {
    name: "Ivy City Smokehouse",
    cuisine: "Seafood, Barbecue",
    price: "$$",
    path: "/usa/other/washington/ivy-city-smokehouse",
    image: '/images/ivy-city-smokehouse1.png'
  },
  {
    name: "Jaleo",
    cuisine: "Spanish",
    price: "$$",
    path: "/usa/other/washington/jaleo",
    image: '/images/jaleo1.png'
  },
  {
    name: "Jônt",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/washington/jnt",
    image: '/images/jnt1.png'
  },
  {
    name: "Kappo",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/usa/other/washington/kappo",
    image: '/images/kappo1.png'
  },
  {
    name: "Karizma Modern Indian",
    cuisine: "Indian, Contemporary",
    price: "$$",
    path: "/usa/other/washington/karizma-modern-indian",
    image: '/images/karizma-modern-indian1.png'
  },
  {
    name: "Karma Modern Indian",
    cuisine: "Indian, Contemporary",
    price: "$$",
    path: "/usa/other/washington/karma-modern-indian",
    image: '/images/karma-modern-indian1.png'
  },
  {
    name: "Karravaan",
    cuisine: "Asian",
    price: "$$$",
    path: "/usa/other/washington/karravaan",
    image: '/images/karravaan1.png'
  },
  {
    name: "La Bise",
    cuisine: "French",
    price: "$$$",
    path: "/usa/other/washington/la-bise",
    image: '/images/la-bise1.png'
  },
  {
    name: "La Tejana",
    cuisine: "Mexican",
    price: "$",
    path: "/usa/other/washington/la-tejana",
    image: '/images/la-tejana1.png'
  },
  {
    name: "Laos in Town",
    cuisine: "South East Asian, Lao",
    price: "$$",
    path: "/usa/other/washington/laos-in-town",
    image: '/images/laos-in-town1.png'
  },
  {
    name: "Lapis",
    cuisine: "Afghan",
    price: "$$",
    path: "/usa/other/washington/lapis",
    image: '/images/lapis1.png'
  },
  {
    name: "L’Ardente",
    cuisine: "Italian",
    price: "$$",
    path: "/usa/other/washington/lardente",
    image: '/images/lardente1.png'
  },
  {
    name: "La'Shukran",
    cuisine: "Middle Eastern",
    price: "$$$",
    path: "/usa/other/washington/lashukran",
    image: '/images/lashukran1.png'
  },
  {
    name: "Little Pearl",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/washington/little-pearl",
    image: '/images/little-pearl1.png'
  },
  {
    name: "Lutèce",
    cuisine: "Contemporary, American",
    price: "$$",
    path: "/usa/other/washington/lutce",
    image: '/images/lutce1.png'
  },
  {
    name: "Maketto",
    cuisine: "Asian",
    price: "$$",
    path: "/usa/other/washington/maketto",
    image: '/images/maketto1.png'
  },
  {
    name: "Mandu",
    cuisine: "Korean",
    price: "$$",
    path: "/usa/other/washington/mandu",
    image: '/images/mandu1.png'
  },
  {
    name: "Masseria",
    cuisine: "Italian, Regional Cuisine",
    price: "$$$$",
    path: "/usa/other/washington/masseria",
    image: '/images/masseria1.png'
  },
  {
    name: "Maydān",
    cuisine: "Middle Eastern, Grills",
    price: "$$$",
    path: "/usa/other/washington/maydn",
    image: '/images/maydn1.png'
  },
  {
    name: "Menya Hosaki",
    cuisine: "Japanese, Ramen",
    price: "$$",
    path: "/usa/other/washington/menya-hosaki",
    image: '/images/menya-hosaki1.png'
  },
  {
    name: "Michele's",
    cuisine: "American",
    price: "$$$",
    path: "/usa/other/washington/micheles",
    image: '/images/micheles1.png'
  },
  {
    name: "minibar by José Andrés",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/washington/minibar-by-jos-andrs",
    image: '/images/minibar-by-jos-andrs1.png'
  },
  {
    name: "Mita",
    cuisine: "Vegetarian, Latin American",
    price: "$$$$",
    path: "/usa/other/washington/mita",
    image: '/images/mita1.png'
  },
  {
    name: "Moon Rabbit",
    cuisine: "Vietnamese",
    price: "$$$",
    path: "/usa/other/washington/moon-rabbit",
    image: '/images/moon-rabbit1.png'
  },
  {
    name: "New Heights",
    cuisine: "American",
    price: "$$$",
    path: "/usa/other/washington/new-heights",
    image: '/images/new-heights1.png'
  },
  {
    name: "Obelisk",
    cuisine: "Italian",
    price: "$$$$",
    path: "/usa/other/washington/obelisk",
    image: '/images/obelisk1.png'
  },
  {
    name: "Omakase at Barracks Row",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/washington/omakase-at-barracks-row",
    image: '/images/omakase-at-barracks-row1.png'
  },
  {
    name: "Opal",
    cuisine: "American",
    price: "$$$",
    path: "/usa/other/washington/opal",
    image: '/images/opal1.png'
  },
  {
    name: "Ottoman Taverna",
    cuisine: "Turkish",
    price: "$$",
    path: "/usa/other/washington/ottoman-taverna",
    image: '/images/ottoman-taverna1.png'
  },
  {
    name: "Oyamel",
    cuisine: "Mexican",
    price: "$$",
    path: "/usa/other/washington/oyamel",
    image: '/images/oyamel1.png'
  },
  {
    name: "Oyster Oyster",
    cuisine: "Vegetarian, Contemporary",
    price: "$$$",
    path: "/usa/other/washington/oyster-oyster",
    image: '/images/oyster-oyster1.png'
  },
  {
    name: "Pascual",
    cuisine: "Mexican, Contemporary",
    price: "$$$",
    path: "/usa/other/washington/pascual",
    image: '/images/pascual1.png'
  },
  {
    name: "Patty O's Cafe & Bakery",
    cuisine: "European",
    price: "$$$",
    path: "/usa/other/washington/patty-os-cafe-bakery",
    image: '/images/patty-os-cafe-bakery1.png'
  },
  {
    name: "Petite Cerise",
    cuisine: "French",
    price: "$$$$",
    path: "/usa/other/washington/petite-cerise",
    image: '/images/petite-cerise1.png'
  },
  {
    name: "PhoXotic",
    cuisine: "Vietnamese",
    price: "$$",
    path: "/usa/other/washington/phoxotic",
    image: '/images/phoxotic1.png'
  },
  {
    name: "Pineapple and Pearls",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/washington/pineapple-and-pearls",
    image: '/images/pineapple-and-pearls1.png'
  },
  {
    name: "Providencia",
    cuisine: "Contemporary",
    price: "$$",
    path: "/usa/other/washington/providencia",
    image: '/images/providencia1.png'
  },
  {
    name: "Queen’s English",
    cuisine: "Chinese, Contemporary",
    price: "$$",
    path: "/usa/other/washington/queens-english",
    image: '/images/queens-english1.png'
  },
  {
    name: "Rania",
    cuisine: "Indian, Contemporary",
    price: "$$$$",
    path: "/usa/other/washington/rania",
    image: '/images/rania1.png'
  },
  {
    name: "Rasika",
    cuisine: "Indian",
    price: "$$$",
    path: "/usa/other/washington/rasika",
    image: '/images/rasika1.png'
  },
  {
    name: "Raw Omakase",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/washington/raw-omakase",
    image: '/images/raw-omakase1.png'
  },
  {
    name: "Residents Cafe & Bar",
    cuisine: "Contemporary",
    price: "$$",
    path: "/usa/other/washington/residents-cafe-bar",
    image: '/images/residents-cafe-bar1.png'
  },
  {
    name: "Reveler's Hour",
    cuisine: "Contemporary, Italian",
    price: "$$$",
    path: "/usa/other/washington/revelers-hour",
    image: '/images/revelers-hour1.png'
  },
  {
    name: "Ris",
    cuisine: "American",
    price: "$$",
    path: "/usa/other/washington/ris",
    image: '/images/ris1.png'
  },
  {
    name: "Rooster & Owl",
    cuisine: "Contemporary, Fusion",
    price: "$$$",
    path: "/usa/other/washington/rooster-owl",
    image: '/images/rooster-owl1.png'
  },
  {
    name: "Rose’s Luxury",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/washington/roses-luxury",
    image: '/images/roses-luxury1.png'
  },
  {
    name: "Royal",
    cuisine: "Latin American",
    price: "$$",
    path: "/usa/other/washington/royal",
    image: '/images/royal1.png'
  },
  {
    name: "Rumi's Kitchen",
    cuisine: "Persian",
    price: "$$",
    path: "/usa/other/washington/rumis-kitchen",
    image: '/images/rumis-kitchen1.png'
  },
  {
    name: "Sababa",
    cuisine: "Mediterranean Cuisine",
    price: "$$",
    path: "/usa/other/washington/sababa",
    image: '/images/sababa1.png'
  },
  {
    name: "San Lorenzo",
    cuisine: "Italian",
    price: "$$$",
    path: "/usa/other/washington/san-lorenzo",
    image: '/images/san-lorenzo1.png'
  },
  {
    name: "San Lorenzo",
    cuisine: "Italian",
    price: "$$$",
    path: "/usa/other/washington/san-lorenzo",
    image: '/images/san-lorenzo1.png'
  },
  {
    name: "Seven Reasons",
    cuisine: "Latin American",
    price: "$$$$",
    path: "/usa/other/washington/seven-reasons",
    image: '/images/seven-reasons1.png'
  },
  {
    name: "Sfoglina",
    cuisine: "Italian",
    price: "$$",
    path: "/usa/other/washington/sfoglina",
    image: '/images/sfoglina1.png'
  },
  {
    name: "Shilling Canning Company",
    cuisine: "American, Contemporary",
    price: "$$$",
    path: "/usa/other/washington/shilling-canning-company",
    image: '/images/shilling-canning-company1.png'
  },
  {
    name: "Shōtō",
    cuisine: "Japanese",
    price: "$$$",
    path: "/usa/other/washington/sht",
    image: '/images/sht1.png'
  },
  {
    name: "St. James",
    cuisine: "Caribbean",
    price: "$$$",
    path: "/usa/other/washington/st-james",
    image: '/images/st-james1.png'
  },
  {
    name: "Stellina Pizzeria",
    cuisine: "Pizza, Italian",
    price: "$$",
    path: "/usa/other/washington/stellina-pizzeria",
    image: '/images/stellina-pizzeria1.png'
  },
  {
    name: "Supra",
    cuisine: "Central Asian",
    price: "$$",
    path: "/usa/other/washington/supra",
    image: '/images/supra1.png'
  },
  {
    name: "Sushi Nakazawa Washington DC",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/washington/sushi-nakazawa-washington-dc",
    image: '/images/sushi-nakazawa-washington-dc1.png'
  },
  {
    name: "Taqueria Habanero",
    cuisine: "Mexican",
    price: "$$",
    path: "/usa/other/washington/taqueria-habanero",
    image: '/images/taqueria-habanero1.png'
  },
  {
    name: "The Bombay Club",
    cuisine: "Indian, Contemporary",
    price: "$$$",
    path: "/usa/other/washington/the-bombay-club",
    image: '/images/the-bombay-club1.png'
  },
  {
    name: "The Dabney",
    cuisine: "American, Contemporary",
    price: "$$$$",
    path: "/usa/other/washington/the-dabney",
    image: '/images/the-dabney1.png'
  },
  {
    name: "The Imperial",
    cuisine: "American",
    price: "$$$",
    path: "/usa/other/washington/the-imperial",
    image: '/images/the-imperial1.png'
  },
  {
    name: "The Inn at Little Washington",
    cuisine: "American, French",
    price: "$$$$",
    path: "/usa/other/washington/the-inn-at-little-washington",
    image: '/images/the-inn-at-little-washington1.png'
  },
  {
    name: "The Pembroke",
    cuisine: "French",
    price: "$$$",
    path: "/usa/other/washington/the-pembroke",
    image: '/images/the-pembroke1.png'
  },
  {
    name: "The Red Hen",
    cuisine: "Italian",
    price: "$$",
    path: "/usa/other/washington/the-red-hen",
    image: '/images/the-red-hen1.png'
  },
  {
    name: "The Saga",
    cuisine: "Spanish",
    price: "$$$$",
    path: "/usa/other/washington/the-saga",
    image: '/images/the-saga1.png'
  },
  {
    name: "Thip Khao",
    cuisine: "Lao",
    price: "$$",
    path: "/usa/other/washington/thip-khao",
    image: '/images/thip-khao1.png'
  },
  {
    name: "Tiger Fork",
    cuisine: "Chinese, Cantonese",
    price: "$$",
    path: "/usa/other/washington/tiger-fork",
    image: '/images/tiger-fork1.png'
  },
  {
    name: "Timber Pizza Co",
    cuisine: "Pizza",
    price: "$",
    path: "/usa/other/washington/timber-pizza-co",
    image: '/images/timber-pizza-co1.png'
  },
  {
    name: "Toki Underground",
    cuisine: "Japanese, Ramen",
    price: "$",
    path: "/usa/other/washington/toki-underground",
    image: '/images/toki-underground1.png'
  },
  {
    name: "Unconventional Diner",
    cuisine: "American",
    price: "$$",
    path: "/usa/other/washington/unconventional-diner",
    image: '/images/unconventional-diner1.png'
  },
  {
    name: "Xiquet",
    cuisine: "Spanish",
    price: "$$$$",
    path: "/usa/other/washington/xiquet",
    image: '/images/xiquet1.png'
  },
  {
    name: "Yellow",
    cuisine: "Middle Eastern",
    price: "$$",
    path: "/usa/other/washington/yellow",
    image: '/images/yellow1.png'
  },
  {
    name: "Your Only Friend",
    cuisine: "Gastropub, American",
    price: "$$",
    path: "/usa/other/washington/your-only-friend",
    image: '/images/your-only-friend1.png'
  },
  {
    name: "Zaytinya",
    cuisine: "Mediterranean Cuisine",
    price: "$$",
    path: "/usa/other/washington/zaytinya",
    image: '/images/zaytinya1.png'
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
