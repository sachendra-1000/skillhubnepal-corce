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
          --bg: #0a0a0f;
          --card: #1a1d2e;
          --text: #ffffff;
          --muted: #94a3b8;
          --accent-start: #06b6d4;
          --accent-end: #0891b2;
          --secondary-start: #10b981;
          --secondary-end: #059669;

          min-height: 100dvh;
          background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%);
          color: var(--text);
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .page::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.05) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.05) 0%, transparent 50%);
          pointer-events: none;
          z-index: 0;
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
          background: rgba(26, 29, 46, 0.4);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
          position: relative;
          z-index: 10;
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
          transition: all 0.3s ease;
          padding: 8px 16px;
          border-radius: 8px;
          position: relative;
        }
        .menu a:hover {
          opacity: 1;
          background: rgba(6, 182, 212, 0.1);
          color: var(--accent-start);
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
          margin: 60px auto 0;
          padding: 0 20px 70px;
          text-align: center;
          position: relative;
          z-index: 1;
        }
        .title {
          margin: 34px 0 10px;
          font-weight: 800;
          line-height: 1.2;
          font-size: clamp(32px, 6vw, 56px);
          letter-spacing: -0.02em;
        }
        .welcome {
          color: #ffffff;
        }
        .highlight {
          background: linear-gradient(135deg, var(--accent-start), var(--secondary-start));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline-block;
        }
        .subtitle {
          margin: 20px auto 40px;
          color: var(--muted);
          font-size: 16px;
          max-width: 650px;
          line-height: 1.6;
        }

        /* DAY 1 CIRCLE */
        .day-one {
          width: 140px;
          height: 140px;
          margin: 40px auto 50px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          font-weight: 800;
          font-size: 24px;
          color: #fff;
          background: linear-gradient(135deg, var(--accent-start), var(--secondary-start));
          box-shadow: 0 20px 40px rgba(6, 182, 212, 0.3),
            0 0 60px rgba(16, 185, 129, 0.2),
            inset 0 -8px 16px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .day-one:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 25px 50px rgba(6, 182, 212, 0.4),
            0 0 80px rgba(16, 185, 129, 0.3);
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
          background: rgba(26, 29, 46, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1),
            0 10px 30px rgba(0, 0, 0, 0.3);
          border-radius: 16px;
          padding: 28px 20px 24px;
          text-align: center;
          min-height: 140px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .card:hover {
          transform: translateY(-8px);
          border-color: rgba(6, 182, 212, 0.3);
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15),
            0 20px 40px rgba(6, 182, 212, 0.2);
        }
        .badge {
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 56px;
          height: 56px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          font-weight: 800;
          font-size: 18px;
          background: linear-gradient(135deg, var(--accent-start), var(--secondary-start));
          color: #ffffff;
          box-shadow: 0 12px 24px rgba(6, 182, 212, 0.4);
          transition: all 0.3s ease;
        }
        .card:hover .badge {
          transform: translateX(-50%) scale(1.1);
          box-shadow: 0 16px 32px rgba(6, 182, 212, 0.5);
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
          display: inline-block;
          margin-top: 20px;
          padding: 16px 40px;
          border-radius: 999px;
          border: 0;
          font-weight: 700;
          font-size: 16px;
          color: #fff;
          text-decoration: none;
          background: linear-gradient(135deg, var(--accent-start), var(--secondary-start));
          box-shadow: 0 10px 30px rgba(6, 182, 212, 0.4);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(6, 182, 212, 0.5);
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