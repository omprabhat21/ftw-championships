// Optimized SeasonCard.tsx
"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Star, BarChart3, Sparkles } from "lucide-react";
import type { HallOfFameSeason } from "@/data/hallOfFame";

interface SeasonCardProps {
  season: HallOfFameSeason;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 }
  }
};

function SectionTitle({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10">
        {icon}
      </div>
      <div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-sm text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
}

export default function SeasonCard({ season }: SeasonCardProps) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.08 }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-black/40 backdrop-blur-xl shadow-xl"
    >
      <div className="absolute right-0 top-0 opacity-5">
        <Trophy size={150} className="text-yellow-400" />
      </div>

      <div className="border-b border-white/10 p-7">
        <div className="flex items-center gap-2 text-yellow-400 text-xs tracking-[0.35em] uppercase">
          <Sparkles size={14} />
          FTW Championships
        </div>

        <div className="mt-4 flex items-center justify-between">
          <h2 className="text-4xl font-black text-white">
            Season {season.season}
          </h2>

          <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-yellow-300">
            {season.status}
          </span>
        </div>
      </div>

      <div className="space-y-10 p-7">

        <div>
          <SectionTitle
            icon={<Trophy size={20} className="text-yellow-400" />}
            title="Tournaments"
            subtitle="Official competitions"
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {season.tournaments.map((t, i) => (
              <div
                key={`${season.season}-${i}-${t.name}`}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02]"
              >
                <h4 className="font-bold text-lg text-white">{t.name}</h4>

                <div className="mt-4 space-y-2 text-sm">
                  <p><span className="text-gray-400">🥇 Winner:</span> <span className="text-white">{t.winner}</span></p>
                  {t.runnerUp && (
                    <p><span className="text-gray-400">🥈 Runner-Up:</span> <span className="text-white">{t.runnerUp}</span></p>
                  )}
                  {t.bestPlayer && (
                    <p><span className="text-yellow-300">⭐ Best Player:</span> <span className="text-white">{t.bestPlayer}</span></p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionTitle
            icon={<Award size={20} className="text-yellow-400" />}
            title="Awards"
            subtitle="Individual honours"
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {season.awards.map((a, i) => (
              <div
                key={`${season.season}-${i}-${a.title}`}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-gray-500">{a.title}</p>
                <h4 className="mt-2 font-bold text-white">{a.winner}</h4>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionTitle
            icon={<BarChart3 size={20} className="text-yellow-400" />}
            title="Records"
            subtitle="Season milestones"
          />

          <div className="grid gap-4 md:grid-cols-2">
            {season.records.map((r, i) => (
              <div
                key={`${season.season}-${i}-${r.title}`}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-gray-500">{r.title}</p>
                <h4 className="mt-2 text-xl font-bold text-white">{r.value}</h4>
              </div>
            ))}
          </div>
        </div>

        {season.ballonRanking && (
          <div>
            <SectionTitle
              icon={<Star size={20} className="text-yellow-400" />}
              title="Ballon de Glory"
              subtitle="Top Players"
            />

            <div className="space-y-3">
              {season.ballonRanking.map((p, i) => (
                <div
                  key={`${season.season}-${i}-${p}`}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <span className="text-yellow-300 font-semibold">#{i+1}</span>
                  <span className="text-white">{p}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </motion.section>
  );
}
