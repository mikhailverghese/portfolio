import Link from "next/link";

const highlights = [
  "Built to bring structure to a process that is usually fragmented across notes, spreadsheets, job boards, and email.",
  "Combines workflow design with analytics thinking to make progress easier to measure and act on.",
  "Treats the job search as an operating system problem, not just a list of applications.",
];

const sections = [
  {
    label: "Problem",
    title: "Why I built it",
    body: [
      "A job search can become messy fast. Applications live in one place, recruiter conversations in another, follow-ups in another, and over time it becomes harder to tell what is actually working.",
      "This project started as a way to create more structure around that process, not just to record activity, but to turn the search into something that could be reviewed, managed, and improved with better visibility.",
    ],
  },
  {
    label: "Approach",
    title: "How I think about the product",
    body: [
      "The core idea is that the job search should feel more like a decision-making system than a pile of manual admin. That means organizing applications, status changes, follow-ups, and patterns in a way that supports better judgment.",
      "The dashboard is meant to reduce mental overhead, surface useful signals, and create a more intentional workflow around an otherwise stressful process.",
    ],
  },
  {
    label: "What it shows",
    title: "Why it belongs in the portfolio",
    body: [
      "This project reflects the overlap between analytics and product thinking in a way that feels very natural to me. It is not just about tracking data, it is about designing a system that makes the data more actionable.",
      "It also shows how I approach messy real-world problems by building structure around them, then refining the experience until it becomes genuinely useful.",
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
              Turning a scattered job search into a system that is easier to track, review, and improve.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-zinc-600 sm:text-xl">
              This project is a web dashboard built around a simple idea: job searching creates a
              lot of fragmented information, and better structure can turn that chaos into
              something more useful.
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
                <span className="font-semibold text-white">Type:</span> web dashboard
              </p>
              <p>
                <span className="font-semibold text-white">Focus:</span> workflow design,
                analytics, job search organization
              </p>
              <p>
                <span className="font-semibold text-white">Role:</span> product thinking,
                systems design, software build
              </p>
              <p>
                <span className="font-semibold text-white">Status:</span> active concept / build
              </p>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
