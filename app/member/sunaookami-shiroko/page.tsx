'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import '../member.css';
import Footer from '@/components/Footer';

export default function ShirokoPage() {
  useEffect(() => {
    document.body.classList.add('preload');

    const preloadTimer = setTimeout(() => {
      document.body.classList.remove('preload');
    }, 100);

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
      <link rel="stylesheet" href="/assets/css/character/style.css" />

      <div>
        <header className="st-Header">
          <div className="st-Header_Hamburger">
            <div className="navi-deco"><span></span><span></span></div><span className="menu"></span>
          </div>
          <div className="st-Header_Menu">
            <div className="bg-auto"></div>
            <div className="right-menu">
              <ul className="st-Header_Nav js-Animation">
                <li><Link href="/">HOME</Link></li>
                <li><Link href="/about/">ABOUT</Link></li>
                <li><Link href="/member/" className="current">MEMBER</Link></li>
                <li><Link href="/sponser/">SPONSER</Link></li>
                <li><Link href="/project/">PROJECT</Link></li>
                <li><Link href="/community/">COMMUNITY</Link></li>
                <li><Link href="/social/">SOCIAL</Link></li>
                <li><Link href="/contact/">CONTACT</Link></li>
              </ul>
            </div>
          </div>
        </header>

        <div className="st-Wrapper">
          <div className="sw-Sub">
            <h1 className="logo"><Link href="/"><img src="/assets/images/common/logo.png" alt="Minerva#24809 Gen3 | FTC" decoding="async" /></Link></h1>
            <h2 className="sw-Lower-Ttl js-Animation ttl-Slide">
              <span>M</span><span>E</span><span>M</span><span>B</span><span>E</span><span>R</span>
            </h2>
          </div>

          <div className="sw-Lower-Wrapper character-detail-Wrapper">
            <div className="character-Inner shiroko js-Animation">
              <div className="chara-image">
                <span className="chara-front"><img src="/assets/images/common/character/shiroko/chara-shiroko-front.png" alt="" decoding="async" /></span>
                <span className="chara-back"><img src="/assets/images/common/character/shiroko/chara-shiroko-back.png" alt="" decoding="async" /></span>
                <div className="chara-look"><img src="/assets/images/common/character/shiroko/chara-shiroko-look.png" alt="" decoding="async" /></div>
                <div className="key-color"><span></span><span></span><span></span></div>
              </div>

              <div className="chara-detail">
                <dl>
                  <dt className="school abydos">MINERVA FTC</dt>
                  <dd className="affiliation">Art Team</dd>
                </dl>
                <dl className="chara">
                  <dt className="en">FULLNAME LASTNAME</dt>
                  <dd className="ja">???</dd>
                </dl>
                <dl className="cv">
                  <dt className="en"><span>Personal Quotation</span></dt>
                  <dd className="ja">???</dd>
                </dl>

                <div className="profile">
                  <p className="heading">PROFILE</p>
                  <div className="profile-content">
                    <dl>
                      <dt>Grade</dt>
                      <dd>???</dd>
                    </dl>
                    <dl>
                      <dt>Age</dt>
                      <dd>???</dd>
                    </dl>
                    <dl>
                      <dt>Birthday</dt>
                      <dd>???</dd>
                    </dl>
                    <dl>
                      <dt>Role</dt>
                      <dd>???</dd>
                    </dl>
                    <dl>
                      <dt>Hobbies</dt>
                      <dd>???</dd>
                    </dl>
                  </div>
                </div>

                <div className="introduction"><span></span><span></span>
                  <div className="txt-box">
                    <p>Member information will be revealed soon.</p>
                    <p>Stay tuned for more details about our amazing team members and their contributions to Minerva FTC.</p>
                  </div>
                </div>
              </div>
            </div>

            <ul className="chara-List">
              <li><a className="current shiroko" href="#"><img src="/assets/images/common/character/thumbnail_dk.png" alt="" decoding="async" /></a></li>
              <li><a className="close" href=""></a></li>
              <li><a className="close" href=""></a></li>
              <li><a className="close" href=""></a></li>
            </ul>

            <Link href="/member" className="character-All-Btn"><span>ALL MEMBER</span></Link>
          </div>
        </div>

        <Footer />
      </div>

      <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/common/lib.js" strategy="afterInteractive" />
      <Script src="/assets/js/character/app.bundle.js" strategy="afterInteractive" />
    </>
  );
}
