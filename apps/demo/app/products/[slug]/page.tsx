import { notFound } from "next/navigation";
import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowLeft, ExternalLink, CheckCircle2, Lightbulb, TrendingUp } from "lucide-react";
import { products } from "@/data/products";
import VideoEmbed from "@/components/VideoEmbed";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const product = products.find((p) => p.slug === slug);
    if (!product) return { title: "Not Found" };
    return {
      title: `${product.name} — Agentic Labs`,
      description: product.tagline,
    };
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const Icon =
    (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[product.icon] ??
    Icons.Box;

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to all case studies
      </Link>

      {/* Header */}
      <div className="mb-10 flex items-start gap-5">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#1e5f45]/10 text-[#1e5f45]">
          <Icon className="h-8 w-8" />
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              {product.name}
            </h1>
            <span className="inline-flex items-center rounded-full bg-[#1e5f45]/10 px-3 py-1 text-xs font-medium text-[#1e5f45]">
              {product.industry}
            </span>
          </div>
          <p className="text-lg text-muted-foreground">{product.tagline}</p>
        </div>
      </div>

      {/* Description */}
      <div className="mb-8">
        <div className="rounded-xl border border-border bg-card p-6">
          <p className="text-base leading-relaxed text-card-foreground">
            {product.description}
          </p>
        </div>
      </div>

      {/* Use Case */}
      <div className="mb-8">
        <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          <Lightbulb className="h-4 w-4" />
          Use Case
        </h2>
        <div className="rounded-xl border border-[#1e5f45]/20 bg-[#1e5f45]/5 p-6">
          <ul className="space-y-3">
            {product.useCase.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1e5f45]" />
                <span className="text-base leading-relaxed text-card-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Impact */}
      <div className="mb-8">
        <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          <TrendingUp className="h-4 w-4" />
          Impact
        </h2>
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-6">
          <ul className="space-y-3">
            {product.impact.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                <span className="text-base leading-relaxed text-card-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Client Business Problem */}
      <div className="mb-8">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Client Business Problem
        </h2>
        <div className="rounded-xl border border-border bg-card p-6">
          <p className="text-base leading-relaxed text-card-foreground">
            {product.clientProblem}
          </p>
        </div>
      </div>

      {/* How Agentic Labs Solved It */}
      <div className="mb-8">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          How Agentic Labs Used AI to Solve It
        </h2>
        <div className="rounded-xl border border-border bg-muted/50 p-6">
          <ul className="space-y-3">
            {product.solution.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1e5f45]" />
                <span className="text-base leading-relaxed text-card-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Business Outcomes */}
      <div className="mb-10">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Business Outcomes
        </h2>
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-6">
          <ul className="space-y-3">
            {product.outcomes.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                <span className="text-base leading-relaxed text-card-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {product.videoUrl && (
        <div className="mb-10">
          <VideoEmbed url={product.videoUrl} />
        </div>
      )}

      <a
        href={product.appUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg bg-[#1e5f45] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#155a8a]"
      >
        Launch Demo
        <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  );
}
