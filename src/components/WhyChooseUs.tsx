import { useRef } from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Heart, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'Security First',
    description: 'We prioritize the safety of your data with enterprise-grade security protocols.',
    icon: Shield,
    color: 'brand-primary'
  },
  {
    title: 'Lightning Fast',
    description: 'Our solutions are optimized for speed, ensuring a seamless user experience.',
    icon: Zap,
    color: 'brand-secondary'
  },
  {
    title: 'Client Centric',
    description: 'We build relationships, not just products. Your success is our priority.',
    icon: Heart,
    color: 'brand-primary'
  },
  {
    title: 'Award Winning',
    description: 'Recognized for excellence in design and technical implementation.',
    icon: Award,
    color: 'brand-secondary'
  }
];

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!titleRef.current) return;
    const splitTitle = new SplitType(titleRef.current, { types: 'chars' });
    
    gsap.from(splitTitle.chars, {
      scrollTrigger: {
        trigger: titleRef.current,
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
    <section id="why-us" ref={containerRef} className="py-32 bg-transparent relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none grid-bg" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-brand-primary text-xs font-bold uppercase tracking-[0.4em] mb-8 block"
            >
              Our Advantage
            </motion.span>
            <h2 ref={titleRef} className="text-6xl md:text-[90px] font-bold tracking-tight leading-[0.9] text-slate-900 mb-10">
              Why Partner <br />
              With <span className="text-gradient">Aptimark</span>?
            </h2>
            <p className="text-slate-600 text-xl font-medium leading-relaxed mb-16 max-w-xl opacity-80">
              We combine technical prowess with creative vision to deliver results that exceed expectations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="flex flex-col gap-5"
                >
                  <div className={`w-14 h-14 rounded-2xl liquid-glass flex items-center justify-center text-slate-900 shadow-sm`}>
                    <feature.icon size={28} />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">{feature.title}</h4>
                  <p className="text-slate-600 font-medium leading-relaxed opacity-70">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="liquid-glass p-1 rounded-[4rem] shadow-2xl">
              <div className="bg-white/30 backdrop-blur-2xl rounded-[3.9rem] p-16">
                <div className="space-y-12">
                  {[
                    { label: 'Innovation Index', value: 98 },
                    { label: 'Client Satisfaction', value: 100 },
                    { label: 'Technical Debt', value: 5 },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="flex justify-between items-end mb-6">
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">{stat.label}</span>
                        <span className="text-3xl font-bold text-slate-900 tracking-tighter">{stat.value}%</span>
                      </div>
                      <div className="h-3 w-full bg-slate-900/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${stat.value}%` }}
                          transition={{ duration: 2, ease: 'circOut' }}
                          className="h-full bg-linear-to-r from-brand-primary to-brand-secondary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
