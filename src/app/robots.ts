import { MetadataRoute } from 'next';

// Normalized (no trailing slash) so joined paths like /sitemap.xml are correct
// even if NEXT_PUBLIC_SITE_URL is configured with a trailing slash.
const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000').replace(
  /\/+$/,
  ''
);

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
