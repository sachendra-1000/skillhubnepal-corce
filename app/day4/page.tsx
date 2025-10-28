import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0b0b0f] text-white">
      {/* ambient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-12 h-72 w-72 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute -top-16 left-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[110px]" />
        <div className="absolute bottom-10 right-1/3 h-72 w-72 rounded-full bg-violet-600/10 blur-3xl" />
      </div>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="py-10 text-center sm:py-12 md:py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold text-slate-200 sm:text-xs">
            Day 4
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Personal Branding & Content
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            <span className="text-white">Personal Branding</span>{" "}
            <span className="bg-gradient-to-r from-[#a855f7] to-[#7c3aed] bg-clip-text text-transparent">
              & Content Strategy
            </span>
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-[#d1d1d6] sm:text-base md:text-lg">
            Build a compelling online presence and create content that resonates with your audience.
          </p>
        </section>

        {/* Personal Branding */}
        <SectionTitle icon={<SparkIcon />}>What is Personal Branding?</SectionTitle>
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <p className="text-sm leading-relaxed text-slate-200 sm:text-base md:text-lg">
              Define your personal brand by identifying your unique values, skills, and passions.
              Your brand is your story — what makes you stand out?
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300 sm:text-base">
              <Rule>Clarify your niche and audience.</Rule>
              <Rule>Pick 2–3 platforms you’ll focus on.</Rule>
              <Rule>Create a consistent visual identity.</Rule>
            </ul>
          </Card>

          {/* Responsive image with aspect ratio */}
          <div className="relative mx-auto w-full max-w-sm sm:max-w-md md:max-w-none md:w-full aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-[0_18px_55px_rgba(0,0,0,0.45)]">
            <Image
              src="/images/Perosnal-branding.jpg"
              alt="Branding example with logo and visual identity"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Building Your Online Identity */}
        <SectionTitle icon={<SparkIcon />}>Building Your Online Identity</SectionTitle>
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <p className="text-sm leading-relaxed text-slate-200 sm:text-base md:text-lg">
              Optimize your social profiles (Instagram, LinkedIn, YouTube) with a strong bio,
              relevant keywords, and a clean link hub (e.g., Linktree). Keep your visuals on brand.
            </p>
            <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-slate-300 sm:grid-cols-2 sm:text-base">
              <Rule>Clear headline/bio</Rule>
              <Rule>Branded profile + banner</Rule>
              <Rule>Pinned post with CTA</Rule>
              <Rule>Link hub to offers/pages</Rule>
            </ul>
          </Card>

          <div className="relative mx-auto w-full max-w-sm sm:max-w-md md:max-w-none md:w-full aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-[0_18px_55px_rgba(0,0,0,0.45)]">
            <Image
              src="/images/Online-identity.jpg"
              alt="Optimized social profile preview"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Content Strategy */}
        <section className="mt-10">
          <SectionTitle icon={<StrategyIcon />}>Content Strategy</SectionTitle>

          <div className="mt-4 rounded-2xl border border-white/10 bg-[#141726]/80 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.45)] backdrop-blur sm:p-6 md:p-8">
            <h3 className="text-base font-semibold text-white sm:text-lg">
              Plan a 7‑day calendar with educational posts, testimonials, and engaging formats
              (reels, carousels) to promote Skill Hub Nepal.
            </h3>

            <Callout>
              Pro tip: Batch‑create content for the week in one sitting and schedule it using tools
              like Meta Business Suite or Buffer.
            </Callout>

            <SectionTitle icon={<SparkIcon />}>Mini‑Assignment</SectionTitle>
            <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card>
                <p className="text-sm leading-relaxed text-slate-200 sm:text-base md:text-lg">
                  Create a personal brand profile (bio + profile picture) and publish one promotional
                  post (short video or carousel). Share it with your network.
                </p>
              </Card>

              <div className="relative mx-auto w-full max-w-sm sm:max-w-md md:max-w-none aspect-[1/1] overflow-hidden rounded-2xl border border-white/10 shadow-[0_18px_55px_rgba(0,0,0,0.45)]">
                <Image
                  src="/images/Content-straregy.jpg"
                  alt="Sample promotional post"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Pillars */}
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Pillar number="1. Plan" color="from-purple-400 to-fuchsia-500">
                Define content goals, choose key themes (pillars), and map posts to a weekly calendar.
              </Pillar>
              <Pillar number="2. Create" color="from-blue-400 to-indigo-500">
                Produce high‑quality content (posts, videos, carousels) that solves your audience’s
                problems and showcases your expertise.
              </Pillar>
              <Pillar number="3. Distribute" color="from-emerald-400 to-teal-500">
                Publish across the right channels and repurpose content to maximize reach and impact.
              </Pillar>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="flex flex-col items-center justify-center gap-3 py-10 sm:py-12">
          <Link
            href="/day5"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#2563eb] px-5 py-2.5 text-sm font-extrabold text-white shadow-[0_10px_26px_rgba(37,99,235,0.4)] transition hover:from-[#60a5fa] hover:to-[#3b82f6] hover:shadow-[0_10px_30px_rgba(37,99,235,0.5)] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] sm:px-6 sm:py-3 sm:text-base"
          >
            Proceed to Day 5 →
          </Link>
          <p className="text-[11px] text-slate-400 sm:text-xs">You can revisit this guide anytime.</p>
        </div>
      </main>
    </div>
  );
}

/* -------------- Section Title -------------- */
function SectionTitle({
  icon,
  children,
}: {
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <h2 className="mt-8 flex items-center gap-3 text-lg font-extrabold tracking-tight sm:text-xl md:text-2xl">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-b from-[#c084fc] to-[#7c3aed] text-white shadow-[0_10px_22px_rgba(124,58,237,0.35)] sm:h-9 sm:w-9">
        {icon}
      </span>
      <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
        {children}
      </span>
    </h2>
  );
}

/* -------------- UI Building Blocks -------------- */
function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0f1220]/80 p-4 shadow-[0_18px_55px_rgba(0,0,0,0.45)] backdrop-blur sm:p-6">
      {children}
    </div>
  );
}

function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-100 sm:px-4 sm:py-3 sm:text-sm">
      <div className="flex items-start gap-2">
        <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400 text-[#0b0b0f]">
          ✓
        </span>
        <p>{children}</p>
      </div>
    </div>
  );
}

function Rule({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <CheckIcon className="mt-0.5 h-4 w-4 text-[#c084fc] sm:h-5 sm:w-5" />
      <span className="text-slate-300">{children}</span>
    </li>
  );
}

function Pillar({
  number,
  children,
  color = "from-purple-400 to-fuchsia-500",
}: {
  number: string;
  children: ReactNode;
  color?: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0f1220]/80 p-4 shadow-[0_18px_55px_rgba(0,0,0,0.45)] backdrop-blur sm:p-5">
      <div className={`inline-flex items-center rounded-full bg-gradient-to-r ${color} px-3 py-1 text-[11px] font-bold text-black/90 sm:text-xs`}>
        {number}
      </div>
      <p className="mt-3 text-sm text-slate-300 sm:text-[15px]">{children}</p>
    </div>
  );
}

/* -------------- Tiny SVG Icons -------------- */
function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M12 2l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z" />
    </svg>
  );
}

function StrategyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <path d="M6 8v4a6 6 0 006 6h6" />
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