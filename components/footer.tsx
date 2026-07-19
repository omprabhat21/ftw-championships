"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MessageCircle,
  Trophy,
  ChevronRight,
} from "lucide-react";

import { FaInstagram, FaFacebookF } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505]">
      {/* Top Glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/">
              <Image
                src="/logo/logo-icon.png"
                alt="FTW Championships"
                width={120}
                height={40}
                className="mb-5 cursor-pointer"
              />
            </Link>

            <p className="leading-7 text-gray-400">
              FTW Championships is a competitive FC Mobile tournament platform
              built for players who strive for excellence, glory, and legacy.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4">
              {/* Instagram */}
              <Link
                href="https://www.instagram.com/ftwxwarzone?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 p-3 text-gray-400 transition hover:border-pink-500 hover:text-pink-500"
              >
                <FaInstagram size={18} />
              </Link>

              {/* Facebook */}
              <Link
                href="https://www.facebook.com/share/g/18VKzvW4By/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 p-3 text-gray-400 transition hover:border-blue-500 hover:text-blue-500"
              >
               <FaFacebookF size={18} />
              </Link>

              {/* WhatsApp */}
              <Link
                href="https://chat.whatsapp.com/DMUUDFy6pGD7YK9vPdVBnd?s=cl&p=a&mlu=0&ilr=0&amv=0"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 p-3 text-gray-400 transition hover:border-[#25D366] hover:text-[#25D366]"
              >
                <MessageCircle size={18} />
              </Link>

              {/* Email */}
              <Link
                href="mailto:ftwchampionships@gmail.com"
                className="rounded-full border border-white/10 p-3 text-gray-400 transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                <Mail size={18} />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Navigation
            </h3>

            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Current Season", href: "/season" },
                { name: "Stats", href: "/players" },
                { name: "About", href: "/about" },
                { name: "Hall of Fame", href: "/hall-of-fame" },
                { name: "News", href: "/news" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-gray-400 transition hover:text-[#D4AF37]"
                  >
                    <ChevronRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tournament */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Tournament
            </h3>

            <ul className="space-y-3">
              {[
                { name: "Register", href: "/register" },
                { name: "Rules", href: "/rules" },
                { name: "Player Database", href: "/players" },
                { name: "Hall of Fame", href: "/hall-of-fame" },
                { name: "FAQ", href: "/faq" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-gray-400 transition hover:text-[#D4AF37]"
                  >
                    <Trophy
                      size={16}
                      className="transition group-hover:rotate-12"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Contact
            </h3>

            <p className="mb-3 text-gray-400">Email</p>

            <Link
              href="mailto:ftwchampionships@gmail.com"
              className="text-white transition hover:text-[#D4AF37]"
            >
              ftwchampionships@gmail.com
            </Link>

            <div className="mt-8 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-5">
              <p className="text-sm uppercase tracking-widest text-[#D4AF37]">
                Season VIII
              </p>

              <h4 className="mt-2 text-xl font-bold text-white">
                Registrations Open
              </h4>

              <Link
                href="/register"
                className="mt-5 inline-flex rounded-xl bg-[#D4AF37] px-5 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-400"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">
          <p>© 2026 FTW Championships. All Rights Reserved.</p>

          <p>Built with ❤️ for the FC Mobile Community.</p>
        </div>
      </div>
    </footer>
  );
}