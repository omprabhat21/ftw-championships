"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const percent = height > 0 ? (scrollTop / height) * 100 : 0;

      setProgress(percent);
      setVisible(scrollTop > 400);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 25;
  const circumference = 2 * Math.PI * radius;
  const offset =
    circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          aria-label="Back to top"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.6, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 40 }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 18,
          }}
          whileHover={{
            scale: 1.08,
            y: -4,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="fixed bottom-8 right-8 z-[9999]"
        >
          <div className="relative flex h-16 w-16 items-center justify-center">

            {/* Background Circle */}
            <svg
              className="absolute inset-0 -rotate-90"
              width="64"
              height="64"
            >
              <circle
                cx="32"
                cy="32"
                r={radius}
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="3"
                fill="transparent"
              />

              <motion.circle
                cx="32"
                cy="32"
                r={radius}
                stroke="#D4AF37"
                strokeWidth="3"
                strokeLinecap="round"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                animate={{
                  strokeDashoffset: offset,
                }}
                transition={{
                  duration: 0.15,
                }}
              />
            </svg>

            {/* Button */}
            <div
              className="
              group
              relative
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-black/80
              backdrop-blur-xl
              border
              border-[#D4AF37]/25
              transition-all
              duration-300
              hover:border-[#D4AF37]
              hover:shadow-[0_0_35px_rgba(212,175,55,0.45)]
            "
            >
              <div
                className="
                absolute
                inset-0
                rounded-full
                bg-[#D4AF37]/10
                blur-lg
                opacity-0
                transition
                duration-300
                group-hover:opacity-100
              "
              />

              <Image
                src="/logo/w-icon.png"
                alt="FTW"
                width={24}
                height={24}
                className="relative z-10 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}