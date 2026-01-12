import PropTypes from 'prop-types';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const StatisticsItem = ({ title, description }) => (
  <li className="flex flex-col gap-[20px] lg:gap-3 md:gap-2">
    <span className="bg-[linear-gradient(73deg,#7F95EB_1%,#89E0EA_33%,#EFEFEF_81%)] bg-clip-text pr-3 text-7xl font-semibold leading-none tracking-tighter text-transparent lg:text-6xl md:text-[56px]">
      {title}
    </span>
    <span className="text-[15px] font-normal uppercase leading-none tracking-extra-tight text-gray-new-50 lg:text-[14px] md:text-[13px]">
      {description}
    </span>
  </li>
);

StatisticsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const WhereHeaded = () => (
  <section className="where-headed safe-paddings mt-[216px] xl:mt-[152px] lg:mt-[112px] md:mt-[72px]">
    <Container size={640} className="lg:!max-w-[544px] lg:!px-0 md:!px-5">
      <Heading
        className="max-w-[800px] text-6xl font-medium leading-[0.9] tracking-extra-tight lg:text-5xl md:text-[36px]"
        tag="h2"
      >
        What We've Built
      </Heading>
      <div className="mt-12 max-w-[647px] text-gray-new-50 lg:mt-8 md:mt-6">
        <p className="text-2xl tracking-tighter lg:text-xl md:text-[16px]">
          <span className="text-white">
            We've spent 4 years building what others said was impossible.
          </span>{' '}
          A security small language model that outperforms enterprise giants.
          Attack detection algorithms that see threats before they materialize.
          Predictive maintenance that prevents failures 14 days in advance.
        </p>

        <p className="mt-8 block text-2xl tracking-extra-tight lg:mt-6 lg:text-xl md:mt-[14px] md:text-[16px]">
          <span className="text-white">
            Our research spans critical infrastructure:
          </span>{' '}
          Industrial control systems. Automotive ECUs. Satellite communications.
          We find vulnerabilities where others don't look—and we build defenses that actually work.
        </p>

        <p className="mt-8 block text-2xl tracking-extra-tight lg:mt-6 lg:text-xl md:mt-[14px] md:text-[16px]">
          <span className="text-white">
            Zero outside investment.
          </span>{' '}
          Every dollar of R&D came from customer revenue. We answer to results, not investors.
        </p>

        <ul className="mt-14 flex gap-x-[74px] lg:mt-10 lg:gap-x-[60px] md:flex-col md:gap-8">
          <StatisticsItem title="99.7%" description="Threat Detection Rate" />
          <StatisticsItem title="&lt;100ms" description="Response Time" />
          <StatisticsItem title="$0" description="Outside Funding" />
        </ul>
      </div>
    </Container>
  </section>
);

export default WhereHeaded;
