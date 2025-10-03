'use client';

import { useState, useEffect, useRef } from 'react';
import YoutubeModal from './YoutubeModal';

export default function Movie() {
  const [videoId, setVideoId] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleVideoClick = () => {
    setVideoId('Brf0AlBkb_k');
    // Stop background video
    if (iframeRef.current) {
      const currentSrc = iframeRef.current.src;
      iframeRef.current.src = '';
      iframeRef.current.src = currentSrc.replace('autoplay=1', 'autoplay=0');
    }
  };

  const handleCloseModal = () => {
    setVideoId(null);
    // Resume background video
    if (iframeRef.current) {
      const currentSrc = iframeRef.current.src;
      iframeRef.current.src = currentSrc.replace('autoplay=0', 'autoplay=1');
    }
  };

  return (
    <>
      <section className="index-Movie">
        <div className="ttl-Wrapper">
          <span className="deco" style={{ transform: 'translateY(50%)' }}>
            Minerva#24809<br /> Gen3
          </span>
          <h2 className="movie-ttl js-Animation ttl-Slide">
            <span>P</span>
            <span>R</span>
            <span>E</span>
            <span>V</span>
            <span>I</span>
            <span>E</span>
            <span>W</span>
          </h2>
        </div>
        <div className="movie-Wrapper js-Youtube" data-id="Brf0AlBkb_k" onClick={handleVideoClick}>
          <div className="movie-Embed">
            <iframe
              ref={iframeRef}
              src="https://www.youtube.com/embed/Brf0AlBkb_k?autoplay=1&mute=1&loop=1&playlist=Brf0AlBkb_k&controls=0&showinfo=0&rel=0&modestbranding=1"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
                pointerEvents: 'none'
              }}
            />
          </div>
          <div className="icon-Play">
            <svg width="62" height="67" viewBox="0 0 62 67" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M57.2603 32.2788C58.2466 32.8216 58.2466 34.1784 57.2603 34.7212L11.0274 60.163L6.21918 62.809C5.23288 63.3517 4 62.6733 4 61.5878L4 5.41223C4 4.32672 5.23288 3.64827 6.21918 4.19103L57.2603 32.2788Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </section>

      <YoutubeModal videoId={videoId} onClose={handleCloseModal} />
    </>
  );
}
