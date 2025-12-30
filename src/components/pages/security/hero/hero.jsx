import Container from 'components/shared/container/container';

const Hero = () => (
  <section className="hero safe-paddings relative pt-40 xl:pt-[150px] lg:pt-12 md:pt-10">
    <Container className="relative z-10 flex flex-col items-center text-center" size="960">
      <h1 className="mx-auto font-title text-6xl font-medium leading-[0.9] tracking-extra-tight xl:text-[56px] lg:text-5xl md:text-4xl">
        Security & Compliance
      </h1>
      <p className="mx-auto mt-4 max-w-[714px] text-lg leading-snug tracking-extra-tight text-gray-new-80 xl:max-w-[772px] lg:mt-3.5 lg:max-w-[580px] lg:text-base sm:mt-3">
        At Singularity, security is not just a feature—it's our foundation. Built by elite security researchers, our platform meets the most rigorous compliance standards while delivering autonomous protection.
      </p>
    </Container>
  </section>
);

export default Hero;
