import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Bangkok";

const restaurants = [
  {
    name: "100 Mahaseth",
    cuisine: "Isan",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/100-mahaseth",
    image: '/images/100-mahaseth1.png'
  },
  {
    name: "80/20",
    cuisine: "Thai contemporary",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/8020",
    image: '/images/80201.png'
  },
  {
    name: "Aheesah Roddee",
    cuisine: "Asian",
    price: "฿",
    path: "/thailand/bangkok/bangkok/aheesah-roddee",
    image: '/images/aheesah-roddee1.png'
  },
  {
    name: "Aksorn",
    cuisine: "Thai",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/aksorn",
    image: '/images/aksorn1.png'
  },
  {
    name: "Ann Tha Din Daeng",
    cuisine: "Seafood, Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/ann-tha-din-daeng",
    image: '/images/ann-tha-din-daeng1.png'
  },
  {
    name: "Anne-Sophie Pic at Le Normandie",
    cuisine: "French Contemporary",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/anne-sophie-pic-at-le-normandie",
    image: '/images/anne-sophie-pic-at-le-normandie1.png'
  },
  {
    name: "Antito",
    cuisine: "Italian",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/antito",
    image: '/images/antito1.png'
  },
  {
    name: "Arunwan",
    cuisine: "Small eats",
    price: "฿",
    path: "/thailand/bangkok/bangkok/arunwan",
    image: '/images/arunwan1.png'
  },
  {
    name: "Arva",
    cuisine: "Italian",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/arva",
    image: '/images/arva1.png'
  },
  {
    name: "Aunglo by Yangrak",
    cuisine: "Thai contemporary",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/aunglo-by-yangrak",
    image: '/images/aunglo-by-yangrak1.png'
  },
  {
    name: "AVANT",
    cuisine: "Modern Cuisine",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/avant",
    image: '/images/avant1.png'
  },
  {
    name: "Baan",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/baan",
    image: '/images/baan1.png'
  },
  {
    name: "Baan Pee Lek",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/baan-pee-lek",
    image: '/images/baan-pee-lek1.png'
  },
  {
    name: "Baan Phraya",
    cuisine: "Thai",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/baan-phraya",
    image: '/images/baan-phraya1.png'
  },
  {
    name: "Baan Suriyasai",
    cuisine: "Thai",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/baan-suriyasai",
    image: '/images/baan-suriyasai1.png'
  },
  {
    name: "Baan Suriyasai (Bangrak)",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/baan-suriyasai-bangrak",
    image: '/images/baan-suriyasai-bangrak1.png'
  },
  {
    name: "Baan Tepa",
    cuisine: "Thai contemporary",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/baan-tepa",
    image: '/images/baan-tepa1.png'
  },
  {
    name: "Baannai",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/baannai",
    image: '/images/baannai1.png'
  },
  {
    name: "Baannok Bangkok",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/baannok-bangkok",
    image: '/images/baannok-bangkok1.png'
  },
  {
    name: "Bangkok Bold (Pathum Wan)",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/bangkok-bold-pathum-wan",
    image: '/images/bangkok-bold-pathum-wan1.png'
  },
  {
    name: "Beer Hima (Chatuchak)",
    cuisine: "Southern Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/beer-hima-chatuchak",
    image: '/images/beer-hima-chatuchak1.png'
  },
  {
    name: "Bisou",
    cuisine: "Modern Cuisine",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/bisou",
    image: '/images/bisou1.png'
  },
  {
    name: "Blue by Alain Ducasse",
    cuisine: "French Contemporary",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/blue-by-alain-ducasse",
    image: '/images/blue-by-alain-ducasse1.png'
  },
  {
    name: "Bokkia Tha Din Daeng",
    cuisine: "Small eats",
    price: "฿",
    path: "/thailand/bangkok/bangkok/bokkia-tha-din-daeng",
    image: '/images/bokkia-tha-din-daeng1.png'
  },
  {
    name: "Bo.lan",
    cuisine: "Thai",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/bolan",
    image: '/images/bolan1.png'
  },
  {
    name: "Bunloet (Pom Prap Sattru Phai)",
    cuisine: "Street Food",
    price: "฿",
    path: "/thailand/bangkok/bangkok/bunloet-pom-prap-sattru-phai",
    image: '/images/bunloet-pom-prap-sattru-phai1.png'
  },
  {
    name: "Burapa",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/burapa",
    image: '/images/burapa1.png'
  },
  {
    name: "Cadence by Dan Bark",
    cuisine: "Innovative, Creative",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/cadence-by-dan-bark",
    image: '/images/cadence-by-dan-bark1.png'
  },
  {
    name: "Cannubi by Umberto Bombana",
    cuisine: "Italian Contemporary",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/cannubi-by-umberto-bombana",
    image: '/images/cannubi-by-umberto-bombana1.png'
  },
  {
    name: "Celadon",
    cuisine: "Thai",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/celadon",
    image: '/images/celadon1.png'
  },
  {
    name: "Chakrabongse Dining",
    cuisine: "Thai",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/chakrabongse-dining",
    image: '/images/chakrabongse-dining1.png'
  },
  {
    name: "Charmgang",
    cuisine: "Thai contemporary",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/charmgang",
    image: '/images/charmgang1.png'
  },
  {
    name: "Charoen Saeng Silom",
    cuisine: "Street Food",
    price: "฿",
    path: "/thailand/bangkok/bangkok/charoen-saeng-silom",
    image: '/images/charoen-saeng-silom1.png'
  },
  {
    name: "Chef Man (Sathon)",
    cuisine: "Cantonese",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/chef-man-sathon",
    image: '/images/chef-man-sathon1.png'
  },
  {
    name: "Chef's Table",
    cuisine: "French Contemporary",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/chefs-table",
    image: '/images/chefs-table1.png'
  },
  {
    name: "Chef's Table",
    cuisine: "French Contemporary",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/chefs-table",
    image: '/images/chefs-table1.png'
  },
  {
    name: "Chim by Siam Wisdom",
    cuisine: "Thai",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/chim-by-siam-wisdom",
    image: '/images/chim-by-siam-wisdom1.png'
  },
  {
    name: "Choen",
    cuisine: "Thai, Thai contemporary",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/choen",
    image: '/images/choen1.png'
  },
  {
    name: "Chop Chop Cook Shop",
    cuisine: "Thai-Chinese",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/chop-chop-cook-shop",
    image: '/images/chop-chop-cook-shop1.png'
  },
  {
    name: "Clara",
    cuisine: "Italian",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/clara",
    image: '/images/clara1.png'
  },
  {
    name: "Coda",
    cuisine: "Thai contemporary",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/coda",
    image: '/images/coda1.png'
  },
  {
    name: "Côte by Mauro Colagreco",
    cuisine: "Modern Cuisine",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/cte-by-mauro-colagreco",
    image: '/images/cte-by-mauro-colagreco1.png'
  },
  {
    name: "Delia",
    cuisine: "Mexican",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/delia",
    image: '/images/delia1.png'
  },
  {
    name: "Den Kushi Flori",
    cuisine: "Japanese",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/den-kushi-flori",
    image: '/images/den-kushi-flori1.png'
  },
  {
    name: "Duet by David Toutain",
    cuisine: "Modern Cuisine",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/duet-by-david-toutain",
    image: '/images/duet-by-david-toutain1.png'
  },
  {
    name: "Eat Me",
    cuisine: "International",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/eat-me",
    image: '/images/eat-me1.png'
  },
  {
    name: "ELECTRIC SHEEP",
    cuisine: "Mediterranean Cuisine, Creative",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/electric-sheep",
    image: '/images/electric-sheep1.png'
  },
  {
    name: "Elements, Inspired by Ciel Bleu",
    cuisine: "French Contemporary",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/elements-inspired-by-ciel-bleu",
    image: '/images/elements-inspired-by-ciel-bleu1.png'
  },
  {
    name: "Embassy Room La Marina",
    cuisine: "Spanish",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/embassy-room-la-marina",
    image: '/images/embassy-room-la-marina1.png'
  },
  {
    name: "Enoteca",
    cuisine: "Italian",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/enoteca",
    image: '/images/enoteca1.png'
  },
  {
    name: "etcha",
    cuisine: "Creative, European Contemporary",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/etcha",
    image: '/images/etcha1.png'
  },
  {
    name: "Foong",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/foong",
    image: '/images/foong1.png'
  },
  {
    name: "Fuego",
    cuisine: "Spanish Contemporary",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/fuego",
    image: '/images/fuego1.png'
  },
  {
    name: "Gaa",
    cuisine: "Indian, Contemporary",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/gaa",
    image: '/images/gaa1.png'
  },
  {
    name: "Gaggan",
    cuisine: "Innovative",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/gaggan",
    image: '/images/gaggan1.png'
  },
  {
    name: "Garlic",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/garlic",
    image: '/images/garlic1.png'
  },
  {
    name: "Gen (Vadhana)",
    cuisine: "Japanese",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/gen-vadhana",
    image: '/images/gen-vadhana1.png'
  },
  {
    name: "Giglio Trattoria Fiorentina",
    cuisine: "Italian",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/giglio-trattoria-fiorentina",
    image: '/images/giglio-trattoria-fiorentina1.png'
  },
  {
    name: "Gim Nguan Noodle",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/bangkok/bangkok/gim-nguan-noodle",
    image: '/images/gim-nguan-noodle1.png'
  },
  {
    name: "Ginza Sushi Ichi",
    cuisine: "Sushi",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/ginza-sushi-ichi",
    image: '/images/ginza-sushi-ichi1.png'
  },
  {
    name: "GOAT",
    cuisine: "Thai contemporary",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/goat",
    image: '/images/goat1.png'
  },
  {
    name: "Grok",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/grok",
    image: '/images/grok1.png'
  },
  {
    name: "Guay Jub Mr. Jo",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/bangkok/bangkok/guay-jub-mr-jo",
    image: '/images/guay-jub-mr-jo1.png'
  },
  {
    name: "Haoma",
    cuisine: "Indian",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/haoma",
    image: '/images/haoma1.png'
  },
  {
    name: "Here Hai",
    cuisine: "Seafood",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/here-hai",
    image: '/images/here-hai1.png'
  },
  {
    name: "Here Hai (Vadhana)",
    cuisine: "Seafood, Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/here-hai-vadhana",
    image: '/images/here-hai-vadhana1.png'
  },
  {
    name: "Hia Wan Khao Tom Pla",
    cuisine: "Small eats, Congee",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/hia-wan-khao-tom-pla",
    image: '/images/hia-wan-khao-tom-pla1.png'
  },
  {
    name: "Huen Lamphun",
    cuisine: "Northern Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/huen-lamphun",
    image: '/images/huen-lamphun1.png'
  },
  {
    name: "Huen Lamphun (Taling Chan)",
    cuisine: "Northern Thai",
    price: "฿",
    path: "/thailand/bangkok/bangkok/huen-lamphun-taling-chan",
    image: '/images/huen-lamphun-taling-chan1.png'
  },
  {
    name: "IGNIV",
    cuisine: "European Contemporary",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/igniv",
    image: '/images/igniv1.png'
  },
  {
    name: "INDDEE",
    cuisine: "Indian, Contemporary",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/inddee",
    image: '/images/inddee1.png'
  },
  {
    name: "Indus",
    cuisine: "Indian",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/indus",
    image: '/images/indus1.png'
  },
  {
    name: "I-SANG",
    cuisine: "Korean Contemporary",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/i-sang",
    image: '/images/i-sang1.png'
  },
  {
    name: "Jaan by Khun Jim",
    cuisine: "Thai, Southern Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/jaan-by-khun-jim",
    image: '/images/jaan-by-khun-jim1.png'
  },
  {
    name: "Jaidee Shrimp",
    cuisine: "Thai, Southern Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/jaidee-shrimp",
    image: '/images/jaidee-shrimp1.png'
  },
  {
    name: "J'AIME by Jean-Michel Lorain",
    cuisine: "French Contemporary",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/jaime-by-jean-michel-lorain",
    image: '/images/jaime-by-jean-michel-lorain1.png'
  },
  {
    name: "Jamn",
    cuisine: "Thai",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/jamn",
    image: '/images/jamn1.png'
  },
  {
    name: "Janhom",
    cuisine: "Southern Thai",
    price: "฿",
    path: "/thailand/bangkok/bangkok/janhom",
    image: '/images/janhom1.png'
  },
  {
    name: "Jao Nai Fish Ball (Bang Khae Road)",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/bangkok/bangkok/jao-nai-fish-ball-bang-khae-road",
    image: '/images/jao-nai-fish-ball-bang-khae-road1.png'
  },
  {
    name: "Jay Fai",
    cuisine: "Street Food, Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/jay-fai",
    image: '/images/jay-fai1.png'
  },
  {
    name: "Jay Jia Yentafo",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/bangkok/bangkok/jay-jia-yentafo",
    image: '/images/jay-jia-yentafo1.png'
  },
  {
    name: "Jeh O",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/jeh-o",
    image: '/images/jeh-o1.png'
  },
  {
    name: "Jek Tod",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/bangkok/bangkok/jek-tod",
    image: '/images/jek-tod1.png'
  },
  {
    name: "Jhol",
    cuisine: "Indian",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/jhol",
    image: '/images/jhol1.png'
  },
  {
    name: "Jikasei B",
    cuisine: "Sushi",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/jikasei-b",
    image: '/images/jikasei-b1.png'
  },
  {
    name: "Jok's Kitchen",
    cuisine: "Thai-Chinese",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/joks-kitchen",
    image: '/images/joks-kitchen1.png'
  },
  {
    name: "Jok's Kitchen (Pom Prap Sattru Phai)",
    cuisine: "Thai-Chinese",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/joks-kitchen-pom-prap-sattru-phai",
    image: '/images/joks-kitchen-pom-prap-sattru-phai1.png'
  },
  {
    name: "Juksunchae",
    cuisine: "Korean, Contemporary",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/juksunchae",
    image: '/images/juksunchae1.png'
  },
  {
    name: "K by Vicky Cheng",
    cuisine: "Cantonese",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/k-by-vicky-cheng",
    image: '/images/k-by-vicky-cheng1.png'
  },
  {
    name: "K. Panich",
    cuisine: "Street Food",
    price: "฿",
    path: "/thailand/bangkok/bangkok/k-panich",
    image: '/images/k-panich1.png'
  },
  {
    name: "KAENKRUNG",
    cuisine: "Thai, Isan",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/kaenkrung",
    image: '/images/kaenkrung1.png'
  },
  {
    name: "Keawloon",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/keawloon",
    image: '/images/keawloon1.png'
  },
  {
    name: "Keller",
    cuisine: "Creative",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/keller",
    image: '/images/keller1.png'
  },
  {
    name: "Khaan",
    cuisine: "Thai contemporary",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/khaan",
    image: '/images/khaan1.png'
  },
  {
    name: "Khao San Sek",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/khao-san-sek",
    image: '/images/khao-san-sek1.png'
  },
  {
    name: "Khao (Vadhana)",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/khao-vadhana",
    image: '/images/khao-vadhana1.png'
  },
  {
    name: "Khum Hom",
    cuisine: "Thai contemporary, Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/khum-hom",
    image: '/images/khum-hom1.png'
  },
  {
    name: "Kin Kub Koi",
    cuisine: "Seafood",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/kin-kub-koi",
    image: '/images/kin-kub-koi1.png'
  },
  {
    name: "Kinu by Takagi",
    cuisine: "Japanese",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/kinu-by-takagi",
    image: '/images/kinu-by-takagi1.png'
  },
  {
    name: "Kolun.h",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/bangkok/bangkok/kolunh",
    image: '/images/kolunh1.png'
  },
  {
    name: "Kor Chun Huad",
    cuisine: "Thai-Chinese, Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/kor-chun-huad",
    image: '/images/kor-chun-huad1.png'
  },
  {
    name: "Krua Apsorn (Dusit)",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/krua-apsorn-dusit",
    image: '/images/krua-apsorn-dusit1.png'
  },
  {
    name: "Krua Sa Ros Jad",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/krua-sa-ros-jad",
    image: '/images/krua-sa-ros-jad1.png'
  },
  {
    name: "Lahnyai",
    cuisine: "Thai contemporary",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/lahnyai",
    image: '/images/lahnyai1.png'
  },
  {
    name: "Lay Lao (Phaya Thai)",
    cuisine: "Isan, Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/lay-lao-phaya-thai",
    image: '/images/lay-lao-phaya-thai1.png'
  },
  {
    name: "Le Du",
    cuisine: "Thai contemporary",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/le-du",
    image: '/images/le-du1.png'
  },
  {
    name: "Le Normandie",
    cuisine: "French Contemporary",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/le-normandie",
    image: '/images/le-normandie1.png'
  },
  {
    name: "Lenzi Tuscan Kitchen",
    cuisine: "Italian",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/lenzi-tuscan-kitchen",
    image: '/images/lenzi-tuscan-kitchen1.png'
  },
  {
    name: "Lim Lao Ngow (Samphanthawong)",
    cuisine: "Street Food, Noodles",
    price: "฿",
    path: "/thailand/bangkok/bangkok/lim-lao-ngow-samphanthawong",
    image: '/images/lim-lao-ngow-samphanthawong1.png'
  },
  {
    name: "Lucky Seafood",
    cuisine: "Seafood",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/lucky-seafood",
    image: '/images/lucky-seafood1.png'
  },
  {
    name: "Luma",
    cuisine: "Spanish",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/luma",
    image: '/images/luma1.png'
  },
  {
    name: "Ma Maison",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/ma-maison",
    image: '/images/ma-maison1.png'
  },
  {
    name: "Maan Muang",
    cuisine: "Northern Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/maan-muang",
    image: '/images/maan-muang1.png'
  },
  {
    name: "Mae Khlong Hua Pla Mo Fai",
    cuisine: "Seafood",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/mae-khlong-hua-pla-mo-fai",
    image: '/images/mae-khlong-hua-pla-mo-fai1.png'
  },
  {
    name: "MAHN",
    cuisine: "Isan",
    price: "฿",
    path: "/thailand/bangkok/bangkok/mahn",
    image: '/images/mahn1.png'
  },
  {
    name: "Maison Dunand",
    cuisine: "French Contemporary",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/maison-dunand",
    image: '/images/maison-dunand1.png'
  },
  {
    name: "MAMA YAYA",
    cuisine: "Southern Thai, Peranakan",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/mama-yaya",
    image: '/images/mama-yaya1.png'
  },
  {
    name: "Margo",
    cuisine: "French",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/margo",
    image: '/images/margo1.png'
  },
  {
    name: "Maze",
    cuisine: "European",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/maze",
    image: '/images/maze1.png'
  },
  {
    name: "Methavalai Sorndaeng",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/methavalai-sorndaeng",
    image: '/images/methavalai-sorndaeng1.png'
  },
  {
    name: "Mezzaluna",
    cuisine: "French Contemporary",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/mezzaluna",
    image: '/images/mezzaluna1.png'
  },
  {
    name: "Mhom",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/mhom",
    image: '/images/mhom1.png'
  },
  {
    name: "Mia",
    cuisine: "Contemporary",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/mia",
    image: '/images/mia1.png'
  },
  {
    name: "Ms.Maria & Mr.Singh",
    cuisine: "Indian",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/msmaria-mrsingh",
    image: '/images/msmaria-mrsingh1.png'
  },
  {
    name: "Nahm",
    cuisine: "Thai, Thai contemporary",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/nahm",
    image: '/images/nahm1.png'
  },
  {
    name: "Nan Bei",
    cuisine: "Chinese",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/nan-bei",
    image: '/images/nan-bei1.png'
  },
  {
    name: "NAWA",
    cuisine: "Thai contemporary",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/nawa",
    image: '/images/nawa1.png'
  },
  {
    name: "New York Steakhouse",
    cuisine: "Steakhouse",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/new-york-steakhouse",
    image: '/images/new-york-steakhouse1.png'
  },
  {
    name: "Nikaku",
    cuisine: "Sushi",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/nikaku",
    image: '/images/nikaku1.png'
  },
  {
    name: "No Name Noodle",
    cuisine: "Noodles",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/no-name-noodle",
    image: '/images/no-name-noodle1.png'
  },
  {
    name: "North",
    cuisine: "Northern Thai",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/north",
    image: '/images/north1.png'
  },
  {
    name: "ÎNT",
    cuisine: "Thai contemporary",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/nt",
    image: '/images/nt1.png'
  },
  {
    name: "Nusara",
    cuisine: "Thai contemporary",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/nusara",
    image: '/images/nusara1.png'
  },
  {
    name: "Ojo",
    cuisine: "Mexican",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/ojo",
    image: '/images/ojo1.png'
  },
  {
    name: "Pad Thai Fai Ta Lu (Phra Nakhon)",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/bangkok/bangkok/pad-thai-fai-ta-lu-phra-nakhon",
    image: '/images/pad-thai-fai-ta-lu-phra-nakhon1.png'
  },
  {
    name: "Pae Brass Pot Porridge 38 Years",
    cuisine: "Congee",
    price: "฿",
    path: "/thailand/bangkok/bangkok/pae-brass-pot-porridge-38-years",
    image: '/images/pae-brass-pot-porridge-38-years1.png'
  },
  {
    name: "Palmier by Guillaume Galliot",
    cuisine: "French",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/palmier-by-guillaume-galliot",
    image: '/images/palmier-by-guillaume-galliot1.png'
  },
  {
    name: "Paste",
    cuisine: "Thai",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/paste",
    image: '/images/paste1.png'
  },
  {
    name: "Phat Kaolao Beef",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/bangkok/bangkok/phat-kaolao-beef",
    image: '/images/phat-kaolao-beef1.png'
  },
  {
    name: "Phed Phed Bistro",
    cuisine: "Isan",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/phed-phed-bistro",
    image: '/images/phed-phed-bistro1.png'
  },
  {
    name: "Philippe",
    cuisine: "French",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/philippe",
    image: '/images/philippe1.png'
  },
  {
    name: "Phra Nakhon",
    cuisine: "Thai",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/phra-nakhon",
    image: '/images/phra-nakhon1.png'
  },
  {
    name: "Plu",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/plu",
    image: '/images/plu1.png'
  },
  {
    name: "Por. Pochaya",
    cuisine: "Thai-Chinese",
    price: "฿",
    path: "/thailand/bangkok/bangkok/por-pochaya",
    image: '/images/por-pochaya1.png'
  },
  {
    name: "Potong",
    cuisine: "Innovative",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/potong",
    image: '/images/potong1.png'
  },
  {
    name: "Praya Dining",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/praya-dining",
    image: '/images/praya-dining1.png'
  },
  {
    name: "Prik-Yuak",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/prik-yuak",
    image: '/images/prik-yuak1.png'
  },
  {
    name: "Prik-Yuak (Phya Thai)",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/prik-yuak-phya-thai",
    image: '/images/prik-yuak-phya-thai1.png'
  },
  {
    name: "Punjab Grill",
    cuisine: "Indian",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/punjab-grill",
    image: '/images/punjab-grill1.png'
  },
  {
    name: "Rark",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/rark",
    image: '/images/rark1.png'
  },
  {
    name: "Ōre",
    cuisine: "Creative",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/re",
    image: '/images/re1.png'
  },
  {
    name: "Resonance",
    cuisine: "Modern Cuisine",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/resonance",
    image: '/images/resonance1.png'
  },
  {
    name: "Reunros (Yan Nawa)",
    cuisine: "Chinese",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/reunros-yan-nawa",
    image: '/images/reunros-yan-nawa1.png'
  },
  {
    name: "R-Haan",
    cuisine: "Thai contemporary",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/r-haan",
    image: '/images/r-haan1.png'
  },
  {
    name: "Riva del Fiume",
    cuisine: "Italian",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/riva-del-fiume",
    image: '/images/riva-del-fiume1.png'
  },
  {
    name: "Rongros",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/rongros",
    image: '/images/rongros1.png'
  },
  {
    name: "Royal Osha",
    cuisine: "Thai contemporary",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/royal-osha",
    image: '/images/royal-osha1.png'
  },
  {
    name: "Rung Rueang Tung Pork Noodle",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/bangkok/bangkok/rung-rueang-tung-pork-noodle",
    image: '/images/rung-rueang-tung-pork-noodle1.png'
  },
  {
    name: "Saawaan",
    cuisine: "Thai contemporary",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/saawaan",
    image: '/images/saawaan1.png'
  },
  {
    name: "Sae Phun",
    cuisine: "Small eats",
    price: "฿",
    path: "/thailand/bangkok/bangkok/sae-phun",
    image: '/images/sae-phun1.png'
  },
  {
    name: "Saigon Recipe",
    cuisine: "Vietnamese",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/saigon-recipe",
    image: '/images/saigon-recipe1.png'
  },
  {
    name: "Samlor",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/samlor",
    image: '/images/samlor1.png'
  },
  {
    name: "Samrub Samrub Thai",
    cuisine: "Thai",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/samrub-samrub-thai",
    image: '/images/samrub-samrub-thai1.png'
  },
  {
    name: "Saneh Jaan",
    cuisine: "Thai",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/saneh-jaan",
    image: '/images/saneh-jaan1.png'
  },
  {
    name: "Sang Thatien",
    cuisine: "Thai",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/sang-thatien",
    image: '/images/sang-thatien1.png'
  },
  {
    name: "Sanyod (Bang Rak)",
    cuisine: "Chinese",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/sanyod-bang-rak",
    image: '/images/sanyod-bang-rak1.png'
  },
  {
    name: "Sartoria by Paulo Airaudo",
    cuisine: "Italian Contemporary",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/sartoria-by-paulo-airaudo",
    image: '/images/sartoria-by-paulo-airaudo1.png'
  },
  {
    name: "Savelberg",
    cuisine: "French Contemporary",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/savelberg",
    image: '/images/savelberg1.png'
  },
  {
    name: "Sawang Noodles",
    cuisine: "Noodles",
    price: "฿",
    path: "/thailand/bangkok/bangkok/sawang-noodles",
    image: '/images/sawang-noodles1.png'
  },
  {
    name: "Scarlett",
    cuisine: "Grills",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/scarlett",
    image: '/images/scarlett1.png'
  },
  {
    name: "Seifu",
    cuisine: "Japanese",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/seifu",
    image: '/images/seifu1.png'
  },
  {
    name: "Shirokane Tori-Tama",
    cuisine: "Japanese",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/shirokane-tori-tama",
    image: '/images/shirokane-tori-tama1.png'
  },
  {
    name: "Sühring",
    cuisine: "German, Contemporary",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/shring",
    image: '/images/shring1.png'
  },
  {
    name: "Si Sawat",
    cuisine: "Thai contemporary, Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/si-sawat",
    image: '/images/si-sawat1.png'
  },
  {
    name: "Signature",
    cuisine: "French",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/signature",
    image: '/images/signature1.png'
  },
  {
    name: "Small Dinner Club",
    cuisine: "Innovative",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/small-dinner-club",
    image: '/images/small-dinner-club1.png'
  },
  {
    name: "Soma",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/soma",
    image: '/images/soma1.png'
  },
  {
    name: "Somboon Seafood (Bang Rak)",
    cuisine: "Thai-Chinese",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/somboon-seafood-bang-rak",
    image: '/images/somboon-seafood-bang-rak1.png'
  },
  {
    name: "Somsak Pu Ob (Charoen Rat)",
    cuisine: "Street Food",
    price: "฿",
    path: "/thailand/bangkok/bangkok/somsak-pu-ob-charoen-rat",
    image: '/images/somsak-pu-ob-charoen-rat1.png'
  },
  {
    name: "Somtum Khun Kan",
    cuisine: "Isan, Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/somtum-khun-kan",
    image: '/images/somtum-khun-kan1.png'
  },
  {
    name: "Sorn",
    cuisine: "Southern Thai",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/sorn",
    image: '/images/sorn1.png'
  },
  {
    name: "Sornthong",
    cuisine: "Seafood",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/sornthong",
    image: '/images/sornthong1.png'
  },
  {
    name: "Sra Bua by Kiin Kiin",
    cuisine: "Thai contemporary",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/sra-bua-by-kiin-kiin",
    image: '/images/sra-bua-by-kiin-kiin1.png'
  },
  {
    name: "Sripol Seafood House",
    cuisine: "Seafood",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/sripol-seafood-house",
    image: '/images/sripol-seafood-house1.png'
  },
  {
    name: "Stage",
    cuisine: "European Contemporary",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/stage",
    image: '/images/stage1.png'
  },
  {
    name: "Supanniga Eating Room (Phra Nakhon)",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/supanniga-eating-room-phra-nakhon",
    image: '/images/supanniga-eating-room-phra-nakhon1.png'
  },
  {
    name: "Sushi Masato",
    cuisine: "Sushi",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/sushi-masato",
    image: '/images/sushi-masato1.png'
  },
  {
    name: "Sushi Saito",
    cuisine: "Sushi",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/sushi-saito",
    image: '/images/sushi-saito1.png'
  },
  {
    name: "Sushi Saryu",
    cuisine: "Sushi",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/sushi-saryu",
    image: '/images/sushi-saryu1.png'
  },
  {
    name: "TAAN",
    cuisine: "Thai contemporary",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/taan",
    image: '/images/taan1.png'
  },
  {
    name: "Tammang",
    cuisine: "Vegan, Vegetarian",
    price: "฿",
    path: "/thailand/bangkok/bangkok/tammang",
    image: '/images/tammang1.png'
  },
  {
    name: "Tang Jai Yang (Bang Kho Laem)",
    cuisine: "Thai-Chinese",
    price: "฿",
    path: "/thailand/bangkok/bangkok/tang-jai-yang-bang-kho-laem",
    image: '/images/tang-jai-yang-bang-kho-laem1.png'
  },
  {
    name: "Tang Sui Heng (Banthat Thong Road)",
    cuisine: "Street Food",
    price: "฿",
    path: "/thailand/bangkok/bangkok/tang-sui-heng-banthat-thong-road",
    image: '/images/tang-sui-heng-banthat-thong-road1.png'
  },
  {
    name: "Tapori",
    cuisine: "Indian",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/tapori",
    image: '/images/tapori1.png'
  },
  {
    name: "Tempura Kanda",
    cuisine: "Tempura",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/tempura-kanda",
    image: '/images/tempura-kanda1.png'
  },
  {
    name: "Ten Suns",
    cuisine: "Small eats",
    price: "฿",
    path: "/thailand/bangkok/bangkok/ten-suns",
    image: '/images/ten-suns1.png'
  },
  {
    name: "Terroir",
    cuisine: "Creative",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/terroir",
    image: '/images/terroir1.png'
  },
  {
    name: "Thai Niyom",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/thai-niyom",
    image: '/images/thai-niyom1.png'
  },
  {
    name: "Thai Tham",
    cuisine: "Small eats",
    price: "฿",
    path: "/thailand/bangkok/bangkok/thai-tham",
    image: '/images/thai-tham1.png'
  },
  {
    name: "The Local",
    cuisine: "Thai",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/the-local",
    image: '/images/the-local1.png'
  },
  {
    name: "Thien Duong",
    cuisine: "Vietnamese",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/thien-duong",
    image: '/images/thien-duong1.png'
  },
  {
    name: "Torisawa 22",
    cuisine: "Yakitori",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/torisawa-22",
    image: '/images/torisawa-221.png'
  },
  {
    name: "Urai Braised Goose",
    cuisine: "Small eats",
    price: "฿",
    path: "/thailand/bangkok/bangkok/urai-braised-goose",
    image: '/images/urai-braised-goose1.png'
  },
  {
    name: "Via Emilia",
    cuisine: "Italian",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/via-emilia",
    image: '/images/via-emilia1.png'
  },
  {
    name: "Vilas",
    cuisine: "Thai contemporary",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/vilas",
    image: '/images/vilas1.png'
  },
  {
    name: "Villa Frantzén",
    cuisine: "Scandinavian",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/villa-frantzn",
    image: '/images/villa-frantzn1.png'
  },
  {
    name: "Wah Lok",
    cuisine: "Cantonese",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/wah-lok",
    image: '/images/wah-lok1.png'
  },
  {
    name: "Wah Lok",
    cuisine: "Cantonese",
    price: "฿฿",
    path: "/thailand/bangkok/bangkok/wah-lok",
    image: '/images/wah-lok1.png'
  },
  {
    name: "Wana Yook",
    cuisine: "Thai contemporary",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/wana-yook",
    image: '/images/wana-yook1.png'
  },
  {
    name: "Watsana Khao Man Gai",
    cuisine: "Small eats",
    price: "฿",
    path: "/thailand/bangkok/bangkok/watsana-khao-man-gai",
    image: '/images/watsana-khao-man-gai1.png'
  },
  {
    name: "Yakiniku Sudo",
    cuisine: "Barbecue, Yakiniku",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/yakiniku-sudo",
    image: '/images/yakiniku-sudo1.png'
  },
  {
    name: "Yamazato",
    cuisine: "Japanese",
    price: "฿฿฿",
    path: "/thailand/bangkok/bangkok/yamazato",
    image: '/images/yamazato1.png'
  },
  {
    name: "Yu Ting Yuan",
    cuisine: "Cantonese",
    price: "฿฿฿฿",
    path: "/thailand/bangkok/bangkok/yu-ting-yuan",
    image: '/images/yu-ting-yuan1.png'
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
