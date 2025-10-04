'use client';

import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

interface YoutubeModalProps {
  videoId: string | null;
  onClose: () => void;
}

export default function YoutubeModal({ videoId, onClose }: YoutubeModalProps) {
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoId) {
      setCurrentVideoId(videoId);
      if (modalRef.current) {
        gsap.to(modalRef.current, {
          display: 'block',
          opacity: 1,
          duration: 0.3,
          ease: 'power1.out',
        });
      }
    } else if (modalRef.current) {
      gsap.to(modalRef.current, {
        display: 'none',
        opacity: 0,
        duration: 0.3,
        ease: 'power1.out',
        onComplete: () => {
          setCurrentVideoId(null);
        },
      });
    }
  }, [videoId]);

  const handleClose = () => {
    if (modalRef.current) {
      gsap.to(modalRef.current, {
        display: 'none',
        opacity: 0,
        duration: 0.3,
        ease: 'power1.out',
        onComplete: () => {
          setCurrentVideoId(null);
          onClose();
        },
      });
    } else {
      onClose();
    }
  };

  if (!videoId && !currentVideoId) return null;

  return (
    <div ref={modalRef} className="youtube-Modal" style={{ display: 'none', opacity: 0 }}>
      <div className="youtube-Modal_Overlay" onClick={handleClose}></div>
      <div className="youtube-Modal_Close" onClick={handleClose}></div>
      <div className="youtube-Modal_Content">
        {currentVideoId && (
          <iframe
            key={currentVideoId}
            width="900"
            height="506"
            src={`https://www.youtube.com/embed/${currentVideoId}?rel=0&autoplay=1`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}
