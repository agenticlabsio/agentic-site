import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { products } from "@/data/products";
import { SectionLabel } from "@/components/walkthrough/sections";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Not Found" };
  return {
    title: `${product.name} — Agentic Labs`,
    description: product.tagline,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <article className="mx-auto max-w-4xl px-6 py-12 lg:py-16">
      <Link
        href="/"
        className="font-mono text-xs font-medium uppercase tracking-wider text-muted-fg transition-colors hover:text-ink"
      >
        &larr; All case studies
      </Link>

      <header className="mt-8 border-b border-hairline pb-10">
        <div className="eyebrow mb-4 flex items-center gap-3">
          <span aria-hidden className="h-px w-6 bg-accent/40" />
          {product.industry}
        </div>
        <h1 className="max-w-3xl text-4xl leading-[1.1] sm:text-5xl">
          {product.name}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-secondary">
          {product.tagline}
        </p>
      </header>

      <p className="mt-10 max-w-2xl leading-relaxed text-secondary">
        {product.description}
      </p>

      <section className="mt-14">
        <SectionLabel>The client problem</SectionLabel>
        <div className="dossier-card p-6 sm:p-8">
          <p className="leading-relaxed text-secondary">
            {product.clientProblem}
          </p>
        </div>
      </section>

      <section className="mt-14">
        <SectionLabel>Use case</SectionLabel>
        <ul className="divide-y divide-[color:var(--hairline-soft)] border-y border-hairline">
          {product.useCase.map((item, i) => (
            <li key={item} className="flex items-baseline gap-4 py-3.5">
              <span className="figures font-mono text-xs text-muted-fg">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="leading-relaxed text-secondary">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <SectionLabel>How we solved it</SectionLabel>
        <ol className="divide-y divide-[color:var(--hairline-soft)] border-y border-hairline">
          {product.solution.map((item, i) => (
            <li key={item} className="flex items-baseline gap-4 py-3.5">
              <span className="figures font-mono text-xs text-accent-dark">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="leading-relaxed text-secondary">{item}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14">
        <SectionLabel>Outcomes</SectionLabel>
        <div className="dossier-card p-6 sm:p-8">
          <ul className="flex flex-col gap-4">
            {product.outcomes.map((item, i) => (
              <li key={item} className="flex items-baseline gap-4">
                <span className="figures font-mono text-xs text-accent-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="figures leading-relaxed text-ink-soft">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="mt-16 flex flex-col items-start gap-5 border-t border-hairline pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl">See it against your own workflow</h2>
          <p className="mt-1 max-w-xl text-secondary">
            A 30-minute walkthrough of the build, the harness, and the numbers
            behind it.
          </p>
        </div>
        <a
          href="https://calendly.com/cloud-agenticlabs/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
        >
          Schedule a walkthrough
          <span aria-hidden>&rarr;</span>
        </a>
      </footer>
    </article>
  );
}
