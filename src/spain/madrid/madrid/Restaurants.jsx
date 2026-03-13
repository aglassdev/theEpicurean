import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Madrid";

const restaurants = [
  {
    name: "99 sushi bar",
    cuisine: "Japanese",
    price: "€€€€",
    path: "/spain/madrid/madrid/99-sushi-bar",
    image: '/images/99-sushi-bar1.png'
  },
  {
    name: "A'Barra",
    cuisine: "International",
    price: "€€€€",
    path: "/spain/madrid/madrid/abarra",
    image: '/images/abarra1.png'
  },
  {
    name: "ABYA",
    cuisine: "Fusion",
    price: "€€€",
    path: "/spain/madrid/madrid/abya",
    image: '/images/abya1.png'
  },
  {
    name: "Adaly",
    cuisine: "Contemporary",
    price: "€€",
    path: "/spain/madrid/madrid/adaly",
    image: '/images/adaly1.png'
  },
  {
    name: "Alabaster",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/spain/madrid/madrid/alabaster",
    image: '/images/alabaster1.png'
  },
  {
    name: "Alcotán",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/spain/madrid/madrid/alcotn",
    image: '/images/alcotn1.png'
  },
  {
    name: "Allégorie",
    cuisine: "French Contemporary",
    price: "€€€",
    path: "/spain/madrid/madrid/allgorie",
    image: '/images/allgorie1.png'
  },
  {
    name: "Amparito Roca",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/spain/madrid/madrid/amparito-roca",
    image: '/images/amparito-roca1.png'
  },
  {
    name: "Amós",
    cuisine: "Modern Cuisine, Contemporary",
    price: "€€€",
    path: "/spain/madrid/madrid/ams",
    image: '/images/ams1.png'
  },
  {
    name: "Ayantar",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/spain/madrid/madrid/ayantar",
    image: '/images/ayantar1.png'
  },
  {
    name: "Bacira",
    cuisine: "Fusion",
    price: "€€",
    path: "/spain/madrid/madrid/bacira",
    image: '/images/bacira1.png'
  },
  {
    name: "BANCAL",
    cuisine: "Contemporary",
    price: "€€€",
    path: "/spain/madrid/madrid/bancal",
    image: '/images/bancal1.png'
  },
  {
    name: "Bao Li",
    cuisine: "Chinese Contemporary",
    price: "€€€",
    path: "/spain/madrid/madrid/bao-li",
    image: '/images/bao-li1.png'
  },
  {
    name: "Barra Alta Madrid",
    cuisine: "Contemporary",
    price: "€€",
    path: "/spain/madrid/madrid/barra-alta-madrid",
    image: '/images/barra-alta-madrid1.png'
  },
  {
    name: "Barracuda MX",
    cuisine: "Mexican",
    price: "€€",
    path: "/spain/madrid/madrid/barracuda-mx",
    image: '/images/barracuda-mx1.png'
  },
  {
    name: "Bascoat",
    cuisine: "Contemporary, Basque",
    price: "€€€",
    path: "/spain/madrid/madrid/bascoat",
    image: '/images/bascoat1.png'
  },
  {
    name: "Benares",
    cuisine: "Indian",
    price: "€€",
    path: "/spain/madrid/madrid/benares",
    image: '/images/benares1.png'
  },
  {
    name: "Benares",
    cuisine: "Indian",
    price: "€€",
    path: "/spain/madrid/madrid/benares",
    image: '/images/benares1.png'
  },
  {
    name: "BiBo Madrid",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/spain/madrid/madrid/bibo-madrid",
    image: '/images/bibo-madrid1.png'
  },
  {
    name: "Bichopalo",
    cuisine: "Fusion",
    price: "€€",
    path: "/spain/madrid/madrid/bichopalo",
    image: '/images/bichopalo1.png'
  },
  {
    name: "Bistronómika",
    cuisine: "Seafood",
    price: "€€€",
    path: "/spain/madrid/madrid/bistronmika",
    image: '/images/bistronmika1.png'
  },
  {
    name: "Bākkō",
    cuisine: "Japanese, Fusion",
    price: "€€€€",
    path: "/spain/madrid/madrid/bkk",
    image: '/images/bkk1.png'
  },
  {
    name: "Bolboreta",
    cuisine: "Fusion",
    price: "€€",
    path: "/spain/madrid/madrid/bolboreta",
    image: '/images/bolboreta1.png'
  },
  {
    name: "Caja de Cerillas",
    cuisine: "Farm to table",
    price: "€€€",
    path: "/spain/madrid/madrid/caja-de-cerillas",
    image: '/images/caja-de-cerillas1.png'
  },
  {
    name: "Casa de Comidas",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/spain/madrid/madrid/casa-de-comidas",
    image: '/images/casa-de-comidas1.png'
  },
  {
    name: "Casa Mortero",
    cuisine: "Creative",
    price: "€€",
    path: "/spain/madrid/madrid/casa-mortero",
    image: '/images/casa-mortero1.png'
  },
  {
    name: "CEBO",
    cuisine: "Creative",
    price: "€€€€",
    path: "/spain/madrid/madrid/cebo",
    image: '/images/cebo1.png'
  },
  {
    name: "China Crown",
    cuisine: "Chinese",
    price: "€€",
    path: "/spain/madrid/madrid/china-crown",
    image: '/images/china-crown1.png'
  },
  {
    name: "Chispa Bistró",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/spain/madrid/madrid/chispa-bistr",
    image: '/images/chispa-bistr1.png'
  },
  {
    name: "Clos Madrid",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/spain/madrid/madrid/clos-madrid",
    image: '/images/clos-madrid1.png'
  },
  {
    name: "Contrastes by Diego Ferreira",
    cuisine: "Creative",
    price: "€€",
    path: "/spain/madrid/madrid/contrastes-by-diego-ferreira",
    image: '/images/contrastes-by-diego-ferreira1.png'
  },
  {
    name: "Coque",
    cuisine: "Creative",
    price: "€€€€",
    path: "/spain/madrid/madrid/coque",
    image: '/images/coque1.png'
  },
  {
    name: "Coquetto Bar",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/spain/madrid/madrid/coquetto-bar",
    image: '/images/coquetto-bar1.png'
  },
  {
    name: "Cornamusa Cibeles",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/spain/madrid/madrid/cornamusa-cibeles",
    image: '/images/cornamusa-cibeles1.png'
  },
  {
    name: "Corral de la Morería Gastronómico",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/spain/madrid/madrid/corral-de-la-morera-gastronmico",
    image: '/images/corral-de-la-morera-gastronmico1.png'
  },
  {
    name: "Corsario Madrid",
    cuisine: "International",
    price: "€€",
    path: "/spain/madrid/madrid/corsario-madrid",
    image: '/images/corsario-madrid1.png'
  },
  {
    name: "Dantte",
    cuisine: "Italian Contemporary",
    price: "€€€",
    path: "/spain/madrid/madrid/dantte",
    image: '/images/dantte1.png'
  },
  {
    name: "Deessa",
    cuisine: "Creative",
    price: "€€€€",
    path: "/spain/madrid/madrid/deessa",
    image: '/images/deessa1.png'
  },
  {
    name: "Desborre",
    cuisine: "Contemporary",
    price: "€€",
    path: "/spain/madrid/madrid/desborre",
    image: '/images/desborre1.png'
  },
  {
    name: "Desde 1911",
    cuisine: "Seafood",
    price: "€€€€",
    path: "/spain/madrid/madrid/desde-1911",
    image: '/images/desde-19111.png'
  },
  {
    name: "DiverXO",
    cuisine: "Creative",
    price: "€€€€",
    path: "/spain/madrid/madrid/diverxo",
    image: '/images/diverxo1.png'
  },
  {
    name: "Doppelgänger Bar",
    cuisine: "Fusion",
    price: "€€",
    path: "/spain/madrid/madrid/doppelgnger-bar",
    image: '/images/doppelgnger-bar1.png'
  },
  {
    name: "DSTAgE",
    cuisine: "Creative",
    price: "€€€€",
    path: "/spain/madrid/madrid/dstage",
    image: '/images/dstage1.png'
  },
  {
    name: "Ebisu by Kobos",
    cuisine: "Japanese",
    price: "€€€€",
    path: "/spain/madrid/madrid/ebisu-by-kobos",
    image: '/images/ebisu-by-kobos1.png'
  },
  {
    name: "El Bajío",
    cuisine: "Mexican",
    price: "€€",
    path: "/spain/madrid/madrid/el-bajo",
    image: '/images/el-bajo1.png'
  },
  {
    name: "El Brote",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/spain/madrid/madrid/el-brote",
    image: '/images/el-brote1.png'
  },
  {
    name: "El Gran Asador Lecanda",
    cuisine: "Grills",
    price: "€€€",
    path: "/spain/madrid/madrid/el-gran-asador-lecanda",
    image: '/images/el-gran-asador-lecanda1.png'
  },
  {
    name: "El Invernadero",
    cuisine: "Vegetarian, Vegan",
    price: "€€€€",
    path: "/spain/madrid/madrid/el-invernadero",
    image: '/images/el-invernadero1.png'
  },
  {
    name: "El Patio de Claudio",
    cuisine: "Mediterranean Cuisine",
    price: "€€€",
    path: "/spain/madrid/madrid/el-patio-de-claudio",
    image: '/images/el-patio-de-claudio1.png'
  },
  {
    name: "El Pedrusco de Aldealcorvo",
    cuisine: "Castilian",
    price: "€€",
    path: "/spain/madrid/madrid/el-pedrusco-de-aldealcorvo",
    image: '/images/el-pedrusco-de-aldealcorvo1.png'
  },
  {
    name: "El Señor Martín",
    cuisine: "Grills, Seafood",
    price: "€€€",
    path: "/spain/madrid/madrid/el-seor-martn",
    image: '/images/el-seor-martn1.png'
  },
  {
    name: "EMi",
    cuisine: "Modern Cuisine, Contemporary",
    price: "€€€€",
    path: "/spain/madrid/madrid/emi",
    image: '/images/emi1.png'
  },
  {
    name: "Estimar Madrid",
    cuisine: "Seafood",
    price: "€€€",
    path: "/spain/madrid/madrid/estimar-madrid",
    image: '/images/estimar-madrid1.png'
  },
  {
    name: "Ferretería Restaurante",
    cuisine: "Contemporary",
    price: "€€",
    path: "/spain/madrid/madrid/ferretera-restaurante",
    image: '/images/ferretera-restaurante1.png'
  },
  {
    name: "Filandón",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/spain/madrid/madrid/filandn",
    image: '/images/filandn1.png'
  },
  {
    name: "Fismuler",
    cuisine: "Traditional Cuisine, Contemporary",
    price: "€€",
    path: "/spain/madrid/madrid/fismuler",
    image: '/images/fismuler1.png'
  },
  {
    name: "Fonda de la Confianza",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/spain/madrid/madrid/fonda-de-la-confianza",
    image: '/images/fonda-de-la-confianza1.png'
  },
  {
    name: "Gala",
    cuisine: "Farm to table",
    price: "€€",
    path: "/spain/madrid/madrid/gala",
    image: '/images/gala1.png'
  },
  {
    name: "Garelos",
    cuisine: "Galician",
    price: "€€",
    path: "/spain/madrid/madrid/garelos",
    image: '/images/garelos1.png'
  },
  {
    name: "Gaytán",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/spain/madrid/madrid/gaytn",
    image: '/images/gaytn1.png'
  },
  {
    name: "Gioia",
    cuisine: "Italian",
    price: "€€€",
    path: "/spain/madrid/madrid/gioia",
    image: '/images/gioia1.png'
  },
  {
    name: "Gofio",
    cuisine: "Contemporary, Regional Cuisine",
    price: "€€€€",
    path: "/spain/madrid/madrid/gofio",
    image: '/images/gofio1.png'
  },
  {
    name: "Haramboure",
    cuisine: "Basque",
    price: "€€",
    path: "/spain/madrid/madrid/haramboure",
    image: '/images/haramboure1.png'
  },
  {
    name: "HDDN",
    cuisine: "Contemporary",
    price: "€€€",
    path: "/spain/madrid/madrid/hddn",
    image: '/images/hddn1.png'
  },
  {
    name: "Hotaru Madrid",
    cuisine: "Japanese, Fusion",
    price: "€€€",
    path: "/spain/madrid/madrid/hotaru-madrid",
    image: '/images/hotaru-madrid1.png'
  },
  {
    name: "Ikigai Flor Baja",
    cuisine: "Japanese",
    price: "€€€",
    path: "/spain/madrid/madrid/ikigai-flor-baja",
    image: '/images/ikigai-flor-baja1.png'
  },
  {
    name: "Ikigai Velázquez",
    cuisine: "Japanese",
    price: "€€€",
    path: "/spain/madrid/madrid/ikigai-velzquez",
    image: '/images/ikigai-velzquez1.png'
  },
  {
    name: "In-Pulso",
    cuisine: "Contemporary",
    price: "€€",
    path: "/spain/madrid/madrid/in-pulso",
    image: '/images/in-pulso1.png'
  },
  {
    name: "Isa",
    cuisine: "Asian Influences",
    price: "€€",
    path: "/spain/madrid/madrid/isa",
    image: '/images/isa1.png'
  },
  {
    name: "ita",
    cuisine: "Farm to table, Mediterranean Cuisine",
    price: "€€",
    path: "/spain/madrid/madrid/ita",
    image: '/images/ita1.png'
  },
  {
    name: "Izariya",
    cuisine: "Japanese",
    price: "€€€",
    path: "/spain/madrid/madrid/izariya",
    image: '/images/izariya1.png'
  },
  {
    name: "Jaizkibel",
    cuisine: "Basque",
    price: "€€",
    path: "/spain/madrid/madrid/jaizkibel",
    image: '/images/jaizkibel1.png'
  },
  {
    name: "Kabuki Madrid",
    cuisine: "Japanese Contemporary",
    price: "€€€€",
    path: "/spain/madrid/madrid/kabuki-madrid",
    image: '/images/kabuki-madrid1.png'
  },
  {
    name: "Kappo",
    cuisine: "Japanese",
    price: "€€€€",
    path: "/spain/madrid/madrid/kappo",
    image: '/images/kappo1.png'
  },
  {
    name: "Kuoco",
    cuisine: "Fusion",
    price: "€€€",
    path: "/spain/madrid/madrid/kuoco",
    image: '/images/kuoco1.png'
  },
  {
    name: "Kyoshi Las Cortes",
    cuisine: "Japanese",
    price: "€€€",
    path: "/spain/madrid/madrid/kyoshi-las-cortes",
    image: '/images/kyoshi-las-cortes1.png'
  },
  {
    name: "Lúa",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/spain/madrid/madrid/la",
    image: '/images/la1.png'
  },
  {
    name: "La Barra de la Tasquería",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/spain/madrid/madrid/la-barra-de-la-tasquera",
    image: '/images/la-barra-de-la-tasquera1.png'
  },
  {
    name: "La Bien Aparecida",
    cuisine: "Contemporary, Traditional Cuisine",
    price: "€€€",
    path: "/spain/madrid/madrid/la-bien-aparecida",
    image: '/images/la-bien-aparecida1.png'
  },
  {
    name: "La Guisandera de Piñera",
    cuisine: "Asturian",
    price: "€€",
    path: "/spain/madrid/madrid/la-guisandera-de-piera",
    image: '/images/la-guisandera-de-piera1.png'
  },
  {
    name: "La Llorería",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/spain/madrid/madrid/la-llorera",
    image: '/images/la-llorera1.png'
  },
  {
    name: "La MaMá",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/spain/madrid/madrid/la-mam",
    image: '/images/la-mam1.png'
  },
  {
    name: "La Mar Madrid by Gastón Acurio",
    cuisine: "Peruvian",
    price: "€€",
    path: "/spain/madrid/madrid/la-mar-madrid-by-gastn-acurio",
    image: '/images/la-mar-madrid-by-gastn-acurio1.png'
  },
  {
    name: "La Maruca - Castellana",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/spain/madrid/madrid/la-maruca-castellana",
    image: '/images/la-maruca-castellana1.png'
  },
  {
    name: "La Maruca - López de Hoyos",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/spain/madrid/madrid/la-maruca-lpez-de-hoyos",
    image: '/images/la-maruca-lpez-de-hoyos1.png'
  },
  {
    name: "La Maruca - Velázquez",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/spain/madrid/madrid/la-maruca-velzquez",
    image: '/images/la-maruca-velzquez1.png'
  },
  {
    name: "La Montería",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/spain/madrid/madrid/la-montera",
    image: '/images/la-montera1.png'
  },
  {
    name: "La Morena",
    cuisine: "Fusion",
    price: "€€",
    path: "/spain/madrid/madrid/la-morena",
    image: '/images/la-morena1.png'
  },
  {
    name: "La Tajada",
    cuisine: "Contemporary",
    price: "€€",
    path: "/spain/madrid/madrid/la-tajada",
    image: '/images/la-tajada1.png'
  },
  {
    name: "La Tasquería",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/spain/madrid/madrid/la-tasquera",
    image: '/images/la-tasquera1.png'
  },
  {
    name: "La Tasquita de Enfrente",
    cuisine: "Farm to table",
    price: "€€€",
    path: "/spain/madrid/madrid/la-tasquita-de-enfrente",
    image: '/images/la-tasquita-de-enfrente1.png'
  },
  {
    name: "Lakasa",
    cuisine: "Farm to table",
    price: "€€€",
    path: "/spain/madrid/madrid/lakasa",
    image: '/images/lakasa1.png'
  },
  {
    name: "Lamian",
    cuisine: "Fusion",
    price: "€€",
    path: "/spain/madrid/madrid/lamian",
    image: '/images/lamian1.png'
  },
  {
    name: "Lana",
    cuisine: "Argentinian, Meats and Grills",
    price: "€€€",
    path: "/spain/madrid/madrid/lana",
    image: '/images/lana1.png'
  },
  {
    name: "Las Tortillas de Gabino",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/spain/madrid/madrid/las-tortillas-de-gabino",
    image: '/images/las-tortillas-de-gabino1.png'
  },
  {
    name: "Le Bistroman Atelier",
    cuisine: "French",
    price: "€€€",
    path: "/spain/madrid/madrid/le-bistroman-atelier",
    image: '/images/le-bistroman-atelier1.png'
  },
  {
    name: "Leña Madrid",
    cuisine: "Meats and Grills",
    price: "€€€€",
    path: "/spain/madrid/madrid/lea-madrid",
    image: '/images/lea-madrid1.png'
  },
  {
    name: "Little Dragon",
    cuisine: "Chinese",
    price: "€",
    path: "/spain/madrid/madrid/little-dragon",
    image: '/images/little-dragon1.png'
  },
  {
    name: "Llama Inn - Madrid",
    cuisine: "Peruvian",
    price: "€€",
    path: "/spain/madrid/madrid/llama-inn-madrid",
    image: '/images/llama-inn-madrid1.png'
  },
  {
    name: "Los 33",
    cuisine: "Meats and Grills",
    price: "€€€",
    path: "/spain/madrid/madrid/los-33",
    image: '/images/los-331.png'
  },
  {
    name: "LUR",
    cuisine: "Contemporary",
    price: "€€€",
    path: "/spain/madrid/madrid/lur",
    image: '/images/lur1.png'
  },
  {
    name: "Manifesto 13",
    cuisine: "Italian",
    price: "€€",
    path: "/spain/madrid/madrid/manifesto-13",
    image: '/images/manifesto-131.png'
  },
  {
    name: "Mar Mía",
    cuisine: "Mediterranean Cuisine",
    price: "€€€",
    path: "/spain/madrid/madrid/mar-ma",
    image: '/images/mar-ma1.png'
  },
  {
    name: "Marcano",
    cuisine: "International",
    price: "€€",
    path: "/spain/madrid/madrid/marcano",
    image: '/images/marcano1.png'
  },
  {
    name: "Marmitón",
    cuisine: "Contemporary",
    price: "€€",
    path: "/spain/madrid/madrid/marmitn",
    image: '/images/marmitn1.png'
  },
  {
    name: "Mudrá",
    cuisine: "Vegetarian",
    price: "€€",
    path: "/spain/madrid/madrid/mudr",
    image: '/images/mudr1.png'
  },
  {
    name: "Nantes",
    cuisine: "Traditional Cuisine, Seasonal Cuisine",
    price: "€€",
    path: "/spain/madrid/madrid/nantes",
    image: '/images/nantes1.png'
  },
  {
    name: "Noi",
    cuisine: "Italian, Italian Contemporary",
    price: "€€€",
    path: "/spain/madrid/madrid/noi",
    image: '/images/noi1.png'
  },
  {
    name: "Nunuka - Bistrot Georgia",
    cuisine: "International",
    price: "€€",
    path: "/spain/madrid/madrid/nunuka-bistrot-georgia",
    image: '/images/nunuka-bistrot-georgia1.png'
  },
  {
    name: "O'Grelo",
    cuisine: "Galician, Regional Cuisine",
    price: "€€€",
    path: "/spain/madrid/madrid/ogrelo",
    image: '/images/ogrelo1.png'
  },
  {
    name: "Omeraki",
    cuisine: "Contemporary, Fusion",
    price: "€€€",
    path: "/spain/madrid/madrid/omeraki",
    image: '/images/omeraki1.png'
  },
  {
    name: "OSA",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/spain/madrid/madrid/osa",
    image: '/images/osa1.png'
  },
  {
    name: "Ovillo",
    cuisine: "Contemporary, Modern Cuisine",
    price: "€€€",
    path: "/spain/madrid/madrid/ovillo",
    image: '/images/ovillo1.png'
  },
  {
    name: "Ozio Gastronómico",
    cuisine: "Italian",
    price: "€€",
    path: "/spain/madrid/madrid/ozio-gastronmico",
    image: '/images/ozio-gastronmico1.png'
  },
  {
    name: "Pabú",
    cuisine: "Creative",
    price: "€€€€",
    path: "/spain/madrid/madrid/pab",
    image: '/images/pab1.png'
  },
  {
    name: "Paco Roncero",
    cuisine: "Creative",
    price: "€€€€",
    path: "/spain/madrid/madrid/paco-roncero",
    image: '/images/paco-roncero1.png'
  },
  {
    name: "Pacto Raíz",
    cuisine: "Fusion, Contemporary",
    price: "€€",
    path: "/spain/madrid/madrid/pacto-raz",
    image: '/images/pacto-raz1.png'
  },
  {
    name: "Palm Court",
    cuisine: "Classic Cuisine",
    price: "€€€",
    path: "/spain/madrid/madrid/palm-court",
    image: '/images/palm-court1.png'
  },
  {
    name: "Per Sé Bistró",
    cuisine: "Contemporary",
    price: "€€€",
    path: "/spain/madrid/madrid/per-s-bistr",
    image: '/images/per-s-bistr1.png'
  },
  {
    name: "Pilar Akaneya",
    cuisine: "Japanese Steakhouse",
    price: "€€€",
    path: "/spain/madrid/madrid/pilar-akaneya",
    image: '/images/pilar-akaneya1.png'
  },
  {
    name: "Playing Solo",
    cuisine: "Fusion",
    price: "€€€€",
    path: "/spain/madrid/madrid/playing-solo",
    image: '/images/playing-solo1.png'
  },
  {
    name: "Poncio WM",
    cuisine: "Contemporary",
    price: "€€",
    path: "/spain/madrid/madrid/poncio-wm",
    image: '/images/poncio-wm1.png'
  },
  {
    name: "Puntarena",
    cuisine: "Mexican",
    price: "€€€",
    path: "/spain/madrid/madrid/puntarena",
    image: '/images/puntarena1.png'
  },
  {
    name: "Quimbaya",
    cuisine: "Colombian",
    price: "€€€€",
    path: "/spain/madrid/madrid/quimbaya",
    image: '/images/quimbaya1.png'
  },
  {
    name: "Quinqué",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/spain/madrid/madrid/quinqu",
    image: '/images/quinqu1.png'
  },
  {
    name: "Ramón Freixa Atelier",
    cuisine: "Creative",
    price: "€€€€",
    path: "/spain/madrid/madrid/ramn-freixa-atelier",
    image: '/images/ramn-freixa-atelier1.png'
  },
  {
    name: "Ramón Freixa Tradición",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/spain/madrid/madrid/ramn-freixa-tradicin",
    image: '/images/ramn-freixa-tradicin1.png'
  },
  {
    name: "RavioXO",
    cuisine: "Creative, Dumplings",
    price: "€€€€",
    path: "/spain/madrid/madrid/ravioxo",
    image: '/images/ravioxo1.png'
  },
  {
    name: "Ricardo Sanz Wellington",
    cuisine: "Japanese Contemporary",
    price: "€€€€",
    path: "/spain/madrid/madrid/ricardo-sanz-wellington",
    image: '/images/ricardo-sanz-wellington1.png'
  },
  {
    name: "Rocacho Plaza",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/spain/madrid/madrid/rocacho-plaza",
    image: '/images/rocacho-plaza1.png'
  },
  {
    name: "Rubaiyat Madrid",
    cuisine: "Meats and Grills",
    price: "€€€",
    path: "/spain/madrid/madrid/rubaiyat-madrid",
    image: '/images/rubaiyat-madrid1.png'
  },
  {
    name: "Rural",
    cuisine: "Meats and Grills",
    price: "€€€",
    path: "/spain/madrid/madrid/rural",
    image: '/images/rural1.png'
  },
  {
    name: "Saddle",
    cuisine: "Modern Cuisine, Classic Cuisine",
    price: "€€€€",
    path: "/spain/madrid/madrid/saddle",
    image: '/images/saddle1.png'
  },
  {
    name: "Santerra",
    cuisine: "Contemporary",
    price: "€€€",
    path: "/spain/madrid/madrid/santerra",
    image: '/images/santerra1.png'
  },
  {
    name: "Sen Omakase",
    cuisine: "Japanese",
    price: "€€€€",
    path: "/spain/madrid/madrid/sen-omakase",
    image: '/images/sen-omakase1.png'
  },
  {
    name: "Shibari Sushi and Grill",
    cuisine: "Japanese Contemporary",
    price: "€€",
    path: "/spain/madrid/madrid/shibari-sushi-and-grill",
    image: '/images/shibari-sushi-and-grill1.png'
  },
  {
    name: "Sisapo",
    cuisine: "Fusion",
    price: "€€",
    path: "/spain/madrid/madrid/sisapo",
    image: '/images/sisapo1.png'
  },
  {
    name: "Smoked Room",
    cuisine: "Contemporary",
    price: "€€€€",
    path: "/spain/madrid/madrid/smoked-room",
    image: '/images/smoked-room1.png'
  },
  {
    name: "Soy Kitchen",
    cuisine: "Fusion, Chinese Contemporary",
    price: "€€€",
    path: "/spain/madrid/madrid/soy-kitchen",
    image: '/images/soy-kitchen1.png'
  },
  {
    name: "Sua",
    cuisine: "Meats and Grills",
    price: "€€€",
    path: "/spain/madrid/madrid/sua",
    image: '/images/sua1.png'
  },
  {
    name: "Surtopía",
    cuisine: "Andalusian",
    price: "€€€",
    path: "/spain/madrid/madrid/surtopa",
    image: '/images/surtopa1.png'
  },
  {
    name: "Sushi Bar Hannah",
    cuisine: "Japanese",
    price: "€€€€",
    path: "/spain/madrid/madrid/sushi-bar-hannah",
    image: '/images/sushi-bar-hannah1.png'
  },
  {
    name: "Sushi Bar Tottori",
    cuisine: "Japanese",
    price: "€€€",
    path: "/spain/madrid/madrid/sushi-bar-tottori",
    image: '/images/sushi-bar-tottori1.png'
  },
  {
    name: "Taberna Pedraza",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/spain/madrid/madrid/taberna-pedraza",
    image: '/images/taberna-pedraza1.png'
  },
  {
    name: "TA-KUMI",
    cuisine: "Japanese",
    price: "€€€",
    path: "/spain/madrid/madrid/ta-kumi",
    image: '/images/ta-kumi1.png'
  },
  {
    name: "TAMPU",
    cuisine: "Peruvian",
    price: "€€",
    path: "/spain/madrid/madrid/tampu",
    image: '/images/tampu1.png'
  },
  {
    name: "Tepic",
    cuisine: "Mexican",
    price: "€€",
    path: "/spain/madrid/madrid/tepic",
    image: '/images/tepic1.png'
  },
  {
    name: "Èter",
    cuisine: "Contemporary",
    price: "€€€",
    path: "/spain/madrid/madrid/ter",
    image: '/images/ter1.png'
  },
  {
    name: "Tetsu",
    cuisine: "Teppanyaki, Mediterranean Cuisine",
    price: "€€",
    path: "/spain/madrid/madrid/tetsu",
    image: '/images/tetsu1.png'
  },
  {
    name: "Ticuí",
    cuisine: "Mexican",
    price: "€€€",
    path: "/spain/madrid/madrid/ticu",
    image: '/images/ticu1.png'
  },
  {
    name: "Toki",
    cuisine: "Japanese",
    price: "€€€€",
    path: "/spain/madrid/madrid/toki",
    image: '/images/toki1.png'
  },
  {
    name: "TonTon",
    cuisine: "Contemporary",
    price: "€€",
    path: "/spain/madrid/madrid/tonton",
    image: '/images/tonton1.png'
  },
  {
    name: "Tora",
    cuisine: "Japanese Contemporary",
    price: "€€€",
    path: "/spain/madrid/madrid/tora",
    image: '/images/tora1.png'
  },
  {
    name: "Tori-Key",
    cuisine: "Yakitori",
    price: "€€",
    path: "/spain/madrid/madrid/tori-key",
    image: '/images/tori-key1.png'
  },
  {
    name: "Tramo",
    cuisine: "Contemporary",
    price: "€€",
    path: "/spain/madrid/madrid/tramo",
    image: '/images/tramo1.png'
  },
  {
    name: "Tres por Cuatro",
    cuisine: "Contemporary",
    price: "€€",
    path: "/spain/madrid/madrid/tres-por-cuatro",
    image: '/images/tres-por-cuatro1.png'
  },
  {
    name: "Treze",
    cuisine: "Seasonal Cuisine",
    price: "€€",
    path: "/spain/madrid/madrid/treze",
    image: '/images/treze1.png'
  },
  {
    name: "Triciclo",
    cuisine: "Creative",
    price: "€€",
    path: "/spain/madrid/madrid/triciclo",
    image: '/images/triciclo1.png'
  },
  {
    name: "Trèsde",
    cuisine: "Contemporary",
    price: "€€",
    path: "/spain/madrid/madrid/trsde",
    image: '/images/trsde1.png'
  },
  {
    name: "Ugo Chan",
    cuisine: "Fusion",
    price: "€€€€",
    path: "/spain/madrid/madrid/ugo-chan",
    image: '/images/ugo-chan1.png'
  },
  {
    name: "Umiko",
    cuisine: "Japanese, Fusion",
    price: "€€€",
    path: "/spain/madrid/madrid/umiko",
    image: '/images/umiko1.png'
  },
  {
    name: "Varra",
    cuisine: "Contemporary",
    price: "€€",
    path: "/spain/madrid/madrid/varra",
    image: '/images/varra1.png'
  },
  {
    name: "VelascoAbellà",
    cuisine: "Farm to table",
    price: "€€€",
    path: "/spain/madrid/madrid/velascoabell",
    image: '/images/velascoabell1.png'
  },
  {
    name: "Vinoteca Moratín",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/spain/madrid/madrid/vinoteca-moratn",
    image: '/images/vinoteca-moratn1.png'
  },
  {
    name: "Yugo The Bunker",
    cuisine: "Japanese",
    price: "€€€€",
    path: "/spain/madrid/madrid/yugo-the-bunker",
    image: '/images/yugo-the-bunker1.png'
  },
  {
    name: "Zalacaín",
    cuisine: "Classic Cuisine",
    price: "€€€€",
    path: "/spain/madrid/madrid/zalacan",
    image: '/images/zalacan1.png'
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
