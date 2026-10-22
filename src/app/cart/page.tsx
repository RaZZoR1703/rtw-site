import type { Metadata } from "next";
import { CartView } from "@/components/cart-view";

export const metadata: Metadata = { title: "Корзина" };

export default function CartPage() {
  return (
    <main className="pt-28 lg:pt-36">
      <CartView />
    </main>
  );
}
