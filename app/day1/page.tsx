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
        <h2 className="visionHeading">What is Skill Hub Nepal?</h2>
        <p className="visionBody">
          Skill Hub Nepal is revolutionizing the way individuals enhance their professional qualifications by offering a diverse range of upskilling opportunities. As a leading e-commerce platform, Skill Hub Nepal connects learners with high-demand skills that are essential in today’s competitive job market. By focusing on high-paying skill areas, Skill Hub Nepal 
          empowers individuals to increase their earning potential and advance their careers.
        </p>
      </section>

      <section className="benefits">
        <h3 className="benefitsHeading">OUR MISSION AND VISION</h3>

        <section className="vision">
        <h2 className="visionHeading">COMPANY MISSION</h2>
        <p className="visionBody">
          At Skill Hub Nepal, we are dedicated to empowering individuals by offering a wide range of online learning opportunities that enhance digital skills. Our affiliate marketing program allows participants to earn commissions, providing them with a sustainable income while they learn and grow. We strive to create a positive working environment that fosters 
          collaboration, creativity, and mutual support among learners and mentors.
        </p>
      </section>

      <section className="vision">
        <h2 className="visionHeading">COMPANY VISION</h2>
        <p className="visionBody">
          At Skill Hub Nepal, our vision is to establish ourselves as a global leader in online earning and affiliate marketing. We aim to create a transformative platform that empowers individuals to enhance their skills and achieve financial independence. Our commitment is to provide resources and support that enable users to succeed in their online endeavors. Through our platform, we seek 
          to foster a community that encourages personal growth and collaboration among members.
        </p>
      </section>

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