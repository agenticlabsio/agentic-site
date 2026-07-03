export function QuoteSection({ text, author }: { text: string; author: string }) {
  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <blockquote className="border-brand-400 border-l-4 pl-6">
          <p className="font-body mb-4 text-xl text-stone-300 italic">&quot;{text}&quot;</p>
          <footer className="font-display font-medium text-stone-400">— {author}</footer>
        </blockquote>
      </div>
    </section>
  )
}
