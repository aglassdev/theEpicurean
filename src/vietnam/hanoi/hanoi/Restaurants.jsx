import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Hanoi";

const restaurants = [
  {
    name: "1946 Cua Bac",
    cuisine: "Vietnamese",
    price: "₫",
    path: "/vietnam/hanoi/hanoi/1946-cua-bac",
    image: '/images/1946-cua-bac1.png'
  },
  {
    name: "A Bản Mountain Dew",
    cuisine: "Vietnamese",
    price: "₫₫",
    path: "/vietnam/hanoi/hanoi/a-bn-mountain-dew",
    image: '/images/a-bn-mountain-dew1.png'
  },
  {
    name: "Azabu",
    cuisine: "Japanese",
    price: "₫₫",
    path: "/vietnam/hanoi/hanoi/azabu",
    image: '/images/azabu1.png'
  },
  {
    name: "Backstage",
    cuisine: "Vietnamese Contemporary",
    price: "₫₫₫",
    path: "/vietnam/hanoi/hanoi/backstage",
    image: '/images/backstage1.png'
  },
  {
    name: "Bún Chả Đắc Kim (Hang Manh Street)",
    cuisine: "Street Food",
    price: "₫",
    path: "/vietnam/hanoi/hanoi/bn-ch-c-kim-hang-manh-street",
    image: '/images/bn-ch-c-kim-hang-manh-street1.png'
  },
  {
    name: "Bún Chả Chan",
    cuisine: "Noodles",
    price: "₫",
    path: "/vietnam/hanoi/hanoi/bn-ch-chan",
    image: '/images/bn-ch-chan1.png'
  },
  {
    name: "Bún Chả Hương Liên (Hai Ba Trung)",
    cuisine: "Street Food",
    price: "₫",
    path: "/vietnam/hanoi/hanoi/bn-ch-hng-lin-hai-ba-trung",
    image: '/images/bn-ch-hng-lin-hai-ba-trung1.png'
  },
  {
    name: "Bánh Cuốn Bà Hoành",
    cuisine: "Street Food",
    price: "₫",
    path: "/vietnam/hanoi/hanoi/bnh-cun-b-honh",
    image: '/images/bnh-cun-b-honh1.png'
  },
  {
    name: "Bánh Cuốn Bà Xuân",
    cuisine: "Street Food",
    price: "₫",
    path: "/vietnam/hanoi/hanoi/bnh-cun-b-xun",
    image: '/images/bnh-cun-b-xun1.png'
  },
  {
    name: "Bếp Prime",
    cuisine: "Vietnamese",
    price: "₫₫",
    path: "/vietnam/hanoi/hanoi/bp-prime",
    image: '/images/bp-prime1.png'
  },
  {
    name: "Bun Cha Ta (Nguyen Huu Huan Street)",
    cuisine: "Noodles",
    price: "₫",
    path: "/vietnam/hanoi/hanoi/bun-cha-ta-nguyen-huu-huan-street",
    image: '/images/bun-cha-ta-nguyen-huu-huan-street1.png'
  },
  {
    name: "Ốc Dì Tú",
    cuisine: "Seafood",
    price: "₫₫",
    path: "/vietnam/hanoi/hanoi/c-d-t",
    image: '/images/c-d-t1.png'
  },
  {
    name: "Cồ Đàm",
    cuisine: "Vegetarian",
    price: "₫₫",
    path: "/vietnam/hanoi/hanoi/c-m",
    image: '/images/c-m1.png'
  },
  {
    name: "Ốc Vi Saigon",
    cuisine: "Seafood",
    price: "₫",
    path: "/vietnam/hanoi/hanoi/c-vi-saigon",
    image: '/images/c-vi-saigon1.png'
  },
  {
    name: "Cau Go",
    cuisine: "Vietnamese",
    price: "₫₫",
    path: "/vietnam/hanoi/hanoi/cau-go",
    image: '/images/cau-go1.png'
  },
  {
    name: "Chả Cá Anh Vũ (Dong Da)",
    cuisine: "Vietnamese",
    price: "₫",
    path: "/vietnam/hanoi/hanoi/ch-c-anh-v-dong-da",
    image: '/images/ch-c-anh-v-dong-da1.png'
  },
  {
    name: "Chả Cá Thăng Long (6B Duong Thanh Street)",
    cuisine: "Vietnamese",
    price: "₫",
    path: "/vietnam/hanoi/hanoi/ch-c-thng-long-6b-duong-thanh-street",
    image: '/images/ch-c-thng-long-6b-duong-thanh-street1.png'
  },
  {
    name: "Chapter",
    cuisine: "Vietnamese Contemporary",
    price: "₫₫₫₫",
    path: "/vietnam/hanoi/hanoi/chapter",
    image: '/images/chapter1.png'
  },
  {
    name: "Chào Bạn",
    cuisine: "Vietnamese",
    price: "₫",
    path: "/vietnam/hanoi/hanoi/cho-bn",
    image: '/images/cho-bn1.png'
  },
  {
    name: "Duong's (Ngo Huyen Street)",
    cuisine: "Vietnamese",
    price: "₫₫",
    path: "/vietnam/hanoi/hanoi/duongs-ngo-huyen-street",
    image: '/images/duongs-ngo-huyen-street1.png'
  },
  {
    name: "El Gaucho (Hoan Kiem)",
    cuisine: "Steakhouse",
    price: "₫₫₫₫",
    path: "/vietnam/hanoi/hanoi/el-gaucho-hoan-kiem",
    image: '/images/el-gaucho-hoan-kiem1.png'
  },
  {
    name: "Etēsia",
    cuisine: "European Contemporary",
    price: "₫₫",
    path: "/vietnam/hanoi/hanoi/etsia",
    image: '/images/etsia1.png'
  },
  {
    name: "French Grill By Jean-François Nulli",
    cuisine: "French Contemporary",
    price: "₫₫₫₫",
    path: "/vietnam/hanoi/hanoi/french-grill-by-jean-franois-nulli",
    image: '/images/french-grill-by-jean-franois-nulli1.png'
  },
  {
    name: "Gia",
    cuisine: "Vietnamese Contemporary",
    price: "₫₫₫₫",
    path: "/vietnam/hanoi/hanoi/gia",
    image: '/images/gia1.png'
  },
  {
    name: "Hà Thành Mansion",
    cuisine: "Vietnamese",
    price: "₫₫",
    path: "/vietnam/hanoi/hanoi/h-thnh-mansion",
    image: '/images/h-thnh-mansion1.png'
  },
  {
    name: "Habakuk",
    cuisine: "European Contemporary",
    price: "₫₫",
    path: "/vietnam/hanoi/hanoi/habakuk",
    image: '/images/habakuk1.png'
  },
  {
    name: "Hanoi Garden",
    cuisine: "Vietnamese",
    price: "₫₫",
    path: "/vietnam/hanoi/hanoi/hanoi-garden",
    image: '/images/hanoi-garden1.png'
  },
  {
    name: "Hemispheres Steak & Seafood Grill",
    cuisine: "Steakhouse",
    price: "₫₫₫",
    path: "/vietnam/hanoi/hanoi/hemispheres-steak-seafood-grill",
    image: '/images/hemispheres-steak-seafood-grill1.png'
  },
  {
    name: "Hibana by Koki",
    cuisine: "Teppanyaki",
    price: "₫₫₫₫",
    path: "/vietnam/hanoi/hanoi/hibana-by-koki",
    image: '/images/hibana-by-koki1.png'
  },
  {
    name: "Highway4 (Hang Tre Street)",
    cuisine: "Vietnamese",
    price: "₫",
    path: "/vietnam/hanoi/hanoi/highway4-hang-tre-street",
    image: '/images/highway4-hang-tre-street1.png'
  },
  {
    name: "Hiệu Lực Canh Cá Rô Hưng Yên (Hai Ba Trung)",
    cuisine: "Noodles",
    price: "₫",
    path: "/vietnam/hanoi/hanoi/hiu-lc-canh-c-r-hng-yn-hai-ba-trung",
    image: '/images/hiu-lc-canh-c-r-hng-yn-hai-ba-trung1.png'
  },
  {
    name: "Izakaya by Koki",
    cuisine: "Japanese",
    price: "₫₫₫",
    path: "/vietnam/hanoi/hanoi/izakaya-by-koki",
    image: '/images/izakaya-by-koki1.png'
  },
  {
    name: "La Badiane",
    cuisine: "Fusion",
    price: "₫₫",
    path: "/vietnam/hanoi/hanoi/la-badiane",
    image: '/images/la-badiane1.png'
  },
  {
    name: "Labri",
    cuisine: "European Contemporary",
    price: "₫₫₫",
    path: "/vietnam/hanoi/hanoi/labri",
    image: '/images/labri1.png'
  },
  {
    name: "Lamai Garden",
    cuisine: "Vietnamese Contemporary",
    price: "₫₫₫",
    path: "/vietnam/hanoi/hanoi/lamai-garden",
    image: '/images/lamai-garden1.png'
  },
  {
    name: "Le Beaulieu",
    cuisine: "French",
    price: "₫₫₫₫",
    path: "/vietnam/hanoi/hanoi/le-beaulieu",
    image: '/images/le-beaulieu1.png'
  },
  {
    name: "Luk Lak",
    cuisine: "Vietnamese",
    price: "₫₫",
    path: "/vietnam/hanoi/hanoi/luk-lak",
    image: '/images/luk-lak1.png'
  },
  {
    name: "Maison 1929",
    cuisine: "Vietnamese",
    price: "₫₫",
    path: "/vietnam/hanoi/hanoi/maison-1929",
    image: '/images/maison-19291.png'
  },
  {
    name: "Miến Lươn Chân Cầm (Hoan Kiem)",
    cuisine: "Noodles",
    price: "₫",
    path: "/vietnam/hanoi/hanoi/min-ln-chn-cm-hoan-kiem",
    image: '/images/min-ln-chn-cm-hoan-kiem1.png'
  },
  {
    name: "Miến Lươn Đông Thịnh",
    cuisine: "Noodles",
    price: "₫",
    path: "/vietnam/hanoi/hanoi/min-ln-ng-thnh",
    image: '/images/min-ln-ng-thnh1.png'
  },
  {
    name: "Mr Bảy Miền Tây",
    cuisine: "Vietnamese",
    price: "₫",
    path: "/vietnam/hanoi/hanoi/mr-by-min-ty",
    image: '/images/mr-by-min-ty1.png'
  },
  {
    name: "Mậu Dịch Số 37",
    cuisine: "Vietnamese",
    price: "₫",
    path: "/vietnam/hanoi/hanoi/mu-dch-s-37",
    image: '/images/mu-dch-s-371.png'
  },
  {
    name: "Ngon Garden",
    cuisine: "Vietnamese",
    price: "₫₫",
    path: "/vietnam/hanoi/hanoi/ngon-garden",
    image: '/images/ngon-garden1.png'
  },
  {
    name: "Phở 10 Lý Quốc Sư (Hoan Kiem)",
    cuisine: "Noodles",
    price: "₫",
    path: "/vietnam/hanoi/hanoi/ph-10-l-quc-s-hoan-kiem",
    image: '/images/ph-10-l-quc-s-hoan-kiem1.png'
  },
  {
    name: "Phở Bò Lâm",
    cuisine: "Street Food",
    price: "₫",
    path: "/vietnam/hanoi/hanoi/ph-b-lm",
    image: '/images/ph-b-lm1.png'
  },
  {
    name: "Phở Bò Ấu Triệu",
    cuisine: "Street Food",
    price: "₫",
    path: "/vietnam/hanoi/hanoi/ph-b-u-triu",
    image: '/images/ph-b-u-triu1.png'
  },
  {
    name: "Phở Cuốn Chinh Thắng",
    cuisine: "Noodles",
    price: "₫",
    path: "/vietnam/hanoi/hanoi/ph-cun-chinh-thng",
    image: '/images/ph-cun-chinh-thng1.png'
  },
  {
    name: "Phở Gà Châm (Yen Ninh Street)",
    cuisine: "Noodles",
    price: "₫",
    path: "/vietnam/hanoi/hanoi/ph-g-chm-yen-ninh-street",
    image: '/images/ph-g-chm-yen-ninh-street1.png'
  },
  {
    name: "Phở Gà Nguyệt",
    cuisine: "Street Food",
    price: "₫",
    path: "/vietnam/hanoi/hanoi/ph-g-nguyt",
    image: '/images/ph-g-nguyt1.png'
  },
  {
    name: "Phở Gia Truyền (Hoan Kiem)",
    cuisine: "Street Food",
    price: "₫",
    path: "/vietnam/hanoi/hanoi/ph-gia-truyn-hoan-kiem",
    image: '/images/ph-gia-truyn-hoan-kiem1.png'
  },
  {
    name: "Phở Khôi Hói",
    cuisine: "Street Food",
    price: "₫",
    path: "/vietnam/hanoi/hanoi/ph-khi-hi",
    image: '/images/ph-khi-hi1.png'
  },
  {
    name: "Phở Tiến",
    cuisine: "Noodles",
    price: "₫",
    path: "/vietnam/hanoi/hanoi/ph-tin",
    image: '/images/ph-tin1.png'
  },
  {
    name: "Quán Ăn Ngon (Hoan Kiem)",
    cuisine: "Vietnamese",
    price: "₫₫",
    path: "/vietnam/hanoi/hanoi/qun-n-ngon-hoan-kiem",
    image: '/images/qun-n-ngon-hoan-kiem1.png'
  },
  {
    name: "Senté (Nguyen Quang Bich Street)",
    cuisine: "Vietnamese Contemporary",
    price: "₫₫",
    path: "/vietnam/hanoi/hanoi/sent-nguyen-quang-bich-street",
    image: '/images/sent-nguyen-quang-bich-street1.png'
  },
  {
    name: "Tanh Tách",
    cuisine: "Seafood",
    price: "₫₫₫",
    path: "/vietnam/hanoi/hanoi/tanh-tch",
    image: '/images/tanh-tch1.png'
  },
  {
    name: "The East",
    cuisine: "Vietnamese",
    price: "₫₫",
    path: "/vietnam/hanoi/hanoi/the-east",
    image: '/images/the-east1.png'
  },
  {
    name: "Tầm Vị",
    cuisine: "Vietnamese",
    price: "₫₫",
    path: "/vietnam/hanoi/hanoi/tm-v",
    image: '/images/tm-v1.png'
  },
  {
    name: "T.U.N.G dining",
    cuisine: "Innovative",
    price: "₫₫₫₫",
    path: "/vietnam/hanoi/hanoi/tung-dining",
    image: '/images/tung-dining1.png'
  },
  {
    name: "Tuyết Bún Chả 34",
    cuisine: "Street Food",
    price: "₫",
    path: "/vietnam/hanoi/hanoi/tuyt-bn-ch-34",
    image: '/images/tuyt-bn-ch-341.png'
  },
  {
    name: "Ưu Đàm",
    cuisine: "Vegetarian",
    price: "₫",
    path: "/vietnam/hanoi/hanoi/u-m",
    image: '/images/u-m1.png'
  },
  {
    name: "Vi An",
    cuisine: "Vietnamese",
    price: "₫₫",
    path: "/vietnam/hanoi/hanoi/vi-an",
    image: '/images/vi-an1.png'
  },
  {
    name: "Vien Dining",
    cuisine: "Innovative",
    price: "₫₫",
    path: "/vietnam/hanoi/hanoi/vien-dining",
    image: '/images/vien-dining1.png'
  },
  {
    name: "Xới Cơm",
    cuisine: "Vietnamese",
    price: "₫",
    path: "/vietnam/hanoi/hanoi/xi-cm",
    image: '/images/xi-cm1.png'
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
