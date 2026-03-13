import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "New York City";

const restaurants = [
  {
    name: "4 Charles Prime Rib",
    cuisine: "Steakhouse",
    price: "$$$$",
    path: "/usa/newyork/new-york/4CharlesPrimeRib",
    image: "/images/4charlesprimerib1.png"
  },
  {
    name: "53",
    cuisine: "Asian, Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/53",
    image: "/images/531.png"
  },
  {
    name: "63 Clinton",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/63Clinton",
    image: "/images/63clinton1.png"
  },
  {
    name: "8282",
    cuisine: "Korean, Fusion",
    price: "$$",
    path: "/usa/newyork/new-york/8282",
    image: "/images/82821.png"
  },
  {
    name: "abcV",
    cuisine: "Vegetarian, Contemporary",
    price: "$$$",
    path: "/usa/newyork/new-york/Abcv",
    image: "/images/abcv1.png"
  },
  {
    name: "Acru",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/Acru",
    image: "/images/acru1.png"
  },
  {
    name: "Adda",
    cuisine: "Indian",
    price: "$$$",
    path: "/usa/newyork/new-york/Adda",
    image: "/images/adda1.png"
  },
  {
    name: "Ai Fiori",
    cuisine: "Italian, French",
    price: "$$$$",
    path: "/usa/newyork/new-york/AiFiori",
    image: "/images/aifiori1.png"
  },
  {
    name: "Altro Paradiso",
    cuisine: "Italian",
    price: "$$$",
    path: "/usa/newyork/new-york/AltroParadiso",
    image: "/images/altroparadiso1.png"
  },
  {
    name: "Aquavit",
    cuisine: "Scandinavian, Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/Aquavit",
    image: "/images/aquavit1.png"
  },
  {
    name: "Ariari",
    cuisine: "Korean, Regional Cuisine",
    price: "$$$",
    path: "/usa/newyork/new-york/Ariari",
    image: "/images/ariari1.png"
  },
  {
    name: "aRoqa",
    cuisine: "Indian, Contemporary",
    price: "$$$",
    path: "/usa/newyork/new-york/Aroqa",
    image: "/images/aroqa1.png"
  },
  {
    name: "Atera",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/Atera",
    image: "/images/atera1.png"
  },
  {
    name: "Atla",
    cuisine: "Mexican, Contemporary",
    price: "$$$",
    path: "/usa/newyork/new-york/Atla",
    image: "/images/atla1.png"
  },
  {
    name: "Atoboy",
    cuisine: "Korean, Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/Atoboy",
    image: "/images/atoboy1.png"
  },
  {
    name: "Atomix",
    cuisine: "Korean, Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/Atomix",
    image: "/images/atomix1.png"
  },
  {
    name: "Avant Garden",
    cuisine: "Vegan",
    price: "$$",
    path: "/usa/newyork/new-york/AvantGarden",
    image: "/images/avantgarden1.png"
  },
  {
    name: "Bangkok Supper Club",
    cuisine: "Thai",
    price: "$$$",
    path: "/usa/newyork/new-york/BangkokSupperClub",
    image: "/images/bangkoksupperclub1.png"
  },
  {
    name: "Bar Miller",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/newyork/new-york/BarMiller",
    image: "/images/barmiller1.png"
  },
  {
    name: "Barawine",
    cuisine: "Contemporary, French Contemporary",
    price: "$$$",
    path: "/usa/newyork/new-york/Barawine",
    image: "/images/barawine1.png"
  },
  {
    name: "Bayon",
    cuisine: "Cambodian",
    price: "$",
    path: "/usa/newyork/new-york/Bayon",
    image: "/images/bayon1.png"
  },
  {
    name: "Benoit",
    cuisine: "French",
    price: "$$$",
    path: "/usa/newyork/new-york/BenoitNEW",
    image: "/images/benoit1.png"
  },
  {
    name: "bōm",
    cuisine: "Korean, Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/Bm",
    image: "/images/bm1.png"
  },
  {
    name: "Bohemian Spirit",
    cuisine: "Czech",
    price: "$$",
    path: "/usa/newyork/new-york/BohemianSpirit",
    image: "/images/bohemianspirit1.png"
  },
  {
    name: "Bridges",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/usa/newyork/new-york/Bridges",
    image: "/images/bridges1.png"
  },
  {
    name: "Bungalow",
    cuisine: "Indian",
    price: "$$$",
    path: "/usa/newyork/new-york/Bungalow",
    image: "/images/bungalow1.png"
  },
  {
    name: "C as in Charlie",
    cuisine: "Fusion",
    price: "$$",
    path: "/usa/newyork/new-york/CAsInCharlie",
    image: "/images/casincharlie1.png"
  },
  {
    name: "Cadence",
    cuisine: "Vegan, Southern",
    price: "$$$",
    path: "/usa/newyork/new-york/Cadence",
    image: "/images/cadence1.png"
  },
  {
    name: "Café Boulud",
    cuisine: "French",
    price: "$$$$",
    path: "/usa/newyork/new-york/CafBoulud",
    image: "/images/cafboulud1.png"
  },
  {
    name: "Café Carmellini",
    cuisine: "Mediterranean Cuisine, American",
    price: "$$$",
    path: "/usa/newyork/new-york/CafCarmellini",
    image: "/images/cafcarmellini1.png"
  },
  {
    name: "Cafe Commerce",
    cuisine: "American, French Contemporary",
    price: "$$$",
    path: "/usa/newyork/new-york/CafeCommerce",
    image: "/images/cafecommerce1.png"
  },
  {
    name: "Cafe Sabarsky",
    cuisine: "Austrian",
    price: "$$",
    path: "/usa/newyork/new-york/CafeSabarsky",
    image: "/images/cafesabarsky1.png"
  },
  {
    name: "Carbone",
    cuisine: "Italian, Italian-American",
    price: "$$$$",
    path: "/usa/newyork/new-york/CarboneNEW",
    image: "/images/carbone1.png"
  },
  {
    name: "Carlotto",
    cuisine: "Contemporary, Italian-American",
    price: "$$$",
    path: "/usa/newyork/new-york/Carlotto",
    image: "/images/carlotto1.png"
  },
  {
    name: "Carne Mare",
    cuisine: "Steakhouse, Italian",
    price: "$$$$",
    path: "/usa/newyork/new-york/CarneMare",
    image: "/images/carnemare1.png"
  },
  {
    name: "Casa Dani",
    cuisine: "Spanish, Seafood",
    price: "$$$$",
    path: "/usa/newyork/new-york/CasaDani",
    image: "/images/casadani1.png"
  },
  {
    name: "Casa Mono",
    cuisine: "Spanish, Contemporary",
    price: "$$$",
    path: "/usa/newyork/new-york/CasaMono",
    image: "/images/casamono1.png"
  },
  {
    name: "Caviar Russe",
    cuisine: "Contemporary, Seafood",
    price: "$$$$",
    path: "/usa/newyork/new-york/CaviarRusse",
    image: "/images/caviarrusse1.png"
  },
  {
    name: "Cervo’s",
    cuisine: "Spanish, Seafood",
    price: "$$$",
    path: "/usa/newyork/new-york/Cervos",
    image: "/images/cervos1.png"
  },
  {
    name: "Cha Kee",
    cuisine: "Asian",
    price: "$$",
    path: "/usa/newyork/new-york/ChaKee",
    image: "/images/chakee1.png"
  },
  {
    name: "Chalong",
    cuisine: "Thai, Southern Thai",
    price: "$$$",
    path: "/usa/newyork/new-york/Chalong",
    image: "/images/chalong1.png"
  },
  {
    name: "Chama Mama",
    cuisine: "Central Asian",
    price: "$$",
    path: "/usa/newyork/new-york/ChamaMama",
    image: "/images/chamamama1.png"
  },
  {
    name: "Chambers",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/usa/newyork/new-york/Chambers",
    image: "/images/chambers1.png"
  },
  {
    name: "Chef's Table at Brooklyn Fare",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/ChefsTableAtBrooklynFare",
    image: "/images/chefstableatbrooklynfare1.png"
  },
  {
    name: "CheLi",
    cuisine: "Chinese, Shanghainese",
    price: "$$",
    path: "/usa/newyork/new-york/Cheli",
    image: "/images/cheli1.png"
  },
  {
    name: "Chez Fifi",
    cuisine: "French",
    price: "$$$$",
    path: "/usa/newyork/new-york/ChezFifi",
    image: "/images/chezfifi1.png"
  },
  {
    name: "Chick Chick",
    cuisine: "Asian, Chicken Specialities",
    price: "$$",
    path: "/usa/newyork/new-york/ChickChick",
    image: "/images/chickchick1.png"
  },
  {
    name: "Cho Dang Gol",
    cuisine: "Korean",
    price: "$$",
    path: "/usa/newyork/new-york/ChoDangGol",
    image: "/images/chodanggol1.png"
  },
  {
    name: "Chola",
    cuisine: "Indian, Regional Cuisine",
    price: "$$$",
    path: "/usa/newyork/new-york/Chola",
    image: "/images/chola1.png"
  },
  {
    name: "Ci Siamo",
    cuisine: "Italian",
    price: "$$$",
    path: "/usa/newyork/new-york/CiSiamo",
    image: "/images/cisiamo1.png"
  },
  {
    name: "Claud",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/usa/newyork/new-york/Claud",
    image: "/images/claud1.png"
  },
  {
    name: "Cómodo",
    cuisine: "Latin American, Regional Cuisine",
    price: "$$",
    path: "/usa/newyork/new-york/Cmodo",
    image: "/images/cmodo1.png"
  },
  {
    name: "Community Food & Juice",
    cuisine: "American, Contemporary",
    price: "$$",
    path: "/usa/newyork/new-york/CommunityFoodJuice",
    image: "/images/communityfoodjuice1.png"
  },
  {
    name: "Coqodaq",
    cuisine: "Korean",
    price: "$$",
    path: "/usa/newyork/new-york/Coqodaq",
    image: "/images/coqodaq1.png"
  },
  {
    name: "Corima",
    cuisine: "Mexican, Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/Corima",
    image: "/images/corima1.png"
  },
  {
    name: "Cosme",
    cuisine: "Mexican, Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/Cosme",
    image: "/images/cosme1.png"
  },
  {
    name: "Cote",
    cuisine: "Korean, Steakhouse",
    price: "$$$$",
    path: "/usa/newyork/new-york/Cote",
    image: "/images/cote1.png"
  },
  {
    name: "Covacha",
    cuisine: "Mexican, Regional Cuisine",
    price: "$$",
    path: "/usa/newyork/new-york/Covacha",
    image: "/images/covacha1.png"
  },
  {
    name: "Crane Club",
    cuisine: "Steakhouse",
    price: "$$$$",
    path: "/usa/newyork/new-york/CraneClub",
    image: "/images/craneclub1.png"
  },
  {
    name: "Crevette",
    cuisine: "Seafood, Spanish",
    price: "$$$",
    path: "/usa/newyork/new-york/Crevette",
    image: "/images/crevette1.png"
  },
  {
    name: "Crown Shy",
    cuisine: "Contemporary, American",
    price: "$$$",
    path: "/usa/newyork/new-york/CrownShy",
    image: "/images/crownshy1.png"
  },
  {
    name: "César",
    cuisine: "Contemporary, Seafood",
    price: "$$$$",
    path: "/usa/newyork/new-york/Csar",
    image: "/images/csar1.png"
  },
  {
    name: "Dagon",
    cuisine: "Mediterranean Cuisine, Middle Eastern",
    price: "$$$",
    path: "/usa/newyork/new-york/Dagon",
    image: "/images/dagon1.png"
  },
  {
    name: "Dame",
    cuisine: "Seafood, Contemporary",
    price: "$$$",
    path: "/usa/newyork/new-york/Dame",
    image: "/images/dame1.png"
  },
  {
    name: "Daniel",
    cuisine: "French",
    price: "$$$$",
    path: "/usa/newyork/new-york/Daniel",
    image: "/images/daniel1.png"
  },
  {
    name: "Dhamaka",
    cuisine: "Indian",
    price: "$$",
    path: "/usa/newyork/new-york/Dhamaka",
    image: "/images/dhamaka1.png"
  },
  {
    name: "Dim Sum Go Go",
    cuisine: "Chinese, Dim Sum",
    price: "$$",
    path: "/usa/newyork/new-york/DimSumGoGo",
    image: "/images/dimsumgogo1.png"
  },
  {
    name: "Dirt Candy",
    cuisine: "Vegetarian, Vegan",
    price: "$$$$",
    path: "/usa/newyork/new-york/DirtCandy",
    image: "/images/dirtcandy1.png"
  },
  {
    name: "Don Angie",
    cuisine: "Italian, American",
    price: "$$$",
    path: "/usa/newyork/new-york/DonAngie",
    image: "/images/donangie1.png"
  },
  {
    name: "Don Antonio",
    cuisine: "Pizza",
    price: "$$",
    path: "/usa/newyork/new-york/DonAntonio",
    image: "/images/donantonio1.png"
  },
  {
    name: "Dons Bogam",
    cuisine: "Korean, Barbecue",
    price: "$$",
    path: "/usa/newyork/new-york/DonsBogam",
    image: "/images/donsbogam1.png"
  },
  {
    name: "El Fish Marisqueria",
    cuisine: "Mexican, Seafood",
    price: "$$$",
    path: "/usa/newyork/new-york/ElFishMarisqueria",
    image: "/images/elfishmarisqueria1.png"
  },
  {
    name: "Eléa",
    cuisine: "Greek, Seafood",
    price: "$$$",
    path: "/usa/newyork/new-york/Ela",
    image: "/images/ela1.png"
  },
  {
    name: "Emilio's Ballato",
    cuisine: "Italian-American, Italian",
    price: "$$$",
    path: "/usa/newyork/new-york/EmiliosBallato",
    image: "/images/emiliosballato1.png"
  },
  {
    name: "Ernesto's",
    cuisine: "Spanish",
    price: "$$$$",
    path: "/usa/newyork/new-york/Ernestos",
    image: "/images/ernestos1.png"
  },
  {
    name: "Essential by Christophe",
    cuisine: "French Contemporary, Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/EssentialByChristophe",
    image: "/images/essentialbychristophe1.png"
  },
  {
    name: "Estela",
    cuisine: "Contemporary, American",
    price: "$$$$",
    path: "/usa/newyork/new-york/Estela",
    image: "/images/estela1.png"
  },
  {
    name: "Eulalie",
    cuisine: "French, Classic French",
    price: "$$$",
    path: "/usa/newyork/new-york/Eulalie",
    image: "/images/eulalie1.png"
  },
  {
    name: "Family Meal at Blue Hill",
    cuisine: "American",
    price: "$$$$",
    path: "/usa/newyork/new-york/FamilyMealAtBlueHill",
    image: "/images/familymealatbluehill1.png"
  },
  {
    name: "Farra",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/usa/newyork/new-york/Farra",
    image: "/images/farra1.png"
  },
  {
    name: "Fasano",
    cuisine: "Italian",
    price: "$$$$",
    path: "/usa/newyork/new-york/FasanoNEW",
    image: "/images/fasano1.png"
  },
  {
    name: "Forsythia",
    cuisine: "Italian",
    price: "$$$$",
    path: "/usa/newyork/new-york/Forsythia",
    image: "/images/forsythia1.png"
  },
  {
    name: "Foul Witch",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/FoulWitch",
    image: "/images/foulwitch1.png"
  },
  {
    name: "Four Twenty Five",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/FourTwentyFive",
    image: "/images/fourtwentyfive1.png"
  },
  {
    name: "Foxface Natural",
    cuisine: "Creative",
    price: "$$$",
    path: "/usa/newyork/new-york/FoxfaceNatural",
    image: "/images/foxfacenatural1.png"
  },
  {
    name: "Frevo",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/Frevo",
    image: "/images/frevo1.png"
  },
  {
    name: "Gabriel Kreuther",
    cuisine: "Contemporary, Alsatian",
    price: "$$$$",
    path: "/usa/newyork/new-york/GabrielKreuther",
    image: "/images/gabrielkreuther1.png"
  },
  {
    name: "Gallaghers",
    cuisine: "Steakhouse",
    price: "$$$",
    path: "/usa/newyork/new-york/Gallaghers",
    image: "/images/gallaghers1.png"
  },
  {
    name: "Genesis House Restaurant",
    cuisine: "Korean, Korean Contemporary",
    price: "$$$",
    path: "/usa/newyork/new-york/GenesisHouseRestaurant",
    image: "/images/genesishouserestaurant1.png"
  },
  {
    name: "Gramercy Tavern",
    cuisine: "Contemporary, American",
    price: "$$$$",
    path: "/usa/newyork/new-york/GramercyTavern",
    image: "/images/gramercytavern1.png"
  },
  {
    name: "HAGS",
    cuisine: "Contemporary, Innovative",
    price: "$$$$",
    path: "/usa/newyork/new-york/Hags",
    image: "/images/hags1.png"
  },
  {
    name: "HanGawi",
    cuisine: "Korean, Vegetarian",
    price: "$$",
    path: "/usa/newyork/new-york/Hangawi",
    image: "/images/hangawi1.png"
  },
  {
    name: "Hav & Mar",
    cuisine: "Ethiopian, Fusion",
    price: "$$$",
    path: "/usa/newyork/new-york/HavMar",
    image: "/images/havmar1.png"
  },
  {
    name: "Heroes",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/usa/newyork/new-york/Heroes",
    image: "/images/heroes1.png"
  },
  {
    name: "Hirohisa",
    cuisine: "Japanese, Classic Cuisine",
    price: "$$$$",
    path: "/usa/newyork/new-york/Hirohisa",
    image: "/images/hirohisa1.png"
  },
  {
    name: "Hyderabadi Zaiqa",
    cuisine: "Indian",
    price: "$",
    path: "/usa/newyork/new-york/HyderabadiZaiqa",
    image: "/images/hyderabadizaiqa1.png"
  },
  {
    name: "Hyun",
    cuisine: "Korean, Steakhouse",
    price: "$$$$",
    path: "/usa/newyork/new-york/Hyun",
    image: "/images/hyun1.png"
  },
  {
    name: "I Sodi",
    cuisine: "Italian",
    price: "$$$",
    path: "/usa/newyork/new-york/ISodi",
    image: "/images/isodi1.png"
  },
  {
    name: "Icca",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/newyork/new-york/Icca",
    image: "/images/icca1.png"
  },
  {
    name: "Il Fiorista",
    cuisine: "Contemporary, Mediterranean Cuisine",
    price: "$$$",
    path: "/usa/newyork/new-york/IlFiorista",
    image: "/images/ilfiorista1.png"
  },
  {
    name: "Ishq",
    cuisine: "Indian",
    price: "$$$",
    path: "/usa/newyork/new-york/Ishq",
    image: "/images/ishq1.png"
  },
  {
    name: "Ito",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/newyork/new-york/ItoNEW",
    image: "/images/ito1.png"
  },
  {
    name: "Ivan Ramen",
    cuisine: "Japanese, Ramen",
    price: "$$",
    path: "/usa/newyork/new-york/IvanRamen",
    image: "/images/ivanramen1.png"
  },
  {
    name: "Jean-Georges",
    cuisine: "Contemporary, French Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/Jeangeorges",
    image: "/images/jeangeorges1.png"
  },
  {
    name: "Jeju Noodle Bar",
    cuisine: "Korean",
    price: "$$$",
    path: "/usa/newyork/new-york/JejuNoodleBar",
    image: "/images/jejunoodlebar1.png"
  },
  {
    name: "J.G. Melon",
    cuisine: "American",
    price: "$",
    path: "/usa/newyork/new-york/JgMelon",
    image: "/images/jgmelon1.png"
  },
  {
    name: "Jōji",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/newyork/new-york/Jji",
    image: "/images/jji1.png"
  },
  {
    name: "JoJo",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/usa/newyork/new-york/Jojo",
    image: "/images/jojo1.png"
  },
  {
    name: "Joo Ok",
    cuisine: "Korean, Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/JooOk",
    image: "/images/joook1.png"
  },
  {
    name: "Joomak",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/Joomak",
    image: "/images/joomak1.png"
  },
  {
    name: "Jua",
    cuisine: "Korean, Korean Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/Jua",
    image: "/images/jua1.png"
  },
  {
    name: "Jungsik New York",
    cuisine: "Korean, Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/JungsikNewYork",
    image: "/images/jungsiknewyork1.png"
  },
  {
    name: "Junoon",
    cuisine: "Indian, Contemporary",
    price: "$$$",
    path: "/usa/newyork/new-york/Junoon",
    image: "/images/junoon1.png"
  },
  {
    name: "Jupiter",
    cuisine: "Italian",
    price: "$$$",
    path: "/usa/newyork/new-york/Jupiter",
    image: "/images/jupiter1.png"
  },
  {
    name: "Kabawa",
    cuisine: "Caribbean",
    price: "$$$$",
    path: "/usa/newyork/new-york/Kabawa",
    image: "/images/kabawa1.png"
  },
  {
    name: "Kanoyama",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/newyork/new-york/Kanoyama",
    image: "/images/kanoyama1.png"
  },
  {
    name: "Kanyakumari",
    cuisine: "Indian, Regional Cuisine",
    price: "$$$",
    path: "/usa/newyork/new-york/Kanyakumari",
    image: "/images/kanyakumari1.png"
  },
  {
    name: "Katz's",
    cuisine: "Deli",
    price: "$",
    path: "/usa/newyork/new-york/Katzs",
    image: "/images/katzs1.png"
  },
  {
    name: "Kebab aur Sharab",
    cuisine: "Indian, Regional Cuisine",
    price: "$$$",
    path: "/usa/newyork/new-york/KebabAurSharab",
    image: "/images/kebabaursharab1.png"
  },
  {
    name: "King",
    cuisine: "Mediterranean Cuisine, Italian",
    price: "$$$",
    path: "/usa/newyork/new-york/King",
    image: "/images/king1.png"
  },
  {
    name: "Kochi",
    cuisine: "Korean, Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/Kochi",
    image: "/images/kochi1.png"
  },
  {
    name: "Koloman",
    cuisine: "Contemporary, European",
    price: "$$$$",
    path: "/usa/newyork/new-york/Koloman",
    image: "/images/koloman1.png"
  },
  {
    name: "Kosaka",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/newyork/new-york/Kosaka",
    image: "/images/kosaka1.png"
  },
  {
    name: "Kubeh",
    cuisine: "Middle Eastern",
    price: "$$",
    path: "/usa/newyork/new-york/Kubeh",
    image: "/images/kubeh1.png"
  },
  {
    name: "Kung Fu Little Steamed Buns Ramen",
    cuisine: "Chinese, Dumplings",
    price: "$",
    path: "/usa/newyork/new-york/KungFuLittleSteamedBunsRamen",
    image: "/images/kungfulittlesteamedbunsramen1.png"
  },
  {
    name: "Kyma",
    cuisine: "Greek, Seafood",
    price: "$$$",
    path: "/usa/newyork/new-york/Kyma",
    image: "/images/kyma1.png"
  },
  {
    name: "La Devozione: The Oval",
    cuisine: "Italian",
    price: "$$$$",
    path: "/usa/newyork/new-york/LaDevozioneTheOval",
    image: "/images/ladevozionetheoval1.png"
  },
  {
    name: "La Dong",
    cuisine: "Vietnamese",
    price: "$$",
    path: "/usa/newyork/new-york/LaDong",
    image: "/images/ladong1.png"
  },
  {
    name: "La Mercerie",
    cuisine: "French, Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/LaMercerieNEW",
    image: "/images/lamercerie1.png"
  },
  {
    name: "La Tête d’Or",
    cuisine: "Steakhouse, American",
    price: "$$$$",
    path: "/usa/newyork/new-york/LaTteDor",
    image: "/images/lattedor1.png"
  },
  {
    name: "L’Abeille",
    cuisine: "French, Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/Labeille",
    image: "/images/labeille1.png"
  },
  {
    name: "L’abeille à Côté",
    cuisine: "French, Asian",
    price: "$$$$",
    path: "/usa/newyork/new-york/LabeilleCt",
    image: "/images/labeillect1.png"
  },
  {
    name: "Laliko",
    cuisine: "Central Asian",
    price: "$$",
    path: "/usa/newyork/new-york/Laliko",
    image: "/images/laliko1.png"
  },
  {
    name: "Le B",
    cuisine: "Classic French, Asian",
    price: "$$$$",
    path: "/usa/newyork/new-york/LeB",
    image: "/images/leb1.png"
  },
  {
    name: "Le Bernardin",
    cuisine: "Seafood",
    price: "$$$$",
    path: "/usa/newyork/new-york/LeBernardin",
    image: "/images/lebernardin1.png"
  },
  {
    name: "Le Coucou",
    cuisine: "French, Classic French",
    price: "$$$$",
    path: "/usa/newyork/new-york/LeCoucou",
    image: "/images/lecoucou1.png"
  },
  {
    name: "Le Gigot",
    cuisine: "French",
    price: "$$$",
    path: "/usa/newyork/new-york/LeGigot",
    image: "/images/legigot1.png"
  },
  {
    name: "Le Jardinier New York",
    cuisine: "French, Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/LeJardinierNewYork",
    image: "/images/lejardiniernewyork1.png"
  },
  {
    name: "Le Pavillon",
    cuisine: "Contemporary, French",
    price: "$$$$",
    path: "/usa/newyork/new-york/LePavillonNEW",
    image: "/images/lepavillon1.png"
  },
  {
    name: "Le Rock",
    cuisine: "Contemporary, French",
    price: "$$$$",
    path: "/usa/newyork/new-york/LeRock",
    image: "/images/lerock1.png"
  },
  {
    name: "Le Veau d'Or",
    cuisine: "French",
    price: "$$$",
    path: "/usa/newyork/new-york/LeVeauDor",
    image: "/images/leveaudor1.png"
  },
  {
    name: "Little Alley",
    cuisine: "Chinese, Shanghainese",
    price: "$$",
    path: "/usa/newyork/new-york/LittleAlley",
    image: "/images/littlealley1.png"
  },
  {
    name: "Little Myanmar",
    cuisine: "Burmese",
    price: "$$",
    path: "/usa/newyork/new-york/LittleMyanmar",
    image: "/images/littlemyanmar1.png"
  },
  {
    name: "Lobster Club",
    cuisine: "Japanese, Contemporary",
    price: "$$$",
    path: "/usa/newyork/new-york/LobsterClub",
    image: "/images/lobsterclub1.png"
  },
  {
    name: "Lola Taverna",
    cuisine: "Greek, Mediterranean Cuisine",
    price: "$$$",
    path: "/usa/newyork/new-york/LolaTaverna",
    image: "/images/lolataverna1.png"
  },
  {
    name: "Lord's",
    cuisine: "English, Contemporary",
    price: "$$$",
    path: "/usa/newyork/new-york/Lords",
    image: "/images/lords1.png"
  },
  {
    name: "Loring Place",
    cuisine: "American",
    price: "$$$",
    path: "/usa/newyork/new-york/LoringPlace",
    image: "/images/loringplace1.png"
  },
  {
    name: "Lungi",
    cuisine: "Sri Lankan, Indian",
    price: "$$$",
    path: "/usa/newyork/new-york/Lungi",
    image: "/images/lungi1.png"
  },
  {
    name: "Lupa",
    cuisine: "Italian",
    price: "$$$",
    path: "/usa/newyork/new-york/Lupa",
    image: "/images/lupa1.png"
  },
  {
    name: "Ly Ly Vietnam Cookhouse",
    cuisine: "Vietnamese",
    price: "$$",
    path: "/usa/newyork/new-york/LyLyVietnamCookhouse",
    image: "/images/lylyvietnamcookhouse1.png"
  },
  {
    name: "Ma•dé",
    cuisine: "South East Asian, Seafood",
    price: "$$$",
    path: "/usa/newyork/new-york/Mad",
    image: "/images/mad1.png"
  },
  {
    name: "Maison Passerelle",
    cuisine: "French, African",
    price: "$$$$",
    path: "/usa/newyork/new-york/MaisonPasserelle",
    image: "/images/maisonpasserelle1.png"
  },
  {
    name: "Manhatta",
    cuisine: "Contemporary, American",
    price: "$$$$",
    path: "/usa/newyork/new-york/Manhatta",
    image: "/images/manhatta1.png"
  },
  {
    name: "Marea",
    cuisine: "Seafood, Italian",
    price: "$$$$",
    path: "/usa/newyork/new-york/Marea",
    image: "/images/marea1.png"
  },
  {
    name: "Mari",
    cuisine: "Korean",
    price: "$$$$",
    path: "/usa/newyork/new-york/Mari",
    image: "/images/mari1.png"
  },
  {
    name: "Masa",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/newyork/new-york/Masa",
    image: "/images/masa1.png"
  },
  {
    name: "Massara",
    cuisine: "Italian, Regional Cuisine",
    price: "$$$",
    path: "/usa/newyork/new-york/Massara",
    image: "/images/massara1.png"
  },
  {
    name: "MayRee",
    cuisine: "Thai, Regional Cuisine",
    price: "$$",
    path: "/usa/newyork/new-york/Mayree",
    image: "/images/mayree1.png"
  },
  {
    name: "Melba's",
    cuisine: "Southern, American",
    price: "$$",
    path: "/usa/newyork/new-york/Melbas",
    image: "/images/melbas1.png"
  },
  {
    name: "Minetta Tavern",
    cuisine: "Steakhouse, American",
    price: "$$$",
    path: "/usa/newyork/new-york/MinettaTavern",
    image: "/images/minettatavern1.png"
  },
  {
    name: "Miss Lily’s",
    cuisine: "Jamaican",
    price: "$$",
    path: "/usa/newyork/new-york/MissLilys",
    image: "/images/misslilys1.png"
  },
  {
    name: "Miss Mamie's Spoonbread Too",
    cuisine: "Southern, American",
    price: "$$",
    path: "/usa/newyork/new-york/MissMamiesSpoonbreadToo",
    image: "/images/missmamiesspoonbreadtoo1.png"
  },
  {
    name: "Mission Ceviche",
    cuisine: "Peruvian",
    price: "$$$",
    path: "/usa/newyork/new-york/MissionCeviche",
    image: "/images/missionceviche1.png"
  },
  {
    name: "MáLà Project",
    cuisine: "Chinese, Sichuan",
    price: "$$",
    path: "/usa/newyork/new-york/MlProject",
    image: "/images/mlproject1.png"
  },
  {
    name: "Momofuku Noodle Bar",
    cuisine: "Asian",
    price: "$$",
    path: "/usa/newyork/new-york/MomofukuNoodleBar",
    image: "/images/momofukunoodlebar1.png"
  },
  {
    name: "Moody Tongue Sushi",
    cuisine: "Sushi, Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/MoodyTongueSushiNEW",
    image: "/images/moodytonguesushi1.png"
  },
  {
    name: "Moono",
    cuisine: "Korean",
    price: "$$$",
    path: "/usa/newyork/new-york/Moono",
    image: "/images/moono1.png"
  },
  {
    name: "Nami Nori",
    cuisine: "Japanese, Creative",
    price: "$",
    path: "/usa/newyork/new-york/NamiNori",
    image: "/images/naminori1.png"
  },
  {
    name: "Naro",
    cuisine: "Korean",
    price: "$$$$",
    path: "/usa/newyork/new-york/Naro",
    image: "/images/naro1.png"
  },
  {
    name: "Nōksu",
    cuisine: "Contemporary, Korean",
    price: "$$$$",
    path: "/usa/newyork/new-york/Nksu",
    image: "/images/nksu1.png"
  },
  {
    name: "Noda",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/newyork/new-york/Noda",
    image: "/images/noda1.png"
  },
  {
    name: "Noreetuh",
    cuisine: "Fusion",
    price: "$$",
    path: "/usa/newyork/new-york/Noreetuh",
    image: "/images/noreetuh1.png"
  },
  {
    name: "Norma Gastronomia Siciliana",
    cuisine: "Italian, Sicilian",
    price: "$$",
    path: "/usa/newyork/new-york/NormaGastronomiaSiciliana",
    image: "/images/normagastronomiasiciliana1.png"
  },
  {
    name: "Novitá",
    cuisine: "Italian, Regional Cuisine",
    price: "$$$",
    path: "/usa/newyork/new-york/Novit",
    image: "/images/novit1.png"
  },
  {
    name: "Noz 17",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/newyork/new-york/Noz17",
    image: "/images/noz171.png"
  },
  {
    name: "Nudibranch",
    cuisine: "Contemporary, Asian",
    price: "$$",
    path: "/usa/newyork/new-york/Nudibranch",
    image: "/images/nudibranch1.png"
  },
  {
    name: "Nyonya",
    cuisine: "Malaysian",
    price: "$",
    path: "/usa/newyork/new-york/Nyonya",
    image: "/images/nyonya1.png"
  },
  {
    name: "Oceans",
    cuisine: "Seafood, Contemporary",
    price: "$$$",
    path: "/usa/newyork/new-york/Oceans",
    image: "/images/oceans1.png"
  },
  {
    name: "Octo",
    cuisine: "Asian Contemporary, Fusion",
    price: "$$",
    path: "/usa/newyork/new-york/OctoNEW",
    image: "/images/octo1.png"
  },
  {
    name: "odo",
    cuisine: "Japanese, Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/Odo",
    image: "/images/odo1.png"
  },
  {
    name: "Odre",
    cuisine: "Korean",
    price: "$$",
    path: "/usa/newyork/new-york/Odre",
    image: "/images/odre1.png"
  },
  {
    name: "Oiji Mi",
    cuisine: "Korean, Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/OijiMi",
    image: "/images/oijimi1.png"
  },
  {
    name: "One White Street",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/OneWhiteStreet",
    image: "/images/onewhitestreet1.png"
  },
  {
    name: "Orsay",
    cuisine: "French",
    price: "$$$",
    path: "/usa/newyork/new-york/Orsay",
    image: "/images/orsay1.png"
  },
  {
    name: "Oso",
    cuisine: "Mexican, Regional Cuisine",
    price: "$$",
    path: "/usa/newyork/new-york/Oso",
    image: "/images/oso1.png"
  },
  {
    name: "Papa San",
    cuisine: "Japanese, Peruvian",
    price: "$$$",
    path: "/usa/newyork/new-york/PapaSan",
    image: "/images/papasan1.png"
  },
  {
    name: "Pastis",
    cuisine: "French",
    price: "$$$",
    path: "/usa/newyork/new-york/Pastis",
    image: "/images/pastis1.png"
  },
  {
    name: "Peak",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/Peak",
    image: "/images/peak1.png"
  },
  {
    name: "Penny",
    cuisine: "Seafood",
    price: "$$$",
    path: "/usa/newyork/new-york/Penny",
    image: "/images/penny1.png"
  },
  {
    name: "Peppercorn Station",
    cuisine: "Chinese, Sichuan",
    price: "$$",
    path: "/usa/newyork/new-york/PeppercornStation",
    image: "/images/peppercornstation1.png"
  },
  {
    name: "Per Se",
    cuisine: "Contemporary, French",
    price: "$$$$",
    path: "/usa/newyork/new-york/PerSe",
    image: "/images/perse1.png"
  },
  {
    name: "Persepolis",
    cuisine: "Persian",
    price: "$$",
    path: "/usa/newyork/new-york/Persepolis",
    image: "/images/persepolis1.png"
  },
  {
    name: "Pinch Chinese",
    cuisine: "Chinese, Regional Cuisine",
    price: "$$",
    path: "/usa/newyork/new-york/PinchChinese",
    image: "/images/pinchchinese1.png"
  },
  {
    name: "Portale",
    cuisine: "Italian, Contemporary",
    price: "$$$",
    path: "/usa/newyork/new-york/Portale",
    image: "/images/portale1.png"
  },
  {
    name: "Potluck Club",
    cuisine: "Chinese, Cantonese",
    price: "$$",
    path: "/usa/newyork/new-york/PotluckClub",
    image: "/images/potluckclub1.png"
  },
  {
    name: "Pranakhon",
    cuisine: "Thai",
    price: "$$$",
    path: "/usa/newyork/new-york/Pranakhon",
    image: "/images/pranakhon1.png"
  },
  {
    name: "Pylos",
    cuisine: "Greek",
    price: "$$$",
    path: "/usa/newyork/new-york/Pylos",
    image: "/images/pylos1.png"
  },
  {
    name: "Raf's",
    cuisine: "European",
    price: "$$$$",
    path: "/usa/newyork/new-york/Rafs",
    image: "/images/rafs1.png"
  },
  {
    name: "Raoul's",
    cuisine: "French, American",
    price: "$$$$",
    path: "/usa/newyork/new-york/Raouls",
    image: "/images/raouls1.png"
  },
  {
    name: "Red Paper Clip",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/RedPaperClip",
    image: "/images/redpaperclip1.png"
  },
  {
    name: "Reverence",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/Reverence",
    image: "/images/reverence1.png"
  },
  {
    name: "Rezdôra",
    cuisine: "Italian, Regional Cuisine",
    price: "$$$$",
    path: "/usa/newyork/new-york/Rezdra",
    image: "/images/rezdra1.png"
  },
  {
    name: "Rosella",
    cuisine: "Japanese, Sushi",
    price: "$$$",
    path: "/usa/newyork/new-york/Rosella",
    image: "/images/rosella1.png"
  },
  {
    name: "Ruffian",
    cuisine: "Contemporary, Creative",
    price: "$$",
    path: "/usa/newyork/new-york/Ruffian",
    image: "/images/ruffian1.png"
  },
  {
    name: "Russ & Daughters Cafe",
    cuisine: "American",
    price: "$$",
    path: "/usa/newyork/new-york/RussDaughtersCafe",
    image: "/images/russdaughterscafe1.png"
  },
  {
    name: "Saga",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/Saga",
    image: "/images/saga1.png"
  },
  {
    name: "Sami & Susu",
    cuisine: "Mediterranean Cuisine",
    price: "$$",
    path: "/usa/newyork/new-york/SamiSusu",
    image: "/images/samisusu1.png"
  },
  {
    name: "Santi",
    cuisine: "Italian Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/Santi",
    image: "/images/santi1.png"
  },
  {
    name: "Secchu Yokota",
    cuisine: "Japanese, Tempura",
    price: "$$$$",
    path: "/usa/newyork/new-york/SecchuYokota",
    image: "/images/secchuyokota1.png"
  },
  {
    name: "See No Evil Pizza",
    cuisine: "Pizza, American Contemporary",
    price: "$$",
    path: "/usa/newyork/new-york/SeeNoEvilPizza",
    image: "/images/seenoevilpizza1.png"
  },
  {
    name: "Semma",
    cuisine: "Indian, Regional Cuisine",
    price: "$$$",
    path: "/usa/newyork/new-york/Semma",
    image: "/images/semma1.png"
  },
  {
    name: "Sempre Oggi",
    cuisine: "Italian",
    price: "$$$$",
    path: "/usa/newyork/new-york/SempreOggi",
    image: "/images/sempreoggi1.png"
  },
  {
    name: "Seoul Salon",
    cuisine: "Korean, Contemporary",
    price: "$$$",
    path: "/usa/newyork/new-york/SeoulSalon",
    image: "/images/seoulsalon1.png"
  },
  {
    name: "Shabushabu Mayumon",
    cuisine: "Japanese, Shabu-shabu",
    price: "$$$$",
    path: "/usa/newyork/new-york/ShabushabuMayumon",
    image: "/images/shabushabumayumon1.png"
  },
  {
    name: "Shion 69 Leonard Street",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/newyork/new-york/Shion69LeonardStreet",
    image: "/images/shion69leonardstreet1.png"
  },
  {
    name: "Shmoné",
    cuisine: "Israeli, Middle Eastern",
    price: "$$$$",
    path: "/usa/newyork/new-york/Shmon",
    image: "/images/shmon1.png"
  },
  {
    name: "Sinsa",
    cuisine: "Korean",
    price: "$$$",
    path: "/usa/newyork/new-york/Sinsa",
    image: "/images/sinsa1.png"
  },
  {
    name: "Smithereens",
    cuisine: "Seafood",
    price: "$$$",
    path: "/usa/newyork/new-york/Smithereens",
    image: "/images/smithereens1.png"
  },
  {
    name: "Soba Totto",
    cuisine: "Japanese, Soba",
    price: "$$",
    path: "/usa/newyork/new-york/SobaTotto",
    image: "/images/sobatotto1.png"
  },
  {
    name: "Sobaya",
    cuisine: "Japanese, Soba",
    price: "$",
    path: "/usa/newyork/new-york/Sobaya",
    image: "/images/sobaya1.png"
  },
  {
    name: "Soda Club",
    cuisine: "Vegan, Italian-American",
    price: "$$",
    path: "/usa/newyork/new-york/SodaClub",
    image: "/images/sodaclub1.png"
  },
  {
    name: "Soothr",
    cuisine: "Thai",
    price: "$$",
    path: "/usa/newyork/new-york/Soothr",
    image: "/images/soothr1.png"
  },
  {
    name: "Superiority Burger",
    cuisine: "Vegetarian, Contemporary",
    price: "$$",
    path: "/usa/newyork/new-york/SuperiorityBurger",
    image: "/images/superiorityburger1.png"
  },
  {
    name: "Sushi Amane",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/newyork/new-york/SushiAmane",
    image: "/images/sushiamane1.png"
  },
  {
    name: "Sushi Ichimura",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/newyork/new-york/SushiIchimura",
    image: "/images/sushiichimura1.png"
  },
  {
    name: "Sushi Ikumi",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/newyork/new-york/SushiIkumi",
    image: "/images/sushiikumi1.png"
  },
  {
    name: "Sushi Nakazawa",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/newyork/new-york/SushiNakazawa",
    image: "/images/sushinakazawa1.png"
  },
  {
    name: "Sushi Noz",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/newyork/new-york/SushiNoz",
    image: "/images/sushinoz1.png"
  },
  {
    name: "Sushi Sho",
    cuisine: "Sushi, Japanese",
    price: "$$$$",
    path: "/usa/newyork/new-york/SushiSho",
    image: "/images/sushisho1.png"
  },
  {
    name: "Sushi Yasuda",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/newyork/new-york/SushiYasuda",
    image: "/images/sushiyasuda1.png"
  },
  {
    name: "Szechuan Gourmet",
    cuisine: "Chinese, Sichuan",
    price: "$$",
    path: "/usa/newyork/new-york/SzechuanGourmet",
    image: "/images/szechuangourmet1.png"
  },
  {
    name: "Tadhanà",
    cuisine: "Filipino, Contemporary",
    price: "$$$",
    path: "/usa/newyork/new-york/Tadhan",
    image: "/images/tadhan1.png"
  },
  {
    name: "Tamarind",
    cuisine: "Indian",
    price: "$$$",
    path: "/usa/newyork/new-york/TamarindNEW",
    image: "/images/tamarind1.png"
  },
  {
    name: "Tatiana",
    cuisine: "Fusion, American",
    price: "$$$",
    path: "/usa/newyork/new-york/Tatiana",
    image: "/images/tatiana1.png"
  },
  {
    name: "Tempura Matsui",
    cuisine: "Japanese, Tempura",
    price: "$$$$",
    path: "/usa/newyork/new-york/TempuraMatsui",
    image: "/images/tempuramatsui1.png"
  },
  {
    name: "Tha Phraya",
    cuisine: "Thai contemporary",
    price: "$$",
    path: "/usa/newyork/new-york/ThaPhraya",
    image: "/images/thaphraya1.png"
  },
  {
    name: "Thai Diner",
    cuisine: "Thai, Fusion",
    price: "$$",
    path: "/usa/newyork/new-york/ThaiDiner",
    image: "/images/thaidiner1.png"
  },
  {
    name: "The Commerce Inn",
    cuisine: "American, Steakhouse",
    price: "$$$",
    path: "/usa/newyork/new-york/TheCommerceInn",
    image: "/images/thecommerceinn1.png"
  },
  {
    name: "The Dining Room at The Guesthouse",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/TheDiningRoomAtTheGuesthouse",
    image: "/images/thediningroomattheguesthouse1.png"
  },
  {
    name: "The Grill",
    cuisine: "American, American Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/TheGrillNEW",
    image: "/images/thegrill1.png"
  },
  {
    name: "The Lambs Club",
    cuisine: "Steakhouse",
    price: "$$$$",
    path: "/usa/newyork/new-york/TheLambsClub",
    image: "/images/thelambsclub1.png"
  },
  {
    name: "The Leopard at Des Artistes",
    cuisine: "Italian, Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/TheLeopardAtDesArtistes",
    image: "/images/theleopardatdesartistes1.png"
  },
  {
    name: "The Modern",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/TheModern",
    image: "/images/themodern1.png"
  },
  {
    name: "The Musket Room",
    cuisine: "Contemporary, American Contemporary",
    price: "$$$$",
    path: "/usa/newyork/new-york/TheMusketRoom",
    image: "/images/themusketroom1.png"
  },
  {
    name: "The Office of Mr. Moto",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/newyork/new-york/TheOfficeOfMrMoto",
    image: "/images/theofficeofmrmoto1.png"
  },
  {
    name: "The Orchard Townhouse",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/usa/newyork/new-york/TheOrchardTownhouse",
    image: "/images/theorchardtownhouse1.png"
  },
  {
    name: "Tolo",
    cuisine: "Chinese",
    price: "$$",
    path: "/usa/newyork/new-york/Tolo",
    image: "/images/tolo1.png"
  },
  {
    name: "Tonchin",
    cuisine: "Japanese, Ramen",
    price: "$",
    path: "/usa/newyork/new-york/Tonchin",
    image: "/images/tonchin1.png"
  },
  {
    name: "Torien",
    cuisine: "Japanese, Yakitori",
    price: "$$$$",
    path: "/usa/newyork/new-york/Torien",
    image: "/images/torien1.png"
  },
  {
    name: "Torrisi",
    cuisine: "Contemporary, Italian-American",
    price: "$$$$",
    path: "/usa/newyork/new-york/Torrisi",
    image: "/images/torrisi1.png"
  },
  {
    name: "Towa",
    cuisine: "Japanese, Contemporary",
    price: "$$$",
    path: "/usa/newyork/new-york/TowaNEW",
    image: "/images/towa1.png"
  },
  {
    name: "Tsukimi",
    cuisine: "Japanese, Seasonal Cuisine",
    price: "$$$$",
    path: "/usa/newyork/new-york/Tsukimi",
    image: "/images/tsukimi1.png"
  },
  {
    name: "Tuome",
    cuisine: "Fusion, Asian Contemporary",
    price: "$$$",
    path: "/usa/newyork/new-york/Tuome",
    image: "/images/tuome1.png"
  },
  {
    name: "Ulivo",
    cuisine: "Italian, Sardinian",
    price: "$$$",
    path: "/usa/newyork/new-york/Ulivo",
    image: "/images/ulivo1.png"
  },
  {
    name: "Una Pizza Napoletana",
    cuisine: "Pizza",
    price: "$$",
    path: "/usa/newyork/new-york/UnaPizzaNapoletana",
    image: "/images/unapizzanapoletana1.png"
  },
  {
    name: "Upland",
    cuisine: "Mediterranean Cuisine, American Contemporary",
    price: "$$$",
    path: "/usa/newyork/new-york/Upland",
    image: "/images/upland1.png"
  },
  {
    name: "Van Đa",
    cuisine: "Vietnamese, Modern Cuisine",
    price: "$$",
    path: "/usa/newyork/new-york/VanA",
    image: "/images/vana1.png"
  },
  {
    name: "Veerays",
    cuisine: "Indian",
    price: "$$$$",
    path: "/usa/newyork/new-york/Veerays",
    image: "/images/veerays1.png"
  },
  {
    name: "Vestry",
    cuisine: "Contemporary, Modern Cuisine",
    price: "$$$$",
    path: "/usa/newyork/new-york/Vestry",
    image: "/images/vestry1.png"
  },
  {
    name: "Via Carota",
    cuisine: "Italian",
    price: "$$",
    path: "/usa/newyork/new-york/ViaCarota",
    image: "/images/viacarota1.png"
  },
  {
    name: "Wayan",
    cuisine: "Indonesian, South East Asian",
    price: "$$$",
    path: "/usa/newyork/new-york/Wayan",
    image: "/images/wayan1.png"
  },
  {
    name: "Yellow Rose",
    cuisine: "Tex-Mex",
    price: "$$",
    path: "/usa/newyork/new-york/YellowRose",
    image: "/images/yellowrose1.png"
  },
  {
    name: "YingTao",
    cuisine: "Contemporary, Chinese",
    price: "$$$$",
    path: "/usa/newyork/new-york/Yingtao",
    image: "/images/yingtao1.png"
  },
  {
    name: "Yoshino",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/newyork/new-york/Yoshino",
    image: "/images/yoshino1.png"
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
        <a href="/" style={{ textDecoration: 'none' }}
          onClick={(e) => { e.preventDefault(); navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
            <img src="/images/theepicurean.png" alt="The Epicurean"
              style={{ width: '150px', height: '40px', objectFit: 'contain' }} />
          </div>
        </a>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <button style={{ background: 'none', border: 'none', fontSize: '18px', fontWeight: '500',
            cursor: 'pointer', color: '#333', padding: '0.5rem 1rem', borderRadius: '4px', transition: 'background-color 0.3s' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            onClick={() => navigate('/destinations')}>Destinations</button>
          <button style={{ background: 'none', border: 'none', fontSize: '18px', fontWeight: '500',
            cursor: 'pointer', color: '#333', padding: '0.5rem 1rem', borderRadius: '4px', transition: 'background-color 0.3s' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>Articles</button>
          <button style={{ background: 'none', border: 'none', fontSize: '18px', fontWeight: '500',
            cursor: 'pointer', color: '#333', padding: '0.5rem 1rem', borderRadius: '4px', transition: 'background-color 0.3s' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            onClick={() => { window.location.href = '/methodology'; }}>Methodology</button>
        </div>
      </nav>

      <div style={{
        width: '100vw',
        height: '400px',
        marginTop: '92px',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Southwest_corner_of_Central_Park%2C_looking_east%2C_NYC.jpg/1280px-Southwest_corner_of_Central_Park%2C_looking_east%2C_NYC.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem 2rem 0 2rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#333', margin: '0 0 1rem 0',
          fontFamily: 'Times New Roman, serif' }}>{pageTitle}</h1>
        <p style={{ fontSize: '1.1rem', color: '#666', margin: '0 0 2rem 0',
          fontFamily: 'Times New Roman, serif' }}>
          {restaurants.length} restaurant{restaurants.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div style={{ padding: '0 2rem 4rem 2rem', width: '100vw', boxSizing: 'border-box', margin: 0 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(4, 300px)', gap: '2rem', justifyContent: 'start' }}>
          {restaurants.map((restaurant, index) => (
            <div key={index} onClick={() => handleCardClick(restaurant.path)}
              style={{ backgroundColor: 'white', borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)', overflow: 'hidden',
                cursor: 'pointer', transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                border: '1px solid #e9ecef' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
              }}>
              <div style={{ height: '200px', backgroundColor: '#f8f9fa', position: 'relative', overflow: 'hidden' }}>
                <img src={restaurant.image} alt={restaurant.name} loading="lazy" decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }} />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                  backgroundColor: '#f8f9fa', display: 'none', alignItems: 'center',
                  justifyContent: 'center', color: '#666', fontSize: '14px', fontWeight: '500' }}>
                  {restaurant.name}
                </div>
              </div>
              <div style={{ padding: '1.5rem', backgroundColor: 'white' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#333',
                  margin: '0 0 0.5rem 0', fontFamily: 'Times New Roman, serif' }}>
                  {restaurant.name}
                </h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.9rem', color: '#666', fontFamily: 'Times New Roman, serif' }}>
                    {restaurant.cuisine}
                  </span>
                  <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#333',
                    fontFamily: 'Times New Roman, serif' }}>
                    {restaurant.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer style={{ backgroundColor: '#f8f9fa', padding: '2rem', textAlign: 'center',
        borderTop: '1px solid #e9ecef', width: '100vw', boxSizing: 'border-box', margin: 0 }}>
        <p style={{ fontSize: '14px', color: '#666', margin: 0, fontFamily: 'Times New Roman, serif' }}>
          a Glass production
        </p>
      </footer>
    </div>
  );
};

export default Restaurants;
