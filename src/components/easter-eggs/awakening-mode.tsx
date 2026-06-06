"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useKonamiCode } from "@/hooks/use-konami-code";
import { useEffect, useState } from "react";

export function AwakeningMode() {
  const isUnlocked = useKonamiCode();
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (isUnlocked) {
      setShowOverlay(true);
      // Auto-hide after 6 seconds
      const timer = setTimeout(() => setShowOverlay(false), 6000);
      return () => clearTimeout(timer);
    }
  }, [isUnlocked]);

  return (
    <AnimatePresence>
      {showOverlay && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          className="fixed inset-0 z-[99999] flex items-center justify-center pointer-events-none overflow-hidden"
        >
          {/* Extreme Glitch Background Overlay */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          
          <motion.div 
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.3)_0%,transparent_100%)]"
            animate={{ opacity: [0, 1, 0], scale: [1, 2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Solo Leveling / System Awakening Popup */}
          <motion.div
            initial={{ scale: 0, rotateX: 90 }}
            animate={{ scale: 1, rotateX: 0 }}
            exit={{ scale: 1.5, opacity: 0, filter: "blur(20px)" }}
            transition={{ type: "spring", damping: 15, stiffness: 200 }}
            className="relative border-2 border-primary bg-black/90 p-10 text-center shadow-[0_0_100px_rgba(0,240,255,0.8)]"
            style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-widest drop-shadow-[0_0_15px_rgba(0,240,255,1)]"
              animate={{ textShadow: ["0 0 10px #00f0ff", "0 0 40px #00f0ff", "0 0 10px #00f0ff"] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              SYSTEM AWAKENED
            </motion.h1>
            <p className="text-xl md:text-2xl text-primary font-mono uppercase tracking-widest animate-pulse">
              You have unlocked the hidden protocol.
            </p>
            <div className="mt-8 flex justify-center gap-4 opacity-50">
              <span className="text-xs font-mono">&lt; LEVEL UP &gt;</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
