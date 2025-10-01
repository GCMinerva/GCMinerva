"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - can be connected to email service
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Get in <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Have questions? Want to sponsor us? We'd love to hear from you!
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="border-blue-500/20 bg-gray-900/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-blue-500/30 bg-gray-800/50 text-white placeholder:text-gray-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-blue-500/30 bg-gray-800/50 text-white placeholder:text-gray-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-300">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="border-blue-500/30 bg-gray-800/50 text-white placeholder:text-gray-500"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border-blue-500/30 bg-gray-800/50 text-white placeholder:text-gray-500"
                    placeholder="Tell us more..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 font-semibold text-white hover:from-blue-600 hover:to-cyan-600"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-blue-500/20 bg-gray-900/50 backdrop-blur-sm">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="rounded-full bg-blue-500/20 p-3">
                  <Mail className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="mt-1 text-gray-400">team@gcminerva24809.com</p>
                  <a
                    href="mailto:team@gcminerva24809.com"
                    className="mt-2 inline-block text-sm text-blue-400 hover:text-blue-300"
                  >
                    Send us an email →
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-500/20 bg-gray-900/50 backdrop-blur-sm">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="rounded-full bg-blue-500/20 p-3">
                  <Phone className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Phone</h3>
                  <p className="mt-1 text-gray-400">+1 (555) 123-4567</p>
                  <a
                    href="tel:+15551234567"
                    className="mt-2 inline-block text-sm text-blue-400 hover:text-blue-300"
                  >
                    Give us a call →
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-500/20 bg-gray-900/50 backdrop-blur-sm">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="rounded-full bg-blue-500/20 p-3">
                  <MapPin className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Location</h3>
                  <p className="mt-1 text-gray-400">
                    Your City, State
                    <br />
                    United States
                  </p>
                  <p className="mt-2 text-sm text-blue-400">
                    Come visit us at competitions!
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-500/20 bg-gradient-to-br from-amber-900/20 to-orange-900/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-white">Competition Season</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Currently competing in the 2025-2026 DECODE season. Follow our journey and come support us at events!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
