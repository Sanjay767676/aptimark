import type { Metadata } from 'next';
import ProcessPageContent from '../../components/seo-pages/ProcessPageContent';

export const metadata: Metadata = {
  title: 'Process',
  description:
    'See the Aptimark Solutions process: discover, design, build, and launch with a disciplined, SEO-safe workflow.',
  alternates: {
    canonical: '/process',
  },
  openGraph: {
    title: 'Process | Aptimark Solutions',
    description:
      'See the Aptimark Solutions process: discover, design, build, and launch with a disciplined, SEO-safe workflow.',
    url: '/process',
    type: 'website',
    images: ['/white_aptimark.png'],
  },
};

export default function ProcessPage() {
  return <ProcessPageContent />;
}
