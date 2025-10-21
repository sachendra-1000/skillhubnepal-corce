import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0b0b12] text-gray-200">
      <Header />

      <main className="mx-auto max-w-6xl px-4">
        {/* Hero */}
        <section className="py-12 text-center md:py-16">
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Day 4:{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-600 bg-clip-text text-transparent">
             Personal Branding & Content Strategy
            </span>
          </h1>
          <p className="mt-3 text-sm text-gray-400 md:text-base">
            Master the art of building a compelling online presence and creating content that
            resonates.
          </p>
        </section>

        {/* Personal Branding */}
        <section className="mt-2">
          <SectionTitle icon={<SparkIcon />}>What is Personal Branding?</SectionTitle>

          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <Card>
              
              <p className="mt-2 text-sm text-gray-300">
                Define your personal brand by identifying your unique values, skills, and
                passions. Your brand is your story. What makes you stand out?
              </p>


            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-white">
                Actionable Insights
              </h3>
              <p className="mt-2 text-sm text-gray-300">
                Apply these steps to start building your brand today:
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                <Dot>Audit your current online presence.</Dot>
                <Dot>Optimize your social media profiles.</Dot>
              </ul>
            </Card>
          </div>
        </section>

        {/* Content Creation Tools */}
        <section className="mt-10">
          <SectionTitle icon={<ToolboxIcon />}>Content Creation Tools</SectionTitle>

          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <ToolCard
              icon={<VisualsIcon />}
              title="Visuals"
              desc="Canva, Figma, Adobe Spark"
            />
            <ToolCard
              icon={<VideoIcon />}
              title="Video"
              desc="InShot, CapCut, DaVinci Resolve"
            />
            <ToolCard
              icon={<WritingIcon />}
              title="Writing"
              desc="Grammarly, Hemingway App"
            />
          </div>
        </section>

        {/* Content Strategy */}
        <section className="mt-10">
          <SectionTitle icon={<StrategyIcon />}>Content Strategy</SectionTitle>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl ring-1 ring-white/5 md:p-8">
            <h3 className="text-lg font-semibold text-white">
              The 3 Pillars of a Winning Content Strategy
            </h3>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <Pillar number="1. Plan" color="from-purple-400 to-fuchsia-500">
                Define your content goals, identify your key themes (content pillars), and
                create a content calendar to stay organized and consistent.
              </Pillar>
              <Pillar number="2. Create" color="from-blue-400 to-indigo-500">
                Produce high-quality, valuable content in various formats (blog posts,
                videos, podcasts, infographics) that addresses your audience’s pain points.
              </Pillar>
              <Pillar number="3. Distribute" color="from-emerald-400 to-teal-500">
                Promote your content across relevant channels (social media, email
                newsletters, online communities) to maximize its reach and impact.
              </Pillar>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="flex flex-col items-center justify-center gap-3 py-10">
          <button
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-600/30 transition hover:from-purple-500 hover:to-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
            type="button"
          >
        <Link
            href="/day5"
            className="text-sm font-medium text-purple-300 transition hover:text-purple-200"
          >
            Proceed to Day 5 →
          </Link>
          </button>

        </div>
      </main>
    </div>
  );
}

/* -------------- Layout: Header + Section Title -------------- */

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0b0b12]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="text-lg font-extrabold tracking-tight text-white"
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src="/images/srk-logo.png" className="brand" style={{ height: 70 }} />
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 22 }}>Skill Hub Nepal</span>
        </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          <NavLink href="#">Home</NavLink>
         
          <NavLink href="#">About</NavLink>
          
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="transition hover:text-white/90"
    >
      {children}
    </Link>
  );
}

function SectionTitle({
  icon,
  children,
}: {
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <h2 className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-white">
      <span className="text-purple-400">{icon}</span>
      {children}
    </h2>
  );
}

/* -------------- UI Building Blocks -------------- */

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 shadow-xl ring-1 ring-white/5">
      {children}
    </div>
  );
}

function Rule({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <CheckIcon className="mt-0.5 h-5 w-5 text-purple-400" />
      <span className="text-gray-300">{children}</span>
    </li>
  );
}

function Dot({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-purple-400" />
      <span className="text-gray-300">{children}</span>
    </li>
  );
}

function ToolCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow ring-1 ring-white/5">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 ring-1 ring-inset ring-purple-400/30">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-white">{title}</h4>
        <p className="mt-0.5 text-xs text-gray-400">{desc}</p>
      </div>
    </div>
  );
}

function Pillar({
  number,
  children,
  color = "from-purple-400 to-fuchsia-500",
}: {
  number: string;
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 ring-1 ring-white/5">
      <div
        className={`inline-flex items-center rounded-full bg-gradient-to-r ${color} px-3 py-1 text-xs font-bold text-black/90`}
      >
        {number}
      </div>
      <p className="mt-3 text-sm text-gray-300">{children}</p>
    </div>
  );
}

/* -------------- Tiny SVG Icons (no extra deps) -------------- */

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M12 2l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z" />
    </svg>
  );
}

function ToolboxIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <path d="M7 7V5a2 2 0 012-2h6a2 2 0 012 2v2" />
    </svg>
  );
}

function StrategyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <path d="M6 8v4a6 6 0 006 6h6" />
    </svg>
  );
}

function VisualsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M4 5h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2z" opacity=".35" />
      <path d="M8 13l3-3 5 6H6l2-3z" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="5" width="14" height="14" rx="2" />
      <path d="M17 9l4-2v10l-4-2z" />
    </svg>
  );
}

function WritingIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4 12.5-12.5z" />
    </svg>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" className="opacity-50" />
      <path d="M8 12.5l2.5 2.5L16 9.5" />
    </svg>
  );
}

function CheckBold({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M9 16.2l-3.5-3.5 1.4-1.4L9 13.4l7.1-7.1 1.4 1.4z" />
    </svg>
  );
}