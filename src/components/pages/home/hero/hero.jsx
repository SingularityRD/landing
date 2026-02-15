'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Link from 'components/shared/link';
import LINKS from 'constants/links';
import branchingIcon from 'icons/home/hero/branching.svg';
import scalingIcon from 'icons/home/hero/scaling.svg';
import bg from 'images/pages/home/hero/bg.jpg';

const ITEMS = [
  {
    icon: scalingIcon,
    image: '/images/autosecops.png',
    imageTitle: 'AutoSecOps',
    title: 'AutoSecOps',
    description:
      'Unified device management + predictive maintenance + autonomous security. ML predicts failures before they happen. Threats neutralized in 100ms. Zero manual intervention.',
    linkLabel: 'Explore Platform',
    linkUrl: LINKS.autoscaling,
  },
  {
    icon: branchingIcon,
    image: '/images/cti.png',
    imageTitle: 'Threat Intelligence',
    title: 'Threat Intelligence',
    description:
      '50+ global CTI feeds. Dark web hunting. Proprietary research. We see attacks before they happen—and we stop them before they start.',
    linkLabel: 'Explore Intelligence',
    linkUrl: LINKS.docsBranching,
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="hero safe-paddings relative pt-[168px] xl:pt-[152px] lg:pt-32 md:pt-[88px]">
      <Container className="relative z-10 xl:px-8" size="1100">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-title text-[72px] font-medium leading-none -tracking-[0.03em] text-white xl:text-[64px] lg:text-[56px] sm:text-[32px]">
            Every Device on Earth—and Beyond.
          </h1>
          <p className="mt-2.5 max-w-xl text-lg font-light leading-snug tracking-tighter text-gray-new-80 lg:mt-2.5 lg:text-base">
            Device management. Predictive maintenance. Autonomous security. One platform. Complete control. From IoT sensors to satellites.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <Button
              className="!px-8 font-semibold md:!px-7"
              theme="primary"
              size="md-new"
              to={LINKS.signup}
              target="_blank"
              tagName="Hero"
              analyticsEvent="home_hero_start_for_free_clicked"
            >
              Deploy AutoSecOps
            </Button>
            <Button
              className="text-[15px] font-medium"
              theme="white"
              to={LINKS.contactSales}
              tagName="Hero"
              analyticsEvent="home_hero_talk_to_us_clicked"
              withArrow
            >
              Request Security Assessment
            </Button>
          </div>
        </div>

        <div className="mt-[74px] flex gap-x-2.5 xl:mt-16 lg:mt-14 sm:mt-9 sm:flex-col sm:gap-y-9">
          {ITEMS.map((item, index) => (
            <div
              className={clsx(
                'transition-all duration-700 cursor-pointer',
                activeIndex === index
                  ? 'w-[64.7273%] flex-shrink-0 xl:w-[61.863%] lg:w-[62.746%] sm:w-full'
                  : 'w-full'
              )}
              onClick={() => setActiveIndex(index)}
              key={index}
            >
              <div
                className={clsx(
                  'group relative rounded-2xl bg-[linear-gradient(180deg,#111313_51.48%,#050505_100%)] p-1.5 shadow-[-2px_0px_2px_0px_rgba(0,0,0,0.25)_inset,2px_0px_2px_0px_rgba(0,0,0,0.25)_inset,0px_2px_2px_0px_rgba(0,0,0,0.30)_inset,0px_1.4px_0px_0px_rgba(255,255,255,0.03)]'
                )}
              >
                <div
                  className={clsx(
                    'relative h-[466px] overflow-hidden rounded-[10px] 2xl:h-[430px] xl:h-[403px] lg:h-[340px] md:h-[317px] sm:aspect-[1.51] sm:h-auto',
                    'after:pointer-events-none after:absolute after:-inset-px after:z-10 after:bg-[radial-gradient(50%_50%_at_50%_50%,rgba(12,13,13,.3)_0%,#0C0D0D_100%)] after:transition-opacity after:duration-300',
                    activeIndex !== index ? 'after:opacity-70' : 'after:opacity-0'
                  )}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                    src={item.image}
                    alt={item.imageTitle}
                  />
                  <div className="absolute left-10 top-11 lt:left-8 lt:top-10 md:left-4 md:top-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="ml-auto w-auto md:h-6 xs:h-4"
                      height={32}
                      width={32}
                      src={item.icon}
                      alt=""
                      loading="eager"
                    />
                    <h2 className="font-title text-[64px] font-medium leading-none tracking-tighter text-white lt:text-[48px] md:text-[42px] xs:text-[30px]">
                      {item.imageTitle}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="mt-5 px-1 md:min-h-[209px] sm:min-h-0">
                <h3 className="text-xl leading-dense tracking-tighter text-white lg:text-lg sm:text-[20px]">
                  {item.title}
                </h3>
                <div className="mt-3.5 h-px w-full overflow-hidden bg-gray-new-15 sm:hidden" aria-hidden>
                  <div
                    className={clsx(
                      'h-full w-full origin-left bg-[linear-gradient(90deg,rgba(228,229,231,0.10)_0%,#E4E5E7_100%)] transition-[transform,opacity] duration-[400ms] ease-linear',
                      activeIndex === index ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                    )}
                  />
                </div>
                <p
                  className={clsx(
                    'mt-3.5 max-w-[366px] font-light tracking-extra-tight transition-colors duration-200 xl:max-w-[350px] lg:max-w-[245px] lg:text-[15px] md:mt-2.5 sm:max-w-none',
                    activeIndex === index ? 'text-gray-new-80' : 'text-gray-new-40'
                  )}
                >
                  {item.description}
                </p>
                <Link
                  className="mt-2.5 flex w-fit items-center text-[15px] font-medium leading-none tracking-[-0.03em]"
                  to={item.linkUrl}
                  theme="white"
                  withArrow
                >
                  {item.linkLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <Image
        className="pointer-events-none absolute left-1/2 top-0 max-w-none -translate-x-1/2 xl:top-8 xl:w-[1588px] lg:top-6 lg:w-[1420px] md:top-[76px] md:w-[1058px]"
        src={bg}
        sizes="(max-width: 767px) 1058px"
        width={1920}
        height={1210}
        quality={100}
        alt=""
        priority
      />
    </section>
  );
};

export default Hero;
