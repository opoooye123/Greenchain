"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { AlertCircle } from "lucide-react"

export function ProjectProposalForm() {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    type: "",
    description: "",
    fundingGoal: "",
    rewardRate: "",
    duration: "",
    implementingPartner: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // This would handle project proposal submission
    console.log("Submitting project proposal:", formData)

    // Example smart contract interaction:
    // const tx = await projectFactoryContract.proposeProject(
    //   formData.title,
    //   formData.location,
    //   formData.type,
    //   formData.description,
    //   ethers.utils.parseUnits(formData.fundingGoal, 6),
    //   parseFloat(formData.rewardRate) * 100, // Convert to basis points
    //   parseInt(formData.duration) * 30 * 24 * 60 * 60, // Convert months to seconds
    //   formData.implementingPartner
    // )
    // await tx.wait()
  }

  return (
    <Card className="bg-card border-muted mt-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Propose a New Clean Energy Project</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="title">Project Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="e.g., Kaduna Solar Hub"
                className="bg-muted border-muted"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                placeholder="e.g., Kaduna"
                className="bg-muted border-muted"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="type">Project Type</Label>
              <Select value={formData.type} onValueChange={(value) => handleSelectChange("type", value)}>
                <SelectTrigger id="type" className="bg-muted border-muted">
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Solar">Solar</SelectItem>
                  <SelectItem value="Mini-Grid">Mini-Grid</SelectItem>
                  <SelectItem value="Borehole">Borehole</SelectItem>
                  <SelectItem value="Wind">Wind</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="implementingPartner">Implementing Partner</Label>
              <Input
                id="implementingPartner"
                name="implementingPartner"
                placeholder="e.g., SolarTech Nigeria Ltd."
                className="bg-muted border-muted"
                value={formData.implementingPartner}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fundingGoal">Funding Goal (USDC)</Label>
              <Input
                id="fundingGoal"
                name="fundingGoal"
                type="number"
                placeholder="e.g., 50000"
                className="bg-muted border-muted"
                value={formData.fundingGoal}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="rewardRate">Reward Rate (% APY)</Label>
              <Input
                id="rewardRate"
                name="rewardRate"
                type="number"
                step="0.1"
                placeholder="e.g., 8.5"
                className="bg-muted border-muted"
                value={formData.rewardRate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Project Duration (Months)</Label>
              <Input
                id="duration"
                name="duration"
                type="number"
                placeholder="e.g., 24"
                className="bg-muted border-muted"
                value={formData.duration}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Project Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Describe the project, its impact, and implementation details..."
              className="bg-muted border-muted min-h-[120px]"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg flex items-start">
            <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
            <div>
              <p className="text-white font-medium">Important</p>
              <p className="text-gray-300 text-sm">
                All project proposals undergo a verification process. You'll need to provide additional documentation
                and proof of partnership with the implementing organization before the project is listed.
              </p>
            </div>
          </div>

          <Button type="submit" className="w-full bg-neon-green text-black hover:bg-neon-green/90">
            Submit Project Proposal
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
