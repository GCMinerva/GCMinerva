import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore Minerva#24809 Gen3 robotics projects including VingVing Robot and VingVing Visualizer. Discover our innovations in autonomous navigation, computer vision, and data visualization.',
  keywords: ['robotics projects', 'FTC projects', 'VingVing Robot', 'autonomous navigation', 'computer vision', 'data visualization', 'open source robotics'],
  alternates: {
    canonical: '/project',
  },
  openGraph: {
    title: 'Projects | Minerva#24809 Gen3 | FTC',
    description: 'Explore Minerva#24809 Gen3 robotics projects including VingVing Robot and VingVing Visualizer. Innovation through robotics and technology.',
    url: 'https://gcminerva.com/project',
    siteName: 'Minerva#24809 Gen3 | FTC',
    images: [
      {
        url: '/assets/images/common/ogp_03.jpg',
        width: 1200,
        height: 630,
        alt: 'Projects | Minerva#24809 Gen3 | FTC',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Minerva#24809 Gen3 | FTC',
    description: 'Explore our robotics projects including VingVing Robot and VingVing Visualizer.',
    images: ['/assets/images/common/ogp_03.jpg'],
  },
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
