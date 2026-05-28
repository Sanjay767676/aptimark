import type { Metadata } from 'next';
import ServicesPageContent from '../../components/seo-pages/ServicesPageContent';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Aptimark Solutions services cover website development, SEO strategy, app development, legacy refactoring, and custom IT solutions.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Services | Aptimark Solutions',
    description:
      'Aptimark Solutions services cover website development, SEO strategy, app development, legacy refactoring, and custom IT solutions.',
    url: '/services',
    type: 'website',
    images: ['/white_aptimark.png'],
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
