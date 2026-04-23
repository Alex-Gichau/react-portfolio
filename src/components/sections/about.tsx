"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Award, Briefcase, Sparkles, User } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";
import { cn } from "@/lib/utils";

const BentoCard = ({
  children,
  className,
  title,
  icon: Icon
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
  icon?: any;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={cn(
      "glass p-8 md:p-10 rounded-[2.5rem] border-white/5 relative overflow-hidden group",
      className
    )}
  >
    {title && (
      <div className="flex items-center gap-2 mb-5">
        {Icon && <Icon className="text-accent" size={18} />}
        <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/40">{title}</h3>
      </div>
    )}
    {children}
  </motion.div>
);

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 lg:py-40 px-6 md:px-12 lg:px-24 max-w-[90rem] mx-auto">
      <div className="flex flex-col items-center mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4"
        >
          <Sparkles size={14} className="text-accent" />
          <span className="text-xs font-bold uppercase tracking-wider text-accent">Get to know me</span>
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-black text-center mb-4 section-title">About Me</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-10 auto-rows-[minmax(200px,auto)]">

        {/* Bio Card */}
        <BentoCard className="md:col-span-8 md:row-span-2 flex flex-col justify-center" title="The Story" icon={User}>
          <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground/80">
            {PERSONAL_INFO.bio}
          </p>
        </BentoCard>

        {/* Location Card */}
        <BentoCard className="md:col-span-4" title="Location" icon={MapPin}>
          <div className="flex flex-col h-full justify-between pt-2">
            <span className="text-3xl font-black">{PERSONAL_INFO.location}</span>
            <div className="text-xs text-foreground/30 flex items-center gap-1 mt-2">
              Available for remote work worldwide
            </div>
          </div>
        </BentoCard>

        {/* Experience Stats */}
        <BentoCard className="md:col-span-4" title="Experience" icon={Award}>
          <div className="flex items-baseline gap-2 pt-2">
            <span className="text-6xl font-black gradient-text">3+</span>
            <span className="text-lg font-bold text-foreground/40 uppercase">Years</span>
          </div>
          <p className="text-sm text-foreground/60 mt-2">Working across Tech, Media and Production.</p>
        </BentoCard>

        {/* Availability Badge Card */}
        <BentoCard className="md:col-span-4 flex items-center justify-center text-center bg-accent/5" title="Status">
          <div className="flex flex-col items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse glow-cyan" />
            <span className="text-lg font-black uppercase tracking-tighter leading-none italic">
              Open to Connect
            </span>
          </div>
        </BentoCard>

        {/* Corporate Work Card */}
        <BentoCard className="md:col-span-4" title="Legacy" icon={Briefcase}>
          <h4 className="text-2xl font-bold mb-1">Corporate Exp</h4>
          <p className="text-sm text-foreground/50">Worked with various corporate entities across Kenya.</p>
        </BentoCard>

        {/* Random Quote/Motto Card */}
        <BentoCard className="md:col-span-4 bg-gradient-to-br from-accent-2/10 to-accent/10 border-accent-2/20">
          <div className="flex flex-col h-full justify-between italic">
            <span className="text-4xl font-serif">"</span>
            <p className="text-lg font-medium leading-snug">
              Moving digital boundaries through code, design and sound.
            </p>
          </div>
        </BentoCard>

      </div>
    </section>
  );
}
