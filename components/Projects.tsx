"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { ExternalLink, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

const AUTO_SLIDE_INTERVAL = 5000;

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const total = projects.length;

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-slide
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const project = projects[current];

  const variants = {
    enter: (dir: number) => ({ y: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { y: 0, opacity: 1 },
    exit: (dir: number) => ({ y: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* ── Left Panel (1/3) ── */}
          <div className="lg:w-1/3 flex flex-col justify-center shrink-0">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black tracking-tighter"
            >
              FEATURED <br />
              <span className="gradient-text">PROJECTS</span>
            </motion.h2>

            <p className="text-muted-foreground text-lg mt-6">
              Explore a collection of high-impact digital solutions and
              experimental interfaces.
            </p>

            <div className="w-20 h-1 bg-gradient-brand rounded-full mt-8" />

            {/* Nav arrows + counter */}
            <div className="flex items-center gap-3 mt-10">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center border-primary/20 hover:border-primary/50 transition-all"
                aria-label="Previous project"
              >
                <ChevronLeft size={20} className="text-primary" />
              </button>
              <span className="text-sm font-mono text-muted-foreground min-w-[60px] text-center">
                {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center border-primary/20 hover:border-primary/50 transition-all"
                aria-label="Next project"
              >
                <ChevronRight size={20} className="text-primary" />
              </button>
            </div>

            {/* Dot indicators */}
            <div className="flex items-center gap-2 mt-6">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* ── Right Panel (2/3) — Carousel ── */}
          <div
            className="lg:w-2/3 relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-full"
              >
                <div className="group relative w-full glass-card rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-700 flex flex-col">
                  {/* Image */}
                  <div className="relative w-full h-[260px] md:h-[320px] overflow-hidden bg-black/60 border-b border-border/50">
                    <div
                      className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                      style={{ backgroundImage: `url(${project.image})` }}
                    >
                      <div className="absolute inset-0 bg-[#0D0D0D]">
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(255,234,84,0.3)_0%,transparent_70%)]" />
                        <div
                          className="absolute inset-0 opacity-[0.04]"
                          style={{
                            backgroundImage:
                              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                            backgroundSize: "40px 40px",
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-primary/30 text-6xl font-black tracking-tighter">
                            {project.title.split(" ")[0]}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Type tag */}
                    <div className="absolute top-6 right-6 z-20">
                      <span className="px-4 py-1.5 bg-primary/10 text-primary border border-primary/30 text-xs font-bold rounded-full shadow-[0_0_15px_rgba(255,234,84,0.15)] backdrop-blur-md">
                        {project.type}
                      </span>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 z-10 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="btn-primary px-8 py-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 no-underline flex items-center gap-2"
                      >
                        View Details <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-8 flex flex-col">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="no-underline"
                    >
                      <h3 className="text-3xl md:text-4xl font-black tracking-tight group-hover:gradient-text transition-all inline-block mb-4">
                        {project.title}
                      </h3>
                    </Link>

                    <p className="text-muted-foreground text-sm md:text-base mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="px-4 py-1.5 bg-background border border-border text-xs font-semibold rounded-full text-foreground/80 hover:text-primary hover:border-primary/50 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="text-sm text-primary font-semibold no-underline hover:underline flex items-center gap-1"
                      >
                        Case Study <ArrowRight size={12} />
                      </Link>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground no-underline hover:text-foreground flex items-center gap-1 transition-colors"
                      >
                        Live Site <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
