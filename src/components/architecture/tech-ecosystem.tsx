"use client";

import { motion } from "framer-motion";
import { Layout, Server, Database, Cloud, ShieldAlert, BrainCircuit } from "lucide-react";

export function TechEcosystemSection() {
  const layers = [
    {
      title: "Frontend Layer",
      icon: Layout,
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      color: "border-blue-500",
      textColor: "text-blue-500",
    },
    {
      title: "Backend Layer",
      icon: Server,
      technologies: ["Node.js", "Express.js", "Python", "Java", "GraphQL"],
      color: "border-green-500",
      textColor: "text-green-500",
    },
    {
      title: "Database Layer",
      icon: Database,
      technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
      color: "border-yellow-500",
      textColor: "text-yellow-500",
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD Pipelines", "Linux"],
      color: "border-orange-500",
      textColor: "text-orange-500",
    },
    {
      title: "Security Layer",
      icon: ShieldAlert,
      technologies: ["Penetration Testing", "Cryptography", "OAuth2.0", "WAF"],
      color: "border-red-500",
      textColor: "text-red-500",
    },
    {
      title: "AI & Emerging Tech",
      icon: BrainCircuit,
      technologies: ["Machine Learning", "LLMs", "Computer Vision", "Web3 / Blockchain"],
      color: "border-purple-500",
      textColor: "text-purple-500",
    },
  ];

  return (
    <section className="relative w-full py-32 px-4 flex flex-col items-center z-10 overflow-hidden">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">
            Software Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Universe</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-transparent mx-auto shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
          <p className="mt-4 text-white/50 font-mono tracking-widest uppercase text-sm">Full Stack Ecosystem Architecture</p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* SVG Connection Lines Background */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 hidden lg:block" style={{ zIndex: 0 }}>
            {/* Horizontal Connections */}
            <path d="M 200 100 L 600 100" stroke="#00f0ff" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
            <path d="M 600 100 L 1000 100" stroke="#ff003c" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite_reverse]" />
            
            <path d="M 200 350 L 600 350" stroke="#00ff88" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
            <path d="M 600 350 L 1000 350" stroke="#7a00ff" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite_reverse]" />
            
            {/* Vertical Connections */}
            <path d="M 200 100 L 200 350" stroke="#fff" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_10s_linear_infinite]" />
            <path d="M 600 100 L 600 350" stroke="#fff" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_10s_linear_infinite_reverse]" />
            <path d="M 1000 100 L 1000 350" stroke="#fff" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_10s_linear_infinite]" />
          </svg>

          {layers.map((layer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative z-10 p-8 rounded-3xl bg-black/60 backdrop-blur-xl border-t-2 ${layer.color} shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-shadow group overflow-hidden`}
            >
              {/* Background Glow */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 ${layer.color.replace('border-', 'bg-')} opacity-10 rounded-full blur-[50px] group-hover:opacity-30 transition-opacity`} />
              
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 ${layer.textColor}`}>
                  <layer.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">{layer.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {layer.technologies.map((tech, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70 font-mono text-sm group-hover:text-white transition-colors">
                    <div className={`w-1.5 h-1.5 rounded-full ${layer.color.replace('border-', 'bg-')}`} />
                    {tech}
                  </li>
                ))}
              </ul>
              
              {/* Animated Bottom Line */}
              <motion.div 
                className={`absolute bottom-0 left-0 h-1 ${layer.color.replace('border-', 'bg-')}`}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
