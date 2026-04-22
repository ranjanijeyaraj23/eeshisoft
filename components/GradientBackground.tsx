"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const GradientBackground = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    gsap.to(blob1Ref.current, {
      x: 30,
      y: -20,
      duration: 8,
      repeat: -1,
      yoyo: true,
    });

    gsap.to(blob2Ref.current, {
      x: -40,
      y: 30,
      duration: 10,
      repeat: -1,
      yoyo: true,
    });

    gsap.to(blob3Ref.current, {
      x: 20,
      y: 40,
      duration: 12,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* BACKGROUND */}
      <div
        ref={containerRef}
        className="absolute inset-0"
        style={{ willChange: "transform" }}
      >
        <div
          ref={blob1Ref}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
          style={{
            background: "radial-gradient(circle, #FFEA54 0%, transparent 70%)",
          }}
        />
        <div
          ref={blob2Ref}
          className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-[100px]"
          style={{
            background: "radial-gradient(circle, #FEAA2B 0%, transparent 70%)",
          }}
        />
        <div
          ref={blob3Ref}
          className="absolute bottom-1/4 left-1/2 w-[400px] h-[400px] rounded-full opacity-10 blur-[80px]"
          style={{
            background: "radial-gradient(circle, #FF5757 0%, transparent 70%)",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GradientBackground;