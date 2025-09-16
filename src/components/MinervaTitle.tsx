'use client';

import { useEffect, useRef } from 'react';

export default function MinervaTitle() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    const text = title.textContent || '';
    title.innerHTML = '';

    text.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.opacity = '0';
      span.style.transform = 'translateY(20px)';
      span.style.transition = `all 0.6s ease ${index * 0.1}s`;
      title.appendChild(span);
    });

    setTimeout(() => {
      title.querySelectorAll('span').forEach(span => {
        span.style.opacity = '1';
        span.style.transform = 'translateY(0)';
      });
    }, 100);

    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.3) {
        title.style.textShadow = `
          ${Math.random() * 10 - 5}px 0 #ff0000,
          ${Math.random() * 10 - 5}px 0 #00ff00,
          ${Math.random() * 10 - 5}px 0 #0000ff
        `;
        setTimeout(() => {
          title.style.textShadow = '0 0 20px #00bb22, 0 0 40px #00bb22, 0 0 60px #00bb22';
        }, 100);
      }
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="text-center mb-8">
      <h1
        ref={titleRef}
        className="text-6xl md:text-8xl font-bold text-green-400 mb-4 font-mono tracking-wider"
        style={{
          textShadow: '0 0 20px #00bb22, 0 0 40px #00bb22, 0 0 60px #00bb22',
          fontFamily: 'Courier New, monospace'
        }}
      >
        MINERVA
      </h1>
      <p className="text-xl md:text-2xl text-green-300 font-mono opacity-80">
        GEN 3 PROTOCOL INITIALIZATION
      </p>
      <div className="text-sm text-green-500 mt-2 font-mono">
        [CLASSIFICATION: TOP SECRET]
      </div>
    </div>
  );
}