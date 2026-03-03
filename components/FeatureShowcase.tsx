"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Activity, Lock, Zap, Globe } from "lucide-react";

const features = [
  { icon: Activity, label: "Real-time Analytics" },
  { icon: Lock, label: "End-to-end Encryption" },
  { icon: Zap, label: "Sub-second Finality" },
  { icon: Globe, label: "Cross-chain Bridge" },
];

const FeatureShowcase = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Subtle background gradient */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 70% 50%, rgba(255,234,84,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div ref={ref} className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Feature Showcase
            </p>
            <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Infrastructure That <span className="gradient-text">Scales</span>
            </h2>
            <p className="mb-8 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Monitor, manage, and optimize your decentralized systems through a
              unified dashboard built for performance at any scale.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[rgba(255,234,84,0.08)]">
                    <feature.icon className="h-4 w-4 text-primary" />
                  </div>
                  {feature.label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="glass-card relative overflow-hidden rounded-2xl p-1"
            >
              {/* Dashboard frame */}
              <div className="rounded-xl bg-[#0D0D0D] p-5">
                {/* Top bar */}
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#FF5757]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#FFCB3C]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#4ADE80]" />
                  <div className="ml-4 h-3 w-40 rounded-full bg-[rgba(255,255,255,0.06)]" />
                </div>

                {/* Stats row */}
                <div className="mb-4 grid grid-cols-3 gap-3">
                  {["TVL", "TPS", "Validators"].map((label, i) => (
                    <div
                      key={label}
                      className="rounded-xl bg-[rgba(255,255,255,0.03)] p-3"
                    >
                      <p className="mb-1 text-[10px] text-muted-foreground">
                        {label}
                      </p>
                      <p className="text-sm font-semibold text-foreground">
                        {i === 0 ? "$2.4B" : i === 1 ? "12,847" : "1,024"}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Chart area */}
                <div className="relative h-36 overflow-hidden rounded-xl bg-[rgba(255,255,255,0.02)] p-3">
                  <svg
                    className="h-full w-full"
                    viewBox="0 0 300 100"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="chartGrad"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#FFEA54"
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="100%"
                          stopColor="#FFEA54"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 80 Q30 70 60 65 T120 45 T180 55 T240 30 T300 20"
                      stroke="#FFEA54"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M0 80 Q30 70 60 65 T120 45 T180 55 T240 30 T300 20 L300 100 L0 100 Z"
                      fill="url(#chartGrad)"
                    />
                  </svg>
                </div>

                {/* Bottom items */}
                <div className="mt-4 flex gap-3">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-2 flex-1 rounded-full"
                      style={{
                        background: `rgba(255, 234, 84, ${0.3 - i * 0.06})`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Glow behind */}
            <div
              className="pointer-events-none absolute -inset-10 -z-10 opacity-30 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,234,84,0.15), transparent 70%)",
              }}
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
