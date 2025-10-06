import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Minerva#24809 Gen3 | FTC Robotics Team',
    short_name: 'Minerva#24809',
    description: 'Official website for Minerva#24809 Gen3 | FTC robotics team. Discover our journey in robotics, innovation, and technology.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#003350',
    icons: [
      {
        src: '/assets/images/common/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/assets/images/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/assets/images/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
    categories: ['education', 'technology', 'robotics'],
    lang: 'en',
    orientation: 'portrait-primary',
  }
}
