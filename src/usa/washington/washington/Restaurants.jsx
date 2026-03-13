import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Seattle Area";

const restaurants = [
  {
    name: "1789",
    cuisine: "American, French",
    price: "$$$$",
    path: "/usa/washington/washington/1789WAS",
    image: "/images/17891.png"
  },
  {
    name: "Amparo Fondita",
    cuisine: "Mexican, Contemporary",
    price: "$$",
    path: "/usa/washington/washington/AmparoFondita",
    image: "/images/amparofondita1.png"
  },
  {
    name: "Anju",
    cuisine: "Korean, Contemporary",
    price: "$$$",
    path: "/usa/washington/washington/AnjuWAS",
    image: "/images/anju1.png"
  },
  {
    name: "Annabelle",
    cuisine: "Contemporary, American",
    price: "$$$",
    path: "/usa/washington/washington/Annabelle",
    image: "/images/annabelle1.png"
  },
  {
    name: "Apéro",
    cuisine: "French, Contemporary",
    price: "$$$$",
    path: "/usa/washington/washington/Apro",
    image: "/images/apro1.png"
  },
  {
    name: "Astoria DC",
    cuisine: "Asian, Sichuan",
    price: "$$",
    path: "/usa/washington/washington/AstoriaDc",
    image: "/images/astoriadc1.png"
  },
  {
    name: "Balos Estiatorio",
    cuisine: "Greek, Mediterranean Cuisine",
    price: "$$$",
    path: "/usa/washington/washington/BalosEstiatorio",
    image: "/images/balosestiatorio1.png"
  },
  {
    name: "Bar Chinois",
    cuisine: "Asian, Dim Sum",
    price: "$$",
    path: "/usa/washington/washington/BarChinois",
    image: "/images/barchinois1.png"
  },
  {
    name: "Beloved BBQ at Love, Makoto",
    cuisine: "Japanese, Steakhouse",
    price: "$$$",
    path: "/usa/washington/washington/BelovedBbqAtLoveMakoto",
    image: "/images/belovedbbqatlovemakoto1.png"
  },
  {
    name: "BlackSalt",
    cuisine: "Seafood, American",
    price: "$$$",
    path: "/usa/washington/washington/Blacksalt",
    image: "/images/blacksalt1.png"
  },
  {
    name: "Blue Duck Tavern",
    cuisine: "American, American Contemporary",
    price: "$$$$",
    path: "/usa/washington/washington/BlueDuckTavern",
    image: "/images/blueducktavern1.png"
  },
  {
    name: "Café Riggs",
    cuisine: "Contemporary, French",
    price: "$$$",
    path: "/usa/washington/washington/CafRiggs",
    image: "/images/cafriggs1.png"
  },
  {
    name: "Cane",
    cuisine: "Caribbean, Regional Cuisine",
    price: "$$",
    path: "/usa/washington/washington/Cane",
    image: "/images/cane1.png"
  },
  {
    name: "Chang Chang",
    cuisine: "Chinese, Asian",
    price: "$$$",
    path: "/usa/washington/washington/ChangChang",
    image: "/images/changchang1.png"
  },
  {
    name: "Chaplin's",
    cuisine: "Asian, Ramen",
    price: "$$",
    path: "/usa/washington/washington/Chaplins",
    image: "/images/chaplins1.png"
  },
  {
    name: "Chloe",
    cuisine: "International, American",
    price: "$$$",
    path: "/usa/washington/washington/Chloe",
    image: "/images/chloe1.png"
  },
  {
    name: "Cranes",
    cuisine: "Spanish, Contemporary",
    price: "$$$$",
    path: "/usa/washington/washington/Cranes",
    image: "/images/cranes1.png"
  },
  {
    name: "Cucina Morini",
    cuisine: "Italian",
    price: "$$$",
    path: "/usa/washington/washington/CucinaMorini",
    image: "/images/cucinamorini1.png"
  },
  {
    name: "Daru",
    cuisine: "Indian, Regional Cuisine",
    price: "$$",
    path: "/usa/washington/washington/Daru",
    image: "/images/daru1.png"
  },
  {
    name: "Das",
    cuisine: "Ethiopian, Regional Cuisine",
    price: "$$",
    path: "/usa/washington/washington/Das",
    image: "/images/das1.png"
  },
  {
    name: "Dauphine's",
    cuisine: "Creole, Creative",
    price: "$$",
    path: "/usa/washington/washington/Dauphines",
    image: "/images/dauphines1.png"
  },
  {
    name: "Dear Sushi at Love, Makoto",
    cuisine: "Sushi, Japanese Contemporary",
    price: "$$$",
    path: "/usa/washington/washington/DearSushiAtLoveMakoto",
    image: "/images/dearsushiatlovemakoto1.png"
  },
  {
    name: "Del Mar",
    cuisine: "Spanish, Basque",
    price: "$$$$",
    path: "/usa/washington/washington/DelMar",
    image: "/images/delmar1.png"
  },
  {
    name: "Dōgon",
    cuisine: "African, Caribbean",
    price: "$$$$",
    path: "/usa/washington/washington/Dgon",
    image: "/images/dgon1.png"
  },
  {
    name: "El Secreto de Rosita",
    cuisine: "Peruvian, Latin American",
    price: "$$$",
    path: "/usa/washington/washington/ElSecretoDeRosita",
    image: "/images/elsecretoderosita1.png"
  },
  {
    name: "Elfegne",
    cuisine: "Ethiopian, Regional Cuisine",
    price: "$$",
    path: "/usa/washington/washington/Elfegne",
    image: "/images/elfegne1.png"
  },
  {
    name: "Ellē",
    cuisine: "Contemporary, Bakery",
    price: "$$",
    path: "/usa/washington/washington/Ell",
    image: "/images/ell1.png"
  },
  {
    name: "Estuary",
    cuisine: "Seafood, Regional Cuisine",
    price: "$$$$",
    path: "/usa/washington/washington/Estuary",
    image: "/images/estuary1.png"
  },
  {
    name: "Family Ethiopian",
    cuisine: "Ethiopian, Regional Cuisine",
    price: "$$",
    path: "/usa/washington/washington/FamilyEthiopian",
    image: "/images/familyethiopian1.png"
  },
  {
    name: "Fiola Mare",
    cuisine: "Seafood, Contemporary",
    price: "$$$$",
    path: "/usa/washington/washington/FiolaMare",
    image: "/images/fiolamare1.png"
  },
  {
    name: "Georgia Brown’s",
    cuisine: "Southern, American",
    price: "$$$",
    path: "/usa/washington/washington/GeorgiaBrowns",
    image: "/images/georgiabrowns1.png"
  },
  {
    name: "Grazie Nonna",
    cuisine: "Italian-American, Pizza",
    price: "$$$",
    path: "/usa/washington/washington/GrazieNonna",
    image: "/images/grazienonna1.png"
  },
  {
    name: "Hank’s Oyster Bar",
    cuisine: "Seafood, Oyster Specialities",
    price: "$$",
    path: "/usa/washington/washington/HanksOysterBar",
    image: "/images/hanksoysterbar1.png"
  },
  {
    name: "Hitching Post",
    cuisine: "Southern, Regional Cuisine",
    price: "$$",
    path: "/usa/washington/washington/HitchingPost",
    image: "/images/hitchingpost1.png"
  },
  {
    name: "Ivy City Smokehouse",
    cuisine: "Seafood, Barbecue",
    price: "$$",
    path: "/usa/washington/washington/IvyCitySmokehouse",
    image: "/images/ivycitysmokehouse1.png"
  },
  {
    name: "Jaleo",
    cuisine: "Spanish",
    price: "$$",
    path: "/usa/washington/washington/Jaleo",
    image: "/images/jaleo1.png"
  },
  {
    name: "Kappo",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/usa/washington/washington/KappoWAS",
    image: "/images/kappo1.png"
  },
  {
    name: "Karma Modern Indian",
    cuisine: "Indian, Contemporary",
    price: "$$",
    path: "/usa/washington/washington/KarmaModernIndian",
    image: "/images/karmamodernindian1.png"
  },
  {
    name: "La Bise",
    cuisine: "French",
    price: "$$$",
    path: "/usa/washington/washington/LaBise",
    image: "/images/labise1.png"
  },
  {
    name: "La Tejana",
    cuisine: "Mexican",
    price: "$",
    path: "/usa/washington/washington/LaTejana",
    image: "/images/latejana1.png"
  },
  {
    name: "Laos in Town",
    cuisine: "South East Asian, Lao",
    price: "$$",
    path: "/usa/washington/washington/LaosInTown",
    image: "/images/laosintown1.png"
  },
  {
    name: "Lapis",
    cuisine: "Afghan",
    price: "$$",
    path: "/usa/washington/washington/Lapis",
    image: "/images/lapis1.png"
  },
  {
    name: "L’Ardente",
    cuisine: "Italian",
    price: "$$",
    path: "/usa/washington/washington/Lardente",
    image: "/images/lardente1.png"
  },
  {
    name: "Lutèce",
    cuisine: "Contemporary, American",
    price: "$$",
    path: "/usa/washington/washington/Lutce",
    image: "/images/lutce1.png"
  },
  {
    name: "Maketto",
    cuisine: "Asian",
    price: "$$",
    path: "/usa/washington/washington/Maketto",
    image: "/images/maketto1.png"
  },
  {
    name: "Mandu",
    cuisine: "Korean",
    price: "$$",
    path: "/usa/washington/washington/Mandu",
    image: "/images/mandu1.png"
  },
  {
    name: "Maydān",
    cuisine: "Middle Eastern, Grills",
    price: "$$$",
    path: "/usa/washington/washington/Maydn",
    image: "/images/maydn1.png"
  },
  {
    name: "Menya Hosaki",
    cuisine: "Japanese, Ramen",
    price: "$$",
    path: "/usa/washington/washington/MenyaHosaki",
    image: "/images/menyahosaki1.png"
  },
  {
    name: "Michele's",
    cuisine: "American",
    price: "$$$",
    path: "/usa/washington/washington/Micheles",
    image: "/images/micheles1.png"
  },
  {
    name: "Moon Rabbit",
    cuisine: "Vietnamese",
    price: "$$$",
    path: "/usa/washington/washington/MoonRabbit",
    image: "/images/moonrabbit1.png"
  },
  {
    name: "New Heights",
    cuisine: "American",
    price: "$$$",
    path: "/usa/washington/washington/NewHeights",
    image: "/images/newheights1.png"
  },
  {
    name: "Obelisk",
    cuisine: "Italian",
    price: "$$$$",
    path: "/usa/washington/washington/Obelisk",
    image: "/images/obelisk1.png"
  },
  {
    name: "Opal",
    cuisine: "American",
    price: "$$$",
    path: "/usa/washington/washington/Opal",
    image: "/images/opal1.png"
  },
  {
    name: "Ottoman Taverna",
    cuisine: "Turkish",
    price: "$$",
    path: "/usa/washington/washington/OttomanTaverna",
    image: "/images/ottomantaverna1.png"
  },
  {
    name: "Oyamel",
    cuisine: "Mexican",
    price: "$$",
    path: "/usa/washington/washington/Oyamel",
    image: "/images/oyamel1.png"
  },
  {
    name: "Oyster Oyster",
    cuisine: "Vegetarian, Contemporary",
    price: "$$$",
    path: "/usa/washington/washington/OysterOyster",
    image: "/images/oysteroyster1.png"
  },
  {
    name: "Pascual",
    cuisine: "Mexican, Contemporary",
    price: "$$$",
    path: "/usa/washington/washington/Pascual",
    image: "/images/pascual1.png"
  },
  {
    name: "Petite Cerise",
    cuisine: "French",
    price: "$$$$",
    path: "/usa/washington/washington/PetiteCerise",
    image: "/images/petitecerise1.png"
  },
  {
    name: "Queen’s English",
    cuisine: "Chinese, Contemporary",
    price: "$$",
    path: "/usa/washington/washington/QueensEnglish",
    image: "/images/queensenglish1.png"
  },
  {
    name: "Rasika",
    cuisine: "Indian",
    price: "$$$",
    path: "/usa/washington/washington/Rasika",
    image: "/images/rasika1.png"
  },
  {
    name: "Residents Cafe & Bar",
    cuisine: "Contemporary",
    price: "$$",
    path: "/usa/washington/washington/ResidentsCafeBar",
    image: "/images/residentscafebar1.png"
  },
  {
    name: "Reveler's Hour",
    cuisine: "Contemporary, Italian",
    price: "$$$",
    path: "/usa/washington/washington/RevelersHour",
    image: "/images/revelershour1.png"
  },
  {
    name: "Ris",
    cuisine: "American",
    price: "$$",
    path: "/usa/washington/washington/Ris",
    image: "/images/ris1.png"
  },
  {
    name: "Royal",
    cuisine: "Latin American",
    price: "$$",
    path: "/usa/washington/washington/Royal",
    image: "/images/royal1.png"
  },
  {
    name: "Rumi's Kitchen",
    cuisine: "Persian",
    price: "$$",
    path: "/usa/washington/washington/RumisKitchen",
    image: "/images/rumiskitchen1.png"
  },
  {
    name: "Sababa",
    cuisine: "Mediterranean Cuisine",
    price: "$$",
    path: "/usa/washington/washington/Sababa",
    image: "/images/sababa1.png"
  },
  {
    name: "San Lorenzo",
    cuisine: "Italian",
    price: "$$$",
    path: "/usa/washington/washington/SanLorenzo",
    image: "/images/sanlorenzo1.png"
  },
  {
    name: "Seven Reasons",
    cuisine: "Latin American",
    price: "$$$$",
    path: "/usa/washington/washington/SevenReasons",
    image: "/images/sevenreasons1.png"
  },
  {
    name: "Sfoglina",
    cuisine: "Italian",
    price: "$$",
    path: "/usa/washington/washington/Sfoglina",
    image: "/images/sfoglina1.png"
  },
  {
    name: "Shilling Canning Company",
    cuisine: "American, Contemporary",
    price: "$$$",
    path: "/usa/washington/washington/ShillingCanningCompany",
    image: "/images/shillingcanningcompany1.png"
  },
  {
    name: "Shōtō",
    cuisine: "Japanese",
    price: "$$$",
    path: "/usa/washington/washington/Sht",
    image: "/images/sht1.png"
  },
  {
    name: "St. James",
    cuisine: "Caribbean",
    price: "$$$",
    path: "/usa/washington/washington/StJames",
    image: "/images/stjames1.png"
  },
  {
    name: "Stellina Pizzeria",
    cuisine: "Pizza, Italian",
    price: "$$",
    path: "/usa/washington/washington/StellinaPizzeria",
    image: "/images/stellinapizzeria1.png"
  },
  {
    name: "Supra",
    cuisine: "Central Asian",
    price: "$$",
    path: "/usa/washington/washington/Supra",
    image: "/images/supra1.png"
  },
  {
    name: "Taqueria Habanero",
    cuisine: "Mexican",
    price: "$$",
    path: "/usa/washington/washington/TaqueriaHabanero",
    image: "/images/taqueriahabanero1.png"
  },
  {
    name: "The Bombay Club",
    cuisine: "Indian, Contemporary",
    price: "$$$",
    path: "/usa/washington/washington/TheBombayClub",
    image: "/images/thebombayclub1.png"
  },
  {
    name: "The Imperial",
    cuisine: "American",
    price: "$$$",
    path: "/usa/washington/washington/TheImperial",
    image: "/images/theimperial1.png"
  },
  {
    name: "The Pembroke",
    cuisine: "French",
    price: "$$$",
    path: "/usa/washington/washington/ThePembroke",
    image: "/images/thepembroke1.png"
  },
  {
    name: "The Red Hen",
    cuisine: "Italian",
    price: "$$",
    path: "/usa/washington/washington/TheRedHen",
    image: "/images/theredhen1.png"
  },
  {
    name: "The Saga",
    cuisine: "Spanish",
    price: "$$$$",
    path: "/usa/washington/washington/TheSaga",
    image: "/images/thesaga1.png"
  },
  {
    name: "Thip Khao",
    cuisine: "Lao",
    price: "$$",
    path: "/usa/washington/washington/ThipKhao",
    image: "/images/thipkhao1.png"
  },
  {
    name: "Tiger Fork",
    cuisine: "Chinese, Cantonese",
    price: "$$",
    path: "/usa/washington/washington/TigerFork",
    image: "/images/tigerfork1.png"
  },
  {
    name: "Timber Pizza Co",
    cuisine: "Pizza",
    price: "$",
    path: "/usa/washington/washington/TimberPizzaCo",
    image: "/images/timberpizzaco1.png"
  },
  {
    name: "Toki Underground",
    cuisine: "Japanese, Ramen",
    price: "$",
    path: "/usa/washington/washington/TokiUnderground",
    image: "/images/tokiunderground1.png"
  },
  {
    name: "Unconventional Diner",
    cuisine: "American",
    price: "$$",
    path: "/usa/washington/washington/UnconventionalDiner",
    image: "/images/unconventionaldiner1.png"
  },
  {
    name: "Yellow",
    cuisine: "Middle Eastern",
    price: "$$",
    path: "/usa/washington/washington/Yellow",
    image: "/images/yellow1.png"
  },
  {
    name: "Zaytinya",
    cuisine: "Mediterranean Cuisine",
    price: "$$",
    path: "/usa/washington/washington/Zaytinya",
    image: "/images/zaytinya1.png"
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
