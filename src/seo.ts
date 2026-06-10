import { SERVICES_DATA } from './data';

export const SITE_URL = 'https://www.aptimarksolutions.in';
export const SITE_NAME = 'Aptimark Solutions';
export const SITE_DESCRIPTION =
  'Aptimark Solutions builds SEO-friendly websites, web apps, software systems, and digital services with clean architecture for Google indexing.';
export const SITE_LOGO_URL = `${SITE_URL}/white_aptimark.png`;

export const NAVIGATION_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Process', href: '/process' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICE_FAQS = [
  {
    question: 'What services does Aptimark Solutions provide?',
    answer:
      'Aptimark Solutions provides website development, SEO strategy, app development, legacy refactoring, and custom IT solutions for businesses that need fast, crawlable, conversion-focused digital systems.',
  },
  {
    question: 'How does Aptimark build SEO-friendly websites?',
    answer:
      'Aptimark uses clean URL structures, semantic headings, indexable Next.js pages, structured data, sitemap and robots configuration, performance-minded assets, and internal linking plans from the start of each project.',
  },
  {
    question: 'Can Aptimark help migrate an existing website or app?',
    answer:
      'Yes. Aptimark handles legacy refactoring and migrations by auditing the current stack, preserving important URLs where possible, mapping redirects, modernizing the codebase, and validating performance and indexing after launch.',
  },
  {
    question: 'How can I start a project with Aptimark Solutions?',
    answer:
      'Use the contact page to share your project goals, timeline, and technical requirements. Aptimark reviews the brief and prepares a strategic proposal for the build, migration, or SEO engagement.',
  },
];

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  legalName: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: {
    '@type': 'ImageObject',
    url: SITE_LOGO_URL,
  },
  image: SITE_LOGO_URL,
  description: SITE_DESCRIPTION,
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  publisher: {
    '@id': `${SITE_URL}/#organization`,
  },
};

export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': `${SITE_URL}/#localbusiness`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  image: SITE_LOGO_URL,
  logo: SITE_LOGO_URL,
  description: SITE_DESCRIPTION,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Coimbatore',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'City', name: 'Coimbatore' },
    { '@type': 'AdministrativeArea', name: 'Tamil Nadu' },
    { '@type': 'Country', name: 'India' },
  ],
  serviceType: SERVICES_DATA.map((service) => service.title),
  parentOrganization: {
    '@id': `${SITE_URL}/#organization`,
  },
};

export function absoluteUrl(path = '/') {
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path === '/' ? '/' : path}`;
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function webPageJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
    about: {
      '@id': `${SITE_URL}/#organization`,
    },
  };
}

export function faqJsonLd(faqs = SERVICE_FAQS) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function serviceCatalogJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Aptimark Solutions services',
    itemListElement: SERVICES_DATA.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
        provider: {
          '@id': `${SITE_URL}/#organization`,
        },
      },
    })),
  };
}
