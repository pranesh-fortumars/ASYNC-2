"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, TrackballControls } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

const technologies = [
  "React", "Next.js", "Python", "Java", "AWS", "Docker", "Linux", 
  "Ethereum", "Solidity", "TensorFlow", "TypeScript", "Node.js", 
  "TailwindCSS", "PostgreSQL", "MongoDB", "Git", "Kubernetes",
  "GraphQL", "Framer Motion", "Three.js", "Web3.js", "Burp Suite"
];

function Word({ children, position }: { children: string; position: THREE.Vector3 }) {
  const color = new THREE.Color();
  const fontProps = {
    fontSize: 0.8,
    letterSpacing: -0.05,
    lineHeight: 1,
    'material-toneMapped': false
  };

  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // We can't use useState for standard three.js loops easily for performance, but it's fine for simple hover.
  // We'll just change color dynamically
  useFrame(() => {
    if (ref.current) {
      const material = ref.current.material as THREE.MeshBasicMaterial;
      material.color.lerp(color.set(hovered ? "#00f0ff" : "#ffffff"), 0.1);
    }
  });

  return (
    <Text
      ref={ref as any}
      onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
      onPointerOut={() => setHovered(false)}
      position={position}
      {...fontProps}
    >
      {children}
    </Text>
  );
}

// Just a simple wrapper, we'll implement without external hooks if we need simple sphere distribution
import { useState } from "react";

function Cloud({ count = 8, radius = 5 }) {
  // Create a sphere of words using Fibonacci sphere algorithm
  const words = useMemo(() => {
    const temp = [];
    const phi = Math.acos(-1) * (3 - Math.sqrt(5)); // golden angle
    
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y); // radius at y
      
      const theta = phi * i; // golden angle increment
      
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;
      
      const vector = new THREE.Vector3(x * radius, y * radius, z * radius);
      
      const word = technologies[i % technologies.length];
      temp.push([vector, word]);
    }
    return temp;
  }, [count, radius]);

  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      // Auto rotate
      groupRef.current.rotation.y += delta * 0.1;
      groupRef.current.rotation.x += delta * 0.05;
      
      // Make words always face the camera
      groupRef.current.children.forEach((child) => {
        child.quaternion.copy(state.camera.quaternion);
      });
    }
  });

  return (
    <group ref={groupRef}>
      {words.map(([pos, word], index) => (
        <Word key={index} position={pos as THREE.Vector3}>
          {word as string}
        </Word>
      ))}
    </group>
  );
}

export function TechSphereSection() {
  return (
    <section className="relative w-full py-32 bg-[#000000] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-black to-black" />
      
      <div className="relative z-10 flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/3"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tech <span className="text-primary">Arsenal</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mb-6" />
          <p className="text-white/60 leading-relaxed text-lg">
            A comprehensive overview of the tools, languages, and frameworks I use to bring ideas to life. From building secure networks to training AI models and crafting beautiful web applications, I always pick the right tool for the job.
          </p>
        </motion.div>

        <div className="w-full md:w-2/3 h-[500px] md:h-[600px] cursor-grab active:cursor-grabbing">
          <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
            <fog attach="fog" args={['#000000', 10, 25]} />
            <ambientLight intensity={1} />
            <Cloud count={technologies.length} radius={7} />
            <TrackballControls noPan noZoom rotateSpeed={2} />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
