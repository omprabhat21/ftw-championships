"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const quotes = [
  "Pressure Creates Greatness.",
  "Every Champion Was Once A Contender.",
  "One Match. One Legacy.",
  "Legends Are Written In Moments.",
  "Glory Belongs To The Fearless.",
  "Leave Your Name In History.",
  "The Pitch Remembers Everything.",
];

export default function IntroScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    const seen = sessionStorage.getItem("ftw-intro");

    if (seen) return;

    setShowIntro(true);
    sessionStorage.setItem("ftw-intro", "true");

    const quoteInterval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 1800);

    const timer = setTimeout(() => {
      clearInterval(quoteInterval);
      setShowIntro(false);
    }, 5400);

    return () => {
      clearInterval(quoteInterval);
      clearTimeout(timer);
    };
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black px-8"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={quoteIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                className="max-w-4xl text-center text-3xl font-medium italic leading-relaxed tracking-wide text-white md:text-5xl"
              >
                &quot;{quotes[quoteIndex]}&quot;
              </motion.p>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </>
  );
}