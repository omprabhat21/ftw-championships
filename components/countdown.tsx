export default function Countdown() {
  return (
    <section className="bg-[#0A0A0A] py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-[#D4AF37]/20 bg-white/[0.03] p-10 text-center shadow-[0_0_40px_rgba(212,175,55,0.08)] backdrop-blur-xl">

          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#D4AF37]">
            Season VIII
          </p>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Registration Opening Soon
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            The official registration date has not been announced yet.
            Once finalized, a live countdown and registration portal will
            appear here.
          </p>

          <div className="mt-10 inline-flex rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-6 py-3 text-sm font-medium text-[#D4AF37]">
            📢 Official announcement coming soon
          </div>

        </div>
      </div>
    </section>
  );
}