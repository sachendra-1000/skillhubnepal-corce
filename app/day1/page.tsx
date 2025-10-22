"use client";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export default function Page() {
  return (
    <main className={`page ${poppins.className}`}>
      {/* Hero */}
      <section className="hero">
        <h1 className="title">
          <span className="white">Day 1:</span>{" "}
          <span className="highlight">The Foundation</span>
        </h1>
        <p className="subtitle">
          Welcome to the first step of your transformative learning journey. Today, we lay
          the groundwork for success.
        </p>
      </section>

      {/* What is Skill Hub Nepal */}
      <section className="vision">
        <h2 className="visionHeading">What is Skill Hub Nepal?</h2>
        <p className="visionBody">
          Skill Hub Nepal is revolutionizing the way individuals enhance their professional
          qualifications by offering a diverse range of upskilling opportunities. As a leading
          e-commerce platform, Skill Hub Nepal connects learners with high-demand skills that are
          essential in today’s competitive job market. By focusing on high-paying skill areas,
          Skill Hub Nepal empowers individuals to increase their earning potential and advance
          their careers.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="benefits">
        <h3 className="benefitsHeading">OUR MISSION AND VISION</h3>

        <section className="vision">
          <h2 className="visionHeading">COMPANY MISSION</h2>
          <p className="visionBody">
            At Skill Hub Nepal, we are dedicated to empowering individuals by offering a wide
            range of online learning opportunities that enhance digital skills. Our affiliate
            marketing program allows participants to earn commissions, providing them with a
            sustainable income while they learn and grow. We strive to create a positive working
            environment that fosters collaboration, creativity, and mutual support among learners
            and mentors.
          </p>
        </section>

        <section className="vision" style={{ marginTop: 16 }}>
          <h2 className="visionHeading">COMPANY VISION</h2>
          <p className="visionBody">
            At Skill Hub Nepal, our vision is to establish ourselves as a global leader in online
            earning and affiliate marketing. We aim to create a transformative platform that
            empowers individuals to enhance their skills and achieve financial independence. Our
            commitment is to provide resources and support that enable users to succeed in their
            online endeavors. Through our platform, we seek to foster a community that encourages
            personal growth and collaboration among members.
          </p>
        </section>
      </section>

      {/* Founder section */}
      <section className="founderCard">
        <h2 className="founderTitle">MEET OUR FOUNDER</h2>

        <div className="founderContent">
          <div className="left">
            <div className="portrait">
              <img src="/images/founder.jpg" alt="Founder portrait" />
            </div>

            <div className="tags">
              <div className="namePlate">Mr. Manish Thapa Magar</div>
              <div className="rolePlate">Founder & CEO</div>
            </div>
          </div>

          <div className="right">
            <p className="blurb">
              Manish Thapa Magar, the founder and CEO of Skill Hub Nepal, has instilled a shared
              vision and strong business ethics within the company. His primary goal is to equip
              team members with essential digital skills, fostering a belief in the transformative
              power of education. Under his dedicated leadership, Skill Hub Nepal has positioned
              itself at the forefront of the education industry in Nepal. The organization has
              emerged as a beacon of quality education, inspiring hope among countless learners
              across the country. Through his unwavering commitment, Manish sir has truly made
              Skill Hub Nepal a symbol of educational excellence and opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="ctaWrap">
        <a href="/day2">
          <button className="ctaBlue">Proceed to Day 2</button>
        </a>
      </div>

      {/* Global base */}
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          background: #000; /* black */
          color: #fff;      /* white text */
        }
      `}</style>

      {/* Styles */}
      <style jsx>{`
        .page {
          /* Unified with the "upper" palette */
          --bg: #000000;   /* black */
          --text: #ffffff; /* white */
          --panel: #23263a;
          --card: #181a2a;
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
          align-items: center;
          padding: 24px 16px 64px;
          gap: 24px;
        }

        /* Hero */
        .hero {
          max-width: 1100px;
          width: 100%;
          text-align: center;
        }
        .title {
          margin: 18px 0 10px;
          font-weight: 800;
          line-height: 1.15;
          font-size: clamp(28px, 5vw, 44px);
        }
        .white {
          color: var(--text);
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

        /* Vision panel */
        .vision {
          max-width: 1100px;
          width: 100%;
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

        /* Mission/Vision container */
        .benefits {
          max-width: 1100px;
          width: 100%;
          text-align: center;
        }
        .benefitsHeading {
          margin: 6px 0 12px;
          font-weight: 800;
          font-size: 20px;
          background: linear-gradient(90deg, var(--accent-start), var(--accent-end));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        /* Founder card */
        .founderCard {
          width: clamp(320px, 94vw, 1100px);
          border-radius: 14px;
          background: #0d2fe0; /* royal blue */
          border: 4px solid #ffffff;
          padding: 22px 20px 26px;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.55);
        }
        .founderTitle {
          margin: 6px 0 14px;
          text-align: center;
          color: #ffeb3b;
          font-size: clamp(26px, 4.6vw, 48px);
          font-weight: 900;
          letter-spacing: 1px;
          text-transform: uppercase;
          text-decoration-line: underline;
          text-decoration-color: #ffffff;
          text-underline-offset: 6px;
          text-decoration-thickness: 3px;
        }
        .founderContent {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 24px;
          align-items: center;
        }
        .left {
          display: grid;
          justify-items: center;
          gap: 14px;
        }
        .portrait {
          width: clamp(180px, 26vw, 280px);
          height: clamp(180px, 26vw, 280px);
          border-radius: 999px;
          overflow: hidden;
          border: 10px solid #ffeb3b;
          background: #0b0b0b;
          box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.15);
        }
        .portrait img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%);
        }
        .tags {
          display: grid;
          gap: 8px;
          width: 100%;
          justify-items: start;
        }
        .namePlate {
          display: inline-block;
          background: #0b0b0b;
          color: #ffeb3b;
          font-weight: 800;
          padding: 8px 14px;
          border-radius: 6px;
          border: 2px solid #ffeb3b;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.35);
        }
        .rolePlate {
          display: inline-block;
          background: #ffeb3b;
          color: #000;
          font-weight: 900;
          padding: 8px 14px;
          border-radius: 8px;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.35);
        }
        .right {
          display: grid;
          place-items: center;
        }
        .blurb {
          color: #ffffff;
          font-size: clamp(14px, 1.55vw, 20px);
          line-height: 1.8;
          font-weight: 700;
          text-align: center;
          max-width: 760px;
          text-decoration-line: underline;
          text-decoration-color: #ffffff;
          text-underline-offset: 6px;
          text-decoration-thickness: 2px;
        }

        /* CTA */
        .ctaWrap {
          margin-top: 18px;
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

        @media (max-width: 860px) {
          .founderContent {
            grid-template-columns: 1fr;
            gap: 18px;
          }
        }
      `}</style>
    </main>
  );
}