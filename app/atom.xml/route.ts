import RSS from 'rss'
import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://gcminerva.com'

  const feed = new RSS({
    title: 'Minerva#24809 Gen3 | FTC',
    description: 'Official website for Minerva#24809 Gen3 | FTC robotics team',
    feed_url: `${baseUrl}/atom.xml`,
    site_url: baseUrl,
    language: 'en',
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Minerva#24809`,
  })

  // Add pages as feed items
  const pages = [
    {
      title: 'Home - Minerva#24809 Gen3 | FTC',
      description: 'Official website for Minerva#24809 Gen3 | FTC robotics team',
      url: baseUrl,
      date: new Date(),
    },
    {
      title: 'About - Minerva#24809 Gen3 | FTC',
      description: 'Learn more about Minerva#24809 Gen3 FTC robotics team',
      url: `${baseUrl}/about`,
      date: new Date(),
    },
    {
      title: 'Projects - Minerva#24809 Gen3 | FTC',
      description: 'Explore our robotics projects and achievements',
      url: `${baseUrl}/project`,
      date: new Date(),
    },
    {
      title: 'Social - Minerva#24809 Gen3 | FTC',
      description: 'Connect with us on social media',
      url: `${baseUrl}/social`,
      date: new Date(),
    },
    {
      title: 'Sponsors - Minerva#24809 Gen3 | FTC',
      description: 'Meet our sponsors and partners',
      url: `${baseUrl}/sponser`,
      date: new Date(),
    },
    {
      title: 'Contact - Minerva#24809 Gen3 | FTC',
      description: 'Get in touch with Minerva#24809 Gen3 team',
      url: `${baseUrl}/contact`,
      date: new Date(),
    },
  ]

  pages.forEach((page) => {
    feed.item({
      title: page.title,
      description: page.description,
      url: page.url,
      date: page.date,
    })
  })

  return new NextResponse(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    },
  })
}
