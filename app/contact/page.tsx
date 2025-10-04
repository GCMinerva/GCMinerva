'use client';

import { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import './contact.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('sending');

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1000);
  };

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/gcminerva',
      icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
      color: '#E1306C'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/gcminerva',
      icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
      color: '#333'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@gcminerva',
      icon: 'M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z',
      color: '#FF0000'
    },
    {
      name: 'Discord',
      url: 'https://discord.gg/gcminerva',
      icon: 'M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z',
      color: '#5865F2'
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
            <h1 className="logo"><Link href="/"><img src="/assets/images/common/logo.png" alt="Minerva#24809 Gen3 | FTC" decoding="async" /></Link></h1>
            <h2 className="sw-Lower-Ttl js-Animation ttl-Slide"><span>C</span><span>O</span><span>N</span><span>T</span><span>A</span><span>C</span><span>T</span></h2>
          </div>

          <div className="sw-Lower-Wrapper contact-Wrapper">
            <div className="intro-Wrapper">
              <div className="catch-Wrapper">
                <div className="catch fade-Animation" style={{
                  fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                  fontFamily: 'Oxanium, cursive',
                  fontWeight: 700,
                  textAlign: 'center',
                  color: '#003350',
                  letterSpacing: '0.1em',
                  marginBottom: '1.5rem'
                }}>
                  GET IN TOUCH
                </div>
                <div className="catch-2nd fade-Animation" style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.8rem)',
                  fontFamily: 'Noto Sans JP, sans-serif',
                  fontWeight: 500,
                  textAlign: 'center',
                  color: '#00d1ff',
                  marginBottom: '3rem'
                }}>
                  We'd love to hear from you
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="contact-social-section js-Animation fade-Animation">
              <h3 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontFamily: 'Oxanium, cursive',
                fontWeight: 700,
                textAlign: 'center',
                color: '#003350',
                marginBottom: '2rem'
              }}>
                CONNECT WITH US
              </h3>
              <div className="social-links-grid">
                {socialLinks.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="social-icon-bg" style={{ backgroundColor: platform.color }}></div>
                    <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d={platform.icon} />
                    </svg>
                    <span className="social-name">{platform.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="contact-form-section js-Animation fade-Animation" style={{ animationDelay: '0.4s' }}>
              <h3 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontFamily: 'Oxanium, cursive',
                fontWeight: 700,
                textAlign: 'center',
                color: '#003350',
                marginBottom: '2rem'
              }}>
                SEND US A MESSAGE
              </h3>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us more..."
                  />
                </div>

                <button
                  type="submit"
                  className="submit-button"
                  disabled={submitStatus === 'sending'}
                >
                  {submitStatus === 'sending' ? 'SENDING...' :
                   submitStatus === 'success' ? 'MESSAGE SENT!' :
                   'SEND MESSAGE'}
                </button>

                {submitStatus === 'success' && (
                  <div className="success-message">
                    Thank you for reaching out! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>

            <div className="contact-footer-text js-Animation fade-Animation" style={{ animationDelay: '0.6s' }}>
              <p style={{
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                fontFamily: 'Noto Sans JP, sans-serif',
                textAlign: 'center',
                color: '#003350',
                marginTop: '3rem',
                lineHeight: 1.8
              }}>
                Whether you have questions, partnership inquiries,<br className="sp_b" />
                or just want to say hello, we're here to help.
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
