"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Oxanium } from "next/font/google";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["600", "700"],
});

interface PageBreadcrumbProps {
  current: string;
}

export default function PageBreadcrumb({
  current,
}: PageBreadcrumbProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`${oxanium.className} mb-8 flex items-center gap-2 text-sm uppercase tracking-[0.35em]`}
    >
      <Link
        href="/"
        className="group flex items-center gap-2 text-white/40 transition-all duration-300 hover:text-[#D4AF37]"
      >
        <ChevronLeft
          size={18}
          className="transition-transform duration-300 group-hover:-translate-x-1"
        />

        HOME
      </Link>

      <span className="text-white/20">/</span>

      <span className="text-[#D4AF37]">
        {current}
      </span>
    </motion.div>
  );
}