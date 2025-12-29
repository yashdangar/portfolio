"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { internshipProjects } from "@/projects/internship";
import { freelanceProjects } from "@/projects/freelance";
import { sideProjects } from "@/projects/side";

// Lazy load ProjectCard to reduce initial bundle size
const ProjectCard = dynamic(() => import("@/components/ProjectCard"), {
  loading: () => <div className="h-20 bg-white/4 rounded border border-white/5 animate-pulse" />,
});

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const projects = useMemo(() => {
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
  }, [activeTab]);

  return (
    <>
      <section
        className="flex flex-col w-full mb-8"
        aria-label="Projects"
      >
        <div className="flex items-center gap-4 mb-2 justify-between">
          <h2 className="text-white text-md ms:text-md">Projects</h2>

          <Tabs
            defaultValue="all"
            onValueChange={(value) => setActiveTab(value)}
            className=""
            aria-label="Project Categories"
          >
            <TabsList className="bg-white/5 text-white border border-white/4 rounded-md px-1 py-5">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-black data-[state=active]:border-white/6 data-[state=active]:drop-shadow-md text-gray-200/70 data-[state=active]:text-white rounded-sm px-2 md:px-3 py-4 text-xs md:text-sm font-medium transition-all cursor-pointer"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="internship"
                className="data-[state=active]:bg-black data-[state=active]:border-white/6 data-[state=active]:drop-shadow-md text-gray-200/70 data-[state=active]:text-white rounded-sm px-2 md:px-3 py-4 text-xs md:text-sm font-medium transition-all cursor-pointer"
              >
                Internship
              </TabsTrigger>
              <TabsTrigger
                value="freelance"
                className="data-[state=active]:bg-black data-[state=active]:border-white/6 data-[state=active]:drop-shadow-md text-gray-200/70 data-[state=active]:text-white rounded-sm px-2 md:px-3 py-4 text-xs md:text-sm font-medium transition-all cursor-pointer"
              >
                Freelance
              </TabsTrigger>
              <TabsTrigger
                value="side"
                className="data-[state=active]:bg-black data-[state=active]:border-white/6 data-[state=active]:drop-shadow-md text-gray-200/70 data-[state=active]:text-white rounded-sm px-2 md:px-3 py-4 text-xs md:text-sm font-medium transition-all cursor-pointer"
              >
                Side
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      <div
        className="space-y-2"
        role="list"
        aria-label={`${activeTab} projects`}
      >
        {projects.map((project) => (
          <ProjectCard
            key={`${activeTab}-${project.id}`}
            project={project}
          />
        ))}
      </div>
    </>
  );
}

