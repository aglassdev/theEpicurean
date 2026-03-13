import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Nara";

const restaurants = [
  {
    name: "A VOTRE SANTE",
    cuisine: "French",
    price: "¥¥",
    path: "/japan/nara/nara/a-votre-sante",
    image: '/images/a-votre-sante1.png'
  },
  {
    name: "Ajinokaze Nishimura",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/nara/nara/ajinokaze-nishimura",
    image: '/images/ajinokaze-nishimura1.png'
  },
  {
    name: "Ajinotabibito Roman",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/nara/nara/ajinotabibito-roman",
    image: '/images/ajinotabibito-roman1.png'
  },
  {
    name: "akordu",
    cuisine: "Innovative",
    price: "¥¥¥",
    path: "/japan/nara/nara/akordu",
    image: '/images/akordu1.png'
  },
  {
    name: "Araki",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/nara/nara/araki",
    image: '/images/araki1.png'
  },
  {
    name: "Arigato",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/nara/nara/arigato",
    image: '/images/arigato1.png'
  },
  {
    name: "AWA Naramachiten",
    cuisine: "Japanese",
    price: "¥¥",
    path: "/japan/nara/nara/awa-naramachiten",
    image: '/images/awa-naramachiten1.png'
  },
  {
    name: "BANCHETTI",
    cuisine: "Italian",
    price: "¥¥¥",
    path: "/japan/nara/nara/banchetti",
    image: '/images/banchetti1.png'
  },
  {
    name: "Bon appétit Meshiagare",
    cuisine: "French",
    price: "¥¥",
    path: "/japan/nara/nara/bon-apptit-meshiagare",
    image: '/images/bon-apptit-meshiagare1.png'
  },
  {
    name: "Camino",
    cuisine: "Italian",
    price: "¥¥",
    path: "/japan/nara/nara/camino",
    image: '/images/camino1.png'
  },
  {
    name: "Chez Kurahashi",
    cuisine: "French",
    price: "¥¥",
    path: "/japan/nara/nara/chez-kurahashi",
    image: '/images/chez-kurahashi1.png'
  },
  {
    name: "Chugokusai Naramachi Kuko",
    cuisine: "Chinese",
    price: "¥¥¥",
    path: "/japan/nara/nara/chugokusai-naramachi-kuko",
    image: '/images/chugokusai-naramachi-kuko1.png'
  },
  {
    name: "cucina regionale YANAGAWA",
    cuisine: "Italian",
    price: "¥¥¥",
    path: "/japan/nara/nara/cucina-regionale-yanagawa",
    image: '/images/cucina-regionale-yanagawa1.png'
  },
  {
    name: "Da terra",
    cuisine: "Italian",
    price: "¥¥¥",
    path: "/japan/nara/nara/da-terra",
    image: '/images/da-terra1.png'
  },
  {
    name: "Da terra",
    cuisine: "Italian",
    price: "¥¥¥",
    path: "/japan/nara/nara/da-terra",
    image: '/images/da-terra1.png'
  },
  {
    name: "FAON",
    cuisine: "French",
    price: "¥¥",
    path: "/japan/nara/nara/faon",
    image: '/images/faon1.png'
  },
  {
    name: "Gen",
    cuisine: "Soba",
    price: "¥¥¥",
    path: "/japan/nara/nara/gen",
    image: '/images/gen1.png'
  },
  {
    name: "GENMAIAN",
    cuisine: "Japanese",
    price: "¥",
    path: "/japan/nara/nara/genmaian",
    image: '/images/genmaian1.png'
  },
  {
    name: "Gibier Ida",
    cuisine: "Meats and Grills",
    price: "¥¥¥",
    path: "/japan/nara/nara/gibier-ida",
    image: '/images/gibier-ida1.png'
  },
  {
    name: "Gojo GENBEI",
    cuisine: "Japanese",
    price: "¥¥",
    path: "/japan/nara/nara/gojo-genbei",
    image: '/images/gojo-genbei1.png'
  },
  {
    name: "GOKAN UOGIN",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/nara/nara/gokan-uogin",
    image: '/images/gokan-uogin1.png'
  },
  {
    name: "Ike Edoyakiunagi Asahitei",
    cuisine: "Unagi / Freshwater Eel",
    price: "¥¥",
    path: "/japan/nara/nara/ike-edoyakiunagi-asahitei",
    image: '/images/ike-edoyakiunagi-asahitei1.png'
  },
  {
    name: "Inada",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/nara/nara/inada",
    image: '/images/inada1.png'
  },
  {
    name: "Kaiseki Kakomura",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/nara/nara/kaiseki-kakomura",
    image: '/images/kaiseki-kakomura1.png'
  },
  {
    name: "Kaiseki Morimoto",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/nara/nara/kaiseki-morimoto",
    image: '/images/kaiseki-morimoto1.png'
  },
  {
    name: "Kappo Risuke",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/nara/nara/kappo-risuke",
    image: '/images/kappo-risuke1.png'
  },
  {
    name: "Kawanami",
    cuisine: "Japanese",
    price: "¥¥",
    path: "/japan/nara/nara/kawanami",
    image: '/images/kawanami1.png'
  },
  {
    name: "Kiminami",
    cuisine: "Soba",
    price: "¥",
    path: "/japan/nara/nara/kiminami",
    image: '/images/kiminami1.png'
  },
  {
    name: "Kiyosuminosato AWA",
    cuisine: "Japanese",
    price: "¥¥",
    path: "/japan/nara/nara/kiyosuminosato-awa",
    image: '/images/kiyosuminosato-awa1.png'
  },
  {
    name: "KOHYAMA",
    cuisine: "Japanese",
    price: "¥¥",
    path: "/japan/nara/nara/kohyama",
    image: '/images/kohyama1.png'
  },
  {
    name: "Koikiryori Aji Manso",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/nara/nara/koikiryori-aji-manso",
    image: '/images/koikiryori-aji-manso1.png'
  },
  {
    name: "KOMFORTA",
    cuisine: "Italian",
    price: "¥¥",
    path: "/japan/nara/nara/komforta",
    image: '/images/komforta1.png'
  },
  {
    name: "Kuramoto Ryori Maruto Shoyu",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/nara/nara/kuramoto-ryori-maruto-shoyu",
    image: '/images/kuramoto-ryori-maruto-shoyu1.png'
  },
  {
    name: "Kushizukushi",
    cuisine: "Kushiage",
    price: "¥",
    path: "/japan/nara/nara/kushizukushi",
    image: '/images/kushizukushi1.png'
  },
  {
    name: "La Cachette",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/nara/nara/la-cachette",
    image: '/images/la-cachette1.png'
  },
  {
    name: "la forme d'éternité",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/nara/nara/la-forme-dternit",
    image: '/images/la-forme-dternit1.png'
  },
  {
    name: "LA PIE",
    cuisine: "French",
    price: "¥¥",
    path: "/japan/nara/nara/la-pie",
    image: '/images/la-pie1.png'
  },
  {
    name: "La Terrasse irisée",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/nara/nara/la-terrasse-irise",
    image: '/images/la-terrasse-irise1.png'
  },
  {
    name: "La Terrasse",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/nara/nara/la-terrasse",
    image: '/images/la-terrasse1.png'
  },
  {
    name: "LA TRACE",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/nara/nara/la-trace",
    image: '/images/la-trace1.png'
  },
  {
    name: "Le Bois",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/nara/nara/le-bois",
    image: '/images/le-bois1.png'
  },
  {
    name: "le content",
    cuisine: "French",
    price: "¥¥",
    path: "/japan/nara/nara/le-content",
    image: '/images/le-content1.png'
  },
  {
    name: "LE UN",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/nara/nara/le-un",
    image: '/images/le-un1.png'
  },
  {
    name: "Lega'",
    cuisine: "Italian",
    price: "¥¥",
    path: "/japan/nara/nara/lega",
    image: '/images/lega1.png'
  },
  {
    name: "Masala an TAKUMI",
    cuisine: "Indian",
    price: "¥¥",
    path: "/japan/nara/nara/masala-an-takumi",
    image: '/images/masala-an-takumi1.png'
  },
  {
    name: "Matsuki",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/nara/nara/matsuki",
    image: '/images/matsuki1.png'
  },
  {
    name: "Musoan",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/nara/nara/musoan",
    image: '/images/musoan1.png'
  },
  {
    name: "nakamuraya",
    cuisine: "Italian",
    price: "¥¥",
    path: "/japan/nara/nara/nakamuraya",
    image: '/images/nakamuraya1.png'
  },
  {
    name: "NARA NIKON",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/nara/nara/nara-nikon",
    image: '/images/nara-nikon1.png'
  },
  {
    name: "Naramachi Kuko",
    cuisine: "Chinese",
    price: "¥¥¥",
    path: "/japan/nara/nara/naramachi-kuko",
    image: '/images/naramachi-kuko1.png'
  },
  {
    name: "Naramachi Sushi Hanako",
    cuisine: "Sushi",
    price: "¥¥",
    path: "/japan/nara/nara/naramachi-sushi-hanako",
    image: '/images/naramachi-sushi-hanako1.png'
  },
  {
    name: "Nidaime Izumosoba Dandan",
    cuisine: "Soba",
    price: "¥¥",
    path: "/japan/nara/nara/nidaime-izumosoba-dandan",
    image: '/images/nidaime-izumosoba-dandan1.png'
  },
  {
    name: "Nikutoieba Matsuda",
    cuisine: "Beef",
    price: "¥¥",
    path: "/japan/nara/nara/nikutoieba-matsuda",
    image: '/images/nikutoieba-matsuda1.png'
  },
  {
    name: "Noto Toto Teuchisoba Tabiki",
    cuisine: "Soba",
    price: "¥",
    path: "/japan/nara/nara/noto-toto-teuchisoba-tabiki",
    image: '/images/noto-toto-teuchisoba-tabiki1.png'
  },
  {
    name: "ocu",
    cuisine: "Italian",
    price: "¥¥",
    path: "/japan/nara/nara/ocu",
    image: '/images/ocu1.png'
  },
  {
    name: "Okada",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/nara/nara/okada",
    image: '/images/okada1.png'
  },
  {
    name: "Oryori Hanagaki",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/nara/nara/oryori-hanagaki",
    image: '/images/oryori-hanagaki1.png'
  },
  {
    name: "Oryori Hirooka",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/nara/nara/oryori-hirooka",
    image: '/images/oryori-hirooka1.png'
  },
  {
    name: "Oryori Honjo",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/nara/nara/oryori-honjo",
    image: '/images/oryori-honjo1.png'
  },
  {
    name: "Oryori Kotan",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/nara/nara/oryori-kotan",
    image: '/images/oryori-kotan1.png'
  },
  {
    name: "Pinot Noir",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/nara/nara/pinot-noir",
    image: '/images/pinot-noir1.png'
  },
  {
    name: "PIZZERIA TRATTORIA MAGAZZINO",
    cuisine: "Pizza",
    price: "¥",
    path: "/japan/nara/nara/pizzeria-trattoria-magazzino",
    image: '/images/pizzeria-trattoria-magazzino1.png'
  },
  {
    name: "à plus",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/nara/nara/plus",
    image: '/images/plus1.png'
  },
  {
    name: "Ristorante L'incontro",
    cuisine: "Italian",
    price: "¥¥",
    path: "/japan/nara/nara/ristorante-lincontro",
    image: '/images/ristorante-lincontro1.png'
  },
  {
    name: "Sanjuhachi",
    cuisine: "Italian",
    price: "¥¥¥",
    path: "/japan/nara/nara/sanjuhachi",
    image: '/images/sanjuhachi1.png'
  },
  {
    name: "Shikinoaji Enzu",
    cuisine: "Japanese",
    price: "¥¥",
    path: "/japan/nara/nara/shikinoaji-enzu",
    image: '/images/shikinoaji-enzu1.png'
  },
  {
    name: "Shikinosushi KROUTO",
    cuisine: "Sushi",
    price: "¥¥¥",
    path: "/japan/nara/nara/shikinosushi-krouto",
    image: '/images/shikinosushi-krouto1.png'
  },
  {
    name: "SHUN-GYO",
    cuisine: "Chinese",
    price: "¥¥¥",
    path: "/japan/nara/nara/shun-gyo",
    image: '/images/shun-gyo1.png'
  },
  {
    name: "Simple comme Bonjour",
    cuisine: "French",
    price: "¥¥",
    path: "/japan/nara/nara/simple-comme-bonjour",
    image: '/images/simple-comme-bonjour1.png'
  },
  {
    name: "SÉN",
    cuisine: "Innovative",
    price: "¥¥¥",
    path: "/japan/nara/nara/sn",
    image: '/images/sn1.png'
  },
  {
    name: "Soba Saishoku Ichinyoan",
    cuisine: "Soba",
    price: "¥¥",
    path: "/japan/nara/nara/soba-saishoku-ichinyoan",
    image: '/images/soba-saishoku-ichinyoan1.png'
  },
  {
    name: "Sosakukushinomise Rindo",
    cuisine: "Kushiage",
    price: "¥¥",
    path: "/japan/nara/nara/sosakukushinomise-rindo",
    image: '/images/sosakukushinomise-rindo1.png'
  },
  {
    name: "Sushi Kawashima",
    cuisine: "Sushi",
    price: "¥¥¥",
    path: "/japan/nara/nara/sushi-kawashima",
    image: '/images/sushi-kawashima1.png'
  },
  {
    name: "Sushidokoro WASABI",
    cuisine: "Sushi",
    price: "¥¥¥",
    path: "/japan/nara/nara/sushidokoro-wasabi",
    image: '/images/sushidokoro-wasabi1.png'
  },
  {
    name: "Tama",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/nara/nara/tama",
    image: '/images/tama1.png'
  },
  {
    name: "Tempura Hattori",
    cuisine: "Tempura",
    price: "¥¥¥",
    path: "/japan/nara/nara/tempura-hattori",
    image: '/images/tempura-hattori1.png'
  },
  {
    name: "toi Inshokuten",
    cuisine: "Indian",
    price: "¥",
    path: "/japan/nara/nara/toi-inshokuten",
    image: '/images/toi-inshokuten1.png'
  },
  {
    name: "Tori Yamaguchi",
    cuisine: "Yakitori",
    price: "¥¥",
    path: "/japan/nara/nara/tori-yamaguchi",
    image: '/images/tori-yamaguchi1.png'
  },
  {
    name: "Tsukumo",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/nara/nara/tsukumo",
    image: '/images/tsukumo1.png'
  },
  {
    name: "Unagino Toyokawa",
    cuisine: "Unagi / Freshwater Eel",
    price: "¥",
    path: "/japan/nara/nara/unagino-toyokawa",
    image: '/images/unagino-toyokawa1.png'
  },
  {
    name: "VILLA COMMUNICO",
    cuisine: "Innovative",
    price: "¥¥¥¥",
    path: "/japan/nara/nara/villa-communico",
    image: '/images/villa-communico1.png'
  },
  {
    name: "Wa Asuka",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/nara/nara/wa-asuka",
    image: '/images/wa-asuka1.png'
  },
  {
    name: "Wa Yamamura",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/nara/nara/wa-yamamura",
    image: '/images/wa-yamamura1.png'
  },
  {
    name: "Yakitori Mochizuki",
    cuisine: "Yakitori",
    price: "¥¥",
    path: "/japan/nara/nara/yakitori-mochizuki",
    image: '/images/yakitori-mochizuki1.png'
  },
  {
    name: "YAMAOKA PIZZA",
    cuisine: "Pizza",
    price: "¥",
    path: "/japan/nara/nara/yamaoka-pizza",
    image: '/images/yamaoka-pizza1.png'
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
