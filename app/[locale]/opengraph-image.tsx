import { ImageResponse } from "next/og";
import { isLocale } from "@/lib/i18n";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Misael Ledesma — Full-Stack Developer / Desarrollador Full Stack";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const es = isLocale(locale) && locale === "es";
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        background: "#141414",
        color: "#f0ede8",
        padding: 80,
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ fontSize: 24, color: "#aaa49e" }}>
        {es ? "Desarrollador Full Stack" : "Full-Stack Developer"}
      </div>
      <div style={{ fontSize: 86, letterSpacing: -4 }}>Misael Ledesma</div>
      <div style={{ display: "flex", fontSize: 24, color: "#aaa49e" }}>
        {es
          ? "Cofundador de Reac Studio · Córdoba, Argentina"
          : "Co-Founder of Reac Studio · Córdoba, Argentina"}
      </div>
    </div>,
    size,
  );
}
