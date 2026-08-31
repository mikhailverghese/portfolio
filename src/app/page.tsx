export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-24 sm:px-10 lg:px-12">
        <div className="max-w-3xl space-y-8">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">
            Portfolio in progress
          </p>
          <h1 className="text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">
            Building a modern portfolio that actually reflects the work.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl">
            This site will showcase projects, experiments, product thinking, and shipped work,
            with room to evolve into something richer over time.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="mailto:hello@example.com"
              className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 px-6 text-sm font-medium text-zinc-900 transition hover:border-zinc-900"
            >
              View projects
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
