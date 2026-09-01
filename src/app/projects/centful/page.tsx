import Link from "next/link";

const highlights = [
  "Built as a personal response to the friction and clutter common in everyday finance tools.",
  "Focused on transaction clarity, thoughtful interaction design, and calmer mobile UX.",
  "Explores how better product decisions can make financial data feel more understandable and useful.",
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
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              A calmer, more thoughtful take on personal finance for iPhone.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-zinc-600 sm:text-xl">
              Centful is an iOS expense tracker built around a simple idea: finance software does
              not have to feel cluttered, stressful, or mechanically utilitarian. It can feel
              clear, intentional, and genuinely helpful.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-5xl gap-8 px-6 py-16 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-12">
        <div className="space-y-8">
          <div className="space-y-4 rounded-[1.75rem] border border-black/8 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl font-semibold tracking-tight">Why I built it</h2>
            <p className="text-base leading-8 text-zinc-600">
              Most finance apps either overwhelm you with noise or reduce the experience to a pile
              of cold utility. Centful started as an attempt to build something I would actually
              want to use myself, something that respected both the data and the person looking at
              it.
            </p>
          </div>

          <div className="space-y-4 rounded-[1.75rem] border border-black/8 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl font-semibold tracking-tight">What it focuses on</h2>
            <div className="space-y-4 text-base leading-8 text-zinc-600">
              <p>
                The product centers on transaction visibility, account connectivity, and interface
                decisions that make day-to-day money management feel less chaotic.
              </p>
              <p>
                Instead of treating design as decoration, Centful treats it as part of the product
                logic. The goal is not just to show financial data, but to present it in a way that
                feels easier to trust and act on.
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
                usability, product design
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
