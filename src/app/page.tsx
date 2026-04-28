"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Music,
  ArrowRight,
  Download,
  Mail,
  ChevronDown,
  X,
  Globe,
  Link as LinkIcon
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Tools from "@/components/sections/tools";
import ExperienceTimeline from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import Magnetic from "@/components/magnetic";
import ResumeButton from "@/components/resume-button";

export default function Home() {
  return (
    <div id="home" className="relative min-h-screen bg-background selection:bg-accent/30 selection:text-accent-foreground overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[20%] -right-[10%] w-[35%] h-[35%] bg-accent-2/10 rounded-full blur-[100px] animate-pulse delay-700" />
        <div className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] bg-accent-3/10 rounded-full blur-[110px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-grid mask-linear-b" />
        <div className="absolute inset-0 noise opacity-20" />
      </div>


      {/* Hero Section */}
      <main className="relative z-10 pt-36 pb-28 md:pt-56 md:pb-36 px-6 md:px-16 lg:px-24 max-w-[90rem] mx-auto flex flex-col items-center">

        <Magnetic>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-10 md:mb-12 border-accent/20 cursor-default"
          >
            <span className="pulse-dot" />
            <span className="text-xs font-semibold tracking-wide text-accent-foreground/80 lowercase">Available for new opportunities</span>
          </motion.div>
        </Magnetic>

        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-accent"
          >
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-background bg-muted">
              <img src="/profile.jpg" alt="Alex Gichau" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-background rounded-full p-1.5">
              <div className="bg-green-500 w-4 h-4 rounded-full border-2 border-background animate-pulse glow-cyan" />
            </div>
          </motion.div>

          <motion.h5
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-accent font-mono text-sm tracking-[0.3em] uppercase mb-6"
          >
            Alex M. Gichau
          </motion.h5>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-8xl font-black tracking-tight mb-10 md:mb-14 leading-[1.1]"
          >
            Crafting <span className="gradient-text animate-shimmer">digital</span> <br />
            experiences that move.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-14 md:mb-16 leading-relaxed"
          >
            I am a professional <span className="text-foreground font-semibold">Software Engineer</span>,
            creative <span className="text-foreground font-semibold">Graphic Designer</span>, and expert
            <span className="text-foreground font-semibold"> Sound Engineer</span> building high-performance, visual,
            and auditory masterpieces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8"
          >
            <Link
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 bg-foreground text-background font-bold rounded-2xl hover:opacity-90 transition-all flex items-center justify-center gap-2 group shadow-xl"
            >
              View Work <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <ResumeButton variant="glass" className="w-full sm:w-auto" />

            <Link
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/10 font-bold rounded-2xl transition-all flex items-center justify-center gap-2"
            >
              Let's Connect <Mail size={18} />
            </Link>
          </motion.div>
        </div>

        {/* Role Cards / Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-36 md:mt-44 w-full">
          {[
            {
              title: "Engineering",
              desc: "Building scalable web & mobile apps with modern frameworks and pixel-perfect UI.",
              icon: <Code2 className="text-accent" size={32} />,
              color: "glow-purple",
              image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000"
            },
            {
              title: "Design",
              desc: "Crafting visual identities, brand stories, and stunning 2D/3D graphics.",
              icon: <Palette className="text-accent-2" size={32} />,
              color: "glow-cyan",
              image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000"
            },
            {
              title: "Sound",
              desc: "Professional audio production, mixing, and immersive sound engineering.",
              icon: <Music className="text-accent-3" size={32} />,
              color: "glow-amber",
              image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000"
            }
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + (i * 0.1) }}
              className={cn(
                "glass p-0 rounded-[32px] border-white/5 relative group cursor-pointer hover:border-accent/20 transition-all card-hover overflow-hidden",
                item.color
              )}
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-6 left-8 w-14 h-14 rounded-2xl bg-background/50 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
              </div>

              <div className="p-8 pt-4">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-foreground/50 text-sm leading-relaxed">
                  {item.desc}
                </p>
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={18} className="-rotate-45" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="mt-36 md:mt-44 text-foreground/20"
        >
          <ChevronDown size={32} strokeWidth={1} />
        </motion.div>
      </main>

      <div className="w-full space-y-4 md:space-y-8 lg:space-y-12">
        <About />
        <Skills />
        <Tools />
        <ExperienceTimeline />
        <Projects />
        <Contact />
      </div>

      {/* Background Graphic Decoration */}
      <div className="absolute top-[10%] right-[5%] animate-rotate-slow opacity-[0.02] pointer-events-none hidden lg:block">
        <svg width="400" height="400" viewBox="0 0 400 400">
          <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="10 10" />
          <rect x="100" y="100" width="200" height="200" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(45 200 200)" />
        </svg>
      </div>

      <footer className="py-16 md:py-20 px-6 border-t border-border/50 relative z-10 bg-background/50 mt-16 md:mt-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <span className="font-bold text-xl">geeshau<span className="text-accent">.</span></span>
            <p className="text-sm text-foreground/40">© Alex M. Gichau. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="p-3 glass rounded-full hover:scale-110 transition-transform"><X size={18} /></Link>
            <Link href="#" className="p-3 glass rounded-full hover:scale-110 transition-transform"><LinkIcon size={18} /></Link>
            <Link href="https://github.com/Alex-Gichau" className="p-3 glass rounded-full hover:scale-110 transition-transform"><Globe size={18} /></Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
