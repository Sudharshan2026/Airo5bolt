import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap-trial/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(SplitText);

interface AnimatedTextProps {
  text: string;
  className?: string;
  stagger?: number;
  duration?: number;
  as?: React.ElementType;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  stagger = 0.02,
  duration = 1.25,
  as: Tag = 'h1', // Default to h1, but can be overridden
}) => {
  const container = useRef<Element>(null);

  useGSAP(
    () => {
      if (container.current) {
        const split = new SplitText(container.current, {
          type: 'chars, words',
          charsClass: 'char-class', // Use a class to avoid conflicts
        });

        // Set initial state
        gsap.set(split.chars, { yPercent: 110, scale: 0.5 });

        // Animate to final state
        gsap.to(split.chars, {
          duration: duration,
          yPercent: 0,
          scale: 1,
          stagger: stagger,
          ease: 'expo.out',
          delay: 0.5, // Add a small delay to ensure it's visible
        });
      }
    },
    { scope: container, dependencies: [text] }
  );

  return (
    <Tag ref={container} className={className}>
      {text}
    </Tag>
  );
};

export default AnimatedText;
