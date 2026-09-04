import { Capabilities, type Capability } from "@/components/Capabilities";
import { Counter } from "@/components/Counter";
import { HeroTitle } from "@/components/HeroTitle";
import { MagneticLink } from "@/components/MagneticLink";
import { Manifesto } from "@/components/Manifesto";
import { Marquee } from "@/components/Marquee";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { Preloader } from "@/components/Preloader";
import { WorkIndex, type WorkProject } from "@/components/WorkIndex";

const GITHUB_USER_API_URL = "https://api.github.com/users/mikhailverghese";

const featuredProjects: WorkProject[] = [
  {
    name: "Centful",
    href: "/projects/centful",
    tagline: "Calm, rule-driven personal finance on iOS",
    meta: "iOS · React Native · Plaid · AI Rules",
    image: "/images/centful/row-preview.png",
    imageWidth: 1600,
    imageHeight: 1080,
  },
  {
    name: "Job Analytics",
    href: "/projects/job-search-analytics",
    tagline: "Automated ranking & cover-letter pipeline",
    meta: "Next.js · Python · Scraping · LLM API",
    image: "/images/job-checker/row-preview.png",
    imageWidth: 1600,
    imageHeight: 1080,
  },
  {
    name: "Bitebook",
    href: "/projects/bitebook",
    tagline: "A recipe system built for real cooking routines",
    meta: "iOS · Product Design · Nutrition · UX",
    image: "/images/bitebook/row-preview.png",
    imageWidth: 1600,
    imageHeight: 1080,
  },
];

const manifestoWords = [
  { w: "I" },
  { w: "am" },
  { w: "an" },
  { w: "analytics" },
  { w: "engineer" },
  { w: "who" },
  { w: "builds" },
  { w: "software" },
  { w: "at" },
  { w: "the" },
  { w: "intersection" },
  { w: "of" },
  { w: "product" },
  { w: "instinct" },
  { w: "and" },
  { w: "data" },
  { w: "discipline." },
  { w: "Most" },
  { w: "projects" },
  { w: "start" },
  { w: "as" },
  { w: "personal" },
  { w: "friction:" },
  { w: "a" },
  { w: "broken" },
  { w: "routine,", accent: true },
  { w: "a" },
  { w: "noisy" },
  { w: "feed,", accent: true },
  { w: "or" },
  { w: "a" },
  { w: "messy" },
  { w: "workflow.", accent: true },
  { w: "I" },
  { w: "turn" },
  { w: "those" },
  { w: "into" },
  { w: "structured," },
  { w: "usable" },
  { w: "systems" },
  { w: "with" },
  { w: "real" },
  { w: "depth" },
  { w: "and" },
  { w: "uncompromising" },
  { w: "taste.", accent: true },
];

const manifestoSecondParagraphIndex = manifestoWords.findIndex((word) => word.w === "Most");
const manifestoParagraphs =
  manifestoSecondParagraphIndex > 0
    ? [
        manifestoWords.slice(0, manifestoSecondParagraphIndex),
        manifestoWords.slice(manifestoSecondParagraphIndex),
      ]
    : [manifestoWords];

const capabilities: Capability[] = [
  {
    title: "Product Engineering",
    body: "End-to-end execution from architecture to frontend craft. Building with Next.js, React Native, TypeScript, Tailwind, and Motion for fluid, native-feeling interactions.",
  },
  {
    title: "Analytics & Pipelines",
    body: "Automating data ingestion, ranking models, and scheduled orchestration. Transforming raw streams into clean, inspectable data layers.",
  },
  {
    title: "Applied AI & Automation",
    body: "Layering LLM capabilities into deterministic systems — structured prompt pipelines, regex generation from natural language, and contextual drafting.",
  },
  {
    title: "Interaction Architecture",
    body: "Designing micro-interactions, spring-physics motion, tactile feedback, and typographic hierarchy that make complex tools feel effortless.",
  },
];

const marqueeItems = [
  "Analytics Engineering",
  "Product Design",
  "iOS Systems",
  "Automated Pipelines",
  "Interaction Craft",
  "Applied LLMs",
  "Data Architecture",
];

async function getPublicRepoCount() {
  try {
    const response = await fetch(GITHUB_USER_API_URL, {
      next: { revalidate: 3600 },
    });
    if (!response.ok) return 5;
    const data = (await response.json()) as { public_repos?: number };
    return typeof data.public_repos === "number" ? data.public_repos : 5;
  } catch {
    return 5;
  }
}

