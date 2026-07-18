export default function Stats() {
  const stats = [
    {
      number: "7+",
      label: "Seasons",
    },
    {
      number: "500+",
      label: "Players",
    },
    {
      number: "1500+",
      label: "Matches",
    },
    {
      number: "10+",
      label: "Cities",
    },
  ];

  return (
    <section className="bg-[#0A0A0A] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37] hover:bg-white/[0.05]"
            >
              <h2 className="text-5xl font-bold text-[#D4AF37] transition group-hover:scale-110">
                {stat.number}
              </h2>

              <p className="mt-4 uppercase tracking-[0.3em] text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}