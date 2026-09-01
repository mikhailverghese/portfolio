import Link from "next/link";

const highlights = [
  "Built as a personal response to the friction and clutter common in everyday finance tools.",
  "Focused on transaction clarity, thoughtful interaction design, and calmer mobile UX.",
  "Designed as an ongoing product, not just a one-off interface exercise.",
];

const principles = [
  {
    title: "Clarity over clutter",
    body: "Financial software often tries to do too much at once. Centful pushes in the other direction by prioritizing readability, hierarchy, and a calmer sense of focus.",
  },
  {
    title: "Design as product logic",
    body: "The interface decisions are not just aesthetic. They shape whether data feels trustworthy, understandable, and usable in everyday life.",
  },
  {
    title: "Iteration through real use",
    body: "Because the project comes from a real personal need, the product direction is informed by repeated use, friction points, and refinement over time.",
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
              Reimagining personal finance software as something calmer, clearer, and more useful.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-zinc-600 sm:text-xl">
              Centful is an iOS expense tracker built around a simple belief: money tools do not
              have to feel noisy, stressful, or mechanically cold. They can feel deliberate,
              intuitive, and easier to trust.
            </p>
          </div>
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
                Most personal finance apps sit at one of two extremes. They either overwhelm you
                with noise, complexity, and visual clutter, or they reduce everything to a dry
                utility that technically works but feels unpleasant to live with.
              </p>
              <p>
                Centful started because I wanted something better for my own life, a tool that made
                it easier to understand spending, review transactions, and stay organized without
                making the experience feel heavier than the problem itself.
              </p>
            </div>
          </div>

          <div className="space-y-4 rounded-[1.75rem] border border-black/8 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Approach
            </p>
            <h2 className="text-2xl font-semibold tracking-tight">What the product focuses on</h2>
            <div className="space-y-4 text-base leading-8 text-zinc-600">
              <p>
                The product centers on transaction visibility, account connectivity, and interface
                decisions that reduce friction in the day-to-day experience of managing money.
              </p>
              <p>
                Instead of treating design as decoration layered on top of financial data, Centful
                treats design as part of the product logic itself. The way information is grouped,
                surfaced, and interacted with directly affects whether the experience feels useful
                or exhausting.
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

          <div className="space-y-4 rounded-[1.75rem] border border-black/8 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
              What this project shows
            </p>
            <div className="space-y-4 text-base leading-8 text-zinc-600">
              <p>
                Centful is a good example of how I like to work: start with a real irritation, turn
                it into a product problem, and keep refining until the solution feels meaningfully
                better than the default options.
              </p>
              <p>
                It also reflects a bigger pattern in my work, that I care a lot about not just what
                software does, but how it feels to use when it becomes part of someone’s routine.
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
                <span className="font-semibold text-white">Focus:</span> personal finance,
                transaction clarity, UX
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
