import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "London";

const restaurants = [
  {
    name: "104 Restaurant",
    cuisine: "Modern Cuisine",
    price: "££££",
    path: "/uk/london/london/104-restaurant",
    image: '/images/104-restaurant1.png'
  },
  {
    name: "1890 by Gordon Ramsay",
    cuisine: "French Contemporary",
    price: "££££",
    path: "/uk/london/london/1890-by-gordon-ramsay",
    image: '/images/1890-by-gordon-ramsay1.png'
  },
  {
    name: "45 Jermyn St",
    cuisine: "Traditional British",
    price: "£££",
    path: "/uk/london/london/45-jermyn-st",
    image: '/images/45-jermyn-st1.png'
  },
  {
    name: "64 Goodge Street",
    cuisine: "French",
    price: "£££",
    path: "/uk/london/london/64-goodge-street",
    image: '/images/64-goodge-street1.png'
  },
  {
    name: "74 Charlotte Street by Ben Murphy",
    cuisine: "Modern British",
    price: "£££",
    path: "/uk/london/london/74-charlotte-street-by-ben-murphy",
    image: '/images/74-charlotte-street-by-ben-murphy1.png'
  },
  {
    name: "A. Wong",
    cuisine: "Chinese",
    price: "££££",
    path: "/uk/london/london/a-wong",
    image: '/images/a-wong1.png'
  },
  {
    name: "AGORA",
    cuisine: "Greek",
    price: "££",
    path: "/uk/london/london/agora",
    image: '/images/agora1.png'
  },
  {
    name: "AGORA",
    cuisine: "Greek",
    price: "££",
    path: "/uk/london/london/agora",
    image: '/images/agora1.png'
  },
  {
    name: "Akara",
    cuisine: "African",
    price: "££",
    path: "/uk/london/london/akara",
    image: '/images/akara1.png'
  },
  {
    name: "Akira",
    cuisine: "Japanese",
    price: "£££",
    path: "/uk/london/london/akira",
    image: '/images/akira1.png'
  },
  {
    name: "Akoko",
    cuisine: "African, Creative",
    price: "££££",
    path: "/uk/london/london/akoko",
    image: '/images/akoko1.png'
  },
  {
    name: "Akub",
    cuisine: "International",
    price: "££",
    path: "/uk/london/london/akub",
    image: '/images/akub1.png'
  },
  {
    name: "Alain Ducasse at The Dorchester",
    cuisine: "French",
    price: "££££",
    path: "/uk/london/london/alain-ducasse-at-the-dorchester",
    image: '/images/alain-ducasse-at-the-dorchester1.png'
  },
  {
    name: "Alex Dilling at Hotel Café Royal",
    cuisine: "Modern French",
    price: "££££",
    path: "/uk/london/london/alex-dilling-at-hotel-caf-royal",
    image: '/images/alex-dilling-at-hotel-caf-royal1.png'
  },
  {
    name: "Amaya",
    cuisine: "Indian",
    price: "££££",
    path: "/uk/london/london/amaya",
    image: '/images/amaya1.png'
  },
  {
    name: "Amazónico",
    cuisine: "South American",
    price: "£££",
    path: "/uk/london/london/amaznico",
    image: '/images/amaznico1.png'
  },
  {
    name: "Ambassadors Clubhouse",
    cuisine: "Indian",
    price: "£££",
    path: "/uk/london/london/ambassadors-clubhouse",
    image: '/images/ambassadors-clubhouse1.png'
  },
  {
    name: "Anchor & Hope",
    cuisine: "British Contemporary",
    price: "££",
    path: "/uk/london/london/anchor-hope",
    image: '/images/anchor-hope1.png'
  },
  {
    name: "Angelina",
    cuisine: "Italian, Japanese Contemporary",
    price: "£££",
    path: "/uk/london/london/angelina",
    image: '/images/angelina1.png'
  },
  {
    name: "Angler",
    cuisine: "Seafood",
    price: "££££",
    path: "/uk/london/london/angler",
    image: '/images/angler1.png'
  },
  {
    name: "AngloThai",
    cuisine: "Thai",
    price: "£££",
    path: "/uk/london/london/anglothai",
    image: '/images/anglothai1.png'
  },
  {
    name: "Apricity",
    cuisine: "British Contemporary",
    price: "£££",
    path: "/uk/london/london/apricity",
    image: '/images/apricity1.png'
  },
  {
    name: "Aqua Shard",
    cuisine: "Modern Cuisine",
    price: "££££",
    path: "/uk/london/london/aqua-shard",
    image: '/images/aqua-shard1.png'
  },
  {
    name: "Aragawa",
    cuisine: "Japanese Steakhouse",
    price: "££££",
    path: "/uk/london/london/aragawa",
    image: '/images/aragawa1.png'
  },
  {
    name: "Archway",
    cuisine: "Italian",
    price: "£££",
    path: "/uk/london/london/archway",
    image: '/images/archway1.png'
  },
  {
    name: "Arlington",
    cuisine: "European",
    price: "£££",
    path: "/uk/london/london/arlington",
    image: '/images/arlington1.png'
  },
  {
    name: "Arros QD",
    cuisine: "Mediterranean Cuisine, Rice Dishes",
    price: "£££",
    path: "/uk/london/london/arros-qd",
    image: '/images/arros-qd1.png'
  },
  {
    name: "Artusi",
    cuisine: "Italian",
    price: "££",
    path: "/uk/london/london/artusi",
    image: '/images/artusi1.png'
  },
  {
    name: "Aulis",
    cuisine: "Creative British",
    price: "££££",
    path: "/uk/london/london/aulis",
    image: '/images/aulis1.png'
  },
  {
    name: "Aulis",
    cuisine: "Creative British",
    price: "££££",
    path: "/uk/london/london/aulis",
    image: '/images/aulis1.png'
  },
  {
    name: "Bala Baya",
    cuisine: "Mediterranean Cuisine",
    price: "££",
    path: "/uk/london/london/bala-baya",
    image: '/images/bala-baya1.png'
  },
  {
    name: "Bancone",
    cuisine: "Italian",
    price: "££",
    path: "/uk/london/london/bancone",
    image: '/images/bancone1.png'
  },
  {
    name: "Bao",
    cuisine: "Taiwanese",
    price: "£",
    path: "/uk/london/london/bao",
    image: '/images/bao1.png'
  },
  {
    name: "Bar des Prés - Mayfair",
    cuisine: "Asian",
    price: "££££",
    path: "/uk/london/london/bar-des-prs-mayfair",
    image: '/images/bar-des-prs-mayfair1.png'
  },
  {
    name: "Bar Valette",
    cuisine: "European",
    price: "£££",
    path: "/uk/london/london/bar-valette",
    image: '/images/bar-valette1.png'
  },
  {
    name: "Barrafina",
    cuisine: "Spanish",
    price: "££",
    path: "/uk/london/london/barrafina",
    image: '/images/barrafina1.png'
  },
  {
    name: "Barshu",
    cuisine: "Chinese",
    price: "££",
    path: "/uk/london/london/barshu",
    image: '/images/barshu1.png'
  },
  {
    name: "Behind",
    cuisine: "Seafood",
    price: "££££",
    path: "/uk/london/london/behind",
    image: '/images/behind1.png'
  },
  {
    name: "Bellanger",
    cuisine: "Mediterranean Cuisine",
    price: "££",
    path: "/uk/london/london/bellanger",
    image: '/images/bellanger1.png'
  },
  {
    name: "BELLY",
    cuisine: "Filipino",
    price: "££",
    path: "/uk/london/london/belly",
    image: '/images/belly1.png'
  },
  {
    name: "Benares",
    cuisine: "Indian",
    price: "££££",
    path: "/uk/london/london/benares",
    image: '/images/benares1.png'
  },
  {
    name: "Benares",
    cuisine: "Indian",
    price: "££££",
    path: "/uk/london/london/benares",
    image: '/images/benares1.png'
  },
  {
    name: "Berenjak",
    cuisine: "Persian",
    price: "££",
    path: "/uk/london/london/berenjak",
    image: '/images/berenjak1.png'
  },
  {
    name: "BiBi",
    cuisine: "Indian",
    price: "££££",
    path: "/uk/london/london/bibi",
    image: '/images/bibi1.png'
  },
  {
    name: "Bistrot at Wild Honey",
    cuisine: "Modern British",
    price: "££",
    path: "/uk/london/london/bistrot-at-wild-honey",
    image: '/images/bistrot-at-wild-honey1.png'
  },
  {
    name: "Bob Bob Ricard City",
    cuisine: "French",
    price: "£££",
    path: "/uk/london/london/bob-bob-ricard-city",
    image: '/images/bob-bob-ricard-city1.png'
  },
  {
    name: "Bob Bob Ricard Soho",
    cuisine: "Traditional British, Classic French",
    price: "££££",
    path: "/uk/london/london/bob-bob-ricard-soho",
    image: '/images/bob-bob-ricard-soho1.png'
  },
  {
    name: "Bocca di Lupo",
    cuisine: "Italian",
    price: "££",
    path: "/uk/london/london/bocca-di-lupo",
    image: '/images/bocca-di-lupo1.png'
  },
  {
    name: "Bombay Bustle",
    cuisine: "Indian",
    price: "££",
    path: "/uk/london/london/bombay-bustle",
    image: '/images/bombay-bustle1.png'
  },
  {
    name: "Bonheur by Matt Abé",
    cuisine: "Modern Cuisine",
    price: "££££",
    path: "/uk/london/london/bonheur-by-matt-ab",
    image: '/images/bonheur-by-matt-ab1.png'
  },
  {
    name: "Bouchon Racine",
    cuisine: "French",
    price: "££",
    path: "/uk/london/london/bouchon-racine",
    image: '/images/bouchon-racine1.png'
  },
  {
    name: "Brasserie Constance",
    cuisine: "Modern British",
    price: "££",
    path: "/uk/london/london/brasserie-constance",
    image: '/images/brasserie-constance1.png'
  },
  {
    name: "Brasserie Zédel",
    cuisine: "French",
    price: "££",
    path: "/uk/london/london/brasserie-zdel",
    image: '/images/brasserie-zdel1.png'
  },
  {
    name: "Brat",
    cuisine: "Traditional British",
    price: "£££",
    path: "/uk/london/london/brat",
    image: '/images/brat1.png'
  },
  {
    name: "Brawn",
    cuisine: "Traditional British",
    price: "£££",
    path: "/uk/london/london/brawn",
    image: '/images/brawn1.png'
  },
  {
    name: "Brigadiers",
    cuisine: "Indian",
    price: "£££",
    path: "/uk/london/london/brigadiers",
    image: '/images/brigadiers1.png'
  },
  {
    name: "Brooklands by Claude Bosi",
    cuisine: "Modern Cuisine",
    price: "££££",
    path: "/uk/london/london/brooklands-by-claude-bosi",
    image: '/images/brooklands-by-claude-bosi1.png'
  },
  {
    name: "Brutto",
    cuisine: "Italian",
    price: "££",
    path: "/uk/london/london/brutto",
    image: '/images/brutto1.png'
  },
  {
    name: "Bubala",
    cuisine: "Middle Eastern, Vegetarian",
    price: "££",
    path: "/uk/london/london/bubala",
    image: '/images/bubala1.png'
  },
  {
    name: "Bull & Last",
    cuisine: "Traditional British",
    price: "££",
    path: "/uk/london/london/bull-last",
    image: '/images/bull-last1.png'
  },
  {
    name: "Cabotte",
    cuisine: "French",
    price: "£££",
    path: "/uk/london/london/cabotte",
    image: '/images/cabotte1.png'
  },
  {
    name: "Cadet",
    cuisine: "Modern British, Mediterranean Cuisine",
    price: "££",
    path: "/uk/london/london/cadet",
    image: '/images/cadet1.png'
  },
  {
    name: "Café Deco",
    cuisine: "British Contemporary",
    price: "££",
    path: "/uk/london/london/caf-deco",
    image: '/images/caf-deco1.png'
  },
  {
    name: "Café Spice Namasté",
    cuisine: "Indian",
    price: "£",
    path: "/uk/london/london/caf-spice-namast",
    image: '/images/caf-spice-namast1.png'
  },
  {
    name: "Cafe Cecilia",
    cuisine: "Modern Cuisine",
    price: "££",
    path: "/uk/london/london/cafe-cecilia",
    image: '/images/cafe-cecilia1.png'
  },
  {
    name: "Caia",
    cuisine: "European Contemporary",
    price: "£££",
    path: "/uk/london/london/caia",
    image: '/images/caia1.png'
  },
  {
    name: "Calong",
    cuisine: "Korean",
    price: "££",
    path: "/uk/london/london/calong",
    image: '/images/calong1.png'
  },
  {
    name: "Camille",
    cuisine: "French",
    price: "£££",
    path: "/uk/london/london/camille",
    image: '/images/camille1.png'
  },
  {
    name: "Canteen",
    cuisine: "Italian",
    price: "££",
    path: "/uk/london/london/canteen",
    image: '/images/canteen1.png'
  },
  {
    name: "Cantinetta Antinori",
    cuisine: "Italian",
    price: "£££",
    path: "/uk/london/london/cantinetta-antinori",
    image: '/images/cantinetta-antinori1.png'
  },
  {
    name: "Canton Blue",
    cuisine: "Cantonese",
    price: "££££",
    path: "/uk/london/london/canton-blue",
    image: '/images/canton-blue1.png'
  },
  {
    name: "Caractère",
    cuisine: "European Contemporary, European",
    price: "££££",
    path: "/uk/london/london/caractre",
    image: '/images/caractre1.png'
  },
  {
    name: "Casa Fofō",
    cuisine: "Modern Cuisine",
    price: "£££",
    path: "/uk/london/london/casa-fof",
    image: '/images/casa-fof1.png'
  },
  {
    name: "Cavita",
    cuisine: "Mexican",
    price: "£££",
    path: "/uk/london/london/cavita",
    image: '/images/cavita1.png'
  },
  {
    name: "Chapel Market Kitchen Oyster Bar & Grill",
    cuisine: "Mediterranean Cuisine",
    price: "£££",
    path: "/uk/london/london/chapel-market-kitchen-oyster-bar-grill",
    image: '/images/chapel-market-kitchen-oyster-bar-grill1.png'
  },
  {
    name: "Chapter One",
    cuisine: "Modern Cuisine",
    price: "£££",
    path: "/uk/london/london/chapter-one",
    image: '/images/chapter-one1.png'
  },
  {
    name: "Charlie's",
    cuisine: "Modern British",
    price: "£££",
    path: "/uk/london/london/charlies",
    image: '/images/charlies1.png'
  },
  {
    name: "Chez Bruce",
    cuisine: "French",
    price: "£££",
    path: "/uk/london/london/chez-bruce",
    image: '/images/chez-bruce1.png'
  },
  {
    name: "Chishuru",
    cuisine: "African",
    price: "££££",
    path: "/uk/london/london/chishuru",
    image: '/images/chishuru1.png'
  },
  {
    name: "Chutney Mary",
    cuisine: "Indian",
    price: "£££",
    path: "/uk/london/london/chutney-mary",
    image: '/images/chutney-mary1.png'
  },
  {
    name: "Cicoria",
    cuisine: "Italian",
    price: "£££",
    path: "/uk/london/london/cicoria",
    image: '/images/cicoria1.png'
  },
  {
    name: "City Social",
    cuisine: "Modern Cuisine, Classic Cuisine",
    price: "£££",
    path: "/uk/london/london/city-social",
    image: '/images/city-social1.png'
  },
  {
    name: "Clarke's",
    cuisine: "Modern Cuisine",
    price: "£££",
    path: "/uk/london/london/clarkes",
    image: '/images/clarkes1.png'
  },
  {
    name: "Claro",
    cuisine: "Mediterranean Cuisine",
    price: "£££",
    path: "/uk/london/london/claro",
    image: '/images/claro1.png'
  },
  {
    name: "Claude Bosi at Bibendum",
    cuisine: "French",
    price: "££££",
    path: "/uk/london/london/claude-bosi-at-bibendum",
    image: '/images/claude-bosi-at-bibendum1.png'
  },
  {
    name: "Claude Bosi's Oyster Bar",
    cuisine: "Seafood, Classic Cuisine",
    price: "£££",
    path: "/uk/london/london/claude-bosis-oyster-bar",
    image: '/images/claude-bosis-oyster-bar1.png'
  },
  {
    name: "Clipstone",
    cuisine: "Modern Cuisine",
    price: "£££",
    path: "/uk/london/london/clipstone",
    image: '/images/clipstone1.png'
  },
  {
    name: "Clos Maggiore",
    cuisine: "French",
    price: "£££",
    path: "/uk/london/london/clos-maggiore",
    image: '/images/clos-maggiore1.png'
  },
  {
    name: "Cloth",
    cuisine: "Traditional Cuisine",
    price: "£££",
    path: "/uk/london/london/cloth",
    image: '/images/cloth1.png'
  },
  {
    name: "Club Gascon",
    cuisine: "French",
    price: "££££",
    path: "/uk/london/london/club-gascon",
    image: '/images/club-gascon1.png'
  },
  {
    name: "Cora Pearl",
    cuisine: "British Contemporary",
    price: "££",
    path: "/uk/london/london/cora-pearl",
    image: '/images/cora-pearl1.png'
  },
  {
    name: "Cord by Le Cordon Bleu",
    cuisine: "Modern Cuisine",
    price: "£££",
    path: "/uk/london/london/cord-by-le-cordon-bleu",
    image: '/images/cord-by-le-cordon-bleu1.png'
  },
  {
    name: "CORE by Clare Smyth",
    cuisine: "Modern British",
    price: "££££",
    path: "/uk/london/london/core-by-clare-smyth",
    image: '/images/core-by-clare-smyth1.png'
  },
  {
    name: "Corenucopia by Clare Smyth",
    cuisine: "Traditional British",
    price: "££££",
    path: "/uk/london/london/corenucopia-by-clare-smyth",
    image: '/images/corenucopia-by-clare-smyth1.png'
  },
  {
    name: "Cornus",
    cuisine: "Modern British, Seafood",
    price: "££££",
    path: "/uk/london/london/cornus",
    image: '/images/cornus1.png'
  },
  {
    name: "Corrigan's Mayfair",
    cuisine: "Modern British",
    price: "£££",
    path: "/uk/london/london/corrigans-mayfair",
    image: '/images/corrigans-mayfair1.png'
  },
  {
    name: "Counter 71",
    cuisine: "Modern British",
    price: "££££",
    path: "/uk/london/london/counter-71",
    image: '/images/counter-711.png'
  },
  {
    name: "Cycene",
    cuisine: "Modern Cuisine",
    price: "££££",
    path: "/uk/london/london/cycene",
    image: '/images/cycene1.png'
  },
  {
    name: "Da Terra",
    cuisine: "Creative",
    price: "££££",
    path: "/uk/london/london/da-terra",
    image: '/images/da-terra1.png'
  },
  {
    name: "Da Terra",
    cuisine: "Creative",
    price: "££££",
    path: "/uk/london/london/da-terra",
    image: '/images/da-terra1.png'
  },
  {
    name: "Darjeeling Express",
    cuisine: "Indian",
    price: "£££",
    path: "/uk/london/london/darjeeling-express",
    image: '/images/darjeeling-express1.png'
  },
  {
    name: "Dear Jackie",
    cuisine: "Italian",
    price: "£££",
    path: "/uk/london/london/dear-jackie",
    image: '/images/dear-jackie1.png'
  },
  {
    name: "Decimo",
    cuisine: "Spanish",
    price: "££",
    path: "/uk/london/london/decimo",
    image: '/images/decimo1.png'
  },
  {
    name: "Delaunay",
    cuisine: "Modern Cuisine",
    price: "£££",
    path: "/uk/london/london/delaunay",
    image: '/images/delaunay1.png'
  },
  {
    name: "Dim Sum Duck",
    cuisine: "Cantonese",
    price: "£",
    path: "/uk/london/london/dim-sum-duck",
    image: '/images/dim-sum-duck1.png'
  },
  {
    name: "Dining Room at The Goring",
    cuisine: "Traditional British",
    price: "££££",
    path: "/uk/london/london/dining-room-at-the-goring",
    image: '/images/dining-room-at-the-goring1.png'
  },
  {
    name: "Dinner by Heston Blumenthal",
    cuisine: "Traditional British",
    price: "££££",
    path: "/uk/london/london/dinner-by-heston-blumenthal",
    image: '/images/dinner-by-heston-blumenthal1.png'
  },
  {
    name: "Dinner by Heston Blumenthal",
    cuisine: "Traditional British",
    price: "££££",
    path: "/uk/london/london/dinner-by-heston-blumenthal",
    image: '/images/dinner-by-heston-blumenthal1.png'
  },
  {
    name: "Donia",
    cuisine: "Filipino",
    price: "££",
    path: "/uk/london/london/donia",
    image: '/images/donia1.png'
  },
  {
    name: "Donostia",
    cuisine: "Spanish, Basque",
    price: "£££",
    path: "/uk/london/london/donostia",
    image: '/images/donostia1.png'
  },
  {
    name: "Don't Tell Dad",
    cuisine: "British Contemporary",
    price: "££",
    path: "/uk/london/london/dont-tell-dad",
    image: '/images/dont-tell-dad1.png'
  },
  {
    name: "Dorian",
    cuisine: "Modern British",
    price: "££££",
    path: "/uk/london/london/dorian",
    image: '/images/dorian1.png'
  },
  {
    name: "Dosa by Akira Back",
    cuisine: "Korean",
    price: "££££",
    path: "/uk/london/london/dosa-by-akira-back",
    image: '/images/dosa-by-akira-back1.png'
  },
  {
    name: "Dove",
    cuisine: "Modern Cuisine",
    price: "£££",
    path: "/uk/london/london/dove",
    image: '/images/dove1.png'
  },
  {
    name: "Dovetale",
    cuisine: "European",
    price: "£££",
    path: "/uk/london/london/dovetale",
    image: '/images/dovetale1.png'
  },
  {
    name: "Drapers Arms",
    cuisine: "Traditional British",
    price: "££",
    path: "/uk/london/london/drapers-arms",
    image: '/images/drapers-arms1.png'
  },
  {
    name: "Duchy",
    cuisine: "European Contemporary",
    price: "££",
    path: "/uk/london/london/duchy",
    image: '/images/duchy1.png'
  },
  {
    name: "Dysart Petersham",
    cuisine: "Modern Cuisine",
    price: "££££",
    path: "/uk/london/london/dysart-petersham",
    image: '/images/dysart-petersham1.png'
  },
  {
    name: "Eel Sushi",
    cuisine: "Japanese",
    price: "£££",
    path: "/uk/london/london/eel-sushi",
    image: '/images/eel-sushi1.png'
  },
  {
    name: "Ekstedt at The Yard",
    cuisine: "Modern Cuisine",
    price: "££££",
    path: "/uk/london/london/ekstedt-at-the-yard",
    image: '/images/ekstedt-at-the-yard1.png'
  },
  {
    name: "El Pastor",
    cuisine: "Mexican",
    price: "££",
    path: "/uk/london/london/el-pastor",
    image: '/images/el-pastor1.png'
  },
  {
    name: "Elis",
    cuisine: "Modern Cuisine",
    price: "£££",
    path: "/uk/london/london/elis",
    image: '/images/elis1.png'
  },
  {
    name: "Elsa",
    cuisine: "Modern French, Alsatian",
    price: "££",
    path: "/uk/london/london/elsa",
    image: '/images/elsa1.png'
  },
  {
    name: "Elystan Street",
    cuisine: "Modern British, Mediterranean Cuisine",
    price: "£££",
    path: "/uk/london/london/elystan-street",
    image: '/images/elystan-street1.png'
  },
  {
    name: "Empire Empire",
    cuisine: "Indian",
    price: "££",
    path: "/uk/london/london/empire-empire",
    image: '/images/empire-empire1.png'
  },
  {
    name: "Endo at The Rotunda",
    cuisine: "Japanese",
    price: "££££",
    path: "/uk/london/london/endo-at-the-rotunda",
    image: '/images/endo-at-the-rotunda1.png'
  },
  {
    name: "Evelyn's Table",
    cuisine: "Modern Cuisine",
    price: "££££",
    path: "/uk/london/london/evelyns-table",
    image: '/images/evelyns-table1.png'
  },
  {
    name: "Evernight",
    cuisine: "Japanese, Izakaya",
    price: "££",
    path: "/uk/london/london/evernight",
    image: '/images/evernight1.png'
  },
  {
    name: "Fallow",
    cuisine: "Modern British",
    price: "£££",
    path: "/uk/london/london/fallow",
    image: '/images/fallow1.png'
  },
  {
    name: "Farang",
    cuisine: "Thai",
    price: "££",
    path: "/uk/london/london/farang",
    image: '/images/farang1.png'
  },
  {
    name: "Farang",
    cuisine: "Thai",
    price: "££",
    path: "/uk/london/london/farang",
    image: '/images/farang1.png'
  },
  {
    name: "Fischer's",
    cuisine: "Austrian",
    price: "£££",
    path: "/uk/london/london/fischers",
    image: '/images/fischers1.png'
  },
  {
    name: "Fonda",
    cuisine: "Mexican",
    price: "£££",
    path: "/uk/london/london/fonda",
    image: '/images/fonda1.png'
  },
  {
    name: "FOWL",
    cuisine: "Chicken Specialities",
    price: "£",
    path: "/uk/london/london/fowl",
    image: '/images/fowl1.png'
  },
  {
    name: "Franco's",
    cuisine: "Italian",
    price: "£££",
    path: "/uk/london/london/francos",
    image: '/images/francos1.png'
  },
  {
    name: "Frog by Adam Handling",
    cuisine: "Modern Cuisine",
    price: "££££",
    path: "/uk/london/london/frog-by-adam-handling",
    image: '/images/frog-by-adam-handling1.png'
  },
  {
    name: "Galvin La Chapelle",
    cuisine: "French",
    price: "£££",
    path: "/uk/london/london/galvin-la-chapelle",
    image: '/images/galvin-la-chapelle1.png'
  },
  {
    name: "Garrison",
    cuisine: "Modern British",
    price: "££",
    path: "/uk/london/london/garrison",
    image: '/images/garrison1.png'
  },
  {
    name: "Garrison",
    cuisine: "Modern British",
    price: "££",
    path: "/uk/london/london/garrison",
    image: '/images/garrison1.png'
  },
  {
    name: "Gauthier - Soho",
    cuisine: "Vegan, Vegetarian",
    price: "££££",
    path: "/uk/london/london/gauthier-soho",
    image: '/images/gauthier-soho1.png'
  },
  {
    name: "Ginza St James's",
    cuisine: "Japanese",
    price: "££££",
    path: "/uk/london/london/ginza-st-jamess",
    image: '/images/ginza-st-jamess1.png'
  },
  {
    name: "Giulia",
    cuisine: "Italian",
    price: "££",
    path: "/uk/london/london/giulia",
    image: '/images/giulia1.png'
  },
  {
    name: "Giulia",
    cuisine: "Italian",
    price: "££",
    path: "/uk/london/london/giulia",
    image: '/images/giulia1.png'
  },
  {
    name: "Goodbye Horses",
    cuisine: "Traditional British",
    price: "££",
    path: "/uk/london/london/goodbye-horses",
    image: '/images/goodbye-horses1.png'
  },
  {
    name: "Gunpowder Spitalfields",
    cuisine: "Indian",
    price: "££",
    path: "/uk/london/london/gunpowder-spitalfields",
    image: '/images/gunpowder-spitalfields1.png'
  },
  {
    name: "Gymkhana",
    cuisine: "Indian",
    price: "££££",
    path: "/uk/london/london/gymkhana",
    image: '/images/gymkhana1.png'
  },
  {
    name: "Gymkhana",
    cuisine: "Indian",
    price: "££££",
    path: "/uk/london/london/gymkhana",
    image: '/images/gymkhana1.png'
  },
  {
    name: "Hakkasan Mayfair",
    cuisine: "Chinese",
    price: "££££",
    path: "/uk/london/london/hakkasan-mayfair",
    image: '/images/hakkasan-mayfair1.png'
  },
  {
    name: "Hatched",
    cuisine: "Modern British",
    price: "£££",
    path: "/uk/london/london/hatched",
    image: '/images/hatched1.png'
  },
  {
    name: "Hawksmoor",
    cuisine: "Meats and Grills",
    price: "£££",
    path: "/uk/london/london/hawksmoor",
    image: '/images/hawksmoor1.png'
  },
  {
    name: "Heritage Dulwich",
    cuisine: "Indian",
    price: "££",
    path: "/uk/london/london/heritage-dulwich",
    image: '/images/heritage-dulwich1.png'
  },
  {
    name: "HIDE",
    cuisine: "Modern British",
    price: "££££",
    path: "/uk/london/london/hide",
    image: '/images/hide1.png'
  },
  {
    name: "HIDE",
    cuisine: "Modern British",
    price: "££££",
    path: "/uk/london/london/hide",
    image: '/images/hide1.png'
  },
  {
    name: "HIMI",
    cuisine: "Japanese",
    price: "£££",
    path: "/uk/london/london/himi",
    image: '/images/himi1.png'
  },
  {
    name: "Hélène Darroze at The Connaught",
    cuisine: "Modern Cuisine",
    price: "££££",
    path: "/uk/london/london/hlne-darroze-at-the-connaught",
    image: '/images/hlne-darroze-at-the-connaught1.png'
  },
  {
    name: "Holy Carrot",
    cuisine: "Vegan",
    price: "££",
    path: "/uk/london/london/holy-carrot",
    image: '/images/holy-carrot1.png'
  },
  {
    name: "Honey & Co",
    cuisine: "Middle Eastern",
    price: "££",
    path: "/uk/london/london/honey-co",
    image: '/images/honey-co1.png'
  },
  {
    name: "Hoppers",
    cuisine: "South Indian, Sri Lankan",
    price: "££",
    path: "/uk/london/london/hoppers",
    image: '/images/hoppers1.png'
  },
  {
    name: "Hoppers",
    cuisine: "South Indian, Sri Lankan",
    price: "££",
    path: "/uk/london/london/hoppers",
    image: '/images/hoppers1.png'
  },
  {
    name: "Humble Chicken",
    cuisine: "Japanese",
    price: "££££",
    path: "/uk/london/london/humble-chicken",
    image: '/images/humble-chicken1.png'
  },
  {
    name: "Humo",
    cuisine: "Grills",
    price: "££££",
    path: "/uk/london/london/humo",
    image: '/images/humo1.png'
  },
  {
    name: "Ibai",
    cuisine: "Basque",
    price: "£££",
    path: "/uk/london/london/ibai",
    image: '/images/ibai1.png'
  },
  {
    name: "Ikoyi",
    cuisine: "Creative",
    price: "££££",
    path: "/uk/london/london/ikoyi",
    image: '/images/ikoyi1.png'
  },
  {
    name: "Il Gattopardo",
    cuisine: "Italian",
    price: "££££",
    path: "/uk/london/london/il-gattopardo",
    image: '/images/il-gattopardo1.png'
  },
  {
    name: "Imad's Syrian Kitchen",
    cuisine: "Middle Eastern",
    price: "££",
    path: "/uk/london/london/imads-syrian-kitchen",
    image: '/images/imads-syrian-kitchen1.png'
  },
  {
    name: "Imperial Treasure",
    cuisine: "Chinese",
    price: "££££",
    path: "/uk/london/london/imperial-treasure",
    image: '/images/imperial-treasure1.png'
  },
  {
    name: "Island",
    cuisine: "Meats and Seafood",
    price: "£££",
    path: "/uk/london/london/island",
    image: '/images/island1.png'
  },
  {
    name: "Jamavar",
    cuisine: "Indian",
    price: "££££",
    path: "/uk/london/london/jamavar",
    image: '/images/jamavar1.png'
  },
  {
    name: "Jolene",
    cuisine: "Mediterranean Cuisine, Traditional British",
    price: "££",
    path: "/uk/london/london/jolene",
    image: '/images/jolene1.png'
  },
  {
    name: "José",
    cuisine: "Spanish",
    price: "££",
    path: "/uk/london/london/jos",
    image: '/images/jos1.png'
  },
  {
    name: "Josephine Bouchon",
    cuisine: "Lyonnaise, French",
    price: "££",
    path: "/uk/london/london/josephine-bouchon",
    image: '/images/josephine-bouchon1.png'
  },
  {
    name: "J.Sheekey",
    cuisine: "Seafood",
    price: "£££",
    path: "/uk/london/london/jsheekey",
    image: '/images/jsheekey1.png'
  },
  {
    name: "Julie's",
    cuisine: "Modern British",
    price: "££",
    path: "/uk/london/london/julies",
    image: '/images/julies1.png'
  },
  {
    name: "July",
    cuisine: "Modern French, Alsatian",
    price: "££",
    path: "/uk/london/london/july",
    image: '/images/july1.png'
  },
  {
    name: "Kai",
    cuisine: "Chinese",
    price: "££££",
    path: "/uk/london/london/kai",
    image: '/images/kai1.png'
  },
  {
    name: "Kanishka",
    cuisine: "Indian",
    price: "£££",
    path: "/uk/london/london/kanishka",
    image: '/images/kanishka1.png'
  },
  {
    name: "Kateh",
    cuisine: "Persian",
    price: "££",
    path: "/uk/london/london/kateh",
    image: '/images/kateh1.png'
  },
  {
    name: "Kerfield Arms",
    cuisine: "Modern British",
    price: "££",
    path: "/uk/london/london/kerfield-arms",
    image: '/images/kerfield-arms1.png'
  },
  {
    name: "Kerridge's Bar & Grill",
    cuisine: "Modern British",
    price: "££££",
    path: "/uk/london/london/kerridges-bar-grill",
    image: '/images/kerridges-bar-grill1.png'
  },
  {
    name: "Kiln",
    cuisine: "Thai, South East Asian",
    price: "££",
    path: "/uk/london/london/kiln",
    image: '/images/kiln1.png'
  },
  {
    name: "Kiln",
    cuisine: "Thai, South East Asian",
    price: "££",
    path: "/uk/london/london/kiln",
    image: '/images/kiln1.png'
  },
  {
    name: "Kinkally",
    cuisine: "Eastern European",
    price: "££",
    path: "/uk/london/london/kinkally",
    image: '/images/kinkally1.png'
  },
  {
    name: "Kioku by Endo",
    cuisine: "Japanese Contemporary, Mediterranean Cuisine",
    price: "££££",
    path: "/uk/london/london/kioku-by-endo",
    image: '/images/kioku-by-endo1.png'
  },
  {
    name: "Kitchen Table",
    cuisine: "Modern Cuisine",
    price: "££££",
    path: "/uk/london/london/kitchen-table",
    image: '/images/kitchen-table1.png'
  },
  {
    name: "Kitchen W8",
    cuisine: "Modern Cuisine",
    price: "£££",
    path: "/uk/london/london/kitchen-w8",
    image: '/images/kitchen-w81.png'
  },
  {
    name: "KOL",
    cuisine: "Mexican, Modern Cuisine",
    price: "££££",
    path: "/uk/london/london/kol",
    image: '/images/kol1.png'
  },
  {
    name: "Kolae",
    cuisine: "Thai",
    price: "££",
    path: "/uk/london/london/kolae",
    image: '/images/kolae1.png'
  },
  {
    name: "Kricket",
    cuisine: "Indian",
    price: "££",
    path: "/uk/london/london/kricket",
    image: '/images/kricket1.png'
  },
  {
    name: "Krokodilos",
    cuisine: "Greek",
    price: "£££",
    path: "/uk/london/london/krokodilos",
    image: '/images/krokodilos1.png'
  },
  {
    name: "Kruk",
    cuisine: "Thai",
    price: "££",
    path: "/uk/london/london/kruk",
    image: '/images/kruk1.png'
  },
  {
    name: "Kudu",
    cuisine: "South African",
    price: "££",
    path: "/uk/london/london/kudu",
    image: '/images/kudu1.png'
  },
  {
    name: "Kudu Grill",
    cuisine: "South African",
    price: "££",
    path: "/uk/london/london/kudu-grill",
    image: '/images/kudu-grill1.png'
  },
  {
    name: "La Palombe",
    cuisine: "French",
    price: "£££",
    path: "/uk/london/london/la-palombe",
    image: '/images/la-palombe1.png'
  },
  {
    name: "La Trompette",
    cuisine: "Modern British",
    price: "££££",
    path: "/uk/london/london/la-trompette",
    image: '/images/la-trompette1.png'
  },
  {
    name: "Labombe by Trivet",
    cuisine: "Modern Cuisine",
    price: "£££",
    path: "/uk/london/london/labombe-by-trivet",
    image: '/images/labombe-by-trivet1.png'
  },
  {
    name: "Lai Rai",
    cuisine: "Vietnamese",
    price: "££",
    path: "/uk/london/london/lai-rai",
    image: '/images/lai-rai1.png'
  },
  {
    name: "Langan's Brasserie",
    cuisine: "Classic Cuisine",
    price: "££",
    path: "/uk/london/london/langans-brasserie",
    image: '/images/langans-brasserie1.png'
  },
  {
    name: "Lasdun",
    cuisine: "Modern British",
    price: "££",
    path: "/uk/london/london/lasdun",
    image: '/images/lasdun1.png'
  },
  {
    name: "Le Pont de la Tour",
    cuisine: "French",
    price: "£££",
    path: "/uk/london/london/le-pont-de-la-tour",
    image: '/images/le-pont-de-la-tour1.png'
  },
  {
    name: "Le Vacherin",
    cuisine: "French",
    price: "£££",
    path: "/uk/london/london/le-vacherin",
    image: '/images/le-vacherin1.png'
  },
  {
    name: "Legado",
    cuisine: "Spanish",
    price: "£££",
    path: "/uk/london/london/legado",
    image: '/images/legado1.png'
  },
  {
    name: "Legare",
    cuisine: "Italian",
    price: "££",
    path: "/uk/london/london/legare",
    image: '/images/legare1.png'
  },
  {
    name: "Les 110 de Taillevent",
    cuisine: "French",
    price: "£££",
    path: "/uk/london/london/les-110-de-taillevent",
    image: '/images/les-110-de-taillevent1.png'
  },
  {
    name: "Les 2 Garçons",
    cuisine: "French",
    price: "££",
    path: "/uk/london/london/les-2-garons",
    image: '/images/les-2-garons1.png'
  },
  {
    name: "Lilibet's",
    cuisine: "Seafood",
    price: "£££",
    path: "/uk/london/london/lilibets",
    image: '/images/lilibets1.png'
  },
  {
    name: "Lima",
    cuisine: "Peruvian",
    price: "£££",
    path: "/uk/london/london/lima",
    image: '/images/lima1.png'
  },
  {
    name: "Lisboeta",
    cuisine: "Portuguese",
    price: "£££",
    path: "/uk/london/london/lisboeta",
    image: '/images/lisboeta1.png'
  },
  {
    name: "Lita",
    cuisine: "Mediterranean Cuisine",
    price: "££££",
    path: "/uk/london/london/lita",
    image: '/images/lita1.png'
  },
  {
    name: "Little Social",
    cuisine: "Modern British",
    price: "££",
    path: "/uk/london/london/little-social",
    image: '/images/little-social1.png'
  },
  {
    name: "Llama Inn",
    cuisine: "Peruvian",
    price: "££",
    path: "/uk/london/london/llama-inn",
    image: '/images/llama-inn1.png'
  },
  {
    name: "Llewelyn's",
    cuisine: "Traditional British",
    price: "£££",
    path: "/uk/london/london/llewelyns",
    image: '/images/llewelyns1.png'
  },
  {
    name: "Locatelli at the National Gallery",
    cuisine: "Italian",
    price: "£££",
    path: "/uk/london/london/locatelli-at-the-national-gallery",
    image: '/images/locatelli-at-the-national-gallery1.png'
  },
  {
    name: "Long Chim",
    cuisine: "Thai",
    price: "££",
    path: "/uk/london/london/long-chim",
    image: '/images/long-chim1.png'
  },
  {
    name: "Lorne",
    cuisine: "Modern Cuisine",
    price: "£££",
    path: "/uk/london/london/lorne",
    image: '/images/lorne1.png'
  },
  {
    name: "Luca",
    cuisine: "Italian",
    price: "£££",
    path: "/uk/london/london/luca",
    image: '/images/luca1.png'
  },
  {
    name: "Luca",
    cuisine: "Italian",
    price: "££££",
    path: "/uk/london/london/luca",
    image: '/images/luca1.png'
  },
  {
    name: "Lucky Cat by Gordon Ramsay",
    cuisine: "Asian",
    price: "£££",
    path: "/uk/london/london/lucky-cat-by-gordon-ramsay",
    image: '/images/lucky-cat-by-gordon-ramsay1.png'
  },
  {
    name: "Lurra",
    cuisine: "Basque",
    price: "££££",
    path: "/uk/london/london/lurra",
    image: '/images/lurra1.png'
  },
  {
    name: "Lyon's",
    cuisine: "Seafood",
    price: "££",
    path: "/uk/london/london/lyons",
    image: '/images/lyons1.png'
  },
  {
    name: "Madhu's Southall",
    cuisine: "Indian",
    price: "££",
    path: "/uk/london/london/madhus-southall",
    image: '/images/madhus-southall1.png'
  },
  {
    name: "Mambow",
    cuisine: "Malaysian",
    price: "££",
    path: "/uk/london/london/mambow",
    image: '/images/mambow1.png'
  },
  {
    name: "manteca",
    cuisine: "Italian",
    price: "££",
    path: "/uk/london/london/manteca",
    image: '/images/manteca1.png'
  },
  {
    name: "Margot",
    cuisine: "Italian",
    price: "£££",
    path: "/uk/london/london/margot",
    image: '/images/margot1.png'
  },
  {
    name: "Marksman",
    cuisine: "Traditional British",
    price: "££",
    path: "/uk/london/london/marksman",
    image: '/images/marksman1.png'
  },
  {
    name: "Maru",
    cuisine: "Japanese, Sushi",
    price: "££££",
    path: "/uk/london/london/maru",
    image: '/images/maru1.png'
  },
  {
    name: "Mauro Colagreco at Raffles London at The OWO",
    cuisine: "Modern Cuisine",
    price: "££££",
    path: "/uk/london/london/mauro-colagreco-at-raffles-london-at-the-owo",
    image: '/images/mauro-colagreco-at-raffles-london-at-the-owo1.png'
  },
  {
    name: "Mayha",
    cuisine: "Japanese",
    price: "££££",
    path: "/uk/london/london/mayha",
    image: '/images/mayha1.png'
  },
  {
    name: "Mazi",
    cuisine: "Greek",
    price: "£££",
    path: "/uk/london/london/mazi",
    image: '/images/mazi1.png'
  },
  {
    name: "Medlar",
    cuisine: "Modern Cuisine",
    price: "£££",
    path: "/uk/london/london/medlar",
    image: '/images/medlar1.png'
  },
  {
    name: "Mezzogiorno by Francesco Mazzei",
    cuisine: "Italian",
    price: "£££",
    path: "/uk/london/london/mezzogiorno-by-francesco-mazzei",
    image: '/images/mezzogiorno-by-francesco-mazzei1.png'
  },
  {
    name: "Michael Caines at The Stafford",
    cuisine: "Modern Cuisine",
    price: "££££",
    path: "/uk/london/london/michael-caines-at-the-stafford",
    image: '/images/michael-caines-at-the-stafford1.png'
  },
  {
    name: "Miga",
    cuisine: "Korean",
    price: "££",
    path: "/uk/london/london/miga",
    image: '/images/miga1.png'
  },
  {
    name: "Miga",
    cuisine: "Korean",
    price: "££",
    path: "/uk/london/london/miga",
    image: '/images/miga1.png'
  },
  {
    name: "Mignonette",
    cuisine: "French",
    price: "££",
    path: "/uk/london/london/mignonette",
    image: '/images/mignonette1.png'
  },
  {
    name: "Mignonette",
    cuisine: "French",
    price: "££",
    path: "/uk/london/london/mignonette",
    image: '/images/mignonette1.png'
  },
  {
    name: "MiMi Mei Fair",
    cuisine: "Chinese",
    price: "££££",
    path: "/uk/london/london/mimi-mei-fair",
    image: '/images/mimi-mei-fair1.png'
  },
  {
    name: "Morchella",
    cuisine: "Mediterranean Cuisine",
    price: "££",
    path: "/uk/london/london/morchella",
    image: '/images/morchella1.png'
  },
  {
    name: "Moro",
    cuisine: "Mediterranean Cuisine",
    price: "£££",
    path: "/uk/london/london/moro",
    image: '/images/moro1.png'
  },
  {
    name: "Mount St.",
    cuisine: "Modern British",
    price: "£££",
    path: "/uk/london/london/mount-st",
    image: '/images/mount-st1.png'
  },
  {
    name: "Mountain",
    cuisine: "Spanish",
    price: "£££",
    path: "/uk/london/london/mountain",
    image: '/images/mountain1.png'
  },
  {
    name: "Murano",
    cuisine: "Italian",
    price: "££££",
    path: "/uk/london/london/murano",
    image: '/images/murano1.png'
  },
  {
    name: "Muse by Tom Aikens",
    cuisine: "Creative, Contemporary",
    price: "££££",
    path: "/uk/london/london/muse-by-tom-aikens",
    image: '/images/muse-by-tom-aikens1.png'
  },
  {
    name: "Myrtos",
    cuisine: "Greek",
    price: "£££",
    path: "/uk/london/london/myrtos",
    image: '/images/myrtos1.png'
  },
  {
    name: "Naïfs",
    cuisine: "Vegan",
    price: "££",
    path: "/uk/london/london/nafs",
    image: '/images/nafs1.png'
  },
  {
    name: "Nanyang Blossom",
    cuisine: "South East Asian",
    price: "£££",
    path: "/uk/london/london/nanyang-blossom",
    image: '/images/nanyang-blossom1.png'
  },
  {
    name: "Nest",
    cuisine: "Modern British",
    price: "££££",
    path: "/uk/london/london/nest",
    image: '/images/nest1.png'
  },
  {
    name: "NIJŪ",
    cuisine: "Japanese",
    price: "£££",
    path: "/uk/london/london/nij",
    image: '/images/nij1.png'
  },
  {
    name: "No. Fifty Cheyne",
    cuisine: "Modern British, Modern Cuisine",
    price: "£££",
    path: "/uk/london/london/no-fifty-cheyne",
    image: '/images/no-fifty-cheyne1.png'
  },
  {
    name: "Noble Rot",
    cuisine: "Traditional Cuisine, Classic French",
    price: "££",
    path: "/uk/london/london/noble-rot",
    image: '/images/noble-rot1.png'
  },
  {
    name: "Nobu London Old Park Lane",
    cuisine: "Japanese",
    price: "£££",
    path: "/uk/london/london/nobu-london-old-park-lane",
    image: '/images/nobu-london-old-park-lane1.png'
  },
  {
    name: "Noci",
    cuisine: "Italian",
    price: "£",
    path: "/uk/london/london/noci",
    image: '/images/noci1.png'
  },
  {
    name: "Noizé",
    cuisine: "Modern French",
    price: "£££",
    path: "/uk/london/london/noiz",
    image: '/images/noiz1.png'
  },
  {
    name: "Nopi",
    cuisine: "World Cuisine",
    price: "£££",
    path: "/uk/london/london/nopi",
    image: '/images/nopi1.png'
  },
  {
    name: "Norma",
    cuisine: "Italian, Sicilian",
    price: "£££",
    path: "/uk/london/london/norma",
    image: '/images/norma1.png'
  },
  {
    name: "Ochre",
    cuisine: "Modern Cuisine",
    price: "££",
    path: "/uk/london/london/ochre",
    image: '/images/ochre1.png'
  },
  {
    name: "Olivomare",
    cuisine: "Seafood",
    price: "£££",
    path: "/uk/london/london/olivomare",
    image: '/images/olivomare1.png'
  },
  {
    name: "OMA",
    cuisine: "Greek",
    price: "£££",
    path: "/uk/london/london/oma",
    image: '/images/oma1.png'
  },
  {
    name: "OMA",
    cuisine: "Greek",
    price: "£££",
    path: "/uk/london/london/oma",
    image: '/images/oma1.png'
  },
  {
    name: "One Club Row",
    cuisine: "Modern British",
    price: "££",
    path: "/uk/london/london/one-club-row",
    image: '/images/one-club-row1.png'
  },
  {
    name: "Oren",
    cuisine: "Mediterranean Cuisine, Middle Eastern",
    price: "££",
    path: "/uk/london/london/oren",
    image: '/images/oren1.png'
  },
  {
    name: "Ormer Mayfair",
    cuisine: "Modern British",
    price: "££££",
    path: "/uk/london/london/ormer-mayfair",
    image: '/images/ormer-mayfair1.png'
  },
  {
    name: "Padella",
    cuisine: "Italian",
    price: "£",
    path: "/uk/london/london/padella",
    image: '/images/padella1.png'
  },
  {
    name: "pahli hill",
    cuisine: "Indian",
    price: "£££",
    path: "/uk/london/london/pahli-hill",
    image: '/images/pahli-hill1.png'
  },
  {
    name: "Palomar",
    cuisine: "Middle Eastern",
    price: "££",
    path: "/uk/london/london/palomar",
    image: '/images/palomar1.png'
  },
  {
    name: "Paradise",
    cuisine: "Sri Lankan, Contemporary",
    price: "£££",
    path: "/uk/london/london/paradise",
    image: '/images/paradise1.png'
  },
  {
    name: "Park Chinois",
    cuisine: "Chinese",
    price: "££££",
    path: "/uk/london/london/park-chinois",
    image: '/images/park-chinois1.png'
  },
  {
    name: "Paulette",
    cuisine: "French",
    price: "£££",
    path: "/uk/london/london/paulette",
    image: '/images/paulette1.png'
  },
  {
    name: "Pavyllon London",
    cuisine: "French Contemporary",
    price: "££££",
    path: "/uk/london/london/pavyllon-london",
    image: '/images/pavyllon-london1.png'
  },
  {
    name: "Peckham Cellars",
    cuisine: "Mediterranean Cuisine",
    price: "£",
    path: "/uk/london/london/peckham-cellars",
    image: '/images/peckham-cellars1.png'
  },
  {
    name: "Petersham Nurseries Café",
    cuisine: "Modern Cuisine",
    price: "£££",
    path: "/uk/london/london/petersham-nurseries-caf",
    image: '/images/petersham-nurseries-caf1.png'
  },
  {
    name: "Pied à Terre",
    cuisine: "Creative",
    price: "££££",
    path: "/uk/london/london/pied-terre",
    image: '/images/pied-terre1.png'
  },
  {
    name: "Pig and Butcher",
    cuisine: "Modern British",
    price: "££",
    path: "/uk/london/london/pig-and-butcher",
    image: '/images/pig-and-butcher1.png'
  },
  {
    name: "Pinna",
    cuisine: "Italian",
    price: "£££",
    path: "/uk/london/london/pinna",
    image: '/images/pinna1.png'
  },
  {
    name: "Pippin's",
    cuisine: "Modern British",
    price: "£££",
    path: "/uk/london/london/pippins",
    image: '/images/pippins1.png'
  },
  {
    name: "Pizarro",
    cuisine: "Spanish, Mediterranean Cuisine",
    price: "££",
    path: "/uk/london/london/pizarro",
    image: '/images/pizarro1.png'
  },
  {
    name: "Planque",
    cuisine: "Modern British",
    price: "£££",
    path: "/uk/london/london/planque",
    image: '/images/planque1.png'
  },
  {
    name: "Plaquemine Lock",
    cuisine: "Creole, Cajun",
    price: "££",
    path: "/uk/london/london/plaquemine-lock",
    image: '/images/plaquemine-lock1.png'
  },
  {
    name: "Plates London",
    cuisine: "Vegan, Vegetarian",
    price: "£££",
    path: "/uk/london/london/plates-london",
    image: '/images/plates-london1.png'
  },
  {
    name: "Plaza Khao Gaeng",
    cuisine: "Thai",
    price: "££",
    path: "/uk/london/london/plaza-khao-gaeng",
    image: '/images/plaza-khao-gaeng1.png'
  },
  {
    name: "Ploussard",
    cuisine: "Modern Cuisine",
    price: "£££",
    path: "/uk/london/london/ploussard",
    image: '/images/ploussard1.png'
  },
  {
    name: "Pollini at Ladbroke Hall",
    cuisine: "Italian",
    price: "£££",
    path: "/uk/london/london/pollini-at-ladbroke-hall",
    image: '/images/pollini-at-ladbroke-hall1.png'
  },
  {
    name: "Pophams",
    cuisine: "Italian",
    price: "££",
    path: "/uk/london/london/pophams",
    image: '/images/pophams1.png'
  },
  {
    name: "Popolo",
    cuisine: "Italian",
    price: "££",
    path: "/uk/london/london/popolo",
    image: '/images/popolo1.png'
  },
  {
    name: "Portland",
    cuisine: "Modern Cuisine",
    price: "£££",
    path: "/uk/london/london/portland",
    image: '/images/portland1.png'
  },
  {
    name: "Pravaas",
    cuisine: "Indian",
    price: "£££",
    path: "/uk/london/london/pravaas",
    image: '/images/pravaas1.png'
  },
  {
    name: "Primeur",
    cuisine: "Modern British",
    price: "££",
    path: "/uk/london/london/primeur",
    image: '/images/primeur1.png'
  },
  {
    name: "Prince Arthur",
    cuisine: "Basque",
    price: "£££",
    path: "/uk/london/london/prince-arthur",
    image: '/images/prince-arthur1.png'
  },
  {
    name: "Provender",
    cuisine: "French",
    price: "££",
    path: "/uk/london/london/provender",
    image: '/images/provender1.png'
  },
  {
    name: "Pétrus by Gordon Ramsay",
    cuisine: "French, French Contemporary",
    price: "££££",
    path: "/uk/london/london/ptrus-by-gordon-ramsay",
    image: '/images/ptrus-by-gordon-ramsay1.png'
  },
  {
    name: "Quaglino's",
    cuisine: "Modern Cuisine",
    price: "£££",
    path: "/uk/london/london/quaglinos",
    image: '/images/quaglinos1.png'
  },
  {
    name: "Quality Chop House",
    cuisine: "Meats and Grills, Traditional British",
    price: "£££",
    path: "/uk/london/london/quality-chop-house",
    image: '/images/quality-chop-house1.png'
  },
  {
    name: "Quilon",
    cuisine: "Indian",
    price: "££££",
    path: "/uk/london/london/quilon",
    image: '/images/quilon1.png'
  },
  {
    name: "Rambutan",
    cuisine: "Sri Lankan",
    price: "££",
    path: "/uk/london/london/rambutan",
    image: '/images/rambutan1.png'
  },
  {
    name: "Restaurant Gordon Ramsay",
    cuisine: "French",
    price: "££££",
    path: "/uk/london/london/restaurant-gordon-ramsay",
    image: '/images/restaurant-gordon-ramsay1.png'
  },
  {
    name: "Restaurant Gordon Ramsay High",
    cuisine: "Modern Cuisine",
    price: "££££",
    path: "/uk/london/london/restaurant-gordon-ramsay-high",
    image: '/images/restaurant-gordon-ramsay-high1.png'
  },
  {
    name: "Restaurant Story",
    cuisine: "Modern Cuisine",
    price: "££££",
    path: "/uk/london/london/restaurant-story",
    image: '/images/restaurant-story1.png'
  },
  {
    name: "River Café",
    cuisine: "Italian",
    price: "£££",
    path: "/uk/london/london/river-caf",
    image: '/images/river-caf1.png'
  },
  {
    name: "River Restaurant by Gordon Ramsay",
    cuisine: "Seafood",
    price: "£££",
    path: "/uk/london/london/river-restaurant-by-gordon-ramsay",
    image: '/images/river-restaurant-by-gordon-ramsay1.png'
  },
  {
    name: "Roe",
    cuisine: "Modern British",
    price: "££",
    path: "/uk/london/london/roe",
    image: '/images/roe1.png'
  },
  {
    name: "Rogues",
    cuisine: "Modern British",
    price: "£££",
    path: "/uk/london/london/rogues",
    image: '/images/rogues1.png'
  },
  {
    name: "Roketsu",
    cuisine: "Japanese",
    price: "££££",
    path: "/uk/london/london/roketsu",
    image: '/images/roketsu1.png'
  },
  {
    name: "Rosi",
    cuisine: "Traditional British",
    price: "£££",
    path: "/uk/london/london/rosi",
    image: '/images/rosi1.png'
  },
  {
    name: "Row on 5",
    cuisine: "Modern Cuisine",
    price: "££££",
    path: "/uk/london/london/row-on-5",
    image: '/images/row-on-51.png'
  },
  {
    name: "Royal China Club",
    cuisine: "Chinese",
    price: "£££",
    path: "/uk/london/london/royal-china-club",
    image: '/images/royal-china-club1.png'
  },
  {
    name: "Royal China Club",
    cuisine: "Chinese",
    price: "£££",
    path: "/uk/london/london/royal-china-club",
    image: '/images/royal-china-club1.png'
  },
  {
    name: "Rules",
    cuisine: "Traditional British",
    price: "£££",
    path: "/uk/london/london/rules",
    image: '/images/rules1.png'
  },
  {
    name: "Sabor",
    cuisine: "Spanish",
    price: "£££",
    path: "/uk/london/london/sabor",
    image: '/images/sabor1.png'
  },
  {
    name: "Sael",
    cuisine: "Modern British",
    price: "£££",
    path: "/uk/london/london/sael",
    image: '/images/sael1.png'
  },
  {
    name: "Sam's Riverside",
    cuisine: "Modern British",
    price: "££",
    path: "/uk/london/london/sams-riverside",
    image: '/images/sams-riverside1.png'
  },
  {
    name: "Santo Remedio",
    cuisine: "Mexican",
    price: "££",
    path: "/uk/london/london/santo-remedio",
    image: '/images/santo-remedio1.png'
  },
  {
    name: "Savoy Grill",
    cuisine: "French",
    price: "£££",
    path: "/uk/london/london/savoy-grill",
    image: '/images/savoy-grill1.png'
  },
  {
    name: "Scott's",
    cuisine: "Seafood",
    price: "£££",
    path: "/uk/london/london/scotts",
    image: '/images/scotts1.png'
  },
  {
    name: "Scully",
    cuisine: "World Cuisine",
    price: "££££",
    path: "/uk/london/london/scully",
    image: '/images/scully1.png'
  },
  {
    name: "Sesta",
    cuisine: "European Contemporary",
    price: "£££",
    path: "/uk/london/london/sesta",
    image: '/images/sesta1.png'
  },
  {
    name: "Sexy Fish",
    cuisine: "Asian",
    price: "£££",
    path: "/uk/london/london/sexy-fish",
    image: '/images/sexy-fish1.png'
  },
  {
    name: "Silo",
    cuisine: "Modern Cuisine",
    price: "£££",
    path: "/uk/london/london/silo",
    image: '/images/silo1.png'
  },
  {
    name: "Silva",
    cuisine: "Modern Cuisine",
    price: "£££",
    path: "/uk/london/london/silva",
    image: '/images/silva1.png'
  },
  {
    name: "Silva",
    cuisine: "Modern Cuisine",
    price: "£££",
    path: "/uk/london/london/silva",
    image: '/images/silva1.png'
  },
  {
    name: "Silver Birch",
    cuisine: "Modern British",
    price: "££££",
    path: "/uk/london/london/silver-birch",
    image: '/images/silver-birch1.png'
  },
  {
    name: "Singburi",
    cuisine: "Thai",
    price: "££",
    path: "/uk/london/london/singburi",
    image: '/images/singburi1.png'
  },
  {
    name: "Sino",
    cuisine: "Modern Cuisine",
    price: "££",
    path: "/uk/london/london/sino",
    image: '/images/sino1.png'
  },
  {
    name: "Six Portland Road",
    cuisine: "European",
    price: "£££",
    path: "/uk/london/london/six-portland-road",
    image: '/images/six-portland-road1.png'
  },
  {
    name: "Sketch, The Gallery",
    cuisine: "Modern Cuisine",
    price: "£££",
    path: "/uk/london/london/sketch-the-gallery",
    image: '/images/sketch-the-gallery1.png'
  },
  {
    name: "Sketch, The Lecture Room and Library",
    cuisine: "Modern French",
    price: "££££",
    path: "/uk/london/london/sketch-the-lecture-room-and-library",
    image: '/images/sketch-the-lecture-room-and-library1.png'
  },
  {
    name: "Smoke & Salt",
    cuisine: "Modern Cuisine",
    price: "£££",
    path: "/uk/london/london/smoke-salt",
    image: '/images/smoke-salt1.png'
  },
  {
    name: "Smokestak",
    cuisine: "Meats and Grills, Barbecue",
    price: "££",
    path: "/uk/london/london/smokestak",
    image: '/images/smokestak1.png'
  },
  {
    name: "Soif",
    cuisine: "French",
    price: "££",
    path: "/uk/london/london/soif",
    image: '/images/soif1.png'
  },
  {
    name: "SO|LA",
    cuisine: "Californian, Modern Cuisine",
    price: "££££",
    path: "/uk/london/london/sola",
    image: '/images/sola1.png'
  },
  {
    name: "Sollip",
    cuisine: "Creative",
    price: "££££",
    path: "/uk/london/london/sollip",
    image: '/images/sollip1.png'
  },
  {
    name: "Somssi by Jihun Kim",
    cuisine: "Korean",
    price: "££££",
    path: "/uk/london/london/somssi-by-jihun-kim",
    image: '/images/somssi-by-jihun-kim1.png'
  },
  {
    name: "Sorella",
    cuisine: "Italian",
    price: "££",
    path: "/uk/london/london/sorella",
    image: '/images/sorella1.png'
  },
  {
    name: "Sorella",
    cuisine: "Italian",
    price: "££",
    path: "/uk/london/london/sorella",
    image: '/images/sorella1.png'
  },
  {
    name: "Spring",
    cuisine: "Italian",
    price: "£££",
    path: "/uk/london/london/spring",
    image: '/images/spring1.png'
  },
  {
    name: "ssam ssam",
    cuisine: "Korean",
    price: "£",
    path: "/uk/london/london/ssam-ssam",
    image: '/images/ssam-ssam1.png'
  },
  {
    name: "St. Barts",
    cuisine: "Modern British",
    price: "££££",
    path: "/uk/london/london/st-barts",
    image: '/images/st-barts1.png'
  },
  {
    name: "St. JOHN",
    cuisine: "Traditional British",
    price: "£££",
    path: "/uk/london/london/st-john",
    image: '/images/st-john1.png'
  },
  {
    name: "St. JOHN Bread and Wine",
    cuisine: "Traditional British",
    price: "££",
    path: "/uk/london/london/st-john-bread-and-wine",
    image: '/images/st-john-bread-and-wine1.png'
  },
  {
    name: "Stanley's",
    cuisine: "Modern British",
    price: "£££",
    path: "/uk/london/london/stanleys",
    image: '/images/stanleys1.png'
  },
  {
    name: "Story Cellar",
    cuisine: "Modern British",
    price: "£££",
    path: "/uk/london/london/story-cellar",
    image: '/images/story-cellar1.png'
  },
  {
    name: "Straker's",
    cuisine: "Modern British",
    price: "£££",
    path: "/uk/london/london/strakers",
    image: '/images/strakers1.png'
  },
  {
    name: "Sucre",
    cuisine: "Latin American, European Contemporary",
    price: "£££",
    path: "/uk/london/london/sucre",
    image: '/images/sucre1.png'
  },
  {
    name: "Sumi",
    cuisine: "Japanese",
    price: "£££",
    path: "/uk/london/london/sumi",
    image: '/images/sumi1.png'
  },
  {
    name: "Sune",
    cuisine: "European Contemporary",
    price: "£££",
    path: "/uk/london/london/sune",
    image: '/images/sune1.png'
  },
  {
    name: "Supawan",
    cuisine: "Southern Thai",
    price: "££",
    path: "/uk/london/london/supawan",
    image: '/images/supawan1.png'
  },
  {
    name: "Sushi Kanesaka",
    cuisine: "Japanese, Sushi",
    price: "££££",
    path: "/uk/london/london/sushi-kanesaka",
    image: '/images/sushi-kanesaka1.png'
  },
  {
    name: "Sushi Kanesaka",
    cuisine: "Japanese, Sushi",
    price: "££££",
    path: "/uk/london/london/sushi-kanesaka",
    image: '/images/sushi-kanesaka1.png'
  },
  {
    name: "Takahashi",
    cuisine: "Japanese",
    price: "££££",
    path: "/uk/london/london/takahashi",
    image: '/images/takahashi1.png'
  },
  {
    name: "Takahashi",
    cuisine: "Japanese",
    price: "££££",
    path: "/uk/london/london/takahashi",
    image: '/images/takahashi1.png'
  },
  {
    name: "Taku",
    cuisine: "Japanese, Sushi",
    price: "££££",
    path: "/uk/london/london/taku",
    image: '/images/taku1.png'
  },
  {
    name: "Tamarind",
    cuisine: "Indian",
    price: "£££",
    path: "/uk/london/london/tamarind",
    image: '/images/tamarind1.png'
  },
  {
    name: "Tamarind Kitchen",
    cuisine: "Indian",
    price: "££",
    path: "/uk/london/london/tamarind-kitchen",
    image: '/images/tamarind-kitchen1.png'
  },
  {
    name: "Tamarind",
    cuisine: "Indian",
    price: "£££",
    path: "/uk/london/london/tamarind",
    image: '/images/tamarind1.png'
  },
  {
    name: "Tamila",
    cuisine: "Indian",
    price: "££",
    path: "/uk/london/london/tamila",
    image: '/images/tamila1.png'
  },
  {
    name: "Tehran Berlin",
    cuisine: "Persian",
    price: "££££",
    path: "/uk/london/london/tehran-berlin",
    image: '/images/tehran-berlin1.png'
  },
  {
    name: "Tendril",
    cuisine: "Vegetarian, Vegan",
    price: "££",
    path: "/uk/london/london/tendril",
    image: '/images/tendril1.png'
  },
  {
    name: "The Barbary",
    cuisine: "North African, Mediterranean Cuisine",
    price: "££",
    path: "/uk/london/london/the-barbary",
    image: '/images/the-barbary1.png'
  },
  {
    name: "The Baring",
    cuisine: "European Contemporary",
    price: "£££",
    path: "/uk/london/london/the-baring",
    image: '/images/the-baring1.png'
  },
  {
    name: "The Chalk Freehouse",
    cuisine: "Modern Cuisine",
    price: "£££",
    path: "/uk/london/london/the-chalk-freehouse",
    image: '/images/the-chalk-freehouse1.png'
  },
  {
    name: "The Clarence Tavern",
    cuisine: "Traditional Cuisine",
    price: "££",
    path: "/uk/london/london/the-clarence-tavern",
    image: '/images/the-clarence-tavern1.png'
  },
  {
    name: "The Clove Club",
    cuisine: "Creative",
    price: "££££",
    path: "/uk/london/london/the-clove-club",
    image: '/images/the-clove-club1.png'
  },
  {
    name: "The Cocochine",
    cuisine: "Modern French",
    price: "££££",
    path: "/uk/london/london/the-cocochine",
    image: '/images/the-cocochine1.png'
  },
  {
    name: "The Connaught Grill",
    cuisine: "Meats and Grills",
    price: "££££",
    path: "/uk/london/london/the-connaught-grill",
    image: '/images/the-connaught-grill1.png'
  },
  {
    name: "The Devonshire",
    cuisine: "Traditional British",
    price: "££",
    path: "/uk/london/london/the-devonshire",
    image: '/images/the-devonshire1.png'
  },
  {
    name: "The French House",
    cuisine: "Traditional Cuisine",
    price: "£££",
    path: "/uk/london/london/the-french-house",
    image: '/images/the-french-house1.png'
  },
  {
    name: "The Fuji Grill",
    cuisine: "Japanese",
    price: "££££",
    path: "/uk/london/london/the-fuji-grill",
    image: '/images/the-fuji-grill1.png'
  },
  {
    name: "The Grill",
    cuisine: "British Contemporary",
    price: "£££",
    path: "/uk/london/london/the-grill",
    image: '/images/the-grill1.png'
  },
  {
    name: "The Grill at The Dorchester",
    cuisine: "British Contemporary",
    price: "£££",
    path: "/uk/london/london/the-grill-at-the-dorchester",
    image: '/images/the-grill-at-the-dorchester1.png'
  },
  {
    name: "The Harwood Arms",
    cuisine: "Modern British",
    price: "£££",
    path: "/uk/london/london/the-harwood-arms",
    image: '/images/the-harwood-arms1.png'
  },
  {
    name: "The Hero",
    cuisine: "Traditional Cuisine",
    price: "££",
    path: "/uk/london/london/the-hero",
    image: '/images/the-hero1.png'
  },
  {
    name: "The Holland",
    cuisine: "Traditional British",
    price: "££",
    path: "/uk/london/london/the-holland",
    image: '/images/the-holland1.png'
  },
  {
    name: "The Lanesborough Grill",
    cuisine: "Modern British",
    price: "£££",
    path: "/uk/london/london/the-lanesborough-grill",
    image: '/images/the-lanesborough-grill1.png'
  },
  {
    name: "The Lavery",
    cuisine: "Mediterranean Cuisine",
    price: "£££",
    path: "/uk/london/london/the-lavery",
    image: '/images/the-lavery1.png'
  },
  {
    name: "The Ledbury",
    cuisine: "Modern Cuisine",
    price: "££££",
    path: "/uk/london/london/the-ledbury",
    image: '/images/the-ledbury1.png'
  },
  {
    name: "The Ninth",
    cuisine: "Mediterranean Cuisine",
    price: "£££",
    path: "/uk/london/london/the-ninth",
    image: '/images/the-ninth1.png'
  },
  {
    name: "The Parakeet",
    cuisine: "Modern British",
    price: "£££",
    path: "/uk/london/london/the-parakeet",
    image: '/images/the-parakeet1.png'
  },
  {
    name: "The Park",
    cuisine: "American, Italian",
    price: "£££",
    path: "/uk/london/london/the-park",
    image: '/images/the-park1.png'
  },
  {
    name: "The Pearly Queen",
    cuisine: "Seafood",
    price: "££",
    path: "/uk/london/london/the-pearly-queen",
    image: '/images/the-pearly-queen1.png'
  },
  {
    name: "The Pelican",
    cuisine: "Traditional Cuisine",
    price: "££",
    path: "/uk/london/london/the-pelican",
    image: '/images/the-pelican1.png'
  },
  {
    name: "The Pem",
    cuisine: "Modern British",
    price: "£££",
    path: "/uk/london/london/the-pem",
    image: '/images/the-pem1.png'
  },
  {
    name: "The Ritz Restaurant",
    cuisine: "Modern British",
    price: "££££",
    path: "/uk/london/london/the-ritz-restaurant",
    image: '/images/the-ritz-restaurant1.png'
  },
  {
    name: "The River Restaurant by Gordon Ramsay",
    cuisine: "Seafood",
    price: "£££",
    path: "/uk/london/london/the-river-restaurant-by-gordon-ramsay",
    image: '/images/the-river-restaurant-by-gordon-ramsay1.png'
  },
  {
    name: "The Sea, The Sea",
    cuisine: "Seafood",
    price: "££",
    path: "/uk/london/london/the-sea-the-sea",
    image: '/images/the-sea-the-sea1.png'
  },
  {
    name: "The Tamil Prince",
    cuisine: "Indian",
    price: "££",
    path: "/uk/london/london/the-tamil-prince",
    image: '/images/the-tamil-prince1.png'
  },
  {
    name: "The Twenty Two",
    cuisine: "Mediterranean Cuisine",
    price: "£££",
    path: "/uk/london/london/the-twenty-two",
    image: '/images/the-twenty-two1.png'
  },
  {
    name: "The Twenty Two",
    cuisine: "Mediterranean Cuisine",
    price: "£££",
    path: "/uk/london/london/the-twenty-two",
    image: '/images/the-twenty-two1.png'
  },
  {
    name: "The Victoria",
    cuisine: "Modern British",
    price: "££",
    path: "/uk/london/london/the-victoria",
    image: '/images/the-victoria1.png'
  },
  {
    name: "The Water House Project",
    cuisine: "Modern British",
    price: "££££",
    path: "/uk/london/london/the-water-house-project",
    image: '/images/the-water-house-project1.png'
  },
  {
    name: "The Waterman's Arms",
    cuisine: "Modern British",
    price: "££",
    path: "/uk/london/london/the-watermans-arms",
    image: '/images/the-watermans-arms1.png'
  },
  {
    name: "The Wigmore",
    cuisine: "Traditional British",
    price: "££",
    path: "/uk/london/london/the-wigmore",
    image: '/images/the-wigmore1.png'
  },
  {
    name: "The Wolseley",
    cuisine: "European",
    price: "£££",
    path: "/uk/london/london/the-wolseley",
    image: '/images/the-wolseley1.png'
  },
  {
    name: "Three Darlings",
    cuisine: "World Cuisine",
    price: "£££",
    path: "/uk/london/london/three-darlings",
    image: '/images/three-darlings1.png'
  },
  {
    name: "Through the Woods",
    cuisine: "Modern British",
    price: "£££",
    path: "/uk/london/london/through-the-woods",
    image: '/images/through-the-woods1.png'
  },
  {
    name: "Tobi Masa",
    cuisine: "Japanese",
    price: "££££",
    path: "/uk/london/london/tobi-masa",
    image: '/images/tobi-masa1.png'
  },
  {
    name: "Toklas",
    cuisine: "Mediterranean Cuisine",
    price: "££",
    path: "/uk/london/london/toklas",
    image: '/images/toklas1.png'
  },
  {
    name: "Tom Brown at The Capital",
    cuisine: "Seafood, Modern British",
    price: "£££",
    path: "/uk/london/london/tom-brown-at-the-capital",
    image: '/images/tom-brown-at-the-capital1.png'
  },
  {
    name: "TOWN",
    cuisine: "Modern British",
    price: "£££",
    path: "/uk/london/london/town",
    image: '/images/town1.png'
  },
  {
    name: "Trinity",
    cuisine: "Modern Cuisine",
    price: "££££",
    path: "/uk/london/london/trinity",
    image: '/images/trinity1.png'
  },
  {
    name: "Trishna",
    cuisine: "Indian",
    price: "£££",
    path: "/uk/london/london/trishna",
    image: '/images/trishna1.png'
  },
  {
    name: "Trivet",
    cuisine: "Modern Cuisine",
    price: "££££",
    path: "/uk/london/london/trivet",
    image: '/images/trivet1.png'
  },
  {
    name: "Trullo",
    cuisine: "Italian",
    price: "££",
    path: "/uk/london/london/trullo",
    image: '/images/trullo1.png'
  },
  {
    name: "Umu",
    cuisine: "Japanese",
    price: "££££",
    path: "/uk/london/london/umu",
    image: '/images/umu1.png'
  },
  {
    name: "Upstairs (at Trinity)",
    cuisine: "Modern Cuisine",
    price: "££",
    path: "/uk/london/london/upstairs-at-trinity",
    image: '/images/upstairs-at-trinity1.png'
  },
  {
    name: "Veeraswamy",
    cuisine: "Indian",
    price: "£££",
    path: "/uk/london/london/veeraswamy",
    image: '/images/veeraswamy1.png'
  },
  {
    name: "Victoria",
    cuisine: "Modern British",
    price: "££",
    path: "/uk/london/london/victoria",
    image: '/images/victoria1.png'
  },
  {
    name: "Volta Do Mar",
    cuisine: "Portuguese, Classic Cuisine",
    price: "££",
    path: "/uk/london/london/volta-do-mar",
    image: '/images/volta-do-mar1.png'
  },
  {
    name: "Westerns Laundry",
    cuisine: "Modern British",
    price: "££",
    path: "/uk/london/london/westerns-laundry",
    image: '/images/westerns-laundry1.png'
  },
  {
    name: "Whyte's",
    cuisine: "World Cuisine",
    price: "£££",
    path: "/uk/london/london/whytes",
    image: '/images/whytes1.png'
  },
  {
    name: "Wild by Tart",
    cuisine: "Mediterranean Cuisine",
    price: "£££",
    path: "/uk/london/london/wild-by-tart",
    image: '/images/wild-by-tart1.png'
  },
  {
    name: "Wild Honey St James",
    cuisine: "Modern British",
    price: "£££",
    path: "/uk/london/london/wild-honey-st-james",
    image: '/images/wild-honey-st-james1.png'
  },
  {
    name: "Wild Tavern",
    cuisine: "Italian",
    price: "£££",
    path: "/uk/london/london/wild-tavern",
    image: '/images/wild-tavern1.png'
  },
  {
    name: "Wildflowers",
    cuisine: "Mediterranean Cuisine",
    price: "£££",
    path: "/uk/london/london/wildflowers",
    image: '/images/wildflowers1.png'
  },
  {
    name: "Yauatcha Soho",
    cuisine: "Chinese",
    price: "£££",
    path: "/uk/london/london/yauatcha-soho",
    image: '/images/yauatcha-soho1.png'
  },
  {
    name: "yeni",
    cuisine: "Turkish",
    price: "££££",
    path: "/uk/london/london/yeni",
    image: '/images/yeni1.png'
  },
  {
    name: "YiQi",
    cuisine: "Asian",
    price: "££",
    path: "/uk/london/london/yiqi",
    image: '/images/yiqi1.png'
  },
  {
    name: "Zahter",
    cuisine: "Turkish",
    price: "££",
    path: "/uk/london/london/zahter",
    image: '/images/zahter1.png'
  },
  {
    name: "Zaika",
    cuisine: "Indian",
    price: "£££",
    path: "/uk/london/london/zaika",
    image: '/images/zaika1.png'
  },
  {
    name: "Zoilo",
    cuisine: "Argentinian",
    price: "££",
    path: "/uk/london/london/zoilo",
    image: '/images/zoilo1.png'
  },
  {
    name: "Zuma",
    cuisine: "Japanese Contemporary",
    price: "£££",
    path: "/uk/london/london/zuma",
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
