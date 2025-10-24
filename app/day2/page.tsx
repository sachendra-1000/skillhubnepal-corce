'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Quote = { text: string; emoji?: string };
type Course = { title: string; badge?: string; points: string[]; comingSoon?: boolean };

const REG_NUMBER = '372758'; // update if needed
const CERT_IMG = '/certificate.jpg'; // put your certificate image in public/certificate.jpg

const QUOTES: Quote[] = [
  { text: 'आत्मविश्वास छैन जस्तो लागे पनि सुरु त गर, कदमले नै दिशा खोल्छ।', emoji: '✨' },
  { text: 'सानो प्रगति पनि प्रगति नै हो, निरन्तरता सबभन्दा ठूलो शक्ति हो।', emoji: '🌱' },
  { text: 'Continuous hardwork and dedication is the main key to success', emoji: '💪' },
  { text: 'तिमीले आज गरेको सानो प्रयास भोलिको ठूलो उपलब्धि बन्न सक्छ।', emoji: '🌅' },
  { text: 'सपना पूरा गर्न सुरु गर्ने पहिलो कदम भनेको डरलाई जित्नु हो।', emoji: '🚶‍♂️' },
  { text: 'जित्नु भन्दा ठूलो कुरा हिम्मत नहार्नु हो।', emoji: '🏔️' },
  { text: 'प्रत्येक दिन अलिकति राम्रो—त्यही निरन्तरता नै जादु हो।', emoji: '🔁' },
];

const COURSES: Course[] = [
  {
    title: 'Web Development',
    badge: 'Day 1',
    points: [
      'Course intro + goals',
      'HTML/CSS/JS quick start',
      'Next.js basics and project setup',
      'Build a simple landing page',
      'Q&A + resources',
    ],
  },
  {
    title: 'Digital Marketing',
    badge: 'Coming soon',
    comingSoon: true,
    points: ['SEO fundamentals', 'Social media strategy', 'Analytics & reporting'],
  },
  {
    title: 'Graphic Design',
    badge: 'Coming soon',
    comingSoon: true,
    points: ['Figma basics', 'Branding essentials', 'Exporting assets'],
  },
  {
    title: 'Entrepreneurship',
    badge: 'Coming soon',
    comingSoon: true,
    points: ['Idea → MVP', 'Business model basics', 'Go-to-market'],
  },
];

