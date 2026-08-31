const featuredProjects = [
  {
    name: "Centful",
    summary:
      "A personal finance app focused on transaction clarity, thoughtful UX, and clean mobile flows.",
    tags: ["React Native", "Expo", "Plaid", "Product Design"],
  },
  {
    name: "Portfolio",
    summary:
      "This site itself, built to present shipped work, experiments, and case studies without feeling generic.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
  },
  {
    name: "Systems + Experiments",
    summary:
      "A place for smaller builds, prototypes, and technical rabbit holes worth showing even when they are not polished products.",
    tags: ["Prototyping", "UI Engineering", "Automation", "R&D"],
  },
];

const highlights = [
  "Product-minded engineering, not just feature output",
  "Clean UX with attention to details people actually feel",
  "Room for case studies, experiments, and deeper technical writeups",
];

export default function Home() {
  return (
    <main className="bg-[#f5f3ef] text-zinc-950">
      <section className="border-b border-black/5 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.95),_rgba(245,243,239,0.92)_55%,_rgba(235,231,223,0.9))]">
        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-16 pt-8 sm:px-10 lg:px-12">
          <header className="flex items-center justify-between py-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
                Mikhail Verghese
              </p>
            </div>
            <nav className="hidden gap-6 text-sm text-zinc-600 md:flex">
              <a href="#projects" className="transition hover:text-zinc-950">
                Projects
              </a>
              <a href="#about" className="transition hover:text-zinc-950">
                About
              </a>
              <a href="#contact" className="transition hover:text-zinc-950">
                Contact
              </a>
            </nav>
          </header>

          <div className="flex flex-1 items-center py-16 sm:py-20">
            <div className="grid w-full gap-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-end">
              <div className="max-w-3xl space-y-8">
                <div className="inline-flex items-center rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm text-zinc-600 backdrop-blur">
                  Analyst, builder, and product-minded problem solver.
                </div>
                <div className="space-y-6">
                  <h1 className="text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl">
                    Analyst by profession, builder by obsession.
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl">
                    I’m drawn to software, product thinking, and the challenge of turning ideas
                    into useful, well-crafted tools. This portfolio is where I share the things I
                    build, explore, and refine outside of the day job.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="#projects"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-medium text-white transition hover:bg-zinc-800"
                  >
                    Explore projects
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 bg-white/80 px-6 text-sm font-medium text-zinc-900 transition hover:border-zinc-900"
                  >
                    Contact me
                  </a>
                </div>
              </div>

              <div className="rounded-[2rem] border border-black/8 bg-zinc-950 p-6 text-white shadow-[0_20px_80px_rgba(24,24,27,0.18)]">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-[0.22em] text-zinc-400">
                      Focus
                    </p>
                    <h2 className="text-2xl font-semibold tracking-tight">
                      Building with a product brain, not just shipping code.
                    </h2>
                  </div>
                  <ul className="space-y-3 text-sm leading-7 text-zinc-300">
                    {highlights.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10 lg:px-12">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Featured work
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              A portfolio built around real work, not filler.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-zinc-600 sm:text-base">
            This first pass is intentionally simple. The structure is here so we can swap in real
            project stories, screenshots, metrics, and deeper case studies next.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <article
              key={project.name}
              className="flex h-full flex-col rounded-[1.75rem] border border-black/8 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold tracking-tight text-zinc-950">
                  {project.name}
                </h3>
                <p className="text-sm leading-7 text-zinc-600 sm:text-base">
                  {project.summary}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-zinc-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-black/5 bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-24 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
              About
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Strong taste, clear communication, and a bias toward maintainable execution.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-zinc-600">
            <p>
              The goal is not to make a loud portfolio. The goal is to make one that feels
              thoughtful, modern, and confident, with enough flexibility to evolve into richer
              storytelling over time.
            </p>
            <p>
              That means this site can grow into detailed project pages, visual case studies,
              writing, and interactive experiments without needing a rebuild from scratch.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10 lg:px-12">
        <div className="rounded-[2rem] bg-zinc-950 px-8 py-10 text-white sm:px-10 sm:py-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-400">
                Contact
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                If the work is interesting, let’s talk.
              </h2>
              <p className="text-base leading-8 text-zinc-300">
                We can replace this placeholder with your real contact routes, resume link,
                social links, and anything else you actually want public.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:hello@example.com"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
              >
                hello@example.com
              </a>
              <a
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-medium text-white transition hover:border-white/60"
              >
                Add LinkedIn / GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
