import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Dublin City";

const restaurants = [
  {
    name: "allta",
    cuisine: "Modern Cuisine, Seafood",
    price: "€€€€",
    path: "/ireland/dublin-city/dublin-city/allta",
    image: '/images/allta1.png'
  },
  {
    name: "Amai by Viktor",
    cuisine: "Brazilian, Irish",
    price: "€€€",
    path: "/ireland/dublin-city/dublin-city/amai-by-viktor",
    image: '/images/amai-by-viktor1.png'
  },
  {
    name: "Amy Austin",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/ireland/dublin-city/dublin-city/amy-austin",
    image: '/images/amy-austin1.png'
  },
  {
    name: "Ananda",
    cuisine: "Indian",
    price: "€€",
    path: "/ireland/dublin-city/dublin-city/ananda",
    image: '/images/ananda1.png'
  },
  {
    name: "Bastible",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/ireland/dublin-city/dublin-city/bastible",
    image: '/images/bastible1.png'
  },
  {
    name: "BIGFAN",
    cuisine: "Asian, Chinese",
    price: "€€",
    path: "/ireland/dublin-city/dublin-city/bigfan",
    image: '/images/bigfan1.png'
  },
  {
    name: "BORGO",
    cuisine: "Italian",
    price: "€€",
    path: "/ireland/dublin-city/dublin-city/borgo",
    image: '/images/borgo1.png'
  },
  {
    name: "Chapter One by Mickael Viljanen",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/ireland/dublin-city/dublin-city/chapter-one-by-mickael-viljanen",
    image: '/images/chapter-one-by-mickael-viljanen1.png'
  },
  {
    name: "Comet",
    cuisine: "Modern Cuisine, Mediterranean Cuisine",
    price: "€€€",
    path: "/ireland/dublin-city/dublin-city/comet",
    image: '/images/comet1.png'
  },
  {
    name: "Dax",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/ireland/dublin-city/dublin-city/dax",
    image: '/images/dax1.png'
  },
  {
    name: "Delahunt",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/ireland/dublin-city/dublin-city/delahunt",
    image: '/images/delahunt1.png'
  },
  {
    name: "D'Olier Street",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/ireland/dublin-city/dublin-city/dolier-street",
    image: '/images/dolier-street1.png'
  },
  {
    name: "Etto",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/ireland/dublin-city/dublin-city/etto",
    image: '/images/etto1.png'
  },
  {
    name: "Forest Avenue",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/ireland/dublin-city/dublin-city/forest-avenue",
    image: '/images/forest-avenue1.png'
  },
  {
    name: "Forêt",
    cuisine: "French",
    price: "€€",
    path: "/ireland/dublin-city/dublin-city/fort",
    image: '/images/fort1.png'
  },
  {
    name: "Glovers Alley",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/ireland/dublin-city/dublin-city/glovers-alley",
    image: '/images/glovers-alley1.png'
  },
  {
    name: "Grano",
    cuisine: "Italian",
    price: "€€",
    path: "/ireland/dublin-city/dublin-city/grano",
    image: '/images/grano1.png'
  },
  {
    name: "HERA",
    cuisine: "International",
    price: "€€",
    path: "/ireland/dublin-city/dublin-city/hera",
    image: '/images/hera1.png'
  },
  {
    name: "Host",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/ireland/dublin-city/dublin-city/host",
    image: '/images/host1.png'
  },
  {
    name: "Host",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/ireland/dublin-city/dublin-city/host",
    image: '/images/host1.png'
  },
  {
    name: "Jean-Georges at The Leinster",
    cuisine: "Contemporary",
    price: "€€",
    path: "/ireland/dublin-city/dublin-city/jean-georges-at-the-leinster",
    image: '/images/jean-georges-at-the-leinster1.png'
  },
  {
    name: "Kaldero",
    cuisine: "Filipino",
    price: "€€",
    path: "/ireland/dublin-city/dublin-city/kaldero",
    image: '/images/kaldero1.png'
  },
  {
    name: "Kicky's",
    cuisine: "Mediterranean Cuisine",
    price: "€€€",
    path: "/ireland/dublin-city/dublin-city/kickys",
    image: '/images/kickys1.png'
  },
  {
    name: "La Gordita",
    cuisine: "Spanish",
    price: "€€",
    path: "/ireland/dublin-city/dublin-city/la-gordita",
    image: '/images/la-gordita1.png'
  },
  {
    name: "Lena",
    cuisine: "Italian",
    price: "€€€",
    path: "/ireland/dublin-city/dublin-city/lena",
    image: '/images/lena1.png'
  },
  {
    name: "Library Street",
    cuisine: "Contemporary, Modern Cuisine",
    price: "€€",
    path: "/ireland/dublin-city/dublin-city/library-street",
    image: '/images/library-street1.png'
  },
  {
    name: "Lottie's",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/ireland/dublin-city/dublin-city/lotties",
    image: '/images/lotties1.png'
  },
  {
    name: "mae",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/ireland/dublin-city/dublin-city/mae",
    image: '/images/mae1.png'
  },
  {
    name: "Matsukawa",
    cuisine: "Japanese, Sushi",
    price: "€€€€",
    path: "/ireland/dublin-city/dublin-city/matsukawa",
    image: '/images/matsukawa1.png'
  },
  {
    name: "Mister S",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/ireland/dublin-city/dublin-city/mister-s",
    image: '/images/mister-s1.png'
  },
  {
    name: "Mr Fox",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/ireland/dublin-city/dublin-city/mr-fox",
    image: '/images/mr-fox1.png'
  },
  {
    name: "Note",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/ireland/dublin-city/dublin-city/note",
    image: '/images/note1.png'
  },
  {
    name: "One Pico",
    cuisine: "Modern French",
    price: "€€€€",
    path: "/ireland/dublin-city/dublin-city/one-pico",
    image: '/images/one-pico1.png'
  },
  {
    name: "Orwell Road",
    cuisine: "Irish, Modern Cuisine",
    price: "€€€",
    path: "/ireland/dublin-city/dublin-city/orwell-road",
    image: '/images/orwell-road1.png'
  },
  {
    name: "Osteria Lucio",
    cuisine: "Italian",
    price: "€€€",
    path: "/ireland/dublin-city/dublin-city/osteria-lucio",
    image: '/images/osteria-lucio1.png'
  },
  {
    name: "Patrick Guilbaud",
    cuisine: "Modern French",
    price: "€€€€",
    path: "/ireland/dublin-city/dublin-city/patrick-guilbaud",
    image: '/images/patrick-guilbaud1.png'
  },
  {
    name: "Peploe's",
    cuisine: "Mediterranean Cuisine",
    price: "€€€",
    path: "/ireland/dublin-city/dublin-city/peploes",
    image: '/images/peploes1.png'
  },
  {
    name: "Pichet",
    cuisine: "French",
    price: "€€",
    path: "/ireland/dublin-city/dublin-city/pichet",
    image: '/images/pichet1.png'
  },
  {
    name: "Pickle",
    cuisine: "Indian",
    price: "€€",
    path: "/ireland/dublin-city/dublin-city/pickle",
    image: '/images/pickle1.png'
  },
  {
    name: "Richmond",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/ireland/dublin-city/dublin-city/richmond",
    image: '/images/richmond1.png'
  },
  {
    name: "Spitalfields",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/ireland/dublin-city/dublin-city/spitalfields",
    image: '/images/spitalfields1.png'
  },
  {
    name: "The Old Spot",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/ireland/dublin-city/dublin-city/the-old-spot",
    image: '/images/the-old-spot1.png'
  },
  {
    name: "The Pig's Ear",
    cuisine: "Irish",
    price: "€€",
    path: "/ireland/dublin-city/dublin-city/the-pigs-ear",
    image: '/images/the-pigs-ear1.png'
  },
  {
    name: "Uno Mas",
    cuisine: "Mediterranean Cuisine",
    price: "€€",
    path: "/ireland/dublin-city/dublin-city/uno-mas",
    image: '/images/uno-mas1.png'
  },
  {
    name: "Vada",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/ireland/dublin-city/dublin-city/vada",
    image: '/images/vada1.png'
  },
  {
    name: "Variety Jones",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/ireland/dublin-city/dublin-city/variety-jones",
    image: '/images/variety-jones1.png'
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
