"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectProposalForm } from "@/components/project-proposal-form"
import { ManageProjects } from "@/components/manage-projects"

export function AdminTabs() {
  const [activeTab, setActiveTab] = useState("propose")

  return (
    <Tabs defaultValue="propose" onValueChange={setActiveTab}>
      <TabsList className="grid grid-cols-2 w-full max-w-md">
        <TabsTrigger value="propose">Propose Project</TabsTrigger>
        <TabsTrigger value="manage">Manage Projects</TabsTrigger>
      </TabsList>

      <TabsContent value="propose">
        <ProjectProposalForm />
      </TabsContent>

      <TabsContent value="manage">
        <ManageProjects />
      </TabsContent>
    </Tabs>
  )
}
