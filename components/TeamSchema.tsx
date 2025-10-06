'use client';

export default function TeamSchema() {
  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Minerva#24809 Gen3",
    "alternateName": "Team Minerva",
    "description": "FIRST Tech Challenge robotics team specializing in robotics engineering, programming, CAD design, and innovation. We are 12 passionate students competing in the INTO THE DEEP season.",
    "url": "https://minerva.jnx03.xyz",
    "logo": "https://minerva.jnx03.xyz/assets/images/common/ogp_03.jpg",
    "image": "https://minerva.jnx03.xyz/assets/images/common/ogp_03.jpg",
    "sameAs": [
      "https://www.youtube.com/@minerva24809",
      "https://github.com/GCMinerva",
      "https://www.instagram.com/minerva24809"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TH"
    },
    "member": {
      "@type": "OrganizationRole",
      "numberOfMembers": 12,
      "description": "12 team members across 4 specializations: Coders, Artists, CAD Specialists, and Builders"
    },
    "knowsAbout": [
      "Robotics Engineering",
      "Programming",
      "CAD Design",
      "3D Modeling",
      "Mechanical Engineering",
      "STEM Education",
      "FTC Competition",
      "Autonomous Robotics",
      "Team Collaboration"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Thailand"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
    />
  );
}
