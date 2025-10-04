'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import './project.css';

export default function ProjectPage() {
  const scriptsLoaded = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.remove('preload');
    }, 300);

    return () => {
      clearTimeout(timer);
      // Cleanup any DOM manipulations from external scripts
      scriptsLoaded.current = false;
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: 'VingVing Robot',
      year: '2025',
      description: 'An advanced robotics project featuring autonomous navigation, sensor integration, and real-time decision making. Built for FIRST Tech Challenge competitions with custom mechanical design and sophisticated control systems.',
      technologies: ['Java', 'Robot Control', 'Computer Vision', 'Autonomous Navigation'],
      github: 'https://github.com/GCMinerva/VingVingRobot',
      image: '/assets/images/common/index/bnr.png',
      status: 'Active Development'
    },
    {
      id: 2,
      title: 'VingVing Visualizer',
      year: '2025',
      description: 'A real-time data visualization tool designed to monitor and analyze robot performance metrics. Features live telemetry display, historical data analysis, and customizable dashboards for debugging and optimization.',
      technologies: ['Python', 'Data Visualization', 'Real-time Processing', 'UI/UX'],
      github: 'https://github.com/JNX03/PedroVisualizer',
      image: null,
      status: 'Active Development'
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
            <h1 className="logo"><a href="/"><img src="/assets/images/common/logo.png" alt="Minerva#24809 Gen3 | FTC" decoding="async" /></a></h1>
            <h2 className="sw-Lower-Ttl js-Animation ttl-Slide"><span>P</span><span>R</span><span>O</span><span>J</span><span>E</span><span>C</span><span>T</span></h2>
          </div>

          <div className="sw-Lower-Wrapper project-Wrapper">
            <div className="intro-Wrapper" style={{ textAlign: 'center' }}>
              <div className="catch-Wrapper" style={{ maxWidth: '100%', margin: '0 auto' }}>
                <div className="catch fade-Animation" style={{
                  fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                  fontFamily: 'Oxanium, cursive',
                  fontWeight: 700,
                  textAlign: 'center',
                  color: '#003350',
                  letterSpacing: '0.1em',
                  marginBottom: '1.5rem'
                }}>
                  OUR PROJECTS
                </div>
                <div className="catch-2nd fade-Animation" style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.8rem)',
                  fontFamily: 'Noto Sans JP, sans-serif',
                  fontWeight: 500,
                  textAlign: 'center',
                  color: '#00d1ff',
                  marginBottom: '4rem'
                }}>
                  Innovation through robotics and technology
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="timeline-container">
              <div className="timeline-line"></div>

              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`timeline-item js-Animation fade-Animation ${index % 2 === 0 ? 'left' : 'right'}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="timeline-content">
                    <div className="timeline-marker">
                      <div className="timeline-dot"></div>
                      <div className="timeline-year">{project.year}</div>
                    </div>

                    <div className="project-card">
                      {project.image && (
                        <div className="project-image">
                          <img src={project.image} alt={project.title} />
                        </div>
                      )}

                      <div className="project-content">
                        <div className="project-header">
                          <h3 className="project-title">{project.title}</h3>
                          <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                            {project.status}
                          </span>
                        </div>

                        <p className="project-description">{project.description}</p>

                        <div className="project-technologies">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>

                        {project.github && (
                          <div className="project-links">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="github-link"
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                              View on GitHub
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="project-footer-text js-Animation fade-Animation" style={{ animationDelay: '1s' }}>
              <p style={{
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                fontFamily: 'Noto Sans JP, sans-serif',
                textAlign: 'center',
                color: '#003350',
                marginTop: '4rem',
                lineHeight: 1.8
              }}>
                Explore our open-source projects and contribute to the future of robotics.<br className="sp_b" />
                All our code is available on GitHub for the community to learn and build upon.
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
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (!scriptsLoaded.current) {
            scriptsLoaded.current = true;
            console.log('jQuery loaded');
          }
        }}
        onError={(e) => {
          console.error('jQuery failed to load:', e);
        }}
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"
        strategy="afterInteractive"
        onError={(e) => {
          console.error('Swiper failed to load:', e);
        }}
      />
      <Script
        src="/assets/js/common/lib.js"
        strategy="afterInteractive"
        onError={(e) => {
          console.error('lib.js failed to load:', e);
        }}
      />
      <Script
        src="/assets/js/story/app.bundle.js"
        strategy="afterInteractive"
        onError={(e) => {
          console.error('app.bundle.js failed to load:', e);
        }}
      />
    </>
  );
}
