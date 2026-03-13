import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Seoul";

const restaurants = [
  {
    name: "3rd Samgyetang",
    cuisine: "Samgyetang",
    price: "₩",
    path: "/south-korea/seoul/seoul/3rd-samgyetang",
    image: '/images/3rd-samgyetang1.png'
  },
  {
    name: "7th Door",
    cuisine: "Contemporary, Korean",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/7th-door",
    image: '/images/7th-door1.png'
  },
  {
    name: "A Flower Blossom on the Rice",
    cuisine: "Korean",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/a-flower-blossom-on-the-rice",
    image: '/images/a-flower-blossom-on-the-rice1.png'
  },
  {
    name: "A L'AISE",
    cuisine: "Modern Cuisine",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/a-laise",
    image: '/images/a-laise1.png'
  },
  {
    name: "Aelgerizm",
    cuisine: "Contemporary, Japanese Contemporary",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/aelgerizm",
    image: '/images/aelgerizm1.png'
  },
  {
    name: "alla prima",
    cuisine: "Innovative",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/alla-prima",
    image: '/images/alla-prima1.png'
  },
  {
    name: "ALT.a",
    cuisine: "Vegan, Chinese",
    price: "₩",
    path: "/south-korea/seoul/seoul/alta",
    image: '/images/alta1.png'
  },
  {
    name: "ANAM",
    cuisine: "Dwaeji-gukbap",
    price: "₩",
    path: "/south-korea/seoul/seoul/anam",
    image: '/images/anam1.png'
  },
  {
    name: "Andeok",
    cuisine: "Korean",
    price: "₩",
    path: "/south-korea/seoul/seoul/andeok",
    image: '/images/andeok1.png'
  },
  {
    name: "Au Bouillon",
    cuisine: "French",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/au-bouillon",
    image: '/images/au-bouillon1.png'
  },
  {
    name: "Baek Nyun Ok",
    cuisine: "Dubu",
    price: "₩",
    path: "/south-korea/seoul/seoul/baek-nyun-ok",
    image: '/images/baek-nyun-ok1.png'
  },
  {
    name: "Base is nice",
    cuisine: "Vegetarian",
    price: "₩",
    path: "/south-korea/seoul/seoul/base-is-nice",
    image: '/images/base-is-nice1.png'
  },
  {
    name: "Bicena",
    cuisine: "Korean",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/bicena",
    image: '/images/bicena1.png'
  },
  {
    name: "Bistrot de Yountville",
    cuisine: "French",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/bistrot-de-yountville",
    image: '/images/bistrot-de-yountville1.png'
  },
  {
    name: "Bium",
    cuisine: "Korean",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/bium",
    image: '/images/bium1.png'
  },
  {
    name: "Bongmilga",
    cuisine: "Naengmyeon",
    price: "₩",
    path: "/south-korea/seoul/seoul/bongmilga",
    image: '/images/bongmilga1.png'
  },
  {
    name: "Bongsanok",
    cuisine: "Mandu",
    price: "₩",
    path: "/south-korea/seoul/seoul/bongsanok",
    image: '/images/bongsanok1.png'
  },
  {
    name: "Boreumsae",
    cuisine: "Barbecue",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/boreumsae",
    image: '/images/boreumsae1.png'
  },
  {
    name: "Borgo Hannam",
    cuisine: "Italian",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/borgo-hannam",
    image: '/images/borgo-hannam1.png'
  },
  {
    name: "Born and Bred",
    cuisine: "Barbecue",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/born-and-bred",
    image: '/images/born-and-bred1.png'
  },
  {
    name: "Buchon Yukhoe",
    cuisine: "Yukhoe",
    price: "₩",
    path: "/south-korea/seoul/seoul/buchon-yukhoe",
    image: '/images/buchon-yukhoe1.png'
  },
  {
    name: "Budnamujip",
    cuisine: "Barbecue",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/budnamujip",
    image: '/images/budnamujip1.png'
  },
  {
    name: "Byeokje Galbi",
    cuisine: "Barbecue",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/byeokje-galbi",
    image: '/images/byeokje-galbi1.png'
  },
  {
    name: "Chaconne",
    cuisine: "French Contemporary",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/chaconne",
    image: '/images/chaconne1.png'
  },
  {
    name: "Chez Nous Private Kitchen",
    cuisine: "French",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/chez-nous-private-kitchen",
    image: '/images/chez-nous-private-kitchen1.png'
  },
  {
    name: "Chez Simon",
    cuisine: "French",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/chez-simon",
    image: '/images/chez-simon1.png'
  },
  {
    name: "Collage",
    cuisine: "French Contemporary",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/collage",
    image: '/images/collage1.png'
  },
  {
    name: "Comme Moa",
    cuisine: "French",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/comme-moa",
    image: '/images/comme-moa1.png'
  },
  {
    name: "Continental",
    cuisine: "French",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/continental",
    image: '/images/continental1.png'
  },
  {
    name: "Crystal Jade",
    cuisine: "Chinese",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/crystal-jade",
    image: '/images/crystal-jade1.png'
  },
  {
    name: "Daesungjip",
    cuisine: "Doganitang",
    price: "₩",
    path: "/south-korea/seoul/seoul/daesungjip",
    image: '/images/daesungjip1.png'
  },
  {
    name: "Damtaek",
    cuisine: "Ramen",
    price: "₩",
    path: "/south-korea/seoul/seoul/damtaek",
    image: '/images/damtaek1.png'
  },
  {
    name: "De Tempore",
    cuisine: "French",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/de-tempore",
    image: '/images/de-tempore1.png'
  },
  {
    name: "Doori",
    cuisine: "Korean",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/doori",
    image: '/images/doori1.png'
  },
  {
    name: "Doughroom",
    cuisine: "Italian",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/doughroom",
    image: '/images/doughroom1.png'
  },
  {
    name: "Eatanic Garden",
    cuisine: "Korean Contemporary",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/eatanic-garden",
    image: '/images/eatanic-garden1.png'
  },
  {
    name: "Egg & Flour",
    cuisine: "Italian",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/egg-flour",
    image: '/images/egg-flour1.png'
  },
  {
    name: "ELPIC",
    cuisine: "Meats and Grills",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/elpic",
    image: '/images/elpic1.png'
  },
  {
    name: "Epanoui",
    cuisine: "French",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/epanoui",
    image: '/images/epanoui1.png'
  },
  {
    name: "Escondido",
    cuisine: "Mexican",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/escondido",
    image: '/images/escondido1.png'
  },
  {
    name: "Essence",
    cuisine: "French",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/essence",
    image: '/images/essence1.png'
  },
  {
    name: "Evett",
    cuisine: "Innovative, Korean",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/evett",
    image: '/images/evett1.png'
  },
  {
    name: "Exquisine",
    cuisine: "Contemporary",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/exquisine",
    image: '/images/exquisine1.png'
  },
  {
    name: "FAGP",
    cuisine: "Italian",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/fagp",
    image: '/images/fagp1.png'
  },
  {
    name: "Fuje",
    cuisine: "Contemporary",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/fuje",
    image: '/images/fuje1.png'
  },
  {
    name: "Gaeseong Mandu Koong",
    cuisine: "Mandu",
    price: "₩",
    path: "/south-korea/seoul/seoul/gaeseong-mandu-koong",
    image: '/images/gaeseong-mandu-koong1.png'
  },
  {
    name: "GAGGEN by Choi Junho",
    cuisine: "Japanese",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/gaggen-by-choi-junho",
    image: '/images/gaggen-by-choi-junho1.png'
  },
  {
    name: "Gebangsikdang",
    cuisine: "Gejang",
    price: "₩",
    path: "/south-korea/seoul/seoul/gebangsikdang",
    image: '/images/gebangsikdang1.png'
  },
  {
    name: "Geumdwaeji Sikdang",
    cuisine: "Barbecue",
    price: "₩",
    path: "/south-korea/seoul/seoul/geumdwaeji-sikdang",
    image: '/images/geumdwaeji-sikdang1.png'
  },
  {
    name: "Ggupdang",
    cuisine: "Barbecue",
    price: "₩",
    path: "/south-korea/seoul/seoul/ggupdang",
    image: '/images/ggupdang1.png'
  },
  {
    name: "Gigas",
    cuisine: "Mediterranean Cuisine",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/gigas",
    image: '/images/gigas1.png'
  },
  {
    name: "GiwaKang",
    cuisine: "Korean Contemporary",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/giwakang",
    image: '/images/giwakang1.png'
  },
  {
    name: "Gom Ba Wie",
    cuisine: "Barbecue",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/gom-ba-wie",
    image: '/images/gom-ba-wie1.png'
  },
  {
    name: "Gomtang Lab",
    cuisine: "Gomtang",
    price: "₩",
    path: "/south-korea/seoul/seoul/gomtang-lab",
    image: '/images/gomtang-lab1.png'
  },
  {
    name: "Goobok Mandu",
    cuisine: "Dim Sum",
    price: "₩",
    path: "/south-korea/seoul/seoul/goobok-mandu",
    image: '/images/goobok-mandu1.png'
  },
  {
    name: "Goryori Ken",
    cuisine: "Contemporary, Japanese Contemporary",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/goryori-ken",
    image: '/images/goryori-ken1.png'
  },
  {
    name: "Gosari Express",
    cuisine: "Vegan",
    price: "₩",
    path: "/south-korea/seoul/seoul/gosari-express",
    image: '/images/gosari-express1.png'
  },
  {
    name: "Gucci Osteria da Massimo Bottura",
    cuisine: "Italian Contemporary",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/gucci-osteria-da-massimo-bottura",
    image: '/images/gucci-osteria-da-massimo-bottura1.png'
  },
  {
    name: "Gwanghwamun Gukbap",
    cuisine: "Dwaeji-gukbap",
    price: "₩",
    path: "/south-korea/seoul/seoul/gwanghwamun-gukbap",
    image: '/images/gwanghwamun-gukbap1.png'
  },
  {
    name: "Hadongkwan",
    cuisine: "Gomtang",
    price: "₩",
    path: "/south-korea/seoul/seoul/hadongkwan",
    image: '/images/hadongkwan1.png'
  },
  {
    name: "Haenam Cheonilgwan",
    cuisine: "Korean",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/haenam-cheonilgwan",
    image: '/images/haenam-cheonilgwan1.png'
  },
  {
    name: "Hakusi",
    cuisine: "Japanese",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/hakusi",
    image: '/images/hakusi1.png'
  },
  {
    name: "Halmaejip",
    cuisine: "Korean",
    price: "₩",
    path: "/south-korea/seoul/seoul/halmaejip",
    image: '/images/halmaejip1.png'
  },
  {
    name: "HANE",
    cuisine: "Sushi",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/hane",
    image: '/images/hane1.png'
  },
  {
    name: "Haobin",
    cuisine: "Chinese",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/haobin",
    image: '/images/haobin1.png'
  },
  {
    name: "Hapjeongok",
    cuisine: "Gomtang",
    price: "₩",
    path: "/south-korea/seoul/seoul/hapjeongok",
    image: '/images/hapjeongok1.png'
  },
  {
    name: "Hong Yuan",
    cuisine: "Chinese",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/hong-yuan",
    image: '/images/hong-yuan1.png'
  },
  {
    name: "HORAPA",
    cuisine: "Thai",
    price: "₩",
    path: "/south-korea/seoul/seoul/horapa",
    image: '/images/horapa1.png'
  },
  {
    name: "Hwa Hae Dang",
    cuisine: "Gejang",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/hwa-hae-dang",
    image: '/images/hwa-hae-dang1.png'
  },
  {
    name: "Hwanggeum Kongbat",
    cuisine: "Dubu",
    price: "₩",
    path: "/south-korea/seoul/seoul/hwanggeum-kongbat",
    image: '/images/hwanggeum-kongbat1.png'
  },
  {
    name: "Hwangsaengga Kalguksu",
    cuisine: "Kalguksu",
    price: "₩",
    path: "/south-korea/seoul/seoul/hwangsaengga-kalguksu",
    image: '/images/hwangsaengga-kalguksu1.png'
  },
  {
    name: "Hyun Udon",
    cuisine: "Udon",
    price: "₩",
    path: "/south-korea/seoul/seoul/hyun-udon",
    image: '/images/hyun-udon1.png'
  },
  {
    name: "Ichiryu",
    cuisine: "Barbecue",
    price: "₩",
    path: "/south-korea/seoul/seoul/ichiryu",
    image: '/images/ichiryu1.png'
  },
  {
    name: "Il Vecchio",
    cuisine: "Italian",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/il-vecchio",
    image: '/images/il-vecchio1.png'
  },
  {
    name: "Ile de Cheongdam",
    cuisine: "Contemporary",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/ile-de-cheongdam",
    image: '/images/ile-de-cheongdam1.png'
  },
  {
    name: "Imok Smoke Dining",
    cuisine: "Barbecue",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/imok-smoke-dining",
    image: '/images/imok-smoke-dining1.png'
  },
  {
    name: "Imun Seolnongtang",
    cuisine: "Seolleongtang",
    price: "₩",
    path: "/south-korea/seoul/seoul/imun-seolnongtang",
    image: '/images/imun-seolnongtang1.png'
  },
  {
    name: "Jaha Son Mandu",
    cuisine: "Mandu",
    price: "₩",
    path: "/south-korea/seoul/seoul/jaha-son-mandu",
    image: '/images/jaha-son-mandu1.png'
  },
  {
    name: "Jeongmyeon",
    cuisine: "Noodles",
    price: "₩",
    path: "/south-korea/seoul/seoul/jeongmyeon",
    image: '/images/jeongmyeon1.png'
  },
  {
    name: "Jin Jin",
    cuisine: "Chinese",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/jin-jin",
    image: '/images/jin-jin1.png'
  },
  {
    name: "Jinmi Pyeongyang Naengmyeon",
    cuisine: "Naengmyeon",
    price: "₩",
    path: "/south-korea/seoul/seoul/jinmi-pyeongyang-naengmyeon",
    image: '/images/jinmi-pyeongyang-naengmyeon1.png'
  },
  {
    name: "Jinmi Sikdang",
    cuisine: "Gejang",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/jinmi-sikdang",
    image: '/images/jinmi-sikdang1.png'
  },
  {
    name: "Joo052",
    cuisine: "Korean",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/joo052",
    image: '/images/joo0521.png'
  },
  {
    name: "JUE",
    cuisine: "Chinese",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/jue",
    image: '/images/jue1.png'
  },
  {
    name: "JUEUN",
    cuisine: "Korean, Classic Cuisine",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/jueun",
    image: '/images/jueun1.png'
  },
  {
    name: "July",
    cuisine: "Modern Cuisine",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/july",
    image: '/images/july1.png'
  },
  {
    name: "July",
    cuisine: "French Contemporary",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/july",
    image: '/images/july1.png'
  },
  {
    name: "Jungin Myeonok",
    cuisine: "Naengmyeon",
    price: "₩",
    path: "/south-korea/seoul/seoul/jungin-myeonok",
    image: '/images/jungin-myeonok1.png'
  },
  {
    name: "Jungsik",
    cuisine: "Contemporary",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/jungsik",
    image: '/images/jungsik1.png'
  },
  {
    name: "KANG MINCHUL Restaurant",
    cuisine: "French, French Contemporary",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/kang-minchul-restaurant",
    image: '/images/kang-minchul-restaurant1.png'
  },
  {
    name: "Kirameki",
    cuisine: "Japanese",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/kirameki",
    image: '/images/kirameki1.png'
  },
  {
    name: "Kojacha",
    cuisine: "Asian",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/kojacha",
    image: '/images/kojacha1.png'
  },
  {
    name: "Kojima",
    cuisine: "Sushi",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/kojima",
    image: '/images/kojima1.png'
  },
  {
    name: "Kushi Kawa",
    cuisine: "Kushiage",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/kushi-kawa",
    image: '/images/kushi-kawa1.png'
  },
  {
    name: "Kwonsooksoo",
    cuisine: "Korean",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/kwonsooksoo",
    image: '/images/kwonsooksoo1.png'
  },
  {
    name: "Kyewol",
    cuisine: "Gomtang",
    price: "₩",
    path: "/south-korea/seoul/seoul/kyewol",
    image: '/images/kyewol1.png'
  },
  {
    name: "Kyewol Gomtang",
    cuisine: "Gomtang",
    price: "₩",
    path: "/south-korea/seoul/seoul/kyewol-gomtang",
    image: '/images/kyewol-gomtang1.png'
  },
  {
    name: "Kyodaiya",
    cuisine: "Udon",
    price: "₩",
    path: "/south-korea/seoul/seoul/kyodaiya",
    image: '/images/kyodaiya1.png'
  },
  {
    name: "Kyoyang Siksa",
    cuisine: "Barbecue",
    price: "₩",
    path: "/south-korea/seoul/seoul/kyoyang-siksa",
    image: '/images/kyoyang-siksa1.png'
  },
  {
    name: "La Yeon",
    cuisine: "Korean, Contemporary",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/la-yeon",
    image: '/images/la-yeon1.png'
  },
  {
    name: "L'Amant Secret",
    cuisine: "Contemporary",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/lamant-secret",
    image: '/images/lamant-secret1.png'
  },
  {
    name: "L'Amitié",
    cuisine: "French",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/lamiti",
    image: '/images/lamiti1.png'
  },
  {
    name: "Lee Buk Bang",
    cuisine: "Korean",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/lee-buk-bang",
    image: '/images/lee-buk-bang1.png'
  },
  {
    name: "L'Espoir du Hibou",
    cuisine: "French",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/lespoir-du-hibou",
    image: '/images/lespoir-du-hibou1.png'
  },
  {
    name: "Légume",
    cuisine: "Vegan, Vegetarian",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/lgume",
    image: '/images/lgume1.png'
  },
  {
    name: "Limbyungjoo Sandong Kalguksu",
    cuisine: "Kalguksu",
    price: "₩",
    path: "/south-korea/seoul/seoul/limbyungjoo-sandong-kalguksu",
    image: '/images/limbyungjoo-sandong-kalguksu1.png'
  },
  {
    name: "L'Impasse 81",
    cuisine: "French",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/limpasse-81",
    image: '/images/limpasse-811.png'
  },
  {
    name: "L'OIGNON",
    cuisine: "French",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/loignon",
    image: '/images/loignon1.png'
  },
  {
    name: "Manao",
    cuisine: "Thai",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/manao",
    image: '/images/manao1.png'
  },
  {
    name: "Mandujip",
    cuisine: "Mandu",
    price: "₩",
    path: "/south-korea/seoul/seoul/mandujip",
    image: '/images/mandujip1.png'
  },
  {
    name: "Manjok Ohyang Jokbal",
    cuisine: "Jokbal",
    price: "₩",
    path: "/south-korea/seoul/seoul/manjok-ohyang-jokbal",
    image: '/images/manjok-ohyang-jokbal1.png'
  },
  {
    name: "Mapo Ok",
    cuisine: "Seolleongtang",
    price: "₩",
    path: "/south-korea/seoul/seoul/mapo-ok",
    image: '/images/mapo-ok1.png'
  },
  {
    name: "Mater",
    cuisine: "Contemporary, Scandinavian",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/mater",
    image: '/images/mater1.png'
  },
  {
    name: "Mattdol",
    cuisine: "Mexican",
    price: "₩",
    path: "/south-korea/seoul/seoul/mattdol",
    image: '/images/mattdol1.png'
  },
  {
    name: "Mijin",
    cuisine: "Memil-guksu",
    price: "₩",
    path: "/south-korea/seoul/seoul/mijin",
    image: '/images/mijin1.png'
  },
  {
    name: "Mimi Myeonga",
    cuisine: "Noodles",
    price: "₩",
    path: "/south-korea/seoul/seoul/mimi-myeonga",
    image: '/images/mimi-myeonga1.png'
  },
  {
    name: "Minami",
    cuisine: "Soba",
    price: "₩",
    path: "/south-korea/seoul/seoul/minami",
    image: '/images/minami1.png'
  },
  {
    name: "Mingles",
    cuisine: "Korean",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/mingles",
    image: '/images/mingles1.png'
  },
  {
    name: "Mipildam",
    cuisine: "Mandu",
    price: "₩",
    path: "/south-korea/seoul/seoul/mipildam",
    image: '/images/mipildam1.png'
  },
  {
    name: "Mitou",
    cuisine: "Japanese",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/mitou",
    image: '/images/mitou1.png'
  },
  {
    name: "Moulin",
    cuisine: "French",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/moulin",
    image: '/images/moulin1.png'
  },
  {
    name: "Mr. Ahn's Craft Makgeolli",
    cuisine: "Korean",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/mr-ahns-craft-makgeolli",
    image: '/images/mr-ahns-craft-makgeolli1.png'
  },
  {
    name: "Mugunghwa",
    cuisine: "Korean",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/mugunghwa",
    image: '/images/mugunghwa1.png'
  },
  {
    name: "Mukjung",
    cuisine: "Korean",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/mukjung",
    image: '/images/mukjung1.png'
  },
  {
    name: "Muni",
    cuisine: "Japanese",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/muni",
    image: '/images/muni1.png'
  },
  {
    name: "Muoki",
    cuisine: "Contemporary",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/muoki",
    image: '/images/muoki1.png'
  },
  {
    name: "Myeon Seoul",
    cuisine: "Noodles",
    price: "₩",
    path: "/south-korea/seoul/seoul/myeon-seoul",
    image: '/images/myeon-seoul1.png'
  },
  {
    name: "Myeongdong Kyoja",
    cuisine: "Kalguksu",
    price: "₩",
    path: "/south-korea/seoul/seoul/myeongdong-kyoja",
    image: '/images/myeongdong-kyoja1.png'
  },
  {
    name: "Myungbodang",
    cuisine: "Contemporary",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/myungbodang",
    image: '/images/myungbodang1.png'
  },
  {
    name: "Nampo Myeonok",
    cuisine: "Naengmyeon",
    price: "₩",
    path: "/south-korea/seoul/seoul/nampo-myeonok",
    image: '/images/nampo-myeonok1.png'
  },
  {
    name: "Neungdong Minari",
    cuisine: "Gomtang",
    price: "₩",
    path: "/south-korea/seoul/seoul/neungdong-minari",
    image: '/images/neungdong-minari1.png'
  },
  {
    name: "Niroumianguan",
    cuisine: "Noodles",
    price: "₩",
    path: "/south-korea/seoul/seoul/niroumianguan",
    image: '/images/niroumianguan1.png'
  },
  {
    name: "Nishimuramen",
    cuisine: "Ramen",
    price: "₩",
    path: "/south-korea/seoul/seoul/nishimuramen",
    image: '/images/nishimuramen1.png'
  },
  {
    name: "Niuroumianguan",
    cuisine: "Noodles",
    price: "₩",
    path: "/south-korea/seoul/seoul/niuroumianguan",
    image: '/images/niuroumianguan1.png'
  },
  {
    name: "Oegojip Seolleongtang",
    cuisine: "Seolleongtang",
    price: "₩",
    path: "/south-korea/seoul/seoul/oegojip-seolleongtang",
    image: '/images/oegojip-seolleongtang1.png'
  },
  {
    name: "Oilje",
    cuisine: "Korean",
    price: "₩",
    path: "/south-korea/seoul/seoul/oilje",
    image: '/images/oilje1.png'
  },
  {
    name: "Okdol Heyonok",
    cuisine: "Naengmyeon",
    price: "₩",
    path: "/south-korea/seoul/seoul/okdol-heyonok",
    image: '/images/okdol-heyonok1.png'
  },
  {
    name: "Okdongsik",
    cuisine: "Dwaeji-gukbap",
    price: "₩",
    path: "/south-korea/seoul/seoul/okdongsik",
    image: '/images/okdongsik1.png'
  },
  {
    name: "Olh Eum",
    cuisine: "Contemporary",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/olh-eum",
    image: '/images/olh-eum1.png'
  },
  {
    name: "ON",
    cuisine: "French",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/on",
    image: '/images/on1.png'
  },
  {
    name: "One Degree North",
    cuisine: "Asian, Singaporean",
    price: "₩",
    path: "/south-korea/seoul/seoul/one-degree-north",
    image: '/images/one-degree-north1.png'
  },
  {
    name: "Onjium",
    cuisine: "Korean",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/onjium",
    image: '/images/onjium1.png'
  },
  {
    name: "Onyva",
    cuisine: "French",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/onyva",
    image: '/images/onyva1.png'
  },
  {
    name: "OPNNG",
    cuisine: "Contemporary",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/opnng",
    image: '/images/opnng1.png'
  },
  {
    name: "Oreno Ramen",
    cuisine: "Ramen",
    price: "₩",
    path: "/south-korea/seoul/seoul/oreno-ramen",
    image: '/images/oreno-ramen1.png'
  },
  {
    name: "Original Numbers",
    cuisine: "Contemporary, French Contemporary",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/original-numbers",
    image: '/images/original-numbers1.png'
  },
  {
    name: "Osteria Orzo",
    cuisine: "Italian",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/osteria-orzo",
    image: '/images/osteria-orzo1.png'
  },
  {
    name: "Palais de Chine",
    cuisine: "Chinese",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/palais-de-chine",
    image: '/images/palais-de-chine1.png'
  },
  {
    name: "Épanoui",
    cuisine: "French",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/panoui",
    image: '/images/panoui1.png'
  },
  {
    name: "PERIGEE",
    cuisine: "Contemporary",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/perigee",
    image: '/images/perigee1.png'
  },
  {
    name: "Pierre Gagnaire",
    cuisine: "French",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/pierre-gagnaire",
    image: '/images/pierre-gagnaire1.png'
  },
  {
    name: "Pildong Myeonok",
    cuisine: "Naengmyeon",
    price: "₩",
    path: "/south-korea/seoul/seoul/pildong-myeonok",
    image: '/images/pildong-myeonok1.png'
  },
  {
    name: "Pyeongyang Myeonok",
    cuisine: "Naengmyeon",
    price: "₩",
    path: "/south-korea/seoul/seoul/pyeongyang-myeonok",
    image: '/images/pyeongyang-myeonok1.png'
  },
  {
    name: "Restaurant Allen",
    cuisine: "Contemporary, Seasonal Cuisine",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/restaurant-allen",
    image: '/images/restaurant-allen1.png'
  },
  {
    name: "Restaurant Jueun",
    cuisine: "Korean, Classic Cuisine",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/restaurant-jueun",
    image: '/images/restaurant-jueun1.png'
  },
  {
    name: "Restaurant OY",
    cuisine: "French, Contemporary",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/restaurant-oy",
    image: '/images/restaurant-oy1.png'
  },
  {
    name: "Rialto",
    cuisine: "Italian",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/rialto",
    image: '/images/rialto1.png'
  },
  {
    name: "RMW Carne",
    cuisine: "Steakhouse",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/rmw-carne",
    image: '/images/rmw-carne1.png'
  },
  {
    name: "Ryunique",
    cuisine: "Innovative",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/ryunique",
    image: '/images/ryunique1.png'
  },
  {
    name: "Samcheongdong Sujebi",
    cuisine: "Sujebi",
    price: "₩",
    path: "/south-korea/seoul/seoul/samcheongdong-sujebi",
    image: '/images/samcheongdong-sujebi1.png'
  },
  {
    name: "Samwon Garden",
    cuisine: "Barbecue",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/samwon-garden",
    image: '/images/samwon-garden1.png'
  },
  {
    name: "SAN",
    cuisine: "Innovative",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/san",
    image: '/images/san1.png'
  },
  {
    name: "Sanro",
    cuisine: "Japanese",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/sanro",
    image: '/images/sanro1.png'
  },
  {
    name: "Sarukame",
    cuisine: "Ramen",
    price: "₩",
    path: "/south-korea/seoul/seoul/sarukame",
    image: '/images/sarukame1.png'
  },
  {
    name: "Seokyonanmyunbang",
    cuisine: "Noodles",
    price: "₩",
    path: "/south-korea/seoul/seoul/seokyonanmyunbang",
    image: '/images/seokyonanmyunbang1.png'
  },
  {
    name: "Seoryung",
    cuisine: "Memil-guksu",
    price: "₩",
    path: "/south-korea/seoul/seoul/seoryung",
    image: '/images/seoryung1.png'
  },
  {
    name: "Seoul Dining",
    cuisine: "Contemporary",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/seoul-dining",
    image: '/images/seoul-dining1.png'
  },
  {
    name: "SIIO",
    cuisine: "Contemporary, Japanese Contemporary",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/siio",
    image: '/images/siio1.png'
  },
  {
    name: "Sobajuu",
    cuisine: "Japanese",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/sobajuu",
    image: '/images/sobajuu1.png'
  },
  {
    name: "Sobakeeri Suzu",
    cuisine: "Soba",
    price: "₩",
    path: "/south-korea/seoul/seoul/sobakeeri-suzu",
    image: '/images/sobakeeri-suzu1.png'
  },
  {
    name: "Soigné",
    cuisine: "Innovative",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/soign",
    image: '/images/soign1.png'
  },
  {
    name: "Solbam",
    cuisine: "Contemporary, Korean Contemporary",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/solbam",
    image: '/images/solbam1.png'
  },
  {
    name: "Sonnet",
    cuisine: "French Contemporary",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/sonnet",
    image: '/images/sonnet1.png'
  },
  {
    name: "Sooksoodoga",
    cuisine: "Barbecue",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/sooksoodoga",
    image: '/images/sooksoodoga1.png'
  },
  {
    name: "Soseoul Hannam",
    cuisine: "Korean",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/soseoul-hannam",
    image: '/images/soseoul-hannam1.png'
  },
  {
    name: "Sosuheon",
    cuisine: "Sushi",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/sosuheon",
    image: '/images/sosuheon1.png'
  },
  {
    name: "Soul",
    cuisine: "Contemporary",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/soul",
    image: '/images/soul1.png'
  },
  {
    name: "STAY",
    cuisine: "French",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/stay",
    image: '/images/stay1.png'
  },
  {
    name: "Subaru",
    cuisine: "Soba",
    price: "₩",
    path: "/south-korea/seoul/seoul/subaru",
    image: '/images/subaru1.png'
  },
  {
    name: "Sushi Matsumoto",
    cuisine: "Sushi",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/sushi-matsumoto",
    image: '/images/sushi-matsumoto1.png'
  },
  {
    name: "Table for Four",
    cuisine: "Contemporary",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/table-for-four",
    image: '/images/table-for-four1.png'
  },
  {
    name: "Tasty Cube",
    cuisine: "Noodles",
    price: "₩",
    path: "/south-korea/seoul/seoul/tasty-cube",
    image: '/images/tasty-cube1.png'
  },
  {
    name: "Tenjimon",
    cuisine: "Japanese",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/tenjimon",
    image: '/images/tenjimon1.png'
  },
  {
    name: "Teppan",
    cuisine: "Teppanyaki",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/teppan",
    image: '/images/teppan1.png'
  },
  {
    name: "The Green Table",
    cuisine: "French Contemporary",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/the-green-table",
    image: '/images/the-green-table1.png'
  },
  {
    name: "The Ninth Gate",
    cuisine: "French",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/the-ninth-gate",
    image: '/images/the-ninth-gate1.png'
  },
  {
    name: "Tim Ho Wan",
    cuisine: "Dim Sum",
    price: "₩",
    path: "/south-korea/seoul/seoul/tim-ho-wan",
    image: '/images/tim-ho-wan1.png'
  },
  {
    name: "Toc Toc",
    cuisine: "Contemporary",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/toc-toc",
    image: '/images/toc-toc1.png'
  },
  {
    name: "Toh Lim",
    cuisine: "Chinese",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/toh-lim",
    image: '/images/toh-lim1.png'
  },
  {
    name: "Tongue & Groove Joint",
    cuisine: "Barbecue",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/tongue-groove-joint",
    image: '/images/tongue-groove-joint1.png'
  },
  {
    name: "Trid",
    cuisine: "Contemporary, American Contemporary",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/trid",
    image: '/images/trid1.png'
  },
  {
    name: "Tuk Tuk Noodle Thai",
    cuisine: "Thai",
    price: "₩",
    path: "/south-korea/seoul/seoul/tuk-tuk-noodle-thai",
    image: '/images/tuk-tuk-noodle-thai1.png'
  },
  {
    name: "Tutoiement",
    cuisine: "French",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/tutoiement",
    image: '/images/tutoiement1.png'
  },
  {
    name: "Vault Steakhouse",
    cuisine: "Steakhouse",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/vault-steakhouse",
    image: '/images/vault-steakhouse1.png'
  },
  {
    name: "VINHO",
    cuisine: "Contemporary",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/vinho",
    image: '/images/vinho1.png'
  },
  {
    name: "Woo Lae Oak",
    cuisine: "Naengmyeon",
    price: "₩",
    path: "/south-korea/seoul/seoul/woo-lae-oak",
    image: '/images/woo-lae-oak1.png'
  },
  {
    name: "Wooga",
    cuisine: "Barbecue",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/wooga",
    image: '/images/wooga1.png'
  },
  {
    name: "Yakitori Kiyu",
    cuisine: "Yakitori",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/yakitori-kiyu",
    image: '/images/yakitori-kiyu1.png'
  },
  {
    name: "Yakitori Mook",
    cuisine: "Yakitori",
    price: "₩",
    path: "/south-korea/seoul/seoul/yakitori-mook",
    image: '/images/yakitori-mook1.png'
  },
  {
    name: "Yangyang Memil Makguksu",
    cuisine: "Memil-guksu",
    price: "₩",
    path: "/south-korea/seoul/seoul/yangyang-memil-makguksu",
    image: '/images/yangyang-memil-makguksu1.png'
  },
  {
    name: "y'east",
    cuisine: "Contemporary",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/yeast",
    image: '/images/yeast1.png'
  },
  {
    name: "Yonggeumok",
    cuisine: "Chueotang",
    price: "₩",
    path: "/south-korea/seoul/seoul/yonggeumok",
    image: '/images/yonggeumok1.png'
  },
  {
    name: "Youhan",
    cuisine: "Thai",
    price: "₩",
    path: "/south-korea/seoul/seoul/youhan",
    image: '/images/youhan1.png'
  },
  {
    name: "Yu Yuan",
    cuisine: "Chinese",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/yu-yuan",
    image: '/images/yu-yuan1.png'
  },
  {
    name: "Yukjeon Hoekwan",
    cuisine: "Bulgogi",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/yukjeon-hoekwan",
    image: '/images/yukjeon-hoekwan1.png'
  },
  {
    name: "YUN",
    cuisine: "Korean",
    price: "₩₩₩",
    path: "/south-korea/seoul/seoul/yun",
    image: '/images/yun1.png'
  },
  {
    name: "Yurimmyeon",
    cuisine: "Memil-guksu",
    price: "₩",
    path: "/south-korea/seoul/seoul/yurimmyeon",
    image: '/images/yurimmyeon1.png'
  },
  {
    name: "Zero Complex",
    cuisine: "Innovative",
    price: "₩₩₩₩",
    path: "/south-korea/seoul/seoul/zero-complex",
    image: '/images/zero-complex1.png'
  },
  {
    name: "Zhonghuafuchun Salon",
    cuisine: "Chinese",
    price: "₩₩",
    path: "/south-korea/seoul/seoul/zhonghuafuchun-salon",
    image: '/images/zhonghuafuchun-salon1.png'
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
