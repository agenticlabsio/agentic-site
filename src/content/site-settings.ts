// Canonical defaults for the SiteSettings global — seeded into the CMS so
// editors have a real starting point. Nav covers every top-level section
// (fixes the missing "Industries" link that some pages previously omitted).
export const siteSettingsDefault = {
  brandTagline:
    "We design, ship, and run custom agentic solutions that handle your team's autonomous workflows. Built for ROI, governed end to end.",
  defaultSeoDescription:
    'Agentic Labs builds custom agentic solutions engineered for production — built for ROI, governed for compliance, deployed on your infrastructure.',
  navItems: [
    { label: 'Solutions', href: '/solutions' },
    { label: 'Industries', href: '/industries' },
    { label: 'Platform', href: '/platform' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Resources', href: '/resources' },
  ],
  ctaButton: {
    label: 'Book a Discovery Call',
    href: '/#contact',
  },
  footerLinkGroups: [
    {
      title: 'Capabilities',
      links: [
        { label: 'Solutions', href: '/solutions' },
        { label: 'Industries', href: '/industries' },
        { label: 'Platform', href: '/platform' },
        { label: 'Integrations', href: '/platform/integrations' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Blog', href: '/resources/blog' },
        { label: 'FAQ', href: '/resources/faq' },
        { label: 'Contact', href: '/#contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookie Policy', href: '#' },
      ],
    },
  ],
  socialLinks: [
    { platform: 'linkedin' as const, url: 'https://www.linkedin.com/company/agenticlabsio/posts/?feedView=all' },
    { platform: 'x' as const, url: 'https://x.com/agenticlabsio' },
    { platform: 'github' as const, url: 'https://github.com/agenticlabsio' },
  ],
}
