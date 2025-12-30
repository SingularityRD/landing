import LINKS from 'constants/links';

export default [
  {
    planId: 'starter',
    type: 'Starter',
    title: '$35',
    subtitle: 'per user / month',
    price: 35,
    description: 'Replace Jamf + basic EDR at 60% less cost.',
    features: [
      {
        icon: 'projects',
        title: 'Up to 100 endpoints',
        info: '<p>Windows, macOS, Linux, iOS, Android — all platforms, one agent.</p>',
      },
      {
        icon: 'clock',
        title: 'AutoSecOps Core',
        info: '<p>AI-powered threat detection. Neutralize threats in under 5 minutes.</p>',
      },
      {
        icon: 'storage',
        title: 'SOC 2 Toolkit',
        info: '<p>Pre-built policies and evidence collection. Get audit-ready in weeks, not months.</p>',
      },
      {
        icon: 'autoscale',
        title: 'Device Management',
        subtitle: '(Inventory, Lock, Wipe)',
      },
    ],
    otherFeatures: {
      title: 'Replaces',
      features: [
        { title: 'Jamf — $10-15/user/mo' },
        { title: 'Basic EDR — $10-20/user/mo' },
        { title: 'Manual compliance — weeks of work' },
      ],
    },
    button: {
      url: LINKS.contactSales,
      event: 'Hero Starter Panel',
      analyticsEvent: 'pricing_page_get_started_with_starter_plan_clicked',
    },
  },
  {
    planId: 'professional',
    type: 'Most Popular',
    title: '$65',
    subtitle: 'per user / month',
    highlighted: true,
    price: 65,
    priceFrom: false,
    description: 'Replace your entire security stack. Save 46%.',
    features: [
      {
        icon: 'projects',
        title: 'Up to 1,000 endpoints',
        info: '<p>Scale across your organization. No per-endpoint surprises.</p>',
      },
      {
        icon: 'clock',
        title: 'AutoSecOps Advanced',
        info: '<p>Autonomous threat response in <100ms. While others react, you\'ve already won.</p>',
      },
      {
        icon: 'storage',
        title: 'Unlimited Compliance',
        info: '<p>SOC 2, HIPAA, GDPR, ISO 27001 — all frameworks included. SOC 2 Type I in 14 days.</p>',
      },
      {
        icon: 'autoscale',
        title: 'vCISO AI + Pen Test',
        subtitle: '(Included annually)',
      },
    ],
    otherFeatures: {
      title: 'Replaces (saves $55+/user)',
      features: [
        { title: 'Jamf/Kandji — $15/user/mo' },
        { title: 'CrowdStrike — $35-50/user/mo' },
        { title: 'Okta — $15-20/user/mo' },
        { title: 'Vanta — $800+/mo base' },
        { title: 'Annual Pen Test — $4-15k/yr' },
      ],
    },
    button: {
      url: LINKS.contactSales,
      theme: 'primary',
      event: 'Hero Professional Panel',
      analyticsEvent: 'pricing_page_get_started_with_professional_plan_clicked',
    },
  },
  {
    planId: 'enterprise',
    type: 'Enterprise',
    title: 'Custom',
    subtitle: 'Contact for pricing',
    price: 0,
    priceFrom: false,
    description: 'For Fortune 500. Dedicated security engineer included.',
    features: [
      {
        icon: 'projects',
        title: 'Unlimited endpoints',
        info: '<p>Scale to millions. No limits, no per-device fees, no surprises.</p>',
      },
      {
        icon: 'clock',
        title: 'Predictive Maintenance AI',
        info: '<p>Predict failures 14 days in advance. Our customers see 90% less downtime.</p>',
      },
      {
        icon: 'storage',
        title: 'Continuous Pen Testing',
        info: '<p>Monthly red team exercises. Not just annual checkbox compliance.</p>',
      },
      {
        icon: 'autoscale',
        title: '50+ CTI Feeds',
        subtitle: '(Dark web monitoring)',
      },
    ],
    otherFeatures: {
      title: 'Enterprise exclusives',
      features: [
        { title: 'Dedicated Security Engineer' },
        { title: '24/7 Phone + On-site Training' },
        { title: 'Self-hosted / Air-gapped option' },
        { title: 'Custom SLA (up to 99.99%)' },
        { title: 'AppSec CI/CD integration' },
      ],
    },
    button: {
      url: LINKS.contactSales,
      theme: 'primary',
      event: 'Hero Enterprise Panel',
      analyticsEvent: 'pricing_page_get_started_with_enterprise_plan_clicked',
    },
  },
];
