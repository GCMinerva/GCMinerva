'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface YoutubeModalProps {
  videoId: string | null;
  onClose: () => void;
}

export default function YoutubeModal({ videoId, onClose }: YoutubeModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (videoId) {
      setIsVisible(true);
      const modal = document.querySelector('.youtube-Modal');
      gsap.to(modal, {
        display: 'block',
        opacity: 1,
        duration: 0.3,
        ease: 'power1.out',
      });
    } else {
      const modal = document.querySelector('.youtube-Modal');
      gsap.to(modal, {
        display: 'none',
        opacity: 0,
        duration: 0.3,
        ease: 'power1.out',
      });
      setIsVisible(false);
    }
  }, [videoId]);

  const handleClose = () => {
    const modal = document.querySelector('.youtube-Modal');
    const content = document.querySelector('.youtube-Modal_Content');

    gsap.to(modal, {
      display: 'none',
      opacity: 0,
      duration: 0.3,
      ease: 'power1.out',
      onComplete: () => {
        if (content?.firstChild) {
          content.removeChild(content.firstChild);
        }
        onClose();
      },
    });
  };

  if (!videoId) return null;

  return (
    <div className="youtube-Modal" style={{ display: 'none', opacity: 0 }}>
      <div className="youtube-Modal_Overlay" onClick={handleClose}></div>
      <div className="youtube-Modal_Close" onClick={handleClose}></div>
      <div className="youtube-Modal_Content">
        <iframe
          width="900"
          height="506"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
