import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Chicago";

const restaurants = [
  {
    name: "Alinea",
    cuisine: "Creative, Modern Cuisine",
    price: "$$$$",
    path: "/usa/illinois/chicago/Alinea",
    image: "/images/alinea1.png"
  },
  {
    name: "Alla Vita",
    cuisine: "Italian, Italian-American",
    price: "$$$",
    path: "/usa/illinois/chicago/AllaVita",
    image: "/images/allavita1.png"
  },
  {
    name: "Andros Taverna",
    cuisine: "Greek",
    price: "$$$",
    path: "/usa/illinois/chicago/AndrosTaverna",
    image: "/images/androstaverna1.png"
  },
  {
    name: "Anelya",
    cuisine: "Eastern European",
    price: "$$",
    path: "/usa/illinois/chicago/Anelya",
    image: "/images/anelya1.png"
  },
  {
    name: "Atelier",
    cuisine: "American",
    price: "$$$$",
    path: "/usa/illinois/chicago/AtelierCHI",
    image: "/images/atelier1.png"
  },
  {
    name: "avec",
    cuisine: "Mediterranean Cuisine",
    price: "$$",
    path: "/usa/illinois/chicago/Avec",
    image: "/images/avec1.png"
  },
  {
    name: "Azul Mariscos + Muelle",
    cuisine: "Seafood, Latin American",
    price: "$$$",
    path: "/usa/illinois/chicago/AzulMariscosMuelle",
    image: "/images/azulmariscosmuelle1.png"
  },
  {
    name: "Bar Mar",
    cuisine: "Seafood, Spanish",
    price: "$$$",
    path: "/usa/illinois/chicago/BarMar",
    image: "/images/barmar1.png"
  },
  {
    name: "Bavette’s Bar & Boeuf",
    cuisine: "Steakhouse",
    price: "$$$$",
    path: "/usa/illinois/chicago/BavettesBarBoeuf",
    image: "/images/bavettesbarboeuf1.png"
  },
  {
    name: "Bayan Ko",
    cuisine: "Filipino, Cuban",
    price: "$$$$",
    path: "/usa/illinois/chicago/BayanKo",
    image: "/images/bayanko1.png"
  },
  {
    name: "Beity",
    cuisine: "Lebanese, Contemporary",
    price: "$$$$",
    path: "/usa/illinois/chicago/Beity",
    image: "/images/beity1.png"
  },
  {
    name: "Birrieria Zaragoza",
    cuisine: "Mexican, Regional Cuisine",
    price: "$",
    path: "/usa/illinois/chicago/BirrieriaZaragoza",
    image: "/images/birrieriazaragoza1.png"
  },
  {
    name: "Blue Door Kitchen & Garden",
    cuisine: "American",
    price: "$$",
    path: "/usa/illinois/chicago/BlueDoorKitchenGarden",
    image: "/images/bluedoorkitchengarden1.png"
  },
  {
    name: "Boka",
    cuisine: "Contemporary, American",
    price: "$$$$",
    path: "/usa/illinois/chicago/Boka",
    image: "/images/boka1.png"
  },
  {
    name: "Boonie's",
    cuisine: "Filipino",
    price: "$$",
    path: "/usa/illinois/chicago/Boonies",
    image: "/images/boonies1.png"
  },
  {
    name: "Brindille",
    cuisine: "French",
    price: "$$$$",
    path: "/usa/illinois/chicago/Brindille",
    image: "/images/brindille1.png"
  },
  {
    name: "Cariño",
    cuisine: "Mexican, Contemporary",
    price: "$$$$",
    path: "/usa/illinois/chicago/Cario",
    image: "/images/cario1.png"
  },
  {
    name: "Cellar Door Provisions",
    cuisine: "Mediterranean Cuisine",
    price: "$$",
    path: "/usa/illinois/chicago/CellarDoorProvisions",
    image: "/images/cellardoorprovisions1.png"
  },
  {
    name: "Chef’s Special Cocktail Bar",
    cuisine: "Chinese, American",
    price: "$$",
    path: "/usa/illinois/chicago/ChefsSpecialCocktailBar",
    image: "/images/chefsspecialcocktailbar1.png"
  },
  {
    name: "Chez Joël",
    cuisine: "French, Classic French",
    price: "$$",
    path: "/usa/illinois/chicago/ChezJol",
    image: "/images/chezjol1.png"
  },
  {
    name: "Chicago Cut",
    cuisine: "Steakhouse",
    price: "$$$",
    path: "/usa/illinois/chicago/ChicagoCut",
    image: "/images/chicagocut1.png"
  },
  {
    name: "Chilam Balam",
    cuisine: "Mexican",
    price: "$$",
    path: "/usa/illinois/chicago/ChilamBalam",
    image: "/images/chilambalam1.png"
  },
  {
    name: "Ciccio Mio",
    cuisine: "Italian, American",
    price: "$$",
    path: "/usa/illinois/chicago/CiccioMio",
    image: "/images/cicciomio1.png"
  },
  {
    name: "Coalfire",
    cuisine: "Pizza, American",
    price: "$$",
    path: "/usa/illinois/chicago/Coalfire",
    image: "/images/coalfire1.png"
  },
  {
    name: "Daisies",
    cuisine: "Italian",
    price: "$$",
    path: "/usa/illinois/chicago/Daisies",
    image: "/images/daisies1.png"
  },
  {
    name: "Dear Margaret",
    cuisine: "Contemporary, French",
    price: "$$$",
    path: "/usa/illinois/chicago/DearMargaret",
    image: "/images/dearmargaret1.png"
  },
  {
    name: "Demera",
    cuisine: "Ethiopian",
    price: "$$",
    path: "/usa/illinois/chicago/Demera",
    image: "/images/demera1.png"
  },
  {
    name: "EL Ideas",
    cuisine: "Contemporary, Creative",
    price: "$$$$",
    path: "/usa/illinois/chicago/ElIdeas",
    image: "/images/elideas1.png"
  },
  {
    name: "Elina's",
    cuisine: "Italian-American, Regional Cuisine",
    price: "$$$",
    path: "/usa/illinois/chicago/Elinas",
    image: "/images/elinas1.png"
  },
  {
    name: "Elske",
    cuisine: "Contemporary, American Contemporary",
    price: "$$$$",
    path: "/usa/illinois/chicago/Elske",
    image: "/images/elske1.png"
  },
  {
    name: "Esmé",
    cuisine: "Contemporary, Creative",
    price: "$$$$",
    path: "/usa/illinois/chicago/Esme",
    image: "/images/esme1.png"
  },
  {
    name: "Ever",
    cuisine: "Creative, Modern Cuisine",
    price: "$$$$",
    path: "/usa/illinois/chicago/Ever",
    image: "/images/ever1.png"
  },
  {
    name: "Feld",
    cuisine: "Contemporary, Farm to table",
    price: "$$$$",
    path: "/usa/illinois/chicago/Feld",
    image: "/images/feld1.png"
  },
  {
    name: "Frontera Grill",
    cuisine: "Mexican",
    price: "$$",
    path: "/usa/illinois/chicago/FronteraGrill",
    image: "/images/fronteragrill1.png"
  },
  {
    name: "Gaijin",
    cuisine: "Japanese, Okonomiyaki",
    price: "$$",
    path: "/usa/illinois/chicago/Gaijin",
    image: "/images/gaijin1.png"
  },
  {
    name: "Galit",
    cuisine: "Middle Eastern, Mediterranean Cuisine",
    price: "$$$$",
    path: "/usa/illinois/chicago/Galit",
    image: "/images/galit1.png"
  },
  {
    name: "GG's Chicken Shop",
    cuisine: "American",
    price: "$$",
    path: "/usa/illinois/chicago/GgsChickenShop",
    image: "/images/ggschickenshop1.png"
  },
  {
    name: "Ghin Khao",
    cuisine: "Thai",
    price: "$",
    path: "/usa/illinois/chicago/GhinKhao",
    image: "/images/ghinkhao1.png"
  },
  {
    name: "Giant",
    cuisine: "American",
    price: "$$",
    path: "/usa/illinois/chicago/Giant",
    image: "/images/giant1.png"
  },
  {
    name: "Gilt Bar",
    cuisine: "Gastropub",
    price: "$$",
    path: "/usa/illinois/chicago/GiltBar",
    image: "/images/giltbar1.png"
  },
  {
    name: "Girl & The Goat",
    cuisine: "Contemporary, American",
    price: "$$$",
    path: "/usa/illinois/chicago/GirlTheGoat",
    image: "/images/girlthegoat1.png"
  },
  {
    name: "HaiSous",
    cuisine: "Vietnamese",
    price: "$$",
    path: "/usa/illinois/chicago/Haisous",
    image: "/images/haisous1.png"
  },
  {
    name: "Hugo’s Frog Bar & Fish House",
    cuisine: "American",
    price: "$$$",
    path: "/usa/illinois/chicago/HugosFrogBarFishHouse",
    image: "/images/hugosfrogbarfishhouse1.png"
  },
  {
    name: "Ina Mae",
    cuisine: "Southern, Creole",
    price: "$$",
    path: "/usa/illinois/chicago/InaMae",
    image: "/images/inamae1.png"
  },
  {
    name: "Indienne",
    cuisine: "Indian, Contemporary",
    price: "$$$$",
    path: "/usa/illinois/chicago/Indienne",
    image: "/images/indienne1.png"
  },
  {
    name: "Itoko",
    cuisine: "Japanese",
    price: "$$$",
    path: "/usa/illinois/chicago/Itoko",
    image: "/images/itoko1.png"
  },
  {
    name: "Jeong",
    cuisine: "Korean, Contemporary",
    price: "$$$$",
    path: "/usa/illinois/chicago/Jeong",
    image: "/images/jeong1.png"
  },
  {
    name: "John's Food and Wine",
    cuisine: "American",
    price: "$$$",
    path: "/usa/illinois/chicago/JohnsFoodAndWine",
    image: "/images/johnsfoodandwine1.png"
  },
  {
    name: "Kasama",
    cuisine: "Filipino, Contemporary",
    price: "$$$$",
    path: "/usa/illinois/chicago/Kasama",
    image: "/images/kasama1.png"
  },
  {
    name: "Kie-Gol-Lanee",
    cuisine: "Mexican",
    price: "$$",
    path: "/usa/illinois/chicago/Kiegollanee",
    image: "/images/kiegollanee1.png"
  },
  {
    name: "Kumiko",
    cuisine: "Japanese, Asian",
    price: "$$$$",
    path: "/usa/illinois/chicago/Kumiko",
    image: "/images/kumiko1.png"
  },
  {
    name: "Kyoten Next Door",
    cuisine: "Sushi, Japanese",
    price: "$$$$",
    path: "/usa/illinois/chicago/KyotenNextDoor",
    image: "/images/kyotennextdoor1.png"
  },
  {
    name: "Lardon",
    cuisine: "Deli, Italian",
    price: "$$",
    path: "/usa/illinois/chicago/Lardon",
    image: "/images/lardon1.png"
  },
  {
    name: "Les Nomades",
    cuisine: "French",
    price: "$$$$",
    path: "/usa/illinois/chicago/LesNomades",
    image: "/images/lesnomades1.png"
  },
  {
    name: "Longman & Eagle",
    cuisine: "Gastropub",
    price: "$$",
    path: "/usa/illinois/chicago/LongmanEagle",
    image: "/images/longmaneagle1.png"
  },
  {
    name: "Lou Mitchell's",
    cuisine: "American",
    price: "$$",
    path: "/usa/illinois/chicago/LouMitchells",
    image: "/images/loumitchells1.png"
  },
  {
    name: "Lula Cafe",
    cuisine: "American",
    price: "$$",
    path: "/usa/illinois/chicago/LulaCafe",
    image: "/images/lulacafe1.png"
  },
  {
    name: "Mako",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/illinois/chicago/Mako",
    image: "/images/mako1.png"
  },
  {
    name: "Mama Delia",
    cuisine: "Spanish, Spanish Contemporary",
    price: "$$",
    path: "/usa/illinois/chicago/MamaDelia",
    image: "/images/mamadelia1.png"
  },
  {
    name: "Maple & Ash",
    cuisine: "Steakhouse",
    price: "$$$$",
    path: "/usa/illinois/chicago/MapleAsh",
    image: "/images/mapleash1.png"
  },
  {
    name: "Maxwells Trading",
    cuisine: "Contemporary, American",
    price: "$$$",
    path: "/usa/illinois/chicago/MaxwellsTrading",
    image: "/images/maxwellstrading1.png"
  },
  {
    name: "mfk.",
    cuisine: "Spanish, Fusion",
    price: "$$",
    path: "/usa/illinois/chicago/Mfk",
    image: "/images/mfk1.png"
  },
  {
    name: "Mi Tocaya",
    cuisine: "Mexican",
    price: "$$",
    path: "/usa/illinois/chicago/MiTocaya",
    image: "/images/mitocaya1.png"
  },
  {
    name: "Mirra",
    cuisine: "Fusion, Mexican",
    price: "$$",
    path: "/usa/illinois/chicago/Mirra",
    image: "/images/mirra1.png"
  },
  {
    name: "Momotaro",
    cuisine: "Japanese, Asian",
    price: "$$$",
    path: "/usa/illinois/chicago/Momotaro",
    image: "/images/momotaro1.png"
  },
  {
    name: "Monteverde",
    cuisine: "Italian, American",
    price: "$$$",
    path: "/usa/illinois/chicago/Monteverde",
    image: "/images/monteverde1.png"
  },
  {
    name: "Moody Tongue",
    cuisine: "Contemporary, American Contemporary",
    price: "$$$$",
    path: "/usa/illinois/chicago/MoodyTongue",
    image: "/images/moodytongue1.png"
  },
  {
    name: "Mott St.",
    cuisine: "Fusion, Contemporary",
    price: "$$$",
    path: "/usa/illinois/chicago/MottSt",
    image: "/images/mottst1.png"
  },
  {
    name: "Munno Pizzeria & Bistro",
    cuisine: "Pizza, Italian",
    price: "$$",
    path: "/usa/illinois/chicago/MunnoPizzeriaBistro",
    image: "/images/munnopizzeriabistro1.png"
  },
  {
    name: "Nadu",
    cuisine: "Indian",
    price: "$$",
    path: "/usa/illinois/chicago/Nadu",
    image: "/images/nadu1.png"
  },
  {
    name: "Next",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/illinois/chicago/Next",
    image: "/images/next1.png"
  },
  {
    name: "North Pond",
    cuisine: "Contemporary, American",
    price: "$$$$",
    path: "/usa/illinois/chicago/NorthPond",
    image: "/images/northpond1.png"
  },
  {
    name: "Obélix",
    cuisine: "French",
    price: "$$$",
    path: "/usa/illinois/chicago/Oblix",
    image: "/images/oblix1.png"
  },
  {
    name: "Oliver's",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/usa/illinois/chicago/Olivers",
    image: "/images/olivers1.png"
  },
  {
    name: "Omakase Yume",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/illinois/chicago/OmakaseYume",
    image: "/images/omakaseyume1.png"
  },
  {
    name: "Oriole",
    cuisine: "Contemporary, American Contemporary",
    price: "$$$$",
    path: "/usa/illinois/chicago/Oriole",
    image: "/images/oriole1.png"
  },
  {
    name: "Osteria Langhe",
    cuisine: "Italian",
    price: "$$$",
    path: "/usa/illinois/chicago/OsteriaLanghe",
    image: "/images/osterialanghe1.png"
  },
  {
    name: "Perilla",
    cuisine: "Korean, American",
    price: "$$",
    path: "/usa/illinois/chicago/Perilla",
    image: "/images/perilla1.png"
  },
  {
    name: "Pizza Friendly Pizza",
    cuisine: "Pizza, American",
    price: "$$",
    path: "/usa/illinois/chicago/PizzaFriendlyPizza",
    image: "/images/pizzafriendlypizza1.png"
  },
  {
    name: "Pleasant House Pub",
    cuisine: "Gastropub, English",
    price: "$$",
    path: "/usa/illinois/chicago/PleasantHousePub",
    image: "/images/pleasanthousepub1.png"
  },
  {
    name: "Pompette",
    cuisine: "Contemporary, American",
    price: "$$",
    path: "/usa/illinois/chicago/Pompette",
    image: "/images/pompette1.png"
  },
  {
    name: "Prime & Provisions",
    cuisine: "Steakhouse",
    price: "$$$",
    path: "/usa/illinois/chicago/PrimeProvisions",
    image: "/images/primeprovisions1.png"
  },
  {
    name: "Provaré",
    cuisine: "Fusion, Creole",
    price: "$$$",
    path: "/usa/illinois/chicago/Provar",
    image: "/images/provar1.png"
  },
  {
    name: "Proxi",
    cuisine: "International, Asian",
    price: "$$",
    path: "/usa/illinois/chicago/Proxi",
    image: "/images/proxi1.png"
  },
  {
    name: "ROOP Chicago",
    cuisine: "Indian, Contemporary",
    price: "$$$",
    path: "/usa/illinois/chicago/RoopChicago",
    image: "/images/roopchicago1.png"
  },
  {
    name: "Rose Mary",
    cuisine: "Croatian, Italian",
    price: "$$$",
    path: "/usa/illinois/chicago/RoseMary",
    image: "/images/rosemary1.png"
  },
  {
    name: "RPM Steak",
    cuisine: "Steakhouse, Contemporary",
    price: "$$$$",
    path: "/usa/illinois/chicago/RpmSteak",
    image: "/images/rpmsteak1.png"
  },
  {
    name: "Schwa",
    cuisine: "Contemporary, Innovative",
    price: "$$$$",
    path: "/usa/illinois/chicago/Schwa",
    image: "/images/schwa1.png"
  },
  {
    name: "Sepia",
    cuisine: "American, American Contemporary",
    price: "$$$$",
    path: "/usa/illinois/chicago/Sepia",
    image: "/images/sepia1.png"
  },
  {
    name: "Sifr",
    cuisine: "Middle Eastern",
    price: "$$",
    path: "/usa/illinois/chicago/Sifr",
    image: "/images/sifr1.png"
  },
  {
    name: "S.K.Y.",
    cuisine: "Contemporary",
    price: "$$",
    path: "/usa/illinois/chicago/Sky",
    image: "/images/sky1.png"
  },
  {
    name: "Smyth",
    cuisine: "Contemporary, Creative",
    price: "$$$$",
    path: "/usa/illinois/chicago/Smyth",
    image: "/images/smyth1.png"
  },
  {
    name: "Sochi",
    cuisine: "Vietnamese",
    price: "$$",
    path: "/usa/illinois/chicago/Sochi",
    image: "/images/sochi1.png"
  },
  {
    name: "Sol de Mexico",
    cuisine: "Mexican, Regional Cuisine",
    price: "$$",
    path: "/usa/illinois/chicago/SolDeMexico",
    image: "/images/soldemexico1.png"
  },
  {
    name: "Superkhana International",
    cuisine: "Indian, Fusion",
    price: "$$",
    path: "/usa/illinois/chicago/SuperkhanaInternational",
    image: "/images/superkhanainternational1.png"
  },
  {
    name: "Swift & Sons",
    cuisine: "Steakhouse, American Contemporary",
    price: "$$$$",
    path: "/usa/illinois/chicago/SwiftSons",
    image: "/images/swiftsons1.png"
  },
  {
    name: "Swift & Sons Tavern & Oyster Bar",
    cuisine: "American",
    price: "$$$",
    path: "/usa/illinois/chicago/SwiftSonsTavernOysterBar",
    image: "/images/swiftsonstavernoysterbar1.png"
  },
  {
    name: "Table, Donkey and Stick",
    cuisine: "Austrian",
    price: "$$",
    path: "/usa/illinois/chicago/TableDonkeyAndStick",
    image: "/images/tabledonkeyandstick1.png"
  },
  {
    name: "Tama",
    cuisine: "Mediterranean Cuisine",
    price: "$$$",
    path: "/usa/illinois/chicago/TamaCHI",
    image: "/images/tama1.png"
  },
  {
    name: "Taqueria Chingón",
    cuisine: "Mexican",
    price: "$",
    path: "/usa/illinois/chicago/TaqueriaChingn",
    image: "/images/taqueriachingn1.png"
  },
  {
    name: "The Coach House by Wazwan",
    cuisine: "South East Asian, Indian",
    price: "$$$$",
    path: "/usa/illinois/chicago/TheCoachHouseByWazwan",
    image: "/images/thecoachhousebywazwan1.png"
  },
  {
    name: "The Duck Inn",
    cuisine: "Gastropub, American Contemporary",
    price: "$$",
    path: "/usa/illinois/chicago/TheDuckInn",
    image: "/images/theduckinn1.png"
  },
  {
    name: "The Gage",
    cuisine: "Gastropub",
    price: "$$",
    path: "/usa/illinois/chicago/TheGage",
    image: "/images/thegage1.png"
  },
  {
    name: "The Gundis",
    cuisine: "Central Asian",
    price: "$$",
    path: "/usa/illinois/chicago/TheGundis",
    image: "/images/thegundis1.png"
  },
  {
    name: "The Izakaya at Momotaro",
    cuisine: "Japanese, Izakaya",
    price: "$$$",
    path: "/usa/illinois/chicago/TheIzakayaAtMomotaro",
    image: "/images/theizakayaatmomotaro1.png"
  },
  {
    name: "The Perch",
    cuisine: "American, Gastropub",
    price: "$$$",
    path: "/usa/illinois/chicago/ThePerch",
    image: "/images/theperch1.png"
  },
  {
    name: "The Purple Pig",
    cuisine: "Mediterranean Cuisine",
    price: "$$",
    path: "/usa/illinois/chicago/ThePurplePig",
    image: "/images/thepurplepig1.png"
  },
  {
    name: "Tied House",
    cuisine: "Contemporary",
    price: "$$",
    path: "/usa/illinois/chicago/TiedHouse",
    image: "/images/tiedhouse1.png"
  },
  {
    name: "Topolobampo",
    cuisine: "Mexican, Regional Cuisine",
    price: "$$$$",
    path: "/usa/illinois/chicago/Topolobampo",
    image: "/images/topolobampo1.png"
  },
  {
    name: "Tortello Pastificio",
    cuisine: "Italian, Regional Cuisine",
    price: "$$",
    path: "/usa/illinois/chicago/TortelloPastificio",
    image: "/images/tortellopastificio1.png"
  },
  {
    name: "Tzuco",
    cuisine: "Mexican",
    price: "$$",
    path: "/usa/illinois/chicago/Tzuco",
    image: "/images/tzuco1.png"
  },
  {
    name: "Union",
    cuisine: "American, Gastropub",
    price: "$$",
    path: "/usa/illinois/chicago/Union",
    image: "/images/union1.png"
  },
  {
    name: "Valhalla",
    cuisine: "Contemporary, Fusion",
    price: "$$$$",
    path: "/usa/illinois/chicago/Valhalla",
    image: "/images/valhalla1.png"
  },
  {
    name: "Virtue",
    cuisine: "Southern, Regional Cuisine",
    price: "$$",
    path: "/usa/illinois/chicago/Virtue",
    image: "/images/virtue1.png"
  },
  {
    name: "Warlord",
    cuisine: "American Contemporary",
    price: "$$$$",
    path: "/usa/illinois/chicago/Warlord",
    image: "/images/warlord1.png"
  },
  {
    name: "Yao Yao",
    cuisine: "Chinese, Regional Cuisine",
    price: "$$",
    path: "/usa/illinois/chicago/YaoYao",
    image: "/images/yaoyao1.png"
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
        <a href="/" style={{ textDecoration: 'none' }}
          onClick={(e) => { e.preventDefault(); navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
            <img src="/images/theepicurean.png" alt="The Epicurean"
              style={{ width: '150px', height: '40px', objectFit: 'contain' }} />
          </div>
        </a>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <button style={{ background: 'none', border: 'none', fontSize: '18px', fontWeight: '500',
            cursor: 'pointer', color: '#333', padding: '0.5rem 1rem', borderRadius: '4px', transition: 'background-color 0.3s' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            onClick={() => navigate('/destinations')}>Destinations</button>
          <button style={{ background: 'none', border: 'none', fontSize: '18px', fontWeight: '500',
            cursor: 'pointer', color: '#333', padding: '0.5rem 1rem', borderRadius: '4px', transition: 'background-color 0.3s' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>Articles</button>
          <button style={{ background: 'none', border: 'none', fontSize: '18px', fontWeight: '500',
            cursor: 'pointer', color: '#333', padding: '0.5rem 1rem', borderRadius: '4px', transition: 'background-color 0.3s' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            onClick={() => { window.location.href = '/methodology'; }}>Methodology</button>
        </div>
      </nav>

      <div style={{
        width: '100vw',
        height: '400px',
        marginTop: '92px',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Chicago_skyline%2C_viewed_from_Sears_Tower.jpg/1280px-Chicago_skyline%2C_viewed_from_Sears_Tower.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem 2rem 0 2rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#333', margin: '0 0 1rem 0',
          fontFamily: 'Times New Roman, serif' }}>{pageTitle}</h1>
        <p style={{ fontSize: '1.1rem', color: '#666', margin: '0 0 2rem 0',
          fontFamily: 'Times New Roman, serif' }}>
          {restaurants.length} restaurant{restaurants.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div style={{ padding: '0 2rem 4rem 2rem', width: '100vw', boxSizing: 'border-box', margin: 0 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(4, 300px)', gap: '2rem', justifyContent: 'start' }}>
          {restaurants.map((restaurant, index) => (
            <div key={index} onClick={() => handleCardClick(restaurant.path)}
              style={{ backgroundColor: 'white', borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)', overflow: 'hidden',
                cursor: 'pointer', transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                border: '1px solid #e9ecef' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
              }}>
              <div style={{ height: '200px', backgroundColor: '#f8f9fa', position: 'relative', overflow: 'hidden' }}>
                <img src={restaurant.image} alt={restaurant.name} loading="lazy" decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }} />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                  backgroundColor: '#f8f9fa', display: 'none', alignItems: 'center',
                  justifyContent: 'center', color: '#666', fontSize: '14px', fontWeight: '500' }}>
                  {restaurant.name}
                </div>
              </div>
              <div style={{ padding: '1.5rem', backgroundColor: 'white' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#333',
                  margin: '0 0 0.5rem 0', fontFamily: 'Times New Roman, serif' }}>
                  {restaurant.name}
                </h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.9rem', color: '#666', fontFamily: 'Times New Roman, serif' }}>
                    {restaurant.cuisine}
                  </span>
                  <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#333',
                    fontFamily: 'Times New Roman, serif' }}>
                    {restaurant.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer style={{ backgroundColor: '#f8f9fa', padding: '2rem', textAlign: 'center',
        borderTop: '1px solid #e9ecef', width: '100vw', boxSizing: 'border-box', margin: 0 }}>
        <p style={{ fontSize: '14px', color: '#666', margin: 0, fontFamily: 'Times New Roman, serif' }}>
          a Glass production
        </p>
      </footer>
    </div>
  );
};

export default Restaurants;
