"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { AnimatedText } from "@/components/ui/animated-text";
import { aboutData } from "@/data/portfolio";

export function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full min-h-screen py-32 px-4 flex flex-col items-center bg-transparent"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <AnimatedText 
            text="About Me" 
            className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]" 
          />
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Story Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-lg text-white/70 font-light"
          >
            {aboutData.story.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </motion.div>

          {/* Stats & Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {aboutData.stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group"
              >
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm uppercase tracking-wider text-white/50">
                  {stat.label}
                </div>
              </div>
            ))}

            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 backdrop-blur-sm sm:col-span-2 flex items-center justify-between group cursor-pointer hover:border-primary/60 transition-colors">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{aboutData.resumeBtn.title}</h3>
                <p className="text-sm text-white/60">{aboutData.resumeBtn.subtitle}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                &darr;
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
