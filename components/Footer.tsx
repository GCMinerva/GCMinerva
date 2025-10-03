import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="st-Footer">
      <div className="st-Footer-Container">
        <div className="st-Footer-Container-Inner">
          <div className="content-Item">
            <div className="logo">
              <Link href="/">
                <Image
                  src="/assets/images/common/logo.png"
                  alt="Minerva#24809 Gen3 | FTC"
                  width={300}
                  height={100}
                  loading="lazy"
                />
              </Link>
            </div>
            <ul className="footer-Nav">
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
          <div className="container-bottom">
            <div className="official-account-wrapper">
              <p className="txt">OFFICIAL ACCOUNT</p>
              <ul className="official-Link">
                <li>
                  <a
                    className="instagram"
                    href="https://www.instagram.com/ftc_minerva/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="icon ig-icon">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    className="youtube"
                    href="https://www.youtube.com/@ftc_minerva"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="icon y-icon">
                      <svg
                        width="20"
                        height="14"
                        viewBox="0 0 20 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.9356 1.01614C19.2459 1.31166 19.4687 1.67911 19.5818 2.08172C20 3.56774 20 6.66667 20 6.66667C20 6.66667 20 9.76559 19.5818 11.2516C19.4687 11.6542 19.2459 12.0217 18.9356 12.3172C18.6253 12.6127 18.2384 12.8259 17.8136 12.9355C16.25 13.3333 10 13.3333 10 13.3333C10 13.3333 3.75 13.3333 2.18636 12.9355C1.76161 12.8259 1.37472 12.6127 1.06441 12.3172C0.754097 12.0217 0.531255 11.6542 0.418182 11.2516C0 9.76559 0 6.66667 0 6.66667C0 6.66667 0 3.56774 0.418182 2.08172C0.531255 1.67911 0.754097 1.31166 1.06441 1.01614C1.37472 0.720631 1.76161 0.50742 2.18636 0.39785C3.75 0 10 0 10 0C10 0 16.25 0 17.8136 0.39785C18.2384 0.50742 18.6253 0.720631 18.9356 1.01614ZM13.1818 6.66668L7.95451 3.8527V9.48066L13.1818 6.66668Z"
                          fill="white"
                        ></path>
                      </svg>
                    </div>
                    <span>YouTube</span>
                  </a>
                </li>
                <li>
                  <a
                    className="github"
                    href="https://github.com/GCMinerva"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="icon gh-icon">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <span>GitHub</span>
                  </a>
                </li>
              </ul>
            </div>
            <ul className="link-container">
              <li className="link">
                <a href="#" target="_blank" rel="noopener">
                  Minerva#24809 Gen3 | FTC
                </a>
              </li>
              <li className="link">
                <a href="https://www.shochiku.co.jp/privacy/" target="_blank" rel="noopener">
                  PRIVACY POLICY
                </a>
              </li>
              <li className="gc">
                <a href="https://www.facebook.com/p/Gifted-Computer-PLUS-100057159531628/" target="_blank" rel="noopener">
                  <Image
                    src="/assets/images/common/icon_gc.png"
                    alt="Gifted Computer PLUS"
                    width={60}
                    height={60}
                    loading="lazy"
                  />
                </a>
              </li>
              <li className="prc">
                <a href="https://www.prc.ac.th/" target="_blank" rel="noopener">
                  <Image
                    src="/assets/images/common/icon_prc.png"
                    alt="PRC"
                    width={60}
                    height={60}
                    loading="lazy"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; JNX03/MINERVA PROJECT</p>
        </div>
      </div>
      <div className="backtoTop">
        <a href="#">
          <span>PAGE TOP</span>
        </a>
      </div>
    </footer>
  );
}
