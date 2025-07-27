"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group bg-white/4 p-2 rounded border border-white/5 backdrop-blur-lg"
    >
      <Link
        href={`/project/${project.id}`}
        className="flex items-start justify-between group-hover:opacity-80 transition-opacity"
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1 justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-sm md:text-xl font-sora-semibold">
                {project.title}
              </h2>
            </div>
          </div>
          <p className="text-gray-400 text-xs md:text-sm mb-2">
            {project.description}
          </p>
        </div>
        <motion.div
          whileHover={{ scale: 1.2, rotate: 45 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors ml-4" />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
