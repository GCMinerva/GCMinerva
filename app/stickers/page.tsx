'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export default function StickersPage() {
  useEffect(() => {
    document.body.classList.add('preload');

    const preloadTimer = setTimeout(() => {
      document.body.classList.remove('preload');
    }, 100);

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

    const initAnimations = () => {
      handleScroll();
    };

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

  const stickerImages = [
    'img5.jpg',
    'img11.jpg',
    'img15.jpg',
    'img19.jpg',
    'img23.jpg',
    'img27.jpg',
    'img31.jpg',
    'img35.jpg',
    'img40.jpg',
    'img44.jpg',
    'img48.jpg',
    'img52.jpg',
    'img56.jpg',
  ];

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

        <div className="st-Wrapper loaded">
          <div className="sw-Sub">
            <h1 className="logo"><Link href="/"><img src="/assets/images/common/logo.png" alt="Minerva#24809 Gen3 | FTC" decoding="async" /></Link></h1>
            <h2 className="sw-Lower-Ttl js-Animation ttl-Slide">
              <span>S</span><span>T</span><span>I</span><span>C</span><span>K</span><span>E</span><span>R</span><span>S</span>
            </h2>
          </div>

          <div className="sw-Lower-Wrapper story-Wrapper">
            <style jsx>{`
              .stickers-intro {
                text-align: center;
                padding: 3rem 1rem;
                max-width: 1200px;
                margin: 0 auto;
                opacity: 1 !important;
                transform: translateY(0) !important;
              }

              .stickers-title {
                font-size: clamp(2.5rem, 6vw, 5rem);
                font-family: 'Oxanium', cursive;
                font-weight: 700;
                color: #003350;
                letter-spacing: 0.1em;
                margin-bottom: 1.5rem;
                opacity: 1 !important;
              }

              .stickers-subtitle {
                font-size: clamp(1.2rem, 2.5vw, 2rem);
                font-family: 'Noto Sans JP', sans-serif;
                font-weight: 700;
                color: #00d1ff;
                margin-bottom: 2rem;
                opacity: 1 !important;
              }

              .stickers-description {
                font-size: clamp(1rem, 2vw, 1.2rem);
                line-height: 1.8;
                color: #333;
                margin-bottom: 1rem;
                font-family: 'Noto Sans JP', sans-serif;
                opacity: 1 !important;
              }

              .stickers-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                gap: 2rem;
                padding: 2rem 1rem;
                max-width: 1400px;
                margin: 0 auto;
                opacity: 1 !important;
                transform: translateY(0) !important;
              }

              .sticker-card {
                background: linear-gradient(135deg, #ffffff 0%, #f5f9fc 100%);
                border-radius: 20px;
                padding: 1.5rem;
                box-shadow: 0 10px 30px rgba(0, 51, 80, 0.1);
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                border: 2px solid rgba(0, 209, 255, 0.2);
              }

              .sticker-card:hover {
                transform: translateY(-10px) scale(1.05);
                box-shadow: 0 20px 40px rgba(0, 209, 255, 0.3);
                border-color: rgba(0, 209, 255, 0.8);
              }

              .sticker-card img {
                width: 100%;
                height: auto;
                display: block;
                border-radius: 10px;
                transition: transform 0.3s ease;
              }

              .sticker-card:hover img {
                transform: scale(1.05);
              }

              .sticker-info {
                max-width: 800px;
                margin: 4rem auto;
                padding: 3rem 2rem;
                background: linear-gradient(135deg, rgba(0, 51, 80, 0.05) 0%, rgba(0, 209, 255, 0.05) 100%);
                border-radius: 20px;
                border: 2px solid rgba(0, 209, 255, 0.2);
                text-align: center;
                opacity: 1 !important;
                transform: translateY(0) !important;
              }

              .sticker-info h3 {
                font-size: clamp(1.8rem, 3vw, 2.5rem);
                font-family: 'Oxanium', cursive;
                font-weight: 700;
                color: #003350;
                margin-bottom: 1.5rem;
                opacity: 1 !important;
              }

              .sticker-info p {
                font-size: clamp(1rem, 2vw, 1.2rem);
                line-height: 1.8;
                color: #333;
                margin-bottom: 1rem;
                font-family: 'Noto Sans JP', sans-serif;
                opacity: 1 !important;
              }

              @media (max-width: 768px) {
                .stickers-grid {
                  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
                  gap: 1rem;
                }
              }
            `}</style>

            <div className="stickers-intro js-Animation fade-Animation" style={{ opacity: 1, transform: 'translateY(0)' }}>
              <div className="stickers-title">MINERVA STICKERS</div>
              <div className="stickers-subtitle">Official Line Sticker Collection</div>
              <div className="stickers-description">
                Discover our <span style={{ color: '#00d1ff', fontWeight: 700 }}>official Minerva sticker collection</span> for LINE messenger.
              </div>
              <div className="stickers-description">
                Express yourself with our unique robotics-themed stickers featuring the Minerva team spirit!
              </div>
            </div>

            <div className="stickers-grid js-Animation fade-Animation" style={{ opacity: 1, transform: 'translateY(0)' }}>
              {stickerImages.map((sticker, index) => (
                <div key={index} className="sticker-card">
                  <img
                    src={`/assets/MinervaSticker/${sticker}`}
                    alt={`Minerva Sticker ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>

            <div className="sticker-info js-Animation fade-Animation" style={{ opacity: 1, transform: 'translateY(0)' }}>
              <h3>How to Use</h3>
              <p>Download these stickers on LINE and share them with your friends!</p>
              <p>Perfect for expressing your robotics passion and team spirit.</p>
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
