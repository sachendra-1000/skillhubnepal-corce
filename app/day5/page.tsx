"use client";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0b0b12] text-gray-200">
      <Header />

      <main className="mx-auto max-w-6xl px-4">
        {/* Progress + Hero */}
        <section className="pt-8 text-center md:pt-12">
          <StepDots current={5} />
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight md:text-5xl">
            Day 5:{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-600 bg-clip-text text-transparent">
              Promotion & Implementation
            </span>
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-gray-400 md:text-base">
            You’ve mastered the skills, now it’s time to showcase them to the world.
            Let’s explore how to promote and implement your newfound knowledge.
          </p>
        </section>

        {/* Two columns */}
        <section className="mt-8 grid gap-6 md:mt-10 md:grid-cols-2">
          {/* Left: Promotion Strategies */}
          <Panel title="Promotion Strategies" accent="text-sky-400" icon={<MegaphoneIcon />}>
            <Block title="Build Your Brand">
              Create a compelling personal or project brand. Develop a logo,
              a tagline, and a consistent visual identity to stand out.
            </Block>

            <Block title="Content Marketing">
              Share your expertise through blog posts, videos, or social media
              content. Provide value and attract your target audience.
            </Block>

            <Block title="Social Media Engagement">
              Identify the platforms where your audience is most active. Engage in
              conversations, share insights, and build a community.
            </Block>

            <Block title="Networking">
              Connect with peers, mentors, and potential clients or employers
              online and offline. Attend virtual meetups and industry events.
            </Block>
          </Panel>

          {/* Right: Implementation Plan */}
          <Panel title="Implementation Plan" accent="text-purple-300" icon={<PlanIcon />}>
            <Block title="Create a Portfolio">
              Showcase your best work. A portfolio is a powerful tool to demonstrate
              your skills to potential employers or clients.
            </Block>

            <Block title="Launch a Pilot Project">
              Apply your skills to a small‑scale project. This is a great way to gain
              practical experience and gather feedback.
            </Block>

            <Block title="Seek Feedback & Iterate">
              Share your work and be open to constructive criticism. Use feedback to
              improve and refine your skills and projects.
            </Block>

            <Block title="Set Clear Goals">
              Define what you want to achieve. Set measurable, short‑term and
              long‑term goals to track your progress.
            </Block>
          </Panel>
        </section>

        {/* CTA */}
        <div className="flex items-center justify-center py-10">
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-600/30 transition hover:from-purple-500 hover:to-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
          >
            Complete Journey & Get Certified
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </main>
    </div>
  );
}

/* ---------------- Layout: Header ---------------- */

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0b0b12]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-extrabold tracking-tight text-white">
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src="/images/srk-logo.png" className="brand" style={{ height: 70 }} />
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 22 }}>Skill Hub Nepal</span>
        </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          <NavLink href="">Home</NavLink>
          
          <NavLink href="#">About</NavLink>
          
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="transition hover:text-white/90">{children}</Link>;
}

/* ---------------- Reusable UI ---------------- */

function StepDots({ current }: { current: number }) {
  const steps = [1, 2, 3, 4, 5];
  return (
    <div className="flex items-center justify-center gap-3">
      {steps.map((n) => (
        <div
          key={n}
          className={[
            "flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold",
            n === current
              ? "border-purple-400 bg-purple-600 text-white ring-2 ring-fuchsia-400/50"
              : "border-white/10 bg-white/5 text-gray-300",
          ].join(" ")}
        >
          {n}
        </div>
      ))}
    </div>
  );
}

function Panel({
  title,
  children,
  accent = "text-white",
  icon,
}: {
  title: string;
  children: React.ReactNode;
  accent?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 shadow-xl ring-1 ring-white/5">
      <h3 className={`flex items-center gap-2 text-xl font-extrabold ${accent}`}>
        <span className="text-purple-400">{icon}</span>
        {title}
      </h3>
      <div className="mt-4 space-y-5">{children}</div>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-semibold text-white">{title}</h4>
      <p className="mt-1 text-sm leading-relaxed text-gray-300">{children}</p>
    </div>
  );
}

/* ---------------- Tiny SVG Icons (no deps) ---------------- */

function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

function MegaphoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M3 11v2a2 2 0 002 2h2l5 3V6l-5 3H5a2 2 0 00-2 2z" />
      <path d="M14 10h1a5 5 0 015 5v0" />
    </svg>
  );
}

function PlanIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M7 8h10M7 12h6" />
    </svg>
  );
}