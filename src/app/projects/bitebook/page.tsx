import Link from "next/link";

export default function BitebookProjectPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ef] text-zinc-950">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-20 sm:px-10 lg:px-12">
        <Link
          href="/"
          className="inline-flex w-fit items-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-600 transition hover:border-zinc-900 hover:text-zinc-950"
        >
          ← Back to portfolio
        </Link>
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
            Bitebook
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
            A product concept for remembering, organizing, and revisiting great food experiences.
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-zinc-600 sm:text-xl">
            Bitebook explores how better product design can make restaurant discovery and memory
            feel more intentional, more personal, and less disposable.
          </p>
          <p className="max-w-3xl text-base leading-8 text-zinc-600">
            This page is a placeholder for a deeper case study around the concept, UX direction,
            and the kinds of user problems it is meant to solve.
          </p>
        </div>
      </section>
    </main>
  );
}
