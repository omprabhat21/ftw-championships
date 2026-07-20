"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Oxanium } from "next/font/google";

import MenuLink from "./MenuLink";
import MenuHero from "./MenuHero";

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

interface MenuProps {
  open: boolean;
  onClose: () => void;
}

const links = [
  { title: "HOME", href: "/" },
  { title: "CURRENT SEASON", href: "/season" },
  { title: "ABOUT FTW", href: "/about" },
  { title: "PLAYERS", href: "/players" },
  { title: "TEAMS", href: "/teams" },
  { title: "HALL OF FAME", href: "/hall-of-fame" },
  { title: "NEWS", href: "/news" },
  { title: "MEET THE TEAM", href: "/meet-the-team" },
  { title: "RULES", href: "/rules" },
  { title: "FAQ", href: "/faq" },
  { title: "CONTACT", href: "/contact" },
];

export default function Menu({ open, onClose }: MenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (open) {
      previouslyFocused.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => closeButtonRef.current?.focus());
    } else {
      document.body.style.overflow = "";
      previouslyFocused.current?.focus();
    }

    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (open) window.addEventListener("keydown", esc);

    return () => {
      window.removeEventListener("keydown", esc);
      if (open) document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
        >
          {/* Background */}
          <motion.div
            onClick={onClose}
            aria-hidden="true"
            className="absolute inset-0 bg-[#080808]/95 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <div className="relative flex h-screen">
            {/* LEFT PANEL */}
            <motion.div
              initial={{ x: -120, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -120, opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-screen w-full flex-col border-r border-white/10 bg-black/20 px-10 py-8 backdrop-blur-xl lg:w-[38%]"
            >
              {/* HEADER */}
              <div className="flex flex-shrink-0 items-center justify-between">
                <div>
                  <Image
                    src="/logomain.png"
                    alt="FTW"
                    width={180}
                    height={60}
                    priority
                  />
                  <p
                    className={`${oxanium.className} mt-3 text-xs uppercase tracking-[0.45em] text-white/30`}
                  >
                    SEASON VIII
                  </p>
                </div>

                <button
                  ref={closeButtonRef}
                  onClick={onClose}
                  aria-label="Close menu"
                  className="rounded-xl border border-white/10 p-3 transition duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                >
                  <X size={25} />
                </button>
              </div>

              {/* NAVIGATION */}
              <nav className="menu-scroll mt-8 min-h-0 flex-1 overflow-y-auto pr-3">
                <div className="space-y-1 pb-8">
                  {links.map((link, index) => (
                    <MenuLink
                      key={link.href}
                      index={index}
                      title={link.title}
                      href={link.href}
                      onClick={onClose}
                    />
                  ))}
                </div>
              </nav>

              {/* FOOTER */}
              <div className="flex-shrink-0 border-t border-white/10 pt-6">
                <Link href="/register" onClick={onClose}>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    className={`${oxanium.className} w-full rounded-xl bg-[#D4AF37] py-4 font-bold tracking-[0.25em] text-black shadow-[0_0_30px_rgba(212,175,55,.25)]`}
                  >
                    REGISTER NOW
                  </motion.button>
                </Link>

                <div className="mt-8 grid grid-cols-4 gap-2 text-center text-xs uppercase tracking-[0.25em] text-white/35">
  <a
    href="https://www.instagram.com/ftwxwarzone?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    target="_blank"
    rel="noopener noreferrer"
    className="transition-all duration-300 hover:text-[#E4405F]"
  >
    Instagram
  </a>

  <a
    href="https://www.facebook.com/share/g/18VKzvW4By/?mibextid=wwXIfr"
    target="_blank"
    rel="noopener noreferrer"
    className="transition-all duration-300 hover:text-[#1877F2]"
  >
    Facebook
  </a>

  <a
    href="https://discord.gg/yrqhdUyVZ"
    target="_blank"
    rel="noopener noreferrer"
    className="transition-all duration-300 hover:text-[#5865F2]"
  >
    Discord
  </a>

  <a
    href="https://chat.whatsapp.com/DMUUDFy6pGD7YK9vPdVBnd?s=cl&p=a&mlu=0&ilr=0&amv=0"
    target="_blank"
    rel="noopener noreferrer"
    className="transition-all duration-300 hover:text-[#25D366]"
  >
    WhatsApp
  </a>
</div>
              </div>
            </motion.div>

            {/* RIGHT PANEL */}
            <div className="relative hidden flex-1 lg:flex">
              <MenuHero />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

