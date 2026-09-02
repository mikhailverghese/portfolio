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
  title: "Centful — Mikhail Verghese",
  description:
    "A personal finance app built to make spending review feel calmer, clearer, and more usable.",
};

const highlights = [
  "Built as a personal finance app with direct bank connectivity, review workflows, category management, and merchant-rule automation.",
  "Designed around a calmer mobile experience, with dark visual treatment, clear hierarchy, and focused day-to-day actions.",
  "Pairs product thinking with implementation detail, from Plaid-linked accounts to regex-based transaction rules and AI-assisted rule creation.",
];

const meta = [
  { label: "Type", value: "iOS app" },
  {
    label: "Core components",
    value:
      "Plaid account linking, transaction ingestion, review queue, regex merchant rules, AI-assisted rule creation, category management",
  },
  { label: "Focus", value: "Personal finance, transaction clarity, interaction design" },
  { label: "Role", value: "Product thinking, design direction, software build" },
  { label: "Status", value: "Active build" },
];

const principles = [
  {
    title: "Clarity over clutter",
    body: "A finance app should make it easier to understand what happened, what needs attention, and what to do next. Centful strips the experience down to those decisions instead of crowding the screen with noise.",
  },
  {
    title: "Design as product logic",
    body: "The interface is part of the functional model. Review queues, account sync states, date filtering, and category management all need to feel obvious, not just technically available.",
  },
  {
    title: "Iteration through real use",
    body: "Because the app is being shaped through actual day-to-day use, small workflow details matter. That includes things like safer swipe interactions, clearer review states, and screens that stay readable under real usage pressure.",
  },
];

const heroSlides: HeroSlide[] = [
  {
    title: "Home",
    description:
      "A simple landing screen focused on current-month spend, category visibility, and the two actions that matter most: reviewing transactions and syncing accounts.",
    image: "/images/centful/home.png",
    alt: "Centful home dashboard showing current-month spend, review queue, and account shortcuts.",
  },
  {
    title: "Review Queue",
    description:
      "A dedicated queue for uncategorized spend, with AI-assisted categorization layered on top of the rule-based workflow instead of replacing it.",
    image: "/images/centful/review-queue.png",
    alt: "Centful review queue with uncategorized transactions and AI-assisted categorization controls.",
  },
  {
    title: "Accounts",
    description:
      "Account linking and sync management live in one place, so the ingestion side of the product feels inspectable rather than hidden.",
    image: "/images/centful/accounts.png",
    alt: "Centful accounts screen with linked credit cards and bank accounts.",
  },
];

const gallery = [
  {
    title: "Sync history",
    description:
      "Recent sync runs expose whether ingestion succeeded and how many rows were processed, which makes the data pipeline more legible to the user.",
    image: "/images/centful/sync-history.png",
  },
  {
    title: "Date filtering",
    description:
      "Transaction browsing includes a mobile-friendly date-range sheet with quick filters like this month, last month, last 30 days, and this year.",
    image: "/images/centful/date-filter.png",
  },
  {
    title: "Merchant rules",
    description:
      "Users can define regex-based merchant rules that automatically categorize matching transactions from the raw description, turning repeated cleanup work into reusable logic.",
    image: "/images/centful/merchant-rules.png",
  },
  {
    title: "AI-assisted regex creation",
    description:
      "Instead of expecting users to write regex by hand, the app can generate a suggested pattern from a plain-English description of what they want to match, then let them review and save it.",
    image: "/images/centful/rule-create-generated.png",
  },
  {
    title: "Settings and personalization",
    description:
      "The settings area gives the product a personal backbone: category management, merchant rules, and account-level state all live in clear, inspectable places.",
    image: "/images/centful/settings.png",
  },
  {
    title: "Category management",
    description:
      "Categories are treated as part of the user’s own spending model, with editable labels and monthly targets that shape how transactions get organized over time.",
    image: "/images/centful/categories.png",
  },
];

export default function CentfulProjectPage() {
  return (
    <main className="min-h-screen bg-ink-950 text-zinc-100">
      <ScrollProgress />

      {/* ---------- hero ---------- */}
      <section className="noise-overlay relative overflow-hidden border-b border-white/5">
        <div aria-hidden className="grid-lines absolute inset-0" />
        <div
          aria-hidden
          className="animate-aurora-a pointer-events-none absolute -top-32 right-[-8%] h-[460px] w-[460px] rounded-full bg-emerald-500/12 blur-[130px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-[-30%] left-[-10%] h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]"
        />

        <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 pb-20 pt-32 sm:px-10 lg:px-12">
          <BackLink />

          <div className="space-y-6">
            <Reveal y={16}>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                Centful
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-zinc-50 sm:text-6xl">
                A personal finance app built to make spending review feel{" "}
                <span className="font-serif italic text-gradient">calmer, clearer</span>, and more
                usable.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="max-w-3xl text-lg leading-8 text-zinc-400 sm:text-xl sm:leading-9">
                Centful is an iOS expense tracker that combines account syncing, transaction review,
                category management, and a more considered interaction model for everyday money
                decisions.
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
          <SectionCard index={1} label="Problem" title="Why I built it">
            <p>
              Most personal finance apps either bury the important actions under too much clutter
              or reduce the experience to a bare utility that feels unpleasant to use repeatedly.
              Centful started as a response to that gap.
            </p>
            <p>
              The goal was to build something that handled the practical job of transaction
              tracking while still feeling composed, inspectable, and usable enough to become part
              of a real routine.
            </p>
          </SectionCard>

          <SectionCard index={2} label="Product scope" title="What the app actually does">
            <p>
              Centful is not just a static budgeting concept. The app includes linked account
              management, Plaid-based syncing, a review queue for uncategorized spend, merchant
              rule personalization, regex-based auto-categorization, category editing, and
              transaction browsing with date-range filtering.
            </p>
            <p>
              That matters because the product story is grounded in real workflows, not just mock
              screens. The interface and data model are being shaped together.
            </p>
          </SectionCard>

          <SectionCard index={3} label="Product principles" title="How I think about the product">
            <div className="space-y-7">
              {principles.map((principle) => (
                <div key={principle.title} className="space-y-2">
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-50">
                    {principle.title}
                  </h3>
                  <p>{principle.body}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <Reveal>
            <div className="space-y-8 rounded-[1.75rem] border border-white/8 bg-white/[0.02] p-7 sm:p-9">
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-emerald-300">04</span>
                  <span className="h-px w-8 bg-white/15" />
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
                    Product walkthrough
                  </p>
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-[1.7rem]">
                  How the experience comes together
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

          <SectionCard index={5} label="What this project shows" title="Why it matters">
            <p>
              Centful shows how I like to build products: start with a real friction point,
              define the workflow that actually matters, and keep tightening the system until the
              result feels substantially better than the default tools.
            </p>
            <p>
              It also reflects a pattern I care about a lot, which is that useful software is not
              only about features. It is also about trust, legibility, and how a product behaves
              when someone returns to it every day.
            </p>
          </SectionCard>

          <NextProject
            name="Bitebook"
            href="/projects/bitebook"
            blurb="A recipe product built around saving what works, remixing what doesn't, and cooking with more confidence."
          />
        </div>

        <SnapshotAside highlights={highlights} meta={meta} />
      </section>
    </main>
  );
}
