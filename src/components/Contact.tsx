import { useRef } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
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
    <section id="contact" ref={containerRef} className="py-32 bg-transparent relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none grid-bg" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24">
          <div className="lg:w-1/3">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-brand-primary text-xs font-bold uppercase tracking-[0.4em] mb-8 block"
            >
              Get in Touch
            </motion.span>
            <h2 ref={titleRef} className="text-6xl md:text-[90px] font-bold mb-12 tracking-tight leading-[0.9] text-slate-900">
              Let's <br />
              <span className="text-gradient">Connect.</span>
            </h2>
            <p className="text-slate-600 text-xl leading-relaxed mb-16 font-medium opacity-80">
              Ready to transform your digital presence? Reach out and let's build something extraordinary together.
            </p>
            
            <div className="space-y-10">
              {[
                { label: 'Email Us', value: 'hello@aptimark.com', icon: Mail, color: 'brand-primary' },
                { label: 'Call Us', value: '+1 (555) 000-0000', icon: Phone, color: 'brand-secondary' },
                { label: 'Visit Us', value: 'Silicon Valley, CA', icon: MapPin, color: 'brand-primary' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-8">
                  <div className="w-14 h-14 rounded-2xl liquid-glass flex items-center justify-center text-slate-900 shadow-sm">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-2">{item.label}</div>
                    <div className="text-xl font-bold text-slate-900">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="liquid-glass p-1 rounded-[3rem] shadow-2xl">
              <div className="bg-white/30 backdrop-blur-2xl rounded-[2.9rem] p-16">
                <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 ml-2">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-8 py-5 bg-white/20 backdrop-blur-xl border border-white/40 rounded-2xl focus:outline-none focus:border-brand-primary focus:bg-white/40 transition-all text-slate-900 font-bold placeholder:text-slate-400 shadow-sm"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 ml-2">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full px-8 py-5 bg-white/20 backdrop-blur-xl border border-white/40 rounded-2xl focus:outline-none focus:border-brand-primary focus:bg-white/40 transition-all text-slate-900 font-bold placeholder:text-slate-400 shadow-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 ml-2">Message</label>
                    <textarea 
                      rows={6} 
                      placeholder="Tell us about your project..."
                      className="w-full px-8 py-5 bg-white/20 backdrop-blur-xl border border-white/40 rounded-2xl focus:outline-none focus:border-brand-primary focus:bg-white/40 transition-all text-slate-900 font-bold resize-none placeholder:text-slate-400 shadow-sm"
                    />
                  </div>
                  <button className="w-full py-6 bg-slate-900 text-white font-bold rounded-2xl hover:bg-brand-primary transition-all shadow-2xl shadow-slate-900/20 flex items-center justify-center gap-4 uppercase tracking-[0.3em] text-xs">
                    Send Message <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
