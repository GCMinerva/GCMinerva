'use client';

import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';
import KeyVisual from '@/components/KeyVisual';
import News from '@/components/News';
import Movie from '@/components/Movie';
import Character from '@/components/Character';

export default function Home() {
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (!mountedRef.current) return;
    // Animation on scroll
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      document.querySelectorAll('.js-Animation').forEach((element) => {
        const elementTop = element.getBoundingClientRect().top + scrollTop;
        if (elementTop < scrollTop + windowHeight * 0.9) {
          element.classList.add('animated');
        }
      });
    };

    // Smooth scroll animation function
    const smoothScrollTo = (targetPosition: number) => {
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000;
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      const ease = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animation);
    };

    // Smooth scroll for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = (e.target as HTMLElement).closest('a') as HTMLAnchorElement;
      if (target && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        const targetElement = href === '#' || href === '' ? document.documentElement : document.querySelector(href!);

        if (targetElement) {
          const offsetTop = targetElement === document.documentElement ? 0 : (targetElement as HTMLElement).offsetTop;
          smoothScrollTo(offsetTop);
        }
      }
    };

    // Back to top button visibility
    const handleBackToTopVisibility = () => {
      const backToTopBtn = document.querySelector('.backtoTop');
      if (window.scrollY >= 200) {
        backToTopBtn?.classList.remove('sw-Top-Hidden');
      } else {
        backToTopBtn?.classList.add('sw-Top-Hidden');
      }
    };

    // Back to top button click handler
    const handleBackToTopClick = () => {
      const backToTopBtn = document.querySelector('.backtoTop a');
      if (backToTopBtn) {
        backToTopBtn.addEventListener('click', (e) => {
          e.preventDefault();
          smoothScrollTo(0);
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleBackToTopVisibility);
    document.addEventListener('click', handleAnchorClick);

    // Initial check
    handleScroll();
    handleBackToTopVisibility();
    handleBackToTopClick();

    return () => {
      if (!mountedRef.current) return;

      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleBackToTopVisibility);
      document.removeEventListener('click', handleAnchorClick);
      const backToTopBtn = document.querySelector('.backtoTop a');
      if (backToTopBtn) {
        backToTopBtn.removeEventListener('click', (e) => {
          e.preventDefault();
          smoothScrollTo(0);
        });
      }
    };
  }, [mountedRef]);

  return (
    <>
      <Header />
      <Loading />
      <div className="st-Wrapper">
        <span className="wrap">
          <KeyVisual />
          <News />
          <Movie />
          <Character />
        </span>
      </div>
      <Footer />
    </>
  );
}
