"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Search, Shield, Cpu, Code2 } from "lucide-react";

const nodes = [
  { id: 1, label: "Reconnaissance", icon: <Search size={24} />, x: "10%", y: "20%", delay: 0 },
  { id: 2, label: "Threat Modeling", icon: <Shield size={24} />, x: "40%", y: "10%", delay: 0.2 },
  { id: 3, label: "Exploitation", icon: <Cpu size={24} />, x: "70%", y: "30%", delay: 0.4 },
  { id: 4, label: "Remediation", icon: <Code2 size={24} />, x: "80%", y: "70%", delay: 0.6 },
  { id: 5, label: "Analysis", icon: <BrainCircuit size={24} />, x: "30%", y: "80%", delay: 0.8 },
];

const connections = [
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 3, to: 4 },
  { from: 4, to: 5 },
  { from: 5, to: 1 },
];

export function MindGraphSection() {
  return (
    <section id="mind" className="relative w-full py-32 px-4 flex flex-col items-center bg-[#030303] overflow-hidden">
      <div className="max-w-6xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Inside My <span className="text-primary">Mind</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto" />
          <p className="mt-4 text-white/50 font-mono">My problem-solving neural network</p>
        </motion.div>

        <div className="relative w-full aspect-square md:aspect-video bg-black/50 border border-white/5 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.05)]">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
          
          {/* Render Connections (SVG Lines) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {connections.map((conn, i) => {
              const fromNode = nodes.find(n => n.id === conn.from);
              const toNode = nodes.find(n => n.id === conn.to);
              if (!fromNode || !toNode) return null;

              return (
                <motion.line
                  key={i}
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  className="stroke-primary/30 stroke-[2]"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: fromNode.delay + 0.5, ease: "easeInOut" }}
                />
              );
            })}
          </svg>

          {/* Render Nodes */}
          {nodes.map((node) => (
            <motion.div
              key={node.id}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1, zIndex: 50 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring", 
                stiffness: 260, 
                damping: 20, 
                delay: node.delay 
              }}
              className="absolute w-24 h-24 md:w-32 md:h-32 -ml-12 -mt-12 md:-ml-16 md:-mt-16 flex flex-col items-center justify-center gap-2 rounded-full bg-black/80 backdrop-blur-md border-2 border-primary/50 text-white cursor-pointer group shadow-[0_0_30px_rgba(0,240,255,0.2)] hover:shadow-[0_0_50px_rgba(0,240,255,0.6)] hover:border-primary transition-all"
              style={{ left: node.x, top: node.y }}
            >
              <div className="text-primary group-hover:animate-pulse">
                {node.icon}
              </div>
              <span className="text-xs md:text-sm font-medium tracking-wider text-center px-2">
                {node.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
