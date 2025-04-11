import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { MapPin, Zap, ArrowRight, Droplets, Sun } from "lucide-react"

// Mock data - in a real app, this would come from the smart contract
const featuredProjects = [
  {
    id: "kaduna-solar",
    title: "Kaduna Solar Hub",
    location: "Kaduna",
    type: "Solar",
    fundingGoal: 50000,
    funded: 35000,
    rewardRate: 8.5,
    icon: Sun,
  },
  {
    id: "lagos-minigrid",
    title: "Lagos Island Mini-Grid",
    location: "Lagos",
    type: "Mini-Grid",
    fundingGoal: 75000,
    funded: 45000,
    rewardRate: 9.2,
    icon: Zap,
  },
  {
    id: "rivers-borehole",
    title: "Rivers Clean Water",
    location: "Rivers",
    type: "Borehole",
    fundingGoal: 25000,
    funded: 20000,
    rewardRate: 7.8,
    icon: Droplets,
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Featured Projects</h2>
            <p className="text-gray-400">Discover high-impact clean energy initiatives across Nigeria</p>
          </div>

          <Button
            asChild
            variant="ghost"
            className="text-neon-green hover:text-neon-green hover:bg-neon-green/10 mt-4 md:mt-0"
          >
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              className="bg-card border-muted hover:border-neon-green/50 transition-colors overflow-hidden"
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Badge className="bg-muted text-white border border-muted">{project.type}</Badge>
                  <project.icon className="h-6 w-6 text-solar-gold" />
                </div>
                <CardTitle className="text-xl mt-2">{project.title}</CardTitle>
                <div className="flex items-center text-gray-400 text-sm mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  {project.location}, Nigeria
                </div>
              </CardHeader>

              <CardContent className="pb-4">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Funding Progress</span>
                      <span className="text-neon-green font-medium">
                        {Math.round((project.funded / project.fundingGoal) * 100)}%
                      </span>
                    </div>
                    <Progress value={(project.funded / project.fundingGoal) * 100} className="h-2 bg-muted" />
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-400">Funding Goal</p>
                      <p className="text-white font-medium">${project.fundingGoal.toLocaleString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">Reward Rate</p>
                      <p className="text-solar-gold font-medium">{project.rewardRate}% APY</p>
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button asChild className="w-full bg-neon-green text-black hover:bg-neon-green/90">
                  <Link href={`/projects/${project.id}`}>Fund Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
