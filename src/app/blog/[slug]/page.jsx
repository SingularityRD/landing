import Link from 'next/link';
import Container from 'components/shared/container';
import { BLOG_POSTS_LIST, BLOG_POSTS_CONTENT } from 'data/blog-posts';

// Generate static params for all blog posts
export async function generateStaticParams() {
  return Object.keys(BLOG_POSTS_CONTENT).map((slug) => ({ slug }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }) {
  const post = BLOG_POSTS_CONTENT[params.slug];

  if (!post) {
    return { title: 'Post Not Found | Singularity Blog' };
  }

  return {
    title: `${post.title} | Singularity Blog`,
    description: post.excerpt,
    keywords: BLOG_POSTS_LIST.find(p => p.slug === params.slug)?.keywords?.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

const BlogPostPage = ({ params }) => {
  const post = BLOG_POSTS_CONTENT[params.slug];

  if (!post) {
    return (
      <Container className="py-40 text-center" size="960">
        <h1 className="font-title text-4xl font-medium text-white">Post Not Found</h1>
        <p className="mt-4 text-gray-new-70">The article you are looking for does not exist.</p>
        <Link href="/blog" className="mt-8 inline-block text-green-45 hover:underline">
          Back to Blog
        </Link>
      </Container>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Person', name: post.author },
    publisher: { '@type': 'Organization', name: 'Singularity' },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="safe-paddings">
        <Container className="pt-40 pb-20 xl:pt-32 lg:pt-20" size="768">
          <header>
            <Link href="/blog" className="inline-flex items-center text-sm text-gray-new-60 hover:text-white transition-colors">
              ← Back to Blog
            </Link>
            <span className="mt-6 block">
              <span className="inline-block rounded-full bg-green-45/20 px-3 py-1 text-xs font-medium text-green-45">
                {post.category}
              </span>
            </span>
            <h1 className="mt-4 font-title text-5xl font-medium leading-tight tracking-tight text-white xl:text-4xl lg:text-3xl">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-new-50">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>
          <div
            className="prose prose-invert mt-12 max-w-none prose-headings:font-title prose-headings:font-medium prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-p:text-gray-new-80 prose-li:text-gray-new-80 prose-strong:text-white prose-table:text-sm"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="mt-16 rounded-xl border border-gray-new-15 bg-gray-new-8 p-8 text-center">
            <h2 className="font-title text-2xl font-medium text-white">Ready to Deploy Singularity?</h2>
            <p className="mt-2 text-gray-new-70">Get started with a free security assessment.</p>
            <Link href="/contact-sales" className="mt-6 inline-block rounded-full bg-green-45 px-8 py-3 font-medium text-black hover:bg-green-45/90">
              Schedule Demo
            </Link>
          </div>
        </Container>
      </article>
    </>
  );
};

export default BlogPostPage;
