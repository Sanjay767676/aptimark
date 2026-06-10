import type { Metadata } from 'next';
import JsonLd from '../../components/JsonLd';
import SiteChrome from '../../components/SiteChrome';
import ServicesPageContent from '../../components/seo-pages/ServicesPageContent';
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceCatalogJsonLd,
  SITE_NAME,
  SITE_URL,
  webPageJsonLd,
} from '../../seo';

const pageDescription =
  'Explore Aptimark Solutions services for SEO-friendly web design, Next.js development, app development, legacy refactoring, and custom IT systems.';

export const metadata: Metadata = {
  title: 'SEO-Friendly Web Design & Development Services',
  description: pageDescription,
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: `SEO-Friendly Web Design & Development Services | ${SITE_NAME}`,
    description: pageDescription,
    url: `${SITE_URL}/services`,
    siteName: SITE_NAME,
    type: 'website',
    images: ['/white_aptimark.png'],
  },
};

export default function ServicesPage() {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
  ];

  return (
    <SiteChrome breadcrumbItems={breadcrumbItems}>
      <JsonLd
        data={[
          webPageJsonLd({
            name: 'SEO-Friendly Web Design & Development Services',
            description: pageDescription,
            path: '/services',
          }),
          breadcrumbJsonLd(breadcrumbItems),
          serviceCatalogJsonLd(),
          faqJsonLd(),
        ]}
      />
      <ServicesPageContent />
    </SiteChrome>
  );
}
