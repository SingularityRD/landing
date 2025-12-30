import CTA from 'components/shared/cta';
import Container from 'components/shared/container';
import Layout from 'components/shared/layout';
import BentoCard from 'components/shared/bento-card';

// Icons
import CloudIcon from 'icons/security/cloud.svg';
import PrivacyIcon from 'icons/security/privacy.svg';
import BugIcon from 'icons/security/bug.svg';
import CrosshairIcon from 'icons/security/crosshair.svg';
import RadarIcon from 'icons/security/radar.svg';
import PolicyIcon from 'icons/security/policy.svg';

export const metadata = {
    title: 'Threat Intelligence - Global CTI Feeds | Singularity',
    description: '50+ global CTI feeds. Dark web hunting. Zero-day detection. See attacks before they happen.',
};

const FEATURES = [
    {
        title: '50+ Global CTI Feeds',
        description: 'Aggregated intelligence from worldwide sources. Contextualized for your business.',
        icon: CloudIcon,
        className: 'col-span-2 md:col-span-1',
    },
    {
        title: 'Dark Web Monitoring',
        description: 'Your credentials. Your data. Your brand. We hunt threats where they hide.',
        icon: PrivacyIcon,
    },
    {
        title: 'Zero-Day Detection',
        description: 'Identify emerging threats before CVEs are published. Stay ahead of attackers.',
        icon: BugIcon,
    },
    {
        title: 'Threat Hunting',
        description: 'Proactive search for hidden threats. Expert analysis. Actionable insights.',
        icon: CrosshairIcon,
    },
    {
        title: 'IOC Management',
        description: 'Indicators of compromise tracked and correlated. Automatic blocking and alerting.',
        icon: RadarIcon,
    },
    {
        title: 'Threat Reports',
        description: 'Weekly briefings. Industry-specific analysis. Board-ready summaries.',
        icon: PolicyIcon,
    },
];

const ThreatIntelligencePage = () => (
    <Layout>
        <section className="hero safe-paddings relative pt-40 xl:pt-[150px] lg:pt-12 md:pt-10">
            <Container className="relative z-10 flex flex-col items-center text-center" size="960">
                <h1 className="mx-auto font-title text-6xl font-medium leading-[0.9] tracking-extra-tight xl:text-[56px] lg:text-5xl md:text-4xl">
                    See Threats Before They Strike.
                </h1>
                <p className="mx-auto mt-4 max-w-[714px] text-lg leading-snug tracking-extra-tight text-gray-new-80 xl:max-w-[772px] lg:mt-3.5 lg:max-w-[580px] lg:text-base sm:mt-3">
                    50+ global CTI feeds. Dark web hunting. Proprietary research. We see attacks before they happen—and we stop them before they start.
                </p>
            </Container>
        </section>
        <section className="features safe-paddings relative overflow-hidden pt-[100px] xl:pt-[80px] lg:pt-[60px]">
            <Container className="relative z-10" size="1100">
                <h2 className="text-center font-title text-[44px] font-medium leading-[0.9] tracking-extra-tight xl:text-4xl lg:text-[36px] md:text-[28px]">
                    Intelligence That Matters
                </h2>
                <div className="mt-12 grid grid-cols-3 gap-6 lg:grid-cols-2 md:grid-cols-1">
                    {FEATURES.map((item, index) => (
                        <BentoCard
                            key={index}
                            {...item}
                        />
                    ))}
                </div>
            </Container>
        </section>
        <CTA
            className="pb-[290px] pt-[348px] xl:pb-[242px] xl:pt-[278px] lg:pb-[200px] lg:pt-[260px] sm:pb-[100px] sm:pt-40"
            title="Know Your Threats.<br />Stay One Step Ahead."
            titleClassName="max-w-[745px] lg:max-w-[600px] md:max-w-[400px] md:leading-none"
            buttonText="Get Intelligence"
            buttonUrl="/contact-sales"
        />
    </Layout>
);

export default ThreatIntelligencePage;
