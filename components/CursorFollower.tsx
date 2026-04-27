"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const [enabled, setEnabled] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 300, damping: 30, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 300, damping: 30, mass: 0.4 });

  useEffect(() => {
    // Skip on touch devices and when user prefers reduced motion
    const noFinePointer = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (noFinePointer || reducedMotion) return;

    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden lg:block"
    >
      <div
        className="-translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-md"
        style={{
          width: 24,
          height: 24,
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
