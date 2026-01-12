/* eslint-disable import/prefer-default-export */
import Rss from 'rss';

import { BLOG_POSTS_LIST } from 'data/blog-posts';

const SITE_URL = process.env.NEXT_PUBLIC_DEFAULT_SITE_URL || 'https://singularityrd.com';
const BLOG_BASE_PATH = '/blog/';

export async function GET() {
  const feed = new Rss({
    id: BLOG_BASE_PATH,
    language: 'en',
    title: `Blog — Singularity`,
    description: 'Expert insights on cybersecurity, device management, and enterprise security',
    feed_url: `${SITE_URL}${BLOG_BASE_PATH}rss.xml`,
    site_url: SITE_URL,
  });

  BLOG_POSTS_LIST.forEach((post) => {
    const url = `${SITE_URL}${BLOG_BASE_PATH}${post.slug}`;

    feed.item({
      id: url,
      title: post.title,
      description: post.excerpt,
      url,
      date: new Date(post.date),
      author: post.author || 'Singularity Team',
      categories: [post.category],
      custom_elements: [{ 'content:encoded': post.excerpt }],
    });
  });

  return new Response(feed.xml(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
