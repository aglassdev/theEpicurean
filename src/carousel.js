/**
 * The home carousel. Kept in its own module so scripts/optimizeImages.js can read
 * the same list the page renders, and derive a WebP set for every slide.
 *
 * `image` is the original PNG, used as the fallback if a derivative is missing.
 */
export const CAROUSEL = [
  { image: "/images/geranium.png", title: "Geranium", location: "Copenhagen, Denmark", stars: ["michelinstar","michelinstar","michelinstar"], route: "/denmark/copenhagen/geranium" },
  { image: "/images/evvai1.png", title: "Evvai", location: "São Paulo, Brazil", stars: ["michelinstar","michelinstar","michelinstar"], route: "/brazil/so-paulo/so-paulo/evvai" },
  { image: "/images/tresindstudio1.png", title: "Trèsind Studio", location: "Dubai, United Arab Emirates", stars: ["michelinstar","michelinstar","michelinstar"], route: "/uae/other/dubai/trsind-studio" },
  { image: "/images/sezanne1.png", title: "SÉZANNE", location: "Tokyo, Japan", stars: ["michelinstar","michelinstar","michelinstar"], route: "/japan/tokyo/tokyo/szanne" },
  { image: "/images/suhring1.png", title: "Sühring", location: "Bangkok, Thailand", stars: ["michelinstar","michelinstar","michelinstar"], route: "/thailand/bangkok/bangkok/shring" },
  { image: "/images/odette1.png", title: "Odette", location: "Singapore", stars: ["michelinstar","michelinstar","michelinstar"], route: "/singapore/other/singapore/odette-s-i-n" },
  { image: "/images/singlethread1.png", title: "SingleThread Inn", location: "Healdsburg, California", stars: ["michelinstar","michelinstar","michelinstar"], route: "/usa/california/healdsburg/singlethread" },
  { image: "/images/sketch1.png", title: "Sketch, The Lecture Room and Library", location: "London, United Kingdom", stars: ["michelinstar","michelinstar","michelinstar"], route: "/uk/london/london/sketch-the-lecture-room-and-library" },
  { image: "/images/arpege1.png", title: "L’Arpège by Alain Passard", location: "Paris, France", stars: ["michelinstar","michelinstar","michelinstar"], route: "/france/paris/paris/arpge" },
  { image: "/images/azurmendi1.png", title: "Azurmendi by Eneko Atxa", location: "Larrabetzu, Spain", stars: ["michelinstar","michelinstar","michelinstar"], route: "/spain/larrabetzu/larrabetzu/azurmendi" },
];
