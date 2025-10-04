import type { Metadata } from "next";
import Script from "next/script";
import FAQSchema from "@/components/FAQSchema";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Minerva#24809 Gen3 | FTC",
    template: "%s | Minerva#24809 Gen3 | FTC",
  },
  description: "Official website for Minerva#24809 Gen3 | FTC robotics team. Discover our journey in robotics, innovation, and technology.",
  keywords: [
    "FTC",
    "FIRST Tech Challenge",
    "robotics",
    "Minerva",
    "24809",
    "Gen3",
    "robotics team",
    "STEM",
    "technology",
    "innovation",
    "FTC team 24809",
    "FIRST robotics",
    "robotics competition",
    "Thailand FTC",
    "Bangkok robotics",
    "INTO THE DEEP",
    "FTC 2024-2025",
    "robotics engineering",
    "STEM education",
    "robot design",
    "programming",
    "CAD design",
    "3D modeling",
    "mechanical engineering",
    "autonomous robotics",
    "FTC Thailand",
    "GC Gen 14",
    "DECODE challenge"
  ],
  authors: [{ name: "Minerva#24809 Gen3" }],
  creator: "Minerva#24809 Gen3",
  publisher: "Minerva#24809 Gen3",
  metadataBase: new URL('https://minerva.jnx03.xyz'),
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': ['/rss.xml', '/atom.xml'],
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    url: 'https://minerva.jnx03.xyz',
    title: "Minerva#24809 Gen3 | FTC",
    siteName: "Minerva#24809 Gen3 | FTC",
    description: "Official website for Minerva#24809 Gen3 | FTC robotics team. Discover our journey in robotics, innovation, and technology.",
    images: [
      {
        url: "/assets/images/common/ogp_03.jpg",
        width: 1200,
        height: 630,
        alt: "Minerva#24809 Gen3 | FTC",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minerva#24809 Gen3 | FTC",
    description: "Official website for Minerva#24809 Gen3 | FTC robotics team",
    images: ["/assets/images/common/ogp_03.jpg"],
  },
  icons: {
    icon: "/assets/images/common/favicon.ico",
    shortcut: "/assets/images/common/favicon.ico",
    apple: "/assets/images/common/favicon.ico",
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "SportsTeam",
    "name": "Minerva#24809 Gen3",
    "alternateName": ["Minerva 24809", "Team 24809", "GCMinerva"],
    "description": "FIRST Tech Challenge (FTC) robotics team #24809 from Thailand, competing in the INTO THE DEEP season. Specializing in robotics engineering, programming, CAD design, and innovation.",
    "url": "https://minerva.jnx03.xyz",
    "logo": "https://minerva.jnx03.xyz/assets/images/common/ogp_03.jpg",
    "image": "https://minerva.jnx03.xyz/assets/images/common/ogp_03.jpg",
    "sport": "Robotics",
    "memberOf": {
      "@type": "SportsOrganization",
      "name": "FIRST Tech Challenge",
      "url": "https://www.firstinspires.org/robotics/ftc"
    },
    "location": {
      "@type": "Place",
      "addressCountry": "TH"
    },
    "foundingDate": "2024",
    "keywords": "FTC, FIRST Tech Challenge, robotics, STEM, Thailand, 24809, INTO THE DEEP, GC Gen 14"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Minerva#24809 Gen3 | FTC",
    "url": "https://minerva.jnx03.xyz",
    "description": "Official website for Minerva#24809 Gen3 | FTC robotics team. Discover our journey in robotics, innovation, and technology through FIRST Tech Challenge competitions.",
    "publisher": {
      "@type": "Organization",
      "name": "Minerva#24809 Gen3",
      "logo": {
        "@type": "ImageObject",
        "url": "https://minerva.jnx03.xyz/assets/images/common/ogp_03.jpg"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://minerva.jnx03.xyz/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "en-US"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://minerva.jnx03.xyz"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+1:wght@900&family=Noto+Sans+JP:wght@400;500;700;900&family=Oxanium:wght@500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <FAQSchema />
      </head>
      <body className="preload" lang="en">
        {/* Google Tag Manager */}
        <Script
          id="gtm-1"
          src="https://www.googletagmanager.com/gtm.js?id=GTM-55K5P45"
          strategy="afterInteractive"
        />
        <Script
          id="gtm-2"
          src="https://www.googletagmanager.com/gtm.js?id=GTM-WLG34BT"
          strategy="afterInteractive"
        />
        <Script id="gtm-datalayer" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});`}
        </Script>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-55K5P45"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WLG34BT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}
      </body>
    </html>
  );
}
