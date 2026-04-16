"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, Sparkles, ArrowRight } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="glass rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
        {/* Abstract Background Blur */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-2/20 blur-[100px] -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6 w-fit"
            >
              <MessageSquare size={14} className="text-accent" />
              <span className="text-xs font-bold uppercase tracking-wider text-accent">Get in touch</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Let's build something <span className="gradient-text italic">extraordinary</span>.
            </h2>
            
            <p className="text-lg text-foreground/60 mb-8 max-w-md">
              Whether you have a specific project in mind or just want to say hi, my inbox is always open.
            </p>

            <div className="space-y-4">
               <a 
                 href={`mailto:${PERSONAL_INFO.email}`}
                 className="flex items-center gap-4 group hover:text-accent transition-colors"
               >
                 <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/10 transition-all">
                    <Mail size={20} />
                 </div>
                 <div>
                    <span className="text-xs text-foreground/40 block font-bold uppercase tracking-widest">Email me at</span>
                    <span className="text-lg font-bold">{PERSONAL_INFO.email}</span>
                 </div>
               </a>
            </div>
          </div>

          <div className="glass bg-white/5 rounded-[2rem] p-8 border-white/5">
            <form className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-xs font-black uppercase tracking-widest text-foreground/40 ml-1">Name</label>
                     <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-accent/50 transition-colors" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-black uppercase tracking-widest text-foreground/40 ml-1">Email</label>
                     <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-accent/50 transition-colors" />
                  </div>
               </div>
               
               <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-foreground/40 ml-1">Message</label>
                  <textarea rows={4} placeholder="What's on your mind?" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-accent/50 transition-colors resize-none"></textarea>
               </div>

               <button className="w-full bg-accent hover:bg-accent/90 text-white font-black py-5 rounded-2xl transition-all shadow-lg shadow-accent/20 flex items-center justify-center gap-3 active:scale-[0.98] group">
                 Send Message
                 <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
