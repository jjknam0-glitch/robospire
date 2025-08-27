import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Trophy, Heart } from "lucide-react"

const missions = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To inspire and empower students through hands-on robotics education, fostering creativity, problem-solving, and teamwork skills that will serve them throughout their lives.",
  },
  {
    icon: Users,
    title: "Community Building",
    description:
      "We create lasting partnerships with schools, providing ongoing support and resources to build sustainable robotics programs in every community we serve.",
  },
  {
    icon: Trophy,
    title: "Competition Excellence",
    description:
      "We prepare our teams for FIRST LEGO League competitions, focusing on building strong foundations in robotics, programming, and teamwork skills.",
  },
  {
    icon: Heart,
    title: "Inclusive Access",
    description:
      "We believe every student deserves access to STEM education, regardless of their school's resources. Our funding ensures no student is left behind.",
  },
]

export function MissionSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Empowering Tomorrow's <span className="text-primary">Innovators</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Through strategic partnerships and dedicated mentorship, we're building a foundation for the next generation
            of engineers, programmers, and creative problem-solvers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((mission, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <mission.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{mission.title}</h3>
                <p className="text-muted-foreground text-pretty">{mission.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
