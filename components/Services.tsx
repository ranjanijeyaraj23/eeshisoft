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
    <section id="services" className="section-pad bg-[#0A0A0A] relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-18"
        >
          <div className="inline-flex items-center gap-2 rounded-full py-[5px] px-[14px] mb-5 border border-[rgba(255,234,84,0.2)] bg-[rgba(255,234,84,0.05)]">
            <span className="text-xs text-[#FFEA54] font-semibold tracking-[0.07em] uppercase">
              What We Build
            </span>
          </div>
          <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-extrabold tracking-[-0.03em] mb-4">
            Enterprise-Grade{" "}
            <span className="gradient-text">Web3 Services</span>
          </h2>
          <p className="text-[#A1A1AA] max-w-[520px] mx-auto leading-[1.7] text-[1.02rem]">
            From protocol design to production launch - we deliver the full
            stack of decentralized infrastructure.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-5">
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
                className="gradient-border-card rounded-[20px] p-8 bg-[rgba(255,255,255,0.03)] cursor-default relative overflow-hidden transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,234,84,0.12)]"
              >
                <div
                  className="w-[52px] h-[52px] rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: `rgba(${service.color === "#FFEA54" ? "255,234,84" : service.color === "#FEAA2B" ? "254,170,43" : service.color === "#FF5757" ? "255,87,87" : "255,203,60"},0.12)`,
                  }}
                >
                  <Icon size={24} color={service.color} />
                </div>

                <h3 className="text-[1.08rem] font-bold mb-3 tracking-[-0.01em]">
                  {service.title}
                </h3>
                <p className="text-[#A1A1AA] leading-[1.65] text-[0.9rem]">
                  {service.desc}
                </p>

                <div
                  className="absolute -bottom-[30px] -right-[30px] w-[120px] h-[120px] rounded-full pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${service.color}18 0%, transparent 70%)`,
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
