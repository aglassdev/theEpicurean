import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Vancouver";

const restaurants = [
  {
    name: "acquafarina",
    cuisine: "Italian, Contemporary",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/acquafarina",
    image: '/images/acquafarina1.png'
  },
  {
    name: "Anh and Chi",
    cuisine: "Vietnamese, Regional Cuisine",
    price: "$$",
    path: "/canada/vancouver/vancouver/anh-and-chi",
    image: '/images/anh-and-chi1.png'
  },
  {
    name: "AnnaLena",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/annalena",
    image: '/images/annalena1.png'
  },
  {
    name: "Archer",
    cuisine: "Contemporary, North American",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/archer",
    image: '/images/archer1.png'
  },
  {
    name: "Ask for Luigi",
    cuisine: "Italian, North American",
    price: "$$$",
    path: "/canada/vancouver/vancouver/ask-for-luigi",
    image: '/images/ask-for-luigi1.png'
  },
  {
    name: "Bacaro",
    cuisine: "Italian, Venetian",
    price: "$$$",
    path: "/canada/vancouver/vancouver/bacaro",
    image: '/images/bacaro1.png'
  },
  {
    name: "Bacchus",
    cuisine: "Contemporary, French",
    price: "$$$",
    path: "/canada/vancouver/vancouver/bacchus",
    image: '/images/bacchus1.png'
  },
  {
    name: "Bacchus",
    cuisine: "Contemporary, French",
    price: "$$$",
    path: "/canada/vancouver/vancouver/bacchus",
    image: '/images/bacchus1.png'
  },
  {
    name: "Bao Bei",
    cuisine: "Chinese, Taiwanese",
    price: "$$$",
    path: "/canada/vancouver/vancouver/bao-bei",
    image: '/images/bao-bei1.png'
  },
  {
    name: "Bar Gobo",
    cuisine: "Contemporary, North American",
    price: "$$$",
    path: "/canada/vancouver/vancouver/bar-gobo",
    image: '/images/bar-gobo1.png'
  },
  {
    name: "Bar Susu",
    cuisine: "Contemporary, North American",
    price: "$$$",
    path: "/canada/vancouver/vancouver/bar-susu",
    image: '/images/bar-susu1.png'
  },
  {
    name: "Barbara",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/barbara",
    image: '/images/barbara1.png'
  },
  {
    name: "Bonjour Vietnam Bistro",
    cuisine: "Vietnamese, Vegetarian",
    price: "$$$",
    path: "/canada/vancouver/vancouver/bonjour-vietnam-bistro",
    image: '/images/bonjour-vietnam-bistro1.png'
  },
  {
    name: "Botanist",
    cuisine: "Contemporary, Regional Cuisine",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/botanist",
    image: '/images/botanist1.png'
  },
  {
    name: "Boulevard Kitchen & Oyster Bar",
    cuisine: "Seafood, Contemporary",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/boulevard-kitchen-oyster-bar",
    image: '/images/boulevard-kitchen-oyster-bar1.png'
  },
  {
    name: "Bravo",
    cuisine: "Contemporary, Seafood",
    price: "$$$",
    path: "/canada/vancouver/vancouver/bravo",
    image: '/images/bravo1.png'
  },
  {
    name: "Burdock & Co",
    cuisine: "Contemporary, North American",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/burdock-co",
    image: '/images/burdock-co1.png'
  },
  {
    name: "Café Medina",
    cuisine: "Contemporary, Mediterranean Cuisine",
    price: "$$",
    path: "/canada/vancouver/vancouver/caf-medina",
    image: '/images/caf-medina1.png'
  },
  {
    name: "Carlino",
    cuisine: "Italian, Regional Cuisine",
    price: "$$$",
    path: "/canada/vancouver/vancouver/carlino",
    image: '/images/carlino1.png'
  },
  {
    name: "Chang'An",
    cuisine: "Chinese, Shaanxi",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/changan",
    image: '/images/changan1.png'
  },
  {
    name: "Chef's Choice Chinese Cuisine",
    cuisine: "Cantonese, Chinese",
    price: "$$$",
    path: "/canada/vancouver/vancouver/chefs-choice-chinese-cuisine",
    image: '/images/chefs-choice-chinese-cuisine1.png'
  },
  {
    name: "Chupito",
    cuisine: "Mexican, Regional Cuisine",
    price: "$$",
    path: "/canada/vancouver/vancouver/chupito",
    image: '/images/chupito1.png'
  },
  {
    name: "¿CóMO? Taperia",
    cuisine: "Spanish, Small eats",
    price: "$$$",
    path: "/canada/vancouver/vancouver/cmo-taperia",
    image: '/images/cmo-taperia1.png'
  },
  {
    name: "Delara",
    cuisine: "Persian, Regional Cuisine",
    price: "$$",
    path: "/canada/vancouver/vancouver/delara",
    image: '/images/delara1.png'
  },
  {
    name: "Dynasty Seafood",
    cuisine: "Cantonese, Chinese",
    price: "$$$",
    path: "/canada/vancouver/vancouver/dynasty-seafood",
    image: '/images/dynasty-seafood1.png'
  },
  {
    name: "Elem",
    cuisine: "Contemporary, International",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/elem",
    image: '/images/elem1.png'
  },
  {
    name: "Elisa",
    cuisine: "Steakhouse, North American",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/elisa",
    image: '/images/elisa1.png'
  },
  {
    name: "Fable Kitchen",
    cuisine: "Contemporary, North American",
    price: "$$",
    path: "/canada/vancouver/vancouver/fable-kitchen",
    image: '/images/fable-kitchen1.png'
  },
  {
    name: "Fanny Bay Oyster Bar",
    cuisine: "Seafood, North American",
    price: "$$$",
    path: "/canada/vancouver/vancouver/fanny-bay-oyster-bar",
    image: '/images/fanny-bay-oyster-bar1.png'
  },
  {
    name: "Farmer's Apprentice",
    cuisine: "Contemporary, Modern Cuisine",
    price: "$$",
    path: "/canada/vancouver/vancouver/farmers-apprentice",
    image: '/images/farmers-apprentice1.png'
  },
  {
    name: "Folke",
    cuisine: "Vegan, North American",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/folke",
    image: '/images/folke1.png'
  },
  {
    name: "Gary’s",
    cuisine: "French, Contemporary",
    price: "$$",
    path: "/canada/vancouver/vancouver/garys",
    image: '/images/garys1.png'
  },
  {
    name: "Good Thief",
    cuisine: "Vietnamese, Contemporary",
    price: "$$",
    path: "/canada/vancouver/vancouver/good-thief",
    image: '/images/good-thief1.png'
  },
  {
    name: "Hawksworth Restaurant",
    cuisine: "Contemporary, Regional Cuisine",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/hawksworth-restaurant",
    image: '/images/hawksworth-restaurant1.png'
  },
  {
    name: "Homer St. Cafe",
    cuisine: "Contemporary, French",
    price: "$$$",
    path: "/canada/vancouver/vancouver/homer-st-cafe",
    image: '/images/homer-st-cafe1.png'
  },
  {
    name: "iDen & QuanJuDe Beijing Duck House",
    cuisine: "Chinese, Duck Specialities",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/iden-quanjude-beijing-duck-house",
    image: '/images/iden-quanjude-beijing-duck-house1.png'
  },
  {
    name: "Karma Indian Bistro",
    cuisine: "Indian, Regional Cuisine",
    price: "$$",
    path: "/canada/vancouver/vancouver/karma-indian-bistro",
    image: '/images/karma-indian-bistro1.png'
  },
  {
    name: "Kissa Tanto",
    cuisine: "Fusion, Contemporary",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/kissa-tanto",
    image: '/images/kissa-tanto1.png'
  },
  {
    name: "L'Abattoir",
    cuisine: "Contemporary, French",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/labattoir",
    image: '/images/labattoir1.png'
  },
  {
    name: "Little Bird Dim Sum + Craft Beer",
    cuisine: "Chinese, Cantonese",
    price: "$$",
    path: "/canada/vancouver/vancouver/little-bird-dim-sum-craft-beer",
    image: '/images/little-bird-dim-sum-craft-beer1.png'
  },
  {
    name: "Lunch Lady",
    cuisine: "Vietnamese, Regional Cuisine",
    price: "$$",
    path: "/canada/vancouver/vancouver/lunch-lady",
    image: '/images/lunch-lady1.png'
  },
  {
    name: "Maenam",
    cuisine: "Thai, Regional Cuisine",
    price: "$$$",
    path: "/canada/vancouver/vancouver/maenam",
    image: '/images/maenam1.png'
  },
  {
    name: "Magari by Oca",
    cuisine: "Contemporary, Italian",
    price: "$$",
    path: "/canada/vancouver/vancouver/magari-by-oca",
    image: '/images/magari-by-oca1.png'
  },
  {
    name: "Masayoshi",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/masayoshi",
    image: '/images/masayoshi1.png'
  },
  {
    name: "Miku",
    cuisine: "Asian, Japanese",
    price: "$$$",
    path: "/canada/vancouver/vancouver/miku",
    image: '/images/miku1.png'
  },
  {
    name: "Moltaqa",
    cuisine: "Moroccan, Regional Cuisine",
    price: "$$",
    path: "/canada/vancouver/vancouver/moltaqa",
    image: '/images/moltaqa1.png'
  },
  {
    name: "Motonobu Udon",
    cuisine: "Udon, Japanese",
    price: "$$",
    path: "/canada/vancouver/vancouver/motonobu-udon",
    image: '/images/motonobu-udon1.png'
  },
  {
    name: "Nammos Estiatorio",
    cuisine: "Greek, Mediterranean Cuisine",
    price: "$$$",
    path: "/canada/vancouver/vancouver/nammos-estiatorio",
    image: '/images/nammos-estiatorio1.png'
  },
  {
    name: "Neptune Palace Seafood Restaurant",
    cuisine: "Cantonese, Seafood",
    price: "$$",
    path: "/canada/vancouver/vancouver/neptune-palace-seafood-restaurant",
    image: '/images/neptune-palace-seafood-restaurant1.png'
  },
  {
    name: "Nero Tondo",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/canada/vancouver/vancouver/nero-tondo",
    image: '/images/nero-tondo1.png'
  },
  {
    name: "New Mandarin Seafood Restaurant",
    cuisine: "Chinese, Regional Cuisine",
    price: "$$$",
    path: "/canada/vancouver/vancouver/new-mandarin-seafood-restaurant",
    image: '/images/new-mandarin-seafood-restaurant1.png'
  },
  {
    name: "Nightingale",
    cuisine: "Contemporary, Farm to table",
    price: "$$$",
    path: "/canada/vancouver/vancouver/nightingale",
    image: '/images/nightingale1.png'
  },
  {
    name: "Octopus Garden",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/octopus-garden",
    image: '/images/octopus-garden1.png'
  },
  {
    name: "Okeya Kyujiro",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/okeya-kyujiro",
    image: '/images/okeya-kyujiro1.png'
  },
  {
    name: "Ophelía",
    cuisine: "Mexican, Regional Cuisine",
    price: "$$$",
    path: "/canada/vancouver/vancouver/ophela",
    image: '/images/ophela1.png'
  },
  {
    name: "Osteria Savio Volpe",
    cuisine: "Italian, Regional Cuisine",
    price: "$$$",
    path: "/canada/vancouver/vancouver/osteria-savio-volpe",
    image: '/images/osteria-savio-volpe1.png'
  },
  {
    name: "per se Social Corner",
    cuisine: "Italian, Spanish Contemporary",
    price: "$$$",
    path: "/canada/vancouver/vancouver/per-se-social-corner",
    image: '/images/per-se-social-corner1.png'
  },
  {
    name: "Phnom Penh",
    cuisine: "Vietnamese, Cambodian",
    price: "$$",
    path: "/canada/vancouver/vancouver/phnom-penh",
    image: '/images/phnom-penh1.png'
  },
  {
    name: "PiDGiN",
    cuisine: "Contemporary, North American",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/pidgin",
    image: '/images/pidgin1.png'
  },
  {
    name: "Published on Main",
    cuisine: "Contemporary, North American",
    price: "$$$",
    path: "/canada/vancouver/vancouver/published-on-main",
    image: '/images/published-on-main1.png'
  },
  {
    name: "acquafarina",
    cuisine: "Italian, Contemporary",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/acquafarina",
    image: '/images/acquafarina1.png'
  },
  {
    name: "Anh and Chi",
    cuisine: "Vietnamese, Regional Cuisine",
    price: "$$",
    path: "/canada/vancouver/vancouver/anh-and-chi",
    image: '/images/anh-and-chi1.png'
  },
  {
    name: "AnnaLena",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/annalena",
    image: '/images/annalena1.png'
  },
  {
    name: "Archer",
    cuisine: "Contemporary, North American",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/archer",
    image: '/images/archer1.png'
  },
  {
    name: "Ask for Luigi",
    cuisine: "Italian, North American",
    price: "$$$",
    path: "/canada/vancouver/vancouver/ask-for-luigi",
    image: '/images/ask-for-luigi1.png'
  },
  {
    name: "Bacaro",
    cuisine: "Italian, Venetian",
    price: "$$$",
    path: "/canada/vancouver/vancouver/bacaro",
    image: '/images/bacaro1.png'
  },
  {
    name: "Bacchus",
    cuisine: "Contemporary, French",
    price: "$$$",
    path: "/canada/vancouver/vancouver/bacchus",
    image: '/images/bacchus1.png'
  },
  {
    name: "Bao Bei",
    cuisine: "Chinese, Taiwanese",
    price: "$$$",
    path: "/canada/vancouver/vancouver/bao-bei",
    image: '/images/bao-bei1.png'
  },
  {
    name: "Barbara",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/barbara",
    image: '/images/barbara1.png'
  },
  {
    name: "Bar Gobo",
    cuisine: "Contemporary, North American",
    price: "$$$",
    path: "/canada/vancouver/vancouver/bar-gobo",
    image: '/images/bar-gobo1.png'
  },
  {
    name: "Bar Susu",
    cuisine: "Contemporary, North American",
    price: "$$$",
    path: "/canada/vancouver/vancouver/bar-susu",
    image: '/images/bar-susu1.png'
  },
  {
    name: "Bonjour Vietnam Bistro",
    cuisine: "Vietnamese, Vegetarian",
    price: "$$$",
    path: "/canada/vancouver/vancouver/bonjour-vietnam-bistro",
    image: '/images/bonjour-vietnam-bistro1.png'
  },
  {
    name: "Botanist",
    cuisine: "Contemporary, Regional Cuisine",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/botanist",
    image: '/images/botanist1.png'
  },
  {
    name: "Boulevard Kitchen & Oyster Bar",
    cuisine: "Seafood, Contemporary",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/boulevard-kitchen-oyster-bar",
    image: '/images/boulevard-kitchen-oyster-bar1.png'
  },
  {
    name: "Bravo",
    cuisine: "Contemporary, Seafood",
    price: "$$$",
    path: "/canada/vancouver/vancouver/bravo",
    image: '/images/bravo1.png'
  },
  {
    name: "Burdock & Co",
    cuisine: "Contemporary, North American",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/burdock-co",
    image: '/images/burdock-co1.png'
  },
  {
    name: "Café Medina",
    cuisine: "Contemporary, Mediterranean Cuisine",
    price: "$$",
    path: "/canada/vancouver/vancouver/caf-medina",
    image: '/images/caf-medina1.png'
  },
  {
    name: "Carlino",
    cuisine: "Italian, Regional Cuisine",
    price: "$$$",
    path: "/canada/vancouver/vancouver/carlino",
    image: '/images/carlino1.png'
  },
  {
    name: "Chang'An",
    cuisine: "Chinese, Shaanxi",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/changan",
    image: '/images/changan1.png'
  },
  {
    name: "Chef's Choice Chinese Cuisine",
    cuisine: "Cantonese, Chinese",
    price: "$$$",
    path: "/canada/vancouver/vancouver/chefs-choice-chinese-cuisine",
    image: '/images/chefs-choice-chinese-cuisine1.png'
  },
  {
    name: "Chupito",
    cuisine: "Mexican, Regional Cuisine",
    price: "$$",
    path: "/canada/vancouver/vancouver/chupito",
    image: '/images/chupito1.png'
  },
  {
    name: "¿CóMO? Taperia",
    cuisine: "Spanish, Small eats",
    price: "$$$",
    path: "/canada/vancouver/vancouver/cmo-taperia",
    image: '/images/cmo-taperia1.png'
  },
  {
    name: "Delara",
    cuisine: "Persian, Regional Cuisine",
    price: "$$",
    path: "/canada/vancouver/vancouver/delara",
    image: '/images/delara1.png'
  },
  {
    name: "Dynasty Seafood",
    cuisine: "Cantonese, Chinese",
    price: "$$$",
    path: "/canada/vancouver/vancouver/dynasty-seafood",
    image: '/images/dynasty-seafood1.png'
  },
  {
    name: "Elisa",
    cuisine: "Steakhouse, North American",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/elisa",
    image: '/images/elisa1.png'
  },
  {
    name: "Fable Kitchen",
    cuisine: "Contemporary, North American",
    price: "$$",
    path: "/canada/vancouver/vancouver/fable-kitchen",
    image: '/images/fable-kitchen1.png'
  },
  {
    name: "Fanny Bay Oyster Bar",
    cuisine: "Seafood, North American",
    price: "$$$",
    path: "/canada/vancouver/vancouver/fanny-bay-oyster-bar",
    image: '/images/fanny-bay-oyster-bar1.png'
  },
  {
    name: "Farmer's Apprentice",
    cuisine: "Contemporary, Modern Cuisine",
    price: "$$",
    path: "/canada/vancouver/vancouver/farmers-apprentice",
    image: '/images/farmers-apprentice1.png'
  },
  {
    name: "Folke",
    cuisine: "Vegan, North American",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/folke",
    image: '/images/folke1.png'
  },
  {
    name: "Gary’s",
    cuisine: "French, Contemporary",
    price: "$$",
    path: "/canada/vancouver/vancouver/garys",
    image: '/images/garys1.png'
  },
  {
    name: "Hawksworth Restaurant",
    cuisine: "Contemporary, Regional Cuisine",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/hawksworth-restaurant",
    image: '/images/hawksworth-restaurant1.png'
  },
  {
    name: "Homer St. Cafe",
    cuisine: "Contemporary, French",
    price: "$$$",
    path: "/canada/vancouver/vancouver/homer-st-cafe",
    image: '/images/homer-st-cafe1.png'
  },
  {
    name: "iDen & QuanJuDe Beijing Duck House",
    cuisine: "Chinese, Duck Specialities",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/iden-quanjude-beijing-duck-house",
    image: '/images/iden-quanjude-beijing-duck-house1.png'
  },
  {
    name: "Riley's Fish & Steak",
    cuisine: "Steakhouse, Seafood",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/rileys-fish-steak",
    image: '/images/rileys-fish-steak1.png'
  },
  {
    name: "Karma Indian Bistro",
    cuisine: "Indian, Regional Cuisine",
    price: "$$",
    path: "/canada/vancouver/vancouver/karma-indian-bistro",
    image: '/images/karma-indian-bistro1.png'
  },
  {
    name: "Kissa Tanto",
    cuisine: "Fusion, Contemporary",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/kissa-tanto",
    image: '/images/kissa-tanto1.png'
  },
  {
    name: "L'Abattoir",
    cuisine: "Contemporary, French",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/labattoir",
    image: '/images/labattoir1.png'
  },
  {
    name: "Little Bird Dim Sum + Craft Beer",
    cuisine: "Chinese, Cantonese",
    price: "$$",
    path: "/canada/vancouver/vancouver/little-bird-dim-sum-craft-beer",
    image: '/images/little-bird-dim-sum-craft-beer1.png'
  },
  {
    name: "Lunch Lady",
    cuisine: "Vietnamese, Regional Cuisine",
    price: "$$",
    path: "/canada/vancouver/vancouver/lunch-lady",
    image: '/images/lunch-lady1.png'
  },
  {
    name: "Maenam",
    cuisine: "Thai, Regional Cuisine",
    price: "$$$",
    path: "/canada/vancouver/vancouver/maenam",
    image: '/images/maenam1.png'
  },
  {
    name: "Magari by Oca",
    cuisine: "Contemporary, Italian",
    price: "$$",
    path: "/canada/vancouver/vancouver/magari-by-oca",
    image: '/images/magari-by-oca1.png'
  },
  {
    name: "Masayoshi",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/masayoshi",
    image: '/images/masayoshi1.png'
  },
  {
    name: "Miku",
    cuisine: "Asian, Japanese",
    price: "$$$",
    path: "/canada/vancouver/vancouver/miku",
    image: '/images/miku1.png'
  },
  {
    name: "Moltaqa",
    cuisine: "Moroccan, Regional Cuisine",
    price: "$$",
    path: "/canada/vancouver/vancouver/moltaqa",
    image: '/images/moltaqa1.png'
  },
  {
    name: "Motonobu Udon",
    cuisine: "Udon, Japanese",
    price: "$$",
    path: "/canada/vancouver/vancouver/motonobu-udon",
    image: '/images/motonobu-udon1.png'
  },
  {
    name: "Nammos Estiatorio",
    cuisine: "Greek, Mediterranean Cuisine",
    price: "$$$",
    path: "/canada/vancouver/vancouver/nammos-estiatorio",
    image: '/images/nammos-estiatorio1.png'
  },
  {
    name: "Neptune Palace Seafood Restaurant",
    cuisine: "Cantonese, Seafood",
    price: "$$",
    path: "/canada/vancouver/vancouver/neptune-palace-seafood-restaurant",
    image: '/images/neptune-palace-seafood-restaurant1.png'
  },
  {
    name: "New Mandarin Seafood Restaurant",
    cuisine: "Chinese, Regional Cuisine",
    price: "$$$",
    path: "/canada/vancouver/vancouver/new-mandarin-seafood-restaurant",
    image: '/images/new-mandarin-seafood-restaurant1.png'
  },
  {
    name: "Nightingale",
    cuisine: "Contemporary, Farm to table",
    price: "$$$",
    path: "/canada/vancouver/vancouver/nightingale",
    image: '/images/nightingale1.png'
  },
  {
    name: "Octopus Garden",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/octopus-garden",
    image: '/images/octopus-garden1.png'
  },
  {
    name: "Okeya Kyujiro",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/okeya-kyujiro",
    image: '/images/okeya-kyujiro1.png'
  },
  {
    name: "Ophelía",
    cuisine: "Mexican, Regional Cuisine",
    price: "$$$",
    path: "/canada/vancouver/vancouver/ophela",
    image: '/images/ophela1.png'
  },
  {
    name: "Osteria Savio Volpe",
    cuisine: "Italian, Regional Cuisine",
    price: "$$$",
    path: "/canada/vancouver/vancouver/osteria-savio-volpe",
    image: '/images/osteria-savio-volpe1.png'
  },
  {
    name: "per se Social Corner",
    cuisine: "Italian, Spanish Contemporary",
    price: "$$$",
    path: "/canada/vancouver/vancouver/per-se-social-corner",
    image: '/images/per-se-social-corner1.png'
  },
  {
    name: "Phnom Penh",
    cuisine: "Vietnamese, Cambodian",
    price: "$$",
    path: "/canada/vancouver/vancouver/phnom-penh",
    image: '/images/phnom-penh1.png'
  },
  {
    name: "PiDGiN",
    cuisine: "Contemporary, North American",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/pidgin",
    image: '/images/pidgin1.png'
  },
  {
    name: "Published on Main",
    cuisine: "Contemporary, North American",
    price: "$$$",
    path: "/canada/vancouver/vancouver/published-on-main",
    image: '/images/published-on-main1.png'
  },
  {
    name: "Riley's Fish & Steak",
    cuisine: "Steakhouse, Seafood",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/rileys-fish-steak",
    image: '/images/rileys-fish-steak1.png'
  },
  {
    name: "Seaport City Seafood",
    cuisine: "Chinese, Dim Sum",
    price: "$$",
    path: "/canada/vancouver/vancouver/seaport-city-seafood",
    image: '/images/seaport-city-seafood1.png'
  },
  {
    name: "Song (by Kin Kao)",
    cuisine: "Thai, Regional Cuisine",
    price: "$$",
    path: "/canada/vancouver/vancouver/song-by-kin-kao",
    image: '/images/song-by-kin-kao1.png'
  },
  {
    name: "St. Lawrence",
    cuisine: "French",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/st-lawrence",
    image: '/images/st-lawrence1.png'
  },
  {
    name: "Sushi Bar Maumi",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/sushi-bar-maumi",
    image: '/images/sushi-bar-maumi1.png'
  },
  {
    name: "Sushi Hil",
    cuisine: "Japanese, Sushi",
    price: "$$",
    path: "/canada/vancouver/vancouver/sushi-hil",
    image: '/images/sushi-hil1.png'
  },
  {
    name: "Sushi Jin",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/sushi-jin",
    image: '/images/sushi-jin1.png'
  },
  {
    name: "Sushi Masuda",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/sushi-masuda",
    image: '/images/sushi-masuda1.png'
  },
  {
    name: "Suyo",
    cuisine: "Peruvian, Regional Cuisine",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/suyo",
    image: '/images/suyo1.png'
  },
  {
    name: "Tetsu Sushi Bar",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/tetsu-sushi-bar",
    image: '/images/tetsu-sushi-bar1.png'
  },
  {
    name: "The Acorn",
    cuisine: "Vegetarian, Vegan",
    price: "$$$",
    path: "/canada/vancouver/vancouver/the-acorn",
    image: '/images/the-acorn1.png'
  },
  {
    name: "The Lobby Lounge & RawBar",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/the-lobby-lounge-rawbar",
    image: '/images/the-lobby-lounge-rawbar1.png'
  },
  {
    name: "The Mackenzie Room",
    cuisine: "Contemporary, Regional Cuisine",
    price: "$$$",
    path: "/canada/vancouver/vancouver/the-mackenzie-room",
    image: '/images/the-mackenzie-room1.png'
  },
  {
    name: "Torafuku",
    cuisine: "Asian, Contemporary",
    price: "$$$",
    path: "/canada/vancouver/vancouver/torafuku",
    image: '/images/torafuku1.png'
  },
  {
    name: "Vij's",
    cuisine: "Indian, Regional Cuisine",
    price: "$$",
    path: "/canada/vancouver/vancouver/vijs",
    image: '/images/vijs1.png'
  },
  {
    name: "Wildlight Kitchen + Bar",
    cuisine: "Contemporary, Regional Cuisine",
    price: "$$$",
    path: "/canada/vancouver/vancouver/wildlight-kitchen-bar",
    image: '/images/wildlight-kitchen-bar1.png'
  },
  {
    name: "Yuwa",
    cuisine: "Japanese, Seafood",
    price: "$$$",
    path: "/canada/vancouver/vancouver/yuwa",
    image: '/images/yuwa1.png'
  },
  {
    name: "Zab Bite - Thai E-Sarn Cuisine",
    cuisine: "Thai, Regional Cuisine",
    price: "$$",
    path: "/canada/vancouver/vancouver/zab-bite-thai-e-sarn-cuisine",
    image: '/images/zab-bite-thai-e-sarn-cuisine1.png'
  },
  {
    name: "Seaport City Seafood",
    cuisine: "Chinese, Dim Sum",
    price: "$$",
    path: "/canada/vancouver/vancouver/seaport-city-seafood",
    image: '/images/seaport-city-seafood1.png'
  },
  {
    name: "Song (by Kin Kao)",
    cuisine: "Thai, Regional Cuisine",
    price: "$$",
    path: "/canada/vancouver/vancouver/song-by-kin-kao",
    image: '/images/song-by-kin-kao1.png'
  },
  {
    name: "St. Lawrence",
    cuisine: "French",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/st-lawrence",
    image: '/images/st-lawrence1.png'
  },
  {
    name: "Sumibiyaki Arashi",
    cuisine: "Japanese, Yakitori",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/sumibiyaki-arashi",
    image: '/images/sumibiyaki-arashi1.png'
  },
  {
    name: "Sushi Bar Maumi",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/sushi-bar-maumi",
    image: '/images/sushi-bar-maumi1.png'
  },
  {
    name: "Sushi Hil",
    cuisine: "Japanese, Sushi",
    price: "$$",
    path: "/canada/vancouver/vancouver/sushi-hil",
    image: '/images/sushi-hil1.png'
  },
  {
    name: "Sushi Hyun",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/sushi-hyun",
    image: '/images/sushi-hyun1.png'
  },
  {
    name: "Sushi Jin",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/sushi-jin",
    image: '/images/sushi-jin1.png'
  },
  {
    name: "Sushi Masuda",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/sushi-masuda",
    image: '/images/sushi-masuda1.png'
  },
  {
    name: "Suyo",
    cuisine: "Peruvian, Regional Cuisine",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/suyo",
    image: '/images/suyo1.png'
  },
  {
    name: "Tetsu Sushi Bar",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/tetsu-sushi-bar",
    image: '/images/tetsu-sushi-bar1.png'
  },
  {
    name: "The Acorn",
    cuisine: "Vegetarian, Vegan",
    price: "$$$",
    path: "/canada/vancouver/vancouver/the-acorn",
    image: '/images/the-acorn1.png'
  },
  {
    name: "The Lobby Lounge & RawBar",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/canada/vancouver/vancouver/the-lobby-lounge-rawbar",
    image: '/images/the-lobby-lounge-rawbar1.png'
  },
  {
    name: "The Mackenzie Room",
    cuisine: "Contemporary, Regional Cuisine",
    price: "$$$",
    path: "/canada/vancouver/vancouver/the-mackenzie-room",
    image: '/images/the-mackenzie-room1.png'
  },
  {
    name: "Torafuku",
    cuisine: "Asian, Contemporary",
    price: "$$$",
    path: "/canada/vancouver/vancouver/torafuku",
    image: '/images/torafuku1.png'
  },
  {
    name: "Vij's",
    cuisine: "Indian, Regional Cuisine",
    price: "$$",
    path: "/canada/vancouver/vancouver/vijs",
    image: '/images/vijs1.png'
  },
  {
    name: "Wildlight Kitchen + Bar",
    cuisine: "Contemporary, Regional Cuisine",
    price: "$$$",
    path: "/canada/vancouver/vancouver/wildlight-kitchen-bar",
    image: '/images/wildlight-kitchen-bar1.png'
  },
  {
    name: "Yuwa",
    cuisine: "Japanese, Seafood",
    price: "$$$",
    path: "/canada/vancouver/vancouver/yuwa",
    image: '/images/yuwa1.png'
  },
  {
    name: "Zab Bite - Thai E-Sarn Cuisine",
    cuisine: "Thai, Regional Cuisine",
    price: "$$",
    path: "/canada/vancouver/vancouver/zab-bite-thai-e-sarn-cuisine",
    image: '/images/zab-bite-thai-e-sarn-cuisine1.png'
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
