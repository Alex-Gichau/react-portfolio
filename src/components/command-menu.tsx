"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Home, User, FolderDot, MessageSquare, Terminal, Command } from "lucide-react";
import { useRouter } from "next/navigation";

const ACTIONS = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About Me", href: "#about" },
  { icon: Terminal, label: "Tools & Stack", href: "#tools" },
  { icon: FolderDot, label: "Projects", href: "#projects" },
  { icon: MessageSquare, label: "Contact", href: "#contact" },
];

export default function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const filteredActions = ACTIONS.filter((action) =>
    action.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleAction = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* K Toggle Trigger Hint (Bottom Right) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-6 right-6 z-[40] hidden md:block"
      >
        <button
          onClick={() => setOpen(true)}
          className="glass aspect-square p-4 rounded-2xl border-white/10 hover:border-accent/50 group transition-all"
        >
          <Command size={20} className="text-foreground/40 group-hover:text-accent" />
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md border border-white/10">
            Press <span className="text-accent">⌘K</span>
          </div>
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="relative w-full max-w-lg glass border-white/10 rounded-[2rem] shadow-2xl overflow-hidden"
            >
              <div className="p-4 border-b border-white/5 flex items-center gap-3">
                <Search size={18} className="text-foreground/40" />
                <input
                  autoFocus
                  placeholder="Search actions or pages..."
                  className="w-full bg-transparent border-none outline-none py-2 text-lg text-foreground placeholder:text-foreground/20"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>

              <div className="p-2 max-h-[350px] overflow-y-auto">
                <div className="px-3 py-2 text-[10px] font-black uppercase tracking-widest text-foreground/40">
                  Navigation
                </div>
                {filteredActions.map((action) => (
                  <button
                    key={action.label}
                    onClick={() => handleAction(action.href)}
                    className="w-full flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-accent/10 hover:text-accent transition-all group group-hover:translate-x-1"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <action.icon size={16} />
                    </div>
                    <span className="font-bold">{action.label}</span>
                    <span className="ml-auto text-[10px] text-foreground/20 opacity-0 group-hover:opacity-100">Jump to Section</span>
                  </button>
                ))}

                {filteredActions.length === 0 && (
                  <div className="p-8 text-center text-foreground/40 text-sm">
                    No results found for "{query}"
                  </div>
                )}
              </div>

              <div className="p-4 border-t border-white/5 bg-white/[0.02] flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-foreground/20">
                <div className="flex gap-4">
                  <span>Enter to select</span>
                  <span>Esc to close</span>
                </div>
                <span>⌘K Palette</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
