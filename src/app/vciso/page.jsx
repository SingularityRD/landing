import Features from 'components/pages/vciso/features';
import Hero from 'components/pages/vciso/hero';
import CTA from 'components/shared/cta';
import Layout from 'components/shared/layout';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata({
    title: 'vCISO — Virtual Chief Information Security Officer | Singularity',
    description: 'AI-powered virtual CISO providing 24/7 autonomous red team operations, dark web monitoring, zero-day detection, and board-ready compliance reporting.',
    keywords: 'vCISO, virtual CISO, penetration testing, red team, dark web monitoring, security leadership, compliance reporting, threat intelligence, security automation',
    pathname: '/vciso',
});

const VCISOPage = () => (
    <Layout>
        <Hero />
        <Features />
        <CTA
            className="pb-[290px] pt-[348px] xl:pb-[242px] xl:pt-[278px] lg:pb-[200px] lg:pt-[260px] sm:pb-[100px] sm:pt-40"
            title="Deploy Your AI Security Team.<br />24/7 Protection."
            titleClassName="max-w-[745px] lg:max-w-[600px] md:max-w-[400px] md:leading-none"
            buttonText="Get Started"
            buttonUrl="/contact-sales"
        />
    </Layout>
);

export default VCISOPage;
