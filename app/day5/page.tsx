"use client";
import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#000] text-white">
      <main className="mx-auto max-w-6xl px-4">
        {/* Progress + Hero */}
        <section className="pt-8 text-center md:pt-12">
          <StepDots current={5} />
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight md:text-5xl">
            <span className="text-white">Day 5:</span>{" "}
            <span className="bg-gradient-to-r from-[#a855f7] to-[#7c3aed] bg-clip-text text-transparent">
              Promotion & Implementation
            </span>
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-[#d1d1d6] md:text-base">
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
              <Image
                src="/images/Build-your-brand.jpg"
                alt="Branding example with logo and visual identity"
                width={300}
                height={200}
                className="mt-2 rounded-lg"
              />
            </Block>

            <Block title="Content Marketing">
              Share your expertise through blog posts, videos, or social media
              content. Provide value and attract your target audience.
              <Image
                src="/images/Content-marketing.jpg"
                alt="Content marketing example"
                width={300}
                height={200}
                className="mt-2 rounded-lg"
              />
            </Block>

            <Block title="Social Media Engagement">
              Identify the platforms where your audience is most active. Engage in
              conversations, share insights, and build a community.
              <Image
                src="/images/Social-media-engagement.png"
                alt="Social media engagement example"
                width={300}
                height={200}
                className="mt-2 rounded-lg"
              />
            </Block>

            <Block title="Networking">
              Connect with peers, mentors, and potential clients or employers
              online and offline. Attend virtual meetups and industry events.
              <Image
                src="/images/Networking.jpg"
                alt="Networking example"
                width={300}
                height={200}
                className="mt-2 rounded-lg"
              />
            </Block>
          </Panel>

          {/* Right: Implementation Plan */}
          <Panel title="Implementation Plan" accent="text-purple-300" icon={<PlanIcon />}>
            <Block title="Create a Portfolio">
              Showcase your best work. A portfolio is a powerful tool to demonstrate
              your skills to potential employers or clients.
              <Image
                src="/images/Portfolio.jpg"
                alt="Portfolio example"
                width={300}
                height={200}
                className="mt-2 rounded-lg"
              />
            </Block>

            <Block title="Launch a Pilot Project">
              Apply your skills to a small‑scale project. This is a great way to gain
              practical experience and gather feedback.
              <Image
                src="/images/Pilot-Project.jpg"
                alt="Pilot project example"
                width={300}
                height={200}
                className="mt-2 rounded-lg"
              />
            </Block>

            <Block title="Set Clear Goals">
              Define what you want to achieve. Set measurable, short‑term and
              long‑term goals to track your progress.
              <Image
                src="/images/Set-Clear-Goals.jpg"
                alt="Goal setting example"
                width={300}
                height={200}
                className="mt-2 rounded-lg"
              />
            </Block>
          </Panel>
        </section>

        {/* Lead Generation in Affiliate Marketing */}
        <section className="mt-10">
          <Panel
            title="Lead Generation in Affiliate Marketing"
            accent="text-emerald-300"
            icon={<MegaphoneIcon />}
          >
            <div className="space-y-6 text-sm leading-relaxed text-[#a1a1aa]">
              <p>
                Having great content and a strong profile is important, but without leads, your
                business cannot move forward. Just like a car cannot run without fuel, your
                affiliate business cannot grow without leads.{" "}
                <span className="font-semibold text-emerald-300">
                  More leads = more customers = more profit.
                </span>
              </p>

              <div>
                <h4 className="font-semibold text-white">
                  Things to Remember Before Starting Lead Generation
                </h4>
                <ol className="mt-2 space-y-3 list-decimal pl-5">
                  <li>
                    <span className="font-semibold text-white">Educate Your Audience</span>
                    <p className="mt-1">
                      Be a giver. Provide value first. Your audience will judge whether you can
                      guide them or not. When you consistently give value, people start trusting you
                      and become interested in working with you.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold text-white">
                      Everyone Is Not Your Customer
                    </span>
                    <p className="mt-1">
                      Don’t try to convince everyone. Focus on people who truly need your offer.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold text-white">
                      Have a Clear Follow-Up Process
                    </span>
                    <p className="mt-1">
                      After generating leads, you must know how to guide them properly. If you don’t
                      have a clear system, you will lose your leads.
                    </p>
                  </li>
                </ol>
              </div>

              <div>
                <h4 className="font-semibold text-white">Types of Lead Generation</h4>
                <p className="mt-1">There are 2 main types:</p>
              </div>

              {/* Organic Lead Generation */}
              <div>
                <h5 className="font-semibold text-emerald-300">
                  1. Organic Lead Generation (without spending money)
                </h5>
                <p className="mt-1">
                  Organic lead generation means attracting people to you through value and content.
                </p>

                <p className="mt-2 font-semibold text-white">Examples:</p>
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  <li>Attraction marketing</li>
                  <li>Content creation</li>
                  <li>Magnetic marketing</li>
                </ul>

                <p className="mt-3 font-semibold text-white">Organic Platforms:</p>
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  <li>Instagram Reels</li>
                  <li>YouTube Shorts</li>
                  <li>TikTok Reels</li>
                </ul>

                <div className="mt-4">
                  <h6 className="font-semibold text-white">
                    How to Promote Your Opportunity Through Reels
                  </h6>
                  <p className="mt-1">
                    If you plan to upload <span className="font-semibold">10 reels</span>:
                  </p>
                  <ul className="mt-1 list-disc space-y-1 pl-5">
                    <li>
                      <span className="font-semibold">6 reels</span> should be valuable,
                      educational, or lifestyle-related.
                    </li>
                    <li>
                      <span className="font-semibold">4 reels</span> can be direct promotional
                      content.
                    </li>
                  </ul>
                  <p className="mt-1">
                    This keeps your audience engaged and builds long-term trust.
                  </p>
                </div>

                <div className="mt-4">
                  <h6 className="font-semibold text-white">
                    DM Strategy (How to Reply Professionally)
                  </h6>
                  <p className="mt-1">
                    People don’t accept your offer if your personal brand and social media presence
                    are weak. You must look professional.
                  </p>

                  <p className="mt-2 font-semibold text-emerald-300">Example DM Reply:</p>
                  <div className="mt-1 whitespace-pre-line rounded-lg bg-black/40 p-3 text-xs md:text-sm">
                    {`Hi,
Hello Namrata,

Are you looking for ways to make money online?
I have an opportunity for you associated with a platform that teaches skill-based education.

If you want to know more, just type “yes”.`}
                  </div>

                  <p className="mt-3 font-semibold text-emerald-300">
                    When they reply “yes”:
                  </p>
                  <div className="mt-1 whitespace-pre-line rounded-lg bg-black/40 p-3 text-xs md:text-sm">
                    {`Glad to see a positive response from you!
We have limited seats, so if you are serious about learning, send “Hi” + your name to my WhatsApp: 276372637 for complete details.`}
                  </div>

                  <div className="mt-4">
                    <p className="font-semibold text-white">
                      Don’t Forget to Upload Stories
                    </p>
                    <p className="mt-1">
                      Stories increase trust and conversions. Regularly share your:
                    </p>
                    <ul className="mt-1 list-disc space-y-1 pl-5">
                      <li>Daily work</li>
                      <li>Team updates</li>
                      <li>Testimonials</li>
                      <li>Earnings (genuine only)</li>
                      <li>Behind-the-scenes</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Inorganic Lead Generation */}
              <div>
                <h5 className="font-semibold text-rose-300">
                  2. Inorganic Lead Generation (paid methods)
                </h5>
                <p className="mt-1">
                  Inorganic lead generation means investing money to get faster and more scalable
                  results.
                </p>
                <p className="mt-2 font-semibold text-white">Examples:</p>
                <ul className="mt-1 list-disc space-y-1 pl-5">
                  <li>Facebook Ads</li>
                  <li>Paid promotions</li>
                  <li>Shoutouts</li>
                  <li>Collaborations</li>
                </ul>
              </div>
            </div>
          </Panel>
        </section>

        {/* CTA */}
        <div className="flex items-center justify-center py-10">
          <Link
            href="/dashboard" // change to your real route
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#2563eb] px-6 py-3 font-extrabold text-white shadow-[0_10px_26px_rgba(37,99,235,0.4)] transition hover:from-[#60a5fa] hover:to-[#3b82f6] hover:shadow-[0_10px_30px_rgba(37,99,235,0.5)] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
          >
            Complete Journey & Get Certified
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </main>
    </div>
  );
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
              ? "border-[#c084fc] bg-gradient-to-b from-[#c084fc] to-[#7c3aed] text-white shadow-[0_10px_22px_rgba(124,58,237,0.35)]"
              : "border-white/[0.06] bg-[#181a2a] text-[#a1a1aa]",
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
  children: ReactNode;
  accent?: string;
  icon?: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-[#23263a] p-6 shadow-[0_1px_0_rgba(255,255,255,0.04),0_14px_30px_rgba(0,0,0,0.45)]">
      <h3 className={`flex items-center gap-2 text-xl font-extrabold ${accent}`}>
        <span className="text-[#c084fc]">{icon}</span>
        {title}
      </h3>
      <div className="mt-4 space-y-5">{children}</div>
    </div>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h4 className="font-semibold text-white">{title}</h4>
      <p className="mt-1 text-sm leading-relaxed text-[#a1a1aa]">{children}</p>
    </div>
  );
}

/* ---------------- Tiny SVG Icons (no deps) ---------------- */

function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

function MegaphoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M3 11v2a2 2 0 002 2h2l5 3V6l-5 3H5a2 2 0 00-2 2z" />
      <path d="M14 10h1a5 5 0 015 5v0" />
    </svg>
  );
}

function PlanIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M7 8h10M7 12h6" />
    </svg>
  );
}