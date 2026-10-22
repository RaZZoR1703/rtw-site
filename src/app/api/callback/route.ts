import { NextResponse } from "next/server";

const text = (v: unknown, max: number) =>
  typeof v === "string" ? v.slice(0, max) : undefined;

// TODO: deliver the request to the managers (Telegram bot, email or CRM).
// Until then requests are only written to the server log.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const phone =
    typeof body?.phone === "string" ? body.phone.replace(/\D/g, "") : "";
  if (phone.length < 9) {
    return NextResponse.json({ error: "phone" }, { status: 400 });
  }
  console.info("[callback]", {
    name: text(body?.name, 120) ?? "",
    phone,
    need: text(body?.need, 1000),
    product: text(body?.product, 200),
    details: text(body?.details, 2000),
    at: new Date().toISOString(),
  });
  return NextResponse.json({ ok: true });
}
