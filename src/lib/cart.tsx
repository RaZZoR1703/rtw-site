"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { products, type Product } from "@/lib/catalog";

export type CartLine = { slug: string; kg: number };
type CartLineFull = CartLine & { product: Product; sum: number };

type CartContextValue = {
  lines: CartLineFull[];
  count: number;
  total: number;
  ready: boolean;
  add: (slug: string, kg: number) => void;
  setKg: (slug: string, kg: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
};

const KEY = "rtw-cart-v1";
const CartContext = createContext<CartContextValue | null>(null);

function read(): CartLine[] {
  try {
    const raw = localStorage.getItem(KEY);
    const parsed = raw ? (JSON.parse(raw) as CartLine[]) : [];
    return parsed.filter(
      (l) => products.some((p) => p.slug === l.slug) && l.kg > 0,
    );
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [raw, setRaw] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setRaw(read());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(raw));
    } catch {
      // Storage can be unavailable (private mode); the cart then lives for this visit only.
    }
  }, [raw, ready]);

  const add = useCallback((slug: string, kg: number) => {
    setRaw((prev) => {
      const hit = prev.find((l) => l.slug === slug);
      return hit
        ? prev.map((l) => (l.slug === slug ? { ...l, kg: l.kg + kg } : l))
        : [...prev, { slug, kg }];
    });
  }, []);
  const setKg = useCallback((slug: string, kg: number) => {
    setRaw((prev) => prev.map((l) => (l.slug === slug ? { ...l, kg } : l)));
  }, []);
  const remove = useCallback(
    (slug: string) => setRaw((prev) => prev.filter((l) => l.slug !== slug)),
    [],
  );
  const clear = useCallback(() => setRaw([]), []);

  const value = useMemo<CartContextValue>(() => {
    const lines = raw.flatMap((l) => {
      const product = products.find((p) => p.slug === l.slug);
      return product ? [{ ...l, product, sum: product.pricePerKg * l.kg }] : [];
    });
    return {
      lines,
      count: lines.length,
      total: lines.reduce((s, l) => s + l.sum, 0),
      ready,
      add,
      setKg,
      remove,
      clear,
    };
  }, [raw, ready, add, setKg, remove, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
