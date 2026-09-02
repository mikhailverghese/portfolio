import Image from "next/image";
import Link from "next/link";

import { CentfulHeroSlider } from "@/components/CentfulHeroSlider";

const highlights = [
  "Built as a personal finance app with direct bank connectivity, review workflows, category management, and merchant-rule automation.",
  "Designed around a calmer mobile experience, with dark visual treatment, clear hierarchy, and focused day-to-day actions.",
  "Pairs product thinking with implementation detail, from Plaid-linked accounts to regex-based transaction rules and AI-assisted rule creation.",
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

const heroSlides = [
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
              Centful
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
              A personal finance app built to make spending review feel calmer, clearer, and more usable.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-zinc-600 sm:text-xl">
              Centful is an iOS expense tracker that combines account syncing, transaction review,
              category management, and a more considered interaction model for everyday money
              decisions.
            </p>
          </div>

          <CentfulHeroSlider slides={heroSlides} />
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-5xl gap-8 px-6 py-16 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-12">
        <div className="space-y-8">
          <div className="space-y-4 rounded-[1.75rem] border border-black/8 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Problem
            </p>
            <h2 className="text-2xl font-semibold tracking-tight">Why I built it</h2>
            <div className="space-y-4 text-base leading-8 text-zinc-600">
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
            </div>
          </div>

          <div className="space-y-4 rounded-[1.75rem] border border-black/8 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Product scope
            </p>
            <h2 className="text-2xl font-semibold tracking-tight">What the app actually does</h2>
            <div className="space-y-4 text-base leading-8 text-zinc-600">
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
            </div>
          </div>

          <div className="space-y-5 rounded-[1.75rem] border border-black/8 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Product principles
            </p>
            <div className="space-y-6">
              {principles.map((principle) => (
                <div key={principle.title} className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-950">
                    {principle.title}
                  </h3>
                  <p className="text-base leading-8 text-zinc-600">{principle.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 rounded-[1.75rem] border border-black/8 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
                Product walkthrough
              </p>
              <h2 className="text-2xl font-semibold tracking-tight">How the experience comes together</h2>
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

          <div className="space-y-4 rounded-[1.75rem] border border-black/8 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
              What this project shows
            </p>
            <div className="space-y-4 text-base leading-8 text-zinc-600">
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
                <span className="font-semibold text-white">Core components:</span> Plaid account linking,
                transaction ingestion, review queue, regex merchant rules, AI-assisted rule creation,
                category management
              </p>
              <p>
                <span className="font-semibold text-white">Focus:</span> personal finance,
                transaction clarity, interaction design
              </p>
              <p>
                <span className="font-semibold text-white">Role:</span> product thinking,
                design direction, software build
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
