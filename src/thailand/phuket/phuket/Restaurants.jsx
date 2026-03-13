import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Phuket";

const restaurants = [
  {
    name: "A Pong Mae Sunee",
    cuisine: "Street Food",
    price: "฿",
    path: "/thailand/phuket/phuket/a-pong-mae-sunee",
    image: '/images/a-pong-mae-sunee1.png'
  },
  {
    name: "Acqua",
    cuisine: "Italian",
    price: "฿฿฿฿",
    path: "/thailand/phuket/phuket/acqua",
    image: '/images/acqua1.png'
  },
  {
    name: "Blue Elephant",
    cuisine: "Thai",
    price: "฿฿฿",
    path: "/thailand/phuket/phuket/blue-elephant",
    image: '/images/blue-elephant1.png'
  },
  {
    name: "Buabok",
    cuisine: "Thai",
    price: "฿฿฿",
    path: "/thailand/phuket/phuket/buabok",
    image: '/images/buabok1.png'
  },
  {
    name: "Bucha",
    cuisine: "Southern Thai",
    price: "฿฿",
    path: "/thailand/phuket/phuket/bucha",
    image: '/images/bucha1.png'
  },
  {
    name: "Chom Chan",
    cuisine: "Southern Thai",
    price: "฿฿",
    path: "/thailand/phuket/phuket/chom-chan",
    image: '/images/chom-chan1.png'
  },
  {
    name: "Chuan Chim",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/phuket/phuket/chuan-chim",
    image: '/images/chuan-chim1.png'
  },
  {
    name: "Five Olives",
    cuisine: "Italian, Pizza",
    price: "฿฿",
    path: "/thailand/phuket/phuket/five-olives",
    image: '/images/five-olives1.png'
  },
  {
    name: "Go Ang Seafood",
    cuisine: "Seafood",
    price: "฿฿฿",
    path: "/thailand/phuket/phuket/go-ang-seafood",
    image: '/images/go-ang-seafood1.png'
  },
  {
    name: "Go Benz",
    cuisine: "Asian",
    price: "฿",
    path: "/thailand/phuket/phuket/go-benz",
    image: '/images/go-benz1.png'
  },
  {
    name: "Go La",
    cuisine: "Small eats",
    price: "฿",
    path: "/thailand/phuket/phuket/go-la",
    image: '/images/go-la1.png'
  },
  {
    name: "Gorjan",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/phuket/phuket/gorjan",
    image: '/images/gorjan1.png'
  },
  {
    name: "Heh",
    cuisine: "Contemporary",
    price: "฿฿฿",
    path: "/thailand/phuket/phuket/heh",
    image: '/images/heh1.png'
  },
  {
    name: "hom",
    cuisine: "Modern Cuisine",
    price: "฿฿฿",
    path: "/thailand/phuket/phuket/hom",
    image: '/images/hom1.png'
  },
  {
    name: "Hong Khao Tom Pla",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/phuket/phuket/hong-khao-tom-pla",
    image: '/images/hong-khao-tom-pla1.png'
  },
  {
    name: "Jadjan",
    cuisine: "Street Food",
    price: "฿",
    path: "/thailand/phuket/phuket/jadjan",
    image: '/images/jadjan1.png'
  },
  {
    name: "Jampa",
    cuisine: "European Contemporary",
    price: "฿฿฿",
    path: "/thailand/phuket/phuket/jampa",
    image: '/images/jampa1.png'
  },
  {
    name: "Jaras",
    cuisine: "Thai contemporary",
    price: "฿฿",
    path: "/thailand/phuket/phuket/jaras",
    image: '/images/jaras1.png'
  },
  {
    name: "Jongjit Kitchen",
    cuisine: "Thai",
    price: "฿",
    path: "/thailand/phuket/phuket/jongjit-kitchen",
    image: '/images/jongjit-kitchen1.png'
  },
  {
    name: "Khao Tom Dibuk",
    cuisine: "Noodles and Congee",
    price: "฿",
    path: "/thailand/phuket/phuket/khao-tom-dibuk",
    image: '/images/khao-tom-dibuk1.png'
  },
  {
    name: "Khao Tom Thanon Di Buk",
    cuisine: "Noodles and Congee",
    price: "฿",
    path: "/thailand/phuket/phuket/khao-tom-thanon-di-buk",
    image: '/images/khao-tom-thanon-di-buk1.png'
  },
  {
    name: "Khrua Ohm",
    cuisine: "Southern Thai",
    price: "฿฿",
    path: "/thailand/phuket/phuket/khrua-ohm",
    image: '/images/khrua-ohm1.png'
  },
  {
    name: "Kin-Kub-Ei",
    cuisine: "Southern Thai",
    price: "฿฿",
    path: "/thailand/phuket/phuket/kin-kub-ei",
    image: '/images/kin-kub-ei1.png'
  },
  {
    name: "Krua Baan Platong",
    cuisine: "Southern Thai",
    price: "฿",
    path: "/thailand/phuket/phuket/krua-baan-platong",
    image: '/images/krua-baan-platong1.png'
  },
  {
    name: "Krua Kao Kuk",
    cuisine: "Southern Thai",
    price: "฿฿",
    path: "/thailand/phuket/phuket/krua-kao-kuk",
    image: '/images/krua-kao-kuk1.png'
  },
  {
    name: "Krua Praya",
    cuisine: "Southern Thai",
    price: "฿฿",
    path: "/thailand/phuket/phuket/krua-praya",
    image: '/images/krua-praya1.png'
  },
  {
    name: "Kruvit Raft (Ban Laem Hin)",
    cuisine: "Seafood",
    price: "฿฿",
    path: "/thailand/phuket/phuket/kruvit-raft-ban-laem-hin",
    image: '/images/kruvit-raft-ban-laem-hin1.png'
  },
  {
    name: "La Gaetana",
    cuisine: "Italian",
    price: "฿฿",
    path: "/thailand/phuket/phuket/la-gaetana",
    image: '/images/la-gaetana1.png'
  },
  {
    name: "L'Arôme by the Sea",
    cuisine: "French Contemporary, Creative",
    price: "฿฿฿฿",
    path: "/thailand/phuket/phuket/larme-by-the-sea",
    image: '/images/larme-by-the-sea1.png'
  },
  {
    name: "Lertrod",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/phuket/phuket/lertrod",
    image: '/images/lertrod1.png'
  },
  {
    name: "Loba Bang Niao",
    cuisine: "Small eats",
    price: "฿",
    path: "/thailand/phuket/phuket/loba-bang-niao",
    image: '/images/loba-bang-niao1.png'
  },
  {
    name: "Meesapam Khun Yai Chian",
    cuisine: "Thai-Chinese",
    price: "฿฿",
    path: "/thailand/phuket/phuket/meesapam-khun-yai-chian",
    image: '/images/meesapam-khun-yai-chian1.png'
  },
  {
    name: "Mook Manee",
    cuisine: "Seafood",
    price: "฿฿",
    path: "/thailand/phuket/phuket/mook-manee",
    image: '/images/mook-manee1.png'
  },
  {
    name: "Mor Mu Dong",
    cuisine: "Southern Thai",
    price: "฿฿",
    path: "/thailand/phuket/phuket/mor-mu-dong",
    image: '/images/mor-mu-dong1.png'
  },
  {
    name: "Naam Yoi",
    cuisine: "Southern Thai",
    price: "฿฿",
    path: "/thailand/phuket/phuket/naam-yoi",
    image: '/images/naam-yoi1.png'
  },
  {
    name: "Nitan",
    cuisine: "Southern Thai, Contemporary",
    price: "฿฿฿",
    path: "/thailand/phuket/phuket/nitan",
    image: '/images/nitan1.png'
  },
  {
    name: "Niyom Salt Grilled Duck",
    cuisine: "Grills",
    price: "฿",
    path: "/thailand/phuket/phuket/niyom-salt-grilled-duck",
    image: '/images/niyom-salt-grilled-duck1.png'
  },
  {
    name: "O Cha Rot",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/phuket/phuket/o-cha-rot",
    image: '/images/o-cha-rot1.png'
  },
  {
    name: "O Tao Bang Niao",
    cuisine: "Street Food",
    price: "฿",
    path: "/thailand/phuket/phuket/o-tao-bang-niao",
    image: '/images/o-tao-bang-niao1.png'
  },
  {
    name: "One Chun",
    cuisine: "Southern Thai",
    price: "฿฿",
    path: "/thailand/phuket/phuket/one-chun",
    image: '/images/one-chun1.png'
  },
  {
    name: "Pathongko Mae Pranee",
    cuisine: "Street Food, Pa Thong Ko",
    price: "฿",
    path: "/thailand/phuket/phuket/pathongko-mae-pranee",
    image: '/images/pathongko-mae-pranee1.png'
  },
  {
    name: "Peang-Prai",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/phuket/phuket/peang-prai",
    image: '/images/peang-prai1.png'
  },
  {
    name: "PRU",
    cuisine: "Modern Cuisine, Contemporary",
    price: "฿฿฿฿",
    path: "/thailand/phuket/phuket/pru",
    image: '/images/pru1.png'
  },
  {
    name: "Roti Chaofa",
    cuisine: "Small eats",
    price: "฿",
    path: "/thailand/phuket/phuket/roti-chaofa",
    image: '/images/roti-chaofa1.png'
  },
  {
    name: "Roti Thaew Nam",
    cuisine: "Small eats",
    price: "฿",
    path: "/thailand/phuket/phuket/roti-thaew-nam",
    image: '/images/roti-thaew-nam1.png'
  },
  {
    name: "Royd",
    cuisine: "Southern Thai, Contemporary",
    price: "฿฿฿",
    path: "/thailand/phuket/phuket/royd",
    image: '/images/royd1.png'
  },
  {
    name: "Samut",
    cuisine: "Southern Thai",
    price: "฿฿฿฿",
    path: "/thailand/phuket/phuket/samut",
    image: '/images/samut1.png'
  },
  {
    name: "Sang Ka Si",
    cuisine: "Thai",
    price: "฿",
    path: "/thailand/phuket/phuket/sang-ka-si",
    image: '/images/sang-ka-si1.png'
  },
  {
    name: "Sang Ka Sri",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/phuket/phuket/sang-ka-sri",
    image: '/images/sang-ka-sri1.png'
  },
  {
    name: "Shrimp Noodles Ao Kae",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/phuket/phuket/shrimp-noodles-ao-kae",
    image: '/images/shrimp-noodles-ao-kae1.png'
  },
  {
    name: "Sizzle",
    cuisine: "European",
    price: "฿฿฿฿",
    path: "/thailand/phuket/phuket/sizzle",
    image: '/images/sizzle1.png'
  },
  {
    name: "Suay",
    cuisine: "Thai contemporary",
    price: "฿฿฿",
    path: "/thailand/phuket/phuket/suay",
    image: '/images/suay1.png'
  },
  {
    name: "Suay (Choeng Thale)",
    cuisine: "Thai contemporary",
    price: "฿฿฿",
    path: "/thailand/phuket/phuket/suay-choeng-thale",
    image: '/images/suay-choeng-thale1.png'
  },
  {
    name: "Surf & Turf by Soul Kitchen",
    cuisine: "European Contemporary",
    price: "฿฿",
    path: "/thailand/phuket/phuket/surf-turf-by-soul-kitchen",
    image: '/images/surf-turf-by-soul-kitchen1.png'
  },
  {
    name: "Ta Khai",
    cuisine: "Thai",
    price: "฿฿฿",
    path: "/thailand/phuket/phuket/ta-khai",
    image: '/images/ta-khai1.png'
  },
  {
    name: "Talung Thai",
    cuisine: "Thai",
    price: "฿฿฿",
    path: "/thailand/phuket/phuket/talung-thai",
    image: '/images/talung-thai1.png'
  },
  {
    name: "Tambu",
    cuisine: "Indian",
    price: "฿฿฿",
    path: "/thailand/phuket/phuket/tambu",
    image: '/images/tambu1.png'
  },
  {
    name: "Thai Library",
    cuisine: "Thai, Southern",
    price: "฿฿฿",
    path: "/thailand/phuket/phuket/thai-library",
    image: '/images/thai-library1.png'
  },
  {
    name: "The Charm Dining Gallery",
    cuisine: "Southern Thai",
    price: "฿฿",
    path: "/thailand/phuket/phuket/the-charm-dining-gallery",
    image: '/images/the-charm-dining-gallery1.png'
  },
  {
    name: "The Smokaccia Laboratory",
    cuisine: "Creative, Innovative",
    price: "฿฿฿",
    path: "/thailand/phuket/phuket/the-smokaccia-laboratory",
    image: '/images/the-smokaccia-laboratory1.png'
  },
  {
    name: "The Thai Library",
    cuisine: "Thai",
    price: "฿฿฿",
    path: "/thailand/phuket/phuket/the-thai-library",
    image: '/images/the-thai-library1.png'
  },
  {
    name: "Tiffin by La Sala",
    cuisine: "Indian",
    price: "฿฿",
    path: "/thailand/phuket/phuket/tiffin-by-la-sala",
    image: '/images/tiffin-by-la-sala1.png'
  },
  {
    name: "Toh Daeng",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/phuket/phuket/toh-daeng",
    image: '/images/toh-daeng1.png'
  },
  {
    name: "Toh Daeng (Thalang)",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/phuket/phuket/toh-daeng-thalang",
    image: '/images/toh-daeng-thalang1.png'
  },
  {
    name: "Ton Mayom",
    cuisine: "Southern Thai",
    price: "฿",
    path: "/thailand/phuket/phuket/ton-mayom",
    image: '/images/ton-mayom1.png'
  },
  {
    name: "Wagyu Steakhouse",
    cuisine: "Steakhouse",
    price: "฿฿฿",
    path: "/thailand/phuket/phuket/wagyu-steakhouse",
    image: '/images/wagyu-steakhouse1.png'
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
