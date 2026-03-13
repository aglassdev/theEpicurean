import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Kyoto";

const restaurants = [
  {
    name: "Aji Fukushima",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/aji-fukushima",
    image: '/images/aji-fukushima1.png'
  },
  {
    name: "Ajiro Honten",
    cuisine: "Shojin",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/ajiro-honten",
    image: '/images/ajiro-honten1.png'
  },
  {
    name: "Akihana",
    cuisine: "Chinese",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/akihana",
    image: '/images/akihana1.png'
  },
  {
    name: "anpeiji",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/anpeiji",
    image: '/images/anpeiji1.png'
  },
  {
    name: "Aoike",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/aoike",
    image: '/images/aoike1.png'
  },
  {
    name: "Aoikonshin Yamada",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/aoikonshin-yamada",
    image: '/images/aoikonshin-yamada1.png'
  },
  {
    name: "Asperge Blanche",
    cuisine: "French",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/asperge-blanche",
    image: '/images/asperge-blanche1.png'
  },
  {
    name: "ava",
    cuisine: "Italian",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/ava",
    image: '/images/ava1.png'
  },
  {
    name: "Ayanokoji Karatsu",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/ayanokoji-karatsu",
    image: '/images/ayanokoji-karatsu1.png'
  },
  {
    name: "Benoit",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/benoit",
    image: '/images/benoit1.png'
  },
  {
    name: "Bini",
    cuisine: "Italian",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/bini",
    image: '/images/bini1.png'
  },
  {
    name: "Bistro Cerisier",
    cuisine: "French",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/bistro-cerisier",
    image: '/images/bistro-cerisier1.png'
  },
  {
    name: "Bistro Yanagihara",
    cuisine: "French",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/bistro-yanagihara",
    image: '/images/bistro-yanagihara1.png'
  },
  {
    name: "BOCCA del VINO",
    cuisine: "Italian",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/bocca-del-vino",
    image: '/images/bocca-del-vino1.png'
  },
  {
    name: "Canton Shunsai Ikki",
    cuisine: "Chinese",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/canton-shunsai-ikki",
    image: '/images/canton-shunsai-ikki1.png'
  },
  {
    name: "cenci",
    cuisine: "Italian",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/cenci",
    image: '/images/cenci1.png'
  },
  {
    name: "Chikuyuan Taro no Atsumori",
    cuisine: "Soba",
    price: "¥",
    path: "/japan/kyoto/kyoto/chikuyuan-taro-no-atsumori",
    image: '/images/chikuyuan-taro-no-atsumori1.png'
  },
  {
    name: "Chinese Noodles ROKU",
    cuisine: "Ramen",
    price: "¥",
    path: "/japan/kyoto/kyoto/chinese-noodles-roku",
    image: '/images/chinese-noodles-roku1.png'
  },
  {
    name: "Chiso Aida",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/chiso-aida",
    image: '/images/chiso-aida1.png'
  },
  {
    name: "Choshoku Kishin",
    cuisine: "Japanese",
    price: "¥",
    path: "/japan/kyoto/kyoto/choshoku-kishin",
    image: '/images/choshoku-kishin1.png'
  },
  {
    name: "COPPIE",
    cuisine: "Contemporary",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/coppie",
    image: '/images/coppie1.png'
  },
  {
    name: "DEUX FILLES",
    cuisine: "French",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/deux-filles",
    image: '/images/deux-filles1.png'
  },
  {
    name: "DODICI",
    cuisine: "Italian",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/dodici",
    image: '/images/dodici1.png'
  },
  {
    name: "Doppo",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/doppo",
    image: '/images/doppo1.png'
  },
  {
    name: "Droit",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/droit",
    image: '/images/droit1.png'
  },
  {
    name: "Eitaroya",
    cuisine: "Izakaya",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/eitaroya",
    image: '/images/eitaroya1.png'
  },
  {
    name: "en",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/en",
    image: '/images/en1.png'
  },
  {
    name: "Enyuan Kobayashi",
    cuisine: "Tempura, Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/enyuan-kobayashi",
    image: '/images/enyuan-kobayashi1.png'
  },
  {
    name: "Etto",
    cuisine: "Italian",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/etto",
    image: '/images/etto1.png'
  },
  {
    name: "Funaokayama Shimizu",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/funaokayama-shimizu",
    image: '/images/funaokayama-shimizu1.png'
  },
  {
    name: "Fuyacho 103",
    cuisine: "Oden",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/fuyacho-103",
    image: '/images/fuyacho-1031.png'
  },
  {
    name: "Fuyacho Kuraku",
    cuisine: "Izakaya",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/fuyacho-kuraku",
    image: '/images/fuyacho-kuraku1.png'
  },
  {
    name: "Germoglio",
    cuisine: "Italian",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/germoglio",
    image: '/images/germoglio1.png'
  },
  {
    name: "Gion Fukushi",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/gion-fukushi",
    image: '/images/gion-fukushi1.png'
  },
  {
    name: "Gion Kajisho",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/gion-kajisho",
    image: '/images/gion-kajisho1.png'
  },
  {
    name: "Gion Kida",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/gion-kida",
    image: '/images/gion-kida1.png'
  },
  {
    name: "Gion Mamma",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/gion-mamma",
    image: '/images/gion-mamma1.png'
  },
  {
    name: "Gion Maruyama",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/gion-maruyama",
    image: '/images/gion-maruyama1.png'
  },
  {
    name: "Gion Matayoshi",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/gion-matayoshi",
    image: '/images/gion-matayoshi1.png'
  },
  {
    name: "Gion Nishikawa",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/gion-nishikawa",
    image: '/images/gion-nishikawa1.png'
  },
  {
    name: "Gion Nishimura",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/gion-nishimura",
    image: '/images/gion-nishimura1.png'
  },
  {
    name: "Gion Okada",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/gion-okada",
    image: '/images/gion-okada1.png'
  },
  {
    name: "Gion Owatari",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/gion-owatari",
    image: '/images/gion-owatari1.png'
  },
  {
    name: "Gion Rakumi",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/gion-rakumi",
    image: '/images/gion-rakumi1.png'
  },
  {
    name: "Gion Rohan",
    cuisine: "Japanese",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/gion-rohan",
    image: '/images/gion-rohan1.png'
  },
  {
    name: "Gion Sasaki",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/gion-sasaki",
    image: '/images/gion-sasaki1.png'
  },
  {
    name: "Gion Senryu",
    cuisine: "Tempura",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/gion-senryu",
    image: '/images/gion-senryu1.png'
  },
  {
    name: "Gion Yamagishi",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/gion-yamagishi",
    image: '/images/gion-yamagishi1.png'
  },
  {
    name: "Gion Yorozuya",
    cuisine: "Udon",
    price: "¥",
    path: "/japan/kyoto/kyoto/gion-yorozuya",
    image: '/images/gion-yorozuya1.png'
  },
  {
    name: "Godan Miyazawa",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/godan-miyazawa",
    image: '/images/godan-miyazawa1.png'
  },
  {
    name: "Gokomachi Tagawa",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/gokomachi-tagawa",
    image: '/images/gokomachi-tagawa1.png'
  },
  {
    name: "Gombei",
    cuisine: "Soba",
    price: "¥",
    path: "/japan/kyoto/kyoto/gombei",
    image: '/images/gombei1.png'
  },
  {
    name: "Gosho Iwasaki",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/gosho-iwasaki",
    image: '/images/gosho-iwasaki1.png'
  },
  {
    name: "Hachiraku",
    cuisine: "Chinese",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/hachiraku",
    image: '/images/hachiraku1.png'
  },
  {
    name: "hakubi",
    cuisine: "Chinese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/hakubi",
    image: '/images/hakubi1.png'
  },
  {
    name: "HANA-Kitcho",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/hana-kitcho",
    image: '/images/hana-kitcho1.png'
  },
  {
    name: "Hanhan",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/hanhan",
    image: '/images/hanhan1.png'
  },
  {
    name: "Higashiyama Tsukasa",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/higashiyama-tsukasa",
    image: '/images/higashiyama-tsukasa1.png'
  },
  {
    name: "Higashiyama Yoshihisa",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/higashiyama-yoshihisa",
    image: '/images/higashiyama-yoshihisa1.png'
  },
  {
    name: "Hiramatsu Kodaiji",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/hiramatsu-kodaiji",
    image: '/images/hiramatsu-kodaiji1.png'
  },
  {
    name: "Hirosawa",
    cuisine: "Chinese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/hirosawa",
    image: '/images/hirosawa1.png'
  },
  {
    name: "Hosun Nagashima",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/hosun-nagashima",
    image: '/images/hosun-nagashima1.png'
  },
  {
    name: "Hyotei",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/hyotei",
    image: '/images/hyotei1.png'
  },
  {
    name: "Ichihana",
    cuisine: "Japanese",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/ichihana",
    image: '/images/ichihana1.png'
  },
  {
    name: "Ikkon Uehara",
    cuisine: "Japanese",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/ikkon-uehara",
    image: '/images/ikkon-uehara1.png'
  },
  {
    name: "ima",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/ima",
    image: '/images/ima1.png'
  },
  {
    name: "Isoyama",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/isoyama",
    image: '/images/isoyama1.png'
  },
  {
    name: "Isshisoden Nakamura",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/isshisoden-nakamura",
    image: '/images/isshisoden-nakamura1.png'
  },
  {
    name: "Itsutsu",
    cuisine: "Soba",
    price: "¥",
    path: "/japan/kyoto/kyoto/itsutsu",
    image: '/images/itsutsu1.png'
  },
  {
    name: "Izugen",
    cuisine: "Sushi",
    price: "¥",
    path: "/japan/kyoto/kyoto/izugen",
    image: '/images/izugen1.png'
  },
  {
    name: "Izuu",
    cuisine: "Sushi",
    price: "¥",
    path: "/japan/kyoto/kyoto/izuu",
    image: '/images/izuu1.png'
  },
  {
    name: "Jean-Georges at The Shinmonzen",
    cuisine: "French, Contemporary",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/jean-georges-at-the-shinmonzen",
    image: '/images/jean-georges-at-the-shinmonzen1.png'
  },
  {
    name: "Jiki Miyazawa",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/jiki-miyazawa",
    image: '/images/jiki-miyazawa1.png'
  },
  {
    name: "Jikiba Ono",
    cuisine: "Japanese",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/jikiba-ono",
    image: '/images/jikiba-ono1.png'
  },
  {
    name: "Jikon Hiratate",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/jikon-hiratate",
    image: '/images/jikon-hiratate1.png'
  },
  {
    name: "Jukuseibuta Kawamura",
    cuisine: "Tonkatsu",
    price: "¥",
    path: "/japan/kyoto/kyoto/jukuseibuta-kawamura",
    image: '/images/jukuseibuta-kawamura1.png'
  },
  {
    name: "Juu-go",
    cuisine: "Soba",
    price: "¥",
    path: "/japan/kyoto/kyoto/juu-go",
    image: '/images/juu-go1.png'
  },
  {
    name: "Kako Okamoto",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/kako-okamoto",
    image: '/images/kako-okamoto1.png'
  },
  {
    name: "Kamanza Nagashima",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/kamanza-nagashima",
    image: '/images/kamanza-nagashima1.png'
  },
  {
    name: "Kamoryori Tabuchi",
    cuisine: "Duck Specialities",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/kamoryori-tabuchi",
    image: '/images/kamoryori-tabuchi1.png'
  },
  {
    name: "Kan",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/kan",
    image: '/images/kan1.png'
  },
  {
    name: "Kanamean Nishitomiya",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/kanamean-nishitomiya",
    image: '/images/kanamean-nishitomiya1.png'
  },
  {
    name: "Kanesho",
    cuisine: "Unagi / Freshwater Eel",
    price: "¥",
    path: "/japan/kyoto/kyoto/kanesho",
    image: '/images/kanesho1.png'
  },
  {
    name: "Kanzan",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/kanzan",
    image: '/images/kanzan1.png'
  },
  {
    name: "Kappo Harada",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/kappo-harada",
    image: '/images/kappo-harada1.png'
  },
  {
    name: "Kappo Hassun",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/kappo-hassun",
    image: '/images/kappo-hassun1.png'
  },
  {
    name: "Kappo Shinatomi",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/kappo-shinatomi",
    image: '/images/kappo-shinatomi1.png'
  },
  {
    name: "Kappo Takohachi",
    cuisine: "Japanese",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/kappo-takohachi",
    image: '/images/kappo-takohachi1.png'
  },
  {
    name: "Kappo Umetsu",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/kappo-umetsu",
    image: '/images/kappo-umetsu1.png'
  },
  {
    name: "KASHIWAI",
    cuisine: "Sushi",
    price: "¥",
    path: "/japan/kyoto/kyoto/kashiwai",
    image: '/images/kashiwai1.png'
  },
  {
    name: "Kenninji Gion Maruyama",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/kenninji-gion-maruyama",
    image: '/images/kenninji-gion-maruyama1.png'
  },
  {
    name: "Kentan Horibe",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/kentan-horibe",
    image: '/images/kentan-horibe1.png'
  },
  {
    name: "Kenya",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/kenya",
    image: '/images/kenya1.png'
  },
  {
    name: "Keri",
    cuisine: "Duck Specialities",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/keri",
    image: '/images/keri1.png'
  },
  {
    name: "Kikunoi Honten",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/kikunoi-honten",
    image: '/images/kikunoi-honten1.png'
  },
  {
    name: "Kikunoi Mugesambo",
    cuisine: "Japanese",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/kikunoi-mugesambo",
    image: '/images/kikunoi-mugesambo1.png'
  },
  {
    name: "Kikunoi Roan",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/kikunoi-roan",
    image: '/images/kikunoi-roan1.png'
  },
  {
    name: "Kikunoi Sushi Ao",
    cuisine: "Sushi, Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/kikunoi-sushi-ao",
    image: '/images/kikunoi-sushi-ao1.png'
  },
  {
    name: "Kinobu",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/kinobu",
    image: '/images/kinobu1.png'
  },
  {
    name: "Kiyama",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/kiyama",
    image: '/images/kiyama1.png'
  },
  {
    name: "Kiyamachi Ran",
    cuisine: "Sushi",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/kiyamachi-ran",
    image: '/images/kiyamachi-ran1.png'
  },
  {
    name: "Kodaiji Jugyuan",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/kodaiji-jugyuan",
    image: '/images/kodaiji-jugyuan1.png'
  },
  {
    name: "Kodaiji Wakuden",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/kodaiji-wakuden",
    image: '/images/kodaiji-wakuden1.png'
  },
  {
    name: "KOGA",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/koga",
    image: '/images/koga1.png'
  },
  {
    name: "KOKE",
    cuisine: "Innovative",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/koke",
    image: '/images/koke1.png'
  },
  {
    name: "Kokyu",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/kokyu",
    image: '/images/kokyu1.png'
  },
  {
    name: "Komatsu Cucina Italiana",
    cuisine: "Italian",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/komatsu-cucina-italiana",
    image: '/images/komatsu-cucina-italiana1.png'
  },
  {
    name: "Kombu to Men Kiichi",
    cuisine: "Ramen",
    price: "¥",
    path: "/japan/kyoto/kyoto/kombu-to-men-kiichi",
    image: '/images/kombu-to-men-kiichi1.png'
  },
  {
    name: "Komedokoro Inamoto",
    cuisine: "Izakaya",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/komedokoro-inamoto",
    image: '/images/komedokoro-inamoto1.png'
  },
  {
    name: "Konno",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/konno",
    image: '/images/konno1.png'
  },
  {
    name: "Korean Restaurant Byeoleeya",
    cuisine: "Korean",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/korean-restaurant-byeoleeya",
    image: '/images/korean-restaurant-byeoleeya1.png'
  },
  {
    name: "KORISU",
    cuisine: "Yoshoku",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/korisu",
    image: '/images/korisu1.png'
  },
  {
    name: "Koryori Takaya",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/koryori-takaya",
    image: '/images/koryori-takaya1.png'
  },
  {
    name: "Kushi Tanaka",
    cuisine: "Kushiage",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/kushi-tanaka",
    image: '/images/kushi-tanaka1.png'
  },
  {
    name: "Kyo Seika",
    cuisine: "Chinese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/kyo-seika",
    image: '/images/kyo-seika1.png'
  },
  {
    name: "Kyoboshi",
    cuisine: "Tempura",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/kyoboshi",
    image: '/images/kyoboshi1.png'
  },
  {
    name: "Kyochuka Makisada",
    cuisine: "Chinese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/kyochuka-makisada",
    image: '/images/kyochuka-makisada1.png'
  },
  {
    name: "Kyoen",
    cuisine: "Contemporary",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/kyoen",
    image: '/images/kyoen1.png'
  },
  {
    name: "Kyogoku Kaneyo",
    cuisine: "Unagi / Freshwater Eel",
    price: "¥",
    path: "/japan/kyoto/kyoto/kyogoku-kaneyo",
    image: '/images/kyogoku-kaneyo1.png'
  },
  {
    name: "Kyokaiseki Kichisen",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/kyokaiseki-kichisen",
    image: '/images/kyokaiseki-kichisen1.png'
  },
  {
    name: "Kyoryori Fujimoto",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/kyoryori-fujimoto",
    image: '/images/kyoryori-fujimoto1.png'
  },
  {
    name: "Kyoryori Hachisei",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/kyoryori-hachisei",
    image: '/images/kyoryori-hachisei1.png'
  },
  {
    name: "la bûche",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/la-bche",
    image: '/images/la-bche1.png'
  },
  {
    name: "La Biographie···",
    cuisine: "French",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/la-biographie",
    image: '/images/la-biographie1.png'
  },
  {
    name: "L'aparté",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/lapart",
    image: '/images/lapart1.png'
  },
  {
    name: "Lapintaika",
    cuisine: "Italian",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/lapintaika",
    image: '/images/lapintaika1.png'
  },
  {
    name: "le 14e",
    cuisine: "French",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/le-14e",
    image: '/images/le-14e1.png'
  },
  {
    name: "Le cadeau",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/le-cadeau",
    image: '/images/le-cadeau1.png'
  },
  {
    name: "Luca",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/luca",
    image: '/images/luca1.png'
  },
  {
    name: "Luca",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/luca",
    image: '/images/luca1.png'
  },
  {
    name: "Manjuji Hakuran",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/manjuji-hakuran",
    image: '/images/manjuji-hakuran1.png'
  },
  {
    name: "Masaki",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/masaki",
    image: '/images/masaki1.png'
  },
  {
    name: "MASHIRO",
    cuisine: "Contemporary",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/mashiro",
    image: '/images/mashiro1.png'
  },
  {
    name: "Masumasu Masuda",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/masumasu-masuda",
    image: '/images/masumasu-masuda1.png'
  },
  {
    name: "Mescita Pane e Vino",
    cuisine: "Italian",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/mescita-pane-e-vino",
    image: '/images/mescita-pane-e-vino1.png'
  },
  {
    name: "middle",
    cuisine: "Contemporary",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/middle",
    image: '/images/middle1.png'
  },
  {
    name: "Mirei",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/mirei",
    image: '/images/mirei1.png'
  },
  {
    name: "Mishimatei",
    cuisine: "Sukiyaki",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/mishimatei",
    image: '/images/mishimatei1.png'
  },
  {
    name: "Miyagawacho Hotta",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/miyagawacho-hotta",
    image: '/images/miyagawacho-hotta1.png'
  },
  {
    name: "Miyagawacho Tensho",
    cuisine: "Tempura",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/miyagawacho-tensho",
    image: '/images/miyagawacho-tensho1.png'
  },
  {
    name: "Miyamaso",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/miyamaso",
    image: '/images/miyamaso1.png'
  },
  {
    name: "Miyawaki",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/miyawaki",
    image: '/images/miyawaki1.png'
  },
  {
    name: "Mizai",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/mizai",
    image: '/images/mizai1.png'
  },
  {
    name: "Mizuno",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/mizuno",
    image: '/images/mizuno1.png'
  },
  {
    name: "måne",
    cuisine: "Italian",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/mne",
    image: '/images/mne1.png'
  },
  {
    name: "MOKO",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/moko",
    image: '/images/moko1.png'
  },
  {
    name: "Mokubei",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/mokubei",
    image: '/images/mokubei1.png'
  },
  {
    name: "MOTOÏ",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/moto",
    image: '/images/moto1.png'
  },
  {
    name: "MUBE",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/mube",
    image: '/images/mube1.png'
  },
  {
    name: "Muginoyoake",
    cuisine: "Ramen",
    price: "¥",
    path: "/japan/kyoto/kyoto/muginoyoake",
    image: '/images/muginoyoake1.png'
  },
  {
    name: "MUNI ALAIN DUCASSE",
    cuisine: "French",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/muni-alain-ducasse",
    image: '/images/muni-alain-ducasse1.png'
  },
  {
    name: "Muromachi Kaji",
    cuisine: "Izakaya",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/muromachi-kaji",
    image: '/images/muromachi-kaji1.png'
  },
  {
    name: "Muromachi Wakuden",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/muromachi-wakuden",
    image: '/images/muromachi-wakuden1.png'
  },
  {
    name: "Muromachi Yui",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/muromachi-yui",
    image: '/images/muromachi-yui1.png'
  },
  {
    name: "Nakamitsu",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/nakamitsu",
    image: '/images/nakamitsu1.png'
  },
  {
    name: "Nakazen",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/nakazen",
    image: '/images/nakazen1.png'
  },
  {
    name: "Nijo Aritsune",
    cuisine: "Izakaya",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/nijo-aritsune",
    image: '/images/nijo-aritsune1.png'
  },
  {
    name: "Nijo Minami",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/nijo-minami",
    image: '/images/nijo-minami1.png'
  },
  {
    name: "Nijojo Furuta",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/nijojo-furuta",
    image: '/images/nijojo-furuta1.png'
  },
  {
    name: "Nikuryori Shibuya",
    cuisine: "Beef",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/nikuryori-shibuya",
    image: '/images/nikuryori-shibuya1.png'
  },
  {
    name: "Niomon MUI",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/niomon-mui",
    image: '/images/niomon-mui1.png'
  },
  {
    name: "Nishijin Hashimoto",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/nishijin-hashimoto",
    image: '/images/nishijin-hashimoto1.png'
  },
  {
    name: "Noguchi Tsunagu",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/noguchi-tsunagu",
    image: '/images/noguchi-tsunagu1.png'
  },
  {
    name: "Nominokoji Yamagishi",
    cuisine: "Izakaya",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/nominokoji-yamagishi",
    image: '/images/nominokoji-yamagishi1.png'
  },
  {
    name: "NOODLE SHOP RENNOSUKE",
    cuisine: "Ramen",
    price: "¥",
    path: "/japan/kyoto/kyoto/noodle-shop-rennosuke",
    image: '/images/noodle-shop-rennosuke1.png'
  },
  {
    name: "Ogata",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/ogata",
    image: '/images/ogata1.png'
  },
  {
    name: "Ogawa",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/ogawa",
    image: '/images/ogawa1.png'
  },
  {
    name: "Oito",
    cuisine: "Oden",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/oito",
    image: '/images/oito1.png'
  },
  {
    name: "Okina",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/okina",
    image: '/images/okina1.png'
  },
  {
    name: "Okuniya Mambei",
    cuisine: "Unagi / Freshwater Eel",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/okuniya-mambei",
    image: '/images/okuniya-mambei1.png'
  },
  {
    name: "ortensia",
    cuisine: "Italian",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/ortensia",
    image: '/images/ortensia1.png'
  },
  {
    name: "Oryori Maeshiro",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/oryori-maeshiro",
    image: '/images/oryori-maeshiro1.png'
  },
  {
    name: "Oryori Mashita",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/oryori-mashita",
    image: '/images/oryori-mashita1.png'
  },
  {
    name: "Oryori Mitsuyasu",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/oryori-mitsuyasu",
    image: '/images/oryori-mitsuyasu1.png'
  },
  {
    name: "OSTERIA IL CANTO DEL MAGGIO",
    cuisine: "Italian",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/osteria-il-canto-del-maggio",
    image: '/images/osteria-il-canto-del-maggio1.png'
  },
  {
    name: "Otagi",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/otagi",
    image: '/images/otagi1.png'
  },
  {
    name: "Pontocho Masuda",
    cuisine: "Obanzai",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/pontocho-masuda",
    image: '/images/pontocho-masuda1.png'
  },
  {
    name: "RADICE",
    cuisine: "Italian",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/radice",
    image: '/images/radice1.png'
  },
  {
    name: "Raiz",
    cuisine: "Contemporary",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/raiz",
    image: '/images/raiz1.png'
  },
  {
    name: "Rakuhoku Nakayama",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/rakuhoku-nakayama",
    image: '/images/rakuhoku-nakayama1.png'
  },
  {
    name: "Ramen Touhichi",
    cuisine: "Ramen",
    price: "¥",
    path: "/japan/kyoto/kyoto/ramen-touhichi",
    image: '/images/ramen-touhichi1.png'
  },
  {
    name: "Reine des prés",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/reine-des-prs",
    image: '/images/reine-des-prs1.png'
  },
  {
    name: "Restaurant Hiramatsu Kodaiji",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/restaurant-hiramatsu-kodaiji",
    image: '/images/restaurant-hiramatsu-kodaiji1.png'
  },
  {
    name: "ristorante DONO",
    cuisine: "Italian",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/ristorante-dono",
    image: '/images/ristorante-dono1.png'
  },
  {
    name: "Ryo Kawashima",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/ryo-kawashima",
    image: '/images/ryo-kawashima1.png'
  },
  {
    name: "Ryoriya EN",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/ryoriya-en",
    image: '/images/ryoriya-en1.png'
  },
  {
    name: "Ryoriya Kanemitsu",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/ryoriya-kanemitsu",
    image: '/images/ryoriya-kanemitsu1.png'
  },
  {
    name: "Ryoriya Maekawa",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/ryoriya-maekawa",
    image: '/images/ryoriya-maekawa1.png'
  },
  {
    name: "Ryoriya Otaya",
    cuisine: "Japanese",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/ryoriya-otaya",
    image: '/images/ryoriya-otaya1.png'
  },
  {
    name: "Ryoriya Stephan Pantel",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/ryoriya-stephan-pantel",
    image: '/images/ryoriya-stephan-pantel1.png'
  },
  {
    name: "Ryō-shō",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/ry-sh",
    image: '/images/ry-sh1.png'
  },
  {
    name: "Sakaimachi Kamokura",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/sakaimachi-kamokura",
    image: '/images/sakaimachi-kamokura1.png'
  },
  {
    name: "Saketosakana DNA",
    cuisine: "Izakaya",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/saketosakana-dna",
    image: '/images/saketosakana-dna1.png'
  },
  {
    name: "Sambongi Shoten",
    cuisine: "Izakaya",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/sambongi-shoten",
    image: '/images/sambongi-shoten1.png'
  },
  {
    name: "Sanso Kyoyamato",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/sanso-kyoyamato",
    image: '/images/sanso-kyoyamato1.png'
  },
  {
    name: "Saryo Tesshin",
    cuisine: "Soba",
    price: "¥",
    path: "/japan/kyoto/kyoto/saryo-tesshin",
    image: '/images/saryo-tesshin1.png'
  },
  {
    name: "SATOWA",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/satowa",
    image: '/images/satowa1.png'
  },
  {
    name: "SEN",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/sen",
    image: '/images/sen1.png'
  },
  {
    name: "Senda",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/senda",
    image: '/images/senda1.png'
  },
  {
    name: "Shichiku Kiko",
    cuisine: "Japanese",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/shichiku-kiko",
    image: '/images/shichiku-kiko1.png'
  },
  {
    name: "Shigetsu",
    cuisine: "Shojin",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/shigetsu",
    image: '/images/shigetsu1.png'
  },
  {
    name: "Shimmonzen Yonemura",
    cuisine: "Innovative",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/shimmonzen-yonemura",
    image: '/images/shimmonzen-yonemura1.png'
  },
  {
    name: "Shimogamo Ichima",
    cuisine: "Sushi",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/shimogamo-ichima",
    image: '/images/shimogamo-ichima1.png'
  },
  {
    name: "Shimogamo Saryo",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/shimogamo-saryo",
    image: '/images/shimogamo-saryo1.png'
  },
  {
    name: "shiro",
    cuisine: "Contemporary, Italian",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/shiro",
    image: '/images/shiro1.png'
  },
  {
    name: "Shuhaku",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/shuhaku",
    image: '/images/shuhaku1.png'
  },
  {
    name: "Soba Rojina",
    cuisine: "Soba",
    price: "¥",
    path: "/japan/kyoto/kyoto/soba-rojina",
    image: '/images/soba-rojina1.png'
  },
  {
    name: "Sojiki Nakahigashi",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/sojiki-nakahigashi",
    image: '/images/sojiki-nakahigashi1.png'
  },
  {
    name: "Sokkon Fujimoto",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/sokkon-fujimoto",
    image: '/images/sokkon-fujimoto1.png'
  },
  {
    name: "sonoba",
    cuisine: "Soba",
    price: "¥",
    path: "/japan/kyoto/kyoto/sonoba",
    image: '/images/sonoba1.png'
  },
  {
    name: "Sumibi Kappo Ifuki",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/sumibi-kappo-ifuki",
    image: '/images/sumibi-kappo-ifuki1.png'
  },
  {
    name: "Sumiyakisosaitoriya Hitomi",
    cuisine: "Yakitori",
    price: "¥",
    path: "/japan/kyoto/kyoto/sumiyakisosaitoriya-hitomi",
    image: '/images/sumiyakisosaitoriya-hitomi1.png'
  },
  {
    name: "Sushi Hayashi",
    cuisine: "Sushi",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/sushi-hayashi",
    image: '/images/sushi-hayashi1.png'
  },
  {
    name: "sushi imagine",
    cuisine: "Sushi",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/sushi-imagine",
    image: '/images/sushi-imagine1.png'
  },
  {
    name: "Sushi Kappo Nakaichi",
    cuisine: "Japanese, Sushi",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/sushi-kappo-nakaichi",
    image: '/images/sushi-kappo-nakaichi1.png'
  },
  {
    name: "Sushi Kawano",
    cuisine: "Sushi",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/sushi-kawano",
    image: '/images/sushi-kawano1.png'
  },
  {
    name: "Sushi Matsumoto",
    cuisine: "Sushi",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/sushi-matsumoto",
    image: '/images/sushi-matsumoto1.png'
  },
  {
    name: "Sushi Rakumi",
    cuisine: "Sushi",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/sushi-rakumi",
    image: '/images/sushi-rakumi1.png'
  },
  {
    name: "Sushizen",
    cuisine: "Sushi",
    price: "¥",
    path: "/japan/kyoto/kyoto/sushizen",
    image: '/images/sushizen1.png'
  },
  {
    name: "TAKAYAMA",
    cuisine: "Italian",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/takayama",
    image: '/images/takayama1.png'
  },
  {
    name: "Takehisa",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/takehisa",
    image: '/images/takehisa1.png'
  },
  {
    name: "Taketoko",
    cuisine: "Japanese",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/taketoko",
    image: '/images/taketoko1.png'
  },
  {
    name: "Takezaki",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/takezaki",
    image: '/images/takezaki1.png'
  },
  {
    name: "Takocho",
    cuisine: "Oden",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/takocho",
    image: '/images/takocho1.png'
  },
  {
    name: "Takoyakushi Furukawa",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/takoyakushi-furukawa",
    image: '/images/takoyakushi-furukawa1.png'
  },
  {
    name: "Tan",
    cuisine: "Japanese",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/tan",
    image: '/images/tan1.png'
  },
  {
    name: "Tempura Mizuki",
    cuisine: "Tempura",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/tempura-mizuki",
    image: '/images/tempura-mizuki1.png'
  },
  {
    name: "Tenjaku",
    cuisine: "Tempura, Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/tenjaku",
    image: '/images/tenjaku1.png'
  },
  {
    name: "Ten-you",
    cuisine: "Tempura",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/ten-you",
    image: '/images/ten-you1.png'
  },
  {
    name: "Teuchisoba Kanei",
    cuisine: "Soba",
    price: "¥",
    path: "/japan/kyoto/kyoto/teuchisoba-kanei",
    image: '/images/teuchisoba-kanei1.png'
  },
  {
    name: "TOKI",
    cuisine: "Contemporary",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/toki",
    image: '/images/toki1.png'
  },
  {
    name: "Tokuha Motonari",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/tokuha-motonari",
    image: '/images/tokuha-motonari1.png'
  },
  {
    name: "Tokumaru",
    cuisine: "Japanese",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/tokumaru",
    image: '/images/tokumaru1.png'
  },
  {
    name: "Tokuo",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/tokuo",
    image: '/images/tokuo1.png'
  },
  {
    name: "Torisaki",
    cuisine: "Yakitori",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/torisaki",
    image: '/images/torisaki1.png'
  },
  {
    name: "Torisho sai",
    cuisine: "Yakitori",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/torisho-sai",
    image: '/images/torisho-sai1.png'
  },
  {
    name: "Totoyoshi",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/totoyoshi",
    image: '/images/totoyoshi1.png'
  },
  {
    name: "Tozentei",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/tozentei",
    image: '/images/tozentei1.png'
  },
  {
    name: "Tsujifusa",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/tsujifusa",
    image: '/images/tsujifusa1.png'
  },
  {
    name: "Tsuneya Densuke",
    cuisine: "Izakaya",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/tsuneya-densuke",
    image: '/images/tsuneya-densuke1.png'
  },
  {
    name: "Tsuroku",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/tsuroku",
    image: '/images/tsuroku1.png'
  },
  {
    name: "Uozuya",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/uozuya",
    image: '/images/uozuya1.png'
  },
  {
    name: "Vegan Ramen UZU",
    cuisine: "Ramen",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/vegan-ramen-uzu",
    image: '/images/vegan-ramen-uzu1.png'
  },
  {
    name: "VELROSIER",
    cuisine: "Chinese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/velrosier",
    image: '/images/velrosier1.png'
  },
  {
    name: "Vena",
    cuisine: "Italian",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/vena",
    image: '/images/vena1.png'
  },
  {
    name: "wabiya",
    cuisine: "Yakitori, Chicken Specialities",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/wabiya",
    image: '/images/wabiya1.png'
  },
  {
    name: "Wagokoro Izumi",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/wagokoro-izumi",
    image: '/images/wagokoro-izumi1.png'
  },
  {
    name: "Wakasugi",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/wakasugi",
    image: '/images/wakasugi1.png'
  },
  {
    name: "Washoku Haru",
    cuisine: "Japanese",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/washoku-haru",
    image: '/images/washoku-haru1.png'
  },
  {
    name: "WASHOKU TOKU",
    cuisine: "Japanese",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/washoku-toku",
    image: '/images/washoku-toku1.png'
  },
  {
    name: "wavie",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/wavie",
    image: '/images/wavie1.png'
  },
  {
    name: "Yakitori Kyoto Tachibana",
    cuisine: "Yakitori",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/yakitori-kyoto-tachibana",
    image: '/images/yakitori-kyoto-tachibana1.png'
  },
  {
    name: "Yamaji Yosuke",
    cuisine: "French",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/yamaji-yosuke",
    image: '/images/yamaji-yosuke1.png'
  },
  {
    name: "Yassan",
    cuisine: "Beef",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/yassan",
    image: '/images/yassan1.png'
  },
  {
    name: "YOKOI",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/yokoi",
    image: '/images/yokoi1.png'
  },
  {
    name: "YOSHOKU OGATA",
    cuisine: "Yoshoku",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/yoshoku-ogata",
    image: '/images/yoshoku-ogata1.png'
  },
  {
    name: "Yusokuryori Mankamero",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/japan/kyoto/kyoto/yusokuryori-mankamero",
    image: '/images/yusokuryori-mankamero1.png'
  },
  {
    name: "Yuyu",
    cuisine: "Japanese",
    price: "¥¥¥",
    path: "/japan/kyoto/kyoto/yuyu",
    image: '/images/yuyu1.png'
  },
  {
    name: "Zucchero",
    cuisine: "Italian",
    price: "¥¥",
    path: "/japan/kyoto/kyoto/zucchero",
    image: '/images/zucchero1.png'
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
