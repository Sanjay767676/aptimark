import { SERVICES_DATA } from './data';

export const SITE_URL = 'https://www.aptimarksolutions.in';
export const SITE_NAME = 'Aptimark Solutions';
export const SITE_DESCRIPTION =
  'Aptimark Solutions builds SEO-friendly websites, web apps, software systems, and digital services with clean architecture for Google indexing.';
export const SITE_LOGO_URL = `${SITE_URL}/white_aptimark.png`;

export const NAVIGATION_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Process', href: '/process' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
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
  '@type': ['Organization', 'ProfessionalService'],
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
  foundingDate: '2014',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    minValue: 10,
    maxValue: 50,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-422-456-7890',
    contactType: 'customer service',
    availableLanguage: ['English', 'Hindi', 'Tamil'],
  },
  email: 'hello@aptimarksolutions.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Tech Park, Peelamedu',
    addressLocality: 'Coimbatore',
    addressRegion: 'Tamil Nadu',
    postalCode: '641004',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.linkedin.com/company/aptimark-solutions',
    'https://twitter.com/aptimark',
    'https://www.facebook.com/aptimarksolutions',
    'https://www.instagram.com/aptimark',
  ],
  areaServed: [
    { '@type': 'City', name: 'Coimbatore' },
    { '@type': 'State', name: 'Tamil Nadu' },
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Arab Emirates' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Services',
    itemListElement: SERVICES_DATA.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
      },
    })),
  },
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
  telephone: '+91-422-456-7890',
  email: 'hello@aptimarksolutions.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Tech Park, Peelamedu',
    addressLocality: 'Coimbatore',
    addressRegion: 'Tamil Nadu',
    postalCode: '641004',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '11.0168',
    longitude: '76.9558',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Coimbatore' },
    { '@type': 'State', name: 'Tamil Nadu' },
    { '@type': 'Country', name: 'India' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Arab Emirates' },
  ],
  serviceType: SERVICES_DATA.map((service) => service.title),
  parentOrganization: {
    '@id': `${SITE_URL}/#organization`,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47',
    bestRating: '5',
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

export function reviewJsonLd(reviews: Array<{
  reviewer: string;
  company: string;
  content: string;
  rating: number;
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    review: reviews.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.reviewer,
      },
      reviewBody: review.content,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: 5,
      },
    })),
  };
}

export function speakableSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}/#webpage`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.hero-headline', '.speakable-answer'],
    },
  };
}

export function portfolioJsonLd(projects: Array<{
  id: string;
  title: string;
  category: string;
  challenge: string;
  solutions: string[];
  outcomes: Array<{ label: string; value: string }>;
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Aptimark Solutions Portfolio - Case Studies & Selected Work',
    description: 'Browse our portfolio of SEO-friendly websites, web apps, and digital systems. View case studies with measurable outcomes.',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: projects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'CreativeWork',
          name: project.title,
          description: project.challenge,
          abstract: project.solutions.join('. '),
          keywords: project.category,
          about: {
            '@type': 'Organization',
            '@id': `${SITE_URL}/#organization`,
          },
        },
      })),
    },
  };
}

export function testimonialJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '47',
      bestRating: '5',
      ratingExplanation: 'Based on client feedback from 47 completed projects',
    },
  };
}

export const EXPANDED_SERVICE_FAQS = [
  ...SERVICE_FAQS,
  {
    question: 'What makes Aptimark different from other web development agencies?',
    answer:
      'Aptimark builds SEO into the architecture from day one, not as an afterthought. We guarantee 95+ Lighthouse scores, use clean semantic HTML, implement structured data, and ensure every page is crawlable and indexable. Our Coimbatore-based team combines deep technical expertise with strategic SEO thinking.',
  },
  {
    question: 'How long does it take to build a website with Aptimark?',
    answer:
      'Typical website projects take 4-8 weeks from discovery to launch. Simple landing pages can be delivered in 2-3 weeks, while complex web applications may take 8-12 weeks. We provide a detailed timeline during the discovery phase.',
  },
  {
    question: 'What is the cost of website development at Aptimark?',
    answer:
      'Website development at Aptimark starts from ₹50,000 for basic business websites and ranges up to ₹10,00,000+ for complex web applications. We provide transparent pricing with no hidden fees after the initial discovery consultation.',
  },
  {
    question: 'Does Aptimark provide ongoing SEO support?',
    answer:
      'Yes. Aptimark offers monthly SEO retainers that include technical audits, content optimization, schema updates, performance monitoring, and monthly reporting. We also provide one-time SEO audits for businesses that prefer self-service implementation.',
  },
  {
    question: 'Can Aptimark help my website rank on Google in India?',
    answer:
      'Absolutely. Aptimark specializes in local and national SEO for Indian businesses. We optimize for Google India, implement local business schema, create region-specific content, and build authority through technical excellence. Our clients typically see significant ranking improvements within 3-6 months.',
  },
  {
    question: 'What technologies does Aptimark use for web development?',
    answer:
      'Aptimark uses modern, performance-focused technologies including React 19, Next.js 15, TypeScript, Tailwind CSS, and Node.js. We deploy on Google Cloud Run and Vercel for optimal speed. All projects use clean, semantic HTML that search engines reward.',
  },
  {
    question: 'How does Aptimark ensure website security?',
    answer:
      'Security is built into our development process. We implement HTTPS everywhere, use Content Security Policy headers, follow OWASP guidelines, conduct regular security audits, and provide ongoing maintenance to patch vulnerabilities. All client data is encrypted at rest and in transit.',
  },
  {
    question: 'Can Aptimark migrate my existing website to a modern framework?',
    answer:
      'Yes. Legacy refactoring is one of our core services. We audit your current stack, preserve important URLs with proper redirects, migrate to modern frameworks like Next.js or Vite, and validate performance and indexing after launch. We have successfully migrated 20+ legacy systems.',
  },
  {
    question: 'Does Aptimark build mobile apps?',
    answer:
      'Yes. Aptimark develops cross-platform mobile applications using React Native and Expo. We deliver native-like performance on both iOS and Android from a single codebase. Our app development service includes App Store and Google Play Store submission support.',
  },
  {
    question: 'How can I contact Aptimark Solutions?',
    answer:
      'You can contact Aptimark Solutions by calling +91-422-456-7890, emailing hello@aptimarksolutions.in, or visiting our office at 123 Tech Park, Peelamedu, Coimbatore, Tamil Nadu 641004. You can also use the contact form on our website for a quick response within 24 hours.',
  },
  {
    question: 'What industries does Aptimark serve?',
    answer:
      'Aptimark serves clients across fintech, e-commerce, healthcare, education, SaaS, and enterprise sectors. Our solutions are tailored to each industry\'s specific requirements for compliance, performance, and user experience.',
  },
  {
    question: 'Does Aptimark provide website maintenance after launch?',
    answer:
      'Yes. We offer flexible maintenance plans that include monthly updates, security patches, performance monitoring, content updates, and technical support. Plans start from ₹5,000 per month and can be customized based on your needs.',
  },
];
