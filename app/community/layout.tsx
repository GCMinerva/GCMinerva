import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Community',
  description: 'Join the Minerva#24809 Gen3 FTC community. Connect with fellow robotics enthusiasts, share knowledge, and be part of our growing network of innovators.',
  keywords: [
    'FTC community',
    'Minerva community',
    'robotics community',
    'STEM community',
    'FTC Thailand community',
    'robotics enthusiasts',
    'FTC networking',
    'robotics collaboration'
  ],
  openGraph: {
    title: 'Community | Minerva#24809 Gen3 | FTC',
    description: 'Join the Minerva#24809 Gen3 FTC community',
    url: 'https://gcminerva.co/community',
    type: 'website',
    images: [
      {
        url: '/assets/images/common/index/bnr.png',
        width: 1200,
        height: 630,
        alt: 'Minerva Community',
      },
    ],
  },
  alternates: {
    canonical: '/community',
    languages: {
      'en': '/community',
      'th': '/th/community',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Community | Minerva#24809 Gen3 | FTC',
    description: 'Join the Minerva#24809 Gen3 FTC community',
    images: ['/assets/images/common/index/bnr.png'],
  },
};

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
