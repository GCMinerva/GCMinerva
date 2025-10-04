import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Minerva#24809 Gen3 FTC robotics team. Reach out for collaborations, sponsorships, or general inquiries.',
  keywords: ['contact', 'FTC contact', 'robotics team contact', 'collaborate', 'sponsorship inquiries'],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact | Minerva#24809 Gen3 | FTC',
    description: 'Get in touch with Minerva#24809 Gen3 FTC robotics team for collaborations and inquiries.',
    url: 'https://gcminerva.com/contact',
    siteName: 'Minerva#24809 Gen3 | FTC',
    images: [
      {
        url: '/assets/images/common/ogp_03.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact | Minerva#24809 Gen3 | FTC',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Minerva#24809 Gen3 | FTC',
    description: 'Get in touch with our robotics team for collaborations and inquiries.',
    images: ['/assets/images/common/ogp_03.jpg'],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