export default function Page() {
  const [qIndex, setQIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setQIndex((i) => (i + 1) % QUOTES.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const nextQuote = () => setQIndex((i) => (i + 1) % QUOTES.length);
  const prevQuote = () => setQIndex((i) => (i - 1 + QUOTES.length) % QUOTES.length);

  return (
    <main className="page">
      <Nav />
      <Hero />

      <section id="courses" className="section">
        <Header
          title="Courses"
          subtitle="Start with Web Development and explore more tracks soon."
        />
        <div className="grid">
          {COURSES.map((c, i) => (
            <CourseCard key={i} {...c} />
          ))}
        </div>
      </section>

      <section id="legal" className="section">
        <Header
          title="We are a legal platform"
          subtitle={`Skill Hub Nepal is officially registered. Registration No: ${REG_NUMBER}.`}
          badge="Legal"
        />
        <div className="legalWrap">
          <div className="legalText">
            <p>
              Skill Hub Nepal is a legal platform registered at the Office of the Company
              Registrar, Nepal. We are committed to transparency and quality learning.
            </p>
            <ul className="bullets">
              <li>Verified registration number: {REG_NUMBER}</li>
              <li>Digitally signed certificate</li>
              <li>Trusted mentors and structured sessions</li>
            </ul>
            <Link href="#enroll" className="btn">
              Enroll now
            </Link>
          </div>
          <div className="certificate">
            <Image
              src={CERT_IMG}
              alt="Certificate of Incorporation - Skill Hub Nepal"
              width={820}
              height={1160}
              priority
            />
            <small>For objectives needing approval/license, the company obtains the same from competent authority.</small>
          </div>
        </div>
      </section>

      <section id="sessions" className="section">
        <Header
          title="Session Plan"
          subtitle="Each day ends with a highlighted summary and a motivational quote."
        />
        <div className="grid">
          <SessionCard
            day={1}
            title="Web Development Kickoff"
            highlights={[
              'Course overview and outcomes',
              'HTML/CSS/JS fundamentals',
              'Create your first Next.js page',
              'Assignment + resource pack',
            ]}
            quote={QUOTES[1]}
          />
          <SessionCard
            day={2}
            title="Platform is Legal + Next Steps"
            highlights={[
              'Skill Hub Nepal legality overview',
              `Registration number: ${REG_NUMBER}`,
              'Walkthrough of certificate and compliance',
              'Continue project: styling and deploy preview',
            ]}
            quote={QUOTES[2]}
          />
        </div>
      </section>

      <section id="quotes" className="section">
        <Header
          title="Business & Motivational Quotes"
          subtitle="Rotates automatically — perfect to close each session on a high note."
          badge="Daily"
        />
        <div className="quoteCard">
          <button aria-label="Previous quote" className="pill" onClick={prevQuote}>
            ←
          </button>
          <blockquote>
            <p>
              “{QUOTES[qIndex].text}” <span className="emoji">{QUOTES[qIndex].emoji}</span>
            </p>
          </blockquote>
          <button aria-label="Next quote" className="pill" onClick={nextQuote}>
            →
          </button>
        </div>
        <div className="dots">
          {QUOTES.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to quote ${i + 1}`}
              className={`dot ${i === qIndex ? 'active' : ''}`}
              onClick={() => setQIndex(i)}
            />
          ))}
        </div>
      </section>

      <CTA />

      <Footer />

      <style jsx>{`
        :root {
          --bg: #000000;
          --card: #181a2a;
          --panel: #23263a;
          --text: #ffffff;
          --muted: #a1a1aa;
          --accent: #a855f7;
          --primary: #3b82f6;
          --ring: rgba(168, 85, 247, 0.6);
        }
        html,
        body,
        .page {
          background: var(--bg);
          color: var(--text);
        }
        .page {
          display: flex;
          flex-direction: column;
          min-height: 100dvh;
        }
        .section {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding: 72px 20px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 20px;
        }
        .grid > * {
          grid-column: span 12;
        }
        @media (min-width: 860px) {
          .grid > * {
            grid-column: span 6;
          }
        }
        .btn {
          background: linear-gradient(90deg, #3b82f6, #2563eb);
          color: #ffffff;
          border: none;
          padding: 12px 18px;
          border-radius: 12px;
          font-weight: 700;
          text-decoration: none;
          display: inline-block;
          box-shadow: 0 10px 26px rgba(37, 99, 235, 0.4);
          transition: transform 0.15s ease;
        }
        .btn:hover {
          transform: translateY(-2px);
        }
        .pill {
          border: 1px solid rgba(255, 255, 255, 0.06);
          background: #23263a;
          color: var(--text);
          padding: 8px 12px;
          border-radius: 999px;
          cursor: pointer;
        }
        .pill:hover {
          border-color: var(--accent);
          box-shadow: 0 0 0 4px var(--ring);
        }
        .quoteCard {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 12px;
          background: var(--card);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 22px;
        }
        blockquote {
          margin: 0;
          font-size: 1.15rem;
          line-height: 1.6;
        }
        .emoji {
          opacity: 0.9;
          margin-left: 8px;
        }
        .dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 12px;
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.06);
          border: none;
          cursor: pointer;
        }
        .dot.active {
          background: linear-gradient(90deg, #a855f7, #7c3aed);
        }
        .legalWrap {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 960px) {
          .legalWrap {
            grid-template-columns: 1.2fr 1fr;
            align-items: start;
          }
        }
        .legalText {
          background: var(--card);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 24px;
        }
        .certificate {
          background: #23263a;
          border: 1px dashed rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 14px;
          text-align: center;
        }
        .certificate :global(img) {
          width: 100%;
          height: auto;
          object-fit: contain;
          border-radius: 10px;
        }
        .certificate small {
          display: block;
          margin-top: 8px;
          color: var(--muted);
        }
        .bullets {
          margin: 14px 0 20px;
          padding-left: 18px;
          color: var(--muted);
        }
        .bullets li {
          margin: 6px 0;
        }
      `}</style>
    </main>
  );
}

function Nav() {
  return (
    <header className="nav">
      <div className="wrap">
        <Link href="/" className="brand">
          <span className="logo">⬢</span> Skill Hub Nepal
        </Link>
        <nav>
          <a href="#courses">Courses</a>
          <a href="#legal">Legal</a>
          <a href="#sessions">Sessions</a>
          <a href="#quotes">Quotes</a>
          <a href="#enroll" className="enroll">Enroll</a>
        </nav>
      </div>
      <style jsx>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 20;
          backdrop-filter: blur(8px);
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.4));
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }
        .wrap {
          margin: 0 auto;
          max-width: 1100px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 20px;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #ffffff;
          text-decoration: none;
          font-weight: 800;
          letter-spacing: 0.2px;
        }
        .logo {
          color: #a855f7;
          filter: drop-shadow(0 6px 16px rgba(168, 85, 247, 0.5));
        }
        nav {
          display: flex;
          gap: 18px;
          align-items: center;
        }
        nav a {
          color: #d1d1d6;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
        }
        .enroll {
          padding: 8px 12px;
          border-radius: 10px;
          background: #181a2a;
          border: 1px solid rgba(255, 255, 255, 0.06);
        }
        .enroll:hover {
          border-color: #a855f7;
          box-shadow: 0 0 0 4px rgba(168, 85, 247, 0.2);
        }
      `}</style>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="inner">
        <p className="badge">Learn • Build • Grow</p>
        <h1>
          Upskill with <span>Skill Hub Nepal</span>
        </h1>
        <p className="sub">
          Practical, project‑based sessions. Each day ends with highlights and a motivational quote.
          We are a registered, legal platform in Nepal.
        </p>
        <div className="cta">
          <Link href="#courses" className="btn">
            Explore courses
          </Link>
          <a href="#legal" className="ghost">See legal proof</a>
        </div>
        <div className="badges">
          <span className="mini">✔ Legal platform</span>
          <span className="mini">Reg. No: {REG_NUMBER}</span>
        </div>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          padding: 80px 20px 40px;
          display: grid;
          place-items: center;
          text-align: center;
        }
        .inner {
          max-width: 900px;
        }
        .badge {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 999px;
          background: #181a2a;
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: #a1a1aa;
          margin-bottom: 16px;
        }
        h1 {
          font-size: clamp(2rem, 4.4vw, 3.2rem);
          margin: 0 0 10px;
          font-weight: 900;
          letter-spacing: -0.02em;
        }
        h1 span {
          background: linear-gradient(90deg, #a855f7, #7c3aed);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .sub {
          color: #d1d1d6;
          opacity: 0.92;
          margin: 0 auto 20px;
          line-height: 1.7;
          max-width: 760px;
        }
        .cta {
          display: flex;
          gap: 14px;
          justify-content: center;
          margin-top: 8px;
          flex-wrap: wrap;
        }
        .ghost {
          padding: 12px 18px;
          border-radius: 12px;
          color: #ffffff;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.06);
          background: #23263a;
        }
        .ghost:hover {
          border-color: #a855f7;
          box-shadow: 0 0 0 4px rgba(168, 85, 247, 0.2);
        }
        .badges {
          margin-top: 14px;
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .mini {
          font-size: 0.85rem;
          color: #a1a1aa;
          background: #181a2a;
          border: 1px dashed rgba(255, 255, 255, 0.06);
          padding: 6px 10px;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
}

function Header({
  title,
  subtitle,
  badge,
}: {
  title: string;
  subtitle?: string;
  badge?: string;
}) {
  return (
    <div className="head">
      <div className="left">
        {badge && <span className="tag">{badge}</span>}
        <h2>{title}</h2>
        {subtitle && <p className="sub">{subtitle}</p>}
      </div>
      <style jsx>{`
        .head {
          margin-bottom: 22px;
        }
        .tag {
          display: inline-block;
          margin-bottom: 8px;
          background: #23263a;
          color: #a855f7;
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 6px 10px;
          border-radius: 999px;
          font-weight: 700;
          letter-spacing: 0.2px;
        }
        h2 {
          margin: 0 0 6px;
          font-size: clamp(1.4rem, 3vw, 2rem);
        }
        .sub {
          margin: 0;
          color: #a1a1aa;
          max-width: 800px;
        }
      `}</style>
    </div>
  );
}

function CourseCard({ title, badge, points, comingSoon }: Course) {
  return (
    <article className={`card ${comingSoon ? 'muted' : ''}`}>
      <header className="top">
        <h3>{title}</h3>
        {badge && <span className="badge">{badge}</span>}
      </header>
      <ul>
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
      {!comingSoon ? (
        <a href="#enroll" className="btn small">
          Enroll
        </a>
      ) : (
        <span className="soon">Coming soon</span>
      )}
      <style jsx>{`
        .card {
          background: var(--card);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          min-height: 260px;
        }
        .muted {
          opacity: 0.85;
        }
        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        h3 {
          margin: 0;
          font-size: 1.15rem;
        }
        .badge {
          padding: 6px 10px;
          border-radius: 999px;
          background: #23263a;
          color: #a1a1aa;
          border: 1px solid rgba(255, 255, 255, 0.06);
          font-size: 0.85rem;
        }
        ul {
          margin: 0;
          padding-left: 18px;
          color: #e9e9ee;
          flex: 1;
        }
        li {
          margin: 6px 0;
        }
        .small {
          padding: 10px 14px;
          font-size: 0.95rem;
          align-self: start;
        }
        .soon {
          color: #a1a1aa;
          border: 1px dashed rgba(255, 255, 255, 0.06);
          background: #23263a;
          padding: 8px 12px;
          border-radius: 8px;
          width: fit-content;
        }
      `}</style>
    </article>
  );
}

function SessionCard({
  day,
  title,
  highlights,
  quote,
}: {
  day: number;
  title: string;
  highlights: string[];
  quote: Quote;
}) {
  return (
    <article className="session">
      <div className="row">
        <h3>
          Day {day}: {title}
        </h3>
        <span className="badge">Session</span>
      </div>
      <ul className="points">
        {highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
      <div className="highlight">
        <span className="label">Motivational Quote</span>
        <p className="q">“{quote.text}” {quote.emoji && <span>{quote.emoji}</span>}</p>
      </div>

      <style jsx>{`
        .session {
          background: linear-gradient(180deg, rgba(168, 85, 247, 0.07), transparent),
            var(--card);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 20px;
        }
        .row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }
        h3 {
          margin: 0;
          font-size: 1.15rem;
        }
        .badge {
          padding: 6px 10px;
          border-radius: 999px;
          background: #23263a;
          color: #a1a1aa;
          border: 1px solid rgba(255, 255, 255, 0.06);
          font-size: 0.85rem;
        }
        .points {
          margin: 10px 0 14px;
          padding-left: 18px;
          color: #e9e9ee;
        }
        .points li {
          margin: 6px 0;
        }
        .highlight {
          background: #23263a;
          border: 1px dashed rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          padding: 14px;
        }
        .label {
          display: inline-block;
          font-size: 0.8rem;
          color: #a1a1aa;
          margin-bottom: 6px;
        }
        .q {
          margin: 0;
          font-weight: 700;
          letter-spacing: 0.2px;
        }
      `}</style>
    </article>
  );
}

function CTA() {
  return (
    <section id="enroll" className="section">
      <div className="ctaWrap">
        <h3>Ready to learn and build?</h3>
        <p>
          Join Skill Hub Nepal. Practical sessions, legal and transparent platform, and a positive
          learning culture. Let’s grow together! 🚀
        </p>
        <div className="stack">
          <a className="btn" href="https://forms.gle/" target="_blank" rel="noreferrer">
            Fill enrollment form
          </a>
          <a className="ghost" href="#courses">
            See course details
          </a>
        </div>
      </div>
      <style jsx>{`
        .ctaWrap {
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.08), rgba(124, 58, 237, 0.08));
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 28px;
          border-radius: 16px;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }
        h3 {
          margin: 0 0 8px;
          font-size: 1.4rem;
        }
        p {
          margin: 0 0 14px;
          color: #e9e9ee;
        }
        .stack {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .ghost {
          padding: 12px 18px;
          border-radius: 12px;
          color: #ffffff;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.06);
          background: #23263a;
        }
        .ghost:hover {
          border-color: #a855f7;
          box-shadow: 0 0 0 4px rgba(168, 85, 247, 0.2);
        }
      `}</style>
    </section>
  );
}

function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <span>© {new Date().getFullYear()} Skill Hub Nepal</span>
        <span>Legal Reg. No: {REG_NUMBER}</span>
      </div>
      <style jsx>{`
        .foot {
          margin-top: auto;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 18px 20px;
        }
        .wrap {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          color: #a1a1aa;
          font-size: 0.95rem;
        }
      `}</style>
    </footer>
  );
}