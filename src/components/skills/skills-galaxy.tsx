"use client";

import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Text, OrbitControls, Float } from "@react-three/drei";
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

function Planet({ data, onHover }: { data: any; onHover: (d: any | null) => void }) {
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
          onPointerOut={(e) => {
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

function Galaxy({ setHoveredData }: { setHoveredData: (d: any | null) => void }) {
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
      
      {/* Central Star */}
      <Sphere args={[0.8, 32, 32]}>
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1} />
      </Sphere>

      {skillCategories.map((category, idx) => (
        <Planet key={idx} data={category} onHover={setHoveredData} />
      ))}
    </group>
  );
}

export function SkillsSection() {
  const [hoveredData, setHoveredData] = useState<any | null>(null);

  return (
    <section id="skills" className="relative w-full min-h-screen bg-[#020202] py-20 flex flex-col items-center">
      <div className="z-10 text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 text-white"
        >
          Skills <span className="text-primary">Galaxy</span>
        </motion.h2>
        <p className="text-white/50 max-w-2xl mx-auto px-4">
          Explore my technical universe. Hover over the planets to discover my expertise in different domains.
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
