"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Bebas_Neue, Oxanium } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["600", "700"],
});

interface MemberCardProps {
  name: string;
  role: string;
  image: string;
}

export default function MemberCard({
  name,
  role,
  image,
}: MemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      whileHover={{
        y: -12,
        transition: {
          duration: 0.35,
          ease: "easeOut",
        },
      }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-[34px] bg-[#0b0b0b]">

        {/* Portrait */}
        <div className="relative aspect-[4/5] overflow-hidden">

          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width:768px) 100vw, 25vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />

          {/* Premium Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          {/* Gold Ambient Glow */}
          <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
            <div className="absolute -bottom-16 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#D4AF37]/20 blur-3xl" />
          </div>

          {/* Soft Vignette */}
          <div className="absolute inset-0 shadow-[inset_0_-120px_120px_rgba(0,0,0,.9)]" />

          {/* Gold Border */}
          <div className="absolute inset-0 rounded-[34px] border border-white/10 group-hover:border-[#D4AF37]/40 transition-colors duration-500" />

          {/* Bottom Text */}
          <div className="absolute bottom-0 left-0 right-0 p-7">

            <h3
              className={`${bebas.className} text-[42px] leading-none tracking-[0.08em] text-white`}
            >
              {name}
            </h3>

            <div className="mt-4 h-[2px] w-14 bg-[#D4AF37]" />

            <p
              className={`${oxanium.className} mt-4 text-[12px] uppercase tracking-[0.35em] text-[#D4AF37]`}
            >
              {role}
            </p>

          </div>

        </div>

      </div>
    </motion.div>
  );
}