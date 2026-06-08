import { ShieldCheck, BrainCircuit, Code, Hexagon, Sparkles } from "lucide-react";

export const heroData = {
  name: "Pranesh S",
  titles: [
    "SOFTWARE DEVELOPER",
    "CYBERSECURITY ENGINEER",
    "AI & ML ENTHUSIAST",
    "FULL STACK DEVELOPER",
    "BLOCKCHAIN DEVELOPER"
  ],
  roles: [
    { id: 'cyber', icon: ShieldCheck, text: "Cybersecurity Engineer", color: "text-[#00E5FF]" },
    { id: 'ai', icon: BrainCircuit, text: "AI & ML Enthusiast", color: "text-[#b026ff]" },
    { id: 'fullstack', icon: Code, text: "Full Stack Developer", color: "text-[#ffaa00]" },
    { id: 'blockchain', icon: Hexagon, text: "Blockchain Developer", color: "text-[#00E5FF]" },
    { id: 'innovator', icon: Sparkles, text: "Problem Solver | Innovator | Tech Explorer", color: "text-[#4ade80]" },
  ],
  skills: [
    { name: "Frontend Development", value: 95 },
    { name: "Backend Development", value: 93 },
    { name: "Cybersecurity", value: 98 },
    { name: "AI / ML", value: 92 },
    { name: "DevOps", value: 90 },
    { name: "Problem Solving", value: 99 },
  ],
  github: {
    repos: 48,
    commits: 1245,
    contributions: 732,
  },
  systemStatus: "All Systems Operational",
  focusAreas: [
    "Building Secure Applications...",
    "Training AI Models...",
    "Exploring Blockchain...",
    "Learning New Technologies..."
  ],
  codeTerminal: `const buildFuture = async () => {\n  await innovate();\n  await secure();\n  await scale();\n  return "Building Solutions";\n}`
};

export const aboutData = {
  title: "About Me",
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Certifications", value: "5+" },
  ],
  story: [
    "I am a passionate <strong class='text-white'>Cybersecurity Engineer</strong> and <strong class='text-white'>AI Developer</strong> dedicated to building secure, intelligent, and scalable digital solutions.",
    "My journey began with a deep curiosity for how systems work, which evolved into a mission to protect them. I specialize in penetration testing, ethical hacking, and integrating AI to solve complex problems.",
    "Beyond security, I love crafting immersive web experiences and exploring the potential of blockchain technology. I believe in writing code that is not only functional but also beautiful and secure by design."
  ],
  resumeBtn: {
    title: "Download Resume",
    subtitle: "Get a detailed look at my experience."
  }
};
