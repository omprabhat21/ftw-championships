"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MouseGlow() {
  const [position, setPosition] = useState({
    x: -500,
    y: -500,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 250,
        y: position.y - 250,
      }}
      transition={{
        type: "tween",
        ease: "linear",
        duration: 0.15,
      }}
      className="pointer-events-none fixed left-0 top-0 z-0 h-[500px] w-[500px]"
    >
      <div
        className="
          h-full
          w-full
          rounded-full
          bg-[radial-gradient(circle,rgba(212,175,55,0.12)_0%,rgba(212,175,55,0.06)_30%,transparent_70%)]
          blur-3xl
        "
      />
    </motion.div>
  );
}