"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import localFont from "next/font/local";

const MyFont = localFont({
  src: "../public/fonts/myfont.otf",
  weight: "400",
  style: "normal",
});

type Project = {
  slug: string;
  title: string;
  thumbnail?: string;
  initialX: number; // vw
  initialY: number; // vh
};

type BubbleState = {
  project: Project;
  x: number; // vw (center)
  y: number; // vh (center)
  vx: number; // vw per frame
  vy: number; // vh per frame
};

const projects: Project[] = [
  { slug: "project-1", title: "KULTURR - WUMELA", thumbnail: "/thumbnails/wumela.jpg", initialX: 20, initialY: 40 },
  { slug: "project-2", title: "SAFIAN - TAKE IT SLOW", thumbnail: "/thumbnails/takeitslow.png", initialX: 50, initialY: 30 },
  { slug: "project-3", title: "AS GOOD AS IT GETS", thumbnail: "/thumbnails/asgoodasitgetserious.png", initialX: 80, initialY: 50 },
  { slug: "project-4", title: "ESCO CAMPAIGNS", thumbnail: "/thumbnails/esco.png", initialX: 30, initialY: 70 },
  { slug: "project-5", title: "EIEGEN RISICO - QUIEN RIE PRIMERO RIE PEOR", thumbnail: "/thumbnails/quienrie.png", initialX: 60, initialY: 65 },
  { slug: "project-6", title: "CHIBI", thumbnail: "/thumbnails/CHIBI2.png", initialX: 85, initialY: 75 },
  { slug: "project-7", title: "RNBOI FT. NONO LA GRINTA - AVEC MOI", thumbnail: "/thumbnails/avecmoi3.jpg", initialX: 85, initialY: 75 },
];

// ===== Responsive sizing =====
const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

function computeBubbleDiameterPx(w: number) {
  // Good balance: ~22vw on mobile, capped on desktop
  return clamp(Math.round(w * 0.22), 92, 160);
}

const COLLISION_MARGIN_PX = 2; // touch/bounce feel
const TITLE_GAP_PX = 6;
function getViewportWH() {
  if (typeof window === "undefined") return { w: 1, h: 1 };
  const vv = window.visualViewport;
  return {
    w: vv?.width ?? window.innerWidth,
    h: vv?.height ?? window.innerHeight,
  };
}

