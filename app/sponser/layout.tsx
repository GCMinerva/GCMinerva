import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sponsors',
  description: 'Meet the sponsors and partners supporting Minerva#24809 Gen3 FTC robotics team. Join us in fostering innovation and STEM education.',
  keywords: ['sponsors', 'FTC sponsors', 'robotics sponsors', 'team partners', 'STEM support', 'sponsor robotics'],
  alternates: {
    canonical: '/sponser',
    languages: {
      'en': '/sponser',
      'th': '/th/sponser',
    },
  },
  openGraph: {
    title: 'Sponsors | Minerva#24809 Gen3 | FTC',
    description: 'Meet the sponsors and partners supporting Minerva#24809 Gen3 FTC robotics team.',
    url: 'https://gcminerva.co/sponser',
    siteName: 'Minerva#24809 Gen3 | FTC',
    images: [
      {
        url: '/assets/images/common/ogp_03.jpg',
        width: 1200,
        height: 630,
        alt: 'Sponsors | Minerva#24809 Gen3 | FTC',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sponsors | Minerva#24809 Gen3 | FTC',
    description: 'Meet our sponsors and partners supporting our robotics team.',
    images: ['/assets/images/common/ogp_03.jpg'],
  },
};

export default function SponserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
