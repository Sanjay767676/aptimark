"use client";

import React, { memo, useMemo } from 'react';
import { motion } from 'motion/react';

interface AuroraTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  speed?: number;
}

export const AuroraText = memo(
  ({
    children,
    className = '',
    colors = ['#FF0080', '#7928CA', '#0070F3', '#38bdf8'],
    speed = 1,
  }: AuroraTextProps) => {
    const gradientSets = useMemo(
      () => [
        [colors[0], colors[1], colors[2]],
        [colors[1], colors[2], colors[3]],
        [colors[2], colors[3], colors[0]],
        [colors[3], colors[0], colors[1]],
      ],
      [colors]
    );

    const duration = 8 / speed;

    return (
      <span className={`relative inline-block ${className}`.trim()}>
        <span className="sr-only">{children}</span>
        {gradientSets.map((gradientColors, index) => (
          <motion.span
            key={`aurora-layer-${index}`}
            className="absolute inset-0"
            aria-hidden="true"
            style={{
              backgroundImage: `linear-gradient(90deg, ${gradientColors[0]}, ${gradientColors[1]}, ${gradientColors[2]})`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
            }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * (duration / gradientSets.length),
            }}
          >
            {children}
          </motion.span>
        ))}
      </span>
    );
  }
);

AuroraText.displayName = 'AuroraText';
