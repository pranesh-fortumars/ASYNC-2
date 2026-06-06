"use client";

import { motion } from "framer-motion";
import { Laptop, Router, Database, BrainCircuit, Globe, Activity } from "lucide-react";

export function SystemDesignSection() {
  const nodes = [
    { id: "client", label: "Client Applications", icon: Laptop, x: 10, y: 50, color: "text-blue-400" },
    { id: "cdn", label: "Global CDN", icon: Globe, x: 30, y: 20, color: "text-white" },
    { id: "gateway", label: "API Gateway", icon: Router, x: 50, y: 50, color: "text-primary" },
    { id: "services", label: "Microservices", icon: Activity, x: 70, y: 50, color: "text-secondary" },
    { id: "db", label: "Distributed DB", icon: Database, x: 90, y: 30, color: "text-yellow-400" },
    { id: "ai", label: "AI Models", icon: BrainCircuit, x: 90, y: 70, color: "text-purple-400" },
  ];

  const connections = [
    { from: "client", to: "cdn", path: "M 10 50 Q 10 20 30 20" },
    { from: "cdn", to: "gateway", path: "M 30 20 Q 50 20 50 50" },
    { from: "client", to: "gateway", path: "M 10 50 L 50 50" },
    { from: "gateway", to: "services", path: "M 50 50 L 70 50" },
    { from: "services", to: "db", path: "M 70 50 Q 70 30 90 30" },
    { from: "services", to: "ai", path: "M 70 50 Q 70 70 90 70" },
  ];

  return (
    <section className="relative w-full py-32 px-4 flex flex-col items-center z-10 overflow-hidden">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_0_15px_rgba(255,0,60,0.5)]">
            Enterprise System <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Architecture</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary via-primary to-transparent mx-auto shadow-[0_0_10px_rgba(255,0,60,0.8)]" />
          <p className="mt-4 text-white/50 font-mono tracking-widest uppercase text-sm">Scalable, Secure, and Event-Driven Designs</p>
        </motion.div>

        <div className="relative w-full h-[500px] bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Cyber grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
          
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
            {connections.map((conn, i) => (
              <g key={i}>
                {/* Static line */}
                <path d={conn.path} stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" fill="none" />
                {/* Glowing moving packet */}
                <path 
                  d={conn.path} 
                  stroke="url(#gradient)" 
                  strokeWidth="1" 
                  fill="none" 
                  strokeDasharray="2 100"
                  className="animate-[dash_3s_linear_infinite]" 
                  style={{ animationDelay: `${i * 0.5}s` }}
                />
              </g>
            ))}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff003c" />
                <stop offset="100%" stopColor="#00f0ff" />
              </linearGradient>
            </defs>
          </svg>

          {nodes.map((node) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: node.x * 0.01 }}
              className="absolute flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <div className="relative p-4 rounded-xl bg-[#0a0a0a] border border-white/20 group-hover:border-primary/50 transition-colors z-10">
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent blur-[2px]`} />
                <node.icon className={`relative z-10 w-8 h-8 ${node.color} group-hover:animate-pulse`} />
              </div>
              <div className="mt-2 text-xs font-mono font-bold text-white/80 whitespace-nowrap bg-black/80 px-2 py-1 rounded">
                {node.label}
              </div>
              
              {/* Ping animation behind node */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-10 h-10 border border-primary/50 rounded-full animate-ping opacity-0 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
