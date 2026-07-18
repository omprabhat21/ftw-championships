import PageHero from "@/components/common/PageHero";
import {
  ShieldCheck,
  Trophy,
  Users,
  Sparkles,
  Target,
  HeartHandshake,
} from "lucide-react";

const FEATURES = [
  {
    title: "Professional Tournaments",
    description:
      "Structured leagues, knockout competitions, fixtures, standings, and organized matchdays designed for a competitive experience.",
    icon: Trophy,
  },
  {
    title: "Player Recognition",
    description:
      "Celebrate every achievement through player statistics, team records, awards, and an ever-growing Hall of Fame.",
    icon: Target,
  },
  {
    title: "Fair Competition",
    description:
      "Every championship is built on transparency, integrity, and equal opportunities for every participant.",
    icon: ShieldCheck,
  },
];

const VALUES = [
  {
    title: "Excellence",
    description:
      "Every season is an opportunity to deliver an even better tournament experience.",
    icon: Sparkles,
  },
  {
    title: "Community",
    description:
      "FTW is built by passionate players who share the same love for competition.",
    icon: Users,
  },
  {
    title: "Respect",
    description:
      "Sportsmanship, teamwork, and respect remain at the heart of everything we do.",
    icon: HeartHandshake,
  },
];

const STATS = [
  { number: "168+", label: "Players Competed" },
  { number: "6+", label: "Competitive Seasons" },
  { number: "100+", label: "Matches Played" },
  { number: "100%", label: "Fair Competition" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <PageHero
        current="About"
        title="ABOUT FTW"
        description="More than a tournament. A community built for champions."
      />

      {/* Story */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
              Our Story
            </p>

            <h2 className="text-5xl font-black uppercase leading-tight md:text-6xl">
              Built by Players.
              <br />
              <span className="text-[#D4AF37]">
                Designed for Champions.
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-white/70">
            <p>
              FTW Championships is a community-driven FC Mobile tournament
              platform built for players who thrive on competition. Every season
              is carefully organized to provide a fair, exciting, and memorable
              competitive experience.
            </p>

            <p>
              What started as a passionate initiative has grown into a platform
              trusted by players who value professionalism, transparency, and
              consistency. With more than <span className="text-white font-semibold">168+ players</span> competing
              across multiple successful seasons, FTW continues to raise the
              standard for community tournaments.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-24 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D4AF37]">
            Mission
          </p>

          <h3 className="mb-5 text-3xl font-bold">
            Empower Every Competitor
          </h3>

          <p className="leading-8 text-white/70">
            To create a competitive platform where every player has the
            opportunity to improve, compete, and earn recognition through fair
            play, structured tournaments, and a player-first experience.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D4AF37]">
            Vision
          </p>

          <h3 className="mb-5 text-3xl font-bold">
            Building India's Premier FC Mobile Community
          </h3>

          <p className="leading-8 text-white/70">
            Our vision is to become one of India's most respected FC Mobile
            tournament platforms by continuously delivering premium events,
            innovative features, and unforgettable competitive experiences.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D4AF37]">
            What We Do
          </p>

          <h2 className="text-5xl font-black uppercase">
            Competition Meets Community
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {FEATURES.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-white/10"
              >
                <Icon className="mb-6 h-10 w-10 text-[#D4AF37]" />

                <h3 className="mb-4 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="leading-8 text-white/70">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#D4AF37]">
            Our Values
          </p>

          <h2 className="text-5xl font-black uppercase">
            What Defines FTW
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {VALUES.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
              >
                <Icon className="mx-auto mb-6 h-10 w-10 text-[#D4AF37]" />

                <h3 className="mb-4 text-2xl font-bold">
                  {value.title}
                </h3>

                <p className="leading-8 text-white/70">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center"
            >
              <h2 className="text-5xl font-black text-[#D4AF37]">
                {stat.number}
              </h2>

              <p className="mt-4 text-lg uppercase tracking-wider text-white/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Legacy */}
      <section className="border-t border-white/10 py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#D4AF37]">
            The Legacy Continues
          </p>

          <h2 className="text-5xl font-black uppercase leading-tight md:text-6xl">
            Every Match Has A Story.
            <br />
            Every Season Creates History.
          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-8 text-white/70">
            Every season adds a new chapter to FTW Championships. New players
            emerge, rivalries are forged, champions rise, and unforgettable
            moments become part of our history. As our community continues to
            grow, so does our commitment to delivering a world-class competitive
            experience built on integrity, innovation, and passion for the game.
          </p>

          <p className="mt-12 text-xl font-semibold italic text-[#D4AF37]">
            "Great tournaments crown champions. Great communities build
            legacies. At FTW Championships, we strive to create both."
          </p>
        </div>
      </section>
    </main>
  );
}