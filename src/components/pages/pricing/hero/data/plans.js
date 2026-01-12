import LINKS from 'constants/links';

const plans = [
    {
        type: 'Starter',
        title: 'The Watchman',
        subtitle: null,
        price: 8,
        priceFrom: false,
        description: 'Essential protection for small teams. All the core features you need to secure your devices.',
        features: [
            { title: 'Cross-Platform MDM', tag: 'Essential' },
            { title: 'Zero-Touch Deployment', tag: 'Important' },
            'BYOD Enrollment',
            'AutoSecOps Core',
            'Malware Detection',
            'File Integrity Monitoring',
            'SOC 2 Compliance',
            'REST API & Webhooks',
            'Email Support',
        ],
        button: {
            url: LINKS.contactSales,
            event: 'get_started_starter',
        },
    },
    {
        type: 'Growth',
        title: 'The Shield Bearer',
        subtitle: null,
        highlighted: true,
        price: 12,
        priceFrom: false,
        description: 'Complete security for growing organizations. Everything in Starter plus advanced features.',
        features: [
            'Everything in Starter',
            { title: 'Identity Management (SSO/SCIM)', tag: 'Important' },
            'Application Deployment',
            'OS Updates & Patch Management',
            'AutoSecOps Advanced',
            'Vulnerability Scanning',
            'Dark Web Monitoring',
            '10 Threat Intelligence Feeds',
        ],
        otherFeatures: {
            title: 'Compliance',
            features: [
                'SOC 2, HIPAA, GDPR, ISO',
                'Virtual CISO (Basic)',
                'Annual Penetration Testing',
                'Audit Logging & Reporting',
                'GitOps & CI/CD Integration',
                'Slack Support (8×5)',
            ],
        },
        button: {
            url: LINKS.contactSales,
            event: 'get_started_growth',
        },
    },
    {
        type: 'Scale',
        title: 'The Iron Fortress',
        subtitle: 'Custom pricing',
        price: null,
        priceFrom: true,
        description: 'Enterprise-grade security with dedicated support. For organizations with complex requirements.',
        features: [
            'Everything in Growth',
            'AutoSecOps + Custom Rules',
            'Predictive Maintenance AI',
            '50+ Threat Intelligence Feeds',
            { title: 'All Compliance Frameworks', tag: 'Enterprise' },
            { title: 'Full Virtual CISO', tag: 'Enterprise' },
            'Continuous Penetration Testing',
        ],
        otherFeatures: {
            title: 'Enterprise',
            features: [
                'Self-Hosted / Air-Gapped',
                'Dedicated Security Engineer',
                '24/7 Phone Support (99.99%)',
                'Volume Discounts (100+)',
                '2-Year Agreement: 25% off',
            ],
        },
        button: {
            url: LINKS.contactSales,
            event: 'contact_sales_enterprise',
        },
    },
];

export default plans;
