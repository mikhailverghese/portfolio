import Link from "next/link";

const featuredProjects = [
  {
    name: "Centful",
    href: "/projects/centful",
    summary:
      "An iOS expense tracker built to make personal finance feel more intuitive, less cluttered, and better designed.",
    tags: ["iOS", "React Native", "Plaid", "Product Design"],
  },
  {
    name: "Intelligent Job Search Analytics Platform",
    href: "/projects/job-search-analytics",
    summary:
      "A web dashboard for organizing job search activity, tracking progress, and turning scattered effort into structured insight.",
    tags: ["Web App", "Analytics", "Dashboard", "Workflow Design"],
  },
  {
    name: "Bitebook",
    href: "/projects/bitebook",
    summary:
      "A food-focused product concept centered on discovery, organization, and a better experience around places worth remembering.",
    tags: ["Product Concept", "UX", "Consumer App", "Exploration"],
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
                    <span className="block">I build the things</span>
                    <span className="block">I wish existed.</span>
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl">
                    I’m an analytics engineer who spends a lot of my free time building software.
                    Most of my projects start the same way: I run into a problem in my own life,
                    build something to solve it, then keep refining it until it’s useful enough
                    for someone else too.
                  </p>
                </div>
                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:gap-4">
                  <a
                    href="#projects"
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold transition hover:bg-zinc-800"
                  >
                    <span className="text-white">Explore projects</span>
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-zinc-300 bg-white/80 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-900"
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
            Each project starts with a real problem, then gets shaped through iteration, product
            thinking, and a bias toward making useful things feel genuinely good to use.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Link
              key={project.name}
              href={project.href}
              className="group flex h-full flex-col rounded-[1.75rem] border border-black/8 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-1 hover:border-black/12 hover:shadow-[0_18px_60px_rgba(15,23,42,0.1)]"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold tracking-tight text-zinc-950">
                    {project.name}
                  </h3>
                  <span className="text-sm text-zinc-400 transition group-hover:text-zinc-700">
                    ↗
                  </span>
                </div>
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
            </Link>
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
              I like building practical things with strong structure and clear intent.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-zinc-600">
            <p>
              My background is in analytics, but a lot of my free time ends up in software,
              product ideas, workflow design, and refining things until they feel right.
            </p>
            <p>
              I’m especially interested in projects that begin with a real personal frustration and
              turn into something more refined, more usable, and more valuable through iteration.
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
                You can find more of my work, background, and ongoing projects through the links
                below.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/mikhailverghese/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium transition hover:bg-zinc-200"
              >
                <span className="text-zinc-950">LinkedIn</span>
              </a>
              <a
                href="https://github.com/mikhailverghese"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-medium transition hover:border-white/60"
              >
                <span className="text-white">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
