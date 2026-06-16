"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const BOOT_SEQUENCE = [
  "INITIALIZING NEURAL INTERFACE...",
  "LOADING CYBER-SECURITY PROTOCOLS...",
  "ESTABLISHING SECURE CONNECTION...",
  "DECRYPTING ANIME-TECH ASSETS...",
  "SYSTEM ONLINE. WELCOME, USER."
];

export function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [bootTextIndex, setBootTextIndex] = useState(0);

  useEffect(() => {
    const duration = 800; // Drastically reduced for an instant load feel
    const interval = 30;
    let current = 0;

    const timer = setInterval(() => {
      current += (100 / (duration / interval));
      if (current >= 100) {
        setProgress(100);
        clearInterval(timer);
        // Reduced to 200ms for barely any pause
        setTimeout(() => setLoading(false), 200);
      } else {
        setProgress(Math.floor(current));
      }
    }, interval);

    // Boot sequence text changer
    const textInterval = setInterval(() => {
      setBootTextIndex((prev) => Math.min(prev + 1, BOOT_SEQUENCE.length - 1));
    }, duration / BOOT_SEQUENCE.length);

    return () => {
      clearInterval(timer);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Energy rings */}
          <motion.div 
            className="absolute w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] border border-primary/20 rounded-full"
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute w-[30vw] h-[30vw] max-w-[350px] max-h-[350px] border border-secondary/20 rounded-full border-dashed"
            animate={{ rotate: -360, scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />

          <div className="w-80 flex flex-col items-center gap-8 z-10">
            {/* Glitching Logo */}
            <motion.div 
              initial={{ scale: 0.8, filter: "blur(10px)" }}
              animate={{ scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1 }}
              className="relative text-5xl font-bold tracking-tighter text-white flex items-center gap-2"
            >
              <span className="text-primary animate-pulse">&lt;</span>
              PRANESH
              <span className="text-primary animate-pulse">/&gt;</span>
              
              {/* Scanline effect over logo */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent mix-blend-overlay"
                animate={{ top: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            
            {/* Cinematic Progress Bar */}
            <div className="w-full relative">
              <div className="w-full h-1 bg-white/10 overflow-hidden relative">
                <motion.div 
                  className="h-full bg-gradient-to-r from-primary via-white to-primary bg-[length:200%_auto] animate-[gradient_2s_linear_infinite]"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="absolute -top-1 w-full flex justify-between">
                <motion.div 
                  className="w-2 h-3 bg-white shadow-[0_0_10px_#fff]"
                  style={{ left: `${progress}%`, position: "absolute", translateX: "-50%" }}
                />
              </div>
            </div>
            
            <div className="flex flex-col items-center w-full gap-2">
              <div className="text-primary font-mono text-sm tracking-widest flex w-full justify-between">
                <span className="uppercase">{BOOT_SEQUENCE[bootTextIndex]}</span>
                <span className="text-white">{progress}%</span>
              </div>
              <div className="w-full flex gap-1 h-2 opacity-50">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`flex-1 h-full ${i < progress / 5 ? 'bg-primary' : 'bg-white/10'}`} 
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
