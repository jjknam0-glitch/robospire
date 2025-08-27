"use client"

import Navigation from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, DollarSign, Users, Target } from "lucide-react"

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Support <span className="text-primary">RoboSpire</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Your donation helps us provide robotics education, mentoring, and resources to students who need it most.
              Every contribution makes a direct impact on a student's future.
            </p>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Equipment & Supplies</h3>
                  <p className="text-muted-foreground">
                    Fund LEGO robotics kits, programming tools, and competition materials
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Mentorship Programs</h3>
                  <p className="text-muted-foreground">Support our mentors and coaches who guide students to success</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Competition Support</h3>
                  <p className="text-muted-foreground">Help teams participate in FIRST LEGO League competitions</p>
                </CardContent>
              </Card>
            </div>

            {/* Donation CTA */}
            <Card className="max-w-2xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Make a Donation</CardTitle>
                <p className="text-muted-foreground">
                  Support RoboSpire's mission to bring robotics education to every student
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-4">
                  <p className="text-lg">
                    Donate securely through Venmo to help fund our programs and support students in need.
                  </p>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => window.open("https://account.venmo.com/u/jjkn00", "_blank")}
                  >
                    Donate via Venmo
                  </Button>
                  <p className="text-sm text-muted-foreground">@jjkn00 on Venmo</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Thank You Section */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Thank You for Your Support</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Every donation, no matter the size, helps us reach more students and create lasting impact in their lives.
              Together, we're building the next generation of innovators and problem-solvers.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
