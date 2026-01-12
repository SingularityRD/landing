import Features from 'components/pages/autosecops/features';
import Hero from 'components/pages/autosecops/hero';
import CTA from 'components/shared/cta';
import Layout from 'components/shared/layout';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata({
    title: 'AutoSecOps — Autonomous Device Management & Security | Singularity',
    description: 'Manage 10M+ endpoints with AI-powered autonomous security. Predictive maintenance, zero-touch deployment, self-healing infrastructure. Threats neutralized in 100ms. $4M+ annual savings.',
    keywords: 'AutoSecOps, autonomous security, device management, endpoint security, predictive maintenance, zero-touch deployment, self-healing infrastructure, IoT security, EDR, MDM',
    pathname: '/autosecops',
});

const AutoSecOpsPage = () => (
    <Layout>
        <Hero />
        <Features />
        <CTA
            className="pb-[290px] pt-[348px] xl:pb-[242px] xl:pt-[278px] lg:pb-[200px] lg:pt-[260px] sm:pb-[100px] sm:pt-40"
            title="Deploy AutoSecOps.<br />Take Complete Control."
            titleClassName="max-w-[745px] lg:max-w-[600px] md:max-w-[400px] md:leading-none"
            buttonText="Schedule Demo"
            buttonUrl="mailto:info@singularityrd.com"
        />
    </Layout>
);

export default AutoSecOpsPage;
