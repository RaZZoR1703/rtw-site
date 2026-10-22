import type { Messages } from "@/i18n/messages";

export type CategoryId = "starch" | "syrup" | "chem";

export type Block = { title?: string; paragraphs?: string[]; list?: string[] };

/** Language-independent facts; every text field comes from the dictionary. */
const baseCategories: { id: CategoryId; image: string }[] = [
  { id: "starch", image: "/images/stock/potatoes.webp" },
  { id: "syrup", image: "/images/stock/syrup-pour.webp" },
  { id: "chem", image: "/images/gallery/bura-meshki-2.jpg" },
];

type ProductId = keyof Messages["data"]["products"];

type BaseProduct = {
  id: ProductId;
  slug: string;
  category: CategoryId;
  article: string;
  pricePerKg: number;
  /** Minimum batch in kg; undefined when the unit has to be confirmed by a manager. */
  minKg?: number;
  image: string;
};

const baseProducts: BaseProduct[] = [
  {
    id: "corn",
    slug: "kraxmal-kukuruzniy-visshiy-sort-87946",
    category: "starch",
    article: "P-0087946",
    pricePerKg: 7836,
    minKg: 100,
    image: "/images/products/kraxmal-kukuruzniy.webp",
  },
  {
    id: "potato",
    slug: "kraxmal-kartofelniy-visshiy-sort-87948",
    category: "starch",
    article: "P-0087948",
    pricePerKg: 18084,
    minKg: 1000,
    image: "/images/products/kraxmal-kartofelniy.webp",
  },
  {
    id: "hfcs",
    slug: "glyukozno-fruktozniy-sirop-655038",
    category: "syrup",
    article: "P-0655038",
    pricePerKg: 8078,
    image: "/images/products/glyukozno-fruktozniy-sirop.webp",
  },
  {
    id: "caramel",
    slug: "patoka-fermentativnaya-kukuruznaya-427619",
    category: "syrup",
    article: "P-0427619",
    pricePerKg: 9283,
    minKg: 280,
    image: "/images/products/patoka-fermentativnaya.webp",
  },
  {
    id: "acid",
    slug: "patoka-kraxmalnaya-kislotnaya-kukuruznaya-427641",
    category: "syrup",
    article: "P-0427641",
    pricePerKg: 9645,
    image: "/images/products/patoka-kislotnaya.webp",
  },
  {
    id: "caustic",
    slug: "kausticheskaya-soda-granulirovannaya-457376",
    category: "chem",
    article: "P-0457376",
    pricePerKg: 13141,
    minKg: 1,
    image: "/images/products/kausticheskaya-soda.webp",
  },
  {
    id: "borax",
    slug: "bura-desyativodnaya-meshok-25kg-397501",
    category: "chem",
    article: "P-0397501",
    pricePerKg: 22906,
    minKg: 1,
    image: "/images/products/bura-desyativodnaya.webp",
  },
];

export const productSlugs = baseProducts.map((p) => p.slug);

export type Category = {
  id: CategoryId;
  image: string;
  name: string;
  description: string;
  industries: string;
};

export type Product = BaseProduct & {
  name: string;
  shortName: string;
  grade?: string;
  origin: string;
  minLabel: string;
  packaging?: string;
  freeDelivery?: string;
  lead: string;
  specs?: [string, string][];
  blocks?: Block[];
};

export function getCategories(m: Messages): Category[] {
  return baseCategories.map((c) => ({ ...c, ...m.data.categories[c.id] }));
}

export function getProducts(m: Messages): Product[] {
  return baseProducts.map((p) => ({
    ...p,
    ...(m.data.products[p.id] as Omit<Product, keyof BaseProduct>),
  }));
}

export function isCategoryId(value: unknown): value is CategoryId {
  return baseCategories.some((c) => c.id === value);
}
