import type { Metadata } from "next";

import { HeroSlider, type HeroSlide } from "@/components/HeroSlider";
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
  title: "Bitebook — Mikhail Verghese",
  description:
    "A recipe product built around saving what works, remixing what doesn't, and cooking with more confidence.",
};

const highlights = [
  "Built as a recipe product centered on saving, remixing, organizing, and revisiting dishes people actually want to cook.",
  "Combines consumer-product design with structured recipe creation, nutrition controls, lists, and profile/account flows.",
  "Shows a more lifestyle-oriented product instinct while still grounding the experience in concrete workflows and interface systems.",
];

const meta = [
  { label: "Type", value: "iOS app" },
  {
    label: "Core components",
    value: "Recipe discovery, recipe creation, ingredient library, nutrition controls, lists, account flows",
  },
  { label: "Focus", value: "Cooking workflow, organization, personalization, product design" },
  { label: "Role", value: "Concept development, product thinking, interface direction" },
  { label: "Status", value: "Active build" },
];

const heroSlides: HeroSlide[] = [
  {
    title: "Log In",
    image: "/images/bitebook/summary.png",
    alt: "Bitebook landing screen describing the product as a recipe space for people who actually cook.",
  },
  {
    title: "Home",
    image: "/images/bitebook/home.png",
    alt: "Bitebook home feed showing recipe cards, search, and nutritional metadata.",
  },
  {
    title: "Recipe",
    image: "/images/bitebook/recipe-hero.png",
    alt: "Bitebook recipe detail screen with large food image and nutrition controls.",
  },
  {
    title: "Create",
    image: "/images/bitebook/create.png",
    alt: "Bitebook create recipe flow with core details and ingredient builder.",
  },
];

const sections = [
  {
    label: "Problem",
    title: "Why the idea matters",
    body: [
      "A lot of recipe products are either too passive or too generic. They help people browse, but they do not do much to support the actual rhythm of saving dishes, adapting them, organizing them, and coming back to them later.",
      "Bitebook started from the idea that recipe software should feel more like a personal cooking system than a pile of static recipe pages.",
    ],
  },
  {
    label: "Product direction",
    title: "What Bitebook is trying to be",
    body: [
      "Bitebook is designed as a recipe space for people who actually cook. That means the product is not only about discovering a dish once. It is about keeping recipes close, reshaping them to fit real preferences, and building a reusable library around the way someone actually eats and cooks.",
      "The interface leans into warmth, legibility, and a more personal tone, while the workflows focus on structure: recipe creation, ingredient management, nutrition controls, lists, and account-level organization.",
    ],
  },
  {
    label: "Experience design",
    title: "How the product is framed",
    body: [
      "The visual system is intentionally softer and more lifestyle-oriented than the other projects in the portfolio. Bitebook uses a lighter palette, rounded surfaces, and a more editorial feel to make the product feel approachable without becoming vague.",
      "That matters because food products live or die on whether they feel inviting enough to return to regularly. The design is doing real product work here, not just decoration.",
    ],
  },
  {
    label: "What it shows",
    title: "Why it belongs in the portfolio",
    body: [
      "Bitebook broadens the portfolio by showing a more consumer-oriented product instinct. It demonstrates that I do not only think in terms of dashboards, pipelines, or workflow tooling. I also care about product mood, habit formation, and how software fits into everyday routines.",
      "It is useful because it shows product taste, interface range, and the ability to turn a softer consumer concept into a concrete system with real user flows.",
    ],
  },
];

const gallery = [
  {
    title: "Recipe browsing",
    description:
      "The home feed emphasizes discoverability and legibility, combining search, recipe cards, cuisine and cooking metadata, ratings, and macro summaries in a compact browsing view.",
    image: "/images/bitebook/home.png",
  },
  {
    title: "Recipe detail and nutrition remixing",
    description:
      "Recipe pages are designed to be adjustable rather than static. Nutritional values respond to changes, which makes the product feel more like a cooking tool than a content page.",
    image: "/images/bitebook/recipe-details.png",
  },
  {
    title: "Recipe creation workflow",
    description:
      "The creation flow is structured around identity first, then ingredients, then method. That sequencing helps recipes feel composed from the start instead of becoming messy freeform notes.",
    image: "/images/bitebook/create.png",
  },
  {
    title: "Ingredient library",
    description:
      "Ingredients are chosen from a dedicated library with search and guided selection, which keeps the builder more precise and supports future nutritional consistency.",
    image: "/images/bitebook/ingredient-library.png",
  },
  {
    title: "Instruction builder",
    description:
      "Instructions are broken into readable mobile-first steps so the app supports both authoring and later cooking use, not just data entry.",
    image: "/images/bitebook/instructions.png",
  },
  {
    title: "Lists and organization",
    description:
      "Saved recipes and collections are treated as first-class product surfaces, with pinned lists, custom lists, and organization patterns that make revisiting easier.",
    image: "/images/bitebook/lists.png",
  },
  {
    title: "Account and product layer",
    description:
      "The account area shows that the product is thinking beyond single screens, including membership positioning, profile state, personal stats, and quick actions back into the main workflows.",
    image: "/images/bitebook/account.png",
  },
  {
    title: "Account actions",
    description:
      "Supporting account screens extend that system with lightweight profile management, product summaries, and direct routes back into the main recipe flows.",
    image: "/images/bitebook/account-actions.png",
  },
];

export default function BitebookProjectPage() {
  return (
    <main className="min-h-screen bg-ink-950 text-zinc-100">
      <ScrollProgress />

      {/* ---------- hero ---------- */}
      <section className="noise-overlay relative overflow-hidden border-b border-white/5">
        <div aria-hidden className="grid-lines absolute inset-0" />
        <div
          aria-hidden
          className="animate-aurora-b pointer-events-none absolute -top-32 right-[-8%] h-[460px] w-[460px] rounded-full bg-rose-400/10 blur-[130px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-[-30%] left-[-10%] h-[420px] w-[420px] rounded-full bg-amber-400/10 blur-[120px]"
        />

        <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 pb-20 pt-32 sm:px-10 lg:px-12">
          <BackLink />

          <div className="space-y-6">
            <Reveal y={16}>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                Bitebook
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-zinc-50 sm:text-6xl">
                A recipe product built around saving what works, remixing what doesn&apos;t, and
                cooking with <span className="font-serif italic text-gradient">more confidence</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="max-w-3xl text-lg leading-8 text-zinc-400 sm:text-xl sm:leading-9">
                Bitebook is a consumer recipe app concept that explores how discovery, creation,
                nutrition, organization, and personal taste can live together in a more useful
                cooking product.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.3} y={40}>
            <HeroSlider slides={heroSlides} imageWidth={1179} imageHeight={2556} />
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
                  <span className="font-mono text-xs text-emerald-300">05</span>
                  <span className="h-px w-8 bg-white/15" />
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
                    Product walkthrough
                  </p>
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-[1.7rem]">
                  How the Bitebook experience comes together
                </h2>
              </div>

              <div className="space-y-6">
                {gallery.map((item, i) => (
                  <GalleryItem
                    key={item.title}
                    index={i + 1}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    imageWidth={1179}
                    imageHeight={2556}
                  />
                ))}
              </div>
            </div>
          </Reveal>

          <NextProject
            name="Job Search Analytics"
            href="/projects/job-search-analytics"
            blurb="An automated job search system for finding, ranking, and acting on the right opportunities faster."
          />
        </div>

        <SnapshotAside highlights={highlights} meta={meta} />
      </section>
    </main>
  );
}
