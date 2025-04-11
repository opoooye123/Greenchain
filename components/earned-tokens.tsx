import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coins, TrendingUp, Clock, ArrowDownToLine } from "lucide-react"

// Mock data - in a real app, this would come from the smart contract
const tokenData = {
  totalEarned: 134.5,
  availableToWithdraw: 92.3,
  locked: 42.2,
  tokenPrice: 0.85,
  tokenSymbol: "GCN",
  recentRewards: [
    {
      date: "April 30, 2023",
      amount: 22.5,
      project: "Kaduna Solar Hub",
      status: "Available",
    },
    {
      date: "April 30, 2023",
      amount: 45.8,
      project: "Lagos Island Mini-Grid",
      status: "Available",
    },
    {
      date: "March 31, 2023",
      amount: 24.0,
      project: "Kaduna Solar Hub",
      status: "Available",
    },
    {
      date: "March 31, 2023",
      amount: 42.2,
      project: "Lagos Island Mini-Grid",
      status: "Locked",
    },
  ],
}

export function EarnedTokens() {
  return (
    <div className="space-y-6 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-card border-muted">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <Coins className="h-5 w-5 text-solar-gold" />
              <Badge className="bg-neon-green/20 text-neon-green border-neon-green/20">Total</Badge>
            </div>
            <h3 className="text-2xl font-bold text-white">
              {tokenData.totalEarned} {tokenData.tokenSymbol}
            </h3>
            <p className="text-sm text-gray-400">≈ ${(tokenData.totalEarned * tokenData.tokenPrice).toFixed(2)} USD</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-muted">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <ArrowDownToLine className="h-5 w-5 text-neon-green" />
              <Badge className="bg-neon-green/20 text-neon-green border-neon-green/20">Available</Badge>
            </div>
            <h3 className="text-2xl font-bold text-white">
              {tokenData.availableToWithdraw} {tokenData.tokenSymbol}
            </h3>
            <p className="text-sm text-gray-400">Ready to withdraw</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-muted">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <Clock className="h-5 w-5 text-gray-400" />
              <Badge className="bg-muted text-gray-300 border-muted">Locked</Badge>
            </div>
            <h3 className="text-2xl font-bold text-white">
              {tokenData.locked} {tokenData.tokenSymbol}
            </h3>
            <p className="text-sm text-gray-400">Still in vesting period</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card border-muted">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Recent Rewards</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            {tokenData.recentRewards.map((reward, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p className="text-white font-medium">
                    {reward.amount} {tokenData.tokenSymbol}
                  </p>
                  <p className="text-sm text-gray-400">{reward.project}</p>
                </div>
                <div className="text-right">
                  <Badge
                    className={
                      reward.status === "Available"
                        ? "bg-neon-green/20 text-neon-green border-neon-green/20"
                        : "bg-muted text-gray-300 border-muted"
                    }
                  >
                    {reward.status}
                  </Badge>
                  <p className="text-xs text-gray-400 mt-1">{reward.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 bg-muted rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 text-solar-gold mr-2" />
                <span className="text-white">Current Token Price</span>
              </div>
              <span className="text-solar-gold font-bold">${tokenData.tokenPrice} USD</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
