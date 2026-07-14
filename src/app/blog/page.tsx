import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '../../components/JsonLd';
import SiteChrome from '../../components/SiteChrome';
import { breadcrumbJsonLd, SITE_NAME, SITE_URL, webPageJsonLd } from '../../seo';

const pageDescription =
  'Expert insights on SEO-friendly web development, Next.js performance optimization, digital marketing strategies, and web technology trends from Aptimark Solutions.';

export const metadata: Metadata = {
  title: 'Blog - SEO & Web Development Insights',
  description: pageDescription,
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: `Blog - SEO & Web Development Insights | ${SITE_NAME}`,
    description: pageDescription,
    url: `${SITE_URL}/blog`,
    siteName: SITE_NAME,
    type: 'website',
    images: ['/white_aptimark.png'],
  },
};

const blogPosts = [
  {
    slug: 'seo-friendly-website-guide',
    title: 'How to Build an SEO-Friendly Website in 2024',
    excerpt:
      'Learn the essential technical SEO strategies for building websites that rank. From semantic HTML to Core Web Vitals, discover what makes a website search-engine friendly.',
    category: 'Technical SEO',
    readTime: '8 min read',
    date: '2024-01-15',
  },
  {
    slug: 'nextjs-performance-optimization',
    title: 'Next.js Performance Optimization: Complete Guide',
    excerpt:
      'Master Core Web Vitals optimization in Next.js applications. Learn about image optimization, code splitting, server components, and achieving 99+ Lighthouse scores.',
    category: 'Web Development',
    readTime: '12 min read',
    date: '2024-01-10',
  },
  {
    slug: 'schema-markup-guide',
    title: 'Schema Markup Guide: Boost Your Search Visibility',
    excerpt:
      'Comprehensive guide to implementing JSON-LD schema markup for businesses, articles, FAQs, and local businesses. Improve your chances of rich snippets in Google.',
    category: 'SEO Strategy',
    readTime: '10 min read',
    date: '2024-01-05',
  },
];

export default function BlogPage() {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <SiteChrome breadcrumbItems={breadcrumbItems}>
      <JsonLd
        data={[
          webPageJsonLd({
            name: 'Blog - SEO & Web Development Insights',
            description: pageDescription,
            path: '/blog',
          }),
          breadcrumbJsonLd(breadcrumbItems),
          {
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Aptimark Solutions Blog',
            description: 'Expert insights on SEO and web development',
            url: `${SITE_URL}/blog`,
            publisher: {
              '@id': `${SITE_URL}/#organization`,
            },
          },
        ]}
      />
      <main className="min-h-screen bg-brand-bg text-brand-charcoal selection:bg-brand-primary/20 selection:text-brand-primary scroll-smooth">
        <section className="py-20 px-6 sm:px-10 max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="font-sans text-xs uppercase tracking-widest text-brand-primary font-bold mb-4 block">
              Resources & Insights
            </span>
            <h1 className="font-headline text-4xl sm:text-5xl text-brand-charcoal font-semibold tracking-tight mb-6">
              SEO & Web Development Blog
            </h1>
            <p className="font-sans text-lg text-brand-text-muted leading-relaxed">
              Expert insights on building SEO-friendly websites, optimizing performance, 
              and staying ahead with modern web technologies. Learn from our experience 
              delivering 50+ successful projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border border-brand-outline/20 shadow-sm overflow-hidden hover:-translate-y-1 hover:border-brand-primary/30 transition-all"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs bg-brand-primary/10 text-brand-primary px-2 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <span className="text-xs text-brand-text-muted">{post.readTime}</span>
                  </div>
                  <h2 className="font-headline text-xl text-brand-charcoal font-semibold mb-3">
                    <Link href={`/blog/${post.slug}`} className="hover:text-brand-primary transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="font-sans text-sm text-brand-text-muted leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider text-brand-primary hover:gap-3 transition-all"
                  >
                    Read Article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="py-16 bg-brand-surface-low">
          <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center">
            <h2 className="font-headline text-2xl sm:text-3xl text-brand-charcoal font-semibold mb-4">
              Need Help with Your SEO Strategy?
            </h2>
            <p className="font-sans text-brand-text-muted mb-8 max-w-xl mx-auto">
              Our team specializes in building SEO-friendly websites that rank. 
              Contact us for a free consultation.
            </p>
            <Link
              href="/contact"
              className="bg-brand-primary text-white px-8 py-4 rounded-lg font-sans font-bold hover:bg-brand-primary/90 transition-colors"
            >
              Get a Free SEO Audit
            </Link>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
