'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';
import KeyVisual from '@/components/KeyVisual';
import News from '@/components/News';
import Movie from '@/components/Movie';
import Character from '@/components/Character';

export default function Home() {
  useEffect(() => {
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

    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        const targetElement = href === '#' || href === '' ? document.documentElement : document.querySelector(href!);

        if (targetElement) {
          const offsetTop = targetElement === document.documentElement ? 0 : (targetElement as HTMLElement).offsetTop;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
          });
        }
      }
    };

    // Back to top button
    const handleBackToTop = () => {
      const backToTopBtn = document.querySelector('.backtoTop');
      if (window.scrollY >= 200) {
        backToTopBtn?.classList.remove('sw-Top-Hidden');
      } else {
        backToTopBtn?.classList.add('sw-Top-Hidden');
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleBackToTop);
    document.addEventListener('click', handleAnchorClick);

    // Initial check
    handleScroll();
    handleBackToTop();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleBackToTop);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

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
