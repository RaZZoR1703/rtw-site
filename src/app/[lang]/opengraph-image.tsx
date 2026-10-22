import { ImageResponse } from "next/og";
import { defaultLocale, hasLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateImageMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const m = getMessages(hasLocale(lang) ? lang : defaultLocale);
  return [{ id: "og", alt: m.meta.ogAlt, size, contentType }];
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const m = getMessages(hasLocale(lang) ? lang : defaultLocale);
  const line = {
    display: "flex",
    fontSize: 104,
    fontWeight: 800,
    lineHeight: 1,
    letterSpacing: -4,
  } as const;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        color: "#f6f4ee",
        background:
          "radial-gradient(90% 120% at 78% 40%, #f2a516 0%, #b86a06 34%, #4a2203 64%, #120d08 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 40,
          fontWeight: 800,
          letterSpacing: -1,
        }}
      >
        RTW · Right to Win
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {m.meta.ogLines.map((l) => (
          <div key={l} style={line}>
            {l}
          </div>
        ))}
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 34,
            opacity: 0.85,
          }}
        >
          {m.meta.ogSub}
        </div>
      </div>
    </div>,
    size,
  );
}
