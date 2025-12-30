import CTA from 'components/shared/cta';
import Container from 'components/shared/container';
import Layout from 'components/shared/layout';
import BentoCard from 'components/shared/bento-card';

// Icons
import ChartsIcon from 'icons/security/charts.svg';
import CircuitIcon from 'icons/security/circuit.svg';
import BugIcon from 'icons/security/bug.svg';
import CloudIcon from 'icons/security/cloud.svg';
import UserLockIcon from 'icons/security/user-lock.svg';
import ServerIcon from 'icons/security/server.svg';

export const metadata = {
    title: 'Neural WAF - AI-Powered Web Application Firewall | Singularity',
    description: 'ML models trained on 1B+ attacks. Sub-5ms decisions. Zero-day protection before CVEs drop.',
};

const FEATURES = [
    {
        title: '1B+ Attack Training',
        description: 'ML models trained on over one billion real-world attacks. Constantly learning, constantly improving.',
        icon: ChartsIcon,
        className: 'col-span-2 md:col-span-1',
    },
    {
        title: 'Sub-5ms Decisions',
        description: 'Protection at the speed of thought. Block threats before they reach your application.',
        icon: CircuitIcon,
    },
    {
        title: 'Zero-Day Protection',
        description: 'Detect and block novel attacks before CVEs are even published.',
        icon: BugIcon,
    },
    {
        title: 'API Security',
        description: 'Native REST and GraphQL protection. Secure every endpoint automatically.',
        icon: CloudIcon,
    },
    {
        title: 'Bot Management',
        description: 'Distinguish real users from malicious bots. Stop credential stuffing and scraping.',
        icon: UserLockIcon,
    },
    {
        title: 'DDoS Mitigation',
        description: 'Absorb volumetric attacks at the edge. Keep your services online.',
        icon: ServerIcon,
    },
];

const WAFPage = () => (
    <Layout>
        <section className="hero safe-paddings relative pt-40 xl:pt-[150px] lg:pt-12 md:pt-10">
            <Container className="relative z-10 flex flex-col items-center text-center" size="960">
                <h1 className="mx-auto font-title text-6xl font-medium leading-[0.9] tracking-extra-tight xl:text-[56px] lg:text-5xl md:text-4xl">
                    Neural WAF. AI-Powered Protection.
                </h1>
                <p className="mx-auto mt-4 max-w-[714px] text-lg leading-snug tracking-extra-tight text-gray-new-80 xl:max-w-[772px] lg:mt-3.5 lg:max-w-[580px] lg:text-base sm:mt-3">
                    ML models trained on 1B+ attacks. Sub-5ms decisions. Zero-day protection before CVEs drop. The firewall that learns.
                </p>
            </Container>
        </section>
        <section className="features safe-paddings relative overflow-hidden pt-[100px] xl:pt-[80px] lg:pt-[60px]">
            <Container className="relative z-10" size="1100">
                <h2 className="text-center font-title text-[44px] font-medium leading-[0.9] tracking-extra-tight xl:text-4xl lg:text-[36px] md:text-[28px]">
                    Enterprise-Grade Protection
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
            title="Deploy Neural WAF.<br />Stop Every Attack."
            titleClassName="max-w-[745px] lg:max-w-[600px] md:max-w-[400px] md:leading-none"
            buttonText="Get Protected"
            buttonUrl="/contact-sales"
        />
    </Layout>
);

export default WAFPage;
