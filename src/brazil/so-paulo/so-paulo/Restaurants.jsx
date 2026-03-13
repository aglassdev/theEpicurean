import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "So Paulo";

const restaurants = [
  {
    name: "A Baianeira",
    cuisine: "Brazilian",
    price: "$",
    path: "/brazil/so-paulo/so-paulo/a-baianeira",
    image: '/images/a-baianeira1.png'
  },
  {
    name: "A Baianeira - MASP",
    cuisine: "Brazilian",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/a-baianeira-masp",
    image: '/images/a-baianeira-masp1.png'
  },
  {
    name: "A Casa do Porco",
    cuisine: "Pork, Brazilian",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/a-casa-do-porco",
    image: '/images/a-casa-do-porco1.png'
  },
  {
    name: "A Figueira Rubaiyat",
    cuisine: "Meats and Grills",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/a-figueira-rubaiyat",
    image: '/images/a-figueira-rubaiyat1.png'
  },
  {
    name: "AE! Cozinha",
    cuisine: "Brazilian",
    price: "$",
    path: "/brazil/so-paulo/so-paulo/ae-cozinha",
    image: '/images/ae-cozinha1.png'
  },
  {
    name: "Aiô",
    cuisine: "Taiwanese",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/ai",
    image: '/images/ai1.png'
  },
  {
    name: "Amadeus",
    cuisine: "Seafood",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/amadeus",
    image: '/images/amadeus1.png'
  },
  {
    name: "Ama.zo - Cozinha Peruana",
    cuisine: "Peruvian, Farm to table",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/amazo-cozinha-peruana",
    image: '/images/amazo-cozinha-peruana1.png'
  },
  {
    name: "Ama.zo - Pátio Higienópolis",
    cuisine: "Peruvian",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/amazo-ptio-higienpolis",
    image: '/images/amazo-ptio-higienpolis1.png'
  },
  {
    name: "Animus",
    cuisine: "Modern Cuisine",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/animus",
    image: '/images/animus1.png'
  },
  {
    name: "Aya Japanese Cuisine",
    cuisine: "Japanese",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/aya-japanese-cuisine",
    image: '/images/aya-japanese-cuisine1.png'
  },
  {
    name: "Balaio IMS",
    cuisine: "Brazilian",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/balaio-ims",
    image: '/images/balaio-ims1.png'
  },
  {
    name: "Banzeiro",
    cuisine: "Brazilian",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/banzeiro",
    image: '/images/banzeiro1.png'
  },
  {
    name: "Barú Marisquería",
    cuisine: "Seafood",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/bar-marisquera",
    image: '/images/bar-marisquera1.png'
  },
  {
    name: "Bicol Korean Cuisine",
    cuisine: "Korean",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/bicol-korean-cuisine",
    image: '/images/bicol-korean-cuisine1.png'
  },
  {
    name: "Bistrot de Paris",
    cuisine: "French",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/bistrot-de-paris",
    image: '/images/bistrot-de-paris1.png'
  },
  {
    name: "Blaise",
    cuisine: "French Contemporary, South American",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/blaise",
    image: '/images/blaise1.png'
  },
  {
    name: "Borgo Mooca",
    cuisine: "Italian",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/borgo-mooca",
    image: '/images/borgo-mooca1.png'
  },
  {
    name: "Brasserie Victória",
    cuisine: "Lebanese",
    price: "$",
    path: "/brazil/so-paulo/so-paulo/brasserie-victria",
    image: '/images/brasserie-victria1.png'
  },
  {
    name: "Cais",
    cuisine: "Seafood",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/cais",
    image: '/images/cais1.png'
  },
  {
    name: "Cala del Tanit",
    cuisine: "Mediterranean Cuisine",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/cala-del-tanit",
    image: '/images/cala-del-tanit1.png'
  },
  {
    name: "Cantaloup",
    cuisine: "International",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/cantaloup",
    image: '/images/cantaloup1.png'
  },
  {
    name: "Capim Santo",
    cuisine: "Traditional Cuisine",
    price: "$",
    path: "/brazil/so-paulo/so-paulo/capim-santo",
    image: '/images/capim-santo1.png'
  },
  {
    name: "Casa Rios",
    cuisine: "Brazilian, Contemporary",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/casa-rios",
    image: '/images/casa-rios1.png'
  },
  {
    name: "Casa Santo Antônio",
    cuisine: "Italian",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/casa-santo-antnio",
    image: '/images/casa-santo-antnio1.png'
  },
  {
    name: "Cepa",
    cuisine: "Contemporary, Farm to table",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/cepa",
    image: '/images/cepa1.png'
  },
  {
    name: "Charco",
    cuisine: "Brazilian, Grills",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/charco",
    image: '/images/charco1.png'
  },
  {
    name: "Chef Rouge",
    cuisine: "French",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/chef-rouge",
    image: '/images/chef-rouge1.png'
  },
  {
    name: "Chez Claude São Paulo",
    cuisine: "Modern French",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/chez-claude-so-paulo",
    image: '/images/chez-claude-so-paulo1.png'
  },
  {
    name: "Clandestina",
    cuisine: "Contemporary",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/clandestina",
    image: '/images/clandestina1.png'
  },
  {
    name: "Cora",
    cuisine: "Brazilian, Farm to table",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/cora",
    image: '/images/cora1.png'
  },
  {
    name: "Corrutela",
    cuisine: "Seasonal Cuisine, Farm to table",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/corrutela",
    image: '/images/corrutela1.png'
  },
  {
    name: "Cuia",
    cuisine: "Creative",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/cuia",
    image: '/images/cuia1.png'
  },
  {
    name: "De Segunda",
    cuisine: "Brazilian",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/de-segunda",
    image: '/images/de-segunda1.png'
  },
  {
    name: "Dinho's",
    cuisine: "Meats and Grills",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/dinhos",
    image: '/images/dinhos1.png'
  },
  {
    name: "D.O.M.",
    cuisine: "Creative",
    price: "$$$$",
    path: "/brazil/so-paulo/so-paulo/dom",
    image: '/images/dom1.png'
  },
  {
    name: "Ecully",
    cuisine: "International",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/ecully",
    image: '/images/ecully1.png'
  },
  {
    name: "El Tranvia - Itaim Bibi",
    cuisine: "Meats and Grills",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/el-tranvia-itaim-bibi",
    image: '/images/el-tranvia-itaim-bibi1.png'
  },
  {
    name: "Emiliano",
    cuisine: "International",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/emiliano",
    image: '/images/emiliano1.png'
  },
  {
    name: "Evvai",
    cuisine: "Modern Cuisine, Brazilian",
    price: "$$$$",
    path: "/brazil/so-paulo/so-paulo/evvai",
    image: '/images/evvai1.png'
  },
  {
    name: "Fame Osteria",
    cuisine: "Italian Contemporary",
    price: "$$$$",
    path: "/brazil/so-paulo/so-paulo/fame-osteria",
    image: '/images/fame-osteria1.png'
  },
  {
    name: "Fasano",
    cuisine: "Italian",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/fasano",
    image: '/images/fasano1.png'
  },
  {
    name: "Fasano Trattoria",
    cuisine: "Italian",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/fasano-trattoria",
    image: '/images/fasano-trattoria1.png'
  },
  {
    name: "Fitó",
    cuisine: "Brazilian",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/fit",
    image: '/images/fit1.png'
  },
  {
    name: "Fogo de Chão",
    cuisine: "Meats and Grills",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/fogo-de-cho",
    image: '/images/fogo-de-cho1.png'
  },
  {
    name: "Giulietta Carni",
    cuisine: "Meats and Grills, Italian",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/giulietta-carni",
    image: '/images/giulietta-carni1.png'
  },
  {
    name: "Goya Zushi",
    cuisine: "Japanese",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/goya-zushi",
    image: '/images/goya-zushi1.png'
  },
  {
    name: "Huto",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/brazil/so-paulo/so-paulo/huto",
    image: '/images/huto1.png'
  },
  {
    name: "Jacó",
    cuisine: "Contemporary, Modern Cuisine",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/jac",
    image: '/images/jac1.png'
  },
  {
    name: "Jamile",
    cuisine: "Brazilian",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/jamile",
    image: '/images/jamile1.png'
  },
  {
    name: "Jiquitaia",
    cuisine: "Brazilian",
    price: "$",
    path: "/brazil/so-paulo/so-paulo/jiquitaia",
    image: '/images/jiquitaia1.png'
  },
  {
    name: "Jun Sakamoto",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/brazil/so-paulo/so-paulo/jun-sakamoto",
    image: '/images/jun-sakamoto1.png'
  },
  {
    name: "Kan Suke",
    cuisine: "Japanese",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/kan-suke",
    image: '/images/kan-suke1.png'
  },
  {
    name: "KANOE",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/brazil/so-paulo/so-paulo/kanoe",
    image: '/images/kanoe1.png'
  },
  {
    name: "Kazuo",
    cuisine: "Asian Influences",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/kazuo",
    image: '/images/kazuo1.png'
  },
  {
    name: "Kinoshita",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/brazil/so-paulo/so-paulo/kinoshita",
    image: '/images/kinoshita1.png'
  },
  {
    name: "Komah",
    cuisine: "Korean",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/komah",
    image: '/images/komah1.png'
  },
  {
    name: "Kosushi",
    cuisine: "Japanese",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/kosushi",
    image: '/images/kosushi1.png'
  },
  {
    name: "Kotori",
    cuisine: "Japanese",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/kotori",
    image: '/images/kotori1.png'
  },
  {
    name: "Kubo Zushi",
    cuisine: "Japanese",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/kubo-zushi",
    image: '/images/kubo-zushi1.png'
  },
  {
    name: "Kuro",
    cuisine: "Japanese",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/kuro",
    image: '/images/kuro1.png'
  },
  {
    name: "Lassù",
    cuisine: "Italian Contemporary",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/lass",
    image: '/images/lass1.png'
  },
  {
    name: "Le Bife",
    cuisine: "Meats and Grills",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/le-bife",
    image: '/images/le-bife1.png'
  },
  {
    name: "Le Jardin",
    cuisine: "International",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/le-jardin",
    image: '/images/le-jardin1.png'
  },
  {
    name: "Les Présidents",
    cuisine: "French",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/les-prsidents",
    image: '/images/les-prsidents1.png'
  },
  {
    name: "Loup",
    cuisine: "International",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/loup",
    image: '/images/loup1.png'
  },
  {
    name: "Maní",
    cuisine: "Creative, Brazilian",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/man",
    image: '/images/man1.png'
  },
  {
    name: "Manioca",
    cuisine: "Modern Cuisine",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/manioca",
    image: '/images/manioca1.png'
  },
  {
    name: "Manioca da Mata",
    cuisine: "Modern Cuisine",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/manioca-da-mata",
    image: '/images/manioca-da-mata1.png'
  },
  {
    name: "Marena Cucina",
    cuisine: "Italian",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/marena-cucina",
    image: '/images/marena-cucina1.png'
  },
  {
    name: "Maza",
    cuisine: "Japanese",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/maza",
    image: '/images/maza1.png'
  },
  {
    name: "Metzi",
    cuisine: "Mexican",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/metzi",
    image: '/images/metzi1.png'
  },
  {
    name: "Mocotó Vila Leopoldina",
    cuisine: "Brazilian",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/mocot-vila-leopoldina",
    image: '/images/mocot-vila-leopoldina1.png'
  },
  {
    name: "Mocotó Vila Medeiros",
    cuisine: "Brazilian",
    price: "$",
    path: "/brazil/so-paulo/so-paulo/mocot-vila-medeiros",
    image: '/images/mocot-vila-medeiros1.png'
  },
  {
    name: "Mondo",
    cuisine: "Italian",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/mondo",
    image: '/images/mondo1.png'
  },
  {
    name: "Murakami",
    cuisine: "Japanese Contemporary",
    price: "$$$$",
    path: "/brazil/so-paulo/so-paulo/murakami",
    image: '/images/murakami1.png'
  },
  {
    name: "Naga",
    cuisine: "Japanese",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/naga",
    image: '/images/naga1.png'
  },
  {
    name: "Nelita",
    cuisine: "Modern Cuisine",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/nelita",
    image: '/images/nelita1.png'
  },
  {
    name: "NOMO",
    cuisine: "Contemporary",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/nomo",
    image: '/images/nomo1.png'
  },
  {
    name: "NOTIÊ",
    cuisine: "Brazilian, Modern Cuisine",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/noti",
    image: '/images/noti1.png'
  },
  {
    name: "Oizumi Sushi",
    cuisine: "Japanese, Sushi",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/oizumi-sushi",
    image: '/images/oizumi-sushi1.png'
  },
  {
    name: "Osso",
    cuisine: "Meats and Grills",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/osso",
    image: '/images/osso1.png'
  },
  {
    name: "Paparoto Cucina",
    cuisine: "Italian, Brazilian",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/paparoto-cucina",
    image: '/images/paparoto-cucina1.png'
  },
  {
    name: "Petí Gastronomia",
    cuisine: "Modern Cuisine",
    price: "$",
    path: "/brazil/so-paulo/so-paulo/pet-gastronomia",
    image: '/images/pet-gastronomia1.png'
  },
  {
    name: "Più Higienópolis",
    cuisine: "Italian, Creative",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/pi-higienpolis",
    image: '/images/pi-higienpolis1.png'
  },
  {
    name: "Più Pinheiros",
    cuisine: "Italian",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/pi-pinheiros",
    image: '/images/pi-pinheiros1.png'
  },
  {
    name: "Picchi",
    cuisine: "Italian",
    price: "$$$$",
    path: "/brazil/so-paulo/so-paulo/picchi",
    image: '/images/picchi1.png'
  },
  {
    name: "Piselli",
    cuisine: "Italian",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/piselli",
    image: '/images/piselli1.png'
  },
  {
    name: "Pobre Juan",
    cuisine: "Meats and Grills",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/pobre-juan",
    image: '/images/pobre-juan1.png'
  },
  {
    name: "Ryo Gastronomia",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/brazil/so-paulo/so-paulo/ryo-gastronomia",
    image: '/images/ryo-gastronomia1.png'
  },
  {
    name: "Sal Gastronomia",
    cuisine: "Contemporary, Brazilian",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/sal-gastronomia",
    image: '/images/sal-gastronomia1.png'
  },
  {
    name: "Shihoma Pasta Fresca",
    cuisine: "Italian",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/shihoma-pasta-fresca",
    image: '/images/shihoma-pasta-fresca1.png'
  },
  {
    name: "Shin Zushi",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/brazil/so-paulo/so-paulo/shin-zushi",
    image: '/images/shin-zushi1.png'
  },
  {
    name: "Tangará Jean-Georges",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/brazil/so-paulo/so-paulo/tangar-jean-georges",
    image: '/images/tangar-jean-georges1.png'
  },
  {
    name: "Tanit",
    cuisine: "Mediterranean Cuisine",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/tanit",
    image: '/images/tanit1.png'
  },
  {
    name: "TARAZ",
    cuisine: "South American",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/taraz",
    image: '/images/taraz1.png'
  },
  {
    name: "Terraço NOTIÊ",
    cuisine: "Brazilian, Modern Cuisine",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/terrao-noti",
    image: '/images/terrao-noti1.png'
  },
  {
    name: "The Kith",
    cuisine: "Brazilian",
    price: "$",
    path: "/brazil/so-paulo/so-paulo/the-kith",
    image: '/images/the-kith1.png'
  },
  {
    name: "Tordesilhas",
    cuisine: "Brazilian",
    price: "$",
    path: "/brazil/so-paulo/so-paulo/tordesilhas",
    image: '/images/tordesilhas1.png'
  },
  {
    name: "Trattorita Evvai",
    cuisine: "Italian, Traditional Cuisine",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/trattorita-evvai",
    image: '/images/trattorita-evvai1.png'
  },
  {
    name: "Tuju",
    cuisine: "Creative",
    price: "$$$$",
    path: "/brazil/so-paulo/so-paulo/tuju",
    image: '/images/tuju1.png'
  },
  {
    name: "Varanda Grill",
    cuisine: "Meats and Grills",
    price: "$$$",
    path: "/brazil/so-paulo/so-paulo/varanda-grill",
    image: '/images/varanda-grill1.png'
  },
  {
    name: "Vinheria Percussi",
    cuisine: "Italian",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/vinheria-percussi",
    image: '/images/vinheria-percussi1.png'
  },
  {
    name: "Vista",
    cuisine: "Brazilian",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/vista",
    image: '/images/vista1.png'
  },
  {
    name: "Zena Cucina",
    cuisine: "Italian",
    price: "$$",
    path: "/brazil/so-paulo/so-paulo/zena-cucina",
    image: '/images/zena-cucina1.png'
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
