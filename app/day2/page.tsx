'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Quote = { text: string; emoji?: string };
type Course = { title: string; badge?: string; points: string[]; comingSoon?: boolean };

const REG_NUMBER = '372758';
const CERT_IMG = '/certificate.jpg'; // used for both display and palette

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
    comingSoon: true,
    points: ['SEO fundamentals', 'Social media strategy', 'Analytics & reporting'],
  },
  {
    title: 'Graphic Design',
    comingSoon: true,
    points: ['Figma basics', 'PhotoShop'],
  },
];

/* ---------- color helpers ---------- */
function rgbToHex([r, g, b]: number[]) {
  return (
    '#' +
    [r, g, b]
      .map((v) => Math.round(v).toString(16).padStart(2, '0'))
      .join('')
  );
}
function hexToRgb(hex: string) {
  const h = hex.replace('#', '');
  const bigint = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16);
  return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
}
function mixHex(a: string, b: string, weight = 0.5) {
  const A = hexToRgb(a);
  const B = hexToRgb(b);
  const r = Math.round(A.r * (1 - weight) + B.r * weight);
  const g = Math.round(A.g * (1 - weight) + B.g * weight);
  const b2 = Math.round(A.b * (1 - weight) + B.b * weight);
  return rgbToHex([r, g, b2]);
}
function relLum(r: number, g: number, b: number) {
  const s = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2];
}
function bestTextFor(bgHex: string) {
  const { r, g, b } = hexToRgb(bgHex);
  return relLum(r, g, b) > 0.35 ? '#0b0a10' : '#ffffff';
}
function hexToRgba(hex: string, alpha: number) {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function Page() {
  const [theme, setTheme] = useState({
    bg: '#000000',
    text: '#ffffff',
    accent: '#a855f7',
    primary: '#3b82f6',
    card: '#181a2a',
    panel: '#23263a',
    muted: '#a1a1aa',
    ring: 'rgba(168, 85, 247, 0.6)',
  });

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const Vibrant: any = (await import('node-vibrant')) // correct import
        const palette = await Vibrant.from(CERT_IMG).getPalette();

        const bgRGB =
          palette.DarkMuted?.rgb ||
          palette.DarkVibrant?.rgb ||
          palette.Muted?.rgb ||
          palette.Vibrant?.rgb;

        const accentRGB =
          palette.Vibrant?.rgb ||
          palette.LightVibrant?.rgb ||
          palette.Muted?.rgb ||
          palette.DarkVibrant?.rgb;

        if (!bgRGB || !accentRGB) return;

        const bg = rgbToHex(bgRGB);
        const accent = rgbToHex(accentRGB);
        const text = bestTextFor(bg);

        const card = mixHex(bg, text === '#ffffff' ? '#ffffff' : '#000000', 0.08);
        const panel = mixHex(bg, text === '#ffffff' ? '#ffffff' : '#000000', 0.12);
        const muted = text === '#ffffff' ? mixHex('#ffffff', accent, 0.3) : mixHex('#000000', accent, 0.6);

        if (!mounted) return;
        setTheme({
          bg,
          text,
          accent,
          primary: accent, // everything (buttons) uses this, so it matches the image
          card,
          panel,
          muted,
          ring: hexToRgba(accent, 0.5),
        });
      } catch (e) {
        console.warn('Palette extraction failed; using defaults', e);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <main
      className="page"
      style={
        {
          ['--bg' as any]: theme.bg,
          ['--text' as any]: theme.text,
          ['--accent' as any]: theme.accent,
          ['--primary' as any]: theme.primary,
          ['--card' as any]: theme.card,
          ['--panel' as any]: theme.panel,
          ['--muted' as any]: theme.muted,
          ['--ring' as any]: theme.ring,
        } as React.CSSProperties
      }
    >
      <a href="#content" className="skip">Skip to content</a>
      <Nav />
      <Hero />

      <section id="courses" className="section" aria-labelledby="courses-title">
        <Header
          title="Courses"
          subtitle="Start with Web Development and explore more tracks soon."
        />
        <div className="grid" role="list">
          {COURSES.map((c, i) => (
            <CourseCard key={i} {...c} />
          ))}
        </div>
      </section>

      <section id="legal" className="section" aria-labelledby="legal-title">
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
            <div className="portrait">
              <img src="/images/legal.jpg" alt="Founder portrait" />
            </div>
            <small>
              For objectives needing approval/license, the company obtains the same from competent
              authority.
            </small>
          </div>
        </div>
      </section>

      <section id="sessions" className="section" aria-labelledby="sessions-title">
        <Header
          title="Session Plan"
          subtitle="Each day ends with a highlighted summary and a motivational quote."
        />
        <div className="grid" role="list">
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

      <section id="quotes" className="section" aria-labelledby="quotes-title">
        <Header
          title="Business & Motivational Quotes"
          subtitle="Rotates automatically — perfect to close each session on a high note."
          badge="Daily"
        />
        <QuotesRotator />
      </section>

      <CTA />
      <Footer />

      <style jsx global>{`
        :root {
          /* Fallbacks before dynamic theme arrives */
          --bg: #000000;
          --card: #181a2a;
          --panel: #23263a;
          --text: #ffffff;
          --muted: #a1a1aa;
          --accent: #a855f7;
          --primary: #3b82f6;
          --ring: rgba(168, 85, 247, 0.6);
        }
        html, body, .page { background: var(--bg); color: var(--text); }
        .page { display: flex; flex-direction: column; min-height: 100dvh; }
        .skip {
          position: absolute;
          left: -9999px;
          top: auto;
          width: 1px;
          height: 1px;
          overflow: hidden;
        }
        .skip:focus {
          left: 12px;
          top: 12px;
          width: auto;
          height: auto;
          padding: 8px 12px;
          background: var(--panel);
          border-radius: 8px;
          outline: 2px solid var(--accent);
        }
        .section { width: 100%; max-width: 1100px; margin: 0 auto; padding: 72px 20px; }
        .grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 20px; }
        .grid > * { grid-column: span 12; }
        @media (min-width: 860px) { .grid > * { grid-column: span 6; } }
        .btn {
          background: linear-gradient(90deg, var(--primary), color-mix(in oklab, var(--primary), #000 15%));
          color: #ffffff; border: none; padding: 12px 18px; border-radius: 12px;
          font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
          box-shadow: 0 10px 26px color-mix(in srgb, var(--primary), transparent 60%);
          transition: transform 0.15s ease, box-shadow 0.2s ease, opacity 0.2s ease;
        }
        .btn:hover { transform: translateY(-2px); }
        .btn:focus-visible { outline: none; box-shadow: 0 0 0 4px var(--ring); }

        /* Primary pill used for Proceed to Day 3 – matches image color */
        .btnPrimary {
          background: linear-gradient(180deg, var(--primary), color-mix(in srgb, var(--primary), #000 25%));
          color: #fff;
          padding: 14px 26px;
          border-radius: 999px;
          font-weight: 800;
          letter-spacing: 0.2px;
          box-shadow:
            0 10px 28px color-mix(in srgb, var(--primary), transparent 70%),
            0 0 0 1px color-mix(in srgb, var(--primary), #000 45%);
        }
        .btnPrimary:hover { transform: translateY(-2px); }
        .btnPrimary:active { transform: translateY(-1px) scale(0.99); }
        .btnPrimary:focus-visible { outline: none; box-shadow: 0 0 0 4px var(--ring); }

        .pill {
          border: 1px solid color-mix(in srgb, var(--text), transparent 94%);
          background: var(--panel); color: var(--text); padding: 8px 12px; border-radius: 999px; cursor: pointer;
        }
        .pill:hover { border-color: var(--accent); box-shadow: 0 0 0 4px var(--ring); }
        .quoteCard {
          display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 12px;
          background: var(--card);
          border: 1px solid color-mix(in srgb, var(--text), transparent 94%);
          border-radius: 16px; padding: 22px;
        }
        blockquote { margin: 0; font-size: 1.15rem; line-height: 1.6; }
        .emoji { opacity: 0.9; margin-left: 8px; }
        .dots { display: flex; justify-content: center; gap: 8px; margin-top: 12px; }
        .dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: color-mix(in srgb, var(--text), transparent 94%); border: none; cursor: pointer;
        }
        .dot.active { background: linear-gradient(90deg, var(--accent), color-mix(in srgb, var(--accent), #000 20%)); }
        .legalWrap { display: grid; grid-template-columns: 1fr; gap: 24px; }
        @media (min-width: 960px) { .legalWrap { grid-template-columns: 1.2fr 1fr; align-items: start; } }
        .legalText {
          background: var(--card);
          border: 1px solid color-mix(in srgb, var(--text), transparent 94%);
          border-radius: 16px; padding: 24px;
        }
        .certificate {
          background: var(--panel);
          border: 1px dashed color-mix(in srgb, var(--text), transparent 94%);
          border-radius: 16px; padding: 14px; text-align: center;
        }
        .certificate :global(img) { width: 100%; height: auto; object-fit: contain; border-radius: 10px; }
        .certificate small { display: block; margin-top: 8px; color: var(--muted); }
        .bullets { margin: 14px 0 20px; padding-left: 18px; color: var(--muted); }
        .bullets li { margin: 6px 0; }
      `}</style>
    </main>
  );
}

