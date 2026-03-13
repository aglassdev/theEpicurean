import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Oaxaca";

const restaurants = [
  {
    name: "Adamá",
    cuisine: "Middle Eastern",
    price: "$",
    path: "/mexico/oaxaca/oaxaca/adam",
    image: '/images/adam1.png'
  },
  {
    name: "Alfonsina",
    cuisine: "Mexican",
    price: "$$",
    path: "/mexico/oaxaca/oaxaca/alfonsina",
    image: '/images/alfonsina1.png'
  },
  {
    name: "Almú",
    cuisine: "Mexican",
    price: "$",
    path: "/mexico/oaxaca/oaxaca/alm",
    image: '/images/alm1.png'
  },
  {
    name: "Ancestral Cocina Tradicional",
    cuisine: "Mexican",
    price: "$$",
    path: "/mexico/oaxaca/oaxaca/ancestral-cocina-tradicional",
    image: '/images/ancestral-cocina-tradicional1.png'
  },
  {
    name: "Asador Bacanora Oaxaca",
    cuisine: "Mexican",
    price: "$$$",
    path: "/mexico/oaxaca/oaxaca/asador-bacanora-oaxaca",
    image: '/images/asador-bacanora-oaxaca1.png'
  },
  {
    name: "Barbacoa Obispo Cocina Rural",
    cuisine: "Mexican",
    price: "$",
    path: "/mexico/oaxaca/oaxaca/barbacoa-obispo-cocina-rural",
    image: '/images/barbacoa-obispo-cocina-rural1.png'
  },
  {
    name: "Brio",
    cuisine: "Mexican, Mediterranean Cuisine",
    price: "$$",
    path: "/mexico/oaxaca/oaxaca/brio",
    image: '/images/brio1.png'
  },
  {
    name: "Casa Oaxaca El Restaurante",
    cuisine: "Mexican, Contemporary",
    price: "$$$",
    path: "/mexico/oaxaca/oaxaca/casa-oaxaca-el-restaurante",
    image: '/images/casa-oaxaca-el-restaurante1.png'
  },
  {
    name: "Criollo",
    cuisine: "Mexican, Traditional Cuisine",
    price: "$$$$",
    path: "/mexico/oaxaca/oaxaca/criollo",
    image: '/images/criollo1.png'
  },
  {
    name: "Crudo",
    cuisine: "Fusion, Mexican",
    price: "$$$$",
    path: "/mexico/oaxaca/oaxaca/crudo",
    image: '/images/crudo1.png'
  },
  {
    name: "Itanoní",
    cuisine: "Mexican, Traditional Cuisine",
    price: "$",
    path: "/mexico/oaxaca/oaxaca/itanon",
    image: '/images/itanon1.png'
  },
  {
    name: "La Olla",
    cuisine: "Mexican",
    price: "$$",
    path: "/mexico/oaxaca/oaxaca/la-olla",
    image: '/images/la-olla1.png'
  },
  {
    name: "Labo Fermento",
    cuisine: "Asian",
    price: "$$",
    path: "/mexico/oaxaca/oaxaca/labo-fermento",
    image: '/images/labo-fermento1.png'
  },
  {
    name: "Las Quince Letras",
    cuisine: "Mexican, Regional Cuisine",
    price: "$$",
    path: "/mexico/oaxaca/oaxaca/las-quince-letras",
    image: '/images/las-quince-letras1.png'
  },
  {
    name: "Levadura de Olla Restaurante",
    cuisine: "Mexican, Traditional Cuisine",
    price: "$$",
    path: "/mexico/oaxaca/oaxaca/levadura-de-olla-restaurante",
    image: '/images/levadura-de-olla-restaurante1.png'
  },
  {
    name: "Los Danzantes Oaxaca",
    cuisine: "Mexican, Traditional Cuisine",
    price: "$$$",
    path: "/mexico/oaxaca/oaxaca/los-danzantes-oaxaca",
    image: '/images/los-danzantes-oaxaca1.png'
  },
  {
    name: "Nois",
    cuisine: "Mexican, Contemporary",
    price: "$$$",
    path: "/mexico/oaxaca/oaxaca/nois",
    image: '/images/nois1.png'
  },
  {
    name: "Teocintle-Tika'aya",
    cuisine: "Mexican, Contemporary",
    price: "$$$$",
    path: "/mexico/oaxaca/oaxaca/teocintle-tikaaya",
    image: '/images/teocintle-tikaaya1.png'
  },
  {
    name: "Tierra del Sol",
    cuisine: "Mexican, Traditional Cuisine",
    price: "$$",
    path: "/mexico/oaxaca/oaxaca/tierra-del-sol",
    image: '/images/tierra-del-sol1.png'
  },
  {
    name: "Xaok",
    cuisine: "Mexican",
    price: "$$",
    path: "/mexico/oaxaca/oaxaca/xaok",
    image: '/images/xaok1.png'
  },
  {
    name: "Zandunga",
    cuisine: "Mexican, Regional Cuisine",
    price: "$$",
    path: "/mexico/oaxaca/oaxaca/zandunga",
    image: '/images/zandunga1.png'
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
