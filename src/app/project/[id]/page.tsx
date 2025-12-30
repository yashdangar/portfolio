import { notFound } from "next/navigation";
import { getAllProjects, getProjectById } from "@/lib/utils";
import { ProjectPageClient } from "@/components/ProjectPageClient";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const projects = getAllProjects();

  return projects.map((project) => ({
    id: project.id,
  }));
}

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return <ProjectPageClient project={project} />;
}
