import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '../index.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aptimarksolutions.in'),
  title: {
    default: 'Aptimark Solutions | SEO-Friendly Web Design, Development & Digital Services',
    template: '%s | Aptimark Solutions',
  },
  description:
    'Aptimark Solutions builds SEO-friendly websites, web apps, software systems, and digital services with clean architecture for Google indexing.',
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
    canonical: '/',
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
    title: 'Aptimark Solutions | SEO-Friendly Web Design, Development & Digital Services',
    description:
      'Aptimark Solutions builds SEO-friendly websites, web apps, software systems, and digital services with clean architecture for Google indexing.',
    url: '/',
    siteName: 'Aptimark Solutions',
    type: 'website',
    images: ['/white_aptimark.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aptimark Solutions | SEO-Friendly Web Design, Development & Digital Services',
    description:
      'Aptimark Solutions builds SEO-friendly websites, web apps, software systems, and digital services with clean architecture for Google indexing.',
    images: ['/white_aptimark.png'],
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Aptimark Solutions',
  url: 'https://www.aptimarksolutions.in/',
  logo: 'https://www.aptimarksolutions.in/white_aptimark.png',
  sameAs: ['https://www.linkedin.com/'],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Aptimark Solutions',
  url: 'https://www.aptimarksolutions.in/',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
