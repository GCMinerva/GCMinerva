'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export default function KeyVisual() {
  useEffect(() => {
    let mounted = true;
    const timer = setTimeout(() => {
      if (!mounted) return;

      const mainSplide = document.querySelector('.kv-select-Wrapper') as any;
      const thumbnailSplide = document.querySelector('#thumbnail-carousel') as any;

      if (mainSplide && thumbnailSplide) {
        if (mainSplide.splide && thumbnailSplide.splide) {
          mainSplide.splide.sync(thumbnailSplide.splide);
        }
      }
    }, 100);

    return () => {
      mounted = false;
      clearTimeout(timer);

      // Clean up Splide instances
      const mainSplide = document.querySelector('.kv-select-Wrapper') as any;
      const thumbnailSplide = document.querySelector('#thumbnail-carousel') as any;

      if (mainSplide?.splide) {
        try {
          mainSplide.splide.destroy();
        } catch (e) {
          // Ignore errors during cleanup
        }
      }
      if (thumbnailSplide?.splide) {
        try {
          thumbnailSplide.splide.destroy();
        } catch (e) {
          // Ignore errors during cleanup
        }
      }
    };
  }, []);

  return (
    <section className="index-Keyvisual">
      <div className="kv-Wrapper">
        <Splide
          options={{
            type: 'fade',
            rewind: true,
            autoplay: true,
            pagination: false,
            speed: 3000,
            interval: 10000,
            arrows: false,
          }}
          className="kv-select-Wrapper"
          aria-label="キービジュアル"
        >
          <SplideSlide className="kv-select-Item">
            <img src="/assets/images/common/index/kv_2.png" alt="Key Visual 2" />
          </SplideSlide>
          <SplideSlide className="kv-select-Item">
            <img src="/assets/images/common/index/kv.png" alt="Key Visual 1" />
          </SplideSlide>
        </Splide>

        <h1 className="logo">
          <Image
            src="/assets/images/common/logo.png"
            alt="Minerva#24809 Gen3 | FTC"
            width={600}
            height={200}
            priority
          />
        </h1>

        <Splide
          options={{
            fixedWidth: 100,
            fixedHeight: 60,
            gap: 10,
            rewind: true,
            pagination: false,
            cover: true,
            isNavigation: true,
            breakpoints: {
              600: {
                fixedWidth: 60,
                fixedHeight: 44,
              },
            },
          }}
          id="thumbnail-carousel"
          aria-label="キービジュアルサムネイルスライダー"
        >
          <SplideSlide>
            <span className="none">VISUAL</span>
            <span className="num num-1">01</span>
          </SplideSlide>
          <SplideSlide>
            <span className="none">VISUAL</span>
            <span className="num num-2">02</span>
          </SplideSlide>
        </Splide>
      </div>

      <div className="index-MainContents">
        <h1 className="logo">
          <Image
            src="/assets/images/common/logo.png"
            alt="Minerva#24809 Gen3 | FTC"
            width={600}
            height={200}
            priority
          />
        </h1>

        <div className="catch">
          <picture>
            <source media="(max-width: 1024px)" srcSet="/assets/images/sp/index/img_catch-3.png" />
            <img src="/assets/images/pc/index/img_catch-3.png" alt="Catch" />
          </picture>
        </div>

        <div className="index-Menu" suppressHydrationWarning>
          <ul suppressHydrationWarning>
            <li>
              <Link className="current" href="/">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/about/">ABOUT</Link>
            </li>
            <li>
              <Link href="/member/">MEMBER</Link>
            </li>
            <li>
              <Link href="/sponser/">SPONSER</Link>
            </li>
            <li>
              <Link href="/project/">PROJECT</Link>
            </li>
            <li>
              <Link href="/community/">COMMUNITY</Link>
            </li>
            <li>
              <Link href="/social/">SOCIAL</Link>
            </li>
            <li>
              <Link href="/contact/">CONTACT</Link>
            </li>
          </ul>
        </div>

        <div className="pickup-Wrapper">
          <p className="pickup-Ttl">PICK UP</p>
          <Splide
            options={{
              type: 'loop',
              perPage: 1,
              autoplay: true,
              interval: 5000,
              speed: 800,
              pagination: true,
              arrows: true,
              gap: '1rem',
            }}
            aria-label="Pickup Banner Slider"
          >
            <SplideSlide>
              <a href="https://vingdocs.gcminerva.co/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/assets/images/common/index/bnr.png"
                  alt="Minerva Documentation"
                  width={300}
                  height={200}
                  loading="lazy"
                />
              </a>
            </SplideSlide>
            <SplideSlide>
              <a href="/#" rel="noopener noreferrer">
                <Image
                  src="/assets/images/common/index/bnr2.png"
                  alt="Minerva Banner 2"
                  width={300}
                  height={200}
                  loading="lazy"
                />
              </a>
            </SplideSlide>
          </Splide>
        </div>

        <div className="share-Wrapper">
          <a href="https://www.instagram.com/ftc_minerva/" target="_blank" rel="noreferrer noopener">
            <span className="frame">
              <span className="x">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    fill="white"
                  />
                </svg>
                OFFICIAL ACCOUNT
              </span>
              <span className="sub">FTC Minerva</span>
            </span>
          </a>
        </div>

        <div className="official-Link-Wrapper">
          <p>SHARE</p>
          <ul className="share-List">
            <li className="item instagram">
              <a
                href="https://www.instagram.com/ftc_minerva/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    fill="#003350"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
