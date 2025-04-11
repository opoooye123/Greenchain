"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { WalletConnectModal } from "@/components/wallet-connect-modal"

export function FundProjectButton() {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false)
  const [amount, setAmount] = useState("100")

  // In a real app, we would check if the user is connected
  const isConnected = false // This would be from a wallet connection hook

  const handleFund = () => {
    if (!isConnected) {
      setIsWalletModalOpen(true)
      return
    }

    // Handle funding logic
    // This would call a smart contract function
    console.log(`Funding project with ${amount} USDC`)

    // Example smart contract interaction:
    // const tx = await projectContract.fundProject(projectId, ethers.utils.parseUnits(amount, 6))
    // await tx.wait()
  }

  return (
    <>
      <Card className="bg-card border-muted">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Fund This Project</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Investment Amount (USDC)</label>
              <div className="relative">
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-muted border-muted pr-16"
                  min="50"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">USDC</div>
              </div>
              <p className="text-xs text-gray-400 mt-1">Minimum investment: 50 USDC</p>
            </div>

            <div className="p-3 bg-muted rounded-lg">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-400">Estimated Monthly Rewards</span>
                <span className="text-solar-gold font-medium">
                  {(Number.parseFloat(amount) * 0.0071).toFixed(2)} GCN
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-400">Estimated Yearly Rewards</span>
                <span className="text-solar-gold font-medium">
                  {(Number.parseFloat(amount) * 0.085).toFixed(2)} GCN
                </span>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <Button className="w-full bg-neon-green text-black hover:bg-neon-green/90" onClick={handleFund}>
            {isConnected ? "Fund Project" : "Connect Wallet to Fund"}
          </Button>
        </CardFooter>
      </Card>

      <WalletConnectModal isOpen={isWalletModalOpen} onClose={() => setIsWalletModalOpen(false)} />
    </>
  )
}
