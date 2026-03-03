"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";

export default function CTA() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(bgRef.current, {
      backgroundSize: "130% 130%",
      duration: 4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="cta"
      style={{
        padding: "120px 24px",
        position: "relative",
        overflow: "hidden",
        background: "#0A0A0A",
      }}
    >
      {/* Animated radial gradient bg */}
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, rgba(255,170,43,0.12) 0%, rgba(255,234,84,0.06) 30%, transparent 70%)",
          backgroundSize: "100% 100%",
          willChange: "background-size",
        }}
      />

      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 75%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: 680,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            borderRadius: 100,
            padding: "5px 14px",
            marginBottom: 24,
            border: "1px solid rgba(255,234,84,0.25)",
            background: "rgba(255,234,84,0.06)",
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
            Ready to Build?
          </span>
        </div>

        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3.8rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginBottom: 20,
            lineHeight: 1.1,
          }}
        >
          Let's Build the <span className="gradient-text">Future of Web3</span>{" "}
          Together
        </h2>

        <p
          style={{
            color: "#A1A1AA",
            maxWidth: 480,
            margin: "0 auto 44px",
            lineHeight: 1.7,
            fontSize: "1.05rem",
          }}
        >
          From protocol inception to mainnet - partner with the team that&apos;s
          shipped $2B+ in on-chain value.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToTop}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: "1rem",
              padding: "16px 36px",
              borderRadius: 14,
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
              background:
                "linear-gradient(135deg, #ffea54 0%, #ffcb3c 40%, #ff5757 100%)",
              color: "#0a0a0a",
              boxShadow: "0 0 24px rgba(255,234,84,0.3)",
            }}
          >
            Start Building <ArrowRight size={18} />
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.02 }}
            href="mailto:hello@eeshisoft.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: "1rem",
              padding: "15px 36px",
              borderRadius: 14,
              fontWeight: 600,
              textDecoration: "none",
              cursor: "pointer",
              background: "rgba(255,255,255,0.06)",
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(8px)",
            }}
          >
            Talk to Us
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
