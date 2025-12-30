import CTA from 'components/shared/cta';
import Container from 'components/shared/container';
import Layout from 'components/shared/layout';
import BentoCard from 'components/shared/bento-card';

// Icons
import CheckIcon from 'icons/security/check.svg';
import PolicyIcon from 'icons/security/policy.svg';
import PrivacyIcon from 'icons/security/privacy.svg';
import RadarIcon from 'icons/security/radar.svg';
import TableIcon from 'icons/security/table.svg';
import UserPrivacyIcon from 'icons/security/user-privacy.svg';

export const metadata = {
    title: 'Compliance - SOC 2 in 14 Days | Singularity',
    description: 'Automated compliance. SOC 2 in 14 days, not 14 months. ISO 27001, HIPAA, GDPR ready.',
};

const FEATURES = [
    {
        title: 'SOC 2 in 14 Days',
        description: 'Not 14 months. Automated evidence collection. Continuous monitoring. Audit-ready always.',
        icon: CheckIcon,
        className: 'col-span-2 md:col-span-1', // Span 2 cols for emphasis
    },
    {
        title: 'ISO 27001',
        description: 'Information security management system. Certified and maintained automatically.',
        icon: PolicyIcon,
    },
    {
        title: 'HIPAA Compliance',
        description: 'Healthcare data protection. PHI safeguards. BAA ready.',
        icon: UserPrivacyIcon,
    },
    {
        title: 'GDPR Ready',
        description: 'European data protection. Privacy by design. Right to be forgotten built in.',
        icon: PrivacyIcon,
    },
    {
        title: 'Continuous Monitoring',
        description: 'Real-time compliance status. Drift detection. Automatic remediation.',
        icon: RadarIcon,
    },
    {
        title: 'Audit Management',
        description: 'Centralized evidence. Auditor portal. One-click report generation.',
        icon: TableIcon,
    },
];

const CompliancePage = () => (
    <Layout>
        <section className="hero safe-paddings relative pt-40 xl:pt-[150px] lg:pt-12 md:pt-10">
            <Container className="relative z-10 flex flex-col items-center text-center" size="960">
                <h1 className="mx-auto font-title text-6xl font-medium leading-[0.9] tracking-extra-tight xl:text-[56px] lg:text-5xl md:text-4xl">
                    Compliance. Automated.
                </h1>
                <p className="mx-auto mt-4 max-w-[714px] text-lg leading-snug tracking-extra-tight text-gray-new-80 xl:max-w-[772px] lg:mt-3.5 lg:max-w-[580px] lg:text-base sm:mt-3">
                    SOC 2 in 14 days. Not 14 months. ISO 27001, HIPAA, GDPR. Continuous monitoring. Always audit-ready.
                </p>
            </Container>
        </section>

        <section className="features safe-paddings relative overflow-hidden pt-[100px] xl:pt-[80px] lg:pt-[60px]">
            <Container className="relative z-10" size="1100">
                <h2 className="text-center font-title text-[44px] font-medium leading-[0.9] tracking-extra-tight xl:text-4xl lg:text-[36px] md:text-[28px]">
                    Every Framework. One Platform.
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
            title="Get Compliant.<br />Stay Compliant."
            titleClassName="max-w-[745px] lg:max-w-[600px] md:max-w-[400px] md:leading-none"
            buttonText="Start Compliance"
            buttonUrl="/contact-sales"
        />
    </Layout>
);

export default CompliancePage;
