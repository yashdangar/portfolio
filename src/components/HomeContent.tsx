import Header from "@/components/Header";
import EducationBadge from "@/components/EducationBadge";
import WorkExperienceSection from "@/components/WorkExperience";
import ContactSection from "@/components/ContactSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function HomeContent() {
  return (
    <>
      <Header />
      <EducationBadge />
      <WorkExperienceSection />
      <ContactSection />
      <ProjectsSection />
    </>
  );
}

