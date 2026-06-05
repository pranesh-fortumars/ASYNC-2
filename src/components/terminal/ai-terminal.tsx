"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Terminal, X, Minimize2, Maximize2 } from "lucide-react";

type Message = {
  id: string;
  sender: "system" | "user" | "ai";
  text: string;
};

const SYSTEM_RESPONSES: Record<string, string> = {
  "help": "Available commands: help, about, skills, projects, clear",
  "about": "Pranesh S is a Cybersecurity Engineer and AI Developer with expertise in building secure, scalable systems.",
  "skills": "Core Skills: Cybersecurity, Ethical Hacking, React, Next.js, Python, TensorFlow, Blockchain.",
  "projects": "Projects include: Decentralized E-Voting System, Sign Language Recognition AI, and Medical Patient Clustering.",
  "clear": "CLEAR_COMMAND"
};

function getAiResponse(input: string): string {
  const lowerInput = input.toLowerCase();
  
  if (SYSTEM_RESPONSES[lowerInput]) {
    return SYSTEM_RESPONSES[lowerInput];
  }
  
  if (lowerInput.includes("who are you") || lowerInput.includes("about")) {
    return "I am the automated personal assistant for Pranesh S. He is a Cybersecurity Engineer and AI Developer.";
  }
  
  if (lowerInput.includes("project") || lowerInput.includes("work")) {
    return "Pranesh has worked on AI Sign Language Recognition, Ethereum E-Voting, and Medical Data Clustering. Type 'projects' for a quick list.";
  }
  
  if (lowerInput.includes("cyber") || lowerInput.includes("security")) {
    return "Pranesh holds certifications like Cisco Ethical Hacker and specializes in system security, threat analysis, and secure architectures.";
  }
  
  if (lowerInput.includes("hire") || lowerInput.includes("resume") || lowerInput.includes("download")) {
    return "You can reach out to Pranesh via the Contact form below, or connect with him on LinkedIn. Resume download functionality is being updated.";
  }

  return "Command not recognized. Type 'help' for a list of available commands, or ask me a question about Pranesh.";
}

export function AiTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", sender: "system", text: "PRANESH_OS v2.0.4 initialized." },
    { id: "2", sender: "ai", text: "Hello! I am Pranesh's AI Assistant. You can ask me questions about his experience, or type 'help' for terminal commands." }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now().toString(), sender: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    
    const response = getAiResponse(input.trim());
    
    if (response === "CLEAR_COMMAND") {
      setMessages([]);
    } else {
      setTimeout(() => {
        setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), sender: "ai", text: response }]);
      }, 400);
    }
    
    setInput("");
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all"
          >
            <Terminal size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className={`fixed z-50 flex flex-col bg-black/90 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden transition-all duration-300 ease-in-out
              ${isExpanded 
                ? 'inset-4 md:inset-10 rounded-2xl' 
                : 'bottom-6 right-6 w-[350px] md:w-[400px] h-[500px] rounded-2xl'
              }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-2 text-white/80">
                <Terminal size={16} className="text-primary" />
                <span className="text-sm font-mono tracking-wider">pranesh@sys: ~</span>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsExpanded(!isExpanded)} 
                  className="text-white/50 hover:text-white transition-colors"
                >
                  {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                </button>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="text-white/50 hover:text-red-500 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 overflow-y-auto p-4 font-mono text-sm space-y-3 custom-scrollbar">
              {messages.map((msg) => (
                <div key={msg.id} className="flex flex-col">
                  <div className="flex items-center gap-2 opacity-60 mb-1 text-xs">
                    {msg.sender === "user" && <span className="text-green-400">visitor@local</span>}
                    {msg.sender === "ai" && <span className="text-primary">ai@pranesh</span>}
                    {msg.sender === "system" && <span className="text-yellow-500">system</span>}
                  </div>
                  <div className={`leading-relaxed ${msg.sender === "system" ? "text-white/50" : "text-white/90"}`}>
                    {msg.sender === "user" ? `> ${msg.text}` : msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 bg-white/5">
              <div className="flex items-center gap-2 font-mono">
                <span className="text-primary animate-pulse">{'>'}</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter command or question..."
                  className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/20 text-sm"
                  autoFocus
                  autoComplete="off"
                />
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
