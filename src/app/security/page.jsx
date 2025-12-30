import CTA from 'components/shared/cta';
import Layout from 'components/shared/layout';
import Container from 'components/shared/container';
import BentoCard from 'components/shared/bento-card';
import getMetadata from 'utils/get-metadata';

// Icons
import LockIcon from 'icons/security/lock.svg';
import CheckIcon from 'icons/security/check.svg';
import PrivacyIcon from 'icons/security/privacy.svg';
import DataIcon from 'icons/security/data.svg';
import ServerIcon from 'icons/security/server.svg';
import KeyIcon from 'icons/security/key.svg';

export const metadata = getMetadata({
  title: 'Security & Trust — Singularity',
  description: 'Discover Singularity security standards including SOC 2 Type II, ISO 27001, GDPR, and HIPAA compliance. Zero-trust architecture, encryption at rest and in transit, built by elite security researchers.',
  keywords: 'SOC 2 Type II, ISO 27001, GDPR compliance, HIPAA security, zero trust, encryption, security certifications, enterprise security',
  pathname: '/security',
});

const CERTIFICATIONS = [
  { name: 'SOC 2 Type II', description: 'Independently audited security controls' },
  { name: 'ISO 27001', description: 'International security management standard' },
  { name: 'GDPR', description: 'EU data protection compliance' },
  { name: 'HIPAA', description: 'Healthcare data security ready' },
];

const SECURITY_FEATURES = [
  {
    icon: LockIcon,
    title: 'Zero-Trust Architecture',
    description: 'Every request authenticated, every action authorized. No implicit trust, complete verification at every layer.',
    className: 'col-span-2 md:col-span-1',
  },
  {
    icon: DataIcon,
    title: 'Encryption Everywhere',
    description: 'AES-256 encryption at rest, TLS 1.3 in transit. Your data is protected whether moving or stored.',
  },
  {
    icon: KeyIcon,
    title: 'Key Management',
    description: 'Enterprise-grade key management with automated rotation and secure storage in HSMs.',
  },
  {
    icon: ServerIcon,
    title: 'Secure Infrastructure',
    description: 'Deployed on SOC 2 certified cloud infrastructure with multi-region redundancy and 99.99% uptime SLA.',
  },
  {
    icon: PrivacyIcon,
    title: 'Privacy by Design',
    description: 'Data minimization, purpose limitation, and user consent built into every feature from the ground up.',
  },
  {
    icon: CheckIcon,
    title: 'Continuous Monitoring',
    description: '24/7 security monitoring, automated threat detection, and incident response within 15 minutes.',
  },
];

const SecurityPage = () => (
  <Layout>
    {/* Hero */}
    <section className="hero safe-paddings relative pt-40 xl:pt-[150px] lg:pt-12 md:pt-10">
      <Container className="relative z-10 flex flex-col items-center text-center" size="960">
        <h1 className="mx-auto font-title text-6xl font-medium leading-[0.9] tracking-extra-tight xl:text-[56px] lg:text-5xl md:text-4xl">
          Security & Trust
        </h1>
        <p className="mx-auto mt-4 max-w-[714px] text-lg leading-snug tracking-extra-tight text-gray-new-80 xl:max-w-[772px] lg:mt-3.5 lg:max-w-[580px] lg:text-base sm:mt-3">
          Built by elite security researchers. Protected by industry-leading controls. Trusted by enterprises worldwide.
        </p>
      </Container>
    </section>

    {/* Certifications */}
    <section className="certifications safe-paddings mt-20 lg:mt-16">
      <Container className="relative z-10" size="1100">
        <h2 className="text-center font-title text-[44px] font-medium leading-[0.9] tracking-extra-tight xl:text-4xl lg:text-[36px] md:text-[28px]">
          Compliance & Certifications
        </h2>
        <div className="mt-12 grid grid-cols-4 gap-6 lg:grid-cols-2 md:grid-cols-1">
          {CERTIFICATIONS.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-xl border border-gray-new-15 bg-gray-new-8 p-8 text-center transition-all duration-300 hover:border-green-45/50"
            >
              <span className="font-title text-2xl font-medium text-white">{cert.name}</span>
              <span className="mt-2 text-sm text-gray-new-60">{cert.description}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>

    {/* Security Features */}
    <section className="features safe-paddings mt-32 lg:mt-24">
      <Container className="relative z-10" size="1100">
        <h2 className="text-center font-title text-[44px] font-medium leading-[0.9] tracking-extra-tight xl:text-4xl lg:text-[36px] md:text-[28px]">
          How We Protect Your Data
        </h2>
        <div className="mt-12 grid grid-cols-3 gap-6 lg:grid-cols-2 md:grid-cols-1">
          {SECURITY_FEATURES.map((feature, index) => (
            <BentoCard key={index} {...feature} />
          ))}
        </div>
      </Container>
    </section>

    {/* CTA */}
    <CTA
      className="pb-[290px] pt-[348px] xl:pb-[242px] xl:pt-[278px] lg:pb-[200px] lg:pt-[260px] sm:pb-[100px] sm:pt-40"
      title="Questions About Security?<br />Let's Talk."
      titleClassName="max-w-[745px] lg:max-w-[600px] md:max-w-[400px] md:leading-none"
      buttonText="Contact Security Team"
      buttonUrl="/contact-sales"
    />
  </Layout>
);

export default SecurityPage;
