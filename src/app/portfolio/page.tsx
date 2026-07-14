import type { Metadata } from 'next';
import JsonLd from '../../components/JsonLd';
import SiteChrome from '../../components/SiteChrome';
import PortfolioPageContent from '../../components/seo-pages/PortfolioPageContent';
import { breadcrumbJsonLd, portfolioJsonLd, SITE_NAME, SITE_URL, webPageJsonLd } from '../../seo';
import { PORTFOLIO_DATA } from '../../data';

const pageDescription =
  'Browse Aptimark Solutions portfolio case studies, outcomes, and selected work across fintech, e-commerce, performance design, and web app delivery.';

export const metadata: Metadata = {
  title: 'Portfolio Case Studies & Selected Work',
  description: pageDescription,
  alternates: {
    canonical: `${SITE_URL}/portfolio`,
  },
  openGraph: {
    title: `Portfolio Case Studies & Selected Work | ${SITE_NAME}`,
    description: pageDescription,
    url: `${SITE_URL}/portfolio`,
    siteName: SITE_NAME,
    type: 'website',
    images: ['/white_aptimark.png'],
  },
};

export default function PortfolioPage() {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
  ];

  return (
    <SiteChrome breadcrumbItems={breadcrumbItems}>
      <JsonLd
        data={[
          webPageJsonLd({
            name: 'Portfolio Case Studies & Selected Work',
            description: pageDescription,
            path: '/portfolio',
          }),
          breadcrumbJsonLd(breadcrumbItems),
          portfolioJsonLd(PORTFOLIO_DATA),
        ]}
      />
      <PortfolioPageContent />
    </SiteChrome>
  );
}
