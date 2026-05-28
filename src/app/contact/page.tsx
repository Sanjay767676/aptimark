import type { Metadata } from 'next';
import ContactPageContent from '../../components/seo-pages/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Aptimark Solutions to discuss SEO-friendly web design, Next.js development, software migrations, and digital services.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact | Aptimark Solutions',
    description:
      'Contact Aptimark Solutions to discuss SEO-friendly web design, Next.js development, software migrations, and digital services.',
    url: '/contact',
    type: 'website',
    images: ['/white_aptimark.png'],
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
