'use client';

import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

export default function MinervaTitle() {
  const titleRef = useRef<HTMLDivElement>(null);
  const soonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple fade-in animation for title
    if (titleRef.current) {
      animate(titleRef.current, {
        opacity: [0, 1],
        duration: 800,
        ease: 'outQuad'
      });
    }

    // Subtle fade-in for "Soon" text
    if (soonRef.current) {
      animate(soonRef.current, {
        opacity: [0, 1],
        translateY: [10, 0],
        duration: 800,
        delay: 1000,
        ease: 'outQuad'
      });
    }
  }, []);

  return (
    <div className="text-center">
      <div ref={titleRef}>
        <h1 className="title">
          PRC-GC-Minerva#24809
        </h1>
      </div>

      <div ref={soonRef} className="opacity-0">
        <div className="subtitle">
          COMING SOON
        </div>
      </div>
    </div>
  );
}