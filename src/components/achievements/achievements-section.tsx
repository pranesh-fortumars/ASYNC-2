"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const achievements = [
  {
    title: "Code Conquest",
    value: 1,
    suffix: "st",
    description: "Leaderboard Rank in National Hackathon",
    icon: "🥇",
    color: "text-yellow-500",
  },
  {
    title: "POTD Streak",
    value: 365,
    suffix: "+",
    description: "Days of continuous coding and problem solving",
    icon: "🔥",
    color: "text-orange-500",
  },
  {
    title: "Bugs Found",
    value: 50,
    suffix: "+",
    description: "Vulnerabilities discovered and reported",
    icon: "🐛",
    color: "text-green-500",
  },
  {
    title: "Tech Competitions",
    value: 10,
    suffix: "x",
    description: "Winner or finalist in various events",
    icon: "🏆",
    color: "text-blue-500",
  },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = Math.max(16, duration / end);

      const timer = setInterval(() => {
        start += Math.max(1, Math.ceil(end / (duration / 16)));
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export function AchievementsSection() {
  return (
    <section className="relative w-full py-32 px-4 flex flex-col items-center bg-[#000000]">
      <div className="max-w-6xl w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Wall of <span className="text-yellow-500">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/20 transition-colors group text-center flex flex-col items-center relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-white/5 rounded-full blur-[50px] group-hover:bg-yellow-500/10 transition-colors" />

              <div className="text-4xl mb-4 relative z-10">{item.icon}</div>
              <div
                className={`text-5xl font-bold mb-2 relative z-10 ${item.color}`}
              >
                <Counter value={item.value} suffix={item.suffix} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">
                {item.title}
              </h3>
              <p className="text-sm text-white/50 relative z-10">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
