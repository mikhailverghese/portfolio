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
    "A consumer recipe operating system built around ingredient adaptation, nutrition calculations, and repeatable kitchen workflows.",
};

const highlights = [
  "Comprehensive mobile recipe architecture designed around active home cooking workflows rather than passive web browsing.",
  "Custom recipe creation studio featuring structured ingredient selection, step authoring, and real-time nutritional recalculation.",
  "Consumer product design balancing clean typography, warm editorial mood, and structured account/collection systems.",
];

const meta = [
  { label: "Platform", value: "iOS / Mobile" },
  { label: "Architecture", value: "React Native · TypeScript · Nutrition Engine · Local Collections" },
  { label: "Domain", value: "Consumer Software & Culinary Interaction Design" },
  { label: "Role", value: "Product Designer & Lead Engineer" },
  { label: "Status", value: "Active Production Concept" },
];

const heroSlides: HeroSlide[] = [
  {
    title: "Editorial Feed",
    description: "Discover curated dishes with rich nutritional metadata, tags, and quick-cook timing.",
    image: "/images/bitebook/home.png",
    alt: "Bitebook home feed showing recipe cards, search, and nutritional metadata.",
  },
  {
    title: "Recipe Studio",
    description: "Hero recipe view with instant serving scaling and interactive macro readouts.",
    image: "/images/bitebook/recipe-hero.png",
    alt: "Bitebook recipe detail screen with large food image and nutrition controls.",
  },
  {
    title: "Creation Engine",
    description: "Structured authoring loop separating ingredients, prep steps, and cooking times.",
    image: "/images/bitebook/create.png",
    alt: "Bitebook create recipe flow with core details and ingredient builder.",
  },
  {
    title: "Identity & Value",
    description: "Product onboarding framing Bitebook as a personal system for people who actually cook.",
    image: "/images/bitebook/summary.png",
    alt: "Bitebook landing screen describing the product as a recipe space for people who actually cook.",
  },
];

const gallery = [
  {
    title: "Feed Discovery Surface",
    description:
      "A fast scanning grid combining high-resolution imagery, cuisine categorization, difficulty indicators, and total macro breakdowns.",
    image: "/images/bitebook/home.png",
  },
  {
    title: "Adaptive Recipe Detail",
    description:
      "Unlike static blog recipes, the detail surface updates ingredients and nutritional macros dynamically as serving portions are adjusted.",
    image: "/images/bitebook/recipe-details.png",
  },
  {
    title: "Creation Workflow",
    description:
      "Structured creation flow guiding the home cook through dish identity, dietary flags, ingredient quantities, and step sequencing.",
    image: "/images/bitebook/create.png",
  },
  {
    title: "Standardized Ingredient Library",
    description:
      "Dedicated ingredient taxonomy ensuring unit consistency, macro calculation integrity, and simplified smart grocery list compilation.",
    image: "/images/bitebook/ingredient-library.png",
  },
  {
    title: "Cooking Mode Instructions",
    description:
      "High-legibility mobile instructions formatted for one-handed operation and quick step progression while working in the kitchen.",
    image: "/images/bitebook/instructions.png",
  },
  {
    title: "Collection Management",
    description:
      "Personal list hierarchy enabling users to pin rotation favorites, organize weekly dinner plans, and save reference recipes.",
    image: "/images/bitebook/lists.png",
  },
  {
    title: "Cook Profile & Account Layer",
    description:
      "Personal cooking metrics, membership tiers, and configuration settings that establish the application as an ongoing routine tool.",
    image: "/images/bitebook/account.png",
  },
  {
    title: "Account & Export Routines",
    description:
      "Supporting surfaces for recipe export, dietary preference toggles, and multi-device cloud synchronization.",
    image: "/images/bitebook/account-actions.png",
  },
];

const sections = [
  {
    label: "Genesis",
    title: "The Problem with Recipe Software",
    body: [
      "Modern online cooking is plagued by bloated recipe blogs buried under hundreds of words of life stories, intrusive advertisements, and rigid serving calculations that break when scaled.",
      "Bitebook was created to give cooks a clean, respectful operating surface: zero ad clutter, immediate ingredient clarity, and tools designed for actual kitchen execution.",
    ],
  },
  {
    label: "Product Direction",
    title: "Software for People Who Cook",
    body: [
      "Rather than a passive reading experience, Bitebook treats recipes like living templates. Cooks can adjust servings, substitute ingredients, and track macro changes in real time.",
      "The system focuses heavily on reducing cognitive friction during food preparation, using clear visual typography, large interactive targets, and modular instructions.",
    ],
  },
  {
    label: "Design Strategy",
    title: "Warm Editorial Typography & System Structure",
    body: [
      "The visual design strikes an intentional balance: generous editorial imagery and tactile surfaces combined with strict information hierarchy.",
      "This demonstrates product versatility — applying the same engineering rigor used in analytical dashboards to a warm, consumer-facing mobile lifestyle application.",
    ],
  },
];

export default function BitebookProjectPage() {
  return (
    <main className="min-h-screen bg-void text-bone">
      <ScrollProgress />

      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden border-b border-white/10 pt-28 sm:pt-36">
        <div aria-hidden className="grid-lines absolute inset-0" />
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-volt/10 blur-[130px]"
        />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 pb-20 sm:px-10 lg:px-12">
          <BackLink />

          <div className="space-y-6">
            <Reveal y={16}>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-volt">
                Case Study // 03
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="max-w-5xl font-display text-[clamp(2.5rem,7vw,5.8rem)] font-extrabold uppercase leading-[0.94] tracking-tight text-bone">
                Bitebook: An <br />
                <span className="font-serif italic font-normal normal-case text-volt">
                  adaptive cooking system
                </span>{" "}
                for iOS.
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="max-w-3xl font-sans text-lg leading-8 text-fog sm:text-2xl sm:leading-10">
                A consumer recipe application bridging culinary discovery, real-time nutrition
                recalculation, and structured kitchen workflow authoring.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.3} y={32}>
            <HeroSlider slides={heroSlides} imageWidth={1179} imageHeight={2556} />
          </Reveal>
        </div>
      </section>

      {/* ---------- DOSSIER & CONTENT ---------- */}
      <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-12">
        <div className="space-y-12">
          {sections.map((section, i) => (
            <SectionCard
              key={section.title}
              index={i + 1}
              label={section.label}
              title={section.title}
            >
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </SectionCard>
          ))}

          {/* walkthrough */}
          <div className="space-y-8 border-t border-white/10 pt-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-volt">
                /04 Detailed Walkthrough
              </p>
              <h2 className="mt-2 font-display text-3xl font-extrabold uppercase tracking-tight text-bone sm:text-4xl">
                Application Interface Breakdown
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

          <NextProject
            name="Centful"
            href="/projects/centful"
            blurb="Calm, rule-driven personal finance iOS app with direct Plaid sync and AI rule synthesis."
          />
        </div>

        <SnapshotAside highlights={highlights} meta={meta} />
      </section>
    </main>
  );
}
