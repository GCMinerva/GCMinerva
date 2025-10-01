import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
          {/* Team Logo */}
          <div className="mb-8 flex flex-col items-center gap-4">
            <div className="relative h-32 w-32 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-1 shadow-2xl shadow-blue-500/50">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-900 overflow-hidden">
                <Image
                  src="/images/icon.png"
                  alt="GcMinerva Team Logo"
                  width={120}
                  height={120}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <p className="text-sm uppercase tracking-[0.25em] text-blue-300/80">FIRST Tech Challenge</p>
          </div>

          <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-blue-400">GcMinerva</span>
            <span className="block text-6xl sm:text-7xl md:text-8xl text-white drop-shadow-[0_0_30px_rgba(96,165,250,0.5)]">#24809</span>
            <span className="block mt-4 text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              DECODE 2025-2026
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-center text-lg text-gray-300 sm:text-xl">
            Gen 3 Robotics Team pushing boundaries in innovation, engineering, and teamwork
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild className="rounded-full bg-blue-500 px-8 py-6 text-lg font-semibold text-white hover:bg-blue-400 shadow-lg shadow-blue-500/50">
              <a href="#team">Meet the Team</a>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-2 border-blue-400 px-8 py-6 text-lg font-semibold text-blue-400 hover:bg-blue-400/10">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
