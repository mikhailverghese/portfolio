import type { Metadata } from "next";

import { HeroSlider, type HeroSlide } from "@/components/HeroSlider";
import { MagneticLink } from "@/components/MagneticLink";
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
  title: "Job Search Analytics Platform — Mikhail Verghese",
  description:
    "An automated job discovery, recommendation engine, and application drafting platform.",
};

type ScoringConfig = {
  weights?: {
    positive?: Record<string, number>;
    negative?: Record<string, number>;
  };
};

const SCORING_CONFIG_URL =
  "https://raw.githubusercontent.com/mikhailverghese/job-checker/main/config/scoring-config.json";

const highlights = [
  "Daily scheduled Python pipeline ingesting fresh LinkedIn postings across 4 target data engineering titles.",
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
    title: "Intelligence Feed",
    description: "Real-time scored opportunity stream filtered to recent 24-hour ingestion cycles.",
    image: "/images/job-checker/hero-mobile.png",
    alt: "Job Checker dashboard hero showing weighted job matches and live pipeline stats.",
  },
  {
    title: "Control Surface",
    description: "Fine-grained sliders for score thresholds, salary floors, applicant profiles, and locations.",
    image: "/images/job-checker/filters-mobile.png",
    alt: "Job Checker filter controls for applicant, score, salary, location, and search.",
  },
  {
    title: "Evaluation Cards",
    description: "Dense recommendation objects showing positive/negative keyword matches and direct application actions.",
    image: "/images/job-checker/cards-mobile.png",
    alt: "Job Checker ranked job cards with scores, tags, and cover letter actions.",
  },
  {
    title: "Drafting Studio",
    description: "LLM-synthesized cover letter viewer with on-the-fly PDF formatting and immediate download.",
    image: "/images/job-checker/letter-mobile.png",
    alt: "Job Checker cover letter view with PDF download action.",
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
      "A Python ingestion pipeline executes daily on a scheduled cadence. It queries LinkedIn for target data roles (Analytics Engineer, BI Engineer, BI Analyst, Data Analyst) strictly published within the preceding 24 hours.",
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

async function getScoringConfig(): Promise<ScoringConfig | null> {
  try {
    const response = await fetch(SCORING_CONFIG_URL, {
      next: { revalidate: 3600 },
    });
    if (!response.ok) return null;
    return (await response.json()) as ScoringConfig;
  } catch {
    return null;
  }
}

function renderKeywordEntries(
  entries: Record<string, number> | undefined,
  tone: "positive" | "negative",
) {
  if (!entries || !Object.keys(entries).length) {
    return <p className="font-mono text-xs text-fog">No keywords retrieved.</p>;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(entries).map(([term, score]) => (
        <span
          key={`${tone}-${term}`}
          className={`px-3 py-1 font-mono text-[11px] uppercase tracking-wider ${
            tone === "positive"
              ? "bg-volt/10 text-volt border border-volt/30"
              : "bg-rose-500/10 text-rose-300 border border-rose-500/30"
          }`}
        >
          {term} <span className="opacity-75">[{score > 0 ? `+${score}` : score}]</span>
        </span>
      ))}
    </div>
  );
}

export default async function JobSearchAnalyticsProjectPage() {
  const scoringConfig = await getScoringConfig();
  const positiveKeywords = scoringConfig?.weights?.positive;
  const negativeKeywords = scoringConfig?.weights?.negative;

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
                Case Study // 02
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="max-w-5xl font-display text-[clamp(2.5rem,7vw,5.8rem)] font-extrabold uppercase leading-[0.94] tracking-tight text-bone">
                Job Search <br />
                <span className="font-serif italic font-normal normal-case text-volt">
                  Analytics Platform
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="max-w-3xl font-sans text-lg leading-8 text-fog sm:text-2xl sm:leading-10">
                An automated intelligence engine combining LinkedIn scraping, multi-factor keyword
                scoring, scheduled Python data pipelines, and LLM-assisted application drafting.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
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
            </Reveal>
          </div>

          <Reveal delay={0.35} y={32}>
            <HeroSlider slides={heroSlides} imageWidth={1106} imageHeight={2266} />
          </Reveal>
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

          {/* live scoring config */}
          <Reveal>
            <div className="border-t border-white/10 pt-10">
              <div className="mb-6 flex items-center justify-between font-mono text-xs uppercase tracking-[0.25em]">
                <span className="text-volt">/06</span>
                <span className="text-fog">Live Ingestion Model</span>
              </div>
              <h2 className="mb-4 font-display text-3xl font-extrabold uppercase tracking-tight text-bone">
                Live Scoring Config
              </h2>
              <p className="mb-8 font-mono text-xs uppercase leading-6 tracking-wider text-fog">
                Dynamically fetched from{" "}
                <code className="bg-ink px-2 py-0.5 text-volt">config/scoring-config.json</code>{" "}
                in the public repository.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="border border-volt/30 bg-panel p-6">
                  <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.25em] text-volt">
                    Positive Signals
                  </p>
                  {renderKeywordEntries(positiveKeywords, "positive")}
                </div>
                <div className="border border-rose-500/30 bg-panel p-6">
                  <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.25em] text-rose-300">
                    Negative Penalties
                  </p>
                  {renderKeywordEntries(negativeKeywords, "negative")}
                </div>
              </div>
            </div>
          </Reveal>

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
