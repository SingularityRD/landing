import LINKS from 'constants/links';

export default {
  headings: {
    feature: '',
    starter: {
      label: 'Starter',
      price: '<span>$8</span>/device/mo',
      buttonUrl: LINKS.contactSales,
      buttonText: 'Get Started',
      subtitle: 'No minimum • Unlimited users',
    },
    professional: {
      label: 'Growth',
      price: '<span>$12</span>/device/mo',
      buttonUrl: LINKS.contactSales,
      buttonText: 'Get Started',
      subtitle: 'No minimum • Unlimited users',
    },
    enterprise: {
      label: 'Enterprise',
      price: '<span>Custom</span>',
      buttonUrl: LINKS.contactSales,
      buttonText: 'Contact Sales',
      subtitle: 'Volume discounts from 100+',
    },
  },
  cols: [
    // ============= PRICING MODEL =============
    {
      rows: '1',
      feature: 'Pricing Model',
    },
    {
      rows: '2',
      feature: {
        title: 'Per-Device Billing',
        subtitle: 'All features included — no add-on modules'
      },
      starter: '<span class="text-green-45 font-semibold">$8/device</span>',
      professional: '<span class="text-green-45 font-semibold">$12/device</span>',
      enterprise: '<span class="text-green-45 font-semibold">Custom</span>',
    },
    {
      rows: '1',
      feature: {
        title: 'Minimum Endpoint Requirement',
        subtitle: 'Tanium, CrowdStrike require 2,000+ endpoints'
      },
      starter: '<span class="text-green-45">No minimum</span>',
      professional: '<span class="text-green-45">No minimum</span>',
      enterprise: '100+ recommended',
    },
    {
      rows: '1',
      feature: {
        title: 'Identity Management (SSO/SCIM)',
        subtitle: 'Competitors charge Okta separately: $15-20/user'
      },
      starter: false,
      professional: '<span class="text-green-45">Included</span>',
      enterprise: '<span class="text-green-45">Included</span>',
    },
    // ============= DEVICE MANAGEMENT =============
    {
      rows: '1',
      feature: 'Device Management',
    },
    {
      rows: '1',
      feature: {
        title: 'Cross-Platform MDM',
        subtitle: 'Windows, macOS, Linux, iOS, Android'
      },
      starter: true,
      professional: true,
      enterprise: true,
    },
    {
      rows: '1',
      feature: {
        title: 'Zero-Touch Deployment',
        subtitle: 'Tanium charges extra: $2.65/device'
      },
      starter: '<span class="text-green-45">Included</span>',
      professional: '<span class="text-green-45">Included</span>',
      enterprise: '<span class="text-green-45">Included</span>',
    },
    {
      rows: '1',
      feature: {
        title: 'BYOD Enrollment & Work Profiles'
      },
      starter: true,
      professional: true,
      enterprise: true,
    },
    {
      rows: '1',
      feature: {
        title: 'Device Inventory & Search'
      },
      starter: true,
      professional: true,
      enterprise: true,
    },
    {
      rows: '1',
      feature: {
        title: 'Application Deployment & Management',
        subtitle: 'Tanium charges extra: $7.25/device'
      },
      starter: false,
      professional: '<span class="text-green-45">Included</span>',
      enterprise: '<span class="text-green-45">Included</span>',
    },
    {
      rows: '1',
      feature: {
        title: 'OS Updates & Patch Management',
        subtitle: 'Tanium charges extra: $7.25/device'
      },
      starter: false,
      professional: '<span class="text-green-45">Included</span>',
      enterprise: '<span class="text-green-45">Included</span>',
    },
    {
      rows: '1',
      feature: { title: 'Remote Lock & Wipe' },
      starter: true,
      professional: true,
      enterprise: true,
    },
    // ============= SECURITY =============
    {
      rows: '1',
      feature: 'Endpoint Security',
    },
    {
      rows: '1',
      feature: {
        title: 'AutoSecOps (AI Threat Response)',
        subtitle: 'Sub-100ms autonomous response'
      },
      starter: 'Core',
      professional: 'Advanced',
      enterprise: 'Advanced + Custom Rules',
    },
    {
      rows: '1',
      feature: {
        title: 'Malware Detection (YARA/IoCs)'
      },
      starter: true,
      professional: true,
      enterprise: true,
    },
    {
      rows: '1',
      feature: {
        title: 'File Integrity Monitoring',
        subtitle: 'Tanium charges extra: $7.25/device'
      },
      starter: '<span class="text-green-45">Included</span>',
      professional: '<span class="text-green-45">Included</span>',
      enterprise: '<span class="text-green-45">Included</span>',
    },
    {
      rows: '1',
      feature: {
        title: 'Vulnerability Scanning & Scoring',
        subtitle: 'CISA KEV integration'
      },
      starter: false,
      professional: true,
      enterprise: true,
    },
    {
      rows: '1',
      feature: {
        title: 'Dark Web Monitoring'
      },
      starter: false,
      professional: true,
      enterprise: true,
    },
    {
      rows: '1',
      feature: {
        title: 'Threat Intelligence Feeds'
      },
      starter: false,
      professional: '10 feeds',
      enterprise: '50+ feeds',
    },
    {
      rows: '1',
      feature: {
        title: 'Predictive Maintenance AI',
        subtitle: 'Singularity exclusive — no competitor offers this'
      },
      starter: false,
      professional: false,
      enterprise: '<span class="text-green-45">Included</span>',
    },
    // ============= COMPLIANCE =============
    {
      rows: '1',
      feature: 'Compliance & Governance',
    },
    {
      rows: '1',
      feature: {
        title: 'Compliance Frameworks',
        subtitle: 'Competitors charge Vanta separately: $800+/mo'
      },
      starter: 'SOC 2',
      professional: 'SOC 2, HIPAA, GDPR, ISO',
      enterprise: 'All + Custom',
    },
    {
      rows: '1',
      feature: {
        title: 'Virtual CISO Assistant'
      },
      starter: false,
      professional: 'Basic',
      enterprise: 'Full',
    },
    {
      rows: '1',
      feature: {
        title: 'Penetration Testing',
        subtitle: 'Market rate: $4,000-15,000/year'
      },
      starter: false,
      professional: '<span class="text-green-45">Annual (Included)</span>',
      enterprise: '<span class="text-green-45">Continuous (Included)</span>',
    },
    {
      rows: '1',
      feature: {
        title: 'Audit Logging & Reporting'
      },
      starter: false,
      professional: true,
      enterprise: true,
    },
    // ============= DEPLOYMENT =============
    {
      rows: '1',
      feature: 'Deployment & Integration',
    },
    {
      rows: '1',
      feature: { title: 'Managed Cloud' },
      starter: true,
      professional: true,
      enterprise: true,
    },
    {
      rows: '1',
      feature: { title: 'Self-Hosted / Air-Gapped' },
      starter: false,
      professional: false,
      enterprise: true,
    },
    {
      rows: '1',
      feature: { title: 'REST API & Webhooks' },
      starter: true,
      professional: true,
      enterprise: true,
    },
    {
      rows: '1',
      feature: { title: 'GitOps & CI/CD Integration' },
      starter: false,
      professional: true,
      enterprise: true,
    },
    // ============= SUPPORT =============
    {
      rows: '1',
      feature: 'Support',
    },
    {
      rows: '1',
      feature: { title: 'Support SLA' },
      starter: 'Email',
      professional: 'Slack (8×5)',
      enterprise: '24/7 Phone (99.99%)',
    },
    {
      rows: '1',
      feature: { title: 'Dedicated Security Engineer' },
      starter: false,
      professional: false,
      enterprise: true,
    },
    // ============= COMMITMENT =============
    {
      rows: '1',
      feature: 'Commitment Discounts',
    },
    {
      rows: '1',
      feature: { title: 'Annual Billing' },
      starter: '17% off',
      professional: '17% off',
      enterprise: '17% off',
    },
    {
      rows: '1',
      feature: { title: '2-Year Agreement' },
      starter: '—',
      professional: '—',
      enterprise: '25% off',
    },
  ],
};
