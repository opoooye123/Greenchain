import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Home, Users, Leaf } from "lucide-react"

// Mock data - in a real app, this would come from the smart contract
const impactMetrics = {
  energyOutput: {
    current: 45000,
    projected: 120000,
    unit: "kWh",
  },
  homesPowered: {
    current: 180,
    projected: 500,
    unit: "homes",
  },
  co2Reduction: {
    current: 22,
    projected: 60,
    unit: "tons",
  },
  jobsCreated: {
    current: 12,
    projected: 25,
    unit: "jobs",
  },
}

export function ProjectImpact() {
  return (
    <Card className="bg-card border-muted mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Impact Metrics</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-center mb-2">
              <Zap className="h-5 w-5 text-neon-green mr-2" />
              <h3 className="text-white font-medium">Energy Output</h3>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-2xl font-bold text-white">{impactMetrics.energyOutput.current.toLocaleString()}</p>
                <p className="text-xs text-gray-400">Current {impactMetrics.energyOutput.unit}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400">Projected</p>
                <p className="text-sm text-gray-300">
                  {impactMetrics.energyOutput.projected.toLocaleString()} {impactMetrics.energyOutput.unit}
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-center mb-2">
              <Home className="h-5 w-5 text-solar-gold mr-2" />
              <h3 className="text-white font-medium">Homes Powered</h3>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-2xl font-bold text-white">{impactMetrics.homesPowered.current.toLocaleString()}</p>
                <p className="text-xs text-gray-400">Current {impactMetrics.homesPowered.unit}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400">Projected</p>
                <p className="text-sm text-gray-300">
                  {impactMetrics.homesPowered.projected.toLocaleString()} {impactMetrics.homesPowered.unit}
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-center mb-2">
              <Leaf className="h-5 w-5 text-green-400 mr-2" />
              <h3 className="text-white font-medium">CO₂ Reduction</h3>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-2xl font-bold text-white">{impactMetrics.co2Reduction.current.toLocaleString()}</p>
                <p className="text-xs text-gray-400">Current {impactMetrics.co2Reduction.unit}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400">Projected</p>
                <p className="text-sm text-gray-300">
                  {impactMetrics.co2Reduction.projected.toLocaleString()} {impactMetrics.co2Reduction.unit}
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-center mb-2">
              <Users className="h-5 w-5 text-blue-400 mr-2" />
              <h3 className="text-white font-medium">Jobs Created</h3>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-2xl font-bold text-white">{impactMetrics.jobsCreated.current.toLocaleString()}</p>
                <p className="text-xs text-gray-400">Current {impactMetrics.jobsCreated.unit}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400">Projected</p>
                <p className="text-sm text-gray-300">
                  {impactMetrics.jobsCreated.projected.toLocaleString()} {impactMetrics.jobsCreated.unit}
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
