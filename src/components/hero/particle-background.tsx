/* eslint-disable react-hooks/purity, react-hooks/set-state-in-effect */
"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import { Code2, Database, Terminal } from "lucide-react";

function StarfieldParticles() {
  const ref = useRef<THREE.Points>(null);
  // Drastically reduced particle count from 4000 to 1200 to reduce GPU load while maintaining the aesthetic
  const count = 1200;
  
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 15;
      p[i * 3 + 1] = (Math.random() - 0.5) * 15;
      p[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return p;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 30;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00f0ff"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

// Layer 5: Animated Cyber Grid
const CyberGrid = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-[2]">
    <div className="absolute inset-[-50%] bg-[linear-gradient(rgba(0,240,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.3)_1px,transparent_1px)] bg-[size:100px_100px] [transform:rotateX(60deg)_translateY(-100px)] [transform-origin:top_center] animate-[grid-scroll_20s_linear_infinite]" />
  </div>
);

// Layer 1: Aurora Lights
const AuroraLights = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1] opacity-40 mix-blend-screen">
    <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite]" />
    <div className="absolute top-[30%] -right-[10%] w-[40%] h-[60%] bg-accent/20 rounded-full blur-[150px] animate-[pulse_12s_ease-in-out_infinite_alternate]" />
    <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[40%] bg-secondary/15 rounded-full blur-[100px] animate-[pulse_10s_ease-in-out_infinite_reverse]" />
  </div>
);

// Layer 6: Anime Energy Particles
const AnimeEnergyParticles = () => {
  const [particles, setParticles] = useState<{ id: number; left: string; delay: number }[]>([]);

  useEffect(() => {
    // Reduced from 20 to 8 to prevent DOM-based animation lag
    const p = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
    }));
    setParticles(p);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[4]">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bottom-0 w-[2px] h-[40px] bg-gradient-to-t from-transparent via-primary to-white blur-[1px]"
          style={{ left: p.left }}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "-1000%", opacity: [0, 1, 0] }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Layer 8: Floating Holograms (Software Engineer Identity)
const FloatingHolograms = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[6] perspective-[1000px]">
      {[
        { icon: <Code2 />, size: 40, x: "10%", y: "20%", duration: 15, delay: 0 },
        { icon: <Database />, size: 30, x: "85%", y: "15%", duration: 18, delay: 2 },
        { icon: <Terminal />, size: 35, x: "80%", y: "70%", duration: 20, delay: 5 },
        { text: "{ API: REST }", size: 14, x: "15%", y: "60%", duration: 12, delay: 1 },
        { text: "const app = next()", size: 12, x: "70%", y: "40%", duration: 25, delay: 4 },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 100, rotateX: 45, rotateY: 45 }}
          animate={{ 
            opacity: [0, 0.4, 0],
            y: -100,
            rotateX: [45, -45],
            rotateY: [45, 90]
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "linear"
          }}
          className="absolute text-[#00E5FF] blur-[1px] opacity-30 font-mono tracking-widest font-bold"
          style={{ 
            left: item.x, 
            top: item.y,
            fontSize: item.size
          }}
        >
          {item.icon || item.text}
        </motion.div>
      ))}
    </div>
  );
};

export function ParticleBackground() {
  return (
    <div className="fixed inset-0 w-full h-full bg-transparent z-[-1] overflow-hidden pointer-events-none">
      <AuroraLights />
      
      {/* Layer 2 & 7: ThreeJS Stars and Particles */}
      <div className="absolute inset-0 z-[3]">
        <Canvas 
          camera={{ position: [0, 0, 3] }}
          dpr={[1, 1.5]} // Caps pixel ratio to prevent extreme lag on Retina/4K displays
          gl={{ antialias: false, powerPreference: "high-performance" }} // Optimizes WebGL rendering
        >
          <StarfieldParticles />
        </Canvas>
      </div>

      <CyberGrid />
      <AnimeEnergyParticles />
      <FloatingHolograms />
      
      {/* Matrix Overlay Mask to darken the edges */}
      <div className="absolute inset-0 z-[7] bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />
    </div>
  );
}
