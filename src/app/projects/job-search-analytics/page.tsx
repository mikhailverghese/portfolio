import Link from "next/link";

export default function JobSearchAnalyticsProjectPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ef] text-zinc-950">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-20 sm:px-10 lg:px-12">
        <Link
          href="/"
          className="inline-flex w-fit items-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-600 transition hover:border-zinc-900 hover:text-zinc-950"
        >
          ← Back to portfolio
        </Link>
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
            Intelligent Job Search Analytics Platform
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Turning a messy job search into something structured, trackable, and actually useful.
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-zinc-600 sm:text-xl">
            This project is a web dashboard for bringing order to the job search process, helping
            transform scattered applications, follow-ups, and signals into a clearer decision-making
            system.
          </p>
          <p className="max-w-3xl text-base leading-8 text-zinc-600">
            Full case study content is coming next. For now, this project holds its place in the
            portfolio as one of the core examples of how I think about workflow design, analytics,
            and useful software.
          </p>
        </div>
      </section>
    </main>
  );
}
