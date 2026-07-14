import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import JsonLd from '../components/JsonLd';
import {
  localBusinessJsonLd,
  organizationJsonLd,
  SITE_DESCRIPTION,
  SITE_LOGO_URL,
  SITE_NAME,
  SITE_URL,
  speakableSchema,
  websiteJsonLd,
} from '../seo';
import '../index.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | SEO-Friendly Web Design, Development & Digital Services in Coimbatore`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Aptimark Solutions',
    'web development Coimbatore',
    'SEO services Tamil Nadu',
    'Next.js development India',
    'website design Coimbatore',
    'digital services India',
    'SEO-friendly websites',
    'web app development',
    'legacy refactoring',
    'custom IT solutions',
    'React development',
    'TypeScript development',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: `${SITE_URL}/`,
    languages: {
      'en-IN': `${SITE_URL}/`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: `${SITE_NAME} | SEO-Friendly Web Design, Development & Digital Services in Coimbatore`,
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    type: 'website',
    locale: 'en_IN',
    images: [SITE_LOGO_URL],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | SEO-Friendly Web Design, Development & Digital Services in Coimbatore`,
    description: SITE_DESCRIPTION,
    images: [SITE_LOGO_URL],
    creator: '@aptimark',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#1B2A4A" />
      </head>
      <body>
        <JsonLd data={[organizationJsonLd, websiteJsonLd, localBusinessJsonLd, speakableSchema()]} />
        {children}
      </body>
    </html>
  );
}
