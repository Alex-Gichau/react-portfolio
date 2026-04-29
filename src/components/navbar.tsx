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
        scrolled ? "top-4 w-[95%] max-w-3xl" : "top-8 w-[90%] max-w-4xl"
      )}>
        <div className={cn(
          "glass rounded-full px-6 h-16 flex items-center justify-between gap-2 border-white/5 shadow-2xl transition-all duration-500 whitespace-nowrap",
          scrolled ? "bg-background/40 backdrop-blur-[40px] py-3" : "bg-transparent"
        )}>
          <Link href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-background font-black text-xs">
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
                className="ml-2 p-2 rounded-full glass hover:bg-accent/20 hover:border-accent/40 transition-all group"
              >
                <img
                  src="https://cdn.simpleicons.org/whatsapp/ffffff"
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
          {NAV_ITEMS.filter(item => item.name !== "Home").slice(0, 2).map((item) => (
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
          ))}

          {/* WhatsApp as Center Button for Mobile */}
          <div className="relative -top-8">
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-black flex items-center justify-center text-white shadow-2xl shadow-white/10 border-4 border-white/20 hover:border-accent/40 transition-all"
            >
              <img
                src="https://cdn.simpleicons.org/whatsapp/ffffff"
                alt="WhatsApp"
                className="w-8 h-8"
              />
            </a>
          </div>

          {NAV_ITEMS.filter(item => item.name !== "Home").slice(2).map((item) => (
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
          ))}
        </div>
      </nav>
    </>
  );
}
