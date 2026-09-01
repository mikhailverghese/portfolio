import Link from "next/link";

const highlights = [
  "Analyzes LinkedIn job postings published within the previous 24 hours and ranks them with a configurable recommendation engine.",
  "Uses a scheduled Python pipeline to pull only newly published postings, refresh the dashboard daily, and reduce duplicate recommendations.",
  "Includes an n8n workflow that combines candidate profile data with selected job descriptions to generate tailored cover letters through LLM APIs.",
];

const sections = [
  {
    label: "Overview",
    title: "What the platform does",
    body: [
      "The Intelligent Job Search Analytics Platform is an automated system for identifying, prioritizing, and acting on relevant LinkedIn job postings. Instead of treating a job search like a manual browsing exercise, it turns the process into something more structured, repeatable, and analytically driven.",
      "At its core, the platform looks at newly published roles, scores them against configurable rules, and surfaces the strongest opportunities in a web dashboard designed for action rather than noise.",
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
      "The current setup uses weighted positive and negative matches. Positive examples include terms like Python, SQL, dbt, BigQuery, and Power BI. Negative examples include terms like Kafka, Airflow, Spark, Databricks, DAX, JavaScript, and machine learning. The idea is to reward the strongest-fit postings while pushing less relevant roles down the list.",
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
    label: "Pipeline design",
    title: "How the dashboard stays current",
    body: [
      "A scheduled Python pipeline runs daily and retrieves only job postings published within the previous 24 hours. That design keeps the dashboard focused on fresh opportunities while reducing repeat surfacing of stale listings.",
      "By narrowing the retrieval window, storing seen jobs, and refreshing the dashboard continuously, the system helps maintain a stream of actionable recommendations without creating unnecessary duplication or review fatigue.",
    ],
  },
  {
    label: "Application workflow",
    title: "How it supports tailored applications",
    body: [
      "Beyond ranking and surfacing jobs, the platform also includes an n8n orchestration workflow for application support. It combines structured candidate profile data with selected job descriptions, then uses LLM APIs to generate tailored cover letters.",
      "The goal is not generic automation for its own sake. The goal is to produce draft materials that better reflect both the candidate's background and the role's specific requirements, making the application process faster without flattening it into copy-paste output.",
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

export default function JobSearchAnalyticsProjectPage() {
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
                <span className="font-semibold text-white">Type:</span> analytics-driven web platform
              </p>
              <p>
                <span className="font-semibold text-white">Core components:</span> LinkedIn search ingestion,
                rule-based ranking, Python pipeline, web dashboard, n8n workflow, LLM-assisted drafting
              </p>
              <p>
                <span className="font-semibold text-white">Focus:</span> job search prioritization,
                automation, workflow efficiency
              </p>
              <p>
                <span className="font-semibold text-white">Status:</span> active build / concept evolution
              </p>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
