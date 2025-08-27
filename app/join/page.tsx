"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, GraduationCap, Building, Heart, Mail, Phone, MapPin } from "lucide-react"
import Navigation from "@/components/navigation"

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    organization: "",
    experience: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const response = await fetch("/api/submit-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitMessage("Thank you! Your application has been submitted successfully. We'll get back to you soon.")
        setFormData({
          name: "",
          email: "",
          phone: "",
          role: "",
          organization: "",
          experience: "",
          message: "",
        })
      } else {
        setSubmitMessage("Sorry, there was an error submitting your application. Please try again.")
      }
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      setSubmitMessage("Sorry, there was an error submitting your application. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Join Our Mission</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty">
            Be part of the movement to inspire the next generation of innovators. There are many ways to get involved
            with RoboSpire.
          </p>
        </div>

        {/* Ways to Get Involved */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-colors">
            <CardHeader className="text-center">
              <Users className="w-12 h-12 text-sky-400 mx-auto mb-4" />
              <CardTitle className="text-white">Volunteer Mentor</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm text-center">
                Guide students through their robotics journey with hands-on mentorship and technical expertise.
              </p>
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                <Badge variant="outline" className="border-sky-500/30 text-sky-300 text-xs">
                  Weekly Commitment
                </Badge>
                <Badge variant="outline" className="border-sky-500/30 text-sky-300 text-xs">
                  STEM Background
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-colors">
            <CardHeader className="text-center">
              <GraduationCap className="w-12 h-12 text-sky-400 mx-auto mb-4" />
              <CardTitle className="text-white">Educator Partner</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm text-center">
                Bring robotics programs to your school and integrate STEM learning into your curriculum.
              </p>
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                <Badge variant="outline" className="border-sky-500/30 text-sky-300 text-xs">
                  School Programs
                </Badge>
                <Badge variant="outline" className="border-sky-500/30 text-sky-300 text-xs">
                  Curriculum Support
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-colors">
            <CardHeader className="text-center">
              <Building className="w-12 h-12 text-sky-400 mx-auto mb-4" />
              <CardTitle className="text-white">Corporate Sponsor</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm text-center">
                Support our mission through funding, equipment donations, or employee volunteer programs.
              </p>
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                <Badge variant="outline" className="border-sky-500/30 text-sky-300 text-xs">
                  Tax Benefits
                </Badge>
                <Badge variant="outline" className="border-sky-500/30 text-sky-300 text-xs">
                  Brand Visibility
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-colors">
            <CardHeader className="text-center">
              <Heart className="w-12 h-12 text-sky-400 mx-auto mb-4" />
              <CardTitle className="text-white">Community Supporter</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm text-center">
                Help with events, fundraising, outreach, and spreading awareness about our programs.
              </p>
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                <Badge variant="outline" className="border-sky-500/30 text-sky-300 text-xs">
                  Flexible Time
                </Badge>
                <Badge variant="outline" className="border-sky-500/30 text-sky-300 text-xs">
                  Event Support
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gray-900/30 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white text-2xl text-center">Get Involved Today</CardTitle>
              <CardDescription className="text-gray-300 text-center">
                Fill out the form below and we'll get in touch to discuss how you can contribute to our mission.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitMessage && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    submitMessage.includes("successfully")
                      ? "bg-green-900/30 border border-green-700 text-green-300"
                      : "bg-red-900/30 border border-red-700 text-red-300"
                  }`}
                >
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="bg-gray-800 border-gray-700 text-white"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-white">
                      How would you like to help?
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("role", value)}>
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="mentor">Volunteer Mentor</SelectItem>
                        <SelectItem value="educator">Educator Partner</SelectItem>
                        <SelectItem value="sponsor">Corporate Sponsor</SelectItem>
                        <SelectItem value="supporter">Community Supporter</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization" className="text-white">
                    Organization/School (if applicable)
                  </Label>
                  <Input
                    id="organization"
                    value={formData.organization}
                    onChange={(e) => handleInputChange("organization", e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white"
                    placeholder="Your organization or school name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience" className="text-white">
                    Relevant Experience
                  </Label>
                  <Textarea
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => handleInputChange("experience", e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white min-h-[100px]"
                    placeholder="Tell us about your background in STEM, education, or community involvement..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Additional Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white min-h-[100px]"
                    placeholder="Any additional information or questions you'd like to share..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Other Ways to Reach Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-sky-400 mb-4" />
              <h4 className="text-white font-semibold mb-2">Email</h4>
              <p className="text-gray-300">officialrobospire@gmail.com</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-sky-400 mb-4" />
              <h4 className="text-white font-semibold mb-2">Phone</h4>
              <p className="text-gray-300">5715677755</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-sky-400 mb-4" />
              <h4 className="text-white font-semibold mb-2">Location</h4>
              <p className="text-gray-300">Fairfax, VA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
