import './globals.css';
import ClientLayout from './client-layout';
import { BUSINESS_CONFIG } from '../data/business';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: '%s | Prince Holidays',
    default: 'Prince Holidays | Bus Tours & College Trips from Tamil Nadu',
  },
  description:
    'Family holidays, college industrial visits, school trips and office tours — bus, hotel, food and sightseeing all planned for you. Simple pricing, safe travel, WhatsApp booking.',
  authors: [{ name: 'Prince Holidays', url: baseUrl }],
  creator: 'Prince Holidays',
  publisher: 'Prince Holidays',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Prince Holidays | Bus Tours & College Trips from Tamil Nadu',
    description:
      'Family holidays, college industrial visits, school trips and office tours — bus, hotel, food and sightseeing all planned for you.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Prince Holidays',
    url: baseUrl,
    images: [
      {
        url: '/images/prince-holidays-hero-poster.webp',
        width: 1200,
        height: 630,
        alt: 'Prince Holidays — premium tourist bus on a scenic mountain road',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prince Holidays | Bus Tours & College Trips from Tamil Nadu',
    description:
      'Family holidays, college industrial visits, school trips and office tours — bus, hotel, food and sightseeing all planned for you.',
    images: ['/images/prince-holidays-hero-poster.webp'],
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      'en-IN': baseUrl,
    },
  },
  otherMeta: {
    'geo.region': 'IN-TN',
    'geo.placename': 'Tirunelveli',
    'geo.country': 'IN',
    'googlebot': 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${baseUrl}#business`,
  name: BUSINESS_CONFIG.name,
  image: `${baseUrl}/images/prince-holidays-logo.png`,
  url: baseUrl,
  telephone: `+${BUSINESS_CONFIG.countryCode}${BUSINESS_CONFIG.phone}`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ground floor, 38/B, Cheranmahadevi Rd',
    addressLocality: 'Tirunelveli Junction',
    addressRegion: 'Tamil Nadu',
    postalCode: '627006',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 8.7139,
    longitude: 77.7567,
  },
  areaServed: 'IN',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    opens: '09:00',
    closes: '21:00',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
  },
  sameAs: [BUSINESS_CONFIG.instagramUrl, BUSINESS_CONFIG.youtubeUrl],
} as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/images/prince-holidays-logo.png"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin=""
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Caveat:wght@500;600&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
        {/* Hero poster (~1MB) — start downloading before hydration so its decode
            never collides with the very first scroll gestures on mobile. */}
        <link
          rel="preload"
          as="image"
          href="/images/prince-holidays-hero-poster.webp"
          fetchPriority="high"
        />

        {/* LocalBusiness JSON-LD for SEO & geo */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
