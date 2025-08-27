"use client"

import Link from "next/link"

const sponsors: { name: string; logo: string }[] = []

export function SponsorsSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Our <span className="text-primary">Partners</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            We're actively seeking partnerships with organizations who share our vision of empowering students through
            robotics education. Join us in making a difference!
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="flex items-center justify-center p-8 bg-white/5 border-2 border-dashed border-primary/30 rounded-lg animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-2"></div>
                <p className="text-sm text-muted-foreground">Partner Slot</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Interested in partnering with us?</p>
          <Link href="/join">
            <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
