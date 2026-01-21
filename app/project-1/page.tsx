// app/project-1/page.tsx

import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

const MyFont = localFont({
  src: "../../public/fonts/myfont.otf",
  weight: "400",
  style: "normal",
});

export default function Project1Page() {
  const vimeoSrc =
    "https://player.vimeo.com/video/1145190908?badge=0&autopause=0&player_id=0&app_id=58479";

  return (
    <main
      className={MyFont.className}
      style={{
        minHeight: "100vh",
        background: "#fff",
        color: "#000",
        display: "grid",
        gridTemplateRows: "56px 56px 1fr", // star row, title row, video row
        rowGap: 10, // << controls spacing between star/title/video (small + predictable)
        padding: "18px 24px",
      }}
    >
      {/* STAR (centered) -> back to main menu */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Link
          href="/"
          aria-label="Back to main menu"
          style={{ width: 54, height: 54, position: "relative", display: "block" }}
        >
          <Image
            src="/icons/star.png"
            alt="Home"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </Link>
      </div>

      {/* TITLE (centered) */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h1
          style={{
            margin: 0,
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            fontSize: 28,
            fontWeight: 400,
            lineHeight: 1,
            textAlign: "center",
          }}
        >
          KULTURR — WUMELA
        </h1>
      </div>

      {/* VIDEO (auto-fits viewport; no scroll) */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          overflow: "hidden",
        }}
      >
        {/* Fit inside viewport: choose a width based on remaining height */}
        <div
          style={{
            width: "min(1100px, 96vw)",
            // keep 4:3, but cap height so it always fits:
            aspectRatio: "4 / 3",
            maxHeight: "calc(100vh - 56px - 56px - 18px - 18px - 10px - 10px)", 
            position: "relative",
          }}
        >
          <iframe
            src={vimeoSrc}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            title="KULTURR - WUMELA"
          />
        </div>
      </div>
    </main>
  );
}