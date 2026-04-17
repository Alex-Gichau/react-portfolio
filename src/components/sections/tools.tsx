"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Brush, 
  Terminal, 
  Layers, 
  PenTool, 
  Music2, 
  Workflow,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

const TOOLS = [
  { name: "Next.js", slug: "nextdotjs", category: "Dev" },
  { name: "React", slug: "react", category: "Dev" },
  { name: "TypeScript", slug: "typescript", category: "Dev" },
  { name: "Tailwind", slug: "tailwindcss", category: "Dev" },
  { name: "Figma", slug: "figma", category: "Design" },
  { name: "Photoshop", slug: "adobephotoshop", category: "Design" },
  { name: "Illustrator", slug: "adobeillustrator", category: "Design" },
  { name: "After Effects", slug: "adobeaftereffects", category: "Design" },
  { name: "FL Studio", slug: "flstudio", category: "Sound" },
  { name: "Yamaha", slug: "yamaha", category: "Sound" },
  { name: "Dante", slug: "audinate", category: "Sound" },
  { name: "Logic Pro", slug: "apple", category: "Sound" },
  { name: "Git", slug: "git", category: "Technical" },
  { name: "VS Code", slug: "visualstudiocode", category: "Technical" },
  { name: "CISCO", slug: "cisco", category: "Technical" },
  { name: "Supabase", slug: "supabase", category: "Dev" },
];

export default function Tools() {
  return (
    <section id="tools" className="py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col items-center mb-16">
         <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-3/10 border border-accent-3/20 mb-4"
         >
            <Terminal size={14} className="text-accent-3" />
            <span className="text-xs font-bold uppercase tracking-wider text-accent-3">Stack & Software</span>
         </motion.div>
         <h2 className="text-4xl md:text-6xl font-black text-center mb-4 section-title">My Toolkit</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
        {TOOLS.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="glass flex flex-col items-center justify-center p-4 md:p-8 rounded-[2rem] border-white/5 group hover:border-accent/20 transition-all cursor-default"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-accent/20 transition-colors">
              <img 
                src={`https://cdn.simpleicons.org/${tool.slug}/ffffff`} 
                alt={tool.name}
                className="w-5 h-5 md:w-6 md:h-6 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-foreground/40 group-hover:text-foreground transition-colors text-center">
              {tool.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
