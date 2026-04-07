import { useRef } from 'react';
import { motion } from 'motion/react';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Search, 
  Cpu, 
  BarChart,
  ArrowRight,
  Brain,
  Rocket
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Web Development',
    description: 'Bespoke, high-performance websites built with the latest frameworks.',
    icon: Globe,
    color: 'brand-primary'
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile solutions for iOS and Android.',
    icon: Smartphone,
    color: 'brand-secondary'
  },
  {
    title: 'AI Integration',
    description: 'Automate your workflows with custom AI-powered solutions.',
    icon: Brain,
    color: 'brand-primary'
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven strategies to scale your brand and reach new heights.',
    icon: BarChart,
    color: 'brand-secondary'
  },
  {
    title: 'Modernization',
    description: 'Optimizing legacy systems for better performance and scalability.',
    icon: Rocket,
    color: 'brand-primary'
  },
  {
    title: 'IT Consulting',
    description: 'End-to-end technical support and strategy for your business.',
    icon: Code,
    color: 'brand-secondary'
  }
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!headerRef.current) return;

    const splitTitle = new SplitType(headerRef.current.querySelector('h2')!, { types: 'chars' });
    
    gsap.from(splitTitle.chars, {
      scrollTrigger: {
        trigger: headerRef.current,
        start: 'top 80%',
      },
      opacity: 0,
      y: 40,
      rotateX: -90,
      stagger: 0.02,
      duration: 0.8,
      ease: 'back.out(1.7)'
    });

    return () => splitTitle.revert();
  }, { scope: containerRef });

  return (
    <section id="services" ref={containerRef} className="py-32 bg-transparent relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none grid-bg" />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={headerRef} className="max-w-4xl mb-32">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-brand-primary text-xs font-bold uppercase tracking-[0.4em] mb-6 block"
          >
            Our Expertise
          </motion.span>
          <h2 className="text-6xl md:text-[90px] font-bold tracking-tight leading-[0.9] text-slate-900">
            Solutions That <br />
            <span className="text-gradient">Scale</span> Your Vision.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "circOut" }}
              className="liquid-glass border-glow p-1 group rounded-[3rem]"
            >
              <div className="bg-white/30 backdrop-blur-2xl rounded-[2.9rem] p-12 h-full flex flex-col">
                <div className={`w-20 h-20 rounded-[1.5rem] liquid-glass flex items-center justify-center text-slate-900 mb-10 group-hover:bg-brand-primary group-hover:text-white transition-all duration-700 shadow-sm transform group-hover:rotate-12`}>
                  <service.icon size={36} />
                </div>
                <h4 className="text-3xl font-bold mb-6 text-slate-900">{service.title}</h4>
                <p className="text-slate-600 font-medium leading-relaxed mb-10 flex-grow opacity-80">
                  {service.description}
                </p>
                <a href="#contact" className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-900 group/link">
                  Explore Solution <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform duration-500" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
