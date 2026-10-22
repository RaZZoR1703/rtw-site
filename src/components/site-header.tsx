"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CallbackDialog } from "@/components/callback-dialog";
import { Logo } from "@/components/logo";
import { useCart } from "@/lib/cart";
import { nav, PHONE, telHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const overHero = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const light = overHero && !scrolled;
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color] duration-300",
        light
          ? "text-starch"
          : "bg-starch/90 text-ink shadow-[0_1px_0_rgb(18_13_8/0.08)] backdrop-blur-md",
      )}
    >
      <div
        className={cn(
          "hidden border-b text-[13px] lg:block",
          light ? "border-white/15" : "border-ink/10",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-1.5">
          <span className={light ? "text-starch/80" : "text-text-soft"}>
            Склад в Ташкенте · бесплатная доставка по городу от 200 кг
          </span>
          <span className={light ? "text-starch/80" : "text-text-soft"}>
            ООО «RIGHT TO WIN» · опт по Узбекистану
          </span>
        </div>
      </div>
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-8 lg:h-[72px]">
        <Link href="/" aria-label="RTW — на главную" className="shrink-0">
          <Logo light={light} />
        </Link>

        <nav
          aria-label="Основное меню"
          className="hidden items-center gap-1 lg:flex"
        >
          {nav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors duration-200",
                isActive(item.href)
                  ? light
                    ? "bg-white/15"
                    : "bg-ink text-starch"
                  : light
                    ? "hover:bg-white/10"
                    : "hover:bg-ink/5",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <a
            href={telHref(PHONE)}
            className="hidden text-right leading-tight xl:block"
          >
            <span className="tabular block font-semibold">{PHONE}</span>
            <span
              className={cn(
                "block text-[12px]",
                light ? "text-starch/70" : "text-text-soft",
              )}
            >
              бесплатная консультация
            </span>
          </a>
          <a
            href={telHref(PHONE)}
            aria-label={`Позвонить ${PHONE}`}
            className={cn(
              "grid size-11 place-items-center rounded-full xl:hidden",
              light
                ? "bg-white/10 hover:bg-white/20"
                : "bg-ink/5 hover:bg-ink/10",
            )}
          >
            <Phone className="size-5" />
          </a>
          <Link
            href="/cart"
            aria-label={count ? `Корзина, позиций: ${count}` : "Корзина"}
            className={cn(
              "relative grid size-11 place-items-center rounded-full",
              light
                ? "bg-white/10 hover:bg-white/20"
                : "bg-ink/5 hover:bg-ink/10",
            )}
          >
            <ShoppingBag className="size-5" />
            {count > 0 && (
              <span className="tabular absolute -right-0.5 -top-0.5 grid size-5 place-items-center rounded-full bg-amber text-[11px] font-bold text-ink">
                {count}
              </span>
            )}
          </Link>
          <CallbackDialog
            triggerLabel="Оставить заявку"
            className="hidden sm:inline-flex"
          />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Открыть меню"
              className={cn(
                "grid size-11 place-items-center rounded-full lg:hidden",
                light
                  ? "bg-white/10 hover:bg-white/20"
                  : "bg-ink/5 hover:bg-ink/10",
              )}
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[86vw] max-w-sm border-0 bg-ink p-0 text-starch"
            >
              <SheetTitle className="sr-only">Меню</SheetTitle>
              <div className="flex h-full flex-col px-6 pb-8 pt-16">
                <nav aria-label="Меню" className="flex flex-col">
                  {nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={cn(
                        "border-b border-white/10 py-4 font-display text-xl font-semibold",
                        isActive(item.href) && "text-amber",
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <a
                  href={telHref(PHONE)}
                  className="tabular mt-auto font-display text-2xl font-bold"
                >
                  {PHONE}
                </a>
                <p className="mt-1 text-sm text-starch/60">
                  бесплатная консультация
                </p>
                <CallbackDialog
                  triggerLabel="Оставить заявку"
                  className="mt-6 w-full"
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
