import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Chicago";

const restaurants = [
  {
    name: "Alinea",
    cuisine: "Creative, Modern Cuisine",
    price: "$$$$",
    path: "/usa/other/chicago/alinea",
    image: '/images/alinea1.png'
  },
  {
    name: "Alla Vita",
    cuisine: "Italian, Italian-American",
    price: "$$$",
    path: "/usa/other/chicago/alla-vita",
    image: '/images/alla-vita1.png'
  },
  {
    name: "Andros Taverna",
    cuisine: "Greek",
    price: "$$$",
    path: "/usa/other/chicago/andros-taverna",
    image: '/images/andros-taverna1.png'
  },
  {
    name: "Anelya",
    cuisine: "Eastern European",
    price: "$$",
    path: "/usa/other/chicago/anelya",
    image: '/images/anelya1.png'
  },
  {
    name: "Astor Club: Chef's Table",
    cuisine: "American Contemporary",
    price: "$$$$",
    path: "/usa/other/chicago/astor-club-chefs-table",
    image: '/images/astor-club-chefs-table1.png'
  },
  {
    name: "Atelier",
    cuisine: "American",
    price: "$$$$",
    path: "/usa/other/chicago/atelier",
    image: '/images/atelier1.png'
  },
  {
    name: "avec",
    cuisine: "Mediterranean Cuisine",
    price: "$$",
    path: "/usa/other/chicago/avec",
    image: '/images/avec1.png'
  },
  {
    name: "Azul Mariscos + Muelle",
    cuisine: "Seafood, Latin American",
    price: "$$$",
    path: "/usa/other/chicago/azul-mariscos-muelle",
    image: '/images/azul-mariscos-muelle1.png'
  },
  {
    name: "Bar Mar",
    cuisine: "Seafood, Spanish",
    price: "$$$",
    path: "/usa/other/chicago/bar-mar",
    image: '/images/bar-mar1.png'
  },
  {
    name: "Bavette’s Bar & Boeuf",
    cuisine: "Steakhouse",
    price: "$$$$",
    path: "/usa/other/chicago/bavettes-bar-boeuf",
    image: '/images/bavettes-bar-boeuf1.png'
  },
  {
    name: "Bayan Ko",
    cuisine: "Filipino, Cuban",
    price: "$$$$",
    path: "/usa/other/chicago/bayan-ko",
    image: '/images/bayan-ko1.png'
  },
  {
    name: "Beity",
    cuisine: "Lebanese, Contemporary",
    price: "$$$$",
    path: "/usa/other/chicago/beity",
    image: '/images/beity1.png'
  },
  {
    name: "Birrieria Zaragoza",
    cuisine: "Mexican, Regional Cuisine",
    price: "$",
    path: "/usa/other/chicago/birrieria-zaragoza",
    image: '/images/birrieria-zaragoza1.png'
  },
  {
    name: "Blue Door Kitchen & Garden",
    cuisine: "American",
    price: "$$",
    path: "/usa/other/chicago/blue-door-kitchen-garden",
    image: '/images/blue-door-kitchen-garden1.png'
  },
  {
    name: "Boka",
    cuisine: "Contemporary, American",
    price: "$$$$",
    path: "/usa/other/chicago/boka",
    image: '/images/boka1.png'
  },
  {
    name: "Boonie's",
    cuisine: "Filipino",
    price: "$$",
    path: "/usa/other/chicago/boonies",
    image: '/images/boonies1.png'
  },
  {
    name: "Brindille",
    cuisine: "French",
    price: "$$$$",
    path: "/usa/other/chicago/brindille",
    image: '/images/brindille1.png'
  },
  {
    name: "Cariño",
    cuisine: "Mexican, Contemporary",
    price: "$$$$",
    path: "/usa/other/chicago/cario",
    image: '/images/cario1.png'
  },
  {
    name: "Cellar Door Provisions",
    cuisine: "Mediterranean Cuisine",
    price: "$$",
    path: "/usa/other/chicago/cellar-door-provisions",
    image: '/images/cellar-door-provisions1.png'
  },
  {
    name: "Chef’s Special Cocktail Bar",
    cuisine: "Chinese, American",
    price: "$$",
    path: "/usa/other/chicago/chefs-special-cocktail-bar",
    image: '/images/chefs-special-cocktail-bar1.png'
  },
  {
    name: "Chez Joël",
    cuisine: "French, Classic French",
    price: "$$",
    path: "/usa/other/chicago/chez-jol",
    image: '/images/chez-jol1.png'
  },
  {
    name: "Chicago Cut",
    cuisine: "Steakhouse",
    price: "$$$",
    path: "/usa/other/chicago/chicago-cut",
    image: '/images/chicago-cut1.png'
  },
  {
    name: "Chilam Balam",
    cuisine: "Mexican",
    price: "$$",
    path: "/usa/other/chicago/chilam-balam",
    image: '/images/chilam-balam1.png'
  },
  {
    name: "Ciccio Mio",
    cuisine: "Italian, American",
    price: "$$",
    path: "/usa/other/chicago/ciccio-mio",
    image: '/images/ciccio-mio1.png'
  },
  {
    name: "Coalfire",
    cuisine: "Pizza, American",
    price: "$$",
    path: "/usa/other/chicago/coalfire",
    image: '/images/coalfire1.png'
  },
  {
    name: "Creepies",
    cuisine: "French, American",
    price: "$$$",
    path: "/usa/other/chicago/creepies",
    image: '/images/creepies1.png'
  },
  {
    name: "Daisies",
    cuisine: "Italian",
    price: "$$",
    path: "/usa/other/chicago/daisies",
    image: '/images/daisies1.png'
  },
  {
    name: "Dear Margaret",
    cuisine: "Contemporary, French",
    price: "$$$",
    path: "/usa/other/chicago/dear-margaret",
    image: '/images/dear-margaret1.png'
  },
  {
    name: "Demera",
    cuisine: "Ethiopian",
    price: "$$",
    path: "/usa/other/chicago/demera",
    image: '/images/demera1.png'
  },
  {
    name: "EL Ideas",
    cuisine: "Contemporary, Creative",
    price: "$$$$",
    path: "/usa/other/chicago/el-ideas",
    image: '/images/el-ideas1.png'
  },
  {
    name: "Elina's",
    cuisine: "Italian-American, Regional Cuisine",
    price: "$$$",
    path: "/usa/other/chicago/elinas",
    image: '/images/elinas1.png'
  },
  {
    name: "Elske",
    cuisine: "Contemporary, American Contemporary",
    price: "$$$$",
    path: "/usa/other/chicago/elske",
    image: '/images/elske1.png'
  },
  {
    name: "Esmé",
    cuisine: "Contemporary, Creative",
    price: "$$$$",
    path: "/usa/other/chicago/esme",
    image: '/images/esme1.png'
  },
  {
    name: "Ever",
    cuisine: "Creative, Modern Cuisine",
    price: "$$$$",
    path: "/usa/other/chicago/ever",
    image: '/images/ever1.png'
  },
  {
    name: "Feld",
    cuisine: "Contemporary, Farm to table",
    price: "$$$$",
    path: "/usa/other/chicago/feld",
    image: '/images/feld1.png'
  },
  {
    name: "Frontera Grill",
    cuisine: "Mexican",
    price: "$$",
    path: "/usa/other/chicago/frontera-grill",
    image: '/images/frontera-grill1.png'
  },
  {
    name: "Gaijin",
    cuisine: "Japanese, Okonomiyaki",
    price: "$$",
    path: "/usa/other/chicago/gaijin",
    image: '/images/gaijin1.png'
  },
  {
    name: "Gaijin",
    cuisine: "Japanese, Okonomiyaki",
    price: "$$",
    path: "/usa/other/chicago/gaijin",
    image: '/images/gaijin1.png'
  },
  {
    name: "Galit",
    cuisine: "Middle Eastern, Mediterranean Cuisine",
    price: "$$$$",
    path: "/usa/other/chicago/galit",
    image: '/images/galit1.png'
  },
  {
    name: "GG's Chicken Shop",
    cuisine: "American",
    price: "$$",
    path: "/usa/other/chicago/ggs-chicken-shop",
    image: '/images/ggs-chicken-shop1.png'
  },
  {
    name: "Ghin Khao",
    cuisine: "Thai",
    price: "$",
    path: "/usa/other/chicago/ghin-khao",
    image: '/images/ghin-khao1.png'
  },
  {
    name: "Giant",
    cuisine: "American",
    price: "$$",
    path: "/usa/other/chicago/giant",
    image: '/images/giant1.png'
  },
  {
    name: "Gilt Bar",
    cuisine: "Gastropub",
    price: "$$",
    path: "/usa/other/chicago/gilt-bar",
    image: '/images/gilt-bar1.png'
  },
  {
    name: "Girl & The Goat",
    cuisine: "Contemporary, American",
    price: "$$$",
    path: "/usa/other/chicago/girl-the-goat",
    image: '/images/girl-the-goat1.png'
  },
  {
    name: "HaiSous",
    cuisine: "Vietnamese",
    price: "$$",
    path: "/usa/other/chicago/haisous",
    image: '/images/haisous1.png'
  },
  {
    name: "Hugo’s Frog Bar & Fish House",
    cuisine: "American",
    price: "$$$",
    path: "/usa/other/chicago/hugos-frog-bar-fish-house",
    image: '/images/hugos-frog-bar-fish-house1.png'
  },
  {
    name: "Ina Mae",
    cuisine: "Southern, Creole",
    price: "$$",
    path: "/usa/other/chicago/ina-mae",
    image: '/images/ina-mae1.png'
  },
  {
    name: "Indienne",
    cuisine: "Indian, Contemporary",
    price: "$$$$",
    path: "/usa/other/chicago/indienne",
    image: '/images/indienne1.png'
  },
  {
    name: "Itoko",
    cuisine: "Japanese",
    price: "$$$",
    path: "/usa/other/chicago/itoko",
    image: '/images/itoko1.png'
  },
  {
    name: "Jeong",
    cuisine: "Korean, Contemporary",
    price: "$$$$",
    path: "/usa/other/chicago/jeong",
    image: '/images/jeong1.png'
  },
  {
    name: "John's Food and Wine",
    cuisine: "American",
    price: "$$$",
    path: "/usa/other/chicago/johns-food-and-wine",
    image: '/images/johns-food-and-wine1.png'
  },
  {
    name: "Kasama",
    cuisine: "Filipino, Contemporary",
    price: "$$$$",
    path: "/usa/other/chicago/kasama",
    image: '/images/kasama1.png'
  },
  {
    name: "Kie-Gol-Lanee",
    cuisine: "Mexican",
    price: "$$",
    path: "/usa/other/chicago/kie-gol-lanee",
    image: '/images/kie-gol-lanee1.png'
  },
  {
    name: "Kumiko",
    cuisine: "Japanese, Asian",
    price: "$$$$",
    path: "/usa/other/chicago/kumiko",
    image: '/images/kumiko1.png'
  },
  {
    name: "Kyoten Next Door",
    cuisine: "Sushi, Japanese",
    price: "$$$$",
    path: "/usa/other/chicago/kyoten-next-door",
    image: '/images/kyoten-next-door1.png'
  },
  {
    name: "Lardon",
    cuisine: "Deli, Italian",
    price: "$$",
    path: "/usa/other/chicago/lardon",
    image: '/images/lardon1.png'
  },
  {
    name: "Les Nomades",
    cuisine: "French",
    price: "$$$$",
    path: "/usa/other/chicago/les-nomades",
    image: '/images/les-nomades1.png'
  },
  {
    name: "Longman & Eagle",
    cuisine: "Gastropub",
    price: "$$",
    path: "/usa/other/chicago/longman-eagle",
    image: '/images/longman-eagle1.png'
  },
  {
    name: "Lou Mitchell's",
    cuisine: "American",
    price: "$$",
    path: "/usa/other/chicago/lou-mitchells",
    image: '/images/lou-mitchells1.png'
  },
  {
    name: "Lula Cafe",
    cuisine: "American",
    price: "$$",
    path: "/usa/other/chicago/lula-cafe",
    image: '/images/lula-cafe1.png'
  },
  {
    name: "Mako",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/chicago/mako",
    image: '/images/mako1.png'
  },
  {
    name: "Mama Delia",
    cuisine: "Spanish, Spanish Contemporary",
    price: "$$",
    path: "/usa/other/chicago/mama-delia",
    image: '/images/mama-delia1.png'
  },
  {
    name: "Maple & Ash",
    cuisine: "Steakhouse",
    price: "$$$$",
    path: "/usa/other/chicago/maple-ash",
    image: '/images/maple-ash1.png'
  },
  {
    name: "Maxwells Trading",
    cuisine: "Contemporary, American",
    price: "$$$",
    path: "/usa/other/chicago/maxwells-trading",
    image: '/images/maxwells-trading1.png'
  },
  {
    name: "mfk.",
    cuisine: "Spanish, Fusion",
    price: "$$",
    path: "/usa/other/chicago/mfk",
    image: '/images/mfk1.png'
  },
  {
    name: "Mi Tocaya",
    cuisine: "Mexican",
    price: "$$",
    path: "/usa/other/chicago/mi-tocaya",
    image: '/images/mi-tocaya1.png'
  },
  {
    name: "Mirra",
    cuisine: "Fusion, Mexican",
    price: "$$",
    path: "/usa/other/chicago/mirra",
    image: '/images/mirra1.png'
  },
  {
    name: "Momotaro",
    cuisine: "Japanese, Asian",
    price: "$$$",
    path: "/usa/other/chicago/momotaro",
    image: '/images/momotaro1.png'
  },
  {
    name: "Monteverde",
    cuisine: "Italian, American",
    price: "$$$",
    path: "/usa/other/chicago/monteverde",
    image: '/images/monteverde1.png'
  },
  {
    name: "Moody Tongue",
    cuisine: "Contemporary, American Contemporary",
    price: "$$$$",
    path: "/usa/other/chicago/moody-tongue",
    image: '/images/moody-tongue1.png'
  },
  {
    name: "Mott St.",
    cuisine: "Fusion, Contemporary",
    price: "$$$",
    path: "/usa/other/chicago/mott-st",
    image: '/images/mott-st1.png'
  },
  {
    name: "Munno Pizzeria & Bistro",
    cuisine: "Pizza, Italian",
    price: "$$",
    path: "/usa/other/chicago/munno-pizzeria-bistro",
    image: '/images/munno-pizzeria-bistro1.png'
  },
  {
    name: "Nadu",
    cuisine: "Indian",
    price: "$$",
    path: "/usa/other/chicago/nadu",
    image: '/images/nadu1.png'
  },
  {
    name: "Next",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/chicago/next",
    image: '/images/next1.png'
  },
  {
    name: "North Pond",
    cuisine: "Contemporary, American",
    price: "$$$$",
    path: "/usa/other/chicago/north-pond",
    image: '/images/north-pond1.png'
  },
  {
    name: "Obélix",
    cuisine: "French",
    price: "$$$",
    path: "/usa/other/chicago/oblix",
    image: '/images/oblix1.png'
  },
  {
    name: "Oliver's",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/usa/other/chicago/olivers",
    image: '/images/olivers1.png'
  },
  {
    name: "Omakase Yume",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/chicago/omakase-yume",
    image: '/images/omakase-yume1.png'
  },
  {
    name: "Oriole",
    cuisine: "Contemporary, American Contemporary",
    price: "$$$$",
    path: "/usa/other/chicago/oriole",
    image: '/images/oriole1.png'
  },
  {
    name: "Osteria Langhe",
    cuisine: "Italian",
    price: "$$$",
    path: "/usa/other/chicago/osteria-langhe",
    image: '/images/osteria-langhe1.png'
  },
  {
    name: "Perilla",
    cuisine: "Korean, American",
    price: "$$",
    path: "/usa/other/chicago/perilla",
    image: '/images/perilla1.png'
  },
  {
    name: "Pizza Friendly Pizza",
    cuisine: "Pizza, American",
    price: "$$",
    path: "/usa/other/chicago/pizza-friendly-pizza",
    image: '/images/pizza-friendly-pizza1.png'
  },
  {
    name: "Pleasant House Pub",
    cuisine: "Gastropub, English",
    price: "$$",
    path: "/usa/other/chicago/pleasant-house-pub",
    image: '/images/pleasant-house-pub1.png'
  },
  {
    name: "Pompette",
    cuisine: "Contemporary, American",
    price: "$$",
    path: "/usa/other/chicago/pompette",
    image: '/images/pompette1.png'
  },
  {
    name: "Prime & Provisions",
    cuisine: "Steakhouse",
    price: "$$$",
    path: "/usa/other/chicago/prime-provisions",
    image: '/images/prime-provisions1.png'
  },
  {
    name: "Provaré",
    cuisine: "Fusion, Creole",
    price: "$$$",
    path: "/usa/other/chicago/provar",
    image: '/images/provar1.png'
  },
  {
    name: "Proxi",
    cuisine: "International, Asian",
    price: "$$",
    path: "/usa/other/chicago/proxi",
    image: '/images/proxi1.png'
  },
  {
    name: "ROOP Chicago",
    cuisine: "Indian, Contemporary",
    price: "$$$",
    path: "/usa/other/chicago/roop-chicago",
    image: '/images/roop-chicago1.png'
  },
  {
    name: "Rose Mary",
    cuisine: "Croatian, Italian",
    price: "$$$",
    path: "/usa/other/chicago/rose-mary",
    image: '/images/rose-mary1.png'
  },
  {
    name: "RPM Steak",
    cuisine: "Steakhouse, Contemporary",
    price: "$$$$",
    path: "/usa/other/chicago/rpm-steak",
    image: '/images/rpm-steak1.png'
  },
  {
    name: "Schwa",
    cuisine: "Contemporary, Innovative",
    price: "$$$$",
    path: "/usa/other/chicago/schwa",
    image: '/images/schwa1.png'
  },
  {
    name: "Sepia",
    cuisine: "American, American Contemporary",
    price: "$$$$",
    path: "/usa/other/chicago/sepia",
    image: '/images/sepia1.png'
  },
  {
    name: "Sifr",
    cuisine: "Middle Eastern",
    price: "$$",
    path: "/usa/other/chicago/sifr",
    image: '/images/sifr1.png'
  },
  {
    name: "S.K.Y.",
    cuisine: "Contemporary",
    price: "$$",
    path: "/usa/other/chicago/sky",
    image: '/images/sky1.png'
  },
  {
    name: "Smyth",
    cuisine: "Contemporary, Creative",
    price: "$$$$",
    path: "/usa/other/chicago/smyth",
    image: '/images/smyth1.png'
  },
  {
    name: "Sochi",
    cuisine: "Vietnamese",
    price: "$$",
    path: "/usa/other/chicago/sochi",
    image: '/images/sochi1.png'
  },
  {
    name: "Sol de Mexico",
    cuisine: "Mexican, Regional Cuisine",
    price: "$$",
    path: "/usa/other/chicago/sol-de-mexico",
    image: '/images/sol-de-mexico1.png'
  },
  {
    name: "Superkhana International",
    cuisine: "Indian, Fusion",
    price: "$$",
    path: "/usa/other/chicago/superkhana-international",
    image: '/images/superkhana-international1.png'
  },
  {
    name: "Swift & Sons",
    cuisine: "Steakhouse, American Contemporary",
    price: "$$$$",
    path: "/usa/other/chicago/swift-sons",
    image: '/images/swift-sons1.png'
  },
  {
    name: "Swift & Sons Tavern & Oyster Bar",
    cuisine: "American",
    price: "$$$",
    path: "/usa/other/chicago/swift-sons-tavern-oyster-bar",
    image: '/images/swift-sons-tavern-oyster-bar1.png'
  },
  {
    name: "Table, Donkey and Stick",
    cuisine: "Austrian",
    price: "$$",
    path: "/usa/other/chicago/table-donkey-and-stick",
    image: '/images/table-donkey-and-stick1.png'
  },
  {
    name: "Tama",
    cuisine: "Mediterranean Cuisine",
    price: "$$$",
    path: "/usa/other/chicago/tama",
    image: '/images/tama1.png'
  },
  {
    name: "Taqueria Chingón",
    cuisine: "Mexican",
    price: "$",
    path: "/usa/other/chicago/taqueria-chingn",
    image: '/images/taqueria-chingn1.png'
  },
  {
    name: "The Coach House by Wazwan",
    cuisine: "South East Asian, Indian",
    price: "$$$$",
    path: "/usa/other/chicago/the-coach-house-by-wazwan",
    image: '/images/the-coach-house-by-wazwan1.png'
  },
  {
    name: "The Duck Inn",
    cuisine: "Gastropub, American Contemporary",
    price: "$$",
    path: "/usa/other/chicago/the-duck-inn",
    image: '/images/the-duck-inn1.png'
  },
  {
    name: "The Gage",
    cuisine: "Gastropub",
    price: "$$",
    path: "/usa/other/chicago/the-gage",
    image: '/images/the-gage1.png'
  },
  {
    name: "The Gundis",
    cuisine: "Central Asian",
    price: "$$",
    path: "/usa/other/chicago/the-gundis",
    image: '/images/the-gundis1.png'
  },
  {
    name: "The Izakaya at Momotaro",
    cuisine: "Japanese, Izakaya",
    price: "$$$",
    path: "/usa/other/chicago/the-izakaya-at-momotaro",
    image: '/images/the-izakaya-at-momotaro1.png'
  },
  {
    name: "The Perch",
    cuisine: "American, Gastropub",
    price: "$$$",
    path: "/usa/other/chicago/the-perch",
    image: '/images/the-perch1.png'
  },
  {
    name: "The Purple Pig",
    cuisine: "Mediterranean Cuisine",
    price: "$$",
    path: "/usa/other/chicago/the-purple-pig",
    image: '/images/the-purple-pig1.png'
  },
  {
    name: "Tied House",
    cuisine: "Contemporary",
    price: "$$",
    path: "/usa/other/chicago/tied-house",
    image: '/images/tied-house1.png'
  },
  {
    name: "Topolobampo",
    cuisine: "Mexican, Regional Cuisine",
    price: "$$$$",
    path: "/usa/other/chicago/topolobampo",
    image: '/images/topolobampo1.png'
  },
  {
    name: "Tortello Pastificio",
    cuisine: "Italian, Regional Cuisine",
    price: "$$",
    path: "/usa/other/chicago/tortello-pastificio",
    image: '/images/tortello-pastificio1.png'
  },
  {
    name: "Tzuco",
    cuisine: "Mexican",
    price: "$$",
    path: "/usa/other/chicago/tzuco",
    image: '/images/tzuco1.png'
  },
  {
    name: "Union",
    cuisine: "American, Gastropub",
    price: "$$",
    path: "/usa/other/chicago/union",
    image: '/images/union1.png'
  },
  {
    name: "Union",
    cuisine: "American, Gastropub",
    price: "$$",
    path: "/usa/other/chicago/union",
    image: '/images/union1.png'
  },
  {
    name: "Valhalla",
    cuisine: "Contemporary, Fusion",
    price: "$$$$",
    path: "/usa/other/chicago/valhalla",
    image: '/images/valhalla1.png'
  },
  {
    name: "Virtue",
    cuisine: "Southern, Regional Cuisine",
    price: "$$",
    path: "/usa/other/chicago/virtue",
    image: '/images/virtue1.png'
  },
  {
    name: "Warlord",
    cuisine: "American Contemporary",
    price: "$$$$",
    path: "/usa/other/chicago/warlord",
    image: '/images/warlord1.png'
  },
  {
    name: "Yao Yao",
    cuisine: "Chinese, Regional Cuisine",
    price: "$$",
    path: "/usa/other/chicago/yao-yao",
    image: '/images/yao-yao1.png'
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
