import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Offline',
  description: 'You are currently offline',
};

export default function OfflinePage() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#000',
      color: '#fff',
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>📡</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>You&apos;re Offline</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px' }}>
        It looks like you&apos;re not connected to the internet.
        This page is not available offline, but you can still access cached pages.
      </p>
      <Link
        href="/"
        style={{
          padding: '12px 24px',
          backgroundColor: '#fff',
          color: '#000',
          textDecoration: 'none',
          borderRadius: '4px',
          fontSize: '1rem',
          fontWeight: 'bold',
          transition: 'opacity 0.3s',
        }}
        onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
        onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
      >
        Go to Home Page
      </Link>
    </div>
  );
}
