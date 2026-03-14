"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, PenTool, Code2, ShieldCheck, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Idea",
    description:
      "Discover and validate the concept, define scope and token economics.",
  },
  {
    icon: PenTool,
    title: "Architecture",
    description:
      "Design system architecture, smart contract structure, and protocol flow.",
  },
  {
    icon: Code2,
    title: "Development",
    description:
      "Build, test, and iterate with continuous integration and on-chain testing.",
  },
  {
    icon: ShieldCheck,
    title: "Audit",
    description:
      "Third-party security audits, formal verification, and penetration testing.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "Mainnet deployment, monitoring, and post-launch optimization.",
  },
];

function TimelineStep({
  step,
  index,
  isLast,
}: {
  step: (typeof steps)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <div ref={ref} className="relative flex gap-6 pb-12 last:pb-0">
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-[23px] top-[52px] h-[calc(100%-52px)] w-px">
          <motion.div
            className="h-full w-full origin-top"
            style={{
              background:
                "linear-gradient(180deg, #FFEA54 0%, rgba(255,234,84,0.1) 100%)",
            }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      )}

      {/* Icon circle */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[rgba(255,234,84,0.2)] bg-[rgba(255,234,84,0.08)]"
      >
        <step.icon className="h-5 w-5 text-primary" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="pt-2"
      >
        <div className="mb-1 flex items-center gap-3">
          <span className="text-xs font-medium uppercase tracking-widest text-primary/60">
            Step {index + 1}
          </span>
        </div>
        <h3 className="mb-1 text-xl font-semibold text-foreground">
          {step.title}
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          {step.description}
        </p>
      </motion.div>
    </div>
  );
}

const ProcessTimeline = () => {
  return (
    <section id="process" className="relative py-24 md:pt-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start gap-16 lg:flex-row">
          {/* Left side - header */}
          <div className="h-fit lg:w-1/2 lg:sticky lg:top-32 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                Our Process
              </p>
              <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">
                From Concept to <span className="gradient-text">Mainnet</span>
              </h2>
              <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
                A battle-tested methodology refined across dozens of protocol
                launches. Every step is designed for security, scalability, and
                speed.
              </p>
            </motion.div>
          </div>

          {/* Right side - timeline */}
          <div className="lg:w-1/2 w-full">
            {steps.map((step, index) => (
              <TimelineStep
                key={step.title}
                step={step}
                index={index}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
