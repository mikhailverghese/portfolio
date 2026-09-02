import Image from "next/image";
import Link from "next/link";

import { BitebookHeroSlider } from "@/components/BitebookHeroSlider";

const highlights = [
  "Built as a recipe product centered on saving, remixing, organizing, and revisiting dishes people actually want to cook.",
  "Combines consumer-product design with structured recipe creation, nutrition controls, lists, and profile/account flows.",
  "Shows a more lifestyle-oriented product instinct while still grounding the experience in concrete workflows and interface systems.",
];

const heroSlides = [
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
              Bitebook
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
              A recipe product built around saving what works, remixing what doesn&apos;t, and cooking with more confidence.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-zinc-600 sm:text-xl">
              Bitebook is a consumer recipe app concept that explores how discovery, creation,
              nutrition, organization, and personal taste can live together in a more useful cooking product.
            </p>
          </div>

          <BitebookHeroSlider slides={heroSlides} />
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

          <div className="space-y-6 rounded-[1.75rem] border border-black/8 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
                Product walkthrough
              </p>
              <h2 className="text-2xl font-semibold tracking-tight">How the Bitebook experience comes together</h2>
            </div>

            <div className="space-y-8">
              {gallery.map((item) => (
                <div key={item.title} className="grid gap-5 rounded-[1.5rem] border border-black/6 bg-zinc-50/70 p-5 md:grid-cols-[0.78fr_1.22fr] md:items-center">
                  <div className="mx-auto w-full max-w-[260px] rounded-[1.5rem] border border-black/10 bg-zinc-950 p-3 shadow-[0_16px_40px_rgba(24,24,27,0.12)]">
                    <div className="overflow-hidden rounded-[1.2rem] border border-white/10 bg-black">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={1179}
                        height={2556}
                        className="h-auto w-full"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold tracking-tight text-zinc-950">{item.title}</h3>
                    <p className="text-base leading-8 text-zinc-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
                <span className="font-semibold text-white">Type:</span> iOS app
              </p>
              <p>
                <span className="font-semibold text-white">Core components:</span> recipe discovery,
                recipe creation, ingredient library, nutrition controls, lists, account flows
              </p>
              <p>
                <span className="font-semibold text-white">Focus:</span> cooking workflow,
                organization, personalization, product design
              </p>
              <p>
                <span className="font-semibold text-white">Role:</span> concept development,
                product thinking, interface direction
              </p>
              <p>
                <span className="font-semibold text-white">Status:</span> active build
              </p>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
