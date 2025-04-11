import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MapPin, MoreVertical, Sun, Zap } from "lucide-react"

// Mock data - in a real app, this would come from the smart contract
const managedProjects = [
  {
    id: "kaduna-solar",
    title: "Kaduna Solar Hub",
    location: "Kaduna",
    type: "Solar",
    fundingGoal: 50000,
    funded: 35000,
    status: "Active",
    icon: Sun,
  },
  {
    id: "lagos-minigrid",
    title: "Lagos Island Mini-Grid",
    location: "Lagos",
    type: "Mini-Grid",
    fundingGoal: 75000,
    funded: 45000,
    status: "Active",
    icon: Zap,
  },
  {
    id: "abuja-solar",
    title: "Abuja Solar Farm",
    location: "Abuja",
    type: "Solar",
    fundingGoal: 100000,
    funded: 0,
    status: "Pending",
    icon: Sun,
  },
]

export function ManageProjects() {
  return (
    <div className="space-y-6 mt-6">
      <h2 className="text-xl font-semibold text-white">Your Projects</h2>

      {managedProjects.map((project) => (
        <Card key={project.id} className="bg-card border-muted">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-muted text-white border border-muted">{project.type}</Badge>
                  <Badge
                    className={
                      project.status === "Active"
                        ? "bg-neon-green/20 text-neon-green border-neon-green/20"
                        : "bg-yellow-500/20 text-yellow-500 border-yellow-500/20"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <div className="flex items-center text-gray-400 text-sm mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  {project.location}, Nigeria
                </div>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit Project</DropdownMenuItem>
                  <DropdownMenuItem>Post Update</DropdownMenuItem>
                  <DropdownMenuItem>View Investors</DropdownMenuItem>
                  {project.status === "Pending" && <DropdownMenuItem>Cancel Proposal</DropdownMenuItem>}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>

          <CardContent>
            <div className="space-y-4">
              {project.status === "Active" && (
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Funding Progress</span>
                    <span className="text-neon-green font-medium">
                      {Math.round((project.funded / project.fundingGoal) * 100)}%
                    </span>
                  </div>
                  <Progress value={(project.funded / project.fundingGoal) * 100} className="h-2 bg-muted" />
                </div>
              )}

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-400">Funding Goal</p>
                  <p className="text-white font-medium">${project.fundingGoal.toLocaleString()}</p>
                </div>

                {project.status === "Active" ? (
                  <div className="text-right">
                    <p className="text-sm text-gray-400">Raised</p>
                    <p className="text-white font-medium">${project.funded.toLocaleString()}</p>
                  </div>
                ) : (
                  <Button size="sm" className="bg-neon-green text-black hover:bg-neon-green/90">
                    Edit Proposal
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
