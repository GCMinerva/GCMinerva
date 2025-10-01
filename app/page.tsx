import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { TeamSection } from "@/components/team-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { ContactSection } from "@/components/contact-section"
import { FtcFooter } from "@/components/ftc-footer"
import Script from "next/script"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
  // Structured data for FTC team
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "SportsTeam",
    name: "GcMinerva #24809",
    sport: "Robotics",
    description: "FIRST Tech Challenge Gen 3 robotics team competing in the 2025-2026 DECODE season",
    memberOf: {
      "@type": "SportsOrganization",
      name: "FIRST Tech Challenge",
      url: "https://www.firstinspires.org/robotics/ftc"
    },
    sameAs: [
      "https://twitter.com/gcminerva24809",
      "https://instagram.com/gcminerva24809",
      "https://youtube.com/@gcminerva24809",
      "https://github.com/gcminerva24809",
    ],
  }

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <Hero />
        <TeamSection />
        <SponsorsSection />
        <ContactSection />
        <FtcFooter />
      </main>

      {/* JSON-LD structured data */}
      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  )
}
