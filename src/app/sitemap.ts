import { MetadataRoute } from 'next';

// Normalized (no trailing slash) to keep every URL canonical and consistent.
const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://princeholidays.think2xcreate.com').replace(
  /\/+$/,
  ''
);

/**
 * Prince Holidays is a single-page site (one homepage with anchor sections).
 * Only real, publicly reachable pages belong here — no anchor URLs, no
 * duplicates, no private routes.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
