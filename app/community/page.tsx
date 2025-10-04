'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import '../project/project.css';

export default function CommunityPage() {
  const scriptsLoaded = useRef(false);

  useEffect(() => {
    document.body.classList.add('preload');

    const preloadTimer = setTimeout(() => {
      document.body.classList.remove('preload');
    }, 100);

    // Animation on scroll
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      document.querySelectorAll('.js-Animation, .fade-Animation').forEach((element) => {
        const elementTop = element.getBoundingClientRect().top + scrollTop;
        if (elementTop < scrollTop + windowHeight * 0.9) {
          element.classList.add('animated');
        }
      });
    };

    // Initial check for animations
    const initAnimations = () => {
      handleScroll();
    };

    // Wait for page to be fully loaded
    const loadTimer = setTimeout(() => {
      initAnimations();
    }, 200);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', initAnimations);

    return () => {
      clearTimeout(preloadTimer);
      clearTimeout(loadTimer);
      document.body.classList.remove('preload');
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', initAnimations);
      scriptsLoaded.current = false;
    };
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=M+PLUS+1:wght@900&family=Noto+Sans+JP:wght@400;500;700;900&family=Oxanium:wght@500;700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
      <link rel="stylesheet" href="/assets/css/common/lib.css" />
      <link rel="stylesheet" href="/assets/css/story/style.css" />

      <div>
        <Header />

        <div className="st-Wrapper">
          <div className="sw-Sub">
            <h1 className="logo"><Link href="/"><img src="/assets/images/common/logo.png" alt="Minerva#24809 Gen3 | FTC" decoding="async" /></Link></h1>
            <h2 className="sw-Lower-Ttl js-Animation ttl-Slide">
              <span>C</span><span>O</span><span>M</span><span>M</span><span>U</span><span>N</span><span>I</span><span>T</span><span>Y</span>
            </h2>
          </div>

          <div className="sw-Lower-Wrapper project-Wrapper">
            <div className="intro-Wrapper" style={{ textAlign: 'center' }}>
              <div className="catch-Wrapper" style={{ maxWidth: '100%', margin: '0 auto' }}>
                <div className="catch fade-Animation" style={{
                  fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                  fontFamily: 'Oxanium, cursive',
                  fontWeight: 700,
                  textAlign: 'center',
                  color: '#003350',
                  letterSpacing: '0.1em',
                  marginBottom: '1.5rem'
                }}>
                  WIP
                </div>
                <div className="catch-2nd fade-Animation" style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.8rem)',
                  fontFamily: 'Noto Sans JP, sans-serif',
                  fontWeight: 500,
                  textAlign: 'center',
                  color: '#00d1ff',
                  marginBottom: '4rem'
                }}>
                  Work In Progress
                </div>
              </div>
            </div>

            <div className="project-footer-text js-Animation fade-Animation" style={{ animationDelay: '0.5s' }}>
              <p style={{
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                fontFamily: 'Noto Sans JP, sans-serif',
                textAlign: 'center',
                color: '#003350',
                marginTop: '2rem',
                lineHeight: 1.8
              }}>
                Community features are currently under development.<br className="sp_b" />
                Stay tuned for updates!
              </p>
            </div>
          </div>
        </div>

        <Footer />

        <div className="youtube-Modal">
          <div className="youtube-Modal_Overlay"></div>
          <div className="youtube-Modal_Close"></div>
          <div className="youtube-Modal_Content"></div>
        </div>
      </div>

      <Script
        src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"
        strategy="lazyOnload"
      />
    </>
  );
}
