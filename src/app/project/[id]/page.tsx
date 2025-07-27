"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Tag,
  Code,
  Globe,
  Users,
  Database,
  GitBranch,
} from "lucide-react";
import { motion } from "framer-motion";
import { getProjectById } from "@/lib/utils";

// Simple markdown renderer for the long description
const renderMarkdown = (text: string) => {
  return text.split("\n").map((line, index) => {
    // Handle headers
    if (line.startsWith("## ")) {
      return (
        <h2 key={index} className="text-xl font-semibold mt-6 mb-3 text-white">
          {line.replace("## ", "")}
        </h2>
      );
    }
    if (line.startsWith("### ")) {
      return (
        <h3 key={index} className="text-lg font-semibold mt-4 mb-2 text-white">
          {line.replace("### ", "")}
        </h3>
      );
    }

    // Handle bold text
    if (line.includes("**")) {
      const parts = line.split("**");
      return (
        <p key={index} className="text-gray-300 mb-3">
          {parts.map((part, i) =>
            i % 2 === 1 ? (
              <strong key={i} className="text-white font-semibold">
                {part}
              </strong>
            ) : (
              part
            )
          )}
        </p>
      );
    }

    // Handle bullet points
    if (line.trim().startsWith("- ")) {
      return (
        <li key={index} className="flex items-start gap-3 mb-2">
          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
          <span className="text-gray-300">{line.replace("- ", "")}</span>
        </li>
      );
    }

    // Handle numbered lists
    if (/^\d+\.\s/.test(line)) {
      return (
        <li key={index} className="flex items-start gap-3 mb-2">
          <span className="text-blue-400 font-mono text-sm mt-1 flex-shrink-0">
            {line.match(/^\d+/)?.[0]}.
          </span>
          <span className="text-gray-300">{line.replace(/^\d+\.\s/, "")}</span>
        </li>
      );
    }

    // Regular paragraphs
    if (line.trim()) {
      return (
        <p key={index} className="text-gray-300 mb-3">
          {line}
        </p>
      );
    }

    // Empty lines
    return <div key={index} className="h-3"></div>;
  });
};

export default function ProjectPage() {
  const params = useParams();
  const projectId = params.id as string;

  const project = getProjectById(projectId);

  if (!project) {
    return (
      <main className="min-h-screen bg-black text-white p-6 md:p-12 lg:p-24">
        <div className="w-full sm:w-5/6 md:w-2/3 lg:w-1/2 2xl:w-1/4 mx-auto">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
            <p className="text-gray-400 mb-8">
              The project you're looking for doesn't exist.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const getStatusColor = (color?: string) => {
    switch (color) {
      case "green":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "blue":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "orange":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "gray":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
      case "amber":
        return "bg-amber-500/20 text-amber-400 border-amber-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-12 lg:p-24">
      <div className="w-full sm:w-5/6 md:w-2/3 lg:w-1/2 2xl:w-1/4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          {/* Project Header */}
          <header className="mb-8">
            <div className="flex items-start justify-between mb-4">
              <h1 className="text-2xl md:text-4xl font-bold">
                {project.title}
              </h1> 
            </div>

            {/* Short Description */}
            <p className="text-gray-400 text-lg mb-6">{project.description}</p>

            {/* Project Meta */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{project.date}</span>
              </div>
              {project.category && (
                <div className="flex items-center gap-2">
                  <Tag size={16} />
                  <span className="capitalize">{project.category}</span>
                </div>
              )}
              {project.repoCount && (
                <div className="flex items-center gap-2">
                  <GitBranch size={16} />
                  <span>{project.repoCount} repos</span>
                </div>
              )}
            </div>

            {/* External Links */}
            <div className="flex gap-4 mb-8">
              {project.href && (
                <Link
                  href={project.href}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <Globe size={16} />
                  Live Demo
                  <ExternalLink size={14} />
                </Link>
              )}
              {project.github && project.github !== "private" && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <Github size={16} />
                  Source Code
                  <ExternalLink size={14} />
                </Link>
              )}
              {project.github === "private" && (
                <span className="flex items-center gap-2 px-4 py-2 bg-gray-500/10 rounded border border-gray-500/20 text-gray-400">
                  <Github size={16} />
                  Private Repository
                </span>
              )}
            </div>
          </header>

          {/* Long Description */}
          {project.longDescription && (
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Project Details</h2>
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="prose prose-invert max-w-none">
                  {renderMarkdown(project.longDescription)}
                </div>
              </div>
            </section>
          )}

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <section className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <section className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Tech Stack */}
          {project.techStack && project.techStack.length > 0 && (
            <section className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Technology Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Additional Websites */}
          {project.websites && project.websites.length > 0 && (
            <section className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Related Websites</h2>
              <div className="space-y-2">
                {project.websites.map((website, index) => (
                  <Link
                    key={index}
                    href={website}
                    target="_blank"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Globe size={16} />
                    {website}
                    <ExternalLink size={14} />
                  </Link>
                ))}
              </div>
            </section>
          )}

        </motion.div>
      </div>
    </main>
  );
}
