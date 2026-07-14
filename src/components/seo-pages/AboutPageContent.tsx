"use client";

import Link from 'next/link';
import { Award, CheckCircle, Globe, Search, RefreshCw, Smartphone, Settings, Users, Target, TrendingUp, Shield } from 'lucide-react';

const teamMembers = [
  {
    name: 'Arjun Krishnamurthy',
    role: 'Founder & Lead Architect',
    bio: 'Former Google engineer with 12+ years building scalable web systems. Specializes in SEO-first architecture and performance optimization. Led digital transformations for 50+ enterprises across India.',
    credentials: ['Google Certified Professional', 'AWS Solutions Architect', 'Meta Blueprint Certified'],
    expertise: ['Next.js', 'React', 'Node.js', 'Cloud Architecture'],
    linkedin: 'https://linkedin.com/in/arjun-krishnamurthy',
  },
  {
    name: 'Priya Venkatesh',
    role: 'Head of SEO & Content Strategy',
    bio: 'Award-winning SEO strategist with 8+ years experience. Former SEO lead at Freshworks. Published author on Search Engine Journal. Has driven 500% organic growth for multiple SaaS companies.',
    credentials: ['Google Analytics Certified', 'HubSpot SEO Certified', 'Semrush Certified'],
    expertise: ['Technical SEO', 'Content Strategy', 'Schema Markup', 'Analytics'],
    linkedin: 'https://linkedin.com/in/priya-venkatesh',
  },
  {
    name: 'Karthik Subramanian',
    role: 'Senior Frontend Engineer',
    bio: 'React and TypeScript expert with 7+ years building performant web applications. Core contributor to open-source projects. Passionate about accessibility and web standards.',
    credentials: ['Meta Frontend Developer Certified', 'W3C Accessibility Certified'],
    expertise: ['React 19', 'TypeScript', 'GSAP', 'Accessibility'],
    linkedin: 'https://linkedin.com/in/karthik-subramanian',
  },
  {
    name: 'Meera Rajesh',
    role: 'UX Design Lead',
    bio: 'Human-centered design specialist with 6+ years creating intuitive digital experiences. Previously at Flipkart and Razorpay. Advocates for design systems that scale.',
    credentials: ['Google UX Design Certified', 'IDEO U Certified'],
    expertise: ['UI/UX Design', 'Design Systems', 'Figma', 'User Research'],
    linkedin: 'https://linkedin.com/in/meera-rajesh',
  },
];

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '99+', label: 'Average Lighthouse Score' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '10+', label: 'Years Experience' },
];

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Performance-First',
    description: 'Every line of code is optimized for speed. We guarantee 95+ Lighthouse scores on every project we deliver.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'SEO by Architecture',
    description: 'SEO is not an afterthought—it is built into our development process from day one through semantic HTML, structured data, and clean URLs.',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Measurable Results',
    description: 'We track and report on Core Web Vitals, organic traffic growth, and conversion metrics for every client engagement.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Client Partnership',
    description: 'We work as an extension of your team, with transparent communication, regular demos, and collaborative decision-making.',
  },
];

