"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, X, Activity, Server, Cpu } from "lucide-react";
import { GithubIcon } from "@/components/icons/brand-icons";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Decentralized E-Voting System",
    description: "A secure and transparent e-voting platform powered by the Ethereum Blockchain. Ensures tamper-proof elections with real-time result tracking.",
    tech: ["Ethereum", "Smart Contracts", "Solidity", "React", "Web3.js"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f4fc8bc?q=80&w=2832&auto=format&fit=crop", // placeholder
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Sign Language Recognition",
    description: "An AI-powered system that translates sign language into text and voice in real-time using advanced Computer Vision and Deep Learning techniques.",
    tech: ["Python", "CNN", "OpenCV", "TensorFlow", "Keras"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2940&auto=format&fit=crop", // placeholder
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Medical Patient Clustering",
    description: "A data analytics project that uses unsupervised learning algorithms to group medical patients based on their health metrics to assist in personalized treatment.",
    tech: ["Python", "Scikit-Learn", "K-Means", "EM Algorithm", "Pandas"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2940&auto=format&fit=crop", // placeholder
    color: "from-orange-500/20 to-red-500/20",
  },
];

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isEven = index % 2 === 0;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className={`flex flex-col ${
          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        } gap-8 items-center mb-32 group`}
      >
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={() => setIsOpen(true)}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="w-full lg:w-3/5 aspect-video relative rounded-3xl overflow-hidden cursor-pointer border border-white/5 group-hover:border-primary/50 shadow-[0_0_0_rgba(0,240,255,0)] group-hover:shadow-[0_0_40px_rgba(0,240,255,0.3)] transition-all duration-500"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} mix-blend-multiply opacity-80 group-hover:opacity-40 transition-opacity duration-500`} />
          
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
            <span className="px-8 py-4 rounded-full bg-black/60 backdrop-blur-xl border border-primary text-white font-bold tracking-widest uppercase text-sm shadow-[0_0_20px_rgba(0,240,255,0.5)]">
              Initiate Deep Dive
            </span>
          </div>
          
          {/* Holographic Anime Scanline */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,240,255,0.2)_50%,transparent_100%)] h-[200%] -top-[100%] group-hover:animate-[scanline_2s_linear_infinite] pointer-events-none opacity-0 group-hover:opacity-100 mix-blend-overlay z-10" />
          
          {/* Shine */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-primary/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
        </motion.div>

        {/* Content */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md mb-6 relative">
            <p className="text-white/70 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t: string, i: number) => (
              <span
                key={i}
                className="px-3 py-1 text-sm font-medium rounded-full bg-white/5 text-white/80 border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-black font-semibold hover:bg-primary/90 transition-colors">
              <ExternalLink size={18} />
              Live Demo
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors border border-white/10 backdrop-blur-md">
              <GithubIcon className="w-[18px] h-[18px]" />
              Source Code
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl h-full max-h-[90vh] bg-transparent border border-white/10 rounded-3xl overflow-hidden flex flex-col"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-red-500/20 text-white hover:text-red-500 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar">
                <div className="flex flex-col md:flex-row gap-12">
                  <div className="w-full md:w-1/2">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">{project.title}</h2>
                    <p className="text-xl text-white/70 mb-8 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-12">
                      <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                        <Activity className="text-primary mb-4" size={24} />
                        <h4 className="text-2xl font-bold">99.9%</h4>
                        <p className="text-sm text-white/50">Uptime</p>
                      </div>
                      <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                        <Server className="text-secondary mb-4" size={24} />
                        <h4 className="text-2xl font-bold">150ms</h4>
                        <p className="text-sm text-white/50">Latency</p>
                      </div>
                      <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                        <Cpu className="text-accent mb-4" size={24} />
                        <h4 className="text-2xl font-bold">O(1)</h4>
                        <p className="text-sm text-white/50">Complexity</p>
                      </div>
                      <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                        <ExternalLink className="text-white/80 mb-4" size={24} />
                        <h4 className="text-2xl font-bold">10k+</h4>
                        <p className="text-sm text-white/50">Users</p>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4">Architecture</h3>
                    <p className="text-white/60 mb-6">
                      Implemented using a microservices architecture with a focus on high availability and fault tolerance. The system utilizes distributed caching and edge computing to minimize latency.
                    </p>
                  </div>

                  <div className="w-full md:w-1/2 space-y-6">
                    <div className="w-full aspect-video rounded-2xl bg-cover bg-center border border-white/10" style={{ backgroundImage: `url(${project.image})` }} />
                    <div className="w-full aspect-video rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                      <span className="text-white/30 font-mono">[ Architecture Diagram Visualization ]</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full py-32 px-4 flex flex-col items-center bg-transparent">
      <div className="max-w-7xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-transparent mx-auto shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
        </motion.div>

        <div className="perspective-[2000px]">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
