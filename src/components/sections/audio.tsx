"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Music, Volume2, Sparkles } from "lucide-react";
import { AUDIO_SAMPLES } from "@/lib/data";
import { cn } from "@/lib/utils";

const Waveform = ({ isPlaying }: { isPlaying: boolean }) => {
  return (
    <div className="flex items-center gap-[2px] h-8 w-32 md:w-48 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ height: 4 }}
          animate={{
            height: isPlaying 
              ? [4, Math.random() * 24 + 4, 4] 
              : 4
          }}
          transition={{
            duration: 0.5 + Math.random() * 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={cn(
            "w-1 rounded-full",
            isPlaying ? "bg-accent" : "bg-foreground/10"
          )}
        />
      ))}
    </div>
  );
};

const AudioItem = ({ sample }: { sample: typeof AUDIO_SAMPLES[0] }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Google Drive Direct Link Helper
  const audioUrl = sample.link.startsWith("http") 
    ? sample.link 
    : `https://docs.google.com/uc?export=download&id=${sample.link}`;

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Pause all other audio elements if needed (optional logic)
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
  }, []);

  return (
    <div className="group glass p-4 md:p-6 rounded-3xl border-white/5 hover:border-accent/20 transition-all flex flex-col md:flex-row items-center gap-6">
      <audio ref={audioRef} src={audioUrl} preload="none" />
      
      <button
        onClick={togglePlay}
        className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-background hover:scale-110 transition-transform shadow-lg shadow-accent/20 shrink-0"
      >
        {isPlaying ? <Pause fill="currentColor" /> : <Play className="ml-1" fill="currentColor" />}
      </button>

      <div className="flex-1 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
          <h3 className="text-lg font-bold">{sample.title}</h3>
          <span className="text-[10px] uppercase tracking-widest font-black px-2 py-0.5 rounded-md bg-accent/10 text-accent w-fit mx-auto md:mx-0">
            {sample.category}
          </span>
        </div>
        <p className="text-sm text-foreground/40">{sample.desc}</p>
      </div>

      <div className="flex items-center gap-6 shrink-0">
        <Waveform isPlaying={isPlaying} />
        <div className="hidden sm:flex items-center gap-2 text-foreground/20">
          <Volume2 size={16} />
          <span className="text-xs font-mono">{sample.duration}</span>
        </div>
      </div>
    </div>
  );
};

export default function AudioSection() {
  return (
    <section id="audio" className="py-8 md:py-12 lg:py-16 px-6 md:px-12 lg:px-24 max-w-[90rem] mx-auto">
      <div className="flex flex-col items-center mb-10 md:mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4"
        >
          <Music size={14} className="text-accent" />
          <span className="text-xs font-bold uppercase tracking-wider text-accent">Production</span>
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-black text-center mb-4 section-title">Audio Showcase</h2>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {AUDIO_SAMPLES.map((sample, i) => (
          <motion.div
            key={sample.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <AudioItem sample={sample} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
