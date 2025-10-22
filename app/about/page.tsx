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
          background: #f5f8fc;
          color: #0f172a;
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
          --brand: #2563eb;
          --brand-2: #1d4ed8;
          --accent: #7c3aed;
          --soft-blue: #eaf2ff;
        }

        .page {
          display: flex;
          flex-direction: column;
          gap: clamp(16px, 3vw, 24px);
        }

        .container {
          width: min(1120px, 92vw);
          margin: 0 auto;
        }

        /* Hero */
        .hero {
          padding: clamp(40px, 8vw, 80px) 0 clamp(36px, 6vw, 64px);
          background: linear-gradient(180deg, #f7fbff 0%, transparent 60%);
        }
        .heroTitle {
          margin: 0;
          text-align: center;
          font-size: clamp(28px, 6vw, 64px);
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
          font-size: clamp(14px, 2.2vw, 18px);
          line-height: 1.7;
        }

        /* Our Story */
        .story {
          padding: clamp(18px, 4vw, 24px) 0 clamp(40px, 8vw, 64px);
          background: #fff;
        }
        .grid2 {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
          gap: clamp(16px, 4vw, 28px);
          align-items: center;
        }
        .storyText h2 {
          margin: 0 0 10px;
          font-size: clamp(20px, 3.4vw, 28px);
          font-weight: 800;
          color: var(--ink);
        }
        .storyText p {
          margin: 0;
          color: #334155;
          line-height: 1.75;
          font-size: clamp(14px, 1.6vw, 15.5px);
          max-width: 640px;
        }
        .storyCard {
          background: var(--soft-blue);
          border: 1px solid #dbeafe;
          border-radius: 18px;
          padding: clamp(12px, 2.4vw, 18px);
        }
        .storyCardInner {
          height: clamp(160px, 26vw, 240px);
          border-radius: 14px;
          background: #f1f7ff;
          border: 1px dashed #cbdcfb;
          display: grid;
          place-items: center;
        }

        /* Core values */
        .values {
          padding: clamp(40px, 8vw, 90px) 0;
          background: var(--bg);
        }
        .valuesTitle {
          margin: 0;
          text-align: center;
          font-size: clamp(20px, 3.4vw, 30px);
          font-weight: 800;
          color: var(--ink);
        }
        .valuesSub {
          margin: 10px auto 26px;
          max-width: 760px;
          text-align: center;
          color: var(--muted);
          line-height: 1.7;
          font-size: clamp(14px, 1.8vw, 15.5px);
        }
        .valueGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 22px;
        }
        .valueCard {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: clamp(20px, 3vw, 28px);
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
          color: var(--ink);
          text-align: center;
        }

        /* Breakpoints */
        @media (max-width: 980px) {
          .grid2 {
            grid-template-columns: 1fr;
          }
          .storyText {
            text-align: center;
          }
          .storyText p {
            margin: 0 auto;
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