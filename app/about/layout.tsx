import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ABOUT | Minerva#24809 Gen3 | FTC',
  description: 'Official website for Minerva#24809 Gen3 | FTC robotics team',
  openGraph: {
    title: 'ABOUT | Minerva#24809 Gen3 | FTC',
    description: 'Official website for Minerva#24809 Gen3 | FTC robotics team',
    url: 'https://gcminerva.com/about/',
    siteName: 'ABOUT | Minerva#24809 Gen3 | FTC',
    images: [
      {
        url: '/assets/images/common/ogp_03.jpg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABOUT | Minerva#24809 Gen3 | FTC',
    description: 'Official website for Minerva#24809 Gen3 | FTC robotics team',
    images: ['/assets/images/common/ogp_03.jpg'],
  },
  icons: {
    icon: '/assets/images/common/favicon.ico',
    shortcut: '/assets/images/common/favicon.ico',
  },
};

export default function StoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
