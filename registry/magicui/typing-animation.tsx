import { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';

interface TypingAnimationProps {
  children: string;
  className?: string;
  speed?: number;
  cursorClassName?: string;
  startDelay?: number;
  onComplete?: () => void;
}

export function TypingAnimation({
  children,
  className = '',
  speed = 80,
  cursorClassName = '',
  startDelay = 0,
  onComplete,
}: TypingAnimationProps) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [visibleLength, setVisibleLength] = useState(0);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(media.matches);

    update();
    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', update);
      return () => media.removeEventListener('change', update);
    }

    media.addListener(update);
    return () => media.removeListener(update);
  }, []);

  const characters = useMemo(() => Array.from(children), [children]);

  useEffect(() => {
    let intervalId: number | undefined;

    if (reducedMotion) {
      setVisibleLength(characters.length);
    } else {
      setVisibleLength(0);
      const startTimer = window.setTimeout(() => {
        let index = 0;
        intervalId = window.setInterval(() => {
          index += 1;
          setVisibleLength(index);
          if (index >= characters.length) {
            if (intervalId !== undefined) {
              window.clearInterval(intervalId);
            }
            onComplete?.();
          }
        }, speed);
      }, startDelay);

      return () => {
        window.clearTimeout(startTimer);
        if (intervalId !== undefined) {
          window.clearInterval(intervalId);
        }
      };
    }
  }, [children, characters.length, onComplete, reducedMotion, speed, startDelay]);

  return (
    <motion.span
      className={`inline-flex items-center ${className}`.trim()}
      aria-label={children}
      initial={reducedMotion ? false : { opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <span aria-hidden="true">
        {characters.slice(0, visibleLength).map((character, index) => (
          <span key={`${character}-${index}`} className="inline-block">
            {character === ' ' ? '\u00A0' : character}
          </span>
        ))}
      </span>
      {!reducedMotion && visibleLength < characters.length ? (
        <motion.span
          className={`inline-block ml-0.5 ${cursorClassName}`.trim()}
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          |
        </motion.span>
      ) : null}
    </motion.span>
  );
}
