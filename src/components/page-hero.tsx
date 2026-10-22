import Image from "next/image";
import Link from "next/link";

type Crumb = { href?: string; label: string };

type Props = {
  title: React.ReactNode;
  lead?: React.ReactNode;
  image: string;
  crumbs: Crumb[];
  crumbsLabel: string;
  children?: React.ReactNode;
};

export function PageHero({
  title,
  lead,
  image,
  crumbs,
  crumbsLabel,
  children,
}: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-starch">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 scale-105 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/35" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-ink/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-8 lg:pb-20 lg:pt-44">
        <nav
          aria-label={crumbsLabel}
          className="hero-rise text-sm text-starch/60"
        >
          <ol className="flex flex-wrap items-center gap-2">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden>/</span>}
                {c.href ? (
                  <Link href={c.href} className="hover:text-amber">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-starch/85">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1
          className="hero-rise mt-6 max-w-4xl text-balance font-display text-[clamp(2.4rem,6.2vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.035em]"
          style={{ animationDelay: "80ms" }}
        >
          {title}
        </h1>
        {lead && (
          <p
            className="hero-rise mt-6 max-w-2xl text-lg leading-relaxed text-starch/75 sm:text-xl"
            style={{ animationDelay: "160ms" }}
          >
            {lead}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
