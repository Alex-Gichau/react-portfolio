"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Video, X, Maximize2 } from "lucide-react";
import { VIDEO_REELS } from "@/lib/data";
import { cn } from "@/lib/utils";

const ReelCard = ({ reel, onPlay }: { reel: typeof VIDEO_REELS[0]; onPlay: (id: string) => void }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative aspect-[9/16] rounded-[2rem] overflow-hidden glass border-white/5 cursor-pointer"
      onClick={() => onPlay(reel.link)}
    >
      <img
        src={reel.thumbnail}
        alt={reel.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-16 h-16 rounded-full bg-accent text-background flex items-center justify-center shadow-2xl shadow-accent/40">
          <Play fill="currentColor" size={24} className="ml-1" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-lg font-bold mb-1 leading-tight">{reel.title}</h3>
        <p className="text-xs text-foreground/50 line-clamp-2">{reel.desc}</p>
      </div>

      <div className="absolute top-4 right-4 p-2 rounded-full bg-background/20 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
        <Maximize2 size={14} />
      </div>
    </motion.div>
  );
};

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="video" className="py-8 md:py-12 lg:py-16 px-6 md:px-12 lg:px-24 max-w-[90rem] mx-auto">
      <div className="flex flex-col items-center mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-2/10 border border-accent-2/20 mb-4"
        >
          <Video size={14} className="text-accent-2" />
          <span className="text-xs font-bold uppercase tracking-wider text-accent-2">Visuals</span>
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-black text-center mb-4 section-title">Video Reels</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {VIDEO_REELS.map((reel, i) => (
          <motion.div
            key={reel.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <ReelCard reel={reel} onPlay={setActiveVideo} />
          </motion.div>
        ))}
      </div>

      {/* Video Overlay Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          >
            <div 
              className="absolute inset-0 bg-background/90 backdrop-blur-xl" 
              onClick={() => setActiveVideo(null)}
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-[400px] aspect-[9/16] bg-black rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl"
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <X size={20} />
              </button>
              
              <iframe
                src={`https://drive.google.com/file/d/${activeVideo}/preview`}
                className="w-full h-full border-none"
                allow="autoplay"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
