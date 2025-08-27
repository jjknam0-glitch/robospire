import Navigation from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { MissionSection } from "@/components/mission-section"
import { TeamSection } from "@/components/team-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { GallerySection } from "@/components/gallery-section"
import { ImpactSection } from "@/components/impact-section"
import { EventsSection } from "@/components/events-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <MissionSection />
      <TeamSection />
      <SponsorsSection />
      <GallerySection />
      <ImpactSection />
      <EventsSection />
      <Footer />
    </main>
  )
}