export default function AboutPageContent() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-charcoal selection:bg-brand-primary/20 selection:text-brand-primary scroll-smooth">
      {/* Hero Section */}
      <section className="py-20 px-6 sm:px-10 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <span className="font-sans text-xs uppercase tracking-widest text-brand-primary font-bold mb-4 block">
            About Aptimark Solutions
          </span>
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-brand-charcoal font-semibold tracking-tight mb-6">
            We build digital systems that rank.
          </h1>
          <p className="font-sans text-lg text-brand-text-muted leading-relaxed mb-8">
            Aptimark Solutions is a Coimbatore-based web development and SEO agency specializing in building 
            high-performance, SEO-friendly websites and applications. We combine technical excellence with 
            data-driven strategy to help businesses dominate search rankings and convert visitors into customers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-brand-primary text-white px-6 py-3 rounded-lg font-sans font-semibold hover:bg-brand-primary/90 transition-colors"
            >
              Work With Us
            </Link>
            <Link
              href="/portfolio"
              className="border border-brand-outline px-6 py-3 rounded-lg font-sans font-semibold hover:bg-brand-surface-low transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-brand-surface-low border-y border-brand-outline-variant/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="font-headline text-4xl sm:text-5xl font-bold text-brand-primary block">
                  {stat.value}
                </span>
                <span className="font-sans text-sm text-brand-text-muted uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6 sm:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-sans text-xs uppercase tracking-widest text-brand-primary font-bold mb-4 block">
              Our Story
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-brand-charcoal font-semibold mb-6">
              From Coimbatore to Global Clients
            </h2>
            <div className="space-y-4 font-sans text-brand-text-muted leading-relaxed">
              <p>
                Founded in 2014 in Coimbatore, Tamil Nadu, Aptimark Solutions began with a simple mission: 
                build websites that actually rank. While other agencies treated SEO as an afterthought, 
                we architect every project with search engine visibility as a core requirement.
              </p>
              <p>
                Over the past decade, we have delivered 50+ projects for clients across India, the US, 
                and the Middle East. Our work spans fintech dashboards, e-commerce platforms, SaaS 
                applications, and enterprise web systems—all built with clean, crawlable code that 
                search engines reward.
              </p>
              <p>
                Our team of 12 experts combines deep technical knowledge with strategic SEO thinking. 
                We are not just developers—we are digital architects who understand that a beautiful 
                website means nothing if nobody can find it.
              </p>
            </div>
          </div>
          <div className="bg-brand-surface-low rounded-2xl p-8 border border-brand-outline-variant/30">
            <h3 className="font-headline text-2xl text-brand-charcoal font-semibold mb-6">
              Why Clients Choose Us
            </h3>
            <ul className="space-y-4">
              {[
                'Guaranteed 95+ Lighthouse scores on every project',
                'SEO-first architecture from day one',
                'Transparent pricing with no hidden fees',
                'Dedicated project manager for every engagement',
                'Post-launch support and maintenance plans',
                'Local team in Coimbatore with global delivery standards',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                  <span className="font-sans text-brand-text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-brand-surface-low">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-16">
            <span className="font-sans text-xs uppercase tracking-widest text-brand-primary font-bold mb-4 block">
              Our Values
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-brand-charcoal font-semibold">
              What Guides Our Work
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 border border-brand-outline/20 shadow-sm"
              >
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary mb-4">
                  {value.icon}
                </div>
                <h3 className="font-headline text-xl text-brand-charcoal font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="font-sans text-sm text-brand-text-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 sm:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-sans text-xs uppercase tracking-widest text-brand-primary font-bold mb-4 block">
            Our Team
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl text-brand-charcoal font-semibold mb-4">
            Meet the Experts Behind Aptimark
          </h2>
          <p className="font-sans text-brand-text-muted max-w-2xl mx-auto">
            Our team combines deep technical expertise with strategic thinking. Every member brings 
            specialized skills that contribute to delivering exceptional results for our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="bg-white rounded-2xl p-8 border border-brand-outline/20 shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-headline text-xl text-brand-charcoal font-semibold">
                    {member.name}
                  </h3>
                  <p className="font-sans text-sm text-brand-primary font-medium">
                    {member.role}
                  </p>
                </div>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-text-muted hover:text-brand-primary transition-colors"
                  aria-label={`${member.name} LinkedIn profile`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
              <p className="font-sans text-sm text-brand-text-muted leading-relaxed mb-4">
                {member.bio}
              </p>
              <div className="mb-4">
                <span className="font-sans text-xs uppercase tracking-wider text-brand-charcoal font-bold block mb-2">
                  Credentials
                </span>
                <div className="flex flex-wrap gap-2">
                  {member.credentials.map((cred) => (
                    <span
                      key={cred}
                      className="inline-flex items-center gap-1 text-xs bg-brand-primary/10 text-brand-primary px-2 py-1 rounded-full font-medium"
                    >
                      <Award className="w-3 h-3" />
                      {cred}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="font-sans text-xs uppercase tracking-wider text-brand-charcoal font-bold block mb-2">
                  Expertise
                </span>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-brand-surface-low text-brand-text-muted px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-brand-surface-low">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-16">
            <span className="font-sans text-xs uppercase tracking-widest text-brand-primary font-bold mb-4 block">
              What We Do
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-brand-charcoal font-semibold mb-4">
              Our Core Services
            </h2>
            <p className="font-sans text-brand-text-muted max-w-2xl mx-auto">
              We specialize in building high-performance digital systems that drive business growth 
              through technical excellence and strategic SEO.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Globe className="w-6 h-6" />,
                title: 'Website Development',
                description: 'Custom-built, SEO-friendly websites using Next.js, React, and modern frameworks. Guaranteed 95+ Lighthouse scores.',
              },
              {
                icon: <Search className="w-6 h-6" />,
                title: 'SEO Strategy',
                description: 'Technical SEO audits, keyword strategy, schema markup, and content optimization for sustainable organic growth.',
              },
              {
                icon: <Smartphone className="w-6 h-6" />,
                title: 'App Development',
                description: 'Cross-platform mobile applications using React Native and Expo with native performance and offline capabilities.',
              },
              {
                icon: <RefreshCw className="w-6 h-6" />,
                title: 'Legacy Refactoring',
                description: 'Modernize aging codebases without losing institutional knowledge. Migrate to TypeScript, Vite, and modern stacks.',
              },
              {
                icon: <Settings className="w-6 h-6" />,
                title: 'Custom IT Solutions',
                description: 'Tailored business systems, API architectures, cloud deployments, and DevOps automation for enterprise needs.',
              },
            ].map((service) => (
              <Link
                key={service.title}
                href="/services"
                className="bg-white rounded-2xl p-6 border border-brand-outline/20 shadow-sm hover:-translate-y-1 hover:border-brand-primary/30 transition-all"
              >
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary mb-4">
                  {service.icon}
                </div>
                <h3 className="font-headline text-lg text-brand-charcoal font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-brand-text-muted leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-lg font-sans font-semibold hover:bg-brand-primary/90 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 sm:px-10 max-w-7xl mx-auto text-center">
        <h2 className="font-headline text-3xl sm:text-4xl text-brand-charcoal font-semibold mb-4">
          Ready to Build Something Exceptional?
        </h2>
        <p className="font-sans text-brand-text-muted max-w-xl mx-auto mb-8">
          Let us help you create a digital presence that ranks, converts, and scales. 
          Contact us for a free consultation and project proposal.
        </p>
        <Link
          href="/contact"
          className="bg-brand-primary text-white px-8 py-4 rounded-lg font-sans font-bold hover:bg-brand-primary/90 transition-colors"
        >
          Start Your Project
        </Link>
      </section>
    </main>
  );
}
