"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { internshipProjects } from "@/projects/internship";
import { freelanceProjects } from "@/projects/freelance";
import { sideProjects } from "@/projects/side";

export default function ProjectTabs() {
  const [activeTab, setActiveTab] = useState("all");

  const getProjectsForTab = () => {
    switch (activeTab) {
      case "freelance":
        return freelanceProjects;
      case "side":
        return sideProjects;
      case "all":
        return [...internshipProjects, ...freelanceProjects, ...sideProjects];
      case "internship":
      default:
        return internshipProjects;
    }
  };

  return (
    <>
      <Tabs
        defaultValue="all"
        onValueChange={(value) => setActiveTab(value)}
        className=""
        aria-label="Project Categories"
      >
        <TabsList 
          className="bg-white/5 text-white border border-white/4 rounded-md px-1 py-5"
          role="tablist"
          aria-label="Project category tabs"
        >
          <TabsTrigger
            value="all"
            className="data-[state=active]:bg-black data-[state=active]:border-white/6 data-[state=active]:drop-shadow-md text-gray-200/70 data-[state=active]:text-white rounded-sm px-2 md:px-3 py-4 text-xs md:text-sm font-medium transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/20"
            role="tab"
            aria-selected={activeTab === "all"}
            aria-controls="projects-panel"
          >
            All
          </TabsTrigger>
          <TabsTrigger
            value="internship"
            className="data-[state=active]:bg-black data-[state=active]:border-white/6 data-[state=active]:drop-shadow-md text-gray-200/70 data-[state=active]:text-white rounded-sm px-2 md:px-3 py-4 text-xs md:text-sm font-medium transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/20"
            role="tab"
            aria-selected={activeTab === "internship"}
            aria-controls="projects-panel"
          >
            Internship
          </TabsTrigger>
          <TabsTrigger
            value="freelance"
            className="data-[state=active]:bg-black data-[state=active]:border-white/6 data-[state=active]:drop-shadow-md text-gray-200/70 data-[state=active]:text-white rounded-sm px-2 md:px-3 py-4 text-xs md:text-sm font-medium transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/20"
            role="tab"
            aria-selected={activeTab === "freelance"}
            aria-controls="projects-panel"
          >
            Freelance
          </TabsTrigger>
          <TabsTrigger
            value="side"
            className="data-[state=active]:bg-black data-[state=active]:border-white/6 data-[state=active]:drop-shadow-md text-gray-200/70 data-[state=active]:text-white rounded-sm px-2 md:px-3 py-4 text-xs md:text-sm font-medium transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/20"
            role="tab"
            aria-selected={activeTab === "side"}
            aria-controls="projects-panel"
          >
            Side
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div
        id="projects-panel"
        className="space-y-2 mt-4"
        role="tabpanel"
        aria-label={`${activeTab} projects`}
        aria-live="polite"
      >
        {getProjectsForTab().map((project, index) => (
          <ProjectCard
            key={`${activeTab}-${project.id}-${index}`}
            project={project}
          />
        ))}
      </div>
    </>
  );
} 