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
  websiteJsonLd,
} from '../seo';
import '../index.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | SEO-Friendly Web Design, Development & Digital Services`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Aptimark Solutions',
    'web development',
    'SEO services',
    'Next.js development',
    'website design',
    'digital services',
    'Google indexing',
    'Coimbatore',
    'Tamil Nadu',
  ],
  alternates: {
    canonical: `${SITE_URL}/`,
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
    title: `${SITE_NAME} | SEO-Friendly Web Design, Development & Digital Services`,
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    type: 'website',
    images: [SITE_LOGO_URL],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | SEO-Friendly Web Design, Development & Digital Services`,
    description: SITE_DESCRIPTION,
    images: [SITE_LOGO_URL],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={[organizationJsonLd, websiteJsonLd, localBusinessJsonLd]} />
        {children}
      </body>
    </html>
  );
}
