"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink, Globe, Sparkles, FolderDot, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Tilt } from "@/components/tilt";

function ProjectCard({ project, index }: { project: any; index: number }) {
  const [loading, setLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      {/* Project Image/Video Container */}
      <Tilt className="perspective-1000">
        <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-muted border border-white/5 shadow-2xl group-hover:border-accent/30 transition-all duration-500" style={{ transform: "translateZ(50px)" }}>

          {loading && <Skeleton className="absolute inset-0 w-full h-full rounded-none" />}

          {/* Real Project Image */}
          <img
            src={project.image}
            alt={project.title}
            onLoad={() => setLoading(false)}
            className={cn(
              "absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700",
              loading ? "opacity-0" : "opacity-100"
            )}
          />

          {/* Gradient Overlay for better readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />

          {/* Overlay with links */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm flex items-center justify-center gap-4">
            <Link
              href={project.link}
              className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-accent/40"
            >
              <ExternalLink size={24} />
            </Link>
            <Link
              href={project.github}
              className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
            >
              <Globe size={24} />
            </Link>
          </div>
        </div>
      </Tilt>

      {/* Project Content */}
      <div className="mt-10 md:mt-12 px-2">
        <div className="flex flex-wrap gap-2 md:gap-3 mb-5">
          {project.tech.map((tag: string) => (
            <span key={tag} className="text-[10px] uppercase tracking-widest font-black px-3 py-1 rounded-full bg-white/5 border border-white/10 text-foreground/40 group-hover:text-accent group-hover:border-accent/20 transition-colors">
              {tag}
            </span>
          ))}
        </div>

        <Link href={project.link} className="inline-flex items-center gap-2 group/title">
          <h3 className="text-2xl md:text-3xl font-black group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <ArrowUpRight className="opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 transition-all text-accent" />
        </Link>

        <p className="text-foreground/40 mt-5 leading-relaxed line-clamp-2 italic">
          {project.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24 max-w-[90rem] mx-auto">
      <div className="flex flex-col items-center mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-2/10 border border-accent-2/20 mb-4"
        >
          <FolderDot size={14} className="text-accent-2" />
          <span className="text-xs font-bold uppercase tracking-wider text-accent-2">My Showcase</span>
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-black text-center mb-4 section-title">Featured Work</h2>
        <p className="text-foreground/40 max-w-xl text-center mt-4">
          A selection of my best work across software engineering and media production.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-14">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      <div className="mt-24 md:mt-28 flex justify-center">
        <Link href={PROJECTS[0].github} className="glass px-10 py-5 rounded-3xl font-bold flex items-center gap-3 hover:bg-white/10 hover:scale-105 transition-all active:scale-95 group">
          <Globe size={20} />
          More on GitHub
          <ArrowUpRight size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
