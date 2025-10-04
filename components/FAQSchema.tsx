'use client';

export default function FAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Minerva#24809 Gen3?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Minerva#24809 Gen3 is a FIRST Tech Challenge (FTC) robotics team from Thailand, competing in the INTO THE DEEP season. Our team specializes in robotics engineering, programming, CAD design, and mechanical assembly with 12 talented members across 4 specializations."
        }
      },
      {
        "@type": "Question",
        "name": "What is FIRST Tech Challenge (FTC)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FIRST Tech Challenge (FTC) is a global robotics competition for students aged 12-18. Teams design, build, and program robots to compete in alliance-based matches, developing STEM skills, teamwork, and innovation."
        }
      },
      {
        "@type": "Question",
        "name": "What specializations does the team have?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our team consists of 3 Coders (programming and software development), 3 Artists (design and visual communication), 3 CAD Specialists (3D modeling and engineering design), and 3 Builders (construction and mechanical assembly)."
        }
      },
      {
        "@type": "Question",
        "name": "How can I sponsor or support Minerva#24809?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can support our team by visiting our Sponsors page on our website or contacting us through our Contact page. We welcome partnerships, sponsorships, and collaboration opportunities."
        }
      },
      {
        "@type": "Question",
        "name": "What is the INTO THE DEEP challenge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "INTO THE DEEP is the 2024-2025 FIRST Tech Challenge game theme. Teams design robots to complete specific tasks and score points in alliance-based competitions."
        }
      },
      {
        "@type": "Question",
        "name": "What did Minerva#24809 achieve in the 30 Hour Challenge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Minerva#24809 Gen3 successfully completed the 30 Hour robot challenge, demonstrating our team's ability to design, build, and program a functional robot within a strict time constraint."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
