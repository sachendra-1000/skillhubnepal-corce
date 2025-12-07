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

        {/* Profile Building in Affiliate Marketing */}
        <SectionTitle icon={<SparkIcon />}>
          Profile Building in Affiliate Marketing
        </SectionTitle>
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-base font-semibold text-white sm:text-lg">
              Active Social Media Platforms
            </h3>
            <p className="mt-1 text-sm text-slate-300 sm:text-base">
              Instagram, Facebook, YouTube, TikTok
            </p>

            <h3 className="mt-4 text-base font-semibold text-white sm:text-lg">
              How to Create a Professional TikTok Profile and Build Your Brand
            </h3>

            <ol className="mt-3 space-y-3 text-sm text-slate-300 sm:text-base">
              <li>
                <strong>1. Your Profile Is Your Showroom:</strong> Your profile creates the first
                impression—keep it clean, clear, and professional.
              </li>
              <li>
                <strong>2. Switch From Personal to Business Account:</strong> A business account
                gives you analytics, insights, and access to useful features.
              </li>
              <li>
                <strong>3. Username:</strong> Your username is your identity. Keep it simple,
                professional, and easy to remember.
              </li>
              <li>
                <strong>4. Name:</strong> Use a name connected to your unique profession to improve
                SEO. Example:{" "}
                <span className="italic">Digital Marketer | Affiliate Expert</span>.
              </li>
              <li>
                <strong>5. Profile Picture:</strong> Use a clear, high-quality smiling photo. This
                small image represents your entire brand.
              </li>
              <li>
                <strong>6. Bio:</strong> Your bio shows who you are, what you do, and why people
                should follow you.
                <br />
                <span className="mt-1 block font-semibold text-slate-200">
                  Three-Step Bio Formula:
                </span>
                <span className="block">
                  <span className="font-medium">Who are you?</span> Digital Marketer,
                  Entrepreneur, Business Coach.
                </span>
                <span className="block">
                  <span className="font-medium">What do you do?</span> I help people earn online,
                  teach productivity and growth, mentor beginners in freelancing.
                </span>
                <span className="block">
                  <span className="font-medium">Call to Action (CTA):</span> DM “I’m ready” to
                  start earning. DM “Info” for complete details.
                </span>
              </li>
              <li>
                <strong>7. Link:</strong> Add your website, landing page, or WhatsApp link to drive
                traffic and conversions.
              </li>
              <li>
                <strong>8. Base Is Ready – Now Focus on Stories & Content:</strong> Once your
                profile is set, focus on creating valuable and consistent content.
              </li>
              <li>
                <strong>9. Story Ideas:</strong> Share engaging and authentic stories such as your
                personal journey, daily earnings (without exaggeration), team feedback, proof of
                payments, and testimonials.
              </li>
            </ol>
          </Card>

          <div className="relative mx-auto w-full max-w-sm sm:max-w-md md:max-w-none md:w-full aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-[0_18px_55px_rgba(0,0,0,0.45)]">
            <Image
              src="/images/Online-identity.jpg"
              alt="Example of a professional TikTok-focused profile"
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

            {/* New Content Creation Section (replaces Mini‑Assignment) */}
            <SectionTitle icon={<SparkIcon />}>
              Content Creation in Affiliate Marketing
            </SectionTitle>

            <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <Card>
                <h3 className="text-base font-semibold text-white sm:text-lg">
                  Steps for Effective Content Creation
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-300 sm:text-base">
                  <li>a. Knowledge about content creation</li>
                  <li>b. Niche selection</li>
                  <li>c. Viral content formats</li>
                  <li>d. Shooting equipment</li>
                  <li>e. Actionable steps</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-base font-semibold text-white sm:text-lg">
                  Why Content Creation Is Powerful
                </h3>
                <p className="mt-2 text-sm text-slate-300 sm:text-base">
                  Content creation helps you:
                </p>
                <ul className="mt-2 space-y-2 text-sm text-slate-300 sm:text-base">
                  <li>Build a strong personal brand</li>
                  <li>Strengthen your social media presence</li>
                  <li>Reach new audiences</li>
                  <li>Grow your business</li>
                  <li>Generate leads</li>
                  <li>Earn more profit from those leads</li>
                </ul>
                <p className="mt-3 text-sm text-slate-300 sm:text-base">
                  You can start your personal brand journey through content creation.
                </p>
              </Card>
            </div>

            <h3 className="mt-8 text-base font-semibold text-white sm:text-lg">
              1st Step of Content Creation: Niche Selection
            </h3>
            <p className="mt-2 text-sm text-slate-300 sm:text-base">
              Your niche is the category of content you will create. Choose a niche based on the
              audience you want to target.
            </p>
            <p className="mt-1 text-sm text-slate-300 sm:text-base">
              Examples: Digital Marketing, Fitness, Finance, Motivation, Skincare, Travel, etc.
            </p>

            <h3 className="mt-6 text-base font-semibold text-white sm:text-lg">
              2nd Step of Content Creation: Viral Content Formats
            </h3>
            <p className="mt-2 text-sm text-slate-300 sm:text-base">
              Here are 5 powerful viral content formats:
            </p>
            <ul className="mt-2 space-y-2 text-sm text-slate-300 sm:text-base">
              <li>
                <strong>Document Your Journey:</strong> Share your real-life experiences—people love
                hearing others’ stories.
              </li>
              <li>
                <strong>Fake Podcast Style:</strong> A trending format that looks like a podcast
                conversation.
              </li>
              <li>
                <strong>Whiteboard Content:</strong> Very engaging and educational, especially for
                explanation-type videos.
              </li>
              <li>
                <strong>Multiple Angles:</strong> Different angles keep the viewer’s attention and
                improve watch time.
              </li>
              <li>
                <strong>Visual Hook:</strong> Start with something eye-catching and end with
                valuable information.
              </li>
            </ul>

            <h3 className="mt-6 text-base font-semibold text-white sm:text-lg">
              Quality Is the Most Important Factor
            </h3>
            <p className="mt-2 text-sm text-slate-300 sm:text-base">
              5 Essential Equipments to Improve Content Quality:
            </p>
            <ul className="mt-2 space-y-2 text-sm text-slate-300 sm:text-base">
              <li>A. Camera or Mobile (good video quality)</li>
              <li>B. Tripod (stable shots)</li>
              <li>C. Microphone (clear sound = professional content)</li>
              <li>D. Lighting (enhances your face and overall video quality)</li>
              <li>E. Background Setup (makes videos look clean and attractive)</li>
            </ul>

            <h3 className="mt-6 text-base font-semibold text-white sm:text-lg">
              3 Actionable Steps
            </h3>
            <ol className="mt-2 space-y-3 text-sm text-slate-300 sm:text-base">
              <li>
                <strong>A. Study Top Creators in Your Niche</strong>
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  <li>Visit their profiles</li>
                  <li>Get ideas</li>
                  <li>Identify their viral videos</li>
                  <li>Understand what your audience engages with</li>
                </ul>
              </li>
              <li>
                <strong>B. Create Three Reels in Every Format</strong>
                <p className="mt-1">
                  Test all formats and see which style performs the best. This helps you understand
                  what your audience likes.
                </p>
              </li>
              <li>
                <strong>C. Consistency Is Everything</strong>
                <p className="mt-1">
                  Posting regularly will help your content reach more people and grow faster.
                </p>
              </li>
            </ol>

            {/* Pillars */}
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Pillar number="1. Plan" color="from-purple-400 to-fuchsia-500">
                Define content goals, choose key themes (pillars), and map posts to a weekly
                calendar.
              </Pillar>
              <Pillar number="2. Create" color="from-blue-400 to-indigo-500">
                Produce high‑quality content (posts, videos, carousels) that solves your audience’s
                problems and showcases your expertise.
              </Pillar>
              <Pillar number="3. Distribute" color="from-emerald-400 to-teal-500">
                Publish across the right channels and repurpose content to maximize reach and
                impact.
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
          <p className="text-[11px] text-slate-400 sm:text-xs">
            You can revisit this guide anytime.
          </p>
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
      <div
        className={`inline-flex items-center rounded-full bg-gradient-to-r ${color} px-3 py-1 text-[11px] font-bold text-black/90 sm:text-xs`}
      >
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
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
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