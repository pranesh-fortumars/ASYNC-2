"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Terminal, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand-icons";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative w-full py-32 px-4 flex flex-col items-center bg-[#020202] overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-6xl w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Contact Info & AI Vibe */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <div className="flex items-center gap-3 text-primary mb-4">
            <Terminal size={24} />
            <span className="font-mono uppercase tracking-wider text-sm">System Ready</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Initiate <span className="text-primary">Connection</span>
          </h2>
          <p className="text-white/60 mb-10 text-lg">
            Whether you have a security challenge, an AI concept, or just want to connect, my inbox is always open. Let's build something secure and extraordinary.
          </p>

          <div className="flex flex-col gap-6">
            <a href="mailto:contact@pranesh.s" className="flex items-center gap-4 text-white/80 hover:text-primary transition-colors group w-max">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail size={20} />
              </div>
              <span className="font-medium text-lg">contact@pranesh.s</span>
            </a>
            
            <div className="flex gap-4 mt-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:text-primary hover:bg-primary/20 transition-colors border border-white/10">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:text-primary hover:bg-primary/20 transition-colors border border-white/10">
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Interactive Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl relative overflow-hidden">
            {/* Edge Glow */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-mono text-white/50 uppercase tracking-wider">Your Identity</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-mono text-white/50 uppercase tracking-wider">Communication Channel</label>
                <input 
                  type="email" 
                  required
                  placeholder="john@example.com" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-mono text-white/50 uppercase tracking-wider">Encrypted Payload</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Your message here..." 
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || submitted}
                className="w-full mt-4 bg-primary text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                  />
                ) : submitted ? (
                  "Payload Delivered ✓"
                ) : (
                  <>
                    <Send size={18} />
                    Transmit Data
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
