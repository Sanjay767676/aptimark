"use client";

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

import { PROCESS_DATA } from '../../data';

export default function ProcessPageContent() {
  const [activeProcessStep, setActiveProcessStep] = useState<string>(PROCESS_DATA[0].id);

  return (
    <main className="min-h-screen bg-brand-bg text-brand-charcoal selection:bg-brand-primary/20 selection:text-brand-primary scroll-smooth">
      <section id="methodology" className="py-28 bg-brand-surface-low overflow-hidden">
        <div className="px-6 sm:px-10 max-w-7xl mx-auto mb-16 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 text-left">
          <div className="max-w-xl">
            <span className="font-sans text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">
              Services
            </span>
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-brand-charcoal font-semibold tracking-tight">
              Crafting with <br />disciplined intent.
            </h1>
          </div>
          <p className="font-sans text-brand-text-muted text-base max-w-sm leading-relaxed">
            By shifting from ungrounded templates to strict milestones, we guarantee fluid, deterministic software
            deployment.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 mb-8 flex flex-wrap gap-2.5">
          {PROCESS_DATA.map((step) => (
            <button
              id={`tab-step-${step.id}`}
              key={step.id}
              onClick={() => setActiveProcessStep(step.id)}
              className={`px-5 py-2.5 rounded-full font-sans text-xs font-semibold uppercase tracking-wider border transition-all ${
                activeProcessStep === step.id
                  ? 'bg-brand-primary text-white border-brand-primary'
                  : 'bg-white text-brand-text-muted border-brand-outline/35 hover:bg-brand-surface-low'
              }`}
            >
              Step {step.numberString} • {step.title}
            </button>
          ))}
        </div>

        <div className="px-6 sm:px-10 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {PROCESS_DATA.map((step) => {
              if (step.id !== activeProcessStep) return null;
              return (
                <motion.div
                  id={`methodology-pane-${step.id}`}
                  key={step.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-brand-outline/25 p-6 sm:p-10 rounded-3xl shadow-sm"
                >
                  <div className="lg:col-span-5 relative group overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-[4/5] h-full max-h-[380px] lg:max-h-[480px]">
                    <img
                      src={step.image}
                      alt={step.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-103 select-none"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                      <span className="font-sans text-xs uppercase tracking-widest text-[#f0a878] font-bold">
                        Standard Timeframe
                      </span>
                      <p className="font-headline text-xl italic font-medium">{step.timeframe}</p>
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-6 text-left">
                    <div>
                      <span className="font-headline text-6xl sm:text-7xl font-extrabold text-[#c2652a]/15 block leading-none">
                        {step.numberString}
                      </span>
                      <h2 className="font-headline text-3xl sm:text-4xl text-brand-charcoal font-semibold mt-3 sm:mt-4">
                        {step.title}
                      </h2>
                    </div>
                    <p className="font-sans text-brand-charcoal text-base sm:text-lg leading-relaxed">
                      {step.description}
                    </p>
                    <p className="font-sans text-brand-text-muted text-sm sm:text-base leading-relaxed bg-brand-surface-low p-5 rounded-2xl border border-brand-outline-variant/30 italic">
                      &ldquo;{step.detailedNotes}&rdquo;
                    </p>

                    <div className="pt-4 flex flex-wrap gap-4 items-center">
                      <span className="font-sans text-xs text-brand-text-muted font-bold uppercase tracking-wider">
                        Methodology Checklist:
                      </span>
                      <div className="flex gap-4 flex-wrap">
                        {['100% Transparency', 'Continuous Sign-offs', 'Staging Environments'].map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center gap-1.5 text-xs text-brand-charcoal font-semibold bg-brand-surface-highest px-3 py-1.5 rounded-full select-none"
                          >
                            <CheckCircle size={12} className="text-brand-primary" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      <section aria-labelledby="process-map-heading" className="py-24 px-6 sm:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-brand-outline-variant/35 pt-14">
          <div className="lg:col-span-4 text-left">
            <span className="font-sans text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block">
              Workflow Map
            </span>
            <h2 id="process-map-heading" className="font-headline text-3.5xl sm:text-4.5xl text-brand-charcoal font-semibold">
              A crawlable view of the full delivery process.
            </h2>
          </div>

          <ol className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROCESS_DATA.map((step) => (
              <li key={step.id} className="bg-white border border-brand-outline/25 rounded-2xl p-6 text-left shadow-sm">
                <span className="font-headline text-4xl font-extrabold text-[#c2652a]/25 block">{step.numberString}</span>
                <h3 className="font-headline text-2xl text-brand-charcoal font-semibold mt-3 mb-3">{step.title}</h3>
                <p className="font-sans text-brand-text-muted text-sm leading-relaxed">{step.description}</p>
                <p className="font-sans text-brand-charcoal text-sm leading-relaxed mt-4">{step.detailedNotes}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

    </main>
  );
}
