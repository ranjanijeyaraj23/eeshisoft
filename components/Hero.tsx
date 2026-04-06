"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import GradientBackground from "./GradientBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Soft gradient blobs */}
      <GradientBackground />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <span className="w-2 h-2 rounded-full bg-gradient-brand animate-pulse" />
            <span className="text-sm text-muted-foreground font-mono">
              Web3 Infrastructure · AI Powered
            </span>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="gradient-text-animated">Building the</span>
          <br />
          <span className="text-foreground">Decentralized Future</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Powered by Web3 Infrastructure &amp; AI. We architect, build, and
          scale decentralized systems for the next generation of the internet.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 rounded-xl bg-linear-to-br from-[#ffea54] via-[#ffcb3c] to-[#ff5757] font-semibold text-gray-900 transition-all duration-300 hover:scale-105 glow-primary flex items-center gap-2"
          >
            Start Building
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#projects"
            className="group px-8 py-4 rounded-xl glass-card font-medium text-white transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <Play className="w-4 h-4" />
            View Our Work
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
