import { Navbar } from "@/components/navbar"
import { AdminTabs } from "@/components/admin-tabs"
import { ProjectProposalForm } from "@/components/project-proposal-form"
import { ManageProjects } from "@/components/manage-projects"
import { Footer } from "@/components/footer"
import { WalletRequired } from "@/components/wallet-required"

export default function AdminPage() {
  // In a real app, we would check if the user is connected and is an admin
  const isConnected = false // This would be from a wallet connection hook
  const isAdmin = false // This would be checked from the smart contract

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-white">Admin Dashboard</h1>

        {isConnected ? (
          isAdmin ? (
            <>
              <AdminTabs />
              <div className="mt-8">
                {/* These would be conditionally rendered based on the active tab */}
                <ProjectProposalForm />
                <ManageProjects />
              </div>
            </>
          ) : (
            <div className="bg-red-900/20 border border-red-500 rounded-lg p-6 text-center">
              <h2 className="text-xl font-semibold text-red-400">Access Denied</h2>
              <p className="mt-2 text-gray-300">You do not have admin privileges.</p>
            </div>
          )
        ) : (
          <WalletRequired />
        )}
      </div>
      <Footer />
    </main>
  )
}
