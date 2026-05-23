import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Flame, ArrowRight, ShieldCheck } from 'lucide-react';
import { Service } from '../types';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onSelectForProposal: (serviceTitle: string) => void;
}

export default function ServiceModal({ service, onClose, onSelectForProposal }: ServiceModalProps) {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden">
        {/* Backdrop overlay */}
        <motion.div
          id="service-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-brand-charcoal/40 backdrop-blur-md"
        />

        {/* Sliding Panel */}
        <motion.div
          id="service-modal-panel"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 120 }}
          className="relative w-full max-w-2xl h-full bg-brand-bg shadow-2xl flex flex-col overflow-y-auto border-l border-brand-outline/30"
        >
          {/* Header */}
          <div className="sticky top-0 z-10 flex justify-between items-center px-8 py-6 bg-brand-bg/95 backdrop-blur-sm border-b border-brand-outline/20">
            <div>
              <span className="font-sans text-xs uppercase tracking-widest text-brand-primary font-bold">
                {service.badge || "Capability Deep-Dive"}
              </span>
              <h3 className="font-headline text-3xl font-medium mt-1 text-brand-charcoal">
                {service.title}
              </h3>
            </div>
            <button
              id="close-service-modal"
              onClick={onClose}
              className="p-2 mr-[-8px] hover:text-brand-primary text-brand-text-muted transition-colors rounded-full hover:bg-brand-surface-low"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="px-8 py-10 flex-1 space-y-12">
            <div>
              <h4 className="font-headline text-2xl text-brand-charcoal mb-4">Core Philosophy</h4>
              <p className="font-sans text-lg text-brand-text-muted leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Structured Process Checklist */}
            <div>
              <h4 className="font-headline text-2xl text-brand-charcoal mb-6">Our Engineered Workflow</h4>
              <div className="grid grid-cols-1 gap-4">
                {service.detailedProcess.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-4 rounded-xl bg-brand-surface-low border border-brand-outline/10"
                  >
                    <div className="text-brand-primary mt-1">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <span className="font-sans text-xs text-brand-text-muted/60 font-semibold uppercase tracking-wide">
                        Phase 0{idx + 1}
                      </span>
                      <p className="font-sans text-brand-charcoal text-base mt-0.5">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Standard Tech stack */}
            <div>
              <h4 className="font-headline text-2xl text-brand-charcoal mb-4">Standard Stack Pairing</h4>
              <div className="flex flex-wrap gap-2">
                {service.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-sans text-xs font-semibold px-3 py-1.5 rounded-full bg-brand-surface-highest text-brand-charcoal border border-brand-outline/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Standard Pricing Guide */}
            <div className="p-6 rounded-2xl bg-brand-surface-container border border-brand-outline/40 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <span className="font-sans text-xs text-brand-text-muted uppercase tracking-widest font-semibold block">
                  Project Estimate Basis
                </span>
                <span className="font-headline text-3xl font-semibold text-brand-charcoal mt-1 block">
                  Starts from ${service.estPrice.toLocaleString()}
                </span>
                <span className="font-sans text-xs text-brand-text-muted/70 mt-1 block">
                  Actual quote tailored dynamically according to scale.
                </span>
              </div>
              <button
                id="select-service-proposal-btn"
                onClick={() => {
                  onSelectForProposal(service.title);
                  onClose();
                }}
                className="w-full md:w-auto flex items-center justify-center gap-3 bg-brand-primary text-white px-6 py-3.5 rounded-xl font-sans font-medium text-sm hover:scale-101 active:scale-99 transition-all hover:bg-brand-primary/95 shadow-sm hover:shadow-brand-primary/10 cursor-pointer"
              >
                <Flame size={16} />
                Inquire Online
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
