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
  title: "Intelligent Job Search Analytics Platform — Mikhail Verghese",
  description:
    "An automated job search system for finding, ranking, and acting on the right opportunities faster.",
};

type ScoringConfig = {
  weights?: {
    positive?: Record<string, number>;
    negative?: Record<string, number>;
  };
};

const SCORING_CONFIG_URL = "https://raw.githubusercontent.com/mikhailverghese/job-checker/main/config/scoring-config.json";

const highlights = [
  "Scores newly posted LinkedIn roles with a configurable rule-based recommendation engine.",
  "Uses a scheduled Python pipeline to refresh a public-safe dataset and reduce duplicate recommendations.",
  "Ships with a live Next.js dashboard and API-backed cover-letter generation with direct PDF download.",
];

const meta = [
  { label: "Type", value: "Analytics-driven job search platform" },
  {
    label: "Core components",
    value:
      "LinkedIn search ingestion, rule-based ranking, Python pipeline, public dataset export, Next.js dashboard, LLM-assisted drafting",
  },
  { label: "Focus", value: "Job search prioritization, automation, workflow efficiency" },
  { label: "Repository", value: "Public on GitHub" },
  { label: "Status", value: "Live public build" },
];

const heroSlides: HeroSlide[] = [
  {
    title: "Summary",
    image: "/images/job-checker/hero-mobile.png",
    alt: "Job Checker dashboard hero showing weighted job matches and live pipeline stats.",
  },
  {
    title: "Filters",
    image: "/images/job-checker/filters-mobile.png",
    alt: "Job Checker filter controls for applicant, score, salary, location, and search.",
  },
  {
    title: "Jobs",
    image: "/images/job-checker/cards-mobile.png",
    alt: "Job Checker ranked job cards with scores, tags, and cover letter actions.",
  },
  {
    title: "Letter View",
    image: "/images/job-checker/letter-mobile.png",
    alt: "Job Checker cover letter view with PDF download action.",
  },
];

const dashboardGallery = [
  {
    title: "Filter controls",
    description:
      "Applicant profile selection, score thresholding, salary filtering, location filtering, and search all sit inside a richer control surface designed for faster scanning and tighter narrowing.",
    image: "/images/job-checker/filters-mobile.png",
  },
  {
    title: "Ranked job cards",
    description:
      "Each role is presented as a more legible recommendation object, with score visualization, matched terms, penalties, metadata chips, and direct cover-letter actions.",
    image: "/images/job-checker/cards-mobile.png",
  },
  {
    title: "Letter view",
    description:
      "Generated letters open in a dedicated view with immediate PDF download, which keeps the drafting flow focused and separate from the browsing interface.",
    image: "/images/job-checker/letter-mobile.png",
  },
];

