import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "San Francisco";

const restaurants = [
  {
    name: "3rd Cousin",
    cuisine: "Californian, Contemporary",
    price: "$$$$",
    path: "/usa/other/san-francisco/3rd-cousin",
    image: '/images/3rd-cousin1.png'
  },
  {
    name: "7 Adams",
    cuisine: "Californian, Contemporary",
    price: "$$$$",
    path: "/usa/other/san-francisco/7-adams",
    image: '/images/7-adams1.png'
  },
  {
    name: "A16",
    cuisine: "Pizza, Italian",
    price: "$$",
    path: "/usa/other/san-francisco/a16",
    image: '/images/a161.png'
  },
  {
    name: "Abacá",
    cuisine: "Filipino, Californian",
    price: "$$",
    path: "/usa/other/san-francisco/abac",
    image: '/images/abac1.png'
  },
  {
    name: "Acquerello",
    cuisine: "Italian, Contemporary",
    price: "$$$$",
    path: "/usa/other/san-francisco/acquerello",
    image: '/images/acquerello1.png'
  },
  {
    name: "Anchor Oyster Bar",
    cuisine: "Seafood, Italian-American",
    price: "$$",
    path: "/usa/other/san-francisco/anchor-oyster-bar",
    image: '/images/anchor-oyster-bar1.png'
  },
  {
    name: "Angler SF",
    cuisine: "Contemporary, Seafood",
    price: "$$$$",
    path: "/usa/other/san-francisco/angler-sf",
    image: '/images/angler-sf1.png'
  },
  {
    name: "Anomaly SF",
    cuisine: "Contemporary, Creative",
    price: "$$$$",
    path: "/usa/other/san-francisco/anomaly-sf",
    image: '/images/anomaly-sf1.png'
  },
  {
    name: "Atelier Crenn",
    cuisine: "Contemporary, French",
    price: "$$$$",
    path: "/usa/other/san-francisco/atelier-crenn",
    image: '/images/atelier-crenn1.png'
  },
  {
    name: "Azalina’s",
    cuisine: "Malaysian, Californian",
    price: "$$$",
    path: "/usa/other/san-francisco/azalinas",
    image: '/images/azalinas1.png'
  },
  {
    name: "Aziza",
    cuisine: "Moroccan, Middle Eastern",
    price: "$$$",
    path: "/usa/other/san-francisco/aziza",
    image: '/images/aziza1.png'
  },
  {
    name: "Bansang",
    cuisine: "Korean, Contemporary",
    price: "$$",
    path: "/usa/other/san-francisco/bansang",
    image: '/images/bansang1.png'
  },
  {
    name: "Benu",
    cuisine: "Asian, Contemporary",
    price: "$$$$",
    path: "/usa/other/san-francisco/benu",
    image: '/images/benu1.png'
  },
  {
    name: "Birdsong",
    cuisine: "Contemporary, American",
    price: "$$$$",
    path: "/usa/other/san-francisco/birdsong",
    image: '/images/birdsong1.png'
  },
  {
    name: "Boulevard",
    cuisine: "Californian",
    price: "$$$",
    path: "/usa/other/san-francisco/boulevard",
    image: '/images/boulevard1.png'
  },
  {
    name: "Café Jacqueline",
    cuisine: "French",
    price: "$$$$",
    path: "/usa/other/san-francisco/caf-jacqueline",
    image: '/images/caf-jacqueline1.png'
  },
  {
    name: "Californios",
    cuisine: "Mexican, Contemporary",
    price: "$$$$",
    path: "/usa/other/san-francisco/californios",
    image: '/images/californios1.png'
  },
  {
    name: "Che Fico",
    cuisine: "Italian, Californian",
    price: "$$$",
    path: "/usa/other/san-francisco/che-fico",
    image: '/images/che-fico1.png'
  },
  {
    name: "Copra",
    cuisine: "Indian, Contemporary",
    price: "$$$",
    path: "/usa/other/san-francisco/copra",
    image: '/images/copra1.png'
  },
  {
    name: "Cotogna",
    cuisine: "Italian",
    price: "$$$",
    path: "/usa/other/san-francisco/cotogna",
    image: '/images/cotogna1.png'
  },
  {
    name: "Dalida",
    cuisine: "Mediterranean Cuisine, Turkish",
    price: "$$$",
    path: "/usa/other/san-francisco/dalida",
    image: '/images/dalida1.png'
  },
  {
    name: "Del Popolo",
    cuisine: "Pizza, Californian",
    price: "$$",
    path: "/usa/other/san-francisco/del-popolo",
    image: '/images/del-popolo1.png'
  },
  {
    name: "Donaji",
    cuisine: "Mexican, Regional Cuisine",
    price: "$$",
    path: "/usa/other/san-francisco/donaji",
    image: '/images/donaji1.png'
  },
  {
    name: "Dumpling Home",
    cuisine: "Chinese, Dumplings",
    price: "$",
    path: "/usa/other/san-francisco/dumpling-home",
    image: '/images/dumpling-home1.png'
  },
  {
    name: "El Buen Comer",
    cuisine: "Mexican, Regional Cuisine",
    price: "$$",
    path: "/usa/other/san-francisco/el-buen-comer",
    image: '/images/el-buen-comer1.png'
  },
  {
    name: "Ernest",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/usa/other/san-francisco/ernest",
    image: '/images/ernest1.png'
  },
  {
    name: "Fiorella",
    cuisine: "Italian",
    price: "$$",
    path: "/usa/other/san-francisco/fiorella",
    image: '/images/fiorella1.png'
  },
  {
    name: "Flores",
    cuisine: "Mexican, Regional Cuisine",
    price: "$$",
    path: "/usa/other/san-francisco/flores",
    image: '/images/flores1.png'
  },
  {
    name: "Flores",
    cuisine: "Mexican, Regional Cuisine",
    price: "$$",
    path: "/usa/other/san-francisco/flores",
    image: '/images/flores1.png'
  },
  {
    name: "Flour + Water",
    cuisine: "Italian, Californian",
    price: "$$$",
    path: "/usa/other/san-francisco/flour-water",
    image: '/images/flour-water1.png'
  },
  {
    name: "Four Kings",
    cuisine: "Chinese, Cantonese",
    price: "$$",
    path: "/usa/other/san-francisco/four-kings",
    image: '/images/four-kings1.png'
  },
  {
    name: "Frances",
    cuisine: "Californian, American Contemporary",
    price: "$$",
    path: "/usa/other/san-francisco/frances",
    image: '/images/frances1.png'
  },
  {
    name: "Friends Only",
    cuisine: "Sushi, Contemporary",
    price: "$$$$",
    path: "/usa/other/san-francisco/friends-only",
    image: '/images/friends-only1.png'
  },
  {
    name: "Gary Danko",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/san-francisco/gary-danko",
    image: '/images/gary-danko1.png'
  },
  {
    name: "Good Good Culture Club",
    cuisine: "South East Asian, Californian",
    price: "$$",
    path: "/usa/other/san-francisco/good-good-culture-club",
    image: '/images/good-good-culture-club1.png'
  },
  {
    name: "Hamano Sushi",
    cuisine: "Japanese",
    price: "$$$",
    path: "/usa/other/san-francisco/hamano-sushi",
    image: '/images/hamano-sushi1.png'
  },
  {
    name: "Harborview",
    cuisine: "Chinese, Cantonese",
    price: "$$",
    path: "/usa/other/san-francisco/harborview",
    image: '/images/harborview1.png'
  },
  {
    name: "Hed 11",
    cuisine: "Thai, Contemporary",
    price: "$$$$",
    path: "/usa/other/san-francisco/hed-11",
    image: '/images/hed-111.png'
  },
  {
    name: "Hilda and Jesse",
    cuisine: "American, Contemporary",
    price: "$$$",
    path: "/usa/other/san-francisco/hilda-and-jesse",
    image: '/images/hilda-and-jesse1.png'
  },
  {
    name: "HK Lounge Bistro",
    cuisine: "Chinese, Dim Sum",
    price: "$$",
    path: "/usa/other/san-francisco/hk-lounge-bistro",
    image: '/images/hk-lounge-bistro1.png'
  },
  {
    name: "Hog Island Oyster Co.",
    cuisine: "Seafood, American",
    price: "$$$",
    path: "/usa/other/san-francisco/hog-island-oyster-co",
    image: '/images/hog-island-oyster-co1.png'
  },
  {
    name: "Itria",
    cuisine: "Italian, Contemporary",
    price: "$$",
    path: "/usa/other/san-francisco/itria",
    image: '/images/itria1.png'
  },
  {
    name: "Izakaya Rintaro",
    cuisine: "Japanese, Izakaya",
    price: "$$",
    path: "/usa/other/san-francisco/izakaya-rintaro",
    image: '/images/izakaya-rintaro1.png'
  },
  {
    name: "jū-ni",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/san-francisco/j-ni",
    image: '/images/j-ni1.png'
  },
  {
    name: "Ken",
    cuisine: "Sushi, Japanese",
    price: "$$$$",
    path: "/usa/other/san-francisco/ken",
    image: '/images/ken1.png'
  },
  {
    name: "Kiln",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/san-francisco/kiln",
    image: '/images/kiln1.png'
  },
  {
    name: "Kiln",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/san-francisco/kiln",
    image: '/images/kiln1.png'
  },
  {
    name: "Kin Khao",
    cuisine: "Thai, Californian",
    price: "$$$",
    path: "/usa/other/san-francisco/kin-khao",
    image: '/images/kin-khao1.png'
  },
  {
    name: "Kokkari Estiatorio",
    cuisine: "Greek",
    price: "$$$",
    path: "/usa/other/san-francisco/kokkari-estiatorio",
    image: '/images/kokkari-estiatorio1.png'
  },
  {
    name: "Kusakabe",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/san-francisco/kusakabe",
    image: '/images/kusakabe1.png'
  },
  {
    name: "La Taqueria",
    cuisine: "Mexican, Regional Cuisine",
    price: "$",
    path: "/usa/other/san-francisco/la-taqueria",
    image: '/images/la-taqueria1.png'
  },
  {
    name: "Lazy Bear",
    cuisine: "Contemporary, Modern Cuisine",
    price: "$$$$",
    path: "/usa/other/san-francisco/lazy-bear",
    image: '/images/lazy-bear1.png'
  },
  {
    name: "Le Comptoir at Bar Crenn",
    cuisine: "Contemporary, French",
    price: "$$$$",
    path: "/usa/other/san-francisco/le-comptoir-at-bar-crenn",
    image: '/images/le-comptoir-at-bar-crenn1.png'
  },
  {
    name: "Liholiho Yacht Club",
    cuisine: "Asian, American",
    price: "$$$",
    path: "/usa/other/san-francisco/liholiho-yacht-club",
    image: '/images/liholiho-yacht-club1.png'
  },
  {
    name: "Mensho",
    cuisine: "Japanese, Ramen",
    price: "$",
    path: "/usa/other/san-francisco/mensho",
    image: '/images/mensho1.png'
  },
  {
    name: "Merchant Roots",
    cuisine: "Creative",
    price: "$$$$",
    path: "/usa/other/san-francisco/merchant-roots",
    image: '/images/merchant-roots1.png'
  },
  {
    name: "Mijoté",
    cuisine: "French, Contemporary",
    price: "$$$$",
    path: "/usa/other/san-francisco/mijot",
    image: '/images/mijot1.png'
  },
  {
    name: "Miller & Lux",
    cuisine: "Steakhouse, American",
    price: "$$$$",
    path: "/usa/other/san-francisco/miller-lux",
    image: '/images/miller-lux1.png'
  },
  {
    name: "Mister Jiu’s",
    cuisine: "Chinese, Contemporary",
    price: "$$$",
    path: "/usa/other/san-francisco/mister-jius",
    image: '/images/mister-jius1.png'
  },
  {
    name: "Movida",
    cuisine: "Mexican, Persian",
    price: "$$",
    path: "/usa/other/san-francisco/movida",
    image: '/images/movida1.png'
  },
  {
    name: "Nari",
    cuisine: "Thai, Contemporary",
    price: "$$$",
    path: "/usa/other/san-francisco/nari",
    image: '/images/nari1.png'
  },
  {
    name: "Nightbird",
    cuisine: "Californian, Contemporary",
    price: "$$$$",
    path: "/usa/other/san-francisco/nightbird",
    image: '/images/nightbird1.png'
  },
  {
    name: "Niku Steakhouse",
    cuisine: "Steakhouse",
    price: "$$$$",
    path: "/usa/other/san-francisco/niku-steakhouse",
    image: '/images/niku-steakhouse1.png'
  },
  {
    name: "Nisei",
    cuisine: "Japanese, Contemporary",
    price: "$$$$",
    path: "/usa/other/san-francisco/nisei",
    image: '/images/nisei1.png'
  },
  {
    name: "Noodle in a Haystack",
    cuisine: "Japanese, Californian",
    price: "$$$$",
    path: "/usa/other/san-francisco/noodle-in-a-haystack",
    image: '/images/noodle-in-a-haystack1.png'
  },
  {
    name: "Nopalito",
    cuisine: "Mexican, Californian",
    price: "$$",
    path: "/usa/other/san-francisco/nopalito",
    image: '/images/nopalito1.png'
  },
  {
    name: "O' by Claude Le Tohic",
    cuisine: "French, Contemporary",
    price: "$$$$",
    path: "/usa/other/san-francisco/o-by-claude-le-tohic",
    image: '/images/o-by-claude-le-tohic1.png'
  },
  {
    name: "Octavia",
    cuisine: "Californian",
    price: "$$$",
    path: "/usa/other/san-francisco/octavia",
    image: '/images/octavia1.png'
  },
  {
    name: "Okane",
    cuisine: "Japanese, Izakaya",
    price: "$$",
    path: "/usa/other/san-francisco/okane",
    image: '/images/okane1.png'
  },
  {
    name: "Oma San Francisco Station",
    cuisine: "Japanese, Sushi",
    price: "$$$",
    path: "/usa/other/san-francisco/oma-san-francisco-station",
    image: '/images/oma-san-francisco-station1.png'
  },
  {
    name: "Omakase",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/san-francisco/omakase",
    image: '/images/omakase1.png'
  },
  {
    name: "Omakase",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/san-francisco/omakase",
    image: '/images/omakase1.png'
  },
  {
    name: "Outerlands",
    cuisine: "Californian",
    price: "$$",
    path: "/usa/other/san-francisco/outerlands",
    image: '/images/outerlands1.png'
  },
  {
    name: "Palette Tea House",
    cuisine: "Chinese, Dim Sum",
    price: "$$",
    path: "/usa/other/san-francisco/palette-tea-house",
    image: '/images/palette-tea-house1.png'
  },
  {
    name: "Pearl 6101",
    cuisine: "Mediterranean Cuisine, Californian",
    price: "$$",
    path: "/usa/other/san-francisco/pearl-6101",
    image: '/images/pearl-61011.png'
  },
  {
    name: "Pizzetta 211",
    cuisine: "Pizza",
    price: "$$",
    path: "/usa/other/san-francisco/pizzetta-211",
    image: '/images/pizzetta-2111.png'
  },
  {
    name: "Prelude",
    cuisine: "American, Southern",
    price: "$$$$",
    path: "/usa/other/san-francisco/prelude",
    image: '/images/prelude1.png'
  },
  {
    name: "Prik Hom",
    cuisine: "Thai, Californian",
    price: "$$",
    path: "/usa/other/san-francisco/prik-hom",
    image: '/images/prik-hom1.png'
  },
  {
    name: "Prospect",
    cuisine: "Californian",
    price: "$$$",
    path: "/usa/other/san-francisco/prospect",
    image: '/images/prospect1.png'
  },
  {
    name: "Prospect",
    cuisine: "Californian",
    price: "$$$",
    path: "/usa/other/san-francisco/prospect",
    image: '/images/prospect1.png'
  },
  {
    name: "Quince",
    cuisine: "Contemporary, Californian",
    price: "$$$$",
    path: "/usa/other/san-francisco/quince",
    image: '/images/quince1.png'
  },
  {
    name: "Quince",
    cuisine: "Contemporary, Californian",
    price: "$$$$",
    path: "/usa/other/san-francisco/quince",
    image: '/images/quince1.png'
  },
  {
    name: "Rich Table",
    cuisine: "Californian, Contemporary",
    price: "$$$",
    path: "/usa/other/san-francisco/rich-table",
    image: '/images/rich-table1.png'
  },
  {
    name: "Robin",
    cuisine: "Japanese, Californian",
    price: "$$$$",
    path: "/usa/other/san-francisco/robin",
    image: '/images/robin1.png'
  },
  {
    name: "Rooh",
    cuisine: "Indian, Contemporary",
    price: "$$$",
    path: "/usa/other/san-francisco/rooh",
    image: '/images/rooh1.png'
  },
  {
    name: "Routier",
    cuisine: "French, Californian",
    price: "$$$",
    path: "/usa/other/san-francisco/routier",
    image: '/images/routier1.png'
  },
  {
    name: "Saison",
    cuisine: "Californian, Contemporary",
    price: "$$$$",
    path: "/usa/other/san-francisco/saison",
    image: '/images/saison1.png'
  },
  {
    name: "San Ho Won",
    cuisine: "Korean, Contemporary",
    price: "$$$",
    path: "/usa/other/san-francisco/san-ho-won",
    image: '/images/san-ho-won1.png'
  },
  {
    name: "Saru",
    cuisine: "Japanese, Sushi",
    price: "$$$",
    path: "/usa/other/san-francisco/saru",
    image: '/images/saru1.png'
  },
  {
    name: "Saru Sushi Bar",
    cuisine: "Japanese, Sushi",
    price: "$$$",
    path: "/usa/other/san-francisco/saru-sushi-bar",
    image: '/images/saru-sushi-bar1.png'
  },
  {
    name: "Sato Omakase",
    cuisine: "Sushi",
    price: "$$$$",
    path: "/usa/other/san-francisco/sato-omakase",
    image: '/images/sato-omakase1.png'
  },
  {
    name: "Shizen",
    cuisine: "Vegan, Asian",
    price: "$$",
    path: "/usa/other/san-francisco/shizen",
    image: '/images/shizen1.png'
  },
  {
    name: "Sichuan Home",
    cuisine: "Chinese, Sichuan",
    price: "$$",
    path: "/usa/other/san-francisco/sichuan-home",
    image: '/images/sichuan-home1.png'
  },
  {
    name: "Sons & Daughters",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/san-francisco/sons-daughters",
    image: '/images/sons-daughters1.png'
  },
  {
    name: "Sorella",
    cuisine: "Italian, Californian",
    price: "$$$",
    path: "/usa/other/san-francisco/sorella",
    image: '/images/sorella1.png'
  },
  {
    name: "Sorella",
    cuisine: "Italian, Californian",
    price: "$$$",
    path: "/usa/other/san-francisco/sorella",
    image: '/images/sorella1.png'
  },
  {
    name: "Sorrel",
    cuisine: "Contemporary, Italian",
    price: "$$$$",
    path: "/usa/other/san-francisco/sorrel",
    image: '/images/sorrel1.png'
  },
  {
    name: "Sorrel",
    cuisine: "Contemporary, Italian",
    price: "$$$$",
    path: "/usa/other/san-francisco/sorrel",
    image: '/images/sorrel1.png'
  },
  {
    name: "SPQR",
    cuisine: "Italian, Contemporary",
    price: "$$$$",
    path: "/usa/other/san-francisco/spqr",
    image: '/images/spqr1.png'
  },
  {
    name: "Spruce",
    cuisine: "Californian, Contemporary",
    price: "$$$$",
    path: "/usa/other/san-francisco/spruce",
    image: '/images/spruce1.png'
  },
  {
    name: "Ssal",
    cuisine: "Korean, Contemporary",
    price: "$$$$",
    path: "/usa/other/san-francisco/ssal",
    image: '/images/ssal1.png'
  },
  {
    name: "State Bird Provisions",
    cuisine: "Californian",
    price: "$$$",
    path: "/usa/other/san-francisco/state-bird-provisions",
    image: '/images/state-bird-provisions1.png'
  },
  {
    name: "Sungho",
    cuisine: "Korean",
    price: "$$",
    path: "/usa/other/san-francisco/sungho",
    image: '/images/sungho1.png'
  },
  {
    name: "The Morris",
    cuisine: "Contemporary, Californian",
    price: "$$$",
    path: "/usa/other/san-francisco/the-morris",
    image: '/images/the-morris1.png'
  },
  {
    name: "The Progress",
    cuisine: "Californian",
    price: "$$$",
    path: "/usa/other/san-francisco/the-progress",
    image: '/images/the-progress1.png'
  },
  {
    name: "The Shota",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/san-francisco/the-shota",
    image: '/images/the-shota1.png'
  },
  {
    name: "The Wild",
    cuisine: "Contemporary, Californian",
    price: "$$$$",
    path: "/usa/other/san-francisco/the-wild",
    image: '/images/the-wild1.png'
  },
  {
    name: "Tiya",
    cuisine: "Indian, Contemporary",
    price: "$$$",
    path: "/usa/other/san-francisco/tiya",
    image: '/images/tiya1.png'
  },
  {
    name: "Trestle",
    cuisine: "Contemporary, Californian",
    price: "$$",
    path: "/usa/other/san-francisco/trestle",
    image: '/images/trestle1.png'
  },
  {
    name: "Verjus",
    cuisine: "French",
    price: "$$$",
    path: "/usa/other/san-francisco/verjus",
    image: '/images/verjus1.png'
  },
  {
    name: "Yank Sing",
    cuisine: "Chinese, Dim Sum",
    price: "$$",
    path: "/usa/other/san-francisco/yank-sing",
    image: '/images/yank-sing1.png'
  },
  {
    name: "Yuji",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/usa/other/san-francisco/yuji",
    image: '/images/yuji1.png'
  },
  {
    name: "Z & Y",
    cuisine: "Chinese, Sichuan",
    price: "$$",
    path: "/usa/other/san-francisco/z-y",
    image: '/images/z-y1.png'
  },
  {
    name: "Zuni Café",
    cuisine: "Californian, French",
    price: "$$$",
    path: "/usa/other/san-francisco/zuni-caf",
    image: '/images/zuni-caf1.png'
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
