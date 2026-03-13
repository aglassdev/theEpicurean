import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Orlando";

const restaurants = [
  {
    name: "Bacán",
    cuisine: "Latin American",
    price: "$$$",
    path: "/usa/florida/orlando/Bacn",
    image: "/images/bacn1.png"
  },
  {
    name: "Black Rooster Taqueria",
    cuisine: "Mexican",
    price: "$$",
    path: "/usa/florida/orlando/BlackRoosterTaqueria",
    image: "/images/blackroostertaqueria1.png"
  },
  {
    name: "Bánh Mì Boy",
    cuisine: "Vietnamese",
    price: "$$",
    path: "/usa/florida/orlando/BnhMBoy",
    image: "/images/bnhmboy1.png"
  },
  {
    name: "Bombay Street Kitchen",
    cuisine: "Indian",
    price: "$$",
    path: "/usa/florida/orlando/BombayStreetKitchen",
    image: "/images/bombaystreetkitchen1.png"
  },
  {
    name: "Camille",
    cuisine: "Vietnamese, French",
    price: "$$$$",
    path: "/usa/florida/orlando/Camille",
    image: "/images/camille1.png"
  },
  {
    name: "Capa",
    cuisine: "Steakhouse, Spanish",
    price: "$$$$",
    path: "/usa/florida/orlando/Capa",
    image: "/images/capa1.png"
  },
  {
    name: "Cítricos",
    cuisine: "American, Regional Cuisine",
    price: "$$$$",
    path: "/usa/florida/orlando/Citricos",
    image: "/images/citricos1.png"
  },
  {
    name: "Coro",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/usa/florida/orlando/Coro",
    image: "/images/coro1.png"
  },
  {
    name: "Domu",
    cuisine: "Ramen, Japanese",
    price: "$$",
    path: "/usa/florida/orlando/Domu",
    image: "/images/domu1.png"
  },
  {
    name: "Edoboy",
    cuisine: "Sushi",
    price: "$$$",
    path: "/usa/florida/orlando/Edoboy",
    image: "/images/edoboy1.png"
  },
  {
    name: "Four Flamingos, A Richard Blais Florida Kitchen",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/usa/florida/orlando/FourFlamingosARichardBlaisFloridaKitchen",
    image: "/images/fourflamingosarichardblaisfloridakitchen1.png"
  },
  {
    name: "Gyukatsu Rose",
    cuisine: "Japanese",
    price: "$$",
    path: "/usa/florida/orlando/GyukatsuRose",
    image: "/images/gyukatsurose1.png"
  },
  {
    name: "Isan Zaap",
    cuisine: "Thai",
    price: "$$",
    path: "/usa/florida/orlando/IsanZaap",
    image: "/images/isanzaap1.png"
  },
  {
    name: "Juju",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/usa/florida/orlando/Juju",
    image: "/images/juju1.png"
  },
  {
    name: "Kabooki Sushi",
    cuisine: "Japanese, Sushi",
    price: "$$$",
    path: "/usa/florida/orlando/KabookiSushi",
    image: "/images/kabookisushi1.png"
  },
  {
    name: "Kadence",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/florida/orlando/Kadence",
    image: "/images/kadence1.png"
  },
  {
    name: "Kai Asian Street Fare",
    cuisine: "Asian",
    price: "$$",
    path: "/usa/florida/orlando/KaiAsianStreetFare",
    image: "/images/kaiasianstreetfare1.png"
  },
  {
    name: "Kai Kai",
    cuisine: "Chinese, Cantonese",
    price: "$$",
    path: "/usa/florida/orlando/KaiKai",
    image: "/images/kaikai1.png"
  },
  {
    name: "Kaya",
    cuisine: "Filipino",
    price: "$$$$",
    path: "/usa/florida/orlando/Kaya",
    image: "/images/kaya1.png"
  },
  {
    name: "Knife & Spoon",
    cuisine: "Steakhouse",
    price: "$$$$",
    path: "/usa/florida/orlando/KnifeSpoon",
    image: "/images/knifespoon1.png"
  },
  {
    name: "Maxine's on Shine",
    cuisine: "American",
    price: "$$",
    path: "/usa/florida/orlando/MaxinesOnShine",
    image: "/images/maxinesonshine1.png"
  },
  {
    name: "Morimoto Asia",
    cuisine: "Asian",
    price: "$$$",
    path: "/usa/florida/orlando/MorimotoAsia",
    image: "/images/morimotoasia1.png"
  },
  {
    name: "Nami",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/usa/florida/orlando/Nami",
    image: "/images/nami1.png"
  },
  {
    name: "Natsu",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/florida/orlando/Natsu",
    image: "/images/natsu1.png"
  },
  {
    name: "Otto's High Dive",
    cuisine: "Cuban, American",
    price: "$$",
    path: "/usa/florida/orlando/OttosHighDive",
    image: "/images/ottoshighdive1.png"
  },
  {
    name: "Papa Llama",
    cuisine: "Peruvian, Contemporary",
    price: "$$$$",
    path: "/usa/florida/orlando/PapaLlama",
    image: "/images/papallama1.png"
  },
  {
    name: "Pizza Bruno",
    cuisine: "Pizza",
    price: "$$",
    path: "/usa/florida/orlando/PizzaBruno",
    image: "/images/pizzabruno1.png"
  },
  {
    name: "Primo",
    cuisine: "Italian",
    price: "$$$",
    path: "/usa/florida/orlando/Primo",
    image: "/images/primo1.png"
  },
  {
    name: "Ravello",
    cuisine: "Italian",
    price: "$$$",
    path: "/usa/florida/orlando/Ravello",
    image: "/images/ravello1.png"
  },
  {
    name: "Se7en Bites",
    cuisine: "American, Bakery",
    price: "$",
    path: "/usa/florida/orlando/Se7enBites",
    image: "/images/se7enbites1.png"
  },
  {
    name: "Sear + Sea",
    cuisine: "Steakhouse",
    price: "$$$$",
    path: "/usa/florida/orlando/SearSea",
    image: "/images/searsea1.png"
  },
  {
    name: "Selam",
    cuisine: "Ethiopian",
    price: "$$",
    path: "/usa/florida/orlando/Selam",
    image: "/images/selam1.png"
  },
  {
    name: "Shin Jung",
    cuisine: "Korean",
    price: "$$",
    path: "/usa/florida/orlando/ShinJung",
    image: "/images/shinjung1.png"
  },
  {
    name: "Smokemade Meats + Eats",
    cuisine: "Barbecue",
    price: "$$",
    path: "/usa/florida/orlando/SmokemadeMeatsEats",
    image: "/images/smokemademeatseats1.png"
  },
  {
    name: "Sorekara",
    cuisine: "Japanese, Contemporary",
    price: "$$$$",
    path: "/usa/florida/orlando/Sorekara",
    image: "/images/sorekara1.png"
  },
  {
    name: "Sticky Rice",
    cuisine: "Lao",
    price: "$$",
    path: "/usa/florida/orlando/StickyRice",
    image: "/images/stickyrice1.png"
  },
  {
    name: "Strand",
    cuisine: "American, Contemporary",
    price: "$$",
    path: "/usa/florida/orlando/Strand",
    image: "/images/strand1.png"
  },
  {
    name: "Sushi Saint",
    cuisine: "Japanese",
    price: "$$",
    path: "/usa/florida/orlando/SushiSaint",
    image: "/images/sushisaint1.png"
  },
  {
    name: "Swine & Sons",
    cuisine: "American, Southern",
    price: "$",
    path: "/usa/florida/orlando/SwineSons",
    image: "/images/swinesons1.png"
  },
  {
    name: "Taste of Chengdu",
    cuisine: "Chinese, Sichuan",
    price: "$$",
    path: "/usa/florida/orlando/TasteOfChengdu",
    image: "/images/tasteofchengdu1.png"
  },
  {
    name: "The Pinery",
    cuisine: "American",
    price: "$$$",
    path: "/usa/florida/orlando/ThePinery",
    image: "/images/thepinery1.png"
  },
  {
    name: "The Polite Pig",
    cuisine: "Barbecue",
    price: "$$",
    path: "/usa/florida/orlando/ThePolitePig",
    image: "/images/thepolitepig1.png"
  },
  {
    name: "The Ravenous Pig",
    cuisine: "Gastropub",
    price: "$$",
    path: "/usa/florida/orlando/TheRavenousPig",
    image: "/images/theravenouspig1.png"
  },
  {
    name: "Toledo",
    cuisine: "Spanish",
    price: "$$$",
    path: "/usa/florida/orlando/Toledo",
    image: "/images/toledo1.png"
  },
  {
    name: "Tori Tori",
    cuisine: "Japanese",
    price: "$$",
    path: "/usa/florida/orlando/ToriTori",
    image: "/images/toritori1.png"
  },
  {
    name: "Twenty Pho Hour",
    cuisine: "Asian",
    price: "$$",
    path: "/usa/florida/orlando/TwentyPhoHour",
    image: "/images/twentyphohour1.png"
  },
  {
    name: "UniGirl",
    cuisine: "Japanese, Onigiri",
    price: "$",
    path: "/usa/florida/orlando/Unigirl",
    image: "/images/unigirl1.png"
  },
  {
    name: "Victoria & Albert's",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/florida/orlando/VictoriaAlberts",
    image: "/images/victoriaalberts1.png"
  },
  {
    name: "Walala Hand-Pulled Noodle House",
    cuisine: "Chinese",
    price: "$$",
    path: "/usa/florida/orlando/WalalaHandpulledNoodleHouse",
    image: "/images/walalahandpullednoodlehouse1.png"
  },
  {
    name: "YH Seafood Clubhouse",
    cuisine: "Chinese, Cantonese",
    price: "$$",
    path: "/usa/florida/orlando/YhSeafoodClubhouse",
    image: "/images/yhseafoodclubhouse1.png"
  },
  {
    name: "Z Asian",
    cuisine: "Vietnamese",
    price: "$$",
    path: "/usa/florida/orlando/ZAsian",
    image: "/images/zasian1.png"
  },
  {
    name: "Zaru",
    cuisine: "Japanese, Udon",
    price: "$$",
    path: "/usa/florida/orlando/Zaru",
    image: "/images/zaru1.png"
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
