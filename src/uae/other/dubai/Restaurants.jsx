import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Dubai";

const restaurants = [
  {
    name: "11 Woodfire",
    cuisine: "Modern Cuisine",
    price: "$$$",
    path: "/uae/other/dubai/11-woodfire",
    image: '/images/11-woodfire1.png'
  },
  {
    name: "21 Grams",
    cuisine: "Balkan",
    price: "$$",
    path: "/uae/other/dubai/21-grams",
    image: '/images/21-grams1.png'
  },
  {
    name: "3Fils",
    cuisine: "Japanese Contemporary",
    price: "$",
    path: "/uae/other/dubai/3fils",
    image: '/images/3fils1.png'
  },
  {
    name: "99 Sushi Bar",
    cuisine: "Japanese Contemporary",
    price: "$$$$",
    path: "/uae/other/dubai/99-sushi-bar",
    image: '/images/99-sushi-bar1.png'
  },
  {
    name: "Aamara",
    cuisine: "Asian and Western",
    price: "$$",
    path: "/uae/other/dubai/aamara",
    image: '/images/aamara1.png'
  },
  {
    name: "Akira Back",
    cuisine: "Japanese Contemporary",
    price: "$$$$",
    path: "/uae/other/dubai/akira-back",
    image: '/images/akira-back1.png'
  },
  {
    name: "Al Khayma Heritage Restaurant",
    cuisine: "Emirati Cuisine",
    price: "$$",
    path: "/uae/other/dubai/al-khayma-heritage-restaurant",
    image: '/images/al-khayma-heritage-restaurant1.png'
  },
  {
    name: "Al Muntaha",
    cuisine: "French",
    price: "$$$$",
    path: "/uae/other/dubai/al-muntaha",
    image: '/images/al-muntaha1.png'
  },
  {
    name: "Al-Fanar",
    cuisine: "Emirati Cuisine",
    price: "$",
    path: "/uae/other/dubai/al-fanar",
    image: '/images/al-fanar1.png'
  },
  {
    name: "Amazónico",
    cuisine: "Latin American",
    price: "$$$",
    path: "/uae/other/dubai/amaznico",
    image: '/images/amaznico1.png'
  },
  {
    name: "Ariana's Persian Kitchen",
    cuisine: "Persian",
    price: "$$$$",
    path: "/uae/other/dubai/arianas-persian-kitchen",
    image: '/images/arianas-persian-kitchen1.png'
  },
  {
    name: "Armani Hashi",
    cuisine: "Japanese Contemporary",
    price: "$$$$",
    path: "/uae/other/dubai/armani-hashi",
    image: '/images/armani-hashi1.png'
  },
  {
    name: "Armani Ristorante",
    cuisine: "Italian",
    price: "$$$$",
    path: "/uae/other/dubai/armani-ristorante",
    image: '/images/armani-ristorante1.png'
  },
  {
    name: "At.Mosphere",
    cuisine: "Modern Cuisine",
    price: "$$$$",
    path: "/uae/other/dubai/atmosphere",
    image: '/images/atmosphere1.png'
  },
  {
    name: "Atrangi by Ritu Dalmia",
    cuisine: "Indian",
    price: "$$",
    path: "/uae/other/dubai/atrangi-by-ritu-dalmia",
    image: '/images/atrangi-by-ritu-dalmia1.png'
  },
  {
    name: "avatāra",
    cuisine: "Indian Vegetarian",
    price: "$$$$",
    path: "/uae/other/dubai/avatra",
    image: '/images/avatra1.png'
  },
  {
    name: "Avli BY TASHAS",
    cuisine: "Greek",
    price: "$$$$",
    path: "/uae/other/dubai/avli-by-tashas",
    image: '/images/avli-by-tashas1.png'
  },
  {
    name: "Bait Maryam",
    cuisine: "Middle Eastern",
    price: "$",
    path: "/uae/other/dubai/bait-maryam",
    image: '/images/bait-maryam1.png'
  },
  {
    name: "Berenjak",
    cuisine: "Persian",
    price: "$$",
    path: "/uae/other/dubai/berenjak",
    image: '/images/berenjak1.png'
  },
  {
    name: "Boca",
    cuisine: "Mediterranean Cuisine",
    price: "$$$",
    path: "/uae/other/dubai/boca",
    image: '/images/boca1.png'
  },
  {
    name: "Bâoli",
    cuisine: "Mediterranean Cuisine, Asian",
    price: "$$$$",
    path: "/uae/other/dubai/boli",
    image: '/images/boli1.png'
  },
  {
    name: "Bombay Bungalow",
    cuisine: "Indian",
    price: "$",
    path: "/uae/other/dubai/bombay-bungalow",
    image: '/images/bombay-bungalow1.png'
  },
  {
    name: "Bordo Mavi",
    cuisine: "Seafood",
    price: "$$$",
    path: "/uae/other/dubai/bordo-mavi",
    image: '/images/bordo-mavi1.png'
  },
  {
    name: "Brasserie Boulud",
    cuisine: "French, Classic Cuisine",
    price: "$$",
    path: "/uae/other/dubai/brasserie-boulud",
    image: '/images/brasserie-boulud1.png'
  },
  {
    name: "Brasserie Frantzén",
    cuisine: "Modern Cuisine",
    price: "$$$$",
    path: "/uae/other/dubai/brasserie-frantzn",
    image: '/images/brasserie-frantzn1.png'
  },
  {
    name: "CÉ LA VI",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/uae/other/dubai/c-la-vi",
    image: '/images/c-la-vi1.png'
  },
  {
    name: "Carnival by Trèsind",
    cuisine: "Indian",
    price: "$$",
    path: "/uae/other/dubai/carnival-by-trsind",
    image: '/images/carnival-by-trsind1.png'
  },
  {
    name: "Chic Nonna",
    cuisine: "Italian",
    price: "$$$$",
    path: "/uae/other/dubai/chic-nonna",
    image: '/images/chic-nonna1.png'
  },
  {
    name: "Cinque",
    cuisine: "Italian, International",
    price: "$$$",
    path: "/uae/other/dubai/cinque",
    image: '/images/cinque1.png'
  },
  {
    name: "City Social",
    cuisine: "Modern Cuisine",
    price: "$$$$",
    path: "/uae/other/dubai/city-social",
    image: '/images/city-social1.png'
  },
  {
    name: "Clap",
    cuisine: "Japanese Contemporary",
    price: "$$$$",
    path: "/uae/other/dubai/clap",
    image: '/images/clap1.png'
  },
  {
    name: "Coya",
    cuisine: "Peruvian",
    price: "$$$$",
    path: "/uae/other/dubai/coya",
    image: '/images/coya1.png'
  },
  {
    name: "Demon Duck by Alvin Leung",
    cuisine: "Chinese Contemporary",
    price: "$$$$",
    path: "/uae/other/dubai/demon-duck-by-alvin-leung",
    image: '/images/demon-duck-by-alvin-leung1.png'
  },
  {
    name: "Dinner by Heston Blumenthal",
    cuisine: "Traditional British",
    price: "$$$$",
    path: "/uae/other/dubai/dinner-by-heston-blumenthal",
    image: '/images/dinner-by-heston-blumenthal1.png'
  },
  {
    name: "Dinner by Heston Blumenthal",
    cuisine: "Traditional British",
    price: "$$$$",
    path: "/uae/other/dubai/dinner-by-heston-blumenthal",
    image: '/images/dinner-by-heston-blumenthal1.png'
  },
  {
    name: "Dragonfly",
    cuisine: "Japanese Contemporary",
    price: "$$$$",
    path: "/uae/other/dubai/dragonfly",
    image: '/images/dragonfly1.png'
  },
  {
    name: "DUO Gastrobar-Creek Harbour",
    cuisine: "Modern Cuisine",
    price: "$$",
    path: "/uae/other/dubai/duo-gastrobar-creek-harbour",
    image: '/images/duo-gastrobar-creek-harbour1.png'
  },
  {
    name: "DUO Gastrobar-Dubai Hills",
    cuisine: "Modern Cuisine",
    price: "$$",
    path: "/uae/other/dubai/duo-gastrobar-dubai-hills",
    image: '/images/duo-gastrobar-dubai-hills1.png'
  },
  {
    name: "estiatorio Milos",
    cuisine: "Greek",
    price: "$$$$",
    path: "/uae/other/dubai/estiatorio-milos",
    image: '/images/estiatorio-milos1.png'
  },
  {
    name: "Fi'lia",
    cuisine: "Italian, Classic Cuisine",
    price: "$$",
    path: "/uae/other/dubai/filia",
    image: '/images/filia1.png'
  },
  {
    name: "Fouquet's",
    cuisine: "French",
    price: "$$$",
    path: "/uae/other/dubai/fouquets",
    image: '/images/fouquets1.png'
  },
  {
    name: "French Riviera Beach",
    cuisine: "French",
    price: "$$$",
    path: "/uae/other/dubai/french-riviera-beach",
    image: '/images/french-riviera-beach1.png'
  },
  {
    name: "FZN by Björn Frantzén",
    cuisine: "Modern Cuisine",
    price: "$$$$",
    path: "/uae/other/dubai/fzn-by-bjrn-frantzn",
    image: '/images/fzn-by-bjrn-frantzn1.png'
  },
  {
    name: "Gerbou",
    cuisine: "Emirati Cuisine",
    price: "$$",
    path: "/uae/other/dubai/gerbou",
    image: '/images/gerbou1.png'
  },
  {
    name: "Goldfish",
    cuisine: "Japanese Contemporary",
    price: "$$",
    path: "/uae/other/dubai/goldfish",
    image: '/images/goldfish1.png'
  },
  {
    name: "Hakkasan Dubai",
    cuisine: "Chinese, Contemporary",
    price: "$$$$",
    path: "/uae/other/dubai/hakkasan-dubai",
    image: '/images/hakkasan-dubai1.png'
  },
  {
    name: "Harummanis",
    cuisine: "Asian",
    price: "$$",
    path: "/uae/other/dubai/harummanis",
    image: '/images/harummanis1.png'
  },
  {
    name: "Hawkerboi",
    cuisine: "Asian",
    price: "$$",
    path: "/uae/other/dubai/hawkerboi",
    image: '/images/hawkerboi1.png'
  },
  {
    name: "Hoe Lee Kow",
    cuisine: "Asian Contemporary",
    price: "$$",
    path: "/uae/other/dubai/hoe-lee-kow",
    image: '/images/hoe-lee-kow1.png'
  },
  {
    name: "Hōseki",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/uae/other/dubai/hseki",
    image: '/images/hseki1.png'
  },
  {
    name: "Hutong",
    cuisine: "Chinese",
    price: "$$$$",
    path: "/uae/other/dubai/hutong",
    image: '/images/hutong1.png'
  },
  {
    name: "Ibn Albahr",
    cuisine: "Lebanese",
    price: "$$",
    path: "/uae/other/dubai/ibn-albahr",
    image: '/images/ibn-albahr1.png'
  },
  {
    name: "Il Borro Tuscan Bistro Dubai",
    cuisine: "Italian",
    price: "$$",
    path: "/uae/other/dubai/il-borro-tuscan-bistro-dubai",
    image: '/images/il-borro-tuscan-bistro-dubai1.png'
  },
  {
    name: "Il Ristorante-Niko Romito",
    cuisine: "Italian",
    price: "$$$$",
    path: "/uae/other/dubai/il-ristorante-niko-romito",
    image: '/images/il-ristorante-niko-romito1.png'
  },
  {
    name: "Indego by Vineet",
    cuisine: "Indian",
    price: "$$$",
    path: "/uae/other/dubai/indego-by-vineet",
    image: '/images/indego-by-vineet1.png'
  },
  {
    name: "Indikaya",
    cuisine: "Indian, Fusion",
    price: "$$$",
    path: "/uae/other/dubai/indikaya",
    image: '/images/indikaya1.png'
  },
  {
    name: "Indya by Vineet",
    cuisine: "Indian",
    price: "$$",
    path: "/uae/other/dubai/indya-by-vineet",
    image: '/images/indya-by-vineet1.png'
  },
  {
    name: "Jamavar",
    cuisine: "Indian",
    price: "$$$",
    path: "/uae/other/dubai/jamavar",
    image: '/images/jamavar1.png'
  },
  {
    name: "JARA by Martín Berasategui",
    cuisine: "Basque",
    price: "$$$$",
    path: "/uae/other/dubai/jara-by-martn-berasategui",
    image: '/images/jara-by-martn-berasategui1.png'
  },
  {
    name: "Josette",
    cuisine: "French",
    price: "$$$$",
    path: "/uae/other/dubai/josette",
    image: '/images/josette1.png'
  },
  {
    name: "Jun's",
    cuisine: "Asian, American",
    price: "$$$",
    path: "/uae/other/dubai/juns",
    image: '/images/juns1.png'
  },
  {
    name: "Khadak",
    cuisine: "Indian",
    price: "$$",
    path: "/uae/other/dubai/khadak",
    image: '/images/khadak1.png'
  },
  {
    name: "Kinoya",
    cuisine: "Japanese",
    price: "$",
    path: "/uae/other/dubai/kinoya",
    image: '/images/kinoya1.png'
  },
  {
    name: "Konjiki Hototogisu",
    cuisine: "Japanese, Ramen",
    price: "$",
    path: "/uae/other/dubai/konjiki-hototogisu",
    image: '/images/konjiki-hototogisu1.png'
  },
  {
    name: "La Dame de Pic Dubai",
    cuisine: "Modern French",
    price: "$$$$",
    path: "/uae/other/dubai/la-dame-de-pic-dubai",
    image: '/images/la-dame-de-pic-dubai1.png'
  },
  {
    name: "La Mar by Gastón Acurio",
    cuisine: "Peruvian",
    price: "$$$$",
    path: "/uae/other/dubai/la-mar-by-gastn-acurio",
    image: '/images/la-mar-by-gastn-acurio1.png'
  },
  {
    name: "La Petite Maison (LPM)",
    cuisine: "Mediterranean Cuisine, French",
    price: "$$$",
    path: "/uae/other/dubai/la-petite-maison-lpm",
    image: '/images/la-petite-maison-lpm1.png'
  },
  {
    name: "Late Eatery",
    cuisine: "Creative",
    price: "$$",
    path: "/uae/other/dubai/late-eatery",
    image: '/images/late-eatery1.png'
  },
  {
    name: "L'Atelier de Joël Robuchon",
    cuisine: "French Contemporary",
    price: "$$$$",
    path: "/uae/other/dubai/latelier-de-jol-robuchon",
    image: '/images/latelier-de-jol-robuchon1.png'
  },
  {
    name: "Leña Dubai",
    cuisine: "Meats and Grills",
    price: "$$$$",
    path: "/uae/other/dubai/lea-dubai",
    image: '/images/lea-dubai1.png'
  },
  {
    name: "Little Miss India",
    cuisine: "Indian",
    price: "$$",
    path: "/uae/other/dubai/little-miss-india",
    image: '/images/little-miss-india1.png'
  },
  {
    name: "L’Olivo at Al Mahara",
    cuisine: "Italian",
    price: "$$$$",
    path: "/uae/other/dubai/lolivo-at-al-mahara",
    image: '/images/lolivo-at-al-mahara1.png'
  },
  {
    name: "LOWE",
    cuisine: "Contemporary",
    price: "$$",
    path: "/uae/other/dubai/lowe",
    image: '/images/lowe1.png'
  },
  {
    name: "Manāo",
    cuisine: "Thai contemporary",
    price: "$$$$",
    path: "/uae/other/dubai/mano",
    image: '/images/mano1.png'
  },
  {
    name: "Masti",
    cuisine: "Indian",
    price: "$$",
    path: "/uae/other/dubai/masti",
    image: '/images/masti1.png'
  },
  {
    name: "MayaBay",
    cuisine: "Asian",
    price: "$$$$",
    path: "/uae/other/dubai/mayabay",
    image: '/images/mayabay1.png'
  },
  {
    name: "Mimi Mei Fair",
    cuisine: "Chinese",
    price: "$$$$",
    path: "/uae/other/dubai/mimi-mei-fair",
    image: '/images/mimi-mei-fair1.png'
  },
  {
    name: "Mina Brasserie",
    cuisine: "Mediterranean Cuisine",
    price: "$$$$",
    path: "/uae/other/dubai/mina-brasserie",
    image: '/images/mina-brasserie1.png'
  },
  {
    name: "moonrise",
    cuisine: "Creative",
    price: "$$$$",
    path: "/uae/other/dubai/moonrise",
    image: '/images/moonrise1.png'
  },
  {
    name: "Mott 32",
    cuisine: "Cantonese",
    price: "$$$$",
    path: "/uae/other/dubai/mott-32",
    image: '/images/mott-321.png'
  },
  {
    name: "Netsu by Ross Shonhan",
    cuisine: "Japanese Contemporary",
    price: "$$",
    path: "/uae/other/dubai/netsu-by-ross-shonhan",
    image: '/images/netsu-by-ross-shonhan1.png'
  },
  {
    name: "Ninive",
    cuisine: "Middle Eastern",
    price: "$$$$",
    path: "/uae/other/dubai/ninive",
    image: '/images/ninive1.png'
  },
  {
    name: "Nobu Dubai",
    cuisine: "Japanese Contemporary",
    price: "$$$$",
    path: "/uae/other/dubai/nobu-dubai",
    image: '/images/nobu-dubai1.png'
  },
  {
    name: "Orfali Bros",
    cuisine: "Contemporary, Middle Eastern",
    price: "$$$",
    path: "/uae/other/dubai/orfali-bros",
    image: '/images/orfali-bros1.png'
  },
  {
    name: "Ossiano",
    cuisine: "Creative",
    price: "$$$$",
    path: "/uae/other/dubai/ossiano",
    image: '/images/ossiano1.png'
  },
  {
    name: "Osteria Funkcoolio",
    cuisine: "Italian",
    price: "$$$",
    path: "/uae/other/dubai/osteria-funkcoolio",
    image: '/images/osteria-funkcoolio1.png'
  },
  {
    name: "Pierchic",
    cuisine: "Italian, Classic Cuisine",
    price: "$$$$",
    path: "/uae/other/dubai/pierchic",
    image: '/images/pierchic1.png'
  },
  {
    name: "Pierre's TT",
    cuisine: "French Contemporary",
    price: "$$$$",
    path: "/uae/other/dubai/pierres-tt",
    image: '/images/pierres-tt1.png'
  },
  {
    name: "REIF Japanese Kushiyaki - Dar Wasl",
    cuisine: "Japanese Contemporary",
    price: "$",
    path: "/uae/other/dubai/reif-japanese-kushiyaki-dar-wasl",
    image: '/images/reif-japanese-kushiyaki-dar-wasl1.png'
  },
  {
    name: "REIF Japanese Kushiyaki - Dubai Hills",
    cuisine: "Japanese Contemporary",
    price: "$$",
    path: "/uae/other/dubai/reif-japanese-kushiyaki-dubai-hills",
    image: '/images/reif-japanese-kushiyaki-dubai-hills1.png'
  },
  {
    name: "Revelry",
    cuisine: "Indian",
    price: "$",
    path: "/uae/other/dubai/revelry",
    image: '/images/revelry1.png'
  },
  {
    name: "Rhodes w1",
    cuisine: "British Contemporary",
    price: "$$$",
    path: "/uae/other/dubai/rhodes-w1",
    image: '/images/rhodes-w11.png'
  },
  {
    name: "Riviera by Jean Imbert",
    cuisine: "Mediterranean Cuisine",
    price: "$$$",
    path: "/uae/other/dubai/riviera-by-jean-imbert",
    image: '/images/riviera-by-jean-imbert1.png'
  },
  {
    name: "Rockfish",
    cuisine: "Seafood",
    price: "$$$$",
    path: "/uae/other/dubai/rockfish",
    image: '/images/rockfish1.png'
  },
  {
    name: "Ronin",
    cuisine: "Japanese Contemporary",
    price: "$$$$",
    path: "/uae/other/dubai/ronin",
    image: '/images/ronin1.png'
  },
  {
    name: "Row on 45",
    cuisine: "Creative",
    price: "$$$$",
    path: "/uae/other/dubai/row-on-45",
    image: '/images/row-on-451.png'
  },
  {
    name: "RSVP",
    cuisine: "French",
    price: "$$$",
    path: "/uae/other/dubai/rsvp",
    image: '/images/rsvp1.png'
  },
  {
    name: "Rüya",
    cuisine: "Turkish",
    price: "$$",
    path: "/uae/other/dubai/rya",
    image: '/images/rya1.png'
  },
  {
    name: "Sea Fu",
    cuisine: "Seafood, Asian",
    price: "$$$",
    path: "/uae/other/dubai/sea-fu",
    image: '/images/sea-fu1.png'
  },
  {
    name: "Sexy Fish",
    cuisine: "Japanese, Asian",
    price: "$$$$",
    path: "/uae/other/dubai/sexy-fish",
    image: '/images/sexy-fish1.png'
  },
  {
    name: "Shabestan",
    cuisine: "Middle Eastern",
    price: "$$",
    path: "/uae/other/dubai/shabestan",
    image: '/images/shabestan1.png'
  },
  {
    name: "Shang Palace",
    cuisine: "Chinese, Contemporary",
    price: "$$$",
    path: "/uae/other/dubai/shang-palace",
    image: '/images/shang-palace1.png'
  },
  {
    name: "Siraj",
    cuisine: "Middle Eastern",
    price: "$$",
    path: "/uae/other/dubai/siraj",
    image: '/images/siraj1.png'
  },
  {
    name: "Smoked Room",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/uae/other/dubai/smoked-room",
    image: '/images/smoked-room1.png'
  },
  {
    name: "STAY by Yannick Alléno",
    cuisine: "French",
    price: "$$$$",
    path: "/uae/other/dubai/stay-by-yannick-allno",
    image: '/images/stay-by-yannick-allno1.png'
  },
  {
    name: "StreetXO",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/uae/other/dubai/streetxo",
    image: '/images/streetxo1.png'
  },
  {
    name: "Studio Frantzén",
    cuisine: "Modern Cuisine",
    price: "$$$$",
    path: "/uae/other/dubai/studio-frantzn",
    image: '/images/studio-frantzn1.png'
  },
  {
    name: "Sucre",
    cuisine: "Latin American",
    price: "$$$",
    path: "/uae/other/dubai/sucre",
    image: '/images/sucre1.png'
  },
  {
    name: "Sufret Maryam",
    cuisine: "Middle Eastern",
    price: "$",
    path: "/uae/other/dubai/sufret-maryam",
    image: '/images/sufret-maryam1.png'
  },
  {
    name: "TakaHisa",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/uae/other/dubai/takahisa",
    image: '/images/takahisa1.png'
  },
  {
    name: "Tang Town",
    cuisine: "Chinese",
    price: "$$$",
    path: "/uae/other/dubai/tang-town",
    image: '/images/tang-town1.png'
  },
  {
    name: "Tasca by José Avillez",
    cuisine: "Portuguese",
    price: "$$$",
    path: "/uae/other/dubai/tasca-by-jos-avillez",
    image: '/images/tasca-by-jos-avillez1.png'
  },
  {
    name: "Teible",
    cuisine: "Modern Cuisine",
    price: "$$",
    path: "/uae/other/dubai/teible",
    image: '/images/teible1.png'
  },
  {
    name: "TERO - The Experience by Reif Othman",
    cuisine: "Creative",
    price: "$$$$",
    path: "/uae/other/dubai/tero-the-experience-by-reif-othman",
    image: '/images/tero-the-experience-by-reif-othman1.png'
  },
  {
    name: "The Artisan",
    cuisine: "Italian",
    price: "$$$$",
    path: "/uae/other/dubai/the-artisan",
    image: '/images/the-artisan1.png'
  },
  {
    name: "The Guild",
    cuisine: "Meats and Seafood",
    price: "$$$",
    path: "/uae/other/dubai/the-guild",
    image: '/images/the-guild1.png'
  },
  {
    name: "The Spaniel",
    cuisine: "British Contemporary",
    price: "$$$",
    path: "/uae/other/dubai/the-spaniel",
    image: '/images/the-spaniel1.png'
  },
  {
    name: "Trèsind",
    cuisine: "Indian",
    price: "$$$$",
    path: "/uae/other/dubai/trsind",
    image: '/images/trsind1.png'
  },
  {
    name: "Trèsind Studio",
    cuisine: "Indian",
    price: "$$$$",
    path: "/uae/other/dubai/trsind-studio",
    image: '/images/trsind-studio1.png'
  },
  {
    name: "XU Dubai",
    cuisine: "Chinese",
    price: "$$$$",
    path: "/uae/other/dubai/xu-dubai",
    image: '/images/xu-dubai1.png'
  },
  {
    name: "Zuma",
    cuisine: "Japanese Contemporary",
    price: "$$$",
    path: "/uae/other/dubai/zuma",
    image: '/images/zuma1.png'
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
