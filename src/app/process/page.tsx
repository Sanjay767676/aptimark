import type { Metadata } from 'next';
import JsonLd from '../../components/JsonLd';
import SiteChrome from '../../components/SiteChrome';
import ProcessPageContent from '../../components/seo-pages/ProcessPageContent';
import { breadcrumbJsonLd, SITE_NAME, SITE_URL, webPageJsonLd } from '../../seo';

const pageDescription =
  'See the Aptimark Solutions process for discovery, design, development, launch, SEO validation, and performance-minded delivery.';

export const metadata: Metadata = {
  title: 'Website Design & Development Process',
  description: pageDescription,
  alternates: {
    canonical: `${SITE_URL}/process`,
  },
  openGraph: {
    title: `Website Design & Development Process | ${SITE_NAME}`,
    description: pageDescription,
    url: `${SITE_URL}/process`,
    siteName: SITE_NAME,
    type: 'website',
    images: ['/white_aptimark.png'],
  },
};

export default function ProcessPage() {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Process', path: '/process' },
  ];

  return (
    <SiteChrome breadcrumbItems={breadcrumbItems}>
      <JsonLd
        data={[
          webPageJsonLd({
            name: 'Website Design & Development Process',
            description: pageDescription,
            path: '/process',
          }),
          breadcrumbJsonLd(breadcrumbItems),
        ]}
      />
      <ProcessPageContent />
    </SiteChrome>
  );
}
