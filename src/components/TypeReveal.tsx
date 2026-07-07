import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function TypeReveal({ text, as: Tag = 'p', className = '', delay = 0 }: { text: string, as?: any, className?: string, delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  const words = text.split(" ");
  let charCount = 0;
  
  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => {
        const wordMarkup = (
          <span key={i} className="inline-block">
            {Array.from(word).map((char, j) => {
              const currentDelay = delay + (charCount++) * 0.02;
              return (
                <motion.span
                  key={j}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.1, delay: currentDelay }}
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        );
        charCount++;
        return (
          <span key={i}>
            {wordMarkup}
            {i < words.length - 1 && " "}
          </span>
        );
      })}
    </Tag>
  );
}

