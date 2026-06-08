"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  ShieldCheck, BrainCircuit, Code, Hexagon, Sparkles, 
  Mouse, Terminal, Globe, 
  Database, Server, Cpu, Cloud, Code2,
  Mail, Download, Activity, Map
} from "lucide-react";

export function HeroSection() {
  const [textIndex, setTextIndex] = useState(0);
  const titles = [
    "SOFTWARE DEVELOPER",
    "CYBERSECURITY ENGINEER",
    "AI & ML ENTHUSIAST",
    "FULL STACK DEVELOPER",
    "BLOCKCHAIN DEVELOPER"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const rolesList = [
    { icon: ShieldCheck, text: "Cybersecurity Engineer", color: "text-[#00E5FF]" },
    { icon: BrainCircuit, text: "AI & ML Enthusiast", color: "text-[#b026ff]" },
    { icon: Code, text: "Full Stack Developer", color: "text-[#ffaa00]" },
    { icon: Hexagon, text: "Blockchain Developer", color: "text-[#00E5FF]" },
    { icon: Sparkles, text: "Problem Solver | Innovator | Tech Explorer", color: "text-[#4ade80]" },
  ];

  // Glassmorphism styling variable based on the prompt
  const premiumGlass = "backdrop-blur-[10px] border border-[#00E5FF]/20 bg-[#050814]/40";

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#050814] font-mono">
      
      {/* Background Image - FULL CLARITY */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-[position:65%_center] bg-no-repeat"
        style={{ backgroundImage: `url('/anime_tech_hero_new.png')` }}
      />

      {/* Cinematic Blending Gradients */}
      {/* Darken the left side significantly so text is 100% readable, but leave right side perfectly clear */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#050814] via-[#050814]/80 to-transparent w-[65%]" />
      {/* Top/Bottom vignettes to blend edges */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#050814]/90 via-transparent to-[#050814]/90 opacity-80" />

      {/* GLOBAL HUD FRAME */}
      <div className="absolute inset-3 lg:inset-6 z-10 border border-[#00E5FF]/20 pointer-events-none rounded-sm" />
      <div className="absolute inset-3 lg:inset-6 z-10 border-t-2 border-l-2 border-[#00E5FF]/60 w-16 h-16 top-3 left-3 lg:top-6 lg:left-6 rounded-tl-sm pointer-events-none shadow-[inset_5px_5px_15px_rgba(0,229,255,0.2)]" />
      <div className="absolute inset-3 lg:inset-6 z-10 border-t-2 border-r-2 border-[#00E5FF]/60 w-16 h-16 top-3 right-3 lg:top-6 lg:right-6 rounded-tr-sm pointer-events-none shadow-[inset_-5px_5px_15px_rgba(0,229,255,0.2)]" />
      <div className="absolute inset-3 lg:inset-6 z-10 border-b-2 border-l-2 border-[#00E5FF]/60 w-16 h-16 bottom-3 left-3 lg:bottom-6 lg:left-6 rounded-bl-sm pointer-events-none shadow-[inset_5px_-5px_15px_rgba(0,229,255,0.2)]" />
      <div className="absolute inset-3 lg:inset-6 z-10 border-b-2 border-r-2 border-[#00E5FF]/60 w-16 h-16 bottom-3 right-3 lg:bottom-6 lg:right-6 rounded-br-sm pointer-events-none shadow-[inset_-5px_-5px_15px_rgba(0,229,255,0.2)]" />

      {/* --- HUD CONTENT AREA --- */}
      <div className="relative z-20 w-full h-full max-w-[1800px] mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pointer-events-none">
        
        {/* ================= LEFT COLUMN (40%) ================= */}
        <div className="lg:col-span-5 flex flex-col justify-center h-full pt-10 pointer-events-auto">
          
          {/* Top Status */}
          <div className="mb-4 flex flex-col gap-1 text-[10px] md:text-xs text-[#4ade80] font-bold tracking-widest uppercase">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#4ade80] rounded-full animate-pulse" />
              &gt; SYSTEM INITIALIZED...
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-transparent rounded-full" />
              &gt; WELCOME TO MY DIGITAL UNIVERSE
            </span>
          </div>

          {/* Hero Header */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-[100px] font-black tracking-tighter mb-2 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] font-sans leading-none"
          >
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00E5FF] to-[#0077ff] drop-shadow-[0_0_15px_rgba(0,229,255,0.5)]">
              Pranesh S
            </span>
          </motion.h1>

          {/* Subtitle Cycler */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-10 flex items-center mb-6"
          >
            <motion.p
              key={textIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="text-[14px] md:text-base text-gray-300 font-medium tracking-[0.4em] uppercase border-l-2 border-gray-500 pl-4"
            >
              | {titles[textIndex]} _
            </motion.p>
          </motion.div>

          {/* Roles List */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-2.5 mb-8"
          >
            {rolesList.map((role, i) => (
              <div key={i} className="flex items-center gap-3">
                <role.icon className={`w-4 h-4 ${role.color} drop-shadow-[0_0_5px_currentColor]`} />
                <span className={`text-[11px] md:text-xs font-semibold tracking-wider ${role.color}`}>{role.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-6"
          >
            <button className="px-8 py-3 bg-[#00E5FF] border border-[#00E5FF] text-black text-xs font-black tracking-[0.2em] uppercase hover:bg-white hover:border-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(0,229,255,0.4)] rounded-full flex items-center gap-2">
              &gt; ACCESS SYSTEM
            </button>
            <button className="px-8 py-3 bg-transparent border border-white/50 text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-md rounded-full flex items-center gap-2">
              VIEW PROJECTS &gt;
            </button>
          </motion.div>

          {/* System Status Pulse (EKG Line) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-6 w-[280px]"
          >
            <div className="flex items-center gap-3 mb-1">
              <span className="text-[9px] text-gray-400 tracking-[0.2em]">SYSTEM STATUS</span>
              <div className="flex-1 h-[20px] relative">
                {/* Simulated EKG SVG */}
                <svg viewBox="0 0 100 20" className="w-full h-full stroke-[#4ade80] fill-none stroke-[1.5px] opacity-70">
                  <polyline points="0,10 20,10 25,5 30,15 35,2 40,18 45,10 100,10" />
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#4ade80] rounded-full shadow-[0_0_5px_#4ade80] animate-pulse" />
              <span className="text-[10px] text-[#4ade80] tracking-wider font-bold">All Systems Operational</span>
            </div>
          </motion.div>

          {/* Social Links & Resume */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-3 mt-auto"
          >
            <a href="#" className="w-9 h-9 flex items-center justify-center border border-white/20 rounded-md hover:border-[#00E5FF] hover:text-[#00E5FF] transition-all text-white/70">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a href="#" className="w-9 h-9 flex items-center justify-center border border-white/20 rounded-md hover:border-[#00E5FF] hover:text-[#00E5FF] transition-all text-white/70">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" className="w-9 h-9 flex items-center justify-center border border-white/20 rounded-md hover:border-[#00E5FF] hover:text-[#00E5FF] transition-all text-white/70">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="#" className="w-9 h-9 flex items-center justify-center border border-white/20 rounded-md hover:border-[#00E5FF] hover:text-[#00E5FF] transition-all text-white/70">
              <Mail className="w-[16px] h-[16px]" />
            </a>
            <button className="h-9 px-5 ml-2 flex items-center justify-center gap-2 border border-white/20 rounded-md text-[10px] font-bold tracking-widest hover:border-[#00E5FF] hover:text-[#00E5FF] transition-all text-white/70">
              <Download className="w-3.5 h-3.5" />
              DOWNLOAD RESUME
            </button>
          </motion.div>

        </div>

        {/* ================= MIDDLE / BOTTOM PANELS ================= */}
        <div className="hidden lg:flex lg:col-span-3 flex-col justify-end items-center h-full pb-6 z-30 pointer-events-auto">
          
          {/* Current Focus Terminal */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className={`w-full max-w-[340px] p-4 rounded-lg mb-6 border border-[#00E5FF]/30 bg-[#050814]/60 backdrop-blur-md`}
          >
            <div className="text-[9px] text-[#00E5FF] tracking-[0.2em] uppercase mb-3">CURRENT FOCUS</div>
            <div className="space-y-1.5 text-[10px] text-[#00E5FF]/80">
              <div className="animate-[fade-in_1s_ease-in-out]">&gt; Building Secure Applications...</div>
              <div className="animate-[fade-in_2s_ease-in-out]">&gt; Training AI Models...</div>
              <div className="animate-[fade-in_3s_ease-in-out]">&gt; Exploring Blockchain...</div>
              <div className="animate-[fade-in_4s_ease-in-out]">&gt; Learning New Technologies...</div>
            </div>
            <div className="mt-4 flex justify-between text-[8px] text-gray-400 tracking-widest">
              <span>UPTIME: 100%</span>
              <span>FOCUS: MAXIMUM</span>
            </div>
          </motion.div>

          {/* Tech Stack Dock */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className={`w-full max-w-[340px] p-4 rounded-lg flex flex-col gap-3 border border-white/10 bg-[#050814]/60 backdrop-blur-md`}
          >
             <span className="text-[9px] text-gray-400 tracking-[0.2em] border-b border-white/10 pb-2">TECH STACK</span>
             <div className="flex items-center justify-between">
              {/* React */}
              <div className="w-6 h-6 flex items-center justify-center text-[#00E5FF] hover:scale-110 hover:shadow-[0_0_10px_#00E5FF] transition-all cursor-pointer"><Code2 className="w-5 h-5" /></div>
              {/* TS */}
              <div className="w-6 h-6 flex items-center justify-center text-blue-400 hover:scale-110 transition-all cursor-pointer"><Terminal className="w-5 h-5" /></div>
              {/* JS */}
              <div className="w-6 h-6 flex items-center justify-center text-yellow-400 hover:scale-110 transition-all cursor-pointer"><span className="text-[10px] font-black">JS</span></div>
              {/* Python */}
              <div className="w-6 h-6 flex items-center justify-center text-blue-300 hover:scale-110 transition-all cursor-pointer"><span className="text-[10px] font-black text-yellow-300">Py</span></div>
              {/* AWS */}
              <div className="w-6 h-6 flex items-center justify-center text-orange-400 hover:scale-110 transition-all cursor-pointer"><Cloud className="w-5 h-5" /></div>
              {/* Docker */}
              <div className="w-6 h-6 flex items-center justify-center text-blue-500 hover:scale-110 transition-all cursor-pointer"><Database className="w-5 h-5" /></div>
              {/* Ethereum */}
              <div className="w-6 h-6 flex items-center justify-center text-gray-300 hover:scale-110 transition-all cursor-pointer"><Hexagon className="w-5 h-5" /></div>
              <span className="text-[8px] text-gray-400 pl-1">+ MORE</span>
             </div>
          </motion.div>

        </div>

        {/* ================= RIGHT COLUMN (60%) ================= */}
        <div className="hidden lg:flex lg:col-span-4 flex-col justify-start items-end h-full gap-4 pt-8 z-30 pointer-events-auto">
          
          {/* Code Terminal */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className={`w-full max-w-[380px] p-4 rounded-lg ${premiumGlass}`}
          >
            <div className="flex justify-between items-center mb-3 border-b border-white/10 pb-2">
              <span className="text-[9px] text-gray-300 tracking-widest uppercase">CODE TERMINAL</span>
              <div className="flex gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
              </div>
            </div>
            <div className="text-[10px] text-[#00E5FF] mb-2 font-medium tracking-wide">Pranesh@DevSystem:~$ <span className="w-2 h-3 bg-white inline-block animate-pulse align-middle" /></div>
            <pre className="text-[10px] leading-relaxed">
              <code className="text-[#a78bfa]">const</code> <span className="text-[#60a5fa]">buildFuture</span> = <span className="text-[#a78bfa]">async</span> () {`=>`} {`{\n`}
              {`  `}<span className="text-[#a78bfa]">await</span> <span className="text-[#34d399]">innovate</span>();{`\n`}
              {`  `}<span className="text-[#a78bfa]">await</span> <span className="text-[#34d399]">secure</span>();{`\n`}
              {`  `}<span className="text-[#a78bfa]">await</span> <span className="text-[#34d399]">scale</span>();{`\n`}
              {`  `}<code className="text-[#a78bfa]">return</code> <span className="text-[#fca5a5]">"Building Solutions"</span>;{`\n`}
              {`}`}
            </pre>
          </motion.div>

          {/* GitHub Activity (GREEN GRAPH) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className={`w-full max-w-[380px] p-4 rounded-lg ${premiumGlass}`}
          >
            <div className="flex justify-between items-center mb-3 border-b border-white/10 pb-2">
              <span className="text-[9px] text-gray-300 tracking-widest uppercase">GITHUB ACTIVITY</span>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-4 text-center">
              <div>
                <div className="text-[8px] text-gray-400 uppercase tracking-widest">Total Repos</div>
                <div className="text-sm text-white font-bold font-sans">48</div>
              </div>
              <div>
                <div className="text-[8px] text-gray-400 uppercase tracking-widest">Commits</div>
                <div className="text-sm text-white font-bold font-sans">1,245</div>
              </div>
              <div>
                <div className="text-[8px] text-gray-400 uppercase tracking-widest">Contributions</div>
                <div className="text-sm text-white font-bold font-sans">732</div>
              </div>
            </div>
            {/* Simulated GREEN graph grid */}
            <div className="flex flex-wrap gap-[3px] justify-center">
              {[...Array(65)].map((_, i) => {
                // Green tones for GitHub
                const isHigh = i % 8 === 0 || i % 13 === 0 || i === 2;
                const isMed = i % 4 === 0 || i % 5 === 0;
                const colorClass = isHigh ? 'bg-[#39d353]' : isMed ? 'bg-[#0e4429]' : 'bg-[#161b22] border border-white/5';
                return (
                  <div 
                    key={i} 
                    className={`w-[10px] h-[10px] rounded-[2px] ${colorClass}`} 
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
            className={`w-full max-w-[380px] p-4 rounded-lg ${premiumGlass}`}
          >
            <div className="text-[9px] text-gray-300 tracking-widest mb-4 border-b border-white/10 pb-2 uppercase">SKILLS OVERVIEW</div>
            <div className="space-y-3">
              {[
                { name: "Frontend Development", value: 95 },
                { name: "Backend Development", value: 93 },
                { name: "Cybersecurity", value: 98 },
                { name: "AI / ML", value: 92 },
                { name: "DevOps", value: 90 },
                { name: "Problem Solving", value: 99 },
              ].map((skill, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="text-[9px] text-white/90 w-[110px] uppercase truncate font-medium">{skill.name}</div>
                  <div className="flex-1 h-1 bg-[#00E5FF]/20 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.value}%` }}
                      transition={{ duration: 1.5, delay: 1.5 }}
                      className="h-full bg-[#00E5FF]"
                    />
                  </div>
                  <div className="text-[9px] text-white w-6 text-right font-medium">{skill.value}%</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visitors Online */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
            className={`w-full max-w-[380px] p-4 rounded-lg relative overflow-hidden ${premiumGlass} flex items-center justify-between`}
          >
             <div>
                <div className="text-[9px] text-[#00E5FF] tracking-widest mb-1 uppercase">VISITORS ONLINE</div>
                <div className="text-2xl font-bold text-white tracking-wider">126</div>
                <div className="text-[8px] text-green-400 tracking-widest uppercase">Online Now</div>
             </div>
             <div className="relative w-[140px] h-[60px] opacity-60">
                <Map className="w-full h-full text-[#00E5FF]" />
                <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-[#00E5FF] rounded-full shadow-[0_0_5px_#00E5FF] animate-pulse" />
                <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-[#00E5FF] rounded-full shadow-[0_0_5px_#00E5FF] animate-pulse" />
                <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-[#00E5FF] rounded-full shadow-[0_0_5px_#00E5FF] animate-pulse" />
             </div>
          </motion.div>

        </div>

      </div>

      {/* Bottom Center: Scroll to Explore */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 pointer-events-none"
      >
        <Mouse className="w-4 h-4 text-gray-400 animate-bounce" />
        <span className="text-[9px] text-gray-400 tracking-[0.3em] uppercase">SCROLL TO EXPLORE</span>
      </motion.div>

    </section>
  );
}
