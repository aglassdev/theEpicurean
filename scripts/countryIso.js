/**
 * countryIso.js
 * -------------
 * Directory slug → ISO 3166-1 alpha-2, for the geocoders.
 *
 * Both Nominatim and Photon will answer a thin query with a confident result on
 * the wrong continent, and the only thing that reliably stops them is naming the
 * country. The map used to live inside geocodePages.js and covered forty-five
 * countries, so the other eighty-seven asked the world and took what they got:
 * that is how a restaurant in Antananarivo ended up marked approximate.
 *
 * Territories point at their own code where the geocoders know one, and at the
 * parent otherwise.
 */
export const ISO = {
  albania: 'al', andorra: 'ad', angola: 'ao', anguilla: 'ai', argentina: 'ar',
  armenia: 'am', aruba: 'aw', australia: 'au', austria: 'at', bahamas: 'bs',
  bahrain: 'bh', bangladesh: 'bd', barbados: 'bb', belarus: 'by', belgium: 'be',
  bermuda: 'bm', bolivia: 'bo', 'bosnia-and-herzegovina': 'ba', brazil: 'br',
  bulgaria: 'bg', cambodia: 'kh', canada: 'ca', 'caribbean-netherlands': 'bq',
  'cayman-islands': 'ky', chile: 'cl', china: 'cn', 'chinese-mainland': 'cn',
  colombia: 'co', 'costa-rica': 'cr', croatia: 'hr', cuba: 'cu', cyprus: 'cy',
  czechia: 'cz', denmark: 'dk', 'dominican-republic': 'do', ecuador: 'ec',
  egypt: 'eg', 'el-salvador': 'sv', estonia: 'ee', fiji: 'fj', finland: 'fi',
  france: 'fr', georgia: 'ge', germany: 'de', ghana: 'gh', greece: 'gr',
  guatemala: 'gt', honduras: 'hn', 'hong-kong': 'hk', hungary: 'hu',
  iceland: 'is', india: 'in', indonesia: 'id', iran: 'ir', ireland: 'ie',
  israel: 'il', italy: 'it', jamaica: 'jm', japan: 'jp', jordan: 'jo',
  kazakhstan: 'kz', kenya: 'ke', kosovo: 'xk', kuwait: 'kw', kyrgyzstan: 'kg',
  laos: 'la', latvia: 'lv', lebanon: 'lb', liechtenstein: 'li', lithuania: 'lt',
  luxembourg: 'lu', macau: 'mo', madagascar: 'mg', malaysia: 'my',
  maldives: 'mv', malta: 'mt', mauritius: 'mu', mexico: 'mx', moldova: 'md',
  monaco: 'mc', montenegro: 'me', morocco: 'ma', myanmar: 'mm', namibia: 'na',
  nepal: 'np', netherlands: 'nl', 'new-zealand': 'nz', nicaragua: 'ni',
  nigeria: 'ng', 'northern-ireland': 'gb', norway: 'no', oman: 'om',
  panama: 'pa', paraguay: 'py', peru: 'pe', philippines: 'ph',
  'the-philippines': 'ph', poland: 'pl', portugal: 'pt', 'puerto-rico': 'pr',
  qatar: 'qa', reunion: 're', romania: 'ro', russia: 'ru', rwanda: 'rw',
  'saint-barthelemy': 'bl', 'saint-kitts-and-nevis': 'kn', 'saint-lucia': 'lc',
  samoa: 'ws', 'saudi-arabia': 'sa', serbia: 'rs', seychelles: 'sc',
  singapore: 'sg', slovakia: 'sk', slovenia: 'si', 'south-africa': 'za',
  'south-korea': 'kr', spain: 'es', 'sri-lanka': 'lk', 'st-martin': 'mf',
  sweden: 'se', switzerland: 'ch', taiwan: 'tw', thailand: 'th', trkiye: 'tr',
  tunisia: 'tn', turkey: 'tr', 'turks-and-caicos': 'tc', uae: 'ae', uk: 'gb',
  ukraine: 'ua', uruguay: 'uy', usa: 'us', venezuela: 've', vietnam: 'vn',
};

export const isoFor = (countrySlug) => ISO[countrySlug] || null;
