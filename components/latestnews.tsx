"use client";

import { Cinzel, Oxanium } from "next/font/google";
import Image from "next/image";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["700", "900"],
});

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export default function LatestNews() {
  return (
    <section
      id="news"
      className="relative overflow-hidden bg-[#0A0A0A] py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p
            className={`${oxanium.className} mb-3 text-sm uppercase tracking-[0.45em] text-[#D4AF37]`}
          >
            Stay Updated
          </p>

          <h2
            className={`${oxanium.className} text-4xl font-extrabold uppercase text-white md:text-5xl`}
          >
            Latest News
          </h2>

          <div className="mx-auto mt-6 h-px w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <p className="mt-6 text-lg leading-8 text-gray-400">
            The next chapter of FTW Championships is almost here.
          </p>
        </div>

        {/* Season VIII Banner */}
        <div className="relative overflow-hidden rounded-[40px] border border-[#D4AF37]/20 bg-gradient-to-br from-[#D4AF37]/10 via-[#111111] to-black px-8 py-24 text-center shadow-[0_0_80px_rgba(212,175,55,0.08)]">

          {/* Gold Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18),transparent_70%)]" />

          {/* Decorative Lines */}
          <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

          <div className="relative">

            <p
              className={`${oxanium.className} mb-4 text-sm font-semibold uppercase tracking-[0.7em] text-[#D4AF37]`}
            >
              Season
            </p>

            <h1
              className={`${cinzel.className} text-[9rem] font-black leading-none text-[#D4AF37] drop-shadow-[0_0_35px_rgba(212,175,55,0.45)] md:text-[14rem] lg:text-[18rem]`}
            >
              VIII
            </h1>

            <h2
  className={`${oxanium.className} mt-4 text-4xl font-extrabold uppercase tracking-[0.18em] text-white md:text-6xl`}
>
  Official Poster Released
</h2>

<p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
  The official FTW Championships Season VIII tournament poster has been
  unveiled. Registration dates will be announced soon.
</p>

<div className="mx-auto mt-14 max-w-md">
  <div className="group overflow-hidden rounded-[30px] border border-[#D4AF37]/20 bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A] shadow-[0_0_60px_rgba(212,175,55,0.10)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_80px_rgba(212,175,55,0.18)]">

    {/* Card Header */}
    <div className="flex items-center justify-between border-b border-[#D4AF37]/10 px-6 py-4">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
          Official
        </p>
        <h3 className="mt-1 text-xl font-bold text-white">
          Season VIII Poster
        </h3>
      </div>

      <span className="rounded-full bg-[#D4AF37] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black">
        NEW
      </span>
    </div>

    {/* Poster */}
    <div className="p-5">
      <Image
        src="/images/season8-poster.jpg"
        alt="FTW Championships Season VIII Official Poster"
        width={700}
        height={980}
        className="rounded-2xl border border-white/10 transition duration-500 group-hover:scale-[1.02]"
      />
    </div>

    <div className="mx-auto mt-10 max-w-md">
  <div className="rounded-3xl border border-[#D4AF37]/25 bg-gradient-to-br from-[#D4AF37]/15 via-[#151515] to-black p-8 text-center shadow-[0_0_60px_rgba(212,175,55,0.12)]">

    <p className="text-xs uppercase tracking-[0.45em] text-[#D4AF37]">
      Prize Pool
    </p>

    <h3 className="mt-3 text-6xl font-black text-[#D4AF37]">
      ₹7,000
    </h3>

    <p className="mt-3 text-lg font-semibold uppercase text-white">
      Total Prize Pool
    </p>

    <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

    <p className="mt-6 text-gray-400">
      Compete against the best and battle for glory, rewards, and the
      Season VIII championship title.
    </p>

  </div>
</div>

    {/* Footer */}
    <div className="border-t border-[#D4AF37]/10 px-6 py-5">
      <p className="text-sm text-gray-400">
        Registration opening date will be announced officially soon.
      </p>
    </div>
  </div>
</div>

            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <span className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-5 py-2 text-sm uppercase tracking-[0.2em] text-[#D4AF37]">
                Bigger Competition
              </span>

              <span className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-5 py-2 text-sm uppercase tracking-[0.2em] text-[#D4AF37]">
                New Rewards
              </span>

              <span className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-5 py-2 text-sm uppercase tracking-[0.2em] text-[#D4AF37]">
                Season VIII
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}