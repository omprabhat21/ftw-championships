"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[99999] h-[3px] w-full origin-left bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.7)]"
    />
  );
}