// app/contact/page.tsx

import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

const MyFont = localFont({
  src: "../../public/fonts/myfont.otf",
  weight: "400",
  style: "normal",
});

export default function ContactPage() {
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
          marginBottom: 64,
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
            marginBottom: 28,
          }}
        >
          <Image
            src="/icons/star.png"
            alt="Back to menu"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </Link>

        {/* CONTACT TITLE */}
        <div
          style={{
            fontSize: "clamp(28px, 6vw, 64px)",
            letterSpacing: "0.18em",
            fontWeight: 400,
            lineHeight: 1,
            textAlign: "center",
          }}
        >
          CONTACT
        </div>
      </div>

      {/* CONTACT INFO */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
          fontSize: 18,
          letterSpacing: "0.15em",
          lineHeight: 1.8,
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        <div>
          instagram:{" "}
          <Link
            href="https://www.instagram.com/mgx___________/"
            target="_blank"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            mgx___________
          </Link>
        </div>

        <div>
          email:{" "}
          <Link
            href="mailto:martinguilloux@outlook.com"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            martinguilloux@outlook.com
          </Link>
        </div>
      </div>
    </main>
  );
}