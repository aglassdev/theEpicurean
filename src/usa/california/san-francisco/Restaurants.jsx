import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "San Francisco";

const restaurants = [
  {
    name: "3rd Cousin",
    cuisine: "Californian, Contemporary",
    price: "$$$$",
    path: "/usa/california/san-francisco/3rdCousin",
    image: "/images/3rdcousin1.png"
  },
  {
    name: "7 Adams",
    cuisine: "Californian, Contemporary",
    price: "$$$$",
    path: "/usa/california/san-francisco/7Adams",
    image: "/images/7adams1.png"
  },
  {
    name: "A16",
    cuisine: "Pizza, Italian",
    price: "$$",
    path: "/usa/california/san-francisco/A16",
    image: "/images/a161.png"
  },
  {
    name: "Abacá",
    cuisine: "Filipino, Californian",
    price: "$$",
    path: "/usa/california/san-francisco/Abac",
    image: "/images/abac1.png"
  },
  {
    name: "Acquerello",
    cuisine: "Italian, Contemporary",
    price: "$$$$",
    path: "/usa/california/san-francisco/Acquerello",
    image: "/images/acquerello1.png"
  },
  {
    name: "Anchor Oyster Bar",
    cuisine: "Seafood, Italian-American",
    price: "$$",
    path: "/usa/california/san-francisco/AnchorOysterBar",
    image: "/images/anchoroysterbar1.png"
  },
  {
    name: "Angler SF",
    cuisine: "Contemporary, Seafood",
    price: "$$$$",
    path: "/usa/california/san-francisco/AnglerSf",
    image: "/images/anglersf1.png"
  },
  {
    name: "Anomaly SF",
    cuisine: "Contemporary, Creative",
    price: "$$$$",
    path: "/usa/california/san-francisco/AnomalySf",
    image: "/images/anomalysf1.png"
  },
  {
    name: "Atelier Crenn",
    cuisine: "Contemporary, French",
    price: "$$$$",
    path: "/usa/california/san-francisco/AtelierCrenn",
    image: "/images/ateliercrenn1.png"
  },
  {
    name: "Azalina’s",
    cuisine: "Malaysian, Californian",
    price: "$$$",
    path: "/usa/california/san-francisco/Azalinas",
    image: "/images/azalinas1.png"
  },
  {
    name: "Aziza",
    cuisine: "Moroccan, Middle Eastern",
    price: "$$$",
    path: "/usa/california/san-francisco/Aziza",
    image: "/images/aziza1.png"
  },
  {
    name: "Bansang",
    cuisine: "Korean, Contemporary",
    price: "$$",
    path: "/usa/california/san-francisco/Bansang",
    image: "/images/bansang1.png"
  },
  {
    name: "Benu",
    cuisine: "Asian, Contemporary",
    price: "$$$$",
    path: "/usa/california/san-francisco/Benu",
    image: "/images/benu1.png"
  },
  {
    name: "Birdsong",
    cuisine: "Contemporary, American",
    price: "$$$$",
    path: "/usa/california/san-francisco/Birdsong",
    image: "/images/birdsong1.png"
  },
  {
    name: "Boulevard",
    cuisine: "Californian",
    price: "$$$",
    path: "/usa/california/san-francisco/Boulevard",
    image: "/images/boulevard1.png"
  },
  {
    name: "Café Jacqueline",
    cuisine: "French",
    price: "$$$$",
    path: "/usa/california/san-francisco/CafJacqueline",
    image: "/images/cafjacqueline1.png"
  },
  {
    name: "Californios",
    cuisine: "Mexican, Contemporary",
    price: "$$$$",
    path: "/usa/california/san-francisco/Californios",
    image: "/images/californios1.png"
  },
  {
    name: "Che Fico",
    cuisine: "Italian, Californian",
    price: "$$$",
    path: "/usa/california/san-francisco/CheFico",
    image: "/images/chefico1.png"
  },
  {
    name: "Copra",
    cuisine: "Indian, Contemporary",
    price: "$$$",
    path: "/usa/california/san-francisco/Copra",
    image: "/images/copra1.png"
  },
  {
    name: "Cotogna",
    cuisine: "Italian",
    price: "$$$",
    path: "/usa/california/san-francisco/Cotogna",
    image: "/images/cotogna1.png"
  },
  {
    name: "Dalida",
    cuisine: "Mediterranean Cuisine, Turkish",
    price: "$$$",
    path: "/usa/california/san-francisco/Dalida",
    image: "/images/dalida1.png"
  },
  {
    name: "Del Popolo",
    cuisine: "Pizza, Californian",
    price: "$$",
    path: "/usa/california/san-francisco/DelPopolo",
    image: "/images/delpopolo1.png"
  },
  {
    name: "Donaji",
    cuisine: "Mexican, Regional Cuisine",
    price: "$$",
    path: "/usa/california/san-francisco/Donaji",
    image: "/images/donaji1.png"
  },
  {
    name: "Dumpling Home",
    cuisine: "Chinese, Dumplings",
    price: "$",
    path: "/usa/california/san-francisco/DumplingHome",
    image: "/images/dumplinghome1.png"
  },
  {
    name: "El Buen Comer",
    cuisine: "Mexican, Regional Cuisine",
    price: "$$",
    path: "/usa/california/san-francisco/ElBuenComer",
    image: "/images/elbuencomer1.png"
  },
  {
    name: "Ernest",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/usa/california/san-francisco/Ernest",
    image: "/images/ernest1.png"
  },
  {
    name: "Fiorella",
    cuisine: "Italian",
    price: "$$",
    path: "/usa/california/san-francisco/Fiorella",
    image: "/images/fiorella1.png"
  },
  {
    name: "Flores",
    cuisine: "Mexican, Regional Cuisine",
    price: "$$",
    path: "/usa/california/san-francisco/FloresSAN",
    image: "/images/flores1.png"
  },
  {
    name: "Flour + Water",
    cuisine: "Italian, Californian",
    price: "$$$",
    path: "/usa/california/san-francisco/FlourWater",
    image: "/images/flourwater1.png"
  },
  {
    name: "Four Kings",
    cuisine: "Chinese, Cantonese",
    price: "$$",
    path: "/usa/california/san-francisco/FourKings",
    image: "/images/fourkings1.png"
  },
  {
    name: "Frances",
    cuisine: "Californian, American Contemporary",
    price: "$$",
    path: "/usa/california/san-francisco/Frances",
    image: "/images/frances1.png"
  },
  {
    name: "Friends Only",
    cuisine: "Sushi, Contemporary",
    price: "$$$$",
    path: "/usa/california/san-francisco/FriendsOnly",
    image: "/images/friendsonly1.png"
  },
  {
    name: "Gary Danko",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/california/san-francisco/GaryDanko",
    image: "/images/garydanko1.png"
  },
  {
    name: "Good Good Culture Club",
    cuisine: "South East Asian, Californian",
    price: "$$",
    path: "/usa/california/san-francisco/GoodGoodCultureClub",
    image: "/images/goodgoodcultureclub1.png"
  },
  {
    name: "Hamano Sushi",
    cuisine: "Japanese",
    price: "$$$",
    path: "/usa/california/san-francisco/HamanoSushi",
    image: "/images/hamanosushi1.png"
  },
  {
    name: "Harborview",
    cuisine: "Chinese, Cantonese",
    price: "$$",
    path: "/usa/california/san-francisco/Harborview",
    image: "/images/harborview1.png"
  },
  {
    name: "Hed 11",
    cuisine: "Thai, Contemporary",
    price: "$$$$",
    path: "/usa/california/san-francisco/Hed11",
    image: "/images/hed111.png"
  },
  {
    name: "Hilda and Jesse",
    cuisine: "American, Contemporary",
    price: "$$$",
    path: "/usa/california/san-francisco/HildaAndJesse",
    image: "/images/hildaandjesse1.png"
  },
  {
    name: "HK Lounge Bistro",
    cuisine: "Chinese, Dim Sum",
    price: "$$",
    path: "/usa/california/san-francisco/HkLoungeBistro",
    image: "/images/hkloungebistro1.png"
  },
  {
    name: "Hog Island Oyster Co.",
    cuisine: "Seafood, American",
    price: "$$$",
    path: "/usa/california/san-francisco/HogIslandOysterCo",
    image: "/images/hogislandoysterco1.png"
  },
  {
    name: "Itria",
    cuisine: "Italian, Contemporary",
    price: "$$",
    path: "/usa/california/san-francisco/Itria",
    image: "/images/itria1.png"
  },
  {
    name: "Izakaya Rintaro",
    cuisine: "Japanese, Izakaya",
    price: "$$",
    path: "/usa/california/san-francisco/IzakayaRintaro",
    image: "/images/izakayarintaro1.png"
  },
  {
    name: "jū-ni",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/california/san-francisco/Jni",
    image: "/images/jni1.png"
  },
  {
    name: "Ken",
    cuisine: "Sushi, Japanese",
    price: "$$$$",
    path: "/usa/california/san-francisco/Ken",
    image: "/images/ken1.png"
  },
  {
    name: "Kiln",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/california/san-francisco/KilnSAN",
    image: "/images/kiln1.png"
  },
  {
    name: "Kin Khao",
    cuisine: "Thai, Californian",
    price: "$$$",
    path: "/usa/california/san-francisco/KinKhao",
    image: "/images/kinkhao1.png"
  },
  {
    name: "Kokkari Estiatorio",
    cuisine: "Greek",
    price: "$$$",
    path: "/usa/california/san-francisco/KokkariEstiatorio",
    image: "/images/kokkariestiatorio1.png"
  },
  {
    name: "Kusakabe",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/california/san-francisco/Kusakabe",
    image: "/images/kusakabe1.png"
  },
  {
    name: "La Taqueria",
    cuisine: "Mexican, Regional Cuisine",
    price: "$",
    path: "/usa/california/san-francisco/LaTaqueria",
    image: "/images/lataqueria1.png"
  },
  {
    name: "Lazy Bear",
    cuisine: "Contemporary, Modern Cuisine",
    price: "$$$$",
    path: "/usa/california/san-francisco/LazyBear",
    image: "/images/lazybear1.png"
  },
  {
    name: "Le Comptoir at Bar Crenn",
    cuisine: "Contemporary, French",
    price: "$$$$",
    path: "/usa/california/san-francisco/LeComptoirAtBarCrenn",
    image: "/images/lecomptoiratbarcrenn1.png"
  },
  {
    name: "Liholiho Yacht Club",
    cuisine: "Asian, American",
    price: "$$$",
    path: "/usa/california/san-francisco/LiholihoYachtClub",
    image: "/images/liholihoyachtclub1.png"
  },
  {
    name: "Mensho",
    cuisine: "Japanese, Ramen",
    price: "$",
    path: "/usa/california/san-francisco/Mensho",
    image: "/images/mensho1.png"
  },
  {
    name: "Merchant Roots",
    cuisine: "Creative",
    price: "$$$$",
    path: "/usa/california/san-francisco/MerchantRoots",
    image: "/images/merchantroots1.png"
  },
  {
    name: "Mijoté",
    cuisine: "French, Contemporary",
    price: "$$$$",
    path: "/usa/california/san-francisco/Mijot",
    image: "/images/mijot1.png"
  },
  {
    name: "Miller & Lux",
    cuisine: "Steakhouse, American",
    price: "$$$$",
    path: "/usa/california/san-francisco/MillerLux",
    image: "/images/millerlux1.png"
  },
  {
    name: "Mister Jiu’s",
    cuisine: "Chinese, Contemporary",
    price: "$$$",
    path: "/usa/california/san-francisco/MisterJius",
    image: "/images/misterjius1.png"
  },
  {
    name: "Movida",
    cuisine: "Mexican, Persian",
    price: "$$",
    path: "/usa/california/san-francisco/Movida",
    image: "/images/movida1.png"
  },
  {
    name: "Nari",
    cuisine: "Thai, Contemporary",
    price: "$$$",
    path: "/usa/california/san-francisco/Nari",
    image: "/images/nari1.png"
  },
  {
    name: "Nightbird",
    cuisine: "Californian, Contemporary",
    price: "$$$$",
    path: "/usa/california/san-francisco/Nightbird",
    image: "/images/nightbird1.png"
  },
  {
    name: "Niku Steakhouse",
    cuisine: "Steakhouse",
    price: "$$$$",
    path: "/usa/california/san-francisco/NikuSteakhouse",
    image: "/images/nikusteakhouse1.png"
  },
  {
    name: "Nisei",
    cuisine: "Japanese, Contemporary",
    price: "$$$$",
    path: "/usa/california/san-francisco/Nisei",
    image: "/images/nisei1.png"
  },
  {
    name: "Noodle in a Haystack",
    cuisine: "Japanese, Californian",
    price: "$$$$",
    path: "/usa/california/san-francisco/NoodleInAHaystack",
    image: "/images/noodleinahaystack1.png"
  },
  {
    name: "Nopalito",
    cuisine: "Mexican, Californian",
    price: "$$",
    path: "/usa/california/san-francisco/Nopalito",
    image: "/images/nopalito1.png"
  },
  {
    name: "O' by Claude Le Tohic",
    cuisine: "French, Contemporary",
    price: "$$$$",
    path: "/usa/california/san-francisco/OByClaudeLeTohic",
    image: "/images/obyclaudeletohic1.png"
  },
  {
    name: "Octavia",
    cuisine: "Californian",
    price: "$$$",
    path: "/usa/california/san-francisco/Octavia",
    image: "/images/octavia1.png"
  },
  {
    name: "Okane",
    cuisine: "Japanese, Izakaya",
    price: "$$",
    path: "/usa/california/san-francisco/Okane",
    image: "/images/okane1.png"
  },
  {
    name: "Oma San Francisco Station",
    cuisine: "Japanese, Sushi",
    price: "$$$",
    path: "/usa/california/san-francisco/OmaSanFranciscoStation",
    image: "/images/omasanfranciscostation1.png"
  },
  {
    name: "Omakase",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/california/san-francisco/OmakaseSAN",
    image: "/images/omakase1.png"
  },
  {
    name: "Outerlands",
    cuisine: "Californian",
    price: "$$",
    path: "/usa/california/san-francisco/Outerlands",
    image: "/images/outerlands1.png"
  },
  {
    name: "Palette Tea House",
    cuisine: "Chinese, Dim Sum",
    price: "$$",
    path: "/usa/california/san-francisco/PaletteTeaHouse",
    image: "/images/paletteteahouse1.png"
  },
  {
    name: "Pearl 6101",
    cuisine: "Mediterranean Cuisine, Californian",
    price: "$$",
    path: "/usa/california/san-francisco/Pearl6101",
    image: "/images/pearl61011.png"
  },
  {
    name: "Pizzetta 211",
    cuisine: "Pizza",
    price: "$$",
    path: "/usa/california/san-francisco/Pizzetta211",
    image: "/images/pizzetta2111.png"
  },
  {
    name: "Prelude",
    cuisine: "American, Southern",
    price: "$$$$",
    path: "/usa/california/san-francisco/Prelude",
    image: "/images/prelude1.png"
  },
  {
    name: "Prik Hom",
    cuisine: "Thai, Californian",
    price: "$$",
    path: "/usa/california/san-francisco/PrikHom",
    image: "/images/prikhom1.png"
  },
  {
    name: "Prospect",
    cuisine: "Californian",
    price: "$$$",
    path: "/usa/california/san-francisco/ProspectSAN",
    image: "/images/prospect1.png"
  },
  {
    name: "Quince",
    cuisine: "Contemporary, Californian",
    price: "$$$$",
    path: "/usa/california/san-francisco/QuinceSAN",
    image: "/images/quince1.png"
  },
  {
    name: "Rich Table",
    cuisine: "Californian, Contemporary",
    price: "$$$",
    path: "/usa/california/san-francisco/RichTable",
    image: "/images/richtable1.png"
  },
  {
    name: "Robin",
    cuisine: "Japanese, Californian",
    price: "$$$$",
    path: "/usa/california/san-francisco/Robin",
    image: "/images/robin1.png"
  },
  {
    name: "Rooh",
    cuisine: "Indian, Contemporary",
    price: "$$$",
    path: "/usa/california/san-francisco/Rooh",
    image: "/images/rooh1.png"
  },
  {
    name: "Routier",
    cuisine: "French, Californian",
    price: "$$$",
    path: "/usa/california/san-francisco/Routier",
    image: "/images/routier1.png"
  },
  {
    name: "Saison",
    cuisine: "Californian, Contemporary",
    price: "$$$$",
    path: "/usa/california/san-francisco/SaisonSAN",
    image: "/images/saison1.png"
  },
  {
    name: "San Ho Won",
    cuisine: "Korean, Contemporary",
    price: "$$$",
    path: "/usa/california/san-francisco/SanHoWon",
    image: "/images/sanhowon1.png"
  },
  {
    name: "Saru",
    cuisine: "Japanese, Sushi",
    price: "$$$",
    path: "/usa/california/san-francisco/Saru",
    image: "/images/saru1.png"
  },
  {
    name: "Sato Omakase",
    cuisine: "Sushi",
    price: "$$$$",
    path: "/usa/california/san-francisco/SatoOmakase",
    image: "/images/satoomakase1.png"
  },
  {
    name: "Shizen",
    cuisine: "Vegan, Asian",
    price: "$$",
    path: "/usa/california/san-francisco/Shizen",
    image: "/images/shizen1.png"
  },
  {
    name: "Sichuan Home",
    cuisine: "Chinese, Sichuan",
    price: "$$",
    path: "/usa/california/san-francisco/SichuanHome",
    image: "/images/sichuanhome1.png"
  },
  {
    name: "Sons & Daughters",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/california/san-francisco/SonsDaughters",
    image: "/images/sonsdaughters1.png"
  },
  {
    name: "Sorella",
    cuisine: "Italian, Californian",
    price: "$$$",
    path: "/usa/california/san-francisco/SorellaSAN",
    image: "/images/sorella1.png"
  },
  {
    name: "Sorrel",
    cuisine: "Contemporary, Italian",
    price: "$$$$",
    path: "/usa/california/san-francisco/SorrelSAN",
    image: "/images/sorrel1.png"
  },
  {
    name: "SPQR",
    cuisine: "Italian, Contemporary",
    price: "$$$$",
    path: "/usa/california/san-francisco/Spqr",
    image: "/images/spqr1.png"
  },
  {
    name: "Spruce",
    cuisine: "Californian, Contemporary",
    price: "$$$$",
    path: "/usa/california/san-francisco/Spruce",
    image: "/images/spruce1.png"
  },
  {
    name: "Ssal",
    cuisine: "Korean, Contemporary",
    price: "$$$$",
    path: "/usa/california/san-francisco/Ssal",
    image: "/images/ssal1.png"
  },
  {
    name: "State Bird Provisions",
    cuisine: "Californian",
    price: "$$$",
    path: "/usa/california/san-francisco/StateBirdProvisions",
    image: "/images/statebirdprovisions1.png"
  },
  {
    name: "Sungho",
    cuisine: "Korean",
    price: "$$",
    path: "/usa/california/san-francisco/Sungho",
    image: "/images/sungho1.png"
  },
  {
    name: "The Morris",
    cuisine: "Contemporary, Californian",
    price: "$$$",
    path: "/usa/california/san-francisco/TheMorris",
    image: "/images/themorris1.png"
  },
  {
    name: "The Progress",
    cuisine: "Californian",
    price: "$$$",
    path: "/usa/california/san-francisco/TheProgress",
    image: "/images/theprogress1.png"
  },
  {
    name: "The Shota",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/california/san-francisco/TheShota",
    image: "/images/theshota1.png"
  },
  {
    name: "The Wild",
    cuisine: "Contemporary, Californian",
    price: "$$$$",
    path: "/usa/california/san-francisco/TheWild",
    image: "/images/thewild1.png"
  },
  {
    name: "Tiya",
    cuisine: "Indian, Contemporary",
    price: "$$$",
    path: "/usa/california/san-francisco/Tiya",
    image: "/images/tiya1.png"
  },
  {
    name: "Trestle",
    cuisine: "Contemporary, Californian",
    price: "$$",
    path: "/usa/california/san-francisco/Trestle",
    image: "/images/trestle1.png"
  },
  {
    name: "Verjus",
    cuisine: "French",
    price: "$$$",
    path: "/usa/california/san-francisco/Verjus",
    image: "/images/verjus1.png"
  },
  {
    name: "Yank Sing",
    cuisine: "Chinese, Dim Sum",
    price: "$$",
    path: "/usa/california/san-francisco/YankSing",
    image: "/images/yanksing1.png"
  },
  {
    name: "Yuji",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/usa/california/san-francisco/Yuji",
    image: "/images/yuji1.png"
  },
  {
    name: "Z & Y",
    cuisine: "Chinese, Sichuan",
    price: "$$",
    path: "/usa/california/san-francisco/ZY",
    image: "/images/zy1.png"
  },
  {
    name: "Zuni Café",
    cuisine: "Californian, French",
    price: "$$$",
    path: "/usa/california/san-francisco/ZuniCaf",
    image: "/images/zunicaf1.png"
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
        backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1280px-GoldenGateBridge-001.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
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
