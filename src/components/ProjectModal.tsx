import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, ArrowRight, TrendingUp, Info } from 'lucide-react';
import { PortfolioProject } from '../types';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onOpenEstimator: () => void;
}

export default function ProjectModal({ project, onClose, onOpenEstimator }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden p-4">
        {/* Backdrop overlay */}
        <motion.div
          id="project-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-brand-charcoal/40 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          id="project-modal-container"
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 140 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-brand-bg rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-brand-outline/30 z-10"
        >
          {/* Header Bar */}
          <div className="absolute top-4 right-4 z-20">
            <button
              id="close-project-modal"
              onClick={onClose}
              className="p-3 bg-brand-charcoal/80 text-brand-bg hover:text-brand-primary active:scale-95 transition-all rounded-full hover:bg-brand-charcoal"
            >
              <X size={20} />
            </button>
          </div>

          <div className="overflow-y-auto flex-1">
            {/* Project Hero Banner Image */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 via-brand-charcoal/20 to-transparent" />
              <div className="absolute bottom-6 left-8">
                <span className="font-sans text-xs uppercase tracking-widest text-[#f0a878] font-bold">
                  {project.category}
                </span>
                <h3 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mt-1">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Performance metrics row */}
            <div className="bg-brand-surface-highest border-b border-brand-outline/20 px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
              {project.outcomes.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <span className="font-sans text-xs text-brand-text-muted/70 uppercase tracking-widest block font-medium">
                    {stat.label}
                  </span>
                  <span className="font-headline text-2xl lg:text-3xl font-bold text-brand-primary mt-1 block">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Main Details Body */}
            <div className="px-8 py-10 grid grid-cols-1 md:grid-cols-12 gap-10">
              {/* Left Column: Context & Challenges */}
              <div className="md:col-span-5 space-y-6">
                <div>
                  <span className="font-sans text-xs text-brand-text-muted uppercase tracking-widest font-semibold flex items-center gap-1.5 mb-2">
                    <Info size={14} /> Client Identity
                  </span>
                  <p className="font-sans font-medium text-brand-charcoal text-base">
                    {project.client}
                  </p>
                </div>

                <hr className="border-brand-outline-variant/40" />

                <div>
                  <h4 className="font-headline text-2xl text-brand-charcoal mb-3">The Challenge</h4>
                  <p className="font-sans text-brand-text-muted text-base leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              </div>

              {/* Right Column: Dynamic Solutions Engineered */}
              <div className="md:col-span-7 space-y-6">
                <h4 className="font-headline text-2.5xl text-brand-charcoal flex items-center gap-2">
                  <TrendingUp size={22} className="text-brand-primary" />
                  Solutions Engineered
                </h4>
                <div className="space-y-4">
                  {project.solutions.map((sol, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3.5 p-4 rounded-xl bg-brand-surface-low border border-brand-outline/10 text-brand-charcoal hover:border-brand-primary/30 transition-all duration-300"
                    >
                      <span className="text-brand-primary mt-0.5">
                        <CheckCircle size={18} />
                      </span>
                      <p className="font-sans text-sm leading-relaxed">
                        {sol}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Bottom CTA Banner */}
            <div className="bg-brand-surface-container px-8 py-6 border-t border-brand-outline/20 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="font-sans text-sm text-brand-text-muted text-center sm:text-left">
                Intrigued by <strong className="text-brand-charcoal font-semibold">{project.title}&apos;s</strong> performance gains? Let&apos;s evaluate your current site.
              </p>
              <button
                id="modal-cta-configure"
                onClick={() => {
                  onClose();
                  onOpenEstimator();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-primary text-white rounded-xl px-6 py-3 font-sans font-medium text-sm hover:scale-101 active:scale-99 transition-all cursor-pointer shadow-sm"
              >
                Inquire Similar Project
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
