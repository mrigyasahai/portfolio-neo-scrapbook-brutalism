import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export const alt = `${site.name} — ${site.headline}`;

/** OG image rendered at build time — paper, marker, sticker. */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "#F3EEE1",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            fontFamily: "Arial Black, Arial, sans-serif",
            fontWeight: 900,
            textTransform: "uppercase",
            color: "#141414",
          }}
        >
          <span style={{ fontSize: 60, lineHeight: 1.05 }}>
            I solve product problems.
          </span>
          <span
            style={{
              fontSize: 60,
              lineHeight: 1.05,
              background: "#F5C242",
              alignSelf: "flex-start",
              padding: "0 16px",
            }}
          >
            I build the products that fix them.
          </span>
        </div>
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span
            style={{
              fontFamily: "monospace",
              fontSize: 26,
              color: "#E07A2C",
              fontWeight: 700,
              letterSpacing: "0.08em",
            }}
          >
            {site.roles.join(" × ").toUpperCase()}
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
