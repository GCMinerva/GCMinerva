import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Minerva#24809 Gen3 | FTC",
  description: "Official website for Minerva#24809 Gen3 | FTC robotics team",
  metadataBase: new URL('https://gcminerva.com/'),
  openGraph: {
    type: "website",
    title: "Minerva#24809 Gen3 | FTC",
    siteName: "Minerva#24809 Gen3 | FTC",
    description: "Official website for Minerva#24809 Gen3 | FTC robotics team",
    images: [
      {
        url: "/assets/images/common/ogp_03.jpg",
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+1:wght@900&family=Noto+Sans+JP:wght@400;500;700;900&family=Oxanium:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="preload" lang="en">
        {/* Google Tag Manager */}
        <Script id="gtm-1" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-55K5P45');`}
        </Script>
        <Script id="gtm-2" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WLG34BT');`}
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
