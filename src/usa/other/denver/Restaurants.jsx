import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Denver";

const restaurants = [
  {
    name: "A5 Steakhouse",
    cuisine: "Steakhouse, American",
    price: "$$$$",
    path: "/usa/other/denver/a5-steakhouse",
    image: '/images/a5-steakhouse1.png'
  },
  {
    name: "Alma Fonda Fina",
    cuisine: "Mexican, Contemporary",
    price: "$$",
    path: "/usa/other/denver/alma-fonda-fina",
    image: '/images/alma-fonda-fina1.png'
  },
  {
    name: "Alteño",
    cuisine: "Mexican, Contemporary",
    price: "$$$$",
    path: "/usa/other/denver/alteo",
    image: '/images/alteo1.png'
  },
  {
    name: "Ash'Kara",
    cuisine: "Israeli, Mediterranean Cuisine",
    price: "$$$",
    path: "/usa/other/denver/ashkara",
    image: '/images/ashkara1.png'
  },
  {
    name: "Barolo Grill",
    cuisine: "Italian, Regional Cuisine",
    price: "$$$$",
    path: "/usa/other/denver/barolo-grill",
    image: '/images/barolo-grill1.png'
  },
  {
    name: "Beckon",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/denver/beckon",
    image: '/images/beckon1.png'
  },
  {
    name: "Brasserie Brixton",
    cuisine: "French",
    price: "$$$",
    path: "/usa/other/denver/brasserie-brixton",
    image: '/images/brasserie-brixton1.png'
  },
  {
    name: "Brutø",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/denver/brut",
    image: '/images/brut1.png'
  },
  {
    name: "Brutø",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/denver/brut",
    image: '/images/brut1.png'
  },
  {
    name: "Dio Mio",
    cuisine: "Italian, Contemporary",
    price: "$$",
    path: "/usa/other/denver/dio-mio",
    image: '/images/dio-mio1.png'
  },
  {
    name: "Glo Noodle House",
    cuisine: "Ramen",
    price: "$$",
    path: "/usa/other/denver/glo-noodle-house",
    image: '/images/glo-noodle-house1.png'
  },
  {
    name: "Guard and Grace",
    cuisine: "Steakhouse, American Contemporary",
    price: "$$$$",
    path: "/usa/other/denver/guard-and-grace",
    image: '/images/guard-and-grace1.png'
  },
  {
    name: "Hey Kiddo",
    cuisine: "Contemporary, Fusion",
    price: "$$$",
    path: "/usa/other/denver/hey-kiddo",
    image: '/images/hey-kiddo1.png'
  },
  {
    name: "Hop Alley",
    cuisine: "Chinese, Contemporary",
    price: "$$",
    path: "/usa/other/denver/hop-alley",
    image: '/images/hop-alley1.png'
  },
  {
    name: "Kawa Ni",
    cuisine: "Japanese, Contemporary",
    price: "$$",
    path: "/usa/other/denver/kawa-ni",
    image: '/images/kawa-ni1.png'
  },
  {
    name: "Kizaki",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/denver/kizaki",
    image: '/images/kizaki1.png'
  },
  {
    name: "La Diabla Pozole y Mezcal",
    cuisine: "Mexican",
    price: "$$",
    path: "/usa/other/denver/la-diabla-pozole-y-mezcal",
    image: '/images/la-diabla-pozole-y-mezcal1.png'
  },
  {
    name: "MAKfam",
    cuisine: "Chinese",
    price: "$",
    path: "/usa/other/denver/makfam",
    image: '/images/makfam1.png'
  },
  {
    name: "Marco's Coal-Fired",
    cuisine: "Pizza",
    price: "$$",
    path: "/usa/other/denver/marcos-coal-fired",
    image: '/images/marcos-coal-fired1.png'
  },
  {
    name: "Margot",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/denver/margot",
    image: '/images/margot1.png'
  },
  {
    name: "Mercantile",
    cuisine: "American",
    price: "$$$",
    path: "/usa/other/denver/mercantile",
    image: '/images/mercantile1.png'
  },
  {
    name: "Mercantile Dining and Provision",
    cuisine: "American",
    price: "$$$",
    path: "/usa/other/denver/mercantile-dining-and-provision",
    image: '/images/mercantile-dining-and-provision1.png'
  },
  {
    name: "Mezcaleria Alma",
    cuisine: "Mexican, Contemporary",
    price: "$$$",
    path: "/usa/other/denver/mezcaleria-alma",
    image: '/images/mezcaleria-alma1.png'
  },
  {
    name: "Mister Oso",
    cuisine: "Latin American",
    price: "$$",
    path: "/usa/other/denver/mister-oso",
    image: '/images/mister-oso1.png'
  },
  {
    name: "Noisette",
    cuisine: "French, Contemporary",
    price: "$$$",
    path: "/usa/other/denver/noisette",
    image: '/images/noisette1.png'
  },
  {
    name: "Olivia",
    cuisine: "Italian, Contemporary",
    price: "$$$",
    path: "/usa/other/denver/olivia",
    image: '/images/olivia1.png'
  },
  {
    name: "Q House",
    cuisine: "Chinese",
    price: "$$$",
    path: "/usa/other/denver/q-house",
    image: '/images/q-house1.png'
  },
  {
    name: "Safta",
    cuisine: "Israeli",
    price: "$$$",
    path: "/usa/other/denver/safta",
    image: '/images/safta1.png'
  },
  {
    name: "Smok",
    cuisine: "Barbecue, American",
    price: "$$",
    path: "/usa/other/denver/smok",
    image: '/images/smok1.png'
  },
  {
    name: "Tavernetta",
    cuisine: "Italian, Contemporary",
    price: "$$",
    path: "/usa/other/denver/tavernetta",
    image: '/images/tavernetta1.png'
  },
  {
    name: "Temaki Den",
    cuisine: "Japanese",
    price: "$$$",
    path: "/usa/other/denver/temaki-den",
    image: '/images/temaki-den1.png'
  },
  {
    name: "The Ginger Pig",
    cuisine: "Chinese, Asian",
    price: "$$",
    path: "/usa/other/denver/the-ginger-pig",
    image: '/images/the-ginger-pig1.png'
  },
  {
    name: "The Wolf's Tailor",
    cuisine: "Contemporary, Creative",
    price: "$$$$",
    path: "/usa/other/denver/the-wolfs-tailor",
    image: '/images/the-wolfs-tailor1.png'
  },
  {
    name: "Ukiyo",
    cuisine: "Japanese, Fusion",
    price: "$$$$",
    path: "/usa/other/denver/ukiyo",
    image: '/images/ukiyo1.png'
  },
  {
    name: "Wildflower",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/usa/other/denver/wildflower",
    image: '/images/wildflower1.png'
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
