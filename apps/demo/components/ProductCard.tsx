import Link from "next/link";
import * as Icons from "lucide-react";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const Icon =
    (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[product.icon] ??
    Icons.Box;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-[#1e5f45]/30"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#1e5f45]/10 text-[#1e5f45]">
          <Icon className="h-6 w-6" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <h3 className="text-lg font-semibold text-card-foreground group-hover:text-[#1e5f45] transition-colors">
              {product.name}
            </h3>
            <span className="inline-flex items-center rounded-full bg-[#1e5f45]/10 px-2.5 py-0.5 text-xs font-medium text-[#1e5f45]">
              {product.industry}
            </span>
            {product.status === "coming-soon" && (
              <span className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                Coming Soon
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {product.tagline}
          </p>
        </div>
      </div>
    </Link>
  );
}
