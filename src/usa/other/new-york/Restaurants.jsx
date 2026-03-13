import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "New York";

const restaurants = [
  {
    name: "4 Charles Prime Rib",
    cuisine: "Steakhouse",
    price: "$$$$",
    path: "/usa/other/new-york/4-charles-prime-rib",
    image: '/images/4-charles-prime-rib1.png'
  },
  {
    name: "53",
    cuisine: "Asian, Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/53",
    image: '/images/531.png'
  },
  {
    name: "63 Clinton",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/63-clinton",
    image: '/images/63-clinton1.png'
  },
  {
    name: "8282",
    cuisine: "Korean, Fusion",
    price: "$$",
    path: "/usa/other/new-york/8282",
    image: '/images/82821.png'
  },
  {
    name: "abcV",
    cuisine: "Vegetarian, Contemporary",
    price: "$$$",
    path: "/usa/other/new-york/abcv",
    image: '/images/abcv1.png'
  },
  {
    name: "Acru",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/acru",
    image: '/images/acru1.png'
  },
  {
    name: "Adda",
    cuisine: "Indian",
    price: "$$$",
    path: "/usa/other/new-york/adda",
    image: '/images/adda1.png'
  },
  {
    name: "Ai Fiori",
    cuisine: "Italian, French",
    price: "$$$$",
    path: "/usa/other/new-york/ai-fiori",
    image: '/images/ai-fiori1.png'
  },
  {
    name: "Altro Paradiso",
    cuisine: "Italian",
    price: "$$$",
    path: "/usa/other/new-york/altro-paradiso",
    image: '/images/altro-paradiso1.png'
  },
  {
    name: "Aquavit",
    cuisine: "Scandinavian, Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/aquavit",
    image: '/images/aquavit1.png'
  },
  {
    name: "Ariari",
    cuisine: "Korean, Regional Cuisine",
    price: "$$$",
    path: "/usa/other/new-york/ariari",
    image: '/images/ariari1.png'
  },
  {
    name: "aRoqa",
    cuisine: "Indian, Contemporary",
    price: "$$$",
    path: "/usa/other/new-york/aroqa",
    image: '/images/aroqa1.png'
  },
  {
    name: "Atera",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/atera",
    image: '/images/atera1.png'
  },
  {
    name: "Atla",
    cuisine: "Mexican, Contemporary",
    price: "$$$",
    path: "/usa/other/new-york/atla",
    image: '/images/atla1.png'
  },
  {
    name: "Atoboy",
    cuisine: "Korean, Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/atoboy",
    image: '/images/atoboy1.png'
  },
  {
    name: "Atomix",
    cuisine: "Korean, Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/atomix",
    image: '/images/atomix1.png'
  },
  {
    name: "Avant Garden",
    cuisine: "Vegan",
    price: "$$",
    path: "/usa/other/new-york/avant-garden",
    image: '/images/avant-garden1.png'
  },
  {
    name: "Ballato",
    cuisine: "Italian-American, Italian",
    price: "$$$",
    path: "/usa/other/new-york/ballato",
    image: '/images/ballato1.png'
  },
  {
    name: "Bangkok Supper Club",
    cuisine: "Thai",
    price: "$$$",
    path: "/usa/other/new-york/bangkok-supper-club",
    image: '/images/bangkok-supper-club1.png'
  },
  {
    name: "Bar Miller",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/new-york/bar-miller",
    image: '/images/bar-miller1.png'
  },
  {
    name: "Barawine",
    cuisine: "Contemporary, French Contemporary",
    price: "$$$",
    path: "/usa/other/new-york/barawine",
    image: '/images/barawine1.png'
  },
  {
    name: "Bartolo",
    cuisine: "Spanish",
    price: "$$$",
    path: "/usa/other/new-york/bartolo",
    image: '/images/bartolo1.png'
  },
  {
    name: "Bayon",
    cuisine: "Cambodian",
    price: "$",
    path: "/usa/other/new-york/bayon",
    image: '/images/bayon1.png'
  },
  {
    name: "Benoit",
    cuisine: "French",
    price: "$$$",
    path: "/usa/other/new-york/benoit",
    image: '/images/benoit1.png'
  },
  {
    name: "bōm",
    cuisine: "Korean, Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/bm",
    image: '/images/bm1.png'
  },
  {
    name: "bōm",
    cuisine: "Korean, Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/bm",
    image: '/images/bm1.png'
  },
  {
    name: "Bánh Anh Em",
    cuisine: "Vietnamese",
    price: "$$",
    path: "/usa/other/new-york/bnh-anh-em",
    image: '/images/bnh-anh-em1.png'
  },
  {
    name: "Bohemian Spirit",
    cuisine: "Czech",
    price: "$$",
    path: "/usa/other/new-york/bohemian-spirit",
    image: '/images/bohemian-spirit1.png'
  },
  {
    name: "Bridges",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/usa/other/new-york/bridges",
    image: '/images/bridges1.png'
  },
  {
    name: "Bridges",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/usa/other/new-york/bridges",
    image: '/images/bridges1.png'
  },
  {
    name: "Bungalow",
    cuisine: "Indian",
    price: "$$$",
    path: "/usa/other/new-york/bungalow",
    image: '/images/bungalow1.png'
  },
  {
    name: "C as in Charlie",
    cuisine: "Fusion",
    price: "$$",
    path: "/usa/other/new-york/c-as-in-charlie",
    image: '/images/c-as-in-charlie1.png'
  },
  {
    name: "Cadence",
    cuisine: "Vegan, Southern",
    price: "$$$",
    path: "/usa/other/new-york/cadence",
    image: '/images/cadence1.png'
  },
  {
    name: "Café Boulud",
    cuisine: "French",
    price: "$$$$",
    path: "/usa/other/new-york/caf-boulud",
    image: '/images/caf-boulud1.png'
  },
  {
    name: "Café Carmellini",
    cuisine: "Mediterranean Cuisine, American",
    price: "$$$",
    path: "/usa/other/new-york/caf-carmellini",
    image: '/images/caf-carmellini1.png'
  },
  {
    name: "Cafe Commerce",
    cuisine: "American, French Contemporary",
    price: "$$$",
    path: "/usa/other/new-york/cafe-commerce",
    image: '/images/cafe-commerce1.png'
  },
  {
    name: "Cafe Sabarsky",
    cuisine: "Austrian",
    price: "$$",
    path: "/usa/other/new-york/cafe-sabarsky",
    image: '/images/cafe-sabarsky1.png'
  },
  {
    name: "Carbone",
    cuisine: "Italian, Italian-American",
    price: "$$$$",
    path: "/usa/other/new-york/carbone",
    image: '/images/carbone1.png'
  },
  {
    name: "Carlotto",
    cuisine: "Contemporary, Italian-American",
    price: "$$$",
    path: "/usa/other/new-york/carlotto",
    image: '/images/carlotto1.png'
  },
  {
    name: "Carne Mare",
    cuisine: "Steakhouse, Italian",
    price: "$$$$",
    path: "/usa/other/new-york/carne-mare",
    image: '/images/carne-mare1.png'
  },
  {
    name: "Casa Dani",
    cuisine: "Spanish, Seafood",
    price: "$$$$",
    path: "/usa/other/new-york/casa-dani",
    image: '/images/casa-dani1.png'
  },
  {
    name: "Casa Mono",
    cuisine: "Spanish, Contemporary",
    price: "$$$",
    path: "/usa/other/new-york/casa-mono",
    image: '/images/casa-mono1.png'
  },
  {
    name: "Caviar Russe",
    cuisine: "Contemporary, Seafood",
    price: "$$$$",
    path: "/usa/other/new-york/caviar-russe",
    image: '/images/caviar-russe1.png'
  },
  {
    name: "Cervo’s",
    cuisine: "Spanish, Seafood",
    price: "$$$",
    path: "/usa/other/new-york/cervos",
    image: '/images/cervos1.png'
  },
  {
    name: "Cha Kee",
    cuisine: "Asian",
    price: "$$",
    path: "/usa/other/new-york/cha-kee",
    image: '/images/cha-kee1.png'
  },
  {
    name: "Chalong",
    cuisine: "Thai, Southern Thai",
    price: "$$$",
    path: "/usa/other/new-york/chalong",
    image: '/images/chalong1.png'
  },
  {
    name: "Chama Mama",
    cuisine: "Central Asian",
    price: "$$",
    path: "/usa/other/new-york/chama-mama",
    image: '/images/chama-mama1.png'
  },
  {
    name: "Chambers",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/usa/other/new-york/chambers",
    image: '/images/chambers1.png'
  },
  {
    name: "Chef's Table at Brooklyn Fare",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/chefs-table-at-brooklyn-fare",
    image: '/images/chefs-table-at-brooklyn-fare1.png'
  },
  {
    name: "CheLi",
    cuisine: "Chinese, Shanghainese",
    price: "$$",
    path: "/usa/other/new-york/cheli",
    image: '/images/cheli1.png'
  },
  {
    name: "Chez Fifi",
    cuisine: "French",
    price: "$$$$",
    path: "/usa/other/new-york/chez-fifi",
    image: '/images/chez-fifi1.png'
  },
  {
    name: "Chick Chick",
    cuisine: "Asian, Chicken Specialities",
    price: "$$",
    path: "/usa/other/new-york/chick-chick",
    image: '/images/chick-chick1.png'
  },
  {
    name: "Cho Dang Gol",
    cuisine: "Korean",
    price: "$$",
    path: "/usa/other/new-york/cho-dang-gol",
    image: '/images/cho-dang-gol1.png'
  },
  {
    name: "Chola",
    cuisine: "Indian, Regional Cuisine",
    price: "$$$",
    path: "/usa/other/new-york/chola",
    image: '/images/chola1.png'
  },
  {
    name: "Ci Siamo",
    cuisine: "Italian",
    price: "$$$",
    path: "/usa/other/new-york/ci-siamo",
    image: '/images/ci-siamo1.png'
  },
  {
    name: "Claud",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/usa/other/new-york/claud",
    image: '/images/claud1.png'
  },
  {
    name: "Cómodo",
    cuisine: "Latin American, Regional Cuisine",
    price: "$$",
    path: "/usa/other/new-york/cmodo",
    image: '/images/cmodo1.png'
  },
  {
    name: "Comal",
    cuisine: "Mexican",
    price: "$$$",
    path: "/usa/other/new-york/comal",
    image: '/images/comal1.png'
  },
  {
    name: "Community Food & Juice",
    cuisine: "American, Contemporary",
    price: "$$",
    path: "/usa/other/new-york/community-food-juice",
    image: '/images/community-food-juice1.png'
  },
  {
    name: "Coqodaq",
    cuisine: "Korean",
    price: "$$",
    path: "/usa/other/new-york/coqodaq",
    image: '/images/coqodaq1.png'
  },
  {
    name: "Corima",
    cuisine: "Mexican, Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/corima",
    image: '/images/corima1.png'
  },
  {
    name: "Cosme",
    cuisine: "Mexican, Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/cosme",
    image: '/images/cosme1.png'
  },
  {
    name: "Cote",
    cuisine: "Korean, Steakhouse",
    price: "$$$$",
    path: "/usa/other/new-york/cote",
    image: '/images/cote1.png'
  },
  {
    name: "Covacha",
    cuisine: "Mexican, Regional Cuisine",
    price: "$$",
    path: "/usa/other/new-york/covacha",
    image: '/images/covacha1.png'
  },
  {
    name: "Crane Club",
    cuisine: "Steakhouse",
    price: "$$$$",
    path: "/usa/other/new-york/crane-club",
    image: '/images/crane-club1.png'
  },
  {
    name: "Crevette",
    cuisine: "Seafood, Spanish",
    price: "$$$",
    path: "/usa/other/new-york/crevette",
    image: '/images/crevette1.png'
  },
  {
    name: "Crown Shy",
    cuisine: "Contemporary, American",
    price: "$$$",
    path: "/usa/other/new-york/crown-shy",
    image: '/images/crown-shy1.png'
  },
  {
    name: "César",
    cuisine: "Contemporary, Seafood",
    price: "$$$$",
    path: "/usa/other/new-york/csar",
    image: '/images/csar1.png'
  },
  {
    name: "Dagon",
    cuisine: "Mediterranean Cuisine, Middle Eastern",
    price: "$$$",
    path: "/usa/other/new-york/dagon",
    image: '/images/dagon1.png'
  },
  {
    name: "Dame",
    cuisine: "Seafood, Contemporary",
    price: "$$$",
    path: "/usa/other/new-york/dame",
    image: '/images/dame1.png'
  },
  {
    name: "Dame",
    cuisine: "Seafood, Contemporary",
    price: "$$$",
    path: "/usa/other/new-york/dame",
    image: '/images/dame1.png'
  },
  {
    name: "Daniel",
    cuisine: "French",
    price: "$$$$",
    path: "/usa/other/new-york/daniel",
    image: '/images/daniel1.png'
  },
  {
    name: "Dhamaka",
    cuisine: "Indian",
    price: "$$",
    path: "/usa/other/new-york/dhamaka",
    image: '/images/dhamaka1.png'
  },
  {
    name: "Dim Sum Go Go",
    cuisine: "Chinese, Dim Sum",
    price: "$$",
    path: "/usa/other/new-york/dim-sum-go-go",
    image: '/images/dim-sum-go-go1.png'
  },
  {
    name: "Dirt Candy",
    cuisine: "Vegetarian, Vegan",
    price: "$$$$",
    path: "/usa/other/new-york/dirt-candy",
    image: '/images/dirt-candy1.png'
  },
  {
    name: "Don Angie",
    cuisine: "Italian, American",
    price: "$$$",
    path: "/usa/other/new-york/don-angie",
    image: '/images/don-angie1.png'
  },
  {
    name: "Don Antonio",
    cuisine: "Pizza",
    price: "$$",
    path: "/usa/other/new-york/don-antonio",
    image: '/images/don-antonio1.png'
  },
  {
    name: "Dons Bogam",
    cuisine: "Korean, Barbecue",
    price: "$$",
    path: "/usa/other/new-york/dons-bogam",
    image: '/images/dons-bogam1.png'
  },
  {
    name: "El Fish Marisqueria",
    cuisine: "Mexican, Seafood",
    price: "$$$",
    path: "/usa/other/new-york/el-fish-marisqueria",
    image: '/images/el-fish-marisqueria1.png'
  },
  {
    name: "Eléa",
    cuisine: "Greek, Seafood",
    price: "$$$",
    path: "/usa/other/new-york/ela",
    image: '/images/ela1.png'
  },
  {
    name: "Eleven Madison Park",
    cuisine: "Contemporary, Vegan",
    price: "$$$$",
    path: "/usa/other/new-york/eleven-madison-park",
    image: '/images/eleven-madison-park1.png'
  },
  {
    name: "Emilio's Ballato",
    cuisine: "Italian-American, Italian",
    price: "$$$",
    path: "/usa/other/new-york/emilios-ballato",
    image: '/images/emilios-ballato1.png'
  },
  {
    name: "Ernesto's",
    cuisine: "Spanish",
    price: "$$$$",
    path: "/usa/other/new-york/ernestos",
    image: '/images/ernestos1.png'
  },
  {
    name: "Essential by Christophe",
    cuisine: "French Contemporary, Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/essential-by-christophe",
    image: '/images/essential-by-christophe1.png'
  },
  {
    name: "Estela",
    cuisine: "Contemporary, American",
    price: "$$$$",
    path: "/usa/other/new-york/estela",
    image: '/images/estela1.png'
  },
  {
    name: "Eulalie",
    cuisine: "French, Classic French",
    price: "$$$",
    path: "/usa/other/new-york/eulalie",
    image: '/images/eulalie1.png'
  },
  {
    name: "Family Meal at Blue Hill",
    cuisine: "American",
    price: "$$$$",
    path: "/usa/other/new-york/family-meal-at-blue-hill",
    image: '/images/family-meal-at-blue-hill1.png'
  },
  {
    name: "Farra",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/usa/other/new-york/farra",
    image: '/images/farra1.png'
  },
  {
    name: "Fasano",
    cuisine: "Italian",
    price: "$$$$",
    path: "/usa/other/new-york/fasano",
    image: '/images/fasano1.png'
  },
  {
    name: "Forsythia",
    cuisine: "Italian",
    price: "$$$$",
    path: "/usa/other/new-york/forsythia",
    image: '/images/forsythia1.png'
  },
  {
    name: "Forsythia",
    cuisine: "Italian",
    price: "$$$$",
    path: "/usa/other/new-york/forsythia",
    image: '/images/forsythia1.png'
  },
  {
    name: "Foul Witch",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/foul-witch",
    image: '/images/foul-witch1.png'
  },
  {
    name: "Four Twenty Five",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/four-twenty-five",
    image: '/images/four-twenty-five1.png'
  },
  {
    name: "Foxface Natural",
    cuisine: "Creative",
    price: "$$$",
    path: "/usa/other/new-york/foxface-natural",
    image: '/images/foxface-natural1.png'
  },
  {
    name: "Frevo",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/frevo",
    image: '/images/frevo1.png'
  },
  {
    name: "Gabriel Kreuther",
    cuisine: "Contemporary, Alsatian",
    price: "$$$$",
    path: "/usa/other/new-york/gabriel-kreuther",
    image: '/images/gabriel-kreuther1.png'
  },
  {
    name: "Gallaghers",
    cuisine: "Steakhouse",
    price: "$$$",
    path: "/usa/other/new-york/gallaghers",
    image: '/images/gallaghers1.png'
  },
  {
    name: "Genesis House Restaurant",
    cuisine: "Korean, Korean Contemporary",
    price: "$$$",
    path: "/usa/other/new-york/genesis-house-restaurant",
    image: '/images/genesis-house-restaurant1.png'
  },
  {
    name: "Gramercy Tavern",
    cuisine: "Contemporary, American",
    price: "$$$$",
    path: "/usa/other/new-york/gramercy-tavern",
    image: '/images/gramercy-tavern1.png'
  },
  {
    name: "Gui",
    cuisine: "Steakhouse, Korean Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/gui",
    image: '/images/gui1.png'
  },
  {
    name: "HAGS",
    cuisine: "Contemporary, Innovative",
    price: "$$$$",
    path: "/usa/other/new-york/hags",
    image: '/images/hags1.png'
  },
  {
    name: "HanGawi",
    cuisine: "Korean, Vegetarian",
    price: "$$",
    path: "/usa/other/new-york/hangawi",
    image: '/images/hangawi1.png'
  },
  {
    name: "Hav & Mar",
    cuisine: "Ethiopian, Fusion",
    price: "$$$",
    path: "/usa/other/new-york/hav-mar",
    image: '/images/hav-mar1.png'
  },
  {
    name: "Heroes",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/usa/other/new-york/heroes",
    image: '/images/heroes1.png'
  },
  {
    name: "Hirohisa",
    cuisine: "Japanese, Classic Cuisine",
    price: "$$$$",
    path: "/usa/other/new-york/hirohisa",
    image: '/images/hirohisa1.png'
  },
  {
    name: "Huso",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/huso",
    image: '/images/huso1.png'
  },
  {
    name: "Hyderabadi Zaiqa",
    cuisine: "Indian",
    price: "$",
    path: "/usa/other/new-york/hyderabadi-zaiqa",
    image: '/images/hyderabadi-zaiqa1.png'
  },
  {
    name: "Hyun",
    cuisine: "Korean, Steakhouse",
    price: "$$$$",
    path: "/usa/other/new-york/hyun",
    image: '/images/hyun1.png'
  },
  {
    name: "I Sodi",
    cuisine: "Italian",
    price: "$$$",
    path: "/usa/other/new-york/i-sodi",
    image: '/images/i-sodi1.png'
  },
  {
    name: "Icca",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/new-york/icca",
    image: '/images/icca1.png'
  },
  {
    name: "Il Fiorista",
    cuisine: "Contemporary, Mediterranean Cuisine",
    price: "$$$",
    path: "/usa/other/new-york/il-fiorista",
    image: '/images/il-fiorista1.png'
  },
  {
    name: "Ishq",
    cuisine: "Indian",
    price: "$$$",
    path: "/usa/other/new-york/ishq",
    image: '/images/ishq1.png'
  },
  {
    name: "Ito",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/new-york/ito",
    image: '/images/ito1.png'
  },
  {
    name: "Ivan Ramen",
    cuisine: "Japanese, Ramen",
    price: "$$",
    path: "/usa/other/new-york/ivan-ramen",
    image: '/images/ivan-ramen1.png'
  },
  {
    name: "Izakaya Futago",
    cuisine: "Japanese, Soba",
    price: "$$",
    path: "/usa/other/new-york/izakaya-futago",
    image: '/images/izakaya-futago1.png'
  },
  {
    name: "Jean-Georges",
    cuisine: "Contemporary, French Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/jean-georges",
    image: '/images/jean-georges1.png'
  },
  {
    name: "Jeju Noodle Bar",
    cuisine: "Korean",
    price: "$$$",
    path: "/usa/other/new-york/jeju-noodle-bar",
    image: '/images/jeju-noodle-bar1.png'
  },
  {
    name: "J.G. Melon",
    cuisine: "American",
    price: "$",
    path: "/usa/other/new-york/jg-melon",
    image: '/images/jg-melon1.png'
  },
  {
    name: "Jōji",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/new-york/jji",
    image: '/images/jji1.png'
  },
  {
    name: "JoJo",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/usa/other/new-york/jojo",
    image: '/images/jojo1.png'
  },
  {
    name: "Joo Ok",
    cuisine: "Korean, Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/joo-ok",
    image: '/images/joo-ok1.png'
  },
  {
    name: "Joomak",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/joomak",
    image: '/images/joomak1.png'
  },
  {
    name: "Jua",
    cuisine: "Korean, Korean Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/jua",
    image: '/images/jua1.png'
  },
  {
    name: "Jungsik New York",
    cuisine: "Korean, Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/jungsik-new-york",
    image: '/images/jungsik-new-york1.png'
  },
  {
    name: "Junoon",
    cuisine: "Indian, Contemporary",
    price: "$$$",
    path: "/usa/other/new-york/junoon",
    image: '/images/junoon1.png'
  },
  {
    name: "Jupiter",
    cuisine: "Italian",
    price: "$$$",
    path: "/usa/other/new-york/jupiter",
    image: '/images/jupiter1.png'
  },
  {
    name: "Kabawa",
    cuisine: "Caribbean",
    price: "$$$$",
    path: "/usa/other/new-york/kabawa",
    image: '/images/kabawa1.png'
  },
  {
    name: "Kanoyama",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/new-york/kanoyama",
    image: '/images/kanoyama1.png'
  },
  {
    name: "Kanyakumari",
    cuisine: "Indian, Regional Cuisine",
    price: "$$$",
    path: "/usa/other/new-york/kanyakumari",
    image: '/images/kanyakumari1.png'
  },
  {
    name: "Katz's",
    cuisine: "Deli",
    price: "$",
    path: "/usa/other/new-york/katzs",
    image: '/images/katzs1.png'
  },
  {
    name: "Kebab aur Sharab",
    cuisine: "Indian, Regional Cuisine",
    price: "$$$",
    path: "/usa/other/new-york/kebab-aur-sharab",
    image: '/images/kebab-aur-sharab1.png'
  },
  {
    name: "King",
    cuisine: "Mediterranean Cuisine, Italian",
    price: "$$$",
    path: "/usa/other/new-york/king",
    image: '/images/king1.png'
  },
  {
    name: "Kochi",
    cuisine: "Korean, Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/kochi",
    image: '/images/kochi1.png'
  },
  {
    name: "Koloman",
    cuisine: "Contemporary, European",
    price: "$$$$",
    path: "/usa/other/new-york/koloman",
    image: '/images/koloman1.png'
  },
  {
    name: "Kosaka",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/new-york/kosaka",
    image: '/images/kosaka1.png'
  },
  {
    name: "Kubeh",
    cuisine: "Middle Eastern",
    price: "$$",
    path: "/usa/other/new-york/kubeh",
    image: '/images/kubeh1.png'
  },
  {
    name: "Kung Fu Little Steamed Buns Ramen",
    cuisine: "Chinese, Dumplings",
    price: "$",
    path: "/usa/other/new-york/kung-fu-little-steamed-buns-ramen",
    image: '/images/kung-fu-little-steamed-buns-ramen1.png'
  },
  {
    name: "Kyma",
    cuisine: "Greek, Seafood",
    price: "$$$",
    path: "/usa/other/new-york/kyma",
    image: '/images/kyma1.png'
  },
  {
    name: "La Devozione: The Oval",
    cuisine: "Italian",
    price: "$$$$",
    path: "/usa/other/new-york/la-devozione-the-oval",
    image: '/images/la-devozione-the-oval1.png'
  },
  {
    name: "La Dong",
    cuisine: "Vietnamese",
    price: "$$",
    path: "/usa/other/new-york/la-dong",
    image: '/images/la-dong1.png'
  },
  {
    name: "La Mercerie",
    cuisine: "French, Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/la-mercerie",
    image: '/images/la-mercerie1.png'
  },
  {
    name: "La Tête d’Or",
    cuisine: "Steakhouse, American",
    price: "$$$$",
    path: "/usa/other/new-york/la-tte-dor",
    image: '/images/la-tte-dor1.png'
  },
  {
    name: "L’Abeille",
    cuisine: "French, Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/labeille",
    image: '/images/labeille1.png'
  },
  {
    name: "L’abeille à Côté",
    cuisine: "French, Asian",
    price: "$$$$",
    path: "/usa/other/new-york/labeille-ct",
    image: '/images/labeille-ct1.png'
  },
  {
    name: "Laliko",
    cuisine: "Central Asian",
    price: "$$",
    path: "/usa/other/new-york/laliko",
    image: '/images/laliko1.png'
  },
  {
    name: "Le B",
    cuisine: "Classic French, Asian",
    price: "$$$$",
    path: "/usa/other/new-york/le-b",
    image: '/images/le-b1.png'
  },
  {
    name: "Le Bernardin",
    cuisine: "Seafood",
    price: "$$$$",
    path: "/usa/other/new-york/le-bernardin",
    image: '/images/le-bernardin1.png'
  },
  {
    name: "Le Coucou",
    cuisine: "French, Classic French",
    price: "$$$$",
    path: "/usa/other/new-york/le-coucou",
    image: '/images/le-coucou1.png'
  },
  {
    name: "Le Coucou",
    cuisine: "French",
    price: "$$$$",
    path: "/usa/other/new-york/le-coucou",
    image: '/images/le-coucou1.png'
  },
  {
    name: "Le Gigot",
    cuisine: "French",
    price: "$$$",
    path: "/usa/other/new-york/le-gigot",
    image: '/images/le-gigot1.png'
  },
  {
    name: "Le Jardinier New York",
    cuisine: "French, Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/le-jardinier-new-york",
    image: '/images/le-jardinier-new-york1.png'
  },
  {
    name: "Le Pavillon",
    cuisine: "Contemporary, French",
    price: "$$$$",
    path: "/usa/other/new-york/le-pavillon",
    image: '/images/le-pavillon1.png'
  },
  {
    name: "Le Rock",
    cuisine: "Contemporary, French",
    price: "$$$$",
    path: "/usa/other/new-york/le-rock",
    image: '/images/le-rock1.png'
  },
  {
    name: "Le Veau d'Or",
    cuisine: "French",
    price: "$$$",
    path: "/usa/other/new-york/le-veau-dor",
    image: '/images/le-veau-dor1.png'
  },
  {
    name: "Lei",
    cuisine: "Chinese, Contemporary",
    price: "$$",
    path: "/usa/other/new-york/lei",
    image: '/images/lei1.png'
  },
  {
    name: "Little Alley",
    cuisine: "Chinese, Shanghainese",
    price: "$$",
    path: "/usa/other/new-york/little-alley",
    image: '/images/little-alley1.png'
  },
  {
    name: "Little Myanmar",
    cuisine: "Burmese",
    price: "$$",
    path: "/usa/other/new-york/little-myanmar",
    image: '/images/little-myanmar1.png'
  },
  {
    name: "Lobster Club",
    cuisine: "Japanese, Contemporary",
    price: "$$$",
    path: "/usa/other/new-york/lobster-club",
    image: '/images/lobster-club1.png'
  },
  {
    name: "Lola Taverna",
    cuisine: "Greek, Mediterranean Cuisine",
    price: "$$$",
    path: "/usa/other/new-york/lola-taverna",
    image: '/images/lola-taverna1.png'
  },
  {
    name: "Lord's",
    cuisine: "English, Contemporary",
    price: "$$$",
    path: "/usa/other/new-york/lords",
    image: '/images/lords1.png'
  },
  {
    name: "Loring Place",
    cuisine: "American",
    price: "$$$",
    path: "/usa/other/new-york/loring-place",
    image: '/images/loring-place1.png'
  },
  {
    name: "Lungi",
    cuisine: "Sri Lankan, Indian",
    price: "$$$",
    path: "/usa/other/new-york/lungi",
    image: '/images/lungi1.png'
  },
  {
    name: "Lupa",
    cuisine: "Italian",
    price: "$$$",
    path: "/usa/other/new-york/lupa",
    image: '/images/lupa1.png'
  },
  {
    name: "Ly Ly Vietnam Cookhouse",
    cuisine: "Vietnamese",
    price: "$$",
    path: "/usa/other/new-york/ly-ly-vietnam-cookhouse",
    image: '/images/ly-ly-vietnam-cookhouse1.png'
  },
  {
    name: "Ma•dé",
    cuisine: "South East Asian, Seafood",
    price: "$$$",
    path: "/usa/other/new-york/mad",
    image: '/images/mad1.png'
  },
  {
    name: "Maison Passerelle",
    cuisine: "French, African",
    price: "$$$$",
    path: "/usa/other/new-york/maison-passerelle",
    image: '/images/maison-passerelle1.png'
  },
  {
    name: "Manhatta",
    cuisine: "Contemporary, American",
    price: "$$$$",
    path: "/usa/other/new-york/manhatta",
    image: '/images/manhatta1.png'
  },
  {
    name: "Marea",
    cuisine: "Seafood, Italian",
    price: "$$$$",
    path: "/usa/other/new-york/marea",
    image: '/images/marea1.png'
  },
  {
    name: "Mari",
    cuisine: "Korean",
    price: "$$$$",
    path: "/usa/other/new-york/mari",
    image: '/images/mari1.png'
  },
  {
    name: "Markette",
    cuisine: "Contemporary, Caribbean",
    price: "$$$",
    path: "/usa/other/new-york/markette",
    image: '/images/markette1.png'
  },
  {
    name: "Masa",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/new-york/masa",
    image: '/images/masa1.png'
  },
  {
    name: "Massara",
    cuisine: "Italian, Regional Cuisine",
    price: "$$$",
    path: "/usa/other/new-york/massara",
    image: '/images/massara1.png'
  },
  {
    name: "MayRee",
    cuisine: "Thai, Regional Cuisine",
    price: "$$",
    path: "/usa/other/new-york/mayree",
    image: '/images/mayree1.png'
  },
  {
    name: "Melba's",
    cuisine: "Southern, American",
    price: "$$",
    path: "/usa/other/new-york/melbas",
    image: '/images/melbas1.png'
  },
  {
    name: "Minetta Tavern",
    cuisine: "Steakhouse, American",
    price: "$$$",
    path: "/usa/other/new-york/minetta-tavern",
    image: '/images/minetta-tavern1.png'
  },
  {
    name: "Miss Lily’s",
    cuisine: "Jamaican",
    price: "$$",
    path: "/usa/other/new-york/miss-lilys",
    image: '/images/miss-lilys1.png'
  },
  {
    name: "Miss Mamie's Spoonbread Too",
    cuisine: "Southern, American",
    price: "$$",
    path: "/usa/other/new-york/miss-mamies-spoonbread-too",
    image: '/images/miss-mamies-spoonbread-too1.png'
  },
  {
    name: "Mission Ceviche",
    cuisine: "Peruvian",
    price: "$$$",
    path: "/usa/other/new-york/mission-ceviche",
    image: '/images/mission-ceviche1.png'
  },
  {
    name: "MáLà Project",
    cuisine: "Chinese, Sichuan",
    price: "$$",
    path: "/usa/other/new-york/ml-project",
    image: '/images/ml-project1.png'
  },
  {
    name: "Momofuku Noodle Bar",
    cuisine: "Asian",
    price: "$$",
    path: "/usa/other/new-york/momofuku-noodle-bar",
    image: '/images/momofuku-noodle-bar1.png'
  },
  {
    name: "Moody Tongue Sushi",
    cuisine: "Sushi, Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/moody-tongue-sushi",
    image: '/images/moody-tongue-sushi1.png'
  },
  {
    name: "Moono",
    cuisine: "Korean",
    price: "$$$",
    path: "/usa/other/new-york/moono",
    image: '/images/moono1.png'
  },
  {
    name: "Muku",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/usa/other/new-york/muku",
    image: '/images/muku1.png'
  },
  {
    name: "Nami Nori",
    cuisine: "Japanese, Creative",
    price: "$",
    path: "/usa/other/new-york/nami-nori",
    image: '/images/nami-nori1.png'
  },
  {
    name: "Naro",
    cuisine: "Korean",
    price: "$$$$",
    path: "/usa/other/new-york/naro",
    image: '/images/naro1.png'
  },
  {
    name: "Nōksu",
    cuisine: "Contemporary, Korean",
    price: "$$$$",
    path: "/usa/other/new-york/nksu",
    image: '/images/nksu1.png'
  },
  {
    name: "Noda",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/new-york/noda",
    image: '/images/noda1.png'
  },
  {
    name: "Noda",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/new-york/noda",
    image: '/images/noda1.png'
  },
  {
    name: "Noreetuh",
    cuisine: "Fusion",
    price: "$$",
    path: "/usa/other/new-york/noreetuh",
    image: '/images/noreetuh1.png'
  },
  {
    name: "Norma Gastronomia Siciliana",
    cuisine: "Italian, Sicilian",
    price: "$$",
    path: "/usa/other/new-york/norma-gastronomia-siciliana",
    image: '/images/norma-gastronomia-siciliana1.png'
  },
  {
    name: "Novitá",
    cuisine: "Italian, Regional Cuisine",
    price: "$$$",
    path: "/usa/other/new-york/novit",
    image: '/images/novit1.png'
  },
  {
    name: "Noz 17",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/new-york/noz-17",
    image: '/images/noz-171.png'
  },
  {
    name: "Nudibranch",
    cuisine: "Contemporary, Asian",
    price: "$$",
    path: "/usa/other/new-york/nudibranch",
    image: '/images/nudibranch1.png'
  },
  {
    name: "Nyonya",
    cuisine: "Malaysian",
    price: "$",
    path: "/usa/other/new-york/nyonya",
    image: '/images/nyonya1.png'
  },
  {
    name: "Oceans",
    cuisine: "Seafood, Contemporary",
    price: "$$$",
    path: "/usa/other/new-york/oceans",
    image: '/images/oceans1.png'
  },
  {
    name: "Octo",
    cuisine: "Asian Contemporary, Fusion",
    price: "$$",
    path: "/usa/other/new-york/octo",
    image: '/images/octo1.png'
  },
  {
    name: "odo",
    cuisine: "Japanese, Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/odo",
    image: '/images/odo1.png'
  },
  {
    name: "Odre",
    cuisine: "Korean",
    price: "$$",
    path: "/usa/other/new-york/odre",
    image: '/images/odre1.png'
  },
  {
    name: "Oiji Mi",
    cuisine: "Korean, Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/oiji-mi",
    image: '/images/oiji-mi1.png'
  },
  {
    name: "One White Street",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/one-white-street",
    image: '/images/one-white-street1.png'
  },
  {
    name: "Orsay",
    cuisine: "French",
    price: "$$$",
    path: "/usa/other/new-york/orsay",
    image: '/images/orsay1.png'
  },
  {
    name: "Oso",
    cuisine: "Mexican, Regional Cuisine",
    price: "$$",
    path: "/usa/other/new-york/oso",
    image: '/images/oso1.png'
  },
  {
    name: "Papa San",
    cuisine: "Japanese, Peruvian",
    price: "$$$",
    path: "/usa/other/new-york/papa-san",
    image: '/images/papa-san1.png'
  },
  {
    name: "Pastis",
    cuisine: "French",
    price: "$$$",
    path: "/usa/other/new-york/pastis",
    image: '/images/pastis1.png'
  },
  {
    name: "Peak",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/peak",
    image: '/images/peak1.png'
  },
  {
    name: "Penny",
    cuisine: "Seafood",
    price: "$$$",
    path: "/usa/other/new-york/penny",
    image: '/images/penny1.png'
  },
  {
    name: "Peppercorn Station",
    cuisine: "Chinese, Sichuan",
    price: "$$",
    path: "/usa/other/new-york/peppercorn-station",
    image: '/images/peppercorn-station1.png'
  },
  {
    name: "Per Se",
    cuisine: "Contemporary, French",
    price: "$$$$",
    path: "/usa/other/new-york/per-se",
    image: '/images/per-se1.png'
  },
  {
    name: "Persepolis",
    cuisine: "Persian",
    price: "$$",
    path: "/usa/other/new-york/persepolis",
    image: '/images/persepolis1.png'
  },
  {
    name: "Pinch Chinese",
    cuisine: "Chinese, Regional Cuisine",
    price: "$$",
    path: "/usa/other/new-york/pinch-chinese",
    image: '/images/pinch-chinese1.png'
  },
  {
    name: "Portale",
    cuisine: "Italian, Contemporary",
    price: "$$$",
    path: "/usa/other/new-york/portale",
    image: '/images/portale1.png'
  },
  {
    name: "Potluck Club",
    cuisine: "Chinese, Cantonese",
    price: "$$",
    path: "/usa/other/new-york/potluck-club",
    image: '/images/potluck-club1.png'
  },
  {
    name: "Pranakhon",
    cuisine: "Thai",
    price: "$$$",
    path: "/usa/other/new-york/pranakhon",
    image: '/images/pranakhon1.png'
  },
  {
    name: "Pylos",
    cuisine: "Greek",
    price: "$$$",
    path: "/usa/other/new-york/pylos",
    image: '/images/pylos1.png'
  },
  {
    name: "Raf's",
    cuisine: "European",
    price: "$$$$",
    path: "/usa/other/new-york/rafs",
    image: '/images/rafs1.png'
  },
  {
    name: "Raoul's",
    cuisine: "French, American",
    price: "$$$$",
    path: "/usa/other/new-york/raouls",
    image: '/images/raouls1.png'
  },
  {
    name: "Red Paper Clip",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/red-paper-clip",
    image: '/images/red-paper-clip1.png'
  },
  {
    name: "Reverence",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/reverence",
    image: '/images/reverence1.png'
  },
  {
    name: "Rezdôra",
    cuisine: "Italian, Regional Cuisine",
    price: "$$$$",
    path: "/usa/other/new-york/rezdra",
    image: '/images/rezdra1.png'
  },
  {
    name: "Rosella",
    cuisine: "Japanese, Sushi",
    price: "$$$",
    path: "/usa/other/new-york/rosella",
    image: '/images/rosella1.png'
  },
  {
    name: "Ruffian",
    cuisine: "Contemporary, Creative",
    price: "$$",
    path: "/usa/other/new-york/ruffian",
    image: '/images/ruffian1.png'
  },
  {
    name: "Russ & Daughters Cafe",
    cuisine: "American",
    price: "$$",
    path: "/usa/other/new-york/russ-daughters-cafe",
    image: '/images/russ-daughters-cafe1.png'
  },
  {
    name: "Saga",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/saga",
    image: '/images/saga1.png'
  },
  {
    name: "Sami & Susu",
    cuisine: "Mediterranean Cuisine",
    price: "$$",
    path: "/usa/other/new-york/sami-susu",
    image: '/images/sami-susu1.png'
  },
  {
    name: "Santi",
    cuisine: "Italian Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/santi",
    image: '/images/santi1.png'
  },
  {
    name: "Secchu Yokota",
    cuisine: "Japanese, Tempura",
    price: "$$$$",
    path: "/usa/other/new-york/secchu-yokota",
    image: '/images/secchu-yokota1.png'
  },
  {
    name: "See No Evil Pizza",
    cuisine: "Pizza, American Contemporary",
    price: "$$",
    path: "/usa/other/new-york/see-no-evil-pizza",
    image: '/images/see-no-evil-pizza1.png'
  },
  {
    name: "Semma",
    cuisine: "Indian, Regional Cuisine",
    price: "$$$",
    path: "/usa/other/new-york/semma",
    image: '/images/semma1.png'
  },
  {
    name: "Sempre Oggi",
    cuisine: "Italian",
    price: "$$$$",
    path: "/usa/other/new-york/sempre-oggi",
    image: '/images/sempre-oggi1.png'
  },
  {
    name: "Seoul Salon",
    cuisine: "Korean, Contemporary",
    price: "$$$",
    path: "/usa/other/new-york/seoul-salon",
    image: '/images/seoul-salon1.png'
  },
  {
    name: "Shabushabu Mayumon",
    cuisine: "Japanese, Shabu-shabu",
    price: "$$$$",
    path: "/usa/other/new-york/shabushabu-mayumon",
    image: '/images/shabushabu-mayumon1.png'
  },
  {
    name: "Shion 69 Leonard Street",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/new-york/shion-69-leonard-street",
    image: '/images/shion-69-leonard-street1.png'
  },
  {
    name: "Shmoné",
    cuisine: "Israeli, Middle Eastern",
    price: "$$$$",
    path: "/usa/other/new-york/shmon",
    image: '/images/shmon1.png'
  },
  {
    name: "Sinsa",
    cuisine: "Korean",
    price: "$$$",
    path: "/usa/other/new-york/sinsa",
    image: '/images/sinsa1.png'
  },
  {
    name: "Smithereens",
    cuisine: "Seafood",
    price: "$$$",
    path: "/usa/other/new-york/smithereens",
    image: '/images/smithereens1.png'
  },
  {
    name: "Soba Totto",
    cuisine: "Japanese, Soba",
    price: "$$",
    path: "/usa/other/new-york/soba-totto",
    image: '/images/soba-totto1.png'
  },
  {
    name: "Sobaya",
    cuisine: "Japanese, Soba",
    price: "$",
    path: "/usa/other/new-york/sobaya",
    image: '/images/sobaya1.png'
  },
  {
    name: "Soda Club",
    cuisine: "Vegan, Italian-American",
    price: "$$",
    path: "/usa/other/new-york/soda-club",
    image: '/images/soda-club1.png'
  },
  {
    name: "Soothr",
    cuisine: "Thai",
    price: "$$",
    path: "/usa/other/new-york/soothr",
    image: '/images/soothr1.png'
  },
  {
    name: "Superiority Burger",
    cuisine: "Vegetarian, Contemporary",
    price: "$$",
    path: "/usa/other/new-york/superiority-burger",
    image: '/images/superiority-burger1.png'
  },
  {
    name: "Sushi Akira",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/usa/other/new-york/sushi-akira",
    image: '/images/sushi-akira1.png'
  },
  {
    name: "Sushi Amane",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/new-york/sushi-amane",
    image: '/images/sushi-amane1.png'
  },
  {
    name: "Sushi Ichimura",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/new-york/sushi-ichimura",
    image: '/images/sushi-ichimura1.png'
  },
  {
    name: "Sushi Ikumi",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/new-york/sushi-ikumi",
    image: '/images/sushi-ikumi1.png'
  },
  {
    name: "Sushi Nakazawa",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/new-york/sushi-nakazawa",
    image: '/images/sushi-nakazawa1.png'
  },
  {
    name: "Sushi Nakazawa New York",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/new-york/sushi-nakazawa-new-york",
    image: '/images/sushi-nakazawa-new-york1.png'
  },
  {
    name: "Sushi Noz",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/new-york/sushi-noz",
    image: '/images/sushi-noz1.png'
  },
  {
    name: "Sushi Sho",
    cuisine: "Sushi, Japanese",
    price: "$$$$",
    path: "/usa/other/new-york/sushi-sho",
    image: '/images/sushi-sho1.png'
  },
  {
    name: "Sushi Sho",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/new-york/sushi-sho",
    image: '/images/sushi-sho1.png'
  },
  {
    name: "Sushi Yasuda",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/new-york/sushi-yasuda",
    image: '/images/sushi-yasuda1.png'
  },
  {
    name: "Szechuan Gourmet",
    cuisine: "Chinese, Sichuan",
    price: "$$",
    path: "/usa/other/new-york/szechuan-gourmet",
    image: '/images/szechuan-gourmet1.png'
  },
  {
    name: "Tadhanà",
    cuisine: "Filipino, Contemporary",
    price: "$$$",
    path: "/usa/other/new-york/tadhan",
    image: '/images/tadhan1.png'
  },
  {
    name: "Tamarind",
    cuisine: "Indian",
    price: "$$$",
    path: "/usa/other/new-york/tamarind",
    image: '/images/tamarind1.png'
  },
  {
    name: "Tamarind",
    cuisine: "Indian",
    price: "$$$",
    path: "/usa/other/new-york/tamarind",
    image: '/images/tamarind1.png'
  },
  {
    name: "Tatiana",
    cuisine: "Fusion, American",
    price: "$$$",
    path: "/usa/other/new-york/tatiana",
    image: '/images/tatiana1.png'
  },
  {
    name: "Tempura Matsui",
    cuisine: "Japanese, Tempura",
    price: "$$$$",
    path: "/usa/other/new-york/tempura-matsui",
    image: '/images/tempura-matsui1.png'
  },
  {
    name: "Tha Phraya",
    cuisine: "Thai contemporary",
    price: "$$",
    path: "/usa/other/new-york/tha-phraya",
    image: '/images/tha-phraya1.png'
  },
  {
    name: "Thai Diner",
    cuisine: "Thai, Fusion",
    price: "$$",
    path: "/usa/other/new-york/thai-diner",
    image: '/images/thai-diner1.png'
  },
  {
    name: "The Commerce Inn",
    cuisine: "American, Steakhouse",
    price: "$$$",
    path: "/usa/other/new-york/the-commerce-inn",
    image: '/images/the-commerce-inn1.png'
  },
  {
    name: "The Dining Room at The Guesthouse",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/the-dining-room-at-the-guesthouse",
    image: '/images/the-dining-room-at-the-guesthouse1.png'
  },
  {
    name: "The Grill",
    cuisine: "American, American Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/the-grill",
    image: '/images/the-grill1.png'
  },
  {
    name: "The Grill",
    cuisine: "American, American Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/the-grill",
    image: '/images/the-grill1.png'
  },
  {
    name: "The Lambs Club",
    cuisine: "Steakhouse",
    price: "$$$$",
    path: "/usa/other/new-york/the-lambs-club",
    image: '/images/the-lambs-club1.png'
  },
  {
    name: "The Leopard at Des Artistes",
    cuisine: "Italian, Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/the-leopard-at-des-artistes",
    image: '/images/the-leopard-at-des-artistes1.png'
  },
  {
    name: "The Modern",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/the-modern",
    image: '/images/the-modern1.png'
  },
  {
    name: "The Musket Room",
    cuisine: "Contemporary, American Contemporary",
    price: "$$$$",
    path: "/usa/other/new-york/the-musket-room",
    image: '/images/the-musket-room1.png'
  },
  {
    name: "The Office of Mr. Moto",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/new-york/the-office-of-mr-moto",
    image: '/images/the-office-of-mr-moto1.png'
  },
  {
    name: "The Orchard Townhouse",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/usa/other/new-york/the-orchard-townhouse",
    image: '/images/the-orchard-townhouse1.png'
  },
  {
    name: "Tolo",
    cuisine: "Chinese",
    price: "$$",
    path: "/usa/other/new-york/tolo",
    image: '/images/tolo1.png'
  },
  {
    name: "Tonchin",
    cuisine: "Japanese, Ramen",
    price: "$",
    path: "/usa/other/new-york/tonchin",
    image: '/images/tonchin1.png'
  },
  {
    name: "Torien",
    cuisine: "Japanese, Yakitori",
    price: "$$$$",
    path: "/usa/other/new-york/torien",
    image: '/images/torien1.png'
  },
  {
    name: "Torrisi",
    cuisine: "Contemporary, Italian-American",
    price: "$$$$",
    path: "/usa/other/new-york/torrisi",
    image: '/images/torrisi1.png'
  },
  {
    name: "Towa",
    cuisine: "Japanese, Contemporary",
    price: "$$$",
    path: "/usa/other/new-york/towa",
    image: '/images/towa1.png'
  },
  {
    name: "Tsukimi",
    cuisine: "Japanese, Seasonal Cuisine",
    price: "$$$$",
    path: "/usa/other/new-york/tsukimi",
    image: '/images/tsukimi1.png'
  },
  {
    name: "Tuome",
    cuisine: "Fusion, Asian Contemporary",
    price: "$$$",
    path: "/usa/other/new-york/tuome",
    image: '/images/tuome1.png'
  },
  {
    name: "Ulivo",
    cuisine: "Italian, Sardinian",
    price: "$$$",
    path: "/usa/other/new-york/ulivo",
    image: '/images/ulivo1.png'
  },
  {
    name: "Una Pizza Napoletana",
    cuisine: "Pizza",
    price: "$$",
    path: "/usa/other/new-york/una-pizza-napoletana",
    image: '/images/una-pizza-napoletana1.png'
  },
  {
    name: "Upland",
    cuisine: "Mediterranean Cuisine, American Contemporary",
    price: "$$$",
    path: "/usa/other/new-york/upland",
    image: '/images/upland1.png'
  },
  {
    name: "Van Đa",
    cuisine: "Vietnamese, Modern Cuisine",
    price: "$$",
    path: "/usa/other/new-york/van-a",
    image: '/images/van-a1.png'
  },
  {
    name: "Veerays",
    cuisine: "Indian",
    price: "$$$$",
    path: "/usa/other/new-york/veerays",
    image: '/images/veerays1.png'
  },
  {
    name: "Vestry",
    cuisine: "Contemporary, Modern Cuisine",
    price: "$$$$",
    path: "/usa/other/new-york/vestry",
    image: '/images/vestry1.png'
  },
  {
    name: "Via Carota",
    cuisine: "Italian",
    price: "$$",
    path: "/usa/other/new-york/via-carota",
    image: '/images/via-carota1.png'
  },
  {
    name: "Wayan",
    cuisine: "Indonesian, South East Asian",
    price: "$$$",
    path: "/usa/other/new-york/wayan",
    image: '/images/wayan1.png'
  },
  {
    name: "Yamada",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/usa/other/new-york/yamada",
    image: '/images/yamada1.png'
  },
  {
    name: "Yellow Rose",
    cuisine: "Tex-Mex",
    price: "$$",
    path: "/usa/other/new-york/yellow-rose",
    image: '/images/yellow-rose1.png'
  },
  {
    name: "YingTao",
    cuisine: "Contemporary, Chinese",
    price: "$$$$",
    path: "/usa/other/new-york/yingtao",
    image: '/images/yingtao1.png'
  },
  {
    name: "Yoshino",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/usa/other/new-york/yoshino",
    image: '/images/yoshino1.png'
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
