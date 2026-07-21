"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import FullMenu from "./menu/menu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-8">
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
              className="h-auto w-[100px] md:w-[120px]"
            />
          </Link>
         {/* Right Side */}
<div className="flex items-center">
  <button
    onClick={() => setMenuOpen(true)}
    className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-white transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
    aria-label="Open menu"
  >
    <span className="hidden text-xs font-semibold uppercase tracking-[0.25em] md:block">
      Menu
    </span>

    <Menu size={22} />
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