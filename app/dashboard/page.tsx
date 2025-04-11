import { Navbar } from "@/components/navbar"
import { DashboardTabs } from "@/components/dashboard-tabs"
import { MyProjects } from "@/components/my-projects"
import { EarnedTokens } from "@/components/earned-tokens"
import { WithdrawRewards } from "@/components/withdraw-rewards"
import { Footer } from "@/components/footer"
import { WalletRequired } from "@/components/wallet-required"

export default function DashboardPage() {
  // In a real app, we would check if the user is connected
  const isConnected = false // This would be from a wallet connection hook

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-white">Investor Dashboard</h1>

        {isConnected ? (
          <>
            <DashboardTabs />
            <div className="mt-8">
              {/* These would be conditionally rendered based on the active tab */}
              <MyProjects />
              <EarnedTokens />
              <WithdrawRewards />
            </div>
          </>
        ) : (
          <WalletRequired />
        )}
      </div>
      <Footer />
    </main>
  )
}
