"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, FolderDot, MessageSquare, Terminal, Download, Rocket } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LINKS } from "@/lib/data";
import Magnetic from "@/components/magnetic";
import ResumeButton from "@/components/resume-button";

const NAV_ITEMS = [
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Terminal },
  { name: "Home", href: "#home", icon: Home },
  { name: "Projects", href: "#projects", icon: FolderDot },
  { name: "Contact", href: "#contact", icon: MessageSquare },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navbar (Top) */}
      <nav className={cn(
        "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 hidden md:block",
        scrolled ? "top-4 w-[95%] max-w-2xl" : "top-8 w-[90%] max-w-4xl"
      )}>
        <div className={cn(
          "glass rounded-full px-6 h-16 flex items-center justify-between border-white/5 shadow-2xl transition-all duration-500",
          scrolled ? "bg-background/40 backdrop-blur-3xl py-3" : "bg-transparent"
        )}>
          <Link href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-black text-xs">
              AG
            </div>
            <span className="font-black text-sm tracking-tighter group-hover:text-accent transition-all">
              ALEX GICHAU
            </span>
          </Link>

          <div className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Magnetic key={item.href}>
                <Link 
                  href={item.href}
                  className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-foreground/40 hover:text-foreground hover:bg-white/5 transition-all"
                >
                  {item.name}
                </Link>
              </Magnetic>
            ))}
            
            <Magnetic>
              <a 
                href={LINKS.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-2 p-2 rounded-full glass hover:bg-green-500/20 hover:border-green-500/40 transition-all group"
              >
                <img 
                  src="https://cdn.simpleicons.org/whatsapp/25D366" 
                  alt="WhatsApp" 
                  className="w-4 h-4"
                />
              </a>
            </Magnetic>

            <ResumeButton 
              variant="primary" 
              showIcon={false}
              className="ml-2 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest" 
            />
          </div>
        </div>
      </nav>

      {/* Mobile Navbar (Bottom Center) */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-3rem)] md:hidden">
        <div className="glass rounded-[2rem] px-4 py-3 flex items-center justify-around border-white/10 shadow-2xl backdrop-blur-2xl relative">
          {/* Add WhatsApp to Mobile */}
          <a 
            href={LINKS.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 p-2 group"
          >
            <img 
              src="https://cdn.simpleicons.org/whatsapp/25D366" 
              alt="WhatsApp" 
              className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity"
            />
            <span className="text-[8px] font-black uppercase tracking-tighter text-foreground/20 group-hover:text-foreground">
              WhatsApp
            </span>
          </a>

          {NAV_ITEMS.map((item, i) => {
            const isHome = item.name === "Home";
            
            if (isHome) {
              return (
                <div key={item.href} className="relative -top-8">
                  <Link 
                    href={item.href}
                    className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-white shadow-2xl shadow-accent/40 border-4 border-background"
                  >
                    <Home size={24} />
                  </Link>
                </div>
              );
            }

            return (
              <Link 
                key={item.href} 
                href={item.href}
                className="flex flex-col items-center gap-1 p-2 group"
              >
                <item.icon size={20} className="text-foreground/40 group-active:text-accent group-hover:text-accent transition-colors" />
                <span className="text-[8px] font-black uppercase tracking-tighter text-foreground/20 group-hover:text-foreground">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
