"use client";

import { useId, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useI18n } from "@/i18n/client";
import { PHONE } from "@/lib/site";
import { cn } from "@/lib/utils";

type Props = {
  product?: string;
  /** Extra text sent with the request, e.g. the cart contents. */
  details?: string;
  compact?: boolean;
  dark?: boolean;
  submitLabel?: string;
  onDone?: () => void;
};

export function LeadForm({
  product,
  details,
  compact,
  dark,
  submitLabel,
  onDone,
}: Props) {
  const { lang, m } = useI18n();
  const id = useId();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const form = new FormData(formEl);
    const phone = String(form.get("phone") ?? "").replace(/\D/g, "");
    if (phone.length < 9) {
      setError(m.form.errorPhone);
      return;
    }
    setError(null);
    setPending(true);
    try {
      const res = await fetch("/api/callback", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          phone,
          need: form.get("need"),
          product,
          details,
          lang,
        }),
      });
      if (!res.ok) throw new Error();
      formEl.reset();
      onDone?.();
      toast.success(m.form.success);
    } catch {
      setError(m.form.errorSend(PHONE));
    } finally {
      setPending(false);
    }
  }

  const field = cn(
    "h-12 rounded-xl border-0 px-4 text-base shadow-none",
    dark
      ? "bg-white/10 text-starch placeholder:text-starch/50 ring-1 ring-white/15"
      : "bg-white ring-1 ring-ink/15",
  );
  const label = cn(
    "text-sm font-medium",
    dark ? "text-starch/80" : "text-text-soft",
  );

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4">
      <div className={cn("grid gap-4", !compact && "sm:grid-cols-2")}>
        <div className="grid gap-2">
          <Label htmlFor={`${id}-name`} className={label}>
            {m.form.name}
          </Label>
          <Input
            id={`${id}-name`}
            name="name"
            autoComplete="name"
            className={field}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor={`${id}-phone`} className={label}>
            {m.form.phone}
          </Label>
          <Input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+998"
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? `${id}-error` : undefined}
            className={field}
          />
        </div>
      </div>
      {!product && (
        <div className="grid gap-2">
          <Label htmlFor={`${id}-need`} className={label}>
            {m.form.need}
          </Label>
          <Textarea
            id={`${id}-need`}
            name="need"
            rows={compact ? 2 : 3}
            placeholder={m.form.needPlaceholder}
            className={cn(field, "h-auto min-h-20 py-3")}
          />
        </div>
      )}
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className={cn(
            "text-sm font-medium",
            dark ? "text-amber" : "text-brand-red",
          )}
        >
          {error}
        </p>
      )}
      <Button
        type="submit"
        disabled={pending}
        className={cn(
          "btn btn-amber h-12 rounded-full bg-amber text-base font-semibold text-ink",
          dark && "on-dark",
        )}
      >
        {pending ? m.form.sending : (submitLabel ?? m.form.submit)}
      </Button>
      <p className={cn("text-xs", dark ? "text-starch/50" : "text-text-soft")}>
        {m.form.consent}
      </p>
    </form>
  );
}
