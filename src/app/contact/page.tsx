import type { Metadata } from 'next';
import JsonLd from '../../components/JsonLd';
import SiteChrome from '../../components/SiteChrome';
import ContactPageContent from '../../components/seo-pages/ContactPageContent';
import { breadcrumbJsonLd, SITE_NAME, SITE_URL, webPageJsonLd } from '../../seo';

const pageDescription =
  'Contact Aptimark Solutions for SEO-friendly web design, Next.js development, software migrations, app development, and custom IT solutions.';

export const metadata: Metadata = {
  title: 'Contact Aptimark Solutions',
  description: pageDescription,
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: `Contact ${SITE_NAME}`,
    description: pageDescription,
    url: `${SITE_URL}/contact`,
    siteName: SITE_NAME,
    type: 'website',
    images: ['/white_aptimark.png'],
  },
};

export default function ContactPage() {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <SiteChrome breadcrumbItems={breadcrumbItems}>
      <JsonLd
        data={[
          webPageJsonLd({
            name: 'Contact Aptimark Solutions',
            description: pageDescription,
            path: '/contact',
          }),
          breadcrumbJsonLd(breadcrumbItems),
        ]}
      />
      <ContactPageContent />
    </SiteChrome>
  );
}
