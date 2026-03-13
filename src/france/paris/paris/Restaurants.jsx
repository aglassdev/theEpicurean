import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Paris";

const restaurants = [
  {
    name: "114, Faubourg",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/114-faubourg",
    image: '/images/114-faubourg1.png'
  },
  {
    name: "19.20 by Norbert Tarayre",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/france/paris/paris/1920-by-norbert-tarayre",
    image: '/images/1920-by-norbert-tarayre1.png'
  },
  {
    name: "19 Saint Roch",
    cuisine: "Creative",
    price: "€€€",
    path: "/france/paris/paris/19-saint-roch",
    image: '/images/19-saint-roch1.png'
  },
  {
    name: "20 Eiffel",
    cuisine: "Traditional Cuisine, Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/20-eiffel",
    image: '/images/20-eiffel1.png'
  },
  {
    name: "24 - Le Restaurant",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/24-le-restaurant",
    image: '/images/24-le-restaurant1.png'
  },
  {
    name: "52 Faubourg St-Denis",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/52-faubourg-st-denis",
    image: '/images/52-faubourg-st-denis1.png'
  },
  {
    name: "Abri Soba",
    cuisine: "Japanese",
    price: "€€",
    path: "/france/paris/paris/abri-soba",
    image: '/images/abri-soba1.png'
  },
  {
    name: "Accents Table Bourse",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/accents-table-bourse",
    image: '/images/accents-table-bourse1.png'
  },
  {
    name: "Adami",
    cuisine: "Italian",
    price: "€€",
    path: "/france/paris/paris/adami",
    image: '/images/adami1.png'
  },
  {
    name: "Adraba",
    cuisine: "Mediterranean Cuisine",
    price: "€€€",
    path: "/france/paris/paris/adraba",
    image: '/images/adraba1.png'
  },
  {
    name: "Agapé",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/agap",
    image: '/images/agap1.png'
  },
  {
    name: "Aida",
    cuisine: "Japanese",
    price: "€€€€",
    path: "/france/paris/paris/aida",
    image: '/images/aida1.png'
  },
  {
    name: "Akabeko",
    cuisine: "Fusion",
    price: "€€€€",
    path: "/france/paris/paris/akabeko",
    image: '/images/akabeko1.png'
  },
  {
    name: "Akira Back Paris",
    cuisine: "Japanese, Fusion",
    price: "€€€€",
    path: "/france/paris/paris/akira-back-paris",
    image: '/images/akira-back-paris1.png'
  },
  {
    name: "Akrame",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/akrame",
    image: '/images/akrame1.png'
  },
  {
    name: "Alan Geaam",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/alan-geaam",
    image: '/images/alan-geaam1.png'
  },
  {
    name: "Aldehyde",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/aldehyde",
    image: '/images/aldehyde1.png'
  },
  {
    name: "a.lea",
    cuisine: "Modern Cuisine, Farm to table",
    price: "€€",
    path: "/france/paris/paris/alea",
    image: '/images/alea1.png'
  },
  {
    name: "Allard",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/france/paris/paris/allard",
    image: '/images/allard1.png'
  },
  {
    name: "Alleudium",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/alleudium",
    image: '/images/alleudium1.png'
  },
  {
    name: "Alliance",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/alliance",
    image: '/images/alliance1.png'
  },
  {
    name: "Alléno Paris au Pavillon Ledoyen",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/allno-paris-au-pavillon-ledoyen",
    image: '/images/allno-paris-au-pavillon-ledoyen1.png'
  },
  {
    name: "Alluma",
    cuisine: "Mediterranean Cuisine, Israeli",
    price: "€€€",
    path: "/france/paris/paris/alluma",
    image: '/images/alluma1.png'
  },
  {
    name: "Amarante",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/france/paris/paris/amarante",
    image: '/images/amarante1.png'
  },
  {
    name: "Ambos",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/ambos",
    image: '/images/ambos1.png'
  },
  {
    name: "Amâlia",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/amlia",
    image: '/images/amlia1.png'
  },
  {
    name: "Anicia, table nature",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/anicia-table-nature",
    image: '/images/anicia-table-nature1.png'
  },
  {
    name: "Anne",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/anne",
    image: '/images/anne1.png'
  },
  {
    name: "Anona",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/anona",
    image: '/images/anona1.png'
  },
  {
    name: "Apicius",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/apicius",
    image: '/images/apicius1.png'
  },
  {
    name: "Argile",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/argile",
    image: '/images/argile1.png'
  },
  {
    name: "Argile",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/argile",
    image: '/images/argile1.png'
  },
  {
    name: "Armani Ristorante",
    cuisine: "Italian",
    price: "€€€€",
    path: "/france/paris/paris/armani-ristorante",
    image: '/images/armani-ristorante1.png'
  },
  {
    name: "Arnaud Nicolas",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/arnaud-nicolas",
    image: '/images/arnaud-nicolas1.png'
  },
  {
    name: "Arpège",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/arpge",
    image: '/images/arpge1.png'
  },
  {
    name: "ASPIC",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/aspic",
    image: '/images/aspic1.png'
  },
  {
    name: "Astrance",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/astrance",
    image: '/images/astrance1.png'
  },
  {
    name: "AT",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/at",
    image: '/images/at1.png'
  },
  {
    name: "Atelier Maître Albert",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/paris/paris/atelier-matre-albert",
    image: '/images/atelier-matre-albert1.png'
  },
  {
    name: "Au Trou Gascon",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/au-trou-gascon",
    image: '/images/au-trou-gascon1.png'
  },
  {
    name: "Auberge Nicolas Flamel",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/auberge-nicolas-flamel",
    image: '/images/auberge-nicolas-flamel1.png'
  },
  {
    name: "Auberge Pyrénées Cévennes",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/paris/paris/auberge-pyrnes-cvennes",
    image: '/images/auberge-pyrnes-cvennes1.png'
  },
  {
    name: "Auguste",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/auguste",
    image: '/images/auguste1.png'
  },
  {
    name: "Automne",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/automne",
    image: '/images/automne1.png'
  },
  {
    name: "Aux 2 K",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/aux-2-k",
    image: '/images/aux-2-k1.png'
  },
  {
    name: "Aux Lyonnais",
    cuisine: "Lyonnaise",
    price: "€€",
    path: "/france/paris/paris/aux-lyonnais",
    image: '/images/aux-lyonnais1.png'
  },
  {
    name: "Aux Plumes",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/aux-plumes",
    image: '/images/aux-plumes1.png'
  },
  {
    name: "Aux Prés",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/aux-prs",
    image: '/images/aux-prs1.png'
  },
  {
    name: "Baca'v par Gilles Choukroun",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/paris/paris/bacav-par-gilles-choukroun",
    image: '/images/bacav-par-gilles-choukroun1.png'
  },
  {
    name: "Baffo",
    cuisine: "Italian",
    price: "€€€",
    path: "/france/paris/paris/baffo",
    image: '/images/baffo1.png'
  },
  {
    name: "Baieta",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/baieta",
    image: '/images/baieta1.png'
  },
  {
    name: "Baillotte",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/baillotte",
    image: '/images/baillotte1.png'
  },
  {
    name: "Bellefeuille - Saint James Paris",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/bellefeuille-saint-james-paris",
    image: '/images/bellefeuille-saint-james-paris1.png'
  },
  {
    name: "Benjamin Schmitt Restaurant",
    cuisine: "Traditional Cuisine, Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/benjamin-schmitt-restaurant",
    image: '/images/benjamin-schmitt-restaurant1.png'
  },
  {
    name: "Benoit",
    cuisine: "Classic Cuisine",
    price: "€€€",
    path: "/france/paris/paris/benoit",
    image: '/images/benoit1.png'
  },
  {
    name: "Beurre Noisette",
    cuisine: "Farm to table",
    price: "€€",
    path: "/france/paris/paris/beurre-noisette",
    image: '/images/beurre-noisette1.png'
  },
  {
    name: "Biondi",
    cuisine: "Argentinian",
    price: "€€€",
    path: "/france/paris/paris/biondi",
    image: '/images/biondi1.png'
  },
  {
    name: "Biscotte",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/biscotte",
    image: '/images/biscotte1.png'
  },
  {
    name: "Bistro S",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/bistro-s",
    image: '/images/bistro-s1.png'
  },
  {
    name: "Bistrot Augustin",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/paris/paris/bistrot-augustin",
    image: '/images/bistrot-augustin1.png'
  },
  {
    name: "Bistrot des Fables",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/paris/paris/bistrot-des-fables",
    image: '/images/bistrot-des-fables1.png'
  },
  {
    name: "Bistrot Instinct",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/bistrot-instinct",
    image: '/images/bistrot-instinct1.png'
  },
  {
    name: "Bistrot Marloe",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/bistrot-marloe",
    image: '/images/bistrot-marloe1.png'
  },
  {
    name: "Bistrot Paul Bert",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/paris/paris/bistrot-paul-bert",
    image: '/images/bistrot-paul-bert1.png'
  },
  {
    name: "Bistrotters",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/bistrotters",
    image: '/images/bistrotters1.png'
  },
  {
    name: "Blanc",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/blanc",
    image: '/images/blanc1.png'
  },
  {
    name: "Bloom",
    cuisine: "Vegan, Vegetarian",
    price: "€€",
    path: "/france/paris/paris/bloom",
    image: '/images/bloom1.png'
  },
  {
    name: "Bloom Garden",
    cuisine: "Modern Cuisine, Creative",
    price: "€€€",
    path: "/france/paris/paris/bloom-garden",
    image: '/images/bloom-garden1.png'
  },
  {
    name: "Ébène",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/bne",
    image: '/images/bne1.png'
  },
  {
    name: "Bombance",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/bombance",
    image: '/images/bombance1.png'
  },
  {
    name: "Bon Kushikatsu",
    cuisine: "Japanese",
    price: "€€€",
    path: "/france/paris/paris/bon-kushikatsu",
    image: '/images/bon-kushikatsu1.png'
  },
  {
    name: "Bonhomme",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/bonhomme",
    image: '/images/bonhomme1.png'
  },
  {
    name: "Boutary",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/boutary",
    image: '/images/boutary1.png'
  },
  {
    name: "Brach",
    cuisine: "Mediterranean Cuisine",
    price: "€€€",
    path: "/france/paris/paris/brach",
    image: '/images/brach1.png'
  },
  {
    name: "Braise",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/braise",
    image: '/images/braise1.png'
  },
  {
    name: "Brasserie du Louvre",
    cuisine: "Traditional Cuisine, Lyonnaise",
    price: "€€€",
    path: "/france/paris/paris/brasserie-du-louvre",
    image: '/images/brasserie-du-louvre1.png'
  },
  {
    name: "Brasserie Lutetia",
    cuisine: "Seafood, Classic Cuisine",
    price: "€€€",
    path: "/france/paris/paris/brasserie-lutetia",
    image: '/images/brasserie-lutetia1.png'
  },
  {
    name: "Brigade du Tigre",
    cuisine: "Asian",
    price: "€€",
    path: "/france/paris/paris/brigade-du-tigre",
    image: '/images/brigade-du-tigre1.png'
  },
  {
    name: "Brion",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/brion",
    image: '/images/brion1.png'
  },
  {
    name: "BRU",
    cuisine: "Modern Cuisine, Creole",
    price: "€€",
    path: "/france/paris/paris/bru",
    image: '/images/bru1.png'
  },
  {
    name: "Café Compagnon",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/caf-compagnon",
    image: '/images/caf-compagnon1.png'
  },
  {
    name: "Café des Ministères",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/paris/paris/caf-des-ministres",
    image: '/images/caf-des-ministres1.png'
  },
  {
    name: "Caffè Stern",
    cuisine: "Italian",
    price: "€€€€",
    path: "/france/paris/paris/caff-stern",
    image: '/images/caff-stern1.png'
  },
  {
    name: "Caillebotte",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/caillebotte",
    image: '/images/caillebotte1.png'
  },
  {
    name: "Calice",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/calice",
    image: '/images/calice1.png'
  },
  {
    name: "Campelli",
    cuisine: "Creative",
    price: "€€",
    path: "/france/paris/paris/campelli",
    image: '/images/campelli1.png'
  },
  {
    name: "Capitaine",
    cuisine: "Farm to table",
    price: "€€€",
    path: "/france/paris/paris/capitaine",
    image: '/images/capitaine1.png'
  },
  {
    name: "Capsule",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/paris/paris/capsule",
    image: '/images/capsule1.png'
  },
  {
    name: "Caïus",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/caus",
    image: '/images/caus1.png'
  },
  {
    name: "Caves Pétrissans",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/paris/paris/caves-ptrissans",
    image: '/images/caves-ptrissans1.png'
  },
  {
    name: "Chakaiseki Akiyoshi",
    cuisine: "Japanese",
    price: "€€€€",
    path: "/france/paris/paris/chakaiseki-akiyoshi",
    image: '/images/chakaiseki-akiyoshi1.png'
  },
  {
    name: "Chantoiseau",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/chantoiseau",
    image: '/images/chantoiseau1.png'
  },
  {
    name: "Charbon Kunitoraya",
    cuisine: "Yakitori, Japanese",
    price: "€€€€",
    path: "/france/paris/paris/charbon-kunitoraya",
    image: '/images/charbon-kunitoraya1.png'
  },
  {
    name: "Chenapan",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/chenapan",
    image: '/images/chenapan1.png'
  },
  {
    name: "Chez Michel",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/paris/paris/chez-michel",
    image: '/images/chez-michel1.png'
  },
  {
    name: "Chez Monsieur",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/france/paris/paris/chez-monsieur",
    image: '/images/chez-monsieur1.png'
  },
  {
    name: "Chocho",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/chocho",
    image: '/images/chocho1.png'
  },
  {
    name: "Ciasa Mia",
    cuisine: "Italian Contemporary",
    price: "€€€",
    path: "/france/paris/paris/ciasa-mia",
    image: '/images/ciasa-mia1.png'
  },
  {
    name: "Clamato",
    cuisine: "Seafood, Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/clamato",
    image: '/images/clamato1.png'
  },
  {
    name: "Clos d'Astorg",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/paris/paris/clos-dastorg",
    image: '/images/clos-dastorg1.png'
  },
  {
    name: "Clover Grill",
    cuisine: "Grills",
    price: "€€€",
    path: "/france/paris/paris/clover-grill",
    image: '/images/clover-grill1.png'
  },
  {
    name: "Clover Saint-Germain",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/clover-saint-germain",
    image: '/images/clover-saint-germain1.png'
  },
  {
    name: "Clutch",
    cuisine: "Creative",
    price: "€€",
    path: "/france/paris/paris/clutch",
    image: '/images/clutch1.png'
  },
  {
    name: "CO/DA",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/coda",
    image: '/images/coda1.png'
  },
  {
    name: "Colvert",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/colvert",
    image: '/images/colvert1.png'
  },
  {
    name: "Comice",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/comice",
    image: '/images/comice1.png'
  },
  {
    name: "Comme Chez Maman",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/comme-chez-maman",
    image: '/images/comme-chez-maman1.png'
  },
  {
    name: "Contraste",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/contraste",
    image: '/images/contraste1.png'
  },
  {
    name: "Coretta",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/coretta",
    image: '/images/coretta1.png'
  },
  {
    name: "Dame",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/dame",
    image: '/images/dame1.png'
  },
  {
    name: "Dame Augustine",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/dame-augustine",
    image: '/images/dame-augustine1.png'
  },
  {
    name: "Dandelion",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/dandelion",
    image: '/images/dandelion1.png'
  },
  {
    name: "Dante",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/dante",
    image: '/images/dante1.png'
  },
  {
    name: "Datil",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/datil",
    image: '/images/datil1.png'
  },
  {
    name: "David Toutain",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/david-toutain",
    image: '/images/david-toutain1.png'
  },
  {
    name: "Dersou",
    cuisine: "Creative",
    price: "€€€",
    path: "/france/paris/paris/dersou",
    image: '/images/dersou1.png'
  },
  {
    name: "Des Terres",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/des-terres",
    image: '/images/des-terres1.png'
  },
  {
    name: "Dessance",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/dessance",
    image: '/images/dessance1.png'
  },
  {
    name: "Dessirier",
    cuisine: "Seafood",
    price: "€€€€",
    path: "/france/paris/paris/dessirier",
    image: '/images/dessirier1.png'
  },
  {
    name: "Deux Bistrot de chefs",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/deux-bistrot-de-chefs",
    image: '/images/deux-bistrot-de-chefs1.png'
  },
  {
    name: "Dilia",
    cuisine: "Creative",
    price: "€€€",
    path: "/france/paris/paris/dilia",
    image: '/images/dilia1.png'
  },
  {
    name: "Disciples",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/france/paris/paris/disciples",
    image: '/images/disciples1.png'
  },
  {
    name: "Divellec",
    cuisine: "Seafood",
    price: "€€€€",
    path: "/france/paris/paris/divellec",
    image: '/images/divellec1.png'
  },
  {
    name: "Don Juan II",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/don-juan-ii",
    image: '/images/don-juan-ii1.png'
  },
  {
    name: "Double Dragon",
    cuisine: "Asian",
    price: "€€",
    path: "/france/paris/paris/double-dragon",
    image: '/images/double-dragon1.png'
  },
  {
    name: "Drouant",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/france/paris/paris/drouant",
    image: '/images/drouant1.png'
  },
  {
    name: "Ducasse Baccarat",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/ducasse-baccarat",
    image: '/images/ducasse-baccarat1.png'
  },
  {
    name: "Ducasse sur Seine",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/ducasse-sur-seine",
    image: '/images/ducasse-sur-seine1.png'
  },
  {
    name: "Eclipses",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/eclipses",
    image: '/images/eclipses1.png'
  },
  {
    name: "Edith",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/paris/paris/edith",
    image: '/images/edith1.png'
  },
  {
    name: "Eels",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/eels",
    image: '/images/eels1.png'
  },
  {
    name: "Elmer",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/elmer",
    image: '/images/elmer1.png'
  },
  {
    name: "Elsass",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/elsass",
    image: '/images/elsass1.png'
  },
  {
    name: "Emporio Armani Caffè",
    cuisine: "Italian",
    price: "€€€",
    path: "/france/paris/paris/emporio-armani-caff",
    image: '/images/emporio-armani-caff1.png'
  },
  {
    name: "ERH",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/erh",
    image: '/images/erh1.png'
  },
  {
    name: "Erso",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/erso",
    image: '/images/erso1.png'
  },
  {
    name: "ES",
    cuisine: "Modern Cuisine, Creative",
    price: "€€€€",
    path: "/france/paris/paris/es",
    image: '/images/es1.png'
  },
  {
    name: "Espadon",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/espadon",
    image: '/images/espadon1.png'
  },
  {
    name: "Etsi",
    cuisine: "Greek",
    price: "€€",
    path: "/france/paris/paris/etsi",
    image: '/images/etsi1.png'
  },
  {
    name: "Eunoé",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/euno",
    image: '/images/euno1.png'
  },
  {
    name: "Fana",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/fana",
    image: '/images/fana1.png'
  },
  {
    name: "Faubourg Daimant",
    cuisine: "Vegan",
    price: "€€",
    path: "/france/paris/paris/faubourg-daimant",
    image: '/images/faubourg-daimant1.png'
  },
  {
    name: "Felini",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/felini",
    image: '/images/felini1.png'
  },
  {
    name: "FIEF",
    cuisine: "Modern Cuisine, Creative",
    price: "€€€€",
    path: "/france/paris/paris/fief",
    image: '/images/fief1.png'
  },
  {
    name: "Fleur de Pavé",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/fleur-de-pav",
    image: '/images/fleur-de-pav1.png'
  },
  {
    name: "Flocon",
    cuisine: "Farm to table",
    price: "€€",
    path: "/france/paris/paris/flocon",
    image: '/images/flocon1.png'
  },
  {
    name: "FOGO",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/fogo",
    image: '/images/fogo1.png'
  },
  {
    name: "Frédéric Simonin",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/frdric-simonin",
    image: '/images/frdric-simonin1.png'
  },
  {
    name: "Frenchie",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/frenchie",
    image: '/images/frenchie1.png'
  },
  {
    name: "Frenchie Pigalle",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/frenchie-pigalle",
    image: '/images/frenchie-pigalle1.png'
  },
  {
    name: "Fugue",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/fugue",
    image: '/images/fugue1.png'
  },
  {
    name: "Galanga",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/galanga",
    image: '/images/galanga1.png'
  },
  {
    name: "Gare au Gorille",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/gare-au-gorille",
    image: '/images/gare-au-gorille1.png'
  },
  {
    name: "Gaya par Pierre Gagnaire",
    cuisine: "Modern Cuisine, Seafood",
    price: "€€€",
    path: "/france/paris/paris/gaya-par-pierre-gagnaire",
    image: '/images/gaya-par-pierre-gagnaire1.png'
  },
  {
    name: "Gemellus",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/gemellus",
    image: '/images/gemellus1.png'
  },
  {
    name: "Geoélia",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/geolia",
    image: '/images/geolia1.png'
  },
  {
    name: "Godaille",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/godaille",
    image: '/images/godaille1.png'
  },
  {
    name: "Géosmine",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/gosmine",
    image: '/images/gosmine1.png'
  },
  {
    name: "GrandCœur",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/grandcur",
    image: '/images/grandcur1.png'
  },
  {
    name: "Granite",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/granite",
    image: '/images/granite1.png'
  },
  {
    name: "Guefen",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/guefen",
    image: '/images/guefen1.png'
  },
  {
    name: "Guy Savoy",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/guy-savoy",
    image: '/images/guy-savoy1.png'
  },
  {
    name: "Habile.",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/habile",
    image: '/images/habile1.png'
  },
  {
    name: "Hakuba",
    cuisine: "Japanese",
    price: "€€€€",
    path: "/france/paris/paris/hakuba",
    image: '/images/hakuba1.png'
  },
  {
    name: "Halle aux Grains",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/halle-aux-grains",
    image: '/images/halle-aux-grains1.png'
  },
  {
    name: "Halo Paris",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/halo-paris",
    image: '/images/halo-paris1.png'
  },
  {
    name: "HANADA",
    cuisine: "Japanese",
    price: "€€€€",
    path: "/france/paris/paris/hanada",
    image: '/images/hanada1.png'
  },
  {
    name: "Helen",
    cuisine: "Seafood",
    price: "€€€€",
    path: "/france/paris/paris/helen",
    image: '/images/helen1.png'
  },
  {
    name: "Hestia",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/hestia",
    image: '/images/hestia1.png'
  },
  {
    name: "Hestia",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/hestia",
    image: '/images/hestia1.png'
  },
  {
    name: "Hémicycle",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/hmicycle",
    image: '/images/hmicycle1.png'
  },
  {
    name: "Hokusaï",
    cuisine: "Japanese, Fusion",
    price: "€€€",
    path: "/france/paris/paris/hokusa",
    image: '/images/hokusa1.png'
  },
  {
    name: "HuThoPi",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/huthopi",
    image: '/images/huthopi1.png'
  },
  {
    name: "Ilô",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/il",
    image: '/images/il1.png'
  },
  {
    name: "Il Carpaccio",
    cuisine: "Italian",
    price: "€€€€",
    path: "/france/paris/paris/il-carpaccio",
    image: '/images/il-carpaccio1.png'
  },
  {
    name: "Il Ristorante - Niko Romito",
    cuisine: "Italian",
    price: "€€€€",
    path: "/france/paris/paris/il-ristorante-niko-romito",
    image: '/images/il-ristorante-niko-romito1.png'
  },
  {
    name: "Imperial Treasure",
    cuisine: "Chinese",
    price: "€€€€",
    path: "/france/paris/paris/imperial-treasure",
    image: '/images/imperial-treasure1.png'
  },
  {
    name: "Impérial Choisy",
    cuisine: "Chinese",
    price: "€€",
    path: "/france/paris/paris/imprial-choisy",
    image: '/images/imprial-choisy1.png'
  },
  {
    name: "Irwin",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/irwin",
    image: '/images/irwin1.png'
  },
  {
    name: "Jacques Faussat",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/france/paris/paris/jacques-faussat",
    image: '/images/jacques-faussat1.png'
  },
  {
    name: "Jean Imbert au Plaza Athénée",
    cuisine: "Classic Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/jean-imbert-au-plaza-athne",
    image: '/images/jean-imbert-au-plaza-athne1.png'
  },
  {
    name: "Jeanne-Aimée",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/jeanne-aime",
    image: '/images/jeanne-aime1.png'
  },
  {
    name: "Jin",
    cuisine: "Japanese, Sushi",
    price: "€€€€",
    path: "/france/paris/paris/jin",
    image: '/images/jin1.png'
  },
  {
    name: "Jip",
    cuisine: "Korean",
    price: "€€",
    path: "/france/paris/paris/jip",
    image: '/images/jip1.png'
  },
  {
    name: "Jium",
    cuisine: "Korean",
    price: "€€",
    path: "/france/paris/paris/jium",
    image: '/images/jium1.png'
  },
  {
    name: "jjii",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/jjii",
    image: '/images/jjii1.png'
  },
  {
    name: "Jouvence",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/jouvence",
    image: '/images/jouvence1.png'
  },
  {
    name: "Jupi",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/jupi",
    image: '/images/jupi1.png'
  },
  {
    name: "Kalank",
    cuisine: "Mediterranean Cuisine",
    price: "€€",
    path: "/france/paris/paris/kalank",
    image: '/images/kalank1.png'
  },
  {
    name: "Kapara",
    cuisine: "Mediterranean Cuisine",
    price: "€€€",
    path: "/france/paris/paris/kapara",
    image: '/images/kapara1.png'
  },
  {
    name: "Kei",
    cuisine: "Modern Cuisine, Creative",
    price: "€€€€",
    path: "/france/paris/paris/kei",
    image: '/images/kei1.png'
  },
  {
    name: "Ken Yamamoto",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/ken-yamamoto",
    image: '/images/ken-yamamoto1.png'
  },
  {
    name: "Kigawa",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/france/paris/paris/kigawa",
    image: '/images/kigawa1.png'
  },
  {
    name: "Kisin",
    cuisine: "Japanese",
    price: "€€",
    path: "/france/paris/paris/kisin",
    image: '/images/kisin1.png'
  },
  {
    name: "Kitchen Ter(re)",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/kitchen-terre",
    image: '/images/kitchen-terre1.png'
  },
  {
    name: "Kodawari Ramen - Yokochō",
    cuisine: "Japanese",
    price: "€€",
    path: "/france/paris/paris/kodawari-ramen-yokoch",
    image: '/images/kodawari-ramen-yokoch1.png'
  },
  {
    name: "Korus",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/korus",
    image: '/images/korus1.png'
  },
  {
    name: "Kwon",
    cuisine: "Korean",
    price: "€€",
    path: "/france/paris/paris/kwon",
    image: '/images/kwon1.png'
  },
  {
    name: "À La Biche au Bois",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/paris/paris/la-biche-au-bois",
    image: '/images/la-biche-au-bois1.png'
  },
  {
    name: "La Borie",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/la-borie",
    image: '/images/la-borie1.png'
  },
  {
    name: "La Bourse et la Vie",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/paris/paris/la-bourse-et-la-vie",
    image: '/images/la-bourse-et-la-vie1.png'
  },
  {
    name: "La Causerie",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/la-causerie",
    image: '/images/la-causerie1.png'
  },
  {
    name: "La Condesa",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/la-condesa",
    image: '/images/la-condesa1.png'
  },
  {
    name: "La Dame de Pic",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/la-dame-de-pic",
    image: '/images/la-dame-de-pic1.png'
  },
  {
    name: "La Datcha",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/la-datcha",
    image: '/images/la-datcha1.png'
  },
  {
    name: "La Ferme du Pré",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/france/paris/paris/la-ferme-du-pr",
    image: '/images/la-ferme-du-pr1.png'
  },
  {
    name: "La Fourchette du Printemps",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/la-fourchette-du-printemps",
    image: '/images/la-fourchette-du-printemps1.png'
  },
  {
    name: "La Grande Cascade",
    cuisine: "Classic Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/la-grande-cascade",
    image: '/images/la-grande-cascade1.png'
  },
  {
    name: "La Grande Ourse",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/la-grande-ourse",
    image: '/images/la-grande-ourse1.png'
  },
  {
    name: "La Méditerranée",
    cuisine: "Seafood",
    price: "€€",
    path: "/france/paris/paris/la-mditerrane",
    image: '/images/la-mditerrane1.png'
  },
  {
    name: "La Poule au Pot",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/france/paris/paris/la-poule-au-pot",
    image: '/images/la-poule-au-pot1.png'
  },
  {
    name: "La Régalade Saint-Honoré",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/france/paris/paris/la-rgalade-saint-honor",
    image: '/images/la-rgalade-saint-honor1.png'
  },
  {
    name: "La Scène",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/la-scne",
    image: '/images/la-scne1.png'
  },
  {
    name: "La Scène Thélème",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/la-scne-thlme",
    image: '/images/la-scne-thlme1.png'
  },
  {
    name: "La Table Cachée par Michel Roth",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/la-table-cache-par-michel-roth",
    image: '/images/la-table-cache-par-michel-roth1.png'
  },
  {
    name: "La Table de Colette",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/la-table-de-colette",
    image: '/images/la-table-de-colette1.png'
  },
  {
    name: "La Table de Mee",
    cuisine: "Korean",
    price: "€€",
    path: "/france/paris/paris/la-table-de-mee",
    image: '/images/la-table-de-mee1.png'
  },
  {
    name: "La Table du Caviste Bio",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/la-table-du-caviste-bio",
    image: '/images/la-table-du-caviste-bio1.png'
  },
  {
    name: "L'Abysse au Pavillon Ledoyen",
    cuisine: "Japanese, Creative",
    price: "€€€€",
    path: "/france/paris/paris/labysse-au-pavillon-ledoyen",
    image: '/images/labysse-au-pavillon-ledoyen1.png'
  },
  {
    name: "L'Abysse Paris",
    cuisine: "Japanese, Creative",
    price: "€€€€",
    path: "/france/paris/paris/labysse-paris",
    image: '/images/labysse-paris1.png'
  },
  {
    name: "L'Accolade",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/laccolade",
    image: '/images/laccolade1.png'
  },
  {
    name: "L'Agrume",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/lagrume",
    image: '/images/lagrume1.png'
  },
  {
    name: "Lai'Tcha",
    cuisine: "Asian",
    price: "€",
    path: "/france/paris/paris/laitcha",
    image: '/images/laitcha1.png'
  },
  {
    name: "L'Altro Frenchie",
    cuisine: "Italian, Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/laltro-frenchie",
    image: '/images/laltro-frenchie1.png'
  },
  {
    name: "L'Ambroisie",
    cuisine: "Classic Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/lambroisie",
    image: '/images/lambroisie1.png'
  },
  {
    name: "L'Ami Jean",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/france/paris/paris/lami-jean",
    image: '/images/lami-jean1.png'
  },
  {
    name: "Langosteria",
    cuisine: "Italian, Seafood",
    price: "€€€€",
    path: "/france/paris/paris/langosteria",
    image: '/images/langosteria1.png'
  },
  {
    name: "L'Antre Amis",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/lantre-amis",
    image: '/images/lantre-amis1.png'
  },
  {
    name: "Lao Siam",
    cuisine: "Asian",
    price: "€€",
    path: "/france/paris/paris/lao-siam",
    image: '/images/lao-siam1.png'
  },
  {
    name: "L'Apibo",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/lapibo",
    image: '/images/lapibo1.png'
  },
  {
    name: "L'Archeste",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/larcheste",
    image: '/images/larcheste1.png'
  },
  {
    name: "L'Ardoise",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/paris/paris/lardoise",
    image: '/images/lardoise1.png'
  },
  {
    name: "L'Arôme",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/larme",
    image: '/images/larme1.png'
  },
  {
    name: "L'Arpaon",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/larpaon",
    image: '/images/larpaon1.png'
  },
  {
    name: "L'Assaggio",
    cuisine: "Italian",
    price: "€€€",
    path: "/france/paris/paris/lassaggio",
    image: '/images/lassaggio1.png'
  },
  {
    name: "Lasserre",
    cuisine: "Classic Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/lasserre",
    image: '/images/lasserre1.png'
  },
  {
    name: "L'Assiette",
    cuisine: "Classic Cuisine",
    price: "€€€",
    path: "/france/paris/paris/lassiette",
    image: '/images/lassiette1.png'
  },
  {
    name: "L'Atelier de Joël Robuchon - St-Germain",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/latelier-de-jol-robuchon-st-germain",
    image: '/images/latelier-de-jol-robuchon-st-germain1.png'
  },
  {
    name: "L'Atelier de Joël Robuchon - Étoile",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/latelier-de-jol-robuchon-toile",
    image: '/images/latelier-de-jol-robuchon-toile1.png'
  },
  {
    name: "L'Attilio",
    cuisine: "Modern Cuisine, Italian",
    price: "€€€€",
    path: "/france/paris/paris/lattilio",
    image: '/images/lattilio1.png'
  },
  {
    name: "L'Auberge des Crus",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/paris/paris/lauberge-des-crus",
    image: '/images/lauberge-des-crus1.png'
  },
  {
    name: "LAVA",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/lava",
    image: '/images/lava1.png'
  },
  {
    name: "LAVA - Cuisine & Vin",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/lava-cuisine-vin",
    image: '/images/lava-cuisine-vin1.png'
  },
  {
    name: "Lazare",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/paris/paris/lazare",
    image: '/images/lazare1.png'
  },
  {
    name: "LAZU",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/lazu",
    image: '/images/lazu1.png'
  },
  {
    name: "L'Écrin",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/lcrin",
    image: '/images/lcrin1.png'
  },
  {
    name: "Le 39V",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/le-39v",
    image: '/images/le-39v1.png'
  },
  {
    name: "Le 6",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/le-6",
    image: '/images/le-61.png'
  },
  {
    name: "Le 703",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/paris/paris/le-703",
    image: '/images/le-7031.png'
  },
  {
    name: "Le Baratin",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/paris/paris/le-baratin",
    image: '/images/le-baratin1.png'
  },
  {
    name: "Le Baudelaire",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/le-baudelaire",
    image: '/images/le-baudelaire1.png'
  },
  {
    name: "Le Bistrot Flaubert",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/le-bistrot-flaubert",
    image: '/images/le-bistrot-flaubert1.png'
  },
  {
    name: "Le Bon Saint-Pourçain",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/le-bon-saint-pourain",
    image: '/images/le-bon-saint-pourain1.png'
  },
  {
    name: "Le Boréal",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/le-boral",
    image: '/images/le-boral1.png'
  },
  {
    name: "Le Cadoret",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/paris/paris/le-cadoret",
    image: '/images/le-cadoret1.png'
  },
  {
    name: "Le Café de l'Usine",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/le-caf-de-lusine",
    image: '/images/le-caf-de-lusine1.png'
  },
  {
    name: "Le CasseNoix",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/paris/paris/le-cassenoix",
    image: '/images/le-cassenoix1.png'
  },
  {
    name: "Le Chardenoux",
    cuisine: "Modern Cuisine, Classic Cuisine",
    price: "€€€",
    path: "/france/paris/paris/le-chardenoux",
    image: '/images/le-chardenoux1.png'
  },
  {
    name: "Le Chateaubriand",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/le-chateaubriand",
    image: '/images/le-chateaubriand1.png'
  },
  {
    name: "Le Cheval d'Or",
    cuisine: "Asian",
    price: "€€€",
    path: "/france/paris/paris/le-cheval-dor",
    image: '/images/le-cheval-dor1.png'
  },
  {
    name: "Le Chiberta",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/le-chiberta",
    image: '/images/le-chiberta1.png'
  },
  {
    name: "Le Christine",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/le-christine",
    image: '/images/le-christine1.png'
  },
  {
    name: "Le Cinq",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/le-cinq",
    image: '/images/le-cinq1.png'
  },
  {
    name: "Le Clarence",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/le-clarence",
    image: '/images/le-clarence1.png'
  },
  {
    name: "Le Comptoir Boutary",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/le-comptoir-boutary",
    image: '/images/le-comptoir-boutary1.png'
  },
  {
    name: "Le Comptoir du Relais",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/paris/paris/le-comptoir-du-relais",
    image: '/images/le-comptoir-du-relais1.png'
  },
  {
    name: "Le Cornichon",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/le-cornichon",
    image: '/images/le-cornichon1.png'
  },
  {
    name: "Le Cotte Rôti",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/le-cotte-rti",
    image: '/images/le-cotte-rti1.png'
  },
  {
    name: "Le Coucou",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/le-coucou",
    image: '/images/le-coucou1.png'
  },
  {
    name: "Le Cyrano",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/le-cyrano",
    image: '/images/le-cyrano1.png'
  },
  {
    name: "Le Duc",
    cuisine: "Seafood",
    price: "€€€€",
    path: "/france/paris/paris/le-duc",
    image: '/images/le-duc1.png'
  },
  {
    name: "Le Faham",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/le-faham",
    image: '/images/le-faham1.png'
  },
  {
    name: "Le Faham",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/le-faham",
    image: '/images/le-faham1.png'
  },
  {
    name: "Le Florimond",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/paris/paris/le-florimond",
    image: '/images/le-florimond1.png'
  },
  {
    name: "Le Gabriel - La Réserve Paris",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/le-gabriel-la-rserve-paris",
    image: '/images/le-gabriel-la-rserve-paris1.png'
  },
  {
    name: "Le Gentil",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/le-gentil",
    image: '/images/le-gentil1.png'
  },
  {
    name: "Le George",
    cuisine: "Italian",
    price: "€€€€",
    path: "/france/paris/paris/le-george",
    image: '/images/le-george1.png'
  },
  {
    name: "Le Grand Bain",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/le-grand-bain",
    image: '/images/le-grand-bain1.png'
  },
  {
    name: "Le Grand Restaurant - Jean-François Piège",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/le-grand-restaurant-jean-franois-pige",
    image: '/images/le-grand-restaurant-jean-franois-pige1.png'
  },
  {
    name: "Le Jules Verne",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/le-jules-verne",
    image: '/images/le-jules-verne1.png'
  },
  {
    name: "Le Maquis",
    cuisine: "Modern Cuisine, Farm to table",
    price: "€€",
    path: "/france/paris/paris/le-maquis",
    image: '/images/le-maquis1.png'
  },
  {
    name: "Le Matré",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/le-matr",
    image: '/images/le-matr1.png'
  },
  {
    name: "Le Mazenay",
    cuisine: "Farm to table",
    price: "€€",
    path: "/france/paris/paris/le-mazenay",
    image: '/images/le-mazenay1.png'
  },
  {
    name: "Le Mermoz",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/le-mermoz",
    image: '/images/le-mermoz1.png'
  },
  {
    name: "Le Pantruche",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/le-pantruche",
    image: '/images/le-pantruche1.png'
  },
  {
    name: "Le Pergolèse",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/le-pergolse",
    image: '/images/le-pergolse1.png'
  },
  {
    name: "Le Petit Lucas",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/france/paris/paris/le-petit-lucas",
    image: '/images/le-petit-lucas1.png'
  },
  {
    name: "Le Pré Catelan",
    cuisine: "Creative, Contemporary",
    price: "€€€€",
    path: "/france/paris/paris/le-pr-catelan",
    image: '/images/le-pr-catelan1.png'
  },
  {
    name: "Le Quincy",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/france/paris/paris/le-quincy",
    image: '/images/le-quincy1.png'
  },
  {
    name: "Le Radis Beurre",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/paris/paris/le-radis-beurre",
    image: '/images/le-radis-beurre1.png'
  },
  {
    name: "Le Relais Plaza",
    cuisine: "Classic Cuisine",
    price: "€€€",
    path: "/france/paris/paris/le-relais-plaza",
    image: '/images/le-relais-plaza1.png'
  },
  {
    name: "Le Richer",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/le-richer",
    image: '/images/le-richer1.png'
  },
  {
    name: "Le Savarin",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/le-savarin",
    image: '/images/le-savarin1.png'
  },
  {
    name: "Le Sergent Recruteur",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/le-sergent-recruteur",
    image: '/images/le-sergent-recruteur1.png'
  },
  {
    name: "Le Servan",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/le-servan",
    image: '/images/le-servan1.png'
  },
  {
    name: "Le Sirocco",
    cuisine: "Moroccan",
    price: "€€",
    path: "/france/paris/paris/le-sirocco",
    image: '/images/le-sirocco1.png'
  },
  {
    name: "Le Taillevent",
    cuisine: "Classic Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/le-taillevent",
    image: '/images/le-taillevent1.png'
  },
  {
    name: "Le Tire-Bouchon Rodier",
    cuisine: "Traditional Cuisine, Classic Cuisine",
    price: "€€",
    path: "/france/paris/paris/le-tire-bouchon-rodier",
    image: '/images/le-tire-bouchon-rodier1.png'
  },
  {
    name: "Le Tout-Paris",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/le-tout-paris",
    image: '/images/le-tout-paris1.png'
  },
  {
    name: "Le Villaret",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/france/paris/paris/le-villaret",
    image: '/images/le-villaret1.png'
  },
  {
    name: "Le Violon d'Ingres",
    cuisine: "Traditional Cuisine, Classic Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/le-violon-dingres",
    image: '/images/le-violon-dingres1.png'
  },
  {
    name: "Les 110 de Taillevent",
    cuisine: "Traditional Cuisine, Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/les-110-de-taillevent",
    image: '/images/les-110-de-taillevent1.png'
  },
  {
    name: "Les Botanistes",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/paris/paris/les-botanistes",
    image: '/images/les-botanistes1.png'
  },
  {
    name: "Les Canailles Pigalle",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/paris/paris/les-canailles-pigalle",
    image: '/images/les-canailles-pigalle1.png'
  },
  {
    name: "Les Délices d'Aphrodite",
    cuisine: "Greek",
    price: "€€",
    path: "/france/paris/paris/les-dlices-daphrodite",
    image: '/images/les-dlices-daphrodite1.png'
  },
  {
    name: "Les Enfants Rouges",
    cuisine: "Farm to table",
    price: "€€€",
    path: "/france/paris/paris/les-enfants-rouges",
    image: '/images/les-enfants-rouges1.png'
  },
  {
    name: "Les Ombres",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/les-ombres",
    image: '/images/les-ombres1.png'
  },
  {
    name: "Les Parisiens",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/france/paris/paris/les-parisiens",
    image: '/images/les-parisiens1.png'
  },
  {
    name: "Les Petits Parisiens",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/paris/paris/les-petits-parisiens",
    image: '/images/les-petits-parisiens1.png'
  },
  {
    name: "Les Résistants",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/les-rsistants",
    image: '/images/les-rsistants1.png'
  },
  {
    name: "Les Résistants - La Table",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/les-rsistants-la-table",
    image: '/images/les-rsistants-la-table1.png'
  },
  {
    name: "Lesar",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/lesar",
    image: '/images/lesar1.png'
  },
  {
    name: "L'Escudella",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/lescudella",
    image: '/images/lescudella1.png'
  },
  {
    name: "L'Esquisse",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/lesquisse",
    image: '/images/lesquisse1.png'
  },
  {
    name: "L'Hommage",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/lhommage",
    image: '/images/lhommage1.png'
  },
  {
    name: "LiLi",
    cuisine: "Chinese",
    price: "€€€€",
    path: "/france/paris/paris/lili",
    image: '/images/lili1.png'
  },
  {
    name: "À L'Improviste",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/paris/paris/limproviste",
    image: '/images/limproviste1.png'
  },
  {
    name: "L'Inconnu",
    cuisine: "Italian, Creative",
    price: "€€€",
    path: "/france/paris/paris/linconnu",
    image: '/images/linconnu1.png'
  },
  {
    name: "L'Initial",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/linitial",
    image: '/images/linitial1.png'
  },
  {
    name: "Liquide",
    cuisine: "Creative",
    price: "€€€",
    path: "/france/paris/paris/liquide",
    image: '/images/liquide1.png'
  },
  {
    name: "Lissit",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/lissit",
    image: '/images/lissit1.png'
  },
  {
    name: "Liza",
    cuisine: "Lebanese",
    price: "€€",
    path: "/france/paris/paris/liza",
    image: '/images/liza1.png'
  },
  {
    name: "L'Oiseau Blanc",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/loiseau-blanc",
    image: '/images/loiseau-blanc1.png'
  },
  {
    name: "L'Orangerie",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/lorangerie",
    image: '/images/lorangerie1.png'
  },
  {
    name: "L'Os à Moelle",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/paris/paris/los-moelle",
    image: '/images/los-moelle1.png'
  },
  {
    name: "Louis",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/louis",
    image: '/images/louis1.png'
  },
  {
    name: "Loulou",
    cuisine: "Italian",
    price: "€€€",
    path: "/france/paris/paris/loulou",
    image: '/images/loulou1.png'
  },
  {
    name: "L'Ouzeri",
    cuisine: "Greek",
    price: "€€",
    path: "/france/paris/paris/louzeri",
    image: '/images/louzeri1.png'
  },
  {
    name: "L’Oyat",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/loyat",
    image: '/images/loyat1.png'
  },
  {
    name: "À l’Épi d’Or",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/paris/paris/lpi-dor",
    image: '/images/lpi-dor1.png'
  },
  {
    name: "Lucas Carton",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/lucas-carton",
    image: '/images/lucas-carton1.png'
  },
  {
    name: "L'Évadé",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/lvad",
    image: '/images/lvad1.png'
  },
  {
    name: "Madame FAN",
    cuisine: "Chinese",
    price: "€€",
    path: "/france/paris/paris/madame-fan",
    image: '/images/madame-fan1.png'
  },
  {
    name: "Magma",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/magma",
    image: '/images/magma1.png'
  },
  {
    name: "Magma",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/magma",
    image: '/images/magma1.png'
  },
  {
    name: "Magnolia",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/magnolia",
    image: '/images/magnolia1.png'
  },
  {
    name: "Maison",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/maison",
    image: '/images/maison1.png'
  },
  {
    name: "Maison Brut",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/maison-brut",
    image: '/images/maison-brut1.png'
  },
  {
    name: "Maison Cluny",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/paris/paris/maison-cluny",
    image: '/images/maison-cluny1.png'
  },
  {
    name: "Maison Dubois",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/maison-dubois",
    image: '/images/maison-dubois1.png'
  },
  {
    name: "Maison Rostang",
    cuisine: "Classic Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/maison-rostang",
    image: '/images/maison-rostang1.png'
  },
  {
    name: "Maison Ruggieri Palais Royal",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/maison-ruggieri-palais-royal",
    image: '/images/maison-ruggieri-palais-royal1.png'
  },
  {
    name: "Mallory Gabsi",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/mallory-gabsi",
    image: '/images/mallory-gabsi1.png'
  },
  {
    name: "Mandoobar",
    cuisine: "Korean",
    price: "€",
    path: "/france/paris/paris/mandoobar",
    image: '/images/mandoobar1.png'
  },
  {
    name: "Marie Akaneya",
    cuisine: "Japanese, Barbecue",
    price: "€€€€",
    path: "/france/paris/paris/marie-akaneya",
    image: '/images/marie-akaneya1.png'
  },
  {
    name: "Marius et Janette",
    cuisine: "Seafood",
    price: "€€€€",
    path: "/france/paris/paris/marius-et-janette",
    image: '/images/marius-et-janette1.png'
  },
  {
    name: "Marius",
    cuisine: "Seafood",
    price: "€€€",
    path: "/france/paris/paris/marius",
    image: '/images/marius1.png'
  },
  {
    name: "Marsan par Hélène Darroze",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/marsan-par-hlne-darroze",
    image: '/images/marsan-par-hlne-darroze1.png'
  },
  {
    name: "Marso & Co",
    cuisine: "Mediterranean Cuisine",
    price: "€€",
    path: "/france/paris/paris/marso-co",
    image: '/images/marso-co1.png'
  },
  {
    name: "Matka",
    cuisine: "Polish",
    price: "€€",
    path: "/france/paris/paris/matka",
    image: '/images/matka1.png'
  },
  {
    name: "Mavrommatis",
    cuisine: "Greek, Mediterranean Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/mavrommatis",
    image: '/images/mavrommatis1.png'
  },
  {
    name: "Mâche",
    cuisine: "Creative",
    price: "€€€",
    path: "/france/paris/paris/mche",
    image: '/images/mche1.png'
  },
  {
    name: "Mensae",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/mensae",
    image: '/images/mensae1.png'
  },
  {
    name: "Mieux",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/mieux",
    image: '/images/mieux1.png'
  },
  {
    name: "Milagro",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/milagro",
    image: '/images/milagro1.png'
  },
  {
    name: "Minore",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/minore",
    image: '/images/minore1.png'
  },
  {
    name: "Mắm From Hanoï",
    cuisine: "Vietnamese",
    price: "€",
    path: "/france/paris/paris/mm-from-hano",
    image: '/images/mm-from-hano1.png'
  },
  {
    name: "Mojju",
    cuisine: "Korean, Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/mojju",
    image: '/images/mojju1.png'
  },
  {
    name: "Mokko",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/mokko",
    image: '/images/mokko1.png'
  },
  {
    name: "Monsieur Bleu",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/monsieur-bleu",
    image: '/images/monsieur-bleu1.png'
  },
  {
    name: "Monsieur Dior by Yannick Alléno",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/monsieur-dior-by-yannick-allno",
    image: '/images/monsieur-dior-by-yannick-allno1.png'
  },
  {
    name: "Montée",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/monte",
    image: '/images/monte1.png'
  },
  {
    name: "Mori Venice Bar",
    cuisine: "Italian",
    price: "€€€€",
    path: "/france/paris/paris/mori-venice-bar",
    image: '/images/mori-venice-bar1.png'
  },
  {
    name: "MoSuke",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/mosuke",
    image: '/images/mosuke1.png'
  },
  {
    name: "Mova",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/mova",
    image: '/images/mova1.png'
  },
  {
    name: "Nakatani",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/nakatani",
    image: '/images/nakatani1.png'
  },
  {
    name: "Neige d'Été",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/neige-dt",
    image: '/images/neige-dt1.png'
  },
  {
    name: "NESO",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/neso",
    image: '/images/neso1.png'
  },
  {
    name: "Neva Cuisine",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/neva-cuisine",
    image: '/images/neva-cuisine1.png'
  },
  {
    name: "Nhome",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/nhome",
    image: '/images/nhome1.png'
  },
  {
    name: "Nodaïwa",
    cuisine: "Japanese",
    price: "€€",
    path: "/france/paris/paris/nodawa",
    image: '/images/nodawa1.png'
  },
  {
    name: "Nolinski",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/france/paris/paris/nolinski",
    image: '/images/nolinski1.png'
  },
  {
    name: "Nolinski Le Restaurant",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/france/paris/paris/nolinski-le-restaurant",
    image: '/images/nolinski-le-restaurant1.png'
  },
  {
    name: "Nomicos",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/nomicos",
    image: '/images/nomicos1.png'
  },
  {
    name: "Nonos par Paul Pairet",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/nonos-par-paul-pairet",
    image: '/images/nonos-par-paul-pairet1.png'
  },
  {
    name: "Nosso",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/nosso",
    image: '/images/nosso1.png'
  },
  {
    name: "Nous 4",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/paris/paris/nous-4",
    image: '/images/nous-41.png'
  },
  {
    name: "Néva Cuisine",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/nva-cuisine",
    image: '/images/nva-cuisine1.png'
  },
  {
    name: "Odette",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/odette",
    image: '/images/odette1.png'
  },
  {
    name: "Ogata",
    cuisine: "Japanese",
    price: "€€€€",
    path: "/france/paris/paris/ogata",
    image: '/images/ogata1.png'
  },
  {
    name: "Oktobre",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/oktobre",
    image: '/images/oktobre1.png'
  },
  {
    name: "Omar Dhiab",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/omar-dhiab",
    image: '/images/omar-dhiab1.png'
  },
  {
    name: "Onor",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/onor",
    image: '/images/onor1.png'
  },
  {
    name: "Origines Restaurant",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/origines-restaurant",
    image: '/images/origines-restaurant1.png'
  },
  {
    name: "Ose",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/ose",
    image: '/images/ose1.png'
  },
  {
    name: "Osmossi - Maison Mavrommatis",
    cuisine: "Greek, Mediterranean Cuisine",
    price: "€€",
    path: "/france/paris/paris/osmossi-maison-mavrommatis",
    image: '/images/osmossi-maison-mavrommatis1.png'
  },
  {
    name: "Osteria Ferrara",
    cuisine: "Italian",
    price: "€€",
    path: "/france/paris/paris/osteria-ferrara",
    image: '/images/osteria-ferrara1.png'
  },
  {
    name: "Otto",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/otto",
    image: '/images/otto1.png'
  },
  {
    name: "Oxte",
    cuisine: "Mexican",
    price: "€€€€",
    path: "/france/paris/paris/oxte",
    image: '/images/oxte1.png'
  },
  {
    name: "Pages",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/pages",
    image: '/images/pages1.png'
  },
  {
    name: "Palais Royal Restaurant",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/palais-royal-restaurant",
    image: '/images/palais-royal-restaurant1.png'
  },
  {
    name: "Pantagruel",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/pantagruel",
    image: '/images/pantagruel1.png'
  },
  {
    name: "Parcelles",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/france/paris/paris/parcelles",
    image: '/images/parcelles1.png'
  },
  {
    name: "Passerini",
    cuisine: "Italian",
    price: "€€",
    path: "/france/paris/paris/passerini",
    image: '/images/passerini1.png'
  },
  {
    name: "Passionné",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/passionn",
    image: '/images/passionn1.png'
  },
  {
    name: "Paulownia",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/paulownia",
    image: '/images/paulownia1.png'
  },
  {
    name: "Pavyllon Paris",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/pavyllon-paris",
    image: '/images/pavyllon-paris1.png'
  },
  {
    name: "Penati al Baretto",
    cuisine: "Italian",
    price: "€€€",
    path: "/france/paris/paris/penati-al-baretto",
    image: '/images/penati-al-baretto1.png'
  },
  {
    name: "Perception",
    cuisine: "Modern Cuisine, Creative",
    price: "€€€",
    path: "/france/paris/paris/perception",
    image: '/images/perception1.png'
  },
  {
    name: "Pertinence",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/pertinence",
    image: '/images/pertinence1.png'
  },
  {
    name: "Petit Boutary",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/petit-boutary",
    image: '/images/petit-boutary1.png'
  },
  {
    name: "Petit Gris",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/petit-gris",
    image: '/images/petit-gris1.png'
  },
  {
    name: "Petrossian",
    cuisine: "Seafood",
    price: "€€€",
    path: "/france/paris/paris/petrossian",
    image: '/images/petrossian1.png'
  },
  {
    name: "Petrus",
    cuisine: "Traditional Cuisine",
    price: "€€€",
    path: "/france/paris/paris/petrus",
    image: '/images/petrus1.png'
  },
  {
    name: "Phébé",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/paris/paris/phb",
    image: '/images/phb1.png'
  },
  {
    name: "Pho Tai",
    cuisine: "Vietnamese",
    price: "€",
    path: "/france/paris/paris/pho-tai",
    image: '/images/pho-tai1.png'
  },
  {
    name: "Pianovins",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/pianovins",
    image: '/images/pianovins1.png'
  },
  {
    name: "Épicure",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/picure",
    image: '/images/picure1.png'
  },
  {
    name: "Piero TT",
    cuisine: "Italian",
    price: "€€€€",
    path: "/france/paris/paris/piero-tt",
    image: '/images/piero-tt1.png'
  },
  {
    name: "Pierre Gagnaire",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/pierre-gagnaire",
    image: '/images/pierre-gagnaire1.png'
  },
  {
    name: "Pierre Sang in Oberkampf",
    cuisine: "Creative, Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/pierre-sang-in-oberkampf",
    image: '/images/pierre-sang-in-oberkampf1.png'
  },
  {
    name: "Pierre Sang on Gambey",
    cuisine: "Creative, Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/pierre-sang-on-gambey",
    image: '/images/pierre-sang-on-gambey1.png'
  },
  {
    name: "Pilgrim",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/pilgrim",
    image: '/images/pilgrim1.png'
  },
  {
    name: "Épisodes",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/pisodes",
    image: '/images/pisodes1.png'
  },
  {
    name: "Pleine Terre",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/pleine-terre",
    image: '/images/pleine-terre1.png'
  },
  {
    name: "Plénitude - Cheval Blanc Paris",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/plnitude-cheval-blanc-paris",
    image: '/images/plnitude-cheval-blanc-paris1.png'
  },
  {
    name: "Ploc",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/ploc",
    image: '/images/ploc1.png'
  },
  {
    name: "Épopée",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/pope",
    image: '/images/pope1.png'
  },
  {
    name: "Pouliche",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/pouliche",
    image: '/images/pouliche1.png'
  },
  {
    name: "Prunier",
    cuisine: "Seafood",
    price: "€€€€",
    path: "/france/paris/paris/prunier",
    image: '/images/prunier1.png'
  },
  {
    name: "Prévelle",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/prvelle",
    image: '/images/prvelle1.png'
  },
  {
    name: "Pétrelle",
    cuisine: "Modern Cuisine, Farm to table",
    price: "€€€",
    path: "/france/paris/paris/ptrelle",
    image: '/images/ptrelle1.png'
  },
  {
    name: "Pur' - Jean-François Rouquette",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/pur-jean-franois-rouquette",
    image: '/images/pur-jean-franois-rouquette1.png'
  },
  {
    name: "Qasti Green",
    cuisine: "Lebanese, Vegetarian",
    price: "€€",
    path: "/france/paris/paris/qasti-green",
    image: '/images/qasti-green1.png'
  },
  {
    name: "Quedubon",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/paris/paris/quedubon",
    image: '/images/quedubon1.png'
  },
  {
    name: "Quelque Part",
    cuisine: "Creative",
    price: "€€€",
    path: "/france/paris/paris/quelque-part",
    image: '/images/quelque-part1.png'
  },
  {
    name: "Quelque part... Les Abysses",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/quelque-part-les-abysses",
    image: '/images/quelque-part-les-abysses1.png'
  },
  {
    name: "Qui Plume la Lune",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/qui-plume-la-lune",
    image: '/images/qui-plume-la-lune1.png'
  },
  {
    name: "Quinsou",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/quinsou",
    image: '/images/quinsou1.png'
  },
  {
    name: "Racines des Prés",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/racines-des-prs",
    image: '/images/racines-des-prs1.png'
  },
  {
    name: "Racines",
    cuisine: "Italian",
    price: "€€",
    path: "/france/paris/paris/racines",
    image: '/images/racines1.png'
  },
  {
    name: "Relais Louis XIII",
    cuisine: "Classic Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/relais-louis-xiii",
    image: '/images/relais-louis-xiii1.png'
  },
  {
    name: "Restaurant des Grands Boulevards",
    cuisine: "Italian, Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/restaurant-des-grands-boulevards",
    image: '/images/restaurant-des-grands-boulevards1.png'
  },
  {
    name: "Restaurant F",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/restaurant-f",
    image: '/images/restaurant-f1.png'
  },
  {
    name: "Restaurant Grands Boulevards Experimental",
    cuisine: "Italian, Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/restaurant-grands-boulevards-experimental",
    image: '/images/restaurant-grands-boulevards-experimental1.png'
  },
  {
    name: "Restaurant H",
    cuisine: "Creative",
    price: "€€€",
    path: "/france/paris/paris/restaurant-h",
    image: '/images/restaurant-h1.png'
  },
  {
    name: "Restaurant Le Meurice Alain Ducasse",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/restaurant-le-meurice-alain-ducasse",
    image: '/images/restaurant-le-meurice-alain-ducasse1.png'
  },
  {
    name: "Rooster",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/rooster",
    image: '/images/rooster1.png'
  },
  {
    name: "Rosemarie",
    cuisine: "Traditional Cuisine",
    price: "€€",
    path: "/france/paris/paris/rosemarie",
    image: '/images/rosemarie1.png'
  },
  {
    name: "Ōrtensia",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/rtensia",
    image: '/images/rtensia1.png'
  },
  {
    name: "Sadarnac",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/sadarnac",
    image: '/images/sadarnac1.png'
  },
  {
    name: "Sagan",
    cuisine: "Japanese",
    price: "€€",
    path: "/france/paris/paris/sagan",
    image: '/images/sagan1.png'
  },
  {
    name: "Sancerre Rive Gauche",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/sancerre-rive-gauche",
    image: '/images/sancerre-rive-gauche1.png'
  },
  {
    name: "Savarin",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/savarin",
    image: '/images/savarin1.png'
  },
  {
    name: "Sellae",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/sellae",
    image: '/images/sellae1.png'
  },
  {
    name: "Semilla",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/semilla",
    image: '/images/semilla1.png'
  },
  {
    name: "SENsation",
    cuisine: "Chinese",
    price: "€€",
    path: "/france/paris/paris/sensation",
    image: '/images/sensation1.png'
  },
  {
    name: "Septime",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/septime",
    image: '/images/septime1.png'
  },
  {
    name: "Shabour",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/shabour",
    image: '/images/shabour1.png'
  },
  {
    name: "Shang Palace",
    cuisine: "Chinese",
    price: "€€€€",
    path: "/france/paris/paris/shang-palace",
    image: '/images/shang-palace1.png'
  },
  {
    name: "Sharma Ji",
    cuisine: "Indian",
    price: "€€",
    path: "/france/paris/paris/sharma-ji",
    image: '/images/sharma-ji1.png'
  },
  {
    name: "Shirvan Café Métisse",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/shirvan-caf-mtisse",
    image: '/images/shirvan-caf-mtisse1.png'
  },
  {
    name: "Shu",
    cuisine: "Japanese",
    price: "€€",
    path: "/france/paris/paris/shu",
    image: '/images/shu1.png'
  },
  {
    name: "Signature Montmartre",
    cuisine: "Fusion",
    price: "€€",
    path: "/france/paris/paris/signature-montmartre",
    image: '/images/signature-montmartre1.png'
  },
  {
    name: "Simone, Le Resto...",
    cuisine: "Farm to table, Seasonal Cuisine",
    price: "€€",
    path: "/france/paris/paris/simone-le-resto",
    image: '/images/simone-le-resto1.png'
  },
  {
    name: "Soé",
    cuisine: "Creative",
    price: "€€",
    path: "/france/paris/paris/so",
    image: '/images/so1.png'
  },
  {
    name: "Soces",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/soces",
    image: '/images/soces1.png'
  },
  {
    name: "Sola",
    cuisine: "Creative, Japanese",
    price: "€€€€",
    path: "/france/paris/paris/sola",
    image: '/images/sola1.png'
  },
  {
    name: "Solstice",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/solstice",
    image: '/images/solstice1.png'
  },
  {
    name: "Sormani",
    cuisine: "Italian",
    price: "€€€€",
    path: "/france/paris/paris/sormani",
    image: '/images/sormani1.png'
  },
  {
    name: "Sourire Le Restaurant",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/sourire-le-restaurant",
    image: '/images/sourire-le-restaurant1.png'
  },
  {
    name: "Stern Ristorante",
    cuisine: "Italian",
    price: "€€€€",
    path: "/france/paris/paris/stern-ristorante",
    image: '/images/stern-ristorante1.png'
  },
  {
    name: "Sétopa",
    cuisine: "Korean, Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/stopa",
    image: '/images/stopa1.png'
  },
  {
    name: "Substance",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/substance",
    image: '/images/substance1.png'
  },
  {
    name: "Super Huit",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/super-huit",
    image: '/images/super-huit1.png'
  },
  {
    name: "Sushi B",
    cuisine: "Japanese",
    price: "€€€€",
    path: "/france/paris/paris/sushi-b",
    image: '/images/sushi-b1.png'
  },
  {
    name: "Sushi Shunei",
    cuisine: "Japanese, Sushi",
    price: "€€€€",
    path: "/france/paris/paris/sushi-shunei",
    image: '/images/sushi-shunei1.png'
  },
  {
    name: "Sushi Yoshinaga",
    cuisine: "Japanese",
    price: "€€€€",
    path: "/france/paris/paris/sushi-yoshinaga",
    image: '/images/sushi-yoshinaga1.png'
  },
  {
    name: "À Table",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/table",
    image: '/images/table1.png'
  },
  {
    name: "Table - Bruno Verjus",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/table-bruno-verjus",
    image: '/images/table-bruno-verjus1.png'
  },
  {
    name: "Table Penja",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/table-penja",
    image: '/images/table-penja1.png'
  },
  {
    name: "Taokan",
    cuisine: "Chinese",
    price: "€€",
    path: "/france/paris/paris/taokan",
    image: '/images/taokan1.png'
  },
  {
    name: "Tavline",
    cuisine: "Israeli",
    price: "€€",
    path: "/france/paris/paris/tavline",
    image: '/images/tavline1.png'
  },
  {
    name: "Tekés",
    cuisine: "Israeli, Middle Eastern",
    price: "€€",
    path: "/france/paris/paris/teks",
    image: '/images/teks1.png'
  },
  {
    name: "Terra",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/terra",
    image: '/images/terra1.png'
  },
  {
    name: "Thaï Spices",
    cuisine: "Thai",
    price: "€€",
    path: "/france/paris/paris/tha-spices",
    image: '/images/tha-spices1.png'
  },
  {
    name: "Thiou",
    cuisine: "Thai",
    price: "€€€",
    path: "/france/paris/paris/thiou",
    image: '/images/thiou1.png'
  },
  {
    name: "TO",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/to",
    image: '/images/to1.png'
  },
  {
    name: "Tomy & Co",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/tomy-co",
    image: '/images/tomy-co1.png'
  },
  {
    name: "Tosca",
    cuisine: "Italian",
    price: "€€€",
    path: "/france/paris/paris/tosca",
    image: '/images/tosca1.png'
  },
  {
    name: "Tosca",
    cuisine: "Italian",
    price: "€€€",
    path: "/france/paris/paris/tosca",
    image: '/images/tosca1.png'
  },
  {
    name: "Tour d'Argent",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/tour-dargent",
    image: '/images/tour-dargent1.png'
  },
  {
    name: "Towa",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/towa",
    image: '/images/towa1.png'
  },
  {
    name: "Toyo",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/toyo",
    image: '/images/toyo1.png'
  },
  {
    name: "Tracé",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/trac",
    image: '/images/trac1.png'
  },
  {
    name: "Trente-Trois",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/trente-trois",
    image: '/images/trente-trois1.png'
  },
  {
    name: "étsi - le bistro",
    cuisine: "Greek",
    price: "€€",
    path: "/france/paris/paris/tsi-le-bistro",
    image: '/images/tsi-le-bistro1.png'
  },
  {
    name: "étsi - l'ouzeri",
    cuisine: "Greek",
    price: "€€",
    path: "/france/paris/paris/tsi-louzeri",
    image: '/images/tsi-louzeri1.png'
  },
  {
    name: "Étude",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/tude",
    image: '/images/tude1.png'
  },
  {
    name: "Vaisseau",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/vaisseau",
    image: '/images/vaisseau1.png'
  },
  {
    name: "Vantre",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/france/paris/paris/vantre",
    image: '/images/vantre1.png'
  },
  {
    name: "Vendémiaire",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/vendmiaire",
    image: '/images/vendmiaire1.png'
  },
  {
    name: "Via del Campo",
    cuisine: "Italian",
    price: "€€€",
    path: "/france/paris/paris/via-del-campo",
    image: '/images/via-del-campo1.png'
  },
  {
    name: "Vinello",
    cuisine: "Italian, Modern Cuisine",
    price: "€€",
    path: "/france/paris/paris/vinello",
    image: '/images/vinello1.png'
  },
  {
    name: "Virtus",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/virtus",
    image: '/images/virtus1.png'
  },
  {
    name: "VIVE, Maison Mer",
    cuisine: "Seafood",
    price: "€€€",
    path: "/france/paris/paris/vive-maison-mer",
    image: '/images/vive-maison-mer1.png'
  },
  {
    name: "Yam'Tcha",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/yamtcha",
    image: '/images/yamtcha1.png'
  },
  {
    name: "Yen",
    cuisine: "Japanese",
    price: "€€€",
    path: "/france/paris/paris/yen",
    image: '/images/yen1.png'
  },
  {
    name: "Yoshinori",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/france/paris/paris/yoshinori",
    image: '/images/yoshinori1.png'
  },
  {
    name: "Ze Kitchen Galerie",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/ze-kitchen-galerie",
    image: '/images/ze-kitchen-galerie1.png'
  },
  {
    name: "Zeffirino",
    cuisine: "Italian",
    price: "€€€",
    path: "/france/paris/paris/zeffirino",
    image: '/images/zeffirino1.png'
  },
  {
    name: "Zen",
    cuisine: "Japanese",
    price: "€€",
    path: "/france/paris/paris/zen",
    image: '/images/zen1.png'
  },
  {
    name: "Zostera",
    cuisine: "Creative",
    price: "€€€€",
    path: "/france/paris/paris/zostera",
    image: '/images/zostera1.png'
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
