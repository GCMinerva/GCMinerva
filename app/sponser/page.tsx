'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import './sponser.css';

export default function SponserPage() {
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
            <h2 className="sw-Lower-Ttl js-Animation ttl-Slide"><span>S</span><span>P</span><span>O</span><span>N</span><span>S</span><span>E</span><span>R</span></h2>
          </div>

          <div className="sw-Lower-Wrapper story-Wrapper">
            <style jsx>{`
              .logo-link {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 250px;
                height: 250px;
                opacity: 0.85;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                transform: translateY(0);
                filter: grayscale(0%);
                position: relative;
              }

              .logo-link::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 0;
                height: 0;
                border-radius: 50%;
                background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
                transform: translate(-50%, -50%);
                transition: all 0.5s ease;
                pointer-events: none;
              }

              .logo-link:hover {
                opacity: 1;
                transform: translateY(-10px) scale(1.05);
                filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3));
              }

              .logo-link:hover::before {
                width: 300px;
                height: 300px;
              }

              .logo-link img {
                width: 100%;
                height: 100%;
                object-fit: contain;
                transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
              }

              .logo-link:hover img {
                transform: rotate(5deg) scale(1.1);
              }

              @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-15px); }
              }

              .logo-link:nth-child(1) {
                animation: float 3s ease-in-out infinite;
                animation-delay: 0s;
              }

              .logo-link:nth-child(2) {
                animation: float 3s ease-in-out infinite;
                animation-delay: 0.3s;
              }

              .logo-link:nth-child(3) {
                animation: float 3s ease-in-out infinite;
                animation-delay: 0.6s;
              }
            `}</style>
            <div className="sponsor-logos-section js-Animation fade-Animation" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '3rem',
              padding: '3rem 2rem',
              marginBottom: '2rem'
            }}>
              <a
                href="https://www.smchem.co.th/TH/home.html"
                target="_blank"
                rel="noopener noreferrer"
                className="logo-link"
              >
                <img src="/assets/images/common/icon_sm.png" alt="SM Chemical Logo" />
              </a>
              <a
                href="https://www.lucalearningspace.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="logo-link"
              >
                <img src="/assets/images/common/icon_luca.png" alt="Luca Learning Space Logo" />
              </a>
              <div className="logo-link" style={{ cursor: 'default', animation: 'float 3s ease-in-out infinite', animationDelay: '0.6s' }}>
                <img src="/assets/images/common/logo_whicia.png" alt="Whicia Logo" />
              </div>
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
