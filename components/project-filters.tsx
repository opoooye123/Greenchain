"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Search, SlidersHorizontal } from "lucide-react"

export function ProjectFilters() {
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [rewardRange, setRewardRange] = useState([5])

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Search projects..." className="pl-10 bg-muted border-muted" />
        </div>

        <div className="flex gap-4">
          <Select defaultValue="all">
            <SelectTrigger className="w-[140px] bg-muted border-muted">
              <SelectValue placeholder="Project Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="solar">Solar</SelectItem>
              <SelectItem value="minigrid">Mini-Grid</SelectItem>
              <SelectItem value="borehole">Borehole</SelectItem>
              <SelectItem value="wind">Wind</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="w-[140px] bg-muted border-muted">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="lagos">Lagos</SelectItem>
              <SelectItem value="abuja">Abuja</SelectItem>
              <SelectItem value="kaduna">Kaduna</SelectItem>
              <SelectItem value="kano">Kano</SelectItem>
              <SelectItem value="rivers">Rivers</SelectItem>
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            size="icon"
            className={showAdvanced ? "bg-neon-green/10 border-neon-green text-neon-green" : ""}
            onClick={() => setShowAdvanced(!showAdvanced)}
          >
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {showAdvanced && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 bg-muted rounded-lg border border-muted">
          <div>
            <label className="text-sm font-medium text-gray-300 mb-2 block">Funding Status</label>
            <Select defaultValue="all">
              <SelectTrigger className="bg-background border-input">
                <SelectValue placeholder="Funding Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Projects</SelectItem>
                <SelectItem value="active">Active Funding</SelectItem>
                <SelectItem value="completed">Fully Funded</SelectItem>
                <SelectItem value="new">Newly Listed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-300 mb-2 block">Min. Reward Rate: {rewardRange[0]}%</label>
            <Slider
              defaultValue={[5]}
              max={15}
              step={0.5}
              value={rewardRange}
              onValueChange={setRewardRange}
              className="py-4"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-300 mb-2 block">Sort By</label>
            <Select defaultValue="newest">
              <SelectTrigger className="bg-background border-input">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="reward">Highest Reward</SelectItem>
                <SelectItem value="funded">Most Funded</SelectItem>
                <SelectItem value="goal">Lowest Goal</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </div>
  )
}
