export interface ProcessStep {
  step: number
  title: string
  description: string
}

export function ProcessStepsSection({
  heading,
  description,
  steps,
}: {
  heading: string
  description?: string
  steps: ProcessStep[]
}) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display mb-4 text-3xl font-bold text-stone-50">{heading}</h2>
        {description && (
          <p className="font-body mb-12 max-w-2xl text-lg text-stone-300">{description}</p>
        )}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.step} className="relative">
              <div className="text-brand-500/25 font-display absolute -top-2 -left-2 text-5xl font-bold">
                {step.step}
              </div>
              <div className="relative pt-8 pl-4">
                <h3 className="font-display mb-2 text-lg font-bold text-stone-50">{step.title}</h3>
                <p className="font-body text-sm text-stone-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
