import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Member',
  description: 'Meet the talented members of Minerva#24809 Gen3 FTC team. Our diverse team includes Art, Build, CAD, and Programming specialists working together in robotics innovation.',
  keywords: [
    'FTC team members',
    'Minerva team',
    'robotics team members',
    'FTC 24809 members',
    'STEM team',
    'robotics engineers',
    'programming team',
    'CAD team',
    'build team',
    'art team',
    'Thailand robotics team'
  ],
  openGraph: {
    title: 'Member | Minerva#24809 Gen3 | FTC',
    description: 'Meet the talented members of Minerva#24809 Gen3 FTC team',
    url: 'https://gcminerva.co/member',
    type: 'website',
    images: [
      {
        url: '/assets/images/common/index/bnr.png',
        width: 1200,
        height: 630,
        alt: 'Minerva Team Members',
      },
    ],
  },
  alternates: {
    canonical: '/member',
    languages: {
      'en': '/member',
      'th': '/th/member',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Member | Minerva#24809 Gen3 | FTC',
    description: 'Meet the talented members of Minerva#24809 Gen3 FTC team',
    images: ['/assets/images/common/index/bnr.png'],
  },
};

export default function MemberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
