import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://gcminerva.co'

  const jsonFeed = {
    version: 'https://jsonfeed.org/version/1.1',
    title: 'Minerva#24809 Gen3 | FTC Robotics Team',
    home_page_url: baseUrl,
    feed_url: `${baseUrl}/feed.json`,
    description:
      'Official JSON feed for Minerva#24809 Gen3 | FTC robotics team. Stay updated with our latest projects, achievements, and robotics journey.',
    language: 'en',
    icon: `${baseUrl}/assets/images/common/favicon.ico`,
    favicon: `${baseUrl}/assets/images/common/favicon.ico`,
    authors: [
      {
        name: 'Minerva#24809 Gen3 Team',
        url: baseUrl,
      },
    ],
    items: [
      {
        id: `${baseUrl}/`,
        url: `${baseUrl}/`,
        title: 'Home - Minerva#24809 Gen3 | FTC',
        content_html:
          'Official website for Minerva#24809 Gen3 | FTC robotics team. Discover our journey in robotics, innovation, and technology.',
        date_published: new Date().toISOString(),
        tags: ['Home', 'FTC', 'Robotics'],
      },
      {
        id: `${baseUrl}/about`,
        url: `${baseUrl}/about`,
        title: 'About Minerva#24809 Gen3 | FTC Team',
        content_html:
          'Learn more about Minerva#24809 Gen3 FTC robotics team. Our team consists of 12 talented members specializing in coding, design, CAD, and building.',
        date_published: new Date().toISOString(),
        tags: ['About', 'Team', 'FTC'],
      },
      {
        id: `${baseUrl}/project`,
        url: `${baseUrl}/project`,
        title: '30 Hour Robot Challenge - Minerva#24809 Projects',
        content_html:
          'Explore our robotics projects and achievements, including our successful completion of the 30 Hour robot challenge for the INTO THE DEEP season.',
        date_published: new Date().toISOString(),
        tags: ['Projects', 'Achievements', 'Robotics', 'INTO THE DEEP'],
      },
      {
        id: `${baseUrl}/social`,
        url: `${baseUrl}/social`,
        title: 'Connect with Minerva#24809 on Social Media',
        content_html:
          'Follow our robotics journey on social media. Connect with us to stay updated on competitions, builds, and team activities.',
        date_published: new Date().toISOString(),
        tags: ['Social', 'Community'],
      },
      {
        id: `${baseUrl}/member`,
        url: `${baseUrl}/member`,
        title: 'Minerva#24809 Team Members',
        content_html:
          'Meet our talented team members who make Minerva#24809 Gen3 possible. Learn about our coders, artists, CAD specialists, and builders.',
        date_published: new Date().toISOString(),
        tags: ['Team', 'Members'],
      },
      {
        id: `${baseUrl}/sponser`,
        url: `${baseUrl}/sponser`,
        title: 'Our Sponsors and Partners',
        content_html:
          'Meet our sponsors and partners who support Minerva#24809 Gen3 robotics team. Learn how you can become a sponsor.',
        date_published: new Date().toISOString(),
        tags: ['Sponsors', 'Partners'],
      },
      {
        id: `${baseUrl}/contact`,
        url: `${baseUrl}/contact`,
        title: 'Contact Minerva#24809 Gen3',
        content_html:
          'Get in touch with Minerva#24809 Gen3 team. Contact us for partnerships, sponsorships, or collaboration opportunities.',
        date_published: new Date().toISOString(),
        tags: ['Contact', 'Support'],
      },
      {
        id: `${baseUrl}/community`,
        url: `${baseUrl}/community`,
        title: 'Minerva#24809 Community',
        content_html:
          'Join our community and connect with other FTC enthusiasts, robotics teams, and supporters.',
        date_published: new Date().toISOString(),
        tags: ['Community', 'FTC'],
      },
    ],
  }

  return NextResponse.json(jsonFeed, {
    headers: {
      'Content-Type': 'application/feed+json; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate',
    },
  })
}
