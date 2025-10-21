import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      <Header />

      <main className="mx-auto max-w-6xl px-4">
        {/* Hero */}
        <section className="py-12 text-center md:py-16">
          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            <span className="text-white">Day 4:</span>{" "}
            <span className="bg-gradient-to-r from-[#a855f7] to-[#7c3aed] bg-clip-text text-transparent">
             Personal Branding & Content Strategy
            </span>
          </h1>
          <p className="mt-3 text-sm text-[#d1d1d6] md:text-base">
            Master the art of building a compelling online presence and creating content that
            resonates.
          </p>
        </section>

        {/* Personal Branding */}
        <section className="mt-2">
          <SectionTitle icon={<SparkIcon />}>What is Personal Branding?</SectionTitle>

          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <Card>
              
              <p className="mt-2 text-sm text-[#e9e9ee]">
                Define your personal brand by identifying your unique values, skills, and
                passions. Your brand is your story. What makes you stand out?
              </p>


            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-white">
                Actionable Insights
              </h3>
              <p className="mt-2 text-sm text-[#e9e9ee]">
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

          <div className="mt-4 rounded-2xl border border-white/[0.06] bg-[#23263a] p-6 shadow-[0_1px_0_rgba(255,255,255,0.04),0_14px_30px_rgba(0,0,0,0.45)] md:p-8">
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
          <Link href="/day5">
            <button
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#2563eb] px-6 py-3 font-extrabold text-white shadow-[0_10px_26px_rgba(37,99,235,0.4)] transition hover:from-[#60a5fa] hover:to-[#3b82f6] hover:shadow-[0_10px_30px_rgba(37,99,235,0.5)] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
              type="button"
            >
              Proceed to Day 5 →
            </button>
          </Link>

        </div>
      </main>
    </div>
  );
}

/* -------------- Layout: Header + Section Title -------------- */

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/[0.06] bg-[#0b0b0f]/80 backdrop-blur">
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

        <nav className="hidden items-center gap-8 text-sm text-[#e5e5e5] md:flex">
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
      <span className="text-[#c084fc]">{icon}</span>
      {children}
    </h2>
  );
}

/* -------------- UI Building Blocks -------------- */

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-[#181a2a] p-6 shadow-[0_1px_0_rgba(255,255,255,0.04),0_14px_30px_rgba(0,0,0,0.45)]">
      {children}
    </div>
  );
}

function Rule({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <CheckIcon className="mt-0.5 h-5 w-5 text-[#c084fc]" />
      <span className="text-[#a1a1aa]">{children}</span>
    </li>
  );
}

function Dot({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#c084fc]" />
      <span className="text-[#a1a1aa]">{children}</span>
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
    <div className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-[#181a2a] p-5 shadow-[0_1px_0_rgba(255,255,255,0.04),0_14px_30px_rgba(0,0,0,0.45)]">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-b from-[#c084fc] to-[#7c3aed] shadow-[0_10px_22px_rgba(124,58,237,0.35)] text-white">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-white">{title}</h4>
        <p className="mt-0.5 text-xs text-[#a1a1aa]">{desc}</p>
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
    <div className="rounded-xl border border-white/[0.06] bg-[#181a2a] p-5 shadow-[0_1px_0_rgba(255,255,255,0.04),0_14px_30px_rgba(0,0,0,0.45)]">
      <div
        className={`inline-flex items-center rounded-full bg-gradient-to-r ${color} px-3 py-1 text-xs font-bold text-black/90`}
      >
        {number}
      </div>
      <p className="mt-3 text-sm text-[#a1a1aa]">{children}</p>
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