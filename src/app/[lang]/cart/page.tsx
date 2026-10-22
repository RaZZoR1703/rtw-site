import type { Metadata } from "next";
import { CartView } from "@/components/cart-view";
import { getMessages } from "@/i18n/messages";
import { alternates, resolveLang } from "@/i18n/seo";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/cart">): Promise<Metadata> {
  const lang = await resolveLang(params);
  return {
    title: getMessages(lang).cart.title,
    alternates: alternates(lang, "/cart"),
    robots: { index: false },
  };
}

export default function CartPage() {
  return (
    <main className="pt-28 lg:pt-36">
      <CartView />
    </main>
  );
}
