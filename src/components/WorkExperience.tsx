import { MapPin, Calendar } from "lucide-react";

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
    id: "exp-0",
    company: "Techlab solution",
    role: "Mern Stack Developer Intern",
    location: "Onsite",
    startDate: "Jan 2026",
    endDate: "Apr 2026",
    companyUrl: "https://www.techlabsolution.com/",
  },
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
    endDate: "Jul 2025",
    companyUrl: "https://buffindia.com",
  },
];

export default function WorkExperienceSection() {
  return (
    <section className="mb-8" aria-label="Work Experience">
      <h2 className="text-white text-md mb-5">Experience</h2>
      <div className="relative">
        <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/20 via-white/10 to-transparent"></div>
        <div className="space-y-8">
          {workExperiences.map((exp) => (
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
  );
}

