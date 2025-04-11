import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Coins, TrendingUp, Clock } from "lucide-react"

// Mock data - in a real app, this would come from the smart contract
const rewardDetails = {
  rewardRate: 8.5,
  tokenSymbol: "GCN",
  distributionFrequency: "Monthly",
  lockupPeriod: "3 months",
  estimatedReturns: {
    monthly: 0.71,
    yearly: 8.5,
  },
}

export function ProjectRewards() {
  return (
    <Card className="bg-card border-muted mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Reward Structure</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <div className="flex items-center">
              <Coins className="h-5 w-5 text-solar-gold mr-2" />
              <span className="text-white">Reward Rate</span>
            </div>
            <span className="text-solar-gold font-bold">{rewardDetails.rewardRate}% APY</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <div className="flex items-center">
              <TrendingUp className="h-5 w-5 text-solar-gold mr-2" />
              <span className="text-white">Token Rewards</span>
            </div>
            <span className="text-solar-gold font-medium">{rewardDetails.tokenSymbol} Tokens</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-solar-gold mr-2" />
              <span className="text-white">Distribution</span>
            </div>
            <span className="text-gray-300">{rewardDetails.distributionFrequency}</span>
          </div>

          <div className="mt-4 p-4 bg-neon-green/10 border border-neon-green/20 rounded-lg">
            <h4 className="text-neon-green font-medium mb-2">Estimated Returns</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-400">Monthly</p>
                <p className="text-white font-medium">{rewardDetails.estimatedReturns.monthly}%</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Yearly</p>
                <p className="text-white font-medium">{rewardDetails.estimatedReturns.yearly}%</p>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              *Returns based on project performance. {rewardDetails.lockupPeriod} minimum lockup period.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
