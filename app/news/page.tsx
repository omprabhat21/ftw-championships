import PageLayout from "@/components/pagelayout";
import PageHero from "@/components/common/PageHero";

export default function NewsPage() {
  return (
    <PageLayout
     
    >
      <PageHero
        current="News"
        title="LATEST NEWS"
        description="Announcements, updates and everything happening at FTW Championships."
      />

      <section className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-6 py-20">

        <div className="relative overflow-hidden rounded-[40px] border border-[#D4AF37]/20 bg-gradient-to-br from-[#D4AF37]/10 via-white/[0.03] to-transparent px-10 py-24 backdrop-blur-xl">

          {/* Glow */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,.18),transparent_70%)]" />

          <div className="relative text-center">

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.5em] text-[#D4AF37]">
              FTW Championships
            </p>

            <h2 className="text-3xl font-bold uppercase tracking-[0.25em] text-white">
              Season
            </h2>

            <h1 className="my-6 text-[9rem] font-black leading-none text-[#D4AF37] md:text-[14rem]">
              VIII
            </h1>

            <h3 className="text-5xl font-black uppercase text-white">
              Coming Soon
            </h3>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/60">
              A new season is approaching with bigger competition,
              exciting rewards, improved tournament experience,
              and unforgettable moments.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">

              <span className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white/80">
                New Season
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white/80">
                Bigger Prize Pool
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white/80">
                More Competition
              </span>

            </div>

          </div>

        </div>

      </section>
    </PageLayout>
  );
}