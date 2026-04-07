import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Team', href: '#team' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'py-4' : 'py-8'
    }`}>
      <div className="container mx-auto px-6">
        <div className={`liquid-glass border-glow p-1 transition-all duration-500 rounded-[2.5rem] ${
          scrolled ? 'bg-white/30 shadow-2xl shadow-slate-900/5' : 'bg-transparent border-transparent shadow-none'
        }`}>
          <div className={`flex items-center justify-between px-8 py-4 rounded-[2.4rem] transition-all ${
            scrolled ? 'bg-white/30 backdrop-blur-2xl' : ''
          }`}>
            {/* Logo */}
            <a href="#" className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center group-hover:bg-brand-primary transition-all duration-500 shadow-2xl shadow-slate-900/30">
                <span className="text-white font-bold text-2xl tracking-tighter">A</span>
              </div>
              <span className="text-2xl font-display font-bold tracking-tighter text-slate-900">
                Aptimark<span className="text-brand-primary">.</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600 hover:text-brand-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="px-8 py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-brand-primary transition-all duration-500 shadow-2xl shadow-slate-900/20 flex items-center gap-3"
              >
                Get Started <ArrowRight size={16} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden w-12 h-12 rounded-2xl liquid-glass flex items-center justify-center text-slate-900 shadow-sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full px-6 pt-4 md:hidden"
          >
            <div className="liquid-glass border-glow p-1 rounded-[2.5rem]">
              <div className="bg-white/30 backdrop-blur-2xl rounded-[2.4rem] p-10 space-y-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-xl font-bold text-slate-900 hover:text-brand-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="block w-full py-5 bg-slate-900 text-white rounded-2xl text-center font-bold uppercase tracking-[0.3em] text-xs shadow-xl shadow-slate-900/20"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
