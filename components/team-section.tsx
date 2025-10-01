import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TeamMember {
  name: string
  role: string
  image?: string
  bio?: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Team Captain",
    role: "Leadership & Strategy",
    bio: "Leading the team with vision and dedication",
  },
  {
    name: "Lead Engineer",
    role: "Robot Design & Build",
    bio: "Designing innovative solutions for competition challenges",
  },
  {
    name: "Programming Lead",
    role: "Software & Autonomous",
    bio: "Writing code that brings our robot to life",
  },
  {
    name: "Drive Team",
    role: "Competition Operations",
    bio: "Operating the robot with precision and skill",
  },
  {
    name: "Outreach Lead",
    role: "Community & Marketing",
    bio: "Connecting with our community and sharing STEM",
  },
  {
    name: "Design Lead",
    role: "CAD & Documentation",
    bio: "Creating detailed designs and engineering notebooks",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Meet Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            The talented individuals behind GcMinerva #24809
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group border-blue-500/20 bg-gray-900/50 backdrop-blur-sm transition-all hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20"
            >
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Avatar className="mb-4 h-24 w-24 border-2 border-blue-500/50 transition-transform group-hover:scale-110">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-cyan-500 text-xl font-bold text-white">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-blue-400">{member.role}</p>
                {member.bio && (
                  <p className="mt-3 text-sm text-gray-400">{member.bio}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Want to join our team?{" "}
            <a href="#contact" className="font-semibold text-blue-400 hover:text-blue-300">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
