'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import './member.css';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function MemberPage() {
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

          <div className="sw-Lower-Wrapper character-Wrapper">
            {/* ART TEAM */}
            <div className="group-Wrapper js-Animation" id="art-team">
              <div className="group-name-Wrapper">
                <div className="icon"><img src="/assets/images/common/index/deco_loading_01.svg" alt="" decoding="async" /></div>
                <p>Art Team<span>MINERVA FTC<br />CREATIVE DESIGN DEPARTMENT</span></p>
              </div>
              <p className="affiliation">Design & Visual Arts</p>
              <ul className="character-List">
                <li className="shiroko">
                  <Link href="/member/placeholder-1">
                    <div className="chara-name">
                      <dl className="chara">
                        <dt className="en">FULLNAME LASTNAME</dt>
                        <dd className="name">???</dd>
                      </dl>
                      <dl>
                        <dt className="en"><span>Personal Quotation</span></dt>
                        <dd className="ja">???</dd>
                      </dl>
                    </div>
                    <div className="chara-image"><img src="/assets/images/common/character/thumb-dk-2.png" alt="" decoding="async" /></div>
                    <div className="detail-info">
                      <div className="key-color"><span></span><span></span><span></span></div>
                      <p>：ART TEAM<br />　MEMBER</p>
                    </div>
                  </Link>
                </li>
                <li className="shiroko">
                  <Link href="/member/placeholder-2">
                    <div className="chara-name">
                      <dl className="chara">
                        <dt className="en">FULLNAME LASTNAME</dt>
                        <dd className="name">???</dd>
                      </dl>
                      <dl>
                        <dt className="en"><span>Personal Quotation</span></dt>
                        <dd className="ja">???</dd>
                      </dl>
                    </div>
                    <div className="chara-image"><img src="/assets/images/common/character/thumb-dk-2.png" alt="" decoding="async" /></div>
                    <div className="detail-info">
                      <div className="key-color"><span></span><span></span><span></span></div>
                      <p>：ART TEAM<br />　MEMBER</p>
                    </div>
                  </Link>
                </li>
                <li className="shiroko">
                  <Link href="/member/placeholder-3">
                    <div className="chara-name">
                      <dl className="chara">
                        <dt className="en">FULLNAME LASTNAME</dt>
                        <dd className="name">???</dd>
                      </dl>
                      <dl>
                        <dt className="en"><span>Personal Quotation</span></dt>
                        <dd className="ja">???</dd>
                      </dl>
                    </div>
                    <div className="chara-image"><img src="/assets/images/common/character/thumb-dk-2.png" alt="" decoding="async" /></div>
                    <div className="detail-info">
                      <div className="key-color"><span></span><span></span><span></span></div>
                      <p>：ART TEAM<br />　MEMBER</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>

            {/* BUILD TEAM */}
            <div className="group-Wrapper js-Animation" id="build-team">
              <div className="group-name-Wrapper">
                <div className="icon gehenna"><img src="/assets/images/common/index/deco_loading_02.svg" alt="" decoding="async" /></div>
                <p>Build Team<span>MINERVA FTC<br />ENGINEERING DEPARTMENT</span></p>
              </div>
              <p className="affiliation">Hardware & Construction</p>
              <ul className="character-List">
                <li className="shiroko">
                  <Link href="/member/placeholder-4">
                    <div className="chara-name">
                      <dl className="chara">
                        <dt className="en">FULLNAME LASTNAME</dt>
                        <dd className="name">???</dd>
                      </dl>
                      <dl>
                        <dt className="en"><span>Personal Quotation</span></dt>
                        <dd className="ja">???</dd>
                      </dl>
                    </div>
                    <div className="chara-image"><img src="/assets/images/common/character/thumb-dk-2.png" alt="" decoding="async" /></div>
                    <div className="detail-info">
                      <div className="key-color"><span></span><span></span><span></span></div>
                      <p>：BUILD TEAM<br />　MEMBER</p>
                    </div>
                  </Link>
                </li>
                <li className="shiroko">
                  <Link href="/member/placeholder-5">
                    <div className="chara-name">
                      <dl className="chara">
                        <dt className="en">FULLNAME LASTNAME</dt>
                        <dd className="name">???</dd>
                      </dl>
                      <dl>
                        <dt className="en"><span>Personal Quotation</span></dt>
                        <dd className="ja">???</dd>
                      </dl>
                    </div>
                    <div className="chara-image"><img src="/assets/images/common/character/thumb-dk-2.png" alt="" decoding="async" /></div>
                    <div className="detail-info">
                      <div className="key-color"><span></span><span></span><span></span></div>
                      <p>：BUILD TEAM<br />　MEMBER</p>
                    </div>
                  </Link>
                </li>
                <li className="shiroko">
                  <Link href="/member/placeholder-6">
                    <div className="chara-name">
                      <dl className="chara">
                        <dt className="en">FULLNAME LASTNAME</dt>
                        <dd className="name">???</dd>
                      </dl>
                      <dl>
                        <dt className="en"><span>Personal Quotation</span></dt>
                        <dd className="ja">???</dd>
                      </dl>
                    </div>
                    <div className="chara-image"><img src="/assets/images/common/character/thumb-dk.png" alt="" decoding="async" /></div>
                    <div className="detail-info">
                      <div className="key-color"><span></span><span></span><span></span></div>
                      <p>：BUILD TEAM<br />　MEMBER</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>

            {/* CAD TEAM */}
            <div className="group-Wrapper js-Animation" id="cad-team">
              <div className="group-name-Wrapper">
                <div className="icon trinity"><img src="/assets/images/common/index/deco_loading_03.svg" alt="" decoding="async" /></div>
                <p>CAD Team<span>MINERVA FTC<br />DESIGN & MODELING DEPARTMENT</span></p>
              </div>
              <p className="affiliation">3D Design & Technical Drawing</p>
              <ul className="character-List">
                <li className="shiroko">
                  <Link href="/member/placeholder-7">
                    <div className="chara-name">
                      <dl className="chara">
                        <dt className="en">FULLNAME LASTNAME</dt>
                        <dd className="name">???</dd>
                      </dl>
                      <dl>
                        <dt className="en"><span>Personal Quotation</span></dt>
                        <dd className="ja">???</dd>
                      </dl>
                    </div>
                    <div className="chara-image"><img src="/assets/images/common/character/thumb-dk.png" alt="" decoding="async" /></div>
                    <div className="detail-info">
                      <div className="key-color"><span></span><span></span><span></span></div>
                      <p>：CAD TEAM<br />　MEMBER</p>
                    </div>
                  </Link>
                </li>
                <li className="shiroko">
                  <Link href="/member/placeholder-8">
                    <div className="chara-name">
                      <dl className="chara">
                        <dt className="en">FULLNAME LASTNAME</dt>
                        <dd className="name">???</dd>
                      </dl>
                      <dl>
                        <dt className="en"><span>Personal Quotation</span></dt>
                        <dd className="ja">???</dd>
                      </dl>
                    </div>
                    <div className="chara-image"><img src="/assets/images/common/character/thumb-dk-2.png" alt="" decoding="async" /></div>
                    <div className="detail-info">
                      <div className="key-color"><span></span><span></span><span></span></div>
                      <p>：CAD TEAM<br />　MEMBER</p>
                    </div>
                  </Link>
                </li>
                <li className="shiroko">
                  <Link href="/member/placeholder-9">
                    <div className="chara-name">
                      <dl className="chara">
                        <dt className="en">FULLNAME LASTNAME</dt>
                        <dd className="name">???</dd>
                      </dl>
                      <dl>
                        <dt className="en"><span>Personal Quotation</span></dt>
                        <dd className="ja">???</dd>
                      </dl>
                    </div>
                    <div className="chara-image"><img src="/assets/images/common/character/thumb-dk-2.png" alt="" decoding="async" /></div>
                    <div className="detail-info">
                      <div className="key-color"><span></span><span></span><span></span></div>
                      <p>：CAD TEAM<br />　MEMBER</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>

            {/* PROGRAMMING TEAM */}
            <div className="group-Wrapper js-Animation" id="programming-team">
              <div className="group-name-Wrapper">
                <div className="icon trinity"><img src="/assets/images/common/index/deco_loading_04.svg" alt="" decoding="async" /></div>
                <p>Programming Team<span>MINERVA FTC<br />SOFTWARE DEVELOPMENT DEPARTMENT</span></p>
              </div>
              <p className="affiliation">Code & Automation</p>
              <ul className="character-List">
                <li className="shiroko">
                  <Link href="/member/placeholder-10">
                    <div className="chara-name">
                      <dl className="chara">
                        <dt className="en">FULLNAME LASTNAME</dt>
                        <dd className="name">???</dd>
                      </dl>
                      <dl>
                        <dt className="en"><span>Personal Quotation</span></dt>
                        <dd className="ja">???</dd>
                      </dl>
                    </div>
                    <div className="chara-image"><img src="/assets/images/common/character/thumb-dk.png" alt="" decoding="async" /></div>
                    <div className="detail-info">
                      <div className="key-color"><span></span><span></span><span></span></div>
                      <p>：PROGRAMMING TEAM<br />　MEMBER</p>
                    </div>
                  </Link>
                </li>
                <li className="shiroko">
                  <Link href="/member/placeholder-11">
                    <div className="chara-name">
                      <dl className="chara">
                        <dt className="en">FULLNAME LASTNAME</dt>
                        <dd className="name">???</dd>
                      </dl>
                      <dl>
                        <dt className="en"><span>Personal Quotation</span></dt>
                        <dd className="ja">???</dd>
                      </dl>
                    </div>
                    <div className="chara-image"><img src="/assets/images/common/character/thumb-dk-2.png" alt="" decoding="async" /></div>
                    <div className="detail-info">
                      <div className="key-color"><span></span><span></span><span></span></div>
                      <p>：PROGRAMMING TEAM<br />　MEMBER</p>
                    </div>
                  </Link>
                </li>
                <li className="shiroko">
                  <Link href="/member/placeholder-12">
                    <div className="chara-name">
                      <dl className="chara">
                        <dt className="en">FULLNAME LASTNAME</dt>
                        <dd className="name">???</dd>
                      </dl>
                      <dl>
                        <dt className="en"><span>Personal Quotation</span></dt>
                        <dd className="ja">???</dd>
                      </dl>
                    </div>
                    <div className="chara-image"><img src="/assets/images/common/character/thumb-dk.png" alt="" decoding="async" /></div>
                    <div className="detail-info">
                      <div className="key-color"><span></span><span></span><span></span></div>
                      <p>：PROGRAMMING TEAM<br />　MEMBER</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
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