function Nav() {
  return (
    <header className="nav" role="banner">
      <div className="wrap">
        <Link href="/" className="brand" aria-label="Go to home">
          <span className="logo" aria-hidden>⬢</span> Skill Hub Nepal
        </Link>
        <nav aria-label="Primary">
          <a href="#courses">Courses</a>
          <a href="#legal">Legal</a>
          <a href="#sessions">Sessions</a>
          <a href="#quotes">Quotes</a>
          <a href="#enroll" className="enroll">Enroll</a>
        </nav>
      </div>
      <style jsx>{`
        .nav {
          position: sticky; top: 0; z-index: 20; backdrop-filter: blur(8px);
          background: linear-gradient(180deg, color-mix(in srgb, var(--bg), transparent 15%), color-mix(in srgb, var(--bg), transparent 55%));
          border-bottom: 1px solid color-mix(in srgb, var(--text), transparent 96%);
        }
        .wrap {
          margin: 0 auto; max-width: 1100px; display: flex; align-items: center; justify-content: space-between; padding: 12px 20px;
        }
        .brand { display: flex; align-items: center; gap: 10px; color: var(--text); text-decoration: none; font-weight: 800; letter-spacing: 0.2px; }
        .logo { color: var(--accent); filter: drop-shadow(0 6px 16px color-mix(in srgb, var(--accent), transparent 50%)); }
        nav { display: flex; gap: 18px; align-items: center; }
        nav a { color: color-mix(in srgb, var(--text), transparent 20%); text-decoration: none; font-weight: 600; font-size: 0.95rem; }
        .enroll {
          padding: 8px 12px; border-radius: 10px; background: var(--card);
          border: 1px solid color-mix(in srgb, var(--text), transparent 94%);
        }
        .enroll:hover { border-color: var(--accent); box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent), transparent 80%); }
      `}</style>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="content">
      <div className="inner">
        <p className="badge">Learn • Build • Grow</p>
        <h1>
          Upskill with <span>Skill Hub Nepal</span>
        </h1>
        <p className="sub">
          Practical, project‑based sessions. Each day ends with highlights and a motivational quote.
          We are a registered, legal platform in Nepal.
        </p>

        <div className="badges" role="group" aria-label="Highlights">
          <span className="mini">✔ Legal platform</span>
          <span className="mini">Reg. No: {REG_NUMBER}</span>
        </div>
      </div>

      <style jsx>{`
        .hero { width: 100%; padding: 80px 20px 40px; display: grid; place-items: center; text-align: center; }
        .inner { max-width: 900px; }
        .badge {
          display: inline-block; padding: 6px 12px; border-radius: 999px; background: var(--card);
          border: 1px solid color-mix(in srgb, var(--text), transparent 94%); color: var(--muted); margin-bottom: 16px;
        }
        h1 { font-size: clamp(2rem, 4.4vw, 3.2rem); margin: 0 0 10px; font-weight: 900; letter-spacing: -0.02em; }
        h1 span {
          background: linear-gradient(90deg, var(--accent), color-mix(in srgb, var(--accent), #000 20%));
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        .sub { color: color-mix(in srgb, var(--text), transparent 10%); opacity: 0.92; margin: 0 auto 20px; line-height: 1.7; max-width: 760px; }
        .badges { margin-top: 14px; display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .mini {
          font-size: 0.85rem; color: var(--muted); background: var(--card);
          border: 1px dashed color-mix(in srgb, var(--text), transparent 94%); padding: 6px 10px; border-radius: 10px;
        }
      `}</style>
    </section>
  );
}

