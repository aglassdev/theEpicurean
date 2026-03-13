import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Milan";

const restaurants = [
  {
    name: "28 Posti",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/italy/milan/milan/28-posti",
    image: '/images/28-posti1.png'
  },
  {
    name: "Abba",
    cuisine: "Contemporary, Creative",
    price: "€€",
    path: "/italy/milan/milan/abba",
    image: '/images/abba1.png'
  },
  {
    name: "Acanto",
    cuisine: "Modern Cuisine, International",
    price: "€€€€",
    path: "/italy/milan/milan/acanto",
    image: '/images/acanto1.png'
  },
  {
    name: "Aimo e Nadia BistRo",
    cuisine: "Italian Contemporary",
    price: "€€€",
    path: "/italy/milan/milan/aimo-e-nadia-bistro",
    image: '/images/aimo-e-nadia-bistro1.png'
  },
  {
    name: "Altatto Bistrot",
    cuisine: "Vegetarian, Contemporary",
    price: "€€",
    path: "/italy/milan/milan/altatto-bistrot",
    image: '/images/altatto-bistrot1.png'
  },
  {
    name: "Altriménti",
    cuisine: "Modern Cuisine, Seasonal Cuisine",
    price: "€€",
    path: "/italy/milan/milan/altrimnti",
    image: '/images/altrimnti1.png'
  },
  {
    name: "Andrea Aprea",
    cuisine: "Italian Contemporary, Creative",
    price: "€€€€",
    path: "/italy/milan/milan/andrea-aprea",
    image: '/images/andrea-aprea1.png'
  },
  {
    name: "Anima",
    cuisine: "Contemporary, Creative",
    price: "€€€€",
    path: "/italy/milan/milan/anima",
    image: '/images/anima1.png'
  },
  {
    name: "Antica Osteria del Mare",
    cuisine: "Seafood, Mediterranean Cuisine",
    price: "€€",
    path: "/italy/milan/milan/antica-osteria-del-mare",
    image: '/images/antica-osteria-del-mare1.png'
  },
  {
    name: "Antica Osteria il Ronchettino",
    cuisine: "Milanese, Lombardian",
    price: "€€",
    path: "/italy/milan/milan/antica-osteria-il-ronchettino",
    image: '/images/antica-osteria-il-ronchettino1.png'
  },
  {
    name: "Armani/Ristorante",
    cuisine: "Italian Contemporary, Asian Influences",
    price: "€€€€",
    path: "/italy/milan/milan/armaniristorante",
    image: '/images/armaniristorante1.png'
  },
  {
    name: "Autem*",
    cuisine: "Farm to table, Modern Cuisine",
    price: "€€€",
    path: "/italy/milan/milan/autem",
    image: '/images/autem1.png'
  },
  {
    name: "Ba Restaurant",
    cuisine: "Chinese, Asian Contemporary",
    price: "€€€",
    path: "/italy/milan/milan/ba-restaurant",
    image: '/images/ba-restaurant1.png'
  },
  {
    name: "Belé",
    cuisine: "Italian Contemporary",
    price: "€€",
    path: "/italy/milan/milan/bel",
    image: '/images/bel1.png'
  },
  {
    name: "Bentōteca",
    cuisine: "Fusion, Asian Contemporary",
    price: "€€€",
    path: "/italy/milan/milan/bentteca",
    image: '/images/bentteca1.png'
  },
  {
    name: "Berton",
    cuisine: "Italian Contemporary, Creative",
    price: "€€€€",
    path: "/italy/milan/milan/berton",
    image: '/images/berton1.png'
  },
  {
    name: "Bites",
    cuisine: "International, Small eats",
    price: "€€€",
    path: "/italy/milan/milan/bites",
    image: '/images/bites1.png'
  },
  {
    name: "Bon Wei",
    cuisine: "Chinese, Asian",
    price: "€€",
    path: "/italy/milan/milan/bon-wei",
    image: '/images/bon-wei1.png'
  },
  {
    name: "Borgia Milano",
    cuisine: "Contemporary, Creative",
    price: "€€€",
    path: "/italy/milan/milan/borgia-milano",
    image: '/images/borgia-milano1.png'
  },
  {
    name: "Bottega Lucia",
    cuisine: "Contemporary",
    price: "€€",
    path: "/italy/milan/milan/bottega-lucia",
    image: '/images/bottega-lucia1.png'
  },
  {
    name: "[bu:r]",
    cuisine: "Creative, International",
    price: "€€€€",
    path: "/italy/milan/milan/bur",
    image: '/images/bur1.png'
  },
  {
    name: "Café Cracco",
    cuisine: "Classic Cuisine, Italian",
    price: "€€€",
    path: "/italy/milan/milan/caf-cracco",
    image: '/images/caf-cracco1.png'
  },
  {
    name: "Casa Camperio",
    cuisine: "Italian Contemporary, Japanese",
    price: "€€€",
    path: "/italy/milan/milan/casa-camperio",
    image: '/images/casa-camperio1.png'
  },
  {
    name: "Ceresio 7",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/italy/milan/milan/ceresio-7",
    image: '/images/ceresio-71.png'
  },
  {
    name: "Contraste",
    cuisine: "Modern Cuisine, Innovative",
    price: "€€€€",
    path: "/italy/milan/milan/contraste",
    image: '/images/contraste1.png'
  },
  {
    name: "Cracco in Galleria",
    cuisine: "Modern Cuisine, Contemporary",
    price: "€€€€",
    path: "/italy/milan/milan/cracco-in-galleria",
    image: '/images/cracco-in-galleria1.png'
  },
  {
    name: "Da Giannino - L'Angolo d'Abruzzo",
    cuisine: "Cuisine from Abruzzo, Traditional Cuisine",
    price: "€€",
    path: "/italy/milan/milan/da-giannino-langolo-dabruzzo",
    image: '/images/da-giannino-langolo-dabruzzo1.png'
  },
  {
    name: "DanielCanzian",
    cuisine: "Italian Contemporary, Venetian",
    price: "€€€",
    path: "/italy/milan/milan/danielcanzian",
    image: '/images/danielcanzian1.png'
  },
  {
    name: "DaV by Da Vittorio Louis Vuitton",
    cuisine: "Italian Contemporary, Seasonal Cuisine",
    price: "€€€€",
    path: "/italy/milan/milan/dav-by-da-vittorio-louis-vuitton",
    image: '/images/dav-by-da-vittorio-louis-vuitton1.png'
  },
  {
    name: "Dim Sum",
    cuisine: "Cantonese, Contemporary",
    price: "€€€",
    path: "/italy/milan/milan/dim-sum",
    image: '/images/dim-sum1.png'
  },
  {
    name: "Don Carlos",
    cuisine: "Modern Cuisine, Milanese",
    price: "€€€€",
    path: "/italy/milan/milan/don-carlos",
    image: '/images/don-carlos1.png'
  },
  {
    name: "Dongiò",
    cuisine: "Calabrian, Traditional Cuisine",
    price: "€",
    path: "/italy/milan/milan/dongi",
    image: '/images/dongi1.png'
  },
  {
    name: "Dry Aged",
    cuisine: "Contemporary, Grills",
    price: "€€",
    path: "/italy/milan/milan/dry-aged",
    image: '/images/dry-aged1.png'
  },
  {
    name: "Enrico Bartolini al Mudec",
    cuisine: "Creative",
    price: "€€€€",
    path: "/italy/milan/milan/enrico-bartolini-al-mudec",
    image: '/images/enrico-bartolini-al-mudec1.png'
  },
  {
    name: "Finger's Garden",
    cuisine: "Fusion, Asian Contemporary",
    price: "€€€",
    path: "/italy/milan/milan/fingers-garden",
    image: '/images/fingers-garden1.png'
  },
  {
    name: "Fourghetti",
    cuisine: "Contemporary, Seasonal Cuisine",
    price: "€€€",
    path: "/italy/milan/milan/fourghetti",
    image: '/images/fourghetti1.png'
  },
  {
    name: "Frades Porto Cervo",
    cuisine: "Sardinian, Modern Cuisine",
    price: "€€€",
    path: "/italy/milan/milan/frades-porto-cervo",
    image: '/images/frades-porto-cervo1.png'
  },
  {
    name: "Giannino dal 1899",
    cuisine: "Italian Contemporary, Milanese",
    price: "€€€",
    path: "/italy/milan/milan/giannino-dal-1899",
    image: '/images/giannino-dal-18991.png'
  },
  {
    name: "Gong",
    cuisine: "Chinese, Asian Contemporary",
    price: "€€€€",
    path: "/italy/milan/milan/gong",
    image: '/images/gong1.png'
  },
  {
    name: "Hazama",
    cuisine: "Japanese, Classic Cuisine",
    price: "€€€€",
    path: "/italy/milan/milan/hazama",
    image: '/images/hazama1.png'
  },
  {
    name: "Horto",
    cuisine: "Modern Cuisine, Organic",
    price: "€€€€",
    path: "/italy/milan/milan/horto",
    image: '/images/horto1.png'
  },
  {
    name: "Ichikawa",
    cuisine: "Japanese, Asian",
    price: "€€€",
    path: "/italy/milan/milan/ichikawa",
    image: '/images/ichikawa1.png'
  },
  {
    name: "Il Cairoli",
    cuisine: "Milanese, Seasonal Cuisine",
    price: "€€",
    path: "/italy/milan/milan/il-cairoli",
    image: '/images/il-cairoli1.png'
  },
  {
    name: "Il Capestrano",
    cuisine: "Cuisine from Abruzzo",
    price: "€€",
    path: "/italy/milan/milan/il-capestrano",
    image: '/images/il-capestrano1.png'
  },
  {
    name: "Il Liberty",
    cuisine: "Creative, Contemporary",
    price: "€€€",
    path: "/italy/milan/milan/il-liberty",
    image: '/images/il-liberty1.png'
  },
  {
    name: "Il Luogo Aimo e Nadia",
    cuisine: "Italian Contemporary, Modern Cuisine",
    price: "€€€€",
    path: "/italy/milan/milan/il-luogo-aimo-e-nadia",
    image: '/images/il-luogo-aimo-e-nadia1.png'
  },
  {
    name: "Il Marchese - Osteria Mercato Liquori",
    cuisine: "Roman, Italian",
    price: "€€€",
    path: "/italy/milan/milan/il-marchese-osteria-mercato-liquori",
    image: '/images/il-marchese-osteria-mercato-liquori1.png'
  },
  {
    name: "Il Ristorante - Niko Romito",
    cuisine: "Italian Contemporary",
    price: "€€€€",
    path: "/italy/milan/milan/il-ristorante-niko-romito",
    image: '/images/il-ristorante-niko-romito1.png'
  },
  {
    name: "InGalera",
    cuisine: "Classic Cuisine, Italian",
    price: "€€",
    path: "/italy/milan/milan/ingalera",
    image: '/images/ingalera1.png'
  },
  {
    name: "Innocenti Evasioni",
    cuisine: "Modern Cuisine, Mediterranean Cuisine",
    price: "€€€",
    path: "/italy/milan/milan/innocenti-evasioni",
    image: '/images/innocenti-evasioni1.png'
  },
  {
    name: "Iyo",
    cuisine: "Japanese, Asian Contemporary",
    price: "€€€€",
    path: "/italy/milan/milan/iyo",
    image: '/images/iyo1.png'
  },
  {
    name: "Iyo Kaiseki",
    cuisine: "Japanese, Sushi",
    price: "€€€",
    path: "/italy/milan/milan/iyo-kaiseki",
    image: '/images/iyo-kaiseki1.png'
  },
  {
    name: "Izu",
    cuisine: "Japanese Contemporary, Fusion",
    price: "€€€",
    path: "/italy/milan/milan/izu",
    image: '/images/izu1.png'
  },
  {
    name: "Joia",
    cuisine: "Vegetarian, Seasonal Cuisine",
    price: "€€€€",
    path: "/italy/milan/milan/joia",
    image: '/images/joia1.png'
  },
  {
    name: "La Cantina di Manuela",
    cuisine: "Classic Cuisine",
    price: "€€",
    path: "/italy/milan/milan/la-cantina-di-manuela",
    image: '/images/la-cantina-di-manuela1.png'
  },
  {
    name: "La Cucina de' Mibabbo",
    cuisine: "Tuscan, Meats and Grills",
    price: "€€",
    path: "/italy/milan/milan/la-cucina-de-mibabbo",
    image: '/images/la-cucina-de-mibabbo1.png'
  },
  {
    name: "La Cucina dei Frigoriferi Milanesi",
    cuisine: "Modern Cuisine",
    price: "€",
    path: "/italy/milan/milan/la-cucina-dei-frigoriferi-milanesi",
    image: '/images/la-cucina-dei-frigoriferi-milanesi1.png'
  },
  {
    name: "La Risacca Blu",
    cuisine: "Seafood",
    price: "€€€",
    path: "/italy/milan/milan/la-risacca-blu",
    image: '/images/la-risacca-blu1.png'
  },
  {
    name: "La Rosa dei Venti",
    cuisine: "Seafood",
    price: "€€",
    path: "/italy/milan/milan/la-rosa-dei-venti",
    image: '/images/la-rosa-dei-venti1.png'
  },
  {
    name: "La Società Milano",
    cuisine: "Modern Cuisine, Seasonal Cuisine",
    price: "€€€",
    path: "/italy/milan/milan/la-societ-milano",
    image: '/images/la-societ-milano1.png'
  },
  {
    name: "L’Alchimia",
    cuisine: "Modern Cuisine, Italian Contemporary",
    price: "€€€",
    path: "/italy/milan/milan/lalchimia",
    image: '/images/lalchimia1.png'
  },
  {
    name: "Langosteria",
    cuisine: "Seafood, Classic Cuisine",
    price: "€€€€",
    path: "/italy/milan/milan/langosteria",
    image: '/images/langosteria1.png'
  },
  {
    name: "Le Nove Scodelle",
    cuisine: "Chinese, Sichuan",
    price: "€",
    path: "/italy/milan/milan/le-nove-scodelle",
    image: '/images/le-nove-scodelle1.png'
  },
  {
    name: "Locanda Perbellini",
    cuisine: "Italian",
    price: "€€",
    path: "/italy/milan/milan/locanda-perbellini",
    image: '/images/locanda-perbellini1.png'
  },
  {
    name: "Manna",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/italy/milan/milan/manna",
    image: '/images/manna1.png'
  },
  {
    name: "Mater Bistrot",
    cuisine: "Modern Cuisine, Seasonal Cuisine",
    price: "€€",
    path: "/italy/milan/milan/mater-bistrot",
    image: '/images/mater-bistrot1.png'
  },
  {
    name: "Moebius Sperimentale",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€€",
    path: "/italy/milan/milan/moebius-sperimentale",
    image: '/images/moebius-sperimentale1.png'
  },
  {
    name: "Morelli",
    cuisine: "Creative",
    price: "€€€",
    path: "/italy/milan/milan/morelli",
    image: '/images/morelli1.png'
  },
  {
    name: "Motelombroso",
    cuisine: "Modern Cuisine, Creative",
    price: "€€€",
    path: "/italy/milan/milan/motelombroso",
    image: '/images/motelombroso1.png'
  },
  {
    name: "MU Dimsum",
    cuisine: "Chinese Contemporary, Cantonese",
    price: "€€",
    path: "/italy/milan/milan/mu-dimsum",
    image: '/images/mu-dimsum1.png'
  },
  {
    name: "Nobuya",
    cuisine: "Japanese Contemporary, Modern Cuisine",
    price: "€€€",
    path: "/italy/milan/milan/nobuya",
    image: '/images/nobuya1.png'
  },
  {
    name: "Osaka",
    cuisine: "Japanese, Traditional Cuisine",
    price: "€€€",
    path: "/italy/milan/milan/osaka",
    image: '/images/osaka1.png'
  },
  {
    name: "Pacifico",
    cuisine: "Peruvian, Asian Influences",
    price: "€€€",
    path: "/italy/milan/milan/pacifico",
    image: '/images/pacifico1.png'
  },
  {
    name: "Pellico 3",
    cuisine: "Modern Cuisine, Creative",
    price: "€€€€",
    path: "/italy/milan/milan/pellico-3",
    image: '/images/pellico-31.png'
  },
  {
    name: "Procaccini",
    cuisine: "Modern Cuisine, Contemporary",
    price: "€€€€",
    path: "/italy/milan/milan/procaccini",
    image: '/images/procaccini1.png'
  },
  {
    name: "Quadri Bistrot",
    cuisine: "Modern Cuisine, Contemporary",
    price: "€€",
    path: "/italy/milan/milan/quadri-bistrot",
    image: '/images/quadri-bistrot1.png'
  },
  {
    name: "Ratanà",
    cuisine: "Italian, Classic Cuisine",
    price: "€€",
    path: "/italy/milan/milan/ratan",
    image: '/images/ratan1.png'
  },
  {
    name: "Remulass",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/italy/milan/milan/remulass",
    image: '/images/remulass1.png'
  },
  {
    name: "Rovello",
    cuisine: "Italian, Classic Cuisine",
    price: "€€€",
    path: "/italy/milan/milan/rovello",
    image: '/images/rovello1.png'
  },
  {
    name: "Sadler",
    cuisine: "Italian, Creative",
    price: "€€€€",
    path: "/italy/milan/milan/sadler",
    image: '/images/sadler1.png'
  },
  {
    name: "Serendib",
    cuisine: "Indian, Asian",
    price: "€",
    path: "/italy/milan/milan/serendib",
    image: '/images/serendib1.png'
  },
  {
    name: "Seta by Antonio Guida",
    cuisine: "International, Contemporary",
    price: "€€€€",
    path: "/italy/milan/milan/seta-by-antonio-guida",
    image: '/images/seta-by-antonio-guida1.png'
  },
  {
    name: "Sine by Di Pinto",
    cuisine: "Italian Contemporary",
    price: "€€€",
    path: "/italy/milan/milan/sine-by-di-pinto",
    image: '/images/sine-by-di-pinto1.png'
  },
  {
    name: "Tano Passami l'Olio",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€€",
    path: "/italy/milan/milan/tano-passami-lolio",
    image: '/images/tano-passami-lolio1.png'
  },
  {
    name: "Terrazza Gallia",
    cuisine: "Italian Contemporary",
    price: "€€€€",
    path: "/italy/milan/milan/terrazza-gallia",
    image: '/images/terrazza-gallia1.png'
  },
  {
    name: "The View Milano",
    cuisine: "Italian Contemporary, Milanese",
    price: "€€€€",
    path: "/italy/milan/milan/the-view-milano",
    image: '/images/the-view-milano1.png'
  },
  {
    name: "Trattoria del Nuovo Macello",
    cuisine: "Lombardian, Modern Cuisine",
    price: "€€",
    path: "/italy/milan/milan/trattoria-del-nuovo-macello",
    image: '/images/trattoria-del-nuovo-macello1.png'
  },
  {
    name: "Trippa",
    cuisine: "Italian, Seasonal Cuisine",
    price: "€€",
    path: "/italy/milan/milan/trippa",
    image: '/images/trippa1.png'
  },
  {
    name: "Un Posto a Milano",
    cuisine: "Farm to table, Italian Contemporary",
    price: "€€",
    path: "/italy/milan/milan/un-posto-a-milano",
    image: '/images/un-posto-a-milano1.png'
  },
  {
    name: "uovodiseppia Milano",
    cuisine: "Mediterranean Cuisine, Sicilian",
    price: "€€€",
    path: "/italy/milan/milan/uovodiseppia-milano",
    image: '/images/uovodiseppia-milano1.png'
  },
  {
    name: "Verso Capitaneo",
    cuisine: "Creative, Mediterranean Cuisine",
    price: "€€€€",
    path: "/italy/milan/milan/verso-capitaneo",
    image: '/images/verso-capitaneo1.png'
  },
  {
    name: "Voce Aimo e Nadia",
    cuisine: "Italian Contemporary",
    price: "€€€€",
    path: "/italy/milan/milan/voce-aimo-e-nadia",
    image: '/images/voce-aimo-e-nadia1.png'
  },
  {
    name: "Waby",
    cuisine: "Asian, Japanese Contemporary",
    price: "€€€",
    path: "/italy/milan/milan/waby",
    image: '/images/waby1.png'
  },
  {
    name: "Wicky's Innovative Japanese Cuisine",
    cuisine: "Japanese, Asian Contemporary",
    price: "€€€",
    path: "/italy/milan/milan/wickys-innovative-japanese-cuisine",
    image: '/images/wickys-innovative-japanese-cuisine1.png'
  },
  {
    name: "ZELO",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/italy/milan/milan/zelo",
    image: '/images/zelo1.png'
  },
  {
    name: "Zero Milano",
    cuisine: "Japanese, Fusion",
    price: "€€€",
    path: "/italy/milan/milan/zero-milano",
    image: '/images/zero-milano1.png'
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
