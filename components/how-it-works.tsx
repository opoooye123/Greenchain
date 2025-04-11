import { Card, CardContent } from "@/components/ui/card"
import { Wallet, LineChart, Lightbulb, Coins } from "lucide-react"

const steps = [
  {
    title: "Connect Your Wallet",
    description: "Link your Arbitrum wallet to start investing in clean energy projects across Nigeria.",
    icon: Wallet,
  },
  {
    title: "Choose Projects",
    description: "Browse and select from verified solar, mini-grid, and water projects based on location and impact.",
    icon: Lightbulb,
  },
  {
    title: "Track Performance",
    description: "Monitor real-time energy production, impact metrics, and your investment performance.",
    icon: LineChart,
  },
  {
    title: "Earn Rewards",
    description: "Receive GreenChain tokens as rewards based on project performance and energy output.",
    icon: Coins,
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">How GreenChain Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our blockchain-powered platform makes investing in clean energy simple, transparent, and rewarding
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="bg-muted border-muted relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-neon-green/5 rounded-bl-full"></div>

              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-neon-green/10 flex items-center justify-center mb-4">
                  <step.icon className="h-6 w-6 text-neon-green" />
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>

                <div className="absolute bottom-4 right-4 text-4xl font-bold text-muted-foreground/10">{index + 1}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
