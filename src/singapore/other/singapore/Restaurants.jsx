import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Singapore";

const restaurants = [
  {
    name: "545 Whampoa Prawn Noodles",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/545-whampoa-prawn-noodles",
    image: '/images/545-whampoa-prawn-noodles1.png'
  },
  {
    name: "91 Fried Kway Teow Mee",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/91-fried-kway-teow-mee",
    image: '/images/91-fried-kway-teow-mee1.png'
  },
  {
    name: "A Noodle Story",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/a-noodle-story",
    image: '/images/a-noodle-story1.png'
  },
  {
    name: "Adam Rd Noo Cheng Big Prawn Noodle",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/adam-rd-noo-cheng-big-prawn-noodle",
    image: '/images/adam-rd-noo-cheng-big-prawn-noodle1.png'
  },
  {
    name: "Ah Heng Duck Rice",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/ah-heng-duck-rice",
    image: '/images/ah-heng-duck-rice1.png'
  },
  {
    name: "Ah Hock Fried Hokkien Noodles",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/ah-hock-fried-hokkien-noodles",
    image: '/images/ah-hock-fried-hokkien-noodles1.png'
  },
  {
    name: "Ah Ter Authentic Teochew Fish Ball Noodles",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/ah-ter-authentic-teochew-fish-ball-noodles",
    image: '/images/ah-ter-authentic-teochew-fish-ball-noodles1.png'
  },
  {
    name: "Allauddin's Briyani",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/allauddins-briyani",
    image: '/images/allauddins-briyani1.png'
  },
  {
    name: "Alliance Seafood",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/alliance-seafood",
    image: '/images/alliance-seafood1.png'
  },
  {
    name: "Alma",
    cuisine: "European Contemporary",
    price: "$$$",
    path: "/singapore/other/singapore/alma",
    image: '/images/alma1.png'
  },
  {
    name: "Ammākase",
    cuisine: "Indian",
    price: "$$$",
    path: "/singapore/other/singapore/ammakase",
    image: '/images/ammakase1.png'
  },
  {
    name: "Anglo Indian (Shenton Way)",
    cuisine: "Indian",
    price: "$$",
    path: "/singapore/other/singapore/anglo-indian-shenton-way",
    image: '/images/anglo-indian-shenton-way1.png'
  },
  {
    name: "Ann Chin Handmade Popiah",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/ann-chin-handmade-popiah",
    image: '/images/ann-chin-handmade-popiah1.png'
  },
  {
    name: "Ar Er Soup",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/ar-er-soup",
    image: '/images/ar-er-soup1.png'
  },
  {
    name: "Araya",
    cuisine: "Innovative, Chilean",
    price: "$$$$",
    path: "/singapore/other/singapore/araya",
    image: '/images/araya1.png'
  },
  {
    name: "Aunty Oats Pancake",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/aunty-oats-pancake",
    image: '/images/aunty-oats-pancake1.png'
  },
  {
    name: "Bahrakath Mutton Soup",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/bahrakath-mutton-soup",
    image: '/images/bahrakath-mutton-soup1.png'
  },
  {
    name: "Bar-Roque Grill",
    cuisine: "European",
    price: "$$",
    path: "/singapore/other/singapore/bar-roque-grill",
    image: '/images/bar-roque-grill1.png'
  },
  {
    name: "Beach Road Fish Head Bee Hoon",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/beach-road-fish-head-bee-hoon",
    image: '/images/beach-road-fish-head-bee-hoon1.png'
  },
  {
    name: "Bedok Chwee Kueh",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/bedok-chwee-kueh",
    image: '/images/bedok-chwee-kueh1.png'
  },
  {
    name: "Belimbing",
    cuisine: "Innovative, Singaporean",
    price: "$$",
    path: "/singapore/other/singapore/belimbing",
    image: '/images/belimbing1.png'
  },
  {
    name: "Bhoomi",
    cuisine: "Indian",
    price: "$$",
    path: "/singapore/other/singapore/bhoomi",
    image: '/images/bhoomi1.png'
  },
  {
    name: "Birds Of Paradise (Katong)",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/birds-of-paradise-katong",
    image: '/images/birds-of-paradise-katong1.png'
  },
  {
    name: "Bismillah Biryani (Little India)",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/bismillah-biryani-little-india",
    image: '/images/bismillah-biryani-little-india1.png'
  },
  {
    name: "Boon Tong Kee (Balestier Road)",
    cuisine: "Singaporean",
    price: "$",
    path: "/singapore/other/singapore/boon-tong-kee-balestier-road",
    image: '/images/boon-tong-kee-balestier-road1.png'
  },
  {
    name: "Boon Tong Kee Kway Chap‧Braised Duck",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/boon-tong-kee-kway-chapbraised-duck",
    image: '/images/boon-tong-kee-kway-chapbraised-duck1.png'
  },
  {
    name: "Born",
    cuisine: "Innovative",
    price: "$$$$",
    path: "/singapore/other/singapore/born",
    image: '/images/born1.png'
  },
  {
    name: "Brasserie Astoria",
    cuisine: "European Contemporary",
    price: "$$",
    path: "/singapore/other/singapore/brasserie-astoria",
    image: '/images/brasserie-astoria1.png'
  },
  {
    name: "Buko Nero",
    cuisine: "Italian",
    price: "$$",
    path: "/singapore/other/singapore/buko-nero",
    image: '/images/buko-nero1.png'
  },
  {
    name: "Buona Terra",
    cuisine: "Italian Contemporary",
    price: "$$$",
    path: "/singapore/other/singapore/buona-terra",
    image: '/images/buona-terra1.png'
  },
  {
    name: "Burnt Ends",
    cuisine: "Barbecue",
    price: "$$$",
    path: "/singapore/other/singapore/burnt-ends",
    image: '/images/burnt-ends1.png'
  },
  {
    name: "Butcher's Block",
    cuisine: "Meats and Grills",
    price: "$$$",
    path: "/singapore/other/singapore/butchers-block",
    image: '/images/butchers-block1.png'
  },
  {
    name: "Candlenut",
    cuisine: "Peranakan",
    price: "$$",
    path: "/singapore/other/singapore/candlenut",
    image: '/images/candlenut1.png'
  },
  {
    name: "Ce Soir",
    cuisine: "Asian Contemporary",
    price: "$$$",
    path: "/singapore/other/singapore/ce-soir",
    image: '/images/ce-soir1.png'
  },
  {
    name: "Chai Chuan Tou Yang Rou Tang",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/chai-chuan-tou-yang-rou-tang",
    image: '/images/chai-chuan-tou-yang-rou-tang1.png'
  },
  {
    name: "Chaleur",
    cuisine: "Innovative",
    price: "$$$",
    path: "/singapore/other/singapore/chaleur",
    image: '/images/chaleur1.png'
  },
  {
    name: "Chef Kang's Noodle House",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/chef-kangs-noodle-house",
    image: '/images/chef-kangs-noodle-house1.png'
  },
  {
    name: "Cheng Heng Kway Chap and Braised Duck Rice",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/cheng-heng-kway-chap-and-braised-duck-rice",
    image: '/images/cheng-heng-kway-chap-and-braised-duck-rice1.png'
  },
  {
    name: "Cheok Kee",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/cheok-kee",
    image: '/images/cheok-kee1.png'
  },
  {
    name: "Chey Sua Carrot Cake",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/chey-sua-carrot-cake",
    image: '/images/chey-sua-carrot-cake1.png'
  },
  {
    name: "Chilli Padi (Joo Chiat)",
    cuisine: "Peranakan",
    price: "$$",
    path: "/singapore/other/singapore/chilli-padi-joo-chiat",
    image: '/images/chilli-padi-joo-chiat1.png'
  },
  {
    name: "Chomp Chomp Satay",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/chomp-chomp-satay",
    image: '/images/chomp-chomp-satay1.png'
  },
  {
    name: "Chuan Kee Boneless Braised Duck",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/chuan-kee-boneless-braised-duck",
    image: '/images/chuan-kee-boneless-braised-duck1.png'
  },
  {
    name: "Chung Cheng",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/chung-cheng",
    image: '/images/chung-cheng1.png'
  },
  {
    name: "Claudine",
    cuisine: "French",
    price: "$$",
    path: "/singapore/other/singapore/claudine",
    image: '/images/claudine1.png'
  },
  {
    name: "Cloudstreet",
    cuisine: "Innovative",
    price: "$$$$",
    path: "/singapore/other/singapore/cloudstreet",
    image: '/images/cloudstreet1.png'
  },
  {
    name: "C.M.Y. Satay",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/cmy-satay",
    image: '/images/cmy-satay1.png'
  },
  {
    name: "Come Daily Fried Hokkien Prawn Mee",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/come-daily-fried-hokkien-prawn-mee",
    image: '/images/come-daily-fried-hokkien-prawn-mee1.png'
  },
  {
    name: "Crystal Jade Golden Palace",
    cuisine: "Cantonese",
    price: "$$",
    path: "/singapore/other/singapore/crystal-jade-golden-palace",
    image: '/images/crystal-jade-golden-palace1.png'
  },
  {
    name: "Cumi Bali",
    cuisine: "Indonesian",
    price: "$$",
    path: "/singapore/other/singapore/cumi-bali",
    image: '/images/cumi-bali1.png'
  },
  {
    name: "CUT",
    cuisine: "Steakhouse",
    price: "$$$",
    path: "/singapore/other/singapore/cut",
    image: '/images/cut1.png'
  },
  {
    name: "Da Po",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/da-po",
    image: '/images/da-po1.png'
  },
  {
    name: "Da Shi Jia Big Prawn Mee",
    cuisine: "Singaporean",
    price: "$",
    path: "/singapore/other/singapore/da-shi-jia-big-prawn-mee",
    image: '/images/da-shi-jia-big-prawn-mee1.png'
  },
  {
    name: "Delhi Lahori",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/delhi-lahori",
    image: '/images/delhi-lahori1.png'
  },
  {
    name: "Dill",
    cuisine: "Scandinavian",
    price: "$$",
    path: "/singapore/other/singapore/dill",
    image: '/images/dill1.png'
  },
  {
    name: "Dudu Cooked Food",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/dudu-cooked-food",
    image: '/images/dudu-cooked-food1.png'
  },
  {
    name: "Eminent Frog Porridge & Seafood (Lor 19)",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/eminent-frog-porridge-seafood-lor-19",
    image: '/images/eminent-frog-porridge-seafood-lor-191.png'
  },
  {
    name: "Esora",
    cuisine: "Innovative",
    price: "$$$$",
    path: "/singapore/other/singapore/esora",
    image: '/images/esora1.png'
  },
  {
    name: "Esquina",
    cuisine: "Spanish",
    price: "$$",
    path: "/singapore/other/singapore/esquina",
    image: '/images/esquina1.png'
  },
  {
    name: "Euphoria",
    cuisine: "Innovative",
    price: "$$$",
    path: "/singapore/other/singapore/euphoria",
    image: '/images/euphoria1.png'
  },
  {
    name: "Fatty Ox HK Kitchen",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/fatty-ox-hk-kitchen",
    image: '/images/fatty-ox-hk-kitchen1.png'
  },
  {
    name: "Fei Fei Roasted • Noodle",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/fei-fei-roasted-noodle",
    image: '/images/fei-fei-roasted-noodle1.png'
  },
  {
    name: "Feng Zhen Lor Mee",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/feng-zhen-lor-mee",
    image: '/images/feng-zhen-lor-mee1.png'
  },
  {
    name: "Fiamma",
    cuisine: "Italian",
    price: "$$$",
    path: "/singapore/other/singapore/fiamma",
    image: '/images/fiamma1.png'
  },
  {
    name: "Fico",
    cuisine: "Italian",
    price: "$$",
    path: "/singapore/other/singapore/fico",
    image: '/images/fico1.png'
  },
  {
    name: "Fiz",
    cuisine: "Malaysian, Contemporary",
    price: "$$$",
    path: "/singapore/other/singapore/fiz",
    image: '/images/fiz1.png'
  },
  {
    name: "Fleur de Sel",
    cuisine: "French",
    price: "$$",
    path: "/singapore/other/singapore/fleur-de-sel",
    image: '/images/fleur-de-sel1.png'
  },
  {
    name: "Foc (Central)",
    cuisine: "Spanish",
    price: "$$",
    path: "/singapore/other/singapore/foc-central",
    image: '/images/foc-central1.png'
  },
  {
    name: "Foc (Clarke Quay)",
    cuisine: "Spanish",
    price: "$$",
    path: "/singapore/other/singapore/foc-clarke-quay",
    image: '/images/foc-clarke-quay1.png'
  },
  {
    name: "Food Street Fried Kway Teow Mee",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/food-street-fried-kway-teow-mee",
    image: '/images/food-street-fried-kway-teow-mee1.png'
  },
  {
    name: "Fu He Turtle Soup",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/fu-he-turtle-soup",
    image: '/images/fu-he-turtle-soup1.png'
  },
  {
    name: "Fu Ming Cooked Food",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/fu-ming-cooked-food",
    image: '/images/fu-ming-cooked-food1.png'
  },
  {
    name: "Gaig",
    cuisine: "Spanish",
    price: "$$",
    path: "/singapore/other/singapore/gaig",
    image: '/images/gaig1.png'
  },
  {
    name: "Garibaldi",
    cuisine: "Italian",
    price: "$$",
    path: "/singapore/other/singapore/garibaldi",
    image: '/images/garibaldi1.png'
  },
  {
    name: "Gaston",
    cuisine: "French",
    price: "$$",
    path: "/singapore/other/singapore/gaston",
    image: '/images/gaston1.png'
  },
  {
    name: "Ghim Moh Chwee Kueh",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/ghim-moh-chwee-kueh",
    image: '/images/ghim-moh-chwee-kueh1.png'
  },
  {
    name: "Gordon Grill",
    cuisine: "European Contemporary",
    price: "$$",
    path: "/singapore/other/singapore/gordon-grill",
    image: '/images/gordon-grill1.png'
  },
  {
    name: "Guan Kee Fried Carrot Cake",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/guan-kee-fried-carrot-cake",
    image: '/images/guan-kee-fried-carrot-cake1.png'
  },
  {
    name: "Gunther's",
    cuisine: "French Contemporary",
    price: "$$$",
    path: "/singapore/other/singapore/gunthers",
    image: '/images/gunthers1.png'
  },
  {
    name: "Hai Nan Xing Zhou Beef Noodle",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/hai-nan-xing-zhou-beef-noodle",
    image: '/images/hai-nan-xing-zhou-beef-noodle1.png'
  },
  {
    name: "Hai Nan Zai",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/hai-nan-zai",
    image: '/images/hai-nan-zai1.png'
  },
  {
    name: "Hamamoto",
    cuisine: "Sushi",
    price: "$$$$",
    path: "/singapore/other/singapore/hamamoto",
    image: '/images/hamamoto1.png'
  },
  {
    name: "Han Kee",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/han-kee",
    image: '/images/han-kee1.png'
  },
  {
    name: "Hayop",
    cuisine: "Filipino, Contemporary",
    price: "$$",
    path: "/singapore/other/singapore/hayop",
    image: '/images/hayop1.png'
  },
  {
    name: "Heng",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/heng",
    image: '/images/heng1.png'
  },
  {
    name: "Heng Gi Goose and Duck Rice",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/heng-gi-goose-and-duck-rice",
    image: '/images/heng-gi-goose-and-duck-rice1.png'
  },
  {
    name: "Heng Heng Cooked Food",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/heng-heng-cooked-food",
    image: '/images/heng-heng-cooked-food1.png'
  },
  {
    name: "Heng Kee",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/heng-kee",
    image: '/images/heng-kee1.png'
  },
  {
    name: "Heng Long BBQ Chicken Rice",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/heng-long-bbq-chicken-rice",
    image: '/images/heng-long-bbq-chicken-rice1.png'
  },
  {
    name: "Hill Street Fried Kway Teow",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/hill-street-fried-kway-teow",
    image: '/images/hill-street-fried-kway-teow1.png'
  },
  {
    name: "Hill Street Tai Hwa Pork Noodle",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/hill-street-tai-hwa-pork-noodle",
    image: '/images/hill-street-tai-hwa-pork-noodle1.png'
  },
  {
    name: "Hjh Maimunah (Jalan Pisang)",
    cuisine: "Malaysian",
    price: "$",
    path: "/singapore/other/singapore/hjh-maimunah-jalan-pisang",
    image: '/images/hjh-maimunah-jalan-pisang1.png'
  },
  {
    name: "Hock Hai (Hong Lim) Curry Chicken Noodle",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/hock-hai-hong-lim-curry-chicken-noodle",
    image: '/images/hock-hai-hong-lim-curry-chicken-noodle1.png'
  },
  {
    name: "Hock Lye Noodles House & Fishii Tales",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/hock-lye-noodles-house-fishii-tales",
    image: '/images/hock-lye-noodles-house-fishii-tales1.png'
  },
  {
    name: "Hock Seng Choon Fish Ball Kway Teow Mee",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/hock-seng-choon-fish-ball-kway-teow-mee",
    image: '/images/hock-seng-choon-fish-ball-kway-teow-mee1.png'
  },
  {
    name: "Hoe Kee Kitchen",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/hoe-kee-kitchen",
    image: '/images/hoe-kee-kitchen1.png'
  },
  {
    name: "Hokkien Man Hokkien Mee",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/hokkien-man-hokkien-mee",
    image: '/images/hokkien-man-hokkien-mee1.png'
  },
  {
    name: "Hokkien Street Bak Kut Teh",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/hokkien-street-bak-kut-teh",
    image: '/images/hokkien-street-bak-kut-teh1.png'
  },
  {
    name: "Hong Heng Fried Sotong Prawn Mee",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/hong-heng-fried-sotong-prawn-mee",
    image: '/images/hong-heng-fried-sotong-prawn-mee1.png'
  },
  {
    name: "Hong Kong Yummy Soup",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/hong-kong-yummy-soup",
    image: '/images/hong-kong-yummy-soup1.png'
  },
  {
    name: "Hong Peng La Mian Xiao Long Bao",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/hong-peng-la-mian-xiao-long-bao",
    image: '/images/hong-peng-la-mian-xiao-long-bao1.png'
  },
  {
    name: "Hong Wen Mutton Soup",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/hong-wen-mutton-soup",
    image: '/images/hong-wen-mutton-soup1.png'
  },
  {
    name: "Hoo Kee Bak Chang",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/hoo-kee-bak-chang",
    image: '/images/hoo-kee-bak-chang1.png'
  },
  {
    name: "Hougang Traditional Famous Wanton Noodle",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/hougang-traditional-famous-wanton-noodle",
    image: '/images/hougang-traditional-famous-wanton-noodle1.png'
  },
  {
    name: "Hua Xing Bak Kut Teh",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/hua-xing-bak-kut-teh",
    image: '/images/hua-xing-bak-kut-teh1.png'
  },
  {
    name: "Huat Heng Fried Oyster",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/huat-heng-fried-oyster",
    image: '/images/huat-heng-fried-oyster1.png'
  },
  {
    name: "Hui Wei Chilli Ban Mian",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/hui-wei-chilli-ban-mian",
    image: '/images/hui-wei-chilli-ban-mian1.png'
  },
  {
    name: "Hup Hong Chicken Rice",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/hup-hong-chicken-rice",
    image: '/images/hup-hong-chicken-rice1.png'
  },
  {
    name: "Hup Kee Teochew Fishball Mee",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/hup-kee-teochew-fishball-mee",
    image: '/images/hup-kee-teochew-fishball-mee1.png'
  },
  {
    name: "Ibid",
    cuisine: "Innovative",
    price: "$$$",
    path: "/singapore/other/singapore/ibid",
    image: '/images/ibid1.png'
  },
  {
    name: "Ichigo Ichie",
    cuisine: "Japanese",
    price: "$$$",
    path: "/singapore/other/singapore/ichigo-ichie",
    image: '/images/ichigo-ichie1.png'
  },
  {
    name: "Iggy's",
    cuisine: "European Contemporary",
    price: "$$$",
    path: "/singapore/other/singapore/iggys",
    image: '/images/iggys1.png'
  },
  {
    name: "Imperial Treasure Fine Teochew Cuisine (Orchard)",
    cuisine: "Teochew",
    price: "$$",
    path: "/singapore/other/singapore/imperial-treasure-fine-teochew-cuisine-orchard",
    image: '/images/imperial-treasure-fine-teochew-cuisine-orchard1.png'
  },
  {
    name: "Imperial Treasure Super Peking Duck (Paragon)",
    cuisine: "Cantonese",
    price: "$$",
    path: "/singapore/other/singapore/imperial-treasure-super-peking-duck-paragon",
    image: '/images/imperial-treasure-super-peking-duck-paragon1.png'
  },
  {
    name: "Indocafé",
    cuisine: "Peranakan",
    price: "$$",
    path: "/singapore/other/singapore/indocaf",
    image: '/images/indocaf1.png'
  },
  {
    name: "Ingleside",
    cuisine: "European Contemporary",
    price: "$$",
    path: "/singapore/other/singapore/ingleside",
    image: '/images/ingleside1.png'
  },
  {
    name: "Iru Den",
    cuisine: "Taiwanese contemporary",
    price: "$$$",
    path: "/singapore/other/singapore/iru-den",
    image: '/images/iru-den1.png'
  },
  {
    name: "Ishizawa",
    cuisine: "Sushi",
    price: "$$$$",
    path: "/singapore/other/singapore/ishizawa",
    image: '/images/ishizawa1.png'
  },
  {
    name: "Ivy's Hainanese Herbal Mutton Soup",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/ivys-hainanese-herbal-mutton-soup",
    image: '/images/ivys-hainanese-herbal-mutton-soup1.png'
  },
  {
    name: "J2 Famous Crispy Curry Puff",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/j2-famous-crispy-curry-puff",
    image: '/images/j2-famous-crispy-curry-puff1.png'
  },
  {
    name: "Jaan by Kirk Westaway",
    cuisine: "British Contemporary",
    price: "$$$",
    path: "/singapore/other/singapore/jaan-by-kirk-westaway",
    image: '/images/jaan-by-kirk-westaway1.png'
  },
  {
    name: "Jade Palace",
    cuisine: "Seafood",
    price: "$$",
    path: "/singapore/other/singapore/jade-palace",
    image: '/images/jade-palace1.png'
  },
  {
    name: "Jag",
    cuisine: "French Contemporary",
    price: "$$$",
    path: "/singapore/other/singapore/jag",
    image: '/images/jag1.png'
  },
  {
    name: "Jalan Sultan Prawn Mee",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/jalan-sultan-prawn-mee",
    image: '/images/jalan-sultan-prawn-mee1.png'
  },
  {
    name: "Jason Penang Cuisine",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/jason-penang-cuisine",
    image: '/images/jason-penang-cuisine1.png'
  },
  {
    name: "Ji De Lai Hainanese Chicken Rice",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/ji-de-lai-hainanese-chicken-rice",
    image: '/images/ji-de-lai-hainanese-chicken-rice1.png'
  },
  {
    name: "Ji Ji Noodle House",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/ji-ji-noodle-house",
    image: '/images/ji-ji-noodle-house1.png'
  },
  {
    name: "Jian Bo Shui Kueh",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/jian-bo-shui-kueh",
    image: '/images/jian-bo-shui-kueh1.png'
  },
  {
    name: "Jian Bo Tiong Bahru Shui Kueh",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/jian-bo-tiong-bahru-shui-kueh",
    image: '/images/jian-bo-tiong-bahru-shui-kueh1.png'
  },
  {
    name: "Jiang-Nan Chun",
    cuisine: "Cantonese",
    price: "$$$",
    path: "/singapore/other/singapore/jiang-nan-chun",
    image: '/images/jiang-nan-chun1.png'
  },
  {
    name: "Jiao Cai Seafood",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/jiao-cai-seafood",
    image: '/images/jiao-cai-seafood1.png'
  },
  {
    name: "Jin Hua",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/jin-hua",
    image: '/images/jin-hua1.png'
  },
  {
    name: "Jin Ting Wan",
    cuisine: "Cantonese",
    price: "$$$$",
    path: "/singapore/other/singapore/jin-ting-wan",
    image: '/images/jin-ting-wan1.png'
  },
  {
    name: "Joo Siah Bak Koot Teh",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/joo-siah-bak-koot-teh",
    image: '/images/joo-siah-bak-koot-teh1.png'
  },
  {
    name: "Jungle",
    cuisine: "Thai",
    price: "$$",
    path: "/singapore/other/singapore/jungle",
    image: '/images/jungle1.png'
  },
  {
    name: "Kang Le Fishball Noodles",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/kang-le-fishball-noodles",
    image: '/images/kang-le-fishball-noodles1.png'
  },
  {
    name: "Kang's Wanton Noodle",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/kangs-wanton-noodle",
    image: '/images/kangs-wanton-noodle1.png'
  },
  {
    name: "Kelantan Kway Chap · Pig Organ Soup",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/kelantan-kway-chap-pig-organ-soup",
    image: '/images/kelantan-kway-chap-pig-organ-soup1.png'
  },
  {
    name: "Keng Eng Kee (Bukit Merah)",
    cuisine: "Singaporean",
    price: "$",
    path: "/singapore/other/singapore/keng-eng-kee-bukit-merah",
    image: '/images/keng-eng-kee-bukit-merah1.png'
  },
  {
    name: "Khiri",
    cuisine: "Thai contemporary",
    price: "$$$",
    path: "/singapore/other/singapore/khiri",
    image: '/images/khiri1.png'
  },
  {
    name: "Ki Su",
    cuisine: "Vegetarian",
    price: "$$",
    path: "/singapore/other/singapore/ki-su",
    image: '/images/ki-su1.png'
  },
  {
    name: "Kitchenman Nasi Lemak",
    cuisine: "Malaysian",
    price: "$",
    path: "/singapore/other/singapore/kitchenman-nasi-lemak",
    image: '/images/kitchenman-nasi-lemak1.png'
  },
  {
    name: "Koh Brother Pig's Organ Soup",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/koh-brother-pigs-organ-soup",
    image: '/images/koh-brother-pigs-organ-soup1.png'
  },
  {
    name: "Kok Sen",
    cuisine: "Singaporean",
    price: "$$",
    path: "/singapore/other/singapore/kok-sen",
    image: '/images/kok-sen1.png'
  },
  {
    name: "Koka Wanton Noodles",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/koka-wanton-noodles",
    image: '/images/koka-wanton-noodles1.png'
  },
  {
    name: "Kotuwa",
    cuisine: "Sri Lankan",
    price: "$$",
    path: "/singapore/other/singapore/kotuwa",
    image: '/images/kotuwa1.png'
  },
  {
    name: "Kwang Kee Teochew Fish Porridge",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/kwang-kee-teochew-fish-porridge",
    image: '/images/kwang-kee-teochew-fish-porridge1.png'
  },
  {
    name: "Kwee Heng",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/kwee-heng",
    image: '/images/kwee-heng1.png'
  },
  {
    name: "La D'Oro",
    cuisine: "Italian Contemporary",
    price: "$$$",
    path: "/singapore/other/singapore/la-doro",
    image: '/images/la-doro1.png'
  },
  {
    name: "Labyrinth",
    cuisine: "Innovative, Singaporean",
    price: "$$$",
    path: "/singapore/other/singapore/labyrinth",
    image: '/images/labyrinth1.png'
  },
  {
    name: "Lagnaa",
    cuisine: "Indian",
    price: "$$",
    path: "/singapore/other/singapore/lagnaa",
    image: '/images/lagnaa1.png'
  },
  {
    name: "Lai Heng Handmade Teochew Kueh",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/lai-heng-handmade-teochew-kueh",
    image: '/images/lai-heng-handmade-teochew-kueh1.png'
  },
  {
    name: "L’Antica Pizzeria da Michele",
    cuisine: "Pizza",
    price: "$$",
    path: "/singapore/other/singapore/lantica-pizzeria-da-michele",
    image: '/images/lantica-pizzeria-da-michele1.png'
  },
  {
    name: "Lao Fu Zi Fried Kway Teow",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/lao-fu-zi-fried-kway-teow",
    image: '/images/lao-fu-zi-fried-kway-teow1.png'
  },
  {
    name: "Lao Jie Fang",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/lao-jie-fang",
    image: '/images/lao-jie-fang1.png'
  },
  {
    name: "Latido",
    cuisine: "Colombian, Contemporary",
    price: "$$",
    path: "/singapore/other/singapore/latido",
    image: '/images/latido1.png'
  },
  {
    name: "Lei Garden",
    cuisine: "Cantonese",
    price: "$$",
    path: "/singapore/other/singapore/lei-garden",
    image: '/images/lei-garden1.png'
  },
  {
    name: "Leon Kee Claypot Pork Rib Soup",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/leon-kee-claypot-pork-rib-soup",
    image: '/images/leon-kee-claypot-pork-rib-soup1.png'
  },
  {
    name: "Lerouy",
    cuisine: "French Contemporary",
    price: "$$$",
    path: "/singapore/other/singapore/lerouy",
    image: '/images/lerouy1.png'
  },
  {
    name: "Les Amis",
    cuisine: "French",
    price: "$$$$",
    path: "/singapore/other/singapore/les-amis",
    image: '/images/les-amis1.png'
  },
  {
    name: "Les Amis",
    cuisine: "French",
    price: "$$$$",
    path: "/singapore/other/singapore/les-amis",
    image: '/images/les-amis1.png'
  },
  {
    name: "Les Ducs",
    cuisine: "French",
    price: "$$",
    path: "/singapore/other/singapore/les-ducs",
    image: '/images/les-ducs1.png'
  },
  {
    name: "Lian He Ben Ji Claypot",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/lian-he-ben-ji-claypot",
    image: '/images/lian-he-ben-ji-claypot1.png'
  },
  {
    name: "Lixin Teochew Fishball Noodles",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/lixin-teochew-fishball-noodles",
    image: '/images/lixin-teochew-fishball-noodles1.png'
  },
  {
    name: "Lolla",
    cuisine: "European Contemporary",
    price: "$$$",
    path: "/singapore/other/singapore/lolla",
    image: '/images/lolla1.png'
  },
  {
    name: "Long Kee Wanton Noodle",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/long-kee-wanton-noodle",
    image: '/images/long-kee-wanton-noodle1.png'
  },
  {
    name: "Loong Kee Yong Tau Fu",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/loong-kee-yong-tau-fu",
    image: '/images/loong-kee-yong-tau-fu1.png'
  },
  {
    name: "Lor 9 Beef Kway Teow",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/lor-9-beef-kway-teow",
    image: '/images/lor-9-beef-kway-teow1.png'
  },
  {
    name: "Lor Mee 178",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/lor-mee-178",
    image: '/images/lor-mee-1781.png'
  },
  {
    name: "Luke's",
    cuisine: "Steakhouse",
    price: "$$",
    path: "/singapore/other/singapore/lukes",
    image: '/images/lukes1.png'
  },
  {
    name: "Ma Cuisine",
    cuisine: "French",
    price: "$$$",
    path: "/singapore/other/singapore/ma-cuisine",
    image: '/images/ma-cuisine1.png'
  },
  {
    name: "Ma Cuisine",
    cuisine: "French",
    price: "$$$",
    path: "/singapore/other/singapore/ma-cuisine",
    image: '/images/ma-cuisine1.png'
  },
  {
    name: "Magpie",
    cuisine: "Contemporary",
    price: "$$",
    path: "/singapore/other/singapore/magpie",
    image: '/images/magpie1.png'
  },
  {
    name: "Mag's Wine Kitchen",
    cuisine: "European Contemporary",
    price: "$$",
    path: "/singapore/other/singapore/mags-wine-kitchen",
    image: '/images/mags-wine-kitchen1.png'
  },
  {
    name: "Maison Boulud",
    cuisine: "French",
    price: "$$",
    path: "/singapore/other/singapore/maison-boulud",
    image: '/images/maison-boulud1.png'
  },
  {
    name: "Majestic",
    cuisine: "Cantonese",
    price: "$$",
    path: "/singapore/other/singapore/majestic",
    image: '/images/majestic1.png'
  },
  {
    name: "Margaret Drive Sin Kee Chicken Rice",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/margaret-drive-sin-kee-chicken-rice",
    image: '/images/margaret-drive-sin-kee-chicken-rice1.png'
  },
  {
    name: "Marguerite",
    cuisine: "European Contemporary",
    price: "$$$",
    path: "/singapore/other/singapore/marguerite",
    image: '/images/marguerite1.png'
  },
  {
    name: "Maxwell Fuzhou Oyster Cake",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/maxwell-fuzhou-oyster-cake",
    image: '/images/maxwell-fuzhou-oyster-cake1.png'
  },
  {
    name: "Mellben Seafood (Ang Mo Kio)",
    cuisine: "Seafood",
    price: "$$",
    path: "/singapore/other/singapore/mellben-seafood-ang-mo-kio",
    image: '/images/mellben-seafood-ang-mo-kio1.png'
  },
  {
    name: "Meta",
    cuisine: "Innovative",
    price: "$$$",
    path: "/singapore/other/singapore/meta",
    image: '/images/meta1.png'
  },
  {
    name: "Meta",
    cuisine: "Innovative",
    price: "$$$",
    path: "/singapore/other/singapore/meta",
    image: '/images/meta1.png'
  },
  {
    name: "Min Jiang at Dempsey",
    cuisine: "Cantonese, Sichuan",
    price: "$$",
    path: "/singapore/other/singapore/min-jiang-at-dempsey",
    image: '/images/min-jiang-at-dempsey1.png'
  },
  {
    name: "MP Thai (Vision Exchange)",
    cuisine: "Thai",
    price: "$$",
    path: "/singapore/other/singapore/mp-thai-vision-exchange",
    image: '/images/mp-thai-vision-exchange1.png'
  },
  {
    name: "Mustard",
    cuisine: "Indian",
    price: "$$",
    path: "/singapore/other/singapore/mustard",
    image: '/images/mustard1.png'
  },
  {
    name: "Mustard Seed",
    cuisine: "Singaporean",
    price: "$$$",
    path: "/singapore/other/singapore/mustard-seed",
    image: '/images/mustard-seed1.png'
  },
  {
    name: "Muthu's Curry",
    cuisine: "Indian",
    price: "$$",
    path: "/singapore/other/singapore/muthus-curry",
    image: '/images/muthus-curry1.png'
  },
  {
    name: "Na Na Curry",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/na-na-curry",
    image: '/images/na-na-curry1.png'
  },
  {
    name: "Na Oh",
    cuisine: "Korean Contemporary",
    price: "$$",
    path: "/singapore/other/singapore/na-oh",
    image: '/images/na-oh1.png'
  },
  {
    name: "Nae:um",
    cuisine: "Korean Contemporary",
    price: "$$$",
    path: "/singapore/other/singapore/naeum",
    image: '/images/naeum1.png'
  },
  {
    name: "Nam Sing Hokkien Fried Mee",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/nam-sing-hokkien-fried-mee",
    image: '/images/nam-sing-hokkien-fried-mee1.png'
  },
  {
    name: "Nasi Lemak Ayam Taliwang",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/nasi-lemak-ayam-taliwang",
    image: '/images/nasi-lemak-ayam-taliwang1.png'
  },
  {
    name: "National Kitchen",
    cuisine: "Singaporean",
    price: "$$",
    path: "/singapore/other/singapore/national-kitchen",
    image: '/images/national-kitchen1.png'
  },
  {
    name: "New Lucky Claypot Rice",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/new-lucky-claypot-rice",
    image: '/images/new-lucky-claypot-rice1.png'
  },
  {
    name: "New World Mutton Soup",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/new-world-mutton-soup",
    image: '/images/new-world-mutton-soup1.png'
  },
  {
    name: "Nicolas",
    cuisine: "French",
    price: "$$",
    path: "/singapore/other/singapore/nicolas",
    image: '/images/nicolas1.png'
  },
  {
    name: "Nómada",
    cuisine: "Spanish Contemporary",
    price: "$$",
    path: "/singapore/other/singapore/nmada",
    image: '/images/nmada1.png'
  },
  {
    name: "No.18 Zion Road Fried Kway Teow",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/no18-zion-road-fried-kway-teow",
    image: '/images/no18-zion-road-fried-kway-teow1.png'
  },
  {
    name: "Nouri",
    cuisine: "Innovative",
    price: "$$$$",
    path: "/singapore/other/singapore/nouri",
    image: '/images/nouri1.png'
  },
  {
    name: "Nyonya Chendol",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/nyonya-chendol",
    image: '/images/nyonya-chendol1.png'
  },
  {
    name: "Odette",
    cuisine: "French Contemporary",
    price: "$$$$",
    path: "/singapore/other/singapore/odette",
    image: '/images/odette1.png'
  },
  {
    name: "Olivia",
    cuisine: "Spanish",
    price: "$$",
    path: "/singapore/other/singapore/olivia",
    image: '/images/olivia1.png'
  },
  {
    name: "Omakase @ Stevens",
    cuisine: "Innovative",
    price: "$$$$",
    path: "/singapore/other/singapore/omakase-stevens",
    image: '/images/omakase-stevens1.png'
  },
  {
    name: "Open Farm Community",
    cuisine: "International",
    price: "$$",
    path: "/singapore/other/singapore/open-farm-community",
    image: '/images/open-farm-community1.png'
  },
  {
    name: "Osteria Mozza",
    cuisine: "Italian",
    price: "$$",
    path: "/singapore/other/singapore/osteria-mozza",
    image: '/images/osteria-mozza1.png'
  },
  {
    name: "Outram Park Fried Kway Teow Mee",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/outram-park-fried-kway-teow-mee",
    image: '/images/outram-park-fried-kway-teow-mee1.png'
  },
  {
    name: "Pangium",
    cuisine: "Peranakan",
    price: "$$$",
    path: "/singapore/other/singapore/pangium",
    image: '/images/pangium1.png'
  },
  {
    name: "Path",
    cuisine: "Asian Contemporary",
    price: "$$$",
    path: "/singapore/other/singapore/path",
    image: '/images/path1.png'
  },
  {
    name: "People's Park Hainanese Chicken Rice",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/peoples-park-hainanese-chicken-rice",
    image: '/images/peoples-park-hainanese-chicken-rice1.png'
  },
  {
    name: "Podi & Poriyal",
    cuisine: "Indian Vegetarian",
    price: "$$",
    path: "/singapore/other/singapore/podi-poriyal",
    image: '/images/podi-poriyal1.png'
  },
  {
    name: "Poh Cheu (KPT Coffee Shop)",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/poh-cheu-kpt-coffee-shop",
    image: '/images/poh-cheu-kpt-coffee-shop1.png'
  },
  {
    name: "Pondok Makan Indonesia",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/pondok-makan-indonesia",
    image: '/images/pondok-makan-indonesia1.png'
  },
  {
    name: "Putien (Kitchener Road)",
    cuisine: "Fujian",
    price: "$$",
    path: "/singapore/other/singapore/putien-kitchener-road",
    image: '/images/putien-kitchener-road1.png'
  },
  {
    name: "Quenino",
    cuisine: "Innovative",
    price: "$$",
    path: "/singapore/other/singapore/quenino",
    image: '/images/quenino1.png'
  },
  {
    name: "Rajarani Thosai",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/rajarani-thosai",
    image: '/images/rajarani-thosai1.png'
  },
  {
    name: "R&B Express",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/rb-express",
    image: '/images/rb-express1.png'
  },
  {
    name: "Redhill Pork Porridge",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/redhill-pork-porridge",
    image: '/images/redhill-pork-porridge1.png'
  },
  {
    name: "Rempapa",
    cuisine: "Singaporean",
    price: "$$",
    path: "/singapore/other/singapore/rempapa",
    image: '/images/rempapa1.png'
  },
  {
    name: "Revolver",
    cuisine: "Barbecue",
    price: "$$",
    path: "/singapore/other/singapore/revolver",
    image: '/images/revolver1.png'
  },
  {
    name: "Roia",
    cuisine: "French Contemporary",
    price: "$$$",
    path: "/singapore/other/singapore/roia",
    image: '/images/roia1.png'
  },
  {
    name: "Rojak‧Popiah & Cockle",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/rojakpopiah-cockle",
    image: '/images/rojakpopiah-cockle1.png'
  },
  {
    name: "Ron Sheng Fish Head Bee Hoon",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/ron-sheng-fish-head-bee-hoon",
    image: '/images/ron-sheng-fish-head-bee-hoon1.png'
  },
  {
    name: "Ru Ji Kitchen",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/ru-ji-kitchen",
    image: '/images/ru-ji-kitchen1.png'
  },
  {
    name: "Saint Pierre",
    cuisine: "French Contemporary",
    price: "$$$$",
    path: "/singapore/other/singapore/saint-pierre",
    image: '/images/saint-pierre1.png'
  },
  {
    name: "San Shu Gong (Geylang)",
    cuisine: "Teochew, Cantonese",
    price: "$$",
    path: "/singapore/other/singapore/san-shu-gong-geylang",
    image: '/images/san-shu-gong-geylang1.png'
  },
  {
    name: "San Xiang Rou Cuo Mian",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/san-xiang-rou-cuo-mian",
    image: '/images/san-xiang-rou-cuo-mian1.png'
  },
  {
    name: "Selamat Datang Warong Pak Sapari",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/selamat-datang-warong-pak-sapari",
    image: '/images/selamat-datang-warong-pak-sapari1.png'
  },
  {
    name: "Seroja",
    cuisine: "Malaysian, Contemporary",
    price: "$$$",
    path: "/singapore/other/singapore/seroja",
    image: '/images/seroja1.png'
  },
  {
    name: "Shang Palace",
    cuisine: "Cantonese",
    price: "$$",
    path: "/singapore/other/singapore/shang-palace",
    image: '/images/shang-palace1.png'
  },
  {
    name: "Shanyuan Teochew Kway Teow Mian",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/shanyuan-teochew-kway-teow-mian",
    image: '/images/shanyuan-teochew-kway-teow-mian1.png'
  },
  {
    name: "Sheng Seng Fried Prawn Noodle",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/sheng-seng-fried-prawn-noodle",
    image: '/images/sheng-seng-fried-prawn-noodle1.png'
  },
  {
    name: "Shi Le Yuan",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/shi-le-yuan",
    image: '/images/shi-le-yuan1.png'
  },
  {
    name: "Shisen Hanten",
    cuisine: "Sichuan, Cantonese",
    price: "$$",
    path: "/singapore/other/singapore/shisen-hanten",
    image: '/images/shisen-hanten1.png'
  },
  {
    name: "Shoukouwa",
    cuisine: "Sushi",
    price: "$$$$",
    path: "/singapore/other/singapore/shoukouwa",
    image: '/images/shoukouwa1.png'
  },
  {
    name: "Shunsui",
    cuisine: "Japanese",
    price: "$$$",
    path: "/singapore/other/singapore/shunsui",
    image: '/images/shunsui1.png'
  },
  {
    name: "Sik Bao Sin",
    cuisine: "Singaporean",
    price: "$$",
    path: "/singapore/other/singapore/sik-bao-sin",
    image: '/images/sik-bao-sin1.png'
  },
  {
    name: "Sin Heng Claypot Bak Koot Teh",
    cuisine: "Singaporean",
    price: "$$",
    path: "/singapore/other/singapore/sin-heng-claypot-bak-koot-teh",
    image: '/images/sin-heng-claypot-bak-koot-teh1.png'
  },
  {
    name: "Sin Hoi Sai (Tiong Bahru)",
    cuisine: "Seafood",
    price: "$$",
    path: "/singapore/other/singapore/sin-hoi-sai-tiong-bahru",
    image: '/images/sin-hoi-sai-tiong-bahru1.png'
  },
  {
    name: "Sin Huat Seafood Restaurant",
    cuisine: "Street Food",
    price: "$$",
    path: "/singapore/other/singapore/sin-huat-seafood-restaurant",
    image: '/images/sin-huat-seafood-restaurant1.png'
  },
  {
    name: "Singapore Famous Rojak",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/singapore-famous-rojak",
    image: '/images/singapore-famous-rojak1.png'
  },
  {
    name: "Singapore Fried Hokkien Mee",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/singapore-fried-hokkien-mee",
    image: '/images/singapore-fried-hokkien-mee1.png'
  },
  {
    name: "Soh Kee Cooked Food",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/soh-kee-cooked-food",
    image: '/images/soh-kee-cooked-food1.png'
  },
  {
    name: "Solo",
    cuisine: "Italian",
    price: "$$",
    path: "/singapore/other/singapore/solo",
    image: '/images/solo1.png'
  },
  {
    name: "Somma",
    cuisine: "Innovative",
    price: "$$$",
    path: "/singapore/other/singapore/somma",
    image: '/images/somma1.png'
  },
  {
    name: "Song Fa Bak Kut Teh (New Bridge Road)",
    cuisine: "Singaporean",
    price: "$",
    path: "/singapore/other/singapore/song-fa-bak-kut-teh-new-bridge-road",
    image: '/images/song-fa-bak-kut-teh-new-bridge-road1.png'
  },
  {
    name: "Song Fish Soup",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/song-fish-soup",
    image: '/images/song-fish-soup1.png'
  },
  {
    name: "Song Kee Teochew Fish Porridge",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/song-kee-teochew-fish-porridge",
    image: '/images/song-kee-teochew-fish-porridge1.png'
  },
  {
    name: "Soon Huat",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/soon-huat",
    image: '/images/soon-huat1.png'
  },
  {
    name: "Sospiri",
    cuisine: "Italian",
    price: "$$",
    path: "/singapore/other/singapore/sospiri",
    image: '/images/sospiri1.png'
  },
  {
    name: "Spago Dining Room",
    cuisine: "Californian, Asian Contemporary",
    price: "$$",
    path: "/singapore/other/singapore/spago-dining-room",
    image: '/images/spago-dining-room1.png'
  },
  {
    name: "Spinach Soup",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/spinach-soup",
    image: '/images/spinach-soup1.png'
  },
  {
    name: "Springleaf Prata Place (Spring Leaf Garden)",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/springleaf-prata-place-spring-leaf-garden",
    image: '/images/springleaf-prata-place-spring-leaf-garden1.png'
  },
  {
    name: "Station by Kotuwa",
    cuisine: "Sri Lankan",
    price: "$$",
    path: "/singapore/other/singapore/station-by-kotuwa",
    image: '/images/station-by-kotuwa1.png'
  },
  {
    name: "Straits Chinese (Cecil Street)",
    cuisine: "Peranakan",
    price: "$$",
    path: "/singapore/other/singapore/straits-chinese-cecil-street",
    image: '/images/straits-chinese-cecil-street1.png'
  },
  {
    name: "Sugarra",
    cuisine: "Basque",
    price: "$$$",
    path: "/singapore/other/singapore/sugarra",
    image: '/images/sugarra1.png'
  },
  {
    name: "Summer Palace",
    cuisine: "Cantonese",
    price: "$$$",
    path: "/singapore/other/singapore/summer-palace",
    image: '/images/summer-palace1.png'
  },
  {
    name: "Summer Pavilion",
    cuisine: "Cantonese",
    price: "$$",
    path: "/singapore/other/singapore/summer-pavilion",
    image: '/images/summer-pavilion1.png'
  },
  {
    name: "Sushi Hare",
    cuisine: "Sushi",
    price: "$$$",
    path: "/singapore/other/singapore/sushi-hare",
    image: '/images/sushi-hare1.png'
  },
  {
    name: "Sushi Ichi",
    cuisine: "Sushi",
    price: "$$$$",
    path: "/singapore/other/singapore/sushi-ichi",
    image: '/images/sushi-ichi1.png'
  },
  {
    name: "Sushi Katori",
    cuisine: "Sushi",
    price: "$$$$",
    path: "/singapore/other/singapore/sushi-katori",
    image: '/images/sushi-katori1.png'
  },
  {
    name: "Sushi Masaaki",
    cuisine: "Sushi",
    price: "$$$$",
    path: "/singapore/other/singapore/sushi-masaaki",
    image: '/images/sushi-masaaki1.png'
  },
  {
    name: "Sushi Ryujiro",
    cuisine: "Sushi",
    price: "$$$$",
    path: "/singapore/other/singapore/sushi-ryujiro",
    image: '/images/sushi-ryujiro1.png'
  },
  {
    name: "Sushi Ryujiro",
    cuisine: "Sushi",
    price: "$$$$",
    path: "/singapore/other/singapore/sushi-ryujiro",
    image: '/images/sushi-ryujiro1.png'
  },
  {
    name: "Sushi Sakuta",
    cuisine: "Sushi",
    price: "$$$$",
    path: "/singapore/other/singapore/sushi-sakuta",
    image: '/images/sushi-sakuta1.png'
  },
  {
    name: "Sushi Sato",
    cuisine: "Sushi",
    price: "$$$",
    path: "/singapore/other/singapore/sushi-sato",
    image: '/images/sushi-sato1.png'
  },
  {
    name: "Sushi Yuki",
    cuisine: "Sushi",
    price: "$$$",
    path: "/singapore/other/singapore/sushi-yuki",
    image: '/images/sushi-yuki1.png'
  },
  {
    name: "Sushi Yuki",
    cuisine: "Sushi",
    price: "$$$",
    path: "/singapore/other/singapore/sushi-yuki",
    image: '/images/sushi-yuki1.png'
  },
  {
    name: "Tai Seng Fish Soup",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/tai-seng-fish-soup",
    image: '/images/tai-seng-fish-soup1.png'
  },
  {
    name: "Tai Wah Pork Noodle",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/tai-wah-pork-noodle",
    image: '/images/tai-wah-pork-noodle1.png'
  },
  {
    name: "Tambuah Mas (Orchard)",
    cuisine: "Indonesian",
    price: "$$",
    path: "/singapore/other/singapore/tambuah-mas-orchard",
    image: '/images/tambuah-mas-orchard1.png'
  },
  {
    name: "Terra",
    cuisine: "Italian Contemporary, Italian and Japanese",
    price: "$$$",
    path: "/singapore/other/singapore/terra",
    image: '/images/terra1.png'
  },
  {
    name: "The 1950's Coffee",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/the-1950s-coffee",
    image: '/images/the-1950s-coffee1.png'
  },
  {
    name: "The Blue Ginger",
    cuisine: "Peranakan",
    price: "$$",
    path: "/singapore/other/singapore/the-blue-ginger",
    image: '/images/the-blue-ginger1.png'
  },
  {
    name: "The Coconut Club (Beach Road)",
    cuisine: "Malaysian",
    price: "$$",
    path: "/singapore/other/singapore/the-coconut-club-beach-road",
    image: '/images/the-coconut-club-beach-road1.png'
  },
  {
    name: "The Prince",
    cuisine: "Middle Eastern",
    price: "$$",
    path: "/singapore/other/singapore/the-prince",
    image: '/images/the-prince1.png'
  },
  {
    name: "Thevar",
    cuisine: "Innovative",
    price: "$$$$",
    path: "/singapore/other/singapore/thevar",
    image: '/images/thevar1.png'
  },
  {
    name: "Tian Tian Hainanese Chicken Rice",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/tian-tian-hainanese-chicken-rice",
    image: '/images/tian-tian-hainanese-chicken-rice1.png'
  },
  {
    name: "Tien Lai Rice Stall",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/tien-lai-rice-stall",
    image: '/images/tien-lai-rice-stall1.png'
  },
  {
    name: "Tiong Bahru Hainanese Boneless Chicken Rice",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/tiong-bahru-hainanese-boneless-chicken-rice",
    image: '/images/tiong-bahru-hainanese-boneless-chicken-rice1.png'
  },
  {
    name: "Tiong Bahru Lien Fa Shui Jing Pau",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/tiong-bahru-lien-fa-shui-jing-pau",
    image: '/images/tiong-bahru-lien-fa-shui-jing-pau1.png'
  },
  {
    name: "Toa Payoh 93 Soon Kueh",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/toa-payoh-93-soon-kueh",
    image: '/images/toa-payoh-93-soon-kueh1.png'
  },
  {
    name: "To-Ricos Kway Chap",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/to-ricos-kway-chap",
    image: '/images/to-ricos-kway-chap1.png'
  },
  {
    name: "Torno Subito",
    cuisine: "Italian",
    price: "$$",
    path: "/singapore/other/singapore/torno-subito",
    image: '/images/torno-subito1.png'
  },
  {
    name: "Torno Subito",
    cuisine: "Italian",
    price: "$$",
    path: "/singapore/other/singapore/torno-subito",
    image: '/images/torno-subito1.png'
  },
  {
    name: "Tow Kwar Pop",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/tow-kwar-pop",
    image: '/images/tow-kwar-pop1.png'
  },
  {
    name: "Traditional Hakka Lui Cha",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/traditional-hakka-lui-cha",
    image: '/images/traditional-hakka-lui-cha1.png'
  },
  {
    name: "True Blue Cuisine",
    cuisine: "Peranakan",
    price: "$$",
    path: "/singapore/other/singapore/true-blue-cuisine",
    image: '/images/true-blue-cuisine1.png'
  },
  {
    name: "Tunglok Heen",
    cuisine: "Cantonese",
    price: "$$",
    path: "/singapore/other/singapore/tunglok-heen",
    image: '/images/tunglok-heen1.png'
  },
  {
    name: "Unforgettable Carrot Cake",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/unforgettable-carrot-cake",
    image: '/images/unforgettable-carrot-cake1.png'
  },
  {
    name: "Un-Yang-Kor-Dai",
    cuisine: "Thai",
    price: "$$",
    path: "/singapore/other/singapore/un-yang-kor-dai",
    image: '/images/un-yang-kor-dai1.png'
  },
  {
    name: "Ushidoki Wagyu Kaiseki",
    cuisine: "Japanese",
    price: "$$$$",
    path: "/singapore/other/singapore/ushidoki-wagyu-kaiseki",
    image: '/images/ushidoki-wagyu-kaiseki1.png'
  },
  {
    name: "Vue",
    cuisine: "European Contemporary",
    price: "$$$",
    path: "/singapore/other/singapore/vue",
    image: '/images/vue1.png'
  },
  {
    name: "Wah Lok",
    cuisine: "Cantonese",
    price: "$$",
    path: "/singapore/other/singapore/wah-lok",
    image: '/images/wah-lok1.png'
  },
  {
    name: "Wah Lok",
    cuisine: "Cantonese",
    price: "$$",
    path: "/singapore/other/singapore/wah-lok",
    image: '/images/wah-lok1.png'
  },
  {
    name: "Waku Ghin",
    cuisine: "Japanese Contemporary",
    price: "$$$$",
    path: "/singapore/other/singapore/waku-ghin",
    image: '/images/waku-ghin1.png'
  },
  {
    name: "Wakuda",
    cuisine: "Japanese Contemporary",
    price: "$$$",
    path: "/singapore/other/singapore/wakuda",
    image: '/images/wakuda1.png'
  },
  {
    name: "Whampoa Soya Bean & Grass Jelly Drinks",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/whampoa-soya-bean-grass-jelly-drinks",
    image: '/images/whampoa-soya-bean-grass-jelly-drinks1.png'
  },
  {
    name: "Whitegrass",
    cuisine: "French Contemporary",
    price: "$$$",
    path: "/singapore/other/singapore/whitegrass",
    image: '/images/whitegrass1.png'
  },
  {
    name: "Whole Earth",
    cuisine: "Vegetarian",
    price: "$$",
    path: "/singapore/other/singapore/whole-earth",
    image: '/images/whole-earth1.png'
  },
  {
    name: "Willow",
    cuisine: "Asian Contemporary",
    price: "$$$",
    path: "/singapore/other/singapore/willow",
    image: '/images/willow1.png'
  },
  {
    name: "Wok Hei Hor Fun",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/wok-hei-hor-fun",
    image: '/images/wok-hei-hor-fun1.png'
  },
  {
    name: "Xing Yun Hainanese Boneless Chicken Rice",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/xing-yun-hainanese-boneless-chicken-rice",
    image: '/images/xing-yun-hainanese-boneless-chicken-rice1.png'
  },
  {
    name: "Yì By Jereme Leung",
    cuisine: "Chinese Contemporary",
    price: "$$",
    path: "/singapore/other/singapore/y-by-jereme-leung",
    image: '/images/y-by-jereme-leung1.png'
  },
  {
    name: "Yan Ting",
    cuisine: "Cantonese",
    price: "$$",
    path: "/singapore/other/singapore/yan-ting",
    image: '/images/yan-ting1.png'
  },
  {
    name: "Ye Tang",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/ye-tang",
    image: '/images/ye-tang1.png'
  },
  {
    name: "Yhingthai Palace",
    cuisine: "Thai",
    price: "$$",
    path: "/singapore/other/singapore/yhingthai-palace",
    image: '/images/yhingthai-palace1.png'
  },
  {
    name: "Yi Pin Wei Braised Duck．Kway Chap",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/yi-pin-wei-braised-duckkway-chap",
    image: '/images/yi-pin-wei-braised-duckkway-chap1.png'
  },
  {
    name: "Yong Chun Wan Ton Noodle",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/yong-chun-wan-ton-noodle",
    image: '/images/yong-chun-wan-ton-noodle1.png'
  },
  {
    name: "Yong Fu",
    cuisine: "Ningbo",
    price: "$$$$",
    path: "/singapore/other/singapore/yong-fu",
    image: '/images/yong-fu1.png'
  },
  {
    name: "Yong Kee Claypot Bak Kut Teh",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/yong-kee-claypot-bak-kut-teh",
    image: '/images/yong-kee-claypot-bak-kut-teh1.png'
  },
  {
    name: "Yong Xiang Xing Tou Fu",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/yong-xiang-xing-tou-fu",
    image: '/images/yong-xiang-xing-tou-fu1.png'
  },
  {
    name: "Yummy Sarawak Kolo Mee",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/yummy-sarawak-kolo-mee",
    image: '/images/yummy-sarawak-kolo-mee1.png'
  },
  {
    name: "Zai Shun Curry Fish Head",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/zai-shun-curry-fish-head",
    image: '/images/zai-shun-curry-fish-head1.png'
  },
  {
    name: "Zhang Ji Shanghai La Mian Xiao Long Bao",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/zhang-ji-shanghai-la-mian-xiao-long-bao",
    image: '/images/zhang-ji-shanghai-la-mian-xiao-long-bao1.png'
  },
  {
    name: "Zheng Zhi Wen Ji Pig's Organ Soup",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/zheng-zhi-wen-ji-pigs-organ-soup",
    image: '/images/zheng-zhi-wen-ji-pigs-organ-soup1.png'
  },
  {
    name: "Zhi Wei Xian Zion Road Big Prawn Noodle",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/zhi-wei-xian-zion-road-big-prawn-noodle",
    image: '/images/zhi-wei-xian-zion-road-big-prawn-noodle1.png'
  },
  {
    name: "Zhup Zhup",
    cuisine: "Noodles",
    price: "$",
    path: "/singapore/other/singapore/zhup-zhup",
    image: '/images/zhup-zhup1.png'
  },
  {
    name: "Zi Jing Cheng Hainanese Boneless Chicken Rice",
    cuisine: "Street Food",
    price: "$",
    path: "/singapore/other/singapore/zi-jing-cheng-hainanese-boneless-chicken-rice",
    image: '/images/zi-jing-cheng-hainanese-boneless-chicken-rice1.png'
  },
  {
    name: "Zén",
    cuisine: "European Contemporary",
    price: "$$$$",
    path: "/singapore/other/singapore/zn",
    image: '/images/zn1.png'
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
