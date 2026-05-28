"use client";

import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Award, CheckCircle } from 'lucide-react';

import RouteLinks from './RouteLinks';

export default function ContactPageContent() {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactLoading, setContactLoading] = useState(false);

  return (
    <main className="min-h-screen bg-brand-bg text-brand-charcoal selection:bg-brand-primary/20 selection:text-brand-primary scroll-smooth">
      <section id="contact-us" className="py-28 px-6 sm:px-10 bg-brand-surface-container border-y border-brand-outline-variant/30 scroll-mt-20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 text-left space-y-6">
            <span className="font-sans text-xs uppercase tracking-widest text-brand-primary font-bold block">
              Contact
            </span>
            <h1 className="font-headline text-4xl sm:text-5xl text-brand-charcoal font-semibold leading-tight">
              Connect with <br />our architects.
            </h1>
            <p className="font-sans text-brand-text-muted text-base leading-relaxed">
              Have a custom project or a performance migration requirement? Send us a direct inquiry and receive a
              detailed strategic proposal in under 24 hours.
            </p>
            <div className="space-y-4 pt-4 border-t border-brand-outline-variant/50">
              <div className="flex gap-4 items-center">
                <div className="p-3 rounded-xl bg-white text-brand-primary border border-brand-outline/20">
                  <Award size={18} />
                </div>
                <div>
                  <strong className="font-sans text-sm block font-bold text-brand-charcoal">Guaranteed Performance</strong>
                  <span className="font-sans text-xs text-brand-text-muted">Minimum 95+ score audited on launch.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 bg-white border border-brand-outline/25 p-8 sm:p-10 rounded-3xl shadow-sm relative overflow-hidden">
            {contactSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-4"
              >
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto text-brand-primary">
                  <CheckCircle size={32} />
                </div>
                <h2 className="font-headline text-2.5xl font-semibold text-brand-charcoal">Design Inquiry Received</h2>
                <p className="font-sans text-brand-text-muted text-sm max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="font-semibold text-brand-charcoal">{contactName}</strong>. Our practitioners
                  are reviewing your parameters and will get in touch with you at{' '}
                  <strong className="font-semibold text-brand-charcoal">{contactEmail}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setContactSuccess(false);
                    setContactName('');
                    setContactEmail('');
                    setContactMessage('');
                  }}
                  className="mt-6 text-brand-primary font-sans text-xs uppercase tracking-widest font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                id="direct-inquiry-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!contactName || !contactEmail) return;
                  setContactLoading(true);
                  setTimeout(() => {
                    setContactLoading(false);
                    setContactSuccess(true);
                  }, 900);
                }}
                className="space-y-6"
              >
                <div className="space-y-2 text-left">
                  <label htmlFor="contact-name-field" className="font-sans text-xs font-bold uppercase tracking-wider text-brand-charcoal block">
                    Your Name
                  </label>
                  <input
                    id="contact-name-field"
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="E.g., Julian Vane"
                    className="w-full font-sans text-sm border border-brand-outline px-4 py-3 rounded-xl focus:outline-none focus:border-brand-primary bg-brand-bg transition-colors"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <label htmlFor="contact-email-field" className="font-sans text-xs font-bold uppercase tracking-wider text-brand-charcoal block">
                    Corporate Email
                  </label>
                  <input
                    id="contact-email-field"
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="E.g., julian@vane.agency"
                    className="w-full font-sans text-sm border border-brand-outline px-4 py-3 rounded-xl focus:outline-none focus:border-brand-primary bg-brand-bg transition-colors"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <label htmlFor="contact-message-field" className="font-sans text-xs font-bold uppercase tracking-wider text-brand-charcoal block">
                    Core Parameters / Message
                  </label>
                  <textarea
                    id="contact-message-field"
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    rows={4}
                    placeholder="Describe your design, timeline, or performance benchmarks..."
                    className="w-full font-sans text-sm border border-brand-outline px-4 py-3 rounded-xl focus:outline-none focus:border-brand-primary bg-brand-bg transition-colors resize-none"
                  />
                </div>

                <button
                  id="submit-inquiry-btn"
                  type="submit"
                  disabled={contactLoading}
                  className="w-full flex justify-center items-center gap-2 bg-brand-primary text-white py-4 rounded-xl font-sans font-bold text-sm tracking-widest uppercase hover:bg-brand-primary/95 transition-all active:scale-[0.98] disabled:opacity-75 cursor-pointer relative"
                >
                  {contactLoading ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Submit Design Brief
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <RouteLinks current="contact" />
    </main>
  );
}
