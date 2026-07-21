import PageHero from "@/components/common/PageHero";
import Link from "next/link";
import {
  Trophy,
  CalendarDays,
  IndianRupee,
  Users,
  ShieldCheck,
  ArrowRight,
  Gamepad2,
  CheckCircle2,
} from "lucide-react";

const info = [
  { icon: IndianRupee, title: "Entry Fee", value: "₹15" },
  { icon: Trophy, title: "Tournament", value: "Season VIII" },
  { icon: Users, title: "Prize Pool", value: "₹7000" },
  { icon: CalendarDays, title: "Registration", value: "Open Now" },
  { icon: Gamepad2, title: "Mode", value: "Solo" },
  { icon: ShieldCheck, title: "Platform", value: "FC Mobile" },
];

const eligibility = [
  "Any FC Mobile player can participate.",
  "One registration per player.",
  "Join the official FTW WhatsApp Community.",
  "Fair play is mandatory.",
];

const rules = [
  "No cheating, exploits or third-party tools.",
  "Respect every opponent and organizer.",
  "Failure to report results may lead to disqualification.",
  "Organizer decisions are final.",
];

export default function RegisterPage() {
  return (
    <>
      <PageHero
        current="Registration"
        title="SEASON VIII REGISTRATION"
        description="Register now and compete in FTW Championships Season VIII."
      />

      <section className="bg-[#0A0A0A] py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16 rounded-3xl border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 to-transparent p-8 text-center">
            <span className="rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-sm font-semibold text-green-400">
              🟢 REGISTRATIONS LIVE
            </span>
            <h2 className="mt-6 text-4xl font-black text-white">
              Join FTW Championships Season VIII
            </h2>
            <p className="mt-4 text-gray-300">
              Secure your slot before registrations close.
            </p>

            <Link
              href="https://forms.gle/ySBt1c7mjhW1M7GV6"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#D4AF37] px-8 py-4 font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-400 hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]"
            >
              Register Now
              <ArrowRight size={20}/>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {info.map(({icon:Icon,title,value})=>(
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-yellow-500/30 hover:-translate-y-1">
                <Icon className="mb-4 text-[#D4AF37]" size={34}/>
                <p className="text-sm uppercase tracking-widest text-gray-400">{title}</p>
                <h3 className="mt-2 text-2xl font-bold text-white">{value}</h3>
              </div>
            ))}
          </div>

          <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-10">
            <h2 className="text-3xl font-bold text-white">About the Tournament</h2>
            <p className="mt-5 leading-8 text-gray-400">
              FTW Championships is a competitive FC Mobile tournament featuring league play,
              knockout stages, awards, rankings and a permanent Hall of Fame.
            </p>
          </div>

          <div className="mt-20 grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h2 className="mb-6 text-3xl font-bold text-white">Eligibility</h2>
              <div className="space-y-4">
                {eligibility.map(item=>(
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#D4AF37]" size={20}/>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h2 className="mb-6 text-3xl font-bold text-white">Rules</h2>
              <div className="space-y-4">
                {rules.map(rule=>(
                  <div key={rule} className="flex items-center gap-3">
                    <ShieldCheck className="text-[#D4AF37]" size={20}/>
                    <span className="text-gray-300">{rule}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

         

        </div>
      </section>
    </>
  );
}
