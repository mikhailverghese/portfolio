import Link from "next/link";

const highlights = [
  "Built around the idea that memorable food experiences deserve better capture than random notes or saved links.",
  "Explores product design around discovery, memory, organization, and revisitation.",
  "Represents a more consumer-focused concept in the portfolio mix.",
];

const sections = [
  {
    label: "Problem",
    title: "Why the idea matters",
    body: [
      "People find places they want to remember all the time, through friends, social media, maps, screenshots, and impulse saves. But those memories get scattered quickly and usually lose context.",
      "Bitebook started as a way to think more intentionally about how food discovery and memory could be designed as an actual product, not just a loose collection of bookmarks.",
    ],
  },
  {
    label: "Approach",
    title: "What the concept explores",
    body: [
      "The project is centered on the experience around great places: finding them, saving them, revisiting them later, and attaching some real sense of memory and meaning to them.",
      "That makes it less about generic restaurant search and more about building a product people would genuinely want to keep returning to.",
    ],
  },
  {
    label: "What it shows",
    title: "Why it belongs here",
    body: [
      "Bitebook broadens the portfolio by showing a more consumer-oriented product instinct. It is useful because it demonstrates taste, concept development, and the ability to identify opportunities in everyday behavior.",
      "Even as a lighter case study, it helps show that my interest in building is not limited to one category of software.",
    ],
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
              A product concept for remembering, organizing, and returning to great food experiences.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-zinc-600 sm:text-xl">
              Bitebook explores how product design can make restaurant discovery and memory feel
              more intentional, more personal, and more worth keeping.
            </p>
          </div>
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
                <span className="font-semibold text-white">Type:</span> consumer product concept
              </p>
              <p>
                <span className="font-semibold text-white">Focus:</span> discovery, memory,
                organization, UX
              </p>
              <p>
                <span className="font-semibold text-white">Role:</span> concept development,
                product thinking, interface direction
              </p>
              <p>
                <span className="font-semibold text-white">Status:</span> concept / exploration
              </p>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
