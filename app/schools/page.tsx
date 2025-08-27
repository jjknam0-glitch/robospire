"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Trophy, Calendar } from "lucide-react"
import Navigation from "@/components/navigation"

interface School {
  id: number
  name: string
  location: string
  studentsCount: number
  teamsCount: number
  achievements: string[]
  joinedDate: string
  status: "active" | "inactive"
}

const mockSchools: School[] = []

export default function SchoolsPage() {
  const [schools, setSchools] = useState<School[]>(mockSchools)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Our Partner Schools</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty">
            We're excited to partner with schools to build the next generation of robotics innovators. Check back soon
            as we add our partner schools!
          </p>
        </div>

        {schools.length === 0 ? (
          <div className="text-center py-16">
            <Card className="bg-gray-900/30 border-gray-800 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Coming Soon!</CardTitle>
                <CardDescription className="text-gray-300">
                  We're currently building partnerships with local schools. Check back soon to see our growing network
                  of partner schools.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {schools.map((school) => (
              <div key={school.id} className="bg-gray-900/30 border-gray-800 rounded-lg overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">{school.name}</CardTitle>
                  <CardDescription className="text-gray-300">{school.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4" />
                      <span>{school.studentsCount} Students</span>
                    </div>
                    <div className="flex items-center">
                      <Trophy className="mr-2 h-4 w-4" />
                      <span>{school.teamsCount} Teams</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>Joined: {school.joinedDate}</span>
                    </div>
                    <div className="flex items-center">
                      <Badge className="bg-green-500 text-white" variant="outline">
                        {school.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {school.achievements.map((achievement, index) => (
                      <Badge key={index} className="bg-blue-500 text-white" variant="outline">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </div>
            ))}
          </div>
        )}

        <div className="text-center">
          <Card className="bg-gray-900/30 border-gray-800 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Want to Partner With Us?</CardTitle>
              <CardDescription className="text-gray-300">
                Is your school interested in starting a robotics program? We'd love to help!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="bg-sky-500 hover:bg-sky-600 text-white">Contact Us to Get Started</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
