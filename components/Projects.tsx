"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Dehack Web3",
    description:
      "A powerful decentralized exchange with cross-chain swapping capabilities and optimized liquidity pools.",
    tech: ["Solidity", "React", "Web3.js", "TheGraph"],
    type: "DEFI",
    link: "#",
    github: "#",
    image: "/dehack.png",
  },
  {
    title: "Rolling Doge",
    description: "Web3 Reward MLM program on Polygon chain.",
    tech: ["ERC-20", "IPFS", "React", "Ethers.js"],
    type: "DAPPS",
    link: "#",
    github: "#",
    image: "/rolling-doge.png",
  },
  {
    title: "Orbit Swap",
    description: "Secure decentralized Swap Exchange on base blockchain.",
    tech: ["TypeScript", "Base", "Next.js", "Anchor"],
    type: "DAPPS",
    link: "#",
    github: "#",
    image: "/orbit-swap.png",
  },
];

export default function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Use a slightly larger negative percentage to handle 3 cards + header/footer
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section
      ref={targetRef}
      id="projects"
      className="relative h-[300vh] bg-background"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 px-8 md:px-12">
          {/* Header Card */}
          <div className="w-[300px] md:w-[400px] shrink-0 flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-black mb-6 tracking-tighter"
            >
              FEATURED <br />
              <span className="gradient-text">PROJECTS</span>
            </motion.h2>
            <p className="text-muted-foreground text-lg mb-8">
              Explore a collection of high-impact digital solutions and
              experimental interfaces.
            </p>
            <div className="w-20 h-1 bg-gradient-brand rounded-full" />
          </div>

          {/* Project Cards */}
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-[350px] md:w-[450px] lg:w-[500px] h-auto shrink-0 flex items-center my-auto"
            >
              <div className="group relative w-full h-[550px] glass-card rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-700 flex flex-col">
                {/* Background Image Container */}
                <div className="relative w-full h-[280px] overflow-hidden bg-black/60 border-b border-border/50">
                  <div
                    className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    {/* Fallback pattern if image is missing */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/40 via-background to-background" />
                  </div>
                  {/* Category Type Tag */}
                  <div className="absolute top-6 right-6 z-20">
                    <span className="px-4 py-1.5 bg-primary/10 text-primary border border-primary/30 text-xs font-bold rounded-full shadow-[0_0_15px_rgba(255,234,84,0.15)] backdrop-blur-md">
                      {project.type}
                    </span>
                  </div>

                  {/* Top Left Title on Image (Optional, matching image style) */}
                  {/* The image in the screenshot sometimes has title or logo. We'll leave it to the background image. */}

                  {/* Middle View Project button on Hover */}
                  <div className="absolute inset-0 z-10 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <button className="btn-primary px-8 py-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View Project
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="relative flex-1 p-8 flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-3xl font-black tracking-tight group-hover:gradient-text transition-all inline-block">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-sm mb-8 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-col gap-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-4 py-1.5 bg-background border border-border text-xs font-semibold rounded-full text-foreground/80 hover:text-primary hover:border-primary/50 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Footer Spacer/Card */}
          <div className="w-[300px] shrink-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-32 h-32 rounded-full glass-card flex items-center justify-center border-primary/20 cursor-pointer group hover:border-primary/50 transition-all"
            >
              <span className="text-primary group-hover:glow-primary font-black text-center text-sm uppercase tracking-widest transition-all">
                More <br /> Soon
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
