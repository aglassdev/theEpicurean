import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Kuala Lumpur";

const restaurants = [
  {
    name: "Ah Hei Bak Kut Teh",
    cuisine: "Malaysian",
    price: "$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/ah-hei-bak-kut-teh",
    image: '/images/ah-hei-bak-kut-teh1.png'
  },
  {
    name: "Akar",
    cuisine: "Malaysian, Contemporary",
    price: "$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/akar",
    image: '/images/akar1.png'
  },
  {
    name: "Aliyaa",
    cuisine: "Sri Lankan",
    price: "$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/aliyaa",
    image: '/images/aliyaa1.png'
  },
  {
    name: "Anak Baba (Brickfields)",
    cuisine: "Malaysian, Peranakan",
    price: "$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/anak-baba-brickfields",
    image: '/images/anak-baba-brickfields1.png'
  },
  {
    name: "Atelier Binchotan",
    cuisine: "Barbecue",
    price: "$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/atelier-binchotan",
    image: '/images/atelier-binchotan1.png'
  },
  {
    name: "Bar Kar",
    cuisine: "Barbecue",
    price: "$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/bar-kar",
    image: '/images/bar-kar1.png'
  },
  {
    name: "Beta",
    cuisine: "Malaysian, Contemporary",
    price: "$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/beta",
    image: '/images/beta1.png'
  },
  {
    name: "Bidou",
    cuisine: "French",
    price: "$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/bidou",
    image: '/images/bidou1.png'
  },
  {
    name: "Bōl",
    cuisine: "Asian Contemporary",
    price: "$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/bl",
    image: '/images/bl1.png'
  },
  {
    name: "Café Café",
    cuisine: "French",
    price: "$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/caf-caf",
    image: '/images/caf-caf1.png'
  },
  {
    name: "Chim by Chef Noom",
    cuisine: "Thai contemporary",
    price: "$$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/chim-by-chef-noom",
    image: '/images/chim-by-chef-noom1.png'
  },
  {
    name: "Cilantro",
    cuisine: "French Contemporary",
    price: "$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/cilantro",
    image: '/images/cilantro1.png'
  },
  {
    name: "Coast by Kayra",
    cuisine: "Indian",
    price: "$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/coast-by-kayra",
    image: '/images/coast-by-kayra1.png'
  },
  {
    name: "Congkak (Bukit Bintang)",
    cuisine: "Malaysian",
    price: "$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/congkak-bukit-bintang",
    image: '/images/congkak-bukit-bintang1.png'
  },
  {
    name: "Dancing Fish",
    cuisine: "Malaysian, Indonesian",
    price: "$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/dancing-fish",
    image: '/images/dancing-fish1.png'
  },
  {
    name: "DC. by Darren Chin",
    cuisine: "French Contemporary",
    price: "$$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/dc-by-darren-chin",
    image: '/images/dc-by-darren-chin1.png'
  },
  {
    name: "De. Wan 1958 (Taman U Thant)",
    cuisine: "Malaysian",
    price: "$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/de-wan-1958-taman-u-thant",
    image: '/images/de-wan-1958-taman-u-thant1.png'
  },
  {
    name: "Dewakan",
    cuisine: "Malaysian, Contemporary",
    price: "$$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/dewakan",
    image: '/images/dewakan1.png'
  },
  {
    name: "Dominic",
    cuisine: "French Contemporary",
    price: "$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/dominic",
    image: '/images/dominic1.png'
  },
  {
    name: "Elegant Inn",
    cuisine: "Cantonese",
    price: "$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/elegant-inn",
    image: '/images/elegant-inn1.png'
  },
  {
    name: "Entier",
    cuisine: "French Contemporary",
    price: "$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/entier",
    image: '/images/entier1.png'
  },
  {
    name: "Foong Lian",
    cuisine: "Cantonese",
    price: "$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/foong-lian",
    image: '/images/foong-lian1.png'
  },
  {
    name: "Frangipaani",
    cuisine: "Indian",
    price: "$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/frangipaani",
    image: '/images/frangipaani1.png'
  },
  {
    name: "Gai by Darren Chin (Taman Tun Dr Ismail)",
    cuisine: "Thai",
    price: "$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/gai-by-darren-chin-taman-tun-dr-ismail",
    image: '/images/gai-by-darren-chin-taman-tun-dr-ismail1.png'
  },
  {
    name: "Gulainya",
    cuisine: "Peranakan",
    price: "$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/gulainya",
    image: '/images/gulainya1.png'
  },
  {
    name: "Hai Kah Lang (Taman Cheras)",
    cuisine: "Seafood",
    price: "$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/hai-kah-lang-taman-cheras",
    image: '/images/hai-kah-lang-taman-cheras1.png'
  },
  {
    name: "Hide",
    cuisine: "Innovative",
    price: "$$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/hide",
    image: '/images/hide1.png'
  },
  {
    name: "Hing Kee Bakuteh (121 Jalan Kepong)",
    cuisine: "Malaysian",
    price: "$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/hing-kee-bakuteh-121-jalan-kepong",
    image: '/images/hing-kee-bakuteh-121-jalan-kepong1.png'
  },
  {
    name: "Hor Poh Cuisine",
    cuisine: "Hakkanese",
    price: "$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/hor-poh-cuisine",
    image: '/images/hor-poh-cuisine1.png'
  },
  {
    name: "Jalan Ipoh Claypot Chicken Rice",
    cuisine: "Street Food",
    price: "$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/jalan-ipoh-claypot-chicken-rice",
    image: '/images/jalan-ipoh-claypot-chicken-rice1.png'
  },
  {
    name: "Jie",
    cuisine: "Innovative",
    price: "$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/jie",
    image: '/images/jie1.png'
  },
  {
    name: "Jwala",
    cuisine: "Indian",
    price: "$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/jwala",
    image: '/images/jwala1.png'
  },
  {
    name: "K",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/k",
    image: '/images/k1.png'
  },
  {
    name: "Kayra",
    cuisine: "Indian",
    price: "$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/kayra",
    image: '/images/kayra1.png'
  },
  {
    name: "Kazu",
    cuisine: "Japanese",
    price: "$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/kazu",
    image: '/images/kazu1.png'
  },
  {
    name: "Kuki",
    cuisine: "Vegan",
    price: "$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/kuki",
    image: '/images/kuki1.png'
  },
  {
    name: "La Suisse",
    cuisine: "European",
    price: "$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/la-suisse",
    image: '/images/la-suisse1.png'
  },
  {
    name: "Lai Foong Lala Noodles",
    cuisine: "Noodles",
    price: "$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/lai-foong-lala-noodles",
    image: '/images/lai-foong-lala-noodles1.png'
  },
  {
    name: "Lama",
    cuisine: "Peranakan",
    price: "$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/lama",
    image: '/images/lama1.png'
  },
  {
    name: "Leen's",
    cuisine: "Middle Eastern",
    price: "$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/leens",
    image: '/images/leens1.png'
  },
  {
    name: "Li Yen",
    cuisine: "Cantonese",
    price: "$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/li-yen",
    image: '/images/li-yen1.png'
  },
  {
    name: "Limapulo",
    cuisine: "Peranakan",
    price: "$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/limapulo",
    image: '/images/limapulo1.png'
  },
  {
    name: "Ling Long",
    cuisine: "Innovative",
    price: "$$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/ling-long",
    image: '/images/ling-long1.png'
  },
  {
    name: "Malai",
    cuisine: "Thai",
    price: "$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/malai",
    image: '/images/malai1.png'
  },
  {
    name: "Marble 8",
    cuisine: "Steakhouse",
    price: "$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/marble-8",
    image: '/images/marble-81.png'
  },
  {
    name: "Marini's on 57",
    cuisine: "Italian",
    price: "$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/marinis-on-57",
    image: '/images/marinis-on-571.png'
  },
  {
    name: "Molina",
    cuisine: "Innovative",
    price: "$$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/molina",
    image: '/images/molina1.png'
  },
  {
    name: "MTR 1924",
    cuisine: "Indian Vegetarian",
    price: "$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/mtr-1924",
    image: '/images/mtr-19241.png'
  },
  {
    name: "Nadodi",
    cuisine: "Innovative",
    price: "$$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/nadodi",
    image: '/images/nadodi1.png'
  },
  {
    name: "Nam Heong Chicken Rice (City Centre)",
    cuisine: "Malaysian",
    price: "$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/nam-heong-chicken-rice-city-centre",
    image: '/images/nam-heong-chicken-rice-city-centre1.png'
  },
  {
    name: "Nasi Ayam Hainan Chee Meng (Jalan Kelang Lama)",
    cuisine: "Malaysian",
    price: "$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/nasi-ayam-hainan-chee-meng-jalan-kelang-lama",
    image: '/images/nasi-ayam-hainan-chee-meng-jalan-kelang-lama1.png'
  },
  {
    name: "Nirwana",
    cuisine: "Indian",
    price: "$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/nirwana",
    image: '/images/nirwana1.png'
  },
  {
    name: "Passage Thru India",
    cuisine: "Indian",
    price: "$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/passage-thru-india",
    image: '/images/passage-thru-india1.png'
  },
  {
    name: "Potager",
    cuisine: "French Contemporary",
    price: "$$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/potager",
    image: '/images/potager1.png'
  },
  {
    name: "Roti by d'Tandoor",
    cuisine: "Indian",
    price: "$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/roti-by-dtandoor",
    image: '/images/roti-by-dtandoor1.png'
  },
  {
    name: "Sao Nam",
    cuisine: "Vietnamese",
    price: "$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/sao-nam",
    image: '/images/sao-nam1.png'
  },
  {
    name: "Seed",
    cuisine: "Innovative",
    price: "$$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/seed",
    image: '/images/seed1.png'
  },
  {
    name: "Sek Yuen",
    cuisine: "Cantonese",
    price: "$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/sek-yuen",
    image: '/images/sek-yuen1.png'
  },
  {
    name: "Shanghai Restaurant",
    cuisine: "Shanghainese",
    price: "$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/shanghai-restaurant",
    image: '/images/shanghai-restaurant1.png'
  },
  {
    name: "Shu",
    cuisine: "Innovative",
    price: "$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/shu",
    image: '/images/shu1.png'
  },
  {
    name: "Sin Kiew Yee Shin Kee Beef Noodles",
    cuisine: "Noodles",
    price: "$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/sin-kiew-yee-shin-kee-beef-noodles",
    image: '/images/sin-kiew-yee-shin-kee-beef-noodles1.png'
  },
  {
    name: "Skillet",
    cuisine: "European Contemporary",
    price: "$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/skillet",
    image: '/images/skillet1.png'
  },
  {
    name: "Sushi Masa",
    cuisine: "Sushi",
    price: "$$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/sushi-masa",
    image: '/images/sushi-masa1.png'
  },
  {
    name: "Sushi Ori",
    cuisine: "Sushi",
    price: "$$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/sushi-ori",
    image: '/images/sushi-ori1.png'
  },
  {
    name: "Sushi Taka",
    cuisine: "Sushi",
    price: "$$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/sushi-taka",
    image: '/images/sushi-taka1.png'
  },
  {
    name: "Tanglin (Bukit Damansara)",
    cuisine: "Malaysian",
    price: "$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/tanglin-bukit-damansara",
    image: '/images/tanglin-bukit-damansara1.png'
  },
  {
    name: "Tenmasa",
    cuisine: "Tempura",
    price: "$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/tenmasa",
    image: '/images/tenmasa1.png'
  },
  {
    name: "Teochew Lao Er",
    cuisine: "Teochew",
    price: "$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/teochew-lao-er",
    image: '/images/teochew-lao-er1.png'
  },
  {
    name: "Terra Dining",
    cuisine: "Malaysian, Contemporary",
    price: "$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/terra-dining",
    image: '/images/terra-dining1.png'
  },
  {
    name: "The Brasserie",
    cuisine: "French Contemporary",
    price: "$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/the-brasserie",
    image: '/images/the-brasserie1.png'
  },
  {
    name: "Ushi",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/ushi",
    image: '/images/ushi1.png'
  },
  {
    name: "Vantador",
    cuisine: "Steakhouse",
    price: "$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/vantador",
    image: '/images/vantador1.png'
  },
  {
    name: "Wagyu Kappo Yoshida",
    cuisine: "Japanese",
    price: "$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/wagyu-kappo-yoshida",
    image: '/images/wagyu-kappo-yoshida1.png'
  },
  {
    name: "Wong Mei Kee",
    cuisine: "Street Food",
    price: "$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/wong-mei-kee",
    image: '/images/wong-mei-kee1.png'
  },
  {
    name: "Yun House",
    cuisine: "Cantonese",
    price: "$$$",
    path: "/malaysia/kuala-lumpur/kuala-lumpur/yun-house",
    image: '/images/yun-house1.png'
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
