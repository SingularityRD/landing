import Features from 'components/pages/pricing/features';
import Hero from 'components/pages/pricing/hero';
import Plans from 'components/pages/pricing/plans';
import CTA from 'components/shared/cta';
import Faq from 'components/shared/faq/faq';
import Layout from 'components/shared/layout';
import Logos from 'components/shared/logos';
import LINKS from 'constants/links';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';
import Container from 'components/shared/container';
import Button from 'components/shared/button';

export const metadata = getMetadata({
  title: 'Pricing — Singularity Security Platform',
  description: 'Flexible pricing for hyper-growth companies and global enterprises. AutoSecOps, vCISO, and compliance at scale.',
  keywords: 'security pricing, enterprise security cost, startup security discount, AutoSecOps pricing',
  pathname: '/pricing',
});

const logos = [
  'vercel',
  'retool',
  'cloudflare',
  'replit',
  'bcg',
  'adobe',
];

const faqItems = [
  {
    question: 'Why do you charge per device instead of per user?',
    id: 'per-device-pricing',
    initialState: 'open',
    answer: `
      <p>Security runs on endpoints. Every device—laptop, phone, server—is an attack surface that requires protection. By charging per device, we include unlimited users and identity management at no additional cost. This eliminates the need for separate Okta or Azure AD Premium licenses.</p>
    `,
  },
  {
    question: 'How does Singularity compare to Tanium?',
    id: 'tanium-comparison',
    answer: `
      <p>Tanium requires a <strong>2,000 endpoint minimum</strong> and charges separately for each module: Core Platform ($24/device), Patch ($7.25/device), Deploy ($7.25/device), Threat Response ($13.50/device), and more. A comparable Tanium stack costs <strong>$50+/device/month</strong>. Singularity provides the complete stack—MDM, EDR, compliance, identity, and pen testing—for <strong>$12/device</strong> with no minimum purchase requirement.</p>
    `,
  },
  {
    question: 'What is the minimum purchase requirement?',
    id: 'minimum-purchase',
    answer: `
      <p><strong>None.</strong> Unlike Tanium (2,000 endpoints), CrowdStrike (250 endpoints), and other enterprise vendors, we have no minimum. Start with 10 devices or 10,000—same straightforward per-device pricing. Volume discounts begin at 100+ devices.</p>
    `,
  },
  {
    question: 'What does "All-in-One" include?',
    id: 'all-in-one',
    answer: `
      <p>One price, complete coverage: Cross-platform MDM, endpoint detection & response (EDR), patch management, application deployment, file integrity monitoring, vulnerability scanning, compliance automation (SOC 2, HIPAA, GDPR, ISO 27001), identity management (SSO/SCIM), dark web monitoring, and annual penetration testing. No modules. No add-ons. No surprises.</p>
    `,
  },
  {
    question: 'Do you offer startup pricing?',
    id: 'startup-details',
    answer: `
      <p>Yes. Early-stage startups (Pre-Seed to Series A, fewer than 100 employees) qualify for <strong>50% off for 12 months</strong>. This includes full access to compliance automation to help close enterprise deals faster. Contact sales to apply.</p>
    `,
  },
];

const PricingPage = () => (
  <Layout>
    <Hero />
    <Logos className="lg:mt-30 mt-[136px] xl:mt-[128px] lg:pt-0 md:mt-20" logos={logos} />

    <Plans className="mt-[184px] scroll-mt-5 px-safe xl:mt-[176px] lg:mt-[168px] md:mt-32" />

    {/* Startup Program Section */}
    <section className="mt-[150px] bg-gray-new-8 py-20 border-y border-gray-new-15">
      <Container size="1100">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-title text-[48px] font-medium leading-none text-white sm:text-[32px]">
            Startup Program
          </h2>
          <p className="mt-6 max-w-2xl text-xl text-gray-new-80 sm:text-lg">
            Early-stage startups get <strong>50% off for 12 months.</strong>
            <br />
            <span className="text-base text-gray-new-50">Eligibility: Pre-Seed to Series A, &lt;100 employees</span>
          </p>
          <Button
            className="mt-10 !px-10"
            theme="primary"
            size="md-new"
            to={LINKS.contactSales}
          >
            Apply Now →
          </Button>
        </div>
      </Container>
    </section>

    {/* Custom Quote Section */}
    <section className="mt-[100px]">
      <Container size="1100">
        <div className="rounded-2xl border border-dashed border-gray-new-30 p-12 text-center bg-gray-new-8/50">
          <h3 className="font-title text-[32px] font-medium text-white">Need a Custom Quote?</h3>
          <p className="mt-4 text-lg text-gray-new-70">
            Large deployment? We'll build a pricing model that works.
          </p>
          <p className="mt-6 font-mono text-green-45 text-xl">
            info@singularityrd.com
          </p>
          <Button
            className="mt-8 transition-transform hover:scale-105"
            theme="white"
            to="mailto:info@singularityrd.com"
          >
            Contact Sales
          </Button>
        </div>
      </Container>
    </section>

    <Features />

    <Faq items={faqItems} className="mt-[200px] xl:mt-[192px] lg:mt-[184px] md:mt-[104px]" />

    <CTA
      className="pb-[350px] pt-[200px] xl:pb-[200px] xl:pt-[160px] lg:pb-[150px] lg:pt-[120px] sm:pb-[100px] sm:pt-[100px]"
      title="Ready to Scale Sustainably?"
      description="Join the world's most secure hyper-growth companies."
      buttonText="Get Started"
      buttonUrl={LINKS.contactSales}
    />
  </Layout>
);

export default PricingPage;