const sections = [
  {
    label: "Overview",
    title: "What the platform does",
    body: [
      "The Intelligent Job Search Analytics Platform is an automated system for identifying, prioritizing, and acting on relevant LinkedIn job postings. Instead of treating a job search like manual browsing, it turns the process into something structured, repeatable, and analytically driven.",
      "At its core, the platform evaluates newly published roles against configurable rules and surfaces the strongest opportunities in a live web dashboard built for action rather than noise.",
    ],
  },
  {
    label: "Search workflow",
    title: "How the search process begins",
    body: [
      "The workflow begins with a defined set of target search titles. The current configuration uses four: Analytics Engineer, BI Engineer, BI Analyst, and Data Analyst.",
      "For each of those titles, the system reviews up to 50 LinkedIn results and limits the dataset to roles published within the previous 24 hours. That keeps the search targeted, current, and grounded in a repeatable intake process.",
    ],
  },
  {
    label: "Recommendation engine",
    title: "How job opportunities are ranked",
    body: [
      "The ranking logic is driven by a configurable rule-based recommendation engine. Jobs are evaluated across title signals, description keywords, location preferences, and score thresholds.",
      "The positive and negative keyword sets shown below are pulled directly from the public scoring config in the job-checker repository, so the portfolio stays in sync with the real scoring model instead of relying on hardcoded examples.",
    ],
  },
  {
    label: "Scoring criteria",
    title: "What the engine looks at",
    body: [
      "The scoring model does not rely on a single field. It incorporates keyword logic from the job description, title-based rules, and location-based preferences. In the active configuration, location is explicitly part of the scoring logic, with positive weighting for places like Piscataway, New Brunswick, Princeton, Rahway, Iselin, and Edison, while still allowing remote roles.",
      "The system also uses thresholding to control quality, including a minimum score requirement and a minimum number of positive matches before a role is surfaced. That helps the dashboard stay focused on opportunities that are both recent and genuinely relevant.",
    ],
  },
  {
    label: "Interface design",
    title: "How the dashboard evolved visually",
    body: [
      "Once the underlying pipeline and application flow were working reliably, I treated the dashboard itself as a product design problem rather than a basic admin interface. The result is a more cinematic, motion-rich frontend that frames the job feed as something active, filtered, and decision-oriented.",
      "The redesign leans on stronger hierarchy, animated feedback, richer card presentation, and a clearer sense of momentum, while leaving the underlying data logic and backend behavior intact.",
    ],
  },
  {
    label: "Pipeline design",
    title: "How the dashboard stays current",
    body: [
      "A scheduled Python pipeline runs daily and retrieves only job postings published within the previous 24 hours. It exports a public-safe dataset that the dashboard reads directly, which keeps the live site focused on fresh opportunities while reducing repeat surfacing of stale listings.",
      "By narrowing the retrieval window, storing seen jobs, and refreshing the published dataset on a repeatable cadence, the system maintains a stream of actionable recommendations without creating unnecessary duplication or review fatigue.",
    ],
  },
  {
    label: "Application workflow",
    title: "How it supports tailored applications",
    body: [
      "Beyond ranking and surfacing jobs, the platform also includes an application support workflow built into the public app. It combines structured candidate profile data with selected job descriptions, then uses an LLM API to generate tailored cover letters on demand.",
      "The goal is not generic automation for its own sake. It is to produce draft materials that better reflect both the candidate's background and the role's specific requirements, then let the user review or download them immediately from the dashboard flow.",
    ],
  },
  {
    label: "Why it matters",
    title: "What this project shows",
    body: [
      "This project sits at a useful intersection of analytics, workflow design, and applied automation. It shows how structured logic, data pipelines, and orchestration can improve a messy real-world process.",
      "It also reflects the kind of systems I like building: practical tools that reduce noise, clarify priorities, and help people move from raw information to better decisions.",
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

function renderKeywordEntries(entries: Record<string, number> | undefined, tone: "positive" | "negative") {
  if (!entries || !Object.keys(entries).length) {
    return <p className="text-sm leading-7 text-zinc-500">No keywords available.</p>;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(entries).map(([term, score]) => (
        <span
          key={`${tone}-${term}`}
          className={`rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] transition-colors duration-300 ${tone === "positive"
            ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-300 hover:border-emerald-300/50"
            : "border-rose-400/25 bg-rose-400/10 text-rose-300 hover:border-rose-300/50"
            }`}
        >
          {term} ({score > 0 ? `+${score}` : score})
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
    <main className="min-h-screen bg-ink-950 text-zinc-100">
      <ScrollProgress />

      {/* ---------- hero ---------- */}
      <section className="noise-overlay relative overflow-hidden border-b border-white/5">
        <div aria-hidden className="grid-lines absolute inset-0" />
        <div
          aria-hidden
          className="animate-aurora-a pointer-events-none absolute -top-32 right-[-8%] h-[460px] w-[460px] rounded-full bg-cyan-500/12 blur-[130px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-[-30%] left-[-10%] h-[420px] w-[420px] rounded-full bg-violet-500/12 blur-[120px]"
        />

        <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 pb-20 pt-32 sm:px-10 lg:px-12">
          <BackLink />

          <div className="space-y-6">
            <Reveal y={16}>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                Intelligent Job Search Analytics Platform
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-zinc-50 sm:text-6xl">
                An automated job search system for finding, ranking, and acting on the{" "}
                <span className="font-serif italic text-gradient">right opportunities</span> faster.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="max-w-3xl text-lg leading-8 text-zinc-400 sm:text-xl sm:leading-9">
                This project brings together analytics, automation, and workflow design to create a
                more targeted and efficient job search process, from opportunity discovery through
                application support.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-4 pt-2">
                <MagneticLink href="https://job-checker-seven.vercel.app" external>
                  View Dashboard
                  <span aria-hidden>↗</span>
                </MagneticLink>
                <MagneticLink href="https://github.com/mikhailverghese/job-checker" external variant="ghost">
                  View GitHub
                  <span aria-hidden>↗</span>
                </MagneticLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.35} y={40}>
            <HeroSlider slides={heroSlides} imageWidth={1106} imageHeight={2266} />
          </Reveal>
        </div>
      </section>

      {/* ---------- body ---------- */}
      <section className="mx-auto grid w-full max-w-5xl gap-8 px-6 py-20 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-12">
        <div className="space-y-8">
          {sections.map((section, i) => (
            <SectionCard key={section.title} index={i + 1} label={section.label} title={section.title}>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </SectionCard>
          ))}

          <Reveal>
            <div className="space-y-8 rounded-[1.75rem] border border-white/8 bg-white/[0.02] p-7 sm:p-9">
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-emerald-300">09</span>
                  <span className="h-px w-8 bg-white/15" />
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
                    Dashboard walkthrough
                  </p>
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-[1.7rem]">
                  How the public app presents the workflow
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
          </Reveal>

          <Reveal>
            <div className="space-y-8 rounded-[1.75rem] border border-white/8 bg-white/[0.02] p-7 sm:p-9">
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-emerald-300">10</span>
                  <span className="h-px w-8 bg-white/15" />
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
                    Live scoring config
                  </p>
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-[1.7rem]">
                  Current keyword weights from the public repo
                </h2>
                <p className="text-base leading-8 text-zinc-400">
                  This section reads directly from the public{" "}
                  <code className="rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-0.5 font-mono text-sm text-emerald-300">
                    config/scoring-config.json
                  </code>{" "}
                  file in the job-checker repository, so the portfolio stays aligned with the live
                  scoring model.
                </p>
              </div>

              <div className="grid gap-5 lg:grid-cols-2">
                <div className="space-y-4 rounded-[1.25rem] border border-emerald-400/20 bg-emerald-400/[0.06] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
                    Positive keywords
                  </p>
                  {renderKeywordEntries(positiveKeywords, "positive")}
                </div>

                <div className="space-y-4 rounded-[1.25rem] border border-rose-400/20 bg-rose-400/[0.06] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-300">
                    Negative keywords
                  </p>
                  {renderKeywordEntries(negativeKeywords, "negative")}
                </div>
              </div>
            </div>
          </Reveal>

          <NextProject
            name="Centful"
            href="/projects/centful"
            blurb="A personal finance app built to make spending review feel calmer, clearer, and more usable."
          />
        </div>

        <SnapshotAside highlights={highlights} meta={meta} />
      </section>
    </main>
  );
}
