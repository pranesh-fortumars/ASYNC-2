"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const certifications = [
  {
    title: "Cisco Ethical Hacker",
    issuer: "Cisco",
    date: "2023",
    icon: "🛡️",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "group-hover:border-blue-500/50",
  },
  {
    title: "Cyber Defense Strategies",
    issuer: "Coursera",
    date: "2023",
    icon: "🔐",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "group-hover:border-purple-500/50",
  },
  {
    title: "CyberWarFare Labs",
    issuer: "CyberWarFare",
    date: "2022",
    icon: "⚔️",
    color: "from-red-500/20 to-orange-500/20",
    borderColor: "group-hover:border-red-500/50",
  },
  {
    title: "WordPress Certification",
    issuer: "WordPress",
    date: "2022",
    icon: "📝",
    color: "from-blue-400/20 to-blue-600/20",
    borderColor: "group-hover:border-blue-400/50",
  },
  {
    title: "TN Skills Cyber Security",
    issuer: "TN Government",
    date: "2021",
    icon: "🏆",
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "group-hover:border-green-500/50",
  },
];

const TiltCard = ({ cert }: { cert: any }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

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

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative w-full h-64 rounded-2xl bg-gradient-to-br ${cert.color} border border-white/10 ${cert.borderColor} transition-colors duration-500 group cursor-pointer p-6 flex flex-col justify-between`}
    >
      <div
        style={{ transform: "translateZ(50px)" }}
        className="text-5xl mb-4 pointer-events-none"
      >
        {cert.icon}
      </div>

      <div style={{ transform: "translateZ(30px)" }} className="pointer-events-none">
        <h3 className="text-xl font-bold text-white mb-1 leading-tight">
          {cert.title}
        </h3>
        <p className="text-sm text-white/60 font-medium">{cert.issuer}</p>
      </div>

      <div
        style={{ transform: "translateZ(40px)" }}
        className="absolute top-6 right-6 text-xs font-mono text-white/40 pointer-events-none"
      >
        {cert.date}
      </div>

      {/* Shine effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

export function CertificationsSection() {
  return (
    <section className="relative w-full py-32 px-4 flex flex-col items-center bg-transparent overflow-hidden">
      <div className="max-w-6xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="text-blue-500">Awards</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1000px]">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard cert={cert} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
