import Image from "next/image";
import Link from "next/link";

import { HeroTitle } from "@/components/HeroTitle";
import { MagneticLink } from "@/components/MagneticLink";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/motion/Reveal";

const featuredProjects = [
  {
    name: "Centful",
    href: "/projects/centful",
    summary:
      "An iOS expense tracker built to make personal finance feel more intuitive, less cluttered, and better designed.",
    tags: ["iOS", "React Native", "Plaid", "Product Design"],
    image: "/images/centful/home.png",
    imageWidth: 1179,
    imageHeight: 2556,
  },
  {
    name: "Intelligent Job Search Analytics Platform",
    href: "/projects/job-search-analytics",
    summary:
      "A public job dashboard that ranks fresh LinkedIn roles, surfaces the strongest matches, and generates tailored cover letters in a live workflow.",
    tags: ["Next.js", "Analytics", "Dashboard", "Automation"],
    image: "/images/job-checker/hero-mobile.png",
    imageWidth: 1106,
    imageHeight: 2266,
  },
  {
    name: "Bitebook",
    href: "/projects/bitebook",
    summary:
      "A food-focused product concept centered on discovery, organization, and a better experience around places worth remembering.",
    tags: ["Product Concept", "UX", "Consumer App", "Exploration"],
    image: "/images/bitebook/home.png",
    imageWidth: 1179,
    imageHeight: 2556,
  },
];

const highlights = [
  "Product-minded engineering, not just feature output",
  "Clean UX with attention to details people actually feel",
  "Room for case studies, experiments, and deeper technical writeups",
];

const marqueeItems = [
  "Product Engineering",
  "Analytics",
  "iOS & Mobile",
  "Next.js",
  "Interaction Design",
  "Automation",
  "Data Pipelines",
  "Product Design",
];

