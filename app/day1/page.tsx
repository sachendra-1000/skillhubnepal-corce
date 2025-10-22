"use client";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export default function Page() {
  return (
    <main className={`page ${poppins.className}`}>
       

      <section className="hero">
        <h1 className="title">
          <span className="white">Day 1:</span>{" "}
          <span className="highlight">The Foundation</span>
        </h1>
        <p className="subtitle">
          Welcome to the first step of your transformative learning journey.
          Today, we lay the groundwork for success.
        </p>
      </section>

      <section className="vision">
        <h2 className="visionHeading">Our Vision</h2>
        <p className="visionBody">
          To empower every Nepali with practical, job-ready skills through accessible and 
          innovative learning experiences, building a skilled
          workforce that drives Nepal’s growth, innovation, and global competitiveness.
        </p>
      </section>

      <section className="benefits">
        <h3 className="benefitsHeading">Learner Benefits</h3>

        <div className="benefitGrid">
          <article className="benefitCard">
            <div className="benefitIcon">
              {/* Pin icon */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="cardTitle">Clarity &amp; Focus</div>
            <p className="cardDesc">
              Gain a crystal-clear understanding of the core concepts from day
              one, setting a strong foundation for the days to come.
            </p>
          </article>

          <article className="benefitCard">
            <div className="benefitIcon">
              {/* Users icon */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="cardTitle">Community &amp; Connection</div>
            <p className="cardDesc">
              Connect with a community of like‑minded learners, fostering
              collaboration and shared growth throughout the journey.
            </p>
          </article>

          <article className="benefitCard">
            <div className="benefitIcon">
              {/* Zap (momentum) icon */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <div className="cardTitle">Immediate Momentum</div>
            <p className="cardDesc">
              Build immediate momentum and motivation that will propel you
              through the entire 5‑day course and beyond.
            </p>
          </article>
        </div>

        <a href="/day2">
          <button className="ctaBlue">Proceed to Day 2</button>
        </a>
      </section>

      <style jsx>{`
        .page {
          --bg: #0b0b0f;
          --panel: #23263a;
          --card: #181a2a;
          --text: #ffffff;
          --muted: #a1a1aa;
          --accent-start: #a855f7;
          --accent-end: #7c3aed;
          --blue-start: #3b82f6;
          --blue-end: #2563eb;

          min-height: 100dvh;
          background: var(--bg);
          color: var(--text);
          display: flex;
          flex-direction: column;
        }

        /* NAV */
        .nav {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .brand {
          font-weight: 800;
          font-size: 18px;
          color: var(--accent-start);
        }
        .menu {
          display: flex;
          align-items: center;
          gap: 26px;
        }
        .menu a {
          color: #e5e5e5;
          text-decoration: none;
          font-weight: 500;
          opacity: 0.9;
          transition: opacity 0.2s ease;
        }
        .menu a:hover {
          opacity: 1;
        }
        .login {
          margin-left: 6px;
          padding: 8px 14px;
          border: 0;
          border-radius: 8px;
          color: #fff;
          font-weight: 700;
          background: linear-gradient(135deg, var(--blue-start), var(--blue-end));
          box-shadow: 0 6px 18px rgba(37, 99, 235, 0.35);
          cursor: pointer;
        }

        /* HERO */
        .hero {
          max-width: 1100px;
          width: 100%;
          margin: 32px auto 0;
          padding: 0 20px 40px;
          text-align: center;
        }
        .title {
          margin: 18px 0 10px;
          font-weight: 800;
          line-height: 1.15;
          font-size: clamp(28px, 5vw, 44px);
        }
        .white {
          color: #fff;
        }
        .highlight {
          background: linear-gradient(90deg, var(--accent-start), var(--accent-end));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .subtitle {
          margin: 8px auto 26px;
          color: #d1d1d6;
          opacity: 0.92;
          font-size: 14px;
          max-width: 720px;
        }

        /* VISION PANEL */
        .vision {
          max-width: 1100px;
          width: 100%;
          margin: 0 auto;
          padding: 0 20px;
        }
        .vision {
          background: var(--panel);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
          padding: 22px 20px 26px;
          text-align: center;
        }
        .visionHeading {
          margin: 4px 0 10px;
          font-weight: 800;
          font-size: 20px;
          background: linear-gradient(90deg, var(--accent-start), var(--accent-end));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .visionBody {
          margin: 0 auto;
          max-width: 900px;
          color: #e9e9ee;
          opacity: 0.9;
          font-size: 14px;
          line-height: 1.6;
        }

        /* BENEFITS */
        .benefits {
          max-width: 1100px;
          width: 100%;
          margin: 36px auto 80px;
          padding: 0 20px;
          text-align: center;
        }
        .benefitsHeading {
          margin: 6px 0 22px;
          font-weight: 800;
          font-size: 20px;
          background: linear-gradient(90deg, var(--accent-start), var(--accent-end));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .benefitGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
          margin-bottom: 26px;
        }
        .benefitCard {
          position: relative;
          background: var(--card);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          padding: 28px 22px 22px;
          text-align: left;
          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.04),
            0 14px 30px rgba(0, 0, 0, 0.45);
        }
        .benefitIcon {
          width: 44px;
          height: 44px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          margin: 0 0 14px;
          background: linear-gradient(180deg, #c084fc, #7c3aed);
          box-shadow: 0 10px 22px rgba(124, 58, 237, 0.35);
        }
        .cardTitle {
          color: #fff;
          font-weight: 800;
          margin-bottom: 8px;
        }
        .cardDesc {
          color: var(--muted);
          font-size: 13px;
          line-height: 1.6;
        }

        .ctaBlue {
          display: inline-block;
          margin-top: 6px;
          padding: 12px 22px;
          border-radius: 999px;
          border: 0;
          font-weight: 800;
          color: #fff;
          background: linear-gradient(90deg, var(--blue-start), var(--blue-end));
          box-shadow: 0 10px 26px rgba(37, 99, 235, 0.4);
          cursor: pointer;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .benefitGrid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 640px) {
          .menu a:nth-child(-n + 3) {
            display: none;
          }
          .benefitGrid {
            grid-template-columns: 1fr;
          }
          .title {
            font-size: 32px;
          }
        }
      `}</style>
    </main>
  );
}