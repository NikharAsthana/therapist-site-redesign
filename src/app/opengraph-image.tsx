import { ImageResponse } from "next/og";
import { site } from "../../content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = site.seo.ogImageAlt;

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: "80px",
          backgroundColor: "#faf7f2",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 4,
            color: "#2d4a3e",
            fontFamily: "Georgia, serif",
          }}
        >
          LICENSED CLINICAL PSYCHOLOGIST · SANTA MONICA, CA
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 76,
            lineHeight: 1.1,
            color: "#1e2a26",
            marginTop: 24,
            fontFamily: "Georgia, serif",
          }}
        >
          Therapy for anxiety,
          <br />
          trauma, and burnout
        </div>
        <div style={{ fontSize: 30, color: "#5a6e66", marginTop: 28 }}>
          Dr. Maya Reynolds, PsyD — in person & telehealth across California
        </div>
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: 24,
            height: "100%",
            backgroundColor: "#2d4a3e",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
