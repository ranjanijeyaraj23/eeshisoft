"use client";

import { LogoLoop, type LogoItem } from "@/components/LogoLoop";

const items = [
  "Ethereum",
  "Solana",
  "Polygon",
  "Arbitrum",
  "AI",
  "DeFi",
  "Smart Contracts",
  "dApps",
  "Zero Knowledge",
  "Layer 2",
];

const logos: LogoItem[] = items.map((label) => ({
  node: (
    <span className="flex items-center gap-2 sm:gap-8 whitespace-nowrap">
      <span className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
        {label}
      </span>
      <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-primary/40 mx-6" />
    </span>
  ),
  title: label,
}));

const TechMarquee = () => {
  return (
    <section className="py-12 border-y border-border overflow-hidden mb-16">
      <LogoLoop
        logos={logos}
        speed={70}
        direction="left"
        gap={0}
        logoHeight={24}
        pauseOnHover
        ariaLabel="Technologies we work with"
        className="w-full"
      />
    </section>
  );
};

export default TechMarquee;
