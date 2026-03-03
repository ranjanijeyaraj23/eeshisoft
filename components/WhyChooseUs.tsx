"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Layers, Brain, Globe2 } from "lucide-react";

const cards = [
  {
    icon: ShieldCheck,
    title: "Security First",
    desc: "Every contract undergoes multi-phase auditing, formal verification, and bug bounty processes before mainnet.",
    color: "#FFEA54",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    desc: "Modular, upgradeable designs with horizontal scaling - from 100 to 10M users without re-architecture.",
    color: "#FFCB3C",
  },
  {
    icon: Brain,
    title: "AI Assisted Development",
    desc: "LLM-powered code review, exploit detection, and gas optimization integrated into our dev pipeline.",
    color: "#FEAA2B",
  },
  {
    icon: Globe2,
    title: "Cross-Chain Expertise",
    desc: "Native experience on 40+ chains: EVM, SVM, Cosmos, and emerging L2 ecosystems.",
    color: "#FF5757",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      style={{
        padding: "100px 0",
        background: "#111111",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 600,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(255,234,84,0.04) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              borderRadius: 100,
              padding: "5px 14px",
              marginBottom: 20,
              border: "1px solid rgba(255,234,84,0.2)",
              background: "rgba(255,234,84,0.05)",
            }}
          >
            <span
              style={{
                fontSize: "0.75rem",
                color: "#FFEA54",
                fontWeight: 600,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
              }}
            >
              Why Eeshisoft
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: 16,
            }}
          >
            The Standard for{" "}
            <span className="gradient-text">Web3 Excellence</span>
          </h2>
          <p
            style={{
              color: "#A1A1AA",
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.7,
              fontSize: "1rem",
            }}
          >
            We don&apos;t just ship code - we architect the backbone of the
            decentralized economy.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="gradient-border-card"
                style={{
                  borderRadius: 20,
                  padding: "32px",
                  background: "rgba(255,255,255,0.025)",
                  backdropFilter: "blur(8px)",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: `rgba(255,255,255,0.06)`,
                    border: `1px solid ${card.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <Icon size={24} color={card.color} />
                </div>

                <h3
                  style={{
                    fontSize: "1.08rem",
                    fontWeight: 700,
                    marginBottom: 10,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    color: "#A1A1AA",
                    fontSize: "0.88rem",
                    lineHeight: 1.65,
                  }}
                >
                  {card.desc}
                </p>

                <div
                  style={{
                    position: "absolute",
                    top: -30,
                    right: -30,
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${card.color}15 0%, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
