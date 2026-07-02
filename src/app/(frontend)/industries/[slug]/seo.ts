// SEO metadata source of truth for industry detail pages.
export const industriesSeo: Record<string, { title: string; description: string }> = {
  healthcare: {
    title: 'AI Solutions for Healthcare | HIPAA Compliant',
    description:
      'AI automation for healthcare: patient intake, clinical documentation, appointment scheduling. HIPAA compliant. Reduce administrative burden by 40%.',
  },
  manufacturing: {
    title: 'AI Solutions for Manufacturing | Predictive Maintenance',
    description:
      'AI automation for manufacturing: predictive maintenance, quality control, supply chain optimization. 35% less downtime. Integrates with existing MES and ERP.',
  },
  retail: {
    title: 'AI Solutions for Retail | Inventory Optimization',
    description:
      'AI automation for retail: inventory forecasting, customer service, order management. 15-25% inventory reduction. Integrates with existing POS and ERP.',
  },
  energy: {
    title: 'AI Solutions for Energy & Utilities | Grid Optimization',
    description:
      'AI automation for energy: grid optimization, predictive maintenance, demand forecasting. Reduce operational costs by 15%. Improve renewable availability 2-3%.',
  },
  'dealers-distributors': {
    title: 'AI Solutions for Dealers & Distributors | Order Automation',
    description:
      'AI automation for dealers and distributors: order entry (80% faster), inventory optimization (15-25% reduction), quote generation. Replace fragmented SaaS with unified agents.',
  },
  'power-electronics-fpga': {
    title: 'AI for Power Electronics & FPGA Design | EDA Automation',
    description:
      'AI-enhanced EDA tools for FPGA design, verification, and testing. 25-40% faster design cycles. Works with Siemens, AMD/Xilinx, Intel toolchains. Production-ready in 6-8 weeks.',
  },
  'autonomy-robotics': {
    title: 'AI for Autonomy & Robotics | Industrial Automation',
    description:
      'AI systems for industrial robotics: vision inspection, autonomous navigation, cobot orchestration. 50% reduction in unplanned downtime. Integrates with existing robot fleets.',
  },
  'biotech-pharma-logistics': {
    title: 'AI for Biotech & Pharma Logistics | Supply Chain Automation',
    description:
      'AI automation for pharma logistics: cold chain monitoring, compliance documentation, drug discovery acceleration. HIPAA/GxP compliant. 6-8 weeks to production.',
  },
}
