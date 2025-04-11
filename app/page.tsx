import { HeroSection } from "@/components/hero-section"
import { Navbar } from "@/components/navbar"
import { FeaturedProjects } from "@/components/featured-projects"
import { HowItWorks } from "@/components/how-it-works"
import { ImpactStats } from "@/components/impact-stats"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturedProjects />
      <HowItWorks />
      <ImpactStats />
      <Footer />
    </main>
  )
}
