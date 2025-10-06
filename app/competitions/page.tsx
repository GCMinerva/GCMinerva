import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Competition Results',
  description: 'Minerva#24809 Gen3 FTC competition results, achievements, and performance history in the INTO THE DEEP season.',
  openGraph: {
    title: 'Competition Results | Minerva#24809 Gen3',
    description: 'Our FTC competition achievements and results',
    images: ['/api/og?title=Competition%20Results&description=Our%20FTC%20Achievements'],
  },
};

const competitions = [
  {
    id: '1',
    name: '30 Hour Challenge',
    date: '2024-12-15',
    location: 'Bangkok, Thailand',
    result: 'Completed Successfully',
    awards: ['Challenge Completion'],
    description: 'Successfully built and programmed a functional robot within 30 hours.',
  },
  {
    id: '2',
    name: 'GC Gen 14 - DECODE Challenge',
    date: '2024-10-20',
    location: 'Bangkok, Thailand',
    result: 'Participated',
    awards: [],
    description: 'Competed in the DECODE challenge, gaining valuable experience.',
  },
];

export default function CompetitionsPage() {
  const competitionSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Minerva#24809 Gen3 Competition History",
    "description": "FTC competition results and achievements",
    "itemListElement": competitions.map((comp, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SportsEvent",
        "name": comp.name,
        "startDate": comp.date,
        "location": {
          "@type": "Place",
          "name": comp.location
        },
        "description": comp.description,
        "competitor": {
          "@type": "SportsTeam",
          "name": "Minerva#24809 Gen3"
        }
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(competitionSchema) }}
      />
      <Header />
      <main className="container mx-auto px-4 py-8" style={{ minHeight: '80vh', paddingTop: '120px' }}>
        <h1 className="text-4xl font-bold mb-8">Competition Results</h1>

        <div className="mb-8 p-6 bg-blue-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">2024-2025 INTO THE DEEP Season</h2>
          <p className="text-gray-700">
            Follow Minerva#24809 Gen3's journey through the INTO THE DEEP season. We compete in various FTC challenges,
            showcasing our robotics engineering, programming, and teamwork skills.
          </p>
        </div>

        <div className="space-y-6">
          {competitions.map((comp) => (
            <article key={comp.id} className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{comp.name}</h2>
                  <div className="text-sm text-gray-600">
                    <span>{new Date(comp.date).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span>{comp.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full font-semibold">
                    {comp.result}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{comp.description}</p>

              {comp.awards.length > 0 && (
                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Awards:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {comp.awards.map((award, idx) => (
                      <li key={idx} className="text-gray-700">{award}</li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>

        <section className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Upcoming Competitions</h2>
          <p className="text-gray-700 mb-4">
            Stay tuned for more competition updates throughout the INTO THE DEEP season.
            Follow our social media for live updates during events.
          </p>
          <div className="flex gap-4">
            <a href="/social" className="text-blue-600 hover:underline">Follow Us on Social Media →</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
