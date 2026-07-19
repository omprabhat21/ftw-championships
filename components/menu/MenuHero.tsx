"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Oxanium } from "next/font/google";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export default function MenuHero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 45,
    damping: 18,
  });

  const y = useSpring(mouseY, {
    stiffness: 45,
    damping: 18,
  });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    const mx = (e.clientX - rect.width / 2) / 35;
    const my = (e.clientY - rect.height / 2) / 35;

    mouseX.set(mx);
    mouseY.set(my);
  }

  return (
    <motion.div
      initial={{
        x: 120,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      exit={{
        x: 120,
        opacity: 0,
      }}
      transition={{
        duration: .8,
        ease: [0.22,1,0.36,1],
      }}
      onMouseMove={handleMove}
      className="relative hidden flex-1 overflow-hidden lg:block"
    >
      {/* IMAGE */}

      <motion.div
        style={{
          x,
          y,
        }}
        className="absolute inset-0 scale-110"
      >
        <Image
          src="/hero.png"
          alt="Hero"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      {/* DARK OVERLAY */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#090909] via-[#090909]/25 to-transparent" />

      {/* GOLD LIGHT */}

      <motion.div
        animate={{
          opacity: [.15,.28,.15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute
        right-0
        top-0
        h-full
        w-full
        bg-[radial-gradient(circle_at_70%_35%,rgba(212,175,55,.25),transparent_42%)]"
      />

      {/* WATERMARK */}

      <motion.h1
        animate={{
          opacity:[0.02,0.05,0.02],
        }}
        transition={{
          duration:6,
          repeat:Infinity,
        }}
        className={`${oxanium.className}
        pointer-events-none
        absolute
        right-8
        top-1/2
        -translate-y-1/2
        text-[17rem]
        font-bold
        tracking-[0.12em]
        text-white`}
      >
        FTW
      </motion.h1>

      {/* SEASON */}

      <div className="absolute left-16 top-16">

        <p
          className={`${oxanium.className}
          text-sm
          tracking-[0.5em]
          text-[#D4AF37]`}
        >
          SEASON VIII
        </p>

      </div>

      {/* MAIN TITLE */}

      <motion.div
        initial={{
          opacity:0,
          y:30,
        }}
        animate={{
          opacity:1,
          y:0,
        }}
        transition={{
          delay:.35,
          duration:.8,
        }}
        className="absolute bottom-20 left-16"
      >

        <h1
          className={`${oxanium.className}
          text-7xl
          font-bold
          leading-[0.88]
          tracking-[0.06em]
          text-white`}
        >
          PLAY
          <br />
          COMPETE
          <br />
          DOMINATE
        </h1>

        <p className="mt-8 max-w-md text-lg leading-8 text-white/60">
          India&apos;s premier FC Mobile championship.
          <br />
          Build your legacy.
        </p>

      </motion.div>

      {/* BOTTOM BAR */}

      <div className="absolute bottom-8 left-16 right-16 flex items-center justify-between border-t border-white/10 pt-6">

        <div className="flex gap-8 text-xs uppercase tracking-[0.3em] text-white/35">

          <span>2026</span>

          <span>Registration Open</span>

          <span>FTW Championship</span>

        </div>

        <div className="h-[2px] w-40 bg-[#D4AF37]" />

      </div>

    </motion.div>
  );
}