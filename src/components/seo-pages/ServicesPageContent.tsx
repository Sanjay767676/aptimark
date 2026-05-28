"use client";

import { useState } from 'react';
import { ArrowRight, Globe, RefreshCw, Search, Settings, Smartphone } from 'lucide-react';

import { SERVICES_DATA } from '../../data';
import { Service } from '../../types';
import ServiceModal from '../ServiceModal';
import RouteLinks from './RouteLinks';

const renderServiceIcon = (iconName: string, className = 'text-brand-primary text-3xl') => {
  switch (iconName) {
    case 'Globe':
      return <Globe className={className} />;
    case 'Search':
      return <Search className={className} />;
    case 'RefreshCw':
      return <RefreshCw className={className} />;
    case 'Smartphone':
      return <Smartphone className={className} />;
    case 'Settings':
      return <Settings className={className} />;
    default:
      return <Globe className={className} />;
  }
};

export default function ServicesPageContent() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <main className="min-h-screen bg-brand-bg text-brand-charcoal selection:bg-brand-primary/20 selection:text-brand-primary scroll-smooth">
      <section id="capabilities" className="py-28 px-6 sm:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-brand-outline-variant/30 pb-10">
          <div className="max-w-xl text-left">
            <span className="font-sans text-xs uppercase tracking-widest text-[#c2652a] font-bold mb-3 block">
              About Aptimark
            </span>
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-brand-charcoal font-semibold tracking-tight">
              Digital architecture built
              <br />for growth.
            </h1>
          </div>
          <p className="font-sans text-brand-text-muted max-w-sm text-base leading-relaxed text-left md:text-right">
            A comprehensive suite of digital services designed to scale with your ambition. Hand-crafted, tested,
            and fine-tuned for high benchmark scores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div
            id="service-card-web-dev"
            onClick={() => setSelectedService(SERVICES_DATA[0])}
            className="md:col-span-7 group cursor-pointer"
          >
            <div className="liquid-glass rounded-2xl p-8 sm:p-10 h-[460px] relative overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-brand-outline/20 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  {renderServiceIcon('Globe')}
                  <span className="text-xs uppercase bg-white px-3 py-1 rounded-full text-brand-primary font-bold border border-brand-outline/25 select-none">
                    {SERVICES_DATA[0].badge}
                  </span>
                </div>
                <h2 className="font-headline text-3.5xl sm:text-4xl text-brand-charcoal font-semibold mt-6 mb-3">
                  {SERVICES_DATA[0].title}
                </h2>
                <p className="font-sans text-brand-text-muted text-base max-w-md leading-relaxed">
                  {SERVICES_DATA[0].description}
                </p>
              </div>

              <div className="relative mt-4">
                <img
                  src={SERVICES_DATA[0].image}
                  alt="High end workspace layout"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-10/12 sm:w-2/3 ml-auto rounded-tl-2xl shadow-2xl transition-transform duration-500 group-hover:scale-102 hover:shadow-brand-charcoal/10"
                />
              </div>

              <div className="absolute bottom-6 left-10 flex items-center gap-2 font-sans text-xs uppercase tracking-widest font-bold text-brand-primary group-hover:gap-4 transition-all pb-1 border-b border-brand-primary">
                Explore Process &amp; Stack <ArrowRight size={14} />
              </div>
            </div>
          </div>

          <div
            id="service-card-seo"
            onClick={() => setSelectedService(SERVICES_DATA[1])}
            className="md:col-span-5 cursor-pointer group"
          >
            <div className="bg-brand-surface-high rounded-2xl p-8 sm:p-10 h-[460px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 border border-brand-outline-variant/40">
              <div className="space-y-6">
                {renderServiceIcon('Search', 'text-brand-rose text-3xl')}
                <h2 className="font-headline text-3.5xl text-brand-charcoal font-semibold">{SERVICES_DATA[1].title}</h2>
                <p className="font-sans text-brand-text-muted text-base leading-relaxed">
                  {SERVICES_DATA[1].description}
                </p>
              </div>

              <div className="space-y-4">
                <blockquote className="font-sans text-xs italic text-brand-text-muted/80 border-l border-brand-primary/50 pl-3">
                  &quot;SEO is not a spray-on feature; it&apos;s an architectural intent built starting day one.&quot;
                </blockquote>
                <div className="flex justify-between items-center text-xs font-sans uppercase font-bold text-brand-rose tracking-wider pt-2 border-t border-brand-outline-variant/50">
                  <span>Explore Strategy</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>
          </div>

          <div
            id="service-card-refactoring"
            onClick={() => setSelectedService(SERVICES_DATA[2])}
            className="md:col-span-4 cursor-pointer group"
          >
            <div className="bg-brand-primary text-brand-bg rounded-2xl p-8 sm:p-10 h-[420px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-2">
              <div className="space-y-6">
                {renderServiceIcon('RefreshCw', 'text-white text-3xl')}
                <h2 className="font-headline text-3.5xl text-white font-semibold">{SERVICES_DATA[2].title}</h2>
                <p className="font-sans text-white/80 text-sm sm:text-base leading-relaxed">
                  {SERVICES_DATA[2].description}
                </p>
              </div>

              <div className="flex justify-between items-center text-xs font-sans uppercase font-bold text-white tracking-wider border-t border-white/20 pt-4">
                <span>Evaluate Migration</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
            <div
              id="service-card-app-dev"
              onClick={() => setSelectedService(SERVICES_DATA[3])}
              className="liquid-glass rounded-2xl p-8 sm:p-10 h-[420px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 cursor-pointer group border border-brand-outline/20"
            >
              <div className="space-y-6">
                {renderServiceIcon('Smartphone')}
                <h3 className="font-headline text-2.5xl font-semibold text-brand-charcoal">{SERVICES_DATA[3].title}</h3>
                <p className="font-sans text-sm sm:text-base text-brand-text-muted leading-relaxed">
                  {SERVICES_DATA[3].description}
                </p>
              </div>

              <div className="flex justify-between items-center text-xs font-sans uppercase font-bold text-brand-primary tracking-wider border-t border-brand-outline/10 pt-4">
                <span>View Stack Details</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-all" />
              </div>
            </div>

            <div
              id="service-card-custom-it"
              onClick={() => setSelectedService(SERVICES_DATA[4])}
              className="bg-brand-surface-container rounded-2xl p-8 sm:p-10 h-[420px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 cursor-pointer group border border-brand-outline-variant/35"
            >
              <div className="space-y-6">
                {renderServiceIcon('Settings')}
                <h3 className="font-headline text-2.5xl font-semibold text-brand-charcoal">{SERVICES_DATA[4].title}</h3>
                <p className="font-sans text-sm sm:text-base text-brand-text-muted leading-relaxed">
                  {SERVICES_DATA[4].description}
                </p>
              </div>

              <div className="flex justify-between items-center text-xs font-sans uppercase font-bold text-brand-charcoal tracking-wider border-t border-brand-outline-variant/40 pt-4">
                <span>Explore Solutions</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <RouteLinks current="services" />

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectForProposal={() => setSelectedService(null)}
      />
    </main>
  );
}
