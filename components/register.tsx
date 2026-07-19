
"use client";

import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Trophy,
  Users,
  IndianRupee,
} from "lucide-react";

export default function Register() {
  return (
    <section
      id="register"
      className="relative overflow-hidden bg-[#0A0A0A] py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.10),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.45em] text-[#D4AF37]">
            Registration
          </p>

          <h2 className="text-5xl font-bold uppercase tracking-wide text-white">
            Join The Battle
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Registration for{" "}
            <span className="text-[#D4AF37]">Season VII</span> is now open.
            Compete against the best FC Mobile players, earn rewards, climb the
            rankings, and become an FTW Champion.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
            <IndianRupee className="mb-5 text-[#D4AF37]" size={34} />
            <p className="text-sm uppercase tracking-widest text-gray-400">
              Entry Fee
            </p>
            <h3 className="mt-2 text-3xl font-bold text-white">₹20</h3>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
            <CalendarDays className="mb-5 text-[#D4AF37]" size={34} />
            <p className="text-sm uppercase tracking-widest text-gray-400">
              Registration Ends
            </p>
            <h3 className="mt-2 text-2xl font-bold text-white">
              Coming Soon
            </h3>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
            <Users className="mb-5 text-[#D4AF37]" size={34} />
            <p className="text-sm uppercase tracking-widest text-gray-400">
              Player Slots
            </p>
            <h3 className="mt-2 text-3xl font-bold text-white">64</h3>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
            <Trophy className="mb-5 text-[#D4AF37]" size={34} />
            <p className="text-sm uppercase tracking-widest text-gray-400">
              Tournament
            </p>
            <h3 className="mt-2 text-2xl font-bold text-white">
              Season VIII
            </h3>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link
            href="/register"
            className="inline-flex items-center gap-3 rounded-xl bg-[#D4AF37] px-10 py-5 text-lg font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-400 hover:shadow-[0_0_35px_rgba(212,175,55,0.45)]"
          >
            Register Now
            <ArrowRight size={22} />
          </Link>

          <p className="mt-6 text-sm text-gray-500">
            View tournament details, eligibility, rules, and registration
            information before signing up.
          </p>
        </div>
      </div>
    </section>
  );
}