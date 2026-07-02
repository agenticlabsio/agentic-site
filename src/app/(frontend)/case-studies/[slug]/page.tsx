import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';

const caseStudiesData: Record<string, {
  industry: string;
  title: string;
  subtitle: string;
  metrics: { value: string; label: string; description: string }[];
  challenge: {
    intro: string;
    painPoints: string[];
  };
  solution: {
    intro: string;
    components: { title: string; description: string }[];
    timeline: string;
  };
  results: {
    before: string[];
    after: string[];
  };
  quote: {
    text: string;
    author: string;
  };
}> = {
  'document-processing': {
    industry: 'Financial Services',
    title: 'Document Processing Automation',
    subtitle: 'for a Fortune 500 Bank',
    metrics: [
      { value: '12 → 6', label: 'Days', description: 'Processing Time' },
      { value: '$2.4M', label: 'Annual', description: 'Savings' },
      { value: '94%', label: 'Accuracy', description: 'Document Extraction' },
    ],
    challenge: {
      intro: 'A leading financial services firm processed 50,000+ loan applications monthly. Manual document review took 12-15 days per application, creating bottlenecks and customer complaints.',
      painPoints: [
        '12-15 day processing time',
        '40% of applications required re-review',
        '$4.2M annual labor costs',
        'Customer satisfaction scores declining',
      ],
    },
    solution: {
      intro: 'We deployed an intelligent document processing system with three core components:',
      components: [
        { title: 'Auto-classification', description: 'ML model to categorize incoming documents by type' },
        { title: 'Smart extraction', description: 'Entity recognition for key data points with confidence scoring' },
        { title: 'Human-in-the-loop', description: 'Exception handling workflow for edge cases requiring review' },
      ],
      timeline: '8 weeks from kickoff to production',
    },
    results: {
      before: ['12-15 day processing', '40% re-review rate', '72% accuracy', '$4.2M labor costs'],
      after: ['6-8 day processing', '8% re-review rate', '94% accuracy', '$1.8M labor costs'],
    },
    quote: {
      text: 'Processing time dropped from 12-15 days to 6-8 days. The ROI was clear within 90 days of deployment.',
      author: 'VP Operations',
    },
  },
  'patient-intake': {
    industry: 'Healthcare',
    title: 'Patient Intake Automation',
    subtitle: 'for a Regional Health System',
    metrics: [
      { value: '45%', label: 'Faster', description: 'Processing' },
      { value: '3x', label: 'Capacity', description: 'Increase' },
      { value: '92%', label: 'Accuracy', description: 'Data Entry' },
    ],
    challenge: {
      intro: 'A regional health system with 12 facilities struggled with patient intake bottlenecks. Manual data entry led to errors and long wait times.',
      painPoints: [
        '25+ minute average intake time',
        '15% data entry error rate',
        'Staff burnout from repetitive tasks',
        'Patient satisfaction below benchmarks',
      ],
    },
    solution: {
      intro: 'We implemented an AI-powered intake system:',
      components: [
        { title: 'Digital forms', description: 'Mobile-first patient intake with smart validation' },
        { title: 'Insurance verification', description: 'Real-time eligibility checking via API integrations' },
        { title: 'EHR integration', description: 'Automated data flow into existing systems' },
      ],
      timeline: '10 weeks from kickoff to rollout',
    },
    results: {
      before: ['25 min intake time', '15% error rate', 'Staff burnout', 'Low satisfaction'],
      after: ['14 min intake time', '3% error rate', 'Staff redeployed', 'NPS up 28 points'],
    },
    quote: {
      text: 'Our staff can now focus on patient care instead of paperwork. The system paid for itself in the first quarter.',
      author: 'Director of Operations',
    },
  },
  'inventory-forecasting': {
    industry: 'Retail',
    title: 'Inventory Forecasting',
    subtitle: 'for a National Retailer',
    metrics: [
      { value: '32%', label: 'Reduced', description: 'Stockouts' },
      { value: '18%', label: 'Lower', description: 'Carrying Costs' },
      { value: '$8M', label: 'Annual', description: 'Impact' },
    ],
    challenge: {
      intro: 'A national retailer with 400+ locations faced chronic inventory imbalances. Overstock in some regions while others experienced frequent stockouts.',
      painPoints: [
        '$12M annual write-offs from overstock',
        '8% stockout rate impacting sales',
        'Manual forecasting taking 40+ hours weekly',
        'Seasonal patterns poorly predicted',
      ],
    },
    solution: {
      intro: 'We deployed a demand forecasting engine:',
      components: [
        { title: 'ML forecasting', description: 'Demand prediction incorporating 50+ variables' },
        { title: 'Dynamic reorder', description: 'Automated replenishment triggers by SKU/location' },
        { title: 'Anomaly detection', description: 'Early warning system for demand spikes' },
      ],
      timeline: '12 weeks to full deployment',
    },
    results: {
      before: ['8% stockout rate', '$12M write-offs', '40+ hrs/week manual work', 'Poor seasonal accuracy'],
      after: ['5.4% stockout rate', '$7.2M write-offs', '5 hrs/week oversight', '94% seasonal accuracy'],
    },
    quote: {
      text: 'We finally have visibility into demand before it happens. The reduction in stockouts directly impacted our bottom line.',
      author: 'SVP Supply Chain',
    },
  },
  'predictive-maintenance': {
    industry: 'Manufacturing',
    title: 'Predictive Maintenance',
    subtitle: 'for Industrial Equipment',
    metrics: [
      { value: '35%', label: 'Less', description: 'Downtime' },
      { value: '42%', label: 'Reduction', description: 'Maintenance Costs' },
      { value: '99.2%', label: 'Uptime', description: 'Achieved' },
    ],
    challenge: {
      intro: 'A manufacturing company with $500M+ equipment portfolio experienced unexpected failures causing production delays and safety concerns.',
      painPoints: [
        '18% unplanned downtime',
        '$3.2M annual emergency repairs',
        'Safety incidents from equipment failures',
        'Reactive maintenance culture',
      ],
    },
    solution: {
      intro: 'We implemented a predictive maintenance platform:',
      components: [
        { title: 'Sensor integration', description: 'IoT connectivity across 200+ critical assets' },
        { title: 'Failure prediction', description: 'ML models detecting anomalies 2-4 weeks ahead' },
        { title: 'Work order automation', description: 'Automatic scheduling based on predictions' },
      ],
      timeline: '16 weeks including sensor deployment',
    },
    results: {
      before: ['18% unplanned downtime', '$3.2M emergency repairs', 'Reactive maintenance', 'Safety concerns'],
      after: ['11.7% unplanned downtime', '$1.9M emergency repairs', 'Predictive approach', 'Zero incidents'],
    },
    quote: {
      text: 'We went from fighting fires to preventing them. The safety improvements alone justified the investment.',
      author: 'Plant Director',
    },
  },
  'claims-processing': {
    industry: 'Insurance',
    title: 'Claims Processing Automation',
    subtitle: 'for a National Insurer',
    metrics: [
      { value: '70%', label: 'Faster', description: 'Adjudication' },
      { value: '$4.1M', label: 'Annual', description: 'Savings' },
      { value: '96%', label: 'Accuracy', description: 'Rate' },
    ],
    challenge: {
      intro: 'A national insurer processed 100,000+ claims monthly with significant backlogs. Manual review created delays and inconsistent decisions.',
      painPoints: [
        '14-day average claim resolution',
        '25% of claims escalated for review',
        'Inconsistent adjudication decisions',
        'Growing customer complaints',
      ],
    },
    solution: {
      intro: 'We built an intelligent claims processing system:',
      components: [
        { title: 'Auto-triage', description: 'ML-based routing to appropriate handlers' },
        { title: 'Document analysis', description: 'Automated extraction of claim details' },
        { title: 'Decision support', description: 'Recommendation engine for adjusters' },
      ],
      timeline: '14 weeks to production',
    },
    results: {
      before: ['14-day resolution', '25% escalation rate', 'Inconsistent decisions', 'High complaints'],
      after: ['4.2-day resolution', '9% escalation rate', 'Consistent outcomes', 'NPS up 34 points'],
    },
    quote: {
      text: 'Claims that used to take two weeks now resolve in days. Our adjusters focus on complex cases while AI handles the routine.',
      author: 'Chief Claims Officer',
    },
  },
};

