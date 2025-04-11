import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { MapPin, Zap, Sun, ArrowUpRight } from "lucide-react"
import Link from "next/link"

// Mock data - in a real app, this would come from the smart contract
const myInvestments = [
  {
    id: "kaduna-solar",
    title: "Kaduna Solar Hub",
    location: "Kaduna",
    type: "Solar",
    investedAmount: 500,
    totalEarned: 42.5,
    nextReward: "May 15, 2023",
    fundingProgress: 70,
    icon: Sun,
  },
  {
    id: "lagos-minigrid",
    title: "Lagos Island Mini-Grid",
    location: "Lagos",
    type: "Mini-Grid",
    investedAmount: 1000,
    totalEarned: 92.0,
    nextReward: "May 22, 2023",
    fundingProgress: 60,
    icon: Zap,
  },
]

export function MyProjects() {
  return (
    <div className="space-y-6 mt-6">
      <h2 className="text-xl font-semibold text-white">My Investments</h2>

      {myInvestments.map((investment) => (
        <Card key={investment.id} className="bg-card border-muted">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <Badge className="bg-muted text-white border border-muted mb-2">{investment.type}</Badge>
                <CardTitle className="text-lg">{investment.title}</CardTitle>
                <div className="flex items-center text-gray-400 text-sm mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  {investment.location}, Nigeria
                </div>
              </div>
              <investment.icon className="h-6 w-6 text-solar-gold" />
            </div>
          </CardHeader>

          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Funding Progress</span>
                  <span className="text-neon-green font-medium">{investment.fundingProgress}%</span>
                </div>
                <Progress value={investment.fundingProgress} className="h-2 bg-muted" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-400">Your Investment</p>
                  <p className="text-white font-medium">${investment.investedAmount}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Total Earned</p>
                  <p className="text-solar-gold font-medium">{investment.totalEarned} GCN</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-400">Next Reward</p>
                  <p className="text-white">{investment.nextReward}</p>
                </div>

                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="text-neon-green hover:text-neon-green hover:bg-neon-green/10"
                >
                  <Link href={`/projects/${investment.id}`}>
                    View Details
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
