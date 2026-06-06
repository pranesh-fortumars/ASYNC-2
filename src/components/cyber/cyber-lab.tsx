"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ShieldAlert, Activity, Server, Target, Zap } from "lucide-react";

const mockVulnerabilities = [
  "[SCAN] Target: 192.168.1.45 ... Analyzing open ports",
  "[WARN] Port 22 (SSH) open. Attempting banner grab...",
  "[OK] SSH-2.0-OpenSSH_8.2p1 Ubuntu-4ubuntu0.5",
  "[SCAN] Executing CVE-2021-3156 local escalation check...",
  "[ALERT] Vulnerable to sudo privilege escalation!",
  "[INFO] Commencing mitigation protocol...",
  "[OK] System patched. Securing network perimeter.",
  "[SCAN] Monitoring active threat vectors...",
];

export function CyberLabSection() {
  const [logs, setLogs] = useState<string[]>([]);
  const [threatLevel, setThreatLevel] = useState(85);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setLogs((prev) => {
        const newLogs = [...prev, mockVulnerabilities[currentIndex]];
        if (newLogs.length > 6) newLogs.shift();
        return newLogs;
      });
      currentIndex = (currentIndex + 1) % mockVulnerabilities.length;
      
      // Randomize threat level slightly for visual effect
      setThreatLevel(80 + Math.floor(Math.random() * 15));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="lab" className="relative w-full py-32 px-4 flex flex-col items-center bg-transparent overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-4 drop-shadow-[0_0_15px_rgba(255,0,60,0.5)]">
            <ShieldAlert className="text-secondary animate-pulse" size={40} />
            Cyber <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Command Center</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary via-primary to-transparent mx-auto shadow-[0_0_10px_rgba(255,0,60,0.8)]" />
          <p className="mt-4 text-white/50 font-mono tracking-widest uppercase text-sm">Live Threat Analysis & Vulnerability Scanning</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Threat Level Meter */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 p-6 rounded-2xl bg-black border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 text-secondary/20 group-hover:text-secondary/40 transition-colors">
              <Activity size={100} />
            </div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Target className="text-secondary" /> System Security Score
            </h3>
            
            <div className="relative w-48 h-48 mx-auto mb-6">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="96" cy="96" r="80" className="stroke-white/5 stroke-[12] fill-none" />
                <motion.circle
                  cx="96"
                  cy="96"
                  r="80"
                  className="stroke-secondary stroke-[12] fill-none"
                  strokeLinecap="round"
                  initial={{ strokeDasharray: 502.65, strokeDashoffset: 502.65 }}
                  whileInView={{ strokeDashoffset: 502.65 - (502.65 * threatLevel) / 100 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-white">{threatLevel}</span>
                <span className="text-sm text-white/50 uppercase">Score</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Network Defense</span>
                <span className="text-green-400">Active</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Encryption</span>
                <span className="text-primary">AES-256</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Firewall Status</span>
                <span className="text-secondary animate-pulse">Monitoring</span>
              </div>
            </div>
          </motion.div>

          {/* Simulated Vulnerability Scanner Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 p-1 rounded-2xl bg-gradient-to-br from-white/10 to-transparent relative overflow-hidden"
          >
            <div className="w-full h-full bg-transparent rounded-xl p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                <Server className="text-white/50" size={20} />
                <h3 className="font-mono text-white/80">root@cyber-lab:~# vulnerability-scanner</h3>
                <div className="ml-auto flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
              </div>

              <div className="flex-1 font-mono text-sm space-y-2 overflow-hidden flex flex-col justify-end">
                <AnimatePresence>
                  {logs.map((log, i) => (
                    <motion.div
                      key={log + i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, height: 0 }}
                      className={`${
                        log.includes("[WARN]") ? "text-yellow-400" :
                        log.includes("[ALERT]") ? "text-secondary font-bold" :
                        log.includes("[OK]") ? "text-green-400" :
                        "text-white/60"
                      }`}
                    >
                      {log}
                    </motion.div>
                  ))}
                </AnimatePresence>
                <div className="flex items-center gap-2 mt-2 text-white/40">
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Active Threat Map Visualizer */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-3 p-6 rounded-2xl bg-transparent border border-secondary/20 relative overflow-hidden h-[400px] flex items-center justify-center group shadow-[0_0_30px_rgba(255,0,60,0.1)]"
          >
            {/* Grid & Radial Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.1)_0%,transparent_60%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,60,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,60,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
            
            {/* Pulsing Radar Effect */}
            <div className="absolute w-[800px] h-[800px] border border-primary/20 rounded-full animate-[spin_8s_linear_infinite]" style={{ clipPath: "polygon(50% 50%, 100% 0, 100% 100%)", background: "conic-gradient(from 0deg, transparent 70%, rgba(0, 240, 255, 0.2) 100%)" }} />
            <div className="absolute w-[600px] h-[600px] border border-primary/20 rounded-full border-dashed animate-[spin_20s_linear_infinite_reverse]" />
            <div className="absolute w-[400px] h-[400px] border border-secondary/30 rounded-full shadow-[0_0_30px_rgba(255,0,60,0.2)]" />
            <div className="absolute w-[200px] h-[200px] border border-primary/40 rounded-full" />
            
            {/* Animated Threat Nodes */}
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-secondary rounded-full shadow-[0_0_10px_#ff003c]"
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                animate={{ 
                  opacity: [0, 1, 0], 
                  scale: [0, 1.5, 0],
                  x: (Math.random() - 0.5) * 600,
                  y: (Math.random() - 0.5) * 400
                }}
                transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
              />
            ))}

            <div className="z-10 text-center bg-black/60 p-6 rounded-xl border border-white/10 backdrop-blur-md">
              <Zap className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse drop-shadow-[0_0_15px_rgba(0,240,255,0.8)]" />
              <h3 className="text-2xl font-bold text-white tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">GLOBAL THREAT MAP</h3>
              <p className="text-secondary font-mono mt-2 uppercase text-sm animate-pulse">[ Monitoring 43 Active Vectors ]</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
