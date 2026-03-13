import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "George Town";

const restaurants = [
  {
    name: "888 Hokkien Mee",
    cuisine: "Street Food",
    price: "$",
    path: "/malaysia/george-town/george-town/888-hokkien-mee",
    image: '/images/888-hokkien-mee1.png'
  },
  {
    name: "Ah Boy Koay Teow Th'ng",
    cuisine: "Street Food",
    price: "$",
    path: "/malaysia/george-town/george-town/ah-boy-koay-teow-thng",
    image: '/images/ah-boy-koay-teow-thng1.png'
  },
  {
    name: "Air Itam Duck Rice",
    cuisine: "Street Food",
    price: "$",
    path: "/malaysia/george-town/george-town/air-itam-duck-rice",
    image: '/images/air-itam-duck-rice1.png'
  },
  {
    name: "Air Itam Sister Curry Mee",
    cuisine: "Street Food",
    price: "$",
    path: "/malaysia/george-town/george-town/air-itam-sister-curry-mee",
    image: '/images/air-itam-sister-curry-mee1.png'
  },
  {
    name: "Ali Nasi Lemak Daun Pisang",
    cuisine: "Street Food",
    price: "$",
    path: "/malaysia/george-town/george-town/ali-nasi-lemak-daun-pisang",
    image: '/images/ali-nasi-lemak-daun-pisang1.png'
  },
  {
    name: "Au Jardin",
    cuisine: "European Contemporary",
    price: "$$$",
    path: "/malaysia/george-town/george-town/au-jardin",
    image: '/images/au-jardin1.png'
  },
  {
    name: "Auntie Gaik Lean's Old School Eatery",
    cuisine: "Peranakan",
    price: "$$",
    path: "/malaysia/george-town/george-town/auntie-gaik-leans-old-school-eatery",
    image: '/images/auntie-gaik-leans-old-school-eatery1.png'
  },
  {
    name: "Awesome Char Koay Teow",
    cuisine: "Street Food",
    price: "$",
    path: "/malaysia/george-town/george-town/awesome-char-koay-teow",
    image: '/images/awesome-char-koay-teow1.png'
  },
  {
    name: "Bali Hai Seafood Market",
    cuisine: "Seafood",
    price: "$$",
    path: "/malaysia/george-town/george-town/bali-hai-seafood-market",
    image: '/images/bali-hai-seafood-market1.png'
  },
  {
    name: "Bao Teck Tea House",
    cuisine: "Dim Sum",
    price: "$$",
    path: "/malaysia/george-town/george-town/bao-teck-tea-house",
    image: '/images/bao-teck-tea-house1.png'
  },
  {
    name: "Bee Hwa Cafe",
    cuisine: "Malaysian",
    price: "$",
    path: "/malaysia/george-town/george-town/bee-hwa-cafe",
    image: '/images/bee-hwa-cafe1.png'
  },
  {
    name: "Bibik's Kitchen",
    cuisine: "Peranakan",
    price: "$$",
    path: "/malaysia/george-town/george-town/bibiks-kitchen",
    image: '/images/bibiks-kitchen1.png'
  },
  {
    name: "Bite N Eat Dindigul Biriyani",
    cuisine: "Indian",
    price: "$$",
    path: "/malaysia/george-town/george-town/bite-n-eat-dindigul-biriyani",
    image: '/images/bite-n-eat-dindigul-biriyani1.png'
  },
  {
    name: "Blacklinen",
    cuisine: "Barbecue",
    price: "$$$",
    path: "/malaysia/george-town/george-town/blacklinen",
    image: '/images/blacklinen1.png'
  },
  {
    name: "Blanc",
    cuisine: "European Contemporary",
    price: "$$$",
    path: "/malaysia/george-town/george-town/blanc",
    image: '/images/blanc1.png'
  },
  {
    name: "Bridge Street Prawn Noodle",
    cuisine: "Street Food",
    price: "$",
    path: "/malaysia/george-town/george-town/bridge-street-prawn-noodle",
    image: '/images/bridge-street-prawn-noodle1.png'
  },
  {
    name: "Ceki",
    cuisine: "Peranakan",
    price: "$$",
    path: "/malaysia/george-town/george-town/ceki",
    image: '/images/ceki1.png'
  },
  {
    name: "Christoph's",
    cuisine: "Austrian",
    price: "$$",
    path: "/malaysia/george-town/george-town/christophs",
    image: '/images/christophs1.png'
  },
  {
    name: "Communal Table by Gēn",
    cuisine: "Malaysian",
    price: "$$",
    path: "/malaysia/george-town/george-town/communal-table-by-gn",
    image: '/images/communal-table-by-gn1.png'
  },
  {
    name: "Curios-City",
    cuisine: "Innovative",
    price: "$$$",
    path: "/malaysia/george-town/george-town/curios-city",
    image: '/images/curios-city1.png'
  },
  {
    name: "Du-An (Lebuh Pantai)",
    cuisine: "Malaysian",
    price: "$$",
    path: "/malaysia/george-town/george-town/du-an-lebuh-pantai",
    image: '/images/du-an-lebuh-pantai1.png'
  },
  {
    name: "Duck Blood Curry Mee",
    cuisine: "Street Food",
    price: "$",
    path: "/malaysia/george-town/george-town/duck-blood-curry-mee",
    image: '/images/duck-blood-curry-mee1.png'
  },
  {
    name: "Fatty Loh Chicken Rice",
    cuisine: "Street Food",
    price: "$",
    path: "/malaysia/george-town/george-town/fatty-loh-chicken-rice",
    image: '/images/fatty-loh-chicken-rice1.png'
  },
  {
    name: "Feringgi Grill",
    cuisine: "European Contemporary",
    price: "$$$",
    path: "/malaysia/george-town/george-town/feringgi-grill",
    image: '/images/feringgi-grill1.png'
  },
  {
    name: "Firewood",
    cuisine: "Barbecue",
    price: "$$$",
    path: "/malaysia/george-town/george-town/firewood",
    image: '/images/firewood1.png'
  },
  {
    name: "Fook Cheow Cafe",
    cuisine: "Noodles",
    price: "$",
    path: "/malaysia/george-town/george-town/fook-cheow-cafe",
    image: '/images/fook-cheow-cafe1.png'
  },
  {
    name: "Ghee Lian",
    cuisine: "Street Food",
    price: "$",
    path: "/malaysia/george-town/george-town/ghee-lian",
    image: '/images/ghee-lian1.png'
  },
  {
    name: "Gēn",
    cuisine: "Innovative",
    price: "$$$",
    path: "/malaysia/george-town/george-town/gn",
    image: '/images/gn1.png'
  },
  {
    name: "Goh Thew Chik Hainan Chicken Rice",
    cuisine: "Street Food",
    price: "$",
    path: "/malaysia/george-town/george-town/goh-thew-chik-hainan-chicken-rice",
    image: '/images/goh-thew-chik-hainan-chicken-rice1.png'
  },
  {
    name: "Green House Prawn Mee & Loh Mee (223 Jalan Burma)",
    cuisine: "Street Food",
    price: "$",
    path: "/malaysia/george-town/george-town/green-house-prawn-mee-loh-mee-223-jalan-burma",
    image: '/images/green-house-prawn-mee-loh-mee-223-jalan-burma1.png'
  },
  {
    name: "Hot Bowl White Curry Mee",
    cuisine: "Noodles",
    price: "$",
    path: "/malaysia/george-town/george-town/hot-bowl-white-curry-mee",
    image: '/images/hot-bowl-white-curry-mee1.png'
  },
  {
    name: "Il Bacaro",
    cuisine: "Italian",
    price: "$$",
    path: "/malaysia/george-town/george-town/il-bacaro",
    image: '/images/il-bacaro1.png'
  },
  {
    name: "Ivy's Nyonya Cuisine",
    cuisine: "Peranakan",
    price: "$$",
    path: "/malaysia/george-town/george-town/ivys-nyonya-cuisine",
    image: '/images/ivys-nyonya-cuisine1.png'
  },
  {
    name: "Jaloux",
    cuisine: "Italian",
    price: "$$",
    path: "/malaysia/george-town/george-town/jaloux",
    image: '/images/jaloux1.png'
  },
  {
    name: "Jawi House",
    cuisine: "Peranakan",
    price: "$$",
    path: "/malaysia/george-town/george-town/jawi-house",
    image: '/images/jawi-house1.png'
  },
  {
    name: "Jit Seng Hong Kong Roasted Duck Rice",
    cuisine: "Street Food",
    price: "$",
    path: "/malaysia/george-town/george-town/jit-seng-hong-kong-roasted-duck-rice",
    image: '/images/jit-seng-hong-kong-roasted-duck-rice1.png'
  },
  {
    name: "Kebaya Dining Room",
    cuisine: "Peranakan",
    price: "$$",
    path: "/malaysia/george-town/george-town/kebaya-dining-room",
    image: '/images/kebaya-dining-room1.png'
  },
  {
    name: "Kota Dine & Coffee (Fort Cornwallis)",
    cuisine: "Peranakan",
    price: "$$",
    path: "/malaysia/george-town/george-town/kota-dine-coffee-fort-cornwallis",
    image: '/images/kota-dine-coffee-fort-cornwallis1.png'
  },
  {
    name: "La Vie",
    cuisine: "European Contemporary",
    price: "$$$",
    path: "/malaysia/george-town/george-town/la-vie",
    image: '/images/la-vie1.png'
  },
  {
    name: "Laksalicious",
    cuisine: "Malaysian",
    price: "$",
    path: "/malaysia/george-town/george-town/laksalicious",
    image: '/images/laksalicious1.png'
  },
  {
    name: "Lucky Hole",
    cuisine: "Innovative",
    price: "$$",
    path: "/malaysia/george-town/george-town/lucky-hole",
    image: '/images/lucky-hole1.png'
  },
  {
    name: "Lum Lai Duck Meat Koay Teow Th'ng",
    cuisine: "Street Food",
    price: "$",
    path: "/malaysia/george-town/george-town/lum-lai-duck-meat-koay-teow-thng",
    image: '/images/lum-lai-duck-meat-koay-teow-thng1.png'
  },
  {
    name: "Mémoire",
    cuisine: "Innovative",
    price: "$$$",
    path: "/malaysia/george-town/george-town/mmoire",
    image: '/images/mmoire1.png'
  },
  {
    name: "Moh Teng Pheow Nyonya Koay",
    cuisine: "Small eats",
    price: "$",
    path: "/malaysia/george-town/george-town/moh-teng-pheow-nyonya-koay",
    image: '/images/moh-teng-pheow-nyonya-koay1.png'
  },
  {
    name: "My Own Café",
    cuisine: "Street Food",
    price: "$",
    path: "/malaysia/george-town/george-town/my-own-caf",
    image: '/images/my-own-caf1.png'
  },
  {
    name: "Nyonya Willow",
    cuisine: "Peranakan",
    price: "$$",
    path: "/malaysia/george-town/george-town/nyonya-willow",
    image: '/images/nyonya-willow1.png'
  },
  {
    name: "Penang Famous Samosa",
    cuisine: "Street Food",
    price: "$",
    path: "/malaysia/george-town/george-town/penang-famous-samosa",
    image: '/images/penang-famous-samosa1.png'
  },
  {
    name: "Penang Road Famous Jin Kor Char Kuey Teow",
    cuisine: "Street Food",
    price: "$",
    path: "/malaysia/george-town/george-town/penang-road-famous-jin-kor-char-kuey-teow",
    image: '/images/penang-road-famous-jin-kor-char-kuey-teow1.png'
  },
  {
    name: "Penang Road Famous Laksa",
    cuisine: "Street Food",
    price: "$",
    path: "/malaysia/george-town/george-town/penang-road-famous-laksa",
    image: '/images/penang-road-famous-laksa1.png'
  },
  {
    name: "Peninsula House",
    cuisine: "Australian Contemporary",
    price: "$$",
    path: "/malaysia/george-town/george-town/peninsula-house",
    image: '/images/peninsula-house1.png'
  },
  {
    name: "Pitt Street Koay Teow Soup",
    cuisine: "Noodles",
    price: "$",
    path: "/malaysia/george-town/george-town/pitt-street-koay-teow-soup",
    image: '/images/pitt-street-koay-teow-soup1.png'
  },
  {
    name: "Rasa Rasa",
    cuisine: "Peranakan",
    price: "$",
    path: "/malaysia/george-town/george-town/rasa-rasa",
    image: '/images/rasa-rasa1.png'
  },
  {
    name: "Ravi's Famous Apom Manis",
    cuisine: "Street Food",
    price: "$",
    path: "/malaysia/george-town/george-town/ravis-famous-apom-manis",
    image: '/images/ravis-famous-apom-manis1.png'
  },
  {
    name: "Richard Rivalee",
    cuisine: "Peranakan",
    price: "$$",
    path: "/malaysia/george-town/george-town/richard-rivalee",
    image: '/images/richard-rivalee1.png'
  },
  {
    name: "Sambal",
    cuisine: "Asian Contemporary",
    price: "$$",
    path: "/malaysia/george-town/george-town/sambal",
    image: '/images/sambal1.png'
  },
  {
    name: "Sardaarji",
    cuisine: "Indian",
    price: "$$",
    path: "/malaysia/george-town/george-town/sardaarji",
    image: '/images/sardaarji1.png'
  },
  {
    name: "Siam Road Char Koay Teow",
    cuisine: "Street Food",
    price: "$",
    path: "/malaysia/george-town/george-town/siam-road-char-koay-teow",
    image: '/images/siam-road-char-koay-teow1.png'
  },
  {
    name: "Sifu",
    cuisine: "Peranakan",
    price: "$$",
    path: "/malaysia/george-town/george-town/sifu",
    image: '/images/sifu1.png'
  },
  {
    name: "Sister Yao’s Char Koay Kak",
    cuisine: "Street Food",
    price: "$",
    path: "/malaysia/george-town/george-town/sister-yaos-char-koay-kak",
    image: '/images/sister-yaos-char-koay-kak1.png'
  },
  {
    name: "Sood by Chef Ton",
    cuisine: "Thai contemporary",
    price: "$$$",
    path: "/malaysia/george-town/george-town/sood-by-chef-ton",
    image: '/images/sood-by-chef-ton1.png'
  },
  {
    name: "Super Star Koay Teow Soup (78 Lebuh Kimberley)",
    cuisine: "Street Food",
    price: "$",
    path: "/malaysia/george-town/george-town/super-star-koay-teow-soup-78-lebuh-kimberley",
    image: '/images/super-star-koay-teow-soup-78-lebuh-kimberley1.png'
  },
  {
    name: "Teksen",
    cuisine: "Cantonese",
    price: "$$",
    path: "/malaysia/george-town/george-town/teksen",
    image: '/images/teksen1.png'
  },
  {
    name: "Thara",
    cuisine: "Thai",
    price: "$$",
    path: "/malaysia/george-town/george-town/thara",
    image: '/images/thara1.png'
  },
  {
    name: "The Pinn",
    cuisine: "Small eats",
    price: "$",
    path: "/malaysia/george-town/george-town/the-pinn",
    image: '/images/the-pinn1.png'
  },
  {
    name: "Tok Tok Mee Bamboo Noodle",
    cuisine: "Noodles",
    price: "$",
    path: "/malaysia/george-town/george-town/tok-tok-mee-bamboo-noodle",
    image: '/images/tok-tok-mee-bamboo-noodle1.png'
  },
  {
    name: "Wan Dao Tou Assam Laksa",
    cuisine: "Street Food",
    price: "$",
    path: "/malaysia/george-town/george-town/wan-dao-tou-assam-laksa",
    image: '/images/wan-dao-tou-assam-laksa1.png'
  },
  {
    name: "WhatSaeb Boat Noodles",
    cuisine: "Thai",
    price: "$",
    path: "/malaysia/george-town/george-town/whatsaeb-boat-noodles",
    image: '/images/whatsaeb-boat-noodles1.png'
  },
  {
    name: "Winn's Cafe",
    cuisine: "Peranakan",
    price: "$$",
    path: "/malaysia/george-town/george-town/winns-cafe",
    image: '/images/winns-cafe1.png'
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
