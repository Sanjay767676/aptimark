"use client";

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

import { PORTFOLIO_DATA } from '../../data';
import { PortfolioProject } from '../../types';
import ProjectModal from '../ProjectModal';

export default function PortfolioPageContent() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  return (
    <main className="min-h-screen bg-brand-bg text-brand-charcoal selection:bg-brand-primary/20 selection:text-brand-primary scroll-smooth">
      <section id="portfolio" className="py-28 px-6 sm:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-4">
          <span className="font-sans text-xs uppercase tracking-widest text-[#c2652a] font-bold block">
            Pragmatic Mastery
          </span>
          <h1 className="font-headline text-5xl sm:text-6xl text-brand-charcoal font-bold tracking-tight">
            Selected Works
          </h1>
          <p className="font-sans text-base sm:text-lg text-brand-text-muted max-w-xl mx-auto leading-relaxed">
            Proof that performance and digital beauty can coexist seamlessly. No compromises on core web speed.
          </p>
        </div>

        <div className="space-y-32">
          {PORTFOLIO_DATA.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                <div
                  className={`lg:col-span-7 relative overflow-hidden rounded-3xl group shadow-md border border-brand-outline/20 aspect-video ${
                    !isEven ? 'lg:order-2' : ''
                  }`}
                >
                  <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500 pointer-events-none" />
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-102 select-none"
                  />
                </div>

                <div className={`lg:col-span-5 text-left px-2 sm:px-4 ${!isEven ? 'lg:order-1' : ''}`}>
                  <span className="font-sans text-xs uppercase tracking-widest font-bold text-brand-primary mb-4 block">
                    {project.category}
                  </span>
                  <h2 className="font-headline text-3.5xl sm:text-4.5xl text-brand-charcoal font-bold mb-4">
                    {project.title}
                  </h2>
                  <p className="font-sans text-brand-text-muted text-base sm:text-lg mb-8 leading-relaxed">
                    {project.challenge.slice(0, 150)}... Our digital practitioners re-engineered the frontlines to
                    secure outstanding loading and aesthetic scores.
                  </p>

                  <div className="grid grid-cols-2 gap-4 max-w-sm mb-8 border-l border-brand-primary/25 pl-4 bg-brand-surface-low/30 py-2.5 rounded-r-xl">
                    {project.outcomes.slice(0, 2).map((item, index) => (
                      <div key={index}>
                        <span className="font-sans text-[11px] text-brand-text-muted block uppercase tracking-wider">
                          {item.label}
                        </span>
                        <span className="font-headline text-xl sm:text-2xl font-bold text-brand-charcoal">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    id={`view-case-study-${project.id}`}
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider text-brand-charcoal hover:text-brand-primary transition-all cursor-pointer group"
                  >
                    View Case Study
                    <span className="pb-0.5 border-b-2 border-brand-primary flex items-center gap-1 group-hover:gap-2.5 transition-all">
                      Analysis Specs <ArrowRight size={14} className="text-brand-primary" />
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="portfolio-detail-heading" className="px-6 sm:px-10 pb-28 max-w-7xl mx-auto">
        <div className="border-t border-brand-outline-variant/35 pt-14">
          <div className="max-w-3xl text-left mb-12">
            <span className="font-sans text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">
              Case Study Signals
            </span>
            <h2 id="portfolio-detail-heading" className="font-headline text-3.5xl sm:text-4.5xl text-brand-charcoal font-semibold">
              Outcomes, constraints, and implementation details.
            </h2>
          </div>

          <div className="space-y-10">
            {PORTFOLIO_DATA.map((project) => (
              <article key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white border border-brand-outline/25 rounded-2xl p-6 sm:p-8 text-left shadow-sm">
                <div className="lg:col-span-4">
                  <span className="font-sans text-xs uppercase tracking-widest text-brand-primary font-bold block mb-3">
                    {project.category}
                  </span>
                  <h3 className="font-headline text-3xl text-brand-charcoal font-semibold">{project.title}</h3>
                  <p className="font-sans text-brand-text-muted text-sm leading-relaxed mt-4">{project.challenge}</p>
                </div>

                <div className="lg:col-span-5">
                  <h4 className="font-sans text-xs uppercase tracking-widest text-brand-charcoal font-bold mb-4">
                    What Aptimark Delivered
                  </h4>
                  <ul className="space-y-3">
                    {project.solutions.map((solution) => (
                      <li key={solution} className="font-sans text-sm text-brand-text-muted leading-relaxed border-l border-brand-primary/35 pl-4">
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-3">
                  <h4 className="font-sans text-xs uppercase tracking-widest text-brand-charcoal font-bold mb-4">
                    Reported Outcomes
                  </h4>
                  <dl className="grid grid-cols-1 gap-4">
                    {project.outcomes.map((outcome) => (
                      <div key={outcome.label} className="border-b border-brand-outline-variant/35 pb-3">
                        <dt className="font-sans text-[11px] text-brand-text-muted uppercase tracking-wider">{outcome.label}</dt>
                        <dd className="font-headline text-2xl font-bold text-brand-charcoal">{outcome.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} onOpenEstimator={() => setSelectedProject(null)} />
    </main>
  );
}
