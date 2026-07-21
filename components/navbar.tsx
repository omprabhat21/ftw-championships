"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import FullMenu from "./menu/menu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-black/60 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/logo/logo-icon.png"
              alt="FTW Championships"
              width={130}
              height={40}
              priority
              className="h-auto w-[90px] sm:w-[100px] md:w-[120px]"
            />
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            {/* Register Button */}
            {pathname !== "/register" && (
              <Link
                href="/register"
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl

                  border
                  border-[#D4AF37]/30

                  bg-white/[0.06]
                  backdrop-blur-xl

                  px-3
                  sm:px-4
                  md:px-5

                  py-2.5
                  md:py-3

                  text-[10px]
                  sm:text-[11px]
                  md:text-xs

                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  md:tracking-[0.25em]

                  text-[#F4D36A]

                  transition-all
                  duration-300

                  hover:border-[#D4AF37]/60
                  hover:bg-[#D4AF37]/10
                  hover:text-white
                  hover:shadow-[0_0_20px_rgba(212,175,55,0.18)]
                "
              >
                {/* Gold Glow */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Shine */}
                <span className="absolute -left-1/2 top-0 h-full w-1/3 -skew-x-12 bg-white/20 blur-md transition-transform duration-700 group-hover:translate-x-[300%]" />

                <span className="relative z-10">Register</span>
              </Link>
            )}

            {/* Menu Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="
                flex
                items-center
                gap-2
                rounded-xl

                border
                border-white/10

                bg-white/[0.04]
                backdrop-blur-xl

                px-3
                sm:px-4

                py-2.5
                md:py-3

                text-white

                transition-all
                duration-300

                hover:border-[#D4AF37]
                hover:text-[#D4AF37]
              "
              aria-label="Open menu"
            >
              <span className="hidden sm:block text-[11px] font-semibold uppercase tracking-[0.22em]">
                Menu
              </span>

              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      <FullMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}