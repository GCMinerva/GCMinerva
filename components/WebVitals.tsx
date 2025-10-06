'use client';

import { useEffect } from 'react';
import { useReportWebVitals } from 'next/web-vitals';

export default function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(metric);
    }

    // Send to analytics in production
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_category: 'Web Vitals',
        event_label: metric.id,
        non_interaction: true,
      });
    }

    // Send to Google Tag Manager
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'web-vitals',
        event_category: 'Web Vitals',
        event_action: metric.name,
        event_value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_label: metric.id,
      });
    }
  });

  useEffect(() => {
    // Track page visibility for better performance insights
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (typeof window !== 'undefined' && window.dataLayer) {
          window.dataLayer.push({
            event: 'page_hidden',
            timestamp: new Date().toISOString(),
          });
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return null;
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}
