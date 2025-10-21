"use client";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export default function Page() {
  return (
    <main className={`page ${poppins.className}`}>
      <header className="nav" style={{ height: 90 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src="/images/srk-logo.png" className="brand" style={{ height: 70 }} />
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 22 }}>Skill Hub Nepal</span>
        </div>
        <nav className="menu">
          <a href="#">Home</a>
          
          <a href="#">About</a>
          
        </nav>
      </header>

      <section className="hero">
        <h1 className="title">
          <span className="welcome">Welcome to the</span>
          <br />
          <span className="highlight">5-Day Learning Journey</span>
        </h1>

        <p className="subtitle">
          Embark on a transformative journey to master new skills and unlock your potential.
        </p>

        <a href="/day1" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="day-one">Day 1</div>
        </a>

        <div className="cards">
          <article className="card">
            <div className="badge">2</div>
            <div className="card-title">
              <a href="/day2" style={{ color: "inherit", textDecoration: "none" }}>Day 2</a>
            </div>
            <div className="card-desc">Unlock Course Content</div>
          </article>

          <article className="card">
            <div className="badge">3</div>
            <div className="card-title">
              <a href="/day3" style={{ color: "inherit", textDecoration: "none" }}>Day 3</a>
            </div>
            <div className="card-desc">Live Q&amp;A Session</div>
          </article>

          <article className="card">
            <div className="badge">4</div>
            <div className="card-title">
              <a href="/day4" style={{ color: "inherit", textDecoration: "none" }}>Day 4</a>
            </div>
            <div className="card-desc">Practical Assignment</div>
          </article>

          <article className="card">
            <div className="badge">5</div>
            <div className="card-title">
              <a href="/day5" style={{ color: "inherit", textDecoration: "none" }}>Day 5</a>
            </div>
            <div className="card-desc">Get Certified</div>
          </article>
        </div>

        <a href="/day1" className="cta">Let&apos;s Start Learning</a>
      </section>

      <style jsx>{`
        .page {
          --bg: #0b0b0f;
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
          letter-spacing: 0.2px;
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
          margin: 28px auto 0;
          padding: 0 20px 70px;
          text-align: center;
        }
        .title {
          margin: 34px 0 10px;
          font-weight: 800;
          line-height: 1.15;
          font-size: clamp(28px, 5vw, 44px);
        }
        .welcome {
          color: #ffffff;
        }
        .highlight {
          background: linear-gradient(90deg, var(--accent-start), var(--accent-end));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .subtitle {
          margin: 10px auto 26px;
          color: var(--muted);
          font-size: 14px;
          max-width: 650px;
        }

        /* DAY 1 CIRCLE */
        .day-one {
          width: 120px;
          height: 120px;
          margin: 28px auto 30px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          font-weight: 800;
          font-size: 20px;
          color: #fff;
          background: radial-gradient(
              75% 75% at 30% 25%,
              #c4b5fd 0%,
              #a78bfa 35%,
              #8b5cf6 60%,
              #6d28d9 100%
            )
            no-repeat;
          box-shadow: 0 12px 28px rgba(139, 92, 246, 0.45),
            inset 0 -10px 18px rgba(0, 0, 0, 0.35);
        }

        /* CARDS */
        .cards {
          margin: 8px auto 34px;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 22px;
          max-width: 1100px;
        }
        .card {
          position: relative;
          background: var(--card);
          border: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.04),
            0 14px 30px rgba(0, 0, 0, 0.45);
          border-radius: 12px;
          padding: 28px 20px 24px;
          text-align: center;
          min-height: 140px;
        }
        .badge {
          position: absolute;
          top: -18px;
          left: 50%;
          transform: translateX(-50%);
          width: 52px;
          height: 52px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          font-weight: 800;
          background: linear-gradient(
            180deg,
            #60a5fa 0%,
            #3b82f6 45%,
            #7c3aed 100%
          );
          color: #ffffff;
          box-shadow: 0 10px 22px rgba(59, 130, 246, 0.35);
        }
        .card-title {
          margin-top: 32px;
          font-weight: 700;
          font-size: 18px;
        }
        .card-desc {
          margin-top: 8px;
          color: var(--muted);
          font-size: 13px;
        }

        /* CTA */
        .cta {
          margin-top: 10px;
          padding: 12px 22px;
          border-radius: 999px;
          border: 0;
          font-weight: 800;
          color: #fff;
          background: linear-gradient(90deg, var(--accent-start), var(--accent-end));
          box-shadow: 0 10px 26px rgba(124, 58, 237, 0.45);
          cursor: pointer;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .cards {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 560px) {
          .menu a:nth-child(-n + 3) {
            display: none;
          }
          .title {
            font-size: 32px;
          }
          .cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}