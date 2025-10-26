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
          <span className="white">Day 2:</span>{" "}
          <span className="highlight">Courses & Platform Features</span>
        </h1>
        <p className="subtitle">
          Let&apos;s explore the course content and the features of our learning platform.
        </p>
      </section>
      <section className="twoCols">
        {/* Left: Course Curriculum */}
        <div className="col">
          <h3 className="sectionTitle">Course Curriculum</h3>
          <div className="card">
            <div className="iconRound">
              {/* book */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M4 4v15.5A2.5 2.5 0 0 1 6.5 22H20V5.5A2.5 2.5 0 0 0 17.5 3H6.5A2.5 2.5 0 0 0 4 5.5" />
              </svg>
            </div>
            <div className="cardBody">
              <div className="cardTitle">Module 1: Introduction to Web Development</div>
              <div className="cardDesc">Understanding the basics of HTML, CSS, and JavaScript.</div>
            </div>
          </div>
          <div className="card">
            <div className="iconRound">
              {/* layout/grid */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </svg>
            </div>
            <div className="cardBody">
              <div className="cardTitle">Module 2: Photoshop</div>
              <div className="cardDesc"> Create stunning visuals for branding.</div>
            </div>
          </div>
          <div className="card">
            <div className="iconRound">
              {/* code braces */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M7 8L3 12l4 4" />
                <path d="M17 8l4 4-4 4" />
                <path d="M14 4l-4 16" />
              </svg>
            </div>
            <div className="cardBody">
              <div className="cardTitle">Module 3: Digital Marketing</div>
              <div className="cardDesc">Master SEO and social media strategies.</div>
            </div>
          </div>

          <div className="card">
            <div className="iconRound">
              {/* check list */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M9 11l3 3L22 4" />
                <path d="M2 20h20" />
                <path d="M2 10h6" />
                <path d="M2 14h6" />
              </svg>
            </div>
            <div className="cardBody">
              <div className="cardTitle">Module 4: Graphic Design</div>
              <div className="cardDesc">Learn typography and layout design.</div>
            </div>
          </div>
        </div>

        {/* Right: Platform Experience */}
        <div className="col">
          <h3 className="sectionTitle">Platform Experience</h3>

          

          <div className="feature">
            <div className="iconSquare">
              {/* terminal/code */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M8 9l-4 3 4 3" />
                <path d="M12 17h8" />
                <rect x="3" y="4" width="18" height="16" rx="2" />
              </svg>
            </div>
            <div className="cardBody">
              <div className="cardDesc">Enjoy a user-friendly platform with an intuitive dashboard, featuring course access, progress tracking, payment options, leaderboards, and SRK Bank for a seamless experience.</div>
            </div>
          </div>

        </div>
      </section>

      <div className="ctaWrap">
        <button className="ctaBlue">Proceed to Day 3</button>
      </div>

      <style jsx>{`
        .page {
          --bg: #0b0b0f;
          --card: #181a2a;
          --panel: #23263a;
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
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .brand {
          font-weight: 800;
          font-size: 24px;
          color: var(--accent-start);
        }
        .menu {
          display: flex;
          align-items: center;
          gap: 30px;
        }
        .menu a {
          color: #e5e5e5;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          opacity: 0.95;
          transition: opacity 0.2s ease;
        }
        .menu a:hover {
          opacity: 1;
        }
        .login {
          margin-left: 8px;
          padding: 10px 16px;
          border: 0;
          border-radius: 10px;
          color: #fff;
          font-weight: 800;
          font-size: 16px;
          background: linear-gradient(135deg, var(--blue-start), var(--blue-end));
          box-shadow: 0 8px 22px rgba(37, 99, 235, 0.35);
          cursor: pointer;
        }

        /* HERO */
        .hero {
          max-width: 1100px;
          width: 100%;
          margin: 34px auto 0;
          padding: 0 24px 28px;
          text-align: center;
        }
        .title {
          margin: 14px 0 12px;
          font-weight: 800;
          line-height: 1.12;
          font-size: clamp(40px, 6.2vw, 64px);
        }
        .white { color: #fff; }
        .highlight {
          background: linear-gradient(90deg, var(--accent-start), var(--accent-end));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .subtitle {
          margin: 10px auto 26px;
          color: #d1d1d6;
          opacity: 0.98;
          font-size: 18px;
          line-height: 1.7;
          max-width: 820px;
        }

        /* TWO COLUMNS */
        .twoCols {
          max-width: 1100px;
          margin: 12px auto 34px;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
        }
        .sectionTitle {
          margin: 0 0 16px;
          font-weight: 800;
          font-size: 26px;
          line-height: 1.2;
          background: linear-gradient(90deg, var(--accent-start), var(--accent-end));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        /* Curriculum cards (left) */
        .card {
          display: grid;
          grid-template-columns: 64px 1fr;
          gap: 18px;
          align-items: start;
          background: var(--card);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 14px;
          padding: 20px 20px;
          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.04),
            0 16px 34px rgba(0, 0, 0, 0.5);
          margin-bottom: 18px;
        }
        .iconRound {
          width: 56px;
          height: 56px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          background: linear-gradient(180deg, #c084fc, #7c3aed);
          box-shadow: 0 14px 26px rgba(124, 58, 237, 0.35);
        }

        /* Platform feature cards (right) */
        .feature {
          display: grid;
          grid-template-columns: 60px 1fr;
          gap: 16px;
          align-items: start;
          background: var(--card);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 14px;
          padding: 20px 20px;
          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.04),
            0 16px 34px rgba(0, 0, 0, 0.5);
          margin-bottom: 16px;
        }
        .iconSquare {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          background: linear-gradient(180deg, #60a5fa 0%, #2563eb 100%);
          box-shadow: 0 14px 26px rgba(59, 130, 246, 0.35);
        }

        .cardBody { text-align: left; }
        .cardTitle {
          color: #fff;
          font-weight: 800;
          font-size: 20px;
          margin-bottom: 8px;
        }
        .cardDesc {
          color: var(--muted);
          font-size: 16px;
          line-height: 1.65;
        }

        .ctaWrap {
          text-align: center;
          padding: 14px 24px 60px;
        }
        .ctaBlue {
          display: inline-block;
          padding: 16px 28px;
          border-radius: 999px;
          border: 0;
          font-weight: 800;
          font-size: 18px;
          color: #fff;
          background: linear-gradient(90deg, var(--blue-start), var(--blue-end));
          box-shadow: 0 12px 30px rgba(37, 99, 235, 0.45);
          cursor: pointer;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .twoCols { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .menu a:nth-child(-n + 3) { display: none; }
          .brand { font-size: 20px; }
          .title { font-size: 40px; }
          .subtitle { font-size: 16px; }
        }
      `}</style>
    </main>
  );
}