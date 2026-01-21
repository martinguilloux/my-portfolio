// app/photography/page.tsx

import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

const MyFont = localFont({
  src: "../../public/fonts/myfont.otf",
  weight: "400",
  style: "normal",
});

const projects = [
  { title: "CHIBI", href: "/project-6" },
];

export default function PhotographyPage() {
  return (
    <main
      className={MyFont.className}
      style={{
        minHeight: "100vh",
        background: "#fff",
        color: "#000",
        padding: "24px",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 48,
        }}
      >
        {/* STAR */}
        <Link
          href="/"
          aria-label="Back to main menu"
          style={{
            width: 72,
            height: 72,
            position: "relative",
            display: "block",
            marginBottom: 20,
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

        {/* TITLE (CENTERED, BELOW STAR) */}
        <div
          style={{
            fontSize: "clamp(28px, 6vw, 64px)",
            letterSpacing: "0.18em",
            fontWeight: 400,
            lineHeight: 1,
            textAlign: "center",
          }}
        >
          PHOTOGRAPHY
        </div>
      </div>

      {/* PROJECT LIST */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 42,
        }}
      >
        {projects.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            style={{
              textDecoration: "none",
              color: "inherit",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* PROJECT TITLE */}
            <div
              style={{
                fontSize: 32,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                textAlign: "center",
                marginBottom: 16,
              }}
            >
              {p.title}
            </div>

            {/* LINE */}
            <div
              style={{
                width: "33vw",
                maxWidth: 520,
                height: 1,
                background: "#000",
              }}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}