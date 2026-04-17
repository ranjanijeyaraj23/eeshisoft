"use client";

import { useEffect } from "react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    let cancelled = false;
    let raf: number;
    let lenisInstance: { raf: (t: number) => void; destroy: () => void } | null = null;

    const start = () => {
      import("lenis").then(({ default: Lenis }) => {
        if (cancelled) return;
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
        });
        lenisInstance = lenis;
        document.documentElement.classList.add("lenis", "lenis-smooth");
        const animate = (time: number) => {
          lenis.raf(time);
          raf = requestAnimationFrame(animate);
        };
        raf = requestAnimationFrame(animate);
      });
    };

    if ("requestIdleCallback" in window) {
      (window as Window & { requestIdleCallback: (cb: () => void) => number }).requestIdleCallback(start);
    } else {
      setTimeout(start, 1);
    }

    return () => {
      cancelled = true;
      if (raf) cancelAnimationFrame(raf);
      if (lenisInstance) lenisInstance.destroy();
      document.documentElement.classList.remove("lenis", "lenis-smooth");
    };
  }, []);

  return <div className="">{children}</div>;
}
