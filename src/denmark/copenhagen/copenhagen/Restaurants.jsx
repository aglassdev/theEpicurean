import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Copenhagen";

const restaurants = [
  {
    name: "Aamanns 1921",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/aamanns-1921",
    image: '/images/aamanns-19211.png'
  },
  {
    name: "Abigail & Co",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/denmark/copenhagen/copenhagen/abigail-co",
    image: '/images/abigail-co1.png'
  },
  {
    name: "Admiralgade 26",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/admiralgade-26",
    image: '/images/admiralgade-261.png'
  },
  {
    name: "akmē",
    cuisine: "Fusion, Japanese Contemporary",
    price: "€€€",
    path: "/denmark/copenhagen/copenhagen/akm",
    image: '/images/akm1.png'
  },
  {
    name: "Alchemist",
    cuisine: "Creative",
    price: "€€€€",
    path: "/denmark/copenhagen/copenhagen/alchemist",
    image: '/images/alchemist1.png'
  },
  {
    name: "Alouette",
    cuisine: "Modern Cuisine, Creative",
    price: "€€€€",
    path: "/denmark/copenhagen/copenhagen/alouette",
    image: '/images/alouette1.png'
  },
  {
    name: "Amalie",
    cuisine: "Traditional Cuisine",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/amalie",
    image: '/images/amalie1.png'
  },
  {
    name: "Anarki",
    cuisine: "Modern Cuisine",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/anarki",
    image: '/images/anarki1.png'
  },
  {
    name: "a|o|c",
    cuisine: "Creative",
    price: "€€€€",
    path: "/denmark/copenhagen/copenhagen/aoc",
    image: '/images/aoc1.png'
  },
  {
    name: "Ark",
    cuisine: "Vegan",
    price: "€€€",
    path: "/denmark/copenhagen/copenhagen/ark",
    image: '/images/ark1.png'
  },
  {
    name: "Aure",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€€",
    path: "/denmark/copenhagen/copenhagen/aure",
    image: '/images/aure1.png'
  },
  {
    name: "Barr",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/barr",
    image: '/images/barr1.png'
  },
  {
    name: "Bistro Lupa",
    cuisine: "Vegan",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/bistro-lupa",
    image: '/images/bistro-lupa1.png'
  },
  {
    name: "Bjørnekælderen",
    cuisine: "Modern Cuisine",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/bjrneklderen",
    image: '/images/bjrneklderen1.png'
  },
  {
    name: "Bobe",
    cuisine: "Modern Cuisine",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/bobe",
    image: '/images/bobe1.png'
  },
  {
    name: "Calma",
    cuisine: "Modern Cuisine",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/calma",
    image: '/images/calma1.png'
  },
  {
    name: "démodé",
    cuisine: "French",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/dmod",
    image: '/images/dmod1.png'
  },
  {
    name: "Enomania",
    cuisine: "Italian",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/enomania",
    image: '/images/enomania1.png'
  },
  {
    name: "Fasangården",
    cuisine: "Danish",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/fasangrden",
    image: '/images/fasangrden1.png'
  },
  {
    name: "formel B",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/denmark/copenhagen/copenhagen/formel-b",
    image: '/images/formel-b1.png'
  },
  {
    name: "Gabrielle",
    cuisine: "French",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/gabrielle",
    image: '/images/gabrielle1.png'
  },
  {
    name: "Geranium",
    cuisine: "Creative, Contemporary",
    price: "€€€€",
    path: "/denmark/copenhagen/copenhagen/geranium",
    image: '/images/geranium1.png'
  },
  {
    name: "Høst",
    cuisine: "Modern Cuisine",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/hst",
    image: '/images/hst1.png'
  },
  {
    name: "Jatak",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/denmark/copenhagen/copenhagen/jatak",
    image: '/images/jatak1.png'
  },
  {
    name: "Kadeau Copenhagen",
    cuisine: "Creative",
    price: "€€€€",
    path: "/denmark/copenhagen/copenhagen/kadeau-copenhagen",
    image: '/images/kadeau-copenhagen1.png'
  },
  {
    name: "Kanalen",
    cuisine: "Danish, Seasonal Cuisine",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/kanalen",
    image: '/images/kanalen1.png'
  },
  {
    name: "Kappo Andō",
    cuisine: "Japanese",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/kappo-and",
    image: '/images/kappo-and1.png'
  },
  {
    name: "Kødbyens Fiskebar",
    cuisine: "Seafood",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/kdbyens-fiskebar",
    image: '/images/kdbyens-fiskebar1.png'
  },
  {
    name: "Kiin Kiin",
    cuisine: "Thai, Contemporary",
    price: "€€€",
    path: "/denmark/copenhagen/copenhagen/kiin-kiin",
    image: '/images/kiin-kiin1.png'
  },
  {
    name: "Kiin Kiin VeVe",
    cuisine: "Vegetarian, Creative",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/kiin-kiin-veve",
    image: '/images/kiin-kiin-veve1.png'
  },
  {
    name: "Koan",
    cuisine: "Creative",
    price: "€€€€",
    path: "/denmark/copenhagen/copenhagen/koan",
    image: '/images/koan1.png'
  },
  {
    name: "Koefoed",
    cuisine: "Modern Cuisine",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/koefoed",
    image: '/images/koefoed1.png'
  },
  {
    name: "Kong Hans Kælder",
    cuisine: "Modern French, Seasonal Cuisine",
    price: "€€€€",
    path: "/denmark/copenhagen/copenhagen/kong-hans-klder",
    image: '/images/kong-hans-klder1.png'
  },
  {
    name: "Levi",
    cuisine: "Italian and Japanese",
    price: "€€€",
    path: "/denmark/copenhagen/copenhagen/levi",
    image: '/images/levi1.png'
  },
  {
    name: "Marchal",
    cuisine: "Modern Cuisine, French Contemporary",
    price: "€€€",
    path: "/denmark/copenhagen/copenhagen/marchal",
    image: '/images/marchal1.png'
  },
  {
    name: "Mark",
    cuisine: "Danish, Country cooking",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/mark",
    image: '/images/mark1.png'
  },
  {
    name: "Marv & Ben",
    cuisine: "Modern Cuisine",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/marv-ben",
    image: '/images/marv-ben1.png'
  },
  {
    name: "Mielcke & Hurtigkarl",
    cuisine: "Creative",
    price: "€€€€",
    path: "/denmark/copenhagen/copenhagen/mielcke-hurtigkarl",
    image: '/images/mielcke-hurtigkarl1.png'
  },
  {
    name: "Mêlée",
    cuisine: "French",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/mle",
    image: '/images/mle1.png'
  },
  {
    name: "Møntergade",
    cuisine: "Smørrebrød",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/mntergade",
    image: '/images/mntergade1.png'
  },
  {
    name: "no.2",
    cuisine: "Modern Cuisine",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/no2",
    image: '/images/no21.png'
  },
  {
    name: "Norrlyst",
    cuisine: "Danish",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/norrlyst",
    image: '/images/norrlyst1.png'
  },
  {
    name: "Paesàno",
    cuisine: "Italian",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/paesno",
    image: '/images/paesno1.png'
  },
  {
    name: "Pluto",
    cuisine: "Classic Cuisine",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/pluto",
    image: '/images/pluto1.png'
  },
  {
    name: "Aamanns 1921",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/aamanns-1921",
    image: '/images/aamanns-19211.png'
  },
  {
    name: "Abigail & Co",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/denmark/copenhagen/copenhagen/abigail-co",
    image: '/images/abigail-co1.png'
  },
  {
    name: "Radio",
    cuisine: "Modern Cuisine",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/radio",
    image: '/images/radio1.png'
  },
  {
    name: "Admiralgade 26",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/admiralgade-26",
    image: '/images/admiralgade-261.png'
  },
  {
    name: "akmē",
    cuisine: "Fusion, Japanese Contemporary",
    price: "€€€",
    path: "/denmark/copenhagen/copenhagen/akm",
    image: '/images/akm1.png'
  },
  {
    name: "Alchemist",
    cuisine: "Creative",
    price: "€€€€",
    path: "/denmark/copenhagen/copenhagen/alchemist",
    image: '/images/alchemist1.png'
  },
  {
    name: "Alouette",
    cuisine: "Modern Cuisine, Creative",
    price: "€€€€",
    path: "/denmark/copenhagen/copenhagen/alouette",
    image: '/images/alouette1.png'
  },
  {
    name: "Amalie",
    cuisine: "Traditional Cuisine",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/amalie",
    image: '/images/amalie1.png'
  },
  {
    name: "Anarki",
    cuisine: "Modern Cuisine",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/anarki",
    image: '/images/anarki1.png'
  },
  {
    name: "a|o|c",
    cuisine: "Creative",
    price: "€€€€",
    path: "/denmark/copenhagen/copenhagen/aoc",
    image: '/images/aoc1.png'
  },
  {
    name: "Ark",
    cuisine: "Vegan",
    price: "€€€",
    path: "/denmark/copenhagen/copenhagen/ark",
    image: '/images/ark1.png'
  },
  {
    name: "Aure",
    cuisine: "Creative, Modern Cuisine",
    price: "€€€€",
    path: "/denmark/copenhagen/copenhagen/aure",
    image: '/images/aure1.png'
  },
  {
    name: "Barr",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/barr",
    image: '/images/barr1.png'
  },
  {
    name: "Bistro Lupa",
    cuisine: "Vegan",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/bistro-lupa",
    image: '/images/bistro-lupa1.png'
  },
  {
    name: "Bjørnekælderen",
    cuisine: "Modern Cuisine",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/bjrneklderen",
    image: '/images/bjrneklderen1.png'
  },
  {
    name: "Bobe",
    cuisine: "Modern Cuisine",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/bobe",
    image: '/images/bobe1.png'
  },
  {
    name: "Calma",
    cuisine: "Modern Cuisine",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/calma",
    image: '/images/calma1.png'
  },
  {
    name: "démodé",
    cuisine: "French",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/dmod",
    image: '/images/dmod1.png'
  },
  {
    name: "Rebel",
    cuisine: "Modern Cuisine",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/rebel",
    image: '/images/rebel1.png'
  },
  {
    name: "Enomania",
    cuisine: "Italian",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/enomania",
    image: '/images/enomania1.png'
  },
  {
    name: "Restaurant Anton",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/restaurant-anton",
    image: '/images/restaurant-anton1.png'
  },
  {
    name: "Restaurant Frank",
    cuisine: "Modern Cuisine, Contemporary",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/restaurant-frank",
    image: '/images/restaurant-frank1.png'
  },
  {
    name: "Restaurant Glassalen",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/restaurant-glassalen",
    image: '/images/restaurant-glassalen1.png'
  },
  {
    name: "Restaurant Kanalen",
    cuisine: "Danish, Seasonal Cuisine",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/restaurant-kanalen",
    image: '/images/restaurant-kanalen1.png'
  },
  {
    name: "Restaurant Palægade",
    cuisine: "Smørrebrød, Danish",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/restaurant-palgade",
    image: '/images/restaurant-palgade1.png'
  },
  {
    name: "Restaurant VIE",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/restaurant-vie",
    image: '/images/restaurant-vie1.png'
  },
  {
    name: "Fasangården",
    cuisine: "Danish",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/fasangrden",
    image: '/images/fasangrden1.png'
  },
  {
    name: "formel B",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/denmark/copenhagen/copenhagen/formel-b",
    image: '/images/formel-b1.png'
  },
  {
    name: "Gabrielle",
    cuisine: "French",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/gabrielle",
    image: '/images/gabrielle1.png'
  },
  {
    name: "Geranium",
    cuisine: "Creative, Contemporary",
    price: "€€€€",
    path: "/denmark/copenhagen/copenhagen/geranium",
    image: '/images/geranium1.png'
  },
  {
    name: "Høst",
    cuisine: "Modern Cuisine",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/hst",
    image: '/images/hst1.png'
  },
  {
    name: "Jatak",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/denmark/copenhagen/copenhagen/jatak",
    image: '/images/jatak1.png'
  },
  {
    name: "Kadeau Copenhagen",
    cuisine: "Creative",
    price: "€€€€",
    path: "/denmark/copenhagen/copenhagen/kadeau-copenhagen",
    image: '/images/kadeau-copenhagen1.png'
  },
  {
    name: "Kanalen",
    cuisine: "Danish, Seasonal Cuisine",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/kanalen",
    image: '/images/kanalen1.png'
  },
  {
    name: "Kappo Andō",
    cuisine: "Japanese",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/kappo-and",
    image: '/images/kappo-and1.png'
  },
  {
    name: "Kødbyens Fiskebar",
    cuisine: "Seafood",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/kdbyens-fiskebar",
    image: '/images/kdbyens-fiskebar1.png'
  },
  {
    name: "Kiin Kiin",
    cuisine: "Thai, Contemporary",
    price: "€€€",
    path: "/denmark/copenhagen/copenhagen/kiin-kiin",
    image: '/images/kiin-kiin1.png'
  },
  {
    name: "Kiin Kiin VeVe",
    cuisine: "Vegetarian, Creative",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/kiin-kiin-veve",
    image: '/images/kiin-kiin-veve1.png'
  },
  {
    name: "Koan",
    cuisine: "Creative",
    price: "€€€€",
    path: "/denmark/copenhagen/copenhagen/koan",
    image: '/images/koan1.png'
  },
  {
    name: "Koefoed",
    cuisine: "Modern Cuisine",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/koefoed",
    image: '/images/koefoed1.png'
  },
  {
    name: "Kong Hans Kælder",
    cuisine: "Modern French, Seasonal Cuisine",
    price: "€€€€",
    path: "/denmark/copenhagen/copenhagen/kong-hans-klder",
    image: '/images/kong-hans-klder1.png'
  },
  {
    name: "Levi",
    cuisine: "Italian and Japanese",
    price: "€€€",
    path: "/denmark/copenhagen/copenhagen/levi",
    image: '/images/levi1.png'
  },
  {
    name: "Marchal",
    cuisine: "Modern Cuisine, French Contemporary",
    price: "€€€",
    path: "/denmark/copenhagen/copenhagen/marchal",
    image: '/images/marchal1.png'
  },
  {
    name: "Mark",
    cuisine: "Danish, Country cooking",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/mark",
    image: '/images/mark1.png'
  },
  {
    name: "Marv & Ben",
    cuisine: "Modern Cuisine",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/marv-ben",
    image: '/images/marv-ben1.png'
  },
  {
    name: "Mielcke & Hurtigkarl",
    cuisine: "Creative",
    price: "€€€€",
    path: "/denmark/copenhagen/copenhagen/mielcke-hurtigkarl",
    image: '/images/mielcke-hurtigkarl1.png'
  },
  {
    name: "Mêlée",
    cuisine: "French",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/mle",
    image: '/images/mle1.png'
  },
  {
    name: "Møntergade",
    cuisine: "Smørrebrød",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/mntergade",
    image: '/images/mntergade1.png'
  },
  {
    name: "no.2",
    cuisine: "Modern Cuisine",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/no2",
    image: '/images/no21.png'
  },
  {
    name: "noma",
    cuisine: "Creative",
    price: "€€€€",
    path: "/denmark/copenhagen/copenhagen/noma",
    image: '/images/noma1.png'
  },
  {
    name: "Norrlyst",
    cuisine: "Danish",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/norrlyst",
    image: '/images/norrlyst1.png'
  },
  {
    name: "Paesàno",
    cuisine: "Italian",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/paesno",
    image: '/images/paesno1.png'
  },
  {
    name: "Pluto",
    cuisine: "Classic Cuisine",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/pluto",
    image: '/images/pluto1.png'
  },
  {
    name: "Radio",
    cuisine: "Modern Cuisine",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/radio",
    image: '/images/radio1.png'
  },
  {
    name: "Rebel",
    cuisine: "Modern Cuisine",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/rebel",
    image: '/images/rebel1.png'
  },
  {
    name: "Restaurant Anton",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/restaurant-anton",
    image: '/images/restaurant-anton1.png'
  },
  {
    name: "Restaurant Frank",
    cuisine: "Modern Cuisine, Contemporary",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/restaurant-frank",
    image: '/images/restaurant-frank1.png'
  },
  {
    name: "Restaurant Glassalen",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/restaurant-glassalen",
    image: '/images/restaurant-glassalen1.png'
  },
  {
    name: "Restaurant Palægade",
    cuisine: "Smørrebrød, Danish",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/restaurant-palgade",
    image: '/images/restaurant-palgade1.png'
  },
  {
    name: "Restaurant VIE",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/restaurant-vie",
    image: '/images/restaurant-vie1.png'
  },
  {
    name: "Sanchez",
    cuisine: "Mexican",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/sanchez",
    image: '/images/sanchez1.png'
  },
  {
    name: "Sankt Annæ",
    cuisine: "Smørrebrød",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/sankt-ann",
    image: '/images/sankt-ann1.png'
  },
  {
    name: "Selma",
    cuisine: "Smørrebrød, Seasonal Cuisine",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/selma",
    image: '/images/selma1.png'
  },
  {
    name: "Silberbauers Bistro",
    cuisine: "French",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/silberbauers-bistro",
    image: '/images/silberbauers-bistro1.png'
  },
  {
    name: "Søllerød Kro",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/denmark/copenhagen/copenhagen/sllerd-kro",
    image: '/images/sllerd-kro1.png'
  },
  {
    name: "Sushi Anaba",
    cuisine: "Japanese",
    price: "€€€€",
    path: "/denmark/copenhagen/copenhagen/sushi-anaba",
    image: '/images/sushi-anaba1.png'
  },
  {
    name: "à terre",
    cuisine: "French",
    price: "€€€",
    path: "/denmark/copenhagen/copenhagen/terre",
    image: '/images/terre1.png'
  },
  {
    name: "texture",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/denmark/copenhagen/copenhagen/texture",
    image: '/images/texture1.png'
  },
  {
    name: "Theo",
    cuisine: "Contemporary, European Contemporary",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/theo",
    image: '/images/theo1.png'
  },
  {
    name: "The Pescatarian",
    cuisine: "Creative, Contemporary",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/the-pescatarian",
    image: '/images/the-pescatarian1.png'
  },
  {
    name: "Trio",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/trio",
    image: '/images/trio1.png'
  },
  {
    name: "Tèrra",
    cuisine: "Modern Cuisine, Organic",
    price: "€€€",
    path: "/denmark/copenhagen/copenhagen/trra",
    image: '/images/trra1.png'
  },
  {
    name: "Udtryk",
    cuisine: "Creative",
    price: "€€€",
    path: "/denmark/copenhagen/copenhagen/udtryk",
    image: '/images/udtryk1.png'
  },
  {
    name: "Uformel",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/uformel",
    image: '/images/uformel1.png'
  },
  {
    name: "Vækst",
    cuisine: "Modern Cuisine",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/vkst",
    image: '/images/vkst1.png'
  },
  {
    name: "Sanchez",
    cuisine: "Mexican",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/sanchez",
    image: '/images/sanchez1.png'
  },
  {
    name: "Sankt Annæ",
    cuisine: "Smørrebrød",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/sankt-ann",
    image: '/images/sankt-ann1.png'
  },
  {
    name: "Selma",
    cuisine: "Smørrebrød, Seasonal Cuisine",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/selma",
    image: '/images/selma1.png'
  },
  {
    name: "Silberbauers Bistro",
    cuisine: "French",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/silberbauers-bistro",
    image: '/images/silberbauers-bistro1.png'
  },
  {
    name: "Søllerød Kro",
    cuisine: "Modern Cuisine",
    price: "€€€",
    path: "/denmark/copenhagen/copenhagen/sllerd-kro",
    image: '/images/sllerd-kro1.png'
  },
  {
    name: "Sushi Anaba",
    cuisine: "Japanese",
    price: "€€€€",
    path: "/denmark/copenhagen/copenhagen/sushi-anaba",
    image: '/images/sushi-anaba1.png'
  },
  {
    name: "à terre",
    cuisine: "French",
    price: "€€€",
    path: "/denmark/copenhagen/copenhagen/terre",
    image: '/images/terre1.png'
  },
  {
    name: "à terre",
    cuisine: "French",
    price: "€€€",
    path: "/denmark/copenhagen/copenhagen/terre",
    image: '/images/terre1.png'
  },
  {
    name: "texture",
    cuisine: "Modern Cuisine",
    price: "€€€€",
    path: "/denmark/copenhagen/copenhagen/texture",
    image: '/images/texture1.png'
  },
  {
    name: "The Pescatarian",
    cuisine: "Creative, Contemporary",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/the-pescatarian",
    image: '/images/the-pescatarian1.png'
  },
  {
    name: "Theo",
    cuisine: "Contemporary, European Contemporary",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/theo",
    image: '/images/theo1.png'
  },
  {
    name: "Trio",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/trio",
    image: '/images/trio1.png'
  },
  {
    name: "Tèrra",
    cuisine: "Modern Cuisine, Organic",
    price: "€€€",
    path: "/denmark/copenhagen/copenhagen/trra",
    image: '/images/trra1.png'
  },
  {
    name: "Udtryk",
    cuisine: "Creative",
    price: "€€€",
    path: "/denmark/copenhagen/copenhagen/udtryk",
    image: '/images/udtryk1.png'
  },
  {
    name: "Uformel",
    cuisine: "Modern Cuisine",
    price: "€€",
    path: "/denmark/copenhagen/copenhagen/uformel",
    image: '/images/uformel1.png'
  },
  {
    name: "Vækst",
    cuisine: "Modern Cuisine",
    price: "€",
    path: "/denmark/copenhagen/copenhagen/vkst",
    image: '/images/vkst1.png'
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
