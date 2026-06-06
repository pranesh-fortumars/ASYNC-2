"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Cybersecurity Intern",
    company: "Shadow Fox",
    duration: "2023 - Present",
    achievements: [
      "Conducted vulnerability assessments.",
      "Assisted in penetration testing.",
    ],
    tech: ["Kali Linux", "Burp Suite", "Metasploit"],
  },
  {
    role: "Security Researcher",
    company: "NAS IO",
    duration: "2022 - 2023",
    achievements: [
      "Identified and reported security flaws in web applications.",
      "Developed custom security tools.",
    ],
    tech: ["Python", "OWASP", "Bash"],
  },
  {
    role: "Intern",
    company: "CFCS2R",
    duration: "2021 - 2022",
    achievements: [
      "Participated in threat modeling and risk assessments.",
      "Learned advanced network security concepts.",
    ],
    tech: ["Wireshark", "Nmap", "Security+"],
  },
  {
    role: "Robotics Developer",
    company: "Niqo Robotics",
    duration: "2020 - 2021",
    achievements: [
      "Worked on computer vision algorithms for robotic navigation.",
      "Integrated machine learning models into embedded systems.",
    ],
    tech: ["C++", "OpenCV", "ROS"],
  },
];

export function ExperienceSection() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full min-h-screen py-32 px-4 flex flex-col items-center bg-transparent"
    >
      {/* Background Effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center sm:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Career <span className="text-accent">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-transparent mx-auto sm:mx-0" />
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Background */}
          <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2" />
          
          {/* Animated Scroll Progress Line */}
          <motion.div 
            className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-[2px] bg-accent -translate-x-1/2 origin-top shadow-[0_0_10px_rgba(122,0,255,0.8)]"
            style={{ scaleY }}
          />

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col sm:flex-row items-center w-full mb-16 ${
                  isEven ? "sm:justify-start" : "sm:justify-end"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 sm:left-1/2 w-4 h-4 bg-black border-2 border-accent rounded-full -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(122,0,255,0.6)]" />

                {/* Content Card */}
                <div
                  className={`w-full sm:w-[45%] ml-8 sm:ml-0 ${
                    isEven ? "sm:pr-12" : "sm:pl-12"
                  }`}
                >
                  <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-accent/50 transition-all group">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                        {exp.role}
                      </h3>
                      <span className="text-sm font-mono text-accent/80 mt-1 sm:mt-0">
                        {exp.duration}
                      </span>
                    </div>

                    <h4 className="text-lg text-white/80 font-medium mb-4">
                      {exp.company}
                    </h4>

                    <ul className="list-disc list-inside space-y-2 text-white/60 text-sm mb-6">
                      {exp.achievements.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent/90 border border-accent/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
