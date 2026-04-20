import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import CustomCursor from "@/components/custom-cursor";
import CommandMenu from "@/components/command-menu";
import Loader from "@/components/loader";
import FloatingSocials from "@/components/floating-socials";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex M. Gichau | Portfolio",
  description:
    "Portfolio of Alex M. Gichau — Software Engineer, Graphic Designer, and Sound Engineer crafting digital experiences that move people.",
  keywords: [
    "Alex Gichau",
    "Software Engineer",
    "Graphic Designer",
    "Sound Engineer",
    "Portfolio",
    "Web Developer",
    "AI Agent",
    "Virtual Assistant",
    "React",
    "NextJS",
    "TailwindCSS",
    "Framer Motion",
    "Shadcn UI",
    "Figma",
    "Adobe Creative Suite",
    "Ableton Live",
  ],
  authors: [{ name: "Alex M. Gichau" }],
  openGraph: {
    title: "Alex M. Gichau — Developer, Designer & Sound Engineer",
    description:
      "Portfolio of Alex M. Gichau — Software Engineer, Graphic Designer, and Sound Engineer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full antialiased">
        <CustomCursor />
        <CommandMenu />
        <Loader />
        <FloatingSocials />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
