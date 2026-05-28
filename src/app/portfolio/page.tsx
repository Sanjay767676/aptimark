import type { Metadata } from 'next';
import PortfolioPageContent from '../../components/seo-pages/PortfolioPageContent';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Browse Aptimark Solutions portfolio case studies, outcomes, and selected work across fintech and e-commerce projects.',
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: 'Portfolio | Aptimark Solutions',
    description:
      'Browse Aptimark Solutions portfolio case studies, outcomes, and selected work across fintech and e-commerce projects.',
    url: '/portfolio',
    type: 'website',
    images: ['/white_aptimark.png'],
  },
};

export default function PortfolioPage() {
  return <PortfolioPageContent />;
}
