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
    <header className="st-Header">
      <div className="st-Header_Hamburger">
        <div className="navi-deco">
          <span></span>
          <span></span>
        </div>
        <span className="menu"></span>
      </div>
      <div className="st-Header_Menu">
        <div className="bg-auto"></div>
        <div className="right-menu">
          <ul className="st-Header_Nav js-Animation">
            <li>
              <Link href="/">
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
      </div>
    </header>
  );
}
