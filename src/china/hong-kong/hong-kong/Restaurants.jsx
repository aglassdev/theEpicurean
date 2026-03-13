import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Hong Kong";

const restaurants = [
  {
    name: "8 1/2 Otto e Mezzo - Bombana",
    cuisine: "Italian",
    price: "$$$$",
    path: "/china/hong-kong/hong-kong/8-12-otto-e-mezzo-bombana",
    image: '/images/8-12-otto-e-mezzo-bombana1.png'
  },
  {
    name: "Above & Beyond",
    cuisine: "Cantonese",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/above-beyond",
    image: '/images/above-beyond1.png'
  },
  {
    name: "Ah Chun Shandong Dumpling",
    cuisine: "Dumplings",
    price: "$",
    path: "/china/hong-kong/hong-kong/ah-chun-shandong-dumpling",
    image: '/images/ah-chun-shandong-dumpling1.png'
  },
  {
    name: "Ah Chun Shandong Dumpling (Prince Edward)",
    cuisine: "Dumplings",
    price: "$",
    path: "/china/hong-kong/hong-kong/ah-chun-shandong-dumpling-prince-edward",
    image: '/images/ah-chun-shandong-dumpling-prince-edward1.png'
  },
  {
    name: "Akira Back",
    cuisine: "Asian Contemporary",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/akira-back",
    image: '/images/akira-back1.png'
  },
  {
    name: "Amber",
    cuisine: "French Contemporary",
    price: "$$$$",
    path: "/china/hong-kong/hong-kong/amber",
    image: '/images/amber1.png'
  },
  {
    name: "Ami",
    cuisine: "French Contemporary",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/ami",
    image: '/images/ami1.png'
  },
  {
    name: "Andō",
    cuisine: "Innovative",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/and",
    image: '/images/and1.png'
  },
  {
    name: "Ankôma",
    cuisine: "European Contemporary",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/ankma",
    image: '/images/ankma1.png'
  },
  {
    name: "Arbor",
    cuisine: "Innovative",
    price: "$$$$",
    path: "/china/hong-kong/hong-kong/arbor",
    image: '/images/arbor1.png'
  },
  {
    name: "Arcane",
    cuisine: "European Contemporary",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/arcane",
    image: '/images/arcane1.png'
  },
  {
    name: "Art & Taste",
    cuisine: "Taiwanese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/art-taste",
    image: '/images/art-taste1.png'
  },
  {
    name: "Ba Yi",
    cuisine: "Xinjiang",
    price: "$$",
    path: "/china/hong-kong/hong-kong/ba-yi",
    image: '/images/ba-yi1.png'
  },
  {
    name: "Banana Boy",
    cuisine: "Street Food",
    price: "$",
    path: "/china/hong-kong/hong-kong/banana-boy",
    image: '/images/banana-boy1.png'
  },
  {
    name: "Beanmountain",
    cuisine: "Street Food",
    price: "$",
    path: "/china/hong-kong/hong-kong/beanmountain",
    image: '/images/beanmountain1.png'
  },
  {
    name: "Beefbar",
    cuisine: "Steakhouse",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/beefbar",
    image: '/images/beefbar1.png'
  },
  {
    name: "Belon",
    cuisine: "French Contemporary",
    price: "$$$$",
    path: "/china/hong-kong/hong-kong/belon",
    image: '/images/belon1.png'
  },
  {
    name: "Bánh Mì Nếm (Wan Chai)",
    cuisine: "Street Food",
    price: "$",
    path: "/china/hong-kong/hong-kong/bnh-m-nm-wan-chai",
    image: '/images/bnh-m-nm-wan-chai1.png'
  },
  {
    name: "Bo Innovation",
    cuisine: "Innovative",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/bo-innovation",
    image: '/images/bo-innovation1.png'
  },
  {
    name: "Café Hunan (Western District)",
    cuisine: "Hunanese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/caf-hunan-western-district",
    image: '/images/caf-hunan-western-district1.png'
  },
  {
    name: "Cafe Bau",
    cuisine: "European Contemporary",
    price: "$$",
    path: "/china/hong-kong/hong-kong/cafe-bau",
    image: '/images/cafe-bau1.png'
  },
  {
    name: "Caprice",
    cuisine: "French Contemporary",
    price: "$$$$",
    path: "/china/hong-kong/hong-kong/caprice",
    image: '/images/caprice1.png'
  },
  {
    name: "Carbone",
    cuisine: "Italian-American",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/carbone",
    image: '/images/carbone1.png'
  },
  {
    name: "Carna by Dario Cecchini",
    cuisine: "Steakhouse",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/carna-by-dario-cecchini",
    image: '/images/carna-by-dario-cecchini1.png'
  },
  {
    name: "Celestial Court",
    cuisine: "Cantonese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/celestial-court",
    image: '/images/celestial-court1.png'
  },
  {
    name: "Chaat",
    cuisine: "Indian",
    price: "$$",
    path: "/china/hong-kong/hong-kong/chaat",
    image: '/images/chaat1.png'
  },
  {
    name: "Chesa",
    cuisine: "Swiss",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/chesa",
    image: '/images/chesa1.png'
  },
  {
    name: "Cheung Hing Kee (Tsim Sha Tsui)",
    cuisine: "Street Food",
    price: "$",
    path: "/china/hong-kong/hong-kong/cheung-hing-kee-tsim-sha-tsui",
    image: '/images/cheung-hing-kee-tsim-sha-tsui1.png'
  },
  {
    name: "Chiu Ka Banquet",
    cuisine: "Chiu Chow",
    price: "$$",
    path: "/china/hong-kong/hong-kong/chiu-ka-banquet",
    image: '/images/chiu-ka-banquet1.png'
  },
  {
    name: "Chiuchow Delicacies",
    cuisine: "Chiu Chow",
    price: "$$",
    path: "/china/hong-kong/hong-kong/chiuchow-delicacies",
    image: '/images/chiuchow-delicacies1.png'
  },
  {
    name: "Chuen Kee Seafood (Hoi Pong Street)",
    cuisine: "Seafood",
    price: "$$",
    path: "/china/hong-kong/hong-kong/chuen-kee-seafood-hoi-pong-street",
    image: '/images/chuen-kee-seafood-hoi-pong-street1.png'
  },
  {
    name: "Citrino da Yoshinaga Jinbo",
    cuisine: "Italian Contemporary",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/citrino-da-yoshinaga-jinbo",
    image: '/images/citrino-da-yoshinaga-jinbo1.png'
  },
  {
    name: "Cristal Room by Anne-Sophie Pic",
    cuisine: "French Contemporary",
    price: "$$$$",
    path: "/china/hong-kong/hong-kong/cristal-room-by-anne-sophie-pic",
    image: '/images/cristal-room-by-anne-sophie-pic1.png'
  },
  {
    name: "Cuisine Cuisine at The Mira",
    cuisine: "Cantonese",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/cuisine-cuisine-at-the-mira",
    image: '/images/cuisine-cuisine-at-the-mira1.png'
  },
  {
    name: "Din Tai Fung (Causeway Bay)",
    cuisine: "Shanghainese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/din-tai-fung-causeway-bay",
    image: '/images/din-tai-fung-causeway-bay1.png'
  },
  {
    name: "Din Tai Fung (Tsim Sha Tsui)",
    cuisine: "Shanghainese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/din-tai-fung-tsim-sha-tsui",
    image: '/images/din-tai-fung-tsim-sha-tsui1.png'
  },
  {
    name: "Dragon Inn",
    cuisine: "Seafood",
    price: "$$",
    path: "/china/hong-kong/hong-kong/dragon-inn",
    image: '/images/dragon-inn1.png'
  },
  {
    name: "Dragons' Den",
    cuisine: "Cantonese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/dragons-den",
    image: '/images/dragons-den1.png'
  },
  {
    name: "Duddell's",
    cuisine: "Cantonese",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/duddells",
    image: '/images/duddells1.png'
  },
  {
    name: "Eng Kee Noodle Shop",
    cuisine: "Noodles",
    price: "$",
    path: "/china/hong-kong/hong-kong/eng-kee-noodle-shop",
    image: '/images/eng-kee-noodle-shop1.png'
  },
  {
    name: "Estro",
    cuisine: "Italian",
    price: "$$$$",
    path: "/china/hong-kong/hong-kong/estro",
    image: '/images/estro1.png'
  },
  {
    name: "Eton",
    cuisine: "Shun Tak",
    price: "$$",
    path: "/china/hong-kong/hong-kong/eton",
    image: '/images/eton1.png'
  },
  {
    name: "Farm House",
    cuisine: "Cantonese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/farm-house",
    image: '/images/farm-house1.png'
  },
  {
    name: "Fat Boy",
    cuisine: "Street Food",
    price: "$",
    path: "/china/hong-kong/hong-kong/fat-boy",
    image: '/images/fat-boy1.png'
  },
  {
    name: "Feuille",
    cuisine: "French Contemporary",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/feuille",
    image: '/images/feuille1.png'
  },
  {
    name: "Fiata",
    cuisine: "Pizza",
    price: "$$",
    path: "/china/hong-kong/hong-kong/fiata",
    image: '/images/fiata1.png'
  },
  {
    name: "Fishball Man (To Kwa Wan)",
    cuisine: "Street Food",
    price: "$",
    path: "/china/hong-kong/hong-kong/fishball-man-to-kwa-wan",
    image: '/images/fishball-man-to-kwa-wan1.png'
  },
  {
    name: "Fisholic (North Point)",
    cuisine: "Street Food",
    price: "$",
    path: "/china/hong-kong/hong-kong/fisholic-north-point",
    image: '/images/fisholic-north-point1.png'
  },
  {
    name: "Fook Lam Moon (Wan Chai)",
    cuisine: "Cantonese",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/fook-lam-moon-wan-chai",
    image: '/images/fook-lam-moon-wan-chai1.png'
  },
  {
    name: "Forum",
    cuisine: "Cantonese",
    price: "$$$$",
    path: "/china/hong-kong/hong-kong/forum",
    image: '/images/forum1.png'
  },
  {
    name: "Fu Ho",
    cuisine: "Cantonese",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/fu-ho",
    image: '/images/fu-ho1.png'
  },
  {
    name: "Fung Shing (North Point)",
    cuisine: "Shun Tak",
    price: "$$",
    path: "/china/hong-kong/hong-kong/fung-shing-north-point",
    image: '/images/fung-shing-north-point1.png'
  },
  {
    name: "Gaddi's",
    cuisine: "French",
    price: "$$$$",
    path: "/china/hong-kong/hong-kong/gaddis",
    image: '/images/gaddis1.png'
  },
  {
    name: "Glorious Cuisine",
    cuisine: "Cantonese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/glorious-cuisine",
    image: '/images/glorious-cuisine1.png'
  },
  {
    name: "Godenya",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/china/hong-kong/hong-kong/godenya",
    image: '/images/godenya1.png'
  },
  {
    name: "Hansik Goo",
    cuisine: "Korean",
    price: "$$$$",
    path: "/china/hong-kong/hong-kong/hansik-goo",
    image: '/images/hansik-goo1.png'
  },
  {
    name: "Hao Tang Hao Mian (Tai Wai)",
    cuisine: "Noodles",
    price: "$$",
    path: "/china/hong-kong/hong-kong/hao-tang-hao-mian-tai-wai",
    image: '/images/hao-tang-hao-mian-tai-wai1.png'
  },
  {
    name: "Hau Tak",
    cuisine: "Cantonese",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/hau-tak",
    image: '/images/hau-tak1.png'
  },
  {
    name: "Heartwarming (Prince Edward)",
    cuisine: "Street Food",
    price: "$",
    path: "/china/hong-kong/hong-kong/heartwarming-prince-edward",
    image: '/images/heartwarming-prince-edward1.png'
  },
  {
    name: "Heimat",
    cuisine: "German",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/heimat",
    image: '/images/heimat1.png'
  },
  {
    name: "Heimat",
    cuisine: "German",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/heimat",
    image: '/images/heimat1.png'
  },
  {
    name: "Hing Kee",
    cuisine: "Seafood",
    price: "$$",
    path: "/china/hong-kong/hong-kong/hing-kee",
    image: '/images/hing-kee1.png'
  },
  {
    name: "Ho Ho Chak",
    cuisine: "Chiu Chow",
    price: "$$",
    path: "/china/hong-kong/hong-kong/ho-ho-chak",
    image: '/images/ho-ho-chak1.png'
  },
  {
    name: "Ho Hung Kee (Causeway Bay)",
    cuisine: "Noodles and Congee",
    price: "$$",
    path: "/china/hong-kong/hong-kong/ho-hung-kee-causeway-bay",
    image: '/images/ho-hung-kee-causeway-bay1.png'
  },
  {
    name: "Ho Kee Dessert (To Kwa Wan)",
    cuisine: "Street Food",
    price: "$",
    path: "/china/hong-kong/hong-kong/ho-kee-dessert-to-kwa-wan",
    image: '/images/ho-kee-dessert-to-kwa-wan1.png'
  },
  {
    name: "Ho Lee Fook",
    cuisine: "Cantonese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/ho-lee-fook",
    image: '/images/ho-lee-fook1.png'
  },
  {
    name: "Ho To Tai",
    cuisine: "Noodles",
    price: "$",
    path: "/china/hong-kong/hong-kong/ho-to-tai",
    image: '/images/ho-to-tai1.png'
  },
  {
    name: "Hong Kong Cuisine",
    cuisine: "Chinese Contemporary",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/hong-kong-cuisine",
    image: '/images/hong-kong-cuisine1.png'
  },
  {
    name: "Hop Yik Tai",
    cuisine: "Street Food",
    price: "$",
    path: "/china/hong-kong/hong-kong/hop-yik-tai",
    image: '/images/hop-yik-tai1.png'
  },
  {
    name: "Hung Hom Pancake",
    cuisine: "Street Food",
    price: "$",
    path: "/china/hong-kong/hong-kong/hung-hom-pancake",
    image: '/images/hung-hom-pancake1.png'
  },
  {
    name: "Hung's Delicacies",
    cuisine: "Chiu Chow",
    price: "$$",
    path: "/china/hong-kong/hong-kong/hungs-delicacies",
    image: '/images/hungs-delicacies1.png'
  },
  {
    name: "Hyde Park Garden",
    cuisine: "Seafood",
    price: "$$",
    path: "/china/hong-kong/hong-kong/hyde-park-garden",
    image: '/images/hyde-park-garden1.png'
  },
  {
    name: "I M Teppanyaki & Wine",
    cuisine: "Teppanyaki",
    price: "$$$$",
    path: "/china/hong-kong/hong-kong/i-m-teppanyaki-wine",
    image: '/images/i-m-teppanyaki-wine1.png'
  },
  {
    name: "Imperial Treasure Fine Chinese Cuisine (Tsim Sha Tsui)",
    cuisine: "Cantonese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/imperial-treasure-fine-chinese-cuisine-tsim-sha-tsui",
    image: '/images/imperial-treasure-fine-chinese-cuisine-tsim-sha-tsui1.png'
  },
  {
    name: "Involtini",
    cuisine: "Italian",
    price: "$$",
    path: "/china/hong-kong/hong-kong/involtini",
    image: '/images/involtini1.png'
  },
  {
    name: "Ippoh",
    cuisine: "Tempura",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/ippoh",
    image: '/images/ippoh1.png'
  },
  {
    name: "Jardin de Jade (Wan Chai)",
    cuisine: "Shanghainese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/jardin-de-jade-wan-chai",
    image: '/images/jardin-de-jade-wan-chai1.png'
  },
  {
    name: "Jean-Pierre",
    cuisine: "French",
    price: "$$",
    path: "/china/hong-kong/hong-kong/jean-pierre",
    image: '/images/jean-pierre1.png'
  },
  {
    name: "Jee",
    cuisine: "Innovative",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/jee",
    image: '/images/jee1.png'
  },
  {
    name: "Jija",
    cuisine: "Innovative",
    price: "$$",
    path: "/china/hong-kong/hong-kong/jija",
    image: '/images/jija1.png'
  },
  {
    name: "Ju Xing Home",
    cuisine: "Cantonese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/ju-xing-home",
    image: '/images/ju-xing-home1.png'
  },
  {
    name: "Juno",
    cuisine: "Mediterranean Cuisine",
    price: "$$",
    path: "/china/hong-kong/hong-kong/juno",
    image: '/images/juno1.png'
  },
  {
    name: "Kai Kai (Jordan)",
    cuisine: "Street Food",
    price: "$",
    path: "/china/hong-kong/hong-kong/kai-kai-jordan",
    image: '/images/kai-kai-jordan1.png'
  },
  {
    name: "Kam's Roast Goose",
    cuisine: "Cantonese Roast Meats",
    price: "$$",
    path: "/china/hong-kong/hong-kong/kams-roast-goose",
    image: '/images/kams-roast-goose1.png'
  },
  {
    name: "Kappo Rin",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/china/hong-kong/hong-kong/kappo-rin",
    image: '/images/kappo-rin1.png'
  },
  {
    name: "Kau Kee",
    cuisine: "Noodles",
    price: "$",
    path: "/china/hong-kong/hong-kong/kau-kee",
    image: '/images/kau-kee1.png'
  },
  {
    name: "Keung Kee",
    cuisine: "Street Food",
    price: "$",
    path: "/china/hong-kong/hong-kong/keung-kee",
    image: '/images/keung-kee1.png'
  },
  {
    name: "Ki Tsui",
    cuisine: "Street Food",
    price: "$",
    path: "/china/hong-kong/hong-kong/ki-tsui",
    image: '/images/ki-tsui1.png'
  },
  {
    name: "Kicho",
    cuisine: "Yakitori",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/kicho",
    image: '/images/kicho1.png'
  },
  {
    name: "Kung Wo Beancurd Factory",
    cuisine: "Street Food",
    price: "$",
    path: "/china/hong-kong/hong-kong/kung-wo-beancurd-factory",
    image: '/images/kung-wo-beancurd-factory1.png'
  },
  {
    name: "Kwan Kee Bamboo Noodles",
    cuisine: "Noodles",
    price: "$",
    path: "/china/hong-kong/hong-kong/kwan-kee-bamboo-noodles",
    image: '/images/kwan-kee-bamboo-noodles1.png'
  },
  {
    name: "Kwan Kee Clay Pot Rice (Queen's Road West)",
    cuisine: "Cantonese",
    price: "$",
    path: "/china/hong-kong/hong-kong/kwan-kee-clay-pot-rice-queens-road-west",
    image: '/images/kwan-kee-clay-pot-rice-queens-road-west1.png'
  },
  {
    name: "La Volta",
    cuisine: "Italian",
    price: "$$",
    path: "/china/hong-kong/hong-kong/la-volta",
    image: '/images/la-volta1.png'
  },
  {
    name: "Lai Ching Heen",
    cuisine: "Cantonese",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/lai-ching-heen",
    image: '/images/lai-ching-heen1.png'
  },
  {
    name: "Lai's Kitchen",
    cuisine: "Cantonese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/lais-kitchen",
    image: '/images/lais-kitchen1.png'
  },
  {
    name: "L'Atelier de Joël Robuchon",
    cuisine: "French Contemporary",
    price: "$$$$",
    path: "/china/hong-kong/hong-kong/latelier-de-jol-robuchon",
    image: '/images/latelier-de-jol-robuchon1.png'
  },
  {
    name: "Lau Sum Kee (Fuk Wing Street)",
    cuisine: "Noodles",
    price: "$",
    path: "/china/hong-kong/hong-kong/lau-sum-kee-fuk-wing-street",
    image: '/images/lau-sum-kee-fuk-wing-street1.png'
  },
  {
    name: "Leela",
    cuisine: "Indian",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/leela",
    image: '/images/leela1.png'
  },
  {
    name: "Lei Garden (Wan Chai)",
    cuisine: "Cantonese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/lei-garden-wan-chai",
    image: '/images/lei-garden-wan-chai1.png'
  },
  {
    name: "L'Envol",
    cuisine: "French Contemporary",
    price: "$$$$",
    path: "/china/hong-kong/hong-kong/lenvol",
    image: '/images/lenvol1.png'
  },
  {
    name: "Little Napoli",
    cuisine: "Pizza",
    price: "$$",
    path: "/china/hong-kong/hong-kong/little-napoli",
    image: '/images/little-napoli1.png'
  },
  {
    name: "Liu Yuan Pavilion",
    cuisine: "Shanghainese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/liu-yuan-pavilion",
    image: '/images/liu-yuan-pavilion1.png'
  },
  {
    name: "Loaf On",
    cuisine: "Seafood",
    price: "$$",
    path: "/china/hong-kong/hong-kong/loaf-on",
    image: '/images/loaf-on1.png'
  },
  {
    name: "Louise",
    cuisine: "French Contemporary",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/louise",
    image: '/images/louise1.png'
  },
  {
    name: "Lucale",
    cuisine: "Italian",
    price: "$$",
    path: "/china/hong-kong/hong-kong/lucale",
    image: '/images/lucale1.png'
  },
  {
    name: "Lucky Indonesia",
    cuisine: "Indonesian",
    price: "$",
    path: "/china/hong-kong/hong-kong/lucky-indonesia",
    image: '/images/lucky-indonesia1.png'
  },
  {
    name: "Luk Yu Tea House",
    cuisine: "Cantonese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/luk-yu-tea-house",
    image: '/images/luk-yu-tea-house1.png'
  },
  {
    name: "Lulu Baobao",
    cuisine: "Dim Sum",
    price: "$",
    path: "/china/hong-kong/hong-kong/lulu-baobao",
    image: '/images/lulu-baobao1.png'
  },
  {
    name: "Lulu Baobao (Wong Chuk Hang)",
    cuisine: "Dim Sum",
    price: "$",
    path: "/china/hong-kong/hong-kong/lulu-baobao-wong-chuk-hang",
    image: '/images/lulu-baobao-wong-chuk-hang1.png'
  },
  {
    name: "Lung King Heen",
    cuisine: "Cantonese",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/lung-king-heen",
    image: '/images/lung-king-heen1.png'
  },
  {
    name: "Magistracy Dining Room",
    cuisine: "European, English",
    price: "$$",
    path: "/china/hong-kong/hong-kong/magistracy-dining-room",
    image: '/images/magistracy-dining-room1.png'
  },
  {
    name: "Mak Kee (May Ka Mansion)",
    cuisine: "Street Food",
    price: "$",
    path: "/china/hong-kong/hong-kong/mak-kee-may-ka-mansion",
    image: '/images/mak-kee-may-ka-mansion1.png'
  },
  {
    name: "Mak Man Kee",
    cuisine: "Noodles",
    price: "$",
    path: "/china/hong-kong/hong-kong/mak-man-kee",
    image: '/images/mak-man-kee1.png'
  },
  {
    name: "Man Ho (Admiralty)",
    cuisine: "Cantonese",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/man-ho-admiralty",
    image: '/images/man-ho-admiralty1.png'
  },
  {
    name: "Man Kee Cart Noodle",
    cuisine: "Street Food",
    price: "$",
    path: "/china/hong-kong/hong-kong/man-kee-cart-noodle",
    image: '/images/man-kee-cart-noodle1.png'
  },
  {
    name: "Man Kee Cart Noodles (Sham Shui Po)",
    cuisine: "Street Food",
    price: "$",
    path: "/china/hong-kong/hong-kong/man-kee-cart-noodles-sham-shui-po",
    image: '/images/man-kee-cart-noodles-sham-shui-po1.png'
  },
  {
    name: "Man Wah",
    cuisine: "Cantonese",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/man-wah",
    image: '/images/man-wah1.png'
  },
  {
    name: "Mandarin Grill + Bar",
    cuisine: "European Contemporary, Grills",
    price: "$$$$",
    path: "/china/hong-kong/hong-kong/mandarin-grill-bar",
    image: '/images/mandarin-grill-bar1.png'
  },
  {
    name: "Megan's Kitchen",
    cuisine: "Cantonese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/megans-kitchen",
    image: '/images/megans-kitchen1.png'
  },
  {
    name: "Ming Court (Mong Kok)",
    cuisine: "Cantonese",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/ming-court-mong-kok",
    image: '/images/ming-court-mong-kok1.png'
  },
  {
    name: "Mâm Amis",
    cuisine: "Vietnamese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/mm-amis",
    image: '/images/mm-amis1.png'
  },
  {
    name: "Mono",
    cuisine: "Latin American",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/mono",
    image: '/images/mono1.png'
  },
  {
    name: "Mora",
    cuisine: "Innovative",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/mora",
    image: '/images/mora1.png'
  },
  {
    name: "Mosu",
    cuisine: "Innovative",
    price: "$$$$",
    path: "/china/hong-kong/hong-kong/mosu",
    image: '/images/mosu1.png'
  },
  {
    name: "Mrs. Fong Chinese Desserts",
    cuisine: "Street Food",
    price: "$",
    path: "/china/hong-kong/hong-kong/mrs-fong-chinese-desserts",
    image: '/images/mrs-fong-chinese-desserts1.png'
  },
  {
    name: "Ăn Chơi",
    cuisine: "Vietnamese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/n-chi",
    image: '/images/n-chi1.png'
  },
  {
    name: "Nagamoto",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/china/hong-kong/hong-kong/nagamoto",
    image: '/images/nagamoto1.png'
  },
  {
    name: "Neighborhood",
    cuisine: "European Contemporary",
    price: "$$",
    path: "/china/hong-kong/hong-kong/neighborhood",
    image: '/images/neighborhood1.png'
  },
  {
    name: "New Punjab Club",
    cuisine: "Indian, Pakistani",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/new-punjab-club",
    image: '/images/new-punjab-club1.png'
  },
  {
    name: "Noi by Paulo Airaudo",
    cuisine: "Italian Contemporary",
    price: "$$$$",
    path: "/china/hong-kong/hong-kong/noi-by-paulo-airaudo",
    image: '/images/noi-by-paulo-airaudo1.png'
  },
  {
    name: "Octavium",
    cuisine: "Italian",
    price: "$$$$",
    path: "/china/hong-kong/hong-kong/octavium",
    image: '/images/octavium1.png'
  },
  {
    name: "One Harbour Road",
    cuisine: "Cantonese",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/one-harbour-road",
    image: '/images/one-harbour-road1.png'
  },
  {
    name: "Owl's",
    cuisine: "Street Food",
    price: "$",
    path: "/china/hong-kong/hong-kong/owls",
    image: '/images/owls1.png'
  },
  {
    name: "Pang's Kitchen",
    cuisine: "Cantonese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/pangs-kitchen",
    image: '/images/pangs-kitchen1.png'
  },
  {
    name: "Petrus",
    cuisine: "French",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/petrus",
    image: '/images/petrus1.png'
  },
  {
    name: "Plaisance by Mauro Colagreco",
    cuisine: "French Contemporary",
    price: "$$$$",
    path: "/china/hong-kong/hong-kong/plaisance-by-mauro-colagreco",
    image: '/images/plaisance-by-mauro-colagreco1.png'
  },
  {
    name: "Po Kee",
    cuisine: "Cantonese Roast Meats",
    price: "$",
    path: "/china/hong-kong/hong-kong/po-kee",
    image: '/images/po-kee1.png'
  },
  {
    name: "Prince and the Peacock",
    cuisine: "Indian",
    price: "$$",
    path: "/china/hong-kong/hong-kong/prince-and-the-peacock",
    image: '/images/prince-and-the-peacock1.png'
  },
  {
    name: "Épure",
    cuisine: "French Contemporary",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/pure",
    image: '/images/pure1.png'
  },
  {
    name: "Putien (Causeway Bay)",
    cuisine: "Fujian",
    price: "$$",
    path: "/china/hong-kong/hong-kong/putien-causeway-bay",
    image: '/images/putien-causeway-bay1.png'
  },
  {
    name: "Racines",
    cuisine: "French Contemporary",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/racines",
    image: '/images/racines1.png'
  },
  {
    name: "Rùn",
    cuisine: "Cantonese",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/rn",
    image: '/images/rn1.png'
  },
  {
    name: "Roganic",
    cuisine: "European Contemporary",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/roganic",
    image: '/images/roganic1.png'
  },
  {
    name: "Roucou",
    cuisine: "Innovative",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/roucou",
    image: '/images/roucou1.png'
  },
  {
    name: "Ryota Kappou Modern",
    cuisine: "Japanese",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/ryota-kappou-modern",
    image: '/images/ryota-kappou-modern1.png'
  },
  {
    name: "Sabah",
    cuisine: "Malaysian",
    price: "$$",
    path: "/china/hong-kong/hong-kong/sabah",
    image: '/images/sabah1.png'
  },
  {
    name: "Samsen (Wan Chai)",
    cuisine: "Thai",
    price: "$$",
    path: "/china/hong-kong/hong-kong/samsen-wan-chai",
    image: '/images/samsen-wan-chai1.png'
  },
  {
    name: "Sang Kee",
    cuisine: "Cantonese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/sang-kee",
    image: '/images/sang-kee1.png'
  },
  {
    name: "Sang Kee Foods (Western District)",
    cuisine: "Street Food",
    price: "$",
    path: "/china/hong-kong/hong-kong/sang-kee-foods-western-district",
    image: '/images/sang-kee-foods-western-district1.png'
  },
  {
    name: "Saya",
    cuisine: "Thai",
    price: "$$",
    path: "/china/hong-kong/hong-kong/saya",
    image: '/images/saya1.png'
  },
  {
    name: "Seventh Son (Wan Chai)",
    cuisine: "Cantonese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/seventh-son-wan-chai",
    image: '/images/seventh-son-wan-chai1.png'
  },
  {
    name: "Shang Palace",
    cuisine: "Cantonese",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/shang-palace",
    image: '/images/shang-palace1.png'
  },
  {
    name: "She Wong Hei",
    cuisine: "Cantonese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/she-wong-hei",
    image: '/images/she-wong-hei1.png'
  },
  {
    name: "She Wong Leung",
    cuisine: "Cantonese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/she-wong-leung",
    image: '/images/she-wong-leung1.png'
  },
  {
    name: "Shek Kee Kitchen",
    cuisine: "Cantonese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/shek-kee-kitchen",
    image: '/images/shek-kee-kitchen1.png'
  },
  {
    name: "Ship Kee",
    cuisine: "Cantonese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/ship-kee",
    image: '/images/ship-kee1.png'
  },
  {
    name: "Shugetsu Ramen (Central)",
    cuisine: "Ramen",
    price: "$$",
    path: "/china/hong-kong/hong-kong/shugetsu-ramen-central",
    image: '/images/shugetsu-ramen-central1.png'
  },
  {
    name: "Shum Shum Desserts",
    cuisine: "Street Food",
    price: "$",
    path: "/china/hong-kong/hong-kong/shum-shum-desserts",
    image: '/images/shum-shum-desserts1.png'
  },
  {
    name: "Siaw",
    cuisine: "Thai",
    price: "$$",
    path: "/china/hong-kong/hong-kong/siaw",
    image: '/images/siaw1.png'
  },
  {
    name: "Sing Kee",
    cuisine: "Cantonese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/sing-kee",
    image: '/images/sing-kee1.png'
  },
  {
    name: "Sister Wah",
    cuisine: "Noodles",
    price: "$",
    path: "/china/hong-kong/hong-kong/sister-wah",
    image: '/images/sister-wah1.png'
  },
  {
    name: "Snack Baby",
    cuisine: "Street Food",
    price: "$",
    path: "/china/hong-kong/hong-kong/snack-baby",
    image: '/images/snack-baby1.png'
  },
  {
    name: "Snack Baby (Central)",
    cuisine: "Street Food",
    price: "$",
    path: "/china/hong-kong/hong-kong/snack-baby-central",
    image: '/images/snack-baby-central1.png'
  },
  {
    name: "So Kee",
    cuisine: "Street Food",
    price: "$",
    path: "/china/hong-kong/hong-kong/so-kee",
    image: '/images/so-kee1.png'
  },
  {
    name: "Sol",
    cuisine: "Korean Contemporary",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/sol",
    image: '/images/sol1.png'
  },
  {
    name: "Sếp",
    cuisine: "Vietnamese",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/sp",
    image: '/images/sp1.png'
  },
  {
    name: "Spring Moon",
    cuisine: "Cantonese",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/spring-moon",
    image: '/images/spring-moon1.png'
  },
  {
    name: "Summer Palace",
    cuisine: "Cantonese",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/summer-palace",
    image: '/images/summer-palace1.png'
  },
  {
    name: "Sun Tung Lok",
    cuisine: "Cantonese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/sun-tung-lok",
    image: '/images/sun-tung-lok1.png'
  },
  {
    name: "Sushi Saito",
    cuisine: "Sushi",
    price: "$$$$",
    path: "/china/hong-kong/hong-kong/sushi-saito",
    image: '/images/sushi-saito1.png'
  },
  {
    name: "Sushi Shikon",
    cuisine: "Sushi",
    price: "$$$$",
    path: "/china/hong-kong/hong-kong/sushi-shikon",
    image: '/images/sushi-shikon1.png'
  },
  {
    name: "Sushi Takeshi",
    cuisine: "Sushi",
    price: "$$$$",
    path: "/china/hong-kong/hong-kong/sushi-takeshi",
    image: '/images/sushi-takeshi1.png'
  },
  {
    name: "Sushi Wadatsumi",
    cuisine: "Sushi",
    price: "$$$$",
    path: "/china/hong-kong/hong-kong/sushi-wadatsumi",
    image: '/images/sushi-wadatsumi1.png'
  },
  {
    name: "Té Bo",
    cuisine: "French Contemporary",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/t-bo",
    image: '/images/t-bo1.png'
  },
  {
    name: "Ta Vie",
    cuisine: "Innovative",
    price: "$$$$",
    path: "/china/hong-kong/hong-kong/ta-vie",
    image: '/images/ta-vie1.png'
  },
  {
    name: "Tai Tsai (Tsuen Wan)",
    cuisine: "Taiwanese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/tai-tsai-tsuen-wan",
    image: '/images/tai-tsai-tsuen-wan1.png'
  },
  {
    name: "Tai Wai Dining Room",
    cuisine: "Cantonese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/tai-wai-dining-room",
    image: '/images/tai-wai-dining-room1.png'
  },
  {
    name: "Tai Wing Wah",
    cuisine: "Cantonese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/tai-wing-wah",
    image: '/images/tai-wing-wah1.png'
  },
  {
    name: "Tai Woo",
    cuisine: "Cantonese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/tai-woo",
    image: '/images/tai-woo1.png'
  },
  {
    name: "Tak Kee",
    cuisine: "Chiu Chow",
    price: "$$",
    path: "/china/hong-kong/hong-kong/tak-kee",
    image: '/images/tak-kee1.png'
  },
  {
    name: "Takeya",
    cuisine: "Japanese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/takeya",
    image: '/images/takeya1.png'
  },
  {
    name: "T'ang Court",
    cuisine: "Cantonese",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/tang-court",
    image: '/images/tang-court1.png'
  },
  {
    name: "Tasty (Central)",
    cuisine: "Noodles and Congee",
    price: "$$",
    path: "/china/hong-kong/hong-kong/tasty-central",
    image: '/images/tasty-central1.png'
  },
  {
    name: "Tate",
    cuisine: "Innovative",
    price: "$$$$",
    path: "/china/hong-kong/hong-kong/tate",
    image: '/images/tate1.png'
  },
  {
    name: "Temple Street Beef Offal",
    cuisine: "Street Food",
    price: "$",
    path: "/china/hong-kong/hong-kong/temple-street-beef-offal",
    image: '/images/temple-street-beef-offal1.png'
  },
  {
    name: "Teppanyaki Mihara Goten",
    cuisine: "Teppanyaki",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/teppanyaki-mihara-goten",
    image: '/images/teppanyaki-mihara-goten1.png'
  },
  {
    name: "Testina",
    cuisine: "Italian",
    price: "$$",
    path: "/china/hong-kong/hong-kong/testina",
    image: '/images/testina1.png'
  },
  {
    name: "Thai Pai Dong (Jordan)",
    cuisine: "Thai",
    price: "$$",
    path: "/china/hong-kong/hong-kong/thai-pai-dong-jordan",
    image: '/images/thai-pai-dong-jordan1.png'
  },
  {
    name: "The Chairman",
    cuisine: "Cantonese",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/the-chairman",
    image: '/images/the-chairman1.png'
  },
  {
    name: "The Legacy House",
    cuisine: "Shun Tak",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/the-legacy-house",
    image: '/images/the-legacy-house1.png'
  },
  {
    name: "The Merchants",
    cuisine: "Shanghainese",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/the-merchants",
    image: '/images/the-merchants1.png'
  },
  {
    name: "The Steak House",
    cuisine: "Steakhouse",
    price: "$$$$",
    path: "/china/hong-kong/hong-kong/the-steak-house",
    image: '/images/the-steak-house1.png'
  },
  {
    name: "Tim Ho Wan (Sham Shui Po)",
    cuisine: "Dim Sum",
    price: "$",
    path: "/china/hong-kong/hong-kong/tim-ho-wan-sham-shui-po",
    image: '/images/tim-ho-wan-sham-shui-po1.png'
  },
  {
    name: "Tin Hung",
    cuisine: "Cantonese Roast Meats",
    price: "$$",
    path: "/china/hong-kong/hong-kong/tin-hung",
    image: '/images/tin-hung1.png'
  },
  {
    name: "Tin Lung Heen",
    cuisine: "Cantonese",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/tin-lung-heen",
    image: '/images/tin-lung-heen1.png'
  },
  {
    name: "Toritama",
    cuisine: "Yakitori",
    price: "$$",
    path: "/china/hong-kong/hong-kong/toritama",
    image: '/images/toritama1.png'
  },
  {
    name: "Tosca di Angelo",
    cuisine: "Italian",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/tosca-di-angelo",
    image: '/images/tosca-di-angelo1.png'
  },
  {
    name: "Trattoria Felino",
    cuisine: "Italian",
    price: "$$",
    path: "/china/hong-kong/hong-kong/trattoria-felino",
    image: '/images/trattoria-felino1.png'
  },
  {
    name: "Trusty Congee King (Wan Chai)",
    cuisine: "Noodles and Congee",
    price: "$",
    path: "/china/hong-kong/hong-kong/trusty-congee-king-wan-chai",
    image: '/images/trusty-congee-king-wan-chai1.png'
  },
  {
    name: "Tsim Chai Kee (Wellington Street)",
    cuisine: "Noodles",
    price: "$",
    path: "/china/hong-kong/hong-kong/tsim-chai-kee-wellington-street",
    image: '/images/tsim-chai-kee-wellington-street1.png'
  },
  {
    name: "Tuber Umberto Bombana",
    cuisine: "Italian",
    price: "$$$$",
    path: "/china/hong-kong/hong-kong/tuber-umberto-bombana",
    image: '/images/tuber-umberto-bombana1.png'
  },
  {
    name: "Twins Liangpi Limited (Mong Kok)",
    cuisine: "Street Food",
    price: "$",
    path: "/china/hong-kong/hong-kong/twins-liangpi-limited-mong-kok",
    image: '/images/twins-liangpi-limited-mong-kok1.png'
  },
  {
    name: "Twist & Buckle",
    cuisine: "Street Food",
    price: "$",
    path: "/china/hong-kong/hong-kong/twist-buckle",
    image: '/images/twist-buckle1.png'
  },
  {
    name: "Udatsu Sushi",
    cuisine: "Sushi",
    price: "$$$$",
    path: "/china/hong-kong/hong-kong/udatsu-sushi",
    image: '/images/udatsu-sushi1.png'
  },
  {
    name: "Uncle Quek",
    cuisine: "South East Asian",
    price: "$$",
    path: "/china/hong-kong/hong-kong/uncle-quek",
    image: '/images/uncle-quek1.png'
  },
  {
    name: "Vea",
    cuisine: "Innovative",
    price: "$$$$",
    path: "/china/hong-kong/hong-kong/vea",
    image: '/images/vea1.png'
  },
  {
    name: "Wang Fu",
    cuisine: "Dumplings",
    price: "$",
    path: "/china/hong-kong/hong-kong/wang-fu",
    image: '/images/wang-fu1.png'
  },
  {
    name: "Whey",
    cuisine: "Asian Contemporary",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/whey",
    image: '/images/whey1.png'
  },
  {
    name: "Wing",
    cuisine: "Innovative",
    price: "$$$$",
    path: "/china/hong-kong/hong-kong/wing",
    image: '/images/wing1.png'
  },
  {
    name: "Wing Lai Yuen",
    cuisine: "Shanghainese, Sichuan",
    price: "$$",
    path: "/china/hong-kong/hong-kong/wing-lai-yuen",
    image: '/images/wing-lai-yuen1.png'
  },
  {
    name: "Xin Rong Ji",
    cuisine: "Taizhou",
    price: "$$$$",
    path: "/china/hong-kong/hong-kong/xin-rong-ji",
    image: '/images/xin-rong-ji1.png'
  },
  {
    name: "Yè Shanghai (Tsim Sha Tsui)",
    cuisine: "Shanghainese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/y-shanghai-tsim-sha-tsui",
    image: '/images/y-shanghai-tsim-sha-tsui1.png'
  },
  {
    name: "Yardbird",
    cuisine: "Yakitori",
    price: "$$",
    path: "/china/hong-kong/hong-kong/yardbird",
    image: '/images/yardbird1.png'
  },
  {
    name: "Yat Lok (Central)",
    cuisine: "Cantonese Roast Meats",
    price: "$$",
    path: "/china/hong-kong/hong-kong/yat-lok-central",
    image: '/images/yat-lok-central1.png'
  },
  {
    name: "Yat Tung Heen",
    cuisine: "Cantonese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/yat-tung-heen",
    image: '/images/yat-tung-heen1.png'
  },
  {
    name: "Yi Jia",
    cuisine: "Shanghainese, Sichuan",
    price: "$$",
    path: "/china/hong-kong/hong-kong/yi-jia",
    image: '/images/yi-jia1.png'
  },
  {
    name: "Ying Jee Club",
    cuisine: "Cantonese",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/ying-jee-club",
    image: '/images/ying-jee-club1.png'
  },
  {
    name: "Yong Fu",
    cuisine: "Ningbo",
    price: "$$$$",
    path: "/china/hong-kong/hong-kong/yong-fu",
    image: '/images/yong-fu1.png'
  },
  {
    name: "Yuè (Causeway Bay)",
    cuisine: "Cantonese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/yu-causeway-bay",
    image: '/images/yu-causeway-bay1.png'
  },
  {
    name: "Yuè (Gold Coast)",
    cuisine: "Cantonese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/yu-gold-coast",
    image: '/images/yu-gold-coast1.png'
  },
  {
    name: "Yuan",
    cuisine: "Vegetarian",
    price: "$$$",
    path: "/china/hong-kong/hong-kong/yuan",
    image: '/images/yuan1.png'
  },
  {
    name: "Yuan is Here (Western District)",
    cuisine: "Taiwanese",
    price: "$",
    path: "/china/hong-kong/hong-kong/yuan-is-here-western-district",
    image: '/images/yuan-is-here-western-district1.png'
  },
  {
    name: "Yue Kee",
    cuisine: "Cantonese",
    price: "$$",
    path: "/china/hong-kong/hong-kong/yue-kee",
    image: '/images/yue-kee1.png'
  },
  {
    name: "Zhejiang Heen",
    cuisine: "Zhejiang",
    price: "$$",
    path: "/china/hong-kong/hong-kong/zhejiang-heen",
    image: '/images/zhejiang-heen1.png'
  },
  {
    name: "Zuicho",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/china/hong-kong/hong-kong/zuicho",
    image: '/images/zuicho1.png'
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
