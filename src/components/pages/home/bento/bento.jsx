import Container from 'components/shared/container';
import Link from 'components/shared/link';
import PauseableVideo from 'components/shared/pauseable-video';
import LINKS from 'constants/links';

import RiveCard from './rive-card';

const Bento = () => (
  <section className="bento safe-paddings mt-11 xl:mt-[38px] lg:mt-[74px]">
    <Container className="xl:max-w-[704px] lg:max-w-full" size="960">
      <h2 className="font-title text-[68px] font-medium leading-[0.9] tracking-extra-tight text-white xl:text-[56px] lg:pl-16 lg:text-[44px] sm:pl-0 sm:text-[32px]">
        Our Products.
        <br />
        Your&nbsp;Advantage.
      </h2>
      <div className="mt-10 grid grid-cols-2 gap-5 xl:mt-9 xl:gap-4 lg:mt-8 sm:mt-5 sm:gap-x-[18px]">
        <div className="relative col-span-2 grid min-h-[384px] grid-cols-1 grid-rows-1 overflow-hidden rounded-[10px] xl:min-h-[282px] xl:rounded-lg lg:aspect-[2.5] lg:min-h-min sm:aspect-[1.2] sm:max-h-[325px] sm:min-h-[250px] sm:w-full">
          <div className="relative z-10 col-span-full row-span-full">
            <PauseableVideo
              videoClassName="sm:inset-auto sm:left-1/2 sm:top-1/2 sm:h-full sm:w-auto sm:max-w-none sm:-translate-x-1/2 sm:translate-y-[-65%]"
              width={960}
              height={384}
            >
              <source src="/videos/pages/home/replicas.mp4" type="video/mp4" />
              <source src="/videos/pages/home/replicas.webm" type="video/webm" />
            </PauseableVideo>
          </div>
          <div className="pointer-events-none relative z-20 col-span-full row-span-full flex items-end px-6 pb-7 xl:px-5 xl:pb-6 sm:bg-gradient-to-b sm:from-transparent sm:via-transparent sm:via-60% sm:to-black-new/30 sm:p-4">
            <p className="pointer-events-auto max-w-lg text-lg font-light leading-snug tracking-extra-tight text-white/60 xl:max-w-md xl:text-base sm:leading-tight">
              <strong className="font-medium text-white">
                REPS: Mastery Through Repetition.
              </strong>{' '}
              50,000+ challenges in algorithms, security, and ML. Build real skills. Get verified.
            </p>
          </div>
          <div
            className="border-linear pointer-events-none absolute inset-0 z-10 rounded-[inherit] border-image-home-bento-regions-border"
            aria-hidden
          />
        </div>
        <RiveCard animation="api">
          <div className="pointer-events-none relative z-20 col-span-full row-span-full flex items-end px-6 pb-7 xl:px-5 xl:pb-6 sm:p-4">
            <p className="pointer-events-auto text-lg font-light leading-snug tracking-extra-tight text-white/60 xl:text-base sm:text-[15px] sm:leading-tight">
              <strong className="font-normal text-white">
                Brief: Turkish Tech Intelligence.
              </strong>{' '}
              Original reporting. Deep analysis. The stories that move markets. @briefturkiye
            </p>
          </div>
          <div
            className="border-linear pointer-events-none absolute inset-0 z-10 rounded-[inherit] border-image-home-bento-api-and-cli-border"
            aria-hidden
          />
        </RiveCard>
        <RiveCard animation="clock">
          <div className="pointer-events-none relative z-20 col-span-full row-span-full flex items-end px-6 pb-7 xl:px-5 xl:pb-6 sm:p-4">
            <p className="pointer-events-auto text-lg font-light leading-snug tracking-extra-tight text-white/60 xl:text-base sm:text-[15px] sm:leading-tight">
              <strong className="font-normal text-white">
                Neural WAF.
              </strong>{' '}
              ML models trained on 1B+ attacks. Sub-5ms decisions. Zero-day protection before CVEs drop.
            </p>
          </div>
          <div
            className="border-linear pointer-events-none absolute inset-0 z-10 rounded-[inherit] border-image-home-bento-timer-border"
            aria-hidden
          />
        </RiveCard>
      </div>
    </Container>
  </section>
);

export default Bento;
