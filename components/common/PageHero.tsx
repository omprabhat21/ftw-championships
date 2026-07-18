"use client";

import { motion } from "framer-motion";
import { Oxanium } from "next/font/google";
import PageBreadcrumb from "./PageBreadcrumb";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

interface PageHeroProps {
  current: string;
  title: string;
  description: string;
}

export default function PageHero({
  current,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#070707] py-28">

      {/* Gold Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[180px]" />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:70px_70px] opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6">

        <PageBreadcrumb current={current} />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`${oxanium.className} mt-10 text-sm uppercase tracking-[0.55em] text-[#D4AF37]`}
        >
          FTW CHAMPIONSHIPS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`${oxanium.className} mt-6 text-5xl font-extrabold uppercase leading-none text-white md:text-7xl`}
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-8 max-w-3xl text-lg leading-8 text-white/60"
        >
          {description}
        </motion.p>

      </div>
    </section>
  );
}