// Refined Footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle, Trophy, ChevronRight } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const navLinks = [
  ["Home","/"],
  ["Current Season","/season"],
  ["About","/about"],
  ["Players","/players"],
  ["Hall of Fame","/hall-of-fame"],
  ["News","/news"],
];

const tournamentLinks = [
  ["Registration","/register"],
  ["Rules","/rules"],
  ["Leaderboard","/players"],
  ["Hall of Fame","/hall-of-fame"],
  ["FAQ","/faq"],
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          <div>
            <Link href="/">
              <Image
                src="/logo/logo-icon.png"
                alt="FTW Championships"
                width={120}
                height={40}
                className="mb-5 h-auto w-auto cursor-pointer"
                priority
              />
            </Link>

            <p className="leading-7 text-gray-400">
              FTW Championships is a competitive FC Mobile tournament platform
              built for players who strive for excellence, glory and legacy.
            </p>

            <div className="mt-6 flex gap-4">
              {[
                ["https://www.instagram.com/ftwxwarzone?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", <FaInstagram key="i" size={18}/>,"hover:border-pink-500 hover:text-pink-500"],
                ["https://www.facebook.com/share/g/18VKzvW4By/?mibextid=wwXIfr", <FaFacebookF key="f" size={18}/>,"hover:border-blue-500 hover:text-blue-500"],
                ["https://chat.whatsapp.com/DMUUDFy6pGD7YK9vPdVBnd?s=cl&p=a&mlu=0&ilr=0&amv=0", <MessageCircle key="w" size={18}/>,"hover:border-[#25D366] hover:text-[#25D366]"],
              ].map(([href,icon,style],i)=>(
                <Link key={i} href={href as string} target="_blank" rel="noopener noreferrer"
                  className={`rounded-full border border-white/10 p-3 text-gray-400 transition ${style}`}>
                  {icon}
                </Link>
              ))}
              <Link href="mailto:ftwchampionships@gmail.com"
                className="rounded-full border border-white/10 p-3 text-gray-400 transition hover:border-[#D4AF37] hover:text-[#D4AF37]">
                <Mail size={18}/>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map(([name,href])=>(
                <li key={name}>
                  <Link href={href} className="group flex items-center gap-2 text-gray-400 transition hover:text-[#D4AF37]">
                    <ChevronRight size={16} className="transition group-hover:translate-x-1"/>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">Tournament</h3>
            <ul className="space-y-3">
              {tournamentLinks.map(([name,href])=>(
                <li key={name}>
                  <Link href={href} className="group flex items-center gap-2 text-gray-400 transition hover:text-[#D4AF37]">
                    <Trophy size={16} className="transition group-hover:rotate-12"/>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">Contact</h3>

            <p className="mb-2 text-gray-400">Email</p>

            <Link
              href="mailto:ftwchampionships@gmail.com"
              className="break-all text-white transition hover:text-[#D4AF37]"
            >
              ftwchampionships@gmail.com
            </Link>

            <div className="mt-8 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-[#D4AF37]">
                FTW Championships
              </p>

              <h4 className="mt-2 text-xl font-bold text-white">
                Season VIII
              </h4>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Follow our official Instagram, Facebook and WhatsApp community
                for announcements, fixtures, results and future registrations.
              </p>
            </div>
          </div>

        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">
          <p>© 2026 FTW Championships. All Rights Reserved.</p>
          <p>Built with ❤️ for the FC Mobile Community.</p>
        </div>
      </div>
    </footer>
  );
}
