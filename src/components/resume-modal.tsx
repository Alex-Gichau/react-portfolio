"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink, FileText, Share2 } from "lucide-react";
import { LINKS } from "@/lib/data";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] cursor-pointer"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] pointer-events-none p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-background w-full max-w-4xl h-[80vh] rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden pointer-events-auto flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h3 className="font-black text-lg">Curriculum Vitae</h3>
                    <p className="text-xs text-foreground/40 font-bold uppercase tracking-widest">Alex M. Gichau</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <a 
                    href={LINKS.resume} 
                    download
                    className="p-3 rounded-full bg-white/5 hover:bg-accent hover:text-white transition-all group"
                    title="Download PDF"
                  >
                    <Download size={18} />
                  </a>
                  <button 
                    onClick={onClose}
                    className="p-3 rounded-full bg-white/5 hover:bg-red-500/20 hover:text-red-500 transition-all"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Content / Preview */}
              <div className="flex-1 bg-white/5 relative group">
                <iframe 
                  src={LINKS.resume} 
                  className="w-full h-full border-none"
                  title="Resume Preview"
                />
                
                {/* Overlay Hint if iframe fails or looks weird on mobile */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="glass px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest border-white/10 shadow-2xl">
                      Interactive Preview
                   </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 bg-white/5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center gap-4">
                 <a 
                   href={LINKS.resume} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-accent rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-accent/20 active:scale-95 text-white"
                 >
                    Open Full Version <ExternalLink size={16} />
                 </a>
                 <button
                   onClick={onClose}
                   className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 glass hover:bg-white/10 rounded-2xl font-black text-sm uppercase tracking-widest transition-all active:scale-95"
                 >
                    Close Preview
                 </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
