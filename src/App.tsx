import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import aptimarkLogo from './aptimarkogo.png';
import {
  Globe,
  Search,
  RefreshCw,
  Smartphone,
  Settings,
  ArrowRight,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Star,
  Sparkles,
  Award,
  CheckCircle,
  HelpCircle
} from 'lucide-react';

import { SERVICES_DATA, PROCESS_DATA, PORTFOLIO_DATA, TESTIMONIALS_DATA } from './data';
import { Service, ProcessStep, PortfolioProject } from './types';

import ServiceModal from './components/ServiceModal';
import ProjectModal from './components/ProjectModal';
import HeroHeadline from './components/animations/HeroHeadline';
import HeroEntrance from './components/animations/HeroEntrance';
import AptimarkWordmark, { AuroraText } from './components/animations/AptimarkWordmark';
import { useScrollAnimations } from './hooks/useScrollAnimations';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function App() {
  // Navigation active anchors tracker
  const [activeSection, setActiveSection] = useState('hero');

  // Mobile menu visibility
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Interaction State
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  // Active step selected in the Methodology showcase
  const [activeProcessStep, setActiveProcessStep] = useState<string>(PROCESS_DATA[0].id);

  // Testimonial index slider state
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  // Inquiry message states for premium contact collaboration block
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactLoading, setContactLoading] = useState(false);

  // Contact scroll assist
  const handleScrollToContact = () => {
    const element = document.getElementById('contact-us');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Track user scroll position for navbar background and scroll position spy
  useEffect(() => {
    const sections = ['hero', 'capabilities', 'methodology', 'portfolio', 'testimonials', 'contact-us'];
    const elements = sections
      .map((section) => document.getElementById(section))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const current = visibleEntries[0];
        if (!current?.target.id) return;

        setActiveSection(current.target.id === 'contact-us' ? 'contact' : current.target.id);
      },
      {
        root: null,
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.15, 0.3, 0.5, 0.75],
      }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useScrollAnimations();

  const navLogoRef = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      const logo = navLogoRef.current;
      if (!logo) return;

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(logo, { autoAlpha: 1, clearProps: 'all' });
      });

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          logo,
          { y: -12, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.85, ease: 'power3.out', delay: 0.05 }
        );
      });

      return () => mm.revert();
    },
    { scope: navLogoRef }
  );

  const nextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  // Helper to render lucide icon matching capabilities names
  const renderServiceIcon = (iconName: string, className = "text-brand-primary text-3xl") => {
    switch (iconName) {
      case 'Globe': return <Globe className={className} />;
      case 'Search': return <Search className={className} />;
      case 'RefreshCw': return <RefreshCw className={className} />;
      case 'Smartphone': return <Smartphone className={className} />;
      case 'Settings': return <Settings className={className} />;
      default: return <Globe className={className} />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-charcoal selection:bg-brand-primary/20 selection:text-brand-primary scroll-smooth">
      {/* 1. STICKY HEADER NAVIGATION - wrapped in semantic header for better SEO */}
      <header>
        <nav role="navigation" aria-label="Main site navigation" className="nav-liquid-glass w-full">
        <div className="relative z-10 flex justify-between items-center px-6 sm:px-10 py-5 max-w-7xl mx-auto">
          {/* Logo Name */}
          <a ref={navLogoRef} href="#hero" className="flex items-center gap-3 font-headline text-2.5xl font-bold tracking-tight text-brand-charcoal select-none group">
            <img
              src={aptimarkLogo}
              alt="Aptimark"
              className="w-9 h-9 object-contain transform -translate-y-0.5"
            />
            <AptimarkWordmark />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center">
            {[
              { label: 'Capabilities', href: '#capabilities', section: 'capabilities' },
              { label: 'Process', href: '#methodology', section: 'methodology' },
              { label: 'Selected Works', href: '#portfolio', section: 'portfolio' },
              { label: 'Testimonials', href: '#testimonials', section: 'testimonials' },
              { label: 'Consultation', href: '#contact-us', section: 'contact' }
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm tracking-wide font-medium transition-all hover:text-brand-primary cursor-pointer pb-1 border-b-2 ${
                  activeSection === link.section
                    ? 'text-brand-primary border-brand-primary'
                    : 'text-brand-text-muted border-transparent hover:border-brand-primary/35'
                }`}
              >
                {link.label}
              </a>
            ))}

            <button
              id="header-nav-cta"
              onClick={handleScrollToContact}
              className="ml-4 bg-brand-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:scale-101 active:scale-99 transition-all hover:bg-brand-primary/95 cursor-pointer shadow-sm shadow-brand-primary/10"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-md hover:bg-brand-surface-low text-brand-charcoal transition-all"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Fullscreen Slide Out menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-navigation-panel"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="nav-liquid-glass-panel absolute top-full left-0 w-full flex flex-col p-6 space-y-4 z-30"
            >
              {[
                { label: 'Capabilities', href: '#capabilities' },
                { label: 'Methodology & Process', href: '#methodology' },
                { label: 'Selected Works', href: '#portfolio' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'Inquiry & Consultation', href: '#contact-us' }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-headline text-2xl text-brand-charcoal hover:text-brand-primary py-2 border-b border-brand-outline-variant/30 text-left transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <button
                  id="mobile-cta-get-started"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleScrollToContact();
                  }}
                  className="w-full bg-brand-primary text-white text-base font-bold py-4 rounded-xl hover:bg-brand-primary/95 transition-all text-center"
                >
                  Start Your Consultation
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        </nav>
      </header>

      {/* Main content for semantic landmarks so crawlers and screenreaders can better parse page */}
      <main>
      {/* 2. HERO LANDING BANNER SECTION */}
      <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-24 hero-gradient overflow-x-hidden">
        {/* Decorative Sun-Baked Ambient Glow Balls */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[580px] h-[580px] bg-[#fbe8d8] rounded-full blur-[130px] animate-pulse duration-[10s]" />
          <div className="absolute bottom-[-15%] left-[-5%] w-[420px] h-[420px] bg-brand-surface-container rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-6 sm:px-10 relative z-10 text-center max-w-5xl">
          <HeroHeadline />

          <HeroEntrance delay={0.95}>
            <p className="font-sans text-base sm:text-lg md:text-xl text-brand-text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
              Engineering sun-baked elegance into every line of code. Where minimalism meets absolute performance under rigorous benchmark testing.
            </p>
          </HeroEntrance>

          <HeroEntrance delay={1.15} className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-md mx-auto items-stretch sm:items-center">
            <button
              id="hero-cta-start-project"
              onClick={handleScrollToContact}
              className="bg-brand-primary text-white border border-transparent px-8 py-4.5 rounded-xl font-sans font-bold tracking-wide hover:shadow-lg hover:shadow-brand-primary/20 transition-all hover:scale-[1.01] active:opacity-95 cursor-pointer text-center"
            >
              Start Your Project
            </button>
            <a
              id="hero-cta-view-work"
              href="#portfolio"
              className="border border-brand-outline/80 px-8 py-4.5 rounded-xl font-sans font-bold tracking-wide hover:bg-brand-surface-low transition-all text-center"
            >
              View Our Work
            </a>
          </HeroEntrance>

          <HeroEntrance delay={1.35} className="pt-20 grid grid-cols-3 max-w-2xl mx-auto gap-4 border-t border-brand-outline-variant/40 mt-12">
            {[
              { value: "0.4s", label: "Average Load Benchmarks" },
              { value: "99+", label: "Lighthouse Core Web Score" },
              { value: "140%", label: "Average Conversion Surge" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <span className="font-headline text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#8a4518] block">{stat.value}</span>
                <span className="font-sans text-[11px] sm:text-xs text-brand-text-muted mt-1 uppercase tracking-wider block font-semibold">{stat.label}</span>
              </div>
            ))}
          </HeroEntrance>
        </div>
      </section>

      {/* 3. CAPABILITIES / SERVICES DYNAMIC SECTION */}
      <section id="capabilities" className="py-28 px-6 sm:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-brand-outline-variant/30 pb-10">
          <div className="max-w-xl text-left">
            <span className="font-sans text-xs uppercase tracking-widest text-[#c2652a] font-bold mb-3 block gsap-line-reveal">
              What We Do Best
            </span>
            <h2 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-brand-charcoal font-semibold tracking-tight gsap-mask-reveal">
              Our expertise,<br />curated for growth.
            </h2>
          </div>
          <p className="font-sans text-brand-text-muted max-w-sm text-base leading-relaxed text-left md:text-right gsap-reveal-text">
            A comprehensive suite of digital services designed to scale with your ambition. Hand-crafted, tested, and fine-tuned for high benchmark scores.
          </p>
        </div>

        {/* Dynamic Bento Box Staggered Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start gsap-stagger-container">
          {/* Module 1: Website Development (7 Columns) */}
          <div
            id="service-card-web-dev"
            onClick={() => setSelectedService(SERVICES_DATA[0])}
            className="md:col-span-7 group cursor-pointer gsap-scroll-card"
          >
            <div className="liquid-glass rounded-2xl p-8 sm:p-10 h-[460px] relative overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-brand-outline/20 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  {renderServiceIcon('Globe')}
                  <span className="text-xs uppercase bg-white px-3 py-1 rounded-full text-brand-primary font-bold border border-brand-outline/25 select-none">
                    {SERVICES_DATA[0].badge}
                  </span>
                </div>
                <h3 className="font-headline text-3.5xl sm:text-4xl text-brand-charcoal font-semibold mt-6 mb-3 gsap-reveal-text">
                  {SERVICES_DATA[0].title}
                </h3>
                <p className="font-sans text-brand-text-muted text-base max-w-md leading-relaxed">
                  {SERVICES_DATA[0].description}
                </p>
              </div>

              {/* Computer mock up image element as seen in requested render design */}
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

          {/* Module 2: SEO Strategy (5 Columns) */}
          <div
            id="service-card-seo"
            onClick={() => setSelectedService(SERVICES_DATA[1])}
            className="md:col-span-5 cursor-pointer group gsap-scroll-card"
          >
            <div className="bg-brand-surface-high rounded-2xl p-8 sm:p-10 h-[460px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 border border-brand-outline-variant/40">
              <div className="space-y-6">
                {renderServiceIcon('Search', "text-brand-rose text-3xl")}
                <h3 className="font-headline text-3.5xl text-brand-charcoal font-semibold">
                  {SERVICES_DATA[1].title}
                </h3>
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

          {/* Module 3: Legacy Refactoring (4 Columns) */}
          <div
            id="service-card-refactoring"
            onClick={() => setSelectedService(SERVICES_DATA[2])}
            className="md:col-span-4 cursor-pointer group gsap-scroll-card"
          >
            <div className="bg-brand-primary text-brand-bg rounded-2xl p-8 sm:p-10 h-[420px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-2">
              <div className="space-y-6">
                {renderServiceIcon('RefreshCw', "text-white text-3xl")}
                <h3 className="font-headline text-3.5xl text-white font-semibold">
                  {SERVICES_DATA[2].title}
                </h3>
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

          {/* Module 4 & 5 App Development and Custom IT (8 Columns Grid Side-by-side) */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
            {/* App development Card */}
            <div
              id="service-card-app-dev"
              onClick={() => setSelectedService(SERVICES_DATA[3])}
              className="liquid-glass rounded-2xl p-8 sm:p-10 h-[420px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 cursor-pointer group border border-brand-outline/20 gsap-scroll-card"
            >
              <div className="space-y-6">
                {renderServiceIcon('Smartphone')}
                <h4 className="font-headline text-2.5xl font-semibold text-brand-charcoal">
                  {SERVICES_DATA[3].title}
                </h4>
                <p className="font-sans text-sm sm:text-base text-brand-text-muted leading-relaxed">
                  {SERVICES_DATA[3].description}
                </p>
              </div>

              <div className="flex justify-between items-center text-xs font-sans uppercase font-bold text-brand-primary tracking-wider border-t border-brand-outline/10 pt-4">
                <span>View Stack Details</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-all" />
              </div>
            </div>

            {/* Custom IT Card */}
            <div
              id="service-card-custom-it"
              onClick={() => setSelectedService(SERVICES_DATA[4])}
              className="bg-brand-surface-container rounded-2xl p-8 sm:p-10 h-[420px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 cursor-pointer group border border-brand-outline-variant/35 gsap-scroll-card"
            >
              <div className="space-y-6">
                {renderServiceIcon('Settings')}
                <h4 className="font-headline text-2.5xl font-semibold text-brand-charcoal">
                  {SERVICES_DATA[4].title}
                </h4>
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

      {/* 4. PROCESS METHODOLOGY IMMERSIVE HORIZONTAL TIMELINE ROW */}
      <section id="methodology" className="py-28 bg-brand-surface-low overflow-hidden">
        <div className="px-6 sm:px-10 max-w-7xl mx-auto mb-16 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 text-left">
          <div className="max-w-xl">
            <span className="font-sans text-xs uppercase tracking-widest text-brand-primary font-bold mb-3 block gsap-line-reveal">
              The Methodology
            </span>
            <h2 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-brand-charcoal font-semibold tracking-tight gsap-mask-reveal">
              Crafting with <br />disciplined intent.
            </h2>
          </div>
          <p className="font-sans text-brand-text-muted text-base max-w-sm leading-relaxed gsap-reveal-text">
            By shifting from ungrounded templates to strict milestones, we guarantee fluid, deterministic software deployment.
          </p>
        </div>

        {/* Tab row */}
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
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-brand-outline/25 p-6 sm:p-10 rounded-3xl shadow-sm gsap-reveal"
                >
                  {/* Left: Step Image (5 columns) */}
                  <div className="lg:col-span-5 relative group overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-[4/5] h-full max-h-[380px] lg:max-h-[480px]">
                    <img
                      src={step.image}
                      alt={step.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-103 select-none"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                      <span className="font-sans text-xs uppercase tracking-widest text-[#f0a878] font-bold">Standard Timeframe</span>
                      <p className="font-headline text-xl italic font-medium">{step.timeframe}</p>
                    </div>
                  </div>

                  {/* Right: Step Description text (7 columns) */}
                  <div className="lg:col-span-7 space-y-6 text-left">
                    <div>
                      <span className="font-headline text-6xl sm:text-7xl font-extrabold text-[#c2652a]/15 block leading-none">
                        {step.numberString}
                      </span>
                      <h3 className="font-headline text-3xl sm:text-4xl text-brand-charcoal font-semibold mt-3 sm:mt-4 gsap-reveal-text">
                        {step.title}
                      </h3>
                    </div>
                    <p className="font-sans text-brand-charcoal text-base sm:text-lg leading-relaxed gsap-reveal-text">
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
                        {["100% Transparency", "Continuous Sign-offs", "Staging Environments"].map((item) => (
                          <span key={item} className="inline-flex items-center gap-1.5 text-xs text-brand-charcoal font-semibold bg-brand-surface-highest px-3 py-1.5 rounded-full select-none">
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

      {/* 5. PORTFOLIO SELECTED WORKS PRESTIGE SECTION */}
      <section id="portfolio" className="py-28 px-6 sm:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-4">
          <span className="font-sans text-xs uppercase tracking-widest text-[#c2652a] font-bold block gsap-line-reveal">
            Pragmatic Mastery
          </span>
          <h2 className="font-headline text-5xl sm:text-6xl text-brand-charcoal font-bold tracking-tight gsap-mask-reveal">
            Selected Works
          </h2>
          <p className="font-sans text-base sm:text-lg text-brand-text-muted max-w-xl mx-auto leading-relaxed gsap-reveal-text">
            Proof that performance and digital beauty can coexist seamlessly. No compromises on core web speed.
          </p>
        </div>

        {/* Display project list vertical stack */}
        <div className="space-y-32">
          {PORTFOLIO_DATA.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center gsap-portfolio-row"
              >
                {/* Visual Image Block */}
                <div className={`lg:col-span-7 relative overflow-hidden rounded-3xl group shadow-md border border-brand-outline/20 aspect-video ${
                  !isEven ? 'lg:order-2' : ''
                }`}>
                  <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500 pointer-events-none" />
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-102 select-none"
                  />
                </div>

                {/* Text Brief Block */}
                <div className={`lg:col-span-5 text-left px-2 sm:px-4 ${
                  !isEven ? 'lg:order-1' : ''
                }`}>
                  <span className="font-sans text-xs uppercase tracking-widest font-bold text-brand-primary mb-4 block">
                    {project.category}
                  </span>
                  <h3 className="font-headline text-3.5xl sm:text-4.5xl text-brand-charcoal font-bold mb-4 gsap-reveal-text">
                    {project.title}
                  </h3>
                  <p className="font-sans text-brand-text-muted text-base sm:text-lg mb-8 leading-relaxed gsap-reveal-text">
                    {project.challenge.slice(0, 150)}... Our digital practitioners re-engineered the frontlines to secure outstanding loading and aesthetic scores.
                  </p>

                  <div className="grid grid-cols-2 gap-4 max-w-sm mb-8 border-l border-brand-primary/25 pl-4 bg-brand-surface-low/30 py-2.5 rounded-r-xl">
                    {project.outcomes.slice(0, 2).map((item, index) => (
                      <div key={index}>
                        <span className="font-sans text-[11px] text-brand-text-muted block uppercase tracking-wider">{item.label}</span>
                        <span className="font-headline text-xl sm:text-2xl font-bold text-brand-charcoal">{item.value}</span>
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

      {/* 6. TESTIMONIAL SLIDER CAROUSEL SECTION */}
      <section id="testimonials" className="py-24 bg-brand-surface-container border-y border-brand-outline-variant/40">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10 relative gsap-reveal">
          <span className="font-sans text-xs uppercase tracking-widest text-[#c2652a] font-bold block gsap-line-reveal">
            Direct Client Appraisals
          </span>

          <div className="relative min-h-[220px] flex items-center justify-center gsap-reveal-text">
            <AnimatePresence mode="wait">
              {TESTIMONIALS_DATA.map((t, index) => {
                if (index !== activeTestimonialIdx) return null;
                return (
                  <motion.div
                    id={`testimonial-slide-${t.id}`}
                    key={t.id}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Stars */}
                    <div className="flex gap-1 justify-center text-[#c2652a]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" className="stroke-none" />
                      ))}
                    </div>

                    <p className="font-headline text-xl sm:text-2xl md:text-3xl text-brand-charcoal leading-relaxed italic max-w-2xl mx-auto">
                      &ldquo;{t.content}&rdquo;
                    </p>

                    <div className="flex items-center gap-3 justify-center pt-4">
                      <img
                        src={t.avatar}
                        alt={t.reviewer}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="w-12 h-12 rounded-full object-cover border border-brand-outline"
                      />
                      <div className="text-left">
                        <strong className="font-sans text-sm block text-brand-charcoal font-bold">{t.reviewer}</strong>
                        <span className="font-sans text-xs block text-brand-text-muted">{t.company}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Testimonial slider controllers */}
          <div className="flex justify-center items-center gap-6 pt-4 select-none">
            <button
              id="testimonial-prev-btn"
              onClick={prevTestimonial}
              className="p-2.5 rounded-full border border-brand-outline text-brand-charcoal hover:bg-white active:scale-95 transition-all cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="font-sans text-xs text-brand-text-muted font-semibold tracking-wider uppercase">
              {activeTestimonialIdx + 1} / {TESTIMONIALS_DATA.length}
            </span>
            <button
              id="testimonial-next-btn"
              onClick={nextTestimonial}
              className="p-2.5 rounded-full border border-brand-outline text-brand-charcoal hover:bg-white active:scale-95 transition-all cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 7. CONNECT & COLLABORATE FORM BLOCK */}
      <section id="contact-us" className="py-28 px-6 sm:px-10 bg-brand-surface-container border-y border-brand-outline-variant/30 scroll-mt-20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left Column Text Detail */}
          <div className="md:col-span-5 text-left space-y-6">
            <span className="font-sans text-xs uppercase tracking-widest text-brand-primary font-bold block gsap-reveal-text">
              Direct Access
            </span>
            <h2 className="font-headline text-4xl sm:text-5xl text-brand-charcoal font-semibold leading-tight gsap-mask-reveal">
              Connect with <br />our architects.
            </h2>
            <p className="font-sans text-brand-text-muted text-base leading-relaxed gsap-reveal-text">
              Have a custom project or a performance migration requirement? Send us a direct inquiry and receive a detailed strategic proposal in under 24 hours.
            </p>
            <div className="space-y-4 pt-4 border-t border-brand-outline-variant/50 gsap-reveal-text">
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

          {/* Right Column Form Client */}
          <div className="md:col-span-7 gsap-reveal-text bg-white border border-brand-outline/25 p-8 sm:p-10 rounded-3xl shadow-sm relative overflow-hidden">
            {contactSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-4"
              >
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto text-brand-primary">
                  <CheckCircle size={32} />
                </div>
                <h3 className="font-headline text-2.5xl font-semibold text-brand-charcoal">Design Inquiry Received</h3>
                <p className="font-sans text-brand-text-muted text-sm max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="font-semibold text-brand-charcoal">{contactName}</strong>. Our practitioners are reviewing your parameters and will get in touch with you at <strong className="font-semibold text-brand-charcoal">{contactEmail}</strong> shortly.
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

      {/* 8. LAST INVITATION / MASSIVE INTERACTIVE CTA */}
      <section className="py-24 px-6 sm:px-10 bg-brand-surface-highest/85 border-t border-brand-outline-variant/50 text-center relative overflow-hidden">
        <div className="absolute top-[-30%] left-[10%] w-[350px] h-[350px] bg-brand-primary/5 rounded-full blur-[90px] pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <h2 className="font-headline text-4xl sm:text-5xl lg:text-7xl text-brand-charcoal leading-[1.1] font-semibold tracking-tight gsap-mask-reveal">
            Ready to evolve your <br />digital presence?
          </h2>
          <p className="font-sans text-base sm:text-xl text-brand-text-muted max-w-xl mx-auto leading-relaxed gsap-reveal-text">
            Let&apos;s build something exceptional together. Submit a detailed inquiry above, or request immediate discovery.
          </p>
          <button
            id="footer-action-start-conversation"
            onClick={handleScrollToContact}
            className="bg-brand-primary text-white px-10 py-5 rounded-xl font-sans font-extrabold text-base sm:text-lg hover:shadow-xl hover:shadow-brand-primary/10 hover:bg-brand-primary/95 transition-all hover:-translate-y-0.5 cursor-pointer shadow-md select-none gsap-reveal-text"
          >
            Start a Conversation
          </button>
        </div>
      </section>
      </main>

      {/* 9. FOOTER SECTION */}
      <footer className="w-full bg-brand-surface-low border-t border-brand-outline-variant/50 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 sm:px-12 py-16 gap-8 max-w-7xl mx-auto">
          <div className="text-center md:text-left space-y-2">
            <span className="flex items-center justify-center md:justify-start gap-2.5 font-headline text-2xl font-bold tracking-tight text-brand-charcoal select-none">
              <img
                src={aptimarkLogo}
                alt="Aptimark"
                className="w-7 h-7 object-contain"
              />
              <span>APTIMARK</span>
            </span>
            <p className="font-sans text-xs uppercase tracking-widest text-brand-text-muted/80 block">
              © {new Date().getFullYear()} APTIMARK Solutions. Crafted with sun-baked precision.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-8 justify-center select-none">
            {[
              { label: "Privacy Policy", href: "#" },
              { label: "Standard Terms", href: "#" },
              { label: "Direct Consult", href: "mailto:ksanjuma1234@gmail.com" },
              { label: "LinkedIn Feed", href: "#" }
            ].map((link, idx) => (
              <a
                key={idx}
                className="font-sans text-xs uppercase tracking-widest text-[#605850]/80 font-bold hover:text-brand-primary transition-all hover:translate-x-0.5 inline-block"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* 10. ACTIVE MODALS / LIGHTBOX OVERLAYS */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectForProposal={(title) => {
          handleScrollToContact();
          setContactMessage(prev => prev + (prev ? '\n' : '') + 'Enquiry on Service: ' + title);
        }}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenEstimator={() => {
          handleScrollToContact();
          setContactMessage(prev => prev + (prev ? '\n' : '') + 'Baseline Case Study Reference: ' + selectedProject?.title);
        }}
      />

    </div>
  );
}
