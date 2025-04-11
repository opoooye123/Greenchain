import { Navbar } from "@/components/navbar"
import { ProjectDetails } from "@/components/project-details"
import { ProjectFundingStats } from "@/components/project-funding-stats"
import { ProjectImpact } from "@/components/project-impact"
import { ProjectRewards } from "@/components/project-rewards"
import { ProjectUpdates } from "@/components/project-updates"
import { FundProjectButton } from "@/components/fund-project-button"
import { Footer } from "@/components/footer"

export default function ProjectPage({ params }: { params: { id: string } }) {
  // In a real app, we would fetch project data based on the ID
  // const { data: project } = useProject(params.id)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <ProjectDetails id={params.id} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="md:col-span-2">
            <ProjectImpact />
            <ProjectUpdates />
          </div>
          <div className="md:col-span-1">
            <ProjectFundingStats />
            <ProjectRewards />
            <FundProjectButton />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
