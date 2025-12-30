import Link from 'next/link';
import Container from 'components/shared/container';
import { BLOG_POSTS_LIST } from 'data/blog-posts';

export const metadata = {
  title: 'Blog - Security Insights & Industry News | Singularity',
  description: 'Expert insights on cybersecurity, device management, compliance, and enterprise security. Stay ahead of threats with Singularity.',
  openGraph: {
    title: 'Blog - Security Insights & Industry News | Singularity',
    description: 'Expert insights on cybersecurity, device management, compliance, and enterprise security.',
  },
};

const BlogPage = () => (
  <>
    <section className="blog-hero safe-paddings relative pt-40 xl:pt-[150px] lg:pt-12 md:pt-10">
      <Container className="relative z-10" size="1100">
        <h1 className="font-title text-6xl font-medium leading-[0.9] tracking-extra-tight xl:text-[56px] lg:text-5xl md:text-4xl">
          Blog
        </h1>
        <p className="mt-4 max-w-[600px] text-lg leading-snug tracking-extra-tight text-gray-new-80 lg:text-base">
          Expert insights on cybersecurity, device management, compliance, and enterprise security.
        </p>
      </Container>
    </section>

    <section className="featured-posts safe-paddings pt-16 xl:pt-12 lg:pt-10">
      <Container size="1100">
        <h2 className="font-title text-2xl font-medium tracking-tight text-white">Featured</h2>
        <div className="mt-8 grid grid-cols-2 gap-8 lg:grid-cols-1">
          {BLOG_POSTS_LIST.filter(post => post.featured).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-xl border border-gray-new-15 bg-gray-new-8 p-8 transition-all hover:border-gray-new-30 hover:bg-gray-new-10"
            >
              <span className="inline-block rounded-full bg-green-45/20 px-3 py-1 text-xs font-medium text-green-45">
                {post.category}
              </span>
              <h3 className="mt-4 font-title text-2xl font-medium leading-tight tracking-tight text-white group-hover:text-green-45 transition-colors xl:text-xl">
                {post.title}
              </h3>
              <p className="mt-3 text-base leading-snug text-gray-new-70">{post.excerpt}</p>
              <div className="mt-4 flex items-center gap-4 text-sm text-gray-new-50">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>

    <section className="all-posts safe-paddings pt-20 pb-32 xl:pt-16 xl:pb-24 lg:pt-12 lg:pb-20">
      <Container size="1100">
        <h2 className="font-title text-2xl font-medium tracking-tight text-white">All Articles</h2>
        <div className="mt-8 grid grid-cols-3 gap-6 xl:grid-cols-2 md:grid-cols-1">
          {BLOG_POSTS_LIST.filter(post => !post.featured).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-lg border border-gray-new-15 bg-gray-new-8 p-6 transition-all hover:border-gray-new-30 hover:bg-gray-new-10"
            >
              <span className="inline-block rounded-full bg-gray-new-15 px-3 py-1 text-xs font-medium text-gray-new-70">
                {post.category}
              </span>
              <h3 className="mt-3 font-title text-lg font-medium leading-tight tracking-tight text-white group-hover:text-green-45 transition-colors">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-snug text-gray-new-60 line-clamp-2">{post.excerpt}</p>
              <div className="mt-3 flex items-center gap-3 text-xs text-gray-new-50">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  </>
);

export default BlogPage;
