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
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M4 4v15.5A2.5 2.5 0 0 1 6.5 22H20V5.5A2.5 2.5 0 0 0 17.5 3H6.5A2.5 2.5 0 0 0 4 5.5" />
              </svg>
            </div>
            <div className="cardBody">
              <div className="cardTitle">Premiere Pro: Advanced video editing techniques.</div>
              <div className="cardDesc">Master professional-level editing with Adobe Premiere Pro — learn advanced transitions, 
                color grading, sound design, motion graphics, and creative</div>
            </div>
          </div>

          <div className="card">
            <div className="iconRound">
              {/* layout/grid */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </svg>
            </div>
            <div className="cardBody">
              <div className="cardTitle">Photoshop: Create stunning visuals for branding.</div>
              <div className="cardDesc">Photoshop helps you edit photos, design layouts, and combine images and text to make your brand look professional and 
                memorable across social media, websites, and marketing materials.</div>
            </div>
          </div>

          <div className="card">
            <div className="iconRound">
              {/* code braces */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M7 8L3 12l4 4" />
                <path d="M17 8l4 4-4 4" />
                <path d="M14 4l-4 16" />
              </svg>
            </div>
            <div className="cardBody">
              <div className="cardTitle">Digital Marketing: Master SEO and social media strategies.</div>
              <div className="cardDesc">Digital Marketing teaches you how to attract customers, increase website traffic,
                 and build a strong online presence using SEO and social media tools.</div>
            </div>
          </div>

          <div className="card">
            <div className="iconRound">
              {/* check list */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M9 11l3 3L22 4" />
                <path d="M2 20h20" />
                <path d="M2 10h6" />
                <path d="M2 14h6" />
              </svg>
            </div>
            <div className="cardBody">
              <div className="cardTitle">Graphic Design: Learn typography and layout design.</div>
              <div className="cardDesc">Graphic Design teaches you how to use typography (the style and arrangement of text) and layout design (the placement of elements on a page or screen) to create 
                professional designs for posters, flyers, websites, and branding materials.</div>
            </div>
          </div>
        </div>

        {/* Right: Platform Experience */}
        <div className="col">
          <h3 className="sectionTitle">Platform Experience</h3>
          <p>Enjoy a user-friendly platform with an intuitive dashboard, featuring course access, progress tracking,
             payment options, leaderboards, and Skill Hub Nepal Bank for a seamless experience.</p>
        </div>
      </section>

      <div className="ctaWrap">
        <a href="/day3">
          <button className="ctaBlue">Proceed to Day 3</button>
        </a>
      </div>

      <style jsx>{`
        .page {
          --bg: #000000;
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
          margin: 26px auto 0;
          padding: 0 20px 24px;
          text-align: center;
        }
        .title {
          margin: 12px 0 10px;
          font-weight: 800;
          line-height: 1.15;
          font-size: clamp(28px, 5vw, 44px);
        }
        .white { color: #fff; }
        .highlight {
          background: linear-gradient(90deg, var(--accent-start), var(--accent-end));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .subtitle {
          margin: 6px auto 22px;
          color: #d1d1d6;
          opacity: 0.92;
          font-size: 14px;
          max-width: 720px;
        }

        /* TWO COLUMNS */
        .twoCols {
          max-width: 1100px;
          margin: 8px auto 28px;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }
        .sectionTitle {
          margin: 0 0 14px;
          font-weight: 800;
          font-size: 20px;
          background: linear-gradient(90deg, var(--accent-start), var(--accent-end));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        /* Curriculum cards (left) */
        .card {
          display: grid;
          grid-template-columns: 52px 1fr;
          gap: 16px;
          align-items: start;
          background: var(--card);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          padding: 16px 16px;
          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.04),
            0 14px 30px rgba(0, 0, 0, 0.45);
          margin-bottom: 14px;
        }
        .iconRound {
          width: 42px;
          height: 42px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          background: linear-gradient(180deg, #c084fc, #7c3aed);
          box-shadow: 0 10px 22px rgba(124, 58, 237, 0.35);
        }

        /* Platform feature cards (right) */
        .feature {
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: 14px;
          align-items: start;
          background: var(--card);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          padding: 16px 16px;
          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.04),
            0 14px 30px rgba(0, 0, 0, 0.45);
          margin-bottom: 14px;
        }
        .iconSquare {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: grid;
          place-items: center;
          background: linear-gradient(180deg, #60a5fa 0%, #2563eb 100%);
          box-shadow: 0 10px 22px rgba(59, 130, 246, 0.35);
        }

        .cardBody { text-align: left; }
        .cardTitle {
          color: #fff;
          font-weight: 800;
          margin-bottom: 6px;
        }
        .cardDesc {
          color: var(--muted);
          font-size: 13px;
          line-height: 1.55;
        }

        .ctaWrap {
          text-align: center;
          padding: 10px 20px 50px;
        }
        .ctaBlue {
          display: inline-block;
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
          .twoCols { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .menu a:nth-child(-n + 3) { display: none; }
          .title { font-size: 32px; }
        }
      `}</style>
    </main>
  );
}