export default async function Home() {
  const publicRepoCount = await getPublicRepoCount();

  return (
    <main className="relative bg-void text-bone">
      <Preloader />

      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden border-b border-white/10 pt-28 sm:pt-36">
        <div aria-hidden className="grid-lines absolute inset-0" />

        {/* ambient volt glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-10%] top-[-10%] h-[560px] w-[560px] rounded-full bg-volt/10 blur-[140px]"
        />

        <div className="relative mx-auto flex min-h-[85vh] w-full max-w-7xl flex-col justify-between px-6 pb-16 sm:px-10 lg:px-12">
          {/* meta row */}
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-[0.25em] text-fog">
            <span className="flex items-center gap-2">
              <span className="text-volt">/01</span>
              <span>Engineering + Design</span>
            </span>
            <span className="flex items-center gap-2 text-bone">
              <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-volt" />
              Available for high-impact roles
            </span>
          </div>

          {/* title block */}
          <div className="my-12 max-w-6xl space-y-8">
            <HeroTitle
              className="font-display text-[clamp(2.7rem,8.5vw,7.6rem)] font-extrabold uppercase leading-[0.9] tracking-tight text-bone"
              lines={[
                [{ t: "I" }, { t: "build" }, { t: "the" }, { t: "things", outline: true }],
                [{ t: "I" }, { t: "wish", accent: true }, { t: "existed." }],
              ]}
            />

            <Reveal delay={0.8}>
              <p className="max-w-2xl font-sans text-lg leading-8 text-fog sm:text-2xl sm:leading-10">
                Analytics engineer and product builder. Bridging data rigor, system architecture,
                and fluid interaction design.
              </p>
            </Reveal>
          </div>

          {/* actions + badge row */}
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <Reveal delay={1.0}>
              <div className="flex flex-wrap gap-4">
                <MagneticLink href="#projects">
                  Explore work
                  <span aria-hidden>↓</span>
                </MagneticLink>
                <MagneticLink href="#contact" variant="ghost">
                  Get in touch
                  <span aria-hidden>↗</span>
                </MagneticLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- MARQUEE ---------- */}
      <Marquee items={marqueeItems} />

      {/* ---------- MANIFESTO (Scroll-Linked) ---------- */}
      <section id="about" className="relative border-b border-white/10 bg-panel/40 py-20 sm:py-28 lg:py-36">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="mb-12 flex items-center font-mono text-xs uppercase tracking-[0.25em] text-fog">
            <span className="flex items-center gap-2">
              <span className="text-volt">/02</span>
              <span>Manifesto</span>
            </span>
          </div>

          <div className="max-w-4xl space-y-6 sm:space-y-8">
            {manifestoParagraphs.map((paragraph, index) => (
              <Manifesto
                key={index}
                words={paragraph}
                className="text-balance font-display text-[clamp(1.65rem,3.2vw,3.1rem)] font-bold leading-[1.12] tracking-[-0.03em] text-bone"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SELECTED WORK ---------- */}
      <section id="projects" className="relative mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-24 lg:px-12 lg:py-36">
        <div className="mb-10 flex flex-col gap-6 sm:mb-14 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-volt">
              /03 Index of Systems
            </p>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold uppercase leading-none tracking-tight text-bone">
              Projects
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs uppercase leading-6 tracking-[0.18em] text-fog">
            Every build is a concrete answer to an everyday problem — designed, coded, and iterated
            under real-use conditions.
          </p>
        </div>

        <WorkIndex projects={featuredProjects} />
      </section>

      {/* ---------- METRICS BANNER ---------- */}
      <section className="border-y border-white/10 bg-panel">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-2 divide-x divide-white/10 sm:grid-cols-4">
          <Counter to={publicRepoCount} label="Public repos" sublabel="Live from GitHub" />
          <Counter to={3} suffix="+" label="Production apps" sublabel="Live & active" />
          <Counter to={3} suffix="+" label="Data pipelines" sublabel="Scheduled & event-driven" />
          <Counter to={4} suffix="+" label="Integrations" sublabel="Plaid, OpenAI, GitHub, LinkedIn" />
        </div>
      </section>

      {/* ---------- CAPABILITIES (Accordion) ---------- */}
      <section className="relative mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 sm:py-36 lg:px-12">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-volt">
              /04 Methodology
            </p>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-extrabold uppercase leading-none tracking-tight text-bone">
              Core <span className="font-serif italic font-normal normal-case text-volt">Capabilities</span>
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs uppercase leading-6 tracking-[0.18em] text-fog">
            A hybrid profile pairing analytical rigor with high-end interaction craft.
          </p>
        </div>

        <Capabilities items={capabilities} />
      </section>

      {/* ---------- CONTACT CTA ---------- */}
      <section id="contact" className="border-t border-white/10 bg-panel py-24 sm:py-36">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-12">
          <Parallax from={30} to={-30}>
            <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-6">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-volt">
                  /05 Initiate Dialogue
                </p>
                <h2 className="font-display text-[clamp(2.8rem,7.5vw,7rem)] font-extrabold uppercase leading-[0.92] tracking-tight text-bone">
                  Let&apos;s build <br />
                  <span className="font-serif italic font-normal normal-case text-volt">
                    something sharp.
                  </span>
                </h2>
                <p className="max-w-xl text-base leading-8 text-fog sm:text-lg">
                  Open to full-time engineering roles, high-leverage collaborations, and product
                  challenges.
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
          </Parallax>
        </div>
      </section>
    </main>
  );
}
