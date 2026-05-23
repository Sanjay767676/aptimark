import { useState, useEffect } from 'react';

interface ScrambleTextProps {
  text: string;
  duration?: number;
  delay?: number;
  className?: string;
  triggerKey?: any;
}

const GLYPHS = '✕✦⚡︎⚛︎✴︎✪⚝✹▢▱◇△▽○●╳/\\_=+*&^%$#@![]{}|;:,.<>?~`';

export default function ScrambleText({
  text,
  duration = 1400,
  delay = 300,
  className = '',
  triggerKey,
}: ScrambleTextProps) {
  // Pre-scramble the initial state to match text length with spaces preserved, avoiding layout shift
  const [displayText, setDisplayText] = useState(() => 
    text.split('').map(c => c === ' ' ? ' ' : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]).join('')
  );

  useEffect(() => {
    let frameId: number;
    let startTime: number;
    const textLength = text.length;

    const runScramble = () => {
      startTime = performance.now();

      const update = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Progress defines how many char slots are permanently settled
        const settledProgress = Math.pow(progress, 1.5);
        const settledThreshold = Math.floor(settledProgress * textLength);

        let currentString = '';
        for (let i = 0; i < textLength; i++) {
          const char = text[i];
          if (char === ' ') {
            currentString += ' ';
            continue;
          }

          if (i < settledThreshold) {
            currentString += char;
          } else {
            // Keep scrambling other characters dynamically using a moving seed
            const randomIdx = (i + Math.floor(elapsed / 50)) % GLYPHS.length;
            currentString += GLYPHS[randomIdx];
          }
        }

        setDisplayText(currentString);

        if (progress < 1) {
          frameId = requestAnimationFrame(update);
        } else {
          setDisplayText(text);
        }
      };

      frameId = requestAnimationFrame(update);
    };

    const startTimeout = setTimeout(() => {
      runScramble();
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      cancelAnimationFrame(frameId);
    };
  }, [text, duration, delay, triggerKey]);

  return (
    <span className={`${className} inline select-none`}>
      {displayText}
    </span>
  );
}
