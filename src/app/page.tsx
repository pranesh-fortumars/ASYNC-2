import { Navbar } from "@/components/navigation/navbar";
import { HeroSection } from "@/components/hero/hero-section";
import { AboutSection } from "@/components/about/about-section";
import { SkillsSection } from "@/components/skills/skills-galaxy";
import { ExperienceSection } from "@/components/experience/experience-section";
import { CertificationsSection } from "@/components/certifications/certifications-section";
import { ProjectsSection } from "@/components/projects/projects-section";
import { TechSphereSection } from "@/components/tech/tech-sphere";
import { AchievementsSection } from "@/components/achievements/achievements-section";
import { ContactSection } from "@/components/contact/contact-section";
import { PageLoader } from "@/components/layout/page-loader";
import { AiTerminal } from "@/components/terminal/ai-terminal";

export default function Home() {
  return (
    <>
      <PageLoader />
      <AiTerminal />
      <main className="relative min-h-screen flex flex-col bg-black text-white selection:bg-primary/30 overflow-x-hidden">
        <Navbar />
        
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ProjectsSection />
        <TechSphereSection />
        <AchievementsSection />
        <ContactSection />
      </main>
    </>
  );
}
