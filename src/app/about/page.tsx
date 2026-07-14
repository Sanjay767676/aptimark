import type { Metadata } from 'next';
import JsonLd from '../../components/JsonLd';
import SiteChrome from '../../components/SiteChrome';
import AboutPageContent from '../../components/seo-pages/AboutPageContent';
import {
  breadcrumbJsonLd,
  organizationJsonLd,
  SITE_NAME,
  SITE_URL,
  webPageJsonLd,
} from '../../seo';

const pageDescription =
  'About Aptimark Solutions - Expert web developers, SEO strategists, and digital architects in Coimbatore, Tamil Nadu. 10+ years of experience building SEO-friendly websites and apps.';

export const metadata: Metadata = {
  title: 'About Aptimark Solutions - Expert Web Developers & SEO Strategists',
  description: pageDescription,
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: `About ${SITE_NAME} - Expert Web Developers & SEO Strategists`,
    description: pageDescription,
    url: `${SITE_URL}/about`,
    siteName: SITE_NAME,
    type: 'website',
    images: ['/white_aptimark.png'],
  },
};

export default function AboutPage() {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ];

  return (
    <SiteChrome breadcrumbItems={breadcrumbItems}>
      <JsonLd
        data={[
          webPageJsonLd({
            name: 'About Aptimark Solutions',
            description: pageDescription,
            path: '/about',
          }),
          breadcrumbJsonLd(breadcrumbItems),
          {
            ...organizationJsonLd,
            foundingDate: '2014',
            numberOfEmployees: '10-50',
            sameAs: [
              'https://www.linkedin.com/company/aptimark-solutions',
              'https://twitter.com/aptimark',
              'https://www.facebook.com/aptimarksolutions',
            ],
          },
        ]}
      />
      <AboutPageContent />
    </SiteChrome>
  );
}
