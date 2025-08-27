import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        {/* Animated circuit pattern background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted">
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-lg animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-primary/30 rounded-full animate-bounce [animation-delay:0.5s]"></div>
          <div className="absolute bottom-32 left-32 w-20 h-20 border border-primary/25 rotate-45 animate-pulse [animation-delay:1s]"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 border border-primary/20 rounded-lg animate-bounce [animation-delay:1.5s]"></div>

          {/* Circuit lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0 50h100M50 0v100" stroke="currentColor" strokeWidth="1" className="text-primary" />
                <circle cx="50" cy="50" r="3" fill="currentColor" className="text-primary" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>

          {/* Animated dots */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-primary rounded-full animate-ping [animation-delay:0.7s]"></div>
          <div className="absolute bottom-1/4 left-3/4 w-2 h-2 bg-primary rounded-full animate-ping [animation-delay:1.2s]"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-foreground max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up text-balance">
          Inspiring the Next Generation of <span className="text-primary">Innovators</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground animate-fade-in-up [animation-delay:0.2s] text-pretty">
          RoboSpire empowers local schools through funding and mentoring, helping students build robotics teams and
          compete in FIRST LEGO League competitions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:0.4s]">
          <Link href="/join">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
              Join Our Mission
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Our Story
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
