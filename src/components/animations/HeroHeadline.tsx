import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const accentClass = 'italic text-brand-primary font-medium';

function splitChars(el: HTMLElement, text: string): HTMLSpanElement[] {
  el.textContent = '';
  const inners: HTMLSpanElement[] = [];

  text.split('').forEach((char) => {
    const mask = document.createElement('span');
    mask.className = 'hero-char-mask';
    const inner = document.createElement('span');
    inner.className = 'inline-block';
    inner.textContent = char === ' ' ? '\u00A0' : char;
    mask.appendChild(inner);
    el.appendChild(mask);
    inners.push(inner);
  });

  return inners;
}

export default function HeroHeadline() {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const weBuildRef = useRef<HTMLSpanElement>(null);
  const digitalRef = useRef<HTMLSpanElement>(null);
  const experiencesRef = useRef<HTMLSpanElement>(null);
  const thatRef = useRef<HTMLSpanElement>(null);
  const performRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const weBuild = weBuildRef.current;
      const digital = digitalRef.current;
      const experiences = experiencesRef.current;
      const that = thatRef.current;
      const perform = performRef.current;
      if (!weBuild || !digital || !experiences || !that || !perform) return;

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set([weBuild, digital, experiences, that, perform], {
          autoAlpha: 1,
          clearProps: 'all',
        });
      });

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const digitalChars = splitChars(digital, digital.textContent ?? 'Digital');
        const experienceChars = splitChars(
          experiences,
          experiences.textContent ?? 'Experiences'
        );

        gsap.set(weBuild, {
          clipPath: 'inset(100% 0 0 0)',
          y: 20,
          autoAlpha: 0,
        });
        gsap.set(digitalChars, { yPercent: 110, autoAlpha: 0 });
        gsap.set(experienceChars, { yPercent: 110, autoAlpha: 0 });
        gsap.set(that, { x: 24, filter: 'blur(8px)', autoAlpha: 0 });
        gsap.set(perform, { x: 32, filter: 'blur(12px)', autoAlpha: 0 });

        const tl = gsap.timeline({ delay: 0.2, defaults: { ease: 'power3.out' } });

        tl.to(weBuild, {
          clipPath: 'inset(0% 0 0 0)',
          y: 0,
          autoAlpha: 1,
          duration: 1.1,
          ease: 'power4.out',
        });

        tl.to(
          digitalChars,
          {
            yPercent: 0,
            autoAlpha: 1,
            duration: 0.7,
            stagger: 0.04,
            ease: 'power3.out',
          },
          '-=0.6'
        );

        tl.to(
          experienceChars,
          {
            yPercent: 0,
            autoAlpha: 1,
            duration: 0.75,
            stagger: { each: 0.034, from: 'center' },
            ease: 'power3.out',
          },
          '-=0.35'
        );

        tl.to(
          that,
          {
            x: 0,
            filter: 'blur(0px)',
            autoAlpha: 1,
            duration: 0.85,
            ease: 'power2.out',
          },
          '-=0.4'
        );

        tl.to(
          perform,
          {
            x: 0,
            filter: 'blur(0px)',
            autoAlpha: 1,
            duration: 1,
            ease: 'power2.out',
            onComplete: () => {
              digital.querySelectorAll('.hero-char-mask').forEach((mask) => {
                (mask as HTMLElement).style.overflow = 'visible';
              });
              experiences.querySelectorAll('.hero-char-mask').forEach((mask) => {
                (mask as HTMLElement).style.overflow = 'visible';
              });
            },
          },
          '-=0.55'
        );
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <h1
      ref={containerRef}
      className="hero-headline font-headline text-[2.75rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[6.5rem] text-brand-charcoal tracking-tight max-w-4xl mx-auto mb-10 font-bold select-none text-center overflow-visible"
    >
      <span className="hero-headline-line block">
        <span ref={weBuildRef} className="inline">
          We Build{' '}
        </span>
        <span ref={digitalRef} className={`${accentClass} inline`}>
          Digital
        </span>
      </span>
      <span className="hero-headline-line block">
        <span ref={experiencesRef} className={`${accentClass} inline`}>
          Experiences
        </span>
        <span ref={thatRef} className="inline">
          {' '}
          That
        </span>
      </span>
      <span className="hero-headline-line block">
        <span ref={performRef} className="inline">
          Perform
        </span>
      </span>
    </h1>
  );
}