function Header({ title, subtitle, badge }: { title: string; subtitle?: string; badge?: string }) {
  return (
    <div className="head">
      <div className="left">
        {badge && <span className="tag">{badge}</span>}
        <h2>{title}</h2>
        {subtitle && <p className="sub">{subtitle}</p>}
      </div>
      <style jsx>{`
        .head { margin-bottom: 22px; }
        .tag {
          display: inline-block; margin-bottom: 8px; background: var(--panel); color: var(--accent);
          border: 1px solid color-mix(in srgb, var(--text), transparent 94%); padding: 6px 10px; border-radius: 999px; font-weight: 700; letter-spacing: 0.2px;
        }
        h2 { margin: 0 0 6px; font-size: clamp(1.4rem, 3vw, 2rem); }
        .sub { margin: 0; color: var(--muted); max-width: 800px; }
      `}</style>
    </div>
  );
}

function CourseCard({ title, badge, points, comingSoon }: Course) {
  return (
    <article className={`card ${comingSoon ? 'muted' : ''}`} role="listitem">
      <header className="top">
        <h3>{title}</h3>
        {badge && <span className="badge">{badge}</span>}
      </header>
      <ul>
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <style jsx>{`
        .card {
          background: var(--card);
          border: 1px solid color-mix(in srgb, var(--text), transparent 94%);
          border-radius: 16px; padding: 20px; display: flex; flex-direction: column; gap: 10px; min-height: 260px;
        }
        .muted { opacity: 0.85; }
        .top { display: flex; justify-content: space-between; align-items: center; }
        h3 { margin: 0; font-size: 1.15rem; }
        .badge {
          padding: 6px 10px; border-radius: 999px; background: var(--panel); color: var(--muted);
          border: 1px solid color-mix(in srgb, var(--text), transparent 94%); font-size: 0.85rem;
        }
        ul { margin: 0; padding-left: 18px; color: color-mix(in srgb, var(--text), transparent 10%); flex: 1; }
        li { margin: 6px 0; }
      `}</style>
    </article>
  );
}

