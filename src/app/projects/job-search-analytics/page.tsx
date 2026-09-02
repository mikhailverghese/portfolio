import Image from "next/image";
import Link from "next/link";

type ScoringConfig = {
  weights?: {
    positive?: Record<string, number>;
    negative?: Record<string, number>;
  };
};

const SCORING_CONFIG_URL = "https://raw.githubusercontent.com/mikhailverghese/job-checker/main/config/scoring-config.json";

const highlights = [
  "Analyzes LinkedIn job postings published within the previous 24 hours and ranks them with a configurable recommendation engine.",
  "Uses a scheduled Python pipeline to pull only newly published postings, refresh the public dataset, and reduce duplicate recommendations.",
  "Ships with a live Next.js dashboard and API-backed cover-letter generation flow, including downloadable PDF output.",
];

const dashboardGallery = [
  {
    title: "Dashboard hero",
    description:
      "The redesigned dashboard opens with a live pipeline snapshot that frames the dataset as a ranked feed instead of a static table dump.",
    image: "/images/job-checker/hero-mobile.png",
  },
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
      "The Intelligent Job Search Analytics Platform is an automated system for identifying, prioritizing, and acting on relevant LinkedIn job postings. Instead of treating a job search like a manual browsing exercise, it turns the process into something more structured, repeatable, and analytically driven.",
      "At its core, the platform looks at newly published roles, scores them against configurable rules, and surfaces the strongest opportunities in a live web dashboard designed for action rather than noise.",
    ],
  },
  {
    label: "Search workflow",
    title: "How the search process begins",
    body: [
      "The workflow begins with a defined set of target search titles. The current configuration uses four: Analytics Engineer, BI Engineer, BI Analyst, and Data Analyst.",
      "For each of those search titles, the system reviews up to 50 LinkedIn results and limits the dataset to roles published within the previous 24 hours. That keeps the search targeted, current, and grounded in a repeatable intake process rather than ad hoc browsing.",
    ],
  },
  {
    label: "Recommendation engine",
    title: "How job opportunities are ranked",
    body: [
      "The ranking logic is driven by a configurable rule-based recommendation engine. Jobs are evaluated across multiple criteria, including title signals, description keywords, location preferences, and configurable scoring thresholds.",
      "The live positive and negative keyword sets are now pulled directly from the public scoring config in the job-checker repository, so the portfolio stays in sync with the real scoring model instead of relying on hardcoded examples.",
    ],
  },
  {
    label: "Scoring criteria",
    title: "What the engine looks at",
    body: [
      "The scoring model does not rely on just one field. It incorporates keyword logic from the job description, title-based rules, and location-based preferences. In the active configuration, location is explicitly part of the scoring logic, with positive weighting for places like Piscataway, New Brunswick, Princeton, Rahway, Iselin, and Edison, while also allowing remote roles.",
      "The system also uses thresholding to control quality, including a minimum score requirement and a minimum number of positive matches before a role is surfaced. That helps the dashboard stay focused on opportunities that are both recent and genuinely relevant.",
    ],
  },
  {
    label: "Interface design",
    title: "How the dashboard evolved visually",
    body: [
      "Once the underlying pipeline and application flow were working reliably, I treated the dashboard itself as a product design problem rather than a basic admin interface. The result is a more cinematic, motion-rich frontend that frames the job feed as something active, filtered, and decision-oriented.",
      "The redesign leans into visual hierarchy, animated feedback, richer card presentation, and a stronger sense of momentum, while leaving the underlying data logic and backend behavior intact.",
    ],
  },
  {
    label: "Pipeline design",
    title: "How the dashboard stays current",
    body: [
      "A scheduled Python pipeline runs daily and retrieves only job postings published within the previous 24 hours. It exports a public-safe dataset that the dashboard reads directly, which keeps the live site focused on fresh opportunities while reducing repeat surfacing of stale listings.",
      "By narrowing the retrieval window, storing seen jobs, and refreshing the published dataset on a repeatable cadence, the system helps maintain a stream of actionable recommendations without creating unnecessary duplication or review fatigue.",
    ],
  },
  {
    label: "Application workflow",
    title: "How it supports tailored applications",
    body: [
      "Beyond ranking and surfacing jobs, the platform also includes an application support workflow built into the public app. It combines structured candidate profile data with selected job descriptions, then uses an LLM API to generate tailored cover letters on demand.",
      "The goal is not generic automation for its own sake. The goal is to produce draft materials that better reflect both the candidate's background and the role's specific requirements, then let the user review or download them immediately from the dashboard flow.",
    ],
  },
  {
    label: "Why it matters",
    title: "What this project shows",
    body: [
      "This project sits at a useful intersection of analytics, workflow design, and applied automation. It shows how structured logic, data pipelines, and orchestration tools can work together to improve a messy real-world process.",
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
          className={`rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] ${tone === "positive"
            ? "border-emerald-200 bg-emerald-50 text-emerald-700"
            : "border-rose-200 bg-rose-50 text-rose-700"
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
    <main className="min-h-screen bg-[#f5f3ef] text-zinc-950">
      <section className="border-b border-black/5 bg-white">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-20 sm:px-10 lg:px-12">
          <Link
            href="/"
            className="inline-flex w-fit items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-600 transition hover:border-zinc-900 hover:text-zinc-950"
          >
            ← Back to portfolio
          </Link>

          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Intelligent Job Search Analytics Platform
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
              An automated job search system for finding, ranking, and acting on the right opportunities faster.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-zinc-600 sm:text-xl">
              This project brings together analytics, automation, and workflow design to create a
              more targeted and efficient job search process, from opportunity discovery through
              application support.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://job-checker-seven.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold transition hover:bg-zinc-800"
              >
                <span className="text-white">View Dashboard</span>
              </a>
              <a
                href="https://github.com/mikhailverghese/job-checker"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold transition hover:border-zinc-900"
              >
                <span className="text-zinc-900">View GitHub</span>
              </a>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-black/8 bg-zinc-950 p-4 shadow-[0_24px_80px_rgba(24,24,27,0.16)]">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
                <Image
                  src="/images/job-checker/hero-mobile.png"
                  alt="Job Checker dashboard hero showing weighted job matches and live pipeline stats."
                  width={1106}
                  height={2266}
                  className="h-auto w-full"
                  priority
                />
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-black/8 bg-zinc-950 p-3 shadow-[0_20px_60px_rgba(24,24,27,0.14)] sm:translate-y-8">
                <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-black">
                  <Image
                    src="/images/job-checker/cards-mobile.png"
                    alt="Job Checker ranked job cards with scores, tags, and cover letter actions."
                    width={1106}
                    height={2266}
                    className="h-auto w-full"
                  />
                </div>
              </div>
              <div className="rounded-[1.75rem] border border-black/8 bg-zinc-950 p-3 shadow-[0_20px_60px_rgba(24,24,27,0.14)]">
                <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-black">
                  <Image
                    src="/images/job-checker/letter-mobile.png"
                    alt="Job Checker cover letter view with PDF download action."
                    width={1106}
                    height={2266}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-5xl gap-8 px-6 py-16 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-12">
        <div className="space-y-8">
          {sections.map((section) => (
            <div
              key={section.title}
              className="space-y-4 rounded-[1.75rem] border border-black/8 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
                {section.label}
              </p>
              <h2 className="text-2xl font-semibold tracking-tight">{section.title}</h2>
              <div className="space-y-4 text-base leading-8 text-zinc-600">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}

          <div className="space-y-6 rounded-[1.75rem] border border-black/8 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
                Dashboard walkthrough
              </p>
              <h2 className="text-2xl font-semibold tracking-tight">How the public app presents the workflow</h2>
            </div>

            <div className="space-y-8">
              {dashboardGallery.map((item) => (
                <div key={item.title} className="grid gap-5 rounded-[1.5rem] border border-black/6 bg-zinc-50/70 p-5 md:grid-cols-[0.78fr_1.22fr] md:items-center">
                  <div className="mx-auto w-full max-w-[250px] rounded-[1.5rem] border border-black/10 bg-zinc-950 p-3 shadow-[0_16px_40px_rgba(24,24,27,0.12)]">
                    <div className="overflow-hidden rounded-[1.2rem] border border-white/10 bg-black">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={1106}
                        height={2266}
                        className="h-auto w-full"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold tracking-tight text-zinc-950">{item.title}</h3>
                    <p className="text-base leading-8 text-zinc-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 rounded-[1.75rem] border border-black/8 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
                Live scoring config
              </p>
              <h2 className="text-2xl font-semibold tracking-tight">Current keyword weights from the public repo</h2>
              <p className="text-base leading-8 text-zinc-600">
                This section reads directly from the public <code>config/scoring-config.json</code> file in the job-checker repository, so the portfolio stays aligned with the live scoring model.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4 rounded-[1.25rem] border border-emerald-100 bg-emerald-50/60 p-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Positive keywords</p>
                </div>
                {renderKeywordEntries(positiveKeywords, "positive")}
              </div>

              <div className="space-y-4 rounded-[1.25rem] border border-rose-100 bg-rose-50/60 p-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-700">Negative keywords</p>
                </div>
                {renderKeywordEntries(negativeKeywords, "negative")}
              </div>
            </div>
          </div>
        </div>

        <aside className="rounded-[1.75rem] border border-black/8 bg-zinc-950 p-7 text-white shadow-[0_20px_80px_rgba(24,24,27,0.18)]">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-400">
                Snapshot
              </p>
            </div>
            <ul className="space-y-4 text-sm leading-7 text-zinc-300">
              {highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="space-y-3 border-t border-white/10 pt-6 text-sm text-zinc-300">
              <p>
                <span className="font-semibold text-white">Type:</span> analytics-driven job search platform
              </p>
              <p>
                <span className="font-semibold text-white">Core components:</span> LinkedIn search ingestion,
                rule-based ranking, Python pipeline, public dataset export, Next.js dashboard, LLM-assisted drafting
              </p>
              <p>
                <span className="font-semibold text-white">Focus:</span> job search prioritization,
                automation, workflow efficiency
              </p>
              <p>
                <span className="font-semibold text-white">Repository:</span> public on GitHub
              </p>
              <p>
                <span className="font-semibold text-white">Status:</span> live public build
              </p>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
