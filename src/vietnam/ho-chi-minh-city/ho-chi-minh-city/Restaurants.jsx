import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Ho Chi Minh City";

const restaurants = [
  {
    name: "3G Trois Gourmands",
    cuisine: "French",
    price: "₫₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/3g-trois-gourmands",
    image: '/images/3g-trois-gourmands1.png'
  },
  {
    name: "Akuna",
    cuisine: "Innovative",
    price: "₫₫₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/akuna",
    image: '/images/akuna1.png'
  },
  {
    name: "An's Saigon",
    cuisine: "Innovative",
    price: "₫₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/ans-saigon",
    image: '/images/ans-saigon1.png'
  },
  {
    name: "Bà Cô Lốc Cốc",
    cuisine: "Seafood",
    price: "₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/b-c-lc-cc",
    image: '/images/b-c-lc-cc1.png'
  },
  {
    name: "Bò Kho Gánh",
    cuisine: "Street Food",
    price: "₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/b-kho-gnh",
    image: '/images/b-kho-gnh1.png'
  },
  {
    name: "Bờm",
    cuisine: "Vietnamese Contemporary",
    price: "₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/bm",
    image: '/images/bm1.png'
  },
  {
    name: "Bún Bò Huế 14B",
    cuisine: "Street Food",
    price: "₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/bn-b-hu-14b",
    image: '/images/bn-b-hu-14b1.png'
  },
  {
    name: "Bún Bò Huế Cô Như",
    cuisine: "Noodles",
    price: "₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/bn-b-hu-c-nh",
    image: '/images/bn-b-hu-c-nh1.png'
  },
  {
    name: "Bún Thịt Nướng Hoàng Văn",
    cuisine: "Street Food",
    price: "₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/bn-tht-nng-hong-vn",
    image: '/images/bn-tht-nng-hong-vn1.png'
  },
  {
    name: "Bánh Xèo 46A",
    cuisine: "Vietnamese",
    price: "₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/bnh-xo-46a",
    image: '/images/bnh-xo-46a1.png'
  },
  {
    name: "Béo Ơi",
    cuisine: "Vietnamese",
    price: "₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/bo-i",
    image: '/images/bo-i1.png'
  },
  {
    name: "Bếp Mẹ ỉn (Le Thanh Ton Street)",
    cuisine: "Vietnamese",
    price: "₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/bp-m-n-le-thanh-ton-street",
    image: '/images/bp-m-n-le-thanh-ton-street1.png'
  },
  {
    name: "Bếp Người Hội An",
    cuisine: "Vietnamese",
    price: "₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/bp-ngi-hi-an",
    image: '/images/bp-ngi-hi-an1.png'
  },
  {
    name: "Å by T.U.N.G",
    cuisine: "Innovative",
    price: "₫₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/by-tung",
    image: '/images/by-tung1.png'
  },
  {
    name: "Cô Liêng",
    cuisine: "Street Food",
    price: "₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/c-ling",
    image: '/images/c-ling1.png'
  },
  {
    name: "Ốc Đào (District 1)",
    cuisine: "Seafood",
    price: "₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/c-o-district-1",
    image: '/images/c-o-district-11.png'
  },
  {
    name: "Ốc Oanh",
    cuisine: "Street Food",
    price: "₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/c-oanh",
    image: '/images/c-oanh1.png'
  },
  {
    name: "Cục Gạch Quán",
    cuisine: "Vietnamese",
    price: "₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/cc-gch-qun",
    image: '/images/cc-gch-qun1.png'
  },
  {
    name: "Chay Garden (District 3)",
    cuisine: "Vegetarian",
    price: "₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/chay-garden-district-3",
    image: '/images/chay-garden-district-31.png'
  },
  {
    name: "CieL",
    cuisine: "Innovative",
    price: "₫₫₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/ciel",
    image: '/images/ciel1.png'
  },
  {
    name: "Cơm Tấm Ba Ghiền",
    cuisine: "Street Food",
    price: "₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/cm-tm-ba-ghin",
    image: '/images/cm-tm-ba-ghin1.png'
  },
  {
    name: "Coco Dining",
    cuisine: "Innovative",
    price: "₫₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/coco-dining",
    image: '/images/coco-dining1.png'
  },
  {
    name: "Du Yên",
    cuisine: "Vegetarian",
    price: "₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/du-yn",
    image: '/images/du-yn1.png'
  },
  {
    name: "Elgin",
    cuisine: "European",
    price: "₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/elgin",
    image: '/images/elgin1.png'
  },
  {
    name: "Esta",
    cuisine: "Asian Contemporary",
    price: "₫₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/esta",
    image: '/images/esta1.png'
  },
  {
    name: "Fashionista Café",
    cuisine: "European Contemporary",
    price: "₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/fashionista-caf",
    image: '/images/fashionista-caf1.png'
  },
  {
    name: "Hồng Phát (District 3)",
    cuisine: "Noodles",
    price: "₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/hng-pht-district-3",
    image: '/images/hng-pht-district-31.png'
  },
  {
    name: "Hoa Túc (District 1)",
    cuisine: "Vietnamese",
    price: "₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/hoa-tc-district-1",
    image: '/images/hoa-tc-district-11.png'
  },
  {
    name: "Hoi An Sense",
    cuisine: "Vietnamese",
    price: "₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/hoi-an-sense",
    image: '/images/hoi-an-sense1.png'
  },
  {
    name: "Hum Garden",
    cuisine: "Vegetarian",
    price: "₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/hum-garden",
    image: '/images/hum-garden1.png'
  },
  {
    name: "Kobe Bistro",
    cuisine: "French Contemporary",
    price: "₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/kobe-bistro",
    image: '/images/kobe-bistro1.png'
  },
  {
    name: "Lửa",
    cuisine: "European Contemporary",
    price: "₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/la",
    image: '/images/la1.png'
  },
  {
    name: "La Fontaine",
    cuisine: "French",
    price: "₫₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/la-fontaine",
    image: '/images/la-fontaine1.png'
  },
  {
    name: "La Villa",
    cuisine: "French",
    price: "₫₫₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/la-villa",
    image: '/images/la-villa1.png'
  },
  {
    name: "Lai",
    cuisine: "Cantonese",
    price: "₫₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/lai",
    image: '/images/lai1.png'
  },
  {
    name: "Little Bear",
    cuisine: "Vietnamese Contemporary",
    price: "₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/little-bear",
    image: '/images/little-bear1.png'
  },
  {
    name: "Lüne",
    cuisine: "French",
    price: "₫₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/lne",
    image: '/images/lne1.png'
  },
  {
    name: "Long Trieu",
    cuisine: "Cantonese",
    price: "₫₫₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/long-trieu",
    image: '/images/long-trieu1.png'
  },
  {
    name: "Mía Dining",
    cuisine: "European Contemporary",
    price: "₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/ma-dining",
    image: '/images/ma-dining1.png'
  },
  {
    name: "Madame Lam",
    cuisine: "Vietnamese Contemporary",
    price: "₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/madame-lam",
    image: '/images/madame-lam1.png'
  },
  {
    name: "Miên Saigon",
    cuisine: "Vietnamese Contemporary",
    price: "₫₫₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/min-saigon",
    image: '/images/min-saigon1.png'
  },
  {
    name: "Mặn Mòi (Thu Duc City)",
    cuisine: "Vietnamese",
    price: "₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/mn-mi-thu-duc-city",
    image: '/images/mn-mi-thu-duc-city1.png'
  },
  {
    name: "Nephele",
    cuisine: "Asian Contemporary",
    price: "₫₫₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/nephele",
    image: '/images/nephele1.png'
  },
  {
    name: "Đông Phố",
    cuisine: "Vietnamese",
    price: "₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/ng-ph",
    image: '/images/ng-ph1.png'
  },
  {
    name: "Nhà Tú",
    cuisine: "Vietnamese",
    price: "₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/nh-t",
    image: '/images/nh-t1.png'
  },
  {
    name: "Nén Light",
    cuisine: "Innovative",
    price: "₫₫₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/nn-light",
    image: '/images/nn-light1.png'
  },
  {
    name: "Ănăn Saigon",
    cuisine: "Vietnamese Contemporary",
    price: "₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/nn-saigon",
    image: '/images/nn-saigon1.png'
  },
  {
    name: "Octo",
    cuisine: "Spanish",
    price: "₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/octo",
    image: '/images/octo1.png'
  },
  {
    name: "Okra FoodBar",
    cuisine: "European Contemporary",
    price: "₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/okra-foodbar",
    image: '/images/okra-foodbar1.png'
  },
  {
    name: "Olivia",
    cuisine: "European Contemporary",
    price: "₫₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/olivia",
    image: '/images/olivia1.png'
  },
  {
    name: "Oryz",
    cuisine: "Asian Contemporary",
    price: "₫₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/oryz",
    image: '/images/oryz1.png'
  },
  {
    name: "Phở Bò Phú Gia (District 3)",
    cuisine: "Noodles",
    price: "₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/ph-b-ph-gia-district-3",
    image: '/images/ph-b-ph-gia-district-31.png'
  },
  {
    name: "Phở Chào",
    cuisine: "Noodles",
    price: "₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/ph-cho",
    image: '/images/ph-cho1.png'
  },
  {
    name: "Phở Hương Bình",
    cuisine: "Noodles",
    price: "₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/ph-hng-bnh",
    image: '/images/ph-hng-bnh1.png'
  },
  {
    name: "Phở Hùng (District 1)",
    cuisine: "Noodles",
    price: "₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/ph-hng-district-1",
    image: '/images/ph-hng-district-11.png'
  },
  {
    name: "Phở Hoàng (Nguyen Tri Phuong Street)",
    cuisine: "Noodles",
    price: "₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/ph-hong-nguyen-tri-phuong-street",
    image: '/images/ph-hong-nguyen-tri-phuong-street1.png'
  },
  {
    name: "Phở Lệ (District 5)",
    cuisine: "Noodles",
    price: "₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/ph-l-district-5",
    image: '/images/ph-l-district-51.png'
  },
  {
    name: "Phở Miến Gà Kỳ Đồng",
    cuisine: "Street Food",
    price: "₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/ph-min-g-k-ng",
    image: '/images/ph-min-g-k-ng1.png'
  },
  {
    name: "Phở Minh",
    cuisine: "Noodles",
    price: "₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/ph-minh",
    image: '/images/ph-minh1.png'
  },
  {
    name: "Phở Phượng",
    cuisine: "Street Food",
    price: "₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/ph-phng",
    image: '/images/ph-phng1.png'
  },
  {
    name: "Phở Việt Nam (District 1)",
    cuisine: "Noodles",
    price: "₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/ph-vit-nam-district-1",
    image: '/images/ph-vit-nam-district-11.png'
  },
  {
    name: "Quince Eatery",
    cuisine: "Mediterranean Cuisine",
    price: "₫₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/quince-eatery",
    image: '/images/quince-eatery1.png'
  },
  {
    name: "Rice Field",
    cuisine: "Vietnamese",
    price: "₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/rice-field",
    image: '/images/rice-field1.png'
  },
  {
    name: "Sol Kitchen & Bar (District 1)",
    cuisine: "Latin American",
    price: "₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/sol-kitchen-bar-district-1",
    image: '/images/sol-kitchen-bar-district-11.png'
  },
  {
    name: "Square One",
    cuisine: "International",
    price: "₫₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/square-one",
    image: '/images/square-one1.png'
  },
  {
    name: "ST25 by KOTO",
    cuisine: "Vietnamese Contemporary",
    price: "₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/st25-by-koto",
    image: '/images/st25-by-koto1.png'
  },
  {
    name: "Stoker (District 1)",
    cuisine: "Steakhouse",
    price: "₫₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/stoker-district-1",
    image: '/images/stoker-district-11.png'
  },
  {
    name: "The Albion by Kirk Westaway",
    cuisine: "British Contemporary",
    price: "₫₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/the-albion-by-kirk-westaway",
    image: '/images/the-albion-by-kirk-westaway1.png'
  },
  {
    name: "The Monkey Gallery Dining",
    cuisine: "Vietnamese Contemporary",
    price: "₫₫₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/the-monkey-gallery-dining",
    image: '/images/the-monkey-gallery-dining1.png'
  },
  {
    name: "Thúy 94 Cũ",
    cuisine: "Seafood",
    price: "₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/thy-94-c",
    image: '/images/thy-94-c1.png'
  },
  {
    name: "Tiệm Cơm Thố Chuyên Ký",
    cuisine: "Cantonese",
    price: "₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/tim-cm-th-chuyn-k",
    image: '/images/tim-cm-th-chuyn-k1.png'
  },
  {
    name: "Truffle",
    cuisine: "French Contemporary",
    price: "₫₫₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/truffle",
    image: '/images/truffle1.png'
  },
  {
    name: "Vị Quê Kitchen",
    cuisine: "Vegan",
    price: "₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/v-qu-kitchen",
    image: '/images/v-qu-kitchen1.png'
  },
  {
    name: "Vietnam House",
    cuisine: "Vietnamese",
    price: "₫₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/vietnam-house",
    image: '/images/vietnam-house1.png'
  },
  {
    name: "Xôi Gà Number One",
    cuisine: "Street Food",
    price: "₫",
    path: "/vietnam/ho-chi-minh-city/ho-chi-minh-city/xi-g-number-one",
    image: '/images/xi-g-number-one1.png'
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
