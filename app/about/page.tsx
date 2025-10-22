'use client';

import React from 'react';

export default function Page() {
  return (
    <main className="page">
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1 className="heroTitle">
            Empowering the Next Generation
            <br />
            of Digital Leaders
          </h1>
          <p className="heroSub">
            We are a dedicated team of digital marketing experts and educators passionate
            about bridging the gap between ambition and opportunity for students across
            Nepal.
          </p>
        </div>
      </section>



      {/* Our Story */}
      <section className="story">
        <div className="container grid2">
          <div className="storyText">
            <h2>Our Story</h2>
            <p>
              Skill Hub Nepal was founded with a simple yet powerful belief: every student
              deserves access to high‑quality, practical education that leads to a real
              career outcome. We are on a mission to make industry‑relevant learning
              accessible, affordable, and effective — designed by practitioners and loved by
              learners.
            </p>
          </div>

          <div className="storyCard">
            <div className="storyCardInner">
              <CapIcon />
            </div>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="values">
        <div className="container">
          <h3 className="valuesTitle">Our Core Values</h3>
          <p className="valuesSub">
            These principles guide everything we do, from curriculum design to student
            support, ensuring we deliver an education that truly matters.
          </p>

          <div className="valueGrid">
            <div className="valueCard">
              <div className="iconCircle">
                <BriefcaseIcon />
              </div>
              <div className="valueLabel">Career‑Focused</div>
            </div>

            <div className="valueCard">
              <div className="iconCircle">
                <UsersIcon />
              </div>
              <div className="valueLabel">Practical Skills</div>
            </div>

            <div className="valueCard">
              <div className="iconCircle">
                <StarIcon />
              </div>
              <div className="valueLabel">Student Success</div>
            </div>
          </div>
        </div>
      </section>

      {/* Global base */}
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          background: #f5f8fc; /* light page background */
          color: #0f172a; /* slate-900 */
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
            Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }
      `}</style>

      {/* Page styles */}
      <style jsx>{`
        :root {
          --bg: #f5f8fc;
          --card: #ffffff;
          --ink: #0f172a;
          --muted: #64748b;
          --border: #e5e7eb;
          --brand: #2563eb; /* blue */
          --brand-2: #1d4ed8;
          --accent: #7c3aed; /* purple underline for active link */
          --soft-blue: #eaf2ff;
        }

        .page {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .container {
          width: min(1120px, 92vw);
          margin: 0 auto;
        }

        /* Hero */
        .hero {
          padding: 64px 0 56px;
          background: linear-gradient(180deg, #171717 0%, transparent 60%);
        }
        .heroTitle {
          margin: 0;
          text-align: center;
          font-size: clamp(32px, 5.6vw, 64px);
          line-height: 1.05;
          font-weight: 900;
          color: var(--ink);
          letter-spacing: 0.2px;
        }
        .heroSub {
          margin: 16px auto 0;
          max-width: 760px;
          text-align: center;
          color: var(--muted);
          font-size: clamp(14px, 1.5vw, 18px);
          line-height: 1.7;
        }

        /* Floating nav (pill) */
        .navWrap {
          transform: translateY(-28px); /* float over the divider like screenshot */
        }
        .floatingNav {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 16px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 10px 14px;
          box-shadow: 0 14px 36px rgba(2, 8, 23, 0.08);
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 8px;
          padding-left: 4px;
          font-weight: 800;
          color: var(--brand);
          white-space: nowrap;
        }
        .brand img {
          height: 26px;
          width: 26px;
          object-fit: contain;
          border-radius: 6px;
        }
        .menu {
          display: flex;
          justify-content: center;
          gap: clamp(12px, 4vw, 32px);
        }
        .menu a {
          position: relative;
          color: #0f172a;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          padding: 8px 6px;
          opacity: 0.85;
        }
        .menu a:hover {
          opacity: 1;
        }
        .menu a.active::after {
          content: "";
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: -6px;
          width: 38px;
          height: 3px;
          border-radius: 999px;
          background: var(--accent);
        }
        .actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .btn {
          border: 0;
          padding: 8px 14px;
          font-weight: 700;
          border-radius: 999px;
          cursor: pointer;
          font-size: 14px;
        }
        .btn.ghost {
          background: #f1f5f9;
          color: #0f172a;
        }
        .btn.primary {
          background: linear-gradient(90deg, var(--brand), var(--brand-2));
          color: #fff;
          box-shadow: 0 10px 22px rgba(37, 99, 235, 0.25);
        }

        /* Our Story */
        .story {
          padding: 18px 0 56px;
          background: #fff; /* white section under the pill nav */
        }
        .grid2 {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 28px;
          align-items: center;
        }
        .storyText h2 {
          margin: 0 0 10px;
          font-size: clamp(22px, 3vw, 28px);
          font-weight: 800;
          color: var(--ink);
        }
        .storyText p {
          margin: 0;
          color: #334155;
          line-height: 1.75;
          font-size: 15px;
          max-width: 640px;
        }
        .storyCard {
          background: var(--soft-blue);
          border: 1px solid #dbeafe;
          border-radius: 18px;
          padding: 18px;
        }
        .storyCardInner {
          height: clamp(180px, 24vw, 240px);
          border-radius: 14px;
          background: #f1f7ff;
          border: 1px dashed #cbdcfb;
          display: grid;
          place-items: center;
        }

        /* Core values */
        .values {
          padding: 56px 0 90px;
          background: var(--bg);
        }
        .valuesTitle {
          margin: 0;
          text-align: center;
          font-size: clamp(22px, 3.4vw, 30px);
          font-weight: 800;
          color: var(--ink);
        }
        .valuesSub {
          margin: 10px auto 26px;
          max-width: 760px;
          text-align: center;
          color: var(--muted);
          line-height: 1.7;
          font-size: 15px;
        }
        .valueGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }
        .valueCard {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 28px 22px;
          display: grid;
          place-items: center;
          gap: 12px;
          box-shadow: 0 1px 0 rgba(15, 23, 42, 0.04), 0 12px 28px rgba(2, 8, 23, 0.05);
        }
        .iconCircle {
          width: 54px;
          height: 54px;
          border-radius: 999px;
          background: #e6f0ff;
          display: grid;
          place-items: center;
          color: #2563eb;
        }
        .valueLabel {
          font-weight: 700;
          color: #0f172a;
        }

        /* Responsive */
        @media (max-width: 980px) {
          .grid2 {
            grid-template-columns: 1fr;
          }
          .menu {
            display: none; /* collapse center links on small screens (simpler) */
          }
        }
        @media (max-width: 720px) {
          .valueGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}

/* --------- Tiny inline icons (no deps) --------- */

function CapIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#2563eb' }} aria-hidden>
      <path d="M12 3L1 8l11 5 9-4.09V17h2V8L12 3z" />
      <path d="M11 12.84L5 10v4c0 1.1 3.58 2 8 2s8-.9 8-2v-4l-6 2.84a5.9 5.9 0 01-4 0z" opacity=".25" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M10 3h4a2 2 0 012 2v1h3a3 3 0 013 3v9a3 3 0 01-3 3H5a3 3 0 01-3-3V9a3 3 0 013-3h3V5a2 2 0 012-2zm0 3h4V5h-4v1z" />
      <path d="M2 12h20v2H2z" opacity=".25" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <circle cx="9" cy="8" r="4" />
      <path d="M17 11a3 3 0 100-6 3 3 0 000 6z" opacity=".35" />
      <path d="M1 21a8 8 0 0116 0H1z" />
      <path d="M15 18a6 6 0 016 3H15z" opacity=".35" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2l2.9 6.1L22 9.3l-5 4.9 1.2 6.8L12 17.8l-6.2 3.2L7 14.2 2 9.3l7.1-1.2L12 2z" />
    </svg>
  );
}