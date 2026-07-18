import PageHero from "@/components/common/PageHero";
import Link from "next/link";
import {
  Trophy,
  CalendarDays,
  IndianRupee,
  Users,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function RegisterPage() {
  return (
    <>
      <PageHero
        current="Registration"
        title="SEASON VII REGISTRATION"
        description="Everything you need to know before joining the biggest FC Mobile tournament."
      />

      <section className="bg-[#0A0A0A] py-24">
        <div className="mx-auto max-w-7xl px-6">

          {/* Tournament Info */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <IndianRupee className="mb-4 text-[#D4AF37]" size={34} />
              <p className="text-sm uppercase tracking-widest text-gray-400">
                Entry Fee
              </p>
              <h3 className="mt-2 text-3xl font-bold text-white">
                ₹20
              </h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <CalendarDays className="mb-4 text-[#D4AF37]" size={34} />
              <p className="text-sm uppercase tracking-widest text-gray-400">
                Registration Ends
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">
                Coming Soon
              </h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <Users className="mb-4 text-[#D4AF37]" size={34} />
              <p className="text-sm uppercase tracking-widest text-gray-400">
                Slots
              </p>
              <h3 className="mt-2 text-3xl font-bold text-white">
                64 Players
              </h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <Trophy className="mb-4 text-[#D4AF37]" size={34} />
              <p className="text-sm uppercase tracking-widest text-gray-400">
                Tournament
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">
                Season VII
              </h3>
            </div>

          </div>

          {/* About */}
          <div className="mt-24 rounded-3xl border border-white/10 bg-white/5 p-10">

            <h2 className="text-3xl font-bold text-white">
              About The Tournament
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              FTW Championships is a competitive FC Mobile tournament
              bringing together skilled players from across the community.
              Compete for glory, rewards, rankings and a place in the Hall of Fame.
            </p>

          </div>

          {/* Eligibility */}
          <div className="mt-20">

            <h2 className="mb-10 text-3xl font-bold text-white">
              Eligibility
            </h2>

            <div className="grid gap-5">

              {[
                "Any FC Mobile player can participate.",
                "One registration per player.",
                "Players must join the official WhatsApp Community.",
                "Fair play is mandatory.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <ShieldCheck className="text-[#D4AF37]" />
                  <span className="text-gray-300">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

          {/* Rules */}
          <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-10">

            <h2 className="text-3xl font-bold text-white">
              Important Rules
            </h2>

            <ul className="mt-8 space-y-4 text-gray-400 list-disc pl-5">
              <li>No cheating or exploiting glitches.</li>
              <li>Respect all opponents and organizers.</li>
              <li>Failure to report results may result in disqualification.</li>
              <li>Organizer decisions are final.</li>
            </ul>

          </div>

          {/* CTA */}
          <div className="mt-24 text-center">

            <h2 className="text-4xl font-bold text-white">
              Ready to Compete?
            </h2>

            <p className="mt-4 text-gray-400">
              Registration for Season VII opens soon.
            </p>

            <Link
              href="#"
              className="mt-10 inline-flex items-center gap-3 rounded-xl bg-[#D4AF37] px-10 py-5 text-lg font-semibold text-black transition hover:scale-105 hover:bg-yellow-400"
            >
              Register Now
              <ArrowRight size={22} />
            </Link>

          </div>

        </div>
      </section>
    </>
  );
}