function SessionCard({ day, title, highlights, quote }: { day: number; title: string; highlights: string[]; quote: Quote }) {
  return (
    <article className="session" role="listitem" aria-label={`Day ${day} session card`}>
      <div className="row">
        <h3>Day {day}: {title}</h3>
        <span className="badge">Session</span>
      </div>
      <ul className="points">
        {highlights.map((h, i) => (<li key={i}>{h}</li>))}
      </ul>
      <div className="highlight">
        <span className="label">Motivational Quote</span>
        <p className="q">“{quote.text}” {quote.emoji && <span>{quote.emoji}</span>}</p>
      </div>

      <style jsx>{`
        .session {
          background: linear-gradient(180deg, color-mix(in srgb, var(--accent), transparent 93%), transparent), var(--card);
          border: 1px solid color-mix(in srgb, var(--text), transparent 94%);
          border-radius: 16px; padding: 20px;
        }
        .row { display: flex; justify-content: space-between; align-items: baseline; }
        h3 { margin: 0; font-size: 1.15rem; }
        .badge {
          padding: 6px 10px; border-radius: 999px; background: var(--panel); color: var(--muted);
          border: 1px solid color-mix(in srgb, var(--text), transparent 94%); font-size: 0.85rem;
        }
        .points { margin: 10px 0 14px; padding-left: 18px; color: color-mix(in srgb, var(--text), transparent 10%); }
        .points li { margin: 6px 0; }
        .highlight { background: var(--panel); border: 1px dashed color-mix(in srgb, var(--text), transparent 94%); border-radius: 12px; padding: 14px; }
        .label { display: inline-block; font-size: 0.8rem; color: var(--muted); margin-bottom: 6px; }
        .q { margin: 0; font-weight: 700; letter-spacing: 0.2px; }
      `}</style>
    </article>
  );
}

