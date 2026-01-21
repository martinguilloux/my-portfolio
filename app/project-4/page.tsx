// app/project-esco/page.tsx

import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

const MyFont = localFont({
  src: "../../public/fonts/myfont.otf",
  weight: "400",
  style: "normal",
});

export default function EscoCampaignsPage() {
  const vimeoSrc1 =
    "https://player.vimeo.com/video/1147683955?badge=0&autopause=0&player_id=0&app_id=58479";

  const vimeoSrc2 =
    "https://player.vimeo.com/video/1147682680?badge=0&autopause=0&player_id=0&app_id=58479";

  return (
    <main
      className={MyFont.className}
      style={{
        minHeight: "100vh",
        background: "#fff",
        color: "#000",
        display: "grid",
        gridTemplateRows: "56px 56px 1fr",
        rowGap: 10,
        padding: "18px 24px",
      }}
    >
      {/* STAR */}
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

      {/* TITLE */}
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
          ESCO CAMPAIGNS
        </h1>
      </div>

      {/* VIDEOS STACK */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24, // spacing between the two videos (editorial, calm)
          overflow: "hidden",
        }}
      >
        {/* VIDEO 1 */}
        <div
          style={{
            width: "min(1100px, 96vw)",
            aspectRatio: "4 / 3",
            maxHeight: "calc((100vh - 56px - 56px - 36px - 20px) / 2)",
            position: "relative",
          }}
        >
          <iframe
            src={vimeoSrc1}
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
            title="ESCO Campaign 1"
          />
        </div>

        {/* VIDEO 2 */}
        <div
          style={{
            width: "min(1100px, 96vw)",
            aspectRatio: "4 / 3",
            maxHeight: "calc((100vh - 56px - 56px - 36px - 20px) / 2)",
            position: "relative",
          }}
        >
          <iframe
            src={vimeoSrc2}
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
            title="ESCO Campaign 2"
          />
        </div>
      </div>
    </main>
  );
}