import Container from 'components/shared/container';
import BentoCard from 'components/shared/bento-card';

// Icons
import ServerIcon from 'icons/security/server.svg';
import CloudIcon from 'icons/security/cloud.svg';
import RadarIcon from 'icons/security/radar.svg';
import ChartsIcon from 'icons/security/charts.svg';
import CircuitIcon from 'icons/security/circuit.svg';
import BugIcon from 'icons/security/bug.svg';
import CheckPrivacyIcon from 'icons/security/check-privacy.svg';
import GearIcon from 'icons/security/gear.svg';
import TodoIcon from 'icons/security/todo.svg';

const FEATURES = [
    {
        category: 'Device Management',
        items: [
            {
                title: 'Unified Device Command',
                description: 'IoT sensors to enterprise servers. 10M+ endpoints. One pane of glass for complete lifecycle management.',
                icon: ServerIcon,
                className: 'col-span-2 md:col-span-1',
            },
            {
                title: 'Zero-Touch Deployment',
                description: 'Deploy in minutes. Secure forever. Automated provisioning across any infrastructure.',
                icon: CloudIcon,
            },
            {
                title: 'Real-Time Visibility',
                description: 'Every device. Every state. Every second. Complete situational awareness across your fleet.',
                icon: RadarIcon,
            },
        ],
    },
    {
        category: 'Predictive Maintenance',
        items: [
            {
                title: 'Failure Prediction',
                description: 'ML predicts hardware failures 14 days before they happen. Zero unplanned downtime.',
                icon: ChartsIcon,
                className: 'col-span-2 md:col-span-1',
            },
            {
                title: '$4M+ Annual Savings',
                description: 'Proactive maintenance reduces costs by 40%. Replace reactive firefighting with strategic planning.',
                icon: TodoIcon,
            },
            {
                title: 'Self-Healing Infrastructure',
                description: 'Automatic remediation. Automatic rollback. Systems that fix themselves.',
                icon: CircuitIcon,
            },
        ],
    },
    {
        category: 'Autonomous Security',
        items: [
            {
                title: '100ms Threat Neutralization',
                description: 'Detect, isolate, and remediate threats faster than human perception. No SOC team required.',
                icon: BugIcon,
                className: 'col-span-2 md:col-span-1',
            },
            {
                title: '99.997% Prevention Rate',
                description: 'Zero false positives in production. Zero breaches. Zero exceptions.',
                icon: CheckPrivacyIcon,
            },
            {
                title: 'AI-Powered Response',
                description: 'ML models trained on 1B+ attacks. Decisions in sub-5ms. Always learning, always improving.',
                icon: GearIcon,
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
