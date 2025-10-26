// app/page.tsx
"use client";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export default function Page() {
  return (
    <main className={`page ${poppins.className}`}>
      <section className="hero">
        <h1 className="title">
          <span className="uni">The Skill Hub Nepal:</span>
          <br />
          <span className="journey">5–Day Learning Journey</span>
        </h1>

        <p className="subtitle">
          Join The Skill Hub Nepal 5-day program to master creative skills like
          Premiere Pro, Photoshop, and Digital Marketing. Discover our
          innovative platform, earn through affiliate marketing, and build a
          strong personal brand to achieve your goals.
        </p>

        <a href="/day1" className="cta">Begin Day 1</a>
      </section>

      <style jsx>{`
        .page {
          --bg: #07090f;
          --text: #ffffff;
          --muted: #c9d1e5;
          --purple: #8b5cf6;
          --blue: #3b82f6;

          min-height: 100dvh;
          background: var(--bg);
          color: var(--text);
          display: grid;
          place-items: center;
          position: relative;
          overflow: hidden;
          padding: 6rem 1.25rem;
          isolation: isolate; /* keep glows behind */
        }

        /* Big background glows */
        .page::before,
        .page::after {
          content: "";
          position: fixed;
          width: 65vw;
          height: 65vw;
          border-radius: 9999px;
          filter: blur(90px);
          opacity: 0.55;
          z-index: -1;
          pointer-events: none;
        }
        .page::before {
          top: -25vw;
          left: -25vw;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(139, 92, 246, 0.85) 0%,
            rgba(139, 92, 246, 0) 65%
          );
          animation: floaty 12s ease-in-out infinite;
        }
        .page::after {
          top: -30vw;
          right: -30vw;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(59, 130, 246, 0.9) 0%,
            rgba(59, 130, 246, 0) 65%
          );
          animation: floaty 12s ease-in-out infinite reverse;
        }

        .hero::before {
          /* bottom-left soft glow */
          content: "";
          position: absolute;
          bottom: -35vw;
          left: 10vw;
          width: 80vw;
          height: 80vw;
          border-radius: 9999px;
          filter: blur(100px);
          opacity: 0.45;
          z-index: -1;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(86, 79, 191, 0.7) 0%,
            rgba(86, 79, 191, 0) 60%
          );
          pointer-events: none;
          animation: floaty 14s ease-in-out infinite;
        }

        .hero {
          width: min(1100px, 100%);
          margin: 0 auto;
          text-align: center;
        }

        .title {
          margin: 0 0 10px;
          line-height: 1.05;
          letter-spacing: -0.01em;
        }
        .uni {
          display: inline-block;
          font-weight: 800;
          font-size: clamp(2rem, 4.5vw, 4rem);
          background: linear-gradient(90deg, var(--purple), var(--blue));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .journey {
          display: inline-block;
          font-weight: 800;
          font-size: clamp(2.5rem, 6.5vw, 5rem);
          color: #fff;
          text-shadow: 0 0 1px rgba(255, 255, 255, 0.2);
        }

        .subtitle {
          width: min(820px, 100%);
          margin: 16px auto 30px;
          color: var(--muted);
          font-weight: 500;
          font-size: clamp(1rem, 0.6vw + 0.9rem, 1.2rem);
          line-height: 1.6;
        }

        .cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 56px;
          padding: 0 26px;
          border-radius: 999px;
          font-weight: 800;
          color: #fff;
          text-decoration: none;
          background: linear-gradient(135deg, var(--purple), var(--blue));
          box-shadow: 0 10px 30px rgba(66, 99, 255, 0.35),
            inset 0 0 0 1px rgba(255, 255, 255, 0.12);
          transition: transform 0.2s ease, filter 0.2s ease;
        }
        .cta:hover {
          transform: translateY(-2px);
          filter: brightness(1.05);
        }
        .cta:active {
          transform: translateY(0);
        }
        .cta:focus-visible {
          outline: 3px solid rgba(99, 102, 241, 0.85);
          outline-offset: 3px;
        }

        @keyframes floaty {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-1.5%) scale(1.03);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .page::before,
          .page::after,
          .hero::before {
            animation: none;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          background: #07090f; /* prevents white edges on very tall pages */
        }
      `}</style>
    </main>
  );
}