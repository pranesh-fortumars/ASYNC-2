"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Text, OrbitControls, Float, Line } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "Cyber Security",
    color: "#ff003c",
    position: [2.5, 1, 0] as [number, number, number],
    skills: ["Pen Testing", "Ethical Hacking", "Digital Forensics"],
  },
  {
    name: "Development",
    color: "#00f0ff",
    position: [-2.5, -1, 0] as [number, number, number],
    skills: ["React", "Next.js", "TypeScript", "Python"],
  },
  {
    name: "AI & ML",
    color: "#7a00ff",
    position: [0, 2.5, 1] as [number, number, number],
    skills: ["Deep Learning", "Computer Vision", "LLMs"],
  },
  {
    name: "Blockchain",
    color: "#00ff88",
    position: [0, -2.5, -1] as [number, number, number],
    skills: ["Ethereum", "Smart Contracts", "Solidity"],
  },
];

type SkillCategory = {
  name: string;
  color: string;
  position: [number, number, number];
  skills: string[];
};

function Planet({ data, onHover }: { data: SkillCategory; onHover: (d: SkillCategory | null) => void }) {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group position={data.position}>
        <Sphere
          ref={ref}
          args={[0.6, 32, 32]}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHover(true);
            onHover(data);
          }}
          onPointerOut={() => {
            setHover(false);
            onHover(null);
          }}
        >
          <meshStandardMaterial
            color={data.color}
            emissive={data.color}
            emissiveIntensity={hovered ? 0.8 : 0.2}
            wireframe={hovered}
          />
        </Sphere>
        <Text
          position={[0, -1, 0]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {data.name}
        </Text>
      </group>
    </Float>
  );
}

function Galaxy({ setHoveredData }: { setHoveredData: (d: SkillCategory | null) => void }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      {/* Central Neural Star */}
      <Sphere args={[0.8, 32, 32]}>
        <meshStandardMaterial color="#ffffff" emissive="#00f0ff" emissiveIntensity={2} />
      </Sphere>

      {/* Orbit Rings / Neural Connections */}
      {skillCategories.map((cat, i) => {
        const radius = Math.sqrt(cat.position[0] ** 2 + cat.position[1] ** 2 + cat.position[2] ** 2);
        const points = [];
        for (let angle = 0; angle <= Math.PI * 2; angle += 0.1) {
          // Approximate orbit path for visual effect
          points.push(new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * (cat.position[1]/2), Math.sin(angle) * radius));
        }
        return (
          <group key={`orbit-${i}`}>
            <Line points={points} color={cat.color} opacity={0.2} transparent lineWidth={1} />
            <Line points={[new THREE.Vector3(0,0,0), new THREE.Vector3(...cat.position)]} color={cat.color} opacity={0.3} transparent lineWidth={2} dashed dashSize={0.2} gapSize={0.1} />
          </group>
        );
      })}

      {skillCategories.map((category, idx) => (
        <Planet key={idx} data={category} onHover={setHoveredData} />
      ))}
    </group>
  );
}

export function SkillsSection() {
  const [hoveredData, setHoveredData] = useState<SkillCategory | null>(null);

  return (
    <section id="skills" className="relative w-full min-h-screen bg-transparent py-20 flex flex-col items-center">
      <div className="z-10 text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]"
        >
          Neural Skill <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Universe</span>
        </motion.h2>
        <p className="text-white/50 max-w-2xl mx-auto px-4 font-mono uppercase text-sm tracking-widest">
          Interactive Data Visualization // Hover nodes to inspect clusters
        </p>
      </div>

      <div className="w-full h-[600px] relative">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
          <Galaxy setHoveredData={setHoveredData} />
        </Canvas>

        {/* Info Panel Overlay */}
        {hoveredData && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          >
            <div className="p-6 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 text-center w-64 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <h3 className="text-xl font-bold mb-2" style={{ color: hoveredData.color }}>
                {hoveredData.name}
              </h3>
              <ul className="space-y-1">
                {hoveredData.skills.map((skill: string, idx: number) => (
                  <li key={idx} className="text-sm text-white/80">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
