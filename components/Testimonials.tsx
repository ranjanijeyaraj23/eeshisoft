"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CTO, FinChain Protocol",
    content:
      "Eeshisoft delivered our DeFi protocol ahead of schedule with zero critical vulnerabilities in the audit. Their team understands Web3 at a deep level.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Founder, MetaVault",
    content:
      "The cross-chain bridge they built for us handles over $50M in daily volume. Rock-solid infrastructure and exceptional support throughout.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Head of Engineering, DeFi Labs",
    content:
      "We've worked with several blockchain dev shops - Eeshisoft is the only one that truly delivers production-grade code with proper testing and documentation.",
    rating: 5,
  },
  {
    name: "Elena Kowalski",
    role: "Product Lead, ChainVerse",
    content:
      "Their AI-powered smart contract optimization reduced our gas costs by 40%. The team is technically brilliant and a pleasure to work with.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "CEO, TokenForge",
    content:
      "From tokenomics design to mainnet deployment, Eeshisoft was a true partner. They didn't just build what we asked - they made it better.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "VP Engineering, BlockStack",
    content:
      "Outstanding work on our NFT marketplace. The scalable architecture they designed handles 10x our projected load with room to grow.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#080808]">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-30 blur-[100px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,234,84,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full py-[5px] px-[14px] mb-5 border border-[rgba(255,234,84,0.2)] bg-[rgba(255,234,84,0.05)]">
            <span className="text-xs text-primary font-semibold tracking-[0.07em] uppercase">
              Testimonials
            </span>
          </div>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-extrabold tracking-[-0.03em] mb-4">
            Trusted by{" "}
            <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground max-w-[520px] mx-auto leading-[1.7] text-[1.02rem]">
            See what our clients say about partnering with Eeshisoft for their
            Web3 infrastructure needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="gradient-border-card rounded-2xl p-7 bg-[rgba(255,255,255,0.025)] relative group hover:bg-[rgba(255,255,255,0.04)] transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              <p className="text-foreground/90 text-[0.92rem] leading-[1.7] mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary font-bold text-sm">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
