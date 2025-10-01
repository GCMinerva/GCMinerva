import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface Sponsor {
  name: string
  tier: "Platinum" | "Gold" | "Silver" | "Bronze"
  logo?: string
  website?: string
  description?: string
}

const sponsors: Sponsor[] = [
  {
    name: "Platinum Sponsor",
    tier: "Platinum",
    description: "Our premier partner supporting innovation in robotics",
  },
  {
    name: "Gold Sponsor 1",
    tier: "Gold",
    description: "Supporting STEM education and competition excellence",
  },
  {
    name: "Gold Sponsor 2",
    tier: "Gold",
    description: "Investing in the future of engineering",
  },
  {
    name: "Silver Sponsor 1",
    tier: "Silver",
    description: "Powering our team's success",
  },
  {
    name: "Silver Sponsor 2",
    tier: "Silver",
    description: "Building tomorrow's innovators",
  },
  {
    name: "Bronze Sponsor 1",
    tier: "Bronze",
    description: "Community partners in robotics",
  },
]

const tierColors = {
  Platinum: "from-slate-300 to-slate-500",
  Gold: "from-yellow-400 to-amber-600",
  Silver: "from-gray-300 to-gray-500",
  Bronze: "from-amber-600 to-amber-800",
}

const tierBorders = {
  Platinum: "border-slate-400/50",
  Gold: "border-yellow-500/50",
  Silver: "border-gray-400/50",
  Bronze: "border-amber-700/50",
}

export function SponsorsSection() {
  return (
    <section id="sponsors" className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Our <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">Sponsors</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Thank you to our amazing sponsors who make our journey possible
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sponsors.map((sponsor, index) => (
            <Card
              key={index}
              className={`group border ${tierBorders[sponsor.tier]} bg-gray-900/50 backdrop-blur-sm transition-all hover:shadow-xl hover:scale-105`}
            >
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className={`mb-4 flex h-32 w-32 items-center justify-center rounded-lg bg-gradient-to-br ${tierColors[sponsor.tier]} p-0.5 shadow-lg`}>
                  <div className="flex h-full w-full items-center justify-center rounded-lg bg-gray-900">
                    {sponsor.logo ? (
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={100}
                        height={100}
                        className="object-contain"
                      />
                    ) : (
                      <span className="text-3xl font-bold text-white">
                        {sponsor.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    )}
                  </div>
                </div>

                <div className={`mb-2 rounded-full bg-gradient-to-r ${tierColors[sponsor.tier]} px-3 py-1 text-xs font-bold text-gray-900`}>
                  {sponsor.tier}
                </div>

                <h3 className="text-xl font-bold text-white">{sponsor.name}</h3>

                {sponsor.description && (
                  <p className="mt-3 text-sm text-gray-400">{sponsor.description}</p>
                )}

                {sponsor.website && (
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-sm font-medium text-blue-400 hover:text-blue-300"
                  >
                    Visit Website →
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-8 text-center backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Become a Sponsor
          </h3>
          <p className="mt-4 text-gray-300">
            Support the next generation of engineers and innovators. Help us compete, learn, and grow.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:shadow-blue-500/50"
          >
            Sponsor Our Team
          </a>
        </div>
      </div>
    </section>
  )
}
