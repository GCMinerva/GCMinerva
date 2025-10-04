'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import './about.css';

export default function AboutPage() {
  useEffect(() => {
    // Properly handle preload class for smooth animation
    const timer = setTimeout(() => {
      document.body.classList.remove('preload');
    }, 300);

    return () => {
      clearTimeout(timer);
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
            <h1 className="logo"><a href="/"><img src="/assets/images/common/logo.png" alt="Minerva#24809 Gen3 | FTC" decoding="async" /></a></h1>
            <h2 className="sw-Lower-Ttl js-Animation ttl-Slide"><span>A</span><span>B</span><span>O</span><span>U</span><span>T</span></h2>
          </div>

          <div className="sw-Lower-Wrapper story-Wrapper">
            <div className="intro-Wrapper">
              <div className="catch-Wrapper">
                <div className="catch fade-Animation" style={{
                  fontSize: 'clamp(2rem, 5vw, 4rem)',
                  fontFamily: 'Oxanium, cursive',
                  fontWeight: 700,
                  textAlign: 'center',
                  color: '#003350',
                  letterSpacing: '0.1em',
                  marginBottom: '2rem'
                }}>
                  PRCGCMINERVA#24809 GEN3
                </div>
                <div className="catch-2nd fade-Animation" style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  fontFamily: 'Noto Sans JP, sans-serif',
                  fontWeight: 700,
                  textAlign: 'center',
                  color: '#00d1ff',
                  marginBottom: '3rem'
                }}>
                  First tech challenge 2025-2025 DECODE
                </div>
              </div>

              <div className="introduction">
                <div className="line fade-Animation">
                  <p>Minerva Gen3 is a <span className="blue">FIRST Tech Challenge (FTC)</span>team<br className="sp_b" /> representing GcGen 14.</p>
                  <p>We are passionate about robotics, innovation,<br className="sp_b" /> and pushing the boundaries <br></br>of what's possible.</p>
                </div>
                <div className="line fade-Animation">
                  <p>Our team consists of <span className="blue">talented members</span> specializing in:</p>
                  <p><span className="blue">3 Coders</span> - Programming and software development<br />
                  <span className="blue">3 Artists</span> - Design and visual communication<br />
                  <span className="blue">3 CAD Specialists</span> - 3D modeling and engineering design<br />
                  <span className="blue">3 Builders</span> - Construction and mechanical assembly</p>
                </div>
              </div>
            </div>

            <div className="story-List-Wrapper js-Animation">
              <ul className="story-Anchor-List">
                <li className="list"><a href="#ep1">#01</a></li>
              </ul>
            </div>

            {/* Section 1 */}
            <div className="story-detail-container js-Animation" id="ep1">
              <div className="detail-Inner"><span className="deco"></span><span className="deco"></span>
                <div className="contents">
                  <div className="ttl-Wrapper">
                    <p className="number">#01</p>
                    <h1 className="ttl">30 Hour Challenge </h1>
                  </div>
                  <div className="scene-Photo-Wrapper">
                    <div className="swiper">
                      <ul className="swiper-wrapper">
                        <li className="swiper-slide"><img src="/assets/images/common/story/ep1/20250930_132102.jpg" alt="" decoding="async" /></li>
                      </ul>
                      <div className="navigation"><span className="prev"></span><span className="pagination"></span><span className="next"></span></div>
                    </div>
                  </div>
                  <div className="body">
                    <p>
                      Minerva#24809 Gen3 is complete 30 Hour robot challenge
                    </p>
                    <p className="staff">
                      Team: Minerva#24809 Gen3<br />
                      Division: FIRST Tech Challenge<br />
                      Generation: GC Gen 14<br />
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
