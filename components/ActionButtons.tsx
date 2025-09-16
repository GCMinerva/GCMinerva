'use client';

import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

export default function ActionButtons() {
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (buttonsRef.current) {
      animate(buttonsRef.current.children, {
        opacity: [0, 1],
        translateY: [20, 0],
        delay: stagger(150, { start: 2500 }),
        duration: 600,
        ease: 'outQuad'
      });
    }
  }, []);

  const showTopRightAlert = (message: string) => {
    // Create alert element
    const alert = document.createElement('div');
    alert.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, rgba(0,0,0,0.9), rgba(40,40,40,0.9));
      color: #fff;
      padding: 15px 20px;
      border-radius: 8px;
      border: 1px solid rgba(255,255,255,0.2);
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      z-index: 1000;
      font-family: 'Geist Mono', monospace;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      backdrop-filter: blur(10px);
      transform: translateX(100%);
      opacity: 0;
    `;
    alert.textContent = message;
    document.body.appendChild(alert);

    // Animate in from right
    animate(alert, {
      translateX: [100, 0],
      opacity: [0, 1],
      duration: 500,
      ease: 'outBack(1.7)',
      complete: () => {
        // Auto remove after 3 seconds
        setTimeout(() => {
          animate(alert, {
            translateX: [0, 100],
            opacity: [1, 0],
            duration: 400,
            ease: 'inBack(1.7)',
            complete: () => alert.remove()
          });
        }, 3000);
      }
    });
  };

  const handleButtonClick = (buttonType: string, event: React.MouseEvent) => {
    // Subtle click animation
    const button = event.currentTarget as HTMLElement;
    animate(button, {
      scale: [1, 0.95, 1],
      duration: 200,
      ease: 'outQuad'
    });

    // Show animated alerts instead of browser alerts
    switch (buttonType) {
      case 'sponsor':
        showTopRightAlert('Sponsor feature coming soon');
        break;
      case 'contact':
        showTopRightAlert('Contact feature coming soon');
        break;
      case 'learn':
        showTopRightAlert('Learn more feature coming soon');
        break;
    }
  };

  return (
    <div ref={buttonsRef} className="action-buttons">
      <button
        onClick={(e) => handleButtonClick('sponsor', e)}
        className="action-button"
      >
        Sponsor
      </button>

      <button
        onClick={(e) => handleButtonClick('contact', e)}
        className="action-button"
      >
        Contact
      </button>

      <button
        onClick={(e) => handleButtonClick('learn', e)}
        className="action-button"
      >
        Learn More
      </button>
    </div>
  );
}