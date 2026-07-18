"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaDiscord } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      <Image
        src="/images/hero.png"
        alt="FTW Stadium"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gold Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_70%)]" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center px-6 pt-20 text-center">
        {/* Season */}
        <p className="mb-6 text-sm uppercase tracking-[0.6em] text-[#D4AF37] md:text-base">
          SEASON VII
        </p>

        {/* Logo */}
        <Image
          src="/logo/logomain.png"
          alt="FTW Championships"
          width={900}
          height={300}
          priority
          className="mb-8 w-[320px] md:w-[500px] lg:w-[620px] xl:w-[700px] drop-shadow-[0_15px_40px_rgba(0,0,0,0.7)]"
        />

        {/* Subtitle */}
        <p className="max-w-2xl text-lg text-gray-300 md:text-2xl">
          The Premier FC Mobile Tournament Experience
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-5 sm:flex-row">
          {/* Register */}
          <Link
            href="/register"
            className="rounded-xl bg-[#D4AF37] px-10 py-4 text-lg font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-400 hover:shadow-[0_0_30px_rgba(212,175,55,0.45)]"
          >
            Register Now
          </Link>

          {/* WhatsApp */}
          <Link
            href="https://chat.whatsapp.com/DMUUDFy6pGD7YK9vPdVBnd?s=cl&p=a&mlu=0&ilr=0&amv=0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border border-[#25D366]/40 bg-[#25D366]/10 px-8 py-4 text-lg font-medium text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#25D366] hover:bg-[#25D366]"
          >
            <FaWhatsapp size={22} />
            WhatsApp
          </Link>

          {/* Discord */}
          <Link
            href="https://discord.gg/yrqhdUyVZ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border border-[#5865F2]/40 bg-[#5865F2]/10 px-8 py-4 text-lg font-medium text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#5865F2] hover:bg-[#5865F2]"
          >
            <FaDiscord size={22} />
            Discord
          </Link>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 h-52 w-full bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent" />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.5em] text-gray-300">
            Scroll
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mt-2 h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}