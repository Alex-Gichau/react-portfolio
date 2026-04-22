"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Sparkles } from "lucide-react";
import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24 max-w-[90rem] mx-auto relative">
      <div className="flex flex-col items-center mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4"
        >
          <Briefcase size={14} className="text-accent" />
          <span className="text-xs font-bold uppercase tracking-wider text-accent">Journey</span>
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-black text-center mb-4 section-title">Professional Path</h2>
      </div>

      <div className="relative border-l border-white/5 ml-4 md:ml-0 md:left-1/2">
        {EXPERIENCE.map((item, i) => (
          <motion.div
            key={item.title + item.company}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative mb-20 md:mb-24 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right md:ml-0" : "md:pl-16 md:ml-auto"
              }`}
          >
            {/* Timeline Dot */}
            <div className="absolute top-0 left-[-5px] md:left-auto md:right-[-9px] w-4 h-4 rounded-full bg-accent border-4 border-background z-10 hidden md:block" style={{
              left: i % 2 === 0 ? "auto" : "-9px",
              right: i % 2 === 0 ? "-9px" : "auto"
            }} />

            <div className="md:hidden absolute top-0 left-[-21px] w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <Briefcase size={16} className="text-accent" />
            </div>

            <div className="glass p-8 md:p-10 rounded-[2rem] border-white/5 hover:border-accent/20 transition-all group">
              <div className={`flex items-center gap-2 mb-5 text-accent font-bold text-xs uppercase tracking-widest ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                <Calendar size={14} />
                {item.period}
              </div>
              <a href={item.link}><h3 className="text-2xl font-black mb-1 group-hover:text-accent transition-colors">{item.title}</h3></a>
              <div className="text-lg font-bold text-foreground/60 mb-5">{item.company}</div>
              <p className="text-foreground/40 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Mobile vertical line fix */}
        <div className="md:hidden absolute top-0 bottom-0 left-[-16.5px] w-[1px] bg-white/5" />
      </div>
    </section>
  );
}
