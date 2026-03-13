import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Da Nang";

const restaurants = [
  {
    name: "Bà Diệu (Tran Tong Street)",
    cuisine: "Noodles",
    price: "₫",
    path: "/vietnam/da-nang/da-nang/b-diu-tran-tong-street",
    image: '/images/b-diu-tran-tong-street1.png'
  },
  {
    name: "Bé Mặn",
    cuisine: "Seafood",
    price: "₫₫₫",
    path: "/vietnam/da-nang/da-nang/b-mn",
    image: '/images/b-mn1.png'
  },
  {
    name: "Bà Đông",
    cuisine: "Noodles",
    price: "₫",
    path: "/vietnam/da-nang/da-nang/b-ng",
    image: '/images/b-ng1.png'
  },
  {
    name: "Bé Ni 2",
    cuisine: "Seafood",
    price: "₫₫",
    path: "/vietnam/da-nang/da-nang/b-ni-2",
    image: '/images/b-ni-21.png'
  },
  {
    name: "Bún Bò Bà Rơi (Hai Chau)",
    cuisine: "Noodles",
    price: "₫",
    path: "/vietnam/da-nang/da-nang/bn-b-b-ri-hai-chau",
    image: '/images/bn-b-b-ri-hai-chau1.png'
  },
  {
    name: "Bún Bò Huế Bà Thương",
    cuisine: "Noodles",
    price: "₫",
    path: "/vietnam/da-nang/da-nang/bn-b-hu-b-thng",
    image: '/images/bn-b-hu-b-thng1.png'
  },
  {
    name: "Bún Chả Cá 109",
    cuisine: "Noodles",
    price: "₫",
    path: "/vietnam/da-nang/da-nang/bn-ch-c-109",
    image: '/images/bn-ch-c-1091.png'
  },
  {
    name: "Bún Chả Cá Bà Hoa",
    cuisine: "Noodles",
    price: "₫",
    path: "/vietnam/da-nang/da-nang/bn-ch-c-b-hoa",
    image: '/images/bn-ch-c-b-hoa1.png'
  },
  {
    name: "Bún Chả Cá Hờn",
    cuisine: "Noodles",
    price: "₫",
    path: "/vietnam/da-nang/da-nang/bn-ch-c-hn",
    image: '/images/bn-ch-c-hn1.png'
  },
  {
    name: "Bún Riêu Cua 39",
    cuisine: "Noodles",
    price: "₫",
    path: "/vietnam/da-nang/da-nang/bn-riu-cua-39",
    image: '/images/bn-riu-cua-391.png'
  },
  {
    name: "Bánh Canh Yến",
    cuisine: "Street Food",
    price: "₫",
    path: "/vietnam/da-nang/da-nang/bnh-canh-yn",
    image: '/images/bnh-canh-yn1.png'
  },
  {
    name: "Bánh Xèo 76",
    cuisine: "Vietnamese",
    price: "₫",
    path: "/vietnam/da-nang/da-nang/bnh-xo-76",
    image: '/images/bnh-xo-761.png'
  },
  {
    name: "Bánh Xèo Bà Dưỡng",
    cuisine: "Vietnamese",
    price: "₫",
    path: "/vietnam/da-nang/da-nang/bnh-xo-b-dng",
    image: '/images/bnh-xo-b-dng1.png'
  },
  {
    name: "Bánh Xèo Tôm Nhảy Cô Ba",
    cuisine: "Vietnamese",
    price: "₫",
    path: "/vietnam/da-nang/da-nang/bnh-xo-tm-nhy-c-ba",
    image: '/images/bnh-xo-tm-nhy-c-ba1.png'
  },
  {
    name: "Bánh Xèo Tôm Nhảy Năm Hiền (Phan Thanh Street)",
    cuisine: "Vietnamese",
    price: "₫",
    path: "/vietnam/da-nang/da-nang/bnh-xo-tm-nhy-nm-hin-phan-thanh-street",
    image: '/images/bnh-xo-tm-nhy-nm-hin-phan-thanh-street1.png'
  },
  {
    name: "Bếp Cuốn",
    cuisine: "Vietnamese",
    price: "₫₫",
    path: "/vietnam/da-nang/da-nang/bp-cun",
    image: '/images/bp-cun1.png'
  },
  {
    name: "Bếp Hên",
    cuisine: "Vietnamese",
    price: "₫",
    path: "/vietnam/da-nang/da-nang/bp-hn",
    image: '/images/bp-hn1.png'
  },
  {
    name: "Cô Chủ Nhỏ",
    cuisine: "Street Food",
    price: "₫",
    path: "/vietnam/da-nang/da-nang/c-ch-nh",
    image: '/images/c-ch-nh1.png'
  },
  {
    name: "Cơm Gà Lan",
    cuisine: "Rice Dishes",
    price: "₫",
    path: "/vietnam/da-nang/da-nang/cm-g-lan",
    image: '/images/cm-g-lan1.png'
  },
  {
    name: "Indian Aroma",
    cuisine: "Indian",
    price: "₫",
    path: "/vietnam/da-nang/da-nang/indian-aroma",
    image: '/images/indian-aroma1.png'
  },
  {
    name: "La Maison 1888",
    cuisine: "French Contemporary",
    price: "₫₫₫₫",
    path: "/vietnam/da-nang/da-nang/la-maison-1888",
    image: '/images/la-maison-18881.png'
  },
  {
    name: "Le Comptoir",
    cuisine: "French",
    price: "₫₫₫",
    path: "/vietnam/da-nang/da-nang/le-comptoir",
    image: '/images/le-comptoir1.png'
  },
  {
    name: "Luk Lak",
    cuisine: "Vietnamese",
    price: "₫₫",
    path: "/vietnam/da-nang/da-nang/luk-lak",
    image: '/images/luk-lak1.png'
  },
  {
    name: "Mì Quảng 1A",
    cuisine: "Noodles",
    price: "₫",
    path: "/vietnam/da-nang/da-nang/m-qung-1a",
    image: '/images/m-qung-1a1.png'
  },
  {
    name: "Mỳ Quảng Cô Sáu",
    cuisine: "Vietnamese",
    price: "₫",
    path: "/vietnam/da-nang/da-nang/m-qung-c-su",
    image: '/images/m-qung-c-su1.png'
  },
  {
    name: "Mỳ Quảng Sứa Hồng Vân",
    cuisine: "Street Food",
    price: "₫",
    path: "/vietnam/da-nang/da-nang/m-qung-sa-hng-vn",
    image: '/images/m-qung-sa-hng-vn1.png'
  },
  {
    name: "Madame Lân",
    cuisine: "Vietnamese",
    price: "₫₫",
    path: "/vietnam/da-nang/da-nang/madame-ln",
    image: '/images/madame-ln1.png'
  },
  {
    name: "MỘC Quán Seafood",
    cuisine: "Seafood",
    price: "₫₫",
    path: "/vietnam/da-nang/da-nang/mc-qun-seafood",
    image: '/images/mc-qun-seafood1.png'
  },
  {
    name: "My Hanh Seafood",
    cuisine: "Seafood",
    price: "₫₫₫",
    path: "/vietnam/da-nang/da-nang/my-hanh-seafood",
    image: '/images/my-hanh-seafood1.png'
  },
  {
    name: "Ăn Thôi",
    cuisine: "Vietnamese",
    price: "₫",
    path: "/vietnam/da-nang/da-nang/n-thi",
    image: '/images/n-thi1.png'
  },
  {
    name: "Ngọc Chi",
    cuisine: "Vegetarian",
    price: "₫",
    path: "/vietnam/da-nang/da-nang/ngc-chi",
    image: '/images/ngc-chi1.png'
  },
  {
    name: "Năm Đảnh",
    cuisine: "Seafood",
    price: "₫₫",
    path: "/vietnam/da-nang/da-nang/nm-nh",
    image: '/images/nm-nh1.png'
  },
  {
    name: "Nén Danang",
    cuisine: "Vietnamese Contemporary",
    price: "₫₫₫₫",
    path: "/vietnam/da-nang/da-nang/nn-danang",
    image: '/images/nn-danang1.png'
  },
  {
    name: "Nu Đồ Kitchen",
    cuisine: "Noodles",
    price: "₫",
    path: "/vietnam/da-nang/da-nang/nu-kitchen",
    image: '/images/nu-kitchen1.png'
  },
  {
    name: "Olivia's Prime",
    cuisine: "Steakhouse",
    price: "₫₫₫₫",
    path: "/vietnam/da-nang/da-nang/olivias-prime",
    image: '/images/olivias-prime1.png'
  },
  {
    name: "Phú Hồng",
    cuisine: "Street Food",
    price: "₫",
    path: "/vietnam/da-nang/da-nang/ph-hng",
    image: '/images/ph-hng1.png'
  },
  {
    name: "Quê Xưa",
    cuisine: "Vietnamese",
    price: "₫",
    path: "/vietnam/da-nang/da-nang/qu-xa",
    image: '/images/qu-xa1.png'
  },
  {
    name: "Quán Nhân",
    cuisine: "Street Food",
    price: "₫",
    path: "/vietnam/da-nang/da-nang/qun-nhn",
    image: '/images/qun-nhn1.png'
  },
  {
    name: "Rang",
    cuisine: "Indian",
    price: "₫₫",
    path: "/vietnam/da-nang/da-nang/rang",
    image: '/images/rang1.png'
  },
  {
    name: "Shamballa",
    cuisine: "Vegetarian",
    price: "₫₫",
    path: "/vietnam/da-nang/da-nang/shamballa",
    image: '/images/shamballa1.png'
  },
  {
    name: "Si Dining",
    cuisine: "Italian Contemporary",
    price: "₫₫",
    path: "/vietnam/da-nang/da-nang/si-dining",
    image: '/images/si-dining1.png'
  },
  {
    name: "Thìa Gỗ",
    cuisine: "Vietnamese",
    price: "₫",
    path: "/vietnam/da-nang/da-nang/tha-g",
    image: '/images/tha-g1.png'
  },
  {
    name: "The Temptation",
    cuisine: "French Contemporary",
    price: "₫₫₫",
    path: "/vietnam/da-nang/da-nang/the-temptation",
    image: '/images/the-temptation1.png'
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
