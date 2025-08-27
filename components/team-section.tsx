import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
  {
    name: "Benjamin Kwon",
    role: "Co-Founder",
    bio: "High school student and robotics team member passionate about expanding STEM education access.",
  },
  {
    name: "Jayden Nam",
    role: "Co-Founder",
    bio: "High school student and robotics team member dedicated to helping other students discover the joy of robotics.",
  },
]

export function TeamSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Founded by two passionate high school students who want to share their love of robotics with other students
            in their community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg bg-primary/10 h-64 flex items-center justify-center">
                  <div className="text-6xl text-primary/30">👤</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm text-pretty">{member.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
