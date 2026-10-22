// Language-independent site facts. Every visible text lives in src/i18n/dictionaries.

export const PHONES = [
  "+998 99 392 23 05",
  "+998 97 157 67 67",
  "+998 95 833 23 05",
];
export const PHONE = PHONES[0];
export const telHref = (p: string) => `tel:${p.replace(/[^\d+]/g, "")}`;
export const EMAIL = "info@rtw.uz";

/** The map query stays in Russian: that is how the address is registered on Yandex Maps. */
const MAP_QUERY = "Ташкентская обл., Зангиатинский р-н, Келес, ул. Окибат 68";
export const MAP_URL = `https://yandex.uz/maps/?text=${encodeURIComponent(MAP_QUERY)}`;
export const MAP_EMBED = `https://yandex.uz/map-widget/v1/?text=${encodeURIComponent(MAP_QUERY)}&z=14`;

/** Route order for the header, footer and sitemap; labels come from m.nav. */
export const navPaths = [
  "/",
  "/catalog",
  "/delivery",
  "/gallery",
  "/news",
  "/contacts",
] as const;

export const stats = [
  { value: 2015, plain: true },
  { value: 300, suffix: "+" },
  { value: 3 },
];

export const industryImages = [
  "/images/stock/syrup-pour.webp",
  "/images/stock/food-production.webp",
  "/images/stock/corn-closeup.webp",
  "/images/stock/production-line.webp",
  "/images/stock/warehouse-bags.webp",
  "/images/stock/lab-quality.webp",
];

/** Same order as m.data.galleryCaptions. */
export const galleryImages = [
  "/images/gallery/bochki-s-patokoy.jpg",
  "/images/gallery/patoka-kraxmalnaya.jpg",
  "/images/gallery/kraxmal-kukuruzniy.jpg",
  "/images/gallery/kraxmal-kartofelniy.jpg",
  "/images/gallery/bura-meshki-2.jpg",
  "/images/gallery/bura-meshki.jpg",
  "/images/stock/potatoes.webp",
  "/images/stock/corn-cobs.webp",
];

export const articles = [
  {
    slug: "bura-desyativodnaya-meshok-25kg",
    date: "2020-10-21",
    image: "/images/gallery/bura-meshki-2.jpg",
    productSlug: "bura-desyativodnaya-meshok-25kg-397501",
  },
  {
    slug: "soda-kausticheskaya-98",
    date: "2020-10-21",
    image: "/images/products/kausticheskaya-soda.webp",
    productSlug: "kausticheskaya-soda-granulirovannaya-457376",
  },
] as const;

export type ArticleSlug = (typeof articles)[number]["slug"];
