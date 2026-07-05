"use client";

import Link from "next/link";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
      <div className="eyebrow mb-5 flex items-center gap-3">
        <span aria-hidden className="h-px w-6 bg-accent/40" />
        Error — Entry interrupted
      </div>
      <h1 className="max-w-2xl text-4xl leading-[1.1] sm:text-5xl">
        Something went wrong.
      </h1>
      <p className="mt-5 max-w-md leading-relaxed text-secondary">
        This page failed to render. Try again, or return to the index.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-5">
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          Try again
        </button>
        <Link
          href="/"
          className="text-sm font-medium text-secondary transition-colors hover:text-ink"
        >
          Back to the index &rarr;
        </Link>
      </div>
    </div>
  );
}
