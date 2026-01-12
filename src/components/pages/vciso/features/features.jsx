import Container from 'components/shared/container';
import BentoCard from 'components/shared/bento-card';

// Icons
import BugIcon from 'icons/security/bug.svg';
import CrosshairIcon from 'icons/security/crosshair.svg';
import WarningIcon from 'icons/security/warning.svg';
import PrivacyIcon from 'icons/security/privacy.svg';
import CloudIcon from 'icons/security/cloud.svg';
import TableIcon from 'icons/security/table.svg';
import PolicyIcon from 'icons/security/policy.svg';
import ChartsIcon from 'icons/security/charts.svg';

const FEATURES = [
    {
        category: 'Autonomous Red Team',
        items: [
            {
                title: 'Continuous Penetration Testing',
                description: 'AI-driven attack simulations 24/7. Find vulnerabilities before adversaries do.',
                icon: CrosshairIcon,
                className: 'col-span-2 md:col-span-1',
            },
            {
                title: 'Attack Path Analysis',
                description: 'Map every possible intrusion route. Prioritize what matters most.',
                icon: ChartsIcon,
            },
            {
                title: 'Automated Exploitation',
                description: 'Safe, controlled exploit attempts. Real results without the risk.',
                icon: WarningIcon,
            },
        ],
    },
    {
        category: 'Threat Intelligence',
        items: [
            {
                title: 'Dark Web Monitoring',
                description: 'Your credentials. Your data. Your brand. We hunt threats where they hide.',
                icon: PrivacyIcon,
                className: 'col-span-2 md:col-span-1',
            },
            {
                title: 'Zero-Day Detection',
                description: 'Identify emerging threats before CVEs are published. Stay ahead of attackers.',
                icon: BugIcon,
            },
            {
                title: '50+ Global CTI Feeds',
                description: 'Aggregated intelligence from worldwide sources. Contextualized for your business.',
                icon: CloudIcon,
            },
        ],
    },
    {
        category: 'Board-Ready Compliance',
        items: [
            {
                title: 'Executive Dashboards',
                description: 'Security posture at a glance. Metrics that matter to leadership.',
                icon: TableIcon,
                className: 'col-span-2 md:col-span-1',
            },
            {
                title: 'Automated Reporting',
                description: 'SOC 2, ISO 27001, HIPAA. Compliance documentation generated automatically.',
                icon: PolicyIcon,
            },
            {
                title: 'Risk Quantification',
                description: 'Translate technical risks into business impact. Speak the language of the boardroom.',
                icon: ChartsIcon,
            },
        ],
    },
];

const Features = () => (
    <section className="features safe-paddings relative overflow-hidden pt-[168px] xl:pt-[136px] lg:pt-[120px] md:pt-[104px]">
        <Container className="relative z-10" size="1100">
            <div className="flex flex-col gap-[136px] xl:gap-[104px] lg:gap-16">
                {FEATURES.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                        <h2 className="text-center font-title text-[44px] font-medium leading-[0.9] tracking-extra-tight xl:text-4xl lg:text-[36px] md:text-[28px]">
                            {section.category}
                        </h2>
                        <div className="mt-12 grid grid-cols-3 gap-6 lg:grid-cols-2 md:grid-cols-1">
                            {section.items.map((item, itemIndex) => (
                                <BentoCard
                                    key={itemIndex}
                                    {...item}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    </section>
);

export default Features;
