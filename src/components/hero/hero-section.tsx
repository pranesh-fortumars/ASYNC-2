"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Cpu, Shield, Code2, Database } from "lucide-react";

export function HeroSection() {
  const [textIndex, setTextIndex] = useState(0);
  const titles = [
    "Full Stack Software Developer",
    "System Architect",
    "Cybersecurity Engineer",
    "AI Innovator",
    "Blockchain Developer",
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

  // Floating tech icons configuration scattered globally
  const floatingIcons = [
    { Icon: Shield, x: "10%", y: "15%", delay: 0 },
    { Icon: Cpu, x: "85%", y: "20%", delay: 0.5 },
    { Icon: Code2, x: "45%", y: "85%", delay: 1 },
    { Icon: Database, x: "75%", y: "75%", delay: 1.5 },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10 bg-black">
      
      {/* 1. Global Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-no-repeat opacity-80"
        style={{ 
          backgroundImage: `url('/anime_tech_hero.png')`,
          backgroundPosition: '80% center', // Keeps character on the right
        }}
      />

      {/* 2. Global Gradients for Blending & Readability */}
      {/* Left dark gradient for text */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      {/* Top and Bottom fade to blend with next/prev sections */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/80 via-transparent to-black" />

      {/* 3. Atmospheric Fog / Neon Glow */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen z-0 pointer-events-none"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 left-1/3 w-[800px] h-[400px] bg-blue-900/30 rounded-[100%] blur-[100px] mix-blend-screen z-0 pointer-events-none"
        animate={{ opacity: [0.2, 0.5, 0.2], x: ["-50px", "50px", "-50px"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 4. Global Floating Tech Icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute z-10 text-primary/60 backdrop-blur-sm bg-black/30 p-4 rounded-xl border border-primary/20 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: ["-15px", "15px", "-15px"],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          <item.Icon size={28} />
        </motion.div>
      ))}

      {/* 5. Global Floating HUD Elements */}
      {/* Floating Holographic Panel (Moved to top-center) */}
      <motion.div 
        className="absolute top-24 left-1/2 -translate-x-1/2 lg:left-[45%] z-10 w-56 bg-black/60 backdrop-blur-xl border border-primary/40 rounded-lg p-4 font-mono text-[10px] text-primary/80 overflow-hidden shadow-[0_0_20px_rgba(0,240,255,0.2)]"
        animate={{ y: ["10px", "-10px", "10px"], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="border-b border-primary/30 pb-2 mb-2">NEURAL_LINK: ACTIVE</div>
        <div className="opacity-50">Initializing subsystems...</div>
        <div className="opacity-50">Scanning vulnerabilities...</div>
        <div className="text-secondary mt-2 animate-pulse">[ALERT] Intrusion detected.</div>
      </motion.div>

      {/* Floating Code Editor 1: TS (Moved to mid-left background) */}
      <motion.div 
        className="hidden md:block absolute top-[40%] left-[5%] z-10 w-64 bg-black/70 backdrop-blur-md border border-white/10 rounded-lg p-4 font-mono text-[11px] shadow-[0_0_30px_rgba(0,0,0,0.8)]"
        animate={{ y: ["-15px", "15px", "-15px"], rotate: [-2, 2, -2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="flex gap-1.5 mb-3">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <pre className="text-white/80 leading-relaxed">
          <code className="text-primary">const</code> <span className="text-blue-400">buildFuture</span> = <span className="text-primary">async</span> () {`=>`} {`{\n`}
          {`  `}<span className="text-primary">await</span> <span className="text-yellow-200">innovate</span>();{`\n`}
          {`  `}<span className="text-primary">await</span> <span className="text-yellow-200">secure</span>();{`\n`}
          {`  `}<span className="text-primary">await</span> <span className="text-yellow-200">scale</span>();{`\n`}
          {`}`}
        </pre>
      </motion.div>

      {/* Floating Code Editor 2: Python (Right side, interacting with character) */}
      <motion.div 
        className="absolute bottom-40 right-4 lg:right-20 z-10 w-64 bg-black/80 backdrop-blur-md border border-primary/20 rounded-lg p-4 font-mono text-[11px] shadow-[0_0_30px_rgba(0,240,255,0.15)]"
        animate={{ y: ["15px", "-15px", "15px"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <div className="flex gap-1.5 mb-3">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <pre className="text-white/80 leading-relaxed">
          <code className="text-secondary">class</code> <span className="text-blue-400">AIEngineer</span>:{`\n`}
          {`  `}<code className="text-secondary">def</code> <span className="text-yellow-200">innovate</span>(self):{`\n`}
          {`    `}<code className="text-primary">return</code> <span className="text-green-400">"Building Solutions"</span>
        </pre>
      </motion.div>


      {/* Main Content Area */}
      <div className="relative z-20 w-full max-w-7xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pointer-events-none">
        
        {/* Left Content Column */}
        <div className="flex flex-col items-start justify-center text-left pointer-events-auto">
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
              className="text-2xl md:text-3xl text-white/80 font-mono tracking-wider uppercase border-l-4 border-secondary pl-4 drop-shadow-md"
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
            <button className="px-8 py-4 rounded-lg bg-black/40 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors border border-white/20 backdrop-blur-md">
              Access Logs
            </button>
          </motion.div>
        </div>

        {/* Right column is now empty in the grid, serving as a spacer so the text doesn't overlap the character's body */}
        <div className="hidden lg:block h-[500px] w-full" />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none"
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
