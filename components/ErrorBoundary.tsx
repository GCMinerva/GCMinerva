'use client';

import { useEffect } from 'react';

export default function ErrorBoundary() {
  useEffect(() => {
    const hasRefreshed = sessionStorage.getItem('error-refreshed');

    const handleError = (event: ErrorEvent) => {
      const error = event.error;

      // Check for the specific removeChild NotFoundError
      if (
        error?.name === 'NotFoundError' &&
        error?.message?.includes('removeChild') &&
        !hasRefreshed
      ) {
        console.log('Detected removeChild error, refreshing page once...');
        sessionStorage.setItem('error-refreshed', 'true');
        window.location.reload();
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const error = event.reason;

      // Check for the specific removeChild NotFoundError in promise rejections
      if (
        error?.name === 'NotFoundError' &&
        error?.message?.includes('removeChild') &&
        !hasRefreshed
      ) {
        console.log('Detected removeChild error in promise, refreshing page once...');
        sessionStorage.setItem('error-refreshed', 'true');
        window.location.reload();
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return null;
}
