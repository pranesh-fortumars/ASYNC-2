"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Re-run if value changes (e.g. from 0 to actual fetched value)
    if (inView && value > 0) {
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
  const [lcStats, setLcStats] = useState({
    totalSolved: 150, // default placeholders
    ranking: 50000,
    acceptanceRate: 65,
  });

  useEffect(() => {
    fetch("/api/leetcode")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.totalSolved) {
          setLcStats({
            totalSolved: data.totalSolved,
            ranking: data.ranking,
            acceptanceRate: data.acceptanceRate ? Math.floor(data.acceptanceRate) : 65,
          });
        }
      })
      .catch(() => {
        console.warn("Internal API route failed.");
      });
  }, []);

  const achievements = [
    {
      title: "Global Ranking",
      value: lcStats.ranking,
      suffix: "",
      description: "LeetCode Global Rank",
      icon: "🥇",
      color: "text-yellow-500",
    },
    {
      title: "Problems Solved",
      value: lcStats.totalSolved,
      suffix: "+",
      description: "Data Structures & Algorithms",
      icon: "💻",
      color: "text-primary",
    },
    {
      title: "Acceptance Rate",
      value: lcStats.acceptanceRate,
      suffix: "%",
      description: "Code efficiency & accuracy",
      icon: "🔥",
      color: "text-orange-500",
    },
    {
      title: "Bugs Hunted",
      value: 50,
      suffix: "+",
      description: "Vulnerabilities discovered",
      icon: "🐛",
      color: "text-green-500",
    },
  ];

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
            Live <span className="text-primary">Performance Metrics</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto" />
          <p className="mt-4 text-white/50 font-mono text-sm">Data synced via public APIs</p>
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
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-white/5 rounded-full blur-[50px] group-hover:bg-primary/10 transition-colors" />

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
