import PageHero from "@/components/common/PageHero";
import MemberCard from "@/components/meet-the-team/MemberCard";

const TEAM = [
  {
    name: "Om Prabhat",
    role: "Lead Developer & Creator",
    image: "/team/om.jpg",
  },
  {
    name: "Anubhav",
    role: "Co-Founder",
    image: "/team/ANUBHAV.jpg",
  },
  {
    name: "Soumik",
    role: "Co-Founder",
    image: "/team/SOUMIK.jpg",
  },
   {
    name: "Dharamveer",
    role: "Core Team",
    image: "/team/dharm.jpeg",
  },
  {
    name: "Ansh Joy",
    role: "Core Team",
    image: "/team/ANSH.jpg",
  },
];

export default function MeetTheTeamPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <PageHero
        current="Meet the Team"
        title="MEET THE TEAM"
        description="The passionate people behind FTW Championships, committed to delivering the finest competitive football experience for every player."
      />

      <section className="relative overflow-hidden py-24">
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#D4AF37]/8 blur-[180px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Section Header */}
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.45em] text-[#D4AF37]">
              FTW Championships
            </p>

            <h2 className="text-5xl font-black uppercase tracking-[0.08em] md:text-6xl">
              The People Behind
              <span className="block text-[#D4AF37]">Every Championship</span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/60">
              Every tournament, every update, every fixture, and every unforgettable
              moment is made possible by a dedicated team working behind the
              scenes to create the best competitive experience.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
            {TEAM.map((member) => (
              <MemberCard
                key={member.name}
                name={member.name}
                role={member.role}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}