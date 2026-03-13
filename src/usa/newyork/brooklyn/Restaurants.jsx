import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Brooklyn";

const restaurants = [
  {
    name: "6 Restaurant",
    cuisine: "European, Contemporary",
    price: "$$$$",
    path: "/usa/newyork/brooklyn/6Restaurant",
    image: "/images/6restaurant1.png"
  },
  {
    name: "Agi's Counter",
    cuisine: "Creative, Hungarian",
    price: "$$",
    path: "/usa/newyork/brooklyn/AgisCounter",
    image: "/images/agiscounter1.png"
  },
  {
    name: "Al Badawi",
    cuisine: "Middle Eastern",
    price: "$$",
    path: "/usa/newyork/brooklyn/AlBadawi",
    image: "/images/albadawi1.png"
  },
  {
    name: "Alta Calidad",
    cuisine: "Mexican, Contemporary",
    price: "$$",
    path: "/usa/newyork/brooklyn/AltaCalidad",
    image: "/images/altacalidad1.png"
  },
  {
    name: "Ammazzacaffè",
    cuisine: "Italian, Contemporary",
    price: "$$$",
    path: "/usa/newyork/brooklyn/Ammazzacaff",
    image: "/images/ammazzacaff1.png"
  },
  {
    name: "Aska",
    cuisine: "Scandinavian, Contemporary",
    price: "$$$$",
    path: "/usa/newyork/brooklyn/Aska",
    image: "/images/aska1.png"
  },
  {
    name: "Ayat",
    cuisine: "Middle Eastern",
    price: "$$",
    path: "/usa/newyork/brooklyn/Ayat",
    image: "/images/ayat1.png"
  },
  {
    name: "Bonnie's",
    cuisine: "Cantonese, American",
    price: "$$$",
    path: "/usa/newyork/brooklyn/Bonnies",
    image: "/images/bonnies1.png"
  },
  {
    name: "Café Kestrel",
    cuisine: "Contemporary, European",
    price: "$$$$",
    path: "/usa/newyork/brooklyn/CafKestrel",
    image: "/images/cafkestrel1.png"
  },
  {
    name: "Café Mars",
    cuisine: "Contemporary, Italian",
    price: "$$$",
    path: "/usa/newyork/brooklyn/CafMars",
    image: "/images/cafmars1.png"
  },
  {
    name: "Cafe Mado",
    cuisine: "American Contemporary",
    price: "$",
    path: "/usa/newyork/brooklyn/CafeMado",
    image: "/images/cafemado1.png"
  },
  {
    name: "Casa Ora",
    cuisine: "Venezuelan, Latin American",
    price: "$$$",
    path: "/usa/newyork/brooklyn/CasaOra",
    image: "/images/casaora1.png"
  },
  {
    name: "Cecily",
    cuisine: "American",
    price: "$$",
    path: "/usa/newyork/brooklyn/Cecily",
    image: "/images/cecily1.png"
  },
  {
    name: "Chavela’s",
    cuisine: "Mexican",
    price: "$$",
    path: "/usa/newyork/brooklyn/Chavelas",
    image: "/images/chavelas1.png"
  },
  {
    name: "Chez Ma Tante",
    cuisine: "American Contemporary, Regional Cuisine",
    price: "$$$",
    path: "/usa/newyork/brooklyn/ChezMaTante",
    image: "/images/chezmatante1.png"
  },
  {
    name: "Chuan Tian Xia",
    cuisine: "Chinese, Sichuan",
    price: "$$",
    path: "/usa/newyork/brooklyn/ChuanTianXia",
    image: "/images/chuantianxia1.png"
  },
  {
    name: "Claro",
    cuisine: "Mexican",
    price: "$$$",
    path: "/usa/newyork/brooklyn/ClaroBRO",
    image: "/images/claro1.png"
  },
  {
    name: "Clover Hill",
    cuisine: "Contemporary, Latin American",
    price: "$$$$",
    path: "/usa/newyork/brooklyn/CloverHill",
    image: "/images/cloverhill1.png"
  },
  {
    name: "Daphne's",
    cuisine: "Italian-American, Contemporary",
    price: "$$",
    path: "/usa/newyork/brooklyn/Daphnes",
    image: "/images/daphnes1.png"
  },
  {
    name: "East Harbor Seafood Palace",
    cuisine: "Chinese, Dim Sum",
    price: "$$",
    path: "/usa/newyork/brooklyn/EastHarborSeafoodPalace",
    image: "/images/eastharborseafoodpalace1.png"
  },
  {
    name: "Ensenada",
    cuisine: "Mexican, Seafood",
    price: "$$$",
    path: "/usa/newyork/brooklyn/Ensenada",
    image: "/images/ensenada1.png"
  },
  {
    name: "Enso",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/newyork/brooklyn/Enso",
    image: "/images/enso1.png"
  },
  {
    name: "Falansai",
    cuisine: "Vietnamese",
    price: "$$",
    path: "/usa/newyork/brooklyn/Falansai",
    image: "/images/falansai1.png"
  },
  {
    name: "Fausto",
    cuisine: "Italian, American",
    price: "$$$",
    path: "/usa/newyork/brooklyn/Fausto",
    image: "/images/fausto1.png"
  },
  {
    name: "Field Guide",
    cuisine: "Contemporary, Mediterranean Cuisine",
    price: "$$$",
    path: "/usa/newyork/brooklyn/FieldGuide",
    image: "/images/fieldguide1.png"
  },
  {
    name: "For All Things Good",
    cuisine: "Mexican",
    price: "$",
    path: "/usa/newyork/brooklyn/ForAllThingsGood",
    image: "/images/forallthingsgood1.png"
  },
  {
    name: "Francie",
    cuisine: "Contemporary, Italian",
    price: "$$$$",
    path: "/usa/newyork/brooklyn/Francie",
    image: "/images/francie1.png"
  },
  {
    name: "Gage & Tollner",
    cuisine: "Steakhouse, American",
    price: "$$$",
    path: "/usa/newyork/brooklyn/GageTollner",
    image: "/images/gagetollner1.png"
  },
  {
    name: "Glin Thai Bistro",
    cuisine: "Thai",
    price: "$$$",
    path: "/usa/newyork/brooklyn/GlinThaiBistro",
    image: "/images/glinthaibistro1.png"
  },
  {
    name: "Gordo's Cantina",
    cuisine: "Mexican",
    price: "$$",
    path: "/usa/newyork/brooklyn/GordosCantina",
    image: "/images/gordoscantina1.png"
  },
  {
    name: "Gus's Chop House",
    cuisine: "Steakhouse",
    price: "$$$",
    path: "/usa/newyork/brooklyn/GussChopHouse",
    image: "/images/gusschophouse1.png"
  },
  {
    name: "Haenyeo",
    cuisine: "Korean, Korean Contemporary",
    price: "$$",
    path: "/usa/newyork/brooklyn/Haenyeo",
    image: "/images/haenyeo1.png"
  },
  {
    name: "Hart's",
    cuisine: "Mediterranean Cuisine",
    price: "$$",
    path: "/usa/newyork/brooklyn/Harts",
    image: "/images/harts1.png"
  },
  {
    name: "Hometown Bar B Que New York",
    cuisine: "Barbecue",
    price: "$$",
    path: "/usa/newyork/brooklyn/HometownBarBQueNewYork",
    image: "/images/hometownbarbquenewyork1.png"
  },
  {
    name: "Hungry Thirsty",
    cuisine: "Thai",
    price: "$$$",
    path: "/usa/newyork/brooklyn/HungryThirsty",
    image: "/images/hungrythirsty1.png"
  },
  {
    name: "ILIS",
    cuisine: "Scandinavian, Contemporary",
    price: "$$$$",
    path: "/usa/newyork/brooklyn/Ilis",
    image: "/images/ilis1.png"
  },
  {
    name: "Inga's Bar",
    cuisine: "American",
    price: "$$$",
    path: "/usa/newyork/brooklyn/IngasBar",
    image: "/images/ingasbar1.png"
  },
  {
    name: "KRU",
    cuisine: "Thai, Contemporary",
    price: "$$$",
    path: "/usa/newyork/brooklyn/Kru",
    image: "/images/kru1.png"
  },
  {
    name: "La Vara",
    cuisine: "Spanish",
    price: "$$",
    path: "/usa/newyork/brooklyn/LaVara",
    image: "/images/lavara1.png"
  },
  {
    name: "Laser Wolf",
    cuisine: "Middle Eastern, Regional Cuisine",
    price: "$$$",
    path: "/usa/newyork/brooklyn/LaserWolf",
    image: "/images/laserwolf1.png"
  },
  {
    name: "Lingo",
    cuisine: "Japanese, American",
    price: "$$",
    path: "/usa/newyork/brooklyn/Lingo",
    image: "/images/lingo1.png"
  },
  {
    name: "Llama Inn",
    cuisine: "Peruvian, Fusion",
    price: "$$",
    path: "/usa/newyork/brooklyn/LlamaInnBRO",
    image: "/images/llamainn1.png"
  },
  {
    name: "LORE",
    cuisine: "Contemporary, South East Asian",
    price: "$$",
    path: "/usa/newyork/brooklyn/Lore",
    image: "/images/lore1.png"
  },
  {
    name: "Madre",
    cuisine: "Contemporary, American",
    price: "$$$",
    path: "/usa/newyork/brooklyn/MadreBRO",
    image: "/images/madre1.png"
  },
  {
    name: "Mango Bay",
    cuisine: "Caribbean",
    price: "$$$",
    path: "/usa/newyork/brooklyn/MangoBay",
    image: "/images/mangobay1.png"
  },
  {
    name: "Meadowsweet",
    cuisine: "Mediterranean Cuisine, American Contemporary",
    price: "$$$$",
    path: "/usa/newyork/brooklyn/MeadowsweetBRO",
    image: "/images/meadowsweet1.png"
  },
  {
    name: "Mesiba",
    cuisine: "Middle Eastern, Regional Cuisine",
    price: "$$$",
    path: "/usa/newyork/brooklyn/Mesiba",
    image: "/images/mesiba1.png"
  },
  {
    name: "Mile End",
    cuisine: "Deli",
    price: "$",
    path: "/usa/newyork/brooklyn/MileEnd",
    image: "/images/mileend1.png"
  },
  {
    name: "Miss Ada",
    cuisine: "Israeli, Middle Eastern",
    price: "$$",
    path: "/usa/newyork/brooklyn/MissAda",
    image: "/images/missada1.png"
  },
  {
    name: "Neta Shari",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/newyork/brooklyn/NetaShari",
    image: "/images/netashari1.png"
  },
  {
    name: "Nura",
    cuisine: "Fusion",
    price: "$$$",
    path: "/usa/newyork/brooklyn/Nura",
    image: "/images/nura1.png"
  },
  {
    name: "Oxomoco",
    cuisine: "Mexican, Contemporary",
    price: "$$$",
    path: "/usa/newyork/brooklyn/Oxomoco",
    image: "/images/oxomoco1.png"
  },
  {
    name: "Peter Luger",
    cuisine: "Steakhouse, American",
    price: "$$$$",
    path: "/usa/newyork/brooklyn/PeterLuger",
    image: "/images/peterluger1.png"
  },
  {
    name: "Pierozek",
    cuisine: "Polish, Dumplings",
    price: "$$",
    path: "/usa/newyork/brooklyn/Pierozek",
    image: "/images/pierozek1.png"
  },
  {
    name: "Place des Fêtes",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/usa/newyork/brooklyn/PlaceDesFtes",
    image: "/images/placedesftes1.png"
  },
  {
    name: "Popina",
    cuisine: "Italian, Southern",
    price: "$$$",
    path: "/usa/newyork/brooklyn/Popina",
    image: "/images/popina1.png"
  },
  {
    name: "Red Hook Tavern",
    cuisine: "American",
    price: "$$$",
    path: "/usa/newyork/brooklyn/RedHookTavern",
    image: "/images/redhooktavern1.png"
  },
  {
    name: "Restaurant Yuu",
    cuisine: "French Contemporary, Japanese",
    price: "$$$$",
    path: "/usa/newyork/brooklyn/RestaurantYuu",
    image: "/images/restaurantyuu1.png"
  },
  {
    name: "Risbo",
    cuisine: "American, Grills",
    price: "$$",
    path: "/usa/newyork/brooklyn/Risbo",
    image: "/images/risbo1.png"
  },
  {
    name: "Roberta's",
    cuisine: "Pizza",
    price: "$$",
    path: "/usa/newyork/brooklyn/Robertas",
    image: "/images/robertas1.png"
  },
  {
    name: "Runner & Stone",
    cuisine: "Contemporary, Bakery",
    price: "$$",
    path: "/usa/newyork/brooklyn/RunnerStone",
    image: "/images/runnerstone1.png"
  },
  {
    name: "Runner Up",
    cuisine: "American, Contemporary",
    price: "$$",
    path: "/usa/newyork/brooklyn/RunnerUp",
    image: "/images/runnerup1.png"
  },
  {
    name: "Sailor",
    cuisine: "American",
    price: "$$$",
    path: "/usa/newyork/brooklyn/Sailor",
    image: "/images/sailor1.png"
  },
  {
    name: "Saint Julivert Fisherie",
    cuisine: "Seafood, Spanish",
    price: "$$$",
    path: "/usa/newyork/brooklyn/SaintJulivertFisherie",
    image: "/images/saintjulivertfisherie1.png"
  },
  {
    name: "Sawa",
    cuisine: "Middle Eastern, Lebanese",
    price: "$$",
    path: "/usa/newyork/brooklyn/Sawa",
    image: "/images/sawa1.png"
  },
  {
    name: "Shalom Japan",
    cuisine: "Fusion, Asian",
    price: "$$",
    path: "/usa/newyork/brooklyn/ShalomJapan",
    image: "/images/shalomjapan1.png"
  },
  {
    name: "Shota Omakase",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/newyork/brooklyn/ShotaOmakase",
    image: "/images/shotaomakase1.png"
  },
  {
    name: "Sobre Masa",
    cuisine: "Mexican",
    price: "$$",
    path: "/usa/newyork/brooklyn/SobreMasa",
    image: "/images/sobremasa1.png"
  },
  {
    name: "Sofreh",
    cuisine: "Persian, Regional Cuisine",
    price: "$$$",
    path: "/usa/newyork/brooklyn/Sofreh",
    image: "/images/sofreh1.png"
  },
  {
    name: "Speedy Romeo",
    cuisine: "Pizza",
    price: "$$",
    path: "/usa/newyork/brooklyn/SpeedyRomeo",
    image: "/images/speedyromeo1.png"
  },
  {
    name: "Sunday in Brooklyn",
    cuisine: "American, Contemporary",
    price: "$$$",
    path: "/usa/newyork/brooklyn/SundayInBrooklyn",
    image: "/images/sundayinbrooklyn1.png"
  },
  {
    name: "Tanoreen",
    cuisine: "Middle Eastern",
    price: "$$",
    path: "/usa/newyork/brooklyn/Tanoreen",
    image: "/images/tanoreen1.png"
  },
  {
    name: "Taqueria El Chato",
    cuisine: "Mexican",
    price: "$",
    path: "/usa/newyork/brooklyn/TaqueriaElChato",
    image: "/images/taqueriaelchato1.png"
  },
  {
    name: "The Four Horsemen",
    cuisine: "American, Californian",
    price: "$$$$",
    path: "/usa/newyork/brooklyn/TheFourHorsemen",
    image: "/images/thefourhorsemen1.png"
  },
  {
    name: "The River Café",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/newyork/brooklyn/TheRiverCaf",
    image: "/images/therivercaf1.png"
  },
  {
    name: "Theodora",
    cuisine: "Mediterranean Cuisine",
    price: "$$",
    path: "/usa/newyork/brooklyn/Theodora",
    image: "/images/theodora1.png"
  },
  {
    name: "Tong",
    cuisine: "Thai",
    price: "$$",
    path: "/usa/newyork/brooklyn/Tong",
    image: "/images/tong1.png"
  },
  {
    name: "Untable",
    cuisine: "Thai",
    price: "$$",
    path: "/usa/newyork/brooklyn/Untable",
    image: "/images/untable1.png"
  },
  {
    name: "Uzuki",
    cuisine: "Japanese, Soba",
    price: "$$$$",
    path: "/usa/newyork/brooklyn/Uzuki",
    image: "/images/uzuki1.png"
  },
  {
    name: "Wenwen",
    cuisine: "Taiwanese, Asian",
    price: "$$$",
    path: "/usa/newyork/brooklyn/Wenwen",
    image: "/images/wenwen1.png"
  },
  {
    name: "Win Son",
    cuisine: "Chinese, Taiwanese",
    price: "$$$",
    path: "/usa/newyork/brooklyn/WinSon",
    image: "/images/winson1.png"
  },
  {
    name: "Yemenat",
    cuisine: "Middle Eastern",
    price: "$",
    path: "/usa/newyork/brooklyn/Yemenat",
    image: "/images/yemenat1.png"
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
        backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
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
                <img src={restaurant.image} alt={restaurant.name}
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
