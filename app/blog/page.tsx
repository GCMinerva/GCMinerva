import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Blog & News',
  description: 'Latest updates, achievements, and news from Minerva#24809 Gen3 FTC robotics team. Follow our journey in the INTO THE DEEP season.',
  openGraph: {
    title: 'Blog & News | Minerva#24809 Gen3',
    description: 'Latest updates from our FTC robotics team',
    images: ['/api/og?title=Blog%20%26%20News&description=Latest%20updates%20from%20Minerva%2324809'],
  },
};

const blogPosts = [
  {
    id: '1',
    title: '30 Hour Challenge Success',
    date: '2024-12-15',
    category: 'Achievement',
    excerpt: 'Our team successfully completed the 30 Hour robot challenge, demonstrating exceptional teamwork and engineering skills.',
    image: '/assets/images/blog/30hour-challenge.jpg',
  },
  {
    id: '2',
    title: 'INTO THE DEEP Season Kickoff',
    date: '2024-09-07',
    category: 'Competition',
    excerpt: 'Minerva#24809 Gen3 begins the 2024-2025 FTC season with INTO THE DEEP challenge. See our initial robot design concepts.',
    image: '/assets/images/blog/season-kickoff.jpg',
  },
  {
    id: '3',
    title: 'Team Formation & Specializations',
    date: '2024-08-20',
    category: 'Team',
    excerpt: 'Meet our 12 talented members across 4 specializations: Coders, Artists, CAD Specialists, and Builders.',
    image: '/assets/images/blog/team-formation.jpg',
  },
];

export default function BlogPage() {
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Minerva#24809 Gen3 Blog",
    "description": "Latest updates and news from Minerva#24809 Gen3 FTC robotics team",
    "url": "https://minerva.jnx03.xyz/blog",
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "datePublished": post.date,
      "description": post.excerpt,
      "image": `https://minerva.jnx03.xyz${post.image}`,
      "author": {
        "@type": "Organization",
        "name": "Minerva#24809 Gen3"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Minerva#24809 Gen3",
        "logo": {
          "@type": "ImageObject",
          "url": "https://minerva.jnx03.xyz/assets/images/common/ogp_03.jpg"
        }
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <Header />
      <main className="container mx-auto px-4 py-8" style={{ minHeight: '80vh', paddingTop: '120px' }}>
        <h1 className="text-4xl font-bold mb-8">Blog & News</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article key={post.id} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Image placeholder</span>
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">{post.category}</div>
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <time className="text-sm text-gray-500 block mb-4">{new Date(post.date).toLocaleDateString()}</time>
                <p className="text-gray-700">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Updates</h2>
          <p className="mb-4">Stay updated with our latest achievements, robot developments, and competition results.</p>
          <div className="flex gap-4">
            <a href="/rss.xml" className="text-blue-600 hover:underline">📡 RSS Feed</a>
            <a href="/atom.xml" className="text-blue-600 hover:underline">📰 Atom Feed</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
