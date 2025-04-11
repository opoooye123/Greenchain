import { Navbar } from "@/components/navbar"
import { ProjectsGrid } from "@/components/projects-grid"
import { ProjectFilters } from "@/components/project-filters"
import { Footer } from "@/components/footer"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-white">Explore Projects</h1>
        <ProjectFilters />
        <ProjectsGrid />
      </div>
      <Footer />
    </main>
  )
}
