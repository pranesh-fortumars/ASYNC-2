"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Code, Server, GitMerge, Cpu, Terminal, LayoutDashboard } from "lucide-react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

function AnimatedCounter({ end, duration = 2, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      
      setCount(Math.floor(easeOutQuart * end));

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function DevMetricsSection() {
  const metrics = [
    { label: "Applications Developed", value: 24, icon: LayoutDashboard, color: "text-primary" },
    { label: "APIs Built", value: 45, icon: Server, suffix: "+", color: "text-secondary" },
    { label: "Projects Delivered", value: 15, icon: GitMerge, color: "text-purple-400" },
    { label: "Technologies Mastered", value: 30, icon: Cpu, suffix: "+", color: "text-green-400" },
    { label: "Problems Solved", value: 500, icon: Code, suffix: "+", color: "text-blue-400" },
    { label: "Years Experience", value: 3, icon: Terminal, suffix: "+", color: "text-yellow-400" },
  ];

  return (
    <section className="relative w-full py-20 px-4 flex flex-col items-center z-10">
      <div className="max-w-7xl w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {metrics.map((metric, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center justify-center p-6 bg-black/40 backdrop-blur-md border border-white/5 rounded-2xl hover:border-primary/30 hover:bg-white/5 transition-all group"
          >
            <metric.icon className={`w-8 h-8 mb-4 ${metric.color} opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all`} />
            <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-mono">
              <AnimatedCounter end={metric.value} suffix={metric.suffix} />
            </div>
            <div className="text-xs uppercase tracking-widest text-white/50 text-center">
              {metric.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
