"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated radial gradient bg (similar to CTA) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,170,43,0.12) 0%, rgba(255,234,84,0.06) 30%, transparent 70%)",
          backgroundSize: "130% 130%",
          animation: "gradientShift 8s ease infinite alternate",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-1"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 75%)",
        }}
      />

      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
          <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
          <span className="text-sm text-muted-foreground font-mono uppercase tracking-widest text-[#ff5757]">
            Error 404
          </span>
        </div>

        <h1 className="text-[8rem] sm:text-[10rem] md:text-[12rem] font-black tracking-tighter leading-none mb-4">
          <span className="gradient-text-animated">404</span>
        </h1>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Page Not Found
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
          The decentralized node you are looking for seems to have been lost in
          the blockchain. Let&apos;s get you back to the mainnet.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="group relative px-8 py-4 rounded-xl bg-gradient-to-br from-[#ffea54] via-[#ffcb3c] to-[#ff5757] font-semibold text-gray-900 transition-all duration-300 hover:scale-105 glow-primary flex items-center justify-center gap-2 w-full sm:w-auto overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            <span className="relative z-10 flex items-center gap-2">
              <Home className="w-4 h-4" />
              Return Home
            </span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="group px-8 py-4 rounded-xl glass-card font-medium text-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
}
