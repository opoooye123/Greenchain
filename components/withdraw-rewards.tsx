"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowDownToLine, Wallet, AlertCircle } from "lucide-react"

// Mock data - in a real app, this would come from the smart contract
const withdrawData = {
  availableToWithdraw: 92.3,
  tokenSymbol: "GCN",
  tokenPrice: 0.85,
  walletAddress: "0x1234...5678",
  networks: ["Arbitrum", "Ethereum", "Polygon"],
}

export function WithdrawRewards() {
  const [amount, setAmount] = useState(withdrawData.availableToWithdraw.toString())
  const [network, setNetwork] = useState("Arbitrum")

  const handleWithdraw = () => {
    // This would handle withdrawal logic
    console.log(`Withdrawing ${amount} ${withdrawData.tokenSymbol} to ${withdrawData.walletAddress} on ${network}`)

    // Example smart contract interaction:
    // const tx = await rewardsContract.withdraw(ethers.utils.parseUnits(amount, 18))
    // await tx.wait()
  }

  return (
    <div className="space-y-6 mt-6">
      <Card className="bg-card border-muted">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Withdraw Rewards</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-6">
            <div className="p-4 bg-neon-green/10 border border-neon-green/20 rounded-lg flex items-center">
              <ArrowDownToLine className="h-5 w-5 text-neon-green mr-3" />
              <div>
                <p className="text-white font-medium">Available to Withdraw</p>
                <p className="text-neon-green font-bold">
                  {withdrawData.availableToWithdraw} {withdrawData.tokenSymbol}
                  <span className="text-gray-400 font-normal text-sm ml-2">
                    ≈ ${(withdrawData.availableToWithdraw * withdrawData.tokenPrice).toFixed(2)} USD
                  </span>
                </p>
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-1 block">Withdrawal Amount</label>
              <div className="relative">
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-muted border-muted pr-16"
                  max={withdrawData.availableToWithdraw}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  {withdrawData.tokenSymbol}
                </div>
              </div>
              <div className="flex justify-between mt-1">
                <button
                  className="text-xs text-neon-green"
                  onClick={() => setAmount(withdrawData.availableToWithdraw.toString())}
                >
                  Max
                </button>
                <p className="text-xs text-gray-400">
                  ≈ ${(Number.parseFloat(amount) * withdrawData.tokenPrice).toFixed(2)} USD
                </p>
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-1 block">Network</label>
              <Select defaultValue={network} onValueChange={setNetwork}>
                <SelectTrigger className="bg-muted border-muted">
                  <SelectValue placeholder="Select Network" />
                </SelectTrigger>
                <SelectContent>
                  {withdrawData.networks.map((net) => (
                    <SelectItem key={net} value={net}>
                      {net}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="p-4 bg-muted rounded-lg flex items-start">
              <Wallet className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
              <div>
                <p className="text-white font-medium">Withdrawal Address</p>
                <p className="text-gray-300 break-all">{withdrawData.walletAddress}</p>
                <p className="text-xs text-gray-400 mt-1">Tokens will be sent to your connected wallet address</p>
              </div>
            </div>

            <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg flex items-start">
              <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
              <div>
                <p className="text-white font-medium">Important</p>
                <p className="text-gray-300 text-sm">
                  Make sure you're withdrawing to a wallet that supports the {network} network. Withdrawals typically
                  take 5-10 minutes to process.
                </p>
              </div>
            </div>

            <Button
              className="w-full bg-neon-green text-black hover:bg-neon-green/90"
              onClick={handleWithdraw}
              disabled={Number.parseFloat(amount) <= 0 || Number.parseFloat(amount) > withdrawData.availableToWithdraw}
            >
              Withdraw {amount} {withdrawData.tokenSymbol}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
