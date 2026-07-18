"use client";

import { Trophy, Medal, Star, ArrowRight } from "lucide-react";

const seasons = [
  {
    season: "Season VII",
    champion: "TBD",
    runnerUp: "TBD",
    mvp: "TBD",
    year: "2026",
  },
  {
    season: "Season VI",
    champion: "Coming Soon",
    runnerUp: "—",
    mvp: "—",
    year: "2026",
  },
  {
    season: "Season V",
    champion: "Coming Soon",
    runnerUp: "—",
    mvp: "—",
    year: "2025",
  },
];

export default function HallOfFame() {
  return (
    <section
      id="hall-of-fame"
      className="relative overflow-hidden bg-[#0A0A0A] py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_65%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.45em] text-[#D4AF37]">
            Legacy
          </p>

          <h2 className="text-4xl font-black uppercase text-white md:text-5xl">
            Hall of Fame
          </h2>

          <div className="mx-auto mt-6 h-px w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Every season creates new legends. Celebrate the champions, finalists,
            and standout performers who shaped FTW Championships.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {seasons.map((season) => (
            <div
              key={season.season}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/40 hover:shadow-[0_0_40px_rgba(212,175,55,0.18)]"
            >
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-widest text-[#D4AF37]">
                    {season.year}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    {season.season}
                  </h3>
                </div>

                <div className="rounded-full bg-[#D4AF37]/10 p-4">
                  <Trophy className="h-8 w-8 text-[#D4AF37]" />
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Trophy className="mt-1 h-5 w-5 text-[#D4AF37]" />
                  <div>
                    <p className="text-sm text-gray-500">Champion</p>
                    <p className="font-semibold text-white">
                      {season.champion}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Medal className="mt-1 h-5 w-5 text-gray-300" />
                  <div>
                    <p className="text-sm text-gray-500">Runner-Up</p>
                    <p className="font-semibold text-white">
                      {season.runnerUp}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Star className="mt-1 h-5 w-5 text-yellow-400" />
                  <div>
                    <p className="text-sm text-gray-500">MVP</p>
                    <p className="font-semibold text-white">{season.mvp}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex justify-center">
          <button className="group flex items-center gap-3 rounded-full border border-[#D4AF37] px-8 py-4 font-semibold text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black">
            View Complete History
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}