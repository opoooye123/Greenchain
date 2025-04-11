import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Zap, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Background with Nigeria map overlay */}
      <div className="absolute inset-0 nigeria-map-bg opacity-10"></div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-neon-green/10 border border-neon-green/20 mb-6">
            <Zap className="h-4 w-4 text-neon-green mr-2" />
            <span className="text-sm font-medium text-neon-green">Web3 Clean Energy Platform</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 glow-text">
            Powering Nigeria <span className="text-neon-green">Sustainably</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Fund clean energy projects across Nigeria, track their impact in real-time, and earn rewards based on
            project performance. Join us in building a greener future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-neon-green text-black hover:bg-neon-green/90">
              <Link href="/projects">
                Explore Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-solar-gold text-solar-gold hover:bg-solar-gold/10"
            >
              <Link href="/dashboard">Start Investing</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
