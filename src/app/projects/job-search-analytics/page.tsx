import type { Metadata } from "next";

import { HeroSlider, type HeroSlide } from "@/components/HeroSlider";
import { LiveScoringConfig } from "@/components/LiveScoringConfig";
import { MagneticLink } from "@/components/MagneticLink";
import { ScrollProgress } from "@/components/ScrollProgress";
import {
  BackLink,
  GalleryItem,
  NextProject,
  SectionCard,
  SnapshotAside,
} from "@/components/case-study";

export const metadata: Metadata = {
  title: "Job Search Analytics Platform — Mikhail Verghese",
  description:
    "An automated job discovery, recommendation engine, and application drafting platform.",
};

const highlights = [
  "Daily scheduled Python pipeline ingesting fresh LinkedIn postings across 6 target data, BI, automation, and AI titles.",
  "Weighted multi-factor scoring engine evaluating description signals, title seniority, and regional geographic targets.",
  "Live Next.js dashboard with interactive thresholds, profile switching, and LLM-assisted cover letter synthesis with PDF export.",
];

const meta = [
  { label: "Platform", value: "Web Application & Scheduled Pipeline" },
  { label: "Stack", value: "Next.js · React · Python · LinkedIn Ingestion · OpenAI API · Tailwind" },
  { label: "Domain", value: "Automated Job Intelligence & Workflow Optimization" },
  { label: "Repository", value: "Public on GitHub" },
  { label: "Status", value: "Live Production System" },
];

const heroSlides: HeroSlide[] = [
  {
    title: "Viewport Overview",
    description: "A wide dashboard view combining the live pipeline snapshot, active controls, and top-ranked job stream in one frame.",
    image: "/images/job-checker/viewport-overview.png",
    alt: "Job Checker wide dashboard overview showing the weighted matches hero, filters, and ranked results.",
  },
  {
    title: "Ranked Opportunity Feed",
    description: "A denser dashboard crop focused on scored recommendation cards, match tags, and cover-letter actions.",
    image: "/images/job-checker/viewport-feed.png",
    alt: "Job Checker wide feed view with ranked job cards and generate letter actions.",
  },
  {
    title: "Cover Letter Workspace",
    description: "The letter drafting surface presents a tailored output with direct PDF export and a fast path back to the dashboard.",
    image: "/images/job-checker/viewport-letter.png",
    alt: "Job Checker wide cover letter workspace with PDF download and dashboard return actions.",
  },
];

const dashboardGallery = [
  {
    title: "Parameter Filter Surface",
    description:
      "Interactive controls allow instant narrowing by applicant profile, minimum relevance score, target salary range, and specific New Jersey / New York commuter zones.",
    image: "/images/job-checker/filters-mobile.png",
  },
  {
    title: "Opportunity Score Cards",
    description:
      "Each card renders an analytical breakdown: computed score index, matched technical keywords (+ points), disqualifiers (- points), and quick-action links.",
    image: "/images/job-checker/cards-mobile.png",
  },
  {
    title: "On-Demand Letter Generation",
    description:
      "Combines structured candidate experience records with the selected job's raw text to produce tailored cover letter PDFs in one click.",
    image: "/images/job-checker/letter-mobile.png",
  },
];

