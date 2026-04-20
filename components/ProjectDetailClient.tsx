"use client";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Lightbulb,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import Image from "next/image";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: project.title,
            description: project.longDescription,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            url: `https://yourdomain.com/projects/${project.slug}`,
          }),
        }}
      />

    <section className="relative min-h-screen pt-32 pb-24 overflow-hidden">
      {/* Background effects */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-30 blur-[60px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,234,84,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 no-underline group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full py-[5px] px-[14px] mb-6 border border-[rgba(255,234,84,0.2)] bg-[rgba(255,234,84,0.05)]">
            <span className="text-xs text-primary font-semibold tracking-[0.07em] uppercase">
              {project.type}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            <span className="gradient-text">{project.title}</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
            {project.longDescription}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-4 py-2 bg-[rgba(255,255,255,0.04)] border border-border text-sm font-medium rounded-full text-foreground/80"
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-linear-to-br from-[#ffea54] via-[#ffcb3c] to-[#ff5757] font-semibold text-gray-900 transition-all duration-300 hover:scale-105 glow-primary no-underline"
          >
            Visit Live Project
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Project Image / Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden mb-20 glass-card"
        >
          <div className="relative w-full h-[300px] md:h-[450px] bg-[#0D0D0D]">
            <div className="relative w-full h-[300px] md:h-[450px]">
              <Image
                src={project.image}
                alt={`${project.title} AI dashboard preview`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1024px"
                loading="lazy"
              />
            </div>
            {/* Fallback */}
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
                <span className="text-primary/20 text-8xl md:text-9xl font-black tracking-tighter">
                  {project.title.split(" ")[0]}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results / Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {project.results.map((result, i) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-2">
                {result.value}
              </div>
              <div className="text-sm text-muted-foreground">{result.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Challenge & Solution */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-xl font-bold">The Challenge</h3>
            </div>
            <p className="text-muted-foreground leading-[1.7]">
              {project.challenge}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Our Solution</h3>
            </div>
            <p className="text-muted-foreground leading-[1.7]">
              {project.solution}
            </p>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            Key <span className="gradient-text">Features</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-3 p-4 rounded-xl hover:bg-[rgba(255,255,255,0.02)] transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/90">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
{/* ✅ SEO Content Section (ADD HERE) */}
<div className="max-w-4xl mx-auto mt-16 text-center">
  <h2 className="text-2xl md:text-3xl font-bold mb-4">
    AI Lead Generation Platform for WhatsApp Automation
  </h2>
  <p className="text-muted-foreground leading-relaxed mb-6">
    Our AI-powered lead generation platform helps businesses automate WhatsApp marketing,
    capture leads, and increase conversions using chatbot automation, CRM integration,
    and intelligent sales workflows.
  </p>

  <h2 className="text-2xl md:text-3xl font-bold mb-4">
    How AI Lead Generation Works
  </h2>
  <p className="text-muted-foreground leading-relaxed">
    This platform uses AI chatbots to engage users, qualify leads, and automate follow-ups,
    helping businesses scale without increasing manpower.
  </p>
</div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-3xl p-10 md:p-14 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Want Something <span className="gradient-text">Similar?</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
            Let&apos;s discuss how we can build a custom solution tailored to
            your specific needs and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-linear-to-br from-[#ffea54] via-[#ffcb3c] to-[#ff5757] font-semibold text-gray-900 transition-all duration-300 hover:scale-105 glow-primary no-underline"
            >
              Start Your Project
            </a>
            <Link
              href="/#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass-card font-medium text-white transition-all duration-300 hover:scale-105 no-underline"
            >
              View More Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}
