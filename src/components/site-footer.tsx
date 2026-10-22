import Link from "next/link";
import { Logo } from "@/components/logo";
import { categories } from "@/lib/catalog";
import {
  ADDRESS,
  COMPANY,
  EMAIL,
  MAP_URL,
  nav,
  PHONES,
  telHref,
} from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-starch">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-10 pt-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-starch/65">
            Оптовая торговля крахмалом и патокой — сырьём для пищевой,
            кондитерской, фармацевтической и бумажной промышленности.
          </p>
        </div>
        <nav aria-label="Разделы">
          <h2 className="text-sm font-semibold text-starch/50">Разделы</h2>
          <ul className="mt-4 grid gap-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-amber">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Продукция">
          <h2 className="text-sm font-semibold text-starch/50">Продукция</h2>
          <ul className="mt-4 grid gap-2.5">
            {categories.map((c) => (
              <li key={c.id}>
                <Link
                  href={`/catalog?cat=${c.id}`}
                  className="hover:text-amber"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="text-sm font-semibold text-starch/50">Контакты</h2>
          <ul className="mt-4 grid gap-2.5">
            {PHONES.map((p) => (
              <li key={p}>
                <a
                  href={telHref(p)}
                  className="tabular font-display text-lg font-semibold hover:text-amber"
                >
                  {p}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:text-amber">
                {EMAIL}
              </a>
            </li>
            <li>
              <a
                href={MAP_URL}
                target="_blank"
                rel="noreferrer"
                className="text-starch/65 hover:text-amber"
              >
                {ADDRESS}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-2 border-t border-white/10 px-4 py-6 text-sm text-starch/60 sm:px-8">
        <span>© {COMPANY}, с 2015 года</span>
        <span>Склад в Келесе, Ташкентская область</span>
      </div>
    </footer>
  );
}
