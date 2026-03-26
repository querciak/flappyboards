import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "FlappyBoards — Retro split-flap display emulator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const tileW = 38;
  const tileH = 50;
  const gap = 6;
  const step = tileW + gap;

  const row1 = "FLAPPYBOARDS".split("");
  const row2 = "RETRO DISPLAY".split("");

  const emptyTileCount = 14;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
          fontFamily: "monospace",
        }}
      >
        {/* Board frame */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: 1000,
            height: 390,
            backgroundColor: "#0a0a0a",
            borderRadius: 6,
            border: "1px solid rgba(255,255,255,0.06)",
            position: "relative",
            gap: 20,
          }}
        >
          {/* Top accent line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 20,
              right: 20,
              height: 1,
              backgroundColor: "rgba(255,255,255,0.3)",
              display: "flex",
            }}
          />

          {/* Empty row (atmosphere) */}
          <div style={{ display: "flex", gap, opacity: 0.3 }}>
            {Array.from({ length: emptyTileCount }).map((_, i) => (
              <div
                key={`empty-${i}`}
                style={{
                  width: tileW,
                  height: tileH,
                  backgroundColor: "#1a1a1a",
                  borderRadius: 2,
                  display: "flex",
                }}
              />
            ))}
          </div>

          {/* Row 1: FLAPPYBOARDS */}
          <div style={{ display: "flex", gap }}>
            {row1.map((char, i) => (
              <div
                key={`r1-${i}`}
                style={{
                  width: tileW,
                  height: tileH,
                  backgroundColor: "#1a1a1a",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#f0ece4",
                  fontSize: 24,
                  fontWeight: 500,
                }}
              >
                {char}
              </div>
            ))}
          </div>

          {/* Row 2: RETRO DISPLAY */}
          <div style={{ display: "flex", gap }}>
            {row2.map((char, i) => (
              <div
                key={`r2-${i}`}
                style={{
                  width: tileW,
                  height: tileH,
                  backgroundColor: char === " " ? "transparent" : "#1a1a1a",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#f0ece4",
                  fontSize: 24,
                  fontWeight: 500,
                  opacity: char === " " ? 0.3 : 1,
                }}
              >
                {char === " " ? "" : char}
              </div>
            ))}
          </div>

          {/* Empty row (atmosphere) */}
          <div style={{ display: "flex", gap, opacity: 0.3 }}>
            {Array.from({ length: emptyTileCount }).map((_, i) => (
              <div
                key={`empty2-${i}`}
                style={{
                  width: tileW,
                  height: tileH,
                  backgroundColor: "#1a1a1a",
                  borderRadius: 2,
                  display: "flex",
                }}
              />
            ))}
          </div>
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: "flex",
            marginTop: 24,
            color: "rgba(255,255,255,0.45)",
            fontSize: 16,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}
        >
          TURN ANY TV INTO A RETRO SPLIT-FLAP DISPLAY
        </div>

        {/* URL */}
        <div
          style={{
            display: "flex",
            marginTop: 12,
            color: "rgba(255,255,255,0.25)",
            fontSize: 14,
            letterSpacing: "0.15em",
          }}
        >
          flappyboards.xyz
        </div>
      </div>
    ),
    { ...size }
  );
}
