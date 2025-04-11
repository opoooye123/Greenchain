import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Users, Sun } from "lucide-react"

// Mock data - in a real app, this would come from the smart contract
const projectDetails = {
  id: "kaduna-solar",
  title: "Kaduna Solar Hub",
  location: "Kaduna",
  type: "Solar",
  description:
    "A community-focused solar installation providing clean energy to over 500 homes and businesses in the Kaduna region. This project aims to reduce dependency on unreliable grid power and diesel generators.",
  startDate: "March 15, 2023",
  implementingPartner: "SolarTech Nigeria Ltd.",
  icon: Sun,
}

export function ProjectDetails({ id }: { id: string }) {
  // In a real app, we would fetch project data based on the ID
  // const { data: project } = useProject(id)

  return (
    <div className="bg-card border border-muted rounded-lg p-6">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Badge className="bg-neon-green/20 text-neon-green border-neon-green/20">{projectDetails.type}</Badge>
            <span className="text-gray-400 text-sm">Project ID: {id}</span>
          </div>

          <h1 className="text-3xl font-bold text-white mb-2">{projectDetails.title}</h1>

          <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              {projectDetails.location}, Nigeria
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              Started {projectDetails.startDate}
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              Partner: {projectDetails.implementingPartner}
            </div>
          </div>

          <p className="text-gray-300 max-w-3xl">{projectDetails.description}</p>
        </div>

        <div className="mt-6 md:mt-0">
          <div className="w-16 h-16 rounded-full bg-neon-green/10 flex items-center justify-center">
            <projectDetails.icon className="h-8 w-8 text-neon-green" />
          </div>
        </div>
      </div>
    </div>
  )
}
