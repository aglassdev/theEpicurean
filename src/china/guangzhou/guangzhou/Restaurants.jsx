import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Guangzhou";

const restaurants = [
  {
    name: "Aroma",
    cuisine: "European",
    price: "¥¥¥",
    path: "/china/guangzhou/guangzhou/aroma",
    image: '/images/aroma1.png'
  },
  {
    name: "Beiyuan Cuisine",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/beiyuan-cuisine",
    image: '/images/beiyuan-cuisine1.png'
  },
  {
    name: "BingSheng Mansion (Xiancun Road)",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/guangzhou/guangzhou/bingsheng-mansion-xiancun-road",
    image: '/images/bingsheng-mansion-xiancun-road1.png'
  },
  {
    name: "BingSheng Pin Wei (Dongxiao Road)",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/bingsheng-pin-wei-dongxiao-road",
    image: '/images/bingsheng-pin-wei-dongxiao-road1.png'
  },
  {
    name: "BingSheng Private Kitchen (Tianhe East Road)",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/guangzhou/guangzhou/bingsheng-private-kitchen-tianhe-east-road",
    image: '/images/bingsheng-private-kitchen-tianhe-east-road1.png'
  },
  {
    name: "Catch",
    cuisine: "European Contemporary",
    price: "¥¥¥¥",
    path: "/china/guangzhou/guangzhou/catch",
    image: '/images/catch1.png'
  },
  {
    name: "Chao Ji Claypot Rice (Liwan)",
    cuisine: "Cantonese",
    price: "¥",
    path: "/china/guangzhou/guangzhou/chao-ji-claypot-rice-liwan",
    image: '/images/chao-ji-claypot-rice-liwan1.png'
  },
  {
    name: "Chao Yue",
    cuisine: "Innovative",
    price: "¥¥¥¥",
    path: "/china/guangzhou/guangzhou/chao-yue",
    image: '/images/chao-yue1.png'
  },
  {
    name: "Cheers (Kaichuang Avenue)",
    cuisine: "Hunanese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/cheers-kaichuang-avenue",
    image: '/images/cheers-kaichuang-avenue1.png'
  },
  {
    name: "Chuang Fa",
    cuisine: "Cantonese",
    price: "¥",
    path: "/china/guangzhou/guangzhou/chuang-fa",
    image: '/images/chuang-fa1.png'
  },
  {
    name: "Chōwa",
    cuisine: "Innovative",
    price: "¥¥¥",
    path: "/china/guangzhou/guangzhou/chwa",
    image: '/images/chwa1.png'
  },
  {
    name: "Cicada",
    cuisine: "Hunanese",
    price: "¥¥¥¥",
    path: "/china/guangzhou/guangzhou/cicada",
    image: '/images/cicada1.png'
  },
  {
    name: "Da Ge Fan (Tangxiayong West Road)",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/da-ge-fan-tangxiayong-west-road",
    image: '/images/da-ge-fan-tangxiayong-west-road1.png'
  },
  {
    name: "Dai Yong Town",
    cuisine: "Chao Zhou",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/dai-yong-town",
    image: '/images/dai-yong-town1.png'
  },
  {
    name: "Dayang (Wenming Road)",
    cuisine: "Cantonese",
    price: "¥",
    path: "/china/guangzhou/guangzhou/dayang-wenming-road",
    image: '/images/dayang-wenming-road1.png'
  },
  {
    name: "Deli Boutique・Uncle De Abalone",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/guangzhou/guangzhou/deli-boutiqueuncle-de-abalone",
    image: '/images/deli-boutiqueuncle-de-abalone1.png'
  },
  {
    name: "Delightful House",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/delightful-house",
    image: '/images/delightful-house1.png'
  },
  {
    name: "Dr. Xu's Wellbeing Branch (Tianhe)",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/dr-xus-wellbeing-branch-tianhe",
    image: '/images/dr-xus-wellbeing-branch-tianhe1.png'
  },
  {
    name: "Ease (Yuexiu)",
    cuisine: "Sichuan",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/ease-yuexiu",
    image: '/images/ease-yuexiu1.png'
  },
  {
    name: "Ebony",
    cuisine: "European",
    price: "¥¥¥",
    path: "/china/guangzhou/guangzhou/ebony",
    image: '/images/ebony1.png'
  },
  {
    name: "Emmelyn",
    cuisine: "French Contemporary",
    price: "¥¥¥",
    path: "/china/guangzhou/guangzhou/emmelyn",
    image: '/images/emmelyn1.png'
  },
  {
    name: "Enning Liu Fu Ji (Donghua East Road)",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/guangzhou/guangzhou/enning-liu-fu-ji-donghua-east-road",
    image: '/images/enning-liu-fu-ji-donghua-east-road1.png'
  },
  {
    name: "Ersha No.1",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/ersha-no1",
    image: '/images/ersha-no11.png'
  },
  {
    name: "Fa Sing Garden (Jinsui Road)",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/fa-sing-garden-jinsui-road",
    image: '/images/fa-sing-garden-jinsui-road1.png'
  },
  {
    name: "Fa Sing Garden (Jinsui Road)",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/fa-sing-garden-jinsui-road",
    image: '/images/fa-sing-garden-jinsui-road1.png'
  },
  {
    name: "Famous Cuisine (Tianhe North Road)",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/famous-cuisine-tianhe-north-road",
    image: '/images/famous-cuisine-tianhe-north-road1.png'
  },
  {
    name: "Flavors of China",
    cuisine: "Huaiyang, Sichuan",
    price: "¥¥¥",
    path: "/china/guangzhou/guangzhou/flavors-of-china",
    image: '/images/flavors-of-china1.png'
  },
  {
    name: "Four Seasons Pavilion · Rùn",
    cuisine: "Chinese Contemporary",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/four-seasons-pavilion-rn",
    image: '/images/four-seasons-pavilion-rn1.png'
  },
  {
    name: "FT · Bak Kut Teh (Yuexiu)",
    cuisine: "South East Asian",
    price: "¥",
    path: "/china/guangzhou/guangzhou/ft-bak-kut-teh-yuexiu",
    image: '/images/ft-bak-kut-teh-yuexiu1.png'
  },
  {
    name: "Gu Yuan",
    cuisine: "Vegetarian",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/gu-yuan",
    image: '/images/gu-yuan1.png'
  },
  {
    name: "Guo Fan Jia Yan",
    cuisine: "Hunanese",
    price: "¥¥¥",
    path: "/china/guangzhou/guangzhou/guo-fan-jia-yan",
    image: '/images/guo-fan-jia-yan1.png'
  },
  {
    name: "Hai Men Yu Zi Dian (Yanling Road)",
    cuisine: "Chao Zhou",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/hai-men-yu-zi-dian-yanling-road",
    image: '/images/hai-men-yu-zi-dian-yanling-road1.png'
  },
  {
    name: "Hai Xian Jie Cai Guan",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/hai-xian-jie-cai-guan",
    image: '/images/hai-xian-jie-cai-guan1.png'
  },
  {
    name: "He Yuan (Tianhe)",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/he-yuan-tianhe",
    image: '/images/he-yuan-tianhe1.png'
  },
  {
    name: "Hongtu Hall",
    cuisine: "Dim Sum",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/hongtu-hall",
    image: '/images/hongtu-hall1.png'
  },
  {
    name: "Hua Ge Si Chu",
    cuisine: "Cantonese",
    price: "¥",
    path: "/china/guangzhou/guangzhou/hua-ge-si-chu",
    image: '/images/hua-ge-si-chu1.png'
  },
  {
    name: "Hui Cheng (Dunhe Road)",
    cuisine: "Chao Zhou",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/hui-cheng-dunhe-road",
    image: '/images/hui-cheng-dunhe-road1.png'
  },
  {
    name: "Hui Xing Yuan",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/hui-xing-yuan",
    image: '/images/hui-xing-yuan1.png'
  },
  {
    name: "Hunan Cuisine",
    cuisine: "Hunanese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/hunan-cuisine",
    image: '/images/hunan-cuisine1.png'
  },
  {
    name: "Imperial Treasure Fine Chinese Cuisine",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/guangzhou/guangzhou/imperial-treasure-fine-chinese-cuisine",
    image: '/images/imperial-treasure-fine-chinese-cuisine1.png'
  },
  {
    name: "Imperial Treasure Fine Teochew Cuisine",
    cuisine: "Chao Zhou",
    price: "¥¥¥",
    path: "/china/guangzhou/guangzhou/imperial-treasure-fine-teochew-cuisine",
    image: '/images/imperial-treasure-fine-teochew-cuisine1.png'
  },
  {
    name: "Jade River",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/guangzhou/guangzhou/jade-river",
    image: '/images/jade-river1.png'
  },
  {
    name: "Jia Yuan",
    cuisine: "Vegetarian",
    price: "¥",
    path: "/china/guangzhou/guangzhou/jia-yuan",
    image: '/images/jia-yuan1.png'
  },
  {
    name: "Jian Ji (Liwan)",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/guangzhou/guangzhou/jian-ji-liwan",
    image: '/images/jian-ji-liwan1.png'
  },
  {
    name: "Jiang by Chef Fei",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/guangzhou/guangzhou/jiang-by-chef-fei",
    image: '/images/jiang-by-chef-fei1.png'
  },
  {
    name: "Lai Heen",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/guangzhou/guangzhou/lai-heen",
    image: '/images/lai-heen1.png'
  },
  {
    name: "Lai Heen",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/guangzhou/guangzhou/lai-heen",
    image: '/images/lai-heen1.png'
  },
  {
    name: "Lao Xiguan Laifen (Wenming Road)",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/guangzhou/guangzhou/lao-xiguan-laifen-wenming-road",
    image: '/images/lao-xiguan-laifen-wenming-road1.png'
  },
  {
    name: "Lei Garden (Yuexiu)",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/lei-garden-yuexiu",
    image: '/images/lei-garden-yuexiu1.png'
  },
  {
    name: "Leowe",
    cuisine: "Innovative",
    price: "¥¥¥¥",
    path: "/china/guangzhou/guangzhou/leowe",
    image: '/images/leowe1.png'
  },
  {
    name: "Li Château",
    cuisine: "European",
    price: "¥¥¥",
    path: "/china/guangzhou/guangzhou/li-chteau",
    image: '/images/li-chteau1.png'
  },
  {
    name: "Liang Jia Cai Guan",
    cuisine: "Cantonese",
    price: "¥",
    path: "/china/guangzhou/guangzhou/liang-jia-cai-guan",
    image: '/images/liang-jia-cai-guan1.png'
  },
  {
    name: "Liang Jie Nanning Pumiao Shengzha Mifen (Yinghua Street)",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/guangzhou/guangzhou/liang-jie-nanning-pumiao-shengzha-mifen-yinghua-street",
    image: '/images/liang-jie-nanning-pumiao-shengzha-mifen-yinghua-street1.png'
  },
  {
    name: "Lingnan Haiyanlou (Binjiang East Road)",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/lingnan-haiyanlou-binjiang-east-road",
    image: '/images/lingnan-haiyanlou-binjiang-east-road1.png'
  },
  {
    name: "Lingnan House",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/guangzhou/guangzhou/lingnan-house",
    image: '/images/lingnan-house1.png'
  },
  {
    name: "Mamak",
    cuisine: "Malaysian",
    price: "¥",
    path: "/china/guangzhou/guangzhou/mamak",
    image: '/images/mamak1.png'
  },
  {
    name: "Mian Ji (Yuexiu)",
    cuisine: "Cantonese",
    price: "¥",
    path: "/china/guangzhou/guangzhou/mian-ji-yuexiu",
    image: '/images/mian-ji-yuexiu1.png'
  },
  {
    name: "Nan Yuan",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/nan-yuan",
    image: '/images/nan-yuan1.png'
  },
  {
    name: "Plant-Based Kitchen",
    cuisine: "Vegetarian",
    price: "¥¥¥",
    path: "/china/guangzhou/guangzhou/plant-based-kitchen",
    image: '/images/plant-based-kitchen1.png'
  },
  {
    name: "Rong Yi Fa Niu Za Dian (Shishu Road)",
    cuisine: "Cantonese",
    price: "¥",
    path: "/china/guangzhou/guangzhou/rong-yi-fa-niu-za-dian-shishu-road",
    image: '/images/rong-yi-fa-niu-za-dian-shishu-road1.png'
  },
  {
    name: "Rong Yi Fa Niu Za Dian (Yuexiu)",
    cuisine: "Cantonese",
    price: "¥",
    path: "/china/guangzhou/guangzhou/rong-yi-fa-niu-za-dian-yuexiu",
    image: '/images/rong-yi-fa-niu-za-dian-yuexiu1.png'
  },
  {
    name: "Rêver",
    cuisine: "French Contemporary",
    price: "¥¥¥¥",
    path: "/china/guangzhou/guangzhou/rver",
    image: '/images/rver1.png'
  },
  {
    name: "Sa Er Ta Dongxiang Shou Zhua",
    cuisine: "Xibei",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/sa-er-ta-dongxiang-shou-zhua",
    image: '/images/sa-er-ta-dongxiang-shou-zhua1.png'
  },
  {
    name: "Sing Wan Loi Noodle (Yuexiu)",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/guangzhou/guangzhou/sing-wan-loi-noodle-yuexiu",
    image: '/images/sing-wan-loi-noodle-yuexiu1.png'
  },
  {
    name: "Song",
    cuisine: "Sichuan",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/song",
    image: '/images/song1.png'
  },
  {
    name: "Song Yuan",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/song-yuan",
    image: '/images/song-yuan1.png'
  },
  {
    name: "Soodle",
    cuisine: "Vegetarian",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/soodle",
    image: '/images/soodle1.png'
  },
  {
    name: "Stay Here",
    cuisine: "Chao Zhou",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/stay-here",
    image: '/images/stay-here1.png'
  },
  {
    name: "Stiller",
    cuisine: "European",
    price: "¥¥¥",
    path: "/china/guangzhou/guangzhou/stiller",
    image: '/images/stiller1.png'
  },
  {
    name: "Summer Palace",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/guangzhou/guangzhou/summer-palace",
    image: '/images/summer-palace1.png'
  },
  {
    name: "Suyab Courtyard・Pickmoon Gourmet",
    cuisine: "Chao Zhou",
    price: "¥¥¥¥",
    path: "/china/guangzhou/guangzhou/suyab-courtyardpickmoon-gourmet",
    image: '/images/suyab-courtyardpickmoon-gourmet1.png'
  },
  {
    name: "Taian Table",
    cuisine: "Innovative",
    price: "¥¥¥¥",
    path: "/china/guangzhou/guangzhou/taian-table",
    image: '/images/taian-table1.png'
  },
  {
    name: "Tang Shi Meishi",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/tang-shi-meishi",
    image: '/images/tang-shi-meishi1.png'
  },
  {
    name: "Tao Gie Mie Zhou",
    cuisine: "Chao Zhou",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/tao-gie-mie-zhou",
    image: '/images/tao-gie-mie-zhou1.png'
  },
  {
    name: "Tao Ran Xuan (Liwan)",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/tao-ran-xuan-liwan",
    image: '/images/tao-ran-xuan-liwan1.png'
  },
  {
    name: "Tao Tao Ju · Ya Yuan",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/tao-tao-ju-ya-yuan",
    image: '/images/tao-tao-ju-ya-yuan1.png'
  },
  {
    name: "Taozui Guan",
    cuisine: "Chinese Contemporary",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/taozui-guan",
    image: '/images/taozui-guan1.png'
  },
  {
    name: "Taste Soar × Da Tou Hui",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/taste-soar-da-tou-hui",
    image: '/images/taste-soar-da-tou-hui1.png'
  },
  {
    name: "Temple Street",
    cuisine: "Cantonese",
    price: "¥",
    path: "/china/guangzhou/guangzhou/temple-street",
    image: '/images/temple-street1.png'
  },
  {
    name: "Thai Alley (Yuexiu)",
    cuisine: "Thai",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/thai-alley-yuexiu",
    image: '/images/thai-alley-yuexiu1.png'
  },
  {
    name: "The Attic",
    cuisine: "European Contemporary",
    price: "¥¥¥¥",
    path: "/china/guangzhou/guangzhou/the-attic",
    image: '/images/the-attic1.png'
  },
  {
    name: "The Eminent",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/guangzhou/guangzhou/the-eminent",
    image: '/images/the-eminent1.png'
  },
  {
    name: "The Legend",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/guangzhou/guangzhou/the-legend",
    image: '/images/the-legend1.png'
  },
  {
    name: "The Peach Blossom (Yuexiu)",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/the-peach-blossom-yuexiu",
    image: '/images/the-peach-blossom-yuexiu1.png'
  },
  {
    name: "The Penthouse",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/guangzhou/guangzhou/the-penthouse",
    image: '/images/the-penthouse1.png'
  },
  {
    name: "Tian Shui",
    cuisine: "Vegetarian",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/tian-shui",
    image: '/images/tian-shui1.png'
  },
  {
    name: "Tong Ji",
    cuisine: "Noodles and Congee",
    price: "¥",
    path: "/china/guangzhou/guangzhou/tong-ji",
    image: '/images/tong-ji1.png'
  },
  {
    name: "Tongtown",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/tongtown",
    image: '/images/tongtown1.png'
  },
  {
    name: "Tung Fook Superior Cuisine",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/guangzhou/guangzhou/tung-fook-superior-cuisine",
    image: '/images/tung-fook-superior-cuisine1.png'
  },
  {
    name: "Wei Shi Jia",
    cuisine: "Cantonese",
    price: "¥",
    path: "/china/guangzhou/guangzhou/wei-shi-jia",
    image: '/images/wei-shi-jia1.png'
  },
  {
    name: "Wen Ji Yixinji",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/wen-ji-yixinji",
    image: '/images/wen-ji-yixinji1.png'
  },
  {
    name: "Wenjian Hainan Cuisine",
    cuisine: "Hainanese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/wenjian-hainan-cuisine",
    image: '/images/wenjian-hainan-cuisine1.png'
  },
  {
    name: "Wing Lee Restaurant (Yuexiu)",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/wing-lee-restaurant-yuexiu",
    image: '/images/wing-lee-restaurant-yuexiu1.png'
  },
  {
    name: "Wisca (Haizhu)",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/wisca-haizhu",
    image: '/images/wisca-haizhu1.png'
  },
  {
    name: "Xiang Qun (Longjin East Road)",
    cuisine: "Cantonese",
    price: "¥",
    path: "/china/guangzhou/guangzhou/xiang-qun-longjin-east-road",
    image: '/images/xiang-qun-longjin-east-road1.png'
  },
  {
    name: "Xiguan Zhuyuan (Lizhiwan)",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/guangzhou/guangzhou/xiguan-zhuyuan-lizhiwan",
    image: '/images/xiguan-zhuyuan-lizhiwan1.png'
  },
  {
    name: "Xiguan Zhuyuan (Shiba Fu)",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/guangzhou/guangzhou/xiguan-zhuyuan-shiba-fu",
    image: '/images/xiguan-zhuyuan-shiba-fu1.png'
  },
  {
    name: "Xin Cuo",
    cuisine: "Chao Zhou",
    price: "¥¥¥",
    path: "/china/guangzhou/guangzhou/xin-cuo",
    image: '/images/xin-cuo1.png'
  },
  {
    name: "Xin Ji",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/xin-ji",
    image: '/images/xin-ji1.png'
  },
  {
    name: "Xin Tai Le (Yuexiu)",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/xin-tai-le-yuexiu",
    image: '/images/xin-tai-le-yuexiu1.png'
  },
  {
    name: "Xin Wen Ji (Panfu Road)",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/xin-wen-ji-panfu-road",
    image: '/images/xin-wen-ji-panfu-road1.png'
  },
  {
    name: "Xing Fu Yi Zhan (Yulei Third Street)",
    cuisine: "Sichuan",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/xing-fu-yi-zhan-yulei-third-street",
    image: '/images/xing-fu-yi-zhan-yulei-third-street1.png'
  },
  {
    name: "Ya Yuan",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/ya-yuan",
    image: '/images/ya-yuan1.png'
  },
  {
    name: "Yao Ji",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/yao-ji",
    image: '/images/yao-ji1.png'
  },
  {
    name: "Yong",
    cuisine: "Sichuan",
    price: "¥¥¥¥",
    path: "/china/guangzhou/guangzhou/yong",
    image: '/images/yong1.png'
  },
  {
    name: "Yong Zuo",
    cuisine: "Congee",
    price: "¥",
    path: "/china/guangzhou/guangzhou/yong-zuo",
    image: '/images/yong-zuo1.png'
  },
  {
    name: "Yu Garden",
    cuisine: "Fujian",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/yu-garden",
    image: '/images/yu-garden1.png'
  },
  {
    name: "Yu Yue Heen",
    cuisine: "Cantonese",
    price: "¥¥¥¥",
    path: "/china/guangzhou/guangzhou/yu-yue-heen",
    image: '/images/yu-yue-heen1.png'
  },
  {
    name: "Yue Jing Xuan",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/guangzhou/guangzhou/yue-jing-xuan",
    image: '/images/yue-jing-xuan1.png'
  },
  {
    name: "Yun Pavilion",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/guangzhou/guangzhou/yun-pavilion",
    image: '/images/yun-pavilion1.png'
  },
  {
    name: "Yushan Soup (Liede Xipu Street)",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/yushan-soup-liede-xipu-street",
    image: '/images/yushan-soup-liede-xipu-street1.png'
  },
  {
    name: "Ze 8 (Haizhu)",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/ze-8-haizhu",
    image: '/images/ze-8-haizhu1.png'
  },
  {
    name: "Zen Tea",
    cuisine: "Vegetarian",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/zen-tea",
    image: '/images/zen-tea1.png'
  },
  {
    name: "Zhou Men",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/guangzhou/guangzhou/zhou-men",
    image: '/images/zhou-men1.png'
  },
  {
    name: "Zhu Zai Ji Shi Fu (Jiangnan Avenue)",
    cuisine: "Cantonese",
    price: "¥",
    path: "/china/guangzhou/guangzhou/zhu-zai-ji-shi-fu-jiangnan-avenue",
    image: '/images/zhu-zai-ji-shi-fu-jiangnan-avenue1.png'
  },
  {
    name: "Zijin Shi Fang",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/guangzhou/guangzhou/zijin-shi-fang",
    image: '/images/zijin-shi-fang1.png'
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
