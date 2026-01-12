import Container from 'components/shared/container';

// Static categories instead of WordPress API
const CATEGORIES = [
  { name: 'AutoSecOps', slug: 'autosecops' },
  { name: 'Compliance', slug: 'compliance' },
  { name: 'IAM', slug: 'iam' },
  { name: 'WAF', slug: 'waf' },
  { name: 'Threat Intelligence', slug: 'threat-intelligence' },
  { name: 'vCISO', slug: 'vciso' },
  { name: 'REPS', slug: 'reps' },
];

// eslint-disable-next-line react/prop-types
const BlogPageLayout = ({ children }) => {
  return (
    <div className="safe-paddings pb-24 pt-16 lg:pb-20 lg:pt-12 sm:pb-16 sm:pt-10">
      <Container className="flex flex-col" size="1344">
        <div className="flex gap-[18px] xl:gap-3.5 lg:flex-col lg:gap-0">
          <div className="relative w-full">{children}</div>
        </div>
      </Container>
    </div>
  );
};

export default BlogPageLayout;
