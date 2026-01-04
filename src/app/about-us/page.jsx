import Connections from 'components/pages/about/connections';
import Developers from 'components/pages/about/developers';
import Hero from 'components/pages/about/hero';
import Timeline from 'components/pages/about/timeline';
import WhereHeaded from 'components/pages/about/where-headed';
import Cta from 'components/shared/cta';
import Layout from 'components/shared/layout';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.aboutUs);

const AboutUsPage = () => (
  <Layout>
    <Hero />
    <Timeline />
    <WhereHeaded />
    <Developers />
    <Connections />
    <Cta
      className="pb-[320px] pt-[350px] xl:pb-[220px] xl:pt-[270px] lg:pb-[156px] lg:pt-[200px] sm:pb-[80px] sm:pt-[180px]"
      title="Talk to Our Research Team"
      description="See how our security research translates into enterprise-grade protection."
      buttonText="Schedule a Call"
      buttonUrl="/contact-sales"
      buttonClassName="mt-9 h-12 w-[174px] xl:mt-[18px] lg:h-11 lg:mt-4 lg:w-[166px] md:mt-5 md:h-10 md:w-[151px] md:text-sm"
    />
  </Layout>
);

export default AboutUsPage;
