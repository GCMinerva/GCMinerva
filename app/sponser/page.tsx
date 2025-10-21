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
            <div className="sponsor-logos-section js-Animation fade-Animation" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem',
              padding: '3rem 2rem 2rem',
              marginBottom: '2rem'
            }}>
              <div className="logo-container" style={{
                width: '100px',
                height: '100px',
                opacity: 0.9,
                transition: 'all 0.3s ease'
              }}>
                <img src="/assets/images/common/icon_luca.png" alt="PRC Logo" style={{
                  width: '200%',
                  height: '200%',
                  objectFit: 'contain'
                }} />
              </div>
              <div className="logo-container" style={{
                width: '200px',
                height: '200px',
                opacity: 0.9,
                transition: 'all 0.3s ease'
              }}>
                <img src="/assets/images/common/icon_sm.png" alt="GC Logo" style={{
                  width: '400%',
                  height: '400%',
                  objectFit: 'contain'
                }} />
              </div>
            </div>

            <div className="story-List-Wrapper js-Animation">
              <ul className="story-Anchor-List">
                <li className="list"><a href="#sponsor">SPONSOR</a></li>
              </ul>
            </div>

            {/* Sponsor Section */}
            <div className="story-detail-container js-Animation" id="sponsor">
              <div className="detail-Inner"><span className="deco"></span><span className="deco"></span>
                <div className="contents">
                  <div className="ttl-Wrapper">
                    <p className="number">#01</p>
                    <h1 className="ttl">Become a Sponsor</h1>
                  </div>
                  <div className="body">
                    <p>
                      We are actively seeking sponsors to support Minerva#24809 Gen3 in our robotics journey. Your sponsorship helps us develop cutting-edge technology, participate in competitions, and provide hands-on STEM education to our team members.
                    </p>

                    <p style={{ marginTop: '2rem' }}>
                      Partner with us to build the next generation of engineers and innovators. We welcome sponsorships of all sizes and are happy to discuss how we can create a mutually beneficial partnership.
                    </p>

                    <p className="staff" style={{ marginTop: '3rem', textAlign: 'center' }}>
                      <a href="/contact" style={{
                        display: 'inline-block',
                        padding: '1rem 3rem',
                        background: 'linear-gradient(135deg, #00d1ff 0%, #003350 100%)',
                        color: 'white',
                        fontFamily: 'Oxanium, cursive',
                        fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                        fontWeight: 700,
                        textDecoration: 'none',
                        borderRadius: '50px',
                        letterSpacing: '0.05em',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 20px rgba(0, 209, 255, 0.3)'
                      }}>
                        CONTACT US
                      </a>
                    </p>
                  </div>
                </div>
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
