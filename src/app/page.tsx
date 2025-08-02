import {
  MapPin,
  BriefcaseBusiness,
  BookOpen,
  Linkedin,
  Github,
  FileText,
  Mail,
} from "lucide-react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Script from "next/script";

// Lazy load components to reduce initial bundle size
const BlurFade = dynamic(() => import("@/components/magicui/blur-fade").then(mod => ({ default: mod.BlurFade })), {
  loading: () => <div className="animate-pulse" />,
  ssr: true,
});

// Lazy load project data
const ProjectTabs = dynamic(() => import("@/components/ProjectTabs"), {
  loading: () => <div className="h-10 bg-white/5 rounded animate-pulse w-32" />,
  ssr: true,
});

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

export default function Home() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
        strategy="afterInteractive"
      />
      <main className="min-h-screen bg-black text-white p-6 md:p-12 lg:p-24">
        <div className="w-full sm:w-5/6 lg:w-1/2 mx-auto">
          <Suspense fallback={<div className="animate-pulse h-32 bg-white/5 rounded" />}>
            <BlurFade delay={0.25} inView>
              <header className="mb-5 p-2">
                <h1 className="text-xl md:text-3xl font-bold mb-2">
                  Yash Dangar
                </h1>

                <p className="text-gray-400 mb-2 lg:text-md text-xs">
                  Hi, I&apos;m Yash - a software engineer building elegant
                  interfaces for the modern web.
                </p>
              </header>
              
              <section
                className="text-xs md:text-sm lg:text-md text-zinc-400 flex flex-col gap-1 mb-5"
                aria-label="Professional Information"
              >
                <p className="flex mb-1 gap-2 items-center italic">
                  <BriefcaseBusiness aria-hidden="true" className="flex-shrink-0" />
                  Ex.SDE-1 Intern at
                  <a
                    className="underline underline-offset-1 decoration-zinc-600 hover:decoration-current transition"
                    href="https://buffindia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit BuffIndia website"
                  >
                    BuffIndia
                  </a>
                </p>
                <p className="flex mb-1 gap-2 items-center italic">
                  <BookOpen aria-hidden="true" className="flex-shrink-0" />
                  B.Tech. from SCET, Surat
                </p>
                <p className="flex mb-1 gap-2 items-center italic">
                  <MapPin aria-hidden="true" className="flex-shrink-0" />
                  Surat, India
                </p>
                <a
                  href="https://drive.google.com/file/d/1X-QmJ_oyieaWzNfE0XcEYB3Xkk9Vy_Uk/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors underline underline-offset-1 decoration-zinc-600 hover:decoration-current"
                  aria-label="Download Resume"
                >
                  <p className="flex mb-1 gap-2 items-center italic">
                    <FileText aria-hidden="true" className="flex-shrink-0" />
                    Resume
                  </p>
                </a>
              </section>

              <section className="mb-5" aria-label="Contact Information">
                <h2 className="text-white text-md mb-3">Contact</h2>
                <nav className="flex gap-4" aria-label="Social Media Links">
                  <a
                    href="https://github.com/yashdangar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 rounded"
                    aria-label="Visit GitHub Profile"
                  >
                    <Github size={20} aria-hidden="true" />
                  </a>
                  <a
                    href="https://x.com/YashDangar20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 rounded"
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
                    className="text-zinc-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 rounded"
                    aria-label="Visit LinkedIn Profile"
                  >
                    <Linkedin size={20} aria-hidden="true" />
                  </a>

                  <a
                    href="mailto:yashdangar123@gmail.com"
                    className="text-zinc-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 rounded"
                    aria-label="Send Email to yashdangar123@gmail.com"
                  >
                    <Mail size={20} aria-hidden="true" />
                  </a>
                </nav>
              </section>

              <section
                className="flex flex-col w-full mb-8"
                aria-label="Projects"
              >
                <div className="flex items-center gap-4 mb-2 justify-between">
                  <h2 className="text-white text-md ms:text-md">Projects</h2>
                  
                  <Suspense fallback={<div className="h-10 bg-white/5 rounded animate-pulse w-32" />}>
                    <ProjectTabs />
                  </Suspense>
                </div>
              </section>
            </BlurFade>
          </Suspense>
        </div>
      </main>
    </>
  );
}
