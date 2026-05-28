"use client";

import Link from 'next/link';

const routes = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'Process' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

export default function RouteLinks({ current }: { current: string }) {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-8">
      <div className="flex flex-wrap gap-3 items-center border-t border-brand-outline-variant/30 pt-6">
        <span className="font-sans text-[11px] uppercase tracking-widest text-brand-text-muted font-bold mr-2">
          Explore Pages
        </span>
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={`font-sans text-xs uppercase tracking-widest font-bold transition-all hover:text-brand-primary ${
              current === route.href.slice(1) || (current === 'home' && route.href === '/')
                ? 'text-brand-primary'
                : 'text-brand-charcoal/70'
            }`}
          >
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