export default function Home() {
  return (
    <main className="bg-ink-950 text-zinc-100">
      {/* ---------- hero ---------- */}
      <section className="noise-overlay relative overflow-hidden">
        <div aria-hidden className="grid-lines absolute inset-0" />
        <div
          aria-hidden
          className="animate-aurora-a pointer-events-none absolute -top-40 left-[-10%] h-[560px] w-[560px] rounded-full bg-emerald-500/14 blur-[130px]"
        />
        <div
          aria-hidden
          className="animate-aurora-b pointer-events-none absolute right-[-12%] top-1/4 h-[520px] w-[520px] rounded-full bg-violet-600/14 blur-[130px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-[-20%] left-1/3 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]"
        />

        <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 pb-24 pt-36 sm:px-10 lg:px-12">
          <div className="grid w-full items-center gap-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
            <div className="max-w-3xl space-y-9">
              <Reveal y={16} delay={0.15}>
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400 backdrop-blur">
                  <span className="animate-pulse-dot h-2 w-2 rounded-full bg-emerald-300" />
                  Analyst, builder, and product-minded problem solver.
                </div>
              </Reveal>

              <HeroTitle
                className="text-[2.9rem] font-semibold leading-[1.02] tracking-tight text-zinc-50 sm:text-6xl lg:text-[5.2rem]"
                lines={[
                  [{ t: "I" }, { t: "build" }, { t: "the" }, { t: "things" }],
                  [{ t: "I" }, { t: "wish", accent: true }, { t: "existed.", accent: true }],
                ]}
              />

              <Reveal delay={0.75}>
                <p className="max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl sm:leading-9">
                  I’m an analytics engineer who spends a lot of my free time building software.
                  Most of my projects start the same way: I run into a problem in my own life,
                  build something to solve it, then keep refining it until it’s useful enough
                  for someone else too.
                </p>
              </Reveal>

              <Reveal delay={0.9}>
                <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:gap-4">
                  <MagneticLink href="#projects">
                    Explore projects
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
                  </MagneticLink>
                  <MagneticLink href="#contact" variant="ghost">
                    Contact me
                  </MagneticLink>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.6} y={40}>
              <div className="animate-float-slow relative">
                <div
                  aria-hidden
                  className="absolute -inset-px rounded-[2.1rem] bg-gradient-to-br from-emerald-300/30 via-transparent to-violet-400/30"
                />
                <div className="relative rounded-[2rem] border border-white/10 bg-ink-900/80 p-7 shadow-[0_32px_90px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-8">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
                    Focus
                  </p>
                  <h2 className="mb-7 text-2xl font-semibold leading-snug tracking-tight text-zinc-50">
                    Building with a <span className="font-serif italic text-gradient">product brain</span>,
                    not just shipping code.
                  </h2>
                  <ul className="space-y-4 text-sm leading-7 text-zinc-400">
                    {highlights.map((item, i) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-[7px] font-mono text-[11px] text-emerald-300">
                          0{i + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={1.2} className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
            <div className="flex flex-col items-center gap-3 text-zinc-600">
              <span className="text-[10px] font-semibold uppercase tracking-[0.4em]">Scroll</span>
              <span className="relative h-10 w-px overflow-hidden bg-white/10">
                <span className="scroll-cue absolute left-0 top-0 h-4 w-px bg-emerald-300" />
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- marquee ---------- */}
      <Marquee items={marqueeItems} className="bg-ink-950/60" />

      {/* ---------- projects ---------- */}
      <section id="projects" className="relative mx-auto w-full max-w-6xl scroll-mt-28 px-6 py-24 sm:px-10 sm:py-32 lg:px-12">
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal className="max-w-2xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
              Featured work
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
              A portfolio built around <span className="font-serif italic text-gradient">real work</span>,
              not filler.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-md text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
              Each project starts with a real problem, then gets shaped through iteration, product
              thinking, and a bias toward making useful things feel genuinely good to use.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.12} className="h-full">
              <Link
                href={project.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/8 bg-white/[0.02] transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.04] hover:shadow-[0_32px_80px_rgba(0,0,0,0.55)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/8 bg-ink-900">
                  <Image
                    src={project.image}
                    alt={`${project.name} preview`}
                    width={project.imageWidth}
                    height={project.imageHeight}
                    className="h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent"
                  />
                  <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-ink-950/70 px-3 py-1 font-mono text-[11px] text-zinc-300 backdrop-blur">
                    0{index + 1}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold leading-snug tracking-tight text-zinc-50">
                      {project.name}
                    </h3>
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/12 text-sm text-zinc-400 transition-all duration-500 group-hover:rotate-45 group-hover:border-emerald-300/60 group-hover:text-emerald-300">
                      ↗
                    </span>
                  </div>
                  <p className="mb-6 text-sm leading-7 text-zinc-400">{project.summary}</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-400 transition-colors duration-300 group-hover:border-white/20 group-hover:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- about ---------- */}
      <section id="about" className="relative scroll-mt-28 border-y border-white/5 bg-ink-900/40">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent"
        />
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-24 sm:px-10 sm:py-32 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <Reveal className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
              About
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-5xl sm:leading-[1.1]">
              I like building <span className="font-serif italic text-gradient">practical things</span> with
              strong structure and clear intent.
            </h2>
          </Reveal>
          <div className="space-y-6 text-base leading-8 text-zinc-400 sm:text-lg sm:leading-9">
            <Reveal delay={0.1}>
              <p>
                My background is in analytics, but a lot of my free time ends up in software,
                product ideas, workflow design, and refining things until they feel right.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                I’m especially interested in projects that begin with a real personal frustration and
                turn into something more refined, more usable, and more valuable through iteration.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- contact ---------- */}
      <section id="contact" className="mx-auto w-full max-w-6xl scroll-mt-28 px-6 py-24 sm:px-10 sm:py-32 lg:px-12">
        <Reveal>
          <div className="noise-overlay relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-ink-800 to-ink-900 px-8 py-14 sm:px-12 sm:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-emerald-400/12 blur-[110px]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-violet-500/12 blur-[120px]"
            />
            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl space-y-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                  Contact
                </p>
                <h2 className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
                  If the work is <span className="font-serif italic text-gradient">interesting</span>,
                  let’s talk.
                </h2>
                <p className="text-base leading-8 text-zinc-400">
                  You can find more of my work, background, and ongoing projects through the links
                  below.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <MagneticLink href="https://www.linkedin.com/in/mikhailverghese/" external>
                  LinkedIn
                  <span aria-hidden>↗</span>
                </MagneticLink>
                <MagneticLink href="https://github.com/mikhailverghese" external variant="ghost">
                  GitHub
                  <span aria-hidden>↗</span>
                </MagneticLink>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
