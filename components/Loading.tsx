'use client';

import { useEffect, useState } from 'react';

export default function Loading() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsLoaded(true);
      document.body.classList.remove('preload');
      document.querySelector('.st-Wrapper')?.classList.add('loaded');
    }, 1000);

    const timer2 = setTimeout(() => {
      const loadingEl = document.querySelector('.loading-Wrapper');
      if (loadingEl) {
        loadingEl.remove();
      }
    }, 8000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className={`loading-Wrapper ${isLoaded ? 'loaded' : ''}`}>
      <div className="loading-Over"></div>
      <div className="loading-Inner">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
