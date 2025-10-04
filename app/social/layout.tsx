import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social',
  description: 'Connect with Minerva#24809 Gen3 on social media. Follow our robotics journey, team updates, and FIRST Tech Challenge experiences.',
  keywords: ['social media', 'FTC social', 'robotics team social', 'follow Minerva', 'team updates'],
  alternates: {
    canonical: '/social',
  },
  openGraph: {
    title: 'Social | Minerva#24809 Gen3 | FTC',
    description: 'Connect with Minerva#24809 Gen3 on social media and follow our robotics journey.',
    url: 'https://gcminerva.com/social',
    siteName: 'Minerva#24809 Gen3 | FTC',
    images: [
      {
        url: '/assets/images/common/ogp_03.jpg',
        width: 1200,
        height: 630,
        alt: 'Social | Minerva#24809 Gen3 | FTC',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social | Minerva#24809 Gen3 | FTC',
    description: 'Connect with us on social media and follow our robotics journey.',
    images: ['/assets/images/common/ogp_03.jpg'],
  },
};

export default function SocialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
