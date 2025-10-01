"use client"

import Image from "next/image"
import { Twitter, Instagram, Youtube, Github, Mail } from "lucide-react"

export function FtcFooter() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-0.5">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-900 overflow-hidden">
                  <Image
                    src="/images/icon.png"
                    alt="GcMinerva Logo"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-400">GcMinerva</h3>
                <p className="text-sm text-gray-400">#24809</p>
              </div>
            </div>
            <p className="max-w-sm text-sm text-gray-400">
              FIRST Tech Challenge Gen 3 Team competing in the 2025-2026 DECODE season.
              Building robots, inspiring innovation, and making an impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">Quick Links</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#team" className="hover:text-blue-400 transition-colors">
                  Meet the Team
                </a>
              </li>
              <li>
                <a href="#sponsors" className="hover:text-blue-400 transition-colors">
                  Our Sponsors
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="https://www.firstinspires.org/robotics/ftc" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  About FIRST Tech Challenge
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h5 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">Connect With Us</h5>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-3">
                <Twitter className="h-5 w-5 text-blue-400" />
                <a
                  href="https://twitter.com/gcminerva24809"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                  aria-label="Follow us on Twitter"
                >
                  Twitter/X
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="h-5 w-5 text-pink-400" />
                <a
                  href="https://instagram.com/gcminerva24809"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  Instagram
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Youtube className="h-5 w-5 text-red-400" />
                <a
                  href="https://youtube.com/@gcminerva24809"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                  aria-label="Subscribe on YouTube"
                >
                  YouTube
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Github className="h-5 w-5 text-gray-400" />
                <a
                  href="https://github.com/gcminerva24809"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                  aria-label="View our code on GitHub"
                >
                  GitHub
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <a
                  href="mailto:team@gcminerva24809.com"
                  className="hover:text-blue-400 transition-colors"
                  aria-label="Email us"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-gray-500 sm:flex-row">
          <p>© 2025 GcMinerva #24809 • FIRST Tech Challenge Team</p>
          <div className="flex items-center gap-4">
            <span className="rounded-full bg-blue-500/20 px-3 py-1 text-blue-400">
              DECODE Season 2025-2026
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
