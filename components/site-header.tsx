"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Users, Award, Mail, Home } from "lucide-react"

export function SiteHeader() {
  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "#team", label: "Team", icon: Users },
    { href: "#sponsors", label: "Sponsors", icon: Award },
    { href: "#contact", label: "Contact", icon: Mail },
  ]

  return (
    <header className="sticky top-0 z-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex h-14 items-center justify-between px-6 liquid-glass-header rounded-full">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-0.5">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-900 overflow-hidden">
                <Image
                  src="/images/icon.png"
                  alt="GcMinerva Logo"
                  width={32}
                  height={32}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-bold text-blue-400">GcMinerva</span>
              <span className="text-xs text-gray-400">#24809</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-blue-400 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button
              asChild
              className="bg-blue-500 text-white font-medium rounded-lg px-6 py-2.5
                         hover:bg-blue-400 hover:shadow-md hover:scale-[1.02]
                         transition-all shadow-blue-500/50"
            >
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-700 bg-gray-900/80 text-gray-200 hover:bg-gray-800"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="liquid-glass border-gray-800 p-0 w-64 flex flex-col"
              >
                {/* Brand Header */}
                <div className="flex items-center gap-2 px-4 py-4 border-b border-gray-800">
                  <div className="relative h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-0.5">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-900 overflow-hidden">
                      <Image
                        src="/images/icon.png"
                        alt="GcMinerva Logo"
                        width={32}
                        height={32}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="font-bold text-blue-400">GcMinerva</span>
                    <span className="text-xs text-gray-400">#24809</span>
                  </div>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-1 mt-2 text-gray-200">
                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-900 hover:text-blue-400 transition-colors"
                    >
                      <span className="inline-flex items-center justify-center w-5 h-5 text-gray-400">
                        <l.icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm">{l.label}</span>
                    </Link>
                  ))}
                </nav>

                {/* CTA Button at Bottom */}
                <div className="mt-auto border-t border-gray-800 p-4">
                  <Button
                    asChild
                    className="w-full bg-blue-500 text-white font-medium rounded-lg px-6 py-2.5
                               hover:bg-blue-400 hover:shadow-md hover:scale-[1.02]
                               transition-all shadow-blue-500/50"
                  >
                    <Link href="#contact">Contact Us</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
