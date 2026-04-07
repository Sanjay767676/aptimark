import { useRef } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Rocket, Target, Users } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: 'Projects Completed', value: '250+', icon: Rocket },
  { label: 'Happy Clients', value: '120+', icon: Users },
  { label: 'Success Rate', value: '99%', icon: Target },
];

export default function About() {
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
    <section id="about" ref={containerRef} className="py-32 relative overflow-hidden bg-transparent">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none grid-bg" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="relative"
            >
              <div className="aspect-square rounded-[4rem] overflow-hidden liquid-glass p-1">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Our Team"
                  className="w-full h-full object-cover rounded-[3.9rem] transition-transform duration-1000 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Badge (Liquid Glass) */}
              <motion.div
                animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-12 -right-12 liquid-glass p-10 rounded-[2.5rem] shadow-2xl"
              >
                <div className="bg-white/40 backdrop-blur-xl rounded-[2.4rem] p-2">
                  <div className="text-5xl font-bold text-brand-primary mb-2 tracking-tighter">10+</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Years Excellence</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-brand-primary text-xs font-bold uppercase tracking-[0.4em] mb-8 block"
            >
              Who We Are
            </motion.span>
            <h2 ref={titleRef} className="text-6xl md:text-[90px] font-bold tracking-tight leading-[0.9] text-slate-900 mb-10">
              Empowering <br />
              <span className="text-gradient">Innovation</span> Through <br />
              Technology.
            </h2>
            <p className="text-slate-600 text-xl font-medium leading-relaxed mb-12 opacity-80">
              At Aptimark Solutions, we don't just build software; we engineer digital ecosystems that drive growth and efficiency. Our team of experts is dedicated to pushing the boundaries of what's possible.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
              {['Cutting-edge AI Integration', 'Scalable Cloud Solutions', 'User-Centric Design', '24/7 Technical Support'].map((item) => (
                <div key={item} className="flex items-center gap-4 text-slate-800 font-bold text-lg">
                  <div className="w-10 h-10 rounded-xl liquid-glass flex items-center justify-center text-brand-primary">
                    <CheckCircle2 size={20} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-16">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl font-bold text-slate-900 mb-2 tracking-tighter">{stat.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
