import CTA from 'components/shared/cta';
import Layout from 'components/shared/layout';
import SplitViewGrid from 'components/shared/split-view-grid';
import Container from 'components/shared/container';
import Hero from 'components/pages/partners/hero';
import Apply from 'components/pages/partners/apply';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

// Icons
import shieldIcon from 'icons/security/check-privacy.svg';
import chartIcon from 'icons/security/charts.svg';
import gearIcon from 'icons/security/gear.svg';
import cloudIcon from 'icons/security/cloud.svg';

export const metadata = getMetadata({
  title: 'Partner Program — Singularity Security',
  description: 'Join the Singularity partner ecosystem. Integrate autonomous security into your platform. MSP, MSSP, and technology partner programs available.',
  keywords: 'security partner program, MSP security, MSSP partnership, technology integration, security reseller, AutoSecOps partner, vCISO reseller',
  pathname: '/partners',
});

const items = [
  {
    icon: shieldIcon,
    title: 'Elevate Your Security Offering',
    description: 'Offer AutoSecOps, vCISO, and compliance automation to your customers. Enterprise-grade protection under your brand.',
  },
  {
    icon: chartIcon,
    title: 'New Revenue Streams',
    description: 'Competitive margins on all Singularity products. Recurring revenue from security subscriptions.',
  },
  {
    icon: gearIcon,
    title: 'White-Label Ready',
    description: 'Full white-label capabilities. Deploy Singularity under your own brand with complete API access.',
  },
  {
    icon: cloudIcon,
    title: 'Technical Support',
    description: 'Dedicated partner success team. Technical training, sales enablement, and 24/7 support.',
  },
];

const PARTNER_TYPES = [
  {
    title: 'MSP / MSSP Partners',
    description: 'Managed service providers looking to add autonomous security to their portfolio. Full white-label support.',
  },
  {
    title: 'Technology Partners',
    description: 'Integrate Singularity APIs into your platform. Offer security as a feature to your users.',
  },
  {
    title: 'System Integrators',
    description: 'Large-scale enterprise deployments. Custom integrations and dedicated support.',
  },
  {
    title: 'Resellers',
    description: 'Sell Singularity products to your customers. Competitive margins and deal registration.',
  },
];

const PartnersPage = () => (
  <Layout headerClassName="!absolute !bg-transparent">
    <Hero />

    <SplitViewGrid
      className="mt-36 xl:mt-[104px] lg:mt-20 md:mt-16"
      titleClassName="!max-w-[380px] 2xl:text-5xl xl:!max-w-none"
      label="Benefits"
      title="Why Partner with Singularity?"
      description="Bring autonomous security to your customers. We provide the technology, you own the relationship."
      items={items}
      isGradientLabel
    />

    <section className="partner-types safe-paddings mt-36 xl:mt-28 lg:mt-20">
      <Container className="relative z-10" size="960">
        <h2 className="text-center font-title text-[44px] font-medium leading-[0.9] tracking-extra-tight xl:text-4xl lg:text-[36px] md:text-[28px]">
          Partner Programs
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-new-70 lg:text-base">
          Choose the partnership model that fits your business
        </p>
        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-1">
          {PARTNER_TYPES.map((type, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-new-15 bg-gray-new-8 p-8 transition-all duration-300 hover:border-gray-new-30"
            >
              <h3 className="font-title text-xl font-medium text-white">{type.title}</h3>
              <p className="mt-3 text-base text-gray-new-70">{type.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>

    <Apply />

    <CTA
      className="pb-[290px] pt-[348px] xl:pb-[242px] xl:pt-[278px] lg:pb-[200px] lg:pt-[260px] sm:pb-[100px] sm:pt-40"
      title="Ready to Partner?<br />Let's Secure the Future Together."
      titleClassName="max-w-[745px] lg:max-w-[600px] md:max-w-[400px] md:leading-none"
      buttonText="Apply Now"
      buttonUrl="#partners-apply"
    />
  </Layout>
);

export default PartnersPage;
