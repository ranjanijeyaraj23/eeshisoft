"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const GradientBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Floating animation
    gsap.to(blob1Ref.current, {
      x: 30,
      y: -20,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    gsap.to(blob2Ref.current, {
      x: -40,
      y: 30,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    gsap.to(blob3Ref.current, {
      x: 20,
      y: 40,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(blob1Ref.current, {
        x: x * 60,
        y: y * 40,
        duration: 1.5,
        ease: "power2.out",
      });
      gsap.to(blob2Ref.current, {
        x: x * -40,
        y: y * -30,
        duration: 2,
        ease: "power2.out",
      });
      gsap.to(blob3Ref.current, {
        x: x * 30,
        y: y * 50,
        duration: 1.8,
        ease: "power2.out",
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{ willChange: "transform" }}
    >
      <div
        ref={blob1Ref}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #FFEA54 0%, transparent 70%)",
          transform: "translate3d(0,0,0)",
        }}
      />
      <div
        ref={blob2Ref}
        className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-[100px]"
        style={{
          background: "radial-gradient(circle, #FEAA2B 0%, transparent 70%)",
          transform: "translate3d(0,0,0)",
        }}
      />
      <div
        ref={blob3Ref}
        className="absolute bottom-1/4 left-1/2 w-[400px] h-[400px] rounded-full opacity-10 blur-[80px]"
        style={{
          background: "radial-gradient(circle, #FF5757 0%, transparent 70%)",
          transform: "translate3d(0,0,0)",
        }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
};

export default GradientBackground;
