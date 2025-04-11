import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Wallet } from "lucide-react"

export function WalletRequired() {
  return (
    <Card className="bg-card border-muted">
      <CardContent className="flex flex-col items-center justify-center py-12">
        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
          <Wallet className="h-8 w-8 text-neon-green" />
        </div>

        <h2 className="text-xl font-semibold text-white mb-2">Wallet Connection Required</h2>
        <p className="text-gray-400 text-center max-w-md mb-6">
          Please connect your Arbitrum wallet to access your investor dashboard and view your investments.
        </p>

        <Button className="bg-neon-green text-black hover:bg-neon-green/90">Connect Wallet</Button>
      </CardContent>
    </Card>
  )
}
