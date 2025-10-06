'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  useEffect(() => {
    const hamburger = document.querySelector('.st-Header_Hamburger');
    const header = document.querySelector('.st-Header');

    const handleClick = () => {
      header?.classList.toggle('opened');
    };

    hamburger?.addEventListener('click', handleClick);

    return () => {
      hamburger?.removeEventListener('click', handleClick);
    };
  }, []);

  // Close menu when navigating
  useEffect(() => {
    const header = document.querySelector('.st-Header');
    header?.classList.remove('opened');
  }, [pathname]);

  return (
    <header className="st-Header" role="banner">
      <button
        className="st-Header_Hamburger"
        aria-label="Toggle navigation menu"
        aria-expanded="false"
        aria-controls="main-navigation"
      >
        <div className="navi-deco">
          <span></span>
          <span></span>
        </div>
        <span className="menu"></span>
      </button>
      <div className="st-Header_Menu">
        <div className="bg-auto"></div>
        <div className="right-menu">
          <nav aria-label="Main navigation" id="main-navigation">
            <ul className="st-Header_Nav js-Animation">
              <li>
                <Link href="/" aria-label="Go to homepage">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/about/" aria-label="Learn about our team">ABOUT</Link>
              </li>
              <li>
                <Link href="/member/" aria-label="Meet our team members">MEMBER</Link>
              </li>
              <li>
                <Link href="/sponser/" aria-label="View our sponsors">SPONSER</Link>
              </li>
              <li>
                <Link href="/project/" aria-label="Explore our projects">PROJECT</Link>
              </li>
              <li>
                <Link href="/blog/" aria-label="Read our blog and news">BLOG</Link>
              </li>
              <li>
                <Link href="/competitions/" aria-label="View competition results">COMPETITIONS</Link>
              </li>
              <li>
                <Link href="/robot/" aria-label="View robot specifications">ROBOT</Link>
              </li>
              <li>
                <Link href="/community/" aria-label="Join our community">COMMUNITY</Link>
              </li>
              <li>
                <Link href="/social/" aria-label="Follow us on social media">SOCIAL</Link>
              </li>
              <li>
                <Link href="/contact/" aria-label="Contact us">CONTACT</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
