"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Heart, Lightbulb, Users, Award } from "lucide-react"
import Navigation from "@/components/navigation"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">About RoboSpire</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty">
            Empowering the next generation through robotics education, mentorship, and hands-on STEM learning
            experiences.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <Target className="w-12 h-12 text-sky-400 mb-4" />
              <CardTitle className="text-white text-xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                To inspire and support students in STEM education by providing access to robotics programs, mentorship,
                and resources that foster innovation and critical thinking.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <Lightbulb className="w-12 h-12 text-sky-400 mb-4" />
              <CardTitle className="text-white text-xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                A world where every student has the opportunity to explore, create, and excel in science, technology,
                engineering, and mathematics through engaging robotics experiences.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <Heart className="w-12 h-12 text-sky-400 mb-4" />
              <CardTitle className="text-white text-xl">Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-300 space-y-2">
                <li>• Innovation & Creativity</li>
                <li>• Collaboration & Teamwork</li>
                <li>• Inclusivity & Accessibility</li>
                <li>• Excellence & Growth</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* What We Do */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gray-900/30 border-gray-800">
              <CardHeader>
                <Users className="w-8 h-8 text-sky-400 mb-2" />
                <CardTitle className="text-white">Team Formation & Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  We help schools establish and maintain competitive robotics teams, providing guidance on team
                  structure, recruitment, and program sustainability.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-sky-500/30 text-sky-300">
                    FLL Teams
                  </Badge>
                  <Badge variant="outline" className="border-sky-500/30 text-sky-300">
                    Mentorship
                  </Badge>
                  <Badge variant="outline" className="border-sky-500/30 text-sky-300">
                    Training
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/30 border-gray-800">
              <CardHeader>
                <Award className="w-8 h-8 text-sky-400 mb-2" />
                <CardTitle className="text-white">Funding & Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  We secure funding and provide essential resources including robotics kits, competition materials, and
                  educational tools to ensure every team can participate.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-sky-500/30 text-sky-300">
                    Equipment
                  </Badge>
                  <Badge variant="outline" className="border-sky-500/30 text-sky-300">
                    Grants
                  </Badge>
                  <Badge variant="outline" className="border-sky-500/30 text-sky-300">
                    Sponsorship
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <Card className="bg-gray-900/30 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white text-2xl text-center">Our Story</CardTitle>
            </CardHeader>
            <CardContent className="max-w-4xl mx-auto">
              <div className="space-y-6 text-gray-300">
                <p>
                  We founded RoboSpire in 2025 as two passionate high school students who are part of our own robotics
                  team. Having experienced firsthand the transformative power of robotics education, we recognized that
                  many schools lack access to quality STEM programs and decided to bridge that gap.
                </p>
                <p>
                  As current robotics team members, we understand the challenges students face when starting their
                  robotics journey. We founded RoboSpire to provide the funding, mentorship, and resources that can make
                  the difference between a struggling team and a thriving one.
                </p>
                <p>
                  We're just getting started on our mission to help schools create successful robotics teams and give
                  more students the opportunity to discover their passion for STEM through hands-on learning and
                  competition.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Impact Stats */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-12 text-white">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-sky-400 mb-2">--</div>
              <div className="text-gray-300">Partner Schools</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sky-400 mb-2">--</div>
              <div className="text-gray-300">Students Reached</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sky-400 mb-2">--</div>
              <div className="text-gray-300">Teams Formed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sky-400 mb-2">--</div>
              <div className="text-gray-300">Funding Secured</div>
            </div>
          </div>
          <p className="text-gray-400 mt-8">We're just getting started! Check back as we begin tracking our impact.</p>
        </div>
      </div>
    </div>
  )
}
