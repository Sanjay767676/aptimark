import { useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!titleRef.current || !subtitleRef.current) return;

    // Split text for animation
    const splitTitle = new SplitType(titleRef.current, { types: 'chars,words' });
    const splitSubtitle = new SplitType(subtitleRef.current, { types: 'lines' });

    const tl = gsap.timeline();

    // Jitter-style text reveal (Kinetic Typography)
    tl.from(splitTitle.chars, {
      opacity: 0,
      y: 100,
      rotateX: -100,
      scale: 0.5,
      stagger: {
        each: 0.03,
        from: "random"
      },
      duration: 1.2,
      ease: 'elastic.out(1, 0.5)',
    })
    .from(splitSubtitle.lines, {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 1,
      ease: 'power4.out',
    }, '-=0.8')
    .from('.hero-cta', {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.8,
      ease: 'back.out(1.7)',
    }, '-=0.5');

    // Mouse move effect for 3D tilt on the card
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const rotateX = (clientY / innerHeight - 0.5) * 30;
      const rotateY = (clientX / innerWidth - 0.5) * -30;

      gsap.to(cardRef.current, {
        rotateX,
        rotateY,
        duration: 0.8,
        ease: 'power3.out'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      splitTitle.revert();
      splitSubtitle.revert();
    };
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-transparent">
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none grid-bg" />
        
        {/* Animated Background Blobs (Liquid) - Optimized */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none will-change-transform" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            x: [0, -40, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-brand-secondary/10 rounded-full blur-[120px] pointer-events-none will-change-transform" 
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-3/5 text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full liquid-glass mb-8 shadow-sm"
              >
                <Star size={14} className="text-brand-primary fill-brand-primary" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600">
                  Next-Gen Digital Solutions
                </span>
              </motion.div>

              <h1 ref={titleRef} className="text-6xl md:text-[110px] font-display font-bold leading-[0.85] mb-10 text-slate-900 tracking-[-0.06em] perspective-1000">
                Engineering <br />
                <span className="text-gradient">Intelligent</span> <br />
                Digital Futures.
              </h1>

              <p ref={subtitleRef} className="text-slate-600 text-xl md:text-2xl mb-14 max-w-2xl font-medium leading-relaxed opacity-80">
                Aptimark Solutions bridges the gap between complex technology and business success 
                through high-performance digital experiences and AI.
              </p>

              <div className="hero-cta flex flex-col sm:flex-row items-start gap-6">
                <a 
                  href="#contact" 
                  className="group px-12 py-6 bg-slate-900 text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-brand-primary transition-all duration-500 flex items-center gap-3 shadow-2xl shadow-slate-900/30"
                >
                  Start Your Project <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </a>
                <a 
                  href="#services" 
                  className="px-12 py-6 liquid-glass text-slate-900 border border-white/60 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-white/60 transition-all duration-500 shadow-sm"
                >
                  Our Services
                </a>
              </div>
            </div>

            <div className="lg:w-2/5 relative perspective-1000">
              <div ref={cardRef} className="floating-card liquid-glass p-1 w-full max-w-md mx-auto preserve-3d rounded-[3rem]">
                <div className="bg-white/30 backdrop-blur-2xl rounded-[2.9rem] p-12">
                  <div className="flex items-center gap-5 mb-10">
                    <div className="w-16 h-16 rounded-2xl bg-white/50 flex items-center justify-center text-brand-primary shadow-sm">
                      <Sparkles size={32} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">AI Integration</div>
                      <div className="text-2xl font-bold text-slate-900">Smart Automation</div>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="h-3 w-full bg-slate-900/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '85%' }}
                        transition={{ delay: 1, duration: 2, ease: "circOut" }}
                        className="h-full bg-linear-to-r from-brand-primary to-brand-secondary"
                      />
                    </div>
                    <div className="h-3 w-[70%] bg-slate-900/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '60%' }}
                        transition={{ delay: 1.2, duration: 2, ease: "circOut" }}
                        className="h-full bg-linear-to-r from-brand-secondary to-brand-primary"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-5 pt-6">
                      <div className="h-24 bg-white/40 rounded-3xl border border-white/50 shadow-sm" />
                      <div className="h-24 bg-white/40 rounded-3xl border border-white/50 shadow-sm" />
                      <div className="h-24 bg-white/40 rounded-3xl border border-white/50 shadow-sm" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Floating Elements (Liquid) */}
              <motion.div 
                animate={{ 
                  y: [0, -30, 0],
                  rotate: [0, 15, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -right-12 w-28 h-28 liquid-glass rounded-3xl flex items-center justify-center shadow-xl"
              >
                <Sparkles className="text-brand-primary" size={36} />
              </motion.div>
            </div>
          </div>
        </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-12 bg-linear-to-b from-brand-primary to-transparent" />
      </motion.div>
    </section>
  );
}
