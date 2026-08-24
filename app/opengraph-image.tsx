import { ImageResponse } from "next/og";
import { siteConfig, siteDescription } from "@/content/profile";

export const runtime = "edge";
export const alt = `${siteConfig.name} - ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background: "linear-gradient(145deg, #0f172a 0%, #1e1b4b 45%, #3730a3 100%)",
          color: "white",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.9, marginBottom: 16 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.1, maxWidth: 900 }}>
          {siteConfig.title}
        </div>
        <div style={{ fontSize: 26, marginTop: 24, opacity: 0.92, maxWidth: 800 }}>
          {siteDescription.slice(0, 120)}...
        </div>
        <div style={{ fontSize: 22, marginTop: 40, opacity: 0.85 }}>
          React Native • Node.js • AI Agents • Remoto
        </div>
      </div>
    ),
    { ...size }
  );
}
