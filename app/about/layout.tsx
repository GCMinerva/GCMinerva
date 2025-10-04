import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Minerva#24809 Gen3, our FTC robotics team journey, and our talented members specializing in coding, design, CAD, and building.',
  keywords: ['FTC team', 'robotics team', 'FIRST Tech Challenge', 'about Minerva', 'robotics members', 'GC Gen 14'],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About | Minerva#24809 Gen3 | FTC',
    description: 'Learn about Minerva#24809 Gen3, our FTC robotics team journey, and our talented members specializing in coding, design, CAD, and building.',
    url: 'https://gcminerva.com/about',
    siteName: 'Minerva#24809 Gen3 | FTC',
    images: [
      {
        url: '/assets/images/common/ogp_03.jpg',
        width: 1200,
        height: 630,
        alt: 'About Minerva#24809 Gen3 | FTC',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Minerva#24809 Gen3 | FTC',
    description: 'Learn about Minerva#24809 Gen3, our FTC robotics team journey, and our talented members.',
    images: ['/assets/images/common/ogp_03.jpg'],
  },
};

export default function StoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
