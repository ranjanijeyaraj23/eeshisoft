"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Server, Coins, TrendingUp, Brain } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Smart Contract Development",
    desc: "Audited, gas-optimized contracts on EVM & non-EVM chains. From ERC standards to custom logic.",
    color: "#FFEA54",
  },
  {
    icon: Layers,
    title: "Web3 dApp Engineering",
    desc: "Full-stack decentralized applications with intuitive UX, wallet integrations, and real-time on-chain data.",
    color: "#FFCB3C",
  },
  {
    icon: Server,
    title: "Blockchain Infrastructure",
    desc: "Node operations, RPC endpoints, indexing services, and validator infrastructure for any protocol.",
    color: "#FEAA2B",
  },
  {
    icon: Coins,
    title: "Tokenization Platforms",
    desc: "Real-world asset tokenization, NFT frameworks, and token economy design with regulatory consideration.",
    color: "#FF5757",
  },
  {
    icon: TrendingUp,
    title: "DeFi Protocols",
    desc: "AMMs, lending markets, yield optimizers, and liquidity solutions - built with security-first principles.",
    color: "#FFEA54",
  },
  {
    icon: Brain,
    title: "AI + Web3 Integration",
    desc: "On-chain AI oracles, autonomous agents, predictive analytics, and intelligent smart contract systems.",
    color: "#FEAA2B",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-pad"
      style={{ background: "#0A0A0A", position: "relative" }}
    >
      {/* Section bg accent */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,234,84,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 72 }}
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
              What We Build
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
            Enterprise-Grade{" "}
            <span className="gradient-text">Web3 Services</span>
          </h2>
          <p
            style={{
              color: "#A1A1AA",
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.7,
              fontSize: "1.02rem",
            }}
          >
            From protocol design to production launch - we deliver the full
            stack of decentralized infrastructure.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 20,
          }}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="gradient-border-card"
                style={{
                  borderRadius: 20,
                  padding: "32px",
                  background: "rgba(255,255,255,0.03)",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                  transition: "box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    `0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,234,84,0.12)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: `rgba(${service.color === "#FFEA54" ? "255,234,84" : service.color === "#FEAA2B" ? "254,170,43" : service.color === "#FF5757" ? "255,87,87" : "255,203,60"},0.12)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 24,
                  }}
                >
                  <Icon size={24} color={service.color} />
                </div>

                <h3
                  style={{
                    fontSize: "1.08rem",
                    fontWeight: 700,
                    marginBottom: 12,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    color: "#A1A1AA",
                    lineHeight: 1.65,
                    fontSize: "0.9rem",
                  }}
                >
                  {service.desc}
                </p>

                {/* Corner glow */}
                <div
                  style={{
                    position: "absolute",
                    bottom: -30,
                    right: -30,
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${service.color}18 0%, transparent 70%)`,
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
