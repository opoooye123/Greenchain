"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WalletConnectModal } from "@/components/wallet-connect-modal"
import { Zap, Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false)

  // In a real app, we would check if the user is connected
  const isConnected = false // This would be from a wallet connection hook
  const walletAddress = "" // This would be from a wallet connection hook

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="border-b border-muted bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-neon-green" />
            <span className="text-xl font-bold text-white">
              Green<span className="text-neon-green">Chain</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/projects" className="text-gray-300 hover:text-neon-green transition-colors">
              Projects
            </Link>
            <Link href="/dashboard" className="text-gray-300 hover:text-neon-green transition-colors">
              Dashboard
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-neon-green transition-colors">
              About
            </Link>

            {isConnected ? (
              <Button variant="outline" className="border-neon-green text-neon-green hover:bg-neon-green/10">
                {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
              </Button>
            ) : (
              <Button
                className="bg-neon-green text-black hover:bg-neon-green/90"
                onClick={() => setIsWalletModalOpen(true)}
              >
                Connect Wallet
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3">
            <Link
              href="/projects"
              className="block px-3 py-2 text-gray-300 hover:text-neon-green hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/dashboard"
              className="block px-3 py-2 text-gray-300 hover:text-neon-green hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-300 hover:text-neon-green hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>

            {isConnected ? (
              <Button variant="outline" className="w-full border-neon-green text-neon-green hover:bg-neon-green/10">
                {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
              </Button>
            ) : (
              <Button
                className="w-full bg-neon-green text-black hover:bg-neon-green/90"
                onClick={() => {
                  setIsWalletModalOpen(true)
                  setIsMenuOpen(false)
                }}
              >
                Connect Wallet
              </Button>
            )}
          </div>
        )}
      </div>

      <WalletConnectModal isOpen={isWalletModalOpen} onClose={() => setIsWalletModalOpen(false)} />
    </nav>
  )
}
