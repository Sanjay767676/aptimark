import { Twitter, Linkedin, Github, Mail, MapPin, Phone, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white pt-32 pb-12 border-t border-slate-100 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none grid-bg" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <a href="#" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center group-hover:bg-brand-primary transition-all duration-500 shadow-xl shadow-slate-900/10">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-display font-bold tracking-tighter text-slate-900">
                Aptimark<span className="text-brand-primary">.</span>
              </span>
            </a>
            <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-xs">
              Engineering the digital infrastructure for the next generation of visionary enterprises.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-2xl liquid-glass flex items-center justify-center text-slate-600 hover:bg-brand-primary hover:text-white transition-all duration-500 shadow-sm"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold uppercase tracking-[0.2em] text-[10px] mb-10">Services</h4>
            <ul className="space-y-5">
              {['Web Development', 'Mobile Apps', 'Cloud Solutions', 'AI Integration', 'UI/UX Design'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-brand-primary transition-colors text-sm font-bold">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold uppercase tracking-[0.2em] text-[10px] mb-10">Company</h4>
            <ul className="space-y-5">
              {['About Us', 'Our Team', 'Careers', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-brand-primary transition-colors text-sm font-bold">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold uppercase tracking-[0.2em] text-[10px] mb-10">Contact Us</h4>
            <ul className="space-y-8">
              <li className="flex items-start space-x-5">
                <div className="w-10 h-10 rounded-xl liquid-glass flex items-center justify-center text-brand-primary shrink-0">
                  <MapPin size={18} />
                </div>
                <span className="text-slate-500 text-sm font-bold leading-relaxed">
                  123 Innovation Drive, Tech City, TC 54321
                </span>
              </li>
              <li className="flex items-center space-x-5">
                <div className="w-10 h-10 rounded-xl liquid-glass flex items-center justify-center text-brand-primary shrink-0">
                  <Phone size={18} />
                </div>
                <span className="text-slate-500 text-sm font-bold">+1 (555) 000-0000</span>
              </li>
              <li className="flex items-center space-x-5">
                <div className="w-10 h-10 rounded-xl liquid-glass flex items-center justify-center text-brand-primary shrink-0">
                  <Mail size={18} />
                </div>
                <span className="text-slate-500 text-sm font-bold">hello@aptimark.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Aptimark Solutions. Built for the future.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-slate-900 transition-all"
          >
            Back to top 
            <div className="w-14 h-14 rounded-2xl liquid-glass border border-white/60 flex items-center justify-center group-hover:-translate-y-2 transition-all duration-500 shadow-sm">
              <ArrowUp size={20} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
