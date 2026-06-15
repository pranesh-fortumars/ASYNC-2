"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Text, OrbitControls, Float, Line } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import { InViewWrapper } from "@/components/layout/in-view-wrapper";

const skillCategories = [
  {
    name: "Frontend",
    color: "#00f0ff",
    radius: 3.5,
    speed: 0.2,
    inclination: 0.2, // tilt of the orbit
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Backend",
    color: "#00ff88",
    radius: 4.5,
    speed: 0.15,
    inclination: -0.4,
    skills: ["Node.js", "Python", "Java", "GraphQL", "REST APIs"],
  },
  {
    name: "Database",
    color: "#ffc107",
    radius: 5.5,
    speed: 0.1,
    inclination: 0.6,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
  },
  {
    name: "Cloud & DevOps",
    color: "#ff7b00",
    radius: 6.5,
    speed: 0.08,
    inclination: -0.3,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    name: "Cybersecurity",
    color: "#ff003c",
    radius: 3.0,
    speed: 0.25,
    inclination: 0.8,
    skills: ["Pen Testing", "Ethical Hacking", "Cryptography", "Network Security"],
  },
  {
    name: "AI & ML",
    color: "#7a00ff",
    radius: 4.0,
    speed: 0.18,
    inclination: -0.7,
    skills: ["Deep Learning", "LLMs", "Computer Vision", "PyTorch"],
  },
  {
    name: "Blockchain",
    color: "#ff00ea",
    radius: 5.0,
    speed: 0.12,
    inclination: 0.4,
    skills: ["Ethereum", "Smart Contracts", "Solidity", "Web3.js"],
  },
  {
    name: "System Design",
    color: "#ffffff",
    radius: 6.0,
    speed: 0.09,
    inclination: -0.6,
    skills: ["Microservices", "Event-Driven Architecture", "Scalability", "System Architecture"],
  },
];

type SkillCategory = {
  name: string;
  color: string;
  radius: number;
  speed: number;
  inclination: number;
  skills: string[];
};

function Planet({ data, onHover, index }: { data: SkillCategory; onHover: (d: SkillCategory | null) => void; index: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Group>(null);
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHover] = useState(false);

  // Random starting phase so planets don't start in a line
  const startPhase = index * (Math.PI / 4);

  useFrame((state) => {
    if (groupRef.current && !hovered) {
      // Calculate orbital position
      const t = state.clock.getElapsedTime() * data.speed + startPhase;
      const x = Math.cos(t) * data.radius;
      const z = Math.sin(t) * data.radius;
      const y = Math.sin(t) * data.radius * data.inclination;
      
      groupRef.current.position.set(x, y, z);
    }
    
    // Make text always face the camera
    if (textRef.current) {
      textRef.current.quaternion.copy(state.camera.quaternion);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere
          ref={ref}
          args={[0.6, 32, 32]}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHover(true);
            onHover(data);
            document.body.style.cursor = 'pointer';
          }}
          onPointerOut={() => {
            setHover(false);
            onHover(null);
            document.body.style.cursor = 'auto';
          }}
        >
          <meshStandardMaterial
            color={data.color}
            emissive={data.color}
            emissiveIntensity={hovered ? 0.8 : 0.2}
            wireframe={hovered}
          />
        </Sphere>
        <group ref={textRef}>
          <Text
            position={[0, -1.2, 0]}
            fontSize={0.3}
            color="white"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.02}
            outlineColor="#000000"
          >
            {data.name}
          </Text>
        </group>
      </Float>
    </group>
  );
}

function Galaxy({ setHoveredData }: { setHoveredData: (d: SkillCategory | null) => void }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Very slow global rotation to give a dynamic feel
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
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

      {/* Spatial Orbit Rings */}
      {skillCategories.map((cat, i) => {
        const points = [];
        for (let angle = 0; angle <= Math.PI * 2 + 0.1; angle += 0.1) {
          points.push(new THREE.Vector3(
            Math.cos(angle) * cat.radius, 
            Math.sin(angle) * cat.radius * cat.inclination, 
            Math.sin(angle) * cat.radius
          ));
        }
        return (
          <group key={`orbit-${i}`}>
            <Line points={points} color={cat.color} opacity={0.15} transparent lineWidth={1} />
          </group>
        );
      })}

      {skillCategories.map((category, idx) => (
        <Planet key={idx} index={idx} data={category} onHover={setHoveredData} />
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
        <InViewWrapper>
          <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
            <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
            <Galaxy setHoveredData={setHoveredData} />
          </Canvas>
        </InViewWrapper>

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
