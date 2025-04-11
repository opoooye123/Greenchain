"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Wallet, CreditCard, Coins } from "lucide-react"

interface WalletConnectModalProps {
  isOpen: boolean
  onClose: () => void
}

export function WalletConnectModal({ isOpen, onClose }: WalletConnectModalProps) {
  const connectWallet = (walletType: string) => {
    // This would handle wallet connection logic
    console.log(`Connecting to ${walletType}`)

    // Example wallet connection:
    // if (walletType === 'metamask') {
    //   const provider = new ethers.providers.Web3Provider(window.ethereum)
    //   await provider.send("eth_requestAccounts", [])
    //   const signer = provider.getSigner()
    //   const address = await signer.getAddress()
    //   // Store wallet info in state or context
    // }

    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card border-muted">
        <DialogHeader>
          <DialogTitle className="text-xl text-center">Connect Your Wallet</DialogTitle>
          <DialogDescription className="text-center text-gray-400">
            Connect your wallet to fund projects and track your investments
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <Button
            variant="outline"
            className="flex items-center justify-between p-4 h-auto border-muted hover:border-neon-green hover:bg-muted"
            onClick={() => connectWallet("metamask")}
          >
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center mr-3">
                <Wallet className="h-5 w-5 text-orange-500" />
              </div>
              <div className="text-left">
                <p className="font-medium text-white">MetaMask</p>
                <p className="text-xs text-gray-400">Connect using browser wallet</p>
              </div>
            </div>
            <span className="text-gray-400 text-xs">Popular</span>
          </Button>

          <Button
            variant="outline"
            className="flex items-center justify-between p-4 h-auto border-muted hover:border-neon-green hover:bg-muted"
            onClick={() => connectWallet("walletconnect")}
          >
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mr-3">
                <CreditCard className="h-5 w-5 text-blue-500" />
              </div>
              <div className="text-left">
                <p className="font-medium text-white">WalletConnect</p>
                <p className="text-xs text-gray-400">Connect using mobile wallet</p>
              </div>
            </div>
          </Button>

          <Button
            variant="outline"
            className="flex items-center justify-between p-4 h-auto border-muted hover:border-neon-green hover:bg-muted"
            onClick={() => connectWallet("coinbase")}
          >
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-400/10 flex items-center justify-center mr-3">
                <Coins className="h-5 w-5 text-blue-400" />
              </div>
              <div className="text-left">
                <p className="font-medium text-white">Coinbase Wallet</p>
                <p className="text-xs text-gray-400">Connect using Coinbase app</p>
              </div>
            </div>
          </Button>
        </div>

        <p className="text-xs text-gray-400 text-center">
          By connecting your wallet, you agree to our Terms of Service and Privacy Policy
        </p>
      </DialogContent>
    </Dialog>
  )
}
