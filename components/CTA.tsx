"use client";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_70%)]" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        {/* Small Label */}
        <p className="mb-4 text-sm uppercase tracking-[0.5em] text-[#D4AF37]">
          FTW CHAMPIONSHIPS
        </p>

        {/* Heading */}
        <h2 className="text-5xl font-black uppercase tracking-wide text-white md:text-6xl">
          READY FOR GLORY?
        </h2>

        {/* Divider */}
        <div className="my-8 h-px w-40 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

        {/* Subtitle */}
        <p className="max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
          Every champion starts somewhere. Compete against the best FC Mobile
          players, climb the rankings, and carve your legacy in FTW
          Championships.
        </p>

        {/* Button */}
        <button
          className="mt-12 rounded-xl bg-[#D4AF37] px-10 py-4 text-lg font-bold uppercase tracking-wide text-black
          transition-all duration-300 hover:scale-105 hover:bg-yellow-400
          hover:shadow-[0_0_35px_rgba(212,175,55,0.45)]"
        >
          Register Now
        </button>
      </div>
    </section>
  );
}