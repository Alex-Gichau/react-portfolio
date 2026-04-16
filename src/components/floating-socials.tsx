"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LINKS } from "@/lib/data";

const SOCIAL_CONFIG = [
  { name: "GitHub", slug: "github", url: LINKS.github },
  { name: "Behance", slug: "behance", url: LINKS.behance },
  { name: "Instagram", slug: "instagram", url: LINKS.instagram || "#" },
  { name: "Pinterest", slug: "pinterest", url: "#" },
];

export default function FloatingSocials() {
  return (
    <div className="fixed left-6 bottom-6 z-[40] flex flex-col gap-3">
      {SOCIAL_CONFIG.map((social, i) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 + (i * 0.1), duration: 0.5 }}
          whileHover={{ x: 5, scale: 1.1 }}
          className="glass aspect-square p-3 rounded-2xl border-white/5 hover:border-accent/40 hover:bg-accent/10 transition-all flex items-center justify-center group"
        >
          <img 
            src={`https://cdn.simpleicons.org/${social.slug}/ffffff`} 
            alt={social.name}
            className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity"
          />
          <div className="absolute left-full ml-3 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md border border-white/10 pointer-events-none">
            {social.name}
          </div>
        </motion.a>
      ))}
    </div>
  );
}
