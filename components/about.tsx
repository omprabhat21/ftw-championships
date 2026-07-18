import {
  Trophy,
  Users,
  Crown,
  ArrowRight,
} from "lucide-react";

export default function About() {
  return (
    <section className="bg-[#0A0A0A] py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-24 text-center">

          <p className="mb-4 uppercase tracking-[0.5em] text-[#D4AF37]">
            ABOUT FTW
          </p>

          <h2 className="text-4xl font-bold text-white md:text-6xl">
            Built For Champions.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            FTW Championships is a premium FC Mobile tournament platform
            dedicated to creating a professional competitive experience.
            Every season brings together passionate players, unforgettable
            moments and a growing community united by football.
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">

          {/* Card */}
          <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-10 transition-all duration-500 hover:-translate-y-3 hover:border-[#D4AF37] hover:bg-white/[0.05]">

            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] transition duration-500 group-hover:rotate-6 group-hover:scale-110">
              <Trophy size={34} strokeWidth={1.8} />
            </div>

            <h3 className="mb-4 text-2xl font-semibold text-white">
              Competitive Excellence
            </h3>

            <p className="leading-8 text-gray-400">
              Structured tournaments, fair competition, seasonal rankings and
              rewarding gameplay designed for the most dedicated FC Mobile
              players.
            </p>

            <div className="mt-8 flex items-center text-[#D4AF37]">
              Learn More
              <ArrowRight className="ml-2 transition group-hover:translate-x-2" />
            </div>

          </div>

          {/* Card */}
          <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-10 transition-all duration-500 hover:-translate-y-3 hover:border-[#D4AF37] hover:bg-white/[0.05]">

            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] transition duration-500 group-hover:rotate-6 group-hover:scale-110">
              <Users size={34} strokeWidth={1.8} />
            </div>

            <h3 className="mb-4 text-2xl font-semibold text-white">
              Growing Community
            </h3>

            <p className="leading-8 text-gray-400">
              Meet skilled competitors, participate in events, build rivalries,
              make friends and become part of one of India's fastest-growing FC
              Mobile communities.
            </p>

            <div className="mt-8 flex items-center text-[#D4AF37]">
              Join Community
              <ArrowRight className="ml-2 transition group-hover:translate-x-2" />
            </div>

          </div>

          {/* Card */}
          <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-10 transition-all duration-500 hover:-translate-y-3 hover:border-[#D4AF37] hover:bg-white/[0.05]">

            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] transition duration-500 group-hover:rotate-6 group-hover:scale-110">
              <Crown size={34} strokeWidth={1.8} />
            </div>

            <h3 className="mb-4 text-2xl font-semibold text-white">
              Create Your Legacy
            </h3>

            <p className="leading-8 text-gray-400">
              Win championships, climb the rankings, secure Hall of Fame status
              and leave your name in FTW history forever.
            </p>

            <div className="mt-8 flex items-center text-[#D4AF37]">
              Hall of Fame
              <ArrowRight className="ml-2 transition group-hover:translate-x-2" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}