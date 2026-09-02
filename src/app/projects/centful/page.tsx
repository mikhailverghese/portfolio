import type { Metadata } from "next";

import { HeroSlider, type HeroSlide } from "@/components/HeroSlider";
import { ScrollProgress } from "@/components/ScrollProgress";
import {
  BackLink,
  GalleryItem,
  NextProject,
  SectionCard,
  SnapshotAside,
} from "@/components/case-study";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Centful — Mikhail Verghese",
  description:
    "An iOS personal finance architecture built for calm spending review, automated rule engine, and Plaid sync.",
};

const highlights = [
  "End-to-end iOS expense architecture combining direct Plaid bank syncing, automated ingestion, and local category structures.",
  "Custom rule engine supporting regex-based merchant pattern matching and AI-assisted rule synthesis from plain English.",
  "Calm, high-contrast mobile design system engineered for daily triage speed rather than passive chart gazing.",
];

const meta = [
  { label: "Platform", value: "iOS / Mobile" },
  { label: "Architecture", value: "React Native · TypeScript · Plaid Link · Regex Engine · LLM Parser" },
  { label: "Domain", value: "Personal Finance & Transaction Ingestion" },
  { label: "Role", value: "Product Designer & Lead Engineer" },
  { label: "Status", value: "Active Production Build" },
];

const principles = [
  {
    title: "Zero-Clutter Triage",
    body: "Most finance software overwhelms with redundant graphs. Centful reduces the daily loop to two actions: syncing transactions and clearing the uncategorized review queue.",
  },
  {
    title: "Deterministic Rules + AI Synthesis",
    body: "Instead of black-box categorization, the engine runs explicit regex rules. For users unfamiliar with regular expressions, an embedded LLM synthesizes valid regex patterns from plain-English descriptions.",
  },
  {
    title: "System Transparency",
    body: "Sync history, raw payload ingestion, and rule evaluation matches are fully inspectable by the user, creating trust through architectural honesty.",
  },
];

const heroSlides: HeroSlide[] = [
  {
    title: "Home Cockpit",
    description:
      "A high-clarity landing interface focused on current-month burn rate, immediate review items, and bank sync state.",
    image: "/images/centful/home.png",
    alt: "Centful home dashboard showing current-month spend, review queue, and account shortcuts.",
  },
  {
    title: "Review Queue",
    description:
      "A dedicated triage surface for unprocessed transactions, pairing manual approval with automated categorization suggestions.",
    image: "/images/centful/review-queue.png",
    alt: "Centful review queue with uncategorized transactions and AI-assisted categorization controls.",
  },
  {
    title: "Account Sync",
    description:
      "Direct bank connectivity and multi-institution state overview, exposing ingestion health and sync timestamps.",
    image: "/images/centful/accounts.png",
    alt: "Centful accounts screen with linked credit cards and bank accounts.",
  },
];

const gallery = [
  {
    title: "Pipeline Sync Audit",
    description:
      "Every sync run exposes execution state, row counts, and error payloads, making backend health immediately visible inside the mobile UI.",
    image: "/images/centful/sync-history.png",
  },
  {
    title: "Temporal Filtering Sheet",
    description:
      "Custom date-range selector optimized for one-thumb reach, with instant temporal presets for monthly and annual reviews.",
    image: "/images/centful/date-filter.png",
  },
  {
    title: "Regex Rule Engine",
    description:
      "Allows users to build permanent categorization heuristics directly against raw merchant payloads, converting repetitive cleanup into automated rules.",
    image: "/images/centful/merchant-rules.png",
  },
  {
    title: "Natural Language Regex Synthesis",
    description:
      "Translates natural language matching intent into strict regex patterns using an integrated LLM prompt pipeline with preview verification.",
    image: "/images/centful/rule-create-generated.png",
  },
  {
    title: "Taxonomy & Targets",
    description:
      "Custom category definitions paired with monthly expenditure targets that shape downstream analysis without rigid budgeting templates.",
    image: "/images/centful/categories.png",
  },
  {
    title: "Configuration Surface",
    description:
      "Centralized settings architecture organizing data connections, export routines, and system preferences in an inspectable hierarchy.",
    image: "/images/centful/settings.png",
  },
];

