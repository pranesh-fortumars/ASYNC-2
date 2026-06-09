/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import { CinematicIntro } from "@/components/intro/cinematic-intro";
import { Navbar } from "@/components/navigation/navbar";
import { HeroSection } from "@/components/hero/hero-section";
import { DevMetricsSection } from "@/components/metrics/dev-metrics";
import { ParticleBackground } from "@/components/hero/particle-background";
import { AboutSection } from "@/components/about/about-section";
import { PageLoader } from "@/components/layout/page-loader";
import { AiTerminal } from "@/components/terminal/ai-terminal";
import { CyberTickerSection } from "@/components/ui/cyber-ticker";
import dynamic from "next/dynamic";

const GithubAnalytics = dynamic(() => import("@/components/github/github-analytics").then(mod => mod.GithubAnalytics));
const TechEcosystemSection = dynamic(() => import("@/components/architecture/tech-ecosystem").then(mod => mod.TechEcosystemSection));
const SystemDesignSection = dynamic(() => import("@/components/architecture/system-design").then(mod => mod.SystemDesignSection));
const SkillsSection = dynamic(() => import("@/components/skills/skills-galaxy").then(mod => mod.SkillsSection), { ssr: false });
const CyberLabSection = dynamic(() => import("@/components/cyber/cyber-lab").then(mod => mod.CyberLabSection));
const ExperienceSection = dynamic(() => import("@/components/experience/experience-section").then(mod => mod.ExperienceSection));
const CertificationsSection = dynamic(() => import("@/components/certifications/certifications-section").then(mod => mod.CertificationsSection));
const ProjectsSection = dynamic(() => import("@/components/projects/projects-section").then(mod => mod.ProjectsSection));
const TechSphereSection = dynamic(() => import("@/components/tech/tech-sphere").then(mod => mod.TechSphereSection), { ssr: false });
const AchievementsSection = dynamic(() => import("@/components/achievements/achievements-section").then(mod => mod.AchievementsSection));
const MindGraphSection = dynamic(() => import("@/components/mind/mind-graph").then(mod => mod.MindGraphSection));
const ContactSection = dynamic(() => import("@/components/contact/contact-section").then(mod => mod.ContactSection));

export default function Home() {
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <>
      {!isIntroComplete && (
        <CinematicIntro onComplete={() => setIsIntroComplete(true)} />
      )}
      
      {isIntroComplete && (
        <>
          <PageLoader />
          <AiTerminal />
          <main className="relative min-h-screen flex flex-col bg-transparent text-white selection:bg-primary/30 overflow-x-hidden">
            <ParticleBackground />
            <Navbar />
            
            <HeroSection />
            <CyberTickerSection />
            <DevMetricsSection />
            <AboutSection />
            <GithubAnalytics />
            <CyberTickerSection />
            <TechEcosystemSection />
            <SystemDesignSection />
            <SkillsSection />
            <CyberLabSection />
            <ExperienceSection />
            <CertificationsSection />
            <ProjectsSection />
            <CyberTickerSection />
            <TechSphereSection />
            <AchievementsSection />
            <MindGraphSection />
            <ContactSection />
          </main>
        </>
      )}
    </>
  );
}
