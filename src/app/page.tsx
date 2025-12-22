"use client";
import {
  MapPin,
  BriefcaseBusiness,
  BookOpen,
  Linkedin,
  Github,
  FileText,
  Mail,
  Calendar,
  Building2,
} from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { internshipProjects } from "@/projects/internship";
import { useState } from "react";
import { freelanceProjects } from "@/projects/freelance";
import { sideProjects } from "@/projects/side";
import Script from "next/script";

interface WorkExperience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  companyUrl?: string;
}

const workExperiences: WorkExperience[] = [
  {
    id: "exp-1",
    company: "3RP-Technetium",
    role: "Trainee Developer",
    location: "Remote",
    startDate: "Sep 2025",
    endDate: "Dec 2025",
    companyUrl: "",
  },
  {
    id: "exp-2",
    company: "BuffIndia",
    role: "Software Development Intern",
    location: "Remote",
    startDate: "Feb 2025",
    endDate: "Jun 2025",
    companyUrl: "https://buffindia.com",
  },
];

export default function Home() {
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

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yash Dangar",
    jobTitle: "Software Engineer",
    description:
      "Software engineer building elegant interfaces for the modern web",
    url: "https://yashdangar.me",
    image: "https://yashdangar.me/og-image.png",
    sameAs: [
      "https://github.com/yashdangar",
      "https://linkedin.com/in/yashdangar",
      "https://x.com/YashDangar20",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Surat",
      addressCountry: "India",
    },
    alumniOf: {
      "@type": "Organization",
      name: "SCET",
    },
    worksFor: {
      "@type": "Organization",
      name: "BuffIndia",
    },
    knowsAbout: [
      "Web Development",
      "React",
      "Next.js",
      "Frontend Development",
      "Software Engineering",
    ],
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main className="min-h-screen bg-black text-white p-6 md:p-12 lg:p-24">
        <div className="w-full sm:w-5/6 lg:w-1/2  mx-auto">
          <BlurFade delay={0.25} inView>
            <header className="mb-5 p-2">
              <div className="flex items-center justify-between ">
                <h1 className="text-xl md:text-3xl font-bold mb-2">
                  Yash Dangar
                </h1>
                <a
                href="https://drive.google.com/file/d/1ImbNyxyppggsNGj-QzFCFDcWOQb8B540/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors underline underline-offset-1 decoration-zinc-600 hover:decoration-current "
                aria-label="Download Resume"
              >
                <p className="flex mb-1 gap-2 items-center italic">
                  Resume
                </p>
              </a>
              </div>
              <p className="text-gray-400 mb-3 lg:text-md text-xs">
                Hi , I&apos;m Yash - a software engineer building Elegant
                interfaces for the modern web.
              </p>
            </header>

            {/* Work Experience */}
            <section className="mb-8" aria-label="Work Experience">
              <h2 className="text-white text-md mb-5">Experience</h2>
              <div className="relative">
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/20 via-white/10 to-transparent"></div>
                <div className="space-y-8">
                  {workExperiences.map((exp, index) => (
                    <div key={exp.id} className="relative pl-10">
                      <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                      <div className="group">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                          <div>
                            {exp.companyUrl ? (
                              <a
                                href={exp.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white font-semibold text-sm md:text-base hover:text-zinc-300 transition-colors inline-flex items-center gap-1"
                              >
                                {exp.company}
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                  <polyline points="15 3 21 3 21 9"></polyline>
                                  <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                              </a>
                            ) : (
                              <h3 className="text-white font-semibold text-sm md:text-base">
                                {exp.company}
                              </h3>
                            )}
                            <p className="text-zinc-400 text-xs md:text-sm mt-0.5">
                              {exp.role}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 text-zinc-500 text-xs">
                            <Calendar size={12} />
                            <span>
                              {exp.startDate} - {exp.endDate}
                            </span>
                          </div>
                        </div>
                        <p className="text-zinc-500 text-xs mb-2 flex items-center gap-1">
                          <MapPin size={12} />
                          {exp.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-5" aria-label="Contact Information">
              <h2 className="text-white text-md mb-3">Contact</h2>
              <nav className="flex gap-4" aria-label="Social Media Links">
                <a
                  href="https://github.com/yashdangar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label="Visit GitHub Profile"
                >
                  <Github size={20} aria-hidden="true" />
                </a>
                <a
                  href="https://x.com/YashDangar20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label="Visit X (Twitter) Profile"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-zinc-400 hover:text-white transition-colors"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/yashdangar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label="Visit LinkedIn Profile"
                >
                  <Linkedin size={20} aria-hidden="true" />
                </a>

                <a
                  href="mailto:yashdangar123@gmail.com"
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label="Send Email to yashdangar123@gmail.com"
                >
                  <Mail size={20} aria-hidden="true" />
                </a>
              </nav>
            </section>

            <div className="mb-8 flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-transparent px-3 py-2 text-xs md:text-sm text-zinc-50 shadow-sm shadow-white/5 backdrop-blur">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/10">
                  <BookOpen aria-hidden="true" className="w-3.5 h-3.5 text-white/80" />
                </span>
                <span className="whitespace-nowrap font-medium">B.Tech. from SCET, Surat</span>
              </div>
            </div>

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
              {getProjectsForTab().map((project, index) => (
                <ProjectCard
                  key={`${activeTab}-${project.id}`}
                  project={project}
                />
              ))}
            </div>
          </BlurFade>
        </div>
      </main>
    </>
  );
}
