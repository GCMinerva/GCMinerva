'use client';

export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded focus:shadow-lg"
      style={{
        position: 'absolute',
        left: '-10000px',
        top: 'auto',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
      }}
      onFocus={(e) => {
        e.currentTarget.style.position = 'fixed';
        e.currentTarget.style.left = '1rem';
        e.currentTarget.style.top = '1rem';
        e.currentTarget.style.width = 'auto';
        e.currentTarget.style.height = 'auto';
        e.currentTarget.style.overflow = 'visible';
        e.currentTarget.style.zIndex = '9999';
        e.currentTarget.style.padding = '0.5rem 1rem';
        e.currentTarget.style.backgroundColor = '#2563eb';
        e.currentTarget.style.color = 'white';
        e.currentTarget.style.borderRadius = '0.25rem';
        e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
      }}
      onBlur={(e) => {
        e.currentTarget.style.position = 'absolute';
        e.currentTarget.style.left = '-10000px';
        e.currentTarget.style.top = 'auto';
        e.currentTarget.style.width = '1px';
        e.currentTarget.style.height = '1px';
        e.currentTarget.style.overflow = 'hidden';
      }}
    >
      Skip to main content
    </a>
  );
}
