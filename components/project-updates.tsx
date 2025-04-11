import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays } from "lucide-react"

// Mock data - in a real app, this would come from the smart contract
const updates = [
  {
    date: "April 15, 2023",
    title: "Construction Begins",
    description:
      "Ground breaking ceremony held with local officials. Initial site preparation and foundation work has begun.",
  },
  {
    date: "June 22, 2023",
    title: "Solar Panels Installed",
    description:
      "First batch of 120 solar panels successfully installed and tested. Initial power generation has begun.",
  },
  {
    date: "August 10, 2023",
    title: "Grid Connection Complete",
    description:
      "The project has been successfully connected to the local distribution network. First 50 homes now receiving power.",
  },
  {
    date: "October 5, 2023",
    title: "Phase 1 Complete",
    description:
      "Phase 1 of the project is now complete with 180 homes connected. First token rewards distributed to investors.",
  },
]

export function ProjectUpdates() {
  return (
    <Card className="bg-card border-muted">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Project Updates</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="relative pl-6 border-l border-muted space-y-6">
          {updates.map((update, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-neon-green"></div>
              <div className="flex items-center text-sm text-gray-400 mb-1">
                <CalendarDays className="h-4 w-4 mr-1" />
                {update.date}
              </div>
              <h3 className="text-white font-medium mb-1">{update.title}</h3>
              <p className="text-gray-300 text-sm">{update.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
