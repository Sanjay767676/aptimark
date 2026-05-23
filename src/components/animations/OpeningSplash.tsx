import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

interface OpeningSplashProps {
  onComplete: () => void;
}

export default function OpeningSplash({ onComplete }: OpeningSplashProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLSpanElement>(null);
  const tldRef = useRef<HTMLSpanElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const overlay = overlayRef.current;
      const brand = brandRef.current;
      const tld = tldRef.current;
      const flash = flashRef.current;
      if (!overlay || !brand || !tld || !flash) return;

      document.body.style.overflow = 'hidden';

      const finish = () => {
        gsap.to(overlay, {
          autoAlpha: 0,
          duration: 0.65,
          ease: 'power2.inOut',
          onComplete: () => {
            document.body.style.overflow = '';
            onComplete();
          },
        });
      };

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(overlay, { autoAlpha: 1 });
        gsap.set([brand, tld], { autoAlpha: 1 });
        gsap.delayedCall(0.75, finish);
      });

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.set(overlay, { autoAlpha: 1 });
        gsap.set(flash, { autoAlpha: 0, scale: 0.6 });
        gsap.set([brand, tld], {
          autoAlpha: 0,
          scale: 0.92,
          filter: 'brightness(0.4)',
        });

        const pulseFlash = (targets: HTMLElement[], peak: number) => {
          gsap.to(flash, {
            autoAlpha: peak,
            scale: 1.35,
            duration: 0.07,
            ease: 'power2.in',
          });
          gsap.to(targets, {
            filter: 'brightness(3)',
            duration: 0.07,
            ease: 'power2.in',
          });
          gsap.to(flash, {
            autoAlpha: 0,
            scale: 1.6,
            duration: 0.35,
            ease: 'power2.out',
            delay: 0.07,
          });
          gsap.to(targets, {
            filter: 'brightness(1)',
            duration: 0.4,
            ease: 'power2.out',
            delay: 0.07,
          });
        };

        const tl = gsap.timeline({ delay: 0.15 });

        tl.to([brand, tld], {
          autoAlpha: 1,
          scale: 1,
          filter: 'brightness(0.7)',
          duration: 0.5,
          ease: 'power3.out',
        });

        tl.add(() => pulseFlash([brand, tld], 0.55), '+=0.12');
        tl.add(() => pulseFlash([brand, tld], 0.38), '+=0.28');
        tl.add(() => pulseFlash([brand, tld], 0.22), '+=0.32');

        tl.to([brand, tld], {
          filter: 'brightness(1.15)',
          duration: 0.25,
          ease: 'power1.inOut',
        });

        tl.to([brand, tld], {
          filter: 'brightness(1)',
          duration: 0.35,
          ease: 'power2.out',
        });

        tl.to({}, { duration: 0.35 });
        tl.add(finish);
      });

      return () => {
        mm.revert();
        document.body.style.overflow = '';
      };
    },
    { scope: overlayRef }
  );

  return (
    <div
      ref={overlayRef}
      className="opening-splash fixed inset-0 z-[200] flex items-center justify-center bg-black"
      aria-hidden="true"
    >
      <div ref={flashRef} className="opening-splash-flash pointer-events-none" aria-hidden="true" />

      <h1 className="opening-splash-logo font-headline text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] font-bold tracking-[0.12em] select-none relative z-10">
        <span ref={brandRef} className="opening-splash-silver">
          APTIMARK
        </span>
        <span ref={tldRef} className="opening-splash-cream">
          .in
        </span>
      </h1>
    </div>
  );
}
