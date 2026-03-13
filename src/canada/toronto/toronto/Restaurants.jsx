import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Toronto";

const restaurants = [
  {
    name: "156 Cumberland",
    cuisine: "Korean, Fusion",
    price: "$$$",
    path: "/canada/toronto/toronto/156-cumberland",
    image: '/images/156-cumberland1.png'
  },
  {
    name: "Aanch",
    cuisine: "Indian",
    price: "$$$",
    path: "/canada/toronto/toronto/aanch",
    image: '/images/aanch1.png'
  },
  {
    name: "Aburi Hana",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/canada/toronto/toronto/aburi-hana",
    image: '/images/aburi-hana1.png'
  },
  {
    name: "Actinolite",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/canada/toronto/toronto/actinolite",
    image: '/images/actinolite1.png'
  },
  {
    name: "Adrak Yorkville",
    cuisine: "Indian, Regional Cuisine",
    price: "$$$",
    path: "/canada/toronto/toronto/adrak-yorkville",
    image: '/images/adrak-yorkville1.png'
  },
  {
    name: "aKin",
    cuisine: "Asian, Contemporary",
    price: "$$$$",
    path: "/canada/toronto/toronto/akin",
    image: '/images/akin1.png'
  },
  {
    name: "Alder",
    cuisine: "Mediterranean Cuisine",
    price: "$$$",
    path: "/canada/toronto/toronto/alder",
    image: '/images/alder1.png'
  },
  {
    name: "Alma",
    cuisine: "Asian",
    price: "$$$",
    path: "/canada/toronto/toronto/alma",
    image: '/images/alma1.png'
  },
  {
    name: "Alma",
    cuisine: "Asian",
    price: "$$",
    path: "/canada/toronto/toronto/alma",
    image: '/images/alma1.png'
  },
  {
    name: "Alo",
    cuisine: "Contemporary, French",
    price: "$$$$",
    path: "/canada/toronto/toronto/alo",
    image: '/images/alo1.png'
  },
  {
    name: "Alo",
    cuisine: "Contemporary, French",
    price: "$$$$",
    path: "/canada/toronto/toronto/alo",
    image: '/images/alo1.png'
  },
  {
    name: "Alobar Yorkville",
    cuisine: "French, Seafood",
    price: "$$$$",
    path: "/canada/toronto/toronto/alobar-yorkville",
    image: '/images/alobar-yorkville1.png'
  },
  {
    name: "Aloette",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/canada/toronto/toronto/aloette",
    image: '/images/aloette1.png'
  },
  {
    name: "Amal",
    cuisine: "Lebanese",
    price: "$$$",
    path: "/canada/toronto/toronto/amal",
    image: '/images/amal1.png'
  },
  {
    name: "Antler",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/canada/toronto/toronto/antler",
    image: '/images/antler1.png'
  },
  {
    name: "Arbequina",
    cuisine: "Middle Eastern",
    price: "$$$",
    path: "/canada/toronto/toronto/arbequina",
    image: '/images/arbequina1.png'
  },
  {
    name: "Ardo",
    cuisine: "Italian, Sicilian",
    price: "$$$",
    path: "/canada/toronto/toronto/ardo",
    image: '/images/ardo1.png'
  },
  {
    name: "Azura",
    cuisine: "Mediterranean Cuisine, Contemporary",
    price: "$$$$",
    path: "/canada/toronto/toronto/azura",
    image: '/images/azura1.png'
  },
  {
    name: "Bar Chica",
    cuisine: "Spanish",
    price: "$$$",
    path: "/canada/toronto/toronto/bar-chica",
    image: '/images/bar-chica1.png'
  },
  {
    name: "Bar Goa",
    cuisine: "Indian",
    price: "$$",
    path: "/canada/toronto/toronto/bar-goa",
    image: '/images/bar-goa1.png'
  },
  {
    name: "Bar Isabel",
    cuisine: "Spanish",
    price: "$$$",
    path: "/canada/toronto/toronto/bar-isabel",
    image: '/images/bar-isabel1.png'
  },
  {
    name: "Bar Raval",
    cuisine: "Spanish",
    price: "$$",
    path: "/canada/toronto/toronto/bar-raval",
    image: '/images/bar-raval1.png'
  },
  {
    name: "Bar Vendetta",
    cuisine: "Italian",
    price: "$$",
    path: "/canada/toronto/toronto/bar-vendetta",
    image: '/images/bar-vendetta1.png'
  },
  {
    name: "BB's",
    cuisine: "Filipino",
    price: "$$",
    path: "/canada/toronto/toronto/bbs",
    image: '/images/bbs1.png'
  },
  {
    name: "Buca",
    cuisine: "Italian",
    price: "$$$",
    path: "/canada/toronto/toronto/buca",
    image: '/images/buca1.png'
  },
  {
    name: "CÀ PHÊ RANG",
    cuisine: "Vietnamese",
    price: "$$",
    path: "/canada/toronto/toronto/c-ph-rang",
    image: '/images/c-ph-rang1.png'
  },
  {
    name: "Campechano",
    cuisine: "Mexican",
    price: "$$",
    path: "/canada/toronto/toronto/campechano",
    image: '/images/campechano1.png'
  },
  {
    name: "Canoe",
    cuisine: "Contemporary, Regional Cuisine",
    price: "$$$$",
    path: "/canada/toronto/toronto/canoe",
    image: '/images/canoe1.png'
  },
  {
    name: "Cherry Street Bar-B-Que",
    cuisine: "Barbecue",
    price: "$$",
    path: "/canada/toronto/toronto/cherry-street-bar-b-que",
    image: '/images/cherry-street-bar-b-que1.png'
  },
  {
    name: "Chica's Chicken",
    cuisine: "American",
    price: "$$",
    path: "/canada/toronto/toronto/chicas-chicken",
    image: '/images/chicas-chicken1.png'
  },
  {
    name: "Chubby's Jamaican Kitchen",
    cuisine: "Jamaican",
    price: "$$$",
    path: "/canada/toronto/toronto/chubbys-jamaican-kitchen",
    image: '/images/chubbys-jamaican-kitchen1.png'
  },
  {
    name: "Conejo Negro",
    cuisine: "Caribbean, Latin American",
    price: "$$",
    path: "/canada/toronto/toronto/conejo-negro",
    image: '/images/conejo-negro1.png'
  },
  {
    name: "DaNico",
    cuisine: "Italian, Contemporary",
    price: "$$$$",
    path: "/canada/toronto/toronto/danico",
    image: '/images/danico1.png'
  },
  {
    name: "Dil Se",
    cuisine: "Indian",
    price: "$$",
    path: "/canada/toronto/toronto/dil-se",
    image: '/images/dil-se1.png'
  },
  {
    name: "Don Alfonso 1890",
    cuisine: "Italian, Contemporary",
    price: "$$$$",
    path: "/canada/toronto/toronto/don-alfonso-1890",
    image: '/images/don-alfonso-18901.png'
  },
  {
    name: "Don Alfonso 1890",
    cuisine: "Italian, Contemporary",
    price: "$$$$",
    path: "/canada/toronto/toronto/don-alfonso-1890",
    image: '/images/don-alfonso-18901.png'
  },
  {
    name: "Dreyfus",
    cuisine: "French",
    price: "$$$",
    path: "/canada/toronto/toronto/dreyfus",
    image: '/images/dreyfus1.png'
  },
  {
    name: "Edulis",
    cuisine: "Mediterranean Cuisine",
    price: "$$$$",
    path: "/canada/toronto/toronto/edulis",
    image: '/images/edulis1.png'
  },
  {
    name: "Enigma Yorkville",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/canada/toronto/toronto/enigma-yorkville",
    image: '/images/enigma-yorkville1.png'
  },
  {
    name: "Enoteca Sociale",
    cuisine: "Italian, Roman",
    price: "$$",
    path: "/canada/toronto/toronto/enoteca-sociale",
    image: '/images/enoteca-sociale1.png'
  },
  {
    name: "Famiglia Baldassarre",
    cuisine: "Italian",
    price: "$$",
    path: "/canada/toronto/toronto/famiglia-baldassarre",
    image: '/images/famiglia-baldassarre1.png'
  },
  {
    name: "Favorites Thai",
    cuisine: "Thai",
    price: "$$",
    path: "/canada/toronto/toronto/favorites-thai",
    image: '/images/favorites-thai1.png'
  },
  {
    name: "FK",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/canada/toronto/toronto/fk",
    image: '/images/fk1.png'
  },
  {
    name: "George",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/canada/toronto/toronto/george",
    image: '/images/george1.png'
  },
  {
    name: "Gia",
    cuisine: "Italian, Vegetarian",
    price: "$$$",
    path: "/canada/toronto/toronto/gia",
    image: '/images/gia1.png'
  },
  {
    name: "Gia",
    cuisine: "Italian, Vegetarian",
    price: "$$$",
    path: "/canada/toronto/toronto/gia",
    image: '/images/gia1.png'
  },
  {
    name: "Giulietta",
    cuisine: "Italian, Pizza",
    price: "$$$",
    path: "/canada/toronto/toronto/giulietta",
    image: '/images/giulietta1.png'
  },
  {
    name: "Grey Gardens",
    cuisine: "Contemporary, Seafood",
    price: "$$$",
    path: "/canada/toronto/toronto/grey-gardens",
    image: '/images/grey-gardens1.png'
  },
  {
    name: "Henry's",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/canada/toronto/toronto/henrys",
    image: '/images/henrys1.png'
  },
  {
    name: "Indian Street Food Company",
    cuisine: "Indian",
    price: "$$",
    path: "/canada/toronto/toronto/indian-street-food-company",
    image: '/images/indian-street-food-company1.png'
  },
  {
    name: "Jacobs & Co. Steakhouse",
    cuisine: "Steakhouse, Contemporary",
    price: "$$$$",
    path: "/canada/toronto/toronto/jacobs-co-steakhouse",
    image: '/images/jacobs-co-steakhouse1.png'
  },
  {
    name: "Kaiseki Yu-zen Hashimoto",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/canada/toronto/toronto/kaiseki-yu-zen-hashimoto",
    image: '/images/kaiseki-yu-zen-hashimoto1.png'
  },
  {
    name: "Kappo Sato",
    cuisine: "Japanese, Contemporary",
    price: "$$$$",
    path: "/canada/toronto/toronto/kappo-sato",
    image: '/images/kappo-sato1.png'
  },
  {
    name: "Kiin",
    cuisine: "Thai",
    price: "$$$",
    path: "/canada/toronto/toronto/kiin",
    image: '/images/kiin1.png'
  },
  {
    name: "Koh Lipe Thai Kitchen",
    cuisine: "Thai, Southern Thai",
    price: "$$",
    path: "/canada/toronto/toronto/koh-lipe-thai-kitchen",
    image: '/images/koh-lipe-thai-kitchen1.png'
  },
  {
    name: "La Banane",
    cuisine: "French, Steakhouse",
    price: "$$$$",
    path: "/canada/toronto/toronto/la-banane",
    image: '/images/la-banane1.png'
  },
  {
    name: "Lapinou",
    cuisine: "French, Contemporary",
    price: "$$$",
    path: "/canada/toronto/toronto/lapinou",
    image: '/images/lapinou1.png'
  },
  {
    name: "Linny's",
    cuisine: "Steakhouse, American Contemporary",
    price: "$$$$",
    path: "/canada/toronto/toronto/linnys",
    image: '/images/linnys1.png'
  },
  {
    name: "LSL",
    cuisine: "French, Japanese",
    price: "$$$$",
    path: "/canada/toronto/toronto/lsl",
    image: '/images/lsl1.png'
  },
  {
    name: "Lucie",
    cuisine: "French",
    price: "$$$",
    path: "/canada/toronto/toronto/lucie",
    image: '/images/lucie1.png'
  },
  {
    name: "Madrina Bar y Tapas",
    cuisine: "Spanish",
    price: "$$",
    path: "/canada/toronto/toronto/madrina-bar-y-tapas",
    image: '/images/madrina-bar-y-tapas1.png'
  },
  {
    name: "Maha's",
    cuisine: "Egyptian, Regional Cuisine",
    price: "$$",
    path: "/canada/toronto/toronto/mahas",
    image: '/images/mahas1.png'
  },
  {
    name: "Mhel",
    cuisine: "Korean Contemporary, Japanese Contemporary",
    price: "$$$",
    path: "/canada/toronto/toronto/mhel",
    image: '/images/mhel1.png'
  },
  {
    name: "Mimi Chinese",
    cuisine: "Chinese",
    price: "$$$",
    path: "/canada/toronto/toronto/mimi-chinese",
    image: '/images/mimi-chinese1.png'
  },
  {
    name: "Mother's Dumplings",
    cuisine: "Chinese, Dumplings",
    price: "$$",
    path: "/canada/toronto/toronto/mothers-dumplings",
    image: '/images/mothers-dumplings1.png'
  },
  {
    name: "Musoshin Ramen",
    cuisine: "Japanese, Ramen",
    price: "$$",
    path: "/canada/toronto/toronto/musoshin-ramen",
    image: '/images/musoshin-ramen1.png'
  },
  {
    name: "Okeya Kyujiro Toronto",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/canada/toronto/toronto/okeya-kyujiro-toronto",
    image: '/images/okeya-kyujiro-toronto1.png'
  },
  {
    name: "Osteria Giulia",
    cuisine: "Italian, Seafood",
    price: "$$$$",
    path: "/canada/toronto/toronto/osteria-giulia",
    image: '/images/osteria-giulia1.png'
  },
  {
    name: "PAI",
    cuisine: "Northern Thai",
    price: "$$",
    path: "/canada/toronto/toronto/pai",
    image: '/images/pai1.png'
  },
  {
    name: "Parquet",
    cuisine: "French",
    price: "$$$",
    path: "/canada/toronto/toronto/parquet",
    image: '/images/parquet1.png'
  },
  {
    name: "Pho Tien Thanh",
    cuisine: "Vietnamese",
    price: "$$",
    path: "/canada/toronto/toronto/pho-tien-thanh",
    image: '/images/pho-tien-thanh1.png'
  },
  {
    name: "Prime Seafood Palace",
    cuisine: "Steakhouse, Seafood",
    price: "$$$$",
    path: "/canada/toronto/toronto/prime-seafood-palace",
    image: '/images/prime-seafood-palace1.png'
  },
  {
    name: "Puerto Bravo",
    cuisine: "Mexican, Regional Cuisine",
    price: "$$",
    path: "/canada/toronto/toronto/puerto-bravo",
    image: '/images/puerto-bravo1.png'
  },
  {
    name: "Quetzal",
    cuisine: "Mexican",
    price: "$$$$",
    path: "/canada/toronto/toronto/quetzal",
    image: '/images/quetzal1.png'
  },
  {
    name: "156 Cumberland",
    cuisine: "Korean, Fusion",
    price: "$$$",
    path: "/canada/toronto/toronto/156-cumberland",
    image: '/images/156-cumberland1.png'
  },
  {
    name: "Aanch",
    cuisine: "Indian",
    price: "$$$",
    path: "/canada/toronto/toronto/aanch",
    image: '/images/aanch1.png'
  },
  {
    name: "Aburi Hana",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/canada/toronto/toronto/aburi-hana",
    image: '/images/aburi-hana1.png'
  },
  {
    name: "Actinolite",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/canada/toronto/toronto/actinolite",
    image: '/images/actinolite1.png'
  },
  {
    name: "Adrak Yorkville",
    cuisine: "Indian, Regional Cuisine",
    price: "$$$",
    path: "/canada/toronto/toronto/adrak-yorkville",
    image: '/images/adrak-yorkville1.png'
  },
  {
    name: "Alder",
    cuisine: "Mediterranean Cuisine",
    price: "$$$",
    path: "/canada/toronto/toronto/alder",
    image: '/images/alder1.png'
  },
  {
    name: "Alma",
    cuisine: "Asian",
    price: "$$",
    path: "/canada/toronto/toronto/alma",
    image: '/images/alma1.png'
  },
  {
    name: "Alo",
    cuisine: "Contemporary, French",
    price: "$$$$",
    path: "/canada/toronto/toronto/alo",
    image: '/images/alo1.png'
  },
  {
    name: "Alobar Yorkville",
    cuisine: "French, Seafood",
    price: "$$$$",
    path: "/canada/toronto/toronto/alobar-yorkville",
    image: '/images/alobar-yorkville1.png'
  },
  {
    name: "Aloette",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/canada/toronto/toronto/aloette",
    image: '/images/aloette1.png'
  },
  {
    name: "Amal",
    cuisine: "Lebanese",
    price: "$$$",
    path: "/canada/toronto/toronto/amal",
    image: '/images/amal1.png'
  },
  {
    name: "Antler",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/canada/toronto/toronto/antler",
    image: '/images/antler1.png'
  },
  {
    name: "Ardo",
    cuisine: "Italian, Sicilian",
    price: "$$$",
    path: "/canada/toronto/toronto/ardo",
    image: '/images/ardo1.png'
  },
  {
    name: "Rasa",
    cuisine: "Contemporary",
    price: "$$",
    path: "/canada/toronto/toronto/rasa",
    image: '/images/rasa1.png'
  },
  {
    name: "Azura",
    cuisine: "Mediterranean Cuisine, Contemporary",
    price: "$$$$",
    path: "/canada/toronto/toronto/azura",
    image: '/images/azura1.png'
  },
  {
    name: "Bar Chica",
    cuisine: "Spanish",
    price: "$$$",
    path: "/canada/toronto/toronto/bar-chica",
    image: '/images/bar-chica1.png'
  },
  {
    name: "Bar Goa",
    cuisine: "Indian",
    price: "$$",
    path: "/canada/toronto/toronto/bar-goa",
    image: '/images/bar-goa1.png'
  },
  {
    name: "Bar Isabel",
    cuisine: "Spanish",
    price: "$$$",
    path: "/canada/toronto/toronto/bar-isabel",
    image: '/images/bar-isabel1.png'
  },
  {
    name: "Bar Raval",
    cuisine: "Spanish",
    price: "$$",
    path: "/canada/toronto/toronto/bar-raval",
    image: '/images/bar-raval1.png'
  },
  {
    name: "Bar Vendetta",
    cuisine: "Italian",
    price: "$$",
    path: "/canada/toronto/toronto/bar-vendetta",
    image: '/images/bar-vendetta1.png'
  },
  {
    name: "BB's",
    cuisine: "Filipino",
    price: "$$",
    path: "/canada/toronto/toronto/bbs",
    image: '/images/bbs1.png'
  },
  {
    name: "Buca",
    cuisine: "Italian",
    price: "$$$",
    path: "/canada/toronto/toronto/buca",
    image: '/images/buca1.png'
  },
  {
    name: "Campechano",
    cuisine: "Mexican",
    price: "$$",
    path: "/canada/toronto/toronto/campechano",
    image: '/images/campechano1.png'
  },
  {
    name: "Canoe",
    cuisine: "Contemporary, Regional Cuisine",
    price: "$$$$",
    path: "/canada/toronto/toronto/canoe",
    image: '/images/canoe1.png'
  },
  {
    name: "Cherry Street Bar-B-Que",
    cuisine: "Barbecue",
    price: "$$",
    path: "/canada/toronto/toronto/cherry-street-bar-b-que",
    image: '/images/cherry-street-bar-b-que1.png'
  },
  {
    name: "Chica's Chicken",
    cuisine: "American",
    price: "$$",
    path: "/canada/toronto/toronto/chicas-chicken",
    image: '/images/chicas-chicken1.png'
  },
  {
    name: "Chubby's Jamaican Kitchen",
    cuisine: "Jamaican",
    price: "$$$",
    path: "/canada/toronto/toronto/chubbys-jamaican-kitchen",
    image: '/images/chubbys-jamaican-kitchen1.png'
  },
  {
    name: "Conejo Negro",
    cuisine: "Caribbean, Latin American",
    price: "$$",
    path: "/canada/toronto/toronto/conejo-negro",
    image: '/images/conejo-negro1.png'
  },
  {
    name: "CÀ PHÊ RANG",
    cuisine: "Vietnamese",
    price: "$$",
    path: "/canada/toronto/toronto/c-ph-rang",
    image: '/images/c-ph-rang1.png'
  },
  {
    name: "R&D",
    cuisine: "Fusion, Chinese",
    price: "$$$",
    path: "/canada/toronto/toronto/rd",
    image: '/images/rd1.png'
  },
  {
    name: "DaNico",
    cuisine: "Italian, Contemporary",
    price: "$$$$",
    path: "/canada/toronto/toronto/danico",
    image: '/images/danico1.png'
  },
  {
    name: "Dil Se",
    cuisine: "Indian",
    price: "$$",
    path: "/canada/toronto/toronto/dil-se",
    image: '/images/dil-se1.png'
  },
  {
    name: "Don Alfonso 1890",
    cuisine: "Italian, Contemporary",
    price: "$$$$",
    path: "/canada/toronto/toronto/don-alfonso-1890",
    image: '/images/don-alfonso-18901.png'
  },
  {
    name: "Dreyfus",
    cuisine: "French",
    price: "$$$",
    path: "/canada/toronto/toronto/dreyfus",
    image: '/images/dreyfus1.png'
  },
  {
    name: "Edulis",
    cuisine: "Mediterranean Cuisine",
    price: "$$$$",
    path: "/canada/toronto/toronto/edulis",
    image: '/images/edulis1.png'
  },
  {
    name: "Enigma Yorkville",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/canada/toronto/toronto/enigma-yorkville",
    image: '/images/enigma-yorkville1.png'
  },
  {
    name: "Enoteca Sociale",
    cuisine: "Italian, Roman",
    price: "$$",
    path: "/canada/toronto/toronto/enoteca-sociale",
    image: '/images/enoteca-sociale1.png'
  },
  {
    name: "Restaurant 20 Victoria",
    cuisine: "Contemporary, Seafood",
    price: "$$$$",
    path: "/canada/toronto/toronto/restaurant-20-victoria",
    image: '/images/restaurant-20-victoria1.png'
  },
  {
    name: "Famiglia Baldassarre",
    cuisine: "Italian",
    price: "$$",
    path: "/canada/toronto/toronto/famiglia-baldassarre",
    image: '/images/famiglia-baldassarre1.png'
  },
  {
    name: "Favorites Thai",
    cuisine: "Thai",
    price: "$$",
    path: "/canada/toronto/toronto/favorites-thai",
    image: '/images/favorites-thai1.png'
  },
  {
    name: "FK",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/canada/toronto/toronto/fk",
    image: '/images/fk1.png'
  },
  {
    name: "George",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/canada/toronto/toronto/george",
    image: '/images/george1.png'
  },
  {
    name: "Gia",
    cuisine: "Italian, Vegetarian",
    price: "$$$",
    path: "/canada/toronto/toronto/gia",
    image: '/images/gia1.png'
  },
  {
    name: "Giulietta",
    cuisine: "Italian, Pizza",
    price: "$$$",
    path: "/canada/toronto/toronto/giulietta",
    image: '/images/giulietta1.png'
  },
  {
    name: "Grey Gardens",
    cuisine: "Contemporary, Seafood",
    price: "$$$",
    path: "/canada/toronto/toronto/grey-gardens",
    image: '/images/grey-gardens1.png'
  },
  {
    name: "Henry's",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/canada/toronto/toronto/henrys",
    image: '/images/henrys1.png'
  },
  {
    name: "Ricky + Olivia",
    cuisine: "Creative",
    price: "$$",
    path: "/canada/toronto/toronto/ricky-olivia",
    image: '/images/ricky-olivia1.png'
  },
  {
    name: "Indian Street Food Company",
    cuisine: "Indian",
    price: "$$",
    path: "/canada/toronto/toronto/indian-street-food-company",
    image: '/images/indian-street-food-company1.png'
  },
  {
    name: "Jacobs & Co. Steakhouse",
    cuisine: "Steakhouse, Contemporary",
    price: "$$$$",
    path: "/canada/toronto/toronto/jacobs-co-steakhouse",
    image: '/images/jacobs-co-steakhouse1.png'
  },
  {
    name: "Kappo Sato",
    cuisine: "Japanese, Contemporary",
    price: "$$$$",
    path: "/canada/toronto/toronto/kappo-sato",
    image: '/images/kappo-sato1.png'
  },
  {
    name: "Kiin",
    cuisine: "Thai",
    price: "$$$",
    path: "/canada/toronto/toronto/kiin",
    image: '/images/kiin1.png'
  },
  {
    name: "Koh Lipe Thai Kitchen",
    cuisine: "Thai, Southern Thai",
    price: "$$",
    path: "/canada/toronto/toronto/koh-lipe-thai-kitchen",
    image: '/images/koh-lipe-thai-kitchen1.png'
  },
  {
    name: "La Banane",
    cuisine: "French, Steakhouse",
    price: "$$$$",
    path: "/canada/toronto/toronto/la-banane",
    image: '/images/la-banane1.png'
  },
  {
    name: "Lapinou",
    cuisine: "French, Contemporary",
    price: "$$$",
    path: "/canada/toronto/toronto/lapinou",
    image: '/images/lapinou1.png'
  },
  {
    name: "Lucie",
    cuisine: "French",
    price: "$$$",
    path: "/canada/toronto/toronto/lucie",
    image: '/images/lucie1.png'
  },
  {
    name: "Madrina Bar y Tapas",
    cuisine: "Spanish",
    price: "$$",
    path: "/canada/toronto/toronto/madrina-bar-y-tapas",
    image: '/images/madrina-bar-y-tapas1.png'
  },
  {
    name: "Maha's",
    cuisine: "Egyptian, Regional Cuisine",
    price: "$$",
    path: "/canada/toronto/toronto/mahas",
    image: '/images/mahas1.png'
  },
  {
    name: "Mimi Chinese",
    cuisine: "Chinese",
    price: "$$$",
    path: "/canada/toronto/toronto/mimi-chinese",
    image: '/images/mimi-chinese1.png'
  },
  {
    name: "Mother's Dumplings",
    cuisine: "Chinese, Dumplings",
    price: "$$",
    path: "/canada/toronto/toronto/mothers-dumplings",
    image: '/images/mothers-dumplings1.png'
  },
  {
    name: "Musoshin Ramen",
    cuisine: "Japanese, Ramen",
    price: "$$",
    path: "/canada/toronto/toronto/musoshin-ramen",
    image: '/images/musoshin-ramen1.png'
  },
  {
    name: "Osteria Giulia",
    cuisine: "Italian, Seafood",
    price: "$$$$",
    path: "/canada/toronto/toronto/osteria-giulia",
    image: '/images/osteria-giulia1.png'
  },
  {
    name: "PAI",
    cuisine: "Northern Thai",
    price: "$$",
    path: "/canada/toronto/toronto/pai",
    image: '/images/pai1.png'
  },
  {
    name: "Parquet",
    cuisine: "French",
    price: "$$$",
    path: "/canada/toronto/toronto/parquet",
    image: '/images/parquet1.png'
  },
  {
    name: "Pho Tien Thanh",
    cuisine: "Vietnamese",
    price: "$$",
    path: "/canada/toronto/toronto/pho-tien-thanh",
    image: '/images/pho-tien-thanh1.png'
  },
  {
    name: "Prime Seafood Palace",
    cuisine: "Steakhouse, Seafood",
    price: "$$$$",
    path: "/canada/toronto/toronto/prime-seafood-palace",
    image: '/images/prime-seafood-palace1.png'
  },
  {
    name: "Puerto Bravo",
    cuisine: "Mexican, Regional Cuisine",
    price: "$$",
    path: "/canada/toronto/toronto/puerto-bravo",
    image: '/images/puerto-bravo1.png'
  },
  {
    name: "Quetzal",
    cuisine: "Mexican",
    price: "$$$$",
    path: "/canada/toronto/toronto/quetzal",
    image: '/images/quetzal1.png'
  },
  {
    name: "Rasa",
    cuisine: "Contemporary",
    price: "$$",
    path: "/canada/toronto/toronto/rasa",
    image: '/images/rasa1.png'
  },
  {
    name: "R&D",
    cuisine: "Fusion, Chinese",
    price: "$$$",
    path: "/canada/toronto/toronto/rd",
    image: '/images/rd1.png'
  },
  {
    name: "Restaurant 20 Victoria",
    cuisine: "Contemporary, Seafood",
    price: "$$$$",
    path: "/canada/toronto/toronto/restaurant-20-victoria",
    image: '/images/restaurant-20-victoria1.png'
  },
  {
    name: "SARA",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/canada/toronto/toronto/sara",
    image: '/images/sara1.png'
  },
  {
    name: "Scaramouche",
    cuisine: "French",
    price: "$$$$",
    path: "/canada/toronto/toronto/scaramouche",
    image: '/images/scaramouche1.png'
  },
  {
    name: "Shoushin",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/canada/toronto/toronto/shoushin",
    image: '/images/shoushin1.png'
  },
  {
    name: "Som Tum Jinda",
    cuisine: "Thai",
    price: "$",
    path: "/canada/toronto/toronto/som-tum-jinda",
    image: '/images/som-tum-jinda1.png'
  },
  {
    name: "SumiLicious Smoked Meat & Deli",
    cuisine: "Deli",
    price: "$",
    path: "/canada/toronto/toronto/sumilicious-smoked-meat-deli",
    image: '/images/sumilicious-smoked-meat-deli1.png'
  },
  {
    name: "Sunnys Chinese",
    cuisine: "Chinese",
    price: "$$",
    path: "/canada/toronto/toronto/sunnys-chinese",
    image: '/images/sunnys-chinese1.png'
  },
  {
    name: "Sushi Masaki Saito",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/canada/toronto/toronto/sushi-masaki-saito",
    image: '/images/sushi-masaki-saito1.png'
  },
  {
    name: "Taline",
    cuisine: "Armenian",
    price: "$$",
    path: "/canada/toronto/toronto/taline",
    image: '/images/taline1.png'
  },
  {
    name: "Ten",
    cuisine: "Contemporary, Vegetarian",
    price: "$$$$",
    path: "/canada/toronto/toronto/ten",
    image: '/images/ten1.png'
  },
  {
    name: "The Ace",
    cuisine: "Gastropub",
    price: "$$",
    path: "/canada/toronto/toronto/the-ace",
    image: '/images/the-ace1.png'
  },
  {
    name: "The Wood Owl",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/canada/toronto/toronto/the-wood-owl",
    image: '/images/the-wood-owl1.png'
  },
  {
    name: "Tiflisi",
    cuisine: "Central Asian",
    price: "$$",
    path: "/canada/toronto/toronto/tiflisi",
    image: '/images/tiflisi1.png'
  },
  {
    name: "Union",
    cuisine: "French",
    price: "$$$",
    path: "/canada/toronto/toronto/union",
    image: '/images/union1.png'
  },
  {
    name: "Vela",
    cuisine: "American, Asian",
    price: "$$$",
    path: "/canada/toronto/toronto/vela",
    image: '/images/vela1.png'
  },
  {
    name: "Viaggio",
    cuisine: "Italian",
    price: "$$",
    path: "/canada/toronto/toronto/viaggio",
    image: '/images/viaggio1.png'
  },
  {
    name: "White Lily Diner",
    cuisine: "Creative, Bakery",
    price: "$$",
    path: "/canada/toronto/toronto/white-lily-diner",
    image: '/images/white-lily-diner1.png'
  },
  {
    name: "Wynona",
    cuisine: "Italian, Mediterranean Cuisine",
    price: "$$",
    path: "/canada/toronto/toronto/wynona",
    image: '/images/wynona1.png'
  },
  {
    name: "Yukashi",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/canada/toronto/toronto/yukashi",
    image: '/images/yukashi1.png'
  },
  {
    name: "Sammarco",
    cuisine: "Steakhouse, Italian Contemporary",
    price: "$$$$",
    path: "/canada/toronto/toronto/sammarco",
    image: '/images/sammarco1.png'
  },
  {
    name: "SARA",
    cuisine: "Contemporary",
    price: "$$$$",
    path: "/canada/toronto/toronto/sara",
    image: '/images/sara1.png'
  },
  {
    name: "Scaramouche",
    cuisine: "French",
    price: "$$$$",
    path: "/canada/toronto/toronto/scaramouche",
    image: '/images/scaramouche1.png'
  },
  {
    name: "Shoushin",
    cuisine: "Japanese, Sushi",
    price: "$$$$",
    path: "/canada/toronto/toronto/shoushin",
    image: '/images/shoushin1.png'
  },
  {
    name: "Som Tum Jinda",
    cuisine: "Thai",
    price: "$",
    path: "/canada/toronto/toronto/som-tum-jinda",
    image: '/images/som-tum-jinda1.png'
  },
  {
    name: "SumiLicious Smoked Meat & Deli",
    cuisine: "Deli",
    price: "$",
    path: "/canada/toronto/toronto/sumilicious-smoked-meat-deli",
    image: '/images/sumilicious-smoked-meat-deli1.png'
  },
  {
    name: "Sunnys Chinese",
    cuisine: "Chinese",
    price: "$$",
    path: "/canada/toronto/toronto/sunnys-chinese",
    image: '/images/sunnys-chinese1.png'
  },
  {
    name: "Sushi Masaki Saito",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/canada/toronto/toronto/sushi-masaki-saito",
    image: '/images/sushi-masaki-saito1.png'
  },
  {
    name: "Taline",
    cuisine: "Armenian",
    price: "$$",
    path: "/canada/toronto/toronto/taline",
    image: '/images/taline1.png'
  },
  {
    name: "Ten",
    cuisine: "Contemporary, Vegetarian",
    price: "$$$$",
    path: "/canada/toronto/toronto/ten",
    image: '/images/ten1.png'
  },
  {
    name: "The Ace",
    cuisine: "Gastropub",
    price: "$$",
    path: "/canada/toronto/toronto/the-ace",
    image: '/images/the-ace1.png'
  },
  {
    name: "The Cottage Cheese",
    cuisine: "Indian",
    price: "$$",
    path: "/canada/toronto/toronto/the-cottage-cheese",
    image: '/images/the-cottage-cheese1.png'
  },
  {
    name: "The Wood Owl",
    cuisine: "Contemporary",
    price: "$$$",
    path: "/canada/toronto/toronto/the-wood-owl",
    image: '/images/the-wood-owl1.png'
  },
  {
    name: "Tiflisi",
    cuisine: "Central Asian",
    price: "$$",
    path: "/canada/toronto/toronto/tiflisi",
    image: '/images/tiflisi1.png'
  },
  {
    name: "Union",
    cuisine: "French",
    price: "$$$",
    path: "/canada/toronto/toronto/union",
    image: '/images/union1.png'
  },
  {
    name: "Vela",
    cuisine: "American, Asian",
    price: "$$$",
    path: "/canada/toronto/toronto/vela",
    image: '/images/vela1.png'
  },
  {
    name: "Viaggio",
    cuisine: "Italian",
    price: "$$",
    path: "/canada/toronto/toronto/viaggio",
    image: '/images/viaggio1.png'
  },
  {
    name: "White Lily Diner",
    cuisine: "Creative, Bakery",
    price: "$$",
    path: "/canada/toronto/toronto/white-lily-diner",
    image: '/images/white-lily-diner1.png'
  },
  {
    name: "Wynona",
    cuisine: "Italian, Mediterranean Cuisine",
    price: "$$",
    path: "/canada/toronto/toronto/wynona",
    image: '/images/wynona1.png'
  },
  {
    name: "Yukashi",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/canada/toronto/toronto/yukashi",
    image: '/images/yukashi1.png'
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
