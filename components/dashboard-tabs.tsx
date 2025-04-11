"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MyProjects } from "@/components/my-projects"
import { EarnedTokens } from "@/components/earned-tokens"
import { WithdrawRewards } from "@/components/withdraw-rewards"

export function DashboardTabs() {
  const [activeTab, setActiveTab] = useState("projects")

  return (
    <Tabs defaultValue="projects" onValueChange={setActiveTab}>
      <TabsList className="grid grid-cols-3 w-full max-w-md">
        <TabsTrigger value="projects">My Projects</TabsTrigger>
        <TabsTrigger value="tokens">Earned Tokens</TabsTrigger>
        <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
      </TabsList>

      <TabsContent value="projects">
        <MyProjects />
      </TabsContent>

      <TabsContent value="tokens">
        <EarnedTokens />
      </TabsContent>

      <TabsContent value="withdraw">
        <WithdrawRewards />
      </TabsContent>
    </Tabs>
  )
}
