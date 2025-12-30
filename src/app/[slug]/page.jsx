/* eslint-disable react/prop-types */
import { notFound } from 'next/navigation';

import { TEMPLATE_PAGES_DIR_PATH } from 'constants/content';
import { getPostBySlug, getPostSlugs } from 'utils/api-content';

const getPageType = async (slug) => {
  const templatePage = getPostBySlug(slug, TEMPLATE_PAGES_DIR_PATH);
  if (templatePage) {
    return 'template';
  }

  return null;
};

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const pageType = await getPageType(slug);

  if (pageType === 'template') {
    const { default: TemplatePage } = await import('./pages/template-page');
    return <TemplatePage params={params} />;
  }

  return notFound();
};

export async function generateMetadata({ params }) {
  const { slug } = params;
  const pageType = await getPageType(slug);

  if (pageType === 'template') {
    const mod = await import('./pages/template-page');
    if (mod.generateMetadata) {
      return mod.generateMetadata({ params });
    }
    return null;
  }

  return null;
}

export async function generateViewport({ params }) {
  // Viewport generation if needed
  return undefined;
}

export async function generateStaticParams() {
  const templateSlugs = await getPostSlugs(TEMPLATE_PAGES_DIR_PATH);
  const templateParams = templateSlugs.map((slug) => ({
    slug: slug.slice(1),
  }));

  return templateParams;
}

export const revalidate = 60;

export default SinglePage;
