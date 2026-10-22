import { cn } from "@/lib/utils";

type Props = {
  title: React.ReactNode;
  lead?: React.ReactNode;
  dark?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export function SectionHeading({
  title,
  lead,
  dark,
  className,
  children,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className="max-w-3xl">
        <h2 className="text-balance font-display text-[clamp(2rem,4.6vw,3.75rem)] font-bold leading-[1.02] tracking-[-0.03em]">
          {title}
        </h2>
        {lead && (
          <p
            className={cn(
              "mt-5 max-w-2xl text-lg leading-relaxed",
              dark ? "text-starch/70" : "text-text-soft",
            )}
          >
            {lead}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}
