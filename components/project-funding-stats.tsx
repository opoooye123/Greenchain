import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Coins, Users, Clock } from "lucide-react"

// Mock data - in a real app, this would come from the smart contract
const fundingStats = {
  fundingGoal: 50000,
  funded: 35000,
  investors: 42,
  daysLeft: 18,
  minInvestment: 50,
}

export function ProjectFundingStats() {
  const percentFunded = (fundingStats.funded / fundingStats.fundingGoal) * 100

  return (
    <Card className="bg-card border-muted mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Funding Status</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-400">Progress</span>
              <span className="text-neon-green font-medium">{Math.round(percentFunded)}%</span>
            </div>
            <Progress value={percentFunded} className="h-3 bg-muted" />

            <div className="flex justify-between mt-2">
              <div>
                <p className="text-sm text-gray-400">Raised</p>
                <p className="text-white font-medium">${fundingStats.funded.toLocaleString()}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400">Goal</p>
                <p className="text-white font-medium">${fundingStats.fundingGoal.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
              <Users className="h-5 w-5 text-solar-gold mb-1" />
              <span className="text-white font-medium">{fundingStats.investors}</span>
              <span className="text-xs text-gray-400">Investors</span>
            </div>

            <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
              <Clock className="h-5 w-5 text-solar-gold mb-1" />
              <span className="text-white font-medium">{fundingStats.daysLeft}</span>
              <span className="text-xs text-gray-400">Days Left</span>
            </div>

            <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
              <Coins className="h-5 w-5 text-solar-gold mb-1" />
              <span className="text-white font-medium">${fundingStats.minInvestment}</span>
              <span className="text-xs text-gray-400">Minimum</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
