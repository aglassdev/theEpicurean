import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Denver";

const restaurants = [
  {
    name: "A5 Steakhouse",
    cuisine: "Steakhouse, American",
    price: "$$$$",
    path: "/usa/colorado/denver/A5Steakhouse",
    image: "/images/a5steakhouse1.png"
  },
  {
    name: "Alma Fonda Fina",
    cuisine: "Mexican, Contemporary",
    price: "$$",
    path: "/usa/colorado/denver/AlmaFondaFina",
    image: "/images/almafondafina1.png"
  },
  {
    name: "Ash'Kara",
    cuisine: "Israeli, Mediterranean Cuisine",
    price: "$$$",
    path: "/usa/colorado/denver/Ashkara",
    image: "/images/ashkara1.png"
  },
  {
    name: "Barolo Grill",
    cuisine: "Italian, Regional Cuisine",
    price: "$$$$",
    path: "/usa/colorado/denver/BaroloGrill",
    image: "/images/barologrill1.png"
  },
  {
    name: "Beckon",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/colorado/denver/Beckon",
    image: "/images/beckon1.png"
  },
  {
    name: "Brasserie Brixton",
    cuisine: "French",
    price: "$$$",
    path: "/usa/colorado/denver/BrasserieBrixton",
    image: "/images/brasseriebrixton1.png"
  },
  {
    name: "Brutø",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/colorado/denver/Brut",
    image: "/images/brut1.png"
  },
  {
    name: "Dio Mio",
    cuisine: "Italian, Contemporary",
    price: "$$",
    path: "/usa/colorado/denver/DioMio",
    image: "/images/diomio1.png"
  },
  {
    name: "Glo Noodle House",
    cuisine: "Ramen",
    price: "$$",
    path: "/usa/colorado/denver/GloNoodleHouse",
    image: "/images/glonoodlehouse1.png"
  },
  {
    name: "Guard and Grace",
    cuisine: "Steakhouse, American Contemporary",
    price: "$$$$",
    path: "/usa/colorado/denver/GuardAndGrace",
    image: "/images/guardandgrace1.png"
  },
  {
    name: "Hey Kiddo",
    cuisine: "Contemporary, Fusion",
    price: "$$$",
    path: "/usa/colorado/denver/HeyKiddo",
    image: "/images/heykiddo1.png"
  },
  {
    name: "Hop Alley",
    cuisine: "Chinese, Contemporary",
    price: "$$",
    path: "/usa/colorado/denver/HopAlley",
    image: "/images/hopalley1.png"
  },
  {
    name: "Kawa Ni",
    cuisine: "Japanese, Contemporary",
    price: "$$",
    path: "/usa/colorado/denver/KawaNi",
    image: "/images/kawani1.png"
  },
  {
    name: "La Diabla Pozole y Mezcal",
    cuisine: "Mexican",
    price: "$$",
    path: "/usa/colorado/denver/LaDiablaPozoleYMezcal",
    image: "/images/ladiablapozoleymezcal1.png"
  },
  {
    name: "MAKfam",
    cuisine: "Chinese",
    price: "$",
    path: "/usa/colorado/denver/Makfam",
    image: "/images/makfam1.png"
  },
  {
    name: "Marco's Coal-Fired",
    cuisine: "Pizza",
    price: "$$",
    path: "/usa/colorado/denver/MarcosCoalfired",
    image: "/images/marcoscoalfired1.png"
  },
  {
    name: "Mercantile Dining and Provision",
    cuisine: "American",
    price: "$$$",
    path: "/usa/colorado/denver/MercantileDiningAndProvision",
    image: "/images/mercantilediningandprovision1.png"
  },
  {
    name: "Mister Oso",
    cuisine: "Latin American",
    price: "$$",
    path: "/usa/colorado/denver/MisterOso",
    image: "/images/misteroso1.png"
  },
  {
    name: "Noisette",
    cuisine: "French, Contemporary",
    price: "$$$",
    path: "/usa/colorado/denver/Noisette",
    image: "/images/noisette1.png"
  },
  {
    name: "Olivia",
    cuisine: "Italian, Contemporary",
    price: "$$$",
    path: "/usa/colorado/denver/OliviaDEN",
    image: "/images/olivia1.png"
  },
  {
    name: "Q House",
    cuisine: "Chinese",
    price: "$$$",
    path: "/usa/colorado/denver/QHouse",
    image: "/images/qhouse1.png"
  },
  {
    name: "Safta",
    cuisine: "Israeli",
    price: "$$$",
    path: "/usa/colorado/denver/Safta",
    image: "/images/safta1.png"
  },
  {
    name: "Smok",
    cuisine: "Barbecue, American",
    price: "$$",
    path: "/usa/colorado/denver/Smok",
    image: "/images/smok1.png"
  },
  {
    name: "Tavernetta",
    cuisine: "Italian, Contemporary",
    price: "$$",
    path: "/usa/colorado/denver/Tavernetta",
    image: "/images/tavernetta1.png"
  },
  {
    name: "Temaki Den",
    cuisine: "Japanese",
    price: "$$$",
    path: "/usa/colorado/denver/TemakiDen",
    image: "/images/temakiden1.png"
  },
  {
    name: "The Ginger Pig",
    cuisine: "Chinese, Asian",
    price: "$$",
    path: "/usa/colorado/denver/TheGingerPig",
    image: "/images/thegingerpig1.png"
  },
  {
    name: "The Wolf's Tailor",
    cuisine: "Contemporary, Creative",
    price: "$$$$",
    path: "/usa/colorado/denver/TheWolfsTailor",
    image: "/images/thewolfstailor1.png"
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
        backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/DenverCP.JPG/1280px-DenverCP.JPG")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
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
