"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, ShieldCheck, Calculator, Loader2, Sparkles, AlertCircle, History } from 'lucide-react';
import { SERVICES_DATA } from '../data';

interface ProjectConfiguratorProps {
  initialSelectedServices?: string[];
  onSubmissionSuccess?: () => void;
}

export default function ProjectConfigurator({ initialSelectedServices = [], onSubmissionSuccess }: ProjectConfiguratorProps) {
  // Configurator state
  const [selectedServices, setSelectedServices] = useState<string[]>(initialSelectedServices);
  const [urgency, setUrgency] = useState<'relaxed' | 'balanced' | 'urgent'>('balanced');
  const [complexity, setComplexity] = useState<'mvp' | 'standard' | 'enterprise'>('standard');
  
  // Lead details
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');

  // UI state
  const [isLoading, setIsLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState<any | null>(null);
  const [formError, setFormError] = useState('');
  const [pastSubmissions, setPastSubmissions] = useState<any[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  // Synchronize initial selected services
  useEffect(() => {
    if (initialSelectedServices.length > 0) {
      setSelectedServices(initialSelectedServices);
    }
  }, [initialSelectedServices]);

  // Load history from LocalStorage
  useEffect(() => {
    const stored = localStorage.getItem('aptimark_proposals');
    if (stored) {
      try {
        setPastSubmissions(JSON.parse(stored));
      } catch (e) {
        console.error("Could not parse proposals", e);
      }
    }
  }, []);

  const handleServiceToggle = (title: string) => {
    if (selectedServices.includes(title)) {
      setSelectedServices(prev => prev.filter(t => t !== title));
    } else {
      setSelectedServices(prev => [...prev, title]);
    }
  };

  // Compute pricing
  const calculateEstimate = () => {
    if (selectedServices.length === 0) return 0;
    
    // Sum base costs of matching services
    const baseSum = selectedServices.reduce((sum, title) => {
      const match = SERVICES_DATA.find(s => s.title === title);
      return sum + (match ? match.estPrice : 5000);
    }, 0);

    // Timeline modifier
    const urgencyMultiplier = {
      relaxed: 0.9,
      balanced: 1.0,
      urgent: 1.25
    }[urgency];

    // Complexity modifier
    const complexityMultiplier = {
      mvp: 0.8,
      standard: 1.0,
      enterprise: 1.65
    }[complexity];

    return Math.round(baseSum * urgencyMultiplier * complexityMultiplier);
  };

  const finalCost = calculateEstimate();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (selectedServices.length === 0) {
      setFormError('Please select at least one capability for your digital project.');
      return;
    }
    if (!name.trim()) {
      setFormError('Your name or point of contact is required.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setFormError('A valid email address is required so we can deliver your brief analysis.');
      return;
    }

    setIsLoading(true);

    // Simulate luxury-grade AI compiling delay
    setTimeout(() => {
      const newProposal = {
        id: 'prop-' + Date.now().toString().slice(-6),
        services: [...selectedServices],
        urgency,
        complexity,
        estimatedCost: finalCost,
        contact: { name, email, company, notes },
        timestamp: new Date().toISOString(),
        status: 'Proposal Ready (Aptimark Reviewed)'
      };

      const updatedHistory = [newProposal, ...pastSubmissions];
      setPastSubmissions(updatedHistory);
      localStorage.setItem('aptimark_proposals', JSON.stringify(updatedHistory));

      setSubmittedData(newProposal);
      setIsLoading(false);
      
      // Hook callbacks
      if (onSubmissionSuccess) {
        onSubmissionSuccess();
      }
    }, 1800);
  };

  const clearLeadForm = () => {
    setSubmittedData(null);
    setSelectedServices([]);
    setName('');
    setEmail('');
    setCompany('');
    setNotes('');
    setUrgency('balanced');
    setComplexity('standard');
  };

  const deleteSubmission = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = pastSubmissions.filter(item => item.id !== id);
    setPastSubmissions(updated);
    localStorage.setItem('aptimark_proposals', JSON.stringify(updated));
  };

  return (
    <div id="project-configurator" className="max-w-6xl mx-auto rounded-3xl bg-brand-surface-low border border-brand-outline/40 overflow-hidden shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* LEFT COLUMN: Input form wizard (8 cols on lg) */}
        <div className="lg:col-span-7 p-8 sm:p-12 space-y-10 border-b lg:border-b-0 lg:border-r border-brand-outline/30">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="font-sans text-xs uppercase tracking-widest text-brand-primary font-bold">Interactive Brief Maker</span>
              <h3 className="font-headline text-3xl sm:text-4xl text-brand-charcoal mt-1">Configure Your Project</h3>
            </div>
            {pastSubmissions.length > 0 && (
              <button
                id="toggle-submissions-history"
                type="button"
                onClick={() => setShowHistory(!showHistory)}
                className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold uppercase text-brand-primary border border-brand-primary/20 px-3 py-1.5 rounded-lg hover:bg-brand-surface-container transition-all cursor-pointer"
              >
                <History size={14} />
                {showHistory ? "Configure Brief" : `History (${pastSubmissions.length})`}
              </button>
            )}
          </div>

          <AnimatePresence mode="wait">
            {submittedData ? (
              // Success Card
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="p-8 rounded-2xl bg-white border border-green-200 text-center space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-500 mx-auto">
                  <ShieldCheck size={40} className="stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-headline text-3xl text-brand-charcoal">Brief Logged successfully</h4>
                  <p className="font-sans text-brand-text-muted mt-2 text-base leading-relaxed">
                    Thank you <strong className="text-brand-charcoal">{submittedData.contact.name}</strong>. Your customized project outline for <strong className="text-brand-charcoal">{submittedData.services.join(', ')}</strong> has been registered offline to local state index.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-brand-surface-low border border-brand-outline/20 text-left space-y-4 max-w-md mx-auto">
                  <div className="flex justify-between text-xs text-brand-text-muted select-none">
                    <span>REFERENCE ID</span>
                    <span>ESTIMATOR TOTAL</span>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-brand-outline-variant/30 pb-3">
                    <span className="font-mono text-[#c2652a] font-bold">{submittedData.id}</span>
                    <span className="font-headline text-3xl font-bold text-brand-charcoal">${submittedData.estimatedCost.toLocaleString()}</span>
                  </div>
                  <div className="text-sm space-y-1.5">
                    <p className="font-sans text-brand-charcoal"><span className="text-brand-text-muted">Client:</span> {submittedData.contact.company || "Independent Venture"}</p>
                    <p className="font-sans text-brand-charcoal"><span className="text-brand-text-muted">Est. Timeline:</span> {urgency.toUpperCase()} • Scope Scale: {complexity.toUpperCase()}</p>
                    <p className="font-sans text-brand-charcoal"><span className="text-brand-text-muted">Client Email:</span> {submittedData.contact.email}</p>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    id="submit-another-brief"
                    onClick={clearLeadForm}
                    className="border border-brand-primary text-brand-primary rounded-xl px-8 py-3.5 font-sans font-semibold text-sm hover:bg-brand-surface-low transition-all"
                  >
                    Configure New Brief
                  </button>
                  <a
                    href="#portfolio"
                    className="bg-brand-primary text-white rounded-xl px-8 py-3.5 font-sans font-semibold text-sm hover:bg-brand-primary/95 transition-all text-center inline-block"
                  >
                    Explore Case Studies
                  </a>
                </div>
              </motion.div>
            ) : showHistory ? (
              // Submitted Proposals List View
              <motion.div
                key="history"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="border border-brand-outline-variant/40 rounded-2xl overflow-hidden bg-white">
                  <div className="bg-brand-surface-highest/60 px-6 py-4 border-b border-brand-outline-variant/40 flex justify-between items-center">
                    <span className="font-headline text-xl text-brand-charcoal font-semibold">Logged Brief Ledger</span>
                    <span className="font-sans text-xs text-brand-text-muted">Saved to LocalStorage (sandbox persist)</span>
                  </div>
                  <div className="divide-y divide-brand-outline-variant/30 max-h-[420px] overflow-y-auto">
                    {pastSubmissions.map((prop, idx) => (
                      <div key={prop.id} className="p-6 hover:bg-brand-surface-low transition-colors space-y-4">
                        <div className="flex justify-between items-baseline">
                          <div>
                            <span className="font-mono text-xs text-brand-primary font-bold mr-2">{prop.id}</span>
                            <span className="font-sans text-xs text-brand-text-muted">
                              {new Date(prop.timestamp).toLocaleDateString()}
                            </span>
                          </div>
                          <span className="font-headline text-2xl font-bold text-brand-charcoal">
                            ${prop.estimatedCost.toLocaleString()}
                          </span>
                        </div>
                        <div className="text-sm text-brand-text-muted space-y-1">
                          <p><strong className="text-brand-charcoal">Target Elements:</strong> {prop.services.join(', ')}</p>
                          <p><strong className="text-brand-charcoal">Contact:</strong> {prop.contact.name} ({prop.contact.company || 'Private Practitioner'})</p>
                          {prop.contact.notes && <p className="italic font-sans text-xs border-l-2 border-brand-outline/40 pl-3 py-0.5 mt-2 bg-brand-surface-low/50">{prop.contact.notes}</p>}
                        </div>
                        <div className="flex justify-between items-center pt-2">
                          <span className="inline-flex items-center gap-1.5 text-xs text-green-700 bg-green-50 px-2.5 py-1 rounded-full font-sans font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            {prop.status || "Assigned"}
                          </span>
                          <button
                            id={`delete-brief-${prop.id}`}
                            onClick={(e) => deleteSubmission(prop.id, e)}
                            className="font-sans text-xs text-brand-rose hover:underline cursor-pointer"
                          >
                            Remove Entry
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  id="estimator-back-configure"
                  onClick={() => setShowHistory(false)}
                  className="font-sans text-xs uppercase font-bold text-brand-primary hover:underline hover:translate-x-1 transition-all inline-flex items-center gap-1"
                >
                  <ArrowRight size={14} className="rotate-180" /> Back to Customizer
                </button>
              </motion.div>
            ) : (
              // Step Configuration Form Flow
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleFormSubmit}
                className="space-y-8"
              >
                {formError && (
                  <div className="p-4 rounded-xl bg-brand-rose/5 border border-brand-rose/20 text-brand-rose text-sm flex gap-2.5 items-center">
                    <AlertCircle size={18} className="flex-shrink-0" />
                    <p className="font-sans">{formError}</p>
                  </div>
                )}

                {/* Question 1: Select services */}
                <div className="space-y-4">
                  <label className="font-headline text-2xl text-brand-charcoal block">
                    What capabilities do you seek?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SERVICES_DATA.map((service) => {
                      const isSelected = selectedServices.includes(service.title);
                      return (
                        <div
                          key={service.id}
                          onClick={() => handleServiceToggle(service.title)}
                          className={`group p-4 rounded-xl border transition-all duration-300 cursor-pointer select-none flex justify-between items-center ${
                            isSelected
                              ? 'bg-white border-brand-primary shadow-sm'
                              : 'bg-brand-surface-highest/40 border-brand-outline-variant/60 hover:bg-white hover:border-brand-outline/80'
                          }`}
                        >
                          <div>
                            <p className="font-sans text-sm font-semibold text-brand-charcoal">
                              {service.title}
                            </p>
                            <p className="font-sans text-xs text-brand-text-muted mt-1">
                              Base starts from ${service.estPrice.toLocaleString()}
                            </p>
                          </div>
                          <div
                            className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                              isSelected
                                ? 'bg-brand-primary border-brand-primary text-white scale-105'
                                : 'border-brand-outline'
                            }`}
                          >
                            {isSelected && <Check size={12} className="stroke-[3]" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Question 2: Scope scale selection */}
                <div className="space-y-4">
                  <label className="font-headline text-2.5xl text-brand-charcoal block">
                    Select desired project scale
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div
                      onClick={() => setComplexity('mvp')}
                      className={`p-4 rounded-xl border transition-all cursor-pointer text-center space-y-1.5 ${
                        complexity === 'mvp'
                          ? 'bg-white border-brand-primary ring-1 ring-brand-primary/20'
                          : 'bg-brand-surface-highest/40 border-brand-outline-variant/60 hover:bg-white'
                      }`}
                    >
                      <h4 className="font-sans text-sm font-bold text-brand-charcoal uppercase tracking-wider">Minimal MVP</h4>
                      <p className="font-sans text-xs text-brand-text-muted">Highly focused 1-view launchpad</p>
                    </div>
                    <div
                      onClick={() => setComplexity('standard')}
                      className={`p-4 rounded-xl border transition-all cursor-pointer text-center space-y-1.5 ${
                        complexity === 'standard'
                          ? 'bg-white border-brand-primary ring-1 ring-brand-primary/20'
                          : 'bg-brand-surface-highest/40 border-brand-outline-variant/60 hover:bg-white'
                      }`}
                    >
                      <h4 className="font-sans text-sm font-bold text-brand-charcoal uppercase tracking-wider">Venture Scale</h4>
                      <p className="font-sans text-xs text-brand-text-muted">Standard multi-view app pipeline</p>
                    </div>
                    <div
                      onClick={() => setComplexity('enterprise')}
                      className={`p-4 rounded-xl border transition-all cursor-pointer text-center space-y-1.5 ${
                        complexity === 'enterprise'
                          ? 'bg-white border-brand-primary ring-1 ring-brand-primary/20'
                          : 'bg-brand-surface-highest/40 border-brand-outline-variant/60 hover:bg-white'
                      }`}
                    >
                      <h4 className="font-sans text-sm font-bold text-brand-charcoal uppercase tracking-wider">Enterprise</h4>
                      <p className="font-sans text-xs text-brand-text-muted">Extended integrations & support</p>
                    </div>
                  </div>
                </div>

                {/* Question 3: Urgency timeline */}
                <div className="space-y-4">
                  <label className="font-headline text-2.5xl text-brand-charcoal block">
                    Target timeline urgency
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div
                      onClick={() => setUrgency('relaxed')}
                      className={`p-4 rounded-xl border transition-all cursor-pointer text-center space-y-1 ${
                        urgency === 'relaxed'
                          ? 'bg-white border-brand-primary'
                          : 'bg-brand-surface-highest/40 border-brand-outline-variant/60 hover:bg-white'
                      }`}
                    >
                      <h4 className="font-sans text-sm font-bold text-brand-charcoal">Relaxed (8-10 Weeks)</h4>
                      <p className="font-sans text-xs text-brand-text-muted">Paced delivery (Saves 10%)</p>
                    </div>
                    <div
                      onClick={() => setUrgency('balanced')}
                      className={`p-4 rounded-xl border transition-all cursor-pointer text-center space-y-1 ${
                        urgency === 'balanced'
                          ? 'bg-white border-brand-primary'
                          : 'bg-brand-surface-highest/40 border-brand-outline-variant/60 hover:bg-white'
                      }`}
                    >
                      <h4 className="font-sans text-sm font-bold text-brand-charcoal">Balanced (4-6 Weeks)</h4>
                      <p className="font-sans text-xs text-brand-text-muted">Standard engineering delivery</p>
                    </div>
                    <div
                      onClick={() => setUrgency('urgent')}
                      className={`p-4 rounded-xl border transition-all cursor-pointer text-center space-y-1 ${
                        urgency === 'urgent'
                          ? 'bg-white border-brand-primary'
                          : 'bg-brand-surface-highest/40 border-brand-outline-variant/60 hover:bg-white'
                      }`}
                    >
                      <h4 className="font-sans text-sm font-bold text-brand-charcoal">Urgent (2-3 Weeks)</h4>
                      <p className="font-sans text-xs text-brand-rose font-medium">Expedited timeline (+25%)</p>
                    </div>
                  </div>
                </div>

                <hr className="border-brand-outline/20" />

                {/* Lead inputs fields */}
                <div className="space-y-4">
                  <label className="font-headline text-2.5xl text-brand-charcoal block">
                    Your Point of Contact
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <span className="font-sans text-xs text-brand-charcoal font-semibold uppercase tracking-wider block">Full Name *</span>
                      <input
                        type="text"
                        placeholder="Elena Vance"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-brand-outline-variant bg-white text-brand-charcoal text-sm outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/25 transition-all"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <span className="font-sans text-xs text-brand-charcoal font-semibold uppercase tracking-wider block">Work Email *</span>
                      <input
                        type="email"
                        placeholder="elena@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-brand-outline-variant bg-white text-brand-charcoal text-sm outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/25 transition-all"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="font-sans text-xs text-brand-charcoal font-semibold uppercase tracking-wider block">Organization (Optional)</span>
                    <input
                      type="text"
                      placeholder="e.g. Aura Group LLC"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-brand-outline-variant bg-white text-brand-charcoal text-sm outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/25 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="font-sans text-xs text-brand-charcoal font-semibold uppercase tracking-wider block">Brief Context / Legacy Systems</span>
                    <textarea
                      rows={3}
                      placeholder="Describe target databases, current speed roadblocks, or core goals..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-brand-outline-variant bg-white text-brand-charcoal text-sm outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/25 transition-all resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-brand-primary text-white rounded-xl py-4 font-sans font-semibold text-sm hover:bg-brand-primary/95 transition-all hover:scale-[1.005] active:scale-[0.995] inline-flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Analyzing Architectural Fit...
                    </>
                  ) : (
                    <>
                      <Sparkles size={16} />
                      Log Brief &amp; Submit Estimate
                      <ArrowRight size={14} className="ml-1" />
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* RIGHT COLUMN: Live Checkout / Pricing calculation summary block (5 cols) */}
        <div className="lg:col-span-5 bg-brand-surface-highest/60 p-8 sm:p-12 flex flex-col justify-between space-y-12 select-none">
          <div>
            <span className="font-sans text-xs text-brand-text-muted uppercase tracking-widest font-bold block">Live Quote Basis</span>
            <h4 className="font-headline text-2.5xl text-brand-charcoal mt-1">Estimate Breakdown</h4>
            
            {/* Dynamic ledger entries */}
            <div className="mt-8 space-y-4">
              {selectedServices.length === 0 ? (
                <div className="py-8 text-center text-sans text-brand-text-muted/60 text-sm border-2 border-dashed border-brand-outline/25 rounded-2xl flex flex-col items-center gap-2">
                  <Calculator size={32} className="stroke-[1.5] text-brand-outline" />
                  <p>Choose a service on the left to evaluate direct estimation.</p>
                </div>
              ) : (
                <div className="space-y-3.5">
                  {selectedServices.map((title) => {
                    const match = SERVICES_DATA.find(s => s.title === title);
                    return (
                      <div key={title} className="flex justify-between text-sm">
                        <span className="font-sans font-medium text-brand-charcoal">{title}</span>
                        <span className="font-sans text-brand-text-muted">${match ? match.estPrice.toLocaleString() : "5,000"}</span>
                      </div>
                    );
                  })}

                  <hr className="border-brand-outline-variant/40 my-4" />

                  {/* Multipliers display if modified */}
                  <div className="space-y-2 text-xs text-brand-text-muted">
                    <div className="flex justify-between">
                      <span>Timeline Mod: <strong className="text-brand-charcoal font-medium uppercase">{urgency}</strong></span>
                      <span>{urgency === 'relaxed' ? 'Saves 10%' : urgency === 'urgent' ? '+25%' : 'Baseline'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Scale Factor: <strong className="text-brand-charcoal font-medium uppercase">{complexity}</strong></span>
                      <span>{complexity === 'mvp' ? 'Saves 20%' : complexity === 'enterprise' ? '+65%' : 'Baseline'}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6 pt-6 border-t border-brand-outline/25">
            <div className="flex justify-between items-baseline">
              <span className="font-sans text-xs text-brand-text-muted uppercase tracking-wider font-bold">Estimated Cost</span>
              <span className="font-headline text-4xl lg:text-5xl font-extrabold text-brand-charcoal transition-all">
                ${finalCost.toLocaleString()}
              </span>
            </div>

            <p className="font-sans text-xs text-brand-text-muted/70 leading-relaxed text-center lg:text-left">
              *Estimates are calculated using standard Aptimark developer ratios. Final written quote subject to specific API and SLA variables.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