export default function CentfulProjectPage() {
  return (
    <main className="min-h-screen bg-void text-bone">
      <ScrollProgress />

      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden border-b border-white/10 pt-28 sm:pt-36">
        <div aria-hidden className="grid-lines absolute inset-0" />
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-volt/10 blur-[130px]"
        />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 pb-20 sm:px-10 lg:px-12">
          <BackLink />

          <div className="space-y-6">
            <Reveal y={16}>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-volt">
                Case Study // 01
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="max-w-5xl font-display text-[clamp(2.5rem,7vw,5.8rem)] font-extrabold uppercase leading-[0.94] tracking-tight text-bone">
                Centful: A calmer <br />
                <span className="font-serif italic font-normal normal-case text-volt">
                  financial architecture
                </span>{" "}
                for iOS.
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="max-w-3xl font-sans text-lg leading-8 text-fog sm:text-2xl sm:leading-10">
                An iOS expense operating system combining direct Plaid sync, deterministic regex
                rule automation, and an interaction model designed around daily clarity.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.3} y={32}>
            <HeroSlider slides={heroSlides} imageWidth={1179} imageHeight={2556} />
          </Reveal>
        </div>
      </section>

      {/* ---------- DOSSIER & CONTENT ---------- */}
      <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-12">
        <div className="space-y-12">
          <SectionCard index={1} label="Genesis" title="The Problem Space">
            <p>
              Most personal finance software is either bloated with promotional offerings or
              unnecessarily stressful to navigate. Users are bombarded with punitive red badges,
              inaccurate auto-categorization, and opaque data pipelines that erode trust.
            </p>
            <p>
              Centful was conceived as an antidote: a quiet, high-performance mobile application
              that treats transaction review with the same precision and calmness as a developer
              code review.
            </p>
          </SectionCard>

          <SectionCard index={2} label="System Scope" title="Functional Architecture">
            <p>
              Rather than presenting a static prototype, Centful operates on a live, end-to-end
              technical stack. Key pillars include:
            </p>
            <ul className="space-y-3 pt-2 font-mono text-sm text-bone">
              <li className="flex gap-3">
                <span className="text-volt">▸</span> Plaid Link integration with token exchange and webhooks
              </li>
              <li className="flex gap-3">
                <span className="text-volt">▸</span> Incremental sync pipeline preserving historical raw payloads
              </li>
              <li className="flex gap-3">
                <span className="text-volt">▸</span> Fast deterministic rule engine evaluating user-crafted regex expressions
              </li>
              <li className="flex gap-3">
                <span className="text-volt">▸</span> Natural-language-to-regex generator powered by an LLM prompt pipeline
              </li>
              <li className="flex gap-3">
                <span className="text-volt">▸</span> Offline-first local state with optimistic UI reconciliation
              </li>
            </ul>
          </SectionCard>

          <SectionCard index={3} label="Design Language" title="Product Philosophy">
            <div className="space-y-8">
              {principles.map((principle) => (
                <div key={principle.title} className="space-y-2">
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-bone">
                    {principle.title}
                  </h3>
                  <p className="text-base text-fog">{principle.body}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* walkthrough */}
          <div className="space-y-8 border-t border-white/10 pt-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-volt">
                /04 Detailed Walkthrough
              </p>
              <h2 className="mt-2 font-display text-3xl font-extrabold uppercase tracking-tight text-bone sm:text-4xl">
                System Interface Breakdown
              </h2>
            </div>
            <div className="space-y-6">
              {gallery.map((item, i) => (
                <GalleryItem
                  key={item.title}
                  index={i + 1}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  imageWidth={1179}
                  imageHeight={2556}
                />
              ))}
            </div>
          </div>

          <SectionCard index={5} label="Retrospective" title="Key Learnings & Impact">
            <p>
              Building Centful demonstrated how much cognitive overhead can be eliminated when
              software respects the user&apos;s attention. By pairing transparent data mechanics with
              unforgiving interaction craft, everyday finance transitions from an anxiety source
              into a clean daily ritual.
            </p>
          </SectionCard>

          <NextProject
            name="Job Analytics Platform"
            href="/projects/job-search-analytics"
            blurb="Automated opportunity discovery pipeline combining 24h LinkedIn ingestion, algorithmic scoring, and LLM drafting."
          />
        </div>

        <SnapshotAside highlights={highlights} meta={meta} />
      </section>
    </main>
  );
}
