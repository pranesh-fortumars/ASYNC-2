"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { 
  Mouse, Terminal, 
  Database, Cloud, Code2,
  Mail, Download, Activity, Map, Hexagon
} from "lucide-react";
import { heroData } from "@/data/portfolio";

export function HeroSection() {
  const [textIndex, setTextIndex] = useState(0);
  const [visitors, setVisitors] = useState(126);
  const [typedCode, setTypedCode] = useState("");
  const constraintsRef = useRef(null);

  // Parallax Mouse Tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const backgroundX = useTransform(smoothMouseX, [-0.5, 0.5], ["-3%", "3%"]);
  const backgroundY = useTransform(smoothMouseY, [-0.5, 0.5], ["-3%", "3%"]);
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = clientX / innerWidth - 0.5;
    const y = clientY / innerHeight - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Title Cycler
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % heroData.titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Live Visitors Simulator
  useEffect(() => {
    const vInterval = setInterval(() => {
      setVisitors(prev => {
        const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
        return Math.max(100, prev + change); // never go below 100
      });
    }, 3500);
    return () => clearInterval(vInterval);
  }, []);

  // Terminal Typing Effect
  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      setTypedCode(heroData.codeTerminal.slice(0, i));
      i++;
      if (i > heroData.codeTerminal.length) clearInterval(typeInterval);
    }, 40);
    return () => clearInterval(typeInterval);
  }, []);

  const premiumGlass = "relative overflow-hidden backdrop-blur-2xl border border-[#00E5FF]/30 bg-[#02040a]/70 hover:bg-[#000000]/90 transition-all duration-500 shadow-[inset_0_0_20px_rgba(0,229,255,0.05),0_8px_32px_rgba(0,0,0,0.8)] hover:shadow-[inset_0_0_30px_rgba(0,229,255,0.1),0_10px_40px_rgba(0,229,255,0.15)] group";

  return (
    <section 
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#050814] font-mono" 
      ref={constraintsRef}
      onMouseMove={handleMouseMove}
      style={{ perspective: "1000px" }}
    >
      
      {/* Background Image with Pseudo-3D Parallax, Breathing, and Soft Edge Masking */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ 
          scale: [1, 1.02, 1], 
          opacity: 1 
        }}
        transition={{ 
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 1.5, ease: "easeOut" }
        }}
        className="absolute inset-0 z-0 bg-[length:100%_100%] md:bg-[length:100%_auto] lg:bg-[length:80%_auto] bg-[position:bottom_right] md:bg-[position:right_center] bg-no-repeat pointer-events-none"
        style={{ 
          backgroundImage: `url('/cyberpunk_developer_hero.png')`,
          x: backgroundX,
          y: backgroundY,
          rotateX,
          rotateY,
          WebkitMaskImage: "radial-gradient(circle at 75% 50%, black 35%, transparent 75%)",
          maskImage: "radial-gradient(circle at 75% 50%, black 35%, transparent 75%)"
        }}
      />

      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#02040a] via-[#02040a]/90 to-transparent w-[65%]" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#02040a]/90 via-transparent to-[#02040a]/90 opacity-90" />

      {/* GLOBAL HUD FRAME */}
      <div className="absolute inset-3 lg:inset-6 z-10 border border-[#00E5FF]/20 pointer-events-none rounded-sm" />
      <div className="absolute inset-3 lg:inset-6 z-10 border-t-2 border-l-2 border-[#00E5FF]/60 w-16 h-16 top-3 left-3 lg:top-6 lg:left-6 rounded-tl-sm pointer-events-none shadow-[inset_5px_5px_15px_rgba(0,229,255,0.2)]" />
      <div className="absolute inset-3 lg:inset-6 z-10 border-t-2 border-r-2 border-[#00E5FF]/60 w-16 h-16 top-3 right-3 lg:top-6 lg:right-6 rounded-tr-sm pointer-events-none shadow-[inset_-5px_5px_15px_rgba(0,229,255,0.2)]" />
      <div className="absolute inset-3 lg:inset-6 z-10 border-b-2 border-l-2 border-[#00E5FF]/60 w-16 h-16 bottom-3 left-3 lg:bottom-6 lg:left-6 rounded-bl-sm pointer-events-none shadow-[inset_5px_-5px_15px_rgba(0,229,255,0.2)]" />
      <div className="absolute inset-3 lg:inset-6 z-10 border-b-2 border-r-2 border-[#00E5FF]/60 w-16 h-16 bottom-3 right-3 lg:bottom-6 lg:right-6 rounded-br-sm pointer-events-none shadow-[inset_-5px_-5px_15px_rgba(0,229,255,0.2)]" />

      {/* --- HUD CONTENT AREA --- */}
      <div className="relative z-20 w-full h-full max-w-[1800px] mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pointer-events-none">
        
        {/* ================= LEFT COLUMN ================= */}
        <div className="lg:col-span-5 flex flex-col justify-center h-full pt-10 pointer-events-auto">
          
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

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-[100px] font-black tracking-tighter mb-2 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] font-sans leading-none cursor-default"
            whileHover={{ scale: 1.02, textShadow: "0px 0px 30px rgba(0,229,255,0.8)" }}
          >
            Hi, I&apos;m <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00E5FF] to-[#0077ff] drop-shadow-[0_0_15px_rgba(0,229,255,0.5)]">
              {heroData.name}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-10 flex items-center mb-6"
          >
            <motion.p
              key={textIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-[14px] md:text-base text-gray-300 font-medium tracking-[0.4em] uppercase border-l-2 border-gray-500 pl-4 bg-[#02040a]/60 pr-4 py-1 rounded-r-md backdrop-blur-sm"
            >
              | {heroData.titles[textIndex]} <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }}>_</motion.span>
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-2.5 mb-8"
          >
            {heroData.roles.map((role) => (
              <motion.div 
                key={role.id} 
                whileHover={{ x: 10, scale: 1.05 }}
                className="flex items-center gap-3 cursor-default"
              >
                <role.icon className={`w-4 h-4 ${role.color} drop-shadow-[0_0_5px_currentColor]`} />
                <span className={`text-[11px] md:text-xs font-semibold tracking-wider ${role.color} bg-[#02040a]/60 px-2 py-0.5 rounded backdrop-blur-sm`}>{role.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-6"
          >
            <motion.button 
              aria-label="Access System"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,229,255,0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#00E5FF] border border-[#00E5FF] text-black text-xs font-black tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(0,229,255,0.4)] rounded-full flex items-center gap-2"
            >
              &gt; ACCESS SYSTEM
            </motion.button>
            <motion.button 
              aria-label="View Projects"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)", borderColor: "#fff" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#02040a]/80 border border-white/50 text-white text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 backdrop-blur-md rounded-full flex items-center gap-2 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            >
              VIEW PROJECTS &gt;
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-6 w-[280px] bg-[#02040a]/80 p-3 rounded-lg border border-white/10 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
          >
            <div className="flex items-center gap-3 mb-1">
              <span className="text-[9px] text-gray-400 tracking-[0.2em]">SYSTEM STATUS</span>
              <div className="flex-1 h-[20px] relative overflow-hidden">
                <motion.svg 
                  viewBox="0 0 100 20" 
                  className="w-full h-full stroke-[#4ade80] fill-none stroke-[1.5px] opacity-70"
                >
                  <motion.polyline 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    points="0,10 20,10 25,5 30,15 35,2 40,18 45,10 100,10" 
                  />
                </motion.svg>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#4ade80] rounded-full shadow-[0_0_5px_#4ade80] animate-pulse" />
              <span className="text-[10px] text-[#4ade80] tracking-wider font-bold">{heroData.systemStatus}</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-3 mt-auto"
          >
            {[
              <svg key="1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>,
              <svg key="2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
              <svg key="3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>,
              <Mail key="4" className="w-[16px] h-[16px]" />
            ].map((icon, idx) => (
              <motion.a 
                key={idx}
                href="#" 
                aria-label={`Social link ${idx + 1}`}
                whileHover={{ scale: 1.1, y: -5, borderColor: "#00E5FF", color: "#00E5FF", boxShadow: "0 0 15px rgba(0,229,255,0.4)" }}
                className="w-9 h-9 flex items-center justify-center border border-white/20 bg-[#02040a]/80 backdrop-blur-md rounded-md transition-colors text-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
              >
                {icon}
              </motion.a>
            ))}
            <motion.button 
              aria-label="Download Resume"
              whileHover={{ scale: 1.05, borderColor: "#00E5FF", color: "#00E5FF", boxShadow: "0 0 15px rgba(0,229,255,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="h-9 px-5 ml-2 flex items-center justify-center gap-2 border border-white/20 bg-[#02040a]/80 backdrop-blur-md rounded-md text-[10px] font-bold tracking-widest transition-colors text-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            >
              <Download className="w-3.5 h-3.5" />
              DOWNLOAD RESUME
            </motion.button>
          </motion.div>

        </div>

        {/* ================= MIDDLE / BOTTOM PANELS ================= */}
        <div className="hidden lg:flex lg:col-span-3 flex-col justify-end items-center h-full pb-6 z-30 pointer-events-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,229,255,0.3)" }}
            className={`w-full max-w-[340px] p-4 rounded-lg mb-6 border border-[#00E5FF]/30 bg-[#02040a]/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] cursor-default transition-all`}
          >
            <div className="text-[9px] text-[#00E5FF] tracking-[0.2em] uppercase mb-3 flex items-center gap-2">
              <Activity className="w-3 h-3 animate-spin-slow" /> CURRENT FOCUS
            </div>
            <div className="space-y-1.5 text-[10px] text-[#00E5FF]/80">
              {heroData.focusAreas.map((area, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5 + (idx * 0.3) }}>&gt; {area}</motion.div>
              ))}
            </div>
            <div className="mt-4 flex justify-between text-[8px] text-gray-400 tracking-widest">
              <span>UPTIME: 100%</span>
              <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 2 }}>FOCUS: MAXIMUM</motion.span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className={`w-full max-w-[340px] p-4 rounded-lg flex flex-col gap-3 border border-white/10 bg-[#02040a]/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]`}
          >
             <span className="text-[9px] text-gray-400 tracking-[0.2em] border-b border-white/10 pb-2">TECH STACK (DRAGGABLE)</span>
             <div className="flex items-center justify-between">
              {[
                { icon: <Code2 className="w-5 h-5" />, color: "text-[#00E5FF]", rotate: -8 },
                { icon: <Terminal className="w-5 h-5" />, color: "text-blue-400", rotate: 5 },
                { icon: <span className="text-[10px] font-black">JS</span>, color: "text-yellow-400", rotate: -4 },
                { icon: <span className="text-[10px] font-black">Py</span>, color: "text-blue-300", rotate: 7 },
                { icon: <Cloud className="w-5 h-5" />, color: "text-orange-400", rotate: -6 },
                { icon: <Database className="w-5 h-5" />, color: "text-blue-500", rotate: 9 },
                { icon: <Hexagon className="w-5 h-5" />, color: "text-gray-300", rotate: -3 },
              ].map((tech, idx) => (
                <motion.div 
                  key={idx}
                  drag 
                  dragConstraints={constraintsRef}
                  dragElastic={0.2}
                  whileDrag={{ scale: 1.5, zIndex: 50, cursor: "grabbing" }}
                  whileHover={{ scale: 1.2, rotate: tech.rotate }}
                  className={`w-6 h-6 flex items-center justify-center ${tech.color} cursor-grab`}
                >
                  {tech.icon}
                </motion.div>
              ))}
              <span className="text-[8px] text-gray-400 pl-1">+ MORE</span>
             </div>
          </motion.div>

        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="hidden lg:flex lg:col-span-4 flex-col justify-start items-end h-full gap-4 pt-8 z-30 pointer-events-auto">
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className={`w-full max-w-[380px] p-4 rounded-lg ${premiumGlass} group`}
          >
            <div className="flex justify-between items-center mb-3 border-b border-white/10 pb-2">
              <span className="text-[9px] text-gray-300 tracking-widest uppercase flex items-center gap-2">
                <Terminal className="w-3 h-3 group-hover:text-[#00E5FF] transition-colors" /> CODE TERMINAL
              </span>
              <div className="flex gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
              </div>
            </div>
            <div className="text-[10px] text-[#00E5FF] mb-2 font-medium tracking-wide">
              Pranesh@DevSystem:~$ 
            </div>
            <pre className="text-[10px] leading-relaxed whitespace-pre-wrap text-gray-300 h-[70px]">
              {typedCode}
              <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-2 h-3 bg-white inline-block align-middle ml-1" />
            </pre>
          </motion.div>

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
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 1.5 }} className="text-sm text-white font-bold font-sans">{heroData.github.repos}</motion.div>
              </div>
              <div>
                <div className="text-[8px] text-gray-400 uppercase tracking-widest">Commits</div>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 1.6 }} className="text-sm text-white font-bold font-sans">{heroData.github.commits.toLocaleString()}</motion.div>
              </div>
              <div>
                <div className="text-[8px] text-gray-400 uppercase tracking-widest">Contributions</div>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 1.7 }} className="text-sm text-white font-bold font-sans">{heroData.github.contributions.toLocaleString()}</motion.div>
              </div>
            </div>
            <div className="flex flex-wrap gap-[3px] justify-center">
              {[...Array(65)].map((_, i) => {
                const isHigh = i % 8 === 0 || i % 13 === 0 || i === 2;
                const isMed = i % 4 === 0 || i % 5 === 0;
                const colorClass = isHigh ? 'bg-[#39d353]' : isMed ? 'bg-[#0e4429]' : 'bg-[#161b22] border border-white/5';
                return (
                  <motion.div 
                    key={i} 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.2 + (i * 0.005) }}
                    whileHover={{ scale: 2.2, zIndex: 10, boxShadow: "0 0 15px #39d353", borderRadius: "50%" }}
                    className={`w-[10px] h-[10px] rounded-[2px] ${colorClass} cursor-crosshair relative`} 
                  />
                );
              })}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className={`w-full max-w-[380px] p-4 rounded-lg ${premiumGlass}`}
          >
            <div className="text-[9px] text-gray-300 tracking-widest mb-4 border-b border-white/10 pb-2 uppercase">SKILLS OVERVIEW</div>
            <div className="space-y-3">
              {heroData.skills.map((skill, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 cursor-default group"
                >
                  <div className="text-[9px] text-white/90 w-[110px] uppercase truncate font-medium group-hover:text-[#00E5FF] transition-colors">{skill.name}</div>
                  <div className="flex-1 h-1 bg-[#00E5FF]/20 rounded-full overflow-hidden relative">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.value}%` }}
                      transition={{ duration: 1.5, delay: 1.5 + (i * 0.1), ease: "easeOut" }}
                      className="absolute left-0 top-0 h-full bg-[#00E5FF] group-hover:shadow-[0_0_15px_#00E5FF] group-hover:bg-white transition-colors"
                    />
                  </div>
                  <div className="text-[9px] text-white w-6 text-right font-medium group-hover:text-[#00E5FF]">{skill.value}%</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
            whileHover={{ scale: 1.02 }}
            className={`w-full max-w-[380px] p-4 rounded-lg relative overflow-hidden ${premiumGlass} flex items-center justify-between cursor-crosshair`}
          >
             <div>
                <div className="text-[9px] text-[#00E5FF] tracking-widest mb-1 uppercase">VISITORS ONLINE</div>
                <motion.div 
                  key={visitors}
                  initial={{ scale: 1.2, color: "#00E5FF" }}
                  animate={{ scale: 1, color: "#ffffff" }}
                  className="text-2xl font-bold tracking-wider"
                >
                  {visitors}
                </motion.div>
                <div className="text-[8px] text-green-400 tracking-widest uppercase flex items-center gap-1 mt-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> Live Now
                </div>
             </div>
             <div className="relative w-[140px] h-[60px] opacity-80">
                <Map className="w-full h-full text-[#00E5FF]/30" />
                {[
                  { top: "30%", left: "20%", duration: 2.5, delay: 0.2 },
                  { top: "60%", left: "50%", duration: 3.1, delay: 1.5 },
                  { top: "25%", left: "75%", duration: 2.8, delay: 0.8 },
                  { top: "70%", left: "30%", duration: 3.5, delay: 1.1 },
                  { top: "45%", left: "85%", duration: 2.2, delay: 0.5 }
                ].map((node, i) => (
                  <motion.div 
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [1, 2, 0], opacity: [1, 0, 0] }}
                    transition={{ duration: node.duration, repeat: Infinity, delay: node.delay }}
                    className="absolute bg-[#00E5FF] rounded-full shadow-[0_0_5px_#00E5FF]"
                    style={{
                      width: 4, height: 4,
                      top: node.top,
                      left: node.left
                    }}
                  />
                ))}
             </div>
          </motion.div>

        </div>

      </div>

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
