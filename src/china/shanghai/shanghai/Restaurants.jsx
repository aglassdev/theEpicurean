import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Shanghai";

const restaurants = [
  {
    name: "102 House",
    cuisine: "Cantonese",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/102-house",
    image: '/images/102-house1.png'
  },
  {
    name: "1515 West Chophouse",
    cuisine: "Steakhouse",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/1515-west-chophouse",
    image: '/images/1515-west-chophouse1.png'
  },
  {
    name: "8 ½ Otto e Mezzo Bombana",
    cuisine: "Italian",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/8-otto-e-mezzo-bombana",
    image: '/images/8-otto-e-mezzo-bombana1.png'
  },
  {
    name: "A Niang Mian Guan",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/shanghai/shanghai/a-niang-mian-guan",
    image: '/images/a-niang-mian-guan1.png'
  },
  {
    name: "Amazing Chinese Cuisine (Changning)",
    cuisine: "Chao Zhou",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/amazing-chinese-cuisine-changning",
    image: '/images/amazing-chinese-cuisine-changning1.png'
  },
  {
    name: "Arva",
    cuisine: "Italian",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/arva",
    image: '/images/arva1.png'
  },
  {
    name: "Bai Rong",
    cuisine: "Shandong",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/bai-rong",
    image: '/images/bai-rong1.png'
  },
  {
    name: "Bao Li Xuan",
    cuisine: "Cantonese",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/bao-li-xuan",
    image: '/images/bao-li-xuan1.png'
  },
  {
    name: "Beef & Liberty (Jingan)",
    cuisine: "American",
    price: "¥¥",
    path: "/china/shanghai/shanghai/beef-liberty-jingan",
    image: '/images/beef-liberty-jingan1.png'
  },
  {
    name: "Canton 8 (Huangpu)",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/shanghai/shanghai/canton-8-huangpu",
    image: '/images/canton-8-huangpu1.png'
  },
  {
    name: "Canton Table",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/canton-table",
    image: '/images/canton-table1.png'
  },
  {
    name: "Cellar to Table",
    cuisine: "Italian",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/cellar-to-table",
    image: '/images/cellar-to-table1.png'
  },
  {
    name: "Chaimen Hui (Pudong)",
    cuisine: "Sichuan",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/chaimen-hui-pudong",
    image: '/images/chaimen-hui-pudong1.png'
  },
  {
    name: "Cheng Long Hang (Huangpu)",
    cuisine: "Shanghainese",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/cheng-long-hang-huangpu",
    image: '/images/cheng-long-hang-huangpu1.png'
  },
  {
    name: "Chic 1699",
    cuisine: "Fujian",
    price: "¥¥",
    path: "/china/shanghai/shanghai/chic-1699",
    image: '/images/chic-16991.png'
  },
  {
    name: "Chun",
    cuisine: "Shanghainese",
    price: "¥",
    path: "/china/shanghai/shanghai/chun",
    image: '/images/chun1.png'
  },
  {
    name: "Cong's Kitchen",
    cuisine: "Shanghainese",
    price: "¥¥",
    path: "/china/shanghai/shanghai/congs-kitchen",
    image: '/images/congs-kitchen1.png'
  },
  {
    name: "Coquille",
    cuisine: "French",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/coquille",
    image: '/images/coquille1.png'
  },
  {
    name: "Cuivre",
    cuisine: "French Contemporary",
    price: "¥¥",
    path: "/china/shanghai/shanghai/cuivre",
    image: '/images/cuivre1.png'
  },
  {
    name: "Da Dong (Xuhui)",
    cuisine: "Chinese Contemporary",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/da-dong-xuhui",
    image: '/images/da-dong-xuhui1.png'
  },
  {
    name: "Da Hu Chun (Middle Sichuan Road)",
    cuisine: "Dim Sum",
    price: "¥",
    path: "/china/shanghai/shanghai/da-hu-chun-middle-sichuan-road",
    image: '/images/da-hu-chun-middle-sichuan-road1.png'
  },
  {
    name: "Da Vittorio",
    cuisine: "Italian",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/da-vittorio",
    image: '/images/da-vittorio1.png'
  },
  {
    name: "Da Vittorio",
    cuisine: "Italian",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/da-vittorio",
    image: '/images/da-vittorio1.png'
  },
  {
    name: "De Xing Guan (Guangdong Road)",
    cuisine: "Shanghainese",
    price: "¥",
    path: "/china/shanghai/shanghai/de-xing-guan-guangdong-road",
    image: '/images/de-xing-guan-guangdong-road1.png'
  },
  {
    name: "Ding Te Le Zhou Mian Guan",
    cuisine: "Noodles and Congee",
    price: "¥",
    path: "/china/shanghai/shanghai/ding-te-le-zhou-mian-guan",
    image: '/images/ding-te-le-zhou-mian-guan1.png'
  },
  {
    name: "Dining Room",
    cuisine: "Jiangzhe",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/dining-room",
    image: '/images/dining-room1.png'
  },
  {
    name: "Dong Ping Chao",
    cuisine: "Chao Zhou",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/dong-ping-chao",
    image: '/images/dong-ping-chao1.png'
  },
  {
    name: "Easeful Cuisine (Jingan)",
    cuisine: "Jiangzhe",
    price: "¥¥",
    path: "/china/shanghai/shanghai/easeful-cuisine-jingan",
    image: '/images/easeful-cuisine-jingan1.png'
  },
  {
    name: "EHB",
    cuisine: "European Contemporary",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/ehb",
    image: '/images/ehb1.png'
  },
  {
    name: "Frasca",
    cuisine: "Italian",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/frasca",
    image: '/images/frasca1.png'
  },
  {
    name: "Fu 1015",
    cuisine: "Shanghainese",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/fu-1015",
    image: '/images/fu-10151.png'
  },
  {
    name: "Fu 1039",
    cuisine: "Shanghainese",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/fu-1039",
    image: '/images/fu-10391.png'
  },
  {
    name: "Fu 1088",
    cuisine: "Shanghainese",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/fu-1088",
    image: '/images/fu-10881.png'
  },
  {
    name: "Fu He Hui",
    cuisine: "Vegetarian",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/fu-he-hui",
    image: '/images/fu-he-hui1.png'
  },
  {
    name: "Gastro Esthetics at DaDong",
    cuisine: "Chinese Contemporary",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/gastro-esthetics-at-dadong",
    image: '/images/gastro-esthetics-at-dadong1.png'
  },
  {
    name: "Gong De Lin (West Nanjing Road)",
    cuisine: "Vegetarian",
    price: "¥¥",
    path: "/china/shanghai/shanghai/gong-de-lin-west-nanjing-road",
    image: '/images/gong-de-lin-west-nanjing-road1.png'
  },
  {
    name: "Hai Wei Guan (Jingan)",
    cuisine: "Shanghainese",
    price: "¥¥",
    path: "/china/shanghai/shanghai/hai-wei-guan-jingan",
    image: '/images/hai-wei-guan-jingan1.png'
  },
  {
    name: "Hakkasan",
    cuisine: "Chinese Contemporary, Cantonese",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/hakkasan",
    image: '/images/hakkasan1.png'
  },
  {
    name: "Hang Yuen Hin",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/shanghai/shanghai/hang-yuen-hin",
    image: '/images/hang-yuen-hin1.png'
  },
  {
    name: "Hao Sheng",
    cuisine: "Shanghainese",
    price: "¥¥",
    path: "/china/shanghai/shanghai/hao-sheng",
    image: '/images/hao-sheng1.png'
  },
  {
    name: "Ho Hung Kee",
    cuisine: "Noodles and Congee",
    price: "¥¥",
    path: "/china/shanghai/shanghai/ho-hung-kee",
    image: '/images/ho-hung-kee1.png'
  },
  {
    name: "Hokkien Huay Kuan",
    cuisine: "Fujian",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/hokkien-huay-kuan",
    image: '/images/hokkien-huay-kuan1.png'
  },
  {
    name: "Hong 0871",
    cuisine: "Yunnanese",
    price: "¥¥",
    path: "/china/shanghai/shanghai/hong-0871",
    image: '/images/hong-08711.png'
  },
  {
    name: "Hong Yu Fang",
    cuisine: "Dim Sum",
    price: "¥",
    path: "/china/shanghai/shanghai/hong-yu-fang",
    image: '/images/hong-yu-fang1.png'
  },
  {
    name: "Il Ristorante - Niko Romito",
    cuisine: "Italian",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/il-ristorante-niko-romito",
    image: '/images/il-ristorante-niko-romito1.png'
  },
  {
    name: "Imperial Treasure Fine Chinese Cuisine",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/imperial-treasure-fine-chinese-cuisine",
    image: '/images/imperial-treasure-fine-chinese-cuisine1.png'
  },
  {
    name: "Jade on 36",
    cuisine: "French Contemporary",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/jade-on-36",
    image: '/images/jade-on-361.png'
  },
  {
    name: "Jean Georges",
    cuisine: "French",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/jean-georges",
    image: '/images/jean-georges1.png'
  },
  {
    name: "Ji Pin Court",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/ji-pin-court",
    image: '/images/ji-pin-court1.png'
  },
  {
    name: "Jin Xuan",
    cuisine: "Cantonese",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/jin-xuan",
    image: '/images/jin-xuan1.png'
  },
  {
    name: "Jingmei Wuxi Noodles (Jingan)",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/shanghai/shanghai/jingmei-wuxi-noodles-jingan",
    image: '/images/jingmei-wuxi-noodles-jingan1.png'
  },
  {
    name: "Kanpai Classic (Huangpu)",
    cuisine: "Barbecue",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/kanpai-classic-huangpu",
    image: '/images/kanpai-classic-huangpu1.png'
  },
  {
    name: "La Scene Ronde",
    cuisine: "Innovative",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/la-scene-ronde",
    image: '/images/la-scene-ronde1.png'
  },
  {
    name: "Lan Xin (Jinxian Road)",
    cuisine: "Shanghainese",
    price: "¥",
    path: "/china/shanghai/shanghai/lan-xin-jinxian-road",
    image: '/images/lan-xin-jinxian-road1.png'
  },
  {
    name: "Lao Di Fang Mian Guan",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/shanghai/shanghai/lao-di-fang-mian-guan",
    image: '/images/lao-di-fang-mian-guan1.png'
  },
  {
    name: "Lao Xing Xian (Huangpu)",
    cuisine: "Shanghainese",
    price: "¥¥",
    path: "/china/shanghai/shanghai/lao-xing-xian-huangpu",
    image: '/images/lao-xing-xian-huangpu1.png'
  },
  {
    name: "Lao Zheng Xing",
    cuisine: "Shanghainese",
    price: "¥¥",
    path: "/china/shanghai/shanghai/lao-zheng-xing",
    image: '/images/lao-zheng-xing1.png'
  },
  {
    name: "Le Comptoir de Pierre Gagnaire",
    cuisine: "French",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/le-comptoir-de-pierre-gagnaire",
    image: '/images/le-comptoir-de-pierre-gagnaire1.png'
  },
  {
    name: "Legend Taste (Jingan)",
    cuisine: "Yunnanese",
    price: "¥¥",
    path: "/china/shanghai/shanghai/legend-taste-jingan",
    image: '/images/legend-taste-jingan1.png'
  },
  {
    name: "Lei Garden (Pudong)",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/lei-garden-pudong",
    image: '/images/lei-garden-pudong1.png'
  },
  {
    name: "Lei Garden (Xuhui)",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/shanghai/shanghai/lei-garden-xuhui",
    image: '/images/lei-garden-xuhui1.png'
  },
  {
    name: "Les Nuages",
    cuisine: "Innovative",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/les-nuages",
    image: '/images/les-nuages1.png'
  },
  {
    name: "Lin Family of One - The Bund",
    cuisine: "Taizhou",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/lin-family-of-one-the-bund",
    image: '/images/lin-family-of-one-the-bund1.png'
  },
  {
    name: "Lin Jiang Yan",
    cuisine: "Jiangzhe",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/lin-jiang-yan",
    image: '/images/lin-jiang-yan1.png'
  },
  {
    name: "Ling Long",
    cuisine: "Innovative",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/ling-long",
    image: '/images/ling-long1.png'
  },
  {
    name: "Lu Bo Lang",
    cuisine: "Shanghainese",
    price: "¥¥",
    path: "/china/shanghai/shanghai/lu-bo-lang",
    image: '/images/lu-bo-lang1.png'
  },
  {
    name: "Lu Style (Huangpu)",
    cuisine: "Shandong",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/lu-style-huangpu",
    image: '/images/lu-style-huangpu1.png'
  },
  {
    name: "Maison Lameloise",
    cuisine: "French Contemporary",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/maison-lameloise",
    image: '/images/maison-lameloise1.png'
  },
  {
    name: "Mao Long",
    cuisine: "Shanghainese",
    price: "¥¥",
    path: "/china/shanghai/shanghai/mao-long",
    image: '/images/mao-long1.png'
  },
  {
    name: "Meet the Bund (Zhongshan Dong Er Road)",
    cuisine: "Fujian",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/meet-the-bund-zhongshan-dong-er-road",
    image: '/images/meet-the-bund-zhongshan-dong-er-road1.png'
  },
  {
    name: "Mercado 505",
    cuisine: "Spanish",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/mercado-505",
    image: '/images/mercado-5051.png'
  },
  {
    name: "Mercato",
    cuisine: "Italian",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/mercato",
    image: '/images/mercato1.png'
  },
  {
    name: "Mi Thai",
    cuisine: "Thai",
    price: "¥¥",
    path: "/china/shanghai/shanghai/mi-thai",
    image: '/images/mi-thai1.png'
  },
  {
    name: "Min He Nan Huan Xi",
    cuisine: "Fujian",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/min-he-nan-huan-xi",
    image: '/images/min-he-nan-huan-xi1.png'
  },
  {
    name: "Ming Court",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/ming-court",
    image: '/images/ming-court1.png'
  },
  {
    name: "Ming Court (Minhang)",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/ming-court-minhang",
    image: '/images/ming-court-minhang1.png'
  },
  {
    name: "Moose (Changning)",
    cuisine: "Jiangzhe",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/moose-changning",
    image: '/images/moose-changning1.png'
  },
  {
    name: "Moose (Pudong)",
    cuisine: "Jiangzhe",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/moose-pudong",
    image: '/images/moose-pudong1.png'
  },
  {
    name: "Mr & Mrs Bund",
    cuisine: "French Contemporary",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/mr-mrs-bund",
    image: '/images/mr-mrs-bund1.png'
  },
  {
    name: "Nan Xing Yuan",
    cuisine: "Sichuan",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/nan-xing-yuan",
    image: '/images/nan-xing-yuan1.png'
  },
  {
    name: "Nanxiang Steamed Bun (Yuyuan Road)",
    cuisine: "Dim Sum",
    price: "¥",
    path: "/china/shanghai/shanghai/nanxiang-steamed-bun-yuyuan-road",
    image: '/images/nanxiang-steamed-bun-yuyuan-road1.png'
  },
  {
    name: "Narisawa",
    cuisine: "Innovative",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/narisawa",
    image: '/images/narisawa1.png'
  },
  {
    name: "Narisawa",
    cuisine: "Innovative",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/narisawa",
    image: '/images/narisawa1.png'
  },
  {
    name: "Nuits",
    cuisine: "French Contemporary",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/nuits",
    image: '/images/nuits1.png'
  },
  {
    name: "Numata Sou",
    cuisine: "Tempura",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/numata-sou",
    image: '/images/numata-sou1.png'
  },
  {
    name: "Obscura",
    cuisine: "Innovative",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/obscura",
    image: '/images/obscura1.png'
  },
  {
    name: "Oriental Sense & Palate",
    cuisine: "Chao Zhou",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/oriental-sense-palate",
    image: '/images/oriental-sense-palate1.png'
  },
  {
    name: "Phénix",
    cuisine: "French",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/phnix",
    image: '/images/phnix1.png'
  },
  {
    name: "Épices & Foie Gras",
    cuisine: "French Contemporary",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/pices-foie-gras",
    image: '/images/pices-foie-gras1.png'
  },
  {
    name: "Polux",
    cuisine: "French",
    price: "¥¥",
    path: "/china/shanghai/shanghai/polux",
    image: '/images/polux1.png'
  },
  {
    name: "Pop",
    cuisine: "European",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/pop",
    image: '/images/pop1.png'
  },
  {
    name: "Qiao Ai Lai Lai Xiao Long (Huangpu)",
    cuisine: "Dim Sum",
    price: "¥",
    path: "/china/shanghai/shanghai/qiao-ai-lai-lai-xiao-long-huangpu",
    image: '/images/qiao-ai-lai-lai-xiao-long-huangpu1.png'
  },
  {
    name: "Ren He Guan (Xuhui)",
    cuisine: "Shanghainese",
    price: "¥¥",
    path: "/china/shanghai/shanghai/ren-he-guan-xuhui",
    image: '/images/ren-he-guan-xuhui1.png'
  },
  {
    name: "Rong Cuisine",
    cuisine: "Taizhou",
    price: "¥¥",
    path: "/china/shanghai/shanghai/rong-cuisine",
    image: '/images/rong-cuisine1.png'
  },
  {
    name: "Rongjia Noodles Soup with Yellow Croaker (Jingan)",
    cuisine: "Noodles",
    price: "¥¥",
    path: "/china/shanghai/shanghai/rongjia-noodles-soup-with-yellow-croaker-jingan",
    image: '/images/rongjia-noodles-soup-with-yellow-croaker-jingan1.png'
  },
  {
    name: "Royal China Club",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/royal-china-club",
    image: '/images/royal-china-club1.png'
  },
  {
    name: "Royal China Club",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/royal-china-club",
    image: '/images/royal-china-club1.png'
  },
  {
    name: "Scarpetta",
    cuisine: "Italian",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/scarpetta",
    image: '/images/scarpetta1.png'
  },
  {
    name: "Scilla",
    cuisine: "Mediterranean Cuisine",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/scilla",
    image: '/images/scilla1.png'
  },
  {
    name: "Seventh Son",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/seventh-son",
    image: '/images/seventh-son1.png'
  },
  {
    name: "Shanghai",
    cuisine: "Shanghainese",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/shanghai",
    image: '/images/shanghai1.png'
  },
  {
    name: "Shanghai Club",
    cuisine: "Jiangzhe, Cantonese",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/shanghai-club",
    image: '/images/shanghai-club1.png'
  },
  {
    name: "Shanghai Tavern",
    cuisine: "European Contemporary",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/shanghai-tavern",
    image: '/images/shanghai-tavern1.png'
  },
  {
    name: "Shaughnessy",
    cuisine: "Steakhouse",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/shaughnessy",
    image: '/images/shaughnessy1.png'
  },
  {
    name: "Sheng Yong Xing (Huangpu)",
    cuisine: "Beijing Cuisine",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/sheng-yong-xing-huangpu",
    image: '/images/sheng-yong-xing-huangpu1.png'
  },
  {
    name: "Shi Chuan Fei Chuan (Xuhui)",
    cuisine: "Sichuan",
    price: "¥¥",
    path: "/china/shanghai/shanghai/shi-chuan-fei-chuan-xuhui",
    image: '/images/shi-chuan-fei-chuan-xuhui1.png'
  },
  {
    name: "Sir Elly's",
    cuisine: "European Contemporary",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/sir-ellys",
    image: '/images/sir-ellys1.png'
  },
  {
    name: "Sole",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/sole",
    image: '/images/sole1.png'
  },
  {
    name: "Stonesal",
    cuisine: "Steakhouse",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/stonesal",
    image: '/images/stonesal1.png'
  },
  {
    name: "Sui Tang Li",
    cuisine: "Chinese Contemporary",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/sui-tang-li",
    image: '/images/sui-tang-li1.png'
  },
  {
    name: "Summer Palace",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/summer-palace",
    image: '/images/summer-palace1.png'
  },
  {
    name: "Taian Table",
    cuisine: "Innovative",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/taian-table",
    image: '/images/taian-table1.png'
  },
  {
    name: "T'ang Court",
    cuisine: "Cantonese",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/tang-court",
    image: '/images/tang-court1.png'
  },
  {
    name: "Tasty Congee & Noodle Wantun Shop",
    cuisine: "Noodles and Congee",
    price: "¥¥",
    path: "/china/shanghai/shanghai/tasty-congee-noodle-wantun-shop",
    image: '/images/tasty-congee-noodle-wantun-shop1.png'
  },
  {
    name: "Tea Culture (East Beijing Road)",
    cuisine: "Huaiyang",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/tea-culture-east-beijing-road",
    image: '/images/tea-culture-east-beijing-road1.png'
  },
  {
    name: "The House of Rong",
    cuisine: "Taizhou",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/the-house-of-rong",
    image: '/images/the-house-of-rong1.png'
  },
  {
    name: "The Lakeside Veggie",
    cuisine: "Vegetarian",
    price: "¥¥",
    path: "/china/shanghai/shanghai/the-lakeside-veggie",
    image: '/images/the-lakeside-veggie1.png'
  },
  {
    name: "The Meat",
    cuisine: "Steakhouse",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/the-meat",
    image: '/images/the-meat1.png'
  },
  {
    name: "The Pine",
    cuisine: "European Contemporary",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/the-pine",
    image: '/images/the-pine1.png'
  },
  {
    name: "The Pine",
    cuisine: "European Contemporary",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/the-pine",
    image: '/images/the-pine1.png'
  },
  {
    name: "The Yidao (East Beijing Road)",
    cuisine: "Huaiyang",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/the-yidao-east-beijing-road",
    image: '/images/the-yidao-east-beijing-road1.png'
  },
  {
    name: "Tou Zao",
    cuisine: "Cantonese",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/tou-zao",
    image: '/images/tou-zao1.png'
  },
  {
    name: "Villa Le Bec - Bistro 321",
    cuisine: "French",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/villa-le-bec-bistro-321",
    image: '/images/villa-le-bec-bistro-3211.png'
  },
  {
    name: "Wan Yan (Changning)",
    cuisine: "Hui Cuisine",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/wan-yan-changning",
    image: '/images/wan-yan-changning1.png'
  },
  {
    name: "Wang Lu",
    cuisine: "Chinese",
    price: "¥¥",
    path: "/china/shanghai/shanghai/wang-lu",
    image: '/images/wang-lu1.png'
  },
  {
    name: "Wei Xiang Zhai (Yandang Road)",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/shanghai/shanghai/wei-xiang-zhai-yandang-road",
    image: '/images/wei-xiang-zhai-yandang-road1.png'
  },
  {
    name: "Wu You Xian",
    cuisine: "Dim Sum",
    price: "¥¥",
    path: "/china/shanghai/shanghai/wu-you-xian",
    image: '/images/wu-you-xian1.png'
  },
  {
    name: "Xiao Tao Mian Guan",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/shanghai/shanghai/xiao-tao-mian-guan",
    image: '/images/xiao-tao-mian-guan1.png'
  },
  {
    name: "Xin Rong Ji (West Nanjing Road)",
    cuisine: "Taizhou",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/xin-rong-ji-west-nanjing-road",
    image: '/images/xin-rong-ji-west-nanjing-road1.png'
  },
  {
    name: "Xin Yuan Lou",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/shanghai/shanghai/xin-yuan-lou",
    image: '/images/xin-yuan-lou1.png'
  },
  {
    name: "Xuji Seafood (Xuhui)",
    cuisine: "Seafood",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/xuji-seafood-xuhui",
    image: '/images/xuji-seafood-xuhui1.png'
  },
  {
    name: "Yè Shanghai",
    cuisine: "Shanghainese",
    price: "¥¥",
    path: "/china/shanghai/shanghai/y-shanghai",
    image: '/images/y-shanghai1.png'
  },
  {
    name: "Yangzhou Fan Dian (Huangpu)",
    cuisine: "Huaiyang",
    price: "¥¥",
    path: "/china/shanghai/shanghai/yangzhou-fan-dian-huangpu",
    image: '/images/yangzhou-fan-dian-huangpu1.png'
  },
  {
    name: "Yi Long Court",
    cuisine: "Cantonese",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/yi-long-court",
    image: '/images/yi-long-court1.png'
  },
  {
    name: "Yong Feng Mian Guan",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/shanghai/shanghai/yong-feng-mian-guan",
    image: '/images/yong-feng-mian-guan1.png'
  },
  {
    name: "Yong Fu (Hongkou)",
    cuisine: "Ningbo",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/yong-fu-hongkou",
    image: '/images/yong-fu-hongkou1.png'
  },
  {
    name: "Yong Fu (Huangpu)",
    cuisine: "Ningbo",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/yong-fu-huangpu",
    image: '/images/yong-fu-huangpu1.png'
  },
  {
    name: "Yong Jiang Zhen",
    cuisine: "Jiangzhe",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/yong-jiang-zhen",
    image: '/images/yong-jiang-zhen1.png'
  },
  {
    name: "Yong Xing",
    cuisine: "Shanghainese",
    price: "¥",
    path: "/china/shanghai/shanghai/yong-xing",
    image: '/images/yong-xing1.png'
  },
  {
    name: "Yong Yi Ting",
    cuisine: "Jiangzhe",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/yong-yi-ting",
    image: '/images/yong-yi-ting1.png'
  },
  {
    name: "YongFoo Élite",
    cuisine: "Shanghainese",
    price: "¥¥¥¥",
    path: "/china/shanghai/shanghai/yongfoo-lite",
    image: '/images/yongfoo-lite1.png'
  },
  {
    name: "YongFu Mini (Pudong)",
    cuisine: "Ningbo",
    price: "¥¥",
    path: "/china/shanghai/shanghai/yongfu-mini-pudong",
    image: '/images/yongfu-mini-pudong1.png'
  },
  {
    name: "Yu Du Lao Wei Mian (Huangpu)",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/shanghai/shanghai/yu-du-lao-wei-mian-huangpu",
    image: '/images/yu-du-lao-wei-mian-huangpu1.png'
  },
  {
    name: "Yu Ge Zhanjiang (Jingan)",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/shanghai/shanghai/yu-ge-zhanjiang-jingan",
    image: '/images/yu-ge-zhanjiang-jingan1.png'
  },
  {
    name: "Yue Hai Tang",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/yue-hai-tang",
    image: '/images/yue-hai-tang1.png'
  },
  {
    name: "Yunhe Noodle (Huangpu)",
    cuisine: "Noodles, Shanghainese",
    price: "¥¥",
    path: "/china/shanghai/shanghai/yunhe-noodle-huangpu",
    image: '/images/yunhe-noodle-huangpu1.png'
  },
  {
    name: "Zhou She (Minhang)",
    cuisine: "Shanghainese",
    price: "¥¥¥",
    path: "/china/shanghai/shanghai/zhou-she-minhang",
    image: '/images/zhou-she-minhang1.png'
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
