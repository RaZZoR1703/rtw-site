import { ImageResponse } from "next/og";

export const alt = "RTW — крахмал и патока оптом со склада в Ташкенте";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
        <div
          style={{
            display: "flex",
            fontSize: 104,
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: -4,
          }}
        >
          Крахмал и патока
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 104,
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: -4,
          }}
        >
          оптом
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 34,
            opacity: 0.85,
          }}
        >
          Склад в Ташкенте · бесплатная доставка по городу
        </div>
      </div>
    </div>,
    size,
  );
}
