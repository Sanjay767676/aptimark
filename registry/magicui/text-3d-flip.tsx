import { type CSSProperties, useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';

type RotateDirection = 'top' | 'bottom';

interface Text3DFlipProps {
  children: string;
  className?: string;
  textClassName?: string;
  flipTextClassName?: string;
  rotateDirection?: RotateDirection;
  staggerDuration?: number;
  staggerFrom?: 'first' | 'center' | 'last';
}

export default function Text3DFlip({
  children,
  className = '',
  textClassName = '',
  flipTextClassName = '',
  rotateDirection = 'top',
  staggerDuration = 0.03,
  staggerFrom = 'first',
}: Text3DFlipProps) {
  const [reducedMotion, setReducedMotion] = useState(false);

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

  const chars = useMemo(() => Array.from(children), [children]);

  const staggerIndex = (index: number) => {
    if (staggerFrom === 'center') {
      const center = (chars.length - 1) / 2;
      return Math.abs(index - center);
    }

    if (staggerFrom === 'last') {
      return chars.length - 1 - index;
    }

    return index;
  };

  const initialRotation = rotateDirection === 'top' ? -88 : 88;

  const sharedStyles: CSSProperties = {
    transformStyle: 'preserve-3d',
    backfaceVisibility: 'hidden',
  };

  return (
    <motion.span
      className={`inline-flex items-center ${className}`.trim()}
      aria-label={children}
      initial={reducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      style={{ perspective: '1000px' }}
    >
      {chars.map((character, index) => {
        const delay = staggerIndex(index) * staggerDuration;
        const content = character === ' ' ? '\u00A0' : character;

        return (
          <span
            key={`char-${index}`}
            className={`inline-block overflow-hidden align-baseline ${textClassName}`.trim()}
            style={{ perspective: '1000px' }}
          >
            <motion.span
              className={`inline-block ${flipTextClassName}`.trim()}
              initial={
                reducedMotion
                  ? false
                  : {
                      rotateX: initialRotation,
                      y: rotateDirection === 'top' ? -4 : 4,
                      opacity: 0,
                    }
              }
              animate={{
                rotateX: 0,
                y: 0,
                opacity: 1,
              }}
              transition={{
                type: 'spring',
                damping: 22,
                stiffness: 180,
                delay,
              }}
              style={{
                ...sharedStyles,
                transformOrigin: rotateDirection === 'top' ? 'center top' : 'center bottom',
              }}
            >
              {content}
            </motion.span>
          </span>
        );
      })}
    </motion.span>
  );
}