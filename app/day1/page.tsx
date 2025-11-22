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

      {/* Side‑by‑side image + text */}
      <section className="splitSection">
        <div className="splitImage">
          <img
            src="/images/approve.jpg"
            alt="Learners growing their digital skills online"
          />
        </div>

        <div className="splitText">
          <h2 className="splitHeading">Government‑Approved</h2>
          <p className="splitBody">
            Skill Hub Nepal is a government-approved e-learning company dedicated to providing
            high-quality digital skills training across Nepal. It offers accessible, affordable,
            and industry-focused courses that empower students, professionals, and entrepreneurs
            to succeed in today’s digital era.
          </p>
          <p className="splitBody">
            With practical learning, expert guidance, and real-world projects, Skill Hub Nepal
            helps learners build confidence and career-ready skills. Its mission is to bridge
            Nepal’s digital skill gap by offering updated, globally relevant training programs.
          </p>

          <ul className="splitList">
            <li>Accessible & affordable online courses</li>
            <li>Real-world projects & expert mentors</li>
            <li>Career-focused, globally relevant skills</li>
          </ul>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="benefits">
        <h3 className="benefitsHeading">OUR MISSION AND VISION</h3>

        <section className="vision">
          <h2 className="visionHeading">COMPANY MISSION</h2>
          <p className="visionBody">
            At Skill Hub Nepal, we empower individuals through diverse online learning
            opportunities that build digital skills. Our affiliate program helps learners
            earn while they grow, creating a sustainable path to success. We promote a
            positive environment that encourages creativity, collaboration, and mutual support.
          </p>
        </section>

        <section className="vision" style={{ marginTop: 16 }}>
          <h2 className="visionHeading">COMPANY VISION</h2>
          <p className="visionBody">
            At Skill Hub Nepal, we aim to become a global leader in online earning and affiliate
            marketing. Our goal is to empower individuals to build skills, gain financial
            independence, and succeed in the digital world. We strive to create a supportive
            community that promotes growth, learning, and collaboration.
          </p>
        </section>
      </section>

      {/* Founder section */}
      <section className="founderCard">
        <h2 className="founderTitle">MEET OUR FOUNDER</h2>

        <div className="founderContent">
          <div className="left">
            <div className="portrait">
              <img src="/images/maish-sir.jpg" alt="Founder portrait" />
            </div>

            <div className="tags">
              <div className="namePlate">Mr. Manish Thapa Magar</div>
              <div className="rolePlate">Founder & CEO</div>
            </div>
          </div>

          <div className="right">
            <p className="blurb">
              Manish Thapa Magar, the founder and CEO of Skill Hub Nepal, leads the company with
              a clear vision and strong values. His goal is to empower people with essential
              digital skills and promote the power of education. Under his leadership, Skill Hub
              Nepal has become a trusted name in quality learning, inspiring learners across Nepal.
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

      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          background: #000;
          color: #fff;
          -webkit-font-smoothing: antialiased;
        }
      `}</style>

      <style jsx>{`
        .page {
          --bg: #000000;
          --text: #ffffff;
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

        /* Split section (image + text) */
        .splitSection {
          max-width: 1100px;
          width: 100%;
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 1.25fr);
          gap: 32px;
          align-items: center;
          background: radial-gradient(
              circle at top left,
              rgba(168, 85, 247, 0.14),
              transparent 55%
            ),
            var(--panel);
          border-radius: 16px;
          padding: 26px 22px 30px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
        }

        .splitImage {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          background: radial-gradient(circle at top, #4f46e5, #0f172a);
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.8);
        }

        .splitImage::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at top left,
            rgba(255, 255, 255, 0.08),
            transparent 55%
          );
          pointer-events: none;
        }

        /* UPDATED: show full image */
        .splitImage img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain; /* show full image without cropping */
        }

        .splitText {
          text-align: left;
        }

        .splitHeading {
          margin: 4px 0 12px;
          font-weight: 800;
          font-size: clamp(22px, 3vw, 28px);
          background: linear-gradient(90deg, var(--accent-start), var(--accent-end));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .splitBody {
          margin: 0 0 10px;
          color: #e9e9ee;
          opacity: 0.9;
          font-size: 14px;
          line-height: 1.7;
        }

        .splitList {
          list-style: none;
          padding: 0;
          margin: 14px 0 0;
          display: grid;
          gap: 8px;
          color: #f4f4ff;
          font-size: 14px;
        }

        .splitList li {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .splitList li::before {
          content: "●";
          font-size: 10px;
          color: var(--accent-start);
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
          background: var(--panel);
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 24px 20px 28px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
        }
        .founderTitle {
          margin: 6px 0 18px;
          text-align: center;
          font-weight: 800;
          font-size: clamp(26px, 4.6vw, 40px);
          background: linear-gradient(90deg, var(--accent-start), var(--accent-end));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
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
          width: clamp(180px, 26vw, 260px);
          height: clamp(180px, 26vw, 260px);
          border-radius: 999px;
          overflow: hidden;
          border: 4px solid rgba(168, 85, 247, 0.4);
          background: var(--card);
          box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.06);
        }
        .portrait img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .tags {
          display: grid;
          gap: 8px;
          width: 100%;
          justify-items: start;
        }
        .namePlate {
          display: inline-block;
          background: var(--card);
          color: var(--text);
          font-weight: 800;
          padding: 8px 14px;
          border-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.35);
        }
        .rolePlate {
          display: inline-block;
          background: linear-gradient(90deg, var(--accent-start), var(--accent-end));
          color: #fff;
          font-weight: 900;
          padding: 8px 14px;
          border-radius: 8px;
          box-shadow: 0 6px 16px rgba(124, 58, 237, 0.35);
        }
        .right {
          display: grid;
          place-items: center;
        }
        .blurb {
          color: #e9e9ee;
          opacity: 0.9;
          font-size: clamp(14px, 1.55vw, 16px);
          line-height: 1.7;
          font-weight: 400;
          text-align: center;
          max-width: 760px;
          margin: 0;
        }

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
          font-size: 14px;
          transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
        }
        .ctaBlue:hover {
          transform: translateY(-1px) scale(1.02);
          box-shadow: 0 14px 32px rgba(37, 99, 235, 0.55);
          filter: brightness(1.05);
        }

        @media (max-width: 960px) {
          .splitSection {
            grid-template-columns: 1fr;
            padding: 22px 18px 24px;
          }
          .splitText {
            text-align: center;
          }
          .splitList {
            max-width: 360px;
            margin: 14px auto 0;
            text-align: left;
          }
        }

        @media (max-width: 860px) {
          .founderContent {
            grid-template-columns: 1fr;
            gap: 18px;
          }
          .right {
            text-align: center;
          }
        }

        @media (max-width: 600px) {
          .page {
            padding-inline: 14px;
          }
          .vision {
            padding-inline: 16px;
          }
          .founderCard {
            padding-inline: 16px;
          }
        }
      `}</style>
    </main>
  );
}