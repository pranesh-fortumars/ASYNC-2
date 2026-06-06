"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Cpu, Shield, Code2, Database } from "lucide-react";

export function HeroSection() {
  const [textIndex, setTextIndex] = useState(0);
  const titles = [
    "Cybersecurity Engineer",
    "AI Developer",
    "Full Stack Developer",
    "Blockchain Enthusiast",
    "Futuristic Innovator",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Floating tech icons configuration
  const floatingIcons = [
    { Icon: Shield, x: "10%", y: "20%", delay: 0 },
    { Icon: Cpu, x: "85%", y: "30%", delay: 0.5 },
    { Icon: Code2, x: "15%", y: "70%", delay: 1 },
    { Icon: Database, x: "80%", y: "80%", delay: 1.5 },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
      <div className="relative z-10 w-full max-w-7xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content Column */}
        <div className="flex flex-col items-start justify-center text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.2)]"
          >
            <span className="text-sm font-medium tracking-wide uppercase text-primary animate-pulse">
              System Online // Level 99
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          >
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary animate-[gradient_3s_linear_infinite] bg-[length:200%_auto]">
              Pranesh S
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-12 flex items-center justify-start mb-8 overflow-hidden"
          >
            <motion.p
              key={textIndex}
              initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(5px)" }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl text-white/80 font-mono tracking-wider uppercase border-l-4 border-secondary pl-4"
            >
              {titles[textIndex]}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button className="relative px-8 py-4 rounded-lg bg-primary text-black font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] overflow-hidden group">
              <span className="relative z-10">Awaken System</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
            </button>
            <button className="px-8 py-4 rounded-lg bg-white/5 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors border border-white/20 backdrop-blur-md">
              Access Logs
            </button>
          </motion.div>
        </div>

        {/* Right Character Column */}
        <div className="relative h-[500px] lg:h-[700px] w-full flex items-center justify-center">
          
          {/* Floating Tech Icons */}
          {floatingIcons.map((item, i) => (
            <motion.div
              key={i}
              className="absolute z-20 text-primary/50 backdrop-blur-sm bg-black/20 p-3 rounded-xl border border-primary/20"
              style={{ left: item.x, top: item.y }}
              animate={{
                y: ["-10px", "10px", "-10px"],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay,
              }}
            >
              <item.Icon size={24} />
            </motion.div>
          ))}

          {/* Glowing Aura Behind Character */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/20 rounded-full blur-[100px] z-0"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Anime-Tech Character Placeholder */}
          <motion.div
            className="relative z-10 w-full h-full"
            animate={{ y: ["-15px", "15px", "-15px"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* The actual image */}
            <div 
              className="w-full h-full bg-contain bg-center bg-no-repeat drop-shadow-[0_0_30px_rgba(0,240,255,0.4)] mix-blend-lighten"
              style={{ 
                backgroundImage: `url('/anime_tech_hero.png')`,
                maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
                WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)"
              }}
            />

            {/* Simulated Eye Glow / Cybernetic HUD overlay on character */}
            <motion.div 
              className="absolute top-[40%] left-[55%] w-4 h-4 bg-primary rounded-full blur-[4px]"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Floating Holographic Panels */}
          <motion.div 
            className="absolute bottom-10 -left-10 z-20 w-48 h-32 bg-black/60 backdrop-blur-xl border border-primary/40 rounded-lg p-4 font-mono text-[10px] text-primary/80 overflow-hidden shadow-[0_0_20px_rgba(0,240,255,0.2)]"
            animate={{ y: ["5px", "-5px", "5px"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="border-b border-primary/30 pb-2 mb-2">NEURAL_LINK: ACTIVE</div>
            <div className="opacity-50">Initializing subsystems...</div>
            <div className="opacity-50">Scanning vulnerabilities...</div>
            <div className="text-secondary mt-2">[ALERT] Intrusion detected.</div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-xs font-mono uppercase tracking-widest text-primary animate-pulse">Initiate</span>
        <motion.div
          animate={{ height: ["0px", "30px", "0px"], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[2px] bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
}
