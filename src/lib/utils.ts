import { Project } from "@/types"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { internshipProjects } from "@/projects/internship"
import { freelanceProjects } from "@/projects/freelance"
import { sideProjects } from "@/projects/side"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAllProjects(): Project[] {
  return [...internshipProjects, ...freelanceProjects, ...sideProjects]
}
export function getProjectById(id: string): Project | undefined {
  const allProjects = getAllProjects()
  return allProjects.find(project => project.id === id)
}
