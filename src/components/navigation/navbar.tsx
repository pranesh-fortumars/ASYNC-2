"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Command, Palette } from "lucide-react";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("");

  const themes = [
    { id: "", name: "Professional" },
    { id: "theme-cyberpunk", name: "Cyberpunk" },
    { id: "theme-matrix", name: "Matrix" },
  ];

  const cycleTheme = () => {
    const currentIndex = themes.findIndex((t) => t.id === theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex].id;
    
    setTheme(nextTheme);
    
    // Remove all theme classes first
    document.documentElement.classList.remove("theme-cyberpunk", "theme-matrix");
    
    // Add new theme if not default
    if (nextTheme) {
      document.documentElement.classList.add(nextTheme);
    }
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 transition-all duration-300 ${
        scrolled ? "pt-2" : "pt-6"
      }`}
    >
      <nav
        className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-black/50 backdrop-blur-md border border-white/10 w-[90%] max-w-5xl"
            : "bg-transparent w-[95%] max-w-7xl"
        }`}
      >
        <Link href="/" className="text-xl font-bold tracking-tighter flex items-center gap-2">
          <span className="text-primary">&lt;</span>
          Pranesh S
          <span className="text-primary">/&gt;</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={cycleTheme}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition-colors border border-white/5"
            title="Cycle Theme"
          >
            <Palette size={16} />
            <span className="hidden sm:inline text-xs opacity-70">
              {themes.find(t => t.id === theme)?.name}
            </span>
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/10 backdrop-blur-sm">
            <Command size={16} />
            <span className="hidden sm:inline">Menu</span>
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