function Bubble({
  bubble,
  fontFamily,
  diameterPx,
  titleFontPx,
}: {
  bubble: BubbleState;
  fontFamily: string;
  diameterPx: number;
  titleFontPx: number;
}) {
  const { project, x, y } = bubble;
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/${project.slug}`}
      style={{
        position: "fixed",
        left: `calc(${x} * var(--vvw))`,
        top: `calc(${y} * var(--vvh))`,
        transform: "translate(-50%, -50%)",
        display: "inline-block",
        cursor: "pointer",
        zIndex: 10,
        overflow: "visible",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          width: `${diameterPx}px`,
          height: `${diameterPx}px`,
          borderRadius: "50%",
          overflow: "hidden",
          border: "1px solid rgba(0,0,0,0.5)",
          backgroundColor: "rgba(0,0,0,0.05)",
          position: "relative",
        }}
      >
        {project.thumbnail && (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes={`${diameterPx}px`}
            style={{ objectFit: "cover" }}
          />
        )}
      </div>

      {hovered && (
        <div
          style={{
            position: "absolute",
            top: diameterPx + TITLE_GAP_PX,
            left: "50%",
            transform: "translateX(-50%)",
            whiteSpace: "nowrap",
            fontSize: titleFontPx,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#000",
            fontFamily,
          }}
        >
          {project.title}
        </div>
      )}
    </Link>
  );
}

function IndexMenu({ fontFamily }: { fontFamily: string }) {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const baseItemStyle: React.CSSProperties = {
    padding: "18px 0",
    cursor: "pointer",
    fontSize: "clamp(28px, 6vw, 64px)",
    color: "#000",
    letterSpacing: "0.2em",
    width: "100%",
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 24,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 10000,
      }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div
        style={{
          width: 90,
          height: 90,
          cursor: "pointer",
          position: "relative",
        }}
      >
        <Image
          src="/icons/star.png"
          alt="Index"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      {open && (
        <div
          style={{
            position: "absolute",
            top: 60,
            left: "50%",
            transform: "translateX(-50%)",
            background: "transparent",
            padding: "10px 10px",
            minWidth: isMobile ? "92vw" : 700,
            textAlign: "center",
            fontFamily,
          }}
        >
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
  <div style={{ ...baseItemStyle, textAlign: isMobile ? "center" : "left" }}>
    INDEX
  </div>
</Link>

          <Link href="/photography" style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{ ...baseItemStyle, textAlign: "center" }}>
              PHOTOGRAPHY
            </div>
          </Link>

          <Link href="/films" style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{ ...baseItemStyle, textAlign: isMobile ? "center" : "right" }}>
              FILMS
            </div>
          </Link>

          <Link href="/contact" style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{ ...baseItemStyle, textAlign: "center" }}>
              CONTACT
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [bubbles, setBubbles] = useState<BubbleState[]>(
    projects.map((p) => ({
      project: p,
      x: p.initialX,
      y: p.initialY,
      vx: (Math.random() - 0.5) * 0.05,
      vy: (Math.random() - 0.5) * 0.05,
    }))
  );

  // store current responsive diameter in state so physics uses it
  const [diameterPx, setDiameterPx] = useState(160);

  useEffect(() => {
    const apply = () => setDiameterPx(computeBubbleDiameterPx(window.innerWidth || 1));
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  useEffect(() => {
  const setViewportVars = () => {
    const vv = window.visualViewport;
    const vw = (vv?.width ?? window.innerWidth) * 0.01;
    const vh = (vv?.height ?? window.innerHeight) * 0.01;

    document.documentElement.style.setProperty("--vvw", `${vw}px`);
    document.documentElement.style.setProperty("--vvh", `${vh}px`);
  };

  setViewportVars();

  window.addEventListener("resize", setViewportVars);
  window.visualViewport?.addEventListener("resize", setViewportVars);
  window.visualViewport?.addEventListener("scroll", setViewportVars);

  return () => {
    window.removeEventListener("resize", setViewportVars);
    window.visualViewport?.removeEventListener("resize", setViewportVars);
    window.visualViewport?.removeEventListener("scroll", setViewportVars);
  };
}, []);

  const radiusPx = diameterPx / 2;

  // title size responsive too (prevents huge hover labels on iPhone)
  const titleFontPx = useMemo(() => {
    // around 30 desktop, ~18-22 on phones
    const w = typeof window !== "undefined" ? window.innerWidth : 1200;
    return clamp(Math.round(w * 0.022), 18, 30);
  }, [diameterPx]);

  useEffect(() => {
    let frame = 0;

    const animate = () => {
      setBubbles((prev) => {
        const next = prev.map((b) => ({ ...b }));

        const { w, h } = getViewportWH();

        // Radius in vw/vh (so borders are correct)
        const rxVw = (radiusPx / w) * 100;
        const ryVh = (radiusPx / h) * 100;

        const minX = rxVw;
        const maxX = 100 - rxVw;
        const minY = ryVh;
        const maxY = 100 - ryVh;

        // 1) move + bounce on borders (no sticking)
        next.forEach((b) => {
          b.x += b.vx;
          b.y += b.vy;

          // X wall
          if (b.x <= minX) {
            b.x = minX + 0.001; // push inside
            if (b.vx < 0) b.vx = -b.vx; // only flip if moving outward
          } else if (b.x >= maxX) {
            b.x = maxX - 0.001;
            if (b.vx > 0) b.vx = -b.vx;
          }

          // Y wall
          if (b.y <= minY) {
            b.y = minY + 0.001;
            if (b.vy < 0) b.vy = -b.vy;
          } else if (b.y >= maxY) {
            b.y = maxY - 0.001;
            if (b.vy > 0) b.vy = -b.vy;
          }
        });

        // 2) collisions between bubbles (in pixels, using current radius)
        const minDistPx = radiusPx * 2 + COLLISION_MARGIN_PX;
        const minDistSqPx = minDistPx * minDistPx;

        for (let i = 0; i < next.length; i++) {
          for (let j = i + 1; j < next.length; j++) {
            const bi = next[i];
            const bj = next[j];

            const xi = (bi.x / 100) * w;
            const yi = (bi.y / 100) * h;
            const xj = (bj.x / 100) * w;
            const yj = (bj.y / 100) * h;

            const dx = xi - xj;
            const dy = yi - yj;
            const distSq = dx * dx + dy * dy;

            if (distSq < minDistSqPx) {
              const dist = Math.sqrt(distSq) || 0.001;
              const overlap = minDistPx - dist;

              const nx = dx / dist;
              const ny = dy / dist;

              // push apart (convert back to vw/vh)
              const pushX = (nx * overlap) / 2;
              const pushY = (ny * overlap) / 2;

              bi.x += (pushX / w) * 100;
              bi.y += (pushY / h) * 100;
              bj.x -= (pushX / w) * 100;
              bj.y -= (pushY / h) * 100;

              // keep them inside borders after push
              bi.x = clamp(bi.x, minX, maxX);
              bi.y = clamp(bi.y, minY, maxY);
              bj.x = clamp(bj.x, minX, maxX);
              bj.y = clamp(bj.y, minY, maxY);

              // bounce (swap velocities)
              const tmpVx = bi.vx;
              const tmpVy = bi.vy;
              bi.vx = bj.vx;
              bi.vy = bj.vy;
              bj.vx = tmpVx;
              bj.vy = tmpVy;
            }
          }
        }

        return next;
      });

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [radiusPx]);

  return (
    <main className="min-h-screen bg-white">
      <IndexMenu fontFamily={MyFont.style.fontFamily} />

      {bubbles.map((b) => (
        <Bubble
          key={b.project.slug}
          bubble={b}
          fontFamily={MyFont.style.fontFamily}
          diameterPx={diameterPx}
          titleFontPx={titleFontPx}
        />
      ))}
    </main>
  );
}