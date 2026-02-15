'use client';

import clsx from 'clsx';
import { useAnimate } from 'framer-motion';

import Container from 'components/shared/container';

const NO_CLIP = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
const BOTTOM_RIGHT_CLIP = 'polygon(0 0, 100% 0, 0 0, 0% 100%)';
const TOP_RIGHT_CLIP = 'polygon(0 0, 0 100%, 100% 100%, 0% 100%)';
const BOTTOM_LEFT_CLIP = 'polygon(100% 100%, 100% 0, 100% 100%, 0 100%)';
const TOP_LEFT_CLIP = 'polygon(0 0, 100% 0, 100% 100%, 100% 0)';

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const logos = [
  {
    src: 'https://storage.efferd.com/logo/nvidia-wordmark.svg',
    alt: 'Nvidia Logo',
  },
  {
    src: 'https://storage.efferd.com/logo/supabase-wordmark.svg',
    alt: 'Supabase Logo',
  },
  {
    src: 'https://storage.efferd.com/logo/openai-wordmark.svg',
    alt: 'OpenAI Logo',
  },
  {
    src: 'https://storage.efferd.com/logo/turso-wordmark.svg',
    alt: 'Turso Logo',
  },
  {
    src: 'https://storage.efferd.com/logo/vercel-wordmark.svg',
    alt: 'Vercel Logo',
  },
  {
    src: 'https://storage.efferd.com/logo/github-wordmark.svg',
    alt: 'GitHub Logo',
  },
  {
    src: 'https://storage.efferd.com/logo/claude-wordmark.svg',
    alt: 'Claude AI Logo',
  },
  {
    src: 'https://storage.efferd.com/logo/clerk-wordmark.svg',
    alt: 'Clerk Logo',
  },
];

const getNearestSide = (e) => {
  const box = e.target.getBoundingClientRect();
  const sides = [
    { proximity: Math.abs(box.left - e.clientX), side: 'left' },
    { proximity: Math.abs(box.right - e.clientX), side: 'right' },
    { proximity: Math.abs(box.top - e.clientY), side: 'top' },
    { proximity: Math.abs(box.bottom - e.clientY), side: 'bottom' },
  ];
  sides.sort((a, b) => a.proximity - b.proximity);
  return sides[0].side;
};

const LogoCard = ({ logo }) => {
  const [scope, animate] = useAnimate();

  const handleMouseEnter = (e) => {
    const side = getNearestSide(e);
    animate(scope.current, { clipPath: ENTRANCE_KEYFRAMES[side] });
  };

  const handleMouseLeave = (e) => {
    const side = getNearestSide(e);
    animate(scope.current, { clipPath: EXIT_KEYFRAMES[side] });
  };

  return (
    <div
      className="relative flex cursor-pointer items-center justify-center rounded-lg border border-gray-new-15 bg-black-new p-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Default state: white logos on dark bg */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt={logo.alt}
        className="pointer-events-none block h-4 select-none brightness-0 invert md:h-5"
        height="auto"
        loading="lazy"
        src={logo.src}
        width="auto"
      />

      {/* Hover overlay: dark logos on white bg with clip-path animation */}
      <div
        ref={scope}
        style={{ clipPath: BOTTOM_RIGHT_CLIP }}
        className="absolute inset-0 flex items-center justify-center rounded-lg bg-white"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt={logo.alt}
          className="pointer-events-none block h-4 select-none md:h-5"
          height="auto"
          loading="lazy"
          src={logo.src}
          width="auto"
        />
      </div>
    </div>
  );
};

const Logos = () => (
  <section className="safe-paddings mt-[176px] xl:mt-24 lg:mt-20 sm:mt-24">
    <Container className="xl:max-w-5xl xl:px-8 lg:!max-w-3xl md:!max-w-[620px]" size="1100">
      <h2 className="mb-5 text-center text-lg font-medium tracking-tight text-gray-new-70 md:text-2xl">
        <span className="text-gray-new-50">Your favorite companies are</span>{' '}
        <span className="font-semibold text-white">our partners.</span>
      </h2>

      <div className="grid grid-cols-4 gap-px rounded-lg bg-gray-new-15 shadow-sm">
        {logos.map((logo) => (
          <LogoCard logo={logo} key={logo.alt} />
        ))}
      </div>
    </Container>
  </section>
);

export default Logos;
