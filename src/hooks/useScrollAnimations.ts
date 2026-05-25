import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimations(enabled = true) {
  useEffect(() => {
    if (!enabled) return;

    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set(
        '.gsap-mask-reveal, .gsap-reveal-text, .gsap-stagger-child, .gsap-line-reveal, .gsap-scroll-card, .gsap-portfolio-row, .gsap-reveal',
        { autoAlpha: 1, clearProps: 'all' }
      );
    });

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      let idleHandle: number | null = null;

      const setup = () => {
        gsap.set('.gsap-mask-reveal', {
          clipPath: 'inset(100% 0 0 0)',
          y: 36,
          autoAlpha: 0,
        });
        gsap.set('.gsap-reveal-text, .gsap-reveal', { y: 44, autoAlpha: 0 });
        gsap.set('.gsap-line-reveal', { x: -28, y: 0, autoAlpha: 0 });
        gsap.set('.gsap-scroll-card', { y: 56, autoAlpha: 0, scale: 0.98 });
        gsap.set('.gsap-portfolio-row', { y: 72, autoAlpha: 0 });

        gsap.utils.toArray<HTMLElement>('.gsap-mask-reveal').forEach((target) => {
          gsap.to(target, {
            clipPath: 'inset(0% 0 0 0)',
            y: 0,
            autoAlpha: 1,
            duration: 1.35,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: target,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          });
        });

        gsap.utils.toArray<HTMLElement>('.gsap-reveal-text').forEach((target) => {
          gsap.to(target, {
            y: 0,
            autoAlpha: 1,
            duration: 1.05,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: target,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          });
        });

        gsap.utils.toArray<HTMLElement>('.gsap-line-reveal').forEach((target) => {
          gsap.to(target, {
            x: 0,
            autoAlpha: 1,
            duration: 0.95,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: target,
              start: 'top 92%',
              toggleActions: 'play none none none',
            },
          });
        });

        gsap.utils.toArray<HTMLElement>('.gsap-reveal').forEach((target) => {
          gsap.to(target, {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: target,
              start: 'top 86%',
              toggleActions: 'play none none none',
            },
          });
        });

        gsap.utils.toArray<HTMLElement>('.gsap-stagger-container').forEach((container) => {
          const children = container.querySelectorAll<HTMLElement>('.gsap-stagger-child');
          if (!children.length) return;

          gsap.to(children, {
            y: 0,
            autoAlpha: 1,
            duration: 0.9,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
          });
        });

        ScrollTrigger.batch('.gsap-scroll-card', {
          start: 'top 88%',
          onEnter: (elements) => {
            gsap.to(elements, {
              y: 0,
              autoAlpha: 1,
              scale: 1,
              duration: 0.95,
              stagger: 0.12,
              ease: 'power3.out',
              overwrite: 'auto',
            });
          },
          once: true,
        });

        ScrollTrigger.batch('.gsap-portfolio-row', {
          start: 'top 85%',
          onEnter: (elements) => {
            gsap.to(elements, {
              y: 0,
              autoAlpha: 1,
              duration: 1.1,
              stagger: 0.18,
              ease: 'power3.out',
              overwrite: 'auto',
            });
          },
          once: true,
        });

        ScrollTrigger.refresh();
      };

      if (typeof (window as any).requestIdleCallback === 'function') {
        idleHandle = (window as any).requestIdleCallback(setup, { timeout: 500 });
      } else {
        idleHandle = window.setTimeout(setup, 250);
      }

      return () => {
        if (idleHandle != null) {
          if (typeof (window as any).cancelIdleCallback === 'function') {
            (window as any).cancelIdleCallback(idleHandle);
          } else {
            clearTimeout(idleHandle);
          }
        }
      };
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [enabled]);
}
