import { useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

interface HeroEntranceProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function HeroEntrance({ children, className = '', delay = 0 }: HeroEntranceProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(el, { autoAlpha: 1, clearProps: 'all' });
      });

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          el,
          { y: 32, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 1, delay, ease: 'power3.out' }
        );
      });

      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
