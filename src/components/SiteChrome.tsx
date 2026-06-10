import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

import { NAVIGATION_LINKS } from '../seo';

type SiteChromeProps = {
  children: ReactNode;
  breadcrumbItems?: Array<{ name: string; path: string }>;
};

export default function SiteChrome({ children, breadcrumbItems = [] }: SiteChromeProps) {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-charcoal selection:bg-brand-primary/20 selection:text-brand-primary">
      <header>
        <nav role="navigation" aria-label="Main site navigation" className="nav-liquid-glass w-full">
          <div className="relative z-10 flex justify-between items-center px-6 sm:px-10 py-5 max-w-7xl mx-auto gap-6">
            <Link
              href="/"
              className="flex items-center gap-3 font-headline text-2xl font-bold tracking-tight text-brand-charcoal select-none"
            >
              <img src="/favicon.png" alt="Aptimark Solutions" className="w-9 h-9 object-contain" />
              <span>APTIMARK</span>
            </Link>

            <div className="hidden md:flex gap-8 items-center">
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm tracking-wide font-medium transition-all hover:text-brand-primary cursor-pointer pb-1 border-b-2 text-brand-text-muted border-transparent hover:border-brand-primary/35"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="ml-4 bg-brand-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:scale-101 active:scale-99 transition-all hover:bg-brand-primary/95 cursor-pointer shadow-sm shadow-brand-primary/10 inline-flex items-center gap-2"
              >
                Contact Us <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <div className="pt-24">
        {breadcrumbItems.length > 0 && (
          <nav aria-label="Breadcrumb" className="px-6 sm:px-10 max-w-7xl mx-auto pt-8">
            <ol className="flex flex-wrap items-center gap-2 font-sans text-xs uppercase tracking-widest text-brand-text-muted">
              {breadcrumbItems.map((item, index) => {
                const isLast = index === breadcrumbItems.length - 1;
                return (
                  <li key={item.path} className="inline-flex items-center gap-2">
                    {isLast ? (
                      <span className="font-bold text-brand-charcoal">{item.name}</span>
                    ) : (
                      <Link href={item.path} className="hover:text-brand-primary transition-colors">
                        {item.name}
                      </Link>
                    )}
                    {!isLast && <span aria-hidden="true">/</span>}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        {children}
      </div>

      <footer className="w-full bg-brand-surface-low border-t border-brand-outline-variant/50 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 sm:px-12 py-16 gap-8 max-w-7xl mx-auto">
          <div className="text-center md:text-left space-y-2">
            <span className="flex items-center justify-center md:justify-start gap-2.5 font-headline text-2xl font-bold tracking-tight text-brand-charcoal select-none">
              <img src="/favicon.png" alt="Aptimark Solutions" className="w-7 h-7 object-contain" />
              <span>APTIMARK</span>
            </span>
            <p className="font-sans text-xs uppercase tracking-widest text-brand-text-muted/80 block">
              &copy; {new Date().getFullYear()} APTIMARK Solutions. Crafted with sun-baked precision.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 justify-center select-none">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                className="font-sans text-xs uppercase tracking-widest text-[#605850]/80 font-bold hover:text-brand-primary transition-all hover:translate-x-0.5 inline-block"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
