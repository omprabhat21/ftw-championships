import PageLayout from "@/components/pagelayout";
import PageHero from "@/components/common/PageHero";
import SeasonCard from "@/components/hall-of-fame/SeasonCard";
import { hallOfFame } from "@/data/hallOfFame";

export default function HallOfFamePage() {
  return (
    <PageLayout>
      <PageHero
        current="Hall of Fame"
        title="HALL OF FAME"
        description="Celebrating champions, legendary players and the greatest moments in FTW Championships history."
      />

      <section className="relative mt-20 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">

          {/* Header */}
          <div className="mx-auto max-w-4xl text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.55em] text-[#D4AF37]">
              FTW LEGACY
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-white md:text-6xl">
              Hall of Fame
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/65">
              Every champion. Every unforgettable moment. Every legendary
              player. Explore the complete history of the FTW Championships,
              where every season added another chapter to football greatness.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8">

            <div className="rounded-2xl border border-[#D4AF37]/20 bg-white/[0.03] px-8 py-5 backdrop-blur-xl">
              <p className="text-4xl font-black text-[#D4AF37]">
                {hallOfFame.length}
              </p>
              <p className="mt-1 text-sm uppercase tracking-widest text-white/60">
                Seasons
              </p>
            </div>

            <div className="rounded-2xl border border-[#D4AF37]/20 bg-white/[0.03] px-8 py-5 backdrop-blur-xl">
              <p className="text-4xl font-black text-[#D4AF37]">
                {hallOfFame.filter((s) => s.status === "completed").length}
              </p>
              <p className="mt-1 text-sm uppercase tracking-widest text-white/60">
                Champions Crowned
              </p>
            </div>

            <div className="rounded-2xl border border-[#D4AF37]/20 bg-white/[0.03] px-8 py-5 backdrop-blur-xl">
              <p className="text-4xl font-black text-[#D4AF37]">
                {hallOfFame[hallOfFame.length - 1].season}
              </p>
              <p className="mt-1 text-sm uppercase tracking-widest text-white/60">
                Latest Season
              </p>
            </div>

          </div>

          {/* Divider */}
          <div className="mx-auto my-16 h-px max-w-3xl bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

          {/* Season Grid */}
          <div className="grid gap-8 md:grid-cols-2 2xl:grid-cols-3">
            {hallOfFame.map((season) => (
              <SeasonCard key={season.season} season={season} />
            ))}
          </div>

        </div>
      </section>
    </PageLayout>
  );
}