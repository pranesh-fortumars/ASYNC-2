"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/brand-icons";

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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-8 items-center mb-32 group`}
    >
      {/* 3D Image Container */}
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full lg:w-3/5 aspect-video relative rounded-3xl overflow-hidden cursor-pointer"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} mix-blend-multiply opacity-60 group-hover:opacity-0 transition-opacity duration-500`} />
        
        {/* Shine */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
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
  );
};

export function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full py-32 px-4 flex flex-col items-center bg-[#050505]">
      <div className="max-w-7xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto" />
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
