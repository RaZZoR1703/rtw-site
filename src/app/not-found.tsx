import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PHONE, telHref } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pb-24 pt-36 sm:px-8">
      <p className="tabular font-display text-[clamp(5rem,16vw,12rem)] font-extrabold leading-none tracking-[-0.05em] text-amber">
        404
      </p>
      <h1 className="mt-4 max-w-2xl font-display text-[clamp(1.8rem,4vw,3rem)] font-bold leading-tight tracking-tight">
        Такой страницы нет — а товар на складе есть
      </h1>
      <p className="mt-4 max-w-xl text-lg text-text-soft">
        Возможно, ссылка устарела. Загляните в каталог или позвоните:{" "}
        <a
          href={telHref(PHONE)}
          className="tabular font-semibold text-ink underline-offset-4 hover:underline"
        >
          {PHONE}
        </a>
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/catalog"
          className="group inline-flex h-12 items-center gap-2 rounded-full bg-amber px-6 font-semibold text-ink hover:bg-[#ffb52e]"
        >
          Каталог и цены
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <Link
          href="/"
          className="inline-flex h-12 items-center rounded-full bg-ink px-6 font-semibold text-starch hover:bg-ink-2"
        >
          На главную
        </Link>
      </div>
    </main>
  );
}
