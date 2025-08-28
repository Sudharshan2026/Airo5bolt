import React, { useRef, ReactElement, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface DrawLineAnimationProps {
  children: ReactElement<SVGElement>;
  className?: string;
}

const DrawLineAnimation: React.FC<DrawLineAnimationProps> = ({ children, className }) => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (container.current) {
        const path = container.current.querySelector('path');
        if (path) {
          const length = path.getTotalLength();

          // Set initial state of the path
          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
            autoAlpha: 1, // Make sure the path is visible before drawing
          });

          // Create the scroll-triggered animation
          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 2,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: container.current,
              start: 'top 80%', // When the top of the trigger hits 80% of the viewport height
              end: 'bottom 20%',
              toggleActions: 'play none none none',
            },
          });
        }
      }
    },
    { scope: container }
  );

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
};

export default DrawLineAnimation;
