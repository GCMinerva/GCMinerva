'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import './social.css';

export default function SocialPage() {
  useEffect(() => {
    // Properly handle preload class for smooth animation
    const timer = setTimeout(() => {
      document.body.classList.remove('preload');
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/gcminerva',
      color: '#E1306C',
      description: 'Follow our journey, behind-the-scenes moments, and team updates'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/gcminerva',
      color: '#333',
      description: 'Explore our open-source projects and robot code repositories'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@gcminerva',
      color: '#FF0000',
      description: 'Watch our robot in action, tutorials, and competition highlights'
    }
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

        <div className="st-Wrapper">
          <div className="sw-Sub">
            <h1 className="logo"><a href="/"><img src="/assets/images/common/logo.png" alt="Minerva#24809 Gen3 | FTC" decoding="async" /></a></h1>
            <h2 className="sw-Lower-Ttl js-Animation ttl-Slide"><span>S</span><span>O</span><span>C</span><span>I</span><span>A</span><span>L</span></h2>
          </div>

          <div className="sw-Lower-Wrapper social-Wrapper">
            <div className="intro-Wrapper">
              <div className="catch-Wrapper-social">
                <div className="catch fade-Animation" style={{
                  fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                  fontFamily: 'Oxanium, cursive',
                  fontWeight: 700,
                  textAlign: 'center',
                  color: '#003350',
                  letterSpacing: '0.1em',
                  marginBottom: '1.5rem'
                }}>
                  CONNECT WITH US
                </div>
                <div className="catch-2nd fade-Animation" style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.8rem)',
                  fontFamily: 'Noto Sans JP, sans-serif',
                  fontWeight: 500,
                  textAlign: 'center',
                  color: '#00d1ff',
                  marginBottom: '3rem'
                }}>
                  Join our community and stay updated
                </div>
              </div>
            </div>

            <div className="social-grid-container js-Animation">
              {socialLinks.map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card fade-Animation"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="social-card-inner">
                    <div className="social-icon-wrapper">
                      <div className="social-icon-bg" style={{ backgroundColor: platform.color }}></div>
                      <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                        {platform.name === 'Instagram' && (
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        )}
                        {platform.name === 'GitHub' && (
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        )}
                        {platform.name === 'YouTube' && (
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                        )}
                      </svg>
                    </div>
                    <h3 className="social-platform-name">{platform.name}</h3>
                    <p className="social-description">{platform.description}</p>
                    <div className="social-arrow">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="social-footer-text js-Animation fade-Animation">
              <p style={{
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                fontFamily: 'Noto Sans JP, sans-serif',
                textAlign: 'center',
                color: '#003350',
                marginTop: '4rem',
                lineHeight: 1.8
              }}>
                Follow us to stay connected with the latest updates,<br className="sp_b" />
                robot developments, and team achievements.
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
