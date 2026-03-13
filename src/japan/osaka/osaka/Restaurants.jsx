import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Osaka";

const restaurants = [
  {
    name: "Ñ",
    cuisine: "Spanish",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/",
    image: '/images/1.png'
  },
  {
    name: "a canto",
    cuisine: "Italian",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/a-canto",
    image: '/images/a-canto1.png'
  },
  {
    name: "ad hoc",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/ad-hoc",
    image: '/images/ad-hoc1.png'
  },
  {
    name: "agnel d'or",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/agnel-dor",
    image: '/images/agnel-dor1.png'
  },
  {
    name: "Ajikitcho Bumbuan",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/ajikitcho-bumbuan",
    image: '/images/ajikitcho-bumbuan1.png'
  },
  {
    name: "Ajikitcho Horieten",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/ajikitcho-horieten",
    image: '/images/ajikitcho-horieten1.png'
  },
  {
    name: "AKA to SHIRO",
    cuisine: "Sushi",
    price: "¥¥",
    path: "/japan/osaka/osaka/aka-to-shiro",
    image: '/images/aka-to-shiro1.png'
  },
  {
    name: "Alarde",
    cuisine: "Spanish",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/alarde",
    image: '/images/alarde1.png'
  },
  {
    name: "anu",
    cuisine: "Italian",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/anu",
    image: '/images/anu1.png'
  },
  {
    name: "Aozora blue",
    cuisine: "Udon",
    price: "¥",
    path: "/japan/osaka/osaka/aozora-blue",
    image: '/images/aozora-blue1.png'
  },
  {
    name: "Artisan",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/artisan",
    image: '/images/artisan1.png'
  },
  {
    name: "Asador ROCA",
    cuisine: "Spanish",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/asador-roca",
    image: '/images/asador-roca1.png'
  },
  {
    name: "atelier HANADA",
    cuisine: "Chinese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/atelier-hanada",
    image: '/images/atelier-hanada1.png'
  },
  {
    name: "au soleil couchant",
    cuisine: "French",
    price: "¥¥",
    path: "/japan/osaka/osaka/au-soleil-couchant",
    image: '/images/au-soleil-couchant1.png'
  },
  {
    name: "Ayamedo",
    cuisine: "Soba",
    price: "¥",
    path: "/japan/osaka/osaka/ayamedo",
    image: '/images/ayamedo1.png'
  },
  {
    name: "Ayamuya",
    cuisine: "Yakitori",
    price: "¥¥",
    path: "/japan/osaka/osaka/ayamuya",
    image: '/images/ayamuya1.png'
  },
  {
    name: "Az",
    cuisine: "Chinese",
    price: "¥¥",
    path: "/japan/osaka/osaka/az",
    image: '/images/az1.png'
  },
  {
    name: "Benikurage",
    cuisine: "Izakaya",
    price: "¥¥",
    path: "/japan/osaka/osaka/benikurage",
    image: '/images/benikurage1.png'
  },
  {
    name: "Bistro des Chenapans",
    cuisine: "French",
    price: "¥¥",
    path: "/japan/osaka/osaka/bistro-des-chenapans",
    image: '/images/bistro-des-chenapans1.png'
  },
  {
    name: "bistrot neuf",
    cuisine: "French",
    price: "¥¥",
    path: "/japan/osaka/osaka/bistrot-neuf",
    image: '/images/bistrot-neuf1.png'
  },
  {
    name: "Brasserie RÉGINE",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/brasserie-rgine",
    image: '/images/brasserie-rgine1.png'
  },
  {
    name: "capi",
    cuisine: "Innovative",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/capi",
    image: '/images/capi1.png'
  },
  {
    name: "Chi-Fu",
    cuisine: "Chinese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/chi-fu",
    image: '/images/chi-fu1.png'
  },
  {
    name: "Chukashunsai Morimoto",
    cuisine: "Chinese",
    price: "¥¥",
    path: "/japan/osaka/osaka/chukashunsai-morimoto",
    image: '/images/chukashunsai-morimoto1.png'
  },
  {
    name: "Chukasoba Mugen",
    cuisine: "Ramen",
    price: "¥",
    path: "/japan/osaka/osaka/chukasoba-mugen",
    image: '/images/chukasoba-mugen1.png'
  },
  {
    name: "Chukasoba Uemachi",
    cuisine: "Ramen",
    price: "¥",
    path: "/japan/osaka/osaka/chukasoba-uemachi",
    image: '/images/chukasoba-uemachi1.png'
  },
  {
    name: "Claro",
    cuisine: "Spanish",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/claro",
    image: '/images/claro1.png'
  },
  {
    name: "Daidokoro Kamiya",
    cuisine: "Izakaya",
    price: "¥¥",
    path: "/japan/osaka/osaka/daidokoro-kamiya",
    image: '/images/daidokoro-kamiya1.png'
  },
  {
    name: "DELI a Casa",
    cuisine: "Italian",
    price: "¥¥",
    path: "/japan/osaka/osaka/deli-a-casa",
    image: '/images/deli-a-casa1.png'
  },
  {
    name: "Différence",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/diffrence",
    image: '/images/diffrence1.png'
  },
  {
    name: "DIVA",
    cuisine: "French",
    price: "¥¥",
    path: "/japan/osaka/osaka/diva",
    image: '/images/diva1.png'
  },
  {
    name: "Donostia",
    cuisine: "Spanish",
    price: "¥¥",
    path: "/japan/osaka/osaka/donostia",
    image: '/images/donostia1.png'
  },
  {
    name: "Doshincho Washoku Zui",
    cuisine: "Japanese",
    price: "¥¥",
    path: "/japan/osaka/osaka/doshincho-washoku-zui",
    image: '/images/doshincho-washoku-zui1.png'
  },
  {
    name: "DuKKAh",
    cuisine: "Spanish",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/dukkah",
    image: '/images/dukkah1.png'
  },
  {
    name: "Empathie",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/empathie",
    image: '/images/empathie1.png'
  },
  {
    name: "ETXOLA",
    cuisine: "Spanish",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/etxola",
    image: '/images/etxola1.png'
  },
  {
    name: "Fujiya 1935",
    cuisine: "Innovative",
    price: "¥¥¥¥",
    path: "/japan/osaka/osaka/fujiya-1935",
    image: '/images/fujiya-19351.png'
  },
  {
    name: "Fushimimachi Kakoiyama",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/osaka/osaka/fushimimachi-kakoiyama",
    image: '/images/fushimimachi-kakoiyama1.png'
  },
  {
    name: "gastroteka bimendi",
    cuisine: "Spanish",
    price: "¥¥",
    path: "/japan/osaka/osaka/gastroteka-bimendi",
    image: '/images/gastroteka-bimendi1.png'
  },
  {
    name: "genso",
    cuisine: "French, Contemporary",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/genso",
    image: '/images/genso1.png'
  },
  {
    name: "Gochiso nene",
    cuisine: "Tempura",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/gochiso-nene",
    image: '/images/gochiso-nene1.png'
  },
  {
    name: "Grand rocher",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/grand-rocher",
    image: '/images/grand-rocher1.png'
  },
  {
    name: "Hachi",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/osaka/osaka/hachi",
    image: '/images/hachi1.png'
  },
  {
    name: "HAJIME",
    cuisine: "Innovative",
    price: "¥¥¥¥",
    path: "/japan/osaka/osaka/hajime",
    image: '/images/hajime1.png'
  },
  {
    name: "Higashichaya Nakamura",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/osaka/osaka/higashichaya-nakamura",
    image: '/images/higashichaya-nakamura1.png'
  },
  {
    name: "Hiraishi",
    cuisine: "Tempura",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/hiraishi",
    image: '/images/hiraishi1.png'
  },
  {
    name: "Hommachi Seimenjo Chukasobakobo",
    cuisine: "Ramen",
    price: "¥",
    path: "/japan/osaka/osaka/hommachi-seimenjo-chukasobakobo",
    image: '/images/hommachi-seimenjo-chukasobakobo1.png'
  },
  {
    name: "Hozan",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/hozan",
    image: '/images/hozan1.png'
  },
  {
    name: "Ichiju Nisai Ueno Minoten",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/ichiju-nisai-ueno-minoten",
    image: '/images/ichiju-nisai-ueno-minoten1.png'
  },
  {
    name: "IDÉAL bistro",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/idal-bistro",
    image: '/images/idal-bistro1.png'
  },
  {
    name: "il Centrino",
    cuisine: "Italian",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/il-centrino",
    image: '/images/il-centrino1.png'
  },
  {
    name: "il luogo di TAKEUCHI",
    cuisine: "Italian",
    price: "¥¥",
    path: "/japan/osaka/osaka/il-luogo-di-takeuchi",
    image: '/images/il-luogo-di-takeuchi1.png'
  },
  {
    name: "Iroha",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/iroha",
    image: '/images/iroha1.png'
  },
  {
    name: "isolata",
    cuisine: "Italian",
    price: "¥¥",
    path: "/japan/osaka/osaka/isolata",
    image: '/images/isolata1.png'
  },
  {
    name: "Iwaki",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/iwaki",
    image: '/images/iwaki1.png'
  },
  {
    name: "Izakaya Tokitame",
    cuisine: "Izakaya",
    price: "¥¥",
    path: "/japan/osaka/osaka/izakaya-tokitame",
    image: '/images/izakaya-tokitame1.png'
  },
  {
    name: "JIANG NAN CHUN",
    cuisine: "Chinese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/jiang-nan-chun",
    image: '/images/jiang-nan-chun1.png'
  },
  {
    name: "JIBUNDOKI",
    cuisine: "Teppanyaki, Okonomiyaki",
    price: "¥¥",
    path: "/japan/osaka/osaka/jibundoki",
    image: '/images/jibundoki1.png'
  },
  {
    name: "KAHALA",
    cuisine: "Innovative",
    price: "¥¥¥¥",
    path: "/japan/osaka/osaka/kahala",
    image: '/images/kahala1.png'
  },
  {
    name: "Kaishoku Shimizu",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/kaishoku-shimizu",
    image: '/images/kaishoku-shimizu1.png'
  },
  {
    name: "Kamado",
    cuisine: "Contemporary",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/kamado",
    image: '/images/kamado1.png'
  },
  {
    name: "Kamekichi",
    cuisine: "French",
    price: "¥¥",
    path: "/japan/osaka/osaka/kamekichi",
    image: '/images/kamekichi1.png'
  },
  {
    name: "Kamigata Rainbow",
    cuisine: "Ramen",
    price: "¥",
    path: "/japan/osaka/osaka/kamigata-rainbow",
    image: '/images/kamigata-rainbow1.png'
  },
  {
    name: "Kamigatachuka SHINTANI",
    cuisine: "Chinese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/kamigatachuka-shintani",
    image: '/images/kamigatachuka-shintani1.png'
  },
  {
    name: "KAMINOZA",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/kaminoza",
    image: '/images/kaminoza1.png'
  },
  {
    name: "Kannomiho",
    cuisine: "Izakaya",
    price: "¥¥",
    path: "/japan/osaka/osaka/kannomiho",
    image: '/images/kannomiho1.png'
  },
  {
    name: "Kashiwaya Osaka Kitashinchi",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/osaka/osaka/kashiwaya-osaka-kitashinchi",
    image: '/images/kashiwaya-osaka-kitashinchi1.png'
  },
  {
    name: "Kashiwaya Osaka Senriyama",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/kashiwaya-osaka-senriyama",
    image: '/images/kashiwaya-osaka-senriyama1.png'
  },
  {
    name: "Kassen Iritani",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/kassen-iritani",
    image: '/images/kassen-iritani1.png'
  },
  {
    name: "Katamachi Kawaguchi",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/katamachi-kawaguchi",
    image: '/images/katamachi-kawaguchi1.png'
  },
  {
    name: "Kawahara",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/kawahara",
    image: '/images/kawahara1.png'
  },
  {
    name: "Kinari",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/kinari",
    image: '/images/kinari1.png'
  },
  {
    name: "Kirari",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/kirari",
    image: '/images/kirari1.png'
  },
  {
    name: "Kitashinchi Fukutatei",
    cuisine: "Steakhouse",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/kitashinchi-fukutatei",
    image: '/images/kitashinchi-fukutatei1.png'
  },
  {
    name: "Kitashinchi Fukutatei The UKAI",
    cuisine: "Steakhouse",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/kitashinchi-fukutatei-the-ukai",
    image: '/images/kitashinchi-fukutatei-the-ukai1.png'
  },
  {
    name: "Kitashinchi Gyosai Masashi",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/kitashinchi-gyosai-masashi",
    image: '/images/kitashinchi-gyosai-masashi1.png'
  },
  {
    name: "Kitashinchi Kushikatsu Bon",
    cuisine: "Kushiage",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/kitashinchi-kushikatsu-bon",
    image: '/images/kitashinchi-kushikatsu-bon1.png'
  },
  {
    name: "Kitashinchi Okurano",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/kitashinchi-okurano",
    image: '/images/kitashinchi-okurano1.png'
  },
  {
    name: "Kitashinchi Shien",
    cuisine: "Yakitori",
    price: "¥¥",
    path: "/japan/osaka/osaka/kitashinchi-shien",
    image: '/images/kitashinchi-shien1.png'
  },
  {
    name: "Kitashinchi Yumiba Shinnosuke",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/kitashinchi-yumiba-shinnosuke",
    image: '/images/kitashinchi-yumiba-shinnosuke1.png'
  },
  {
    name: "Konishi",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/konishi",
    image: '/images/konishi1.png'
  },
  {
    name: "Konoha",
    cuisine: "Japanese, Tempura",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/konoha",
    image: '/images/konoha1.png'
  },
  {
    name: "Koryu",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/osaka/osaka/koryu",
    image: '/images/koryu1.png'
  },
  {
    name: "Koryu Keishin",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/koryu-keishin",
    image: '/images/koryu-keishin1.png'
  },
  {
    name: "ku:de kiyo",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/kude-kiyo",
    image: '/images/kude-kiyo1.png'
  },
  {
    name: "Kurubushi",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/kurubushi",
    image: '/images/kurubushi1.png'
  },
  {
    name: "kushiage 010",
    cuisine: "Kushiage",
    price: "¥¥",
    path: "/japan/osaka/osaka/kushiage-010",
    image: '/images/kushiage-0101.png'
  },
  {
    name: "Kushikatsu Daibon",
    cuisine: "Kushiage",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/kushikatsu-daibon",
    image: '/images/kushikatsu-daibon1.png'
  },
  {
    name: "Kushikatsu Gojoya",
    cuisine: "Kushiage",
    price: "¥",
    path: "/japan/osaka/osaka/kushikatsu-gojoya",
    image: '/images/kushikatsu-gojoya1.png'
  },
  {
    name: "KushinGarando",
    cuisine: "Chinese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/kushingarando",
    image: '/images/kushingarando1.png'
  },
  {
    name: "Kyomachibori Nakamura",
    cuisine: "Tonkatsu",
    price: "¥¥",
    path: "/japan/osaka/osaka/kyomachibori-nakamura",
    image: '/images/kyomachibori-nakamura1.png'
  },
  {
    name: "La Baie",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/la-baie",
    image: '/images/la-baie1.png'
  },
  {
    name: "La Bécasse",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/la-bcasse",
    image: '/images/la-bcasse1.png'
  },
  {
    name: "La bonne tâche",
    cuisine: "French",
    price: "¥¥",
    path: "/japan/osaka/osaka/la-bonne-tche",
    image: '/images/la-bonne-tche1.png'
  },
  {
    name: "La Cime",
    cuisine: "French, Contemporary",
    price: "¥¥¥¥",
    path: "/japan/osaka/osaka/la-cime",
    image: '/images/la-cime1.png'
  },
  {
    name: "La Kanro",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/la-kanro",
    image: '/images/la-kanro1.png'
  },
  {
    name: "La Lucciola",
    cuisine: "Italian",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/la-lucciola",
    image: '/images/la-lucciola1.png'
  },
  {
    name: "LACERBA",
    cuisine: "Italian",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/lacerba",
    image: '/images/lacerba1.png'
  },
  {
    name: "L'angolo",
    cuisine: "European",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/langolo",
    image: '/images/langolo1.png'
  },
  {
    name: "Le Caneton",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/le-caneton",
    image: '/images/le-caneton1.png'
  },
  {
    name: "Le Logis h",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/le-logis-h",
    image: '/images/le-logis-h1.png'
  },
  {
    name: "Le Nez",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/le-nez",
    image: '/images/le-nez1.png'
  },
  {
    name: "LE PONT DE CIEL",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/le-pont-de-ciel",
    image: '/images/le-pont-de-ciel1.png'
  },
  {
    name: "Le progrès",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/le-progrs",
    image: '/images/le-progrs1.png'
  },
  {
    name: "LES SOUVENIRS",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/les-souvenirs",
    image: '/images/les-souvenirs1.png'
  },
  {
    name: "LIAISON",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/liaison",
    image: '/images/liaison1.png'
  },
  {
    name: "LOUISE",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/louise",
    image: '/images/louise1.png'
  },
  {
    name: "Macauda",
    cuisine: "Italian",
    price: "¥¥",
    path: "/japan/osaka/osaka/macauda",
    image: '/images/macauda1.png'
  },
  {
    name: "macua",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/macua",
    image: '/images/macua1.png'
  },
  {
    name: "Man-u",
    cuisine: "Oden",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/man-u",
    image: '/images/man-u1.png'
  },
  {
    name: "Mashino Ken",
    cuisine: "Chinese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/mashino-ken",
    image: '/images/mashino-ken1.png'
  },
  {
    name: "Masuda",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/masuda",
    image: '/images/masuda1.png'
  },
  {
    name: "MATO",
    cuisine: "Chinese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/mato",
    image: '/images/mato1.png'
  },
  {
    name: "Matsuzushi",
    cuisine: "Sushi",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/matsuzushi",
    image: '/images/matsuzushi1.png'
  },
  {
    name: "Matsuzushi Tanigawa",
    cuisine: "Sushi",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/matsuzushi-tanigawa",
    image: '/images/matsuzushi-tanigawa1.png'
  },
  {
    name: "Michino Le Tourbillon",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/michino-le-tourbillon",
    image: '/images/michino-le-tourbillon1.png'
  },
  {
    name: "milpa",
    cuisine: "Mexican, Contemporary",
    price: "¥¥¥¥",
    path: "/japan/osaka/osaka/milpa",
    image: '/images/milpa1.png'
  },
  {
    name: "Miyamoto",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/miyamoto",
    image: '/images/miyamoto1.png'
  },
  {
    name: "Mugito Mensuke",
    cuisine: "Ramen",
    price: "¥",
    path: "/japan/osaka/osaka/mugito-mensuke",
    image: '/images/mugito-mensuke1.png'
  },
  {
    name: "Naniwa Okina",
    cuisine: "Soba",
    price: "¥",
    path: "/japan/osaka/osaka/naniwa-okina",
    image: '/images/naniwa-okina1.png'
  },
  {
    name: "Naniwakappo NOBORU",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/naniwakappo-noboru",
    image: '/images/naniwakappo-noboru1.png'
  },
  {
    name: "Naniwaryori Satou",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/naniwaryori-satou",
    image: '/images/naniwaryori-satou1.png'
  },
  {
    name: "Naniwaryori Yu",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/naniwaryori-yu",
    image: '/images/naniwaryori-yu1.png'
  },
  {
    name: "NELU KORAIBASHI",
    cuisine: "French, Contemporary",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/nelu-koraibashi",
    image: '/images/nelu-koraibashi1.png'
  },
  {
    name: "nent",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/nent",
    image: '/images/nent1.png'
  },
  {
    name: "Nihonshuzammai Utsutsuyo",
    cuisine: "Izakaya",
    price: "¥¥",
    path: "/japan/osaka/osaka/nihonshuzammai-utsutsuyo",
    image: '/images/nihonshuzammai-utsutsuyo1.png'
  },
  {
    name: "Nikomi Kimura",
    cuisine: "Izakaya",
    price: "¥¥",
    path: "/japan/osaka/osaka/nikomi-kimura",
    image: '/images/nikomi-kimura1.png'
  },
  {
    name: "Nishideria",
    cuisine: "Italian",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/nishideria",
    image: '/images/nishideria1.png'
  },
  {
    name: "Nishino",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/osaka/osaka/nishino",
    image: '/images/nishino1.png'
  },
  {
    name: "Nishishinsaibashi Yuno",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/nishishinsaibashi-yuno",
    image: '/images/nishishinsaibashi-yuno1.png'
  },
  {
    name: "Nishitemma Ichigaya",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/nishitemma-ichigaya",
    image: '/images/nishitemma-ichigaya1.png'
  },
  {
    name: "Nishitemma Nakamura",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/nishitemma-nakamura",
    image: '/images/nishitemma-nakamura1.png'
  },
  {
    name: "Numata",
    cuisine: "Tempura",
    price: "¥¥¥¥",
    path: "/japan/osaka/osaka/numata",
    image: '/images/numata1.png'
  },
  {
    name: "Numata Sou",
    cuisine: "Tempura",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/numata-sou",
    image: '/images/numata-sou1.png'
  },
  {
    name: "Ogimachi Udonya Asuro",
    cuisine: "Udon",
    price: "¥",
    path: "/japan/osaka/osaka/ogimachi-udonya-asuro",
    image: '/images/ogimachi-udonya-asuro1.png'
  },
  {
    name: "Oimatsu Hisano",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/osaka/osaka/oimatsu-hisano",
    image: '/images/oimatsu-hisano1.png'
  },
  {
    name: "Oimatsu Kitagawa",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/osaka/osaka/oimatsu-kitagawa",
    image: '/images/oimatsu-kitagawa1.png'
  },
  {
    name: "OIMATSU Tempura Suzuki",
    cuisine: "Tempura",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/oimatsu-tempura-suzuki",
    image: '/images/oimatsu-tempura-suzuki1.png'
  },
  {
    name: "Oku",
    cuisine: "Unagi / Freshwater Eel",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/oku",
    image: '/images/oku1.png'
  },
  {
    name: "Ono",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/osaka/osaka/ono",
    image: '/images/ono1.png'
  },
  {
    name: "Oribe",
    cuisine: "Teppanyaki, Okonomiyaki",
    price: "¥¥",
    path: "/japan/osaka/osaka/oribe",
    image: '/images/oribe1.png'
  },
  {
    name: "ORIGIN",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/origin",
    image: '/images/origin1.png'
  },
  {
    name: "Oryori Amenimomakezu",
    cuisine: "Japanese",
    price: "¥¥",
    path: "/japan/osaka/osaka/oryori-amenimomakezu",
    image: '/images/oryori-amenimomakezu1.png'
  },
  {
    name: "Oryori Horikawa",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/oryori-horikawa",
    image: '/images/oryori-horikawa1.png'
  },
  {
    name: "Oryori Matsumura",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/oryori-matsumura",
    image: '/images/oryori-matsumura1.png'
  },
  {
    name: "Oryori Nonohara",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/oryori-nonohara",
    image: '/images/oryori-nonohara1.png'
  },
  {
    name: "Oryori Yamada",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/osaka/osaka/oryori-yamada",
    image: '/images/oryori-yamada1.png'
  },
  {
    name: "Osteria La Cicerchia",
    cuisine: "Italian",
    price: "¥¥",
    path: "/japan/osaka/osaka/osteria-la-cicerchia",
    image: '/images/osteria-la-cicerchia1.png'
  },
  {
    name: "Osteria Ottanta Sette",
    cuisine: "Italian",
    price: "¥¥",
    path: "/japan/osaka/osaka/osteria-ottanta-sette",
    image: '/images/osteria-ottanta-sette1.png'
  },
  {
    name: "Otsuki",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/otsuki",
    image: '/images/otsuki1.png'
  },
  {
    name: "Oudon Yomogi",
    cuisine: "Udon",
    price: "¥¥",
    path: "/japan/osaka/osaka/oudon-yomogi",
    image: '/images/oudon-yomogi1.png'
  },
  {
    name: "P greco",
    cuisine: "Italian",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/p-greco",
    image: '/images/p-greco1.png'
  },
  {
    name: "Pebble",
    cuisine: "Italian",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/pebble",
    image: '/images/pebble1.png'
  },
  {
    name: "Pierre",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/pierre",
    image: '/images/pierre1.png'
  },
  {
    name: "PITAK GOHAN",
    cuisine: "Thai",
    price: "¥¥",
    path: "/japan/osaka/osaka/pitak-gohan",
    image: '/images/pitak-gohan1.png'
  },
  {
    name: "Point",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/point",
    image: '/images/point1.png'
  },
  {
    name: "PONTE VECCHIO",
    cuisine: "Italian",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/ponte-vecchio",
    image: '/images/ponte-vecchio1.png'
  },
  {
    name: "PRESQU'ÎLE",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/presqule",
    image: '/images/presqule1.png'
  },
  {
    name: "PRESTAU",
    cuisine: "Italian",
    price: "¥¥",
    path: "/japan/osaka/osaka/prestau",
    image: '/images/prestau1.png'
  },
  {
    name: "Óptimo",
    cuisine: "Spanish",
    price: "¥¥",
    path: "/japan/osaka/osaka/ptimo",
    image: '/images/ptimo1.png'
  },
  {
    name: "QUINTOCANTO",
    cuisine: "Italian",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/quintocanto",
    image: '/images/quintocanto1.png'
  },
  {
    name: "Rakushin",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/osaka/osaka/rakushin",
    image: '/images/rakushin1.png'
  },
  {
    name: "Ramen Hayato",
    cuisine: "Ramen",
    price: "¥",
    path: "/japan/osaka/osaka/ramen-hayato",
    image: '/images/ramen-hayato1.png'
  },
  {
    name: "Ramen Kuon",
    cuisine: "Ramen",
    price: "¥",
    path: "/japan/osaka/osaka/ramen-kuon",
    image: '/images/ramen-kuon1.png'
  },
  {
    name: "ricuperare TAKEUCHI",
    cuisine: "Italian",
    price: "¥¥",
    path: "/japan/osaka/osaka/ricuperare-takeuchi",
    image: '/images/ricuperare-takeuchi1.png'
  },
  {
    name: "RiVi",
    cuisine: "Contemporary",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/rivi",
    image: '/images/rivi1.png'
  },
  {
    name: "Rooots Nakanoshima",
    cuisine: "Contemporary",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/rooots-nakanoshima",
    image: '/images/rooots-nakanoshima1.png'
  },
  {
    name: "Ryoriya Inaya",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/osaka/osaka/ryoriya-inaya",
    image: '/images/ryoriya-inaya1.png'
  },
  {
    name: "Sakamoto Sushi",
    cuisine: "Sushi",
    price: "¥¥",
    path: "/japan/osaka/osaka/sakamoto-sushi",
    image: '/images/sakamoto-sushi1.png'
  },
  {
    name: "Sakeya Sakana Yoshimura",
    cuisine: "Izakaya",
    price: "¥¥",
    path: "/japan/osaka/osaka/sakeya-sakana-yoshimura",
    image: '/images/sakeya-sakana-yoshimura1.png'
  },
  {
    name: "Sawada",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/osaka/osaka/sawada",
    image: '/images/sawada1.png'
  },
  {
    name: "Sennarizushi",
    cuisine: "Sushi",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/sennarizushi",
    image: '/images/sennarizushi1.png'
  },
  {
    name: "Shimmachi Adachi",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/shimmachi-adachi",
    image: '/images/shimmachi-adachi1.png'
  },
  {
    name: "Shinchi Yamamoto",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/osaka/osaka/shinchi-yamamoto",
    image: '/images/shinchi-yamamoto1.png'
  },
  {
    name: "Shintaro",
    cuisine: "Tempura",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/shintaro",
    image: '/images/shintaro1.png'
  },
  {
    name: "Shitennoji Hayauchi",
    cuisine: "Soba",
    price: "¥",
    path: "/japan/osaka/osaka/shitennoji-hayauchi",
    image: '/images/shitennoji-hayauchi1.png'
  },
  {
    name: "Shokudo Akari",
    cuisine: "Izakaya",
    price: "¥¥",
    path: "/japan/osaka/osaka/shokudo-akari",
    image: '/images/shokudo-akari1.png'
  },
  {
    name: "Shokudo Tanoshi",
    cuisine: "Izakaya",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/shokudo-tanoshi",
    image: '/images/shokudo-tanoshi1.png'
  },
  {
    name: "Shokudo Uchino",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/shokudo-uchino",
    image: '/images/shokudo-uchino1.png'
  },
  {
    name: "Shuko Osaka Manpukudou",
    cuisine: "Japanese",
    price: "¥¥",
    path: "/japan/osaka/osaka/shuko-osaka-manpukudou",
    image: '/images/shuko-osaka-manpukudou1.png'
  },
  {
    name: "Shunsaiten Tsuchiya",
    cuisine: "Tempura, Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/shunsaiten-tsuchiya",
    image: '/images/shunsaiten-tsuchiya1.png'
  },
  {
    name: "Shunten Shin",
    cuisine: "Tempura",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/shunten-shin",
    image: '/images/shunten-shin1.png'
  },
  {
    name: "Shunzen Kiraku",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/shunzen-kiraku",
    image: '/images/shunzen-kiraku1.png'
  },
  {
    name: "SINAE",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/sinae",
    image: '/images/sinae1.png'
  },
  {
    name: "Soba Takama",
    cuisine: "Soba",
    price: "¥",
    path: "/japan/osaka/osaka/soba-takama",
    image: '/images/soba-takama1.png'
  },
  {
    name: "Sobadokoro Toki",
    cuisine: "Soba",
    price: "¥",
    path: "/japan/osaka/osaka/sobadokoro-toki",
    image: '/images/sobadokoro-toki1.png'
  },
  {
    name: "Sobakiri Arabompu",
    cuisine: "Soba",
    price: "¥",
    path: "/japan/osaka/osaka/sobakiri-arabompu",
    image: '/images/sobakiri-arabompu1.png'
  },
  {
    name: "Sobakiri Gaku",
    cuisine: "Soba",
    price: "¥",
    path: "/japan/osaka/osaka/sobakiri-gaku",
    image: '/images/sobakiri-gaku1.png'
  },
  {
    name: "Sobakiri Karani",
    cuisine: "Soba",
    price: "¥",
    path: "/japan/osaka/osaka/sobakiri-karani",
    image: '/images/sobakiri-karani1.png'
  },
  {
    name: "Sugimachi",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/sugimachi",
    image: '/images/sugimachi1.png'
  },
  {
    name: "Sui Okazaki",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/sui-okazaki",
    image: '/images/sui-okazaki1.png'
  },
  {
    name: "Sui Oya",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/sui-oya",
    image: '/images/sui-oya1.png'
  },
  {
    name: "Suigyo Murabayashi",
    cuisine: "Izakaya",
    price: "¥¥",
    path: "/japan/osaka/osaka/suigyo-murabayashi",
    image: '/images/suigyo-murabayashi1.png'
  },
  {
    name: "Sumibi Iwata",
    cuisine: "Yakitori",
    price: "¥¥",
    path: "/japan/osaka/osaka/sumibi-iwata",
    image: '/images/sumibi-iwata1.png'
  },
  {
    name: "Sumisho Mikuriya",
    cuisine: "Yakitori",
    price: "¥¥",
    path: "/japan/osaka/osaka/sumisho-mikuriya",
    image: '/images/sumisho-mikuriya1.png'
  },
  {
    name: "Sushi Enishi",
    cuisine: "Sushi",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/sushi-enishi",
    image: '/images/sushi-enishi1.png'
  },
  {
    name: "Sushi Harasho",
    cuisine: "Sushi",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/sushi-harasho",
    image: '/images/sushi-harasho1.png'
  },
  {
    name: "Sushi Hoshiyama",
    cuisine: "Sushi",
    price: "¥¥¥¥",
    path: "/japan/osaka/osaka/sushi-hoshiyama",
    image: '/images/sushi-hoshiyama1.png'
  },
  {
    name: "Sushi Ichiei",
    cuisine: "Sushi",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/sushi-ichiei",
    image: '/images/sushi-ichiei1.png'
  },
  {
    name: "Sushi Kyomachibori Sato",
    cuisine: "Sushi",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/sushi-kyomachibori-sato",
    image: '/images/sushi-kyomachibori-sato1.png'
  },
  {
    name: "Sushi Marumine",
    cuisine: "Sushi",
    price: "¥¥",
    path: "/japan/osaka/osaka/sushi-marumine",
    image: '/images/sushi-marumine1.png'
  },
  {
    name: "Sushi Murakami Jiro",
    cuisine: "Sushi",
    price: "¥¥¥¥",
    path: "/japan/osaka/osaka/sushi-murakami-jiro",
    image: '/images/sushi-murakami-jiro1.png'
  },
  {
    name: "Sushi Sanshin",
    cuisine: "Sushi",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/sushi-sanshin",
    image: '/images/sushi-sanshin1.png'
  },
  {
    name: "Sushi Shigenaga",
    cuisine: "Sushi",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/sushi-shigenaga",
    image: '/images/sushi-shigenaga1.png'
  },
  {
    name: "Sushi Takumi",
    cuisine: "Sushi",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/sushi-takumi",
    image: '/images/sushi-takumi1.png'
  },
  {
    name: "Sushi Yuden",
    cuisine: "Sushi",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/sushi-yuden",
    image: '/images/sushi-yuden1.png'
  },
  {
    name: "Sushidokoro Amano",
    cuisine: "Sushi",
    price: "¥¥¥¥",
    path: "/japan/osaka/osaka/sushidokoro-amano",
    image: '/images/sushidokoro-amano1.png'
  },
  {
    name: "Sushidokoro Hirokawa",
    cuisine: "Sushi",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/sushidokoro-hirokawa",
    image: '/images/sushidokoro-hirokawa1.png'
  },
  {
    name: "Sushidokoro Kaihara",
    cuisine: "Sushi",
    price: "¥¥",
    path: "/japan/osaka/osaka/sushidokoro-kaihara",
    image: '/images/sushidokoro-kaihara1.png'
  },
  {
    name: "Sushidokoro Kurosugi Shinkan",
    cuisine: "Sushi",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/sushidokoro-kurosugi-shinkan",
    image: '/images/sushidokoro-kurosugi-shinkan1.png'
  },
  {
    name: "Sushidokoro SHIN",
    cuisine: "Sushi",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/sushidokoro-shin",
    image: '/images/sushidokoro-shin1.png'
  },
  {
    name: "Sushiroku",
    cuisine: "Sushi",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/sushiroku",
    image: '/images/sushiroku1.png'
  },
  {
    name: "Sushisho Nehachi",
    cuisine: "Sushi",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/sushisho-nehachi",
    image: '/images/sushisho-nehachi1.png'
  },
  {
    name: "Sushitsune",
    cuisine: "Sushi",
    price: "¥¥",
    path: "/japan/osaka/osaka/sushitsune",
    image: '/images/sushitsune1.png'
  },
  {
    name: "Taian",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/taian",
    image: '/images/taian1.png'
  },
  {
    name: "Takeda",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/takeda",
    image: '/images/takeda1.png'
  },
  {
    name: "tamanegi",
    cuisine: "Italian",
    price: "¥¥",
    path: "/japan/osaka/osaka/tamanegi",
    image: '/images/tamanegi1.png'
  },
  {
    name: "tanpopo",
    cuisine: "Teppanyaki, Okonomiyaki",
    price: "¥¥",
    path: "/japan/osaka/osaka/tanpopo",
    image: '/images/tanpopo1.png'
  },
  {
    name: "TAVERNETTA da KITAYAMA",
    cuisine: "Italian",
    price: "¥¥",
    path: "/japan/osaka/osaka/tavernetta-da-kitayama",
    image: '/images/tavernetta-da-kitayama1.png'
  },
  {
    name: "Temmabashi Fujikawa",
    cuisine: "Japanese, Tempura",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/temmabashi-fujikawa",
    image: '/images/temmabashi-fujikawa1.png'
  },
  {
    name: "Tempura Fukana",
    cuisine: "Tempura",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/tempura-fukana",
    image: '/images/tempura-fukana1.png'
  },
  {
    name: "TEMPURA HANAGATAMI",
    cuisine: "Tempura",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/tempura-hanagatami",
    image: '/images/tempura-hanagatami1.png'
  },
  {
    name: "Tempura Kozaki",
    cuisine: "Tempura",
    price: "¥¥",
    path: "/japan/osaka/osaka/tempura-kozaki",
    image: '/images/tempura-kozaki1.png'
  },
  {
    name: "Tempura Sakugetsu",
    cuisine: "Tempura",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/tempura-sakugetsu",
    image: '/images/tempura-sakugetsu1.png'
  },
  {
    name: "Tempura Urakami",
    cuisine: "Tempura",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/tempura-urakami",
    image: '/images/tempura-urakami1.png'
  },
  {
    name: "Tenboshi",
    cuisine: "Tempura",
    price: "¥¥",
    path: "/japan/osaka/osaka/tenboshi",
    image: '/images/tenboshi1.png'
  },
  {
    name: "Tenjimbashi Aoki",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/osaka/osaka/tenjimbashi-aoki",
    image: '/images/tenjimbashi-aoki1.png'
  },
  {
    name: "Teppanyaki WAJO",
    cuisine: "Teppanyaki",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/teppanyaki-wajo",
    image: '/images/teppanyaki-wajo1.png'
  },
  {
    name: "Terada",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/terada",
    image: '/images/terada1.png'
  },
  {
    name: "Teruya",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/osaka/osaka/teruya",
    image: '/images/teruya1.png'
  },
  {
    name: "Tonkatsu Fujii",
    cuisine: "Tonkatsu",
    price: "¥",
    path: "/japan/osaka/osaka/tonkatsu-fujii",
    image: '/images/tonkatsu-fujii1.png'
  },
  {
    name: "Tonkatsu KATSU Hana",
    cuisine: "Tonkatsu",
    price: "¥",
    path: "/japan/osaka/osaka/tonkatsu-katsu-hana",
    image: '/images/tonkatsu-katsu-hana1.png'
  },
  {
    name: "Torisho Ishii",
    cuisine: "Yakitori",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/torisho-ishii",
    image: '/images/torisho-ishii1.png'
  },
  {
    name: "Tosara",
    cuisine: "Contemporary, Italian",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/tosara",
    image: '/images/tosara1.png'
  },
  {
    name: "Être à l'aise",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/tre-laise",
    image: '/images/tre-laise1.png'
  },
  {
    name: "Udondokoro Shigemi",
    cuisine: "Udon",
    price: "¥",
    path: "/japan/osaka/osaka/udondokoro-shigemi",
    image: '/images/udondokoro-shigemi1.png'
  },
  {
    name: "Ueroku wine",
    cuisine: "Spanish",
    price: "¥¥",
    path: "/japan/osaka/osaka/ueroku-wine",
    image: '/images/ueroku-wine1.png'
  },
  {
    name: "Ukitacho Ima",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/osaka/osaka/ukitacho-ima",
    image: '/images/ukitacho-ima1.png'
  },
  {
    name: "Unkaku",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/unkaku",
    image: '/images/unkaku1.png'
  },
  {
    name: "UPSTAIRZ",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/upstairz",
    image: '/images/upstairz1.png'
  },
  {
    name: "Utsubohommachi Gaku",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/utsubohommachi-gaku",
    image: '/images/utsubohommachi-gaku1.png'
  },
  {
    name: "Varier",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/varier",
    image: '/images/varier1.png'
  },
  {
    name: "via del emme",
    cuisine: "Italian",
    price: "¥¥",
    path: "/japan/osaka/osaka/via-del-emme",
    image: '/images/via-del-emme1.png'
  },
  {
    name: "Wagyuchugokusai Kumanohanare",
    cuisine: "Chinese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/wagyuchugokusai-kumanohanare",
    image: '/images/wagyuchugokusai-kumanohanare1.png'
  },
  {
    name: "Washoku Iikura",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/washoku-iikura",
    image: '/images/washoku-iikura1.png'
  },
  {
    name: "Washun Taiki",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/washun-taiki",
    image: '/images/washun-taiki1.png'
  },
  {
    name: "xiang hua",
    cuisine: "Chinese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/xiang-hua",
    image: '/images/xiang-hua1.png'
  },
  {
    name: "Yakitori Ichimatsu",
    cuisine: "Yakitori",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/yakitori-ichimatsu",
    image: '/images/yakitori-ichimatsu1.png'
  },
  {
    name: "Yakitori Matsuoka",
    cuisine: "Yakitori",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/yakitori-matsuoka",
    image: '/images/yakitori-matsuoka1.png'
  },
  {
    name: "Yakitori Matsuri",
    cuisine: "Yakitori",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/yakitori-matsuri",
    image: '/images/yakitori-matsuri1.png'
  },
  {
    name: "Yakitori Torisen",
    cuisine: "Yakitori",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/yakitori-torisen",
    image: '/images/yakitori-torisen1.png'
  },
  {
    name: "Yiwanshui",
    cuisine: "Chinese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/yiwanshui",
    image: '/images/yiwanshui1.png'
  },
  {
    name: "Yonemasu",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/yonemasu",
    image: '/images/yonemasu1.png'
  },
  {
    name: "Yoshiko",
    cuisine: "Fugu / Pufferfish",
    price: "¥¥¥¥",
    path: "/japan/osaka/osaka/yoshiko",
    image: '/images/yoshiko1.png'
  },
  {
    name: "Yoshitaka",
    cuisine: "Oden",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/yoshitaka",
    image: '/images/yoshitaka1.png'
  },
  {
    name: "Yoshokuya Fujiya",
    cuisine: "Yoshoku",
    price: "¥",
    path: "/japan/osaka/osaka/yoshokuya-fujiya",
    image: '/images/yoshokuya-fujiya1.png'
  },
  {
    name: "Yugen",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/yugen",
    image: '/images/yugen1.png'
  },
  {
    name: "YUNiCO",
    cuisine: "Italian, Italian Contemporary",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/yunico",
    image: '/images/yunico1.png'
  },
  {
    name: "Zeshin",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/osaka/osaka/zeshin",
    image: '/images/zeshin1.png'
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
