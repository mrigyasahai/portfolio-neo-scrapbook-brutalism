import Link from "next/link";

/** 404 — the page got ripped out of the notebook. */
export default function NotFound() {
  return (
    <main id="main" className="container-p border-b-2 border-ink py-[clamp(4rem,9vw,7.5rem)]">
      <p className="font-mono text-xs font-bold tracking-[0.08em] text-brand">
        [ERROR 404]
      </p>
      <h1 className="mt-4 max-w-xl font-display text-3xl uppercase leading-tight md:text-5xl">
        This page got ripped out of the notebook.
      </h1>
      <p className="mt-4 max-w-md font-semibold leading-relaxed text-ink/80">
        It might have been moved, or it never made the cut. The good stuff is
        still on the start page.
      </p>
      <div className="mt-8">
        <Link
          href="/"
          className="sticker inline-flex items-center justify-center gap-2 rounded-pill border-2 border-ink bg-emphasis px-6 py-3 font-bold uppercase tracking-[0.08em] text-ink shadow-hard-lg hover:shadow-hard-md"
        >
          Back to the start
        </Link>
      </div>
    </main>
  );
}