const sections = [
  {
    label: "Genesis",
    title: "Turning Search Chaos into Data Pipelines",
    body: [
      "Job searching via traditional portals is an inefficient manual loop: wading through duplicate listings, sponsored junk, and mislabeled seniority levels. The signal-to-noise ratio is notoriously poor.",
      "This platform transforms the process from passive browsing into an automated, data-driven pipeline: scraping, scoring, thresholding, and accelerating high-relevance applications.",
    ],
  },
  {
    label: "Ingestion Loop",
    title: "Scheduled Data Harvesting",
    body: [
      "A Python ingestion pipeline executes daily on a scheduled cadence. It queries LinkedIn for target roles spanning Analytics Engineer, BI Engineer, BI Analyst, Data Analyst, Automation Engineer, and AI Engineer, strictly published within the preceding 24 hours.",
      "The harvester deduplicates results against historical runs and commits a sanitized, public-safe JSON payload directly consumed by the dashboard.",
    ],
  },
  {
    label: "Recommendation Model",
    title: "Weighted Scoring Architecture",
    body: [
      "Jobs are ranked via a deterministic scoring engine that computes positive and negative signals across multiple dimensions: keyword relevance, seniority matching, and geographic preference.",
      "Target regions like Central New Jersey (Piscataway, New Brunswick, Princeton, Edison) receive positive boosts alongside remote roles, while irrelevant tech stacks incur explicit penalties.",
    ],
  },
  {
    label: "Drafting Pipeline",
    title: "Applied AI Cover Letter Synthesis",
    body: [
      "Rather than generic ChatGPT prompts, the platform orchestrates a structured generation pipeline: injecting candidate profile metadata and the targeted job specification into an LLM API to produce role-specific draft letters with clean PDF formatting.",
    ],
  },
];

export default function JobSearchAnalyticsProjectPage() {
  return (
    <main className="min-h-screen bg-void text-bone">
      <ScrollProgress />

      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden border-b border-white/10 pt-28 sm:pt-36">
        <div aria-hidden className="grid-lines absolute inset-0 hidden xl:block" />
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-10%] top-0 hidden h-[500px] w-[500px] rounded-full bg-volt/10 blur-[130px] xl:block"
        />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 pb-20 sm:px-10 lg:px-12">
          <BackLink />

          <div className="space-y-6">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-volt">
              Case Study // 02
            </p>

            <h1 className="max-w-5xl font-display text-[clamp(2.5rem,7vw,5.8rem)] font-extrabold uppercase leading-[0.94] tracking-tight text-bone">
              Job Search <br />
              <span className="font-serif italic font-normal normal-case text-volt">
                Analytics Platform
              </span>
            </h1>

            <p className="max-w-3xl font-sans text-lg leading-8 text-fog sm:text-2xl sm:leading-10">
              An automated intelligence engine combining LinkedIn scraping, multi-factor keyword
              scoring, scheduled Python data pipelines, and LLM-assisted application drafting.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <MagneticLink href="https://job-checker-seven.vercel.app" external>
                Live Platform
                <span aria-hidden>↗</span>
              </MagneticLink>
              <MagneticLink
                href="https://github.com/mikhailverghese/job-checker"
                external
                variant="ghost"
              >
                GitHub Source
                <span aria-hidden>↗</span>
              </MagneticLink>
            </div>
          </div>

          <HeroSlider slides={heroSlides} imageWidth={2880} imageHeight={1548} />
        </div>
      </section>

      {/* ---------- DOSSIER & CONTENT ---------- */}
      <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-12">
        <div className="space-y-12">
          {sections.map((section, i) => (
            <SectionCard
              key={section.title}
              index={i + 1}
              label={section.label}
              title={section.title}
            >
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </SectionCard>
          ))}

          {/* walkthrough */}
          <div className="space-y-8 border-t border-white/10 pt-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-volt">
                /05 Detailed Walkthrough
              </p>
              <h2 className="mt-2 font-display text-3xl font-extrabold uppercase tracking-tight text-bone sm:text-4xl">
                Dashboard Interface Breakdown
              </h2>
            </div>
            <div className="space-y-6">
              {dashboardGallery.map((item, i) => (
                <GalleryItem
                  key={item.title}
                  index={i + 1}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  imageWidth={1106}
                  imageHeight={2266}
                />
              ))}
            </div>
          </div>

          <LiveScoringConfig />

          <NextProject
            name="Bitebook"
            href="/projects/bitebook"
            blurb="A recipe product architecture built around culinary discovery, macro calculation, and habit formation."
          />
        </div>

        <SnapshotAside highlights={highlights} meta={meta} />
      </section>
    </main>
  );
}
