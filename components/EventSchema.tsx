'use client';

export default function EventSchema() {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "FTC INTO THE DEEP Season 2024-2025",
    "description": "Minerva#24809 Gen3 competing in the FIRST Tech Challenge INTO THE DEEP season. Join us as we showcase robotics innovation, engineering excellence, and teamwork.",
    "startDate": "2024-09-07",
    "endDate": "2025-04-30",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Various FTC Competition Venues",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "TH"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "FIRST Tech Challenge",
      "url": "https://www.firstinspires.org/robotics/ftc"
    },
    "performer": {
      "@type": "SportsTeam",
      "name": "Minerva#24809 Gen3",
      "url": "https://minerva.jnx03.xyz"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
    />
  );
}
