"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: 50,
    suffix: "+",
    label: "Projects Shipped",
    description: "Across DeFi, NFT, and infrastructure",
  },
  {
    value: 2,
    prefix: "$",
    suffix: "B+",
    label: "On-chain Value",
    description: "Total value locked in our protocols",
  },
  {
    value: 40,
    suffix: "+",
    label: "Chains Supported",
    description: "EVM, SVM, Cosmos, and more",
  },
  {
    value: 99.9,
    suffix: "%",
    label: "Uptime SLA",
    description: "Enterprise-grade reliability",
  },
];

function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  isInView,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const isDecimal = value % 1 !== 0;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = eased * value;

      setCount(isDecimal ? parseFloat(start.toFixed(1)) : Math.floor(start));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span className="gradient-text tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Subtle divider lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-center relative"
            >
              {/* Vertical divider (not on first item) */}
              {i > 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-16 w-px bg-border" />
              )}
              <div className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  isInView={isInView}
                />
              </div>
              <div className="text-foreground font-semibold text-sm mb-1">
                {stat.label}
              </div>
              <div className="text-muted-foreground text-xs">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
