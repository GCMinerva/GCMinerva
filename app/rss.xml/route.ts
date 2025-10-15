import RSS from 'rss'
import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://gcminerva.co'

  const feed = new RSS({
    title: 'Minerva#24809 Gen3 | FTC Robotics Team',
    description: 'Official RSS feed for Minerva#24809 Gen3 | FTC robotics team. Stay updated with our latest projects, achievements, and robotics journey.',
    feed_url: `${baseUrl}/rss.xml`,
    site_url: baseUrl,
    language: 'en',
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Minerva#24809 Gen3`,
    managingEditor: 'team@gcminerva.co (Minerva#24809 Gen3 Team)',
    webMaster: 'webmaster@gcminerva.co (Minerva#24809 Webmaster)',
    ttl: 60,
    categories: ['Robotics', 'FTC', 'FIRST Tech Challenge', 'STEM', 'Education', 'Technology'],
  })

  // Add pages as feed items
  const pages = [
    {
      title: 'Home - Minerva#24809 Gen3 | FTC',
      description: 'Official website for Minerva#24809 Gen3 | FTC robotics team. Discover our journey in robotics, innovation, and technology.',
      url: `${baseUrl}/`,
      date: new Date(),
      categories: ['Home', 'FTC', 'Robotics'],
    },
    {
      title: 'About Minerva#24809 Gen3 | FTC Team',
      description: 'Learn more about Minerva#24809 Gen3 FTC robotics team. Our team consists of 12 talented members specializing in coding, design, CAD, and building.',
      url: `${baseUrl}/about`,
      date: new Date(),
      categories: ['About', 'Team', 'FTC'],
    },
    {
      title: '30 Hour Robot Challenge - Minerva#24809 Projects',
      description: 'Explore our robotics projects and achievements, including our successful completion of the 30 Hour robot challenge.',
      url: `${baseUrl}/project`,
      date: new Date(),
      categories: ['Projects', 'Achievements', 'Robotics', 'INTO THE DEEP'],
    },
    {
      title: 'Connect with Minerva#24809 on Social Media',
      description: 'Follow our robotics journey on social media. Connect with us to stay updated on competitions, builds, and team activities.',
      url: `${baseUrl}/social`,
      date: new Date(),
      categories: ['Social', 'Community'],
    },
    {
      title: 'Minerva#24809 Team Members',
      description: 'Meet our talented team members who make Minerva#24809 Gen3 possible. Learn about our coders, artists, CAD specialists, and builders.',
      url: `${baseUrl}/member`,
      date: new Date(),
      categories: ['Team', 'Members'],
    },
    {
      title: 'Our Sponsors and Partners',
      description: 'Meet our sponsors and partners who support Minerva#24809 Gen3 robotics team. Learn how you can become a sponsor.',
      url: `${baseUrl}/sponser`,
      date: new Date(),
      categories: ['Sponsors', 'Partners'],
    },
    {
      title: 'Contact Minerva#24809 Gen3',
      description: 'Get in touch with Minerva#24809 Gen3 team. Contact us for partnerships, sponsorships, or collaboration opportunities.',
      url: `${baseUrl}/contact`,
      date: new Date(),
      categories: ['Contact', 'Support'],
    },
    {
      title: 'Minerva#24809 Community',
      description: 'Join our community and connect with other FTC enthusiasts, robotics teams, and supporters.',
      url: `${baseUrl}/community`,
      date: new Date(),
      categories: ['Community', 'FTC'],
    },
  ]

  pages.forEach((page) => {
    feed.item({
      title: page.title,
      description: page.description,
      url: page.url,
      date: page.date,
      categories: page.categories,
      guid: page.url,
    })
  })

  return new NextResponse(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate',
    },
  })
}
