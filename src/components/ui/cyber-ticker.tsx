"use client";

import { motion } from "framer-motion";
import { Terminal, ShieldAlert, Cpu, Network } from "lucide-react";

const tickerItems = [
  { text: "SYSTEM_NOMINAL", icon: <Cpu className="w-4 h-4" /> },
  { text: "SECURE_CONNECTION_ESTABLISHED", icon: <Network className="w-4 h-4" /> },
  { text: "NEURAL_NET_SYNC: 100%", icon: <Terminal className="w-4 h-4" /> },
  { text: "FIREWALL_ACTIVE", icon: <ShieldAlert className="w-4 h-4" /> },
  { text: "ENCRYPTED_PAYLOAD_READY", icon: <Terminal className="w-4 h-4" /> },
  { text: "QUANTUM_DECRYPTION_BYPASS", icon: <Network className="w-4 h-4" /> },
  { text: "AI_CORE_ONLINE", icon: <Cpu className="w-4 h-4" /> },
];

export function CyberTickerSection() {
  return (
    <section className="w-full border-y border-[#00E5FF]/20 bg-[#02040a]/50 backdrop-blur-sm overflow-hidden py-3 relative z-20">
      <div className="absolute inset-0 bg-gradient-to-r from-[#050814] via-transparent to-[#050814] z-10 pointer-events-none" />
      
      <div className="flex whitespace-nowrap">
        <motion.div 
          className="flex gap-16 items-center w-max pr-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 20, 
            repeat: Infinity 
          }}
        >
          {/* Double array to create seamless infinite loop */}
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 text-[#00E5FF]">
              <span className="opacity-70">{item.icon}</span>
              <span className="font-mono text-[10px] tracking-[0.3em] font-bold uppercase drop-shadow-[0_0_8px_rgba(0,229,255,0.5)]">
                {item.text}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] opacity-30 ml-8 shadow-[0_0_5px_#00E5FF]" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
