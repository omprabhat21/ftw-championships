"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Oxanium } from "next/font/google";
import { usePathname } from "next/navigation";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

interface MenuLinkProps {
  index: number;
  title: string;
  href: string;
  onClick: () => void;
}

export default function MenuLink({
  index,
  title,
  href,
  onClick,
}: MenuLinkProps) {
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: index * 0.06,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        href={href}
        onClick={onClick}
        className="group flex items-center py-4"
      >
        {/* Number + Line */}

        <div className="mr-7 flex w-28 items-center gap-4">

          <span
            className={`${oxanium.className}
            text-sm
            tracking-[0.35em]
            transition-all
            duration-300
            ${
              active
                ? "text-[#D4AF37]"
                : "text-white/25 group-hover:text-[#D4AF37]"
            }`}
          >
            {(index + 1).toString().padStart(2, "0")}
          </span>

          <motion.div
            initial={false}
            animate={{
              width: active ? 58 : 24,
              backgroundColor: active
                ? "#D4AF37"
                : "rgba(255,255,255,.15)",
            }}
            whileHover={{
              width: 58,
              backgroundColor: "#D4AF37",
            }}
            transition={{
              duration: .35,
            }}
            className="h-[2px] rounded-full"
          />

        </div>

        {/* Title */}

        <motion.div
          whileHover={{
            x: 10,
          }}
          transition={{
            duration: .28,
          }}
          className="relative"
        >
          <h2
            className={`${oxanium.className}
            relative
            inline-block
            text-[2.15rem]
            lg:text-[3.9rem]
            font-semibold
            leading-[0.9]
            tracking-[0.08em]
            transition-all
            duration-300
            ${
              active
                ? "text-white"
                : "text-white group-hover:text-white"
            }`}
          >
            {title}

            <motion.span
              initial={false}
              animate={{
                width: active ? "100%" : "0%",
              }}
              whileHover={{
                width: "100%",
              }}
              transition={{
                duration: .35,
              }}
              className="absolute
              left-0
              -bottom-2
              h-[2px]
              bg-[#D4AF37]"
            />
          </h2>
        </motion.div>
      </Link>
    </motion.div>
  );
}



