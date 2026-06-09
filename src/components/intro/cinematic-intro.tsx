"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(0);
  const [isSkipped, setIsSkipped] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Key press to skip
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") completeIntro();
    };
    window.addEventListener("keydown", handleKeyDown);

    // Sequence engine
    let currentTimeout: NodeJS.Timeout;
    const runSequence = async () => {
      const stages = [
        { id: 1, delay: 1000 }, // Black screen initialization
        { id: 2, delay: 1800 }, // AI Core Activation
        { id: 3, delay: 1200 }, // Digital Universe
        { id: 4, delay: 1800 }, // Constellations
        { id: 5, delay: 1800 }, // Cinematic City Flight
        { id: 6, delay: 1500 }, // Character Materialization
        { id: 7, delay: 1500 }, // Workspace
        { id: 8, delay: 1200 }, // Name Reveal
        { id: 9, delay: 2000 }, // Role Morphing
        { id: 10, delay: 800 }  // Fade Out
      ];

      for (const s of stages) {
        if (isSkipped) break;
        setStage(s.id);
        await new Promise(resolve => {
          currentTimeout = setTimeout(resolve, s.delay);
        });
      }
      if (!isSkipped) completeIntro();
    };

    runSequence();

    return () => {
      clearTimeout(currentTimeout);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSkipped]);

  useEffect(() => {
    if (stage === 2) {
      const interval = setInterval(() => {
        setProgress(p => Math.min(100, p + Math.random() * 15));
      }, 300);
      return () => clearInterval(interval);
    }
  }, [stage]);

  const completeIntro = () => {
    setIsSkipped(true);
    setTimeout(onComplete, 1000); 
  };

  return (
    <AnimatePresence>
      {!isSkipped && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[100] bg-[#02040a] overflow-hidden text-white font-mono flex items-center justify-center pointer-events-auto"
        >
          {/* SKIP BUTTON */}
          <button 
            onClick={completeIntro}
            className="absolute bottom-8 right-8 z-50 text-[10px] tracking-[0.3em] text-white/40 hover:text-[#00E5FF] transition-colors uppercase border border-white/10 px-4 py-2 rounded-full backdrop-blur-md"
          >
            Press Space to Skip
          </button>

          {/* STAGE 1: BLACK SCREEN & PARTICLE */}
          <AnimatePresence>
            {stage === 1 && (
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1, 10], opacity: [0, 1, 0] }}
                transition={{ duration: 2, ease: "easeIn" }}
                className="w-2 h-2 bg-[#00E5FF] rounded-full shadow-[0_0_20px_#00E5FF]"
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {stage === 1 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute text-[10px] tracking-widest text-[#00E5FF]/50"
              >
                BOOTING SYSTEM...
              </motion.div>
            )}
          </AnimatePresence>

          {/* STAGE 2: AI CORE */}
          <AnimatePresence>
            {stage === 2 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                className="absolute inset-0 flex flex-col items-center justify-center gap-12 w-full h-full"
              >
                {/* Full screen background pulse */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.08)_0%,transparent_70%)] animate-pulse z-[-1]" />
                
                {/* Massive 3D Gyroscope Sphere */}
                <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] perspective-[1000px]">
                  <motion.div 
                    animate={{ rotateX: 360, rotateY: 180 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-4 border-dashed border-[#00E5FF]/30 rounded-full"
                  />
                  <motion.div 
                    animate={{ rotateX: -360, rotateZ: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-8 border-2 border-[#4ade80]/40 rounded-full"
                  />
                  <motion.div 
                    animate={{ rotateY: 360, rotateZ: -180 }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-16 border border-white/20 rounded-full"
                  />
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute inset-24 bg-gradient-to-tr from-[#00E5FF] to-[#0077ff] rounded-full blur-[40px]"
                  />
                </div>
                
                <div className="w-full max-w-2xl px-8 space-y-6 text-[12px] md:text-sm tracking-widest uppercase z-10">
                  <div className="flex justify-between text-[#00E5FF] font-bold">
                    <span>INITIALIZING AI CORE...</span>
                    <span>{Math.floor(progress)}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]"
                      animate={{ width: `${progress}%` }}
                      transition={{ ease: "linear", duration: 0.3 }}
                    />
                  </div>
                  <div className="text-white/60 font-medium">
                    {progress < 30 ? "> Loading Intelligence Layer..." : 
                     progress < 60 ? "> Loading Innovation Engine..." : 
                     progress < 90 ? "> Loading Security Matrix..." : 
                     "> Environment Ready"}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* STAGE 3 & 4: DIGITAL UNIVERSE & CONSTELLATIONS */}
          <AnimatePresence>
            {(stage === 3 || stage === 4) && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 2 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [transform:perspective(500px)_rotateX(60deg)] animate-[grid-scroll_10s_linear_infinite]" />
                
                {stage === 4 && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="relative w-screen h-screen overflow-hidden"
                  >
                    {[
                      { title: "Core Intelligence", top: "50%", left: "50%", delay: 0, isCore: true },
                      { title: "Cybersecurity", top: "15%", left: "20%", delay: 0.3 },
                      { title: "Artificial Intelligence", top: "25%", left: "80%", delay: 0.6 },
                      { title: "Software Engineering", top: "85%", left: "75%", delay: 0.9 },
                      { title: "Blockchain", top: "80%", left: "20%", delay: 1.2 },
                    ].map((node, i) => (
                      <motion.div 
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: node.delay, type: "spring", stiffness: 80 }}
                        className="absolute flex flex-col items-center gap-3 -translate-x-1/2 -translate-y-1/2"
                        style={{ top: node.top, left: node.left }}
                      >
                        <div className="relative flex items-center justify-center">
                          {/* Rotating geometric border */}
                          <motion.div 
                            animate={{ rotate: node.isCore ? 360 : -360 }}
                            transition={{ duration: node.isCore ? 4 : 8, repeat: Infinity, ease: "linear" }}
                            className={`absolute ${node.isCore ? 'w-16 h-16 border-2' : 'w-8 h-8 border'} border-[#00E5FF]/40 rounded-sm`}
                            style={{ rotate: '45deg' }}
                          />
                          <motion.div 
                            animate={{ rotate: node.isCore ? -360 : 360 }}
                            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                            className={`absolute ${node.isCore ? 'w-12 h-12' : 'w-6 h-6'} border border-[#4ade80]/30 rounded-full`}
                          />
                          {/* Inner glowing dot */}
                          <div className={`bg-[#00E5FF] rounded-full shadow-[0_0_25px_#00E5FF] animate-pulse ${node.isCore ? 'w-4 h-4' : 'w-2 h-2'}`} />
                        </div>
                        <span className={`text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/90 font-bold drop-shadow-[0_0_8px_#00E5FF] text-center ${node.isCore ? 'w-48 text-[#00E5FF]' : 'w-32'}`}>
                          {node.title}
                        </span>
                      </motion.div>
                    ))}
                    
                    {/* Advanced SVG Network Links */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-[#00E5FF]/30">
                      {/* Lines from Core to outer nodes */}
                      {[
                        { x2: "20%", y2: "15%" },
                        { x2: "80%", y2: "25%" },
                        { x2: "75%", y2: "85%" },
                        { x2: "20%", y2: "80%" },
                      ].map((line, i) => (
                        <g key={`core-link-${i}`}>
                          <motion.line 
                            x1="50%" y1="50%" x2={line.x2} y2={line.y2} strokeWidth="1" strokeDasharray="5 5"
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5 + (i * 0.2), duration: 1.5 }}
                          />
                          {/* Animated Data Packets shooting from core */}
                          <motion.circle 
                            r="2" fill="#fff" className="shadow-[0_0_10px_white]"
                            initial={{ cx: "50%", cy: "50%", opacity: 0 }}
                            animate={{ cx: line.x2, cy: line.y2, opacity: [0, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 1 + i * 0.5, ease: "linear" }}
                          />
                        </g>
                      ))}
                      
                      {/* Thin Perimeter Connections */}
                      <motion.line x1="20%" y1="15%" x2="80%" y2="25%" strokeWidth="0.5" stroke="rgba(0,229,255,0.15)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.5, duration: 1 }} />
                      <motion.line x1="80%" y1="25%" x2="75%" y2="85%" strokeWidth="0.5" stroke="rgba(0,229,255,0.15)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.8, duration: 1 }} />
                      <motion.line x1="75%" y1="85%" x2="20%" y2="80%" strokeWidth="0.5" stroke="rgba(0,229,255,0.15)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.1, duration: 1 }} />
                      <motion.line x1="20%" y1="80%" x2="20%" y2="15%" strokeWidth="0.5" stroke="rgba(0,229,255,0.15)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.4, duration: 1 }} />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* STAGE 5: CINEMATIC CITY REVEAL (TUNNEL) */}
          <AnimatePresence>
            {stage === 5 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#02040a] z-[-1]" />
                <motion.div 
                  initial={{ scale: 0.5, rotate: 0 }}
                  animate={{ scale: 3, rotate: 180 }}
                  transition={{ duration: 3.5, ease: "easeIn" }}
                  className="w-full h-full relative perspective-[1000px]"
                >
                  {[...Array(60)].map((_, i) => (
                    <motion.div 
                      key={i}
                      className="absolute bg-gradient-to-b from-white via-[#00E5FF] to-transparent rounded-full opacity-60"
                      style={{
                        width: Math.random() * 2 + 1,
                        height: Math.random() * 250 + 50,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        scaleY: [0, 2, 0],
                        y: [-200, 1500],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: Math.random() * 0.8 + 0.3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  ))}
                </motion.div>
                <div className="absolute text-center z-10">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[12px] md:text-sm tracking-[0.5em] text-white/50 font-bold uppercase mb-2"
                  >
                    Entering Digital Universe
                  </motion.div>
                  <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* STAGE 6 & 7: MATERIALIZATION & WORKSPACE */}
          <AnimatePresence>
            {(stage === 6 || stage === 7) && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Background Radar / Grid */}
                <div className="absolute inset-0 overflow-hidden z-[-1]">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.05)_0%,transparent_70%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />
                  
                  {/* Radar Sweep */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] border border-[#00E5FF]/10 rounded-full"
                    style={{ background: 'conic-gradient(from 0deg, transparent 0%, transparent 80%, rgba(0,229,255,0.1) 100%)' }}
                  />
                  {/* Concentric rings */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#00E5FF]/10 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#00E5FF]/5 rounded-full" />
                </div>

                {/* Abstract Identity Verification */}
                <div className="relative w-64 h-64 flex items-center justify-center perspective-[800px]">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        rotateX: [0, 360], 
                        rotateY: [0, 360],
                        rotateZ: [0, 180]
                      }}
                      transition={{ 
                        duration: 3 + i * 0.5, 
                        repeat: Infinity, 
                        ease: "linear",
                      }}
                      className="absolute rounded-full border shadow-[0_0_15px_#00E5FF_inset]"
                      style={{ 
                        width: `${100 - i * 15}%`, 
                        height: `${100 - i * 15}%`,
                        borderColor: i % 2 === 0 ? 'rgba(0, 229, 255, 0.4)' : 'rgba(74, 222, 128, 0.4)',
                        borderStyle: i === 1 ? 'dashed' : 'solid'
                      }}
                    />
                  ))}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute inset-0 m-auto w-16 h-16 bg-[#00E5FF] rounded-full blur-[15px] animate-pulse"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="absolute top-full mt-10 flex flex-col items-center"
                  >
                    <div className="text-[12px] text-[#00E5FF] tracking-[0.4em] font-bold">IDENTITY: SECURED</div>
                    <div className="text-[10px] text-[#4ade80] tracking-widest mt-2 uppercase">Consciousness Uploaded</div>
                  </motion.div>
                </div>

                {/* Workspace Command Center Activation */}
                {stage === 7 && (
                  <>
                    {/* Top Left: System Metrics */}
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}
                      className="absolute left-[5%] top-[10%] w-48 md:w-64 bg-[#02040a]/80 border border-[#00E5FF]/30 rounded backdrop-blur-md p-4 text-[8px] md:text-[10px] text-[#00E5FF] font-mono shadow-[0_0_20px_rgba(0,229,255,0.1)]"
                    >
                      <div className="mb-3 border-b border-[#00E5FF]/30 pb-1 font-bold tracking-widest">SYSTEM_METRICS</div>
                      <div className="flex justify-between mb-2"><span>CPU_LOAD</span><span>[||||||||--] 80%</span></div>
                      <div className="flex justify-between mb-2"><span>MEM_ALLOC</span><span>[||||||----] 60%</span></div>
                      <div className="flex justify-between"><span>NET_UPLINK</span><span>[||||||||||] 99%</span></div>
                    </motion.div>

                    {/* Bottom Left: Hex Dump */}
                    <motion.div 
                      initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                      className="absolute left-[5%] bottom-[10%] w-48 md:w-64 h-32 md:h-40 bg-[#02040a]/80 border border-[#00E5FF]/30 rounded backdrop-blur-md p-3 overflow-hidden shadow-[0_0_20px_rgba(0,229,255,0.1)]"
                    >
                      <div className="text-[6px] md:text-[8px] text-white/40 font-mono leading-tight flex flex-wrap gap-[2px]">
                        {[...Array(150)].map((_, i) => (
                          <motion.span 
                            key={i} 
                            animate={{ opacity: [0.3, 1, 0.3] }} 
                            transition={{ duration: Math.random() * 2 + 1, repeat: Infinity }}
                          >
                            {Math.floor(Math.random() * 255).toString(16).padStart(2, '0').toUpperCase()}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Top Right: Security Feed */}
                    <motion.div 
                      initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
                      className="absolute right-[5%] top-[10%] w-48 md:w-64 bg-[#02040a]/80 border border-[#4ade80]/30 rounded backdrop-blur-md p-4 text-[8px] md:text-[10px] text-[#4ade80] font-mono shadow-[0_0_20px_rgba(74,222,128,0.1)]"
                    >
                      <div className="mb-3 border-b border-[#4ade80]/30 pb-1 font-bold tracking-widest">SECURITY_FEED</div>
                      {[
                        "FIREWALL_ACTIVE... OK",
                        "ENCRYPTION_KEY... GEN",
                        "THREAT_SCAN... 0 FOUND",
                        "NEURAL_SYNC... ESTABLISHED"
                      ].map((log, i) => (
                        <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + (i * 0.2) }} className="mb-2">
                          &gt; {log}
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Bottom Right: AI Model Spinner */}
                    <motion.div 
                      initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                      className="absolute right-[5%] bottom-[10%] w-48 md:w-64 h-32 md:h-40 bg-[#02040a]/80 border border-[#00E5FF]/30 rounded backdrop-blur-md p-4 flex flex-col items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.1)]"
                    >
                      <div className="text-[8px] md:text-[10px] tracking-widest text-[#00E5FF] mb-4 font-bold">AI_MODEL_INIT</div>
                      <div className="relative w-16 h-16 flex items-center justify-center">
                        <div className="absolute inset-0 border-2 border-t-[#00E5FF] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin" />
                        <div className="absolute inset-2 border-2 border-b-[#4ade80] border-r-transparent border-t-transparent border-l-transparent rounded-full animate-[spin_2s_linear_infinite_reverse]" />
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]" />
                      </div>
                    </motion.div>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* STAGE 8 & 9: NAME REVEAL & MORPHING */}
          <AnimatePresence>
            {(stage === 8 || stage === 9) && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                className="absolute inset-0 flex flex-col items-center justify-center gap-6"
              >
                {/* Particle Name Assembly */}
                <motion.h1 
                  initial={{ filter: "blur(20px)", letterSpacing: "1em" }}
                  animate={{ filter: "blur(0px)", letterSpacing: "0.1em" }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00E5FF] to-white"
                >
                  PRANESH S
                </motion.h1>

                {/* Role Morphing */}
                {stage === 9 && (
                  <div className="h-10 overflow-hidden relative">
                    <motion.div
                      animate={{ y: [0, -40, -80, -120, -160, -200] }}
                      transition={{ duration: 2.5, ease: "circInOut" }}
                      className="flex flex-col text-[#00E5FF] text-lg md:text-2xl font-bold tracking-widest uppercase"
                    >
                      <div className="h-10 flex items-center justify-center">Software Developer</div>
                      <div className="h-10 flex items-center justify-center">Cybersecurity Engineer</div>
                      <div className="h-10 flex items-center justify-center">AI Engineer</div>
                      <div className="h-10 flex items-center justify-center">Blockchain Developer</div>
                      <div className="h-10 flex items-center justify-center">System Architect</div>
                      <div className="h-10 flex items-center justify-center text-white">Technology Innovator</div>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
