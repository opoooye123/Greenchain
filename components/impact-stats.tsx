import { Card, CardContent } from "@/components/ui/card"
import { Zap, Home, Users, Leaf } from "lucide-react"

// Mock data - in a real app, this would come from the smart contract
const stats = [
  {
    title: "Total Energy Generated",
    value: "1.2M",
    unit: "kWh",
    icon: Zap,
    color: "text-neon-green",
  },
  {
    title: "Homes Powered",
    value: "5,400+",
    unit: "households",
    icon: Home,
    color: "text-solar-gold",
  },
  {
    title: "Investors",
    value: "850+",
    unit: "participants",
    icon: Users,
    color: "text-blue-400",
  },
  {
    title: "CO₂ Reduction",
    value: "720",
    unit: "tons",
    icon: Leaf,
    color: "text-green-400",
  },
]

export function ImpactStats() {
  return (
    <section className="py-16 bg-muted relative overflow-hidden">
      {/* Background with Nigeria map overlay */}
      <div className="absolute inset-0 nigeria-map-bg opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Impact in Nigeria</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-time metrics showing how GreenChain projects are transforming communities across Nigeria
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card border-muted">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-${stat.color.split("-")[1]}-500/10 flex items-center justify-center`}
                  >
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className={`text-4xl font-bold ${stat.color}`}>{stat.value}</div>
                </div>

                <h3 className="text-lg font-medium text-white">{stat.title}</h3>
                <p className="text-gray-400 text-sm">{stat.unit}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
