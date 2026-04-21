"use client";

import React, { useState } from "react";
import { Download, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import Magnetic from "@/components/magnetic";
import ResumeModal from "@/components/resume-modal";

interface ResumeButtonProps {
  className?: string;
  variant?: "primary" | "secondary" | "glass";
  showIcon?: boolean;
}

export default function ResumeButton({ className, variant = "glass", showIcon = true }: ResumeButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    primary: "bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/20",
    secondary: "bg-foreground text-background font-bold hover:opacity-90 shadow-xl",
    glass: "glass hover:bg-white/10 font-bold",
  };

  return (
    <>
      <ResumeModal isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <Magnetic>
        <button
          onClick={() => setIsOpen(true)}
          className={cn(
            "px-8 py-4 rounded-2xl transition-all flex items-center justify-center gap-2 active:scale-95 group",
            variants[variant],
            className
          )}
        >
          {showIcon && <FileText size={18} className="group-hover:scale-110 transition-transform" />}
          Resume
          <Download size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
        </button>
      </Magnetic>
    </>
  );
}
