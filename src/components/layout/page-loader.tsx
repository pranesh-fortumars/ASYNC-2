"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const interval = 20;
    let current = 0;

    const timer = setInterval(() => {
      current += (100 / (duration / interval));
      if (current >= 100) {
        setProgress(100);
        clearInterval(timer);
        setTimeout(() => setLoading(false), 500);
      } else {
        setProgress(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
    >
      <div className="w-64 flex flex-col items-center gap-6">
        <div className="text-4xl font-bold tracking-tighter text-white flex items-center gap-2">
          <span className="text-primary">&lt;</span>
          PRANESH
          <span className="text-primary">/&gt;</span>
        </div>
        
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-primary"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="text-primary font-mono text-sm tracking-widest flex w-full justify-between">
          <span>INITIALIZING</span>
          <span>{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
}
