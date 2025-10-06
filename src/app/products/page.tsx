'use client';
import { useState, useEffect } from 'react';
import LiquidEther from '@/components/LiquidEther';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { LiquidButton, GlowButton } from '@/components/AnimatedButtons';
import PartnersDropdown from '@/components/PartnersDropdown';
import { FadeInText, SplitText } from '@/components/TextAnimations';

export default function ProductsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Sales and CRM');
  const [isPartnersOpen, setIsPartnersOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Check if there's a hash in the URL and scroll to it
    if (window.location.hash === '#products-list') {
      setTimeout(() => {
        const element = document.getElementById('products-list');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  const items = [
    { label: "Home", href: "/" },
    { label: "Product", href: "/products" },
    { label: "Solutions", href: "#" },
    { label: "Partners", dropdown: <PartnersDropdown /> },
    { label: "Case Studies", href: "#" },
  ];

  const features = [
    {
      title: 'Orchestration',
      description: 'Design multi-step workflows with clear ownership and guardrails.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 8.5 12 4.66-1.26 8.5-6.45 8.5-12V7L12 2zm0 18c-3.84-1.65-6-6.94-6-10.47V8.41l6-3.23 6 3.23v1.12c0 3.53-2.16 8.82-6 10.47z" />
        </svg>
      )
    },
    {
      title: 'Grounding',
      description: 'Retrieve and ground responses on your data sources and policies.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" />
        </svg>
      )
    },
    {
      title: 'Guardrails',
      description: 'Control prompts, tools, PII, and escalation paths by design.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 8.5 12 4.66-1.26 8.5-6.45 8.5-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
        </svg>
      )
    },
    {
      title: 'Observability',
      description: 'Metrics, traces, and evaluation to improve quality and reliability.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
        </svg>
      )
    },
    {
      title: 'Integrations',
      description: 'Connect Slack, Teams, CRMs, data warehouses, and internal tools.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      )
    },
    {
      title: 'Security',
      description: 'SSO, audit logs, data residency patterns for enterprise readiness.',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
        </svg>
      )
    },
  ];

  const products = [
    {
      name: 'AgenForge',
      category: 'Agents',
      categoryColor: 'blue',
      tagline: 'Build autonomous agents that act',
      description: 'Agentic AI platform for orchestrating goal-driven autonomous agents. Design multi-step workflows with tool usage, memory, and decision-making capabilities.',
      features: [
        'Multi-agent orchestration',
        'Tool calling & function execution',
        'Memory and context management',
        'Goal-driven task decomposition'
      ]
    },
    {
      name: 'OpsIQ',
      category: 'Ops',
      categoryColor: 'cyan',
      tagline: 'Intelligence for operations',
      description: 'Operations intelligence with automated insights and root-cause analysis. Monitor, analyze, and optimize your operational workflows with AI-powered recommendations.',
      features: [
        'Automated incident detection',
        'Root cause analysis',
        'Predictive analytics',
        'Performance optimization'
      ]
    },
    {
      name: 'OpsTalk',
      category: 'Chat',
      categoryColor: 'blue',
      tagline: 'Secure enterprise conversational AI',
      description: 'Secure conversational AI for enterprise knowledge and SOPs. Chat interface grounded in your documentation, policies, and operational procedures.',
      features: [
        'Enterprise knowledge base',
        'SOP automation',
        'Role-based access control',
        'Audit trail & compliance'
      ]
    },
    {
      name: 'OrderGenie',
      category: 'Retail',
      categoryColor: 'purple',
      tagline: 'AI-powered ordering intelligence',
      description: 'AI-driven ordering and recommendations for retail and QSR. Optimize inventory, predict demand, and personalize customer recommendations.',
      features: [
        'Demand forecasting',
        'Smart inventory management',
        'Personalized recommendations',
        'Real-time ordering optimization'
      ]
    },
    {
      name: 'DataMesh+',
      category: 'Data',
      categoryColor: 'cyan',
      tagline: 'Unified data governance',
      description: 'Unified data access with governance and fine-grained line-of-business ownership. Enable teams to access data safely with built-in compliance and lineage.',
      features: [
        'Data catalog & discovery',
        'Fine-grained access control',
        'Data lineage tracking',
        'Policy enforcement'
      ]
    },
    {
      name: 'IntegrateX',
      category: 'Integration',
      categoryColor: 'blue',
      tagline: 'Enterprise integration made simple',
      description: 'Prebuilt enterprise connectors and pipelines for rapid integrations. Connect your stack in minutes with battle-tested, production-ready connectors.',
      features: [
        '100+ pre-built connectors',
        'Real-time data sync',
        'Custom transformation logic',
        'Enterprise SLA & support'
      ]
    },
  ];

  const integrationCategories = [
    {
      category: 'Sales and CRM',
      tools: [
        { name: 'Salesforce', logo: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg' },
        { name: 'HubSpot', logo: 'https://cdn.worldvectorlogo.com/logos/hubspot.svg' },
        { name: 'Microsoft Dynamics', logo: 'https://img.logo.dev/microsoft.dynamics365.com?token=pk_X-1ZO13CQQ2gH8__jT7Rjg' },
        { name: 'Zoho CRM', logo: 'https://cdn.worldvectorlogo.com/logos/zoho.svg' },
        { name: 'Pipedrive', logo: 'https://cdn.worldvectorlogo.com/logos/pipedrive.svg' },
        { name: 'Freshsales', logo: 'https://img.logo.dev/freshworks.com?token=pk_X-1ZO13CQQ2gH8__jT7Rjg' },
      ]
    },
    {
      category: 'Communication',
      tools: [
        { name: 'Slack', logo: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg' },
        { name: 'Microsoft Teams', logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-teams-1.svg' },
        { name: 'Gmail', logo: 'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png' },
        { name: 'Zoom', logo: 'https://cdn.worldvectorlogo.com/logos/zoom-communications-logo.svg' },
        { name: 'Discord', logo: 'https://cdn.worldvectorlogo.com/logos/discord-logo-2.svg' },
        { name: 'WhatsApp', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' },
      ]
    },
    {
      category: 'Productivity',
      tools: [
        { name: 'Google Sheets', logo: 'https://www.gstatic.com/images/branding/product/1x/sheets_2020q4_48dp.png' },
        { name: 'Google Docs', logo: 'https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png' },
        { name: 'Asana', logo: 'https://img.logo.dev/asana.com?token=pk_X-1ZO13CQQ2gH8__jT7Rjg' },
        { name: 'Monday', logo: 'https://img.logo.dev/monday.com?token=pk_X-1ZO13CQQ2gH8__jT7Rjg' },
        { name: 'Trello', logo: 'https://img.logo.dev/trello.com?token=pk_X-1ZO13CQQ2gH8__jT7Rjg' },
        { name: 'Notion', logo: 'https://img.logo.dev/notion.so?token=pk_X-1ZO13CQQ2gH8__jT7Rjg' },
      ]
    },
    {
      category: 'Support',
      tools: [
        { name: 'Zendesk', logo: 'https://img.logo.dev/zendesk.com?token=pk_X-1ZO13CQQ2gH8__jT7Rjg' },
        { name: 'Freshdesk', logo: 'https://assets.freshworks.com/featured_image/main/freshdesk-logo.svg' },
        { name: 'Intercom', logo: 'https://img.logo.dev/intercom.com?token=pk_X-1ZO13CQQ2gH8__jT7Rjg' },
        { name: 'Jira', logo: 'https://cdn.worldvectorlogo.com/logos/jira-1.svg' },
        { name: 'Front', logo: 'https://img.logo.dev/front.com?token=pk_X-1ZO13CQQ2gH8__jT7Rjg' },
        { name: 'ServiceNow', logo: 'https://img.logo.dev/servicenow.com?token=pk_X-1ZO13CQQ2gH8__jT7Rjg' },
      ]
    },
    {
      category: 'Business Intelligence',
      tools: [
        { name: 'Snowflake', logo: 'https://img.logo.dev/snowflake.com?token=pk_X-1ZO13CQQ2gH8__jT7Rjg' },
        { name: 'BigQuery', logo: 'https://www.gstatic.com/images/branding/product/1x/bigquery_48dp.png' },
        { name: 'Tableau', logo: 'https://img.logo.dev/tableau.com?token=pk_X-1ZO13CQQ2gH8__jT7Rjg' },
        { name: 'Power BI', logo: 'https://img.logo.dev/powerbi.microsoft.com?token=pk_X-1ZO13CQQ2gH8__jT7Rjg' },
        { name: 'Looker', logo: 'https://img.logo.dev/looker.com?token=pk_X-1ZO13CQQ2gH8__jT7Rjg' },
        { name: 'Databricks', logo: 'https://img.logo.dev/databricks.com?token=pk_X-1ZO13CQQ2gH8__jT7Rjg' },
      ]
    },
    {
      category: 'File Storage',
      tools: [
        { name: 'Google Drive', logo: 'https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png' },
        { name: 'Dropbox', logo: 'https://cfl.dropboxstatic.com/static/images/logo_catalog/dropbox_logo_glyph_2015-vflJ3ie18.png' },
        { name: 'OneDrive', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Microsoft_Office_OneDrive_%282019%E2%80%93present%29.svg' },
        { name: 'Box', logo: 'https://img.logo.dev/box.com?token=pk_X-1ZO13CQQ2gH8__jT7Rjg' },
        { name: 'SharePoint', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Microsoft_Office_SharePoint_%282019%E2%80%93present%29.svg' },
        { name: 'Amazon S3', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Amazon-S3-Logo.svg' },
      ]
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background Layer */}
      <div className="fixed inset-0 -z-10">
        <LiquidEther
          colors={['#E0E7FF', '#FEE2F8', '#F3E8FF']}
          mouseForce={isMobile ? 15 : 20}
          cursorSize={isMobile ? 80 : 100}
          isViscous={false}
          viscous={30}
          iterationsViscous={isMobile ? 16 : 32}
          iterationsPoisson={isMobile ? 16 : 32}
          resolution={isMobile ? 0.3 : 0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={isMobile ? 0.1 : 0.15}
          autoIntensity={isMobile ? 1.0 : 1.5}
          takeoverDuration={0.25}
          autoResumeDelay={isMobile ? 2000 : 3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-20 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/agentic-site-logo.png"
              alt="Agentic Labs"
              className="h-12 sm:h-14 md:h-16 w-auto"
            />
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <NavBar
              items={items}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={1}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />

            <GlowButton
              glowColor="#2563eb"
              pulseAnimation={true}
              onClick={() => console.log('Book A Demo')}
              className="!px-6 !py-3 !text-base"
            >
              Book A Demo
            </GlowButton>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-900 p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white/90 backdrop-blur-md rounded-lg border border-gray-200">
            <nav className="flex flex-col space-y-2 px-4">
              {items.map((item, index) => {
                if (item.dropdown) {
                  // Handle Partners dropdown
                  return (
                    <div key={index}>
                      <button
                        onClick={() => setIsPartnersOpen(!isPartnersOpen)}
                        className="w-full text-left text-gray-900 py-2 px-4 rounded hover:bg-gray-100 transition-colors flex items-center justify-between"
                      >
                        <span>{item.label}</span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${isPartnersOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isPartnersOpen && (
                        <div className="ml-4 mt-2 space-y-2">
                          <a
                            href="#partner-program"
                            className="block text-gray-700 py-2 px-4 rounded hover:bg-gray-100 transition-colors text-sm"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsPartnersOpen(false);
                            }}
                          >
                            <div className="font-semibold">Partner Program</div>
                            <div className="text-xs text-gray-500">Explore our partner program</div>
                          </a>
                          <a
                            href="#become-partner"
                            className="block text-gray-700 py-2 px-4 rounded hover:bg-gray-100 transition-colors text-sm"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsPartnersOpen(false);
                            }}
                          >
                            <div className="font-semibold">Become a Partner</div>
                            <div className="text-xs text-gray-500">Join our partner ecosystem</div>
                          </a>
                          <a
                            href="#find-partner"
                            className="block text-gray-700 py-2 px-4 rounded hover:bg-gray-100 transition-colors text-sm"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsPartnersOpen(false);
                            }}
                          >
                            <div className="font-semibold">Find a Partner</div>
                            <div className="text-xs text-gray-500">Connect with a partner</div>
                          </a>
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="text-gray-900 py-2 px-4 rounded hover:bg-gray-100 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              })}
              <LiquidButton
                variant="primary"
                liquidColor="#5227FF"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  console.log('Book A Demo');
                }}
                className="mt-4 w-full"
              >
                Book A Demo
              </LiquidButton>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8 pt-32">
        <div className="text-center max-w-5xl mx-auto w-full">
          <FadeInText delay={0} duration={0.8} direction="down">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gray-100 backdrop-blur-sm border border-gray-200">
              <span className="text-sm font-medium text-gray-600">The operating system for your AI workflows</span>
            </div>
          </FadeInText>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <FadeInText delay={0.2} duration={0.8} direction="up">
              <div className="text-gray-900">Orchestrate, observe, and</div>
            </FadeInText>
            <FadeInText delay={0.4} duration={0.8} direction="up">
              <div className="text-blue-600">govern production AI</div>
            </FadeInText>
          </h1>

          <FadeInText delay={0.6} duration={0.8} direction="up">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12">
              Reduce manual steps, ship faster, and stay compliant across teams and systems.
            </p>
          </FadeInText>

          <FadeInText delay={0.8} duration={0.8} direction="up">
            <GlowButton
              glowColor="#2563eb"
              pulseAnimation={true}
              onClick={() => console.log('Book a demo')}
              className="!px-8 !py-4 !text-lg"
            >
              Book a demo
            </GlowButton>
          </FadeInText>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FadeInText key={feature.title} delay={0.2 + index * 0.1} duration={0.8} direction="up">
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </FadeInText>
            ))}
          </div>
        </div>
      </section>

      {/* Products Detail Section */}
      <section id="products-list" className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <FadeInText delay={0} duration={0.8} direction="up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
              Our Products
            </h2>
          </FadeInText>

          <FadeInText delay={0.2} duration={0.8} direction="up">
            <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              Modular products to accelerate your AI roadmap with governed, reliable outcomes.
            </p>
          </FadeInText>

          <div className="space-y-12">
            {products.map((product, index) => (
              <FadeInText key={product.name} delay={0.2 + index * 0.1} duration={0.8} direction="up">
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left side - Product info */}
                    <div>
                      <div className="mb-4">
                        <span className={`inline-block px-3 py-1 bg-${product.categoryColor}-50 text-${product.categoryColor}-600 text-sm font-semibold rounded-full`}>
                          {product.category}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-xl text-blue-600 font-semibold mb-4">{product.tagline}</p>
                      <p className="text-gray-600 text-base leading-relaxed mb-6">
                        {product.description}
                      </p>
                      <button className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2 transition-colors duration-300">
                        Learn more
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </button>
                    </div>

                    {/* Right side - Features */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Key Features</h4>
                      <ul className="space-y-3">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeInText>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <FadeInText delay={0} duration={0.8} direction="up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
              How it works
            </h2>
          </FadeInText>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInText delay={0.2} duration={0.8} direction="up">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Design</h3>
                <p className="text-gray-600">
                  Map goals to workflows, data, and policies with clear owners.
                </p>
              </div>
            </FadeInText>

            <FadeInText delay={0.3} duration={0.8} direction="up">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Deploy</h3>
                <p className="text-gray-600">
                  Ship pilots to production with guardrails and change control.
                </p>
              </div>
            </FadeInText>

            <FadeInText delay={0.4} duration={0.8} direction="up">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Scale</h3>
                <p className="text-gray-600">
                  Measure outcomes, harden reliability, expand integrations.
                </p>
              </div>
            </FadeInText>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <FadeInText delay={0} duration={0.8} direction="up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
              Integrations
            </h2>
          </FadeInText>

          <FadeInText delay={0.2} duration={0.8} direction="up">
            <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              Connect with 100+ tools across communication, CRM, support, storage, and data platforms.
              Plug into your tools, not beside them.
            </p>
          </FadeInText>

          {/* Category Tabs */}
          <FadeInText delay={0.3} duration={0.8} direction="up">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {integrationCategories.map((category) => (
                <button
                  key={category.category}
                  onClick={() => setSelectedCategory(category.category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white/80 text-gray-900 border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {category.category}
                </button>
              ))}
            </div>
          </FadeInText>

          {/* Selected Category Tools */}
          <FadeInText delay={0.4} duration={0.8} direction="up">
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">{selectedCategory}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {integrationCategories
                  .find((cat) => cat.category === selectedCategory)
                  ?.tools.map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-xl hover:scale-105 transition-all duration-300 aspect-square"
                    >
                      <div className="w-16 h-16 bg-white rounded-lg mb-3 flex items-center justify-center shadow-sm p-2">
                        <img
                          src={tool.logo}
                          alt={tool.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            // Fallback to first letter if logo fails to load
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        <span className="text-3xl font-bold text-gray-400 hidden">
                          {tool.name.charAt(0)}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-gray-900 text-center">{tool.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          </FadeInText>
        </div>
      </section>

      {/* Security Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInText delay={0.2} duration={0.8} direction="up">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">SSO & Access</h3>
                <p className="text-gray-600">
                  SAML/OIDC SSO, roles, and environment-level controls.
                </p>
              </div>
            </FadeInText>

            <FadeInText delay={0.3} duration={0.8} direction="up">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Auditability</h3>
                <p className="text-gray-600">
                  Audit logs for actions, prompts, tools, and data access.
                </p>
              </div>
            </FadeInText>

            <FadeInText delay={0.4} duration={0.8} direction="up">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data Controls</h3>
                <p className="text-gray-600">
                  Redaction, residency patterns, and dataset governance.
                </p>
              </div>
            </FadeInText>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInText delay={0} duration={0.8} direction="up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              See it in action
            </h2>
          </FadeInText>

          <FadeInText delay={0.2} duration={0.8} direction="up">
            <p className="text-lg text-gray-600 mb-8">
              Book a 30-minute walkthrough of orchestration, guardrails, and observability tailored to your use case.
            </p>
          </FadeInText>

          <FadeInText delay={0.4} duration={0.8} direction="up">
            <GlowButton
              glowColor="#2563eb"
              pulseAnimation={true}
              onClick={() => console.log('Book a demo')}
              className="!px-8 !py-4 !text-lg"
            >
              Book a demo
            </GlowButton>
          </FadeInText>
        </div>
      </section>

      <Footer />
    </div>
  );
}
