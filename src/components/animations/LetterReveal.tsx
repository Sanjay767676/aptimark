import { motion } from 'motion/react';

interface LetterRevealProps {
  text: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  className?: string;
}

export default function LetterReveal({
  text,
  delay = 0,
  stagger = 0.04,
  duration = 0.6,
  className = '',
}: LetterRevealProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: { y: '115%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: duration,
        ease: [0.215, 0.61, 0.355, 1], // Custom sleek cubic bezier (easeOutCubic)
      },
    },
  };

  const chars = text.split('');

  return (
    <motion.span
      className={`inline ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {chars.map((char, idx) => {
        if (char === ' ') {
          return <span key={`space-${idx}`}> </span>;
        }

        return (
          <span
            key={`char-${idx}`}
            className="inline-block overflow-hidden"
            style={{ verticalAlign: 'bottom' }}
          >
            <motion.span
              variants={itemVariants}
              className="inline-block origin-bottom"
            >
              {char}
            </motion.span>
          </span>
        );
      })}
    </motion.span>
  );
}
