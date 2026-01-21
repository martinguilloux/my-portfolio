// app/project-6/page.tsx

import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

const MyFont = localFont({
  src: "../../public/fonts/myfont.otf",
  weight: "400",
  style: "normal",
});

const photos = [
  "/photos/chibi/01.png",
  "/photos/chibi/04.png",
  "/photos/chibi/03.png",
  "/photos/chibi/02.png",
  "/photos/chibi/05.png",
];

export default function ChibiPage() {
  return (
    <main
      className={MyFont.className}
      style={{
        minHeight: "100vh",
        background: "#fff",
        color: "#000",
        padding: "18px 24px 80px",
      }}
    >
      {/* STAR */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
        <Link
          href="/"
          aria-label="Back to main menu"
          style={{
            width: 58,
            height: 58,
            position: "relative",
            display: "block",
          }}
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
      <h1
        style={{
          textAlign: "center",
          textTransform: "uppercase",
          letterSpacing: "0.18em",
          fontSize: 28,
          fontWeight: 400,
          margin: "0 0 56px 0",
        }}
      >
        CHIBI
      </h1>

      {/* PHOTOS */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 56,
        }}
      >
        {photos.map((src, index) => (
          <div key={index} style={{ width: "min(900px, 94vw)" }}>
            <Image
  src={src}
  alt={`CHIBI ${index + 1}`}
  width={2000}
  height={3000}
  style={{
    width: "100%",
    height: "auto",
    maxHeight: "75vh",   // 👈 ajuste ici (70–80vh selon ton goût)
    objectFit: "contain",
  }}
  priority={index === 0}
/>
          </div>
        ))}
      </div>
    </main>
  );
}