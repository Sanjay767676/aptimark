import { useRef } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, ArrowLeft, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Visionary leader with 15+ years in digital strategy.'
  },
  {
    name: 'David Chen',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Expert in cloud architecture and AI integration.'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Design Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Award-winning designer focused on human-centric UI.'
  },
  {
    name: 'Marcus Thorne',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Full-stack wizard specializing in React and Node.'
  },
  {
    name: 'Aisha Patel',
    role: 'Product Manager',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Bridging the gap between user needs and tech.'
  },
  {
    name: 'James Wilson',
    role: 'Marketing Head',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Growth hacker with a passion for data analytics.'
  },
  {
    name: 'Sophie Lee',
    role: 'AI Researcher',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Pushing the boundaries of machine learning.'
  },
  {
    name: 'Robert Garcia',
    role: 'Security Lead',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Ensuring your digital assets are bulletproof.'
  },
  {
    name: 'Emma Thompson',
    role: 'UX Researcher',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Understanding the "why" behind user behavior.'
  },
  {
    name: 'Liam O\'Connor',
    role: 'DevOps Engineer',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Master of CI/CD and infrastructure as code.'
  }
];

export default function Team() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 400;
    const target = scrollRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
    
    gsap.to(scrollRef.current, {
      scrollLeft: target,
      duration: 0.8,
      ease: 'power2.out'
    });
  };

  useGSAP(() => {
    gsap.from('.team-card', {
      scrollTrigger: {
        trigger: scrollRef.current,
        start: 'top 80%',
      },
      opacity: 0,
      x: 100,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  return (
    <section id="team" ref={containerRef} className="py-32 bg-transparent relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none grid-bg" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-brand-primary text-xs font-bold uppercase tracking-[0.4em] mb-6 block"
            >
              The Collective
            </motion.span>
            <h2 className="text-5xl md:text-[80px] font-bold tracking-tight leading-[0.9] text-slate-900">
              Meet the <span className="text-gradient">Architects</span> <br /> of Innovation.
            </h2>
          </div>
          
          <div className="flex gap-6">
            <button 
              onClick={() => scroll('left')}
              className="w-16 h-16 rounded-2xl liquid-glass flex items-center justify-center hover:bg-white/80 transition-all text-slate-900 shadow-sm group"
            >
              <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center hover:bg-brand-primary transition-all shadow-2xl shadow-slate-900/20 group"
            >
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-10 overflow-x-auto pb-20 no-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {team.map((member) => (
            <div 
              key={member.name}
              className="team-card min-w-[350px] md:min-w-[450px] snap-start liquid-glass p-1 rounded-[3rem]"
            >
              <div className="bg-white/30 backdrop-blur-2xl rounded-[2.9rem] p-10 h-full flex flex-col">
                <div className="relative mb-10 group overflow-hidden rounded-[2rem] aspect-[4/5]">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-5">
                    {[Twitter, Linkedin, Github].map((Icon, i) => (
                      <button key={i} className="w-12 h-12 rounded-2xl bg-white/90 text-slate-900 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all shadow-lg transform translate-y-4 group-hover:translate-y-0" style={{ transitionDelay: `${i * 50}ms` }}>
                        <Icon size={20} />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h4 className="text-3xl font-bold text-slate-900 mb-2">{member.name}</h4>
                  <p className="text-brand-primary text-xs font-bold uppercase tracking-[0.2em] mb-6">{member.role}</p>
                  <p className="text-slate-600 font-medium leading-relaxed opacity-80">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
