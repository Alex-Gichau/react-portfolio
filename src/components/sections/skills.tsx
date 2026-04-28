"use client";

import React from "react";
import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";
import { Sparkles, Terminal } from "lucide-react";

export default function Skills() {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-8 md:py-12 lg:py-16 px-6 md:px-12 lg:px-24 max-w-[90rem] mx-auto">
      <div className="flex flex-col items-center mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4"
        >
          <Terminal size={14} className="text-accent" />
          <span className="text-xs font-bold uppercase tracking-wider text-accent">Capabilities</span>
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-black text-center mb-4 section-title">My Toolkit</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
        {categories.map((cat, i) => (
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass p-8 md:p-10 rounded-[2rem] border-white/5"
          >
            <h3 className="text-xl font-black mb-7 md:mb-8 uppercase tracking-tighter text-accent">{cat}</h3>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {SKILLS.filter(s => s.category === cat).map(skill => (
                <div
                  key={skill.name}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 hover:border-accent/30 transition-all cursor-default"
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
