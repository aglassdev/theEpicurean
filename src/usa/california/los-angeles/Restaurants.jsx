import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Los Angeles";

const restaurants = [
  {
    name: "715",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/california/los-angeles/715",
    image: "/images/7151.png"
  },
  {
    name: "Alta Adams",
    cuisine: "Southern",
    price: "$$",
    path: "/usa/california/los-angeles/AltaAdams",
    image: "/images/altaadams1.png"
  },
  {
    name: "Angelini Osteria",
    cuisine: "Italian",
    price: "$$$",
    path: "/usa/california/los-angeles/AngeliniOsteria",
    image: "/images/angeliniosteria1.png"
  },
  {
    name: "Antico Nuovo",
    cuisine: "Italian",
    price: "$$$$",
    path: "/usa/california/los-angeles/AnticoNuovo",
    image: "/images/anticonuovo1.png"
  },
  {
    name: "asterid by Ray Garcia",
    cuisine: "Californian, Contemporary",
    price: "$$$",
    path: "/usa/california/los-angeles/AsteridByRayGarcia",
    image: "/images/asteridbyraygarcia1.png"
  },
  {
    name: "Ayara Thai Cuisine",
    cuisine: "Thai",
    price: "$",
    path: "/usa/california/los-angeles/AyaraThaiCuisine",
    image: "/images/ayarathaicuisine1.png"
  },
  {
    name: "Badmaash",
    cuisine: "Indian, Gastropub",
    price: "$$",
    path: "/usa/california/los-angeles/Badmaash",
    image: "/images/badmaash1.png"
  },
  {
    name: "Bar Etoile",
    cuisine: "Californian, European",
    price: "$$$",
    path: "/usa/california/los-angeles/BarEtoile",
    image: "/images/baretoile1.png"
  },
  {
    name: "Bar Sawa",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/california/los-angeles/BarSawa",
    image: "/images/barsawa1.png"
  },
  {
    name: "Baroo",
    cuisine: "Korean Contemporary",
    price: "$$$$",
    path: "/usa/california/los-angeles/Baroo",
    image: "/images/baroo1.png"
  },
  {
    name: "Barra Santos",
    cuisine: "Portuguese",
    price: "$$",
    path: "/usa/california/los-angeles/BarraSantos",
    image: "/images/barrasantos1.png"
  },
  {
    name: "Bavel",
    cuisine: "Middle Eastern, Californian",
    price: "$$$$",
    path: "/usa/california/los-angeles/Bavel",
    image: "/images/bavel1.png"
  },
  {
    name: "Bee Taqueria",
    cuisine: "Mexican",
    price: "$$",
    path: "/usa/california/los-angeles/BeeTaqueria",
    image: "/images/beetaqueria1.png"
  },
  {
    name: "Bestia",
    cuisine: "Italian, Californian",
    price: "$$$$",
    path: "/usa/california/los-angeles/Bestia",
    image: "/images/bestia1.png"
  },
  {
    name: "Camphor",
    cuisine: "French, Contemporary",
    price: "$$$$",
    path: "/usa/california/los-angeles/Camphor",
    image: "/images/camphor1.png"
  },
  {
    name: "Carlitos Gardel",
    cuisine: "Argentinian",
    price: "$$$",
    path: "/usa/california/los-angeles/CarlitosGardel",
    image: "/images/carlitosgardel1.png"
  },
  {
    name: "Carnes Asadas Pancho Lopez",
    cuisine: "Mexican",
    price: "$",
    path: "/usa/california/los-angeles/CarnesAsadasPanchoLopez",
    image: "/images/carnesasadaspancholopez1.png"
  },
  {
    name: "Cento Pasta Bar",
    cuisine: "Italian",
    price: "$$$",
    path: "/usa/california/los-angeles/CentoPastaBar",
    image: "/images/centopastabar1.png"
  },
  {
    name: "Charcoal Venice",
    cuisine: "American, Steakhouse",
    price: "$$$",
    path: "/usa/california/los-angeles/CharcoalVenice",
    image: "/images/charcoalvenice1.png"
  },
  {
    name: "Chi Spacca",
    cuisine: "Italian, Steakhouse",
    price: "$$$$",
    path: "/usa/california/los-angeles/ChiSpacca",
    image: "/images/chispacca1.png"
  },
  {
    name: "Chifa",
    cuisine: "Fusion, Chinese",
    price: "$$",
    path: "/usa/california/los-angeles/Chifa",
    image: "/images/chifa1.png"
  },
  {
    name: "Chosun Galbee",
    cuisine: "Korean, Barbecue",
    price: "$$$",
    path: "/usa/california/los-angeles/ChosunGalbee",
    image: "/images/chosungalbee1.png"
  },
  {
    name: "Dama",
    cuisine: "Latin American, American Contemporary",
    price: "$$$",
    path: "/usa/california/los-angeles/DamaLOS",
    image: "/images/dama1.png"
  },
  {
    name: "Damian",
    cuisine: "Mexican, Contemporary",
    price: "$$$",
    path: "/usa/california/los-angeles/Damian",
    image: "/images/damian1.png"
  },
  {
    name: "Danbi",
    cuisine: "Korean",
    price: "$$",
    path: "/usa/california/los-angeles/Danbi",
    image: "/images/danbi1.png"
  },
  {
    name: "Dha Rae Oak",
    cuisine: "Korean, Duck Specialities",
    price: "$$",
    path: "/usa/california/los-angeles/DhaRaeOak",
    image: "/images/dharaeoak1.png"
  },
  {
    name: "Dunsmoor",
    cuisine: "American",
    price: "$$$",
    path: "/usa/california/los-angeles/Dunsmoor",
    image: "/images/dunsmoor1.png"
  },
  {
    name: "Elf Cafe",
    cuisine: "Mediterranean Cuisine",
    price: "$$",
    path: "/usa/california/los-angeles/ElfCafe",
    image: "/images/elfcafe1.png"
  },
  {
    name: "Father’s Office",
    cuisine: "Gastropub",
    price: "$$",
    path: "/usa/california/los-angeles/FathersOffice",
    image: "/images/fathersoffice1.png"
  },
  {
    name: "Flavors from Afar",
    cuisine: "International",
    price: "$$",
    path: "/usa/california/los-angeles/FlavorsFromAfar",
    image: "/images/flavorsfromafar1.png"
  },
  {
    name: "Found Oyster",
    cuisine: "Seafood",
    price: "$$$",
    path: "/usa/california/los-angeles/FoundOyster",
    image: "/images/foundoyster1.png"
  },
  {
    name: "Girl & the Goat Los Angeles",
    cuisine: "Contemporary, American",
    price: "$$$",
    path: "/usa/california/los-angeles/GirlTheGoatLosAngeles",
    image: "/images/girlthegoatlosangeles1.png"
  },
  {
    name: "Grá",
    cuisine: "Pizza",
    price: "$$",
    path: "/usa/california/los-angeles/GrLOS",
    image: "/images/gr1.png"
  },
  {
    name: "Guelaguetza",
    cuisine: "Mexican, Regional Cuisine",
    price: "$$$",
    path: "/usa/california/los-angeles/Guelaguetza",
    image: "/images/guelaguetza1.png"
  },
  {
    name: "Guisados",
    cuisine: "Mexican, Regional Cuisine",
    price: "$",
    path: "/usa/california/los-angeles/Guisados",
    image: "/images/guisados1.png"
  },
  {
    name: "Gwen",
    cuisine: "Steakhouse, American",
    price: "$$$$",
    path: "/usa/california/los-angeles/GwenLOS",
    image: "/images/gwen1.png"
  },
  {
    name: "Hatchet Hall",
    cuisine: "American, Contemporary",
    price: "$$$",
    path: "/usa/california/los-angeles/HatchetHall",
    image: "/images/hatchethall1.png"
  },
  {
    name: "Hayato",
    cuisine: "Japanese, Seafood",
    price: "$$$$",
    path: "/usa/california/los-angeles/Hayato",
    image: "/images/hayato1.png"
  },
  {
    name: "hibi",
    cuisine: "Japanese Contemporary, Korean",
    price: "$$$$",
    path: "/usa/california/los-angeles/Hibi",
    image: "/images/hibi1.png"
  },
  {
    name: "Hippo",
    cuisine: "Italian",
    price: "$$",
    path: "/usa/california/los-angeles/Hippo",
    image: "/images/hippo1.png"
  },
  {
    name: "Holbox",
    cuisine: "Mexican, Seafood",
    price: "$$",
    path: "/usa/california/los-angeles/Holbox",
    image: "/images/holbox1.png"
  },
  {
    name: "Horses",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/usa/california/los-angeles/Horses",
    image: "/images/horses1.png"
  },
  {
    name: "IMA",
    cuisine: "Japanese, Sukiyaki",
    price: "$$$$",
    path: "/usa/california/los-angeles/ImaLOS",
    image: "/images/ima1.png"
  },
  {
    name: "Jeong Yuk Jeom",
    cuisine: "Korean, Beef",
    price: "$$$",
    path: "/usa/california/los-angeles/JeongYukJeom",
    image: "/images/jeongyukjeom1.png"
  },
  {
    name: "Jitlada",
    cuisine: "Thai",
    price: "$$",
    path: "/usa/california/los-angeles/Jitlada",
    image: "/images/jitlada1.png"
  },
  {
    name: "Jon & Vinny’s",
    cuisine: "Italian-American",
    price: "$$",
    path: "/usa/california/los-angeles/JonVinnys",
    image: "/images/jonvinnys1.png"
  },
  {
    name: "Kato",
    cuisine: "Asian, Contemporary",
    price: "$$$$",
    path: "/usa/california/los-angeles/Kato",
    image: "/images/kato1.png"
  },
  {
    name: "Killer Noodle",
    cuisine: "Japanese, Ramen",
    price: "$",
    path: "/usa/california/los-angeles/KillerNoodle",
    image: "/images/killernoodle1.png"
  },
  {
    name: "Kismet",
    cuisine: "Middle Eastern",
    price: "$$",
    path: "/usa/california/los-angeles/Kismet",
    image: "/images/kismet1.png"
  },
  {
    name: "kodō",
    cuisine: "Izakaya, Sushi",
    price: "$$$$",
    path: "/usa/california/los-angeles/Kod",
    image: "/images/kod1.png"
  },
  {
    name: "Komal",
    cuisine: "Mexican",
    price: "$",
    path: "/usa/california/los-angeles/Komal",
    image: "/images/komal1.png"
  },
  {
    name: "La Azteca",
    cuisine: "Mexican",
    price: "$",
    path: "/usa/california/los-angeles/LaAzteca",
    image: "/images/laazteca1.png"
  },
  {
    name: "LA Cha Cha Chá",
    cuisine: "Mexican, Latin American",
    price: "$$$$",
    path: "/usa/california/los-angeles/LaChaChaCh",
    image: "/images/lachachach1.png"
  },
  {
    name: "Lalibela",
    cuisine: "Ethiopian",
    price: "$$",
    path: "/usa/california/los-angeles/Lalibela",
    image: "/images/lalibela1.png"
  },
  {
    name: "Langer's",
    cuisine: "Deli, American",
    price: "$$",
    path: "/usa/california/los-angeles/Langers",
    image: "/images/langers1.png"
  },
  {
    name: "Le Comptoir",
    cuisine: "Californian, Vegetarian",
    price: "$$$$",
    path: "/usa/california/los-angeles/LeComptoirLOS",
    image: "/images/lecomptoir1.png"
  },
  {
    name: "Leopardo",
    cuisine: "Californian, Seafood",
    price: "$$$$",
    path: "/usa/california/los-angeles/Leopardo",
    image: "/images/leopardo1.png"
  },
  {
    name: "Little Fish",
    cuisine: "American",
    price: "$",
    path: "/usa/california/los-angeles/LittleFish",
    image: "/images/littlefish1.png"
  },
  {
    name: "Liu's Cafe",
    cuisine: "Chinese, Taiwanese",
    price: "$",
    path: "/usa/california/los-angeles/LiusCafe",
    image: "/images/liuscafe1.png"
  },
  {
    name: "Lulu",
    cuisine: "Californian",
    price: "$$",
    path: "/usa/california/los-angeles/Lulu",
    image: "/images/lulu1.png"
  },
  {
    name: "Lumière",
    cuisine: "French, Farm to table",
    price: "$$$",
    path: "/usa/california/los-angeles/LumireLOS",
    image: "/images/lumire1.png"
  },
  {
    name: "Luv 2 Eat Thai Bistro",
    cuisine: "Thai",
    price: "$$",
    path: "/usa/california/los-angeles/Luv2EatThaiBistro",
    image: "/images/luv2eatthaibistro1.png"
  },
  {
    name: "Maccheroni Republic",
    cuisine: "Italian-American",
    price: "$$",
    path: "/usa/california/los-angeles/MaccheroniRepublic",
    image: "/images/maccheronirepublic1.png"
  },
  {
    name: "Mae Malai Thai House of Noodles",
    cuisine: "Thai",
    price: "$",
    path: "/usa/california/los-angeles/MaeMalaiThaiHouseOfNoodles",
    image: "/images/maemalaithaihouseofnoodles1.png"
  },
  {
    name: "majordōmo",
    cuisine: "Asian, Contemporary",
    price: "$$$",
    path: "/usa/california/los-angeles/Majordmo",
    image: "/images/majordmo1.png"
  },
  {
    name: "Manuela",
    cuisine: "American, Californian",
    price: "$$$",
    path: "/usa/california/los-angeles/Manuela",
    image: "/images/manuela1.png"
  },
  {
    name: "Marugame Monzo",
    cuisine: "Japanese, Udon",
    price: "$$",
    path: "/usa/california/los-angeles/MarugameMonzo",
    image: "/images/marugamemonzo1.png"
  },
  {
    name: "Meteora",
    cuisine: "Creative, Contemporary",
    price: "$$$$",
    path: "/usa/california/los-angeles/Meteora",
    image: "/images/meteora1.png"
  },
  {
    name: "Moo's Craft Barbecue",
    cuisine: "Barbecue, Regional Cuisine",
    price: "$$",
    path: "/usa/california/los-angeles/MoosCraftBarbecue",
    image: "/images/mooscraftbarbecue1.png"
  },
  {
    name: "Mori Nozomi",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/california/los-angeles/MoriNozomi",
    image: "/images/morinozomi1.png"
  },
  {
    name: "Morihiro",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/california/los-angeles/Morihiro",
    image: "/images/morihiro1.png"
  },
  {
    name: "n/naka",
    cuisine: "Japanese, Contemporary",
    price: "$$$$",
    path: "/usa/california/los-angeles/Nnaka",
    image: "/images/nnaka1.png"
  },
  {
    name: "Orsa & Winston",
    cuisine: "Contemporary, Asian",
    price: "$$$$",
    path: "/usa/california/los-angeles/OrsaWinston",
    image: "/images/orsawinston1.png"
  },
  {
    name: "Osteria Mozza",
    cuisine: "Italian",
    price: "$$$$",
    path: "/usa/california/los-angeles/OsteriaMozza",
    image: "/images/osteriamozza1.png"
  },
  {
    name: "Parks BBQ",
    cuisine: "Korean, Barbecue",
    price: "$$$",
    path: "/usa/california/los-angeles/ParksBbq",
    image: "/images/parksbbq1.png"
  },
  {
    name: "Petit Trois",
    cuisine: "French",
    price: "$$$",
    path: "/usa/california/los-angeles/PetitTrois",
    image: "/images/petittrois1.png"
  },
  {
    name: "Pijja Palace",
    cuisine: "Fusion, Indian",
    price: "$$",
    path: "/usa/california/los-angeles/PijjaPalace",
    image: "/images/pijjapalace1.png"
  },
  {
    name: "Pine & Crane",
    cuisine: "Asian, Taiwanese",
    price: "$",
    path: "/usa/california/los-angeles/PineCrane",
    image: "/images/pinecrane1.png"
  },
  {
    name: "Pizzana",
    cuisine: "Italian, Pizza",
    price: "$$",
    path: "/usa/california/los-angeles/Pizzana",
    image: "/images/pizzana1.png"
  },
  {
    name: "Pizzeria Bianco",
    cuisine: "Pizza, Italian-American",
    price: "$$",
    path: "/usa/california/los-angeles/PizzeriaBianco",
    image: "/images/pizzeriabianco1.png"
  },
  {
    name: "Pizzeria Mozza",
    cuisine: "Pizza, Italian",
    price: "$$",
    path: "/usa/california/los-angeles/PizzeriaMozza",
    image: "/images/pizzeriamozza1.png"
  },
  {
    name: "Pizzeria Sei",
    cuisine: "Pizza, Contemporary",
    price: "$$",
    path: "/usa/california/los-angeles/PizzeriaSei",
    image: "/images/pizzeriasei1.png"
  },
  {
    name: "Pollo a la Brasa",
    cuisine: "Peruvian",
    price: "$",
    path: "/usa/california/los-angeles/PolloALaBrasa",
    image: "/images/polloalabrasa1.png"
  },
  {
    name: "Q Sushi",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/california/los-angeles/QSushi",
    image: "/images/qsushi1.png"
  },
  {
    name: "Quarter Sheets",
    cuisine: "Pizza",
    price: "$$",
    path: "/usa/california/los-angeles/QuarterSheets",
    image: "/images/quartersheets1.png"
  },
  {
    name: "Quarters BBQ",
    cuisine: "Korean, Barbecue",
    price: "$$$",
    path: "/usa/california/los-angeles/QuartersBbq",
    image: "/images/quartersbbq1.png"
  },
  {
    name: "Rasarumah",
    cuisine: "Malaysian",
    price: "$$$",
    path: "/usa/california/los-angeles/Rasarumah",
    image: "/images/rasarumah1.png"
  },
  {
    name: "Redbird",
    cuisine: "Contemporary, Californian",
    price: "$$$",
    path: "/usa/california/los-angeles/Redbird",
    image: "/images/redbird1.png"
  },
  {
    name: "Restaurant Ki",
    cuisine: "Korean Contemporary",
    price: "$$$$",
    path: "/usa/california/los-angeles/RestaurantKi",
    image: "/images/restaurantki1.png"
  },
  {
    name: "Ronan",
    cuisine: "Italian",
    price: "$$$",
    path: "/usa/california/los-angeles/Ronan",
    image: "/images/ronan1.png"
  },
  {
    name: "Rossoblu",
    cuisine: "Italian, Regional Cuisine",
    price: "$$",
    path: "/usa/california/los-angeles/Rossoblu",
    image: "/images/rossoblu1.png"
  },
  {
    name: "Saffy's",
    cuisine: "Middle Eastern",
    price: "$$$",
    path: "/usa/california/los-angeles/Saffys",
    image: "/images/saffys1.png"
  },
  {
    name: "San Laurel",
    cuisine: "Spanish, Contemporary",
    price: "$$$$",
    path: "/usa/california/los-angeles/SanLaurel",
    image: "/images/sanlaurel1.png"
  },
  {
    name: "Shibumi",
    cuisine: "Japanese, Traditional Cuisine",
    price: "$$$$",
    path: "/usa/california/los-angeles/Shibumi",
    image: "/images/shibumi1.png"
  },
  {
    name: "Spoon & Pork",
    cuisine: "Filipino, Fusion",
    price: "$$",
    path: "/usa/california/los-angeles/SpoonPork",
    image: "/images/spoonpork1.png"
  },
  {
    name: "Sushi Kaneyoshi",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/california/los-angeles/SushiKaneyoshi",
    image: "/images/sushikaneyoshi1.png"
  },
  {
    name: "Sushi Takeda",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/california/los-angeles/SushiTakeda",
    image: "/images/sushitakeda1.png"
  },
  {
    name: "The Factory Kitchen",
    cuisine: "Italian, Regional Cuisine",
    price: "$$",
    path: "/usa/california/los-angeles/TheFactoryKitchen",
    image: "/images/thefactorykitchen1.png"
  },
  {
    name: "Tomat",
    cuisine: "Californian",
    price: "$$$",
    path: "/usa/california/los-angeles/Tomat",
    image: "/images/tomat1.png"
  },
  {
    name: "Tsubaki",
    cuisine: "Japanese, Izakaya",
    price: "$$",
    path: "/usa/california/los-angeles/Tsubaki",
    image: "/images/tsubaki1.png"
  },
  {
    name: "Uka",
    cuisine: "Japanese Contemporary",
    price: "$$$$",
    path: "/usa/california/los-angeles/Uka",
    image: "/images/uka1.png"
  },
  {
    name: "Villa's Tacos",
    cuisine: "Mexican",
    price: "$",
    path: "/usa/california/los-angeles/VillasTacos",
    image: "/images/villastacos1.png"
  },
  {
    name: "Yong Su San",
    cuisine: "Korean, Regional Cuisine",
    price: "$$$",
    path: "/usa/california/los-angeles/YongSuSan",
    image: "/images/yongsusan1.png"
  },
  {
    name: "Yunomi Handroll",
    cuisine: "Japanese, Sushi",
    price: "$$",
    path: "/usa/california/los-angeles/YunomiHandroll",
    image: "/images/yunomihandroll1.png"
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
        backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/20190616154621%21Echo_Park_Lake.jpg/1280px-20190616154621%21Echo_Park_Lake.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
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
