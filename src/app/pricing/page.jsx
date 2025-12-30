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

export const metadata = getMetadata({
  title: 'Pricing — Singularity Security Platform',
  description: 'Transparent pricing for autonomous security. AutoSecOps, vCISO, compliance automation, and threat intelligence. Scale from startup to enterprise.',
  keywords: 'security pricing, AutoSecOps cost, vCISO pricing, SOC 2 compliance cost, enterprise security pricing, MDM pricing',
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
    question: 'What is included in each plan?',
    id: 'whats-included',
    initialState: 'open',
    answer: `
      <p><strong>Starter ($35/user/mo):</strong> AutoSecOps Core, Basic MDM (up to 100 endpoints), SOC 2 toolkit, device inventory, remote lock/wipe, quarterly security reports.</p>
      <p><strong>Professional ($65/user/mo):</strong> Everything in Starter + Advanced AutoSecOps (up to 1,000 endpoints), full compliance suite (SOC 2, HIPAA, GDPR, ISO 27001), vCISO AI assistant, annual pen test, IAM with SSO/SCIM, dark web monitoring, dedicated Slack support.</p>
      <p><strong>Enterprise (Custom):</strong> Everything in Professional + unlimited endpoints, predictive maintenance AI, AppSec integration, continuous pen testing, 50+ CTI feeds, dedicated security engineer, 24/7 phone support, 99.99% SLA.</p>
    `,
  },
  {
    question: 'How does Singularity compare to competitors?',
    id: 'competitor-comparison',
    answer: `
      <p>A typical security stack costs significantly more when you add up individual tools:</p>
      <ul>
        <li><strong>Jamf (MDM):</strong> $10-15/user/month</li>
        <li><strong>Okta (IAM):</strong> $15-20/user/month</li>
        <li><strong>CrowdStrike (EDR):</strong> $25-50/user/month</li>
        <li><strong>Vanta (Compliance):</strong> $10,000+/year</li>
        <li><strong>Annual Pen Test:</strong> $4,000-15,000/year</li>
      </ul>
      <p>That's <strong>$60-100+/user/month</strong> for a fragmented stack. Singularity provides all of this in one platform starting at <strong>$35/user/month</strong>.</p>
    `,
  },
  {
    question: 'What is the minimum commitment?',
    id: 'minimum-commitment',
    answer: `
      <p><strong>Starter:</strong> Minimum 5 users ($175/month, $2,100/year billed annually)</p>
      <p><strong>Professional:</strong> Minimum 10 users ($650/month, $7,800/year billed annually)</p>
      <p><strong>Enterprise:</strong> Custom minimums based on your organization's needs</p>
    `,
  },
  {
    question: 'How fast can we get SOC 2 certified?',
    id: 'soc2-timeline',
    answer: `
      <p>Most organizations achieve SOC 2 Type I certification within <strong>14 days</strong> using Singularity's automated evidence collection and pre-built policies. SOC 2 Type II takes approximately 3-4 months including the observation period.</p>
    `,
  },
  {
    question: 'What is included in the penetration test?',
    id: 'pentest-details',
    answer: `
      <p><strong>Professional plan:</strong> Annual expert-led penetration test covering web applications, APIs, and infrastructure. Includes remediation guidance and one free retest.</p>
      <p><strong>Enterprise plan:</strong> Continuous penetration testing with monthly assessments, red team exercises, and dedicated security researchers.</p>
    `,
  },
  {
    question: 'Do you offer discounts for startups?',
    id: 'startup-discounts',
    answer: `
      <p>Yes! Early-stage startups (Seed to Series B) may qualify for up to <strong>50% off</strong> for the first year. <a href="/contact-sales">Contact our team</a> to learn more about our startup program.</p>
    `,
  },
  {
    question: 'What support is included?',
    id: 'support-details',
    answer: `
      <p><strong>Starter:</strong> Email support, community forums, quarterly security reports</p>
      <p><strong>Professional:</strong> Dedicated Slack channel, weekly threat briefings, priority email support</p>
      <p><strong>Enterprise:</strong> 24/7 phone support, dedicated security engineer, on-site training available</p>
    `,
  },
  {
    question: 'Can I try before I buy?',
    id: 'free-trial',
    answer: `
      <p>Yes! We offer a <strong>14-day free trial</strong> of the Professional plan. No credit card required. <a href="/contact-sales">Schedule a demo</a> to get started.</p>
    `,
  },
];

const PricingPage = () => (
  <Layout>
    <Hero />
    <Logos className="lg:mt-30 mt-[136px] xl:mt-[128px] lg:pt-0 md:mt-20" logos={logos} />
    <Plans className="mt-[184px] scroll-mt-5 px-safe xl:mt-[176px] lg:mt-[168px] md:mt-32" />
    <Features />
    <Faq items={faqItems} className="mt-[200px] xl:mt-[192px] lg:mt-[184px] md:mt-[104px]" />
    <CTA
      className="pb-[350px] pt-[445px] xl:pb-[200px] xl:pt-[260px] lg:pb-[150px] lg:pt-[220px] sm:pb-[100px] sm:pt-[160px]"
      title="Ready to Secure Your Organization?"
      description="Schedule a demo to see Singularity in action."
      buttonText="Schedule Demo"
      buttonUrl={LINKS.contactSales}
    />
  </Layout>
);

export default PricingPage;
