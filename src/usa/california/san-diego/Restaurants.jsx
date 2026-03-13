import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "San Diego";

const restaurants = [
  {
    name: "Addison",
    cuisine: "Contemporary, Californian",
    price: "$$$$",
    path: "/usa/california/san-diego/Addison",
    image: "/images/addison1.png"
  },
  {
    name: "Animae",
    cuisine: "Asian",
    price: "$$$",
    path: "/usa/california/san-diego/Animae",
    image: "/images/animae1.png"
  },
  {
    name: "Artifact at Mingei",
    cuisine: "International, Contemporary",
    price: "$$",
    path: "/usa/california/san-diego/ArtifactAtMingei",
    image: "/images/artifactatmingei1.png"
  },
  {
    name: "Born & Raised",
    cuisine: "Steakhouse",
    price: "$$$$",
    path: "/usa/california/san-diego/BornRaised",
    image: "/images/bornraised1.png"
  },
  {
    name: "Callie",
    cuisine: "Mediterranean Cuisine, Middle Eastern",
    price: "$$",
    path: "/usa/california/san-diego/Callie",
    image: "/images/callie1.png"
  },
  {
    name: "Cesarina",
    cuisine: "Italian",
    price: "$$",
    path: "/usa/california/san-diego/Cesarina",
    image: "/images/cesarina1.png"
  },
  {
    name: "Ciccia Osteria",
    cuisine: "Italian, Milanese",
    price: "$$",
    path: "/usa/california/san-diego/CicciaOsteria",
    image: "/images/cicciaosteria1.png"
  },
  {
    name: "Cloak & Petal",
    cuisine: "Japanese",
    price: "$$$",
    path: "/usa/california/san-diego/CloakPetal",
    image: "/images/cloakpetal1.png"
  },
  {
    name: "Coasterra",
    cuisine: "Mexican, Seafood",
    price: "$$$",
    path: "/usa/california/san-diego/Coasterra",
    image: "/images/coasterra1.png"
  },
  {
    name: "Craft & Commerce",
    cuisine: "American",
    price: "$$",
    path: "/usa/california/san-diego/CraftCommerce",
    image: "/images/craftcommerce1.png"
  },
  {
    name: "Cucina Urbana",
    cuisine: "Italian",
    price: "$$",
    path: "/usa/california/san-diego/CucinaUrbana",
    image: "/images/cucinaurbana1.png"
  },
  {
    name: "Fort Oak",
    cuisine: "Steakhouse, American",
    price: "$$$$",
    path: "/usa/california/san-diego/FortOak",
    image: "/images/fortoak1.png"
  },
  {
    name: "Great Maple",
    cuisine: "American",
    price: "$",
    path: "/usa/california/san-diego/GreatMaple",
    image: "/images/greatmaple1.png"
  },
  {
    name: "Herb & Wood",
    cuisine: "Californian",
    price: "$$$",
    path: "/usa/california/san-diego/HerbWood",
    image: "/images/herbwood1.png"
  },
  {
    name: "Hidden Fish",
    cuisine: "Japanese, Sushi",
    price: "$$$",
    path: "/usa/california/san-diego/HiddenFish",
    image: "/images/hiddenfish1.png"
  },
  {
    name: "Juniper & Ivy",
    cuisine: "Californian",
    price: "$$$",
    path: "/usa/california/san-diego/JuniperIvy",
    image: "/images/juniperivy1.png"
  },
  {
    name: "Kettner Exchange",
    cuisine: "Contemporary, American Contemporary",
    price: "$$",
    path: "/usa/california/san-diego/KettnerExchange",
    image: "/images/kettnerexchange1.png"
  },
  {
    name: "Kingfisher",
    cuisine: "Vietnamese, Contemporary",
    price: "$$$",
    path: "/usa/california/san-diego/Kingfisher",
    image: "/images/kingfisher1.png"
  },
  {
    name: "LOLA 55",
    cuisine: "Mexican",
    price: "$",
    path: "/usa/california/san-diego/Lola55",
    image: "/images/lola551.png"
  },
  {
    name: "Mabel’s Gone Fishing",
    cuisine: "Seafood, Californian",
    price: "$$",
    path: "/usa/california/san-diego/MabelsGoneFishing",
    image: "/images/mabelsgonefishing1.png"
  },
  {
    name: "Menya Ultra",
    cuisine: "Japanese, Ramen",
    price: "$$",
    path: "/usa/california/san-diego/MenyaUltra",
    image: "/images/menyaultra1.png"
  },
  {
    name: "Morning Glory",
    cuisine: "American",
    price: "$$",
    path: "/usa/california/san-diego/MorningGlory",
    image: "/images/morningglory1.png"
  },
  {
    name: "Paradisaea",
    cuisine: "Californian, Contemporary",
    price: "$$$$",
    path: "/usa/california/san-diego/Paradisaea",
    image: "/images/paradisaea1.png"
  },
  {
    name: "Siamo Napoli",
    cuisine: "Italian",
    price: "$$",
    path: "/usa/california/san-diego/SiamoNapoli",
    image: "/images/siamonapoli1.png"
  },
  {
    name: "Soichi",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/california/san-diego/Soichi",
    image: "/images/soichi1.png"
  },
  {
    name: "Solare",
    cuisine: "Italian, Tuscan",
    price: "$$",
    path: "/usa/california/san-diego/Solare",
    image: "/images/solare1.png"
  },
  {
    name: "Sovereign",
    cuisine: "Thai, Lao",
    price: "$",
    path: "/usa/california/san-diego/Sovereign",
    image: "/images/sovereign1.png"
  },
  {
    name: "Sushi Tadokoro",
    cuisine: "Japanese, Sushi",
    price: "$$$",
    path: "/usa/california/san-diego/SushiTadokoro",
    image: "/images/sushitadokoro1.png"
  },
  {
    name: "The Fishery",
    cuisine: "Seafood",
    price: "$$",
    path: "/usa/california/san-diego/TheFishery",
    image: "/images/thefishery1.png"
  },
  {
    name: "Trust",
    cuisine: "American, International",
    price: "$$$",
    path: "/usa/california/san-diego/Trust",
    image: "/images/trust1.png"
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
