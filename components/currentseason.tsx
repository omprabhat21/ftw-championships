"use client";

import Link from "next/link";
import {
  Trophy,
  CalendarDays,
  Users,
  CircleDollarSign,
  ArrowRight,
} from "lucide-react";

export default function CurrentSeason() {
  return (
    <section className="bg-[#0A0A0A] py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#111111] to-[#1A1A1A]">
          <div className="grid lg:grid-cols-2">
            {/* Left Side */}
            <div className="flex flex-col justify-center p-12 lg:p-20">
              <p className="mb-4 uppercase tracking-[0.5em] text-[#D4AF37]">
                CURRENT SEASON
              </p>

              <h2 className="text-5xl font-black text-white md:text-7xl">
                SEASON VIII
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
                Registrations are now open for FTW Championships Season VII.
                Compete against the best FC Mobile players, climb the rankings,
                win exclusive rewards and secure your place in FTW history.
              </p>

              <Link
                href="/register"
                className="mt-12 flex w-fit items-center rounded-xl bg-[#D4AF37] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.45)]"
              >
                Register Now
                <ArrowRight className="ml-3" />
              </Link>
            </div>

            {/* Right Side */}
            <div className="grid gap-6 p-10 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8">
                <CircleDollarSign
                  className="mb-5 text-[#D4AF37]"
                  size={34}
                />
                <p className="text-sm uppercase tracking-widest text-gray-400">
                  Prize Pool
                </p>
                <h3 className="mt-3 text-4xl font-bold text-white">
                  ₹25,000
                </h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8">
                <Users className="mb-5 text-[#D4AF37]" size={34} />
                <p className="text-sm uppercase tracking-widest text-gray-400">
                  Players
                </p>
                <h3 className="mt-3 text-4xl font-bold text-white">
                  128
                </h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8">
                <CalendarDays className="mb-5 text-[#D4AF37]" size={34} />
                <p className="text-sm uppercase tracking-widest text-gray-400">
                  Starts
                </p>
                <h3 className="mt-3 text-3xl font-bold text-white">
                  21 JUL
                </h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8">
                <Trophy className="mb-5 text-[#D4AF37]" size={34} />
                <p className="text-sm uppercase tracking-widest text-gray-400">
                  Format
                </p>
                <h3 className="mt-3 text-3xl font-bold text-white">
                  League
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}