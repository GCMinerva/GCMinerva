import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Robot Specifications',
  description: 'Technical specifications, design details, and capabilities of Minerva#24809 Gen3 INTO THE DEEP season robot.',
  openGraph: {
    title: 'Robot Specifications | Minerva#24809 Gen3',
    description: 'Detailed specs of our FTC robot',
    images: ['/api/og?title=Robot%20Specifications&description=INTO%20THE%20DEEP%20Robot'],
  },
};

export default function RobotPage() {
  const robotSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Minerva#24809 FTC Robot - INTO THE DEEP",
    "description": "Custom-designed FTC robot for the INTO THE DEEP season, featuring advanced programming, precision mechanics, and innovative design solutions.",
    "brand": {
      "@type": "Organization",
      "name": "Minerva#24809 Gen3"
    },
    "category": "FTC Competition Robot",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Season",
        "value": "INTO THE DEEP 2024-2025"
      },
      {
        "@type": "PropertyValue",
        "name": "Team Number",
        "value": "24809"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(robotSchema) }}
      />
      <Header />
      <main className="container mx-auto px-4 py-8" style={{ minHeight: '80vh', paddingTop: '120px' }}>
        <h1 className="text-4xl font-bold mb-8">Robot Specifications</h1>

        <div className="mb-8 p-6 bg-blue-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">INTO THE DEEP Season Robot</h2>
          <p className="text-gray-700">
            Our custom-designed robot for the 2024-2025 INTO THE DEEP season, engineered by our talented team
            of coders, builders, and CAD specialists.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <section className="border rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">🔧 Mechanical Systems</h2>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Drivetrain:</strong> Mecanum wheel drive for omnidirectional movement</li>
              <li><strong>Materials:</strong> Aluminum alloy frame with 3D printed custom parts</li>
              <li><strong>Manipulator:</strong> Custom-designed intake and scoring mechanisms</li>
              <li><strong>Weight:</strong> Optimized within FTC regulations</li>
              <li><strong>Dimensions:</strong> 18" x 18" starting configuration</li>
            </ul>
          </section>

          <section className="border rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">💻 Programming & Electronics</h2>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Control Hub:</strong> REV Robotics Control Hub</li>
              <li><strong>Programming:</strong> Java-based with advanced autonomous routines</li>
              <li><strong>Sensors:</strong> IMU, color sensors, distance sensors</li>
              <li><strong>Vision:</strong> Computer vision for object detection</li>
              <li><strong>Motors:</strong> REV HD Hex Motors with encoders</li>
            </ul>
          </section>
        </div>

        <section className="border rounded-lg p-6 shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">🎯 Key Features</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded">
              <h3 className="font-bold mb-2">Autonomous Mode</h3>
              <p className="text-sm text-gray-700">Advanced path planning and object recognition for consistent autonomous performance</p>
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <h3 className="font-bold mb-2">Precision Control</h3>
              <p className="text-sm text-gray-700">Fine-tuned driver control with multiple operation modes for different game tasks</p>
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <h3 className="font-bold mb-2">Modular Design</h3>
              <p className="text-sm text-gray-700">Quick-swap components for rapid prototyping and match adjustments</p>
            </div>
          </div>
        </section>

        <section className="border rounded-lg p-6 shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">🛠️ Design Process</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="font-bold">CAD Design</h3>
                <p className="text-gray-700">3D modeling and simulation using professional CAD software</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="font-bold">Prototyping</h3>
                <p className="text-gray-700">Rapid iteration with 3D printing and physical testing</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="font-bold">Programming</h3>
                <p className="text-gray-700">Code development, testing, and optimization</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="font-bold">Testing & Refinement</h3>
                <p className="text-gray-700">Continuous improvement through practice matches and data analysis</p>
              </div>
            </div>
          </div>
        </section>

        <section className="p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Development Updates</h2>
          <p className="text-gray-700 mb-4">
            Follow our blog for detailed updates on robot development, code improvements, and design iterations
            throughout the season.
          </p>
          <a href="/blog" className="text-blue-600 hover:underline">View Development Blog →</a>
        </section>
      </main>
      <Footer />
    </>
  );
}
