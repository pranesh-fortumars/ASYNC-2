import { Navbar } from "@/components/navigation/navbar";
import { HeroSection } from "@/components/hero/hero-section";
import { ParticleBackground } from "@/components/hero/particle-background";
import { AboutSection } from "@/components/about/about-section";
import { GithubAnalytics } from "@/components/github/github-analytics";
import { SkillsSection } from "@/components/skills/skills-galaxy";
import { CyberLabSection } from "@/components/cyber/cyber-lab";
import { ExperienceSection } from "@/components/experience/experience-section";
import { CertificationsSection } from "@/components/certifications/certifications-section";
import { ProjectsSection } from "@/components/projects/projects-section";
import { TechSphereSection } from "@/components/tech/tech-sphere";
import { AchievementsSection } from "@/components/achievements/achievements-section";
import { MindGraphSection } from "@/components/mind/mind-graph";
import { ContactSection } from "@/components/contact/contact-section";
import { PageLoader } from "@/components/layout/page-loader";
import { AiTerminal } from "@/components/terminal/ai-terminal";

export default function Home() {
  return (
    <>
      <PageLoader />
      <AiTerminal />
      <main className="relative min-h-screen flex flex-col bg-transparent text-white selection:bg-primary/30 overflow-x-hidden">
        <ParticleBackground />
        <Navbar />
        
        <HeroSection />
        <AboutSection />
        <GithubAnalytics />
        <SkillsSection />
        <CyberLabSection />
        <ExperienceSection />
        <CertificationsSection />
        <ProjectsSection />
        <TechSphereSection />
        <AchievementsSection />
        <MindGraphSection />
        <ContactSection />
      </main>
    </>
  );
}
