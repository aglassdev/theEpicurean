import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Barcelona";

const restaurants = [
  {
    name: "ABaC",
    cuisine: "Creative",
    price: "€€€€",
    path: "/spain/barcelona/barcelona/abac",
    image: '/images/abac1.png'
  },
  {
    name: "Ají",
    cuisine: "Fusion, Peruvian",
    price: "€€",
    path: "/spain/barcelona/barcelona/aj",
    image: '/images/aj1.png'
  },
  {
    name: "al kostat",
    cuisine: "Catalan, Traditional Cuisine",
    price: "€€",
    path: "/spain/barcelona/barcelona/al-kostat",
    image: '/images/al-kostat1.png'
  },
  {
    name: "Alapar",
    cuisine: "Fusion",
    price: "€€",
    path: "/spain/barcelona/barcelona/alapar",
    image: '/images/alapar1.png'
  },
  {
    name: "Albé",
    cuisine: "Fusion",
    price: "€€",
    path: "/spain/barcelona/barcelona/alb",
    image: '/images/alb1.png'
  },
  {
    name: "Aleia",
    cuisine: "Creative",
    price: "€€€€",
    path: "/spain/barcelona/barcelona/aleia",
    image: '/images/aleia1.png'
  },
  {
    name: "Alkimia",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/spain/barcelona/barcelona/alkimia",
    image: '/images/alkimia1.png'
  },
  {
    name: "Amar Barcelona",
    cuisine: "Contemporary, Catalan",
    price: "€€€€",
    path: "/spain/barcelona/barcelona/amar-barcelona",
    image: '/images/amar-barcelona1.png'
  },
  {
    name: "Angle",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/spain/barcelona/barcelona/angle",
    image: '/images/angle1.png'
  },
  {
    name: "Aürt",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/spain/barcelona/barcelona/art",
    image: '/images/art1.png'
  },
  {
    name: "Atempo",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/spain/barcelona/barcelona/atempo",
    image: '/images/atempo1.png'
  },
  {
    name: "Avenir",
    cuisine: "Contemporary",
    price: "€€",
    path: "/spain/barcelona/barcelona/avenir",
    image: '/images/avenir1.png'
  },
  {
    name: "Bacaro",
    cuisine: "Italian",
    price: "€€",
    path: "/spain/barcelona/barcelona/bacaro",
    image: '/images/bacaro1.png'
  },
  {
    name: "BaLó",
    cuisine: "Contemporary",
    price: "€€",
    path: "/spain/barcelona/barcelona/bal",
    image: '/images/bal1.png'
  },
  {
    name: "Bardeni-Caldeni",
    cuisine: "Meats and Grills",
    price: "€€",
    path: "/spain/barcelona/barcelona/bardeni-caldeni",
    image: '/images/bardeni-caldeni1.png'
  },
  {
    name: "Barra Alta Barcelona",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/spain/barcelona/barcelona/barra-alta-barcelona",
    image: '/images/barra-alta-barcelona1.png'
  },
  {
    name: "Batea",
    cuisine: "Seafood, Farm to table",
    price: "€€",
    path: "/spain/barcelona/barcelona/batea",
    image: '/images/batea1.png'
  },
  {
    name: "Berbena",
    cuisine: "Creative",
    price: "€€",
    path: "/spain/barcelona/barcelona/berbena",
    image: '/images/berbena1.png'
  },
  {
    name: "Besta",
    cuisine: "Farm to table, Contemporary",
    price: "€€",
    path: "/spain/barcelona/barcelona/besta",
    image: '/images/besta1.png'
  },
  {
    name: "Brabo",
    cuisine: "Grills",
    price: "€€€",
    path: "/spain/barcelona/barcelona/brabo",
    image: '/images/brabo1.png'
  },
  {
    name: "Brugarol Barcelona",
    cuisine: "Fusion",
    price: "€€",
    path: "/spain/barcelona/barcelona/brugarol-barcelona",
    image: '/images/brugarol-barcelona1.png'
  },
  {
    name: "Caelis",
    cuisine: "Creative",
    price: "€€€",
    path: "/spain/barcelona/barcelona/caelis",
    image: '/images/caelis1.png'
  },
  {
    name: "Cañete",
    cuisine: "Farm to table",
    price: "€€€",
    path: "/spain/barcelona/barcelona/caete",
    image: '/images/caete1.png'
  },
  {
    name: "Can Bo",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/spain/barcelona/barcelona/can-bo",
    image: '/images/can-bo1.png'
  },
  {
    name: "Capet",
    cuisine: "Seasonal Cuisine",
    price: "€€",
    path: "/spain/barcelona/barcelona/capet",
    image: '/images/capet1.png'
  },
  {
    name: "Cinc Sentits",
    cuisine: "Contemporary",
    price: "€€€€",
    path: "/spain/barcelona/barcelona/cinc-sentits",
    image: '/images/cinc-sentits1.png'
  },
  {
    name: "Cocina Hermanos Torres",
    cuisine: "Creative",
    price: "€€€€",
    path: "/spain/barcelona/barcelona/cocina-hermanos-torres",
    image: '/images/cocina-hermanos-torres1.png'
  },
  {
    name: "COME by Paco Méndez",
    cuisine: "Mexican, Fusion",
    price: "€€€€",
    path: "/spain/barcelona/barcelona/come-by-paco-mndez",
    image: '/images/come-by-paco-mndez1.png'
  },
  {
    name: "Compartir Barcelona",
    cuisine: "Mediterranean Cuisine",
    price: "€€€",
    path: "/spain/barcelona/barcelona/compartir-barcelona",
    image: '/images/compartir-barcelona1.png'
  },
  {
    name: "Contraban",
    cuisine: "Contemporary",
    price: "€€",
    path: "/spain/barcelona/barcelona/contraban",
    image: '/images/contraban1.png'
  },
  {
    name: "Cruix",
    cuisine: "Contemporary",
    price: "€€",
    path: "/spain/barcelona/barcelona/cruix",
    image: '/images/cruix1.png'
  },
  {
    name: "Deliri",
    cuisine: "Contemporary, Catalan",
    price: "€€",
    path: "/spain/barcelona/barcelona/deliri",
    image: '/images/deliri1.png'
  },
  {
    name: "DIREKTE",
    cuisine: "Fusion",
    price: "€€€",
    path: "/spain/barcelona/barcelona/direkte",
    image: '/images/direkte1.png'
  },
  {
    name: "Disfrutar",
    cuisine: "Creative",
    price: "€€€€",
    path: "/spain/barcelona/barcelona/disfrutar",
    image: '/images/disfrutar1.png'
  },
  {
    name: "Dos Palillos",
    cuisine: "Fusion",
    price: "€€€€",
    path: "/spain/barcelona/barcelona/dos-palillos",
    image: '/images/dos-palillos1.png'
  },
  {
    name: "Dos Pebrots",
    cuisine: "Mediterranean Cuisine",
    price: "€€€",
    path: "/spain/barcelona/barcelona/dos-pebrots",
    image: '/images/dos-pebrots1.png'
  },
  {
    name: "Eldelmar - Hermanos Torres",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/spain/barcelona/barcelona/eldelmar-hermanos-torres",
    image: '/images/eldelmar-hermanos-torres1.png'
  },
  {
    name: "Enigma",
    cuisine: "Creative",
    price: "€€€€",
    path: "/spain/barcelona/barcelona/enigma",
    image: '/images/enigma1.png'
  },
  {
    name: "Enoteca Paco Pérez",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/spain/barcelona/barcelona/enoteca-paco-prez",
    image: '/images/enoteca-paco-prez1.png'
  },
  {
    name: "Estimar",
    cuisine: "Seafood",
    price: "€€€€",
    path: "/spain/barcelona/barcelona/estimar",
    image: '/images/estimar1.png'
  },
  {
    name: "Fishølogy",
    cuisine: "Contemporary, Mediterranean Cuisine",
    price: "€€€",
    path: "/spain/barcelona/barcelona/fishlogy",
    image: '/images/fishlogy1.png'
  },
  {
    name: "Fonda España",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/spain/barcelona/barcelona/fonda-espaa",
    image: '/images/fonda-espaa1.png'
  },
  {
    name: "Fronda Pasaje",
    cuisine: "Vegetarian",
    price: "€€",
    path: "/spain/barcelona/barcelona/fronda-pasaje",
    image: '/images/fronda-pasaje1.png'
  },
  {
    name: "Glug",
    cuisine: "Creative",
    price: "€€",
    path: "/spain/barcelona/barcelona/glug",
    image: '/images/glug1.png'
  },
  {
    name: "Gresca",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/spain/barcelona/barcelona/gresca",
    image: '/images/gresca1.png'
  },
  {
    name: "Hisop",
    cuisine: "Creative",
    price: "€€€",
    path: "/spain/barcelona/barcelona/hisop",
    image: '/images/hisop1.png'
  },
  {
    name: "Hofmann",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/spain/barcelona/barcelona/hofmann",
    image: '/images/hofmann1.png'
  },
  {
    name: "Imprevisto",
    cuisine: "Contemporary",
    price: "€€",
    path: "/spain/barcelona/barcelona/imprevisto",
    image: '/images/imprevisto1.png'
  },
  {
    name: "Incorrecte",
    cuisine: "Creative",
    price: "€€",
    path: "/spain/barcelona/barcelona/incorrecte",
    image: '/images/incorrecte1.png'
  },
  {
    name: "Jiribilla",
    cuisine: "Mexican",
    price: "€€",
    path: "/spain/barcelona/barcelona/jiribilla",
    image: '/images/jiribilla1.png'
  },
  {
    name: "Kamikaze",
    cuisine: "Fusion, Creative",
    price: "€€€",
    path: "/spain/barcelona/barcelona/kamikaze",
    image: '/images/kamikaze1.png'
  },
  {
    name: "Kintsugi",
    cuisine: "Japanese Contemporary",
    price: "€€€",
    path: "/spain/barcelona/barcelona/kintsugi",
    image: '/images/kintsugi1.png'
  },
  {
    name: "Koy Shunka",
    cuisine: "Japanese",
    price: "€€€€",
    path: "/spain/barcelona/barcelona/koy-shunka",
    image: '/images/koy-shunka1.png'
  },
  {
    name: "La Forquilla",
    cuisine: "Creative",
    price: "€€€",
    path: "/spain/barcelona/barcelona/la-forquilla",
    image: '/images/la-forquilla1.png'
  },
  {
    name: "La Tartarería Raw food",
    cuisine: "Contemporary",
    price: "€€",
    path: "/spain/barcelona/barcelona/la-tartarera-raw-food",
    image: '/images/la-tartarera-raw-food1.png'
  },
  {
    name: "La Taverna del Clínic",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/spain/barcelona/barcelona/la-taverna-del-clnic",
    image: '/images/la-taverna-del-clnic1.png'
  },
  {
    name: "L'Antiquari Gastronòmic",
    cuisine: "Creative",
    price: "€€€",
    path: "/spain/barcelona/barcelona/lantiquari-gastronmic",
    image: '/images/lantiquari-gastronmic1.png'
  },
  {
    name: "Lasarte",
    cuisine: "Creative",
    price: "€€€€",
    path: "/spain/barcelona/barcelona/lasarte",
    image: '/images/lasarte1.png'
  },
  {
    name: "Leña Barcelona",
    cuisine: "Meats and Grills",
    price: "€€€",
    path: "/spain/barcelona/barcelona/lea-barcelona",
    image: '/images/lea-barcelona1.png'
  },
  {
    name: "MAE Barcelona",
    cuisine: "Creative",
    price: "€€€",
    path: "/spain/barcelona/barcelona/mae-barcelona",
    image: '/images/mae-barcelona1.png'
  },
  {
    name: "Maleducat",
    cuisine: "Contemporary",
    price: "€€",
    path: "/spain/barcelona/barcelona/maleducat",
    image: '/images/maleducat1.png'
  },
  {
    name: "Mantis",
    cuisine: "Fusion",
    price: "€€",
    path: "/spain/barcelona/barcelona/mantis",
    image: '/images/mantis1.png'
  },
  {
    name: "Maymanta",
    cuisine: "Peruvian",
    price: "€€€",
    path: "/spain/barcelona/barcelona/maymanta",
    image: '/images/maymanta1.png'
  },
  {
    name: "âme",
    cuisine: "French Contemporary",
    price: "€€€",
    path: "/spain/barcelona/barcelona/me",
    image: '/images/me1.png'
  },
  {
    name: "Moments",
    cuisine: "Creative",
    price: "€€€€",
    path: "/spain/barcelona/barcelona/moments",
    image: '/images/moments1.png'
  },
  {
    name: "Mont Bar",
    cuisine: "Creative",
    price: "€€€",
    path: "/spain/barcelona/barcelona/mont-bar",
    image: '/images/mont-bar1.png'
  },
  {
    name: "Nairod",
    cuisine: "Farm to table, Traditional Cuisine",
    price: "€€",
    path: "/spain/barcelona/barcelona/nairod",
    image: '/images/nairod1.png'
  },
  {
    name: "Nectari",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/spain/barcelona/barcelona/nectari",
    image: '/images/nectari1.png'
  },
  {
    name: "Olivos",
    cuisine: "Creative, Contemporary",
    price: "€€€",
    path: "/spain/barcelona/barcelona/olivos",
    image: '/images/olivos1.png'
  },
  {
    name: "Oníric",
    cuisine: "Fusion",
    price: "€€",
    path: "/spain/barcelona/barcelona/onric",
    image: '/images/onric1.png'
  },
  {
    name: "Oria",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/spain/barcelona/barcelona/oria",
    image: '/images/oria1.png'
  },
  {
    name: "Osmosis",
    cuisine: "Creative",
    price: "€€",
    path: "/spain/barcelona/barcelona/osmosis",
    image: '/images/osmosis1.png'
  },
  {
    name: "Paco Meralgo",
    cuisine: "Traditional Cuisine",
    price: "€",
    path: "/spain/barcelona/barcelona/paco-meralgo",
    image: '/images/paco-meralgo1.png'
  },
  {
    name: "Petit Comitè",
    cuisine: "Regional Cuisine",
    price: "€€€",
    path: "/spain/barcelona/barcelona/petit-comit",
    image: '/images/petit-comit1.png'
  },
  {
    name: "Petit Comitè Gaig",
    cuisine: "Regional Cuisine",
    price: "€€€€",
    path: "/spain/barcelona/barcelona/petit-comit-gaig",
    image: '/images/petit-comit-gaig1.png'
  },
  {
    name: "Prodigi",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/spain/barcelona/barcelona/prodigi",
    image: '/images/prodigi1.png'
  },
  {
    name: "Pur",
    cuisine: "Farm to table",
    price: "€€€",
    path: "/spain/barcelona/barcelona/pur",
    image: '/images/pur1.png'
  },
  {
    name: "Quirat",
    cuisine: "Seasonal Cuisine, Contemporary",
    price: "€€€",
    path: "/spain/barcelona/barcelona/quirat",
    image: '/images/quirat1.png'
  },
  {
    name: "RíasKru",
    cuisine: "Seafood",
    price: "€€€",
    path: "/spain/barcelona/barcelona/raskru",
    image: '/images/raskru1.png'
  },
  {
    name: "Saó",
    cuisine: "Traditional Cuisine, Creative",
    price: "€€",
    path: "/spain/barcelona/barcelona/sa",
    image: '/images/sa1.png'
  },
  {
    name: "SCAPAR",
    cuisine: "Fusion",
    price: "€€€€",
    path: "/spain/barcelona/barcelona/scapar",
    image: '/images/scapar1.png'
  },
  {
    name: "Sensato",
    cuisine: "Japanese",
    price: "€€€",
    path: "/spain/barcelona/barcelona/sensato",
    image: '/images/sensato1.png'
  },
  {
    name: "Slow & Low",
    cuisine: "World Cuisine, Contemporary",
    price: "€€€€",
    path: "/spain/barcelona/barcelona/slow-low",
    image: '/images/slow-low1.png'
  },
  {
    name: "Solc",
    cuisine: "Mediterranean Cuisine, Catalan",
    price: "€€",
    path: "/spain/barcelona/barcelona/solc",
    image: '/images/solc1.png'
  },
  {
    name: "Soluna",
    cuisine: "Japanese Contemporary",
    price: "€€€",
    path: "/spain/barcelona/barcelona/soluna",
    image: '/images/soluna1.png'
  },
  {
    name: "Suculent",
    cuisine: "Contemporary",
    price: "€€",
    path: "/spain/barcelona/barcelona/suculent",
    image: '/images/suculent1.png'
  },
  {
    name: "Suto",
    cuisine: "Japanese",
    price: "€€€€",
    path: "/spain/barcelona/barcelona/suto",
    image: '/images/suto1.png'
  },
  {
    name: "Taberna Noroeste",
    cuisine: "Contemporary",
    price: "€€€",
    path: "/spain/barcelona/barcelona/taberna-noroeste",
    image: '/images/taberna-noroeste1.png'
  },
  {
    name: "Teatro kitchen & bar",
    cuisine: "Contemporary",
    price: "€€€",
    path: "/spain/barcelona/barcelona/teatro-kitchen-bar",
    image: '/images/teatro-kitchen-bar1.png'
  },
  {
    name: "Ten's",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/spain/barcelona/barcelona/tens",
    image: '/images/tens1.png'
  },
  {
    name: "Tram-Tram",
    cuisine: "Contemporary",
    price: "€€€",
    path: "/spain/barcelona/barcelona/tram-tram",
    image: '/images/tram-tram1.png'
  },
  {
    name: "Tunateca Balfegó",
    cuisine: "Fusion",
    price: "€€€",
    path: "/spain/barcelona/barcelona/tunateca-balfeg",
    image: '/images/tunateca-balfeg1.png'
  },
  {
    name: "Ultramarinos Marín",
    cuisine: "Farm to table",
    price: "€€€",
    path: "/spain/barcelona/barcelona/ultramarinos-marn",
    image: '/images/ultramarinos-marn1.png'
  },
  {
    name: "Uma",
    cuisine: "Creative",
    price: "€€€€",
    path: "/spain/barcelona/barcelona/uma",
    image: '/images/uma1.png'
  },
  {
    name: "Uma",
    cuisine: "Creative",
    price: "€€€€",
    path: "/spain/barcelona/barcelona/uma",
    image: '/images/uma1.png'
  },
  {
    name: "Via Veneto",
    cuisine: "Classic Cuisine",
    price: "€€€€",
    path: "/spain/barcelona/barcelona/via-veneto",
    image: '/images/via-veneto1.png'
  },
  {
    name: "Virens",
    cuisine: "Contemporary, Mediterranean Cuisine",
    price: "€€",
    path: "/spain/barcelona/barcelona/virens",
    image: '/images/virens1.png'
  },
  {
    name: "Vivanda",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/spain/barcelona/barcelona/vivanda",
    image: '/images/vivanda1.png'
  },
  {
    name: "Vivanda",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/spain/barcelona/barcelona/vivanda",
    image: '/images/vivanda1.png'
  },
  {
    name: "Windsor",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/spain/barcelona/barcelona/windsor",
    image: '/images/windsor1.png'
  },
  {
    name: "Xavier Pellicer",
    cuisine: "Creative",
    price: "€€€",
    path: "/spain/barcelona/barcelona/xavier-pellicer",
    image: '/images/xavier-pellicer1.png'
  },
  {
    name: "Xerta",
    cuisine: "Creative",
    price: "€€€€",
    path: "/spain/barcelona/barcelona/xerta",
    image: '/images/xerta1.png'
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
