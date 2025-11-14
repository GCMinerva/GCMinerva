'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();
  const [showErrorOverlay, setShowErrorOverlay] = useState(false);

  useEffect(() => {
    // Auto-reload on error with visual feedback
    const handleError = () => {
      const hasReloaded = sessionStorage.getItem('error-reloaded');
      if (!hasReloaded) {
        sessionStorage.setItem('error-reloaded', 'true');
        setShowErrorOverlay(true);

        // Show overlay briefly before reload
        setTimeout(() => {
          window.location.reload();
        }, 800);
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled promise rejection:', event.reason);
      handleError();
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

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
    <>
      {showErrorOverlay && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 51, 80, 0.95)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
          }}
        >
          <Image
            src="/assets/images/common/index/bnr.png"
            alt="Loading"
            width={400}
            height={200}
            style={{ opacity: 0.8 }}
            priority
          />
          <p
            style={{
              color: '#00d1ff',
              fontSize: '1.5rem',
              fontWeight: 700,
              textAlign: 'center',
            }}
          >
            Reloading application...
          </p>
        </div>
      )}

      <header className="st-Header" role="banner">
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
            <nav aria-label="Main navigation" id="main-navigation">
              <ul className="st-Header_Nav js-Animation">
                <li>
                  <Link href="/" aria-label="Go to homepage">
                    HOME
                  </Link>
                </li>
                <li>
                  <Link href="/about" aria-label="Learn about our team">ABOUT</Link>
                </li>
                <li>
                  <Link href="/member" aria-label="Meet our team members">MEMBER</Link>
                </li>
                <li>
                  <Link href="/sponser" aria-label="View our sponsors">SPONSER</Link>
                </li>
                <li>
                  <Link href="/project" aria-label="Explore our projects">PROJECT</Link>
                </li>
                <li>
                  <Link href="/community" aria-label="Join our community">COMMUNITY</Link>
                </li>
                <li>
                  <Link href="/social" aria-label="Follow us on social media">SOCIAL</Link>
                </li>
                <li>
                  <Link href="/contact" aria-label="Contact us">CONTACT</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
