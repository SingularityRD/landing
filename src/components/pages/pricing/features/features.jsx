import Image from 'next/image';

import Container from 'components/shared/container';
import Link from 'components/shared/link';
import LINKS from 'constants/links';
import authIcon from 'icons/pricing/features/auth.svg';
import cableIcon from 'icons/pricing/features/cable.svg';
import checkIcon from 'icons/pricing/features/check.svg';
import complianceIcon from 'icons/pricing/features/compliance.svg';
import copyIcon from 'icons/pricing/features/copy.svg';
import gridIcon from 'icons/pricing/features/grid.svg';
import scaleIcon from 'icons/pricing/features/scale.svg';
import searchIcon from 'icons/pricing/features/search.svg';

const DATA = [
  {
    icon: checkIcon,
    title: 'Autonomous Threat Response',
    description: 'AI neutralizes threats in <100ms. No human intervention required.',
    link: '/autosecops',
  },
  {
    icon: scaleIcon,
    title: 'Predictive Maintenance',
    description: 'Predict device failures 14 days in advance. Reduce downtime by 90%.',
    link: '/autosecops',
  },
  {
    icon: copyIcon,
    title: 'Cross-Platform MDM',
    description: 'Windows, macOS, Linux, iOS, Android — one agent, all platforms.',
    link: '/autosecops',
  },
  {
    icon: searchIcon,
    title: 'Real-Time Monitoring',
    description: 'Device health, threats, and compliance status in one dashboard.',
    link: '/autosecops',
  },
  {
    icon: cableIcon,
    title: 'Zero-Touch Deployment',
    description: 'Devices auto-enroll and configure. No IT tickets, no delays.',
    link: '/autosecops',
  },
  {
    icon: gridIcon,
    title: 'API & Integrations',
    description: 'REST API, webhooks, SIEM/SOAR integrations out of the box.',
    link: '/autosecops',
  },
  {
    icon: authIcon,
    title: 'vCISO AI Assistant',
    description: '24/7 security guidance. Board-ready reports on demand.',
    link: '/vciso',
  },
  {
    icon: complianceIcon,
    title: 'SOC 2, HIPAA, GDPR, ISO',
    description: 'All compliance frameworks included. SOC 2 Type I in 14 days.',
    link: '/security',
  },
];

const Features = () => (
  <section className="features mt-[200px] scroll-mt-5 px-safe xl:mt-[192px] lg:mt-[184px] md:mt-[102px]">
    <Container size="1152" className="xl:px-16 md:px-5">
      <h2 className="text-center font-title text-[52px] font-medium leading-none tracking-extra-tight xl:text-5xl lg:text-4xl md:text-[32px]">
        Included in Every Plan
      </h2>
      <ul className="mx-auto mt-14 grid grid-cols-4 justify-center gap-x-10 gap-y-11 xl:grid-cols-3 lg:mt-12 lg:max-w-[640px] lg:grid-cols-2 lg:gap-10 md:gap-[34px] sm:mt-10 xs:grid-cols-1">
        {DATA.map(({ icon, title, description, link }) => (
          <li className="sm:max-w-[260px]" key={title}>
            <Image className="size-6" src={icon} width={24} height={24} alt="" loading="lazy" />
            <h3 className="mt-2.5 text-xl font-medium leading-snug tracking-extra-tight md:text-lg sm:mt-2">
              {title}
            </h3>
            <p className="mt-2 leading-snug tracking-extra-tight text-gray-new-70 md:mt-1.5">
              {description}
            </p>
            <Link
              href={link}
              className="mt-4 text-[15px] leading-none tracking-[-0.03em]"
              theme="white"
              withArrow
            >
              Learn more
              <span className="sr-only">about {title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

export default Features;
