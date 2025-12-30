import LINKS from 'constants/links';

export default {
  headings: {
    feature: '',
    starter: {
      label: 'Starter',
      price: '<span>$35</span>/user/month',
      buttonUrl: LINKS.contactSales,
      buttonText: 'Get Started',
    },
    professional: {
      label: 'Professional',
      price: '<span>$65</span>/user/month',
      buttonUrl: LINKS.contactSales,
      buttonText: 'Get Started',
    },
    enterprise: {
      label: 'Enterprise',
      price: '<span>Custom</span> pricing',
      buttonUrl: LINKS.contactSales,
      buttonText: 'Contact Sales',
    },
  },
  cols: [
    // ============= COST COMPARISON (PROMINENT) =============
    {
      rows: '1',
      feature: '💰 Cost Comparison vs Competitors',
    },
    {
      rows: '2',
      feature: {
        title: '✅ Singularity (All-in-One)',
        subtitle: 'Everything included'
      },
      starter: '<span class="text-green-45 text-lg font-semibold">$35/user/mo</span>',
      professional: '<span class="text-green-45 text-lg font-semibold">$65/user/mo</span>',
      enterprise: '<span class="text-green-45 text-lg font-semibold">Custom</span>',
    },
    {
      rows: '2',
      feature: {
        title: 'Jamf (MDM only)',
        subtitle: 'Device management'
      },
      starter: '<span class="text-gray-new-50">$10-15/user/mo</span>',
      professional: '<span class="text-gray-new-50">$10-15/user/mo</span>',
      enterprise: '<span class="text-gray-new-50">$10-15/user/mo</span>',
    },
    {
      rows: '2',
      feature: {
        title: 'CrowdStrike (EDR only)',
        subtitle: 'Threat detection'
      },
      starter: '<span class="text-gray-new-50">$35-50/user/mo</span>',
      professional: '<span class="text-gray-new-50">$35-50/user/mo</span>',
      enterprise: '<span class="text-gray-new-50">$35-50/user/mo</span>',
    },
    {
      rows: '2',
      feature: {
        title: 'Okta (IAM only)',
        subtitle: 'Identity management'
      },
      starter: '<span class="text-gray-new-50">$15-20/user/mo</span>',
      professional: '<span class="text-gray-new-50">$15-20/user/mo</span>',
      enterprise: '<span class="text-gray-new-50">$15-20/user/mo</span>',
    },
    {
      rows: '2',
      feature: {
        title: 'Vanta (Compliance only)',
        subtitle: 'SOC 2, HIPAA, GDPR'
      },
      starter: '<span class="text-gray-new-50">$800+/mo base</span>',
      professional: '<span class="text-gray-new-50">$800+/mo base</span>',
      enterprise: '<span class="text-gray-new-50">$800+/mo base</span>',
    },
    {
      rows: '2',
      feature: {
        title: 'Penetration Test (Annual)',
        subtitle: 'External vendor'
      },
      starter: '<span class="text-gray-new-50">$4,000-15,000/yr</span>',
      professional: '<span class="text-green-45">Included ✓</span>',
      enterprise: '<span class="text-green-45">Continuous ✓</span>',
    },
    {
      rows: '2',
      feature: {
        title: '❌ Total Competitor Stack',
        subtitle: 'Jamf + CrowdStrike + Okta + Vanta'
      },
      starter: '<span class="line-through text-gray-new-50">$100+/user/mo</span>',
      professional: '<span class="line-through text-gray-new-50">$120+/user/mo</span>',
      enterprise: '<span class="line-through text-gray-new-50">$150+/user/mo</span>',
    },
    {
      rows: '2',
      feature: {
        title: '🎯 Your Savings',
      },
      starter: '<span class="text-green-45 font-semibold">Save 65%</span><span>$65+/user saved</span>',
      professional: '<span class="text-green-45 font-semibold">Save 46%</span><span>$55+/user saved</span>',
      enterprise: '<span class="text-green-45 font-semibold">Custom ROI</span><span>Contact sales</span>',
    },
    // ============= AutoSecOps / MDM =============
    {
      rows: '1',
      feature: 'AutoSecOps / MDM',
    },
    {
      rows: '2',
      feature: {
        title: 'Endpoints managed',
        subtitle: 'Jamf charges $10-15/user extra'
      },
      starter: 'Up to 100<span>Included</span>',
      professional: 'Up to 1,000<span>Included</span>',
      enterprise: 'Unlimited<span>Included</span>',
    },
    {
      rows: '1',
      feature: { title: 'Cross-platform MDM (Win/Mac/Linux/iOS/Android)' },
      starter: true,
      professional: true,
      enterprise: true,
    },
    {
      rows: '1',
      feature: { title: 'Zero-touch deployment' },
      starter: false,
      professional: true,
      enterprise: true,
    },
    {
      rows: '1',
      feature: { title: 'BYOD enrollment & work profiles' },
      starter: true,
      professional: true,
      enterprise: true,
    },
    {
      rows: '1',
      feature: { title: 'Device inventory & search' },
      starter: true,
      professional: true,
      enterprise: true,
    },
    {
      rows: '1',
      feature: { title: 'Remote lock, wipe & remediation' },
      starter: true,
      professional: true,
      enterprise: true,
    },
    {
      rows: '1',
      feature: { title: 'Application deployment & management' },
      starter: false,
      professional: true,
      enterprise: true,
    },
    {
      rows: '1',
      feature: { title: 'OS update & disk encryption enforcement' },
      starter: false,
      professional: true,
      enterprise: true,
    },
    {
      rows: '1',
      feature: { title: 'Script execution & maintenance windows' },
      starter: true,
      professional: true,
      enterprise: true,
    },
    // ============= Security =============
    {
      rows: '1',
      feature: 'Threat Detection & Response',
    },
    {
      rows: '2',
      feature: {
        title: 'AI threat response',
        subtitle: 'CrowdStrike charges $35-50/user'
      },
      starter: '<5 min<span>Manual response</span>',
      professional: '<100ms<span>Autonomous AI</span>',
      enterprise: '<100ms<span>Autonomous AI</span>',
    },
    {
      rows: '1',
      feature: { title: 'File integrity monitoring (FIM)' },
      starter: true,
      professional: true,
      enterprise: true,
    },
    {
      rows: '1',
      feature: { title: 'Malware detection (YARA/custom IoCs)' },
      starter: true,
      professional: true,
      enterprise: true,
    },
    {
      rows: '1',
      feature: { title: 'Continuous vulnerability scanning' },
      starter: true,
      professional: true,
      enterprise: true,
    },
    {
      rows: '1',
      feature: { title: 'CISA KEV & vulnerability scores' },
      starter: false,
      professional: true,
      enterprise: true,
    },
    {
      rows: '1',
      feature: { title: 'Dark web credential monitoring' },
      starter: false,
      professional: true,
      enterprise: true,
    },
    {
      rows: '1',
      feature: { title: 'Threat intelligence feeds' },
      starter: false,
      professional: '10 CTI feeds',
      enterprise: '50+ CTI feeds',
    },
    {
      rows: '1',
      feature: { title: 'Custom threat hunting' },
      starter: false,
      professional: false,
      enterprise: true,
    },
    // ============= Compliance =============
    {
      rows: '1',
      feature: 'Compliance Automation',
    },
    {
      rows: '2',
      feature: {
        title: 'Compliance frameworks',
        subtitle: 'Vanta charges $10,000+/year base'
      },
      starter: 'SOC 2 toolkit<span>Included</span>',
      professional: 'Unlimited<span>SOC 2, HIPAA, GDPR, ISO 27001</span>',
      enterprise: 'Unlimited<span>All frameworks + custom</span>',
    },
    {
      rows: '1',
      feature: { title: 'Automated evidence collection' },
      starter: false,
      professional: true,
      enterprise: true,
    },
    {
      rows: '1',
      feature: { title: 'Audit-ready documentation' },
      starter: 'Basic',
      professional: 'Full',
      enterprise: 'Custom',
    },
    {
      rows: '2',
      feature: {
        title: 'Penetration testing',
        subtitle: 'Typically $4,000-15,000 extra'
      },
      starter: false,
      professional: 'Annual<span>Included</span>',
      enterprise: 'Continuous<span>Monthly assessments</span>',
    },
    {
      rows: '1',
      feature: { title: 'SOC 2 certification timeline' },
      starter: 'Self-guided',
      professional: '14 days Type I',
      enterprise: 'White-glove support',
    },
    // ============= IAM =============
    {
      rows: '1',
      feature: 'Identity & Access Management',
    },
    {
      rows: '2',
      feature: {
        title: 'SSO & SCIM',
        subtitle: 'Okta charges $15-20/user'
      },
      starter: false,
      professional: 'Included<span>Unlimited apps</span>',
      enterprise: 'Included<span>Unlimited apps</span>',
    },
    {
      rows: '1',
      feature: { title: 'Role-based access control (RBAC)' },
      starter: false,
      professional: true,
      enterprise: true,
    },
    {
      rows: '1',
      feature: { title: 'Two-factor authentication (2FA)' },
      starter: false,
      professional: true,
      enterprise: true,
    },
    {
      rows: '1',
      feature: { title: 'Just-in-time (JIT) access provisioning' },
      starter: false,
      professional: false,
      enterprise: true,
    },
    {
      rows: '1',
      feature: { title: 'Immutable audit trail' },
      starter: false,
      professional: true,
      enterprise: true,
    },
    // ============= vCISO =============
    {
      rows: '1',
      feature: 'vCISO & Advisory',
    },
    {
      rows: '2',
      feature: {
        title: 'Security advisory',
        subtitle: 'Typical vCISO: $3,000-10,000/month'
      },
      starter: 'Quarterly reports',
      professional: 'AI vCISO<span>24/7 guidance</span>',
      enterprise: 'Dedicated engineer<span>+ AI vCISO</span>',
    },
    {
      rows: '1',
      feature: { title: 'Weekly threat briefings' },
      starter: false,
      professional: true,
      enterprise: true,
    },
    {
      rows: '1',
      feature: { title: 'Board-ready reporting' },
      starter: false,
      professional: true,
      enterprise: true,
    },
    // ============= Predictive Maintenance =============
    {
      rows: '1',
      feature: 'Predictive Maintenance AI',
    },
    {
      rows: '1',
      feature: { title: 'Device health monitoring' },
      starter: true,
      professional: true,
      enterprise: true,
    },
    {
      rows: '1',
      feature: { title: 'Failure prediction' },
      starter: false,
      professional: false,
      enterprise: '14-day advance warning',
    },
    {
      rows: '1',
      feature: { title: 'Performance analytics' },
      starter: 'Basic',
      professional: 'Advanced',
      enterprise: 'Custom dashboards',
    },
    // ============= REPS =============
    {
      rows: '1',
      feature: 'REPS Training Platform',
    },
    {
      rows: '1',
      feature: { title: 'Security training modules' },
      starter: 'Basic',
      professional: 'Full library',
      enterprise: 'Custom + full library',
    },
    {
      rows: '1',
      feature: { title: 'Skill verification challenges' },
      starter: false,
      professional: true,
      enterprise: true,
    },
    {
      rows: '1',
      feature: { title: 'Compliance certification tracking' },
      starter: false,
      professional: true,
      enterprise: true,
    },
    // ============= Support & Deployment =============
    {
      rows: '1',
      feature: 'Support & Deployment',
    },
    {
      rows: '1',
      feature: { title: 'Managed cloud' },
      starter: true,
      professional: true,
      enterprise: true,
    },
    {
      rows: '1',
      feature: { title: 'Self-hosted / on-prem option' },
      starter: false,
      professional: false,
      enterprise: true,
    },
    {
      rows: '1',
      feature: { title: 'Multi-tenancy' },
      starter: false,
      professional: false,
      enterprise: true,
    },
    {
      rows: '1',
      feature: { title: 'Support channel' },
      starter: 'Email',
      professional: 'Dedicated Slack',
      enterprise: '24/7 Phone + Slack',
    },
    {
      rows: '1',
      feature: { title: 'Uptime SLA' },
      starter: '99.5%',
      professional: '99.9%',
      enterprise: '99.99%',
    },
    // ============= Integrations =============
    {
      rows: '1',
      feature: 'Integrations & API',
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
      feature: { title: 'CLI tools & GitOps' },
      starter: true,
      professional: true,
      enterprise: true,
    },
    {
      rows: '1',
      feature: { title: 'SIEM/SOAR integrations' },
      starter: false,
      professional: true,
      enterprise: true,
    },
  ],
};