export function generateStaticParams() {
  return Object.keys(caseStudiesData).map((slug) => ({ slug }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = caseStudiesData[slug];

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="text-xl font-bold text-slate-900 font-display">
              Agentic Labs
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a href="/" className="text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors font-display">
                Home
              </a>
              <a href="/solutions" className="text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors font-display">
                Solutions
              </a>
              <a href="/case-studies" className="text-slate-900 font-medium text-sm font-display">
                Case Studies
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg shadow-brand-600/25 hover:shadow-xl hover:shadow-brand-600/30 font-display"
              >
                Book Strategy Call
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Back Link */}
        <div className="pt-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <a
              href="/case-studies"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 text-sm transition-colors font-display"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Case Studies
            </a>
          </div>
        </div>

        {/* Header */}
        <section className="pt-8 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="inline-block px-3 py-1 bg-brand-50 text-brand-700 text-xs font-medium rounded-full mb-4 font-display">
              {caseStudy.industry}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-2 font-display">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-slate-500 font-body">{caseStudy.subtitle}</p>
          </div>
        </section>

        {/* Key Results */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6 font-display">
              Key Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudy.metrics.map((metric, i) => (
                <div key={i} className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                  <div className="text-3xl sm:text-4xl font-bold text-brand-600 mb-1 font-display">
                    {metric.value}
                  </div>
                  <div className="text-sm text-slate-900 font-medium font-display">{metric.label}</div>
                  <div className="text-sm text-slate-500 font-body">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 font-display">The Challenge</h2>
            <p className="text-slate-600 leading-relaxed mb-6 font-body text-lg">
              {caseStudy.challenge.intro}
            </p>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 font-display">
                Pain Points
              </h3>
              <ul className="space-y-3">
                {caseStudy.challenge.painPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 font-body">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 font-display">The Solution</h2>
            <p className="text-slate-600 leading-relaxed mb-6 font-body text-lg">
              {caseStudy.solution.intro}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {caseStudy.solution.components.map((component, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-200 transition-all duration-300">
                  <div className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center text-brand-600 font-bold text-sm mb-4 font-display">
                    {i + 1}
                  </div>
                  <div className="text-slate-900 font-semibold mb-2 font-display">{component.title}</div>
                  <p className="text-slate-500 text-sm font-body">{component.description}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-body">
                <span className="font-semibold text-slate-900 font-display">Timeline:</span> {caseStudy.solution.timeline}
              </span>
            </div>
          </div>
        </section>

        {/* The Results */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 font-display">The Results</h2>
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-lg">
              <div className="grid grid-cols-2">
                <div className="p-6 border-r border-slate-200">
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 font-display">
                    Before
                  </h3>
                  <ul className="space-y-3">
                    {caseStudy.results.before.map((item, i) => (
                      <li key={i} className="text-slate-500 text-sm font-body">{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 bg-brand-50">
                  <h3 className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-4 font-display">
                    After
                  </h3>
                  <ul className="space-y-3">
                    {caseStudy.results.after.map((item, i) => (
                      <li key={i} className="text-slate-900 text-sm font-medium font-body">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <blockquote className="border-l-4 border-brand-600 pl-6">
              <p className="text-xl text-slate-700 italic mb-4 font-body">
                &quot;{caseStudy.quote.text}&quot;
              </p>
              <footer className="text-slate-500 font-display font-medium">
                — {caseStudy.quote.author}
              </footer>
            </blockquote>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="bg-brand-600 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 font-display">
              Want similar results?
            </h2>
            <a
              href="mailto:contact@agenticlabs.io?subject=Discovery%20Call%20Request"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-700 rounded-xl font-semibold text-lg hover:bg-brand-50 transition-all duration-200 shadow-lg font-display"
            >
              Schedule Discovery Call
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
