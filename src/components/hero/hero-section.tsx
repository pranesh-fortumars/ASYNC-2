"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  Shield, Brain, Layers, Link as LinkIcon, Puzzle, 
  Mouse, Terminal, Globe, 
  Database, Server, Cpu, Cloud, Code2
} from "lucide-react";

export function HeroSection() {
  const [textIndex, setTextIndex] = useState(0);
  const titles = [
    "CYBERSECURITY ENGINEER",
    "FULL STACK DEVELOPER",
    "AI INNOVATOR",
    "SYSTEM ARCHITECT"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black font-mono">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-[position:60%_center] bg-no-repeat opacity-60 mix-blend-lighten"
        style={{ backgroundImage: `url('/anime_tech_hero_new.png')` }}
      />

      {/* Cyberpunk Vignette/Darken edges */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/95 via-black/40 to-black/90" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/80 via-transparent to-black/90" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.7)_100%)]" />

      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#00f0ff11_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff11_1px,transparent_1px)] bg-[size:40px_40px] mix-blend-overlay opacity-30" />

      {/* GLOBAL HUD FRAME */}
      <div className="absolute inset-4 z-10 border border-primary/20 pointer-events-none rounded-xl" />
      <div className="absolute inset-4 z-10 border-t-2 border-l-2 border-primary/60 w-16 h-16 top-4 left-4 rounded-tl-xl pointer-events-none shadow-[inset_5px_5px_15px_rgba(0,240,255,0.2)]" />
      <div className="absolute inset-4 z-10 border-t-2 border-r-2 border-primary/60 w-16 h-16 top-4 right-4 rounded-tr-xl pointer-events-none shadow-[inset_-5px_5px_15px_rgba(0,240,255,0.2)]" />
      <div className="absolute inset-4 z-10 border-b-2 border-l-2 border-primary/60 w-16 h-16 bottom-4 left-4 rounded-bl-xl pointer-events-none shadow-[inset_5px_-5px_15px_rgba(0,240,255,0.2)]" />
      <div className="absolute inset-4 z-10 border-b-2 border-r-2 border-primary/60 w-16 h-16 bottom-4 right-4 rounded-br-xl pointer-events-none shadow-[inset_-5px_-5px_15px_rgba(0,240,255,0.2)]" />

      {/* --- HUD CONTENT AREA --- */}
      <div className="relative z-20 w-full h-full max-w-[1600px] mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pointer-events-none">
        
        {/* ================= LEFT COLUMN ================= */}
        <div className="lg:col-span-5 flex flex-col justify-center h-full pt-10 pointer-events-auto">
          
          {/* Top Status */}
          <div className="mb-4 flex flex-col gap-2 text-[10px] md:text-xs text-primary/80 font-bold tracking-widest">
            <span className="flex items-center gap-2 border border-primary/20 bg-primary/10 w-fit px-3 py-1 rounded-sm">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              [ &gt; SYSTEM INITIALIZED... ]
            </span>
            <span className="text-secondary mt-2">
              &gt;&gt; SYSTEM ONLINE // LEVEL 99
            </span>
          </div>

          {/* Hero Header */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-2 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] font-sans"
          >
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary animate-[gradient_3s_linear_infinite] bg-[length:200%_auto]">
              Pranesh S
            </span>
          </motion.h1>

          {/* Subtitle Cycler */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-8 flex items-center mb-6"
          >
            <motion.p
              key={textIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="text-lg md:text-xl text-white font-bold tracking-[0.2em] uppercase border-l-4 border-secondary pl-3 drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]"
            >
              | {titles[textIndex]} &gt;
            </motion.p>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xs md:text-sm text-gray-400 mb-8 max-w-sm leading-relaxed font-sans"
          >
            Securing digital futures. Building intelligent solutions. Transforming ideas into scalable, secure & innovative systems.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <button className="px-6 py-2.5 bg-primary/20 border border-primary text-primary text-sm font-bold tracking-widest uppercase hover:bg-primary hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] backdrop-blur-md rounded-sm flex items-center gap-2">
              &gt; AWAKEN SYSTEM
            </button>
            <button className="px-6 py-2.5 bg-black/40 border border-white/20 text-white text-sm font-bold tracking-widest uppercase hover:bg-white/10 transition-colors backdrop-blur-md rounded-sm flex items-center gap-2">
              &gt; ACCESS LOGS
            </button>
          </motion.div>

          {/* Core Domains */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-4"
          >
            <h3 className="text-[9px] text-gray-500 tracking-[0.2em] mb-4">CORE DOMAINS</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Shield, label: "Cybersecurity" },
                { icon: Brain, label: "AI & ML" },
                { icon: Layers, label: "Full Stack" },
                { icon: LinkIcon, label: "Blockchain" },
                { icon: Puzzle, label: "Problem Solver" },
              ].map((domain, i) => (
                <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer pointer-events-auto">
                  <div className="w-10 h-10 flex items-center justify-center border border-primary/30 bg-black/50 rounded-lg group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-300 backdrop-blur-md">
                    <domain.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[8px] text-gray-400 text-center max-w-[45px] leading-tight uppercase group-hover:text-white transition-colors">{domain.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* ================= MIDDLE / BOTTOM PANEL ================= */}
        <div className="hidden lg:flex lg:col-span-4 flex-col justify-end items-center h-full pb-8">
          
          {/* Live Status Box */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="w-full max-w-[300px] border border-primary/40 bg-black/60 backdrop-blur-md p-4 rounded-sm shadow-[0_0_20px_rgba(0,240,255,0.1)] mb-6 pointer-events-auto"
          >
            <div className="flex items-center gap-2 border-b border-primary/20 pb-2 mb-3">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] text-green-400 tracking-widest uppercase">LIVE STATUS</span>
            </div>
            <div className="space-y-1.5 text-[10px] text-primary/80">
              <div className="animate-[fade-in_1s_ease-in-out]">&gt; Building Secure Systems...</div>
              <div className="animate-[fade-in_2s_ease-in-out]">&gt; Training AI Models...</div>
              <div className="animate-[fade-in_3s_ease-in-out]">&gt; Solving Real World Problems...</div>
              <div className="animate-[fade-in_4s_ease-in-out]">&gt; Innovating For Tomorrow...</div>
            </div>
            <div className="mt-4 pt-2 border-t border-primary/20 flex justify-between text-[8px] text-gray-500 tracking-widest">
              <span>UPTIME: 100%</span>
              <span>FOCUS: MAXIMUM</span>
            </div>
          </motion.div>

          {/* Tech Stack Icons Bottom Row */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex items-center justify-center gap-3 border border-white/10 bg-black/40 backdrop-blur-md px-5 py-2.5 rounded-sm pointer-events-auto"
          >
            <Code2 className="w-4 h-4 text-blue-400 hover:text-white transition-colors cursor-pointer" />
            <Terminal className="w-4 h-4 text-yellow-400 hover:text-white transition-colors cursor-pointer" />
            <Database className="w-4 h-4 text-green-400 hover:text-white transition-colors cursor-pointer" />
            <Server className="w-4 h-4 text-blue-300 hover:text-white transition-colors cursor-pointer" />
            <Cloud className="w-4 h-4 text-orange-400 hover:text-white transition-colors cursor-pointer" />
            <Cpu className="w-4 h-4 text-primary hover:text-white transition-colors cursor-pointer" />
            <span className="text-[9px] text-gray-400 ml-1 border-l border-white/20 pl-3">+ MORE</span>
          </motion.div>

        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="hidden lg:flex lg:col-span-3 flex-col justify-start items-end h-full gap-5 pt-8 pointer-events-auto">
          
          {/* Code Terminal */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="w-full border border-primary/30 bg-black/70 backdrop-blur-lg p-3 rounded-sm shadow-[0_0_20px_rgba(0,240,255,0.1)]"
          >
            <div className="flex justify-between items-center mb-2 border-b border-primary/20 pb-2">
              <span className="text-[9px] text-primary/80 tracking-widest">CODE TERMINAL</span>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
              </div>
            </div>
            <pre className="text-[10px] leading-relaxed">
              <code className="text-primary">const</code> <span className="text-blue-400">buildFuture</span> = <span className="text-primary">async</span> () {`=>`} {`{\n`}
              {`  `}<span className="text-primary">await</span> <span className="text-yellow-200">innovate</span>();{`\n`}
              {`  `}<span className="text-primary">await</span> <span className="text-yellow-200">secure</span>();{`\n`}
              {`  `}<span className="text-primary">await</span> <span className="text-yellow-200">scale</span>();{`\n`}
              {`  `}<code className="text-primary">return</code> <span className="text-green-400">"Building Solutions"</span>;{`\n`}
              {`}`}
            </pre>
          </motion.div>

          {/* GitHub Activity */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="w-full border border-white/10 bg-black/60 backdrop-blur-lg p-3 rounded-sm shadow-[0_0_15px_rgba(0,0,0,0.5)]"
          >
            <div className="flex justify-between items-center mb-3 border-b border-white/10 pb-2">
              <span className="text-[9px] text-gray-400 tracking-widest">GITHUB ACTIVITY</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-gray-400"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-3 text-center">
              <div>
                <div className="text-[8px] text-gray-500 uppercase tracking-widest">Total Repos</div>
                <div className="text-xs text-white font-bold font-sans">48</div>
              </div>
              <div>
                <div className="text-[8px] text-gray-500 uppercase tracking-widest">Commits</div>
                <div className="text-xs text-white font-bold font-sans">1,245</div>
              </div>
              <div>
                <div className="text-[8px] text-gray-500 uppercase tracking-widest">Contributions</div>
                <div className="text-xs text-white font-bold font-sans">732</div>
              </div>
            </div>
            {/* Simulated graph grid */}
            <div className="flex flex-wrap gap-[3px]">
              {[...Array(44)].map((_, i) => {
                const isHigh = i % 7 === 0 || i % 11 === 0 || i === 2;
                const isMed = i % 3 === 0 || i % 5 === 0;
                const colorClass = isHigh ? 'bg-primary shadow-[0_0_5px_rgba(0,240,255,0.8)]' : isMed ? 'bg-primary/40' : 'bg-white/10';
                return (
                  <div 
                    key={i} 
                    className={`w-2 h-2 rounded-[1px] ${colorClass}`} 
                  />
                );
              })}
            </div>
          </motion.div>

          {/* Skills Overview */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="w-full border border-white/10 bg-black/60 backdrop-blur-lg p-3 rounded-sm shadow-[0_0_15px_rgba(0,0,0,0.5)]"
          >
            <div className="text-[9px] text-gray-400 tracking-widest mb-3 border-b border-white/10 pb-2">SKILLS OVERVIEW</div>
            <div className="space-y-2.5">
              {[
                { name: "Cybersecurity", value: 98 },
                { name: "AI / ML", value: 92 },
                { name: "Full Stack Dev", value: 97 },
                { name: "Blockchain", value: 88 },
                { name: "Problem Solving", value: 99 },
              ].map((skill, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="text-[8px] text-gray-400 w-[80px] uppercase truncate font-bold tracking-wider">{skill.name}</div>
                  <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.value}%` }}
                      transition={{ duration: 1.5, delay: 1.5 }}
                      className="h-full bg-primary shadow-[0_0_10px_rgba(0,240,255,0.8)]"
                    />
                  </div>
                  <div className="text-[8px] text-primary w-5 text-right font-bold">{skill.value}%</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>

      {/* Bottom Left Corner: Scroll to Explore */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 z-20 flex items-center gap-3 pointer-events-none"
      >
        <Mouse className="w-4 h-4 text-gray-500 animate-bounce" />
        <div className="flex flex-col gap-1">
          <span className="text-[8px] text-gray-500 tracking-[0.2em]">SCROLL TO EXPLORE</span>
          <div className="w-24 h-[1px] bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-1/3 h-full bg-primary shadow-[0_0_10px_rgba(0,240,255,0.8)]"
            />
          </div>
        </div>
      </motion.div>

      {/* Bottom Right Corner: Globe */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden lg:flex absolute bottom-6 right-6 lg:bottom-10 lg:right-10 z-20 items-center justify-center pointer-events-none"
      >
        <div className="relative flex items-center justify-center w-20 h-20">
          <Globe className="absolute w-12 h-12 text-primary/30 animate-[spin_10s_linear_infinite]" />
          <div className="absolute w-full h-full border border-primary/20 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]" />
          <span className="absolute bottom-1 text-[7px] text-primary tracking-[0.2em] text-center w-20 leading-tight bg-black/80 px-1 py-0.5 backdrop-blur-sm border border-primary/40 rounded-sm">
            CONNECTED<br/>GLOBALLY
          </span>
        </div>
      </motion.div>

    </section>
  );
}
