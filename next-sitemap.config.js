module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_DEFAULT_SITE_URL || 'https://singularityrd.com',
  exclude: [
    // API routes
    '/api/*',

    // XML routes (RSS feeds and sitemaps)
    '**/*.xml',

    // Blog and Postgres sitemaps (handled separately if needed)
    '/blog/*',
    '/postgresql/*',

    // Other pages
    '/thank-you',
  ],
  generateRobotsTxt: true,
  additionalPaths: async (config) => [await config.transform(config, '/')],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: [
          '/thank-you$',
        ],
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}/sitemap.xml`,
    ],
  },
};
