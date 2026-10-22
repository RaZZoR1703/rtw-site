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
import { LanguageSwitcher } from "@/components/language-switcher";
import { Logo } from "@/components/logo";
import { useCart } from "@/lib/cart";
import { useI18n } from "@/i18n/client";
import { lp, stripLocale } from "@/i18n/config";
import { navPaths, PHONE, telHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { lang, m } = useI18n();
  const path = stripLocale(usePathname());
  const overHero = path === "/";
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
    href === "/" ? path === "/" : path.startsWith(href);
  const iconBtn = cn(
    "grid size-11 place-items-center rounded-full",
    light
      ? "bg-white/10 btn-icon btn-icon-light"
      : "bg-ink/5 btn-icon btn-icon-dark",
  );

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
            {m.header.topLeft}
          </span>
          <span className={light ? "text-starch/80" : "text-text-soft"}>
            {m.header.topRight}
          </span>
        </div>
      </div>
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-5 px-4 sm:px-8 lg:h-[72px]">
        <Link
          href={lp(lang)}
          aria-label={m.common.toHomeAria}
          className="shrink-0"
        >
          <Logo light={light} tagline={m.header.logoLine2} />
        </Link>

        <nav
          aria-label={m.common.mainMenu}
          className="hidden items-center gap-1 lg:flex"
        >
          {navPaths.slice(1).map((href) => (
            <Link
              key={href}
              href={lp(lang, href)}
              aria-current={isActive(href) ? "page" : undefined}
              className={cn(
                "whitespace-nowrap rounded-full px-3 py-2 text-[15px] font-medium transition-colors duration-200",
                isActive(href)
                  ? light
                    ? "bg-white/15"
                    : "bg-ink text-starch"
                  : light
                    ? "hover:bg-white/10"
                    : "hover:bg-ink/5",
              )}
            >
              {m.nav[href]}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher light={light} className="hidden md:flex" />
          <a
            href={telHref(PHONE)}
            className="hidden text-right leading-tight 2xl:block"
          >
            <span className="tabular block font-semibold">{PHONE}</span>
            <span
              className={cn(
                "block text-[12px]",
                light ? "text-starch/70" : "text-text-soft",
              )}
            >
              {m.common.freeConsultation}
            </span>
          </a>
          <a
            href={telHref(PHONE)}
            aria-label={m.common.callTo(PHONE)}
            className={cn(iconBtn, "2xl:hidden")}
          >
            <Phone className="size-5" />
          </a>
          <Link
            href={lp(lang, "/cart")}
            aria-label={count ? m.common.cartWithCount(count) : m.common.cart}
            className={cn(iconBtn, "relative")}
          >
            <ShoppingBag className="size-5" />
            {count > 0 && (
              <span className="tabular absolute -right-0.5 -top-0.5 grid size-5 place-items-center rounded-full bg-amber text-[11px] font-bold text-ink">
                {count}
              </span>
            )}
          </Link>
          <CallbackDialog
            triggerLabel={m.common.leaveRequest}
            className="hidden sm:inline-flex lg:hidden xl:inline-flex"
          />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label={m.common.openMenu}
              className={cn(iconBtn, "lg:hidden")}
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[86vw] max-w-sm border-0 bg-ink p-0 text-starch"
            >
              <SheetTitle className="sr-only">{m.common.menu}</SheetTitle>
              <div className="flex h-full flex-col px-6 pb-8 pt-16">
                <LanguageSwitcher light className="mb-6 w-fit" />
                <nav aria-label={m.common.menu} className="flex flex-col">
                  {navPaths.map((href) => (
                    <Link
                      key={href}
                      href={lp(lang, href)}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(href) ? "page" : undefined}
                      className={cn(
                        "border-b border-white/10 py-4 font-display text-xl font-semibold",
                        isActive(href) && "text-amber",
                      )}
                    >
                      {m.nav[href]}
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
                  {m.common.freeConsultation}
                </p>
                <CallbackDialog
                  triggerLabel={m.common.leaveRequest}
                  className="on-dark mt-6 w-full"
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
