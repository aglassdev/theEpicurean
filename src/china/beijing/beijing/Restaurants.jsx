import React from 'react';
import { useNavigate } from 'react-router-dom';

const pageTitle = "Beijing";

const restaurants = [
  {
    name: "1949 - Duck de Chine",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/beijing/beijing/1949-duck-de-chine",
    image: '/images/1949-duck-de-chine1.png'
  },
  {
    name: "Amico BJ",
    cuisine: "European Contemporary",
    price: "¥¥¥",
    path: "/china/beijing/beijing/amico-bj",
    image: '/images/amico-bj1.png'
  },
  {
    name: "Bad Ass Lamb Hot Pot (Maizidian West Street)",
    cuisine: "Hotpot",
    price: "¥¥",
    path: "/china/beijing/beijing/bad-ass-lamb-hot-pot-maizidian-west-street",
    image: '/images/bad-ass-lamb-hot-pot-maizidian-west-street1.png'
  },
  {
    name: "Baiweiyuan Dumpling",
    cuisine: "Dumplings",
    price: "¥",
    path: "/china/beijing/beijing/baiweiyuan-dumpling",
    image: '/images/baiweiyuan-dumpling1.png'
  },
  {
    name: "Baiweiyuan Dumpling (Tuanjiehu Road)",
    cuisine: "Dumplings",
    price: "¥",
    path: "/china/beijing/beijing/baiweiyuan-dumpling-tuanjiehu-road",
    image: '/images/baiweiyuan-dumpling-tuanjiehu-road1.png'
  },
  {
    name: "Bao Bao Hao",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/beijing/beijing/bao-bao-hao",
    image: '/images/bao-bao-hao1.png'
  },
  {
    name: "Bao Du Jin Sheng Long (Dongcheng)",
    cuisine: "Hotpot",
    price: "¥¥",
    path: "/china/beijing/beijing/bao-du-jin-sheng-long-dongcheng",
    image: '/images/bao-du-jin-sheng-long-dongcheng1.png'
  },
  {
    name: "Bao Yuan",
    cuisine: "Dumplings",
    price: "¥",
    path: "/china/beijing/beijing/bao-yuan",
    image: '/images/bao-yuan1.png'
  },
  {
    name: "Beef & Dumplings (Chaoyang)",
    cuisine: "Dumplings",
    price: "¥",
    path: "/china/beijing/beijing/beef-dumplings-chaoyang",
    image: '/images/beef-dumplings-chaoyang1.png'
  },
  {
    name: "Bistro Strong (Chaoyanggongyuan Road)",
    cuisine: "Meats and Grills",
    price: "¥¥",
    path: "/china/beijing/beijing/bistro-strong-chaoyanggongyuan-road",
    image: '/images/bistro-strong-chaoyanggongyuan-road1.png'
  },
  {
    name: "Blackswan",
    cuisine: "French Contemporary",
    price: "¥¥¥¥",
    path: "/china/beijing/beijing/blackswan",
    image: '/images/blackswan1.png'
  },
  {
    name: "Brasserie 1893",
    cuisine: "French Contemporary",
    price: "¥¥¥",
    path: "/china/beijing/beijing/brasserie-1893",
    image: '/images/brasserie-18931.png'
  },
  {
    name: "Café Zi",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/beijing/beijing/caf-zi",
    image: '/images/caf-zi1.png'
  },
  {
    name: "Cai Yi Xuan",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/beijing/beijing/cai-yi-xuan",
    image: '/images/cai-yi-xuan1.png'
  },
  {
    name: "Chao Shang Chao (Chaoyang)",
    cuisine: "Chao Zhou",
    price: "¥¥¥¥",
    path: "/china/beijing/beijing/chao-shang-chao-chaoyang",
    image: '/images/chao-shang-chao-chaoyang1.png'
  },
  {
    name: "Chao Shang Chao (Xicheng)",
    cuisine: "Chao Zhou",
    price: "¥¥¥¥",
    path: "/china/beijing/beijing/chao-shang-chao-xicheng",
    image: '/images/chao-shang-chao-xicheng1.png'
  },
  {
    name: "Char (South Sanlitun Road)",
    cuisine: "Steakhouse",
    price: "¥¥¥",
    path: "/china/beijing/beijing/char-south-sanlitun-road",
    image: '/images/char-south-sanlitun-road1.png'
  },
  {
    name: "Chef 1996",
    cuisine: "Sichuan",
    price: "¥¥¥",
    path: "/china/beijing/beijing/chef-1996",
    image: '/images/chef-19961.png'
  },
  {
    name: "Chu Shan Si Ji",
    cuisine: "Hubei",
    price: "¥¥¥",
    path: "/china/beijing/beijing/chu-shan-si-ji",
    image: '/images/chu-shan-si-ji1.png'
  },
  {
    name: "Country Kitchen",
    cuisine: "Beijing Cuisine",
    price: "¥¥¥",
    path: "/china/beijing/beijing/country-kitchen",
    image: '/images/country-kitchen1.png'
  },
  {
    name: "Everlasting Happiness",
    cuisine: "Hunanese",
    price: "¥¥¥",
    path: "/china/beijing/beijing/everlasting-happiness",
    image: '/images/everlasting-happiness1.png'
  },
  {
    name: "Exquisite Bocuse",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/beijing/beijing/exquisite-bocuse",
    image: '/images/exquisite-bocuse1.png'
  },
  {
    name: "Fortune Long Beijing Bean Sauce Noodles (East Xinglong Street)",
    cuisine: "Beijing Cuisine",
    price: "¥",
    path: "/china/beijing/beijing/fortune-long-beijing-bean-sauce-noodles-east-xinglong-street",
    image: '/images/fortune-long-beijing-bean-sauce-noodles-east-xinglong-street1.png'
  },
  {
    name: "Forum",
    cuisine: "Cantonese",
    price: "¥¥¥¥",
    path: "/china/beijing/beijing/forum",
    image: '/images/forum1.png'
  },
  {
    name: "Fu Chun Ju",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/beijing/beijing/fu-chun-ju",
    image: '/images/fu-chun-ju1.png'
  },
  {
    name: "Fu Man Yuan (Xinyuanli)",
    cuisine: "Beijing Cuisine",
    price: "¥¥",
    path: "/china/beijing/beijing/fu-man-yuan-xinyuanli",
    image: '/images/fu-man-yuan-xinyuanli1.png'
  },
  {
    name: "Fujian Cuisine (Dongsanhuan North Road)",
    cuisine: "Fujian",
    price: "¥¥",
    path: "/china/beijing/beijing/fujian-cuisine-dongsanhuan-north-road",
    image: '/images/fujian-cuisine-dongsanhuan-north-road1.png'
  },
  {
    name: "Fujian Restaurant",
    cuisine: "Fujian",
    price: "¥¥¥",
    path: "/china/beijing/beijing/fujian-restaurant",
    image: '/images/fujian-restaurant1.png'
  },
  {
    name: "Furong",
    cuisine: "Hunanese",
    price: "¥¥¥",
    path: "/china/beijing/beijing/furong",
    image: '/images/furong1.png'
  },
  {
    name: "Gastro Esthetics DaDong",
    cuisine: "Chinese Contemporary",
    price: "¥¥¥",
    path: "/china/beijing/beijing/gastro-esthetics-dadong",
    image: '/images/gastro-esthetics-dadong1.png'
  },
  {
    name: "Giada Garden",
    cuisine: "Italian",
    price: "¥¥¥¥",
    path: "/china/beijing/beijing/giada-garden",
    image: '/images/giada-garden1.png'
  },
  {
    name: "Gong De Lin",
    cuisine: "Vegetarian",
    price: "¥¥",
    path: "/china/beijing/beijing/gong-de-lin",
    image: '/images/gong-de-lin1.png'
  },
  {
    name: "Gongyuan Shulou",
    cuisine: "Sichuan",
    price: "¥¥",
    path: "/china/beijing/beijing/gongyuan-shulou",
    image: '/images/gongyuan-shulou1.png'
  },
  {
    name: "Hong 0871",
    cuisine: "Yunnanese",
    price: "¥¥",
    path: "/china/beijing/beijing/hong-0871",
    image: '/images/hong-08711.png'
  },
  {
    name: "Hong Fan Qie (Yuyuantan South Road)",
    cuisine: "Hubei",
    price: "¥¥",
    path: "/china/beijing/beijing/hong-fan-qie-yuyuantan-south-road",
    image: '/images/hong-fan-qie-yuyuantan-south-road1.png'
  },
  {
    name: "Horizon",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/beijing/beijing/horizon",
    image: '/images/horizon1.png'
  },
  {
    name: "Héritage East",
    cuisine: "Chinese Contemporary",
    price: "¥¥¥",
    path: "/china/beijing/beijing/hritage-east",
    image: '/images/hritage-east1.png'
  },
  {
    name: "Hua Sheng Feng (Dongsanhuan South Road)",
    cuisine: "Zhejiang",
    price: "¥¥",
    path: "/china/beijing/beijing/hua-sheng-feng-dongsanhuan-south-road",
    image: '/images/hua-sheng-feng-dongsanhuan-south-road1.png'
  },
  {
    name: "Huai Xiang Guo Se",
    cuisine: "Huaiyang",
    price: "¥¥¥",
    path: "/china/beijing/beijing/huai-xiang-guo-se",
    image: '/images/huai-xiang-guo-se1.png'
  },
  {
    name: "Huaiyang Fu (Dongcheng)",
    cuisine: "Huaiyang",
    price: "¥¥",
    path: "/china/beijing/beijing/huaiyang-fu-dongcheng",
    image: '/images/huaiyang-fu-dongcheng1.png'
  },
  {
    name: "Il Ristorante - Niko Romito",
    cuisine: "Italian",
    price: "¥¥¥¥",
    path: "/china/beijing/beijing/il-ristorante-niko-romito",
    image: '/images/il-ristorante-niko-romito1.png'
  },
  {
    name: "In Love (Gongti East Road)",
    cuisine: "Hunanese",
    price: "¥¥¥",
    path: "/china/beijing/beijing/in-love-gongti-east-road",
    image: '/images/in-love-gongti-east-road1.png'
  },
  {
    name: "Ji Chuan",
    cuisine: "Sichuan",
    price: "¥¥",
    path: "/china/beijing/beijing/ji-chuan",
    image: '/images/ji-chuan1.png'
  },
  {
    name: "Jia (Chaoyang)",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/beijing/beijing/jia-chaoyang",
    image: '/images/jia-chaoyang1.png'
  },
  {
    name: "Jing",
    cuisine: "French Contemporary",
    price: "¥¥¥¥",
    path: "/china/beijing/beijing/jing",
    image: '/images/jing1.png'
  },
  {
    name: "Jing Hua Lou",
    cuisine: "Beijing Cuisine",
    price: "¥¥",
    path: "/china/beijing/beijing/jing-hua-lou",
    image: '/images/jing-hua-lou1.png'
  },
  {
    name: "Jingji",
    cuisine: "Beijing Cuisine",
    price: "¥¥¥¥",
    path: "/china/beijing/beijing/jingji",
    image: '/images/jingji1.png'
  },
  {
    name: "Jingyi (Liulichang East Street)",
    cuisine: "Hubei",
    price: "¥",
    path: "/china/beijing/beijing/jingyi-liulichang-east-street",
    image: '/images/jingyi-liulichang-east-street1.png'
  },
  {
    name: "King's Joy",
    cuisine: "Vegetarian",
    price: "¥¥¥¥",
    path: "/china/beijing/beijing/kings-joy",
    image: '/images/kings-joy1.png'
  },
  {
    name: "L. Bodhi (Guanghua Road)",
    cuisine: "Vegetarian",
    price: "¥¥¥¥",
    path: "/china/beijing/beijing/l-bodhi-guanghua-road",
    image: '/images/l-bodhi-guanghua-road1.png'
  },
  {
    name: "La Chansonnière",
    cuisine: "French Contemporary",
    price: "¥¥¥¥",
    path: "/china/beijing/beijing/la-chansonnire",
    image: '/images/la-chansonnire1.png'
  },
  {
    name: "La Roba",
    cuisine: "Yunnanese",
    price: "¥¥",
    path: "/china/beijing/beijing/la-roba",
    image: '/images/la-roba1.png'
  },
  {
    name: "Ladychai",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/beijing/beijing/ladychai",
    image: '/images/ladychai1.png'
  },
  {
    name: "Lamdre",
    cuisine: "Vegetarian",
    price: "¥¥¥¥",
    path: "/china/beijing/beijing/lamdre",
    image: '/images/lamdre1.png'
  },
  {
    name: "Lao Chuan Ban",
    cuisine: "Sichuan",
    price: "¥¥",
    path: "/china/beijing/beijing/lao-chuan-ban",
    image: '/images/lao-chuan-ban1.png'
  },
  {
    name: "Lei Garden (Jinbao Tower)",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/beijing/beijing/lei-garden-jinbao-tower",
    image: '/images/lei-garden-jinbao-tower1.png'
  },
  {
    name: "Les Morilles",
    cuisine: "French Contemporary",
    price: "¥¥¥",
    path: "/china/beijing/beijing/les-morilles",
    image: '/images/les-morilles1.png'
  },
  {
    name: "Ling Long",
    cuisine: "Innovative",
    price: "¥¥¥",
    path: "/china/beijing/beijing/ling-long",
    image: '/images/ling-long1.png'
  },
  {
    name: "Liu Ma Ma Dumplings (Chaoyang)",
    cuisine: "Dumplings",
    price: "¥",
    path: "/china/beijing/beijing/liu-ma-ma-dumplings-chaoyang",
    image: '/images/liu-ma-ma-dumplings-chaoyang1.png'
  },
  {
    name: "Lu Shang Lu",
    cuisine: "Shandong",
    price: "¥¥¥¥",
    path: "/china/beijing/beijing/lu-shang-lu",
    image: '/images/lu-shang-lu1.png'
  },
  {
    name: "Lu Style (Anding Road)",
    cuisine: "Shandong",
    price: "¥¥¥",
    path: "/china/beijing/beijing/lu-style-anding-road",
    image: '/images/lu-style-anding-road1.png'
  },
  {
    name: "Maison Flo",
    cuisine: "French",
    price: "¥¥¥",
    path: "/china/beijing/beijing/maison-flo",
    image: '/images/maison-flo1.png'
  },
  {
    name: "Mandarin Grill",
    cuisine: "Meats and Grills",
    price: "¥¥¥¥",
    path: "/china/beijing/beijing/mandarin-grill",
    image: '/images/mandarin-grill1.png'
  },
  {
    name: "Mansion Cuisine by Jingyan",
    cuisine: "Beijing Cuisine",
    price: "¥¥¥¥",
    path: "/china/beijing/beijing/mansion-cuisine-by-jingyan",
    image: '/images/mansion-cuisine-by-jingyan1.png'
  },
  {
    name: "Mansion Xún",
    cuisine: "Jiangzhe",
    price: "¥¥¥¥",
    path: "/china/beijing/beijing/mansion-xn",
    image: '/images/mansion-xn1.png'
  },
  {
    name: "Meng Du Hui",
    cuisine: "Hui Cuisine",
    price: "¥¥",
    path: "/china/beijing/beijing/meng-du-hui",
    image: '/images/meng-du-hui1.png'
  },
  {
    name: "Mingyuan Restaurant",
    cuisine: "Beijing Cuisine",
    price: "¥¥",
    path: "/china/beijing/beijing/mingyuan-restaurant",
    image: '/images/mingyuan-restaurant1.png'
  },
  {
    name: "Mio",
    cuisine: "Italian",
    price: "¥¥¥¥",
    path: "/china/beijing/beijing/mio",
    image: '/images/mio1.png'
  },
  {
    name: "MO Jasmine",
    cuisine: "Beijing Cuisine",
    price: "¥¥¥",
    path: "/china/beijing/beijing/mo-jasmine",
    image: '/images/mo-jasmine1.png'
  },
  {
    name: "My Soup",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/beijing/beijing/my-soup",
    image: '/images/my-soup1.png'
  },
  {
    name: "Nishiki",
    cuisine: "Japanese",
    price: "¥¥¥¥",
    path: "/china/beijing/beijing/nishiki",
    image: '/images/nishiki1.png'
  },
  {
    name: "Niujie Halal Man Heng Ji",
    cuisine: "Hotpot",
    price: "¥¥",
    path: "/china/beijing/beijing/niujie-halal-man-heng-ji",
    image: '/images/niujie-halal-man-heng-ji1.png'
  },
  {
    name: "No. 69 Fangzhuanchang Zhajiangmian (Fangzhuanchang Hutong)",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/beijing/beijing/no-69-fangzhuanchang-zhajiangmian-fangzhuanchang-hutong",
    image: '/images/no-69-fangzhuanchang-zhajiangmian-fangzhuanchang-hutong1.png'
  },
  {
    name: "Pang Mei Noodles (Xiang'er Hutong)",
    cuisine: "Noodles",
    price: "¥",
    path: "/china/beijing/beijing/pang-mei-noodles-xianger-hutong",
    image: '/images/pang-mei-noodles-xianger-hutong1.png'
  },
  {
    name: "Poetry‧Wine (Dongsanhuan Middle Road)",
    cuisine: "Beijing Cuisine",
    price: "¥¥",
    path: "/china/beijing/beijing/poetrywine-dongsanhuan-middle-road",
    image: '/images/poetrywine-dongsanhuan-middle-road1.png'
  },
  {
    name: "Qian Li",
    cuisine: "Taizhou",
    price: "¥¥",
    path: "/china/beijing/beijing/qian-li",
    image: '/images/qian-li1.png'
  },
  {
    name: "Qian Li",
    cuisine: "Taizhou",
    price: "¥¥",
    path: "/china/beijing/beijing/qian-li",
    image: '/images/qian-li1.png'
  },
  {
    name: "Qiantang Garden",
    cuisine: "Ningbo",
    price: "¥¥",
    path: "/china/beijing/beijing/qiantang-garden",
    image: '/images/qiantang-garden1.png'
  },
  {
    name: "Qiantang Garden (Shuangyushu North Road)",
    cuisine: "Ningbo",
    price: "¥¥",
    path: "/china/beijing/beijing/qiantang-garden-shuangyushu-north-road",
    image: '/images/qiantang-garden-shuangyushu-north-road1.png'
  },
  {
    name: "Qiao Dong Bei (Dongcheng)",
    cuisine: "Dongbei",
    price: "¥¥",
    path: "/china/beijing/beijing/qiao-dong-bei-dongcheng",
    image: '/images/qiao-dong-bei-dongcheng1.png'
  },
  {
    name: "Qu Lang Yuan",
    cuisine: "Innovative",
    price: "¥¥¥",
    path: "/china/beijing/beijing/qu-lang-yuan",
    image: '/images/qu-lang-yuan1.png'
  },
  {
    name: "Rive Gauche",
    cuisine: "French Contemporary",
    price: "¥¥¥",
    path: "/china/beijing/beijing/rive-gauche",
    image: '/images/rive-gauche1.png'
  },
  {
    name: "Rong Cuisine (Baiziwan South Er Road)",
    cuisine: "Taizhou",
    price: "¥¥",
    path: "/china/beijing/beijing/rong-cuisine-baiziwan-south-er-road",
    image: '/images/rong-cuisine-baiziwan-south-er-road1.png'
  },
  {
    name: "Rong Pao",
    cuisine: "Sichuan",
    price: "¥¥¥",
    path: "/china/beijing/beijing/rong-pao",
    image: '/images/rong-pao1.png'
  },
  {
    name: "San Qing Tan (Sanlitun Road)",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/beijing/beijing/san-qing-tan-sanlitun-road",
    image: '/images/san-qing-tan-sanlitun-road1.png'
  },
  {
    name: "Seventh Son",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/beijing/beijing/seventh-son",
    image: '/images/seventh-son1.png'
  },
  {
    name: "Shanghai Cuisine",
    cuisine: "Shanghainese",
    price: "¥¥¥",
    path: "/china/beijing/beijing/shanghai-cuisine",
    image: '/images/shanghai-cuisine1.png'
  },
  {
    name: "Sheng Yong Xing (Chaoyang)",
    cuisine: "Beijing Cuisine",
    price: "¥¥¥",
    path: "/china/beijing/beijing/sheng-yong-xing-chaoyang",
    image: '/images/sheng-yong-xing-chaoyang1.png'
  },
  {
    name: "Tan",
    cuisine: "Sichuan",
    price: "¥¥",
    path: "/china/beijing/beijing/tan",
    image: '/images/tan1.png'
  },
  {
    name: "The Beijing Kitchen (Jianguo Road)",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/beijing/beijing/the-beijing-kitchen-jianguo-road",
    image: '/images/the-beijing-kitchen-jianguo-road1.png'
  },
  {
    name: "The Georg",
    cuisine: "European Contemporary",
    price: "¥¥¥¥",
    path: "/china/beijing/beijing/the-georg",
    image: '/images/the-georg1.png'
  },
  {
    name: "The House of Dynasties",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/beijing/beijing/the-house-of-dynasties",
    image: '/images/the-house-of-dynasties1.png'
  },
  {
    name: "The Red Chamber",
    cuisine: "Beijing Cuisine",
    price: "¥¥",
    path: "/china/beijing/beijing/the-red-chamber",
    image: '/images/the-red-chamber1.png'
  },
  {
    name: "The Tasty House",
    cuisine: "Jiangzhe",
    price: "¥¥¥",
    path: "/china/beijing/beijing/the-tasty-house",
    image: '/images/the-tasty-house1.png'
  },
  {
    name: "Tianchumiaoxiang Vegetarian (Chaoyang)",
    cuisine: "Vegetarian",
    price: "¥",
    path: "/china/beijing/beijing/tianchumiaoxiang-vegetarian-chaoyang",
    image: '/images/tianchumiaoxiang-vegetarian-chaoyang1.png'
  },
  {
    name: "Tong Chun Yuan",
    cuisine: "Jiangzhe",
    price: "¥¥",
    path: "/china/beijing/beijing/tong-chun-yuan",
    image: '/images/tong-chun-yuan1.png'
  },
  {
    name: "Tong He Ju (Yuetan South Street)",
    cuisine: "Shandong",
    price: "¥¥",
    path: "/china/beijing/beijing/tong-he-ju-yuetan-south-street",
    image: '/images/tong-he-ju-yuetan-south-street1.png'
  },
  {
    name: "Trb Hutong",
    cuisine: "French Contemporary",
    price: "¥¥¥¥",
    path: "/china/beijing/beijing/trb-hutong",
    image: '/images/trb-hutong1.png'
  },
  {
    name: "Wolfgang's Steakhouse (Gongrentiyuchang North Road)",
    cuisine: "Steakhouse",
    price: "¥¥¥¥",
    path: "/china/beijing/beijing/wolfgangs-steakhouse-gongrentiyuchang-north-road",
    image: '/images/wolfgangs-steakhouse-gongrentiyuchang-north-road1.png'
  },
  {
    name: "Xiang Bin Xuan (Huayuan Road)",
    cuisine: "Hunanese",
    price: "¥¥",
    path: "/china/beijing/beijing/xiang-bin-xuan-huayuan-road",
    image: '/images/xiang-bin-xuan-huayuan-road1.png'
  },
  {
    name: "Xiang Lin Tian Xia",
    cuisine: "Hunanese",
    price: "¥¥",
    path: "/china/beijing/beijing/xiang-lin-tian-xia",
    image: '/images/xiang-lin-tian-xia1.png'
  },
  {
    name: "Xiang Shang Xiang (Jinhe East Road)",
    cuisine: "Hunanese",
    price: "¥¥¥",
    path: "/china/beijing/beijing/xiang-shang-xiang-jinhe-east-road",
    image: '/images/xiang-shang-xiang-jinhe-east-road1.png'
  },
  {
    name: "Xin Ming Yuen",
    cuisine: "Cantonese",
    price: "¥¥",
    path: "/china/beijing/beijing/xin-ming-yuen",
    image: '/images/xin-ming-yuen1.png'
  },
  {
    name: "Xin Rong Ji (Jianguomenwai Street)",
    cuisine: "Taizhou",
    price: "¥¥¥",
    path: "/china/beijing/beijing/xin-rong-ji-jianguomenwai-street",
    image: '/images/xin-rong-ji-jianguomenwai-street1.png'
  },
  {
    name: "Xin Rong Ji (Jinrong Street)",
    cuisine: "Taizhou",
    price: "¥¥¥",
    path: "/china/beijing/beijing/xin-rong-ji-jinrong-street",
    image: '/images/xin-rong-ji-jinrong-street1.png'
  },
  {
    name: "Xin Rong Ji (Xinyuan South Road)",
    cuisine: "Taizhou",
    price: "¥¥¥¥",
    path: "/china/beijing/beijing/xin-rong-ji-xinyuan-south-road",
    image: '/images/xin-rong-ji-xinyuan-south-road1.png'
  },
  {
    name: "Yan Garden by Chef Fei",
    cuisine: "Chao Zhou",
    price: "¥¥¥¥",
    path: "/china/beijing/beijing/yan-garden-by-chef-fei",
    image: '/images/yan-garden-by-chef-fei1.png'
  },
  {
    name: "Yibin",
    cuisine: "Sichuan",
    price: "¥",
    path: "/china/beijing/beijing/yibin",
    image: '/images/yibin1.png'
  },
  {
    name: "Yu De Fu (Dongzhimennei Street)",
    cuisine: "Hotpot",
    price: "¥¥",
    path: "/china/beijing/beijing/yu-de-fu-dongzhimennei-street",
    image: '/images/yu-de-fu-dongzhimennei-street1.png'
  },
  {
    name: "Yu Hua Tai (Xicheng)",
    cuisine: "Huaiyang",
    price: "¥¥",
    path: "/china/beijing/beijing/yu-hua-tai-xicheng",
    image: '/images/yu-hua-tai-xicheng1.png'
  },
  {
    name: "Yue Jie (Qi Yang Road)",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/beijing/beijing/yue-jie-qi-yang-road",
    image: '/images/yue-jie-qi-yang-road1.png'
  },
  {
    name: "Zhiguan Courtyard",
    cuisine: "Dongbei",
    price: "¥¥¥",
    path: "/china/beijing/beijing/zhiguan-courtyard",
    image: '/images/zhiguan-courtyard1.png'
  },
  {
    name: "Zhong",
    cuisine: "Huaiyang",
    price: "¥¥",
    path: "/china/beijing/beijing/zhong",
    image: '/images/zhong1.png'
  },
  {
    name: "Zijin Mansion",
    cuisine: "Cantonese",
    price: "¥¥¥",
    path: "/china/beijing/beijing/zijin-mansion",
    image: '/images/zijin-mansion1.png'
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
