"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, FolderDot, MessageSquare, Terminal, Download } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LINKS } from "@/lib/data";
import Magnetic from "@/components/magnetic";

const NAV_ITEMS = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Terminal },
  { name: "Projects", href: "#projects", icon: FolderDot },
  { name: "Contact", href: "#contact", icon: MessageSquare },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[calc(100%-2rem)] max-w-2xl",
      scrolled ? "top-4" : "top-8"
    )}>
      <div className={cn(
        "glass rounded-full px-4 py-2 flex items-center justify-between border-white/5 shadow-2xl transition-all duration-300",
        scrolled ? "bg-background/40 backdrop-blur-2xl py-3 px-6" : "bg-transparent"
      )}>
        <Link href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-black text-xs">
            AG
          </div>
          <span className="hidden md:block font-black text-sm tracking-tighter group-hover:text-accent transition-colors">
            ALEX GICHAU
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Magnetic key={item.href}>
              <Link 
                href={item.href}
                className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-foreground/40 hover:text-foreground hover:bg-white/5 transition-all"
              >
                {item.name}
              </Link>
            </Magnetic>
          ))}
          <Magnetic>
            <Link 
              href={LINKS.resume} 
              className="ml-2 bg-accent hover:bg-accent/90 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all shadow-lg shadow-accent/20 flex items-center gap-2 active:scale-95"
            >
              Resume <Download size={12} />
            </Link>
          </Magnetic>
        </div>

        {/* Mobile Trigger */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-full hover:bg-white/5 transition-colors"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full left-0 right-0 mt-4 glass rounded-[2rem] p-4 border-white/5 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-4 px-6 py-4 rounded-2xl hover:bg-white/5 transition-colors group"
                >
                  <item.icon size={18} className="text-foreground/40 group-hover:text-accent" />
                  <span className="font-bold uppercase tracking-widest text-sm">{item.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
