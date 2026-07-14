import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '../../../components/JsonLd';
import SiteChrome from '../../../components/SiteChrome';
import { breadcrumbJsonLd, SITE_NAME, SITE_URL, webPageJsonLd } from '../../../seo';

const pageDescription =
  'Complete guide to building SEO-friendly websites. Learn semantic HTML, Core Web Vitals optimization, schema markup, and technical best practices for ranking on Google.';

export const metadata: Metadata = {
  title: 'How to Build an SEO-Friendly Website in 2024 - Complete Guide',
  description: pageDescription,
  alternates: {
    canonical: `${SITE_URL}/blog/seo-friendly-website-guide`,
  },
  openGraph: {
    title: `How to Build an SEO-Friendly Website in 2024 | ${SITE_NAME}`,
    description: pageDescription,
    url: `${SITE_URL}/blog/seo-friendly-website-guide`,
    siteName: SITE_NAME,
    type: 'article',
    publishedTime: '2024-01-15T00:00:00.000Z',
    authors: ['Aptimark Solutions'],
    images: ['/white_aptimark.png'],
  },
};

export default function SeoFriendlyWebsiteGuide() {
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'SEO-Friendly Website Guide', path: '/blog/seo-friendly-website-guide' },
  ];

  return (
    <SiteChrome breadcrumbItems={breadcrumbItems}>
      <JsonLd
        data={[
          webPageJsonLd({
            name: 'How to Build an SEO-Friendly Website in 2024',
            description: pageDescription,
            path: '/blog/seo-friendly-website-guide',
          }),
          breadcrumbJsonLd(breadcrumbItems),
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'How to Build an SEO-Friendly Website in 2024',
            description: pageDescription,
            author: {
              '@type': 'Organization',
              name: SITE_NAME,
              url: SITE_URL,
            },
            publisher: {
              '@id': `${SITE_URL}/#organization`,
            },
            datePublished: '2024-01-15',
            dateModified: '2024-01-15',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${SITE_URL}/blog/seo-friendly-website-guide`,
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What makes a website SEO-friendly?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'An SEO-friendly website uses clean semantic HTML, fast loading speeds, mobile-responsive design, proper meta tags, structured data markup, clean URL structures, and high-quality content. It should be easily crawlable by search engines and provide excellent user experience.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I optimize my website for Google?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Optimize your website for Google by improving Core Web Vitals (LCP, FID, CLS), using semantic HTML tags, implementing schema markup, creating quality content, building internal links, ensuring mobile responsiveness, and submitting a sitemap to Google Search Console.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the best framework for SEO?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Next.js is widely considered the best framework for SEO because it offers server-side rendering (SSR), static site generation (SSG), automatic image optimization, built-in routing, and clean HTML output that search engines can easily crawl and index.',
                },
              },
            ],
          },
        ]}
      />
      <main className="min-h-screen bg-brand-bg text-brand-charcoal selection:bg-brand-primary/20 selection:text-brand-primary scroll-smooth">
        <article className="py-20 px-6 sm:px-10 max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs bg-brand-primary/10 text-brand-primary px-2 py-1 rounded-full font-medium">
                Technical SEO
              </span>
              <span className="text-xs text-brand-text-muted">8 min read</span>
            </div>
            <h1 className="font-headline text-4xl sm:text-5xl text-brand-charcoal font-semibold tracking-tight mb-4">
              How to Build an SEO-Friendly Website in 2024
            </h1>
            <p className="font-sans text-lg text-brand-text-muted leading-relaxed">
              A comprehensive guide to building websites that rank. Learn the technical 
              foundations, content strategies, and performance optimizations that search 
              engines reward.
            </p>
          </header>

          {/* Direct Answer for Featured Snippet */}
          <div className="bg-brand-surface-low rounded-2xl p-6 mb-12 border border-brand-outline-variant/30">
            <p className="font-sans text-base text-brand-charcoal leading-relaxed speakable-answer">
              <strong>An SEO-friendly website</strong> is built with clean semantic HTML, fast loading speeds 
              (under 2.5 seconds), mobile-responsive design, proper meta tags, structured data markup, clean 
              URL structures, and high-quality content. It should be easily crawlable by search engines and 
              provide excellent user experience to achieve higher rankings on Google.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="font-headline text-3xl text-brand-charcoal font-semibold mt-12 mb-4">
              What Makes a Website SEO-Friendly?
            </h2>
            <p className="font-sans text-brand-text-muted leading-relaxed mb-6">
              An SEO-friendly website is designed and developed to help search engines find, 
              crawl, understand, and rank your pages. Here are the key elements:
            </p>

            <h3 className="font-headline text-2xl text-brand-charcoal font-semibold mt-8 mb-3">
              1. Clean Semantic HTML Structure
            </h3>
            <p className="font-sans text-brand-text-muted leading-relaxed mb-4">
              Use proper heading hierarchy (H1-H6), semantic elements like{' '}
              <code className="bg-brand-surface-low px-1 rounded">&lt;header&gt;</code>,{' '}
              <code className="bg-brand-surface-low px-1 rounded">&lt;nav&gt;</code>,{' '}
              <code className="bg-brand-surface-low px-1 rounded">&lt;main&gt;</code>, and{' '}
              <code className="bg-brand-surface-low px-1 rounded">&lt;article&gt;</code> to 
              help search engines understand your content structure.
            </p>

            <h3 className="font-headline text-2xl text-brand-charcoal font-semibold mt-8 mb-3">
              2. Core Web Vitals Optimization
            </h3>
            <p className="font-sans text-brand-text-muted leading-relaxed mb-4">
              Google uses Core Web Vitals as ranking factors. Focus on:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-brand-text-muted">
              <li><strong>Largest Contentful Paint (LCP):</strong> Under 2.5 seconds</li>
              <li><strong>First Input Delay (FID):</strong> Under 100 milliseconds</li>
              <li><strong>Cumulative Layout Shift (CLS):</strong> Under 0.1</li>
            </ul>

            <h3 className="font-headline text-2xl text-brand-charcoal font-semibold mt-8 mb-3">
              3. Mobile-First Responsive Design
            </h3>
            <p className="font-sans text-brand-text-muted leading-relaxed mb-4">
              With Google&apos;s mobile-first indexing, your website must work flawlessly on 
              all devices. Use responsive design, touch-friendly navigation, and ensure 
              text is readable without zooming.
            </p>

            <h3 className="font-headline text-2xl text-brand-charcoal font-semibold mt-8 mb-3">
              4. Schema Markup Implementation
            </h3>
            <p className="font-sans text-brand-text-muted leading-relaxed mb-4">
              Structured data helps search engines understand your content and can earn 
              you rich snippets in search results. Implement Organization, Article, FAQ, 
              and LocalBusiness schemas.
            </p>

            <h3 className="font-headline text-2xl text-brand-charcoal font-semibold mt-8 mb-3">
              5. Fast Loading Speed
            </h3>
            <p className="font-sans text-brand-text-muted leading-relaxed mb-4">
              Optimize images, minify CSS and JavaScript, use CDN delivery, implement 
              lazy loading, and leverage browser caching. Aim for under 2.5 seconds 
              load time on mobile.
            </p>

            <h2 className="font-headline text-3xl text-brand-charcoal font-semibold mt-12 mb-4">
              Technical Checklist for SEO-Friendly Websites
            </h2>
            <div className="bg-white rounded-2xl border border-brand-outline/20 p-6 mb-8">
              <ul className="space-y-3">
                {[
                  'Unique, descriptive title tags (50-60 characters)',
                  'Compelling meta descriptions (150-160 characters)',
                  'One H1 tag per page with primary keyword',
                  'Logical heading hierarchy (H1 > H2 > H3)',
                  'Clean URL structure with keywords',
                  'XML sitemap submitted to Google Search Console',
                  'Robots.txt allowing search engine crawling',
                  'Canonical tags preventing duplicate content',
                  'Image alt text describing content',
                  'Internal linking between related pages',
                  'HTTPS security certificate',
                  'Mobile-responsive design',
                  'Fast loading speed (under 2.5s)',
                  'Schema markup implementation',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-5 h-5 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                    </span>
                    <span className="font-sans text-brand-text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="font-headline text-3xl text-brand-charcoal font-semibold mt-12 mb-4">
              How Do I Optimize My Website for Google?
            </h2>
            <p className="font-sans text-brand-text-muted leading-relaxed mb-4">
              To optimize your website for Google, focus on these key areas:
            </p>
            <ol className="list-decimal list-inside space-y-3 mb-6 text-brand-text-muted">
              <li><strong>Technical SEO:</strong> Fix crawl errors, optimize robots.txt, submit sitemap</li>
              <li><strong>On-Page SEO:</strong> Optimize titles, meta descriptions, headings, content</li>
              <li><strong>Content Quality:</strong> Create comprehensive, original, valuable content</li>
              <li><strong>User Experience:</strong> Improve page speed, mobile usability, navigation</li>
              <li><strong>Authority Building:</strong> Earn quality backlinks, build brand mentions</li>
            </ol>

            <h2 className="font-headline text-3xl text-brand-charcoal font-semibold mt-12 mb-4">
              What is the Best Framework for SEO?
            </h2>
            <p className="font-sans text-brand-text-muted leading-relaxed mb-4">
              <strong>Next.js</strong> is widely considered the best framework for SEO because it offers:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-brand-text-muted">
              <li>Server-side rendering (SSR) for fast initial page loads</li>
              <li>Static site generation (SSG) for blazing-fast performance</li>
              <li>Automatic image optimization with next/image</li>
              <li>Built-in routing and code splitting</li>
              <li>Clean, semantic HTML output</li>
              <li>API routes for dynamic content</li>
              <li>Middleware for redirects and rewrites</li>
            </ul>

            <div className="bg-brand-primary/5 rounded-2xl p-6 border border-brand-primary/20 mt-8">
              <h3 className="font-headline text-xl text-brand-charcoal font-semibold mb-3">
                Pro Tip from Aptimark
              </h3>
              <p className="font-sans text-brand-text-muted leading-relaxed">
                At Aptimark Solutions, we build every website with SEO-first architecture. 
                Our average project achieves a 99+ Lighthouse score and loads in under 0.4 
                seconds. We implement semantic HTML, structured data, and performance 
                optimization from day one—not as an afterthought.
              </p>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-12 border-t border-brand-outline-variant/30">
            <h2 className="font-headline text-2xl text-brand-charcoal font-semibold mb-6">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/blog/nextjs-performance-optimization"
                className="bg-white rounded-xl border border-brand-outline/20 p-6 hover:-translate-y-1 hover:border-brand-primary/30 transition-all"
              >
                <span className="text-xs text-brand-primary font-medium">Web Development</span>
                <h3 className="font-headline text-lg text-brand-charcoal font-semibold mt-2 mb-2">
                  Next.js Performance Optimization: Complete Guide
                </h3>
                <p className="font-sans text-sm text-brand-text-muted">
                  Master Core Web Vitals optimization in Next.js applications.
                </p>
              </Link>
              <Link
                href="/blog/schema-markup-guide"
                className="bg-white rounded-xl border border-brand-outline/20 p-6 hover:-translate-y-1 hover:border-brand-primary/30 transition-all"
              >
                <span className="text-xs text-brand-primary font-medium">SEO Strategy</span>
                <h3 className="font-headline text-lg text-brand-charcoal font-semibold mt-2 mb-2">
                  Schema Markup Guide: Boost Your Search Visibility
                </h3>
                <p className="font-sans text-sm text-brand-text-muted">
                  Comprehensive guide to implementing JSON-LD schema markup.
                </p>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-brand-surface-low rounded-2xl p-8 text-center border border-brand-outline-variant/30">
            <h2 className="font-headline text-2xl text-brand-charcoal font-semibold mb-3">
              Need Help Building an SEO-Friendly Website?
            </h2>
            <p className="font-sans text-brand-text-muted mb-6 max-w-lg mx-auto">
              Our team specializes in building high-performance, SEO-friendly websites 
              that rank. Contact us for a free consultation.
            </p>
            <Link
              href="/contact"
              className="bg-brand-primary text-white px-8 py-4 rounded-lg font-sans font-bold hover:bg-brand-primary/90 transition-colors"
            >
              Get a Free SEO Audit
            </Link>
          </div>
        </article>
      </main>
    </SiteChrome>
  );
}