function QuotesRotator() {
  const [qIndex, setQIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setQIndex((i) => (i + 1) % QUOTES.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="quoteCard" aria-live="polite">
        <button aria-label="Previous quote" className="pill" onClick={() => setQIndex((i) => (i - 1 + QUOTES.length) % QUOTES.length)}>←</button>
        <blockquote><p>“{QUOTES[qIndex].text}” <span className="emoji">{QUOTES[qIndex].emoji}</span></p></blockquote>
        <button aria-label="Next quote" className="pill" onClick={() => setQIndex((i) => (i + 1) % QUOTES.length)}>→</button>
      </div>
      <div className="dots">
        {QUOTES.map((_, i) => (
          <button key={i} aria-label={`Go to quote ${i + 1}`} className={`dot ${i === qIndex ? 'active' : ''}`} onClick={() => setQIndex(i)} />
        ))}
      </div>
    </>
  );
}

function CTA() {
  return (
    <section id="enroll" className="section" aria-labelledby="cta-title">
      <div className="ctaWrap">
        <h3 id="cta-title">Ready to learn and build?</h3>
        <p>Join Skill Hub Nepal. Practical sessions, legal and transparent platform, and a positive learning culture. Let’s grow together! 🚀</p>
        <div className="stack">
          <Link href="/day3" className="btnPrimary" aria-label="Proceed to Day 3">
            Proceed to Day 3
          </Link>
          
        </div>
      </div>
      <style jsx>{`
        .ctaWrap {
          background: linear-gradient(135deg,
            color-mix(in srgb, var(--accent), transparent 92%),
            color-mix(in srgb, var(--accent), transparent 88%));
          border: 1px solid color-mix(in srgb, var(--text), transparent 94%);
          padding: 28px; border-radius: 16px; text-align: center; max-width: 900px; margin: 0 auto;
        }
        h3 { margin: 0 0 8px; font-size: 1.4rem; }
        p { margin: 0 0 14px; color: color-mix(in srgb, var(--text), transparent 10%); }
        .stack { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .ghost {
          padding: 12px 18px; border-radius: 12px; color: var(--text); text-decoration: none;
          border: 1px solid color-mix(in srgb, var(--text), transparent 94%); background: var(--panel);
        }
        .ghost:hover { border-color: var(--accent); box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent), transparent 80%); }
      `}</style>
    </section>
  );
}

function Footer() {
  return (
    <footer className="foot" role="contentinfo">
      <div className="wrap">
        <span>© {new Date().getFullYear()} Skill Hub Nepal</span>
        <span>Legal Reg. No: {REG_NUMBER}</span>
      </div>
      <style jsx>{`
        .foot { margin-top: auto; border-top: 1px solid color-mix(in srgb, var(--text), transparent 95%); padding: 18px 20px; }
        .wrap { max-width: 1100px; margin: 0 auto; display: flex; justify-content: space-between; color: var(--muted); font-size: 0.95rem; }
      `}</style>
    </footer>
  );
}