"use client";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export default function Page() {
  return (
    <main className={`page ${poppins.className}`}>
      {/* HERO */}
      <section className="hero">
        <h1 className="title">
          <span className="white">Skill Hub Nepal:</span>{" "}
          <span className="highlight">Courses, Login & KYC Guide</span>
        </h1>
        <p className="subtitle">
          Explore the curriculum and follow the quick steps to log in and verify your account smoothly.
        </p>

        <div className="quickActions">
          <a
            href="https://skillhubnepal.com.np/login"
            target="_blank"
            rel="noopener noreferrer"
            className="btnPrimary"
          >
            Open Login
          </a>
          <a
            href="https://skillhubnepal.com.np/register"
            target="_blank"
            rel="noopener noreferrer"
            className="btnGhost"
          >
            Go to Sign Up
          </a>
        </div>
      </section>

      {/* TWO COLUMNS */}
      <section className="twoCols">
        {/* Left: Course Curriculum */}
        <div className="col">
          <h3 className="sectionTitle">Course Curriculum</h3>

          {/* Module 1 */}
          <div className="card hoverable">
            <div className="iconRound violet">
              {/* book */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M4 4v15.5A2.5 2.5 0 0 1 6.5 22H20V5.5A2.5 2.5 0 0 0 17.5 3H6.5A2.5 2.5 0 0 0 4 5.5" />
              </svg>
            </div>
            <div className="cardBody">
              <div className="cardTitle">Module 1: Introduction to Web Development</div>
              <div className="chipRow">
                <span className="chip">Beginner friendly</span>
                <span className="chip">Hands‑on</span>
              </div>
              <p className="cardDesc">
                Web development means creating and maintaining websites and web apps.
              </p>
              <ul className="bulletList">
                <li>
                  <b>Frontend:</b> What users see — HTML, CSS, JavaScript.
                </li>
                <li>
                  <b>Backend:</b> Logic, data, servers — Node.js, PHP, Python.
                </li>
                <li>
                  <b>Full‑Stack:</b> Work on both frontend and backend.
                </li>
                <li>
                  <b>Databases:</b> Store information — MySQL, MongoDB.
                </li>
              </ul>
            </div>
          </div>

          {/* Module 2 */}
          <div className="card hoverable">
            <div className="iconRound pink">
              {/* grid */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </svg>
            </div>
            <div className="cardBody">
              <div className="cardTitle">Module 2: Photoshop</div>
              <p className="cardDesc">
                Adobe Photoshop is a powerful image editing and graphic design tool used for visual creation.
              </p>
              <ul className="bulletList">
                <li>Edit and retouch photos</li>
                <li>Design posters, logos, and banners</li>
                <li>Create social media graphics</li>
                <li>Combine multiple images creatively</li>
              </ul>
            </div>
          </div>

          {/* Module 3 */}
          <div className="card hoverable">
            <div className="iconRound blue">
              {/* code braces */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M7 8L3 12l4 4" />
                <path d="M17 8l4 4-4 4" />
                <path d="M14 4l-4 16" />
              </svg>
            </div>
            <div className="cardBody">
              <div className="cardTitle">Module 3:Affiliate marketing</div>
              <p className="cardDesc">
                Promote products or services using the internet and digital platforms.
              </p>
              <ul className="bulletList">
                <li><b>SEO:</b> Improve ranking on Google</li>
                <li><b>Social Media Marketing:</b> Facebook, Instagram, etc.</li>
                <li><b>Email Marketing:</b> Offers and updates to customers</li>
                <li><b>Content Marketing:</b> Posts, blogs, and videos</li>
                <li><b>Paid Ads:</b> Google or Facebook ads</li>
              </ul>
            </div>
          </div>

          {/* Module 4 */}
          <div className="card hoverable">
            <div className="iconRound green">
              {/* check list */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M9 11l3 3L22 4" />
                <path d="M2 20h20" />
                <path d="M2 10h6" />
                <path d="M2 14h6" />
              </svg>
            </div>
            <div className="cardBody">
              <div className="cardTitle">Module 4: Graphic Design</div>
              <p className="cardDesc">
                The art of visual communication using images, text, and color.
              </p>
              <ul className="bulletList">
                <li>Logos and branding</li>
                <li>Posters and flyers</li>
                <li>Social media posts</li>
                <li>Ads and websites</li>
                <li>
                  <b>Tools:</b> Photoshop, Illustrator, Canva, Figma
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right: Platform Experience + Login/KYC Guide */}
        <div className="col">
          <h3 className="sectionTitle">Platform Experience</h3>

          <div className="feature hoverable">
            <div className="iconSquare">
              {/* terminal/code */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M8 9l-4 3 4 3" />
                <path d="M12 17h8" />
                <rect x="3" y="4" width="18" height="16" rx="2" />
              </svg>
            </div>
            <div className="cardBody">
              <div className="cardDesc">
                Intuitive dashboard with course access, progress tracking, easy payments, and leaderboards.
              </div>
            </div>
          </div>

          {/* Steps to Log In */}
          <h3 className="miniTitle">Steps to Log In</h3>
          <div className="panel">
            <ol className="steps">
              <li>
                Go to{" "}
                <a
                  className="link"
                  href="https://skillhubnepal.com.np/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://skillhubnepal.com.np/login
                </a>{" "}
                in your browser.
              </li>
              <li>Enter your email/username and password.</li>
              <li>Click the Login button.</li>
              <li>
                No account? Click <b>Register</b> or <b>Sign Up</b> to create one first.
              </li>
            </ol>

            <div className="actionsRow">
              <a
                href="https://skillhubnepal.com.np/login"
                target="_blank"
                rel="noopener noreferrer"
                className="btnPrimary small"
              >
                Open Login
              </a>
              <a
                href="https://skillhubnepal.com.np/register"
                target="_blank"
                rel="noopener noreferrer"
                className="btnGhost small"
              >
                Go to Sign Up
              </a>
            </div>
          </div>

          {/* Steps to Verify KYC */}
          <h3 className="miniTitle">Steps to Verify KYC</h3>
          <div className="panel">
            <ol className="steps">
              <li>Log in and open your Dashboard/Profile.</li>
              <li>Find “KYC Verification” or “Verify Account”.</li>
              <li>
                Fill details and upload:
                <ul className="innerList">
                  <li>Full Name, Date of Birth, Address</li>
                  <li>Citizenship/ID Number</li>
                  <li>Clear photo of your ID (citizenship or passport)</li>
                </ul>
              </li>
              <li>Click Submit/Verify.</li>
              <li>Wait for approval — you’ll get an email/notification.</li>
            </ol>
          </div>

          {/* Registration Tips */}
          <h3 className="miniTitle">Registration Tips</h3>
          <div className="panel tips">
            <TipItem text="Use a valid, accessible email — needed for verification and notifications." />
            <TipItem text='Choose a strong password (e.g., "Skill@2025Nepal") with uppercase/lowercase letters, numbers, and symbols.' />
            <TipItem text="Enter your full name exactly as on your ID (helps during KYC verification)." />
          
            <TipItem text="Keep your credentials safe — use a password manager." />
            <TipItem text="Complete KYC early: Dashboard → Profile → KYC Verification. Upload a clear ID scan and a selfie if required." />
            <TipItem text="Don’t share your account — sharing can cause issues during KYC or withdrawals." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="ctaWrap">
        <a href="/day3" className="ctaBlue">
          Proceed to Day 3
        </a>
      </div>

      {/* Styles */}
      <style jsx>{`
        .page {
          --bg: #0b0b0f;
          --card: #16182a;
          --panel: #141726;
          --text: #ffffff;
          --muted: #b5b7c8;
          --accent-start: #a855f7;
          --accent-end: #7c3aed;
          --blue-start: #3b82f6;
          --blue-end: #2563eb;
          --ring: rgba(59, 130, 246, 0.2);

          min-height: 100dvh;
          background:
            radial-gradient(1000px 500px at 80% -20%, rgba(124, 58, 237, 0.18), transparent 70%),
            radial-gradient(900px 500px at -10% -10%, rgba(37, 99, 235, 0.18), transparent 70%),
            var(--bg);
          color: var(--text);
          display: flex;
          flex-direction: column;
        }

        /* HERO */
        .hero {
          max-width: 1100px;
          width: 100%;
          margin: 36px auto 0;
          padding: 0 24px 28px;
          text-align: center;
        }
        .title {
          margin: 6px 0 10px;
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -0.01em;
          font-size: clamp(40px, 6vw, 64px);
        }
        .white { color: #fff; }
        .highlight {
          background: linear-gradient(90deg, var(--accent-start), var(--accent-end));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .subtitle {
          margin: 10px auto 20px;
          color: #d1d1d6;
          opacity: 0.98;
          font-size: 18px;
          line-height: 1.7;
          max-width: 820px;
        }
        .quickActions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 10px;
          flex-wrap: wrap;
        }
        .btnPrimary,
        .btnGhost {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 18px;
          border-radius: 12px;
          font-weight: 800;
          font-size: 15px;
          cursor: pointer;
          text-decoration: none;
        }
        .btnPrimary {
          color: #fff;
          background: linear-gradient(90deg, var(--blue-start), var(--blue-end));
          box-shadow: 0 12px 30px rgba(37, 99, 235, 0.45);
        }
        .btnGhost {
          color: #e5e7eb;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }
        .btnPrimary.small,
        .btnGhost.small {
          padding: 10px 14px;
          border-radius: 10px;
          font-size: 14px;
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
        .sectionTitle,
        .miniTitle {
          margin: 0 0 14px;
          font-weight: 800;
          line-height: 1.2;
          background: linear-gradient(90deg, var(--accent-start), var(--accent-end));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .sectionTitle { font-size: 26px; }
        .miniTitle { font-size: 22px; }

        /* Cards */
        .hoverable { transition: transform 0.2s ease, box-shadow 0.25s ease; }
        .hoverable:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.55), inset 0 0 0 1px rgba(255, 255, 255, 0.06);
        }
        .card,
        .feature {
          display: grid;
          grid-template-columns: 64px 1fr;
          gap: 16px;
          align-items: start;
          background: var(--card);
          border-radius: 16px;
          padding: 18px 18px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.05), 0 16px 34px rgba(0, 0, 0, 0.5);
          margin-bottom: 16px;
        }
        .iconRound,
        .iconSquare {
          display: grid;
          place-items: center;
          color: #fff;
        }
        .iconRound {
          width: 56px;
          height: 56px;
          border-radius: 999px;
        }
        .iconRound.violet { background: linear-gradient(180deg, #c084fc, #7c3aed); box-shadow: 0 14px 26px rgba(124, 58, 237, 0.35); }
        .iconRound.pink { background: linear-gradient(180deg, #fb7185, #ec4899); box-shadow: 0 14px 26px rgba(236, 72, 153, 0.35); }
        .iconRound.blue { background: linear-gradient(180deg, #60a5fa, #2563eb); box-shadow: 0 14px 26px rgba(59, 130, 246, 0.35); }
        .iconRound.green { background: linear-gradient(180deg, #34d399, #059669); box-shadow: 0 14px 26px rgba(16, 185, 129, 0.35); }
        .iconSquare {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: linear-gradient(180deg, #60a5fa 0%, #2563eb 100%);
          box-shadow: 0 14px 26px rgba(59, 130, 246, 0.35);
        }
        .cardBody { text-align: left; }
        .cardTitle {
          color: #fff;
          font-weight: 800;
          font-size: 19px;
          margin-bottom: 6px;
        }
        .chipRow { display: flex; gap: 8px; margin: 6px 0 6px; flex-wrap: wrap; }
        .chip {
          padding: 6px 10px;
          font-size: 12px;
          border-radius: 999px;
          color: #e6e9f5;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          font-weight: 700;
          letter-spacing: 0.2px;
        }
        .cardDesc {
          color: var(--muted);
          font-size: 15px;
          line-height: 1.7;
        }
        .bulletList {
          margin: 8px 0 2px 0;
          padding-left: 18px;
          color: #cbd2e1;
          line-height: 1.7;
        }
        .bulletList li { margin: 6px 0; }

        /* Right panels */
        .panel {
          background: var(--panel);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 16px 18px;
          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.05), 0 16px 34px rgba(0, 0, 0, 0.5);
          margin-bottom: 16px;
        }
        .steps {
          counter-reset: step;
          display: grid;
          gap: 10px;
          margin: 0;
          padding-left: 0;
          list-style: none;
          color: #d9dbe7;
        }
        .steps > li {
          position: relative;
          padding-left: 40px;
          line-height: 1.65;
        }
        .steps > li::before {
          counter-increment: step;
          content: counter(step);
          position: absolute;
          left: 0;
          top: 2px;
          width: 28px;
          height: 28px;
          display: grid;
          place-items: center;
          border-radius: 999px;
          background: linear-gradient(180deg, var(--blue-start), var(--blue-end));
          color: #fff;
          font-weight: 800;
          font-size: 13px;
          box-shadow: 0 8px 18px var(--ring);
        }
        .innerList {
          margin-top: 6px;
          padding-left: 18px;
          list-style: disc;
          color: #cbd2e1;
        }
        .actionsRow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 12px;
          flex-wrap: wrap;
        }
        .link {
          color: #93c5fd;
          text-decoration: underline;
        }

        .tips :global(p) { margin: 0; }

        .ctaWrap {
          text-align: center;
          padding: 14px 24px 60px;
        }
        .ctaBlue {
          display: inline-block;
          padding: 14px 26px;
          border-radius: 999px;
          border: 0;
          font-weight: 800;
          font-size: 17px;
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
          .title { font-size: 40px; }
          .subtitle { font-size: 16px; }
        }
      `}</style>
    </main>
  );
}

/* Small helper for tips (Tailwind-like look with local styles) */
function TipItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 w-6 h-6 grid place-items-center rounded-full bg-gradient-to-b from-emerald-400 to-emerald-600">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <p className="text-slate-300">{text}</p>
    </div>
  );